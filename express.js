import express from 'express';
import cors from 'cors';
import axios from "axios";
import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'stage'
});

app.post('/api/order', async (req, res) => {
    const { userId, totalPrice, tax, shoppingCart } = req.body;

    const query = `INSERT INTO orders (userId, totalPrice, tax, shoppingCart) VALUES ('${userId}', '${totalPrice}', '${tax}', '${JSON.stringify(shoppingCart)}')`;
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('An error occurred');
            return;
        }
    });

    res.json({ message: 'Order received' });
});

app.get('/api/orderhistory', async (req, res) => {
    const query = 'SELECT * FROM orders ORDER BY internalId DESC LIMIT 10;';
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('An error occurred');
            return;
        }
        res.json(results);
    })
});

app.post('/api/v2/domains/op/search', async (req, res) => {
    const { domainsArray } = req.body;
    
    const headers = {
        'Authorization': 'Basic f36a4c78c8b7f3782183cda40717f1d8e7d1981909fdd4c87c14e227548e11ed'
    }
    domainsArray.forEach(element => {
        if (!element.extension) {
            element.extension = 'nl';
        }
    });

    try {
        const response = await axios.post('https://dev.api.mintycloud.nl/api/v2/domains/op/search', domainsArray, { headers });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(8008, () => {
    console.log(`Server listening on port 8008`);
});
