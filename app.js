// app.js – Backend-Grundstruktur

const express = require('express');
const app = express();
const path = require('path');

// Port, auf dem der Server läuft
const PORT = process.env.PORT || 3000;

// Middleware: Erlaubt Zugriff auf public-Dateien
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Startseite (optional, falls nicht statisch)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Beispielroute für API (z. B. für späteres Login/Shop)
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server läuft ✅' });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});
