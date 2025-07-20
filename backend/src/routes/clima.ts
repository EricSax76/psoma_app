import { FastifyInstance } from 'fastify';
import { getTeamClima } from '../services/climaService';

export default async function climaRoutes(app: FastifyInstance) {
  app.get('/team', async (request, reply) => {
    const teamId = (request.user as any).teamId;
    const clima = await getTeamClima(teamId);
    reply.send(clima);
  });
}
