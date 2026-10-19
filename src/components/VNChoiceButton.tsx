/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface VNChoiceButtonProps {
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
  active?: boolean;
  className?: string;
}

/**
 * Кнопка в стиле выбора ответа в визуальной новелле (DDLC choice button):
 * Горизонтальная прямоугольная плашка со светло-розовым фоном (#fff0f6),
 * ярко-розовой рамкой (2px solid #ff7eb9), темным текстом и плавным
 * увеличением/подсветкой при наведении.
 */
export const VNChoiceButton: React.FC<VNChoiceButtonProps> = ({
  label,
  sublabel,
  icon,
  onClick,
  primary = false,
  active = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`vn-choice-btn ${primary ? 'primary' : ''} ${active ? 'active' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="vn-choice-content">
        {icon && <div className="vn-choice-icon">{icon}</div>}
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span style={{ lineHeight: 1.25 }}>{label}</span>
          {sublabel && (
            <span
              style={{
                fontSize: '11px',
                color: 'var(--vn-text-muted)',
                fontWeight: 600,
                marginTop: '2px',
              }}
            >
              {sublabel}
            </span>
          )}
        </div>
      </div>
      <span className="vn-choice-arrow" aria-hidden="true">
        ▶
      </span>
    </button>
  );
};
