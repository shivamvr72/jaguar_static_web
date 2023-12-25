function search(){
    document.getElementById("mdp").classList.toggle("show");
}
function filter(){
    var input, filt, li, a, i, ft;
    input = document.getElementById("ip");
    filt = input.value.toUpperCase();
    ft = document.getElementById("mdp");
    a = ft.getElementsByTagName("a");
    for(i=0; i<a.length; i++){
        txtValue = a[i].textContent || a[i].innerText;
        if(txtValue.toUpperCase().indexOf(filt) > -1){
            a[i].style.display = "";
        }else{
            a[i].style.display = "none";
        }
    }
}

//for test drive aleart
var fname, lname, date, model, city;
fname = document.getElementById("fname");
lname = document.getElementById("lname");
date = document.getElementById("dt");
model = document.getElementById("mod");
city = document.getElementById("city");
check = document.getElementById("ch");
function confiremd(){

}
function testdrive(){
    if(fname.value=="" || fname.value==null ||lname.value=="" || lname.value==null || date.value=="" || date.value==null || model.value=="" || model.value==null || city=="" || city==null || check.value!="1"){
        alert("fill requred feilds");
    }else{
        alert("Thank You! \n" + fname.value + " " + lname.value + " Your Test Drive Booked On " + date.value + " for Jaguar Model " + model.value + " In " + city.value + " City.");
    }
}