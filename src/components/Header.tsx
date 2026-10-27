/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useI18n } from '../i18n.tsx';

interface HeaderProps {
  onOpenMenu: () => void;
  onGoHome: () => void;
  currentPageTitle?: string;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onGoHome,
  isDarkMode,
  onToggleTheme,
}) => {
  const { language, setLanguage, t } = useI18n();

  return (
    // Единая "липкая" обёртка для статус-бара и шапки
    <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      
      {/* Статус-бар в стиле Telegram Mini App */}
      <div className="tg-status-bar">
        <span className="tg-badge">
          <span>●</span>
          <span>{t.online}</span>
        </span>
        <span>{t.version}</span>
      </div>

      {/* Основная шапка сайта */}
      <header className="app-header" style={{ position: 'static' }}>
        <div className="header-brand" onClick={onGoHome} title={t.homeTitle}>
          <h1 className="header-title">{t.appTitle}</h1>
          <span className="header-subtitle">{t.wikiSubtitle}</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            type="button"
            className="header-menu-btn header-icon-btn"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            aria-label={language === 'ru' ? t.switchToEnglish : t.switchToRussian}
            title={language === 'ru' ? t.switchToEnglish : t.switchToRussian}
          >
            {language === 'ru' ? 'RU' : 'ENG'}
          </button>
          {/* Кнопка переключения темы (Светлая / Тёмная) */}
          <button
            type="button"
            className="header-menu-btn header-icon-btn"
            onClick={onToggleTheme}
            aria-label={t.themeLabel}
            title={isDarkMode ? t.lightTheme : t.darkTheme}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Кнопка открытия Меню */}
          <button
            type="button"
            className="header-menu-btn"
            onClick={onOpenMenu}
            aria-label={t.openMenu}
          >
            <span>☰</span>
            <span>{t.menu}</span>
          </button>
        </div>
      </header>
    </div>
  );
};