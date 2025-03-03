import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClickableImage from './components/ClickableAssets/ClickableImage.jsx';
import testImage from './assets/pictures/1-16dfb034.png'
import Login from './pages/Login.jsx'
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import PhidgetErrorBoundary from './components/PhidgetErrorBoundary';
import { questions } from './data/quizQuestions.js';
import ClickableQuestion from './components/ClickableAssets/ClickableQuestion.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true);
        setIsLoading(false);
      } catch (error) {
        console.error('App initialization error:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Router>
      <PhidgetErrorBoundary>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leaderboard" element={<div>Leaderboard Coming Soon</div>} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/jonathan-hudson<3" element={<div><ClickableQuestion 
              imageSrc={testImage}
              questionId={1}
              top={500}
              left={500}/></div>}/>
            </Routes>
          </main>
        </div>
      </PhidgetErrorBoundary>
    </Router>
  );
}

export default App;
