import React from 'react';
import { Link, FileText, Trash2 } from 'lucide-react';
import epitomeLogo from '../logos/Epitome_Watermark_White.png';
import fanplayLogo from '../logos/FNPNEWLOGO.png';

const DISCORD_SERVERS = {
  epitome: {
    name: 'Epitome main',
    logo: epitomeLogo,
    url: 'https://discord.gg/UDKszQrZEU',
  },
  fanplay: {
    name: 'Fanplay',
    logo: fanplayLogo,
    url: 'https://discord.gg/MMvJshqjEt',
  },
};

export const TournamentBracket = ({ tournament, isOrganizer, onDeleteTournament }) => {
  const discord = DISCORD_SERVERS[tournament.discordServer] || DISCORD_SERVERS['epitome'];
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 border border-purple-500/20">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {tournament.name}
            </h1>
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
          <div className="mb-6">
            <img
              src={tournament.banner || tournament.image}
              alt={tournament.name}
              className="w-full h-48 object-cover rounded-lg border border-purple-500/20 mb-4"
            />
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Tournament Rules */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center"><FileText className="h-5 w-5 mr-2 text-purple-400" />Tournament Rules</h2>
                <div className="bg-gray-900/60 rounded-lg p-4 text-gray-200 whitespace-pre-line min-h-[100px]">
                  {tournament.rules || 'No rules provided.'}
                </div>
              </div>
            </div>
            {/* Discord Server Logo and Link */}
            <div className="mt-6 flex items-center space-x-2">
              <a
                href={discord.url}
                target="_blank"
                rel="noopener noreferrer"
                title={discord.name}
              >
                <img
                  src={discord.logo}
                  alt={discord.name}
                  className="h-10 w-10 object-contain inline-block"
                />
              </a>
              <span className="text-white text-sm">{discord.name}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-8">
            {/* Bracket Link */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white mb-2">Tournament Bracket</h2>
              {tournament.bracketLink ? (
                <a
                  href={tournament.bracketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  <Link className="h-4 w-4 mr-2" />
                  View Bracket
                </a>
              ) : (
                <span className="text-gray-400">No bracket link provided.</span>
              )}
            </div>
            {/* Registration Form Link */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white mb-2">Tournament Registration</h2>
              {tournament.registrationFormLink ? (
                <a
                  href={tournament.registrationFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
                >
                  <Link className="h-4 w-4 mr-2" />
                  Registration Form
                </a>
              ) : (
                <span className="text-gray-400">No registration form link provided.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 