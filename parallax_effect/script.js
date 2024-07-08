var main=document.getElementsByClassName('main')[0];
var tapeleft=document.getElementById("tapeleftt");
var taperight=document.getElementById("taperightt");
var robo=document.getElementById('robot');

main.addEventListener("scroll",function(){
    let value=main.scrollTop;
    tapeleft.style.marginLeft= -value+ 'px';
    taperight.style.marginRight=-value+"px";
    var newvalue=value-10;
    console.log(value);
    if(value===27.55555534362793){
        robo.style.filter="blur(0px)";
    }
    else if(value==0 && value <= 30){
        robo.style.filter="blur(0px)";
    }else{
        robo.style.filter="blur("+newvalue+"px)";
    }
})

const start=()=>{
    robo.style.filter="blur(0px)";
}
