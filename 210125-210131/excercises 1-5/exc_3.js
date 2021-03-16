let num = prompt("Give a number");

if (num % 2 === 0 && num >= 0) {
  console.log(num + " is even number");
} else if (num % 2 !== 0) {
  console.log(num + " is odd number");
}

function filterItems(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
let expectedEmails = [];
expectedEmails = [filterItems(splitted, "o")];
console.log(expectedEmails);
