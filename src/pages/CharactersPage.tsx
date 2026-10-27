/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox.tsx';
import { CharacterAvatar } from '../components/CharacterAvatar.tsx';
import { getLocalizedData, useI18n } from '../i18n.tsx';

interface CharactersPageProps {
  onToast: (msg: string) => void;
}

export const CharactersPage: React.FC<CharactersPageProps> = ({ onToast }) => {
  const { language, t } = useI18n();
  const { characters } = getLocalizedData(language);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<string>('all');

  const selectedCharacter = characters.find((c) => c.id === selectedCharacterId);

  // Фильтрация списка персонажей
  const filteredCharacters = characters.filter((char) => {
    const matchesSearch =
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.tier.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTier =
      tierFilter === 'all' ||
      (tierFilter === 'top' && char.tier === (language === 'en' ? 'Upper Tier' : 'Верхний ярус')) ||
      (tierFilter === 'bottom' && char.tier === (language === 'en' ? 'Lower Tier' : 'Нижний ярус')) ||
      (tierFilter === 'other' &&
        (char.tier === (language === 'en' ? 'Neutral Zone' : 'Нейтральная зона') ||
          char.tier === (language === 'en' ? 'Beyond the Code' : 'За пределами кода')));

    return matchesSearch && matchesTier;
  });

  // Если выбран персонаж, показываем детальное досье
  if (selectedCharacter) {
    return (
      <div className="page-container character-dossier-view" style={{ width: '100%' }}>
        {/* Кнопка возврата к общему списку */}
        <div className="back-btn-row">
          <button
            type="button"
            className="back-to-list-btn"
            onClick={() => setSelectedCharacterId(null)}
          >
            <span>{t.backCharacters}</span>
          </button>
        </div>

        {/* Верхняя карточка: Арт, Статус, Роль и Биография */}
        <div className="dossier-art-card" style={{ width: '100%' }}>
          <div className="dossier-portrait-wrap">
            <CharacterAvatar
              id={selectedCharacter.id}
              size={120}
              color={selectedCharacter.color}
            />
          </div>

          <h3 className="dossier-char-name">{selectedCharacter.name}</h3>
          <span className="dossier-char-role">{selectedCharacter.role}</span>

          <div className="dossier-meta-tags">
            <span className="dossier-tag">📍 {selectedCharacter.tier}</span>
            <span className="dossier-tag" style={{ color: selectedCharacter.color }}>
              ● {selectedCharacter.status}
            </span>
          </div>

          <div className="dossier-bio-text">
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--vn-blue-deep)',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {t.dossier}
            </div>
            {selectedCharacter.bio}
          </div>
        </div>

        {/* Внизу: диалоговое окно с плашкой имени и характерной цитатой */}
        <DialogueBox
          name={selectedCharacter.name}
          tagType="default"
          showSubbar
          onSubbarClick={(action) =>
            onToast(`${selectedCharacter.name}: ${language === 'en' ? 'selected action' : 'выбрано действие'} [${action}]`)
          }
        >
          <div
            style={{
              fontSize: '15px',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--vn-text-main)',
              lineHeight: 1.6,
            }}
          >
            {selectedCharacter.quote}
          </div>
        </DialogueBox>

        {/* Быстрое переключение на следующего/предыдущего персонажа */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            gap: '10px',
            marginTop: '4px',
          }}
        >
          <button
            type="button"
            className="toggle-history-btn"
            style={{ margin: 0, flex: 1, justifyContent: 'center' }}
            onClick={() => {
              const curIdx = characters.findIndex((c) => c.id === selectedCharacter.id);
              const prevIdx = (curIdx - 1 + characters.length) % characters.length;
              setSelectedCharacterId(characters[prevIdx].id);
            }}
          >
            <span>{t.previous}</span>
          </button>
          <button
            type="button"
            className="toggle-history-btn"
            style={{ margin: 0, flex: 1, justifyContent: 'center' }}
            onClick={() => {
              const curIdx = characters.findIndex((c) => c.id === selectedCharacter.id);
              const nextIdx = (curIdx + 1) % characters.length;
              setSelectedCharacterId(characters[nextIdx].id);
            }}
          >
            <span>{t.next}</span>
          </button>
        </div>
      </div>
    );
  }

  // Общий список из 15 персонажей
  return (
    <div className="page-container" style={{ width: '100%' }}>
      {/* Заголовок страницы в стиле плашки новеллы */}
      <DialogueBox name={language === 'en' ? 'Characters (15)' : 'Персонажи (15)'} tagType="default">
        <div className="characters-intro">
          <p style={{ fontSize: '14px', lineHeight: 1.5 }}>
            {t.charactersIntro}
          </p>
        </div>
      </DialogueBox>

      {/* Поисковая строка и быстрый фильтр по ярусам */}
      <div className="characters-search-bar">
        <span style={{ fontSize: '16px' }}>🔍</span>
        <input
          type="text"
          className="characters-search-input"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--vn-blue-deep)',
              fontWeight: 700,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Фильтр по ярусам */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          marginBottom: '16px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}
      >
        <button
          type="button"
          onClick={() => setTierFilter('all')}
          className={`dossier-tag ${tierFilter === 'all' ? 'active' : ''}`}
          style={{
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '10px',
            background: tierFilter === 'all' ? 'var(--vn-blue-deep)' : 'var(--vn-blue-light)',
            color: tierFilter === 'all' ? '#ffffff' : 'var(--vn-blue-deep)',
            border: '1px solid var(--vn-blue-accent)',
          }}
        >
          {t.filterAll}
        </button>
        <button
          type="button"
          onClick={() => setTierFilter('top')}
          className={`dossier-tag ${tierFilter === 'top' ? 'active' : ''}`}
          style={{
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '10px',
            background: tierFilter === 'top' ? 'var(--vn-blue-deep)' : 'var(--vn-blue-light)',
            color: tierFilter === 'top' ? '#ffffff' : 'var(--vn-blue-deep)',
            border: '1px solid var(--vn-blue-accent)',
          }}
        >
          {language === 'en' ? 'Upper Tier' : 'Верхний ярус'}
        </button>
        <button
          type="button"
          onClick={() => setTierFilter('bottom')}
          className={`dossier-tag ${tierFilter === 'bottom' ? 'active' : ''}`}
          style={{
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '10px',
            background: tierFilter === 'bottom' ? 'var(--vn-blue-deep)' : 'var(--vn-blue-light)',
            color: tierFilter === 'bottom' ? '#ffffff' : 'var(--vn-blue-deep)',
            border: '1px solid var(--vn-blue-accent)',
          }}
        >
          {language === 'en' ? 'Lower Tier' : 'Нижний ярус'}
        </button>
        <button
          type="button"
          onClick={() => setTierFilter('other')}
          className={`dossier-tag ${tierFilter === 'other' ? 'active' : ''}`}
          style={{
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '10px',
            background: tierFilter === 'other' ? 'var(--vn-blue-deep)' : 'var(--vn-blue-light)',
            color: tierFilter === 'other' ? '#ffffff' : 'var(--vn-blue-deep)',
            border: '1px solid var(--vn-blue-accent)',
          }}
        >
          {t.filterOther}
        </button>
      </div>

      {/* Сетка из 15 карточек-кнопок в стиле выбора из визуальной новеллы */}
      <div className="characters-grid">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            className="char-choice-card"
            onClick={() => setSelectedCharacterId(char.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedCharacterId(char.id);
              }
            }}
          >
            <div
              className="char-avatar-mini"
              style={{ borderColor: char.color }}
            >
              <CharacterAvatar id={char.id} size={38} color={char.color} />
            </div>

            <div className="char-choice-info">
              <span className="char-choice-name">{char.name}</span>
              <span className="char-choice-role">{char.role}</span>
              <span
                style={{
                  fontSize: '10px',
                  color: char.color,
                  fontWeight: 700,
                  marginTop: '1px',
                }}
              >
                {char.tier}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '30px 16px',
            color: 'var(--vn-text-muted)',
            fontStyle: 'italic',
          }}
        >
          {t.notFound} «{searchQuery}» {t.notFoundEnd}
        </div>
      )}
    </div>
  );
};