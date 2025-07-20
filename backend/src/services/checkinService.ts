import { prisma } from '../utils/prisma';
import { Mode } from '@prisma/client';

export function getMyCheckIns(userId: string) {
  return prisma.checkIn.findMany({ where: { userId } });
}

export function createTodayCheckIn(userId: string, payload: { mode: Mode; phrase?: string }) {
  return prisma.checkIn.create({ data: { userId, mode: payload.mode, phrase: payload.phrase } });
}
