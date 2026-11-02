import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  CHARACTERS_DATA,
  ENDINGS_DATA,
  FACTS_DATA,
  GALLERY_DATA,
  TEAM_DATA,
} from './data/wikiData.ts';

export type Language = 'ru' | 'en';

const translations = {
  ru: {
    appTitle: 'Дк. (Двухъярусная клетка)',
    languageLabel: 'Язык',
    switchToEnglish: 'Переключить на английский',
    switchToRussian: 'Переключить на русский',
    wikiSubtitle: 'Официальная интерактивная Wiki',
    homeTitle: 'На главную',
    themeLabel: 'Переключить тему',
    lightTheme: 'Включить светлую тему',
    darkTheme: 'Включить тёмную тему',
    openMenu: 'Открыть меню разделов',
    menu: 'Меню',
    online: 'Telegram Mini App • Online',
    version: 'Версия 1.0 (Demo)',
    menuTitle: 'Выберите ветку сюжета / раздел:',
    closeMenu: 'Закрыть меню',
    nav: [
      ['Главная (Лор и История)', 'Синопсис, предупреждение и хроника клетки'],
      ['Персонажи (15)', 'Досье, цитаты и роли всех участников'],
      ['Галерея', 'Фоны, концепт-арты и эскизы локаций'],
      ['Концовки', 'Все 4 финала со спойлер-фильтром'],
      ['Об авторах и Факты', 'История создания и команда разработки'],
    ],
    channels: 'Официальные каналы проекта:',
    telegramTitle: 'Официальный Telegram-канал',
    tiktokTitle: 'TikTok проекта',
    youtubeTitle: 'YouTube канал',
    telegramAlert: 'Ссылка-заглушка: Здесь будет подключен официальный Telegram-канал проекта «Дк.»!',
    youtubeAlert: 'Ссылка-заглушка: Здесь будет подключен YouTube-канал проекта «Дк.» с трейлерами и саундтреком!',
    copyright: '© Официальная Wiki по проекту «Дк. (Двухъярусная клетка)». Все права защищены.',
    synopsis: 'Синопсис',
    warning: 'ВНИМАНИЕ!',
    lore: 'История / Лор',
    historyAction: 'История новеллы',
    savedAction: 'Действие новеллы',
    actionSaved: 'сохранено',
    activated: 'активирован',
    actionHistory: 'История',
    actionSkip: 'Пропуск',
    actionAuto: 'Авто',
    actionSave: 'Сохранить',
    actionLoad: 'Загрузить',
    historyTitle: 'Открыть историю реплик',
    skipTitle: 'Пропустить текст',
    autoTitle: 'Автоматическая прокрутка',
    saveTitle: 'Быстрое сохранение',
    loadTitle: 'Загрузить состояние',
    homeWelcome: 'Добро пожаловать на официальный сайт по дк.!',
    homeSubtitle: 'Психологическая визуальная новелла о границах реальности и цифровой клетке',
    teaser: 'Официальный тизер-интро',
    videoUnsupported: 'Ваш браузер не поддерживает видео.',
    teaserCaption: 'Тизер разрабатываемой визуальной новеллы «Дк. (Двухъярусная клетка)»',
    synopsisOne: ' — это игра, которая рассказывает о истории, как персонажи попали в игру и пытаются из неё выбраться.',
    synopsisTwo: 'Внезапно очнувшись в замкнутом пространстве, разделённом на Верхний и Нижний ярусы, 15 героев осознают, что каждый их шаг подчиняется загадочным диалоговым окнам, а за пределами видимых стен пульсирует строчка программного кода.',
    devNotice: 'Игра в разработке, следите за новостями! (Все совпадения случайны, пока такой игры не существует).',
    subscribeNotice: '🔔 Подпишитесь на официальные каналы проекта внизу страницы, чтобы первыми узнать о релизе демо-версии.',
    loreOne: 'Сначала всё казалось обычным сном. Тихое мерцание флуоресцентных ламп, холодные металлические перекладины двухъярусных каркасов и полное отсутствие дверей наружу. Никто из пятнадцати участников не помнил момент своего прибытия сюда — в памяти остались лишь размытые силуэты прежней жизни и настойчивый шелест переворачиваемых страниц.',
    loreTwoStart: 'На стене верхнего яруса красовалась небрежная надпись, выведенная розовым маркером:',
    loreQuote: '«Игра началась. Ваши реплики уже записаны. Не заставляйте Читателя ждать слишком долго».',
    loreTwoEnd: 'Тэни первым попытался коснуться светящейся надписи, но его пальцы наткнулись на невидимую гладкую преграду — словно монитор старого кинескопа отделял этот мир от истинной реальности.',
    loreThree: 'Со временем персонажи стали замечать странные закономерности. Когда Гони пытался сломать решётки нижнего уровня, пространство вокруг него рябило, а в ушах звенел знакомый щелчок компьютерной мыши. Любопытная Эль утверждала, что в моменты глубокой тишины можно услышать, как чей-то палец скроллит текст, перематывая их собственные мысли.',
    loreFour: 'Два яруса клетки оказались не просто архитектурной причудой. Верхний ярус был зоной наблюдения и логики, а Нижний — архивом забытых черновиков и удалённых сцен. Чтобы совершить побег, им предстоит преодолеть разделение, разгадать тайну исчезающих строк и найти того, кто держит в руках главное меню.',
    lorePlaceholder: '[Место для большого текста истории, который скоро напишет автор]',
    collapseLore: '▲ Свернуть хронику',
    expandLore: '▼ Читать полностью (Хроника клетки)',
    quickAction: 'Быстрый выбор следующего действия:',
    quickCharacters: 'Перейти к списку персонажей (15)',
    quickCharactersSub: 'Изучить досье, цитаты и роли узников клетки',
    quickGallery: 'Открыть галерею артов и фонов',
    quickGallerySub: 'Взглянуть на концепты локаций и эскизы',
    quickEndings: 'Изучить возможные концовки игры',
    quickEndingsSub: '4 варианта финала под спойлер-фильтром',
    charactersIntro: 'Каждый из 15 участников обладает уникальным характером, историей и ролью в попытке вырваться из Двухъярусной клетки. Нажмите на карточку любого персонажа, чтобы открыть его полное досье и диалоговую реплику!',
    backCharacters: '← Назад ко всем 15 персонажам',
    dossier: 'Досье участника:',
    previous: '‹ Предыдущий',
    next: 'Следующий ›',
    searchPlaceholder: 'Поиск по имени, роли или локации...',
    filterAll: 'Все (15)',
    filterOther: 'Особые',
    notFound: 'Персонажи по запросу',
    notFoundEnd: 'не найдены.',
    galleryIntro: 'Архив концептуальных артов, локаций и эскизов вселенной «Дк. (Двухъярусная клетка)». Все материалы находятся в активной разработке. Нажмите на любую карточку, чтобы рассмотреть концепт подробнее!',
    artPlaceholder: '[Место под финальный игровой арт]',
    category: 'Категория:',
    status: 'Статус:',
    aspect: 'Формат:',
    backGallery: '← Вернуться к галерее',
    endingsIntro: 'Сюжет «Дк. (Двухъярусная клетка)» вариативен и содержит 4 ключевых финала, зависящих от взаимоотношений героев и принятых Игроком решений.',
    spoilersWarning: '⚠️ Внимание! Тексты описаний содержат ключевые сюжетные спойлеры. По умолчанию они заблокированы.',
    revealAll: '👁️ Раскрыть все спойлеры',
    hideAll: '🔒 Скрыть все',
    unlockCondition: 'Условие разблокировки:',
    spoilerButton: '🔒 Спойлер! Нажмите, чтобы раскрыть описание концовки',
    hideSpoiler: 'Скрыть спойлер назад',
    aboutIntro: 'Добро пожаловать в закулисье визуальной новеллы «Дк. (Двухъярусная клетка)»! Здесь собраны факты о вселенной, вдохновении и людях, воплощающих проект в жизнь.',
    factsTitle: 'Интересные факты о разработке',
    teamTitle: 'Команда проекта',
  },
  en: {
    appTitle: 'TTC (Two-Tier Cage)',
    languageLabel: 'Language',
    switchToEnglish: 'Switch to English',
    switchToRussian: 'Switch to Russian',
    wikiSubtitle: 'Official Interactive Wiki',
    homeTitle: 'Home',
    themeLabel: 'Toggle theme',
    lightTheme: 'Switch to light theme',
    darkTheme: 'Switch to dark theme',
    openMenu: 'Open section menu',
    menu: 'Menu',
    online: 'Telegram Mini App • Online',
    version: 'Version 1.0 (Demo)',
    menuTitle: 'Choose a story path / section:',
    closeMenu: 'Close menu',
    nav: [
      ['Home (Lore & Story)', 'Synopsis, notice, and the cage chronicles'],
      ['Characters (15)', 'Profiles, quotes, and roles of all cast members'],
      ['Gallery', 'Backgrounds, concept art, and location sketches'],
      ['Endings', 'All 4 endings with spoiler protection'],
      ['About & Facts', 'Creation history and development team'],
    ],
    channels: 'Official project channels:',
    telegramTitle: 'Official Telegram channel',
    tiktokTitle: 'Project TikTok',
    youtubeTitle: 'YouTube channel',
    telegramAlert: 'Placeholder link: The official TTC project Telegram channel will be connected here!',
    youtubeAlert: 'Placeholder link: The TTC project YouTube channel with trailers and soundtrack will be connected here!',
    copyright: '© Official wiki for “TTC (Two-Tier Cage)”. All rights reserved.',
    synopsis: 'Synopsis',
    warning: 'NOTICE!',
    lore: 'Story / Lore',
    historyAction: 'Novel history',
    savedAction: 'Novel action',
    actionSaved: 'saved',
    activated: 'activated',
    actionHistory: 'History',
    actionSkip: 'Skip',
    actionAuto: 'Auto',
    actionSave: 'Save',
    actionLoad: 'Load',
    historyTitle: 'Open dialogue history',
    skipTitle: 'Skip text',
    autoTitle: 'Automatic scrolling',
    saveTitle: 'Quick save',
    loadTitle: 'Load state',
    homeWelcome: 'Welcome to the official TTC website!',
    homeSubtitle: 'A psychological visual novel about the boundaries of reality and a digital cage',
    teaser: 'Official teaser',
    videoUnsupported: 'Your browser does not support video.',
    teaserCaption: 'Teaser for the upcoming visual novel “TTC (Two-Tier Cage)”',
    synopsisOne: ' is a game about characters who find themselves inside a game and try to escape.',
    synopsisTwo: 'After suddenly waking in a sealed space divided into Upper and Lower tiers, 15 heroes realize that every move they make is governed by mysterious dialogue boxes, while a line of code pulses beyond the visible walls.',
    devNotice: 'The game is in development—stay tuned! (Any resemblance is coincidental; the game does not exist yet.)',
    subscribeNotice: '🔔 Follow the official project channels at the bottom of the page to be the first to hear when the demo is released.',
    loreOne: 'At first, everything seemed like an ordinary dream. Fluorescent lights flickered softly, cold metal bars framed the bunk beds, and there were no doors leading out. None of the fifteen participants remembered arriving here—their memories held only blurred silhouettes of their former lives and the persistent rustle of turning pages.',
    loreTwoStart: 'A hasty message in pink marker adorned the wall of the Upper Tier:',
    loreQuote: '“The game has begun. Your lines have already been recorded. Do not keep the Reader waiting too long.”',
    loreTwoEnd: 'Teni was the first to reach for the glowing message, but his fingers met an invisible, smooth barrier—as if an old CRT monitor separated this world from true reality.',
    loreThree: 'Over time, the characters began to notice strange patterns. When Goni tried to break the bars on the lower level, the space around him rippled, and a familiar computer-mouse click rang in his ears. Curious El claimed that in moments of deep silence, you could hear someone scrolling through text, rewinding their very thoughts.',
    loreFour: 'The cage’s two tiers were more than an architectural oddity. The Upper Tier was a place of observation and logic, while the Lower Tier was an archive of forgotten drafts and deleted scenes. To escape, they must overcome the divide, uncover the mystery of the vanishing lines, and find the one holding the main menu.',
    lorePlaceholder: '[A place for the full story, coming soon from the author]',
    collapseLore: '▲ Collapse the chronicle',
    expandLore: '▼ Read the full Cage Chronicle',
    quickAction: 'Choose your next action:',
    quickCharacters: 'Browse the 15 characters',
    quickCharactersSub: 'Explore the prisoners’ profiles, quotes, and roles',
    quickGallery: 'Open the art and background gallery',
    quickGallerySub: 'Explore location concepts and sketches',
    quickEndings: 'Explore the possible endings',
    quickEndingsSub: '4 endings protected by spoiler filters',
    charactersIntro: 'Each of the 15 participants has a unique personality, story, and role in the attempt to escape the Two-Tier Cage. Select a character to open their full profile and dialogue!',
    backCharacters: '← Back to all 15 characters',
    dossier: 'Participant profile:',
    previous: '‹ Previous',
    next: 'Next ›',
    searchPlaceholder: 'Search by name, role, or tier...',
    filterAll: 'All (15)',
    filterOther: 'Other',
    notFound: 'No characters found for',
    notFoundEnd: '.',
    galleryIntro: 'An archive of concept art, locations, and sketches from the world of “TTC (Two-Tier Cage)”. All materials are in active development. Select a card to explore a concept!',
    artPlaceholder: '[Final in-game artwork goes here]',
    category: 'Category:',
    status: 'Status:',
    aspect: 'Format:',
    backGallery: '← Back to gallery',
    endingsIntro: 'The story of “TTC (Two-Tier Cage)” branches into four key endings, shaped by the characters’ relationships and the Player’s choices.',
    spoilersWarning: '⚠️ Warning! These descriptions contain major story spoilers. They are hidden by default.',
    revealAll: '👁️ Reveal all spoilers',
    hideAll: '🔒 Hide all',
    unlockCondition: 'Unlock condition:',
    spoilerButton: '🔒 Spoiler! Select to reveal the ending',
    hideSpoiler: 'Hide spoiler',
    aboutIntro: 'Welcome behind the scenes of “TTC (Two-Tier Cage)”! Discover facts about its world, inspirations, and the people bringing the project to life.',
    factsTitle: 'Development facts',
    teamTitle: 'The team',
  },
} as const;

const englishCharacters = [
  ['Teni', 'Actor', 'Employees', '', 'The most popular actor in the theater. And the most talented.', '“I try to be a light in this blind darkness.”'],
  ['Goni', 'Actor', 'Employees', '', 'Teni\'s best friend. The second actor in the theater who performs with her best friend.', '“Handing out autographs,”'],
  ['Ell', 'Composer, choreographer, and lighting director', 'Employees', '', 'Composer and lighting director living backstage.', '“Hope dies last.”'],
  ['Enis', 'Actress', 'Employees', '', 'The third actress who achieved only a small fraction of her popularity. At least she has wonderful fans.', '“I am really trying, please.”'],
  ['Nia', 'None', 'Employees', '', 'A person created unnaturally. But that doesn\'t mean she is a robot.', '“Trying is useless.”'],
  ['Lyu', 'Kiosk owner, ticket collector, and chef', 'Employees', '', 'Kiosk owner, ticket collector, and in general, most of the work rests on his shoulders.', '“I\'m doing fine, thank you.”'],
  ['Lio', 'Lead Developer', 'Management', '', 'Lead developer and owner of the theater.', '“I will not apologize, I don\'t see why!”'],
  ['Lyo', 'Manager', 'Management', '', 'Manager of the lead developer. Extremely dissatisfied with his job.', '“It pisses me off so much, having to keep my eyes open while others sleep sweetly.”'],
  ['El', 'Teacher', 'Employees', '', 'Teacher of dance, singing, and basically everything. He teaches all the actors in the theater.', '“Now I understand what it means to be powerless. Hah.”'],
  ['Lili', 'Cook', 'Management', '', 'A lazy demon, what can I say. Not even a talented cook.', '“..Didn\'t think I\'d end up in the cage I helped create.”'],
  ['Haruko', 'Player', 'Outsiders', '', 'Alyona\'s avatar.', '“I wish I could give the exit button to everyone else.”'],
  ['Alyona', 'Founder of the SRSS', 'Outsiders', '', 'Founder of the special service "Working with Special Situations" (SRSS). Entered the game disguised as Haruko to save her long-lost friends.', '“I will find you, just wait for me to get there.”'],
  ['Alesya', 'Co-founder and hacker of the SRSS', 'Outsiders', 'Searching for a way out', 'Co-founder of the SRSS. Helps Alyona gather data from outside the game.', '“And which ones are the ones we are looking for? ..Doesn\'t matter. We\'ll save everyone.”'],
  ['Kaoruko', 'Outside the game', 'Outsiders', '', '"The Woman", or Lady Blood. The true creator of the game.', '“Why have regrets when everything is PERFECT?”'],
  ['Yona', 'Outside the game', 'Outsiders', '', 'Kaoruko\'s servant, does whatever her lady tells her.', '“You think you created the cage? It was me guiding your hands.”'],
] as const;

const englishEndings = [
  ['Good Ending: Escape Through the Code', '★ Happy ending', 'Unite all 15 characters and find the hidden debug panel on the Upper Tier.', 'The Player and the characters find common ground and rewrite the escape conditions in the system scripts. The Two-Tier Cage dissolves into a shower of soft pink pixels, and the heroes wake in reality with their memories of friendship intact.', undefined],
  ['Bad Ending: The Eternal Two-Tier Cycle', '⚠ System failure', 'Ignore Nia’s warnings and allow the group to split between the tiers.', 'The connection between the tiers is severed. The music slows to an ominous screech, and dialogue boxes crumble into corrupted symbols. The system erases the characters’ memories and restarts the story from day one.', 'Psychological horror element in the novel.'],
  ['Secret Ending: Breaking the Fourth Wall', '✦ Developer secret', 'Click the Player’s quote 7 times in a row and enter the password “TWO-TIER”.', 'The characters suddenly turn toward the screen and address you by name. A developer’s desktop appears in the background, with script files and sketches for future updates open.', undefined],
  ['True Ending: The Key to Reality', '✧ Canon ending', 'Complete every choice route for all 15 heroes and collect all of Lili’s map fragments.', 'The truth behind the Two-Tier Cage is revealed: it was a protective cocoon of consciousness, shielding the characters from an external catastrophe. After accepting their past, they open a massive golden door into a new world.', undefined],
] as const;

const englishGallery = [
  ['Background 1: Upper Tier (in progress)', 'Location', 'in progress', 'A panoramic view of the Upper Tier lounge, bathed in soft light and framed by metal bunk-bed bars.'],
  ['Character concept art: Teni and Goni', 'Concept', 'sketch', 'Early sketches of costumes and silhouettes combining school uniforms with tactical details.'],
  ['Game screenshot: Dialogue choice box', 'Interface', 'complete', 'Dialogue interface with its signature polka dots, nameplate, and a choice of three lines.'],
  ['Location: Lower Tier (Server Room)', 'Location', 'in progress', 'Mysterious blinking indicators, tangled fiber-optic cables, and a quiet neon glow.'],
  ['Sketch: Nia and Kaoruko’s expressions', 'Characters', 'sketch', 'A set of sprites with different expressions: surprise, determination, embarrassment, and fear.'],
  ['Main menu title screen', 'Concept', 'in progress', 'The main illustration, featuring all 15 characters silhouetted against the opening gates of the cage.'],
] as const;

const englishFacts = [
  ['Where did the name “TTC (Two-Tier Cage)” come from?', 'The concept began with the enclosed space of a bunk bed in a student dormitory, which the author imagined as a surreal digital prison for 15 captives trapped in code.'],
  ['What makes each of the 15 characters unique?', 'Each character represents a psychological response to captivity: denial (the Lower Tier), the search for logic (Teni and Ell), rebellion (Yona and Goni), or acceptance of the dreamlike aesthetic (Lili and Alesya).'],
  ['An interactive adaptation for Telegram Mini App', 'The project is designed as a cross-platform visual novel playable directly in Telegram, with a vertical layout, touch controls, and branching dialogue.'],
  ['Inspired by visual novel aesthetics', 'The interface draws inspiration from the iconic style of Doki Doki Literature Club: soft pastel pinks, polka-dot patterns, and cozy frames contrast with the story’s growing psychological tension.'],
] as const;

const englishTeam = [
  ['Project Creator & Writer', 'Concept, story, character design, and art', 'Creator of the TTC universe, its lore and two-tier concept, and the original designs of all 15 characters.', 'Universe Creator'],
  ['Interactive Wiki Team', 'Web development, architecture, and Mini App', 'Building the interactive interface, styling, character-card system, and Telegram Mini App.', 'Technical Team'],
  ['Music Department (Soundtrack)', 'Atmospheric ambient music and sound effects', 'Melancholic and dynamic piano melodies with subtle synths are in development.', 'In Progress'],
] as const;

export function getLocalizedData(language: Language) {
  if (language === 'ru') {
    return {
      characters: CHARACTERS_DATA,
      endings: ENDINGS_DATA,
      gallery: GALLERY_DATA,
      facts: FACTS_DATA,
      team: TEAM_DATA,
    };
  }

  return {
    characters: CHARACTERS_DATA.map((character, index) => {
      const [name, role, tier, status, bio, quote] = englishCharacters[index];
      return { ...character, name: `${index + 1}. ${name}`, role, tier, status, bio, quote };
    }),
    endings: ENDINGS_DATA.map((ending, index) => {
      const [title, tag, condition, description, warningNote] = englishEndings[index];
      return { ...ending, title, tag, condition, description, warningNote };
    }),
    gallery: GALLERY_DATA.map((item, index) => {
      const [title, category, status, description] = englishGallery[index];
      return { ...item, title, category, status, description };
    }),
    facts: FACTS_DATA.map((fact, index) => {
      const [title, content] = englishFacts[index];
      return { ...fact, title, content };
    }),
    team: TEAM_DATA.map((member, index) => {
      const [name, roles, description, badge] = englishTeam[index];
      return { ...member, name, roles, description, badge };
    }),
  };
}

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage === 'en' ? 'en' : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    const title = `${translations[language].appTitle} — Wiki`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const openGraphDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const descriptionText =
      language === 'en'
        ? 'The official interactive wiki for “TTC (Two-Tier Cage)”, a psychological visual novel.'
        : 'Интерактивный прототип официального Wiki-сайта для визуальной новеллы «Дк. (Двухъярусная клетка)» в формате Telegram Mini App.';
    document.title = title;
    if (openGraphTitle) openGraphTitle.content = title;
    if (openGraphDescription) openGraphDescription.content = descriptionText;
    if (description) {
      description.content = descriptionText;
    }
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
