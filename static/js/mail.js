function validate(){
    var receiver_mail= document.getElementById("email").value;
    var Name = document.getElementById("Name").value;
    var yes= document.getElementById("myCheck1"); 
    if (yes.checked == false){  
        return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";  
      } 



    else {  
      alert ("Login successfully");
      window.location = "success.html";
      } 
    return 0;
    }