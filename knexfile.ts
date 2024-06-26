import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    },
    pool: {
      min: 2,  // Minimal jumlah koneksi dalam pool
      max: 10, // Maksimal jumlah koneksi dalam pool
      idleTimeoutMillis: 30000,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_TEST_HOST || process.env.PGHOST,
      user: process.env.DB_TEST_USER || process.env.PGUSER,
      password: process.env.DB_TEST_PASSWORD || process.env.PGPASSWORD,
      database: process.env.DB_TEST_DATABASE || process.env.PGDATABASE,
    },
    pool: {
      min: 2,
      max: 10,
      idleTimeoutMillis: 30000,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    },
    pool: {
      min: 2,
      max: 10,
      idleTimeoutMillis: 30000,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};

export default knexConfig;
