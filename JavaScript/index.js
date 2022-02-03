function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
 window.prompt("Arman Gaziz");
const d=new Date ();
 alert("Year: "+d.getFullYear());
alert("Today is: "+d.getDay());
 alert("Date: "+d.getDate());
alert("Month: "+d.getMonth());
 alert("Current time is: "+d.getTime());
var a=d.getFullYear();
var b=d.getMonth();
var c=d.getDate();
var sum=a*365+b*31+c;
var ans=365*2024-sum;
 window.prompt("Days until graduation: "+ans);
