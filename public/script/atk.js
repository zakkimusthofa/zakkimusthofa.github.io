

// tombol memuculkan fitur take items =======================================================
const tTakeI = document.getElementById('tTakeI'); //tombol item take
const take = document.querySelector('.form .take');//form take yang akan di muncul kan dnegan tombol item take


tTakeI.addEventListener('click', (e) => {
    take.classList.toggle('activeTake');
    e.preventDefault();
});
document.addEventListener('click', (e) => {
    if(!tTakeI.contains(e.target) && !take.contains(e.target)){
        take.classList.remove('activeTake')
    }
})


// tombol memuculkan fitur take items =======================================================
const tReceiveI = document.getElementById('tReceiveI'); //tombol item receive
const receive = document.querySelector('.form .receive');//form receive yang akan di muncul kan dnegan tombol item receive


tReceiveI.addEventListener('click', (e) => {
    receive.classList.toggle('activeReceive');
    e.preventDefault();
});
document.addEventListener('click', (e) => {
    if(!tReceiveI.contains(e.target) && !receive.contains(e.target)){
        receive.classList.remove('activeReceive')
    }
})


// tombol memuculkan fitur take items =======================================================

const tAddI = document.getElementById('tAddI');
const add = document.querySelector('.add');

tAddI.addEventListener('click', (e) => {
    add.classList.toggle('activeAdd');
    e.preventDefault();
})
document.addEventListener('click', (e) => {
    if(!tAddI.contains(e.target) && !add.contains(e.target)){
        add.classList.remove('activeAdd')
    }
})