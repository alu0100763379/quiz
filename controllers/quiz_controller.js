var Quiz = require('../models/quiz_model');

var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.index = function(req, res, next) {
  res.render('index', { title: 'Quiz' });
};

exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta });
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c})
};

exports.questions = function(req,res) {
  var num_question = quiz.pregunta_num();
  var array = new Array(num_question);

  for(var i=0; i<num_question; i++) {
    array[i] = ("Pregunta " + (i+1) + ": " + quiz.get_question(i));
  }

  res.render('quizes/questions', {prg: array})
};