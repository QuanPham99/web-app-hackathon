import { MongoClient } from 'mongodb';
import client from './client';

export const getStudent = async ({ username = 'phamquan'}) => {
    try {
        await client.connect();

        const query = { username : username };
        
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