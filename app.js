 const express = require('express');
const app = express();

// Datos del servicio en formato JSON
const serviceData =  {
  "rucardona16@gmail.com": {
    "847e318c098c40ed1b7a496c1f7734eb@qa-app.claus.co": [
      {
        "_id": "618bee22001d8f3564105f48",
        "company": "000000005058",
        "document": "000000000293",
        "targetEmail": "rucardona16@gmail.com",
        "mailgunId": "847e318c098c40ed1b7a496c1f7734eb@qa-app.claus.co",
        "typeEvent": "opened",
        "date": "2021-11-10T16:06:58.877Z",
        "createdAt": "2021-11-10T16:06:58.879Z",
        "updatedAt": "2021-11-10T16:06:58.879Z",
        "__v": 0
      }
    ],
    "e975dbb6cb046fce61a2b7fab5a1fde5@qa-app.claus.co": [
    {
        "_id": "61775538fb58786180e0bdd5",
        "company": "000000005058",
        "document": "000000000293",
        "targetEmail": "rucardona16@gmail.com",
        "mailgunId": "e975dbb6cb046fce61a2b7fab5a1fde5@qa-app.claus.co",
        "typeEvent": "delivered",
        "date": "2021-10-26T01:09:12.385Z",
        "createdAt": "2021-10-26T01:09:12.386Z",
        "updatedAt": "2021-10-26T01:09:12.386Z",
        "__v": 0
    }
    ]
},
"rucardona@gmail.com": {
    "947e318c098c40ed1b7a496c1f7734eb@qa-app.claus.co": [
    {
        "_id": "618bee80001d8f3564105f49",
        "company": "000000005058",
        "document": "000000000294",
        "targetEmail": "rucardona@gmail.com",
        "mailgunId": "947e318c098c40ed1b7a496c1f7734eb@qa-app.claus.co",
        "typeEvent": "opened",
        "date": "2021-11-10T16:08:32.109Z",
        "createdAt": "2021-11-10T16:08:32.110Z",
        "updatedAt": "2021-11-10T16:08:32.110Z",
        "__v": 0
    }
    ]
  },
  "test@gmail.com": {
    "647e318c098c40ed1b7a496c1f7734eb@qa-app.claus.co": [
    {
        "_id": "618beeae001d8f3564105f4a",
        "company": "000000005058",
        "document": "000000000294",
        "targetEmail": "test@gmail.com",
        "mailgunId": "647e318c098c40ed1b7a496c1f7734eb@qa-app.claus.co",
        "typeEvent": "opened",
        "date": "2021-11-10T16:09:18.855Z",
        "createdAt": "2021-11-10T16:09:18.856Z",
        "updatedAt": "2021-11-10T16:09:18.856Z",
        "__v": 0
      }
    ]
  }
};

// Endpoint para obtener la información filtrada por correo electrónico
app.get('/api/data', (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ error: 'Falta el parámetro de correo electrónico' });
  }

  // Filtrar la información por correo electrónico
const data = serviceData[email];
if (!data) {
return res.status(404).json({ error: 'Correo electrónico no encontrado' });
}

  // Obtener el último registro de cada typeEvent
const filteredData = {};
for (const key in data) {
    const events = data[key];
    const lastEvent = events[events.length - 1];
    filteredData[key] = lastEvent;
}

res.json(filteredData);
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
console.log(`Servidor API corriendo en http://localhost:${port}`);
});
