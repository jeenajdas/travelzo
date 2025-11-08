import { motion } from 'framer-motion';

const MyBookings = () => {
  const bookings = [
    {
      id: 'BK8X9Y2Z1A',
      from: 'New York',
      to: 'Boston',
      date: '2025-11-15',
      busName: 'Express Luxury',
      busType: 'AC Sleeper',
      departure: '08:00 AM',
      arrival: '12:30 PM',
      seats: ['3A', '3B'],
      totalPrice: 90,
      status: 'confirmed',
    },
    {
      id: 'BK4C5D6E7F',
      from: 'Los Angeles',
      to: 'San Francisco',
      date: '2025-11-20',
      busName: 'Comfort Express',
      busType: 'AC Sleeper',
      departure: '02:00 PM',
      arrival: '08:15 PM',
      seats: ['5C'],
      totalPrice: 65,
      status: 'confirmed',
    },
    {
      id: 'BK1G2H3I4J',
      from: 'Chicago',
      to: 'Detroit',
      date: '2025-10-10',
      busName: 'Premium Travels',
      busType: 'AC Seater',
      departure: '10:30 AM',
      arrival: '03:30 PM',
      seats: ['2B', '2C'],
      totalPrice: 76,
      status: 'completed',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600 text-lg">View and manage your bus tickets</p>
        </motion.div>

        {bookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-12 text-center"
          >
            <div className="text-6xl mb-4">🎫</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Bookings Yet</h2>
            <p className="text-gray-600 mb-6">
              You haven't made any bookings yet. Start your journey today!
            </p>
            <button
              onClick={() => (window.location.href = '/')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Book a Trip
            </button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {booking.from} → {booking.to}
                        </h3>
                        <p className="text-gray-600">Booking ID: {booking.id}</p>
                      </div>
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Bus</p>
                        <p className="font-semibold text-gray-900">{booking.busName}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-semibold text-gray-900">{booking.busType}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-semibold text-gray-900">{booking.date}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">Seats</p>
                        <p className="font-semibold text-gray-900">
                          {booking.seats.join(', ')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-8">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {booking.departure}
                        </p>
                        <p className="text-sm text-gray-600">Departure</p>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-600">
                          🚌
                        </span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{booking.arrival}</p>
                        <p className="text-sm text-gray-600">Arrival</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-8 lg:pl-8 lg:border-l border-gray-300">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-3xl font-bold text-blue-600">
                        ${booking.totalPrice}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                        Download Ticket
                      </button>

                      {booking.status === 'confirmed' && (
                        <button className="w-full px-6 py-2.5 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-red-500 hover:text-red-500 transition-all duration-200">
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
