import { FastifyInstance } from 'fastify';
import { getMyCheckIns, createTodayCheckIn } from '../services/checkinService';

export default async function checkinRoutes(app: FastifyInstance) {
  app.get('/me', async (request, reply) => {
    const userId = (request.user as any).id;
    const checkins = await getMyCheckIns(userId);
    reply.send(checkins);
  });

  app.post('/', async (request, reply) => {
    const userId = (request.user as any).id;
    const checkin = await createTodayCheckIn(userId, request.body as any);
    reply.send(checkin);
  });
}
