/*alert("this alert have decument");
document.write("<br>exterenal file of java script<br>");
console.log("hello console");
console.log(x);
console.log(typeof x);
 var x=10;
 console.log(x);
 console.log(typeof x);
 x='hello';
 console.log(x);
 console.log(typeof x);
 console.log(5&&4&&9);
 console.log(5||0|4);
 console.log(!66);
 console.log(!!66);
 var fname ="eman " , lname="hamad", fullname =fname + lname;
 console.log(fullname);
 x=120;
 var res=(x>100)?10:9;
 console.log(res);
 var a=5 , b="5";
 console.log(a==b);
 console.log(a===b);
 console.log(3>2>1);
 console.log(3>(2>1));
var response=prompt("enter your name",'ali');
if(response){

    document.write ("welcome" + response+":)");

}
else{

    alert("you haven't entered any name(");
}
var fav = prompt("select your fav color ","1,)red   2)green  3)yellow  4)blue   5)purple");
var fav;
var flag=1;
switch(fav){


    case"1":
    case "red":
    case "RED":
    color="RED"
    break;


    case"2":
    color="green";
    break;

    case"3":
    color="yellow";
    break;

    case"4":
    color="purple";
    break;

    case"5":
    color="white";
    break;

    default :
    fla=0;
    alert("your choice is not from the given list");
    break;
}
if(flag){
document.write("your fav color is " + color);
    

}
var i=0 ;
for( ; i<4 ;i++){

    document.write("i"+i+"<br>");
}
var ii=0 ;
while(i<4){

document.write("i"+ii+"<br>");
ii++;
}


do{

    var res =prompt("enter your name "," ");

}

while(!res)

var action=confirm("do you love meat?");
 */
var w;

function opennewwindow(){

    w=open("child_window.html","","width=300 ,height=300");
}
function closenewwindow(){

    w.close();
}
function changebk(){

w.document.bgColor ="red"; 
    w.focus();                
}
function movebywindow(){
    w.moveBy(50,50);
    w.focus(); 
}
function movetowindow(){
    w.moveTo(50,50);
    w.focus(); 
}
function resizebywindow(){
    w.resizeBy(50,50);
    w.focus(); 
}
function resizetowindow(){
    w.reszeTo(50,50);
    w.focus()

}

function scrollbywindow(){
    w.scrollBy(50,50);
    w.focus(); 
}
function scrolltowindow(){
    w.scrollTo(50,50);
    w.focus(); 
}
var tim;
function start_alert_interval(){
tim=setInterval(function(){
    alert("this intervalll");
},2000);
    
}

function start_alert_timeout(){
    tim=setTimeout(function(){
        alert("this intervalll");
    },2000);
        
    }

    function stop_alert_interval(){
        clearInterval(tim);
            
     }

    function stop_alert_timeout(){
            clearTimeout(tim);
                
    }
    function start_alert_timeout_increment(x){
        alert("this intervalll"+x);
        x++;
        tim=setTimeout(start_alert_timeout_increment,2000,x);
            
        }
        /*document.write(history.length);
        history.forward();
        history.backward();
        history.go(0);
        history.go(1);*/
       /* document.write(location.href);
        document.write(location.protocol);
        document.write(location.hostname);
        document.write(location.host);*/
       // location.replace("www.google.com");
       //location.assign("www.google.com");
      // document.write(location.search);
       //location.reload();

       /*document.write(navigator.language);
       document.write(navigator.cookieEnabled);
       document.write(navigator.platform);
       document.write(navigator.appCodeName);
       document.write(navigator.userAgent);*/
       /* //in console 
       document
      console.dir(document)
      document.body.children[0].nextSibling
      document.body.children[0].nextElementSibling
      document.getElementById("hr")
      var e=document.getElementsByClassName("hr")
      e[0]
      document.getElementsByTagName("hr")
      document.querySelector("#hr")
      document.querySelector(".hr")
      function changebAk(){

        document.querySelector('input[type="text"]').style.backgroundColor="red"              
        }
        document.querySelectorAll('input[type="text"]');
        for(var i=0; i<e.length ;i++){
            e[i].style.backgroundColor="red"
        }
        document.body.children[0].innerHTML="<b>hhhhhhhhh</b>"
        document.body.children[0].innerTextt="<b>hhhhhhhhh</b>"
        document.body.getElementById("hr").inneraHtml+="<b>hhhhhhhhh</b>"
        e[0].style.color="red"
        e[0].style.display="none"
        document.getElementById("hr").ClassName
        document.getElementById("hr").classList.add(C2)
        document.getElementById("hr").classList.remove(C2)
        document.getElementById().style
        getComputedStyle(document.getElementById()).color
        function addelement(){
            var r=document.createTextNode("HJHGUG");
            document.body.appendChild(r);
        }
        document.insertBefore(r,document.getElementById("hr"));
        document.images[0]
        document.images[HashChangeEvent.png]
        document.forms[0].elements[0]*/




       

        
        
        

