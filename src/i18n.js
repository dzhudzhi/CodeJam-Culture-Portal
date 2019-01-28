import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'Main': 'Main',
          'Person List': 'Person List',
          'Фотограф дня': 'Photographer of the day',
          'Место рождения': 'Place of Birth',
          'Дата рождения': 'Date of Birth',
          'Подробнее': 'More',
          'О портале': 'About the portal',
          'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси': 'The portal contains information about the life and work of outstanding photographers of Belarus.',
          'Команда проекта': 'The project team',
          'Анатолий': 'Anatolii',
          'Артем': 'Artsiom',
          'Владислав': 'Vladislav',
          'Павел': 'Pavel',
          'Список фотографов': 'List of photographers',
          'Поиск': 'Seacrh',
          'Введите имя или город': 'Enter name or location',
          'Витебск, БССР': 'Vitebsk, BSSR',
          'Минск, Минская губерния, Российская империя': 'Minsk, Minsk Province, Russian Empire',
          'Унеча, Брянск, СССР': 'Unecha, Bryansk region, USSR',
          'Базан Владимир': 'Bazan Vladimir',
          'Барсуков Игорь': 'Barsukov Igor',
          'Бранштетер Павел': 'Branshteter Pavel',
          'Шмерлинг Михаил': 'Shmerling Mikhail',
          'Дашкевич Лев': 'Dashkevich Lev',
          'Биография': 'Biography',
          'Список основных работ': 'List of major works',
          'Галерея': 'Gallery',
          'Видео': 'Video',
          "«Думай, парень!» (1982–2005)": '«Think, guy!» (1982–2005)',
          "«Праздник в православной церкви» (1988)": '«The Holiday in the Orthodox Church» (1988)',
          "«Армения. Декабрь» (1988)": '«Armenia. December.» (1988)',
          "«Пионерский лагерь» (1989)": '«Pioneer Camp» (1989)',
          "«Приметы» (1989)": '«Signs» (1989)',
          "«Чернобыльский натюрморт» (1996)": '«Chernobyl Still Life» (1996)',
          "«Париж! Париж! Я не хочу домой!» (2001–2007)": '«Paris! Paris! I do not want to go home!» (2001–2007)',
          "Учеба на художественно-графическом факультете Витебского педагогического института": "Study at Art and Graphic Department of Vitebsk Pedagogical Institute",
          "Занимает должности фотографа, корреспондента, ответственного секретаря в витебской газете «Строитель»": "Workes as a photographer, reporter, executive secretary of the local newspaper «Builder» in Vitebsk.",
          "Занимает должности главного редактора, дизайнера и фотокорреспондента газеты «Витебский курьер»": "Holds the positions of chief editor, designer and press photographer of the newspaper «Vitebsk Courier»",
          "«Ратуша» (1966)": '«Town Hall» (1966)',
          "«Витебские дворы» (1966)": '«Vitebsk Yards» (1966)',
          "«Зима в Полоцке» (1985)": '«Winter in Polotsk» (1985)',
          "«Под небом Беларуси» (1995)": '«Under the Sky of Belarus» (1995)',
          "«Река Витьба» (2007)": '«The River Vitsba» (2007)',
          "серия «Начало пути» (1995)": 'series «The Beginning of the Way» (1995)',
          "«Воскресенская церковь» (2008)": '«The Church of Resurrection» (2008)',
          "Заканчивает художественно-графический факультет Витебского государственного педагогического института им. С. М. Кирова": 'Graduates from Art and Graphic Department of Vitebsk State Pedagogical Institute',
          "Работает в системе бытового обслуживания населения": "Works in the system of public services",
          "Фотограф и преподаватель Витебского государственного технологичного института (позже – университета)": "Photographer and teacher of the Vitebsk State Technological Institute (later - the university)",
          "Член Белорусского союза дизайнеров": "Member of the Belarusian Union of Designers",
          "«Домой» (1983)": '«Home» (1983)',
          "«Руки» (1987)": '«Hands» (1987)',
          "«Немолодой автомобиль» (2006)": '«A Middle-aged Car» (2006)',
          "«Моя Беларусь» (2007)": 'My Belarus',
          "«Комсомольское ретро» (2008)": '«Komsomolsk Retro» (2008)',
          "«Долговременная огневая точка» (2009)": '«Pillbox» (2009)',
          "«Вирус декоративности» (2009)": '«The Virus of Ornamentality» (2009)',
          "Оканчивает художественно-графический факультет Витебского педагогического института": "Graduates from the graphic arts faculty of the Vitebsk Pedagogical Institute",
          "Работает фотографом в институте «Витебсксельстройпроект»": "Works as a photographer at the institute «Vitebskselstroyproekt»",
          "Преподает на кафедре дизайна Витебского государственного технологического университета. Член белорусского общественного объединения «Фотоискусство». Член Белорусского союза дизайнеров. Живет в Витебске":
          "He teaches at the design department of the Vitebsk State Technological University. Member of the Belarusian public association «Photoart». Member of the Belarusian Union of Designers. He lives in Vitebsk",
          "«Браславский мотив» (1982)": '«Braslavsky Motif» (1982)',
          "«Художник Ф. Гумен» (1985)": '«Artist F. Gumen» (1985)',
          "«Народная артистка СССР С. Станюта» (1990)": '«Peoples Artist of the USSR S. Stanyuta» (1990)',
          "«Вечер» (1991)": '«Evening» (1991)',
          "«Летучка» (2000)": '«Briefing» (2000)',
          "«Афганцы» (2005)": '«Afghan War Veterans» (2005)',
          "«Художники» (2010)": '«Artists» (2010)',
          "Оканчивает Минское полиграфическое училище.": "Graduates from Minsk Polygraphic School.",
          "Работает в Витебском областном краеведческом музее.": 'Workes in Vitebsk Regional Museum',
          "Работает в производственном объединении «Мастацтва».": 'Workes in the production association «Mastatstva»',
          "Работает в редакции областной газеты «Народнае слова».": 'Workes in the editorial office of the regional newspaper «Narodnaya Slova»',
          "фотографии этнографической экспедиции (1923)": "photos of the ethnographic expedition (1923)",
          "снимки Минска (1920)": "photos of Minsk (1920)",
          "«Портрет жены Зинаиды Онуфриевны»": "Portrait of Zinaida Onufrievna's wife",
          "Учился в Минской мужской гимназии и Виленском интернате.": "He studied at the Minsk male gymnasium and the Vilna boarding school.",
          "За участие в студенческой забастовке арестован и исключен из университета без права поступления в вузы Российской империи.":
          "For participation in a student strike, he was arrested and expelled from the university without the right to enter universities in the Russian Empire.",
          "Учился во Франции - на факультете филологии (La faculté de lettres) Университета Бургундии (Дижон). Параллельно занимался на фотографическом отделении Высшей школы графических искусств в Париже. С 1911 году начал печататься в научных изданиях (La Nature. Paris).":
          "He studied in France - at the Faculty of Philology (La faculté de lettres) of the University of Burgundy (Dijon). In parallel, he studied at the photographic department of the Graduate School of Graphic Arts in Paris. From 1911 he began to be published in scientific publications (La Nature. Paris).",
          "Жил в Закавказье, работал преподавателем французского языка , физики, естествознания и других предметов в гимназиях Эрывани (Ереван), Елизаветполя (ныне Гянджа, Азербайджан), Тифлиса (Тбилиси). Ездил по региону в качестве фотографа Комиссии по описанию местностей и племен Кавказа. В 1918 служил государственным фотографом правительства Азербайджанской республики.":
          'He lived in the Transcaucasus, worked as a teacher of French, physics, natural science and other subjects in the gymnasiums of Eryvani (Yerevan), Elizavetpol (now Ganja, Azerbaijan), Tiflis (Tbilisi). In 1918 he served as state photographer of the government of the Republic of Azerbaijan.',
          "Вернулся в Минск. Преподавал французский язык в Белорусском политехническом институте. Работал в Научно-терминологической комиссии Наркомпроса БССР. В 1923-1924 научный фотограф на медицинском факультете БГУ.":
          "He returned to Minsk. He taught French at the Belarusian Polytechnic Institute. He worked in the Scientific and Terminology Commission of the People's Commissariat of Education of the BSSR. In 1923-1924 he was a scientific photographer at the medical faculty of the Belarusian State University.",
          "Арестован ГПУ БССР по делу «Союза освобождения Беларуси».": 'Arrested by the GPU of the BSSR in the case of the Union of Liberation of Belarus.',
          "Жил в эвакуации в г. Фрунзе (ныне Бишкек , Кыргызстан), работал в медицинских учреждениях.": "He lived in the evacuation in Frunze (now Bishkek, Kyrgyzstan), worked in medical institutions.",
          "Вернулся в Минск. Работал в Институте теоретической медицины и Институте физиологии.": "Returned to Minsk. Worked at the Institute of Theoretical Medicine and the Institute of Physiology.",

        },
      },
      ru: {
        translations: {
          'Main': 'Главная',
          'Person List': 'Список деятелей',
          'Фотограф дня': 'Фотограф дня',
          'Место рождения': 'Место рождения',
          'Дата рождения': 'Дата рождения',
          'Подробнее': 'Подробнее',
          'О портале': 'О портале',
          'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси': 'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси.',
          'Команда проекта': 'Команда проекта',
          'Анатолий': 'Анатолий',
          'Артем': 'Артем',
          'Владислав': 'Владислав',
          'Павел': 'Павел',
          'Список фотографов': 'Список фотографов',
          'Поиск': 'Поиск',
          'Введите имя или город': 'Введите имя или город',
          'Витебск, БССР': 'Витебск, БССР',
          'Минск, Минская губерния, Российская империя': 'Минск, Минская губерния, Российская империя',
          'Унеча, Брянск, СССР': 'Унеча, Брянск, СССР',
          'Базан Владимир': 'Базан Владимир',
          'Барсуков Игорь': 'Барсуков Игорь',
          'Бранштетер Павел': 'Бранштетер Павел',
          'Шмерлинг Михаил': 'Шмерлинг Михаил',
          'Дашкевич Лев': 'Дашкевич Лев',
          'Биография': 'Биография',
          'Список основных работ': 'Список основных работ',
          'Галерея': 'Галерея',
          'Видео': 'Видео',
          "«Думай, парень!» (1982–2005)": "«Думай, парень!» (1982–2005)",
          "«Праздник в православной церкви» (1988)": "«Праздник в православной церкви» (1988)",
          "«Армения. Декабрь» (1988)": "«Армения. Декабрь» (1988)",
          "«Пионерский лагерь» (1989)": "«Пионерский лагерь» (1989)",
          "«Приметы» (1989)": "«Приметы» (1989)",
          "«Чернобыльский натюрморт» (1996)": "«Чернобыльский натюрморт» (1996)",
          "«Париж! Париж! Я не хочу домой!» (2001–2007)": "«Париж! Париж! Я не хочу домой!» (2001–2007)",
          "Учеба на художественно-графическом факультете Витебского педагогического института": "Учеба на художественно-графическом факультете Витебского педагогического института.",
          "Занимает должности фотографа, корреспондента, ответственного секретаря в витебской газете «Строитель»": "Занимает должности фотографа, корреспондента, ответственного секретаря в витебской газете «Строитель»",
          "Занимает должности главного редактора, дизайнера и фотокорреспондента газеты «Витебский курьер»": "Занимает должности главного редактора, дизайнера и фотокорреспондента газеты «Витебский курьер»",
          "«Ратуша» (1966)": "«Ратуша» (1966)",
          "«Витебские дворы» (1966)": "«Витебские дворы» (1966)",
          "«Зима в Полоцке» (1985)": "«Зима в Полоцке» (1985)",
          "«Под небом Беларуси» (1995)": "«Под небом Беларуси» (1995)",
          "«Река Витьба» (2007)": "«Река Витьба» (2007)",
          "серия «Начало пути» (1995)": "серия «Начало пути» (1995)",
          "«Воскресенская церковь» (2008)": "«Воскресенская церковь» (2008)",
          "Заканчивает художественно-графический факультет Витебского государственного педагогического института им. С. М. Кирова": "Заканчивает художественно-графический факультет Витебского государственного педагогического института им. С. М. Кирова",
          "Работает в системе бытового обслуживания населения": "Работает в системе бытового обслуживания населения",
          "Фотограф и преподаватель Витебского государственного технологичного института (позже – университета)": "Фотограф и преподаватель Витебского государственного технологичного института (позже – университета)",
          "Член Белорусского союза дизайнеров": "Член Белорусского союза дизайнеров",
          "«Домой» (1983)": "«Домой» (1983)",
          "«Руки» (1987)": "«Руки» (1987)",
          "«Немолодой автомобиль» (2006)": "«Немолодой автомобиль» (2006)",
          "«Моя Беларусь» (2007)": "«Моя Беларусь» (2007)",
          "«Комсомольское ретро» (2008)": "«Комсомольское ретро» (2008)",
          "«Долговременная огневая точка» (2009)": "«Долговременная огневая точка» (2009)",
          "«Вирус декоративности» (2009)": "«Вирус декоративности» (2009)",
          "Оканчивает художественно-графический факультет Витебского педагогического института": "Оканчивает художественно-графический факультет Витебского педагогического института",
          "Работает фотографом в институте «Витебсксельстройпроект»": "Работает фотографом в институте «Витебсксельстройпроект»",
          "Преподает на кафедре дизайна Витебского государственного технологического университета. Член белорусского общественного объединения «Фотоискусство». Член Белорусского союза дизайнеров. Живет в Витебске": 
          "Преподает на кафедре дизайна Витебского государственного технологического университета. Член белорусского общественного объединения «Фотоискусство». Член Белорусского союза дизайнеров. Живет в Витебске",
          "«Браславский мотив» (1982)": "«Браславский мотив» (1982)",
          "«Художник Ф. Гумен» (1985)": "«Художник Ф. Гумен» (1985)",
          "«Народная артистка СССР С. Станюта» (1990)": "«Народная артистка СССР С. Станюта» (1990)",
          "«Вечер» (1991)": "«Вечер» (1991)",
          "«Летучка» (2000)": "«Летучка» (2000)",
          "«Афганцы» (2005)": "«Афганцы» (2005)",
          "«Художники» (2010)": "«Художники» (2010)",
          "Оканчивает Минское полиграфическое училище.": "Оканчивает Минское полиграфическое училище.",
          "Работает в Витебском областном краеведческом музее.": "Работает в Витебском областном краеведческом музее.",
          "Работает в производственном объединении «Мастацтва».": "Работает в производственном объединении «Мастацтва».",
          "Работает в редакции областной газеты «Народнае слова».": "Работает в редакции областной газеты «Народнае слова».",
          "фотографии этнографической экспедиции (1923)": "фотографии этнографической экспедиции (1923)",
          "снимки Минска (1920)": "снимки Минска (1920)",
          "«Портрет жены Зинаиды Онуфриевны»": "«Портрет жены Зинаиды Онуфриевны»",
          "Учился в Минской мужской гимназии и Виленском интернате.": "Учился в Минской мужской гимназии и Виленском интернате.",
          "За участие в студенческой забастовке арестован и исключен из университета без права поступления в вузы Российской империи.": "За участие в студенческой забастовке арестован и исключен из университета без права поступления в вузы Российской империи.",
          "Учился во Франции - на факультете филологии (La faculté de lettres) Университета Бургундии (Дижон). Параллельно занимался на фотографическом отделении Высшей школы графических искусств в Париже. С 1911 году начал печататься в научных изданиях (La Nature. Paris).":
          "Учился во Франции - на факультете филологии (La faculté de lettres) Университета Бургундии (Дижон). Параллельно занимался на фотографическом отделении Высшей школы графических искусств в Париже. С 1911 году начал печататься в научных изданиях (La Nature. Paris).",
          "Жил в Закавказье, работал преподавателем французского языка , физики, естествознания и других предметов в гимназиях Эрывани (Ереван), Елизаветполя (ныне Гянджа, Азербайджан), Тифлиса (Тбилиси). Ездил по региону в качестве фотографа Комиссии по описанию местностей и племен Кавказа. В 1918 служил государственным фотографом правительства Азербайджанской республики.":
          "Жил в Закавказье, работал преподавателем французского языка , физики, естествознания и других предметов в гимназиях Эрывани (Ереван), Елизаветполя (ныне Гянджа, Азербайджан), Тифлиса (Тбилиси). Ездил по региону в качестве фотографа Комиссии по описанию местностей и племен Кавказа. В 1918 служил государственным фотографом правительства Азербайджанской республики.",
          "Вернулся в Минск. Преподавал французский язык в Белорусском политехническом институте. Работал в Научно-терминологической комиссии Наркомпроса БССР. В 1923-1924 научный фотограф на медицинском факультете БГУ.":
          "Вернулся в Минск. Преподавал французский язык в Белорусском политехническом институте. Работал в Научно-терминологической комиссии Наркомпроса БССР. В 1923-1924 научный фотограф на медицинском факультете БГУ.",
          "Арестован ГПУ БССР по делу «Союза освобождения Беларуси».": "Арестован ГПУ БССР по делу «Союза освобождения Беларуси».",
          "Жил в эвакуации в г. Фрунзе (ныне Бишкек , Кыргызстан), работал в медицинских учреждениях.": "Жил в эвакуации в г. Фрунзе (ныне Бишкек , Кыргызстан), работал в медицинских учреждениях.",
          "Вернулся в Минск. Работал в Институте теоретической медицины и Институте физиологии.": "Вернулся в Минск. Работал в Институте теоретической медицины и Институте физиологии.",
        },
      },
      by: {
        translations: {
          'Main': 'Галоўная ',
          'Person List': 'Спіс дзеячаў',
          'Фотограф дня': 'Фатограф дня',
          'Место рождения': 'Месца нараджэння',
          'Дата рождения': 'Дата нараджэння',
          'Подробнее': 'Падрабязна',
          'О портале': 'Аб партале',
          'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси': 'Партал змяшчае інфармацыю пра жыццё і творчасць выдатных фатографаў Беларусі.',
          'Команда проекта': 'Каманда праекта',
          'Анатолий': 'Анатоль',
          'Артем': 'Арцём',
          'Владислав': 'Уладзіслаў',
          'Павел': 'Павел',
          'Список фотографов': 'Cпіс фатографаў',
          'Поиск': 'Пошук',
          'Введите имя или город': 'Увядзіце імя альбо месца',
          'Витебск, БССР': 'Віцебск, БССР',
          'Минск, Минская губерния, Российская империя': 'Мінск, Мінская губерня, Расійская імперыя',
          'Унеча, Брянск, СССР': 'Унеча, Бранск, СССР',
          'Базан Владимир': 'Базан Уладзімір',
          'Барсуков Игорь': 'Барсукоў Ігар',
          'Бранштетер Павел': 'Бранштэтар Павел',
          'Шмерлинг Михаил': 'Шмерлінг Міхаіл',
          'Дашкевич Лев': 'Дашкевіч Леў',
          'Биография': 'Біяграфія',
          'Список основных работ': 'Спіс асноўных работ',
          'Галерея': 'Галерэя',
          'Видео': 'Відэа',
          "«Думай, парень!» (1982–2005)": '«Думай, хлопец!» (1982–2005)',
          "«Праздник в православной церкви» (1988)": "«Свята ў праваслаўнай царкве» (1988)",
          "«Армения. Декабрь» (1988)": "«Арменія. Снежань.» (1988)",
          "«Пионерский лагерь» (1989)": "«Піянерскі лагер» (1989)",
          "«Приметы» (1989)": "«Прыкметы» (1989)",
          "«Чернобыльский натюрморт» (1996)": "«Чарнобыльскі нацюрморт» (1996)",
          "«Париж! Париж! Я не хочу домой!» (2001–2007)": "«Парыж! Парыж! Я не хачу дадому!»",
          "Учеба на художественно-графическом факультете Витебского педагогического института": "Вучоба на мастацка-графічным факультэце Віцебскага педагагічнага інстытута",
          "Занимает должности фотографа, корреспондента, ответственного секретаря в витебской газете «Строитель»": "Займае пасады фатографа, карэспандэнта, адказнага сакратара ў віцебскай газеце «Будаўнік»",
          "Занимает должности главного редактора, дизайнера и фотокорреспондента газеты «Витебский курьер»": "Займае пасады галоўнага рэдактара, дызайнера і фотакарэспандэнта газеты «Віцебскі кур'ер»",
          "«Ратуша» (1966)": '«Ратуша» (1966)',
          "«Витебские дворы» (1966)": '«Віцебскія двары» (1966)',
          "«Зима в Полоцке» (1985)": '«Зіма ў Полацку» (1985)',
          "«Под небом Беларуси» (1995)": '«Пад небам Беларусі» (1995)',
          "«Река Витьба» (2007)": '«Рака Віцьба» (2007)',
          "серия «Начало пути» (1995)": 'серыя «Пачатак шляху» (1995)',
          "«Воскресенская церковь» (2008)": '«Уваскрасенская царква» (2008)',
          "Заканчивает художественно-графический факультет Витебского государственного педагогического института им. С. М. Кирова": "Заканчвае мастацка-графічны факультэт Віцебскага дзяржаўнага педагагічнага інстытута ім. С. М. Кірава",
          "Работает в системе бытового обслуживания населения": "Працуе ў сістэме бытавога абслугоўвання насельніцтва",
          "Фотограф и преподаватель Витебского государственного технологичного института (позже – университета)":  "Фатограф і выкладчык Віцебскага дзяржаўнага тэхналагічнага інстытута (пазней - універсітэта)",
          "Член Белорусского союза дизайнеров": "Член Беларускага саюза дызайнераў",
          "«Домой» (1983)": '«Дадому» (1983)',
          "«Руки» (1987)": '«Рукі» (1987)',
          "«Немолодой автомобиль» (2006)": '«Немалады аўтамабіль» (2006)',
          "«Моя Беларусь» (2007)": '«Мая Беларусь» (2007)',
          "«Комсомольское ретро» (2008)": '«Камсамольскае рэтра» (2008)',
          "«Долговременная огневая точка» (2009)": '«Даўгачасны агнявы пункт» (2009)',
          "«Вирус декоративности» (2009)": '«Вірус дэкаратыўнасці» (2009)',
          "Оканчивает художественно-графический факультет Витебского педагогического института": "Заканчвае мастацка-графічны факультэт Віцебскага педагагічнага інстытута",
          "Работает фотографом в институте «Витебсксельстройпроект»":  "Працуе фатографам у інстытуце «Витебсксельстройпроект»",
          "Преподает на кафедре дизайна Витебского государственного технологического университета. Член белорусского общественного объединения «Фотоискусство». Член Белорусского союза дизайнеров. Живет в Витебске":
          "Выкладае на кафедры дызайну Віцебскага дзяржаўнага тэхналагічнага універсітэта. Член беларускага грамадскага аб'яднання «Фотамастацтва». Член Беларускага саюза дызайнераў. Жыве ў Віцебску",
          "«Браславский мотив» (1982)": '«Браслаўскі матыў» (1982)',
          "«Художник Ф. Гумен» (1985)": '«Мастак Ф. Гумен» (1985)',
          "«Народная артистка СССР С. Станюта» (1990)": '«Народная артыстка СССР С. Станюта» (1990)',
          "«Вечер» (1991)": '«Вечар» (1991)',
          "«Летучка» (2000)": '«Лятучка» (2000)',
          "«Афганцы» (2005)": '«Афганцы» (2005)',
          "«Художники» (2010)": '«Мастакі» (2010)',
          "Оканчивает Минское полиграфическое училище.": "Заканчвае Мінскае паліграфічнае вучылішча.",
          "Работает в Витебском областном краеведческом музее.": "Працуе ў Віцебскім абласным краязнаўчым музеі.",
          "Работает в производственном объединении «Мастацтва».": "Працуе ў вытворчым аб'яднанні «Мастацтва».",
          "Работает в редакции областной газеты «Народнае слова».": "Працуе ў рэдакцыі абласной газеты« Народнае слова ».",
          "фотографии этнографической экспедиции (1923)": "Фатаграфіі этнаграфічнай экспедыцыі (1923)",
          "снимки Минска (1920)": "Здымкі Мінска (1920 года)",
          "«Портрет жены Зинаиды Онуфриевны»": "Партрэт жонкі",
          "Учился в Минской мужской гимназии и Виленском интернате.": "Вучыўся ў Мінскай мужчынскай гімназіі і Віленскім інтэрнаце.",
          "За участие в студенческой забастовке арестован и исключен из университета без права поступления в вузы Российской империи.": "За ўдзел у студэнцкай забастоўцы арыштаваны і выключаны з універсітэта без права паступлення ў ВНУ Расійскай імперыі.",
          "Учился во Франции - на факультете филологии (La faculté de lettres) Университета Бургундии (Дижон). Параллельно занимался на фотографическом отделении Высшей школы графических искусств в Париже. С 1911 году начал печататься в научных изданиях (La Nature. Paris).":
          "Вучыўся ў Францыі - на факультэце філалогіі (La faculté de lettres) Універсітэта Бургундыі (Дыжон). Паралельна займаўся на фатаграфічным аддзяленні Вышэйшай школы графічных мастацтваў у Парыжы. З 1911 годзе пачаў друкавацца ў навуковых выданнях (La Nature. Paris).",
          "Жил в Закавказье, работал преподавателем французского языка , физики, естествознания и других предметов в гимназиях Эрывани (Ереван), Елизаветполя (ныне Гянджа, Азербайджан), Тифлиса (Тбилиси). Ездил по региону в качестве фотографа Комиссии по описанию местностей и племен Кавказа. В 1918 служил государственным фотографом правительства Азербайджанской республики.":
          "Жыў у Закаўказзе, працаваў выкладчыкам французскай мовы, фізікі, прыродазнаўства і іншых прадметаў у гімназіях Эрывани (Ерэван), Елізаветпаля (цяпер Гянджа, Азербайджан), Тыфліса (Тбілісі). Ездзіў па рэгіёне ў якасці фатографа Камісіі па апісанні мясцовасцяў і плямёнаў Каўказа. У 1918 служыў дзяржаўным фатографам урада Азербайджанскай рэспублікі. ",
          "Вернулся в Минск. Преподавал французский язык в Белорусском политехническом институте. Работал в Научно-терминологической комиссии Наркомпроса БССР. В 1923-1924 научный фотограф на медицинском факультете БГУ.":
          "Вярнуўся ў Мінск. Выкладаў французскую мову ў Беларускім політэхнічным інстытуце. Працаваў у Навукова-тэрміналагічнай камісіі Наркамасветы БССР. У 1923-1924 навуковы фатограф на медыцынскім факультэце БДУ.",
          "Арестован ГПУ БССР по делу «Союза освобождения Беларуси».": "Арыштаваны ГПУ БССР па справе« Саюза вызвалення Беларусі ».",
          "Жил в эвакуации в г. Фрунзе (ныне Бишкек , Кыргызстан), работал в медицинских учреждениях.": "Жыў у эвакуацыі ў г. Фрунзе (цяпер Бішкек, Кыргызстан), працаваў у медыцынскіх установах.",
          "Вернулся в Минск. Работал в Институте теоретической медицины и Институте физиологии.": "Вярнуўся ў Мінск. Працаваў у Інстытуце тэарэтычнай медыцыны і Інстытуце фізіялогіі.",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      formatSeparator: ","
    },

    react: {
      wait: true
    }
  });

export default i18n;
