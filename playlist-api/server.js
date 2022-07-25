const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb+srv://PrinceMargaret:whZqC2szDBhh5hGu@prince-cluster.pocnu.mongodb.net/playlist-api?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (err) => {
    console.log(err);
}
);

app.use(bodyParser.json());
app.use(cors());
app.use("/api", require('./routes/playListRoutes'));

let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);