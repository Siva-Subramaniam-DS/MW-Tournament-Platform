import React from 'react';
import { Play } from 'lucide-react';
import PlayerLogo from '../logos/AvatarPortrait_ChristopherLee_Widget.png';
import PremiumLogo from '../logos/premiumAccount.png';
import LiveLogo from '../logos/channels4_profile.png';

export const Hero = ({ onExplore, onCreate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-slate-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.1),transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse text-white">
            Tournament Organizer
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            The ultimate platform for organizing competitive gaming tournaments. Create, manage, and host professional esports competitions with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={onExplore}
              className="group px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold border-4 border-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="h-5 w-5 group-hover:animate-pulse" />
              <span>View Tournaments</span>
            </button>
            <button className="px-8 py-4 border-4 border-blue-700 text-blue-300 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105" onClick={onCreate}>
              Create Tournament
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800/20 hover:border-blue-600/40 transition-all duration-300 hover:transform hover:scale-105">
              <img src={PremiumLogo} alt="Tournament Management" className="h-16 w-16 mx-auto mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-white mb-2">Tournament Management</h3>
              <p className="text-white">Create and manage professional esports tournaments with custom brackets and prize pools.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800/20 hover:border-blue-600/40 transition-all duration-300 hover:transform hover:scale-105">
              <img src={PlayerLogo} alt="Player Registration" className="h-16 w-16 mx-auto mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-white mb-2">Player Registration</h3>
              <p className="text-white">Manage player registrations, brackets, and tournament progression in real-time.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800/20 hover:border-blue-600/40 transition-all duration-300 hover:transform hover:scale-105">
              <img src={LiveLogo} alt="Live Updates" className="h-16 w-16 mx-auto mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-white mb-2">Live Updates</h3>
              <p className="text-white">Real-time tournament brackets, scores, and instant match updates for participants.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 