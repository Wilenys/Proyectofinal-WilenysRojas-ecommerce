export const handleNotFound = (req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
};
