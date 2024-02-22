/**
 * Helper functions for Project Entities
 */
import client from './client';

export const getAllProjects = async ({ status = 'posted' }) => {
  try {
    await client.connect();

    const query = { status: status };

    // Other options for sorting and filter
    const options = { sort: { data_posted: -1 } };

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
export const acceptProject = async (project_id, professor_id) => {
  try {
    await client.connect();

    // Other options for sorting and filter
    // const options = { sort: { data_posted: -1 } };
    await client
      .db('User')
      .collection('Projects')
      .updateOne(
        { id: project_id },
        {
          $set: { professor_id: professor_id, status: 'accepted' },
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
