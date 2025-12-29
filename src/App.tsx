import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import CRTScreen from './components/CRTScreen';
import TerminalWindow from './components/TerminalWindow';
import Terminal from './components/Terminal';
import MatrixRain from './components/MatrixRain';
import GridOverlay from './components/GridOverlay';
import Sidebar from './components/Sidebar';
import profilePhoto from './assets/profile-photo.png';
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

      {/* Sidebar with ID Card */}
      <Sidebar profilePhoto={profilePhoto} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur border-b border-cyber-gray transition-all duration-300">
        <div className="w-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 transition-all duration-300">
            <Shield className="w-8 h-8 text-cyber-green animate-pulse" />
            <div>
              <h1 className="text-cyber-green/80 text-lg font-bold tracking-wide uppercase shadow-none">
                Amresh Kumar
              </h1>
              <p className="text-cyber-greenDim text-[10px] tracking-wider uppercase">
                Cyber Security Student
              </p>
            </div>
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
      <main className="pt-20 pb-8 pl-12 md:pl-80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <TerminalWindow title="amresh@portfolio:~/home">
            <Terminal setTheme={setTheme} />
          </TerminalWindow>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur border-t border-cyber-gray pl-12 md:pl-80 transition-all duration-300">
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
