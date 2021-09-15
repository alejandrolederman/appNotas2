const fs = require('fs');
let rawdata = fs.readFileSync('tareas.json');
let tareas = JSON.parse(rawdata);
module.exports = (tareas);