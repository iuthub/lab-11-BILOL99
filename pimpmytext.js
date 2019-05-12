// alert('qwerty');
var but=document.getElementById('but');
var but2=document.getElementById('but2');

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


