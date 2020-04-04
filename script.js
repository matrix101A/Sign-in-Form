function isEmail(email) {
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return regex.test(email);
}
$("#sumbit-button").click(function(){

  var mail=$("#email").val();
  var errorMessage="";
  if(isEmail(mail)== false)
  errorMessage+="<br>Emal address Not valid !";

  if($.isNumeric($("#phone").val())==false)
    errorMessage+="<br>Phone Number Not valid !";

  if(($("#password").val())!=($("#passwordConfirm").val()))
  errorMessage+="<br>Passwords Do Not match !";

  if($("#password").val()=="")
    errorMessage+="<br>Password cannot be empty !";

  if(errorMessage!="")
      $("#error").html(errorMessage);
      else
        $("#success").html("Success !");




})
