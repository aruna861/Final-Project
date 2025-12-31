const sql = require('mssql');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// YOUR MS SQL CONNECTION DETAILS
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost', // or your server IP
    database: 'TechGalaxyDB',
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};

// Route to Save User (Matches your User @table)
app.post('/api/save-user', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const { username, email, firstName } = req.body;
        
        await pool.request()
            .input('username', sql.NVarChar, username)
            .input('email', sql.NVarChar, email)
            .input('firstName', sql.NVarChar, firstName)
            .query('INSERT INTO Users (username, email, firstName, createdAt) VALUES (@username, @email, @firstName, GETDATE())');
            
        res.status(200).send({ message: "User Saved to MS SQL!" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));