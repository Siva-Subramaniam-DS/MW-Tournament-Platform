import React, { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { TournamentList } from './components/TournamentList.jsx';
import { TournamentBracket } from './components/TournamentBracket.jsx';
import { CreateTournament } from './components/CreateTournament.jsx';
import { LoginModal } from './components/LoginModal.jsx';
import { Footer } from './components/Footer.jsx';
import killswitchWallpaper from './wallpaper/Killswitch_wallpaper.png';
import tournamentWallpaper from './wallpaper/MW_bundle_e2_eventpassbundlemwwg24_0.75_1920x1080.png';
import createWallpaper from './wallpaper/ph25_093_1920x1080.jpg';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [user, setUser] = useState(null);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [tournaments, setTournaments] = useState([
    {
      id: '1',
      name: 'Spring Championship',
      game: 'Valorant',
      type: 'single-elimination',
      maxPlayers: 16,
      entryFee: 25,
      prizePool: 400,
      startDate: '2024-02-15T10:00:00',
      endDate: '2024-02-15T18:00:00',
      status: 'upcoming',
      registeredPlayers: [],
      matches: [],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: '',
      bracketLink: ''
    },
    {
      id: '2',
      name: 'Apex Legends Pro Series',
      game: 'Apex Legends',
      type: 'double-elimination',
      maxPlayers: 32,
      entryFee: 50,
      prizePool: 1600,
      startDate: '2024-02-20T14:00:00',
      endDate: '2024-02-21T20:00:00',
      status: 'live',
      registeredPlayers: [],
      matches: [],
      image: 'https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: '',
      bracketLink: ''
    },
    {
      id: '3',
      name: 'CS2 Major Qualifier',
      game: 'Counter-Strike 2',
      type: 'round-robin',
      maxPlayers: 8,
      entryFee: 100,
      prizePool: 800,
      startDate: '2024-02-25T12:00:00',
      endDate: '2024-02-25T22:00:00',
      status: 'upcoming',
      registeredPlayers: [],
      matches: [],
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: '',
      bracketLink: ''
    }
  ]);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://your-backend-url.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        setUser(username);
        setIsOrganizer(true); // You can decode the token to check role if needed
        setShowLoginModal(false);
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsOrganizer(false);
  };

  const handleViewTournament = (tournament) => {
    setSelectedTournament(tournament);
    setCurrentView('bracket');
  };

  const handleCreateTournament = (tournament) => {
    const newTournament = {
      ...tournament,
      id: Date.now().toString(),
      registeredPlayers: [],
      matches: []
    };
    setTournaments([...tournaments, newTournament]);
    setCurrentView('tournaments');
  };

  const handleDeleteTournament = (tournamentId) => {
    if (!window.confirm('Are you sure you want to delete this tournament?')) return;
    setTournaments(tournaments.filter(t => t.id !== tournamentId));
    setCurrentView('tournaments');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="relative min-h-screen w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${killswitchWallpaper})` }}>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10">
              <Hero 
                onExplore={() => setCurrentView('tournaments')} 
                onCreate={() => setCurrentView('create')} 
              />
              <TournamentList 
                tournaments={tournaments} 
                onViewTournament={handleViewTournament}
                showAll={false}
                isOrganizer={isOrganizer}
                onDeleteTournament={handleDeleteTournament}
              />
            </div>
          </div>
        );
      case 'tournaments':
        return (
          <div className="relative min-h-screen w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${tournamentWallpaper})` }}>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10">
              <TournamentList 
                tournaments={tournaments} 
                onViewTournament={handleViewTournament}
                showAll={true}
                isOrganizer={isOrganizer}
                onDeleteTournament={handleDeleteTournament}
              />
            </div>
          </div>
        );
      case 'create':
        return (
          <div className="relative min-h-screen w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${createWallpaper})` }}>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10">
              <CreateTournament onCreateTournament={handleCreateTournament} />
            </div>
          </div>
        );
      case 'bracket':
        return selectedTournament ? (
          <TournamentBracket tournament={selectedTournament} isOrganizer={isOrganizer} onDeleteTournament={handleDeleteTournament} />
        ) : null;
      default:
        return <Hero onExplore={() => setCurrentView('tournaments')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900 text-white">
      <Header 
        currentView={currentView}
        onNavigate={setCurrentView}
        user={user}
        isOrganizer={isOrganizer}
        onLogout={handleLogout}
        onLogin={() => setShowLoginModal(true)}
      />
      <main className="pt-20">
        {renderContent()}
      </main>
      <Footer />
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App; 