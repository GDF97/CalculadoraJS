function insert(num){
  var numero = document.getElementById('text-result').innerHTML;
  document.getElementById('text-result').innerHTML = numero + num;
}

function eraseAll(){
  document.getElementById('text-result').innerHTML = "";
}

function eraseOne(){
  var resultado = document.getElementById('text-result').innerHTML;
  document.getElementById('text-result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
  var resultado = document.getElementById('text-result').innerHTML;

  if(resultado){
      document.getElementById('text-result').innerHTML = eval(resultado);
  }
  else{
      document.getElementById('text-result').innerHTML = "Vazio";
  }
}


