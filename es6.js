//backup defult value..........in function   23.3
function add(num1, num2){
    return num1 + num2;
}
const total =  add(35,  34)
console.log(total)

// end wey -------
function add(num3, num4){
    if(num4 == undefined){
        num4 = 0;
    }
    return num3 + num4;
}
const total1 =  add(35)
console.log(total1)
// 3rd wey
function added(num1, num2 = 6){
    return num1 + num2
}
var ruselt = added(32,6)
console.log(ruselt)
// end of backup difult value....


// malti line practice..........           23.4

const firstSong = "amar sunar bangla ami tumai valo valobashi";
const secundSong = "chiro din tumar akash tumar batash amar prane bajai bashi sunar bangla AMItumai valo bashi"
const totalSong  = firstSong + secundSong;
const totalSong2 = `${firstSong} ${secundSong} you are good boy`
const totalSong3  = `amar sumar bangla.
amit tumai valobashi
chirodin tumar akash tumar batas
amar prane bajai bashi sunar bangla
ami tumai valobashi `
console.log(totalSong3);










