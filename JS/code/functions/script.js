(function(){
    secret = 'its a secret'
    console.log(secret)
}) ();

(function(){
    secret1 = 'its a secret'
    console.log(secret1)
}) ();

function add()
{
    let a = 10, b = 20;
    let c = a + b;
    console.log(c);//30
}
add()

function sub()
{
    let a = 10, b = 20;
    let c = a - b;
    console.log(c);//-10
}
sub()

function adds(a,b)
{
    let c = a + b;
    console.log(c);//101
}
adds(34,67)

function subs(a,b)
{
    let c = a - b;
    console.log(c);//22
}
subs(56,34)

function greetings(n)
{
    console.log(`hello ${n}`); //hello shannu
}
greetings("shannu")

function adds(a,b=56)
{
    let c = a + b;
    console.log(c);
}
adds(34)//90
adds(34,78)//112

function mul(a,b)
{
    return a*b
}
let y = mul(3,4)
console.log(y);//12

// write a function that retruns no of characters in given string 

function funs (x)
{
    return x.length;
}
let res = funs("shannu")
console.log(res) //6
console.log(funs)

// function expressions

let z = function()
{
    console.log("hello world")
}
console.log(z)

let puppy = function(n)
{
    console.log(`hello world ${n}`) //hello world shannu
}
puppy("shannu")
console.log(puppy);

let sub2 = function (b,a)
{
    return b-a;
}
console.log(sub2(93,56))//37

let sub3 = (b,a) => b-a;
console.log(sub3(23,12))//11

//write a function that return acronym of given string
//Eg: displayAcronym("Raja Prasad") ===> RP

//write a function that checks whether given number is even or odd
//Eg: evenOdd(5) ===>odd

let EvenOdd = (n) => n%2==0?'even':'odd'
console.log(EvenOdd(5));//odd

function square()
{
    let a = 6;
    let c = a * a;
    console.log(`square ${c}`);//36
}
square()

function square1 (n)
{
    return n*n;
}
let res1 = square1(6)
console.log(`square1 ${res1}`) //36

let square2 = function(n)
{
    return n*n;
}
let res2 = square2(6)
console.log(res2)

let square3 = (n) => n*n
let res3 = square3(6)
console.log(res3);

function add3(x,y)
{
    return x + y;
}
function calculator(a,b,fn)
{
    let x = fn(a,b);
    console.log(x);
}
calculator(5,6,add3)

function add4(x,y)
{
    return x + y;
}
function calculator1(a,b,fn)
{
    let x = fn(a,b);
    console.log(x);
}
function mainlogic(fn)
{
    fn(5,6,add3)
}
mainlogic(calculator1)

function outer()
{
    let c = 10;
    function inner()
    {
        c++;
        console.log(c)
    }
    return inner;
}
let z1 = outer();
console.log(z1);
z1()
z1()
