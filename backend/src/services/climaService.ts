import { prisma } from '../utils/prisma';

export async function getTeamClima(teamId: string) {
  const result = await prisma.checkIn.groupBy({
    by: ['mode'],
    _count: true,
    where: { user: { teamId } }
  });
  return result;
}
