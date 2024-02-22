import { MongoClient } from 'mongodb';
import client from './client';

export const getStudent = async ({ username = 'phamquan'}) => {
    try {
        await client.connect();

        const query = { username : username};
        
        const options = { }

        const student = client
            .db('User')
            .collection("People")
            .find(query, options);

        const data = await student.toArray();
        return { success: true, data: data};
    } catch (error) {
        return { success: false, error };
    } finally {
        await client.close();
    }
};