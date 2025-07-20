import { FastifyInstance } from 'fastify';
import { createAnonUser, login, register } from '../services/authService';

export default async function authRoutes(app: FastifyInstance) {
  app.post('/anon', async (request, reply) => {
    const user = await createAnonUser();
    reply.send(user);
  });

  app.post('/login', async (request, reply) => {
    const token = await login(request.body as any);
    reply.send({ token });
  });

  app.post('/register', async (request, reply) => {
    const token = await register(request.body as any);
    reply.send({ token });
  });
}
