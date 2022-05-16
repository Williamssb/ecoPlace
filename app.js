
//Se importan las líbrerías a utilizar
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");

const homeRoute = require("./routes/main");
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const apiRoutesProducts = require("./routes/api/apiProducts");
const apiRoutesUsers = require("./routes/api/apiUsers");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.use(
  session({
    secret: "Palabra secreta",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use(methodOverride("_method"));

// Se deja abierta al público la carpeta public
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Se carga el servidor en el localhost:3000
app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));

// Motor de plantillas
app.set("view engine", "ejs");

// routes
app.use(homeRoute);

app.use(productsRoute);

app.use(usersRoute);

app.use("/api",apiRoutesProducts);
app.use("/api",apiRoutesUsers);