require("ts-node/register");
import Database from "./config/database";
import App from "./app";
import Routes from "./routes";

const routes = new Routes();
const database = new Database();
const app = new App(routes, database);
app.run();
