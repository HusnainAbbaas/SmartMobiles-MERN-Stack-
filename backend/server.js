const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handling  uncaught exceptions

process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`shutting down server due to uncaught exception`);
  process.exit(1);
});

// config environment variables path
dotenv.config({ path: "backend/config/config.env" });

// run database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

////////unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down server due to unhandled exception`);

  server.close(() => {
    process.exit(1);
  });
});
