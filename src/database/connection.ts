import knex from 'knex';
import path from 'path';

const connection = knex({
    client:'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      },
    useNullAsDefault:true,

})

export default connection;

