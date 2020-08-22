const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
   const now = new Date();
   //Segundos
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

   //Minutos
   const mins = now.getMinutes();
   const minutesDegrees = ((mins / 60) * 360) + 90;
   minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

   //Hora
   const hour = now.getHours();
   const hourDegrees = ((hour / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);