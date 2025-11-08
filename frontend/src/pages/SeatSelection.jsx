import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const SeatSelection = () => {
  const navigate = useNavigate();
  const { busId } = useParams();
  const location = useLocation();
  const { bus, searchData } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatLayout = [
    ['1A', '1B', '', '1C', '1D'],
    ['2A', '2B', '', '2C', '2D'],
    ['3A', '3B', '', '3C', '3D'],
    ['4A', '4B', '', '4C', '4D'],
    ['5A', '5B', '', '5C', '5D'],
    ['6A', '6B', '', '6C', '6D'],
    ['7A', '7B', '', '7C', '7D'],
    ['8A', '8B', '', '8C', '8D'],
    ['9A', '9B', '', '9C', '9D'],
    ['10A', '10B', '', '10C', '10D'],
  ];

  const bookedSeats = ['2B', '4C', '5A', '7D', '8B'];

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatStatus = (seat) => {
    if (bookedSeats.includes(seat)) return 'booked';
    if (selectedSeats.includes(seat)) return 'selected';
    return 'available';
  };

  const getSeatColor = (status) => {
    switch (status) {
      case 'booked':
        return 'bg-red-400 cursor-not-allowed';
      case 'selected':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'available':
      default:
        return 'bg-gray-200 hover:bg-gray-300';
    }
  };

  const totalPrice = selectedSeats.length * (bus?.price || 45);

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }

    navigate('/checkout', {
      state: {
        bus,
        searchData,
        selectedSeats,
        totalPrice,
      },
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Seats</h1>
          <p className="text-gray-600">
            {searchData?.from} → {searchData?.to} | {searchData?.date}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{bus?.name}</h2>
                <p className="text-gray-600">{bus?.type}</p>
              </div>

              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600">Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-400 rounded"></div>
                  <span className="text-sm text-gray-600">Booked</span>
                </div>
              </div>

              <div className="bg-gray-800 text-white text-center py-3 rounded-lg mb-8">
                <span className="font-semibold">Driver</span>
              </div>

              <div className="space-y-4">
                {seatLayout.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center space-x-4">
                    {row.map((seat, seatIndex) =>
                      seat ? (
                        <motion.button
                          key={seatIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSeatClick(seat)}
                          className={`w-12 h-12 rounded-lg font-semibold transition-all duration-200 ${getSeatColor(
                            getSeatStatus(seat)
                          )} ${
                            getSeatStatus(seat) === 'selected'
                              ? 'text-white'
                              : 'text-gray-700'
                          }`}
                          disabled={bookedSeats.includes(seat)}
                        >
                          {seat}
                        </motion.button>
                      ) : (
                        <div key={seatIndex} className="w-12 h-12"></div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-dark rounded-xl p-6 text-white sticky top-24"
            >
              <h2 className="text-xl font-bold mb-6">Booking Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Route:</span>
                  <span className="font-semibold">
                    {searchData?.from} → {searchData?.to}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-semibold">{searchData?.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bus:</span>
                  <span className="font-semibold">{bus?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Departure:</span>
                  <span className="font-semibold">{bus?.departure}</span>
                </div>
                <div className="flex justify-between">
                  <span>Arrival:</span>
                  <span className="font-semibold">{bus?.arrival}</span>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Selected Seats:</span>
                  <span className="font-semibold">
                    {selectedSeats.length > 0
                      ? selectedSeats.join(', ')
                      : 'None selected'}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Price per seat:</span>
                  <span className="font-semibold">${bus?.price}</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                disabled={selectedSeats.length === 0}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Proceed to Checkout
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
