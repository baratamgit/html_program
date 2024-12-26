/* arithematic operators */
let a = 20, b = 10;
console.log(`The sum of ${a} and ${b} is ${a+b}`);
console.log(`The differnce between  ${a} and ${b} is ${a-b}`)
console.log(`The product of ${a} and ${b} is ${a*b}`)
console.log(`The division of ${a} and ${b} is ${a/b}`)
console.log(`The remainder of ${a} and ${b} is ${a%b}`)
console.log(`The power of ${a} to ${b} is ${a ** b}`)

/* relational operators */
let a1=20,b1=5,c1='20'
console.log(a1 > b1); //T
console.log(a1 < b1); //F
console.log(a1 >= b1); //T
console.log(a1 <= b1); //F
console.log(a1 == c1); //T
console.log(a1 === c1); //F
console.log(a1 != c1); //F
console.log(a1 !== c1); //T

/* logical operators*/
a = 20; b = 10;
console.log("Logical AND will be true when both statements are true only" + ((a > 2) && (b > 3)))
console.log("Logical OR will be true when any of the statements are true only" + (a > 2 || b > 30))
console.log("Logical NOT will be true when statement is false" +!(a > 20 ))

/* assignment or shorthand operators */
console.log(a += 2);//22
console.log((a -= 2))//20
console.log((a *= 2))//40
console.log((a /= 2))//20
console.log((a **= 2))//400
console.log((a %= 2))//0

a = 5;
b = ++a;//6
c = a++;//6
console.log(a, b, c) //7 6 6

a = 20, b = 10;
console.log(a);//20
console.log(b);//10
c = a++ + ++a + --b + b--; //21+22+9+8 //20+22+9+9
console.log(a);//22
console.log(b);//8
console.log(c); //60
d = a++;//22
e = ++a;//24
f = --b;//7
g = b--;//7
console.log(d);//22
console.log(e);//24 
console.log(f);//7 
console.log(g);//7 
console.log(a);//24
console.log(b);//6

/* ternary operators */
a = 11;
c = (a % 2 == 0) ? 'Even' : 'Odd'
console.log(c)

console.log('5' + 1) //'51'
console.log(+'5' + 1) //6
a=5
var d=25;
c = d ?? a;
console.log(c)
d = undefined;
a = 10;
c = d ?? a;
console.log(c)