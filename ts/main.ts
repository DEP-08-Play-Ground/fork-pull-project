const pointer = document.getElementById('pointer')!;
const circ=document.getElementById('circle')!;

window.addEventListener('mousemove',(e)=>{
   pointer.style.left = (e.clientX +15)+'px';
   pointer.style.top=(e.clientY+15)+'px';
   circ.style.left=(e.clientY+10)+'px';
   circ.style.top=(e.clientX+10)+'px';
});