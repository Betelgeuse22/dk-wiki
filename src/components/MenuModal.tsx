/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VNChoiceButton } from './VNChoiceButton.tsx';
import { useI18n } from '../i18n.tsx';

export type PageId = 'home' | 'characters' | 'gallery' | 'endings' | 'about';

interface MenuModalProps {
  isOpen: boolean;
  currentPage: PageId;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  currentPage,
  onClose,
  onNavigate,
}) => {
  const { t } = useI18n();
  if (!isOpen) return null;

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    onClose();
  };

  const menuItems: { id: PageId; icon: string }[] = [
    {
      id: 'home',
      icon: '📖',
    },
    {
      id: 'characters',
      icon: '👥',
    },
    {
      id: 'gallery',
      icon: '🖼️',
    },
    {
      id: 'endings',
      icon: '🔒',
    },
    {
      id: 'about',
      icon: '✨',
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>🎀</span>
            <span className="modal-title">{t.menuTitle}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label={t.closeMenu}
          >
            ✕
          </button>
        </div>

        <div className="menu-choices-stack">
          {menuItems.map((item, index) => (
            <VNChoiceButton
              key={item.id}
              label={`${index + 1}. ${t.nav[index][0]}`}
              sublabel={t.nav[index][1]}
              icon={<span>{item.icon}</span>}
              active={currentPage === item.id}
              onClick={() => handleSelect(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
