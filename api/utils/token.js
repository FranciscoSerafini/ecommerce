import jwt from 'jsonwebtoken';

export const generateToekn = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRECT, { expiresIn: "30d" })
}

