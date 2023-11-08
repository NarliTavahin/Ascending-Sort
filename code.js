
 let button = document.getElementById('check');
 let resultDiv = document.getElementById('result');
 button.addEventListener("click", sortfunction);


function sortfunction(){
  event.preventDefault();
  let num=new Array();

  num[0]=document.getElementById("first").value;
  num[1]=document.getElementById("second").value;
  num[2]=document.getElementById("third").value;
  num[3]=document.getElementById("fourth").value;
  num[4]=document.getElementById("fifth").value;
  num[5]=document.getElementById("sixth").value;
  num[6]=document.getElementById("seventh").value;
  num[7]=document.getElementById("eighth").value;
  num[8]=document.getElementById("ninth").value;
  num[9]=document.getElementById("tenth").value;

  num.sort((a,b)=>Number(a)>=Number(b)?1:-1)

  resultDiv.innerHTML = `Asceding Sort is: ${num}`;
}