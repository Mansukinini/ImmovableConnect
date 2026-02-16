import express from 'express';
import mssql from 'mssql';

const config = {
  user: 'sa',
  password: 'Aspire1234!@#$',
  server: 'localhost', // You can use 'localhost' or an IP address
  database: 'TestDB',
  options: {
    // This is often required for local development with self-signed certificates
    trustServerCertificate: true, 
  }
};

async function connectToSQL() {
  try {
    await mssql.connect(config);
    console.log('Connected to SQL Server! ✅');
    // You can now execute queries or other database operations here
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

// connectToSQL();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
