const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();



app.use(bodyParser.json());

// SQL Server bağlantı bilgileri
const config = {
  server: 'DERYA\\SQLEXPRESS', // IP veya host adı
  database: 'mobilProgramlama'
};

// SQL Server'a bağlan
sql.connect(config, err => {
  if (err) {
    console.error('SQL Server connection error:', err);
    return;
  }
  console.log('Connected to SQL Server...');
});

// POST endpointi
app.post('/add-item', (req, res) => {
  const itemName = req.body.item;
  if (!itemName) {
    return res.status(400).json({ error: 'Item name is required' });
  }
  
  // SQL sorgusu oluştur
  const request = new sql.Request();
  request.query(`INSERT INTO items (name) VALUES ('${itemName}')`, (err, result) => {
    if (err) {
      console.error('SQL query error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Item added successfully' });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
