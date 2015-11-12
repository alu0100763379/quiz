var AbstractQuiz = require('./abstract_quiz_model.js');
var debug = require('debug');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },
    { pregunta: '¿Qué animal tiene en su nombre las cinco vocales?',
      respuesta: function(x) {
        return (/^\s*murci[eé]lago\s*$/i).exec(x);
      }
    },
    { pregunta: 'Si me nombras desaparezco. ¿Qué soy?',
      respuesta: function(x) {
        return (/^\s*silencio\s*$/i).exec(x);
      }
    },
    { pregunta: 'Si: 111 = 13, 112 = 24, 113 = 35, 114 = 46. Entonces 115 = ?',
      respuesta: function(x) {
        return (/^\s*57\s*$/i).exec(x);
      }
    },
    { pregunta: 'No estoy vivo pero crezco. No tengo pulmones pero necesito el aire. No tengo boca pero el agua me mata. ¿Qué soy?',
      respuesta: function(x) {
        return (/^\s*fuego\s*$/i).exec(x);
    }
    },
    { pregunta: '¿Cuántos años tiene un lustro?',
      respuesta: function(x) {
        return (/^\s*5\s*$/i).exec(x);
    }
    },
    { pregunta: '¿Cómo se llama el lugar rodeado de tres cuerdas donde pelean los boxeadores?',
      respuesta: function(x) {
        return (/^\s*ring\s*$/i).exec(x);
    }
    },
    { pregunta: '¿Cuál es el color que representa la esperanza?',
      respuesta: function(x) {
        return (/^\s*verde\s*$/i).exec(x);
    }
    },
    { pregunta: '¿Qué cantidad de huesos tiene en total el ser humano?',
      respuesta: function(x) {
        return (/^\s*206\s*$/i).exec(x);
    }
    },
    {
      pregunta: '¿Quién reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
    }
  );
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<1;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      debug("n2 = "+n2);
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+"= ?",
          respuesta: function(x) {
            debug("n1 = "+n1);
            debug("n2 = "+n2);
            return (x == n1*n2);
        }
      })
    })();
  }
  debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.pregunta_num = function() {
  return this.q.length;
}

Quiz.prototype.get_question = function(x){
  return this.q[x]['pregunta'];
}
module.exports = Quiz;