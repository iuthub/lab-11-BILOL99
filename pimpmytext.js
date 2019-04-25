// alert('qwerty');
var but=document.getElementById('but');
var tex = document.getElementById('text');
var bling= document.getElementById('bling');


but.addEventListener('click',function(){
    tex.style.fontSize= '24pt';
    
});

bling.addEventListener('click',function(){
    if (bling.checked==true){
        tex.style.color ='green';
        tex.style.fontStyle = 'italic';
        tex.style.textDecoration = 'underline';
        
        
    }
});
but.addEventListener('doubleclick',function(){
    if (bling.checked==true){
        tex.style.color ='red';
        tex.style.fontStyle = 'italic';
        tex.style.textDecoration = 'underline';
        
        
    }
});

