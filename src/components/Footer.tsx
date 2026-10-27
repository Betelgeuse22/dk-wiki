/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-social-title">
        <span>💌 Официальные каналы проекта:</span>
      </div>

      <div className="footer-social-row">
        <a
          href="#telegram"
          className="social-link-btn"
          title="Официальный Telegram-канал"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            alert('Ссылка-заглушка: Здесь будет подключен официальный Telegram-канал проекта «Дк.»!');
          }}
        >
          <span>✈️</span>
          <span>Telegram</span>
        </a>

        <a
          href="https://www.tiktok.com/@twotier.cage"
          className="social-link-btn"
          title="TikTok проекта"
          target="_blank"
        >
          <span>🎵</span>
          <span>TikTok</span>
        </a>

        <a
          href="#youtube"
          className="social-link-btn"
          title="YouTube канал"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            alert('Ссылка-заглушка: Здесь будет подключен YouTube-канал проекта «Дк.» с трейлерами и саундтреком!');
          }}
        >
          <span>▶️</span>
          <span>YouTube</span>
        </a>
      </div>

      <div className="footer-copyright">
        © Официальная Wiki по проекту «Дк. (Двухъярусная клетка)». Все права защищены.
      </div>
    </footer>
  );
};
