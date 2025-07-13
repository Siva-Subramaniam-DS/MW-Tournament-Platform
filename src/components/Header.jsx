import React from 'react';
import MWLogo from '../logos/MW main logo.png';
import { Users, Plus, LogOut, User, LogIn } from 'lucide-react';

export const Header = ({ currentView, onNavigate, user, isOrganizer, onLogout, onLogin }) => {
  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-blue-800/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onNavigate('home')}
          >
            <img src={MWLogo} alt="MW Main Logo" className="h-8 w-8 object-contain" />
            <span className="text-2xl font-bold text-white">
              MW Tournament Platform
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentView === 'home' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('tournaments')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                currentView === 'tournaments' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Tournaments</span>
            </button>
            {isOrganizer && (
              <button
                onClick={() => onNavigate('create')}
                className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                  currentView === 'create' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                <Plus className="h-4 w-4" />
                <span>Create Tournament</span>
              </button>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded-lg">
                  <User className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{user}</span>
                  {isOrganizer && (
                    <span className="px-2 py-1 text-xs bg-purple-600 text-white rounded-full">
                      Organizer
                    </span>
                  )}
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 transition-all"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 border-4 border-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}; 