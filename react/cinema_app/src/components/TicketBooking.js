import React from "react"

import "./TicketBooking.css"

export const TicketBooking = () => {
    const rows = 10
    const cols = 10
    const [bookedSeats, setBookedSeats] = React.useState([])
    const [selectedSeats, setSelectedSeats] = React.useState([])

    function clearSeats(seats) {
        seats.map(item => {
            item.className = 'seat';
            item.style.pointerEvents = 'auto'
            return null
        })
    }

    function clearSelectedSeats() {
        clearSeats(selectedSeats);
        setSelectedSeats([]);
    }

    function clearAllSeats() {
        clearSeats(selectedSeats);
        clearSeats(bookedSeats);
        setSelectedSeats([]);
        setBookedSeats([]);
    }

    function bookSeats() {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat');
        }
        selectedSeats.map(item => {
            if (!bookedSeats.includes(item.textContent)) {
                bookedSeats.push(item);
                item.classList.replace('selected', 'disabled');
                item.style.pointerEvents = 'none'
                setBookedSeats(bookedSeats);
            }
            return null
        })
        setSelectedSeats([]);
    }

    function selectSeat(seat) {
        if (!selectedSeats.includes(seat.target) && !bookedSeats.includes(seat.target)) {
            seat.target.classList.add('selected');
            selectedSeats.push(seat.target);
        } else {
            seat.target.classList.remove('selected');
            selectedSeats.pop(seat.target);
        }
        setSelectedSeats(selectedSeats);
    }

    let seatRowsTimeAuto = ""
    for (let i = 0; i <= cols; i++) {
        seatRowsTimeAuto += 'auto '
    }
    return (
        <div className="mt-50 layout-column justify-content-center align-items-center">
            <div className="display-flex">
                <button data-testid="book-seats" onClick={bookSeats} >Book Seats</button>
                <button data-testid="clear-selection" onClick={clearSelectedSeats} className="danger">Clear</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `${seatRowsTimeAuto}` }}>
                {Array(rows).fill(0).map((_, row) => (
                    <div key={row} style={row === 4 ? { marginRight: '40px' } : null}>{
                        Array(cols).fill(0).map((_, col) =>
                            <div
                                data-testid={`${row}${col}`}
                                onClick={selectSeat}
                                className="seat"
                                key={`${row}${col}`}>{`${String.fromCharCode(65 + col)}${row}`}
                            </div>
                        )
                    }</div>
                ))}
            </div>
            <br />
            <button data-testid="reset" onClick={clearAllSeats}>Reset Bookings</button>
        </div>
    )
}
