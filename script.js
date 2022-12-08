let form=document.getElementById("form")
let validatename = document.getElementById('validatename')
let validatephone = document.getElementById('validatephone')
form.addEventListener('submit', submitData)
function submitData(event){
    event.preventDefault();
    let fullname = form['fullname'].value
    let phone = form['phone'].value
    let email = form['email'].value
    let matric = form['matric'].value
    let level = form['level'].value
    let session = form['session'].value

    if(fullname.trim() == ""){
        error = "Your fullname is required" 
    }
     else if(fullname.length < 10){
    error = "invalid name"
    }else {
        validatename.innerHTML  = fullname
        error = ""
    }
    document.getElementById('nameError').innerHTML = error 


    if (phone == ""){
        error= "Your phone number is required"
    }
    else if (phone.length !=11){
        error= "invalid phone number"
    }
    else if ( !(phone.startsWith('080') || phone.startsWith('090') || phone.startsWith('070') || phone.startsWith('081')|| phone.startsWith('01') || phone.startsWith('091'))){
        error= "invalid phone number"
        validphone =""
    }else{
        validatephone.innerHTML = phone
        error = ""
    }
    document.getElementById('phoneError').innerHTML = error;


    if (email == ""){
        error= "Your Email is required"
    }
    else if (email.includes('@')== false || email.includes('.') == false){
        error= "invalid email"
    }else{
        validategmail.innerHTML = email
    }
    document.getElementById('emailError').innerHTML = error;


    if(matric.trim() == ""){
        error = "Your matric number is required" 
    }
     else {
        validatematric.innerHTML  = matric
        error = ""
    }
    document.getElementById('matricError').innerHTML = error 


    if(level.trim() == ""){
        error = "Your level is required" 
    }
     else {
        validatelevel.innerHTML  = level
        error = ""
    }
    document.getElementById('levelError').innerHTML = error 
    

    if(session.trim() == ""){
        error = "Your session is required" 
    }
     else {
        validatesession.innerHTML  = session
        error = ""
    }
    document.getElementById('sessionError').innerHTML = error 
    
}


