const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));
app.use('/sounds', express.static(path.join(__dirname, 'sounds')));

// Main route - serve the game
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check route
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'NPC Therapy Game is running' });
});

// Serve NPC data as JSON endpoint
app.get('/api/npcs', (req, res) => {
    res.sendFile(path.join(__dirname, 'npc-data.js'));
});

app.listen(PORT, () => {
    console.log(`🎮 NPC Therapy Game is running on http://localhost:${PORT}`);
    console.log(`📱 Open your browser and go to: http://localhost:${PORT}`);
    console.log(`🎭 Ready to help digital beings with their existential crises!`);
});