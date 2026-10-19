/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CharacterAvatarProps {
  id: string;
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Векторные аватары-силуэты для всех 15 персонажей
 * С уникальными деталями: прически, аксессуары, эмоции в аниме/VN стилистике
 */
export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  id,
  size = 54,
  color = '#ff6b9d',
  className = '',
}) => {
  // Базовая форма головы и тела персонажа
  const renderAvatarDetails = () => {
    switch (id) {
      case 'player':
        return (
          <>
            {/* Игрок / Цифровой проводник */}
            <circle cx="50" cy="40" r="22" fill={color} opacity="0.9" />
            <path d="M26 84 C26 64 36 60 50 60 C64 60 74 64 74 84 Z" fill={color} opacity="0.85" />
            {/* Символ курсора/глитча */}
            <polygon points="50,22 56,36 48,34 44,42 41,40 45,33 39,32" fill="#ffffff" />
            <circle cx="43" cy="39" r="2.5" fill="#ffffff" />
            <circle cx="57" cy="39" r="2.5" fill="#ffffff" />
          </>
        );

      case 'teni':
        return (
          <>
            {/* Тэни - короткая аккуратная прическа с челкой */}
            <circle cx="50" cy="42" r="21" fill="#ffe5d9" />
            <path d="M28 42 C28 24 38 18 50 18 C62 18 72 24 72 42 C68 35 60 30 50 30 C40 30 32 35 28 42 Z" fill={color} />
            <path d="M25 84 C25 64 36 59 50 59 C64 59 75 64 75 84 Z" fill={color} />
            {/* Галстук / воротник */}
            <polygon points="50,60 55,75 50,82 45,75" fill="#ffffff" />
            {/* Глаза */}
            <circle cx="43" cy="42" r="2.5" fill="#301b28" />
            <circle cx="57" cy="42" r="2.5" fill="#301b28" />
          </>
        );

      case 'goni':
        return (
          <>
            {/* Гони - взъерошенные волосы механика */}
            <circle cx="50" cy="42" r="21" fill="#ffdfba" />
            <path d="M24 40 L30 24 L42 22 L50 16 L58 22 L70 24 L76 40 L68 34 L50 28 L32 34 Z" fill={color} />
            <path d="M24 84 C24 64 35 59 50 59 C65 59 76 64 76 84 Z" fill={color} />
            {/* Повязка на лоб */}
            <rect x="29" y="32" width="42" height="6" rx="2" fill="#ffffff" />
            <circle cx="42" cy="44" r="2.5" fill="#301b28" />
            <circle cx="58" cy="44" r="2.5" fill="#301b28" />
          </>
        );

      case 'ell':
        return (
          <>
            {/* Элл - ровная длинная челка и шарф */}
            <circle cx="50" cy="42" r="20" fill="#fdf0ed" />
            <path d="M26 42 C26 22 36 18 50 18 C64 18 74 22 74 42 C65 32 55 30 50 30 C45 30 35 32 26 42 Z" fill={color} />
            <path d="M26 84 C26 66 36 62 50 62 C64 62 74 66 74 84 Z" fill={color} />
            {/* Высокий воротник */}
            <path d="M36 56 C36 52 44 50 50 50 C56 50 64 52 64 56 L60 65 L40 65 Z" fill="#ffffff" />
            <circle cx="43" cy="41" r="2.5" fill="#301b28" />
            <circle cx="57" cy="41" r="2.5" fill="#301b28" />
          </>
        );

      case 'enis':
        return (
          <>
            {/* Энис - очки и аккуратная прическа */}
            <circle cx="50" cy="42" r="21" fill="#ffe5d9" />
            <path d="M28 42 C28 24 38 19 50 19 C62 19 72 24 72 42 C66 32 58 31 50 31 C42 31 34 32 28 42 Z" fill={color} />
            <path d="M26 84 C26 65 36 60 50 60 C64 60 74 65 74 84 Z" fill={color} />
            {/* Очки */}
            <circle cx="42" cy="41" r="6" stroke="#ffffff" strokeWidth="2" fill="none" />
            <circle cx="58" cy="41" r="6" stroke="#ffffff" strokeWidth="2" fill="none" />
            <line x1="48" y1="41" x2="52" y2="41" stroke="#ffffff" strokeWidth="2" />
          </>
        );

      case 'nia':
        return (
          <>
            {/* Ниа - хвостики с бантиками */}
            <circle cx="26" cy="34" r="8" fill={color} />
            <circle cx="74" cy="34" r="8" fill={color} />
            <circle cx="50" cy="42" r="20" fill="#fff0ed" />
            <path d="M28 38 C28 22 38 18 50 18 C62 18 72 22 72 38 C64 28 56 26 50 26 C44 26 36 28 28 38 Z" fill={color} />
            <path d="M26 84 C26 64 36 59 50 59 C64 59 74 64 74 84 Z" fill={color} />
            {/* Бантик на груди */}
            <polygon points="46,62 50,65 46,68" fill="#ffffff" />
            <polygon points="54,62 50,65 54,68" fill="#ffffff" />
            <circle cx="44" cy="41" r="2.5" fill="#301b28" />
            <circle cx="56" cy="41" r="2.5" fill="#301b28" />
            {/* Румянец */}
            <circle cx="39" cy="46" r="2.5" fill="#ff7eb9" opacity="0.6" />
            <circle cx="61" cy="46" r="2.5" fill="#ff7eb9" opacity="0.6" />
          </>
        );

      case 'lyu':
        return (
          <>
            {/* Лю - кепка козырьком назад и челка */}
            <circle cx="50" cy="43" r="21" fill="#ffdfba" />
            <path d="M25 36 C25 22 36 17 50 17 C64 17 75 22 75 36 Z" fill={color} />
            <polygon points="70,30 84,33 76,37" fill={color} />
            <path d="M25 84 C25 65 35 60 50 60 C65 60 75 65 75 84 Z" fill={color} />
            <circle cx="43" cy="43" r="2.5" fill="#301b28" />
            <circle cx="57" cy="43" r="2.5" fill="#301b28" />
          </>
        );

      case 'lio':
        return (
          <>
            {/* Лио - наушники и строгий взгляд */}
            <circle cx="50" cy="42" r="21" fill="#ffe5d9" />
            <path d="M27 38 C27 22 38 18 50 18 C62 18 73 22 73 38 Z" fill={color} />
            {/* Наушники */}
            <path d="M24 42 C24 24 76 24 76 42" stroke="#ffffff" strokeWidth="3" fill="none" />
            <rect x="22" y="36" width="6" height="14" rx="3" fill="#ffffff" />
            <rect x="72" y="36" width="6" height="14" rx="3" fill="#ffffff" />
            <path d="M25 84 C25 64 36 59 50 59 C64 59 75 64 75 84 Z" fill={color} />
            <circle cx="43" cy="43" r="2.5" fill="#301b28" />
            <circle cx="57" cy="43" r="2.5" fill="#301b28" />
          </>
        );

      case 'lyo':
        return (
          <>
            {/* Лё - милые волнистые волосы */}
            <circle cx="50" cy="42" r="20" fill="#fff1ed" />
            <path d="M25 44 C25 22 36 16 50 16 C64 16 75 22 75 44 C72 32 62 26 50 26 C38 26 28 32 25 44 Z" fill={color} />
            <circle cx="28" cy="48" r="6" fill={color} />
            <circle cx="72" cy="48" r="6" fill={color} />
            <path d="M26 84 C26 65 36 60 50 60 C64 60 74 65 74 84 Z" fill={color} />
            <circle cx="43" cy="42" r="2.5" fill="#301b28" />
            <circle cx="57" cy="42" r="2.5" fill="#301b28" />
          </>
        );

      case 'el':
        return (
          <>
            {/* Эль - заколка-крестик и стрижка каре */}
            <circle cx="50" cy="42" r="21" fill="#ffe5d9" />
            <path d="M26 44 L26 26 C26 18 36 16 50 16 C64 16 74 18 74 26 L74 44 C68 32 60 30 50 30 C40 30 32 32 26 44 Z" fill={color} />
            <path d="M26 84 C26 65 36 60 50 60 C64 60 74 65 74 84 Z" fill={color} />
            {/* Заколка-крестик */}
            <line x1="31" y1="28" x2="39" y2="36" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="39" y1="28" x2="31" y2="36" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="43" cy="42" r="2.5" fill="#301b28" />
            <circle cx="57" cy="42" r="2.5" fill="#301b28" />
          </>
        );

      case 'lili':
        return (
          <>
            {/* Лили - берет художницы и кисточка */}
            <circle cx="50" cy="43" r="20" fill="#fff2ed" />
            {/* Берет */}
            <ellipse cx="48" cy="24" rx="26" ry="12" fill={color} />
            <circle cx="48" cy="12" r="3" fill="#ffffff" />
            <path d="M26 84 C26 65 36 60 50 60 C64 60 74 65 74 84 Z" fill={color} />
            <circle cx="43" cy="43" r="2.5" fill="#301b28" />
            <circle cx="57" cy="43" r="2.5" fill="#301b28" />
            {/* Маленькое пятнышко краски */}
            <circle cx="62" cy="48" r="2" fill="#ff7eb9" />
          </>
        );

      case 'alyona':
        return (
          <>
            {/* Алёна - длинные прямые волосы и ободок */}
            <circle cx="50" cy="42" r="20" fill="#ffe8df" />
            <path d="M24 50 L24 28 C24 18 36 16 50 16 C64 16 76 18 76 28 L76 50 C70 34 62 30 50 30 C38 30 30 34 24 50 Z" fill={color} />
            {/* Ободок */}
            <path d="M28 34 C28 20 72 20 72 34" stroke="#ffffff" strokeWidth="2.5" fill="none" />
            <path d="M26 84 C26 64 36 60 50 60 C64 60 74 64 74 84 Z" fill={color} />
            <circle cx="43" cy="42" r="2.5" fill="#301b28" />
            <circle cx="57" cy="42" r="2.5" fill="#301b28" />
          </>
        );

      case 'alesya':
        return (
          <>
            {/* Алеся - асимметричная прическа и нота */}
            <circle cx="50" cy="42" r="20" fill="#ffe5d9" />
            <path d="M24 40 C24 20 36 17 50 17 C64 17 76 22 76 46 C68 34 58 28 46 28 C34 28 28 32 24 40 Z" fill={color} />
            <path d="M26 84 C26 65 36 60 50 60 C64 60 74 65 74 84 Z" fill={color} />
            <circle cx="43" cy="43" r="2.5" fill="#301b28" />
            <circle cx="57" cy="43" r="2.5" fill="#301b28" />
          </>
        );

      case 'kaoruko':
        return (
          <>
            {/* Каоруко - традиционный пучок и заколка канзаши */}
            <circle cx="50" cy="18" r="9" fill={color} />
            <circle cx="50" cy="42" r="20" fill="#fff3ee" />
            <path d="M26 44 C26 22 36 18 50 18 C64 18 74 22 74 44 C66 32 58 30 50 30 C42 30 34 32 26 44 Z" fill={color} />
            {/* Палочка-заколка */}
            <line x1="38" y1="12" x2="62" y2="24" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M26 84 C26 64 36 60 50 60 C64 60 74 64 74 84 Z" fill={color} />
            <circle cx="43" cy="41" r="2.5" fill="#301b28" />
            <circle cx="57" cy="41" r="2.5" fill="#301b28" />
          </>
        );

      case 'yona':
        return (
          <>
            {/* Йона - косой пробор, пластырь на щеке */}
            <circle cx="50" cy="42" r="21" fill="#ffe5d9" />
            <path d="M24 42 L34 20 L52 18 L68 22 L76 38 C68 28 56 26 46 26 C36 26 28 32 24 42 Z" fill={color} />
            <path d="M25 84 C25 64 36 59 50 59 C64 59 75 64 75 84 Z" fill={color} />
            {/* Пластырь */}
            <rect x="56" y="46" width="8" height="4" rx="1" fill="#ffffff" transform="rotate(-15 60 48)" />
            <circle cx="43" cy="42" r="2.5" fill="#301b28" />
            <circle cx="57" cy="42" r="2.5" fill="#301b28" />
          </>
        );

      default:
        return (
          <>
            <circle cx="50" cy="40" r="20" fill="#ffe5d9" />
            <path d="M28 38 C28 22 38 18 50 18 C62 18 72 22 72 38 Z" fill={color} />
            <path d="M26 84 C26 64 36 60 50 60 C64 60 74 64 74 84 Z" fill={color} />
            <circle cx="43" cy="42" r="2.5" fill="#301b28" />
            <circle cx="57" cy="42" r="2.5" fill="#301b28" />
          </>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <circle cx="50" cy="50" r="48" fill="#ffffff" />
      {renderAvatarDetails()}
    </svg>
  );
};
