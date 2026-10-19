/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface DialogueBoxProps {
  name?: string;
  tagType?: 'default' | 'alert' | 'white';
  children: React.ReactNode;
  className?: string;
  showSubbar?: boolean;
  onSubbarClick?: (action: string) => void;
}

/**
 * Диалоговый блок в стиле визуальных новелл (DDLC референс):
 * - Плашка имени сверху
 * - Розовый полупрозрачный фон в мелкий горошек
 * - Плотная белая скругленная рамка 3px solid #ffffff
 * - Скругление углов 16px
 * - Мягкая тень
 * - Опциональная плашка действий новеллы («История | Пропуск | Авто...»)
 */
export const DialogueBox: React.FC<DialogueBoxProps> = ({
  name,
  tagType = 'default',
  children,
  className = '',
  showSubbar = false,
  onSubbarClick,
}) => {
  const getTagClass = () => {
    switch (tagType) {
      case 'alert':
        return 'dialogue-nameplate alert-tag';
      case 'white':
        return 'dialogue-nameplate white-tag';
      default:
        return 'dialogue-nameplate';
    }
  };

  const handleSubbarAction = (action: string) => {
    if (onSubbarClick) {
      onSubbarClick(action);
    }
  };

  return (
    <div className={`dialogue-wrapper ${className}`}>
      {name && (
        <div className={getTagClass()}>
          <span>{name}</span>
        </div>
      )}
      <div className="dialogue-box">
        {children}

        {showSubbar && (
          <div className="vn-subbar">
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction('История')}
              title="Открыть историю реплик"
            >
              История
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction('Пропуск')}
              title="Пропустить текст"
            >
              Пропуск
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction('Авто')}
              title="Автоматическая прокрутка"
            >
              Авто
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction('Сохранить')}
              title="Быстрое сохранение"
            >
              Сохранить
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction('Загрузить')}
              title="Загрузить состояние"
            >
              Загрузить
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
