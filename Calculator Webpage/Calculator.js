

function calculation(){
    let num1=document.getElementById('firstBox').value;
    let num2=document.getElementById('secondBox').value;
    let plus=document.getElementById('plus').value;
    let minus=document.getElementById('minus').value;
    let mul=document.getElementById('multipication').value;
    let div=document.getElementById('division').value;
    let select_option=document.getElementById('operators').value;
    let ans=document.getElementById('ans');
    
    
    let n1=parseInt(num1);
    let n2=parseInt(num2);
    if(select_option==plus)
    {
        ans.innerHTML=n1+n2;
    }
    else if(select_option==minus)
    {
        ans.innerHTML=n1-n2;
        
    }
    else if(select_option==mul)
    {
        ans.innerHTML=n1*n2;
    
    }
    else if(select_option==div)
    {
        ans.innerHTML=n1/n2;
        
    }
}

function reset(){
    document.getElementById('firstBox').value="";
    document.getElementById('secondBox').value="";
    document.getElementById('ans').innerHTML="";
}