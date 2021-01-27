let weight = prompt ("How much do you weight in kg?");
let height = prompt ("How tall are you in meters? Use . to separate meter/centimeter. For example 168cm, write 1.68");
let BMI = weight/(height**2);

console.log(BMI);

if (BMI < 18.5){
            console.log("Your BMI is " + BMI +" , which means that you are underweight.");}
        else if (BMI >= 18.5 && BMI <= 24.9){
            console.log("Your BMI is " + BMI +" , which means that you are normal or healthy weight.");}
        else {
            console.log("Your BMI is " + BMI +" , which means that you are obese.");
        }
