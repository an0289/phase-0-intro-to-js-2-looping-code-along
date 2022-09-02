for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`); 
 
}
const gifts = ["teddy bear", "drone", "doll"]
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
  }
  return gifts
}
wrapGifts(gifts)

const cardMessage = []
function writeCards(friend, anniversary) {
for (let i = 0; i < friend.length; i++) {
  cardMessage.push(`Thank you, ${friend[i]}, for the wonderful ${anniversary} gift!`)
}
return cardMessage
}

function countDown(number) { 
  while (number >= 0) {
    console.log(number--)
  }
}






