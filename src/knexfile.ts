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
    connection:process.env.DATABASE_URL,
    migrations: {
      directory:'./database/migrations',
    }
  }

};
