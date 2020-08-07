const double = function  add(num){
    return num;
}
const ruselt = double(32);
console.log(ruselt)

// 2nd wey----
const doubleIt =  num =>  num*3;
const result = doubleIt(34);
console.log(result);
// third wey...............
const add = (x , y) => x + y ;
const total = add(  32, 34);
console.log( total);
// 4th wey ----------

const added = (x , y) =>{
   const sum = x + y;
    const  diff  = x - y;
    const  total = sum * diff;
    return total;
}
const ruselt4 = added(23, 14);
console.log(ruselt4);

// theree dots ... -------------------- 
const ages  = [12, 43, 543,453,4,]
const ages2 = [43, 54, 64, 454,4]
const ages3 = [83, 34, 75, 44,4]
const totalAges = ages.concat(ages2).concat([34,34,43]).concat(ages3);
const totalAges2 = [...ages,  ...ages2,...ages3] //importent....line...
console.log(totalAges2);
const num = [ 12,354,53,53,2222,];
const maximamNum =Math.max(...num);
console.log(maximamNum);
