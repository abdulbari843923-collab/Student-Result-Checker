function great(){
    console.log("Abdul Bari")
}
great("Abdul Bari")

function study(){
    console.log("I am learning Java Sript")
}
study();
function calculate (a , b){
    return a + b
}
let result = calculate (20 , 25);
console.log(result * 2)

let point = 80;
function bonus (num){
    return num + 10
}
let finalpoint = bonus(point);
console.log(finalpoint)

let price = 200 ;

function discount(amount){
    return amount -50;

}

let finalprice = discount(price);
console.log(finalprice)


let number = 12;
function double (num){
    return num * 2 
}

let answe = double(number)
console.log(answe + 5)

let salary = 20000
function increase (amount){
    return amount+ 2000
}
let newsalary = increase(salary);
console.log(newsalary-1000)
let room = 20;
console.log(room);
let city = "Delhi";

function calculate  (a , b){
    let sum = a + b 
    return sum * 2
}
let answer = calculate (8 , 7)
console.log (answer-5)


function discount(price){
    let newprice = price -100
    return(newprice)
}
let finalamount = discount(500);
console.log(finalamount / 2)


function check (num){
    if(num>10){
        return num * 2
    }else{
        return num + 5
    }
}
let resu =check (8);
console.log(resu )


function calculate(num){
    if(num % 2 === 0){
        return num + 10 
    }else {
        return num * 2 
    }
}
let answ = calculate(7);
console.log(answ)

city = "Mumbai";
console.log(city);
let country = "India";
console.log(country);
console.log(30 + 20);
console.log(30 - 10);
console.log(6 * 5);
console.log(66 / 11);
console.log(42 % 13);
console.log(50 - 8 * 6);
console.log(60 - (2 * 6 ) +14 );
console.log((3 + 5) * (14 - 12));
console.log((6 + 4 ) * (15 - 12));
console.log((30 - 24) * (3 + 6) / 6);
console.log((30 - 8 ) / ( 5 - 4 ) * 6);
console.log((30 - 12) / 3 + 6 * 4)
console.log(20 + 25);
console.log(40 - 15 );
console.log(20 * 5 );
console.log(96 / 12 );
console.log(30 % 4 );
console.log(15 % 5);
console.log(39 % 7);
let score = 10;
score = 50;
score = 100;
console.log(score);
const birthYear = 2007;
console.log(birthYear)
console.log((20 + 10) / 5 * 4);
console.log(25<60)
console.log(15<25)
console.log(22>=18)
console.log(50===50)
let mark = 35;
if (mark>40){
    console.log("pass")
}
else{
    console.log("fail")
}
let numbed = -5;
if (numbed>0){
    console.log("positve")
}
else{
    console.log("Not Positive")
}
let members = 50
if (members >= 70){
    console.log("Grade A")
}
else if (mark >= 50){
}
else{
    console.log("Grade B")
}
let tempreture = 35;
 if(tempreture >= 40);{
    console.log("very hot")
}
if (tempreture >30){
    console.log("hot")
}
else if (tempreture > 20){
    console.log("normal")
}
else{
    console.log("cold")
}
let inloggedIn = true;
let hassubscription = false 
if(inloggedIn){
    if (hassubscription){
        console.log("premium video")
     } else{
            console.log("free video")
        }
    }
    else{
        console.log("please login")
    }
let agr = 22;
let haslincense = true;
let hascar = false
if(agr >= 18)
    if(haslincense)
        if(hascar){
            console.log("Go for drive")
        }else{
            console.log("Buy a car")
        }
        else{
            console.log("Get lincense")
        }
        else{
            console.log("too Young")
        }
let marks = 85;
let attendence = true;
let submitedprojet = false
if(marks >= 40){

    if (attendence ){

        if(submitedprojet){
            
            console.log("passed")
        }
        else{
            console.log( "project missing" )
        }
    }
        else{
           console.log("Low attendence") 
        }
    }

else{
    console.log("Failed")
}

let isLoggedIn =false;
let isAdmin = true;
let haspermission = true;
if(isLoggedIn){
    if(isAdmin && haspermission){
        console.log("Admin Dashboard")
}
else{
    console.log("User dashboard")
}
}
else{
    console.log("Login First")
}
let age =24 ;
let hasId = true;
let isBlocked = false;
let isTicket = false;
if(age >= 18){
    if(hasId && !isBlocked){ 
                   if(isTicket){
                console.log("Entry Allowed")
            }
            else{
                console.log("Ticket required")
        }
        
    }
    else{
        console.log("Access Denied")
    }
}
else{
    console.log("Under Age")
}