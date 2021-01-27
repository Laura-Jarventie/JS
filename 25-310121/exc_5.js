let money = prompt ("How is your salary per hour?");
let hours = prompt ("How many hours you worked today?");

if (hours <= 7) {
console.log(money*hours);
}
else if (hours >= 7 && hours <=9){
    let basicSalary = 7*money;
    let extraHours = hours-7;
    
    console.log(basicSalary+(extraHours*money*1.5));
}


else {
    let basicSalary = 7*money;
    let extraHours = 2*money*1.5;
    let doubleHours = (hours-9)*money*2;
    console.log(basicSalary+extraHours+doubleHours);
}

