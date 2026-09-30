import { useState, useEffect } from 'react';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('Lahore');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '1242a1ef42b026c836409feb703bf783';

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found. Please check spelling.');
      }

      const data = await response.json();
      setWeather({
        city: `${data.name}, ${data.sys.country}`,
        temp: `${Math.round(data.main.temp)}°C`,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: `${data.main.humidity}%`,
        wind: `${Math.round(data.wind.speed * 3.6)} km/h`,
        iconCode: data.weather[0].icon
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(searchQuery);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setSearchQuery(city);
    fetchWeather(city);
    setCity('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#f8fafc', fontWeight: '700', marginBottom: '0.5rem' }}>
          Live Weather Forecast
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Real-time weather data powered by OpenWeatherMap API.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Enter city (e.g. London, Karachi, Tokyo)..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            flexGrow: 1,
            padding: '12px 16px',
            borderRadius: '10px',
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            outline: 'none',
            fontSize: '0.95rem'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '12px 20px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            color: '#fff',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}
        >
          Search
        </button>
      </form>

      {/* Loading state */}
      {loading && (
        <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '1.1rem', padding: '2rem' }}>
          Fetching weather data...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{ 
          textAlign: 'center', 
          color: '#f87171', 
          background: 'rgba(239, 68, 68, 0.1)', 
          padding: '12px', 
          borderRadius: '10px', 
          border: '1px solid rgba(239, 68, 68, 0.2)' 
        }}>
          {error}
        </div>
      )}

      {/* Weather Display Card */}
      {!loading && weather && (
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
        }}>
          <img 
            src={`https://openweathermap.org/img/wn/${weather.iconCode}@2x.png`} 
            alt={weather.condition}
            style={{ width: '80px', height: '80px', margin: '-10px 0' }}
          />

          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#f1f5f9', fontWeight: '700' }}>{weather.city}</h2>
            <p style={{ color: '#818cf8', fontWeight: '500', fontSize: '1rem', marginTop: '4px', textTransform: 'capitalize' }}>
              {weather.description}
            </p>
          </div>

          <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#38bdf8', letterSpacing: '-1px' }}>
            {weather.temp}
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            width: '100%',
            marginTop: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.3)', padding: '12px', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>HUMIDITY</span>
              <span style={{ fontSize: '1.1rem', color: '#f1f5f9', fontWeight: '600' }}>{weather.humidity}</span>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.3)', padding: '12px', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>WIND SPEED</span>
              <span style={{ fontSize: '1.1rem', color: '#f1f5f9', fontWeight: '600' }}>{weather.wind}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}