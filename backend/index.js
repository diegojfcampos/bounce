const app = require("./src/app");
const port = 3001;

try {
  app.listen(port, () => {
    console.log(
      `SERVER RUNNING => CHECK ENDPOINTS ON http://localhost:${port}/api/documentation`
    );
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
