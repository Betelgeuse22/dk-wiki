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
          onClick={(e) => {
            e.preventDefault();
            alert('Ссылка-заглушка: Здесь будет подключен официальный Telegram-канал проекта «Дк.»!');
          }}
        >
          <span>✈️</span>
          <span>Telegram</span>
        </a>

        <a
          href="#tiktok"
          className="social-link-btn"
          title="TikTok проекта"
          onClick={(e) => {
            e.preventDefault();
            alert('Ссылка-заглушка: Здесь будет подключен TikTok проекта «Дк.» с тизерами и анимациями!');
          }}
        >
          <span>🎵</span>
          <span>TikTok</span>
        </a>

        <a
          href="#youtube"
          className="social-link-btn"
          title="YouTube канал"
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
