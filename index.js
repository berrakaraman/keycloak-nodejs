const express = require("express");
const session = require("express-session");
const Keycloak = require("keycloak-connect");

const app = express();
const memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

const keycloak = new Keycloak({ store: memoryStore });

app.use(keycloak.middleware());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/protected", keycloak.protect(), (req, res) => {
  res.send("This is a protected route. BK");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
