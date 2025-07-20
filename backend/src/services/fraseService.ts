import { prisma } from '../utils/prisma';
import { Mode } from '@prisma/client';

export function getFrasesByMode(mode: Mode) {
  return prisma.frase.findMany({ where: { mode } });
}
