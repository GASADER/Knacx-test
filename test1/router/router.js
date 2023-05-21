import UserRouter from "./users.router.js"

function routers(app) {
  app.get("/", (req, res) => {res.send("Test API")});
  app.use("/users", UserRouter)
}
export default routers;

