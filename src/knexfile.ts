import path from 'path';
module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename:path.resolve(__dirname,'database','database.sqlite')
    },
    debug:true,
    useNullAsDefault:true
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: "./database/seeds",
    },
  }

};
