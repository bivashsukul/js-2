// ex 1----
 function showText(){
     document.getElementById('s_text').innerHTML="Hello Bangla";

 }

// ex-2-------
function showtext(){
    document.getElementById('show_text').innerHTML="Bangladesh";
}


// ex-3-------
function fontChange(){
    document.getElementById('font_size').style.fontSize='50px';
}


// ex 4------
function colorChange(){
    document.getElementById('color_change').style.color='red';
}

// ex-5-------
function hideText(){
    document.getElementById('hide_text').style.display="none";
}

// ex-6-------
function shoText(){
    document.getElementById('sho_text').style.display="none";
}


/*let num1=prompt('Enter Your First Number :');
let num2=prompt('Enter Your second Number :');
num1= parseInt(num1, 10);
num2= parseInt(num2, 10);


let sum =num1 + num2;
let sub =num1 - num2;
let mul =num1 * num2;
console.log('sum Addition= ' +sum);
console.log('sub Substraction= ' +sub);
document.write('Addition = '+sum);
document.write('Substraction = '+sub);
document.write('multiplaction = '+mul);

document.write('i love bangladesh');*/

//farnhight calclutation
let farn =parseFloat(('Enter fahranhight'));
let cels =(farn-32)*(5/9);
document.write('celsius= '+ cels + '<br/>');
console.log(cels);
function tempra(){
    document.getElementById('fahra').innerHTML=cels;
}
//Celcius to farnhight
let celci =parseFloat(20)
let farnh =(celci*(9/5))+ 32;
document.write('Farnhight = '+ farnh);
console.log(farnh);
function temprature(){
    document.getElementById('celcius').innerHTML=farnh;
}


// ex7
let num1,num2;
    num1=5;
    num2=6;
    num1 +=num2;

function resultMenuplet(){
    document.getElementById('resu').innerHTML=num1;
}


// ex8----------------
let num3,num4,result;
num3=32;
num4=25;
let result2=num3>num4;
function logicalOperat(){
    document.getElementById('resu1').innerHTML=result2;
}
console.log(num3<num4);


// ex9----------------
let num5,num6,result3;
num5=32;
num6=25;
let result4=num5==num6;
function logicalEqual(){
    document.getElementById('resu4').innerHTML=result4;
}
console.log(num5<num6);


// ex10---------------
let numb1,numb2,numb3,result1;
numb1=32;
numb2=25;
numb3=15;
let result5=numb1>numb2&&numb1>numb3;
function andEqual(){
    document.getElementById('resu5').innerHTML=result5;
}
console.log(numb1>numb2 && numb1>numb3);

// ex11---------------
let numb6,numb4,numb5,result6;
numb6=32;
numb4=25;
numb5=15;
let result7=numb6>numb4 || numb5>numb6;
function orEqual(){
    document.getElementById('resu7').innerHTML=result5;
}
console.log(numb6>numb4 || numb5>numb6);


// ex12---if else if---------------------------------
let num= 6;
let great;
if (num%2==0)
    
    console.log('Even');
else
    console.log('Odd');

    function oddEven(){
        document.getElementById('jor').innerHTML=great;
    }

// /marks defind-------------


//let marks =parseInt(prompt('Enter your Number :'));
// let marks =55;
// let greating;
// if (marks >= 100 || marks <=0)
//     console.log('Invalid');
// else if (marks >= 80 && marks <= 100)
//     console.log('A+');
// else if (marks >= 70 && marks <= 79)
//     console.log('A');
// else if (marks >= 60 && marks <= 69)
//     console.log('A-');
// else if (marks >= 50 && marks <= 59)
//     console.log('B');
// else if (marks >= 40 && marks <= 49)
//     console.log('C');
// else if (marks >= 33 && marks <= 39)
//     console.log('D');
// else
//     console.log('Fail');

// function mar(){
//     document.getElementById('mark').innerHTML='marks';
// }
let marks =85;
let greating;
if (marks >= 100 || marks <=0)
    greating='invalid';
else if (marks >= 80 && marks <= 100)
     greating='A+';
else if (marks >= 70 && marks <= 79)
     greating='A';
else if (marks >= 60 && marks <= 69)
    greating='A-';
else if (marks >= 50 && marks <= 59)
    greating='B';
else if (marks >= 40 && marks <= 49)
    greating='C';
else if (marks >= 33 && marks <= 39)
    greating='D';
else
     greating='Fail';

function mar(){
    document.getElementById('mark').innerHTML=greating;
}

//letter vowel&consonant -----------

//let letter =prompt('Enter A Number :');
let letter ='A';
letter = letter.toLowerCase();

if (letter=='a' || letter=='e'|| letter=='i'|| letter=='o'|| letter=='u')
console.log('vowel');

else
console.log('consonant');


//digit ----------
let digit =5;
if (digit==0)
    console.log('Zero');
else if (digit==1)
    console.log('One');
else if (digit==2)
    console.log('Two');
else if (digit==3)
    console.log('Three');
else if (digit==4)
    console.log('Four');
else if (digit==5)
    console.log('Five');
else if (digit==6)
    console.log('Six');
else if (digit==7)
    console.log('Seven');
else
console.log('invalid Number');

//switch use------------
let letters='o';
letters = letters.toLowerCase();
switch(letters){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    console.log('vowel');
    break;

    default:
    console.log('cosonant');
}




// ex 13 for loop--------------------------------
//for(var starting, condation, updet )

for(let x=1; x<=5; x++){
    document.write('<h1>Bangladesh</h1>')
    function adde(){
        document.getElementById('demo').innerHTML=add;
    }
}

//nimber=------------------
//12345.....
var y=50;
for(let y=1; y<=50; y++){
    document.write(' ' +y);
    
    function loops(){
        document.getElementById('bangla').innerHTML=incree;
    }
}
document.write('<h5>EnD</h5>')

//nimber=------------------
//50,49,48,47,46,45,44............
for(let x=50; x>=1; x--){
    document.write(' ' + x);
    
    function loops(){
        document.getElementById('bangla').innerHTML=incree;
    }
}
document.write('<h5>End</h5>')



for(let x=1; x<=5; x++){
    let marks1=25;
    let marks2=35;
    let totalMarks=marks1*marks2;
    function total(){
        document.getElementById('demo1').innerHTML='Marks=' + totalMarks;
    }
}


// ex 15--------------------
//2 ,4 ,6 ,8 ,10........
var i=1;
let sum=0;
while(i<=100){
   sum = sum + i;
    i=i+1;
}
function sum1(){
    document.getElementById('demo2').innerHTML='total =' + sum;
}
console.log(sum);
document.write(sum);


// ex 16=========
//2 ,4 ,6 ,8 ,10........
var i=1;
let sum8=0;
while(i<=100){
  if (i%3==0 && i%5==0){
    sum8 = sum8 + i;
  }
    i=i+1;
}
 function sum9(){
     document.getElementById('demo3').innerHTML='total =' + sum8;
}
console.log(sum8);
document.write(sum8);



// ex 17--------------------------

for (let i=1; i<=100;i++){
    // if (i==10){
    //     break;
    // }
    if (i%2==0){
        continue;
    }
    document.write(' '+i);
    console.log(i);
    function con(){
        document.getElementById('brea').innerHTML='total =' + i;
   }
}
// ex18 funcation-----------------
function squre(squa1,squa2){
    let equa=squa1+squa2;
    console.log('result = ' + equa);
    document.getElementById('add').innerHTML='result = '+equa;
}

squre(5,50);



// ex19 funcation-----------------
function squre5(squa1,squa2){
    let equa3=squa1*squa2;
    return equa3;
    
}

 let x= squre5(5,10);
 console.log('result = ' + x);
 document.getElementById('added').innerHTML='result = '+x;


// ex 20--------

let display2= function displayMessage(msg){
    document.getElementById('invokable').innerHTML=msg;
}
display2('I am Message')

//array---------------------------------
// ex21 array

var names=['amin','badol','sohel,','sohan','sujoy'];
names.push('khairul');
names.push('srijon');//laste  sunkha joj kore
names.pop();


console.log(names.length);
console.log(names[3]);
function arra(){
    document.getElementById('arr').innerHTML=names ;
}
// ex22 array concat
var country1=['bangladesh','India','Nepa'];
var country2=['pakistan','Srilanka','Vutan'];
var country =country1.concat(country2);
console.log(country);
function arra1(){
    document.getElementById('arr1').innerHTML=country;
}

// ex23 --using loop in array
var numb=[10,20,30,40,50];
var add= 0;//sobman + korar janno

for(var i=1; i<5;i++){
    console.log(numb[i]);
    add = add+ numb[i];
    console.log(add);

function arraLoop(){
    document.getElementById('arrLoop').innerHTML=numb[i];
}
function arraLoop1(){
    document.getElementById('arrLoop').innerHTML=add;
}
}


/*console.log(numb[0]);
console.log(numb[1]);
console.log(numb[2]);
console.log(numb[3]);
console.log(numb[4]);*/

{
    //pop remov last digit
    //pop add last digit
    //unshift add fast digit
    //shift remoe fast digit
}
// ex 23  shift /unshift-------------

var family=['ma', 'baba','Bhai','bon']
// family.shift();
family.unshift('Ma');
console.log(family);
function arrshift(){
    document.getElementById('array').innerHTML=family;
}

var squad=['Tamtm','Shakib','musfiq','masrafee','Hridoy','Liton'];
squad.splice(1,2);
console.log(squad);//splice used to delet.

var squad=['Tamtm','Shakib','musfiq','masrafee','Hridoy','Liton'];
var newSquad = squad.splice(1,2);
newSquad.unshift('Shanto');
newSquad.push('Somya','Taskin');
console.log(newSquad);
function squad(){
    document.getElementById('array').innerHTML=newSquad;
}

// ex24-one daimantional array------
//creat a funcation called highestNumber than
//recived a 1d array called score
//return the highest score
function hightScore(scorse){
let max = scorse[0];
for(let x=0; x<scorse.length; x++){
    if(max <scorse[x]){
        max = scorse[x];
    }
}
return max;
}
let scorse =[21,28,1,,88,15,28,30,52,205];
hightScore(scorse);
var maxScore= hightScore(scorse);
console.log(maxScore);

function oneDarra(){
    document.getElementById('1darray').innerHTML=maxScore;   
}



// ex 2d array---------------
function hightestRunSorar(playersinfo){
    var highesScorar=playersinfo[0][0];
    var highesScorar=playersinfo[0][1];
    
    for(var x=1; x<playersinfo.length; x++){
        if(highesScorar<playersinfo[x][1]){
            highesScorar = playersinfo[x][1];
            highesScorar =playersinfo[x][0];
        }
    }

return highesScorar;
}


let playersinfo=[
    ['shakib',50],
    ['tamim',40],
    ['musfiq',80],
    ['riad',60],
    ['miraz',150],
    ['taskin',20],
    ['joy',6],
]
hightestRunSorar(playersinfo);
var names=hightestRunSorar(playersinfo);
console.log(names);

function twoDarra(){
    document.getElementById('2darray').innerHTML=names;   
}


// object----------------------------------------------------

// ex 25--------
var student1={
    Name:'Bivash Sukul',
    age:22,
    cgpa:2.2,
    langu:['Bangla','English','hindi']
}
console.log(student1);
function student(){
    document.getElementById('student').innerHTML=student1.Name;   
}


// ex27-------------

// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  function multiple(){
  document.getElementById("demo5").innerHTML =
  "My father is " + myFather.age + " Years Old."; 

  }
console.log(myFather.firstName);
console.log(myFather.lastName);
console.log(myFather.age);


// ex28-------------------
function Subject(name,page,cgpa,langu) {
    this.name = name;
    this.page = page;
    this.cgpa = cgpa;
    this.langu = langu;
  };
  const Subject1 =new Subject( ['Bangla','English','math. '], 50. , 3.92,['bn','eng','hind']);
  const Subject2 =new Subject(['Rural Economice','micor Economices','Devlopment Economices'], 50, 3.92,['bn','eng','hind']);
  const Subject3 =new Subject( ['MicroEconomices','MacroEconomice','RuralEconomices'], 50, 3.92,['bn','eng','hind']);
   
  function multipleSub1(){
    document.getElementById("demo6").innerHTML =
    "subjects 1=  Names is " + Subject1.name + " Pages "+Subject1.page +' Cgpa '+Subject1.cgpa+ ' ';   
    }
    function multipleSub2(){
        document.getElementById("demo6").innerHTML =
     "subjects 2=  Names is " + Subject2.name + " Pages "+Subject2.page +' Cgpa '+Subject2.cgpa+ ' ';   
    }

    function multipleSub3(){
        document.getElementById("demo6").innerHTML =
    "subjects 3=  Names is " + Subject3.name + " Pages "+Subject3.page +' Cgpa '+Subject3.cgpa+ ' ';   
    }

 console.log(Subject1.name);
 console.log(Subject2.name);
 console.log(Subject3.name);
 console.log(Subject1.page);



//  gasing games

/*var numOfWin=0;
var numOfLost =0;
for(var i=1; i<5; i++){
    //var guessNumber = parseInt(prompt('Enter a number Form 1 to 5 :'));
    
    var randomNumber = Math.floor(Math.random(3)*5) + 1;
    
    if (randomNumber==guessNumber){
        console.log('You Have Own');
        numOfWin++;
    }else{
        console.log('You Have lost . Random Number Was '+ randomNumber);
        numOfLost++;
    }
}
console.log('Number of own '+numOfWin );
console.log('Number of Lost '+numOfLost);
*/


// ex29-----------------
var date=new Date();
console.log(date);
function dates(){
    document.getElementById('demo7').innerHTML=date;
}


// ex30-----------------

var year= date.getFullYear;
function years(){
    document.getElementById('demo8').innerHTML=date.getFullYear();
}

// ex31-----------------

var currentDate = date.getDate();
function currentDates(){
    document.getElementById('demo9').innerHTML= date.getDate();
}

// ex 32-------------------
var currentDays = date.getDay();

function currentDa(){
    document.getElementById('demo10').innerHTML=date.getDay();
}

var currentMinutes = date.getUTCMonth();
console.log(currentMinutes)

// ex33-class selector------
function classsel(){
    document.getElementsByClassName('heading')[0].innerHTML='Bangladesh';
}
// function classsel(){
//     document.getElementsByClassName('headind')[0].style.color='red';
// }

// ex34  tag selector

function tagNames(){
    document.getElementsByTagName('h1')[1].innerHTML='Hi';
}

// ex35 query selector

function quer(){
    document.querySelector('p').innerHTML="<h1>'Hi Query Selector'</h1>";
}

// ex36 query selector

function querySe(){
    document.querySelector('.qui').innerHTML="<h1>'Hi Query Selector'</h1>";
}

// ex37 query selector

function querySe(){
    document.querySelector('#qui').innerHTML="<h1>'Hi Query Selector'</h1>";
}

// ex38 query selector
var link=document.querySelector('a')
function querySe(){
    link.innerHTML="<h4>Home</h4>";
    link.style. textDecoration = "none";
    link.style.color = "red";
    link.style.fontSize = "10rem";
}
function ulList1(){
    document.querySelector('ul li').innerHTML="<h4>'Home'</h4>";
}
function ulList(){
    document.querySelector('.my_div a').innerHTML="<h4>'Home'</h4>";
}



// ex39------------------------
var doc=document.querySelector('#myImages')
function myPicture1(){
    doc.src="images/product-1.jpg";
}
function myPicture2(){
    doc.src="images/product-2.jpg";
}
doc.style.Boredr='1px solid red'


// ex39------------------------
var myLinks=document.querySelector('#myLinks')
function mylinks(){
    myLinks.style.textDecoration = "none";
    myLinks.style.color = "green";
    myLinks.style.fontSize = "50px";
    myLinks.href = "www.facebook.com"

}




















