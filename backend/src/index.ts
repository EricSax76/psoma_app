import fastify from 'fastify';
import authRoutes from './routes/auth';
import checkinRoutes from './routes/checkin';
import climaRoutes from './routes/clima';
import frasesRoutes from './routes/frases';
import { authMiddleware } from './middlewares/auth';

const app = fastify({ logger: true });

app.register(authRoutes, { prefix: '/auth' });
app.register(checkinRoutes, { prefix: '/checkin', preHandler: authMiddleware });
app.register(climaRoutes, { prefix: '/clima', preHandler: authMiddleware });
app.register(frasesRoutes, { prefix: '/frases' });

const start = async () => {
  try {
    await app.listen({ port: Number(process.env.PORT) || 3001, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
