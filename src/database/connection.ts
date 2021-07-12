import knex from 'knex';
import path from 'path';

const connection = knex({
    client:'pg',
    connection:process.env.DATABASE_URL,
    useNullAsDefault:true,

})

export default connection;

