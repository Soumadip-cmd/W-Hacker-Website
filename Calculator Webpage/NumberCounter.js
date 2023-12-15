function start(){
    alert("Don't press start button repeatedly....else reason for system Crash!!");
    let num=document.getElementById("no").value;
    let n=parseInt(num);
    let k=n;
    let time=setInterval(()=>
    {
        if(n<=k)
        {
            document.getElementsByClassName('counter')[0].innerHTML=n;
            n--;
        }
        if(n==(-1))
        {
            //console.log('hey');
            clearInterval(time);
            document.getElementsByClassName('text')[0].innerHTML="Your time is Up!!.."
        }
    },1000);
    
}
//clearInterval();
function rese(){
    document.getElementsByClassName('counter')[0].innerHTML=null;
    document.getElementById('text').innerText=" ";
}
function go()
{
    let num=document.getElementById("no").value
    prompt("Confirm Counter Number",num);
    let n1=parseInt(num);
    document.getElementsByClassName('counter')[0].innerHTML=n1;
    
}