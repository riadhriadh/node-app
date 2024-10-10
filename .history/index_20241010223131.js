const express= require('express');

//init app
const PORT=4000;
const app = express()

app.listen(PORT,()=> console.log('port is run',PORT));