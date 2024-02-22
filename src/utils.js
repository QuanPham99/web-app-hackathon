import bcrypt from 'bcryptjs';

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const hashPassword = async (password) => {
  const SALT_ROUNDS = 10;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  return hashedPassword;
};

export const validateHashedPassword = async (password, hashedPassword) => {
  try {
    const res = await bcrypt.compare(password, hashedPassword);
    return res;
  } catch (error) {
    throw error;
  }
};
