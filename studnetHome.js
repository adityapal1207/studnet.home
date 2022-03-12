function login()
{
var emailaddress=document.forms['loginform']['emailaddress'].value;
var password=document.forms['loginform']['password'].value;
alert(href="Welcome to Studnet.lpu");
console.log(emailaddress.value);

location.href  ="home.html";
return false;

}
function signUp()
{
    var firstname=document.forms['registration']['firstname'].value
    var middlename=document.forms['registration']['middlename'].value
    var lastname=document.forms['registration']['lastname'].value
    var emailaddress=document.forms['registration']['emailaddress'].value
    var password=document.forms['registration']['password'].value
    
alert("Welcome to studnet.lpu");
console.log(firstname,lastname,password,emailaddress);
return false;
}