import React, { useState } from 'react';
import { Calendar, Users, Trophy, Filter, Search, Trash2 } from 'lucide-react';

export const TournamentList = ({ 
  tournaments, 
  onViewTournament, 
  showAll,
  isOrganizer,
  onDeleteTournament
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [gameFilter, setGameFilter] = useState('all');

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || tournament.status === statusFilter;
    const matchesGame = gameFilter === 'all' || tournament.game === gameFilter;
    
    return matchesSearch && matchesStatus && matchesGame;
  });

  const displayTournaments = showAll ? filteredTournaments : filteredTournaments.slice(0, 3);
  // Only include these two games in the dropdown
  const games = ['Modern Warship', 'Modern Warfare Tank Battle'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-green-500';
      case 'upcoming': return 'bg-blue-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live': return 'Live Now';
      case 'upcoming': return 'Upcoming';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {showAll ? 'All Tournaments' : 'Featured Tournaments'}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {showAll 
              ? 'Discover and view competitive gaming tournaments across multiple games and formats'
              : 'View the most exciting competitive gaming tournaments happening right now'
            }
          </p>
        </div>

        {showAll && (
          <div className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tournaments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="live">Live</option>
                <option value="completed">Completed</option>
              </select>
              <select
                value={gameFilter}
                onChange={(e) => setGameFilter(e.target.value)}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Games</option>
                {games.map(game => (
                  <option key={game} value={game}>{game}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="relative" onClick={() => onViewTournament(tournament)}>
                <img
                  src={tournament.banner || tournament.image}
                  alt={tournament.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(tournament.status)}`}>
                    {getStatusText(tournament.status)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 px-3 py-1 rounded-full text-sm font-medium text-white">
                    {tournament.game}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                  {isOrganizer && (
                    <button
                      className="ml-2 p-2 rounded-full bg-red-600/20 text-red-400 hover:bg-red-600/40 transition-all"
                      title="Delete Tournament"
                      onClick={() => onDeleteTournament(tournament.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <p className="text-gray-400 mb-4 capitalize">{tournament.type.replace('-', ' ')}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(tournament.startDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {tournament.registeredPlayers.length}/{tournament.maxPlayers} players
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">${tournament.prizePool}</span>
                  </div>
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-sm font-medium"
                    onClick={() => onViewTournament(tournament)}
                  >
                    {tournament.status === 'live' ? 'Watch Live' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && tournaments.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Tournaments
            </button>
          </div>
        )}
      </div>
    </section>
  );
}; 