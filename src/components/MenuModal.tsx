/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VNChoiceButton } from './VNChoiceButton.tsx';

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
  if (!isOpen) return null;

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    onClose();
  };

  const menuItems: { id: PageId; label: string; sublabel: string; icon: string }[] = [
    {
      id: 'home',
      label: '1. Главная (Лор и История)',
      sublabel: 'Синопсис, предупреждение и хроника клетки',
      icon: '📖',
    },
    {
      id: 'characters',
      label: '2. Персонажи (15)',
      sublabel: 'Досье, цитаты и роли всех участников',
      icon: '👥',
    },
    {
      id: 'gallery',
      label: '3. Галерея',
      sublabel: 'Фоны, концепт-арты и эскизы локаций',
      icon: '🖼️',
    },
    {
      id: 'endings',
      label: '4. Концовки',
      sublabel: 'Все 4 финала со спойлер-фильтром',
      icon: '🔒',
    },
    {
      id: 'about',
      label: '5. Об авторах и Факты',
      sublabel: 'История создания и команда разработки',
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
            <span className="modal-title">Выберите ветку сюжета / раздел:</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            ✕
          </button>
        </div>

        <div className="menu-choices-stack">
          {menuItems.map((item) => (
            <VNChoiceButton
              key={item.id}
              label={item.label}
              sublabel={item.sublabel}
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
