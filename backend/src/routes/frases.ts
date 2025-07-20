import { FastifyInstance } from 'fastify';
import { getFrasesByMode } from '../services/fraseService';

export default async function frasesRoutes(app: FastifyInstance) {
  app.get('/modo/:modo', async (request, reply) => {
    const { modo } = request.params as any;
    const frases = await getFrasesByMode(modo);
    reply.send(frases);
  });
}
