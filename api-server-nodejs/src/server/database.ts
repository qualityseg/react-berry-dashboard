import sqlite3 from 'sqlite3';
/* eslint-disable import/no-mutable-exports */
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

import ActiveSession from '../models/activeSession';
import User from '../models/user';

if (!process.env.SQLITE_PATH) {
  throw new Error('SQLITE_PATH environment variable is not set.');
}

const options: ConnectionOptions = {
  type: 'sqlite',
  database: process.env.SQLITE_PATH,
  entities: [User, ActiveSession],
  logging: true,
};

export const db = {
  getConnection: () => connection
};

export let connection: Connection;

export const connect = async (): Promise<Connection> => {
  try {
    connection = await createConnection(options);
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error(error);
  }

  return connection;
}

export const PrepareDB = () => new sqlite3.Database(':memory:');
