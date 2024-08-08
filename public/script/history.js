// function untuk menampilkan form dengan tombol ctrl + g
const tabel = document.querySelector('.searchingItems')
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'g') {
        tabel.classList.toggle('active');
        e.preventDefault();
    }
})

// function untuk mengganti button form searcy history dengan tombol enter
document.addEventListener('DOMContentLoaded', () => {
    const formAction = document.getElementById('historyForm')
    formAction.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {//kombinasi tombol
            e.preventDefault();
            formAction.submit();
        }
    })
})

//kombinasi tombol untuk select all data
document.addEventListener('DOMContentLoaded', () => {
    const selectForm = document.getElementById('selectAll');
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'Enter') { // Kombinasi tombol yang diinginkan
            e.preventDefault();
            selectForm.submit();
        }
    });
});


// show detile items function 
document.addEventListener('DOMContentLoaded', () => {
    const linkShow = document.querySelector('.show');
    const tableShow = document.querySelectorAll('.tableShow')
    tableShow.forEach(element => {
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            //cari posisi cursor pada saat click
            const { clientX, clientY } = e;

            //menampilkan div linkShow dan mengatur posisi
            linkShow.classList.toggle('activeShow');
            linkShow.style.left = `${clientX}px`;
            linkShow.style.top = `${clientY}px`;
        })
    })

    // fungtion untuk emnghlangkan show detiles items
    document.addEventListener('click', (e) => {
        if (!linkShow.contains(e.target) /*&& !Array.from(tableShow).some(el => el.contains(e.target) ))*/) {
            linkShow.classList.remove('activeShow');  // Ganti ActiveShow dengan activeShow untuk konsistensi
        }
    });
});
