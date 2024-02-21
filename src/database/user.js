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
