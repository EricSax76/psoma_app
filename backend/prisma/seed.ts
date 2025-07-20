import { prisma } from '../src/utils/prisma';

async function main() {
  await prisma.frase.createMany({
    data: [
      { mode: 'FLUJO', content: 'Hoy fluyo con todo.' },
      { mode: 'VEGETAL', content: 'Hoy solo respiro.' }
    ]
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
