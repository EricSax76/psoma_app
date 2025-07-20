import { prisma } from '../utils/prisma';
import { signJwt } from '../utils/jwt';
import { v4 as uuid } from 'uuid';

export async function createAnonUser() {
  const user = await prisma.user.create({
    data: { isAnonymous: true }
  });
  const token = signJwt({ userId: user.id, isAnonymous: true });
  return { user, token };
}

export async function login(payload: { email: string }) {
  const user = await prisma.user.findUnique({ where: { email: payload.email } });
  if (!user) throw new Error('Invalid credentials');
  return signJwt({ userId: user.id, isAnonymous: false });
}

export async function register(payload: { email: string }) {
  const user = await prisma.user.create({
    data: { email: payload.email, isAnonymous: false }
  });
  return signJwt({ userId: user.id, isAnonymous: false });
}
