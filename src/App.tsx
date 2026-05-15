import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import { AppLayout } from './components/layout/AppLayout';
import { LoadingScreen } from './components/shared/LoadingScreen';

// Public Pages
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { Contact } from './pages/public/Contact';
import { MenuPage } from './pages/public/MenuPage';

// Restricted Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { CuisineBoard } from './pages/kitchen/CuisineBoard';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, color: 'red', background: 'white' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Public Routes with Navbar/Footer Layout */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<MenuPage scanMode={false} />} />
          </Route>

          {/* Restricted / Standalone Routes */}
          <Route path="/menu/scan" element={<MenuPage scanMode={true} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/cuisine" element={<CuisineBoard />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
