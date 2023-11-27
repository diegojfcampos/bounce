const app = require("./src/app");
const port = 3002; 

try {
  app.listen(port, () => {
    console.log(
      `SERVER RUNNING => http://50.17.134.49:3002/api/country/get/ireland`
    );
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
