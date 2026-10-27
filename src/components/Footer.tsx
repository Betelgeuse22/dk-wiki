/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useI18n } from '../i18n.tsx';

export const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="app-footer">
      <div className="footer-social-title">
        <span>💌 {t.channels}</span>
      </div>

      <div className="footer-social-row">
        <a
          href="#telegram"
          className="social-link-btn"
          title={t.telegramTitle}
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            alert(t.telegramAlert);
          }}
        >
          <span>✈️</span>
          <span>Telegram</span>
        </a>

        <a
          href="https://www.tiktok.com/@twotier.cage"
          className="social-link-btn"
          title={t.tiktokTitle}
          target="_blank"
        >
          <span>🎵</span>
          <span>TikTok</span>
        </a>

        <a
          href="#youtube"
          className="social-link-btn"
          title={t.youtubeTitle}
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            alert(t.youtubeAlert);
          }}
        >
          <span>▶️</span>
          <span>YouTube</span>
        </a>
      </div>

      <div className="footer-copyright">
        {t.copyright}
      </div>
    </footer>
  );
};
