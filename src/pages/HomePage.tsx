/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox.tsx';
import { VNChoiceButton } from '../components/VNChoiceButton.tsx';
import { PageId } from '../components/MenuModal.tsx';
import { useI18n } from '../i18n.tsx';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onToast }) => {
  const [isLoreExpanded, setIsLoreExpanded] = useState(false);
  const { t } = useI18n();

  return (
    <div className="page-container">
      {/* Приветственный заголовок */}
      <div className="welcome-header">
        <h2 className="welcome-title">{t.homeWelcome}</h2>
        <p className="welcome-subtitle">
          {t.homeSubtitle}
        </p>
      </div>

      <div className="dialogue-wrapper" style={{ marginTop: '16px' }}>
  <div className="dialogue-nameplate">🎬 {t.teaser}</div>
  <div className="dialogue-box" style={{ padding: '12px' }}>
    <div
      style={{
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#090d16', /* Тёмный фон по бокам, если видео узкое */
        border: '2px solid var(--vn-blue-accent)',
        position: 'relative',
        aspectRatio: '9 / 16', /* Вертикальный формат 9:16 под TikTok */
        maxHeight: '480px',    /* Ограничение по высоте, чтобы не было слишком длинным */
        margin: '0 auto',
      }}
    >
      <video
        src="/videos/intro.mp4"
        controls
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', /* <--- Главное исправление: видео целиком, без обрезки! */
          display: 'block',
        }}
      >
        {t.videoUnsupported}
      </video>
    </div>
    <p
      style={{
        fontSize: '12px',
        color: 'var(--vn-text-muted)',
        textAlign: 'center',
        marginTop: '8px',
      }}
    >
      {t.teaserCaption}
    </p>
  </div>
</div>

      {/* Блок «Синопсис» в стиле диалогового окна */}
      <DialogueBox
        name={t.synopsis}
        tagType="default"
        showSubbar
        onSubbarClick={(action) => onToast(`${t.savedAction}: [${action}] ${t.actionSaved}`)}
      >
        <div className="dialogue-text">
          <p>
            <strong>{t.appTitle}</strong>{t.synopsisOne}
          </p>
          <p>{t.synopsisTwo}</p>
        </div>
      </DialogueBox>

      {/* Акцентный блок с плашкой «ВНИМАНИЕ!» */}
      <DialogueBox name={t.warning} tagType="alert">
        <div className="dialogue-text" style={{ fontWeight: 600 }}>
          <p>{t.devNotice}</p>
          <p style={{ fontSize: '13px', color: 'var(--vn-pink-deep)', marginTop: '6px' }}>
            {t.subscribeNotice}
          </p>
        </div>
      </DialogueBox>

      {/* Секция «История / Лор»: большой текстовый блок в стиле новеллы */}
      <DialogueBox
        name={t.lore}
        tagType="default"
        showSubbar
        onSubbarClick={(action) => onToast(`${t.historyAction}: [${action}] ${t.activated}`)}
      >
        <div className="dialogue-text">
          <p>{t.loreOne}</p>

          <p>
            {t.loreTwoStart} <em>{t.loreQuote}</em> {t.loreTwoEnd}
          </p>

          {isLoreExpanded && (
            <>
              <p>{t.loreThree}</p>

              <p>{t.loreFour}</p>
            </>
          )}

          <div className="history-placeholder-note">
            {t.lorePlaceholder}
          </div>

          <button
            type="button"
            className="toggle-history-btn"
            onClick={() => setIsLoreExpanded(!isLoreExpanded)}
          >
            <span>{isLoreExpanded ? t.collapseLore : t.expandLore}</span>
          </button>
        </div>
      </DialogueBox>

      {/* Быстрые кнопки перехода к разделам «Персонажи» и «Галерея» */}
      <div style={{ marginTop: '8px', marginBottom: '8px' }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--vn-pink-deep)',
            fontFamily: 'var(--font-family-display)',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>🌸</span>
          <span>{t.quickAction}</span>
        </div>

        <div className="quick-nav-grid">
          <VNChoiceButton
            label={t.quickCharacters}
            sublabel={t.quickCharactersSub}
            icon={<span>👥</span>}
            primary
            onClick={() => onNavigate('characters')}
          />
          <VNChoiceButton
            label={t.quickGallery}
            sublabel={t.quickGallerySub}
            icon={<span>🖼️</span>}
            onClick={() => onNavigate('gallery')}
          />
          <VNChoiceButton
            label={t.quickEndings}
            sublabel={t.quickEndingsSub}
            icon={<span>🔒</span>}
            onClick={() => onNavigate('endings')}
          />
        </div>
      </div>
    </div>
  );
};
