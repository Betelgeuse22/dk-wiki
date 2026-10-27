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
  ['Teni', 'Actor', 'Upper Tier', 'Searching for a way out', 'The most popular and talented actor in the theatre.', '“I try to be a light in this blind darkness.”'],
  ['Goni', 'Barrier engineer and mechanic', 'Lower Tier', 'Active', 'Hot-tempered but incredibly inventive. He studies the metal barriers and electronic locks between tiers, convinced that any system restriction can be overcome by force.', '“There is no grate you cannot loosen or short-circuit!”'],
  ['Ell', 'Strategist and liaison', 'Upper Tier', 'Active', 'A quiet observer who rarely raises his voice, yet whose plans work down to the second. He seems to remember fragments of his life before waking in this enclosed space.', '“The silence here is no accident. The game hears every word we say.”'],
  ['Enis', 'Keeper of memories and the archive', 'Lower Tier', 'Under observation', 'Collects fragments of dialogue, system notes, and strange clues scattered around the rooms. He is certain the cage has repeated the same cycle before.', '“I have seen that writing on the wall before... exactly forty-two cycles ago.”'],
  ['Nia', 'Mediator and the group’s empath', 'Upper Tier', 'Active', 'A kind and sensitive girl who tries to warm everyone with her smile, even in the most unsettling moments. She is deeply afraid of loneliness and the darkness of the lower passageways.', '“Please, let’s stay together! It is the only way we will all make it out safely.”'],
  ['Lyu', 'Ventilation-shaft scout', 'Lower Tier', 'Searching for a way out', 'Agile and nimble, able to squeeze through the narrowest maintenance passages between tiers. Lyu discovered empty server racks hidden behind some fake walls.', '“Up there, beyond the false ceiling, there are nothing but wires and a digital hum.”'],
  ['Lio', 'Defender and perimeter guard', 'Lower Tier', 'Active', 'Lyu’s close ally. He distrusts the rules of the game and always stands up for those who are weaker. He suspects one of them may be an agent of the system itself.', '“I will watch your back. No one else is disappearing from this room without an explanation.”'],
  ['Lyo', 'Intuitive and puzzle decoder', 'Upper Tier', 'Under observation', 'He sees invisible connections between events. Often seeming absent-minded, his hunches help the others evade the novel’s deadly scripted traps.', '“If you listen closely, you can hear someone clicking a mouse on the other side of the screen...”'],
  ['El', 'Interface researcher', 'Upper Tier', 'Searching for a way out', 'She has noticed dialogue boxes and choice buttons appearing in midair. She is trying to find a way to press “Return to Main Menu” from inside the world.', '“I can see a translucent frame around us. Are we just sprites on someone else’s screen?”'],
  ['Lili', 'Artist and level cartographer', 'Lower Tier', 'Active', 'Draws a detailed map of the Two-Tier Cage with colored chalk on scraps of wallpaper. She noticed the rooms’ geometry changes with the participants’ moods.', '“The rooms breathe and rearrange themselves... The walls move when we stop looking.”'],
  ['Player', 'Outside observer / Guide', 'Beyond the Code', 'Special status', 'The silhouette on the other side of the screen. The characters sense their presence through choices and the cursor. Their decisions determine whether the exit opens or closes forever.', '“...Are you still there? Do not leave us at this story crossroads.”'],
  ['Alyona', 'Diplomat and voice of reason', 'Upper Tier', 'Active', 'She can settle any dispute between the Upper and Lower Tiers. She believes only harmony and understanding can unlock hidden levels of trust.', '“Arguments only speed up the system timer. Let’s hear everyone out.”'],
  ['Alesya', 'Sound and music cryptographer', 'Lower Tier', 'Searching for a way out', 'She can feel the rhythm of the novel’s background music. She says distorted music warns of an approaching climax or scripted collapse.', '“The track just shifted to a minor key... Get ready, something is about to happen.”'],
  ['Kaoruko', 'Keeper of ancient rules', 'Neutral Zone', 'Under observation', 'A mysterious figure with impeccable manners and an enigmatic past. She knows formulas and system codes but speaks in parables, testing whether the others are ready for the truth.', '“The cage is not trying to destroy you. It is testing whether you deserve reality.”'],
  ['Yona', 'Awakened rebel', 'Neutral Zone', 'Special status', 'She openly challenges the creators of the visual novel. Searching for vulnerabilities in the code, she is ready to sacrifice her own sprite to give the others a chance at freedom.', '“I will not be locked in an endless dialogue box. Break this barrier!”'],
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
