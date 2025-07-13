import React from 'react';
import { Trophy } from 'lucide-react';
import DLFLogo from '../logos/DLF.png';
import EpitomeLogo from '../logos/Epitome_Watermark_White.png';
import FanplayLogo from '../logos/FNPNEWLOGO.png';
import SurvivorLogo from '../logos/Survivor.png';
import MWLogo from '../logos/MW main logo.png';
import ArtstormLogo from '../logos/Artstorm--.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-blue-800/20 mt-16">
      <div className="container mx-auto px-4 py-6">
        {/* Place the animated logo carousel above copyright */}
        <div className="w-full flex justify-center items-center py-4">
          <div className="relative w-full h-28 overflow-hidden flex items-center justify-center">
            <div className="flex items-center animate-logo-marquee whitespace-nowrap">
              {/* First set of logos */}
              <a href="https://discord.gg/PmvWbAz5uC" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={MWLogo} alt="MW Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/2ZW4zuZjmf" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={DLFLogo} alt="DLF Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/UDKszQrZEU" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={EpitomeLogo} alt="Epitome Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/MMvJshqjEt" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={FanplayLogo} alt="Fanplay Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/EJJtPkMRaA" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={SurvivorLogo} alt="Survivor Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/artstorm-esports" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={ArtstormLogo} alt="Artstorm Discord" className="h-24 w-24 object-contain" />
              </a>
              {/* Second set of logos for seamless loop */}
              <a href="https://discord.gg/PmvWbAz5uC" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={MWLogo} alt="MW Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/2ZW4zuZjmf" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={DLFLogo} alt="DLF Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/UDKszQrZEU" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={EpitomeLogo} alt="Epitome Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/MMvJshqjEt" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={FanplayLogo} alt="Fanplay Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/EJJtPkMRaA" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={SurvivorLogo} alt="Survivor Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/artstorm-esports" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={ArtstormLogo} alt="Artstorm Discord" className="h-24 w-24 object-contain" />
              </a>
              {/* Third set of logos for extra smooth transition */}
              <a href="https://discord.gg/PmvWbAz5uC" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={MWLogo} alt="MW Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/2ZW4zuZjmf" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={DLFLogo} alt="DLF Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/UDKszQrZEU" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={EpitomeLogo} alt="Epitome Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/MMvJshqjEt" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={FanplayLogo} alt="Fanplay Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/EJJtPkMRaA" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={SurvivorLogo} alt="Survivor Discord" className="h-24 w-24 object-contain" />
              </a>
              <a href="https://discord.gg/artstorm-esports" target="_blank" rel="noopener noreferrer" className="inline-block px-4">
                <img src={ArtstormLogo} alt="Artstorm Discord" className="h-24 w-24 object-contain" />
              </a>
            </div>
          </div>
        </div>
        {/* End animated logo carousel */}
        <div className="border-t border-gray-800 mt-4 pt-4 text-center">
          <p className="text-white text-sm">
            © MW Tournament Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 