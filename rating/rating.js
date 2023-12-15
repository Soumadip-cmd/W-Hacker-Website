
let star1=document.getElementById('star1');
let star2=document.getElementById('star2');
let star3=document.getElementById('star3');
let star4=document.getElementById('star4');
let star5=document.getElementById('star5');
let star=[star1,star2,star3,star4,star5];
function rate1()
{
    star[0].style.color="#ffa100";
    document.getElementById('para').innerHTML="1 Out Of 5😔";
    for(i=4;i>=1;i--)
    {
        star[i].style.color="#a29b9b";

    }
}
function rate2(){
    for(let i=0;i<=1;i++)
    {
        star[i].style.color="#ffa100";
    }
    for(i=4;i>=2;i--)
    {
        star[i].style.color="#a29b9b";

    }
    document.getElementById('para').innerHTML="2 Out Of 5😞";
}
function rate3(){
    for(let i=0;i<=2;i++)
    {
        star[i].style.color="#ffa100";
    }
    for(i=4;i>=3;i--)
    {
        star[i].style.color="#a29b9b";

    }
    document.getElementById('para').innerHTML="3 Out Of 5😐";
}
function rate4(){
    for(let i=0;i<=3;i++)
    {
        star[i].style.color="#ffa100";
    }
    for(i=4;i>=4;i--)
    {
        star[i].style.color="#a29b9b";

    }
    document.getElementById('para').innerHTML="4 Out Of 5🙂";
}
function rate5(){
    for(let i=0;i<=4;i++)
    {
        star[i].style.color="#ffa100";
    }
    document.getElementById('para').innerHTML="5 Out Of 5😀";
}