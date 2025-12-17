// server.js
// Entry point del servicio PREDICT
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const predictRoutes = require("./routes/predictRoutes");
const { initModel } = require("./services/tfModelService");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

// conectar a Mongo
mongoose
  .connect(MONGO_URI)
  .then(() => {console.log("MongoDB conectado (PREDICT)")})
  .catch((err) => {
    console.error("Error al conectar MongoDB:", err);
    process.exit(1);
  });

app.use(express.json());

// Servir la carpeta del modelo TFJS (model/model.json + pesos)
const modelDir = path.resolve(__dirname, "model");
app.use("/model", express.static(modelDir));


app.use("/", predictRoutes);


app.listen(PORT, async () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`PREDICT escuchando en ${serverUrl}`);

  try {
    // Inicializa el modelo predictivo
    await initModel(serverUrl);
    console.log(" Modelo predictivo cargado correctamente.");
  } catch (err) {
    console.error("Error al inicializar el modelo predictivo:", err);
    process.exit(1);
  }
});
