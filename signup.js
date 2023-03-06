// hrere we store the all input fields in the variable.
let input = document.querySelectorAll("input");
let fName = input[0];
let lName = input[1];
let email = input[2];
let password = input[3];
let cPassword=input[4];

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
    else if(emailExistsOrNot(email.value)==false)
    {
        alert("Email already exists...")
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
        obj["firstName"]=fName.value;
        obj["lastName"]=lName.value;
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

//function which cheaks the email is already exits or not.
function emailExistsOrNot(email)
{
    let data=JSON.parse(localStorage.getItem("data"))
    console.log(data)
    //if data ==null

    if(data==null)
    return true;
    
    //hrer we cheak the email is repeated or not.

    for(let i of data)
    {
        if(i.email==email)
        return false;
    }
    console.log("ai")
    return true;

}
//function to cheak the firsname is valid or not the (FIRST NAME ONLY CHARACTER OTHERWISE IT SHOWN ALERT.)
function cheakFirstAndLastName(name) {
    console.log(name)
    name = name.trim();
    console.log(name.length)
    for(let i=0;i<name.length;)
    {
        if(name.charCodeAt(i)>=97 && name.charCodeAt(i)<=122 ||name.charCodeAt(i)>=65 && name.charCodeAt(i)<=90 )
        {
            console.log("nikam")
            i++;
        }
        else
        {
            return false;
        }

      
    }
    return true;
}


//cheaking email.
function cheakEmail(email)
{
    console.log("Sfsf")
    
  
    if(email.indexOf("@")==-1)
    {
        return false;
    }
    else
    {
        return true;
    }
}
//cheaking passowrd
function checkPassword(password) { // "A$bhi123"
    let cl = 0, sl = 0, n = 0, sc = 0
    for (let t of password) { //  A
        if (t >= "A" && t <= "Z") {
            cl = cl + 1 // capital letter
        }
        else if (t >= "a" && t <= "z") {
            sl++ // small letter
        }
        else if (t >= "0" && t <= "9") {
            n++ // number
        }
        else {
            sc++ // special character
        }
    }
    if (cl >= 1 && sl >= 1 && n >= 1 && sc >= 1) {
        return true
    }
    else {
        return false
    }
}