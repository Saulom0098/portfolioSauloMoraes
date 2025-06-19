'use client';

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, FileTextIcon } from './Icons';
import { Logo } from './Logo';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDoubleDropdown = () => setIsDoubleDropdownOpen(!isDoubleDropdownOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header>
      <nav className="bg-gray-200 border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse min-w-0">
            <Logo className="h-14 w-14 flex-shrink-0" />
            <span className="hidden md:block self-center text-2xl font-semibold dark:text-white truncate">
              Saulo Moraes
            </span>
          </a>
          
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 flex-shrink-0"
            aria-controls="navbar-multi-level"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {t('home', language)}
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {t('skills', language)}
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {t('projects', language)}
                </button>
              </li>
              
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  {t('contacts', language)}
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute left-0 top-full z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="https://linkedin.com/in/saulo-moraes-897418248" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white truncate">LinkedIn</a>
                    </li>
                    <li>
                      <a href="https://github.com/Saulom0098" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white truncate">GitHub</a>
                    </li>
                    <li>
                      <a href="https://wa.me/559884476541" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white truncate">WhatsApp</a>
                    </li>
                    <li>
                      <a href="https://t.me/+5598992328516" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white truncate">Telegram</a>
                    </li>
                    <li>
                      <a href="mailto:devwebsg@gmail.com" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white truncate">Email</a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li>
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 flex-shrink-0"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleLanguage}
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 flex-shrink-0 ml-2"
                >
                  {language === 'pt' ? 'EN' : 'PT'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
} 