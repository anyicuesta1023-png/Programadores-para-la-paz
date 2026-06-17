const express = require('express');
const app = express();

// Middleware obligatorio para que Express pueda entender y procesar JSON en el req.body
app.use(express.json());

// Ruta para la Pregunta 6 y 7: Registro básico de usuarios
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta para la Pregunta 8: Simulación de incidencias ciudadanas
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});