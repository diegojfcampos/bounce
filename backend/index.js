const app = require("./src/app");
const port = 3002;

try {
  app.listen(port, () => {
    console.log(
      `SERVER RUNNING`
    );
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
