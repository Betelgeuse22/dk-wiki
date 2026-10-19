/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ENDINGS_DATA } from '../data/wikiData.ts';
import { DialogueBox } from '../components/DialogueBox.tsx';

export const EndingsPage: React.FC = () => {
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
    ENDINGS_DATA.forEach((e) => {
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
      <DialogueBox name="Концовки" tagType="default">
        <div className="dialogue-text">
          <p>
            Сюжет «Дк. (Двухъярусная клетка)» вариативен и содержит 4 ключевых финала,
            зависящих от взаимоотношений героев и принятых Игроком решений.
          </p>
          <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--vn-pink-deep)' }}>
            ⚠️ Внимание! Тексты описаний содержат ключевые сюжетные спойлеры. По умолчанию
            они заблокированы.
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
          <span>👁️ Раскрыть все спойлеры</span>
        </button>
        <button
          type="button"
          className="toggle-history-btn"
          style={{ margin: 0, flex: 1, justifyContent: 'center' }}
          onClick={hideAll}
        >
          <span>🔒 Скрыть все</span>
        </button>
      </div>

      {/* Список карточек концовок */}
      <div className="endings-list">
        {ENDINGS_DATA.map((ending) => {
          const isRevealed = !!revealedEndings[ending.id];

          return (
            <div key={ending.id} className="ending-card-box">
              <div className="ending-header-row">
                <span className="ending-title">{ending.title}</span>
                <span className="ending-tag">{ending.tag}</span>
              </div>

              <div className="ending-condition-box">
                <strong>Условие разблокировки: </strong>
                <span>{ending.condition}</span>
              </div>

              {!isRevealed ? (
                <button
                  type="button"
                  className="ending-spoiler-toggle"
                  onClick={() => toggleSpoiler(ending.id)}
                >
                  <span>🔒 Спойлер! Нажмите, чтобы раскрыть описание концовки</span>
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
                    Скрыть спойлер назад
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
