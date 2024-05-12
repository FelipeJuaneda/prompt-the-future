import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});

app.get("/", (request, response) => {
  return response.status(200).send("Bienvenidos!");
});
