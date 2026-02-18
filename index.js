    const STORE_KEY = "TB_OVERRIDES_v2";
    const PIN_HASH_KEY = "TB_ADMIN_PIN_HASH_v1";
    const LANG_KEY = "TB_LANG_v1";

    const DEFAULT_CONFIG = {
      brand: {
        nameRu: "Тазша Бала",
        nameLogo: "TAZSHA BALA",
        sloganRu: "Мир ярких эмоций и веселья",
        sloganKz: "Жарқын эмоциялар мен көңіл-күй әлемі"
      },
      contacts: {
        phoneDisplay: "+7 747 902-08-48",
        phoneTel: "+77479020848",
        whatsapp: "77479020848"
      },
      socials: { instagram: "tazsha_bala_kz" },
      address: {
        cityRu: "Кокшетау",
        cityKz: "Көкшетау",
        fullRu: "Кокшетау, мкр. Сарыарка 22А, БЦ ‘Mega сыр сұлуы’, 1–2 этаж",
        fullKz: "Көкшетау, Сарыарқа ықш.ауд. 22А, ‘Mega сыр сұлуы’ БО, 1–2 қабат",
        streetAddressRu: "мкр. Сарыарка, 22А, БЦ Mega сыр сұлуы, 1–2 этаж"
      },
      scheduleOpen: "11:00",
      scheduleClose: "23:00",
      timezone: "Asia/Almaty",
      area: { ru: "4500 м² игровой площадки", kz: "4500 м² ойын алаңы" },
      mapQuery: "Кокшетау мкр. Сарыарка 22А БЦ Mega сыр сұлуы Тазша Бала",
      legalNotes: {
        hoursNoteRu: "График может меняться — уточняйте в WhatsApp",
        hoursNoteKz: "Кесте өзгеруі мүмкін — WhatsApp-та нақтылаңыз",
        privacyRu: "Отправляя заявку, вы соглашаетесь на обработку данных для связи с вами. Мы не передаём данные третьим лицам.",
        privacyKz: "Өтінім жіберу арқылы сізбен байланысу үшін деректерді өңдеуге келісесіз. Деректер үшінші тұлғаларға берілмейді.",
        adminNoticeRu: "Изменения сохраняются только в этом браузере (localStorage). Для настоящей админ-панели нужен сервер/CRM.",
        adminNoticeKz: "Өзгерістер тек осы браузерде сақталады (localStorage). Нағыз әкімші панелі үшін сервер/CRM керек."
      },
      toggles: { showRules: true, showFaq: true },
      content: {
        benefitsRu: ["Без выходных", "Безопасно", "Фуд-корт"],
        benefitsKz: ["Демалыссыз", "Қауіпсіз", "Фуд-корт"],
        bdayIntroRu: "Банкетная зона, аниматоры, шоу-программа и организация “под ключ”. Напишите — подберём вариант под ваш запрос.",
        bdayIntroKz: "Банкет аймағы, аниматорлар, шоу-бағдарлама және “бәрі дайын”. Жазыңыз — сұранысыңызға сай ұсынамыз.",
        partnerTextRu: "Сотрудничество, мероприятия, группы и корпоративы — напишите нам в WhatsApp, обсудим формат.",
        partnerTextKz: "Серіктестік, іс-шаралар, топтар және ұжымдық келулер — WhatsApp-қа жазыңыз, форматты талқылаймыз."
      },
      gallery: { urls: [] },
      links: { canonical: "https://tazsha-bala.example/", reviews2gis: "", reviewsYandex: "" }
    };

    function safeParse(json, fallback){ try{ return JSON.parse(json) ?? fallback; } catch { return fallback; } }
    function deepMerge(a, b){
      if(Array.isArray(a) && Array.isArray(b)) return b;
      if(typeof a === "object" && a && typeof b === "object" && b){
        const out = { ...a };
        for(const k of Object.keys(b)) out[k] = deepMerge(a[k], b[k]);
        return out;
      }
      return (b === undefined) ? a : b;
    }
    function loadOverrides(){
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? safeParse(raw, {}) : {};
    }
    function saveOverrides(data){ localStorage.setItem(STORE_KEY, JSON.stringify(data)); }
    function clearOverrides(){ localStorage.removeItem(STORE_KEY); }

    let CONFIG = deepMerge(DEFAULT_CONFIG, loadOverrides());

    const I18N = {
      ru: {
        skipToContent: "Пропустить к содержимому",
        navZones: "Зоны", navPrices: "Цены", navBirthday: "Праздники", navReviews: "Отзывы", navContacts: "Контакты",
        navGallery: "Галерея", navFaq: "FAQ", navRules: "Правила",
        ctaWhatsApp: "WhatsApp", ctaCall: "Позвонить", ctaRoute: "Маршрут", ctaSeePrices: "Смотреть цены", ctaBook: "Забронировать",
        heroTitle1: "Парк, где", heroTitle2: "счастье", heroTitle3: "бесконечно",
        heroTextA: "Огромное пространство", heroTextB: "драйва, игр и веселья.", heroTextC: "Безопасные зоны, фуд-корт и праздники “под ключ”.",
        chipOpenStateOpen: "открыто", chipOpenStateClosed: "закрыто",
        hoursNote: "График может меняться — уточняйте в WhatsApp",
        zonesTitleA: "Больше чем", zonesTitleB: "просто игры", zonesHint: "Кликни на карточку — откроется фото (лайтбокс)",
        pricesTitle: "Тарифы", pricesSub: "Цены и детали уточняйте в WhatsApp — расскажем актуально.",
        priceBadge: "Актуально по запросу", priceLabelWeek: "Будни (Пн–Пт)", priceLabelWeekend: "Выходные", priceLabelUnlimited: "Безлимит",
        priceValuePlaceholder: "Уточняйте", priceSuffixPlaceholder: "в WhatsApp", btnSendRequest: "Заявка",
        rulesTitle: "Правила и безопасность", rulesSub: "Коротко и по делу — чтобы всем было комфортно и безопасно.", rulesBtn: "Уточнить правила в WhatsApp",
        galleryTitle: "Галерея", gallerySub: "Фото можно заменить на реальные — через админку (список URL).",
        faqTitle: "FAQ", faqSub: "Частые вопросы — если нужно, уточним в WhatsApp.",
        partnersTitle: "Партнёрам / сотрудничество", partnersSub: "Мероприятия, группы, корпоративы — обсудим формат.", partnersBtn: "Написать по сотрудничеству",
        birthdayTitleA: "День рождения", birthdayTitleB: "под ключ", birthdayBtn: "Оставить заявку",
        reviewsTitleA: "Отзывы", reviewsTitleB: "посетителей", reviewsSub: "Пример оформления. Реальные отзывы смотрите в сервисах ниже.",
        reviews2gis: "Смотреть отзывы в 2GIS", reviewsYandex: "Смотреть отзывы в Яндекс",
        formTitle: "Забронировать / задать вопрос", formSub: "Ответим в WhatsApp максимально быстро",
        formName: "Имя", formPhone: "Телефон", formTopic: "Тип обращения", formMsg: "Комментарий (необязательно)",
        formBtn: "Отправить в WhatsApp 🚀", formErr: "Пожалуйста, заполните имя и телефон.",
        formConsent: "Согласен(на) на обработку данных для связи со мной", formConsentHint: "Мы используем данные только чтобы ответить вам.",
        footContacts: "Контакты", footMapOpen: "Открыть в картах", adminForOrg: "Для организаторов",
        statusLabel: "Статус:", statusBySchedule: "по графику",
        openNowOpen: "ОТКРЫТО СЕЙЧАС ✅", openNowClosed: "СЕЙЧАС ЗАКРЫТО ⛔", openNowUnknown: "Уточняйте график",
        toastLangRu: "Язык: RU", toastLangKz: "Язык: KZ",
        toastWA: "Открываю WhatsApp…", toastSaved: "Сохранено ✅", toastReset: "Сброшено",
        toastImportOk: "Импортировано ✅", toastImportErr: "Ошибка импорта JSON",
        toastNeedName: "Введите имя", toastInvalidPhone: "Введите корректный телефон", toastNeedConsent: "Поставьте галочку согласия",
        confirmReset: "Сбросить все изменения и вернуть значения по умолчанию?",
        pinNoSet: "PIN ещё не установлен. Введите PIN (4–8 цифр) и нажмите “Войти / Установить PIN”.",
        pinEnter: "Введите PIN администратора.",
        pinBad: "Неверный PIN.",
        pinSetOk: "PIN установлен ✅",
        pinChangedOk: "PIN изменён ✅",
        adminTitle: "Панель администратора",
        adminSub: "Меняй данные — сохраняется в браузере (localStorage)",
        tabContacts: "Контакты", tabSchedule: "График", tabContent: "Галерея/контент",
        saveBtn: "Сохранить изменения", resetBtn: "Сбросить (очистить)", changePinBtn: "Сменить PIN",
        exportBtn: "Экспорт JSON", importBtn: "Импорт JSON",
        lbHint: "←/→ листать • Esc закрыть"
      },
      kz: {
        skipToContent: "Мазмұнға өту",
        navZones: "Аймақтар", navPrices: "Бағалар", navBirthday: "Мерекелер", navReviews: "Пікірлер", navContacts: "Байланыс",
        navGallery: "Галерея", navFaq: "FAQ", navRules: "Ережелер",
        ctaWhatsApp: "WhatsApp", ctaCall: "Қоңырау", ctaRoute: "Маршрут", ctaSeePrices: "Бағаны көру", ctaBook: "Брондау",
        heroTitle1: "Бақыт", heroTitle2: "шексіз", heroTitle3: "парк",
        heroTextA: "Үлкен кеңістік", heroTextB: "ойын, қуаныш және эмоция.", heroTextC: "Қауіпсіз аймақтар, фуд-корт және дайын мерекелер.",
        chipOpenStateOpen: "ашық", chipOpenStateClosed: "жабық",
        hoursNote: "Кесте өзгеруі мүмкін — WhatsApp-та нақтылаңыз",
        zonesTitleA: "Жай ғана", zonesTitleB: "ойын емес", zonesHint: "Картаны басыңыз — фото ашылады (лайтбокс)",
        pricesTitle: "Тарифтер", pricesSub: "Бағалар мен шарттарды WhatsApp-та нақтылаңыз.",
        priceBadge: "Сұраныс бойынша", priceLabelWeek: "Жұмыс күндері (Дс–Жм)", priceLabelWeekend: "Демалыс", priceLabelUnlimited: "Шектеусіз",
        priceValuePlaceholder: "Нақтылаңыз", priceSuffixPlaceholder: "WhatsApp-та", btnSendRequest: "Өтінім",
        rulesTitle: "Ереже және қауіпсіздік", rulesSub: "Қысқа әрі түсінікті — бәріне жайлы болсын.", rulesBtn: "Ережені WhatsApp-та нақтылау",
        galleryTitle: "Галерея", gallerySub: "Фотоларды админка арқылы URL тізімімен ауыстыруға болады.",
        faqTitle: "FAQ", faqSub: "Жиі сұрақтар — қажет болса WhatsApp-та нақтылаймыз.",
        partnersTitle: "Серіктестік / ынтымақтастық", partnersSub: "Іс-шаралар, топтар — форматты талқылаймыз.", partnersBtn: "Серіктестікке жазу",
        birthdayTitleA: "Туған күн", birthdayTitleB: "дайын пакет", birthdayBtn: "Өтінім қалдыру",
        reviewsTitleA: "Пікірлер", reviewsTitleB: "келушілерден", reviewsSub: "Бұл — үлгі. Нақты пікірлерді сервистерден қараңыз.",
        reviews2gis: "2GIS пікірлері", reviewsYandex: "Яндекс пікірлері",
        formTitle: "Брондау / сұрақ қою", formSub: "WhatsApp-та тез жауап береміз",
        formName: "Аты", formPhone: "Телефон", formTopic: "Өтініш түрі", formMsg: "Пікір (міндетті емес)",
        formBtn: "WhatsApp-қа жіберу 🚀", formErr: "Атыңызды және телефонды толтырыңыз.",
        formConsent: "Менің сұрағыма жауап беру үшін деректерді өңдеуге келісемін", formConsentHint: "Деректер тек байланыс үшін қолданылады.",
        footContacts: "Байланыс", footMapOpen: "Картада ашу", adminForOrg: "Ұйымдастырушыларға",
        statusLabel: "Статус:", statusBySchedule: "кесте бойынша",
        openNowOpen: "ҚАЗІР АШЫҚ ✅", openNowClosed: "ҚАЗІР ЖАБЫҚ ⛔", openNowUnknown: "Кестені нақтылаңыз",
        toastLangRu: "Тіл: RU", toastLangKz: "Тіл: KZ",
        toastWA: "WhatsApp ашылуда…", toastSaved: "Сақталды ✅", toastReset: "Тазаланды",
        toastImportOk: "Импортталды ✅", toastImportErr: "JSON импорт қатесі",
        toastNeedName: "Атыңызды енгізіңіз", toastInvalidPhone: "Телефонды дұрыс енгізіңіз", toastNeedConsent: "Келісімді белгілеңіз",
        confirmReset: "Барлық өзгерісті өшіріп, бастапқы мәндерге қайтару керек пе?",
        pinNoSet: "PIN орнатылмаған. PIN (4–8 сан) енгізіп, “Кіру / Орнату” басыңыз.",
        pinEnter: "Әкімші PIN енгізіңіз.",
        pinBad: "PIN қате.",
        pinSetOk: "PIN орнатылды ✅",
        pinChangedOk: "PIN ауысты ✅",
        adminTitle: "Әкімші панелі",
        adminSub: "Деректер осы браузерде сақталады (localStorage)",
        tabContacts: "Байланыс", tabSchedule: "Кесте", tabContent: "Галерея/контент",
        saveBtn: "Сақтау", resetBtn: "Тазалау", changePinBtn: "PIN ауыстыру",
        exportBtn: "JSON экспорт", importBtn: "JSON импорт",
        lbHint: "←/→ ауыстыру • Esc жабу"
      }
    };

    function getLang(){
      const l = (localStorage.getItem(LANG_KEY) || "ru").toLowerCase();
      return (l === "kz" || l === "kk") ? "kz" : "ru";
    }
    function setLang(lang){
      const l = (lang === "kz") ? "kz" : "ru";
      localStorage.setItem(LANG_KEY, l);
      document.documentElement.lang = (l === "kz") ? "kk" : "ru";
      document.documentElement.dataset.lang = l;
    }
    setLang(getLang());

    // ===== utils =====
    const $ = (id) => document.getElementById(id);
    const digitsOnly = (s) => (s || "").replace(/\D/g, "");
    const setText = (id, text) => { const el = $(id); if(el) el.textContent = text ?? ""; };
    const setHref = (id, href) => { const el = $(id); if(el) el.href = href; };
    const show = (id, on) => { const el = $(id); if(el) el.classList.toggle("hidden", !on); };

    function getActiveLang(){ return (document.documentElement.dataset.lang === "kz") ? "kz" : "ru"; }
    function t(key){
      const lang = getActiveLang();
      return (I18N[lang] && I18N[lang][key]) || (I18N.ru[key]) || key;
    }

    // toast
    function toast(msg){
      const wrap = $("toast");
      const txt = $("toastMsg");
      if(!wrap || !txt) return;
      txt.textContent = msg;
      wrap.classList.add("show");
      clearTimeout(toast._t);
      toast._t = setTimeout(() => wrap.classList.remove("show"), 1600);
    }

    // placeholder tile
    function placeholderDataUrl(label){
      const safe = String(label || "Фото скоро").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      const hint = (getActiveLang()==="kz") ? "Админкада URL қойыңыз" : "Замените фото в админке (URL)";
      const svg =
`<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#22c55e" stop-opacity="0.35"/>
      <stop offset="0.5" stop-color="#facc15" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#ef4444" stop-opacity="0.25"/>
    </linearGradient>
  </defs>
  <rect width="1400" height="900" fill="#0b1220"/>
  <rect x="0" y="0" width="1400" height="900" fill="url(#g)"/>
  <circle cx="280" cy="220" r="140" fill="#ffffff" fill-opacity="0.06"/>
  <circle cx="1150" cy="760" r="220" fill="#ffffff" fill-opacity="0.05"/>
  <text x="70" y="820" font-size="56" font-family="Montserrat, system-ui, sans-serif" fill="#ffffff" fill-opacity="0.85" font-weight="800">${safe}</text>
  <text x="70" y="870" font-size="24" font-family="Montserrat, system-ui, sans-serif" fill="#ffffff" fill-opacity="0.55" font-weight="600">${hint}</text>
</svg>`;
      return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    // links from CONFIG
    function linksFromConfig(){
      const waDigits = digitsOnly(CONFIG?.contacts?.whatsapp);
      const phoneTel = (CONFIG?.contacts?.phoneTel || "").trim();
      const telVal = phoneTel.startsWith("tel:") ? phoneTel : `tel:${phoneTel}`;
      const igLogin = (CONFIG?.socials?.instagram || "").replace(/^@/,"");
      const query = CONFIG?.mapQuery || "";
      return {
        wa: (text = "") => `https://wa.me/${waDigits}${text ? `?text=${encodeURIComponent(text)}` : ""}`,
        call: telVal,
        ig: `https://instagram.com/${igLogin}`,
        map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
        mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`,
        canonical: CONFIG?.links?.canonical || "https://tazsha-bala.example/"
      };
    }

    function cityByLang(lang){
      return (lang === "kz") ? (CONFIG.address.cityKz || CONFIG.address.cityRu) : (CONFIG.address.cityRu || CONFIG.address.cityKz);
    }
    function addressByLang(lang){
      return (lang === "kz") ? (CONFIG.address.fullKz || CONFIG.address.fullRu) : (CONFIG.address.fullRu || CONFIG.address.fullKz);
    }
    function sloganByLang(lang){
      return (lang === "kz") ? (CONFIG.brand.sloganKz || CONFIG.brand.sloganRu) : (CONFIG.brand.sloganRu || CONFIG.brand.sloganKz);
    }
    function hoursNoteByLang(lang){
      return (lang === "kz") ? (CONFIG.legalNotes.hoursNoteKz || CONFIG.legalNotes.hoursNoteRu) : (CONFIG.legalNotes.hoursNoteRu || CONFIG.legalNotes.hoursNoteKz);
    }
    function privacyByLang(lang){
      return (lang === "kz") ? (CONFIG.legalNotes.privacyKz || CONFIG.legalNotes.privacyRu) : (CONFIG.legalNotes.privacyRu || CONFIG.legalNotes.privacyKz);
    }
    function adminNoticeByLang(lang){
      return (lang === "kz") ? (CONFIG.legalNotes.adminNoticeKz || CONFIG.legalNotes.adminNoticeRu) : (CONFIG.legalNotes.adminNoticeRu || CONFIG.legalNotes.adminNoticeKz);
    }
    function hoursString(){ return `${CONFIG.scheduleOpen} – ${CONFIG.scheduleClose}`; }

    // SEO canonical/og:url
    function applyCanonical(){
      const links = linksFromConfig();
      const canonical = document.querySelector('link[rel="canonical"]');
      canonical && (canonical.href = links.canonical);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      ogUrl && ogUrl.setAttribute("content", links.canonical);
    }

    // JSON-LD from CONFIG
    function updateSchemaOrg(){
      const s = $("schemaOrg");
      if(!s) return;
      const links = linksFromConfig();
      const name = CONFIG.brand.nameRu || "Тазша Бала";
      const street = CONFIG.address.streetAddressRu || (CONFIG.address.fullRu || "");
      const city = CONFIG.address.cityRu || "Кокшетау";
      const tel = CONFIG.contacts.phoneTel || "+77479020848";
      const img = document.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
      const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness","AmusementPark"],
        "name": name,
        "image": img,
        "url": links.canonical,
        "telephone": tel,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": street,
          "addressLocality": city,
          "addressCountry": "KZ"
        },
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": CONFIG.scheduleOpen,
          "closes": CONFIG.scheduleClose
        }],
        "sameAs": [
          `https://www.instagram.com/${(CONFIG.socials.instagram || "").replace(/^@/,"")}/`,
          links.map
        ],
        "hasMap": links.map
      };
      s.textContent = JSON.stringify(schema, null, 2);
      setText("schemaBrand", name);
    }

    // open/close time calc in TZ
    function parseHHMM(str){
      const m = String(str || "").trim().match(/^(\d{1,2}):(\d{2})$/);
      if(!m) return null;
      const hh = Math.max(0, Math.min(23, Number(m[1])));
      const mm = Math.max(0, Math.min(59, Number(m[2])));
      return hh*60 + mm;
    }
    function nowMinutesInTZ(tz){
      try{
        const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false });
        const parts = fmt.formatToParts(new Date());
        const hh = Number(parts.find(p => p.type === "hour")?.value ?? "0");
        const mm = Number(parts.find(p => p.type === "minute")?.value ?? "0");
        return hh*60 + mm;
      } catch {
        const n = new Date();
        return n.getHours()*60 + n.getMinutes();
      }
    }
    function isOpenNow(){
      const start = parseHHMM(CONFIG.scheduleOpen);
      const end = parseHHMM(CONFIG.scheduleClose);
      if(start == null || end == null) return null;
      const cur = nowMinutesInTZ(CONFIG.timezone || "Asia/Almaty");
      if(end === start) return true; // 24/7
      const overnight = end < start;
      return overnight ? (cur >= start || cur <= end) : (cur >= start && cur <= end);
    }
    function updateOpenState(){
      const badge = $("openBadge");
      const navState = $("navOpenState");
      const open = isOpenNow();

      if(open == null){
        badge && (badge.textContent = t("openNowUnknown"));
        navState && (navState.textContent = t("hoursNote"));
        return;
      }

      if(badge){
        badge.textContent = open ? t("openNowOpen") : t("openNowClosed");
        badge.classList.remove("text-white","text-green-400","text-red-400");
        badge.classList.add(open ? "text-green-400" : "text-red-400");
      }
      if(navState){
        navState.textContent = open ? t("chipOpenStateOpen") : t("chipOpenStateClosed");
        navState.classList.remove("text-white/70","text-green-400","text-red-400","font-black");
        navState.classList.add(open ? "text-green-400" : "text-red-400", "font-black");
      }
    }

    // benefits render
    function renderBenefits(){
      const wrap = $("benefitsRow");
      if(!wrap) return;
      const lang = getActiveLang();
      const items = (lang === "kz") ? (CONFIG.content.benefitsKz || []) : (CONFIG.content.benefitsRu || []);
      const icons = ["🎪","🛡️","🍕","🎉","✨"];
      wrap.innerHTML = items.slice(0,5).map((txt, i) => (
        `<span class="inline-flex items-center gap-2"><span class="text-xl" aria-hidden="true">${icons[i] || "✨"}</span> ${txt}</span>`
      )).join("");
    }

    // toggles
    function applyToggles(){
      const showRules = !!(CONFIG.toggles?.showRules);
      const showFaq = !!(CONFIG.toggles?.showFaq);
      const rules = document.getElementById("rules");
      const faq = document.getElementById("faq");
      if(rules) rules.classList.toggle("hidden", !showRules);
      if(faq) faq.classList.toggle("hidden", !showFaq);

      // mobile menu items
      document.querySelectorAll('[data-role="navRules"]').forEach(a => a.classList.toggle("hidden", !showRules));
      document.querySelectorAll('[data-role="navFaq"]').forEach(a => a.classList.toggle("hidden", !showFaq));
    }

    // fill UI
    function fillTextAndLinks(){
      const lang = getActiveLang();
      const city = cityByLang(lang);
      const addr = addressByLang(lang);
      const slogan = sloganByLang(lang);
      const hours = hoursString();
      const hoursNote = hoursNoteByLang(lang);
      const links = linksFromConfig();

      // logo fallback
      const logoImg = $("logoImg");
      const logoFallback = $("logoFallback");
      if(logoImg){
        logoImg.addEventListener("error", () => {
          logoImg.classList.add("hidden");
          logoFallback && logoFallback.classList.remove("hidden");
        }, { once: true });
      }

      // main texts
      setText("navCity", city);
      setText("heroCity", city);
      setText("heroAddr", addr);
      setText("heroHours", hours);
      setText("heroHoursNote", hoursNote);

      setText("heroArea", ` ${CONFIG.area[lang] || CONFIG.area.ru} `);
      setText("statArea", "4500 м²");
      setText("statHours", `${CONFIG.scheduleOpen}–${CONFIG.scheduleClose}`);
      setText("heroSlogan", slogan);

      setText("rulesAddr", addr);
      setText("rulesPhone", CONFIG.contacts.phoneDisplay);

      setText("faqHours", hours);
      setText("faqHoursNote", hoursNote);
      setText("faqAddr", addr);

      setText("footSlogan", slogan);
      setText("footAreaLine", `• ${CONFIG.area[lang] || CONFIG.area.ru}`);
      setText("footAddr", addr);
      setText("footHours", hours);
      setText("footHoursNote", hoursNote);
      setText("footPhone", CONFIG.contacts.phoneDisplay);
      setText("year", new Date().getFullYear());

      setText("privacyNote", privacyByLang(lang));
      setText("adminNotice", adminNoticeByLang(lang));

      setText("ctaBarTitle", CONFIG.brand.nameRu || "Тазша Бала");
      setText("ctaBarSub", t("hoursNote"));

      // dynamic content
      setText("bdayIntro", (lang === "kz") ? (CONFIG.content.bdayIntroKz || "") : (CONFIG.content.bdayIntroRu || ""));
      setText("partnersText", (lang === "kz") ? (CONFIG.content.partnerTextKz || t("partnersSub")) : (CONFIG.content.partnerTextRu || t("partnersSub")));
      setText("partnersSlogan", slogan);

      // links
      const waHello = links.wa(`Здравствуйте! Пишу по парку "${CONFIG.brand.nameRu}". Хочу уточнить информацию.`);
      const waRules = links.wa(`Здравствуйте! Хочу уточнить правила посещения "${CONFIG.brand.nameRu}".`);
      const waBirthday = links.wa(`Здравствуйте! Хочу обсудить День рождения в "${CONFIG.brand.nameRu}". Дата/время: ____. Кол-во детей: ____.`);
      const waPartners = links.wa(`Здравствуйте! Хочу обсудить сотрудничество/мероприятие с "${CONFIG.brand.nameRu}". Формат: ____. Дата: ____.`);

      setHref("navWA", waHello);
      setHref("heroWA", waHello);
      setHref("mWA", waHello);
      setHref("footWA", waHello);
      setHref("contactsWA", waHello);
      setHref("floatWA", waHello);
      setHref("ctaBarWA", waHello);

      setHref("rulesWA", waRules);
      setHref("birthdayWA", waBirthday);
      setHref("partnersWA", waPartners);

      setHref("heroCall", links.call);
      setHref("mCall", links.call);
      setHref("footCall", links.call);
      setHref("footPhone", links.call);

      setHref("heroMap", links.map);
      setHref("contactsMap", links.map);
      setHref("footMap", links.map);

      setHref("footIG", links.ig);

      const mapFrame = $("mapFrame");
      if(mapFrame) mapFrame.src = links.mapEmbed;

      // reviews links
      const q = encodeURIComponent(`${CONFIG.brand.nameRu} ${CONFIG.address.cityRu}`);
      const twoGis = CONFIG.links.reviews2gis || `https://2gis.kz/search/${q}`;
      const yandex = CONFIG.links.reviewsYandex || `https://yandex.kz/maps/?text=${q}`;
      setHref("reviews2gis", twoGis);
      setHref("reviewsYandex", yandex);

      renderBenefits();
      applyToggles();
      applyCanonical();
      updateSchemaOrg();
      updateOpenState();
      renderGallery();
    }

    // i18n apply
    function applyI18n(){
      const lang = getActiveLang();
      const dict = I18N[lang] || I18N.ru;
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const k = el.getAttribute("data-i18n");
        if(k && dict[k] != null) el.textContent = dict[k];
      });
      // placeholders minimal
      const fName = $("fName");
      if(fName) fName.placeholder = (lang==="kz") ? "Атыңыз" : "Ваше имя";
      const fMsg = $("fMsg");
      if(fMsg) fMsg.placeholder = (lang==="kz") ? "Күні, жасы, балалар саны..." : "Дата, возраст, количество детей...";
      fillTextAndLinks();
    }

    function setLangUI(l){
      const isRu = (l === "ru");
      const ruBtns = [$("langRu"), $("mLangRu")].filter(Boolean);
      const kzBtns = [$("langKz"), $("mLangKz")].filter(Boolean);
      ruBtns.forEach(b => b.classList.toggle("btn-primary", isRu));
      ruBtns.forEach(b => b.classList.toggle("btn-secondary", !isRu));
      kzBtns.forEach(b => b.classList.toggle("btn-primary", !isRu));
      kzBtns.forEach(b => b.classList.toggle("btn-secondary", isRu));
    }

    function initLangToggle(){
      const set = (lang) => {
        setLang(lang);
        setLangUI(getActiveLang());
        applyI18n();
        toast(lang === "kz" ? t("toastLangKz") : t("toastLangRu"));
      };
      $("langRu")?.addEventListener("click", () => set("ru"));
      $("langKz")?.addEventListener("click", () => set("kz"));
      $("mLangRu")?.addEventListener("click", () => set("ru"));
      $("mLangKz")?.addEventListener("click", () => set("kz"));
      setLangUI(getActiveLang());
    }

    // reveal
    function initReveal(){
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); }
          });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add("show"));
      }
    }

    // navbar compact
    function initNavbarCompact(){
      const navbar = $("navbar");
      const onScroll = () => {
        const y = window.scrollY || 0;
        navbar && navbar.classList.toggle("nav-compact", y > 12);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // to top
    function initToTop(){
      const btn = $("toTop");
      const onScroll = () => {
        const y = window.scrollY || 0;
        btn && btn.classList.toggle("show", y > 650);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      btn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      onScroll();
    }

    // mobile menu
    function initMobileMenu(){
      const menuBtn = $("menuBtn");
      const panel = $("mobileMenuPanel");
      const lockScroll = (locked) => document.body.classList.toggle("overflow-hidden", !!locked);

      const closeMenu = () => {
        if(!panel || !menuBtn) return;
        panel.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        lockScroll(false);
      };
      const toggleMenu = () => {
        if(!panel || !menuBtn) return;
        const isOpen = panel.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        lockScroll(isOpen);
      };

      menuBtn?.addEventListener("click", toggleMenu);
      document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeMenu(); });
      document.querySelectorAll('#mobileMenuPanel a').forEach(link => link.addEventListener('click', closeMenu));
      document.addEventListener("click", (e) => {
        if(!panel || !menuBtn || !panel.classList.contains("open")) return;
        const t = e.target;
        const clickedInside = panel.contains(t) || menuBtn.contains(t);
        if(!clickedInside) closeMenu();
      }, { passive: true });

      window.addEventListener("resize", () => {
        if(window.matchMedia("(min-width: 768px)").matches) closeMenu();
      }, { passive: true });
    }

    // phone formatting (+7 KZ)
    function formatPhoneKZ(raw){
      let d = digitsOnly(raw);
      if(!d) return "";
      if(d[0] === "8") d = "7" + d.slice(1);
      if(d[0] !== "7") d = "7" + d;
      d = d.slice(0, 11);

      const p1 = d.slice(1, 4);
      const p2 = d.slice(4, 7);
      const p3 = d.slice(7, 9);
      const p4 = d.slice(9, 11);

      let out = "+7";
      if(p1) out += ` (${p1}`;
      if(p1 && p1.length === 3) out += ")";
      if(p2) out += ` ${p2}`;
      if(p3) out += `-${p3}`;
      if(p4) out += `-${p4}`;
      return out;
    }

    // form submit -> WA
    function initForm(){
      const phoneInput = $("fPhone");
      if(phoneInput){
        phoneInput.addEventListener("input", () => {
          const f = formatPhoneKZ(phoneInput.value);
          phoneInput.value = f || phoneInput.value;
        });
        phoneInput.addEventListener("blur", () => {
          phoneInput.value = formatPhoneKZ(phoneInput.value) || phoneInput.value;
        });
      }

      const form = $("leadForm");
      const feedback = $("formFeedback");
      const submitBtn = $("formSubmit");
      const consent = $("fConsent");

      function showError(msg, focusEl){
        if(feedback){
          feedback.textContent = msg;
          feedback.classList.remove("hidden");
        }
        toast(msg);
        focusEl?.focus?.();
      }

      form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = ($("fName")?.value || "").trim();
        const phone = ($("fPhone")?.value || "").trim();
        const topic = $("fTopic")?.value || "";
        const msg = ($("fMsg")?.value || "").trim();

        const phoneDigits = digitsOnly(phone);

        if(!name){ showError(t("toastNeedName"), $("fName")); return; }
        if(phoneDigits.length < 10){ showError(t("toastInvalidPhone"), $("fPhone")); return; }
        if(!consent?.checked){ showError(t("toastNeedConsent"), consent); return; }

        const links = linksFromConfig();
        const text =
`👋 Здравствуйте!
Имя: ${name}
Телефон: ${phone}
Тема: ${topic}${msg ? `\nКомментарий: ${msg}` : ""}

Парк: ${CONFIG.brand.nameRu}, ${CONFIG.address.cityRu}
Адрес: ${CONFIG.address.fullRu}`;

        submitBtn && (submitBtn.disabled = true);
        window.open(links.wa(text), "_blank", "noopener,noreferrer");
        toast(t("toastWA"));
        feedback?.classList.add("hidden");
        form.reset();
        setTimeout(() => submitBtn && (submitBtn.disabled = false), 700);
      });
    }

    // price WA buttons
    function initPriceWA(){
      document.querySelectorAll(".priceWA").forEach(btn => {
        btn.addEventListener("click", () => {
          const tariff = btn.getAttribute("data-tariff") || "Тариф";
          const links = linksFromConfig();
          const msg =
`Здравствуйте! Хочу уточнить тариф "${tariff}".
Парк: ${CONFIG.brand.nameRu}
Дата/время: ____`;

          window.open(links.wa(msg), "_blank", "noopener,noreferrer");
          toast(`WhatsApp: ${tariff}`);
        });
      });
    }

    // ===== Gallery + Lightbox =====
    let LB_ITEMS = [];
    let LB_INDEX = 0;

    function getGalleryItems(){
      const urls = Array.isArray(CONFIG.gallery.urls) ? CONFIG.gallery.urls : [];
      const valid = urls.map(String).filter(u => /^https?:\/\//i.test(u));
      const baseTitle = (getActiveLang()==="kz") ? "Галерея" : "Галерея";
      if(valid.length){
        return valid.slice(0, 9).map((src, i) => ({
          title: `${baseTitle} #${i+1}`,
          desc: t("gallerySub"),
          src
        }));
      }
      const labels = (getActiveLang()==="kz")
        ? ["Парк фотосы","Ойын аймағы","Мерекелер","Аттракциондар","Отбасылық демалыс","Фуд-корт","Қауіпсіздік","Балалар зонасы","Көңіл-күй"]
        : ["Фото парка","Зона игр","Праздники","Аттракционы","Семейный отдых","Фуд-корт","Безопасность","Детская зона","Эмоции"];
      return labels.map((label) => ({
        title: label,
        desc: t("gallerySub"),
        src: placeholderDataUrl(label)
      }));
    }

    function renderGallery(){
      const grid = $("galleryGrid");
      if(!grid) return;
      const items = getGalleryItems();
      grid.innerHTML = items.map((it, i) => `
        <button type="button" class="reveal glass glow-border p-2 text-left group"
          data-gidx="${i}" aria-label="${it.title}">
          <div class="rounded-2xl overflow-hidden h-52 relative">
            <img src="${it.src}" alt="${it.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async">
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"></div>
            <div class="absolute bottom-4 left-4 font-black text-lg text-white">${it.title}</div>
          </div>
          <div class="p-4 text-sm text-white/70">${it.desc}</div>
        </button>
      `).join("");
      // make reveal observer recheck (in case it renders after init)
      document.querySelectorAll("#galleryGrid .reveal").forEach(el => el.classList.add("show"));
      grid.querySelectorAll("[data-gidx]").forEach(btn => {
        btn.addEventListener("click", () => openLightbox(items, Number(btn.getAttribute("data-gidx") || "0")));
      });
    }

    function openLightbox(items, idx){
      const dlg = $("lightbox");
      if(!dlg) return;
      LB_ITEMS = items || [];
      LB_INDEX = Math.max(0, Math.min(LB_ITEMS.length-1, idx || 0));
      renderLightbox();
      try{ dlg.showModal(); } catch { dlg.setAttribute("open",""); }
    }

    function closeLightbox(){
      const dlg = $("lightbox");
      if(!dlg) return;
      try{ dlg.close(); } catch { dlg.removeAttribute("open"); }
    }

    function renderLightbox(){
      const it = LB_ITEMS[LB_INDEX];
      if(!it) return;
      const img = $("lbImg");
      const title = $("lbTitle");
      const desc = $("lbDesc");
      if(img){ img.src = it.src; img.alt = it.title || ""; }
      title && (title.textContent = it.title || "");
      desc && (desc.textContent = it.desc || "");
    }

    function initLightbox(){
      $("lbClose")?.addEventListener("click", closeLightbox);
      $("lbPrev")?.addEventListener("click", () => { LB_INDEX = (LB_INDEX - 1 + LB_ITEMS.length) % LB_ITEMS.length; renderLightbox(); });
      $("lbNext")?.addEventListener("click", () => { LB_INDEX = (LB_INDEX + 1) % LB_ITEMS.length; renderLightbox(); });
      $("lbWA")?.addEventListener("click", () => {
        const links = linksFromConfig();
        const it = LB_ITEMS[LB_INDEX];
        const msg = `Здравствуйте! Хочу уточнить по фото/зоне: ${it?.title || ""}.`;
        window.open(links.wa(msg), "_blank", "noopener,noreferrer");
        toast(t("toastWA"));
      });
      document.addEventListener("keydown", (e) => {
        const dlg = $("lightbox");
        const open = dlg?.open || dlg?.hasAttribute?.("open");
        if(!open) return;
        if(e.key === "Escape") closeLightbox();
        if(e.key === "ArrowLeft") { LB_INDEX = (LB_INDEX - 1 + LB_ITEMS.length) % LB_ITEMS.length; renderLightbox(); }
        if(e.key === "ArrowRight") { LB_INDEX = (LB_INDEX + 1) % LB_ITEMS.length; renderLightbox(); }
      });
    }

    function initZonesLightbox(){
      const itemsFromZones = () => Array.from(document.querySelectorAll(".zoneCard")).map(card => ({
        title: card.getAttribute("data-zone") || "Зона",
        desc: card.getAttribute("data-desc") || "",
        src: card.getAttribute("data-img") || ""
      })).filter(x => x.src);

      document.querySelectorAll(".zoneCard").forEach((card, idx) => {
        const open = () => openLightbox(itemsFromZones(), idx);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
          if(e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
        });
      });
    }

    // ===== Admin (PIN + overrides) =====
    function pinStored(){ return !!localStorage.getItem(PIN_HASH_KEY); }

    async function sha256Base64(str){
      const enc = new TextEncoder().encode(str);
      const hash = await crypto.subtle.digest("SHA-256", enc);
      const bytes = new Uint8Array(hash);
      let bin = "";
      bytes.forEach(b => bin += String.fromCharCode(b));
      return btoa(bin);
    }

    async function verifyPin(pin){
      const stored = localStorage.getItem(PIN_HASH_KEY) || "";
      if(!stored) return false;
      if(!crypto?.subtle) return false;
      const h = await sha256Base64(pin);
      return h === stored;
    }

    async function setPin(pin){
      if(!crypto?.subtle) {
        // fallback (нежелательно) — но чтобы не ломалось вообще
        localStorage.setItem(PIN_HASH_KEY, "PLAINTEXT:" + pin);
        return true;
      }
      const h = await sha256Base64(pin);
      localStorage.setItem(PIN_HASH_KEY, h);
      return true;
    }

    function readPinFallback(pin){
      const stored = localStorage.getItem(PIN_HASH_KEY) || "";
      if(stored.startsWith("PLAINTEXT:")) return stored.slice("PLAINTEXT:".length) === pin;
      return null;
    }

    function openAdmin(){
      const bd = $("adminBackdrop");
      if(!bd) return;
      bd.classList.add("open");
      bd.setAttribute("aria-hidden","false");
      updateAdminHint();
      $("pinInput")?.focus();
    }
    function closeAdmin(){
      const bd = $("adminBackdrop");
      if(!bd) return;
      bd.classList.remove("open");
      bd.setAttribute("aria-hidden","true");
      $("pinError")?.classList.add("hidden");
    }

    function updateAdminHint(){
      const hint = $("pinHint");
      if(!hint) return;
      hint.textContent = pinStored() ? t("pinEnter") : t("pinNoSet");
    }

    function showAdminPanel(on){
      show("adminAuth", !on);
      show("adminPanel", on);
      $("pinError")?.classList.add("hidden");
      if(on) fillAdminFieldsFromConfig();
    }

    function fillAdminFieldsFromConfig(){
      // contacts
      $("admCityRu").value = CONFIG.address.cityRu || "";
      $("admCityKz").value = CONFIG.address.cityKz || "";
      $("admAddrRu").value = CONFIG.address.fullRu || "";
      $("admAddrKz").value = CONFIG.address.fullKz || "";
      $("admInstagram").value = CONFIG.socials.instagram || "";
      $("admWhatsapp").value = CONFIG.contacts.whatsapp || "";
      $("admPhoneDisplay").value = CONFIG.contacts.phoneDisplay || "";
      $("admPhoneTel").value = CONFIG.contacts.phoneTel || "";
      $("admMapQuery").value = CONFIG.mapQuery || "";
      $("admCanonical").value = CONFIG.links.canonical || "";

      // schedule
      $("admOpen").value = CONFIG.scheduleOpen || "";
      $("admClose").value = CONFIG.scheduleClose || "";
      $("admTimezone").value = CONFIG.timezone || "";

      // content
      $("admGalleryUrls").value = (CONFIG.gallery.urls || []).join("\n");
      $("admBenefitsRu").value = (CONFIG.content.benefitsRu || []).join("\n");
      $("admBenefitsKz").value = (CONFIG.content.benefitsKz || []).join("\n");
      $("admShowRules").checked = !!CONFIG.toggles.showRules;
      $("admShowFaq").checked = !!CONFIG.toggles.showFaq;
    }

    function normalizeUrls(text){
      return String(text || "")
        .split("\n")
        .map(s => s.trim())
        .filter(Boolean)
        .filter(u => /^https?:\/\//i.test(u));
    }
    function normalizeLines(text){
      return String(text || "")
        .split("\n")
        .map(s => s.trim())
        .filter(Boolean)
        .slice(0, 10);
    }

    function collectOverridesFromAdmin(){
      const next = {
        address: {
          cityRu: $("admCityRu").value.trim(),
          cityKz: $("admCityKz").value.trim(),
          fullRu: $("admAddrRu").value.trim(),
          fullKz: $("admAddrKz").value.trim()
        },
        socials: { instagram: $("admInstagram").value.trim().replace(/^@/,"") },
        contacts: {
          whatsapp: digitsOnly($("admWhatsapp").value),
          phoneDisplay: $("admPhoneDisplay").value.trim(),
          phoneTel: $("admPhoneTel").value.trim()
        },
        mapQuery: $("admMapQuery").value.trim(),
        links: { canonical: $("admCanonical").value.trim() || DEFAULT_CONFIG.links.canonical },
        scheduleOpen: $("admOpen").value.trim(),
        scheduleClose: $("admClose").value.trim(),
        timezone: $("admTimezone").value.trim() || DEFAULT_CONFIG.timezone,
        gallery: { urls: normalizeUrls($("admGalleryUrls").value) },
        content: {
          benefitsRu: normalizeLines($("admBenefitsRu").value),
          benefitsKz: normalizeLines($("admBenefitsKz").value)
        },
        toggles: {
          showRules: !!$("admShowRules").checked,
          showFaq: !!$("admShowFaq").checked
        }
      };
      return next;
    }

    function applyOverridesAndRerender(overrides){
      saveOverrides(overrides);
      CONFIG = deepMerge(DEFAULT_CONFIG, loadOverrides());
      applyI18n();
      updateOpenState();
      renderGallery();
      applyToggles();
    }

    function initAdmin(){
      $("adminOpen")?.addEventListener("click", openAdmin);
      $("adminFab")?.addEventListener("click", openAdmin);
      $("adminClose")?.addEventListener("click", closeAdmin);
      $("adminBackdrop")?.addEventListener("click", (e) => {
        if(e.target === $("adminBackdrop")) closeAdmin();
      });
      document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && $("adminBackdrop")?.classList.contains("open")) closeAdmin();
      });

      // tabs
      document.querySelectorAll(".adminTab").forEach(btn => {
        btn.addEventListener("click", () => {
          const tab = btn.getAttribute("data-tab");
          document.querySelectorAll(".adminTab").forEach(b => {
            b.classList.remove("btn-primary");
            b.classList.add("btn-secondary");
          });
          btn.classList.add("btn-primary");
          btn.classList.remove("btn-secondary");

          ["tabContacts","tabSchedule","tabContent"].forEach(id => {
            $(id).classList.toggle("hidden", id !== tab);
          });
        });
      });

      // auth
      $("pinBtn")?.addEventListener("click", async () => {
        const pin = digitsOnly($("pinInput").value);
        const err = $("pinError");
        err?.classList.add("hidden");
        if(pin.length < 4 || pin.length > 8){ err?.classList.remove("hidden"); return; }

        const fallback = readPinFallback(pin);
        if(fallback === true){
          showAdminPanel(true);
          return;
        }

        if(!pinStored()){
          await setPin(pin);
          toast(t("pinSetOk"));
          showAdminPanel(true);
          return;
        }

        const ok = await verifyPin(pin);
        if(ok){
          showAdminPanel(true);
        } else {
          err?.classList.remove("hidden");
          toast(t("pinBad"));
        }
      });

      // save
      $("adminSave")?.addEventListener("click", () => {
        const overrides = collectOverridesFromAdmin();
        applyOverridesAndRerender(deepMerge(loadOverrides(), overrides));
        $("adminSaved")?.classList.remove("hidden");
        setTimeout(() => $("adminSaved")?.classList.add("hidden"), 1300);
        toast(t("toastSaved"));
      });

      // reset
      $("adminReset")?.addEventListener("click", () => {
        if(!confirm(t("confirmReset"))) return;
        clearOverrides();
        CONFIG = deepMerge(DEFAULT_CONFIG, loadOverrides());
        fillAdminFieldsFromConfig();
        applyI18n();
        renderGallery();
        applyToggles();
        toast(t("toastReset"));
      });

      // change pin
      $("adminChangePin")?.addEventListener("click", () => {
        localStorage.removeItem(PIN_HASH_KEY);
        $("pinInput").value = "";
        showAdminPanel(false);
        updateAdminHint();
        toast(t("pinChangedOk"));
      });

      // export overrides json
      $("adminExport")?.addEventListener("click", () => {
        const data = loadOverrides();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "tazsha-bala-overrides.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 500);
      });

      // import overrides json
      $("adminImport")?.addEventListener("click", () => $("adminImportFile")?.click());
      $("adminImportFile")?.addEventListener("change", async (e) => {
        const file = e.target.files?.[0];
        if(!file) return;
        try{
          const text = await file.text();
          const json = JSON.parse(text);
          if(typeof json !== "object" || !json) throw new Error("bad json");
          saveOverrides(json);
          CONFIG = deepMerge(DEFAULT_CONFIG, loadOverrides());
          fillAdminFieldsFromConfig();
          applyI18n();
          renderGallery();
          applyToggles();
          toast(t("toastImportOk"));
        } catch {
          toast(t("toastImportErr"));
        } finally {
          e.target.value = "";
        }
      });
    }

    // zones -> lightbox
    function initZones(){
      initZonesLightbox();
    }

    // update open state timer
    function initOpenTimer(){
      updateOpenState();
      setInterval(updateOpenState, 30_000);
    }

    // init
    function boot(){
      initReveal();
      initNavbarCompact();
      initToTop();
      initMobileMenu();
      initLangToggle();
      initForm();
      initPriceWA();
      initLightbox();
      initZones();
      initAdmin();
      applyI18n();
      initOpenTimer();
    }

    // start
    document.addEventListener("DOMContentLoaded", boot);
