import pkg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { logger } from './logger.js';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const { Pool } = pkg;
// 1. Membuat connection pool lewat driver 'pg' asli Node.js
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Membungkus pool ke dalam Adapter milik Prisma 7
const adapter = new PrismaPg(pool);

export const prismaClient = new PrismaClient({
    adapter,
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "stdout",
      level: "error",
    },
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
});

prismaClient.$on("error", (e) => {
  logger.error(e);
});

prismaClient.$on("warn", (e) => {
  logger.warn(e);
});

prismaClient.$on("info", (e) => {
  logger.info(e);
});

prismaClient.$on("query", (e) => {
  logger.info(e);
});
