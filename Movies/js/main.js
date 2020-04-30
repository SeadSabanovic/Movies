

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const checkOut = document.querySelector('.checkOut');

const count = document.querySelector('#count');
const total = document.querySelector('#total');

const ticketPrice = 10;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;

}
container.addEventListener('click', e => {
    
    if (e.target.classList.contains('checkOut')) {
        newSeats = container.getElementsByClassName('selected');
        
        for (i=0; i<newSeats.length; i++) {
            newSeats[i].classList.replace('selected', 'occupied');
            i--;
        }
    }
    else if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});
