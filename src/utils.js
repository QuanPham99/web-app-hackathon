import bcrypt from 'bcryptjs';

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const hashPassword = async (password) => {
  const SALT_ROUNDS = 10;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  return hashedPassword;
};

export const validateHasedPassword = async (password, hashedPassword) => {
  bcrypt.compare(password, hashedPassword, function (err, isMatch) {
    if (err) throw err;

    return isMatch;
  });
};
