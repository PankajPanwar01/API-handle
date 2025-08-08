import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Table Wooden',
            price: 200,
            image: 'https://example.com/images/table.jpg'
        },
        {
            id: 2,
            name: 'Office Chair',
            price: 150,
            image: 'https://example.com/images/chair.jpg'
        },
        {
            id: 3,
            name: 'Bookshelf',
            price: 300,
            image: 'https://example.com/images/bookshelf.jpg'
        },
        {
            id: 4,
            name: 'Sofa Set',
            price: 800,
            image: 'https://example.com/images/sofa.jpg'
        },
        {
            id: 5,
            name: 'Dining Table',
            price: 500,
            image: 'https://example.com/images/dining-table.jpg'
        }
    ];

    // http://localhost:3000/api/products?search=name

    if (req.query.search) {
        const filterProducts = products.filter(products => products.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products);
    }, 3000)
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})