// hrere we store the all input fields in the variable.
let input = document.querySelectorAll("input");
let fName = input[0];
let lName = input[1];
let oPassword = input[2];
let password = input[3];
let cPassword=input[4];
console.log(fName.value)
//array which store the each teachers information.
arr=[];
//getting the singup button.

let btn = document.querySelector("button");
btn.addEventListener("click", cheakValidation)

function cheakValidation(e) {
    e.preventDefault();

    if (cheakFirstAndLastName(fName.value)==false) {
        alert("first name does not contain the special character or numbers.");
    }
    else if(cheakFirstAndLastName(fName.value)==false)
    {
        alert("last name does not contain the special character or numbers.");
    }
    else if (cheakEmail(email.value) == false) {
        alert("Email must contain @")
    }
    else if (checkPassword(password.value)==false)
    {
        alert("Password must contain at least one special ,uppercase,lowecase and digit");
    }
    else if(password.value!=cPassword.value)
    {
        alert("Password and Confirm is not Match");
    }
    else
    {

        //{email:teacher1@gmail,pass:123232,name:"Teacher 1 Name"}
       
        obj={};
        obj["email"]=email.value;
        obj["pass"]=password.value;
        obj["name"]=name.value;
        console.log(obj)
        arr.push(obj);
        // console.log(arr)
         localStorage.setItem("data",JSON.stringify(arr));

         email.value="";
         password.value="";
         fName.value="";
         lName.value="";
         cPassword.value="";
        //  window.location.href="login.html";
    }
}

