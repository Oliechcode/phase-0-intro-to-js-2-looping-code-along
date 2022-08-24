// Code your solutions in this file

const giftGiver = ["Guadalupe", "Ollie", "Aki"]

function writeCards(giftGiver, string) {
  const newGiftGiver=[];
 for (let i=0; i<giftGiver.length; i++)  {
 newGiftGiver.push(`Thank you, ${giftGiver[i]}, for the wonderful ${string} gift!`) 
 }
 return newGiftGiver; 
}




function countDown(number) {
 while (number>=0) {
  console.log(number--)
 }
}
  