module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/coffee1"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};