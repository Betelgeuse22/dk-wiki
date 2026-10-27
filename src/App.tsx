/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { MenuModal, PageId } from './components/MenuModal.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { CharactersPage } from './pages/CharactersPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { EndingsPage } from './pages/EndingsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 1. Добавляем состояние для тёмной темы (с проверкой localStorage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // 2. Эффект для переключения CSS-переменных при клике
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onToast={showToast} />;
      case 'characters':
        return <CharactersPage onToast={showToast} />;
      case 'gallery':
        return <GalleryPage />;
      case 'endings':
        return <EndingsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={handleNavigate} onToast={showToast} />;
    }
  };

  return (
    <div className="app-container">
      {/* 3. Передаём состояние и функцию в шапку сайта */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onGoHome={() => handleNavigate('home')}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Оверлей меню выбора разделов новеллы */}
      <MenuModal
        isOpen={isMenuOpen}
        currentPage={currentPage}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Основная область контента выбранной страницы */}
      <main className="main-content">{renderCurrentPage()}</main>

      {/* Подвал сайта (общий для всех страниц) */}
      <Footer />

      {/* Всплывающее интерактивное уведомление действий новеллы */}
      {toastMessage && <div className="vn-toast">{toastMessage}</div>}
    </div>
  );
}