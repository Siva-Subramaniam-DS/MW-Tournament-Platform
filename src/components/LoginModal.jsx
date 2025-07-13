import React, { useState } from 'react';
import { X, LogIn } from 'lucide-react';

export const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setUsername('');
    setPassword('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md border border-blue-800/20 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex items-center space-x-2 mb-6">
          <LogIn className="h-8 w-8 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Login</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter username"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-700 hover:bg-blue-800 border-4 border-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            Use "viewer/viewer" for read-only access
          </p>
        </div>
      </div>
    </div>
  );
}; 