const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { baseConfigs } = require('./config/dev');
const helloRoutes = require('./resources/routes')

const app = express();

app.use(cors());
app.use(morgan('dev'));


//ROUTES
app.use('/api/v1', helloRoutes);

const start = async () => {
  try {
    app.listen(baseConfigs.port, () => {
      console.log(`REST API RUNNING at port ${baseConfigs.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { start };