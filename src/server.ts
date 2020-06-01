import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de users');
    

    response.json([
        'Cleria',
        'João',
        'Gui',
        'Opa',
        'Massa'
    ]);
});

app.listen(3333);