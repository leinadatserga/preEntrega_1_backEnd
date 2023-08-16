import express from "express";
import routerProd from './routes/products.routes.js';
import routerCart from './routes/carts.routes.js';
import { __dirname } from "./path.js";
const PORT = 8080
const app = express ();
app.use ( express.urlencoded ({ extended: true }));
app.use ( express.json ());
app.use ( "/static", express.static ( __dirname + "/public" ));
app.use ( "/api/carts", routerCart);
app.use ( "/api/products", routerProd);
app.listen ( PORT, () => {
    console.log ( `Server on port ${ PORT }` );
});