import { useState, useEffect } from 'react';
import CRTScreen from './components/CRTScreen';
import TerminalWindow from './components/TerminalWindow';
import Terminal from './components/Terminal';
import MatrixRain from './components/MatrixRain';
import GridOverlay from './components/GridOverlay';
import './App.css';

function App() {
  // PATCH: Added real-time clock state to fix frozen time anomaly
  const [currentDate, setCurrentDate] = useState(new Date());

  // PATCH: Added theme state for dynamic theming
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.body.className = theme === 'default' ? '' : `theme-${theme}`;
  }, [theme]);

  // Real-time clock effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CRTScreen>
      {/* Matrix Rain Background - Pass color if needed, but CSS vars handle most */}
      <MatrixRain density={25} />
      <GridOverlay />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur border-b border-cyber-gray">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-cyber-green text-lg font-bold text-glow">
              Amresh Kumar
            </h1>
            <p className="text-cyber-greenDim text-xs">
              Cyber Security Student
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-cyber-gray hidden md:inline">
              {currentDate.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
              })}, {currentDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </span>
            <span className="text-cyber-green">●</span>
            <span className="text-cyber-greenDim">SECURE CONNECTION</span>
          </div>
        </div>
      </header>

      {/* Main Terminal */}
      <main className="pt-20 pb-8">
        <TerminalWindow title="amresh@portfolio:~/home">
          <Terminal setTheme={setTheme} />
        </TerminalWindow>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur border-t border-cyber-gray">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <span className="text-cyber-gray">
            amresh@portfolio:~$
          </span>
          <div className="flex items-center gap-6">
            <span className="text-cyber-greenDim">
              © 2025 Amresh Kumar
            </span>
            <span className="text-cyber-gray">
              {currentDate.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
              })}, {currentDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
              })}
            </span>
          </div>
        </div>
      </footer>
    </CRTScreen>
  );
}

export default App;
