import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

export function signJwt(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: '30d' });
}

export function verifyJwt<T>(token: string): T {
  return jwt.verify(token, SECRET) as T;
}
