/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../data/wikiData.ts';
import { DialogueBox } from '../components/DialogueBox.tsx';

export const GalleryPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return '🏠';
      case 'users':
        return '👥';
      case 'layout':
        return '💬';
      case 'server':
        return '💻';
      case 'smile':
        return '✨';
      case 'image':
        return '🎨';
      default:
        return '🖼️';
    }
  };

  return (
    <div className="page-container">
      {/* Заголовок в стиле плашки новеллы */}
      <DialogueBox name="Галерея" tagType="default">
        <div className="dialogue-text">
          <p>
            Архив концептуальных артов, локаций и эскизов вселенной «Дк. (Двухъярусная
            клетка)». Все материалы находятся в активной разработке. Нажмите на любую
            карточку, чтобы рассмотреть концепт подробнее!
          </p>
        </div>
      </DialogueBox>

      {/* Сетка из 6 карточек */}
      <div className="gallery-grid">
        {GALLERY_DATA.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setActiveItem(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveItem(item);
              }
            }}
          >
            <div
              className="gallery-thumbnail"
              style={{ background: item.gradient }}
            >
              <div
                style={{
                  fontSize: '36px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                }}
              >
                {getCardIcon(item.iconName)}
              </div>
              <span
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--vn-pink-deep)',
                }}
              >
                {item.category}
              </span>
            </div>

            <div className="gallery-card-body">
              <span className="gallery-card-title">{item.title}</span>
              <span className="gallery-card-status">● {item.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно просмотра арта крупнее */}
      {activeItem && (
        <div
          className="modal-overlay"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content-panel"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '480px' }}
          >
            <div className="modal-header-row">
              <span className="modal-title">{activeItem.title}</span>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveItem(null)}
              >
                ✕
              </button>
            </div>

            {/* Имитация полноразмерного арта */}
            <div
              className="preview-art-display"
              style={{
                background: activeItem.gradient,
                flexDirection: 'column',
                gap: '12px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '56px' }}>{getCardIcon(activeItem.iconName)}</span>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--vn-pink-deep)',
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 700,
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                }}
              >
                [Место под финальный игровой арт]
              </span>
            </div>

            <div className="preview-art-meta">
              <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                <span className="dossier-tag">Категория: {activeItem.category}</span>
                <span className="dossier-tag" style={{ color: 'var(--vn-pink-deep)' }}>
                  Статус: {activeItem.status}
                </span>
                <span className="dossier-tag">Формат: {activeItem.aspect}</span>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.5, color: '#301b28' }}>
                {activeItem.description}
              </p>
            </div>

            <button
              type="button"
              className="vn-choice-btn primary"
              style={{ marginTop: '16px', justifyContent: 'center' }}
              onClick={() => setActiveItem(null)}
            >
              <span>← Вернуться к галерее</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
