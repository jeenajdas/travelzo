import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingId, bus, searchData, selectedSeats, totalPrice, passengerInfo } =
    location.state || {};

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Booking Confirmed!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 text-lg mb-8"
          >
            Your ticket has been booked successfully. A confirmation email has been sent to{' '}
            <span className="font-semibold">{passengerInfo?.email}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">Booking ID</h2>
            <p className="text-3xl font-mono">{bookingId}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-gray-50 rounded-xl p-6 mb-8 text-left"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Journey Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Route</p>
                <p className="font-semibold text-gray-900">
                  {searchData?.from} → {searchData?.to}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Travel Date</p>
                <p className="font-semibold text-gray-900">{searchData?.date}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Bus Name</p>
                <p className="font-semibold text-gray-900">{bus?.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Bus Type</p>
                <p className="font-semibold text-gray-900">{bus?.type}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Departure Time</p>
                <p className="font-semibold text-gray-900">{bus?.departure}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Arrival Time</p>
                <p className="font-semibold text-gray-900">{bus?.arrival}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Seat Numbers</p>
                <p className="font-semibold text-gray-900">{selectedSeats?.join(', ')}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Total Amount Paid</p>
                <p className="font-semibold text-green-600 text-xl">${totalPrice}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Passenger Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-900">{passengerInfo?.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{passengerInfo?.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{passengerInfo?.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-semibold text-gray-900">{passengerInfo?.age} years</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/my-bookings')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              View My Bookings
            </button>

            <button
              onClick={() => window.print()}
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
            >
              Download Ticket
            </button>

            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
            >
              Book Another Trip
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Need help? Contact us at{' '}
            <a href="mailto:support@busbook.com" className="text-blue-600 hover:underline">
              support@busbook.com
            </a>{' '}
            or call{' '}
            <a href="tel:1-800-BUS-BOOK" className="text-blue-600 hover:underline">
              1-800-BUS-BOOK
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSuccess;
