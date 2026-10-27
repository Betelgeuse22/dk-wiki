/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DialogueBox } from '../components/DialogueBox.tsx';
import { getLocalizedData, useI18n } from '../i18n.tsx';

export const AboutPage: React.FC = () => {
  const { language, t } = useI18n();
  const { facts, team } = getLocalizedData(language);
  return (
    <div className="page-container">
      {/* Заголовок секции */}
      <DialogueBox name={language === 'en' ? 'About the Project' : 'О проекте'} tagType="default">
        <div className="dialogue-text">
          <p>
            {t.aboutIntro}
          </p>
        </div>
      </DialogueBox>

      {/* Блок «Интересные факты о разработке» */}
      <DialogueBox name={t.factsTitle} tagType="white">
        <div className="facts-list">
          {facts.map((fact) => (
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
      <DialogueBox name={t.teamTitle} tagType="default">
        <div className="team-list">
          {team.map((member) => (
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
