var email = document.getElementById("email");
var phone = document.getElementById("number");
var password = document.getElementById("password");
var emailSpan = document.getElementById("emailValidate");
var numberSpan = document.getElementById("numberValidate");
var passwordSpan = document.getElementById("passwordValidate");
let format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



function emailValidation(){
    
    emailSpan.innerHTML="";
    email.style.borderColor= "green";
    try {
        if(email.value== "") throw "Email Required";
        if(! regex.test(email.value)) throw "Enter a valid email id";
        
    } catch (error) {
        emailSpan.innerHTML= error;
        email.style.borderColor = "red";
        
    }
    

    
}

function numberValidation(){
    
    numberSpan.innerHTML="";
    phone.style.borderColor= "green";
    try {
        if(phone.value == "") throw "Phone number required";
        if(! format.test(phone.value)) throw "Enter valid number";
    } catch (error) {
        numberSpan.innerHTML = error;
        phone.style.borderColor = "red";
        
    }

}


function passwordValidation(){
    passwordSpan.innerHTML="";
    password.style.borderColor= "green";
    var upperCase = 0 , lowerCase = 0, nmbr =[1,2,3,4,5,6,7,8,9,0], count = 0; 
    try {
        if(password.value =="") throw "Password required";
        if(password.value.length < 8) throw "Minimum 8 characters required";
       
        for(let i=0; i<password.value.length; i++ ){
            for(let j=0; j<10; j++){
                if(nmbr[j]==(password.value[i])){
                    count += 1;
                    
                    // console.log("nmbr");
                }
            }
            if(password.value[i] == password.value[i].toUpperCase()){
                upperCase += 1;
                
                // console.log("upper")

            }
            
            else if(password.value[i] == password.value[i].toLowerCase()){
                lowerCase += 1;
                
                // console.log("lower")
            }
            
        }  
        window.count2 = count;
        window.upperCase2 = upperCase;
        window.lowerCase2 = lowerCase;

        if(upperCase == 0) throw "Must contain at least one uppercase";
        if(lowerCase == 0) throw "Must contain at least one lowercase";
        if(count == 0) throw "Must contain at least one number"
        // return count,upperCase,lowerCase;


    } catch (error) {
        passwordSpan.innerHTML = error;
        password.style.borderColor= "red";
    }

    // if(upperCase == 0)
    
    //   ;  //true
    //   nmbr.test(password.value[i]);  //false 
}

function submitForm(){
    

    if(email.value == "" || ! regex.test(email.value) || password.value == "" || ! format.test(phone.value)
     || password.value.length < 8 || upperCase2 == 0 || lowerCase2 == 0 || count2 == 0){
        if(email.value ==""){
            emailSpan.innerHTML="Email Required";
            email.style.borderColor = "red";
            
        }
        else if(! regex.test(email.value)){
            emailSpan.innerHTML="Enter a valid email id";
            email.style.borderColor = "red";
        }
        if(phone.value == ""){
            numberSpan.innerHTML="Phone number required";
            phone.style.borderColor = "red";
        }
        else if(! format.test(phone.value)){
            numberSpan.innerHTML="Enter valid number";
            phone.style.borderColor = "red";
        }
        if(password.value ==""){
            passwordSpan.innerHTML="Password required";
            password.style.borderColor = "red";
        }
        else if(password.value.length < 8){
            passwordSpan.innerHTML="Minimum 8 characters required";
            password.style.borderColor = "red";
            // console.log(upperCase2)
        }else{
            
            if(upperCase2 == 0){
                passwordSpan.innerHTML="Must contain at least one uppercase";
                password.style.borderColor = "red";
                
            } 
            else if(lowerCase2 == 0){
                passwordSpan.innerHTML="Must contain at least one lowercase";
                password.style.borderColor = "red";
            }
            else if(count2 == 0){
                passwordSpan.innerHTML="Must contain at least one number";
                password.style.borderColor = "red";
            } 
        }
       
     


        return false;
    }
  
   
      
}