var timing=document.getElementById("timing");
var start=document.getElementById("start")
var stopTime=document.getElementById("stop");
var lap=document.getElementById("lap");
var reset=document.getElementById("reset");
var mm ,hh= 0 ,ss;
var id;
start.addEventListener("click",function(){
    start.style.display="none";
    stopTime.style.display="block";

    var second=0;

    id=setInterval(function(){
    mm=parseInt(second/60);
    ss=second%60;
    if(ss<10)
    ss="0"+ss;
    if(mm<10){
    mm="0"+mm;
    }
    if(hh<10){
        hh="00";
    }
    timing.innerText=hh+" : "+mm+" : "+ss;
    second++;
},1000)
console.log("id start fun "+id);
})

stopTime.addEventListener("click",function(){
    console.log("id stop fun "+id);
    lap.style.display="none";
    reset.style.display="block";
    setTimeout(function(){
        console.log("set time out is working")
        clearInterval(id)},100
    )
})

var count=1;

lap.addEventListener("click",function(){
    if(stopTime.style.display==="block"){
    timingList=document.getElementById("timingList");
    li=document.createElement("div");
    li.setAttribute("class","li");
    var p1= document.createElement("p");
    p1.setAttribute("class","p");
    
    p1.innerText="lap"+count;
    li.appendChild(p1);
    var p2=document.createElement("p");
    p2.setAttribute("class","p");
    p2.innerHTML=hh+" : "+mm+" : "+ss;
    
    li.appendChild(p2);
    count++;
    timingList.appendChild(li);
    }

})

reset.addEventListener("click",function(){
    var classIs=document.getElementsByClassName("li");
    if(classIs!==null){
        t=Array.from(classIs)
        for(i of t)
        i.remove();
    }

    hh=0,mm=0,ss=0;
    timing.innerText="00 : 00 : 00";
    start.style.display="block";
    stopTime.style.display="none";
    reset.style.display="none";
    lap.style.display="block";
})


