import fastify from "fastify";

const app = fastify();

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP server is Running on PORT 3333!");
});
