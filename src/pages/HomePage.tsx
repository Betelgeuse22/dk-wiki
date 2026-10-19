/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox.tsx';
import { VNChoiceButton } from '../components/VNChoiceButton.tsx';
import { PageId } from '../components/MenuModal.tsx';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onToast }) => {
  const [isLoreExpanded, setIsLoreExpanded] = useState(false);

  return (
    <div className="page-container">
      {/* Приветственный заголовок */}
      <div className="welcome-header">
        <h2 className="welcome-title">Добро пожаловать на официальный сайт по дк.!</h2>
        <p className="welcome-subtitle">
          Психологическая визуальная новелла о границах реальности и цифровой клетке
        </p>
      </div>

      {/* Блок «Синопсис» в стиле диалогового окна */}
      <DialogueBox
        name="Синопсис"
        tagType="default"
        showSubbar
        onSubbarClick={(action) => onToast(`Действие новеллы: [${action}] сохранено`)}
      >
        <div className="dialogue-text">
          <p>
            <strong>Дк. (Двухъярусная клетка)</strong> — это игра, которая рассказывает о
            истории, как персонажи попали в игру и пытаются из неё выбраться.
          </p>
          <p>
            Внезапно очнувшись в замкнутом пространстве, разделённом на Верхний и Нижний
            ярусы, 15 героев осознают, что каждый их шаг подчиняется загадочным
            диалоговым окнам, а за пределами видимых стен пульсирует строчка программного
            кода.
          </p>
        </div>
      </DialogueBox>

      {/* Акцентный блок с плашкой «ВНИМАНИЕ!» */}
      <DialogueBox name="ВНИМАНИЕ!" tagType="alert">
        <div className="dialogue-text" style={{ fontWeight: 600 }}>
          <p>
            Игра в разработке, следите за новостями! (Все совпадения случайны, пока такой игры не существует).
          </p>
          <p style={{ fontSize: '13px', color: 'var(--vn-pink-deep)', marginTop: '6px' }}>
            🔔 Подпишитесь на официальные каналы проекта внизу страницы, чтобы первыми узнать о релизе демо-версии.
          </p>
        </div>
      </DialogueBox>

      {/* Секция «История / Лор»: большой текстовый блок в стиле новеллы */}
      <DialogueBox
        name="История / Лор"
        tagType="default"
        showSubbar
        onSubbarClick={(action) => onToast(`История новеллы: [${action}] активирован`)}
      >
        <div className="dialogue-text">
          <p>
            Сначала всё казалось обычным сном. Тихое мерцание флуоресцентных ламп, холодные
            металлические перекладины двухъярусных каркасов и полное отсутствие дверей наружу.
            Никто из пятнадцати участников не помнил момент своего прибытия сюда — в памяти
            остались лишь размытые силуэты прежней жизни и настойчивый шелест переворачиваемых
            страниц.
          </p>

          <p>
            На стене верхнего яруса красовалась небрежная надпись, выведенная розовым маркером:
            <em>«Игра началась. Ваши реплики уже записаны. Не заставляйте Читателя ждать слишком долго».</em>{' '}
            Тэни первым попытался коснуться светящейся надписи, но его пальцы наткнулись на
            невидимую гладкую преграду — словно монитор старого кинескопа отделял этот мир от
            истинной реальности.
          </p>

          {isLoreExpanded && (
            <>
              <p>
                Со временем персонажи стали замечать странные закономерности. Когда Гони
                пытался сломать решётки нижнего уровня, пространство вокруг него рябило, а в
                ушах звенел знакомый щелчок компьютерной мыши. Любопытная Эль утверждала, что в
                моменты глубокой тишины можно услышать, как чей-то палец скроллит текст,
                перематывая их собственные мысли.
              </p>

              <p>
                Два яруса клетки оказались не просто архитектурной причудой. Верхний ярус был
                зоной наблюдения и логики, а Нижний — архивом забытых черновиков и удалённых
                сцен. Чтобы совершить побег, им предстоит преодолеть разделение, разгадать
                тайну исчезающих строк и найти того, кто держит в руках главное меню.
              </p>
            </>
          )}

          <div className="history-placeholder-note">
            [Место для большого текста истории, который скоро напишет автор]
          </div>

          <button
            type="button"
            className="toggle-history-btn"
            onClick={() => setIsLoreExpanded(!isLoreExpanded)}
          >
            <span>{isLoreExpanded ? '▲ Свернуть хронику' : '▼ Читать полностью (Хроника клетки)'}</span>
          </button>
        </div>
      </DialogueBox>

      {/* Быстрые кнопки перехода к разделам «Персонажи» и «Галерея» */}
      <div style={{ marginTop: '8px', marginBottom: '8px' }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--vn-pink-deep)',
            fontFamily: 'var(--font-family-display)',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>🌸</span>
          <span>Быстрый выбор следующего действия:</span>
        </div>

        <div className="quick-nav-grid">
          <VNChoiceButton
            label="Перейти к списку персонажей (15)"
            sublabel="Изучить досье, цитаты и роли узников клетки"
            icon={<span>👥</span>}
            primary
            onClick={() => onNavigate('characters')}
          />
          <VNChoiceButton
            label="Открыть галерею артов и фонов"
            sublabel="Взглянуть на концепты локаций и эскизы"
            icon={<span>🖼️</span>}
            onClick={() => onNavigate('gallery')}
          />
          <VNChoiceButton
            label="Изучить возможные концовки игры"
            sublabel="4 варианта финала под спойлер-фильтром"
            icon={<span>🔒</span>}
            onClick={() => onNavigate('endings')}
          />
        </div>
      </div>
    </div>
  );
};
