/**
 * Helper functions for Project Entities
 */
import client from './client';
import { ObjectId } from 'mongodb';

export const getAllProjects = async ({
  status = 'posted',
  company_id,
  professor_id,
  queryOptions,
}) => {
  try {
    await client.connect();

    const query = {
      status,
      ...(company_id && { company_id }),
      ...(professor_id && { professor_id }),
    };

    // Other options for sorting and filter
    const options = { sort: { data_posted: -1 }, ...queryOptions };

    const projects = client
      .db('User')
      .collection('Projects')
      .find(query, options);

    const data = await projects.toArray();
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const acceptProject = async (
  project_id,
  professor_id,
  date_accepted
) => {
  try {
    await client.connect();

    // Other options for sorting and filter
    // const options = { sort: { data_posted: -1 } };
    const res = await client
      .db('User')
      .collection('Projects')
      .updateOne(
        { _id: new ObjectId(project_id) },
        {
          $set: {
            professor_id: professor_id,
            status: 'accepted',
            date_accepted,
          },
          $currentDate: { lastModified: true },
        }
      );
    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const deleteProject = async (project_id) => {
  try {
    await client.connect();

    // Other options for sorting and filter
    // const options = { sort: { data_posted: -1 } };
    await client
      .db('User')
      .collection('Projects')
      .deleteOne({ _id: new ObjectId(project_id) });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const updateStudentAssignment = async (project_id, student_ids) => {
  try {
    await client.connect();

    // Other options for sorting and filter
    // const options = { sort: { data_posted: -1 } };
    const res = await client
      .db('User')
      .collection('Projects')
      .updateOne(
        { _id: new ObjectId(project_id) },
        {
          $set: {
            students_list: student_ids,
          },
          $currentDate: { lastModified: true },
        }
      );
    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};
