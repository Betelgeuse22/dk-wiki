/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox.tsx';
import { getLocalizedData, useI18n } from '../i18n.tsx';

export const EndingsPage: React.FC = () => {
  const { language, t } = useI18n();
  const { endings } = getLocalizedData(language);
  // Храним ID раскрытых концовок
  const [revealedEndings, setRevealedEndings] = useState<Record<string, boolean>>({});

  const toggleSpoiler = (id: string) => {
    setRevealedEndings((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const revealAll = () => {
    const allRevealed: Record<string, boolean> = {};
    endings.forEach((e) => {
      allRevealed[e.id] = true;
    });
    setRevealedEndings(allRevealed);
  };

  const hideAll = () => {
    setRevealedEndings({});
  };

  return (
    <div className="page-container">
      {/* Заголовок в стиле плашки новеллы */}
      <DialogueBox name={language === 'en' ? 'Endings' : 'Концовки'} tagType="default">
        <div className="dialogue-text">
          <p>
            {t.endingsIntro}
          </p>
          <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--vn-pink-deep)' }}>
            {t.spoilersWarning}
          </p>
        </div>
      </DialogueBox>

      {/* Кнопки массового управления спойлерами */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        <button
          type="button"
          className="toggle-history-btn"
          style={{ margin: 0, flex: 1, justifyContent: 'center' }}
          onClick={revealAll}
        >
          <span>{t.revealAll}</span>
        </button>
        <button
          type="button"
          className="toggle-history-btn"
          style={{ margin: 0, flex: 1, justifyContent: 'center' }}
          onClick={hideAll}
        >
          <span>{t.hideAll}</span>
        </button>
      </div>

      {/* Список карточек концовок */}
      <div className="endings-list">
        {endings.map((ending) => {
          const isRevealed = !!revealedEndings[ending.id];

          return (
            <div key={ending.id} className="ending-card-box">
              <div className="ending-header-row">
                <span className="ending-title">{ending.title}</span>
                <span className="ending-tag">{ending.tag}</span>
              </div>

              <div className="ending-condition-box">
                <strong>{t.unlockCondition} </strong>
                <span>{ending.condition}</span>
              </div>

              {!isRevealed ? (
                <button
                  type="button"
                  className="ending-spoiler-toggle"
                  onClick={() => toggleSpoiler(ending.id)}
                >
                  <span>{t.spoilerButton}</span>
                </button>
              ) : (
                <div className="ending-revealed-box">
                  <p>{ending.description}</p>
                  {ending.warningNote && (
                    <div
                      style={{
                        marginTop: '8px',
                        fontSize: '12px',
                        color: 'var(--vn-pink-alert)',
                        fontWeight: 700,
                      }}
                    >
                      ⚠ {ending.warningNote}
                    </div>
                  )}
                  <button
                    type="button"
                    style={{
                      marginTop: '10px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--vn-pink-deep)',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    onClick={() => toggleSpoiler(ending.id)}
                  >
                    {t.hideSpoiler}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
