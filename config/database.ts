const fs = require("fs");

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", process.env.DATABASE_URL),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD),
      // ssl: env.bool("DATABASE_SSL", false),
      ssl: {
        ca: fs.readFileSync(`${__dirname}/../../prod-ca-2021.crt`).toString(),
      },
    },
  },
});
