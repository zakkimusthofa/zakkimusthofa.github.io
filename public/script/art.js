

// tombol memuculkan fitur take items =======================================================
const tTakeI = document.getElementById('tTakeI'); //tombol item take
const take = document.querySelector('.take');//form take yang akan di muncul kan dnegan tombol item take
const continerTable = document.querySelector('.cont-table')

tTakeI.addEventListener('click', (e) => {
    take.classList.toggle('activeTake');
    // continerTable.classList.toggle('activeCont');
    e.preventDefault();
});
document.addEventListener('click', (e) => {
    if (!tTakeI.contains(e.target) && !take.contains(e.target)) {
        take.classList.remove('activeTake')
        // continerTable.classList.toggle('activeCont');
    }
})


// tombol memuculkan fitur take items =======================================================
const tReceiveI = document.getElementById('tReceiveI'); //tombol item receive
const receive = document.querySelector('.receive');//form receive yang akan di muncul kan dnegan tombol item receive


tReceiveI.addEventListener('click', (e) => {
    receive.classList.toggle('activeReceive');
    // continerTable.classList.toggle('activeCont');
    e.preventDefault();
});
document.addEventListener('click', (e) => {
    if (!tReceiveI.contains(e.target) && !receive.contains(e.target)) {
        receive.classList.remove('activeReceive')
        // continerTable.classList.toggle('activeCont');
    }
})


// tombol memuculkan fitur take items =======================================================

const tAddI = document.getElementById('tAddI');
const add = document.querySelector('.add');

tAddI.addEventListener('click', (e) => {
    add.classList.toggle('activeAdd');
    // continerTable.classList.toggle('activeCont');
    e.preventDefault();
})
document.addEventListener('click', (e) => {
    if (!tAddI.contains(e.target) && !add.contains(e.target)) {
        add.classList.remove('activeAdd')
        // continerTable.classList.toggle('activeCont');
    }
})


//drag & drop function =============================================
