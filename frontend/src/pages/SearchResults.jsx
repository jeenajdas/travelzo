import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchData = location.state || { from: 'New York', to: 'Boston', date: '2025-11-01', passengers: 1 };

  const [filters, setFilters] = useState({
    busType: 'all',
    seatType: 'all',
    priceRange: 'all',
    timing: 'all',
  });

  const [sortBy, setSortBy] = useState('price');

  const buses = [
    {
      id: 1,
      name: 'Express Luxury',
      type: 'AC Sleeper',
      departure: '08:00 AM',
      arrival: '12:30 PM',
      duration: '4h 30m',
      price: 45,
      seatsAvailable: 12,
      rating: 4.5,
      amenities: ['WiFi', 'Charging Port', 'Water Bottle', 'Blanket'],
    },
    {
      id: 2,
      name: 'Premium Travels',
      type: 'AC Seater',
      departure: '10:30 AM',
      arrival: '03:15 PM',
      duration: '4h 45m',
      price: 38,
      seatsAvailable: 8,
      rating: 4.3,
      amenities: ['WiFi', 'Charging Port', 'Water Bottle'],
    },
    {
      id: 3,
      name: 'Comfort Express',
      type: 'AC Sleeper',
      departure: '02:00 PM',
      arrival: '06:30 PM',
      duration: '4h 30m',
      price: 50,
      seatsAvailable: 15,
      rating: 4.7,
      amenities: ['WiFi', 'Charging Port', 'Water Bottle', 'Blanket', 'Meals'],
    },
    {
      id: 4,
      name: 'Budget Bus',
      type: 'Non-AC Seater',
      departure: '06:00 AM',
      arrival: '11:00 AM',
      duration: '5h 00m',
      price: 25,
      seatsAvailable: 20,
      rating: 4.0,
      amenities: ['Water Bottle'],
    },
    {
      id: 5,
      name: 'Royal Coach',
      type: 'AC Sleeper',
      departure: '11:00 PM',
      arrival: '03:45 AM',
      duration: '4h 45m',
      price: 55,
      seatsAvailable: 6,
      rating: 4.8,
      amenities: ['WiFi', 'Charging Port', 'Water Bottle', 'Blanket', 'Meals', 'Entertainment'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-xl p-6 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {searchData.from} → {searchData.to}
              </h1>
              <p className="text-gray-600">
                {searchData.date} • {searchData.passengers} Passenger(s)
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Modify Search
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Bus Type</h3>
                  <div className="space-y-2">
                    {['all', 'AC Sleeper', 'AC Seater', 'Non-AC Seater'].map((type) => (
                      <label key={type} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="busType"
                          checked={filters.busType === type}
                          onChange={() => setFilters({ ...filters, busType: type })}
                          className="mr-2"
                        />
                        <span className="text-gray-700 capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'All Prices', value: 'all' },
                      { label: 'Under $30', value: 'under30' },
                      { label: '$30 - $50', value: '30-50' },
                      { label: 'Above $50', value: 'above50' },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === range.value}
                          onChange={() => setFilters({ ...filters, priceRange: range.value })}
                          className="mr-2"
                        />
                        <span className="text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Timing</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'All Times', value: 'all' },
                      { label: 'Morning (6AM-12PM)', value: 'morning' },
                      { label: 'Afternoon (12PM-6PM)', value: 'afternoon' },
                      { label: 'Night (6PM-6AM)', value: 'night' },
                    ].map((time) => (
                      <label key={time.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="timing"
                          checked={filters.timing === time.value}
                          onChange={() => setFilters({ ...filters, timing: time.value })}
                          className="mr-2"
                        />
                        <span className="text-gray-700">{time.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{buses.length} buses found</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="price">Sort by: Price</option>
                <option value="time">Sort by: Departure Time</option>
                <option value="rating">Sort by: Rating</option>
                <option value="duration">Sort by: Duration</option>
              </select>
            </div>

            <div className="space-y-6">
              {buses.map((bus, index) => (
                <motion.div
                  key={bus.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-6 shadow-lg cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{bus.name}</h3>
                          <p className="text-gray-600">{bus.type}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          <span className="font-semibold">{bus.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8 mb-4">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{bus.departure}</p>
                          <p className="text-sm text-gray-600">Departure</p>
                        </div>
                        <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-600">
                            {bus.duration}
                          </span>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{bus.arrival}</p>
                          <p className="text-sm text-gray-600">Arrival</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {bus.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <div className="text-right">
                        <p className="text-3xl font-bold text-blue-600">${bus.price}</p>
                        <p className="text-sm text-gray-600">{bus.seatsAvailable} seats left</p>
                      </div>
                      <button
                        onClick={() => navigate(`/seat-selection/${bus.id}`, { state: { bus, searchData } })}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        Select Seats
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
