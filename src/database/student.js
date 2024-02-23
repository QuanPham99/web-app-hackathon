import { MongoClient } from 'mongodb';
import client from './client';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
const { ObjectId } = require('mongodb'); // Import the ObjectId constructor

export const getStudent = async ({ email }) => {
    try {
        await client.connect();

        const query = { email : email };
        
        const student = await client
            .db('User')
            .collection("People")
            .findOne(query);

        return { success: true, data: student};
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
            .find(
                {'students_list': {$in: [new ObjectId(_id)]}}
            );

            return { success: true, data: project};
        } catch (error) {
            return { success: false, error };
        } finally {
            await client.close();
        }
};