import client from './client';

export const getUser = async (email) => {
  try {
    await client.connect();

    const query = { email: email };

    const user = await client.db('User').collection('People').findOne(query);

    return user;
  } finally {
    await client.close();
  }
};

export const registerUser = async (userInfo) => {
  try {
    await client.connect();

    await client.db('User').collection('People').insertOne(userInfo);

    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};
