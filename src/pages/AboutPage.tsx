/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FACTS_DATA, TEAM_DATA } from '../data/wikiData.ts';
import { DialogueBox } from '../components/DialogueBox.tsx';

export const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Заголовок секции */}
      <DialogueBox name="О проекте" tagType="default">
        <div className="dialogue-text">
          <p>
            Добро пожаловать в закулисье визуальной новеллы «Дк. (Двухъярусная клетка)»!
            Здесь собраны факты о вселенной, вдохновении и людях, воплощающих проект в
            жизнь.
          </p>
        </div>
      </DialogueBox>

      {/* Блок «Интересные факты о разработке» */}
      <DialogueBox name="Интересные факты о разработке" tagType="white">
        <div className="facts-list">
          {FACTS_DATA.map((fact) => (
            <div key={fact.id} className="fact-item-card">
              <div className="fact-item-title">
                <span>✦</span>
                <span>{fact.title}</span>
              </div>
              <div className="fact-item-text">{fact.content}</div>
            </div>
          ))}
        </div>
      </DialogueBox>

      {/* Блок «Команда проекта» */}
      <DialogueBox name="Команда проекта" tagType="default">
        <div className="team-list">
          {TEAM_DATA.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar-box">
                <span>{member.avatarText}</span>
              </div>
              <div className="team-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="team-name">{member.name}</span>
                  <span className="dossier-tag" style={{ fontSize: '10px', padding: '1px 6px' }}>
                    {member.badge}
                  </span>
                </div>
                <span className="team-role">{member.roles}</span>
                <p className="team-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </DialogueBox>
    </div>
  );
};
