const myNumber = Math.round(Math.random() * 100);
let result;

if (0 <= myNumber && myNumber <= 10) {
    switch(myNumber){
        case 0:
            result = 'nolla';
            break;
        case 1:
            result = 'yksi';
            break;
        case 2:
            result = 'kaksi';
            break;
        case 3:
            result = 'kolme';
            break;
         case 4:
            result = 'neljä';
            break;
        case 5:
            result = 'viisi';
            break;
        case 6:
            result = 'kuusi';
            break;
        case 7:
            result = 'seitsemän';
            break;
        case 8:
            result = 'kahdeksan';
            break;
        case 9:
            result = 'yhdeksän';
            break;
        case 10:
            result = 'kymmenen';
            break;
        default:
            break;}

            console.log(result)

} else if (10 < myNumber && myNumber <= 19) {
    let remainer = myNumber - 10;
    switch(remainer){
        case 1:
            remainer = 'yksi';
            break;
        case 2:
            remainer = 'kaksi';
            break;
        case 3:
            remainer = 'kolme';
            break;
        case 4:
            remainer = 'neljä';
            break;
        case 5:
            remainer = 'viisi';
            break;
        case 6:
            remainer = 'kuusi';
            break;
        case 7:
            remainer = 'seitsemän';
            break;
        case 8:
            remainer = 'kahdeksan';
            break;
        case 9:
            remainer = 'yhdeksän';
            break;
        default:
            break;}
        remainer += 'toista';    
    console.log(remainer)

} else if (20 <= myNumber && myNumber <= 99) {
    let module = Math.floor(myNumber / 10);
    let remainder = myNumber % 10;
    
    switch(module){
        case 2:
            remainer = 'kaksi';
            break;
        case 3:
            remainer = 'kolme';
            break;
        case 4:
            remainer = 'neljä';
            break;
        case 5:
            remainer = 'viisi';
            break;
        case 6:
            remainer = 'kuusi';
            break;
        case 7:
            remainer = 'seitsemän';
            break;
        case 8:
            remainer = 'kahdeksan';
            break;
        case 9:
            remainer = 'yhdeksän';
            break;
        default:
            break;}

        remainer += 'kymmentä'; 

    switch(remainder){ 
        case 0:
            result = '';
            break;
        case 1:
            result = 'yksi';
            break;
        case 2:
            result = 'kaksi';
            break;
        case 3:
            result = 'kolme';
            break;
         case 4:
            result = 'neljä';
            break;
        case 5:
            result = 'viisi';
            break;
        case 6:
            result = 'kuusi';
            break;
        case 7:
            result = 'seitsemän';
            break;
        case 8:
            result = 'kahdeksan';
            break;
        case 9:
            result = 'yhdeksän';
            break;
        default:
            break;}
        console.log(myNumber , remainer+result)
}else {
    console.log('sata')
}