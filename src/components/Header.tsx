/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

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
  return (
    // Единая "липкая" обёртка для статус-бара и шапки
    <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      
      {/* Статус-бар в стиле Telegram Mini App */}
      <div className="tg-status-bar">
        <span className="tg-badge">
          <span>●</span>
          <span>Telegram Mini App • Online</span>
        </span>
        <span>Версия 1.0 (Demo)</span>
      </div>

      {/* Основная шапка сайта */}
      <header className="app-header" style={{ position: 'static' }}>
        <div className="header-brand" onClick={onGoHome} title="На главную">
          <h1 className="header-title">Дк. (Двухъярусная клетка)</h1>
          <span className="header-subtitle">Официальная интерактивная Wiki</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {/* Кнопка переключения темы (Светлая / Тёмная) */}
          <button
            type="button"
            className="header-menu-btn"
            onClick={onToggleTheme}
            aria-label="Переключить тему"
            title={isDarkMode ? 'Включить светлую тему' : 'Включить тёмную тему'}
            style={{ padding: '8px 10px', fontSize: '16px' }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Кнопка открытия Меню */}
          <button
            type="button"
            className="header-menu-btn"
            onClick={onOpenMenu}
            aria-label="Открыть меню разделов"
          >
            <span>☰</span>
            <span>Меню</span>
          </button>
        </div>
      </header>
    </div>
  );
};