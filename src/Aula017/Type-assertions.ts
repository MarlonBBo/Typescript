//Recomendado
//Condicional
const body1 = document.querySelector('body');
if(body1)body1.style.background = 'back';

//Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'back';


//Não recomendado
//Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'back';
