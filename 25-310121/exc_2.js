let nro1 = prompt ("Give a number");
let nro2 = prompt ("Give another number");
let nro3 = prompt ("Give third number");

 if (nro1 < 0 && nro2 < 0 && nro3 < 0){
    alert('only negatives');
 }
else if (nro1 >=0 && nro2 >= 0 && nro3 >= 0){
    alert(Number(nro1)+Number(nro2)+Number(nro3))+
    alert(Number(nro1)*Number(nro2)*Number(nro3));
}
else if (nro1 >= 0 || nro2 >= 0 || nro3 >= 0){
    alert(Number(nro1)+Number(nro2)+Number(nro3));
}
