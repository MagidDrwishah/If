

function myFunction() {
    var num = document.getElementById("in").value;
     var para = document.createElement("P");
    if (isNaN(num)){
 para.innerHTML = "Enter a number! ";                       
        di.appendChild(para);
    }
 else {
      if (num < 18){
           para.innerHTML = "Du är för ung!";                       
           di.appendChild(para);  
        }
        else if(num>= 18 && num<66){
            para.innerHTML = "precis rätt ";                       
           di.appendChild(para);  
        }
        else if (num > 66){
            para.innerHTML = "sorry farbror ";                       
           di.appendChild(para); 
        }
    }   
    }
     
    