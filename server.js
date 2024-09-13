import express from "express";
import kontenRoutes from "./src/routes/konten-route.js";
import "dotenv/config";

const app = express();
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

app.use(express.json());
app.use("/api/konten", kontenRoutes);

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
