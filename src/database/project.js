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

    // Other options for sorting and filter
    const options = { sort: { data_posted: -1 }, ...queryOptions };

    const pipeline = [
      {
        // Match all documents in the Projects collection
        $match: {
          status: status,
          ...(company_id && { company_id }),
          ...(professor_id && { professor_id }),
        },
      },
      {
        // Convert company_id field from string to ObjectId
        $addFields: {
          company_id_obj: { $toObjectId: '$company_id' },
          num_students: { $size: { $ifNull: ['$students_list', []] } },
        },
      },
      {
        // Perform a lookup to retrieve company information based on company_id
        $lookup: {
          from: 'People', // Name of the Companies collection
          localField: 'company_id_obj',
          foreignField: '_id',
          as: 'company',
        },
      },
    ];

    const cursor = client.db('User').collection('Projects').aggregate(pipeline);
    const data = await cursor.toArray();

    // Iterate over the cursor and log project names and associated company names
    data.forEach((project) => {
      const companyName =
        project.company.length > 0
          ? project.company[0].company_name
          : 'Unknown';
      // console.log(`Project: ${project.title}, Company: ${companyName}`);
    });
    return { success: true, data: data };
  } catch (error) {
    console.error('Error retrieving projects:', error);
    return { success: false, error };
  } finally {
    // Close the connection
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

// export const getAllProjects = async ({ status = 'posted' }) => {
//   try {
//     await client.connect();

//     const query = { status: status };

//     // Other options for sorting and filter
//     const options = { sort: { data_posted: -1 } };

//     const projects = client
//       .db('User')
//       .collection('Projects')
//       .find(query, options);

//     const data = await projects.toArray();
//     return { success: true, data: data };
//   } catch (error) {
//     return { success: false, error };
//   } finally {
//     await client.close();
//   }
// };

export const updateStudentAssignment = async (project_id, student_ids) => {
  try {
    await client.connect();

    console.log('ids', student_ids);
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
