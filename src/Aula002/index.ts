//Utilize o any em útimo caso

function showMessage(msg: any){
  return msg;
}
console.log(showMessage('Olá'));
console.log(showMessage(1));
console.log(showMessage([1, 2, 3]));
