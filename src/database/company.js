import { MongoClient } from "mongodb";
import client from "./client";

export const getProjectsByCompany = async ({ company_id }) => {
  try {
    await client.connect();

    const query = { company_id: company_id };

    // Other options for sorting and filter
    const options = { sort: { data_posted: -1 } };

    const projects = client
      .db("User")
      .collection("Projects")
      .find(query, options);

    const data = await projects.toArray();
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const addProject = async (projectinfo) => {
  try {
    await client.connect();

    // Other options for sorting and filter
    // const options = { sort: { data_posted: -1 } };
    await client.db("User").collection("Projects").insertOne(projectinfo);

    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};
