
function startaquizen(){
	document.getElementById('startbtn');
	$('.collapse').collapse()
}


$('.startbtn').click(function(){
	$(".startbtn").hide();
});





function rätta(){

  var fråga1 = document.quiz.fråga1.value;
  var fråga2 = document.quiz.fråga2.value;
  var fråga3 = document.quiz.fråga3.value;
  var fråga4 = document.quiz.fråga4.value;
  var fråga5 = document.quiz.fråga5.value;
  var fråga6 = document.quiz.fråga6.value;
  var fråga7 = document.quiz.fråga7.value;
  var fråga8 = document.quiz.fråga8.value;
  var fråga9 = document.quiz.fråga9.value;
  var fråga10 = document.quiz.fråga10.value;
  var rätt = 0;

  if (fråga1 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f1');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f1');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f1');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f1');
    wrong.classList.add('wrong');
  }

  if (fråga2 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f2');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f2');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f2');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f2');
    wrong.classList.add('wrong');
  }

  if (fråga3 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f3');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f3');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f3');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f3');
    wrong.classList.add('wrong');
  }

  if (fråga4 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f4');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f4');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f4');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f4');
    wrong.classList.add('wrong');
  }

  if (fråga5 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f5');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f5');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f5');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f5');
    wrong.classList.add('wrong');
  }

  if (fråga6 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f6');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f6');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f6');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f6');
    wrong.classList.add('wrong');
  }

  if (fråga7 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f7');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f7');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f7');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f7');
    wrong.classList.add('wrong');
  }

  if (fråga8 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f8');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f8');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f8');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f8');
    wrong.classList.add('wrong');
  }

  if (fråga9 == "Waluigi"){
    rätt++;

    var fix = document.getElementById('f9');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f9');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f9');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f9');
    wrong.classList.add('wrong');
  }

  if (fråga10 == "Frippe"){
    rätt++;

    var fix = document.getElementById('f10');
    fix.classList.remove('wrong');

    var correct = document.getElementById('f10');
    correct.classList.add('correct');

  } else{
    var fix = document.getElementById('f10');
    fix.classList.remove('correct');

    var wrong = document.getElementById('f10');
    wrong.classList.add('wrong');
  }

  var bedömningar = ["Bra jobbat!", "Helt okej!", "Bättre kan du!"];

  var olika;

  if(rätt < 4) {
    olika = 2;
  }
  if(rätt > 3 && rätt < 9){
    olika = 1;
  }
  if(rätt > 8){
    olika = 0;
  }

  


  document.getElementById('resultat').style.display="block";
  document.getElementById('antal_rätt').innerHTML = "Du fick " + rätt + " rätt utav 10!";
  document.getElementById('bedöm').innerHTML = bedömningar[olika];


}