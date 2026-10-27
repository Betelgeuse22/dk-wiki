/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useI18n } from '../i18n.tsx';

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
  const { t } = useI18n();
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
              onClick={() => handleSubbarAction(t.actionHistory)}
              title={t.historyTitle}
            >
              {t.actionHistory}
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction(t.actionSkip)}
              title={t.skipTitle}
            >
              {t.actionSkip}
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction(t.actionAuto)}
              title={t.autoTitle}
            >
              {t.actionAuto}
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction(t.actionSave)}
              title={t.saveTitle}
            >
              {t.actionSave}
            </span>
            <span
              className="vn-subbar-item"
              onClick={() => handleSubbarAction(t.actionLoad)}
              title={t.loadTitle}
            >
              {t.actionLoad}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
