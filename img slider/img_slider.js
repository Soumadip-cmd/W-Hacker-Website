function next(){
    document.getElementById('img2').style.visibility="visible";
    document.getElementById('img1').style.visibility="hidden";
}
function prev(){
    document.getElementById('img1').style.visibility="visible";
    document.getElementById('img2').style.visibility="hidden";
}
function zoom(){
    let img2=document.getElementById('img2');
    let img1=document.getElementById('img1');
    let sml=document.getElementById('small');
    let k=null;
    if(k==null)
    {
        img1.style.transform="scale(1.5)";
        sml.style.right="3%";
    }
    
    if(img2.style.visibility=="hidden")
    {
        img1.style.transform="scale(1.5)";
        sml.style.right="3%";
    }
    if(img1.style.visibility=="hidden")
    {
        img2.style.transform="scale(1.5)";
        sml.style.right="3%";
    }
    
}
function small(){
    let img2=document.getElementById('img2');
    let img1=document.getElementById('img1');
    let sml=document.getElementById('small');
    let k=null
    if(k==null)
    {
        img1.style.transform="scale(1)";
        sml.style.right="37%";
    }
   
    if(img2.style.visibility=="hidden")
    {
        img1.style.transform="scale(1)";
        sml.style.right="37%";
    }
    if(img1.style.visibility=="hidden")
    {
        img2.style.transform="scale(1)";
        sml.style.right="37%";
    }
}