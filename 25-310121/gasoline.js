
function calculate() {
    let price = Number(document.getElementById("price").value);
    let money = Number(document.querySelector("money").value);
    let answer = document.getElementById("answer");
    /* two options either by id or query*/
    /*
    const calculate = (price, money, answer) => console.log("answer")*/

    /*
    console.log(price);
    console.log(money);
    console.log(price * money);*/
if (answer < 10) {
    console.log ("good you can escape now")
} else {
    console.log("Ups, you have to stay here")
}

    // don´t need console.log they were just for testing

    answer.textContent = money / price;
    // could be also some other but text content is the safest
}
