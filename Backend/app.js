const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const matrix = [[], [], [], [], [], [], []];
var cors = require('cors')
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'mysql-mintic.alwaysdata.net',
  user     : 'mintic_coordinad',
  password : 'coordinadora123',
  database : 'mintic_prueba'
});

app.use(bodyParser.json());
app.use(cors())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/api/cow/add', (req, res) => {
  matrix[req.body.dia-1][req.body.vaca-1] = req.body.leche;
  res.send('ok');
});

app.get('/api/cow/results', (req , res) => {
  res.send({matix : this.matix , total: sumaDiario() , max: maxProduction(sumaDiario()) , perDay: comparatePerDay()});
});

app.post('/api/piedra-papel', (req , res) => {
  var machineHand = getRandomHand();
  var hand = req.body.value;
  var result = calculateWiner(machineHand, hand);
  res.send({machineHand: machineHand, hand: hand, result: result});
});

app.get('/api/ahorcado', (req , res) => {
  connection.query('SELECT WORD FROM WORD ORDER BY RAND() LIMIT 1', function (error, results, fields) {
    if (error) throw error;
    res.send(results[0]);
  }
  );
});

app.get('/api/Score', (req , res) => {
  connection.query('SELECT * FROM `WINNERS` ORDER by 2 DESC LIMIT 10;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  }
  );
});

app.post('/api/player/add', (req , res) => {
  console.log(req.body);
  jugador = req.body.name;
  console.log(jugador);
});

app.post('/api/player', (req, res) => {
  console.log(req.body);
  connection.query('INSERT INTO WINNERS (NAME , SCORE) VALUES ("'+req.body.name+'", '+ req.body.score + ')', function (error, results, fields) {
    if (error) throw error;
    res.send('ok');
  }
  );
});

function calculateWiner(machineHand, hand){
  if(machineHand == hand){
    return "Empate";
  }else if(machineHand == "piedra"){
    if(hand == "papel"){
      return "Ganaste";
    }else{
      return "Perdiste";
    }
  }else if(machineHand == "papel"){
    if(hand == "tijera"){
      return "Ganaste";
    }else{
      return "Perdiste";
    }
  }else{
    if(hand == "piedra"){
      return "Ganaste";
    }else{
      return "Perdiste";
    }
  }
}

function getRandomHand() {
  let hand =  Math.floor(Math.random() * 3);
  if(hand == 0){
    return "piedra";
  }else if(hand == 1){
    return "papel";
  }else{
    return "tijera";
  }
}

function sumaDiario(){
  var suma = 0;
  var dia = 0;
  var total = [];
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      suma += matrix[i][j];
    }
    total[dia] = ("Dia " + (dia+1) + ": " + suma);
    dia++;
    suma = 0;
  }
  return total;
}

function maxProduction(total){
  var totalRes = [];
  let max = 0;
  let min = 100;
  for(var i = 0; i < total.length; i++){
    var num = total[i].split(": ")[1];
    if(Number(num) > Number(max)){
      max = num;
    }
    if(Number(num) < Number(min)){
      min = num;
    }
  }
  totalRes[0] = comparateDays(total, max);
  totalRes[1] = comparateDays(total, min);
  return totalRes;
}

function comparateDays(total , number){
  var totalRes = [];
  var count =0;
  for(var i = 0; i < total.length; i++){
    var num = total[i].split(": ")[1];
    if(Number(num) == Number(number)){
      totalRes[count] = total[i];
      count ++;
    }
  }
  return totalRes;
}

function comparatePerDay(){
  var totalRes = [];
  for(var i = 0; i < matrix.length; i++){
    var max = 0 ;
    for(var j = 0; j <matrix[i].length; j++){
        if(matrix[i][j] > max ){
          max = matrix[i][j];
        }
    }
    totalRes[i]= max;
  }
  return seachCow(totalRes);
}

function seachCow(daily){
  var totalRes = [];
  for(var i = 0; i < matrix.length; i++){
    var res = [];
    let count = 0;
    for(var j = 0; j <matrix[i].length; j++){   
        if( daily[i] == matrix[i][j] ){
            res[count] = "Vaca " +(j+1);
            count++;
        }
    }
    totalRes[i]= res;
  }
  return totalRes;
}
