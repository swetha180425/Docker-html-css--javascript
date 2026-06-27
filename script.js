const buses=[

{
name:"Express Travels",
time:"08:00 AM",
fare:650
},

{
name:"Orange Travels",
time:"10:30 AM",
fare:750
},

{
name:"VRL Travels",
time:"07:30 PM",
fare:820
}

];

function searchBus(){

let html="";

buses.forEach(bus=>{

html+=`

<div class="bus-card">

<div class="bus-header">

<div>

<h2>${bus.name}</h2>

<p>Departure : ${bus.time}</p>

<p>Fare : ₹${bus.fare}</p>

</div>

</div>

<div class="seats">

${createSeats(bus)}

</div>

</div>

`;

});

document.getElementById("busList").innerHTML=html;

}

function createSeats(bus){

let seats="";

for(let i=1;i<=16;i++){

seats+=`<div class="seat"
onclick="bookSeat('${bus.name}',${bus.fare},${i},this)">
${i}
</div>`;

}

return seats;

}

function bookSeat(bus,fare,seat,element){

document.querySelectorAll(".seat").forEach(s=>{

s.classList.remove("selected");

});

element.classList.add("selected");

document.getElementById("busName").innerHTML=bus;

document.getElementById("seatNumber").innerHTML=seat;

document.getElementById("fare").innerHTML=fare;

}

document.getElementById("bookBtn").onclick=function(){

const bus=document.getElementById("busName").innerHTML;

const seat=document.getElementById("seatNumber").innerHTML;

if(bus=="-"){

alert("Please select a seat");

return;

}

alert(

`Booking Successful!

Bus : ${bus}

Seat : ${seat}

Thank You for choosing BusBook.`

);

}
