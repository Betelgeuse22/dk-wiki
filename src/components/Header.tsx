/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
  onGoHome: () => void;
  currentPageTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onGoHome }) => {
  return (
    <>
      {/* Статус-бар в стиле Telegram Mini App */}
      <div className="tg-status-bar">
        <span className="tg-badge">
          <span>●</span>
          <span>Telegram Mini App • Online</span>
        </span>
        <span>Версия 1.0 (Demo)</span>
      </div>

      {/* Основная шапка сайта */}
      <header className="app-header">
        <div className="header-brand" onClick={onGoHome} title="На главную">
          <h1 className="header-title">Дк. (Двухъярусная клетка)</h1>
          <span className="header-subtitle">Официальная интерактивная Wiki</span>
        </div>

        <button
          type="button"
          className="header-menu-btn"
          onClick={onOpenMenu}
          aria-label="Открыть меню разделов"
        >
          <span>☰</span>
          <span>Меню</span>
        </button>
      </header>
    </>
  );
};
