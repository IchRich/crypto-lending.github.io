function Click()
{
   const B = document.getElementById('Hi')
   B.classList.add('hidden')
   setTimeout(() => {
       B.style.display = 'none';
   }, 500);
}
