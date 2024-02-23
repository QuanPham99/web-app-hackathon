import { MongoClient } from 'mongodb';
import client from './client';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
const { ObjectId } = require('mongodb'); // Import the ObjectId constructor

export const getStudent = async ({ email }) => {
  try {
    await client.connect();

    const query = { email: email };

    const student = await client.db('User').collection('People').findOne(query);

    return { success: true, data: student };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const getStudentProject = async ({ _id }) => {
  try {
    await client.connect();
    const project = client
      .db('User')
      .collection('Projects')
      .find({ students_list: { $in: [_id] } });

    const data = await project.toArray();

    console.log('==== data', data);
    return { success: true, data: data };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const getAllStudents = async () => {
  try {
    await client.connect();

    const query = { role: 'stud' };

    const options = {};

    const students = client
      .db('User')
      .collection('People')
      .find(query, options);

    const data = await students.toArray();
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};
