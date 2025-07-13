import React, { useState } from 'react';
import { Calendar, Users, Trophy, TowerControl as GameController, Upload, Link, FileText } from 'lucide-react';
import epitomeLogo from '../logos/Epitome_Watermark_White.png';
import fanplayLogo from '../logos/FNPNEWLOGO.png';
import survivorLogo from '../logos/Survivor.png';
import dlfLogo from '../logos/DLF.png';

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
  survivor: {
    name: 'Survivor',
    logo: survivorLogo,
    url: 'https://discord.gg/EJJtPkMRaA',
  },
  dlf: {
    name: 'DLF',
    logo: dlfLogo,
    url: 'https://discord.gg/2ZW4zuZjmf',
  },
};

export const CreateTournament = ({ onCreateTournament }) => {
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    type: 'single-elimination',
    maxPlayers: 8,
    prizePool: '',
    startDate: '',
    endDate: '',
    status: 'upcoming',
    image: '',
    banner: null,
    bracketLink: '',
    rules: '',
    registrationFormLink: '',
    discordServer: 'epitome',
  });
  const [bannerPreview, setBannerPreview] = useState(null);

  const gameOptions = [
    'Modern Warship',
    'Modern Warfare Tank Battle',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const tournament = {
      ...formData,
      image: bannerPreview || '', // Use uploaded banner/poster if available
      banner: bannerPreview || '', // Store the preview URL if available
      entryFee: 0 // No entry fee for organizer tournaments
    };
    onCreateTournament(tournament);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxPlayers' 
        ? parseInt(value) || 0 
        : value
    }));
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        banner: file
      }));
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Create Tournament
          </h1>
          <p className="text-white">
            Set up a new competitive gaming tournament for your community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tournament Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tournament Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                placeholder="Enter tournament name"
                required
              />
            </div>

            {/* Discord Server Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Discord Server
              </label>
              <select
                name="discordServer"
                value={formData.discordServer}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                required
              >
                <option value="epitome">Epitome main</option>
                <option value="fanplay">Fanplay</option>
                <option value="survivor">Survivor</option>
                <option value="dlf">DLF</option>
              </select>
            </div>

            {/* Game Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Game
              </label>
              <div className="relative">
                <GameController className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  name="game"
                  value={formData.game}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                >
                  <option value="">Select a game</option>
                  {gameOptions.map(game => (
                    <option key={game} value={game}>{game}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tournament Type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tournament Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                required
              >
                <option value="single-elimination">Single Elimination</option>
                <option value="double-elimination">Double Elimination</option>
                <option value="round-robin">Round Robin</option>
              </select>
            </div>

            {/* Max Players */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Max Players
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="number"
                  name="maxPlayers"
                  value={formData.maxPlayers}
                  onChange={handleInputChange}
                  min="4"
                  max="64"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* Prize Pool */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Prize Pool Details
              </label>
              <div className="relative">
                <Trophy className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  name="prizePool"
                  value={formData.prizePool}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Enter detailed prize pool information (e.g., 1st Place: $500, 2nd Place: $300, 3rd Place: $200)"
                  required
                />
              </div>
            </div>

            {/* Tournament Rules */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tournament Rules
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  name="rules"
                  value={formData.rules}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Enter tournament rules, eligibility, and other important information"
                  required
                />
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Start Date & Time
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                End Date & Time
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* Tournament Banner Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tournament Banner/Poster
              </label>
              <div className="relative">
                <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerUpload}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                />
              </div>
              {bannerPreview && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="max-h-48 rounded-lg border border-purple-500/20 object-contain"
                  />
                </div>
              )}
            </div>

            {/* Bracket Link */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bracket Link
              </label>
              <div className="relative">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="url"
                  name="bracketLink"
                  value={formData.bracketLink}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="https://challonge.com/your-tournament-bracket"
                />
              </div>
            </div>

            {/* Registration Form Link */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Registration Form Link
              </label>
              <div className="relative">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="url"
                  name="registrationFormLink"
                  value={formData.registrationFormLink}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="https://forms.gle/your-registration-form"
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          {formData.name && formData.game && (
            <div className="mt-8 p-6 bg-gray-700/30 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-4">Tournament Preview</h3>
              <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-purple-500/20">
                {bannerPreview ? (
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="w-full h-32 object-cover"
                  />
                ) : formData.game && (
                  <img
                    src={`https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={formData.game}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-xl font-bold text-white mb-2">{formData.name}</h4>
                  <p className="text-gray-400 mb-2">{formData.game}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 w-full">
                    <span>{formData.maxPlayers} players max</span>
                    <span className="text-yellow-400">Prize Pool: {formData.prizePool ? 'Set' : 'Not set'}</span>
                  </div>
                  {/* Discord Logo and Link */}
                  <div className="mt-4 flex items-center space-x-2">
                    <a
                      href={DISCORD_SERVERS[formData.discordServer].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={DISCORD_SERVERS[formData.discordServer].name}
                    >
                      <img
                        src={DISCORD_SERVERS[formData.discordServer].logo}
                        alt={DISCORD_SERVERS[formData.discordServer].name}
                        className="h-10 w-10 object-contain inline-block"
                      />
                    </a>
                    <span className="text-white text-sm">{DISCORD_SERVERS[formData.discordServer].name}</span>
                  </div>
                  {formData.bracketLink && (
                    <div className="mt-2 text-sm text-blue-400">
                      <Link className="h-3 w-3 inline mr-1" />
                      Bracket link provided
                    </div>
                  )}
                  {formData.registrationFormLink && (
                    <div className="mt-2 text-sm text-green-400">
                      <Link className="h-3 w-3 inline mr-1" />
                      Registration form link provided
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700/50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-700 hover:bg-blue-800 border-4 border-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Create Tournament
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 