import { FastifyRequest, FastifyReply } from 'fastify';
import { verifyJwt } from '../utils/jwt';

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
  const token = request.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    reply.status(401).send({ error: 'Unauthorized' });
    return;
  }
  try {
    const payload = verifyJwt(token);
    (request as any).user = payload;
  } catch (err) {
    reply.status(401).send({ error: 'Invalid token' });
  }
}
