// =============================================================
// i18n — UI string translations
// =============================================================
const TRANSLATIONS = {
    en: {
        intro: 'Welcome to my spreadsheet!',
        signup: 'Sign up to Boonbuy!',
        youtube: 'YouTube for more content!',
        search_placeholder: 'brand search',
        sort_low: 'Price: Low to High',
        sort_high: 'Price: High to Low',
        cat_all: 'All',
        cat_discount: '🔥 Discount Items',
        cat_bestsellers: '🌟 Best Sellers',
        cat_budget: 'Budget Finds',
        loading: 'Loading products...',
        error_load: 'Could not load products. Please check your connection and try again.',
        retry: 'Retry',
        no_results: 'No products found.',
        inapp_title: 'Open in Browser',
        inapp_body: 'For the best experience, tap the <strong>three dots</strong> menu (<strong>&#8942;</strong>) at the top right and select <strong>"Open in browser"</strong>.',
        inapp_ok: 'OK',
        telegram: 'Telegram for more finds!',
        buy: 'Buy on Boonbuy',
        qc: 'View QC Photos',
    },
    fr: {
        intro: 'Bienvenue sur ma feuille !',
        signup: 'Inscrivez-vous sur Boonbuy !',
        youtube: 'YouTube pour plus de contenu !',
        search_placeholder: 'rechercher une marque',
        sort_low: 'Prix : croissant',
        sort_high: 'Prix : décroissant',
        cat_all: 'Tout',
        cat_discount: '🔥 Promotions',
        cat_bestsellers: '🌟 Meilleures Ventes',
        cat_budget: 'Petits Prix',
        loading: 'Chargement des produits...',
        error_load: 'Impossible de charger les produits. Vérifiez votre connexion et réessayez.',
        retry: 'Réessayer',
        no_results: 'Aucun produit trouvé.',
        inapp_title: 'Ouvrir dans le navigateur',
        inapp_body: 'Pour une meilleure expérience, appuyez sur le menu <strong>trois points</strong> (<strong>&#8942;</strong>) en haut à droite et sélectionnez <strong>« Ouvrir dans le navigateur »</strong>.',
        inapp_ok: 'OK',
        telegram: 'Telegram pour plus de trouvailles !',
        buy: 'Acheter sur Boonbuy',
        qc: 'Voir les photos QC',
    },
    de: {
        intro: 'Willkommen in meiner Tabelle!',
        signup: 'Bei Boonbuy anmelden!',
        youtube: 'YouTube für mehr Inhalte!',
        search_placeholder: 'Marke suchen',
        sort_low: 'Preis: aufsteigend',
        sort_high: 'Preis: absteigend',
        cat_all: 'Alle',
        cat_discount: '🔥 Rabatte',
        cat_bestsellers: '🌟 Bestseller',
        cat_budget: 'Schnäppchen',
        loading: 'Produkte werden geladen...',
        error_load: 'Produkte konnten nicht geladen werden. Bitte überprüfe deine Verbindung und versuche es erneut.',
        retry: 'Erneut versuchen',
        no_results: 'Keine Produkte gefunden.',
        inapp_title: 'Im Browser öffnen',
        inapp_body: 'Für ein besseres Erlebnis tippe auf das <strong>Drei-Punkte</strong>-Menü (<strong>&#8942;</strong>) oben rechts und wähle <strong>„Im Browser öffnen"</strong>.',
        inapp_ok: 'OK',
        telegram: 'Telegram für mehr Funde!',
        buy: 'Bei Boonbuy kaufen',
        qc: 'QC-Fotos ansehen',
    },
    es: {
        intro: '¡Bienvenido a mi hoja!',
        signup: '¡Regístrate en Boonbuy!',
        youtube: '¡YouTube para más contenido!',
        search_placeholder: 'buscar marca',
        sort_low: 'Precio: menor a mayor',
        sort_high: 'Precio: mayor a menor',
        cat_all: 'Todo',
        cat_discount: '🔥 Descuentos',
        cat_bestsellers: '🌟 Más Vendidos',
        cat_budget: 'Ofertas',
        loading: 'Cargando productos...',
        error_load: 'No se pudieron cargar los productos. Verifica tu conexión e inténtalo de nuevo.',
        retry: 'Reintentar',
        no_results: 'No se encontraron productos.',
        inapp_title: 'Abrir en el navegador',
        inapp_body: 'Para una mejor experiencia, toca el menú de <strong>tres puntos</strong> (<strong>&#8942;</strong>) arriba a la derecha y selecciona <strong>«Abrir en el navegador»</strong>.',
        inapp_ok: 'OK',
        telegram: '¡Telegram para más hallazgos!',
        buy: 'Comprar en Boonbuy',
        qc: 'Ver fotos QC',
    },
    it: {
        intro: 'Benvenuto nel mio foglio!',
        signup: 'Iscriviti a Boonbuy!',
        youtube: 'YouTube per altri contenuti!',
        search_placeholder: 'cerca un marchio',
        sort_low: 'Prezzo: crescente',
        sort_high: 'Prezzo: decrescente',
        cat_all: 'Tutto',
        cat_discount: '🔥 Sconti',
        cat_bestsellers: '🌟 Più Venduti',
        cat_budget: 'Offerte',
        loading: 'Caricamento prodotti...',
        error_load: 'Impossibile caricare i prodotti. Controlla la connessione e riprova.',
        retry: 'Riprova',
        no_results: 'Nessun prodotto trovato.',
        inapp_title: 'Apri nel browser',
        inapp_body: 'Per una migliore esperienza, tocca il menu a <strong>tre puntini</strong> (<strong>&#8942;</strong>) in alto a destra e seleziona <strong>«Apri nel browser»</strong>.',
        inapp_ok: 'OK',
        telegram: 'Telegram per altre trovate!',
        buy: 'Acquista su Boonbuy',
        qc: 'Vedi foto QC',
    },
};

window.i18n = (function() {
    const SUPPORTED = ['en', 'fr', 'de', 'es', 'it'];
    let currentLang = 'en';
    const dynCache = {}; // { lang: { originalText: translatedText } }

    function detectLang() {
        try {
            const stored = localStorage.getItem('lang');
            if (stored && SUPPORTED.includes(stored)) return stored;
        } catch (e) {}
        const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
        return SUPPORTED.includes(browser) ? browser : 'en';
    }

    function loadDynCache(lang) {
        if (dynCache[lang]) return dynCache[lang];
        try {
            const raw = localStorage.getItem('i18n-dyn-' + lang);
            dynCache[lang] = raw ? JSON.parse(raw) : {};
        } catch (e) { dynCache[lang] = {}; }
        return dynCache[lang];
    }
    function saveDynCache(lang) {
        try { localStorage.setItem('i18n-dyn-' + lang, JSON.stringify(dynCache[lang] || {})); } catch (e) {}
    }

    function t(key) {
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        return dict[key] != null ? dict[key] : (TRANSLATIONS.en[key] || '');
    }

    // Sync lookup for dynamic strings — returns cached translation or original
    function dyn(text) {
        if (!text || currentLang === 'en') return text;
        const cache = loadDynCache(currentLang);
        return cache[text] || text;
    }

    // Translate one string via Google's free endpoint
    async function translateOne(text, lang) {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' +
            encodeURIComponent(lang) + '&dt=t&q=' + encodeURIComponent(text);
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('translate http ' + resp.status);
        const data = await resp.json();
        if (!Array.isArray(data) || !Array.isArray(data[0])) return text;
        return data[0].map(seg => seg && seg[0] ? seg[0] : '').join('');
    }

    // Translate a list of strings, filling cache. Returns when all done.
    async function translateMany(texts, lang, onProgress) {
        if (lang === 'en') return;
        const cache = loadDynCache(lang);
        const unique = [...new Set(texts.filter(Boolean))];
        const todo = unique.filter(t => !cache[t]);
        if (todo.length === 0) return;

        const CONCURRENCY = 6;
        let idx = 0;
        async function worker() {
            while (idx < todo.length) {
                const i = idx++;
                const text = todo[i];
                try {
                    const result = await translateOne(text, lang);
                    cache[text] = result || text;
                } catch (e) {
                    cache[text] = text; // fallback: keep original, don't retry
                }
                if (onProgress) onProgress();
            }
        }
        const workers = [];
        for (let i = 0; i < Math.min(CONCURRENCY, todo.length); i++) workers.push(worker());
        await Promise.all(workers);
        saveDynCache(lang);
    }

    function apply() {
        document.documentElement.lang = currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val) el.textContent = val;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const val = t(key);
            if (val) el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr') || '';
            const [attr, key] = spec.split(':');
            if (!attr || !key) return;
            const val = t(key);
            if (val) el.setAttribute(attr, val);
        });
        // Re-translate category pills (uses translatePill in app code)
        document.querySelectorAll('.category-pill').forEach(btn => {
            const value = btn.dataset.category;
            if (typeof translatePill === 'function') {
                btn.textContent = translatePill(value, value);
            }
        });
    }

    // Translate all dynamic strings (categories + product names) for the current
    // language, then re-render so cards/pills pick up the new translations.
    async function translateDynamic() {
        if (currentLang === 'en') return;
        let products;
        try { products = allProducts; } catch (e) { return; }
        if (!products || !products.length) return;
        const names = products.map(p => p.name);
        const cats = [...new Set(products.map(p => p.category))];
        await translateMany([...names, ...cats], currentLang);
        if (typeof buildCategoryTabs === 'function') buildCategoryTabs();
        if (typeof renderProducts === 'function') renderProducts(true);
    }

    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) lang = 'en';
        currentLang = lang;
        try { localStorage.setItem('lang', lang); } catch (e) {}
        apply();
        translateDynamic();
    }
    function init() {
        currentLang = detectLang();
        const sel = document.getElementById('lang-select');
        if (sel) {
            sel.value = currentLang;
            sel.addEventListener('change', e => setLang(e.target.value));
        }
        apply();
    }
    return {
        t, dyn, setLang, apply, init, translateDynamic,
        get current() { return currentLang; },
    };
})();

document.addEventListener('DOMContentLoaded', () => window.i18n.init());

// =============================================================
// CONFIG
//
// Single-sheet setup. Layout: A=picture, B=name, C=price, D=link.
// Every row's category is derived from name keywords via
// SPECIAL_PIN_KEYWORDS; items with no keyword match are only
// reachable from the "All" pill.
// Sheet must be set to "Anyone with the link can view".
// =============================================================
const SHEET_ID = '18Dg93lRzr00nPru_976WsKv_QaeLIapo7coFgfFAMQo';
const SHEET_GID = '2130334132';

const REFRESH_INTERVAL = 5 * 60 * 1000;

// =============================================================
// SEARCH ALIASES — short forms, brand expansions, category synonyms
//
// Each row in SYNONYM_GROUPS is a set of equivalent terms; typing any of them
// also tries matching the others. So `['lv', 'louis vuitton']` means searching
// "lv" finds "Louis Vuitton ..." products AND vice versa. Keep terms
// lowercased. Add freely.
//
// Caution on very short aliases (1-2 chars): matching uses \b word boundary,
// so "lv" won't match "involve" — but it WILL match anything starting with
// those letters. Avoid initials that commonly start unrelated words
// (`am` matches "American", `h` matches every H word, `ye` matches "yellow").
// When in doubt, only include the longer canonical form.
// =============================================================
const SYNONYM_GROUPS = [
    // ===== Luxury / designer houses =====
    ['lv', 'louis vuitton'],
    ['ysl', 'slp', 'saint laurent', 'yves saint laurent'],
    ['cdg', 'comme des garcons', 'comme des garçons', 'play cdg'],
    ['bv', 'bottega veneta', 'bottega'],
    ['d&g', 'dg', 'dolce gabbana', 'dolce and gabbana', 'dolce & gabbana'],
    ['mm', 'mmm', 'mm6', 'maison margiela', 'margiela'],
    ['rl', 'polo', 'ralph lauren', 'polo ralph lauren'],
    ['rrl', 'double rl'],
    ['gg', 'gucci'],
    ['cd', 'dior', 'christian dior'],
    ['ff', 'fendi'],
    ['cc', 'chanel'],
    ['hermes', 'hermès'],
    ['vltn', 'valentino'],
    ['mcm', 'mode creation munich'],
    ['bb', 'burberry', 'tb burberry'],
    ['celine', 'céline'],
    ['gvc', 'givenchy'],
    ['loewe'],
    ['balmain'],
    ['miu miu', 'miumiu'],
    ['prada'],
    ['versace', 'medusa'],
    ['moncler'],
    ['canada goose', 'cg'],
    ['arcteryx', "arc'teryx", 'arc teryx'],
    ['stone island'],
    ['patagonia', 'patagucci'],
    ['mschf'],
    ['amiri'],
    ['rhude'],
    ['represent'],
    ['purple', 'purple brand'],
    ['gallery', 'gallery dept', 'gallery department'],
    ['eric emanuel'],
    ['chrome hearts'],
    ['crtz', 'corteiz', 'cortiez'],
    ['sup', 'supreme'],
    ['palace'],
    ['stussy', 'stüssy'],
    ['kith'],
    ['fog', 'essentials', 'fear of god'],
    ['assc', 'anti social social club'],
    ['vlone'],
    ['trapstar'],
    ['sp5der', 'spider', 'sp5'],
    ['bape', 'a bathing ape', 'bathing ape'],
    ['aape'],
    ['bbc', 'billionaire boys club', 'ice cream'],
    ['bal', 'balenciaga'],
    ['gd', 'goyard'],
    ['mk', 'michael kors'],
    ['tb', 'thom browne', 'tory burch'],
    ['tnf', 'nf', 'north face', 'the north face'],
    ['cpfm', 'cactus plant flea market'],
    ['travis scott', 'cactus jack'],
    ['ovo', "october's very own", 'octobers very own', 'drake'],
    ['ow', 'off white', 'off-white', 'virgil'],

    // ===== Streetwear / Japanese / niche =====
    ['hm', 'human made'],
    ['nbhd', 'neighborhood'],
    ['wtaps'],
    ['sacai'],
    ['kapital'],
    ['needles'],
    ['undercover'],
    ['visvim'],
    ['junya', 'junya watanabe'],
    ['y3', 'y-3'],
    ['yohji', 'yohji yamamoto'],
    ['issey', 'issey miyake', 'pleats please'],
    ['rick owens', 'drkshdw'],
    ['vetements'],
    ['acne', 'acne studios'],
    ['jacquemus'],
    ['raf', 'raf simons'],
    ['ann', 'ann demeulemeester'],
    ['marni'],
    ['lanvin'],

    // ===== Mainstream / sport / workwear =====
    ['nike'],
    ['adidas', 'three stripes', '3 stripes'],
    ['puma'],
    ['reebok'],
    ['vans'],
    ['converse', 'chuck taylor', 'chucks'],
    ['asics'],
    ['onitsuka', 'onitsuka tiger'],
    ['salomon'],
    ['hoka'],
    ['on cloud', 'oncloud', 'on running'],
    ['nb', 'new balance'],
    ['carhartt', 'carhartt wip', 'wip'],
    ['dickies'],
    ['levis', "levi's", 'levi strauss'],
    ['wrangler'],
    ['lacoste'],
    ['tommy', 'tommy hilfiger', 'th'],
    ['ck', 'calvin klein'],
    ['hugo boss', 'boss'],
    ['armani', 'ea', 'emporio armani', 'giorgio armani'],
    ['zegna'],
    ['brunello', 'brunello cucinelli'],
    ['loro piana', 'lp'],
    ['tom ford'],

    // ===== Jordan / Air Max / Yeezy / model shorthand =====
    ['aj', 'air jordan', 'jordan'],
    ['aj1', 'air jordan 1', 'jordan 1', 'j1'],
    ['aj3', 'air jordan 3', 'jordan 3'],
    ['aj4', 'air jordan 4', 'jordan 4', 'j4'],
    ['aj5', 'air jordan 5', 'jordan 5'],
    ['aj6', 'air jordan 6', 'jordan 6'],
    ['aj11', 'air jordan 11', 'jordan 11'],
    ['aj12', 'air jordan 12', 'jordan 12'],
    ['aj13', 'air jordan 13', 'jordan 13'],
    ['af1', 'air force 1', 'air force one', 'forces'],
    ['sb', 'nike sb', 'sb dunk', 'dunk sb'],
    ['dunk', 'nike dunk'],
    ['blazer', 'nike blazer'],
    ['cortez', 'nike cortez'],
    ['tn', 'air max plus', 'air max tn'],
    ['am1', 'air max 1'],
    ['am90', 'air max 90'],
    ['am95', 'air max 95'],
    ['am97', 'air max 97'],
    ['am270', 'air max 270'],
    ['am720', 'air max 720'],
    ['vapormax', 'vapor max'],
    ['pegasus', 'nike pegasus'],
    ['ub', 'ultraboost', 'ultra boost'],
    ['nmd', 'adidas nmd'],
    ['ss', 'stan smith'],
    ['superstar'],
    ['samba'],
    ['gazelle'],
    ['spzl', 'spezial'],
    ['campus'],
    ['handball', 'handball spezial'],
    ['forum', 'adidas forum'],
    ['yz', 'yzy', 'yeezy'],
    ['yz350', 'yeezy 350', 'boost 350'],
    ['yz450', 'yeezy 450'],
    ['yz500', 'yeezy 500'],
    ['yz700', 'yeezy 700'],
    ['yzy slide', 'yeezy slide'],
    ['foam runner', 'yeezy foam', 'foam rnr'],
    ['nb550', 'new balance 550', '550'],
    ['nb327', 'new balance 327', '327'],
    ['nb990', 'new balance 990', '990'],
    ['nb991', 'new balance 991', '991'],
    ['nb992', 'new balance 992', '992'],
    ['nb993', 'new balance 993', '993'],
    ['nb2002', 'new balance 2002', '2002r', '2002'],
    ['nb9060', 'new balance 9060', '9060'],
    ['nb1906', 'new balance 1906', '1906'],
    ['nb530', 'new balance 530', '530'],
    ['nb574', 'new balance 574', '574'],
    ['gel lyte', 'gel-lyte', 'gellyte'],
    ['kayano', 'gel kayano', 'gel-kayano'],
    ['nimbus', 'gel nimbus'],
    ['novablast'],
    ['mexico 66', 'onitsuka mexico'],
    ['xt6', 'xt-6', 'xt 6', 'salomon xt6'],
    ['xt4', 'xt-4'],
    ['speedcross', 'salomon speedcross'],
    ['clifton', 'hoka clifton'],
    ['bondi', 'hoka bondi'],
    ['old skool', 'old school', 'vans old skool'],
    ['sk8 hi', 'sk8-hi', 'sk8hi'],
    ['slip on', 'slip-on', 'slipon'],

    // ===== Footwear (general / non-sneaker) =====
    ['shoes', 'sneakers', 'kicks', 'trainers', 'footwear'],
    ['boots', 'boot'],
    ['slides', 'sliders', 'slide', 'slippers'],
    ['sandals', 'sandal'],
    ['loafers', 'loafer', 'mules', 'mule'],
    ['heels', 'heel', 'pumps', 'stiletto'],
    ['flats', 'ballet flats', 'flat'],
    ['doc martens', 'dr martens', 'dr. martens', 'dms'],
    ['timberland', 'timbs'],
    ['ugg', 'uggs'],
    ['crocs', 'croc'],
    ['birkenstock', 'birks'],
    ['clarks', 'wallabee', 'wallabees'],

    // ===== Tops =====
    ['hoodie', 'hoodies', 'hooded', 'tech fleece', 'pullover', 'sweatshirt', 'sweater', 'zip up', 'zip-up'],
    ['crewneck', 'crew neck', 'crew'],
    ['sweater', 'sweaters', 'knit', 'knitwear', 'cardigan', 'jumper'],
    ['tee', 'tshirt', 't-shirt', 't shirt', 'shirt', 't-shirts'],
    ['long sleeve', 'longsleeve', 'long-sleeve', 'ls tee', 'ls'],
    ['polo shirt', 'polo'],
    ['button up', 'button down', 'button-up', 'button-down', 'dress shirt', 'oxford', 'oxford shirt'],
    ['tank', 'tank top', 'singlet', 'sleeveless'],
    ['flannel'],

    // ===== Bottoms =====
    ['pants', 'trousers', 'slacks'],
    ['jeans', 'denim', 'denims'],
    ['joggers', 'sweatpants', 'track pants', 'trackpants', 'jogger'],
    ['shorts', 'short', 'sweatshorts'],
    ['cargo', 'cargos', 'cargo pants', 'cargo shorts'],
    ['skirt', 'skirts'],
    ['leggings', 'tights'],

    // ===== Outerwear =====
    ['jacket', 'jackets'],
    ['coat', 'coats'],
    ['puffer', 'down jacket', 'puffer jacket', 'down'],
    ['parka'],
    ['trench', 'trench coat'],
    ['bomber', 'bomber jacket', 'ma1', 'ma-1'],
    ['varsity', 'letterman', 'varsity jacket'],
    ['denim jacket', 'jean jacket', 'trucker jacket'],
    ['windbreaker', 'anorak', 'shell', 'shell jacket', 'rain jacket'],
    ['vest', 'gilet'],
    ['tech', 'tech fleece'],
    ['fleece'],

    // ===== Sets / formal / dresses =====
    ['tracksuit', 'track suit', 'tracksuits'],
    ['set', 'co-ord', 'coord', 'matching set', 'two piece', '2 piece'],
    ['suit', 'blazer', 'sport coat'],
    ['dress', 'dresses', 'gown'],

    // ===== Bags =====
    ['bag', 'bags', 'handbag', 'purse'],
    ['tote', 'tote bag'],
    ['crossbody', 'cross body', 'shoulder bag', 'sling', 'sling bag', 'messenger'],
    ['backpack', 'back pack', 'rucksack'],
    ['duffel', 'duffle', 'duffel bag', 'duffle bag', 'gym bag', 'weekender'],
    ['fanny pack', 'belt bag', 'waist bag', 'bum bag', 'hip pack'],
    ['clutch'],
    ['speedy', 'lv speedy'],
    ['neverfull', 'lv neverfull'],
    ['birkin', 'hermes birkin'],
    ['kelly', 'hermes kelly'],

    // ===== Small leather goods / accessories =====
    ['wallet', 'wallets', 'cardholder', 'card holder', 'bifold', 'bi-fold', 'long wallet'],
    ['belt', 'belts', 'buckle'],
    ['hat', 'hats', 'cap', 'caps'],
    ['beanie', 'beanies', 'knit hat', 'skull cap'],
    ['bucket hat', 'bucket', 'fisherman hat'],
    ['snapback', 'trucker hat', 'trucker cap', 'baseball cap', 'dad hat'],
    ['scarf', 'scarves'],
    ['gloves', 'glove', 'mittens'],
    ['tie', 'necktie', 'bowtie', 'bow tie'],

    // ===== Jewelry / eyewear / watches =====
    ['sunglasses', 'shades', 'sunnies'],
    ['glasses', 'eyewear', 'frames', 'spectacles'],
    ['watch', 'watches', 'wristwatch'],
    ['rolex', 'submariner', 'datejust', 'daytona', 'gmt'],
    ['audemars piguet', 'royal oak'],
    ['patek', 'patek philippe', 'nautilus'],
    ['cartier', 'love bracelet', 'juste un clou'],
    ['bracelet', 'bracelets', 'cuff', 'bangle'],
    ['necklace', 'necklaces', 'chain', 'chains', 'pendant'],
    ['ring', 'rings', 'band'],
    ['earring', 'earrings', 'studs', 'hoops'],
    ['pin', 'pins', 'brooch'],
    ['keychain', 'keychains', 'key chain', 'lanyard', 'key holder'],

    // ===== Electronics / tech =====
    ['headphones', 'headphone', 'cans', 'over-ear', 'over ear'],
    ['earbuds', 'earphones', 'in-ear', 'iems', 'in ear'],
    ['airpods', 'air pods', 'airpod', 'airpods pro', 'airpods max'],
    ['speaker', 'speakers', 'bluetooth speaker', 'wireless speaker'],
    ['phone', 'smartphone', 'iphone', 'android'],
    ['phone case', 'phonecase', 'iphone case'],
    ['airpods case', 'airpod case'],
    ['charger', 'charging cable', 'usb cable', 'lightning cable', 'usb-c'],
    ['power bank', 'powerbank', 'portable charger'],
    ['smartwatch', 'apple watch', 'iwatch'],
    ['drone'],
    ['camera', 'cam'],
    ['mouse', 'gaming mouse'],
    ['keyboard', 'mechanical keyboard'],

    // ===== Misc =====
    ['perfume', 'cologne', 'fragrance', 'eau de parfum', 'edp', 'edt'],
    ['lighter', 'zippo'],
    ['umbrella'],
    ['stuffed animal', 'plush', 'plushie', 'plushy'],
    ['lego', 'legos'],
    ['football jersey', 'soccer jersey', 'jersey'],
    ['fifa', 'world cup'],
];

// Build the lookup dict from groups. For each term, list all other terms in
// the same group(s). A term can appear in multiple groups (e.g. 'tee' and
// 'shirt' are bridges) — we union their expansions.
const SEARCH_ALIASES = (() => {
    const dict = {};
    for (const group of SYNONYM_GROUPS) {
        for (const term of group) {
            const list = dict[term] || (dict[term] = []);
            for (const other of group) {
                if (other !== term && !list.includes(other)) list.push(other);
            }
        }
    }
    return dict;
})();

// Memoized OR-regex per token. \b anchors the start of each expansion so
// short forms like "lv" don't false-match inside other words ("involve"),
// while still matching at the start of any word ("LV Monogram Bag").
// Digit-ending aliases (aj1, am90, 550, ...) get a (?!\d) lookahead so that
// "aj1" doesn't accidentally match "aj11" or "am90" match "am900".
const _tokenMatcherCache = {};
function tokenMatcher(token) {
    if (_tokenMatcherCache[token]) return _tokenMatcherCache[token];
    const expansions = [token, ...(SEARCH_ALIASES[token] || [])];
    const parts = expansions.map(s => {
        const esc = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return /\d$/.test(s) ? esc + '(?!\\d)' : esc;
    });
    return (_tokenMatcherCache[token] = new RegExp('\\b(?:' + parts.join('|') + ')', 'i'));
}

function matchesSearch(name, query) {
    query = (query || '').trim();
    if (!query) return true;
    name = name.toLowerCase();

    // Whole-query match (with aliases). Uses the same word-boundary regex so
    // "air jordan 1" doesn't accidentally match "Air Jordan 11".
    if (tokenMatcher(query).test(name)) return true;

    // Per-token AND: each token (or any of its aliases) must match somewhere
    // in the name. This handles "nike hoodie" → "Nike Tech Fleece Hoodie".
    const tokens = query.split(/\s+/).filter(Boolean);
    if (tokens.length <= 1) return false;
    return tokens.every(t => tokenMatcher(t).test(name));
}

// =============================================================
// APP STATE
// =============================================================
let allProducts = [];
let currentFiltered = [];
let activeCategory = 'all';
let searchQuery = '';
const BATCH_SIZE = 20;
let renderedCount = 0;
let loadingMore = false;

// =============================================================
// DOM REFERENCES
// =============================================================
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const gridEl = document.getElementById('product-grid');
const noResultsEl = document.getElementById('no-results');
const categoryTabsEl = document.getElementById('category-tabs');
const searchInput = document.getElementById('search-input');
const priceSortEl = document.getElementById('price-sort');
let priceSort = 'low';

// Build the rendered URL for a product photo. Google-hosted images
// (lh3/lh4/etc. .googleusercontent.com), INCLUDING the docsubipk inline
// previews, load direct. wsrv.nl was returning 404 for docsubipk URLs
// because Google appears to bind those tokens to the requester's session
// — the user's browser session has the token, wsrv.nl doesn't. Going
// direct + the no-referrer document meta keeps the request inside the
// same session that fetched the spreadsheet.
// Everything else (e.g. Geili CDN) still needs the proxy to bypass CORP headers.
function photoUrl(src, w, h) {
    if (!src) return '';
    // Local (relative) paths — used for per-product image overrides
    // shipped with the site. Return them direct, never proxy.
    if (!/^https?:\/\//i.test(src)) return src;
    if (/(^|\.)googleusercontent\.com\//.test(src)) return src;
    return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover`;
}

// Delegated click handler for product cards (one listener, not one per card)
gridEl.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const idx = parseInt(card.dataset.index);
    const p = currentFiltered[idx];
    if (!p) return;
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
    // Prefer the cached weidian image if the card already resolved one — the
    // p.photo source (docsubipk for discount items) often 404s by modal time.
    const cachedWeidian = p.weidianId && imgCache[p.weidianId];
    const bigImg = cachedWeidian
        ? photoUrl(cachedWeidian, 800, 800)
        : (p.photo ? photoUrl(p.photo, 800, 800) : placeholder);
    const modalImg = document.getElementById('modal-img');
    modalImg.referrerPolicy = 'no-referrer';
    // Weidian fallback is dead (HTTP2 protocol error). On modal img
    // failure just show the placeholder so the rest of the modal
    // (name/price/buy link) still works.
    modalImg.onerror = function() {
        modalImg.onerror = null;
        modalImg.src = placeholder;
    };
    modalImg.src = bigImg;
    const displayName = (window.i18n && window.i18n.dyn(p.name)) || p.name;
    modalImg.alt = displayName;
    document.getElementById('modal-name').textContent = displayName;
    if (p.eurPrice) {
        document.getElementById('modal-price').textContent = p.price + ' / ' + p.eurPrice;
    } else {
        document.getElementById('modal-price').textContent = p.price;
    }
    document.getElementById('modal-buy-btn').href = p.link;
    const qcBtn = document.getElementById('modal-qc-btn');
    if (p.qcLink) {
        qcBtn.href = p.qcLink;
        qcBtn.classList.remove('hidden');
    } else {
        qcBtn.classList.add('hidden');
    }
    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden', 'modal-closing');
    document.body.style.overflow = 'hidden';
});

// =============================================================
// HTML PARSING — scrape the htmlview to get images + affiliate links
// =============================================================
function buildHtmlUrl(sheetId, gid) {
    // _ts cache-buster: ensure each fetch returns FRESH docsubipk tokens.
    // Google's htmlview sets no-cache headers but some intermediaries
    // and service workers ignore them. Stale HTML → stale tokens → 404.
    return `https://docs.google.com/spreadsheets/d/${sheetId}/htmlview/sheet?gid=${gid}&_ts=${Date.now()}`;
}

// =============================================================
// SHARED HELPERS — link extraction & invite code
// =============================================================
function extractLink(cell) {
    const anchor = cell.querySelector('a');
    if (!anchor) return '';
    const href = anchor.getAttribute('href') || '';
    const match = href.match(/[?&]q=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : href;
}

// Boonbuy affiliate code. Product links in the sheet look like
// https://boonbuy.com/product/2/<weidianId>?inviteCode=CN40
const INVITE_CODE = 'CN40';

function fixLink(link) {
    if (!link) return '';
    // Boonbuy short links (gateway.boonbuy.com/unified-service/lit/xxxx)
    // already resolve to the affiliate-tagged page; don't mangle them.
    if (/gateway\.boonbuy\.com/i.test(link)) return link;
    if (!link.includes('?') && link.includes('&')) {
        link = link.replace('&', '?');
    }
    if (/inviteCode=/i.test(link)) {
        link = link.replace(/inviteCode=[^&]*/i, 'inviteCode=' + INVITE_CODE);
    } else {
        link += (link.includes('?') ? '&' : '?') + 'inviteCode=' + INVITE_CODE;
    }
    return link;
}

// Keyword → category mapping. Each product name is scanned
// (most-specific patterns first) to derive a category ("Bape Tee"
// → T-Shirts, "Adidas Pants" → Pants). Items with no keyword match
// are reachable only via the "All" pill. The target strings on the
// right side of each entry below define the set of category pills
// that can appear.
//
// Word-boundary anchored to avoid "set" matching "Sunset" or "shirt"
// matching "sweatshirt" (resolved by ordering: 'sweatshirt' would need
// to come before 'shirt' if it were a target keyword).
const SPECIAL_PIN_KEYWORDS = [
    // Order matters: most specific first. The first \b-anchored match
    // against the lowercased product name decides the target. So
    // 'sweater' beats 'tee' for "Sweater Tee", 'hoodie' beats 'air max'
    // for a hypothetical "Air Max Hoodie", etc.
    //
    // Football / soccer kits get their own pill — check before the
    // generic 'jersey' / 'uniform' / 'set' rules below, otherwise
    // "Real Madrid Football Jersey" would land in T-Shirts.
    ['football',       '⚽ Football'],
    ['soccer',         '⚽ Football'],
    ['real madrid',    '⚽ Football'],
    ['psg',            '⚽ Football'],
    ['national team',  '⚽ Football'],
    // Apparel keywords (checked first so "Nike Hoodie" beats 'nike').
    ['jeans',          '👖 Pants'],
    ['trousers',       '👖 Pants'],
    ['pants',          '👖 Pants'],
    ['shorts',         '🩳 Shorts'],
    ['short',          '🩳 Shorts'],
    ['hoodie',         '🧥 Hoodies'],
    ['sweater',        '🧶 Sweaters'],
    ['knit',           '🧶 Sweaters'],
    ['tracksuit',      '🏃 Tracksuits'],
    ['set',            '🏃 Tracksuits'],
    ['kit',            '🏃 Tracksuits'],
    ['uniform',        '🏃 Tracksuits'],
    ['polo',           '👕 T-Shirts'],
    ['t-shirt',        '👕 T-Shirts'],
    ['tshirt',         '👕 T-Shirts'],
    ['tee',            '👕 T-Shirts'],
    ['jersey',         '👕 T-Shirts'],
    ['shirt',          '👕 T-Shirts'],
    ['jacket',         '🦺 Jackets & Vests'],
    ['vest',           '🦺 Jackets & Vests'],
    ['perfume',        '🌸 Perfume'],
    ['cologne',        '🌸 Perfume'],
    ['fragrance',      '🌸 Perfume'],
    // Footwear — generic words first, then shoe-dedicated brands and
    // recognisable shoe model names. The "Shoes" suffix on most items
    // is caught by 'shoes', but plenty of names ("Nike Air", "Jordan",
    // "Asics Gel 1130", "Adidas Forum 84", "Puma LX Court") only have
    // brand/model identifiers.
    ['shoes',          '👟 Shoes'],
    ['shoe',           '👟 Shoes'],
    ['sneakers',       '👟 Shoes'],
    ['sneaker',        '👟 Shoes'],
    ['trainers',       '👟 Shoes'],
    ['boots',          '👟 Shoes'],
    ['boot',           '👟 Shoes'],
    ['sandals',        '👟 Shoes'],
    ['sandal',         '👟 Shoes'],
    ['loafers',        '👟 Shoes'],
    ['loafer',         '👟 Shoes'],
    ['heels',          '👟 Shoes'],
    ['slippers',       '👟 Shoes'],
    ['slipper',        '👟 Shoes'],
    ['slides',         '👟 Shoes'],
    ['slide',          '👟 Shoes'],
    ['jordan',         '👟 Shoes'],
    ['asics',          '👟 Shoes'],
    ['new balance',    '👟 Shoes'],
    ['air max',        '👟 Shoes'],
    ['air force',      '👟 Shoes'],
    ['air jordan',     '👟 Shoes'],
    ['nike air',       '👟 Shoes'],
    ['dunk',           '👟 Shoes'],
    ['forum',          '👟 Shoes'],
    ['samba',          '👟 Shoes'],
    ['gazelle',        '👟 Shoes'],
    ['yeezy',          '👟 Shoes'],
    ['stan smith',     '👟 Shoes'],
    ['superstar',      '👟 Shoes'],
    ['cortez',         '👟 Shoes'],
    ['b22',            '👟 Shoes'],
    ['gel',            '👟 Shoes'],   // Asics Gel-* line
    ['lx court',       '👟 Shoes'],
    ['mr993',          '👟 Shoes'],
    ['u574',           '👟 Shoes'],
];

function derivePinCategory(name) {
    const lower = (name || '').toLowerCase();
    for (const [kw, target] of SPECIAL_PIN_KEYWORDS) {
        const re = new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        if (re.test(lower)) return target;
    }
    return '';
}

// =============================================================
// HTML PARSING — Main sheet
// Layout: A=picture, B=name, C=price, D=link.
// Each <tr> in Google's htmlview has a leading <th> with the sheet
// row number (1-indexed). Every row's category is derived from the
// product name via derivePinCategory; items with no keyword match
// have no category and are only reachable via the "All" pill.
// =============================================================
function parseHtmlSheetMain(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const products = [];

    const rows = doc.querySelectorAll('tr');
    for (const row of rows) {
        const rowHeader = row.querySelector('th.row-headers-background');
        if (!rowHeader) continue;
        const sheetRow = parseInt((rowHeader.textContent || '').trim(), 10);
        if (!Number.isFinite(sheetRow)) continue;

        const cells = row.querySelectorAll('td');
        if (cells.length < 4) continue;

        const picCell   = cells[0];
        const nameCell  = cells[1];
        const priceCell = cells[2];
        const linkCell  = cells[3];

        const name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        if (!name) continue;
        // Sheet has an in-data header row labelled "Picture | Name | Price | Link"
        if (name.toLowerCase() === 'name') continue;

        let photo = '';
        const img = picCell.querySelector('img');
        if (img) photo = img.getAttribute('src') || '';
        if (!photo) {
            const photoLink = extractLink(picCell);
            if (photoLink && photoLink.startsWith('http')) photo = photoLink;
        }
        if (!photo) {
            const t = (picCell.textContent || '').trim();
            if (t.startsWith('http')) photo = t;
        }
        // Bump Google-served thumbnails up to a higher-res variant.
        if (photo) photo = photo.replace(/=w\d+-h\d+$/, '=w1600-h1600').replace(/=s\d+[-\w]*$/, '=s1600');

        const price = (priceCell.textContent || '').trim();

        let link = extractLink(linkCell);
        link = fixLink(link);
        if (!link) continue;

        let weidianId = '';
        // Boonbuy: /product/2/<id> (platform 2 = Weidian). Legacy: /weidian/<id> or ?id=<id>.
        const idMatch = link.match(/\/product\/2\/(\d+)/i) || link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        if (!photo && !weidianId) continue;

        const product = {
            name,
            price,
            photo,
            link,
            weidianId,
            category: derivePinCategory(name),
        };
        products.push(product);
    }

    return products;
}

// FNV-1a 32-bit hash. Stable across reloads so the scattered order
// stays the same between renders (avoids items jumping around).
function scatterHash(s) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

// =============================================================
// FETCH PRODUCTS
//
// Stale-while-revalidate: the catalog is one HTTP response (a Google
// Sheet htmlview), so the price-sorted order can't be known until the
// whole thing has downloaded + parsed. Rather than block behind the
// spinner every visit, we cache the last-parsed catalog in localStorage
// and paint it instantly on load, THEN fetch fresh in the background and
// reconcile via renderProducts' append-don't-wipe path. Returning
// visitors never see the loading screen; first-ever visitors see it once.
// =============================================================
// Keyed by sheet so switching spreadsheets (e.g. LitBuy -> Boonbuy) never
// paints a stale catalog from the previous sheet.
const PRODUCTS_CACHE_KEY = 'cnmastair-products-v2-' + SHEET_ID;
// Drop caches from previous sheets / schema versions.
try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && k.startsWith('cnmastair-products-') && k !== PRODUCTS_CACHE_KEY) {
            localStorage.removeItem(k);
        }
    }
} catch (e) {}

function loadProductsCache() {
    try {
        const raw = localStorage.getItem(PRODUCTS_CACHE_KEY);
        const arr = raw ? JSON.parse(raw) : null;
        return Array.isArray(arr) && arr.length ? arr : null;
    } catch (e) { return null; }
}

function saveProductsCache(products) {
    try { localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify(products)); } catch (e) {}
}

async function fetchProducts() {
    errorEl.classList.add('hidden');

    const havePainted = allProducts.length > 0;

    // Paint cached catalog immediately so the spinner never shows on a
    // return visit. Only on the very first paint (nothing on screen yet).
    if (!havePainted) {
        const cached = loadProductsCache();
        if (cached) {
            allProducts = cached;
            buildCategoryTabs();
            renderProducts();
            loadingEl.classList.add('hidden');
            if (window.i18n) window.i18n.translateDynamic();
        } else {
            // First-ever visit, nothing to show — spinner stays until fetch.
            loadingEl.classList.remove('hidden');
            gridEl.innerHTML = '';
            noResultsEl.classList.add('hidden');
        }
    }

    try {
        const resp = await fetch(buildHtmlUrl(SHEET_ID, SHEET_GID));
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const html = await resp.text();
        const parsed = parseHtmlSheetMain(html);

        // Stable hash-based sourceOrder scatters items within each category
        // so previously-pinned rows interleave with the rest instead of
        // clumping at the top (they sit at the top of the sheet).
        const fresh = parsed.map(p => ({
            ...p,
            sourceOrder: scatterHash(p.link || p.name),
        }));

        if (fresh.length === 0) {
            throw new Error('Sheet returned no parseable rows');
        }
        allProducts = fresh;
        saveProductsCache(fresh);
        buildCategoryTabs();
        renderProducts();
        loadingEl.classList.add('hidden');
        if (window.i18n) window.i18n.translateDynamic();
    } catch (err) {
        console.error('Failed to fetch products:', err);
        loadingEl.classList.add('hidden');
        // A failed background refresh must not blow away a working view.
        // Only surface the error when there's nothing on screen.
        if (allProducts.length === 0) {
            errorEl.classList.remove('hidden');
        }
    }
}

// =============================================================
// CATEGORY TABS
// =============================================================
function buildCategoryTabs() {
    // Drop undefined/null — catalog items with no keyword match have no
    // category and are reachable only via "All". They must not produce
    // a phantom pill.
    const categories = [...new Set(allProducts.map(p => p.category).filter(Boolean))];
    categoryTabsEl.innerHTML = '';

    const frontPinned = ['Discount Items', 'Best Sellers', 'Budget Finds'];
    for (const name of [...frontPinned].reverse()) {
        const idx = categories.indexOf(name);
        if (idx > -1) {
            categories.splice(idx, 1);
            categories.unshift(name);
        }
    }

    addPill('All', 'all');
    for (const cat of categories) {
        addPill(cat, cat);
    }
}

function addPill(label, value) {
    const btn = document.createElement('button');
    btn.className = 'category-pill' + (activeCategory === value ? ' active' : '');
    btn.dataset.category = value;
    btn.dataset.catKey = catTranslationKey(value);
    btn.textContent = translatePill(value, label);
    btn.addEventListener('click', () => setCategory(value));
    categoryTabsEl.appendChild(btn);
}

function catTranslationKey(value) {
    if (value === 'all') return 'cat_all';
    if (value === 'Budget Finds') return 'cat_budget';
    if (value === 'Discount Items') return 'cat_discount';
    if (value === 'Best Sellers') return 'cat_bestsellers';
    return '';
}

function translatePill(value, fallback) {
    const key = catTranslationKey(value);
    if (key) return (window.i18n && window.i18n.t(key)) || fallback;
    // Sheet-driven category — fall back to dynamic-translation cache
    return (window.i18n && window.i18n.dyn(value)) || fallback;
}

function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === cat);
    });
    renderProducts(true);
}

// =============================================================
// SEARCH
// =============================================================
let searchDebounce = null;
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => renderProducts(true), 200);
});

priceSortEl.addEventListener('change', (e) => {
    priceSort = e.target.value;
    renderProducts(true);
});

// =============================================================
// RENDER
// =============================================================

// The render key is the identity of the current view: filter + search +
// sort. When a background refresh re-renders with the SAME key and the
// already-painted cards are still an exact prefix of the freshly sorted
// list, we keep the existing DOM (and card indices) and let the extra
// items flow in below via appendBatch / infinite scroll — instead of
// wiping the grid, which would flash and jump the scroll position.
let lastRenderKey = null;

function renderKey() {
    return activeCategory + ' ' + searchQuery + ' ' + priceSort;
}

// Stable per-product identity (object refs differ across fetches because
// each refresh rebuilds allProducts from scratch).
function productKey(p) {
    return p.link || p.name;
}

// Are the first `n` items of `next` the same products, in the same order,
// as the first `n` of `prev`? Cheap prefix check by stable key.
function sameRenderedPrefix(prev, next, n) {
    if (next.length < n) return false;
    for (let i = 0; i < n; i++) {
        if (productKey(prev[i]) !== productKey(next[i])) return false;
    }
    return true;
}

// forceFull bypasses the append path and always rebuilds the grid. Callers
// pass it when the visible card CONTENT may have changed even though the
// product set / order hasn't — e.g. translateDynamic() repainting cards with
// freshly fetched translations. (Category / search / sort changes already
// change the render key, so they re-render regardless.) The background
// refresh in fetchProducts passes nothing, keeping it append-eligible.
function renderProducts(forceFull) {
    let filtered = allProducts;

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
        filtered = filtered.filter(p => matchesSearch(p.name, searchQuery));
    }

    // Sort by price (cheapest first by default), tiebreak photos-first,
    // then scattered sourceOrder so equal-price items don't clump in
    // sheet order.
    filtered.sort((a, b) => {
        const pa = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const pb = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        const priceCmp = priceSort === 'high' ? pb - pa : pa - pb;
        if (priceCmp !== 0) return priceCmp;
        const photoCmp = (b.photo ? 1 : 0) - (a.photo ? 1 : 0);
        if (photoCmp !== 0) return photoCmp;
        return (a.sourceOrder || 0) - (b.sourceOrder || 0);
    });

    if (filtered.length === 0 && allProducts.length > 0) {
        gridEl.style.minHeight = '';
        gridEl.innerHTML = '';
        currentFiltered = filtered;
        renderedCount = 0;
        lastRenderKey = renderKey();
        noResultsEl.classList.remove('hidden');
        return;
    }

    noResultsEl.classList.add('hidden');

    // Append path: same view AND the painted cards are still a prefix of the
    // new list. Keep the DOM, swap in the (re)sorted backing array — existing
    // indices still resolve to the same products, and any new items appear
    // below via appendBatch on scroll. No wipe, no scroll jump.
    const key = renderKey();
    if (!forceFull && key === lastRenderKey && renderedCount > 0 &&
        sameRenderedPrefix(currentFiltered, filtered, renderedCount)) {
        currentFiltered = filtered;
        return;
    }

    // Full re-render — view changed, or the prefix shifted (so the existing
    // DOM order would no longer match the required sort order).
    currentFiltered = filtered;
    lastRenderKey = key;
    renderedCount = 0;
    gridEl.innerHTML = '';
    appendBatch();
}

function buildCard(p, i) {
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
    const imgSrc = p.photo ? photoUrl(p.photo, 800, 800) : placeholder;

    const card = document.createElement('div');
    let extraClass = '';
    if (p.category === 'Discount Items' || p.isDiscount) extraClass = ' discount';
    else if (p.category === 'Best Sellers') extraClass = ' bestseller';
    else if (p.category === 'Budget Finds') extraClass = ' budget';
    card.className = 'product-card' + extraClass;
    card.dataset.index = i;

    const img = document.createElement('img');
    img.id = 'pimg-' + i;
    img.alt = p.name;
    img.loading = 'lazy';
    // Strip referer BEFORE setting src so the policy applies to the actual
    // network request. Some browsers fire the fetch immediately on src= and
    // setting referrerPolicy after has no effect.
    // Google blocks googleusercontent.com requests with non-Google referers (429).
    img.referrerPolicy = 'no-referrer';
    // Only set the attribute if we have an actual id. An empty data-weidian
    // still matches `img[data-weidian]` in querySelectorAll and would put
    // loadMissingImages's while-loop into an infinite spin (filter passes
    // but processOne can't populate imgCache for an empty id).
    if (p.weidianId) img.dataset.weidian = p.weidianId;
    img.onerror = function() { this.onerror = null; this.src = placeholder; };
    img.src = imgSrc;

    const info = document.createElement('div');
    info.className = 'product-info';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'product-name';
    nameDiv.textContent = (window.i18n && window.i18n.dyn(p.name)) || p.name;

    const priceDiv = document.createElement('div');
    priceDiv.className = 'product-price';
    if (p.eurPrice) {
        priceDiv.textContent = p.price + ' / ' + p.eurPrice;
    } else {
        priceDiv.textContent = p.price;
    }

    info.appendChild(nameDiv);
    info.appendChild(priceDiv);
    card.appendChild(img);
    if (p.category === 'Discount Items' || p.isDiscount) {
        const badge = document.createElement('div');
        badge.className = 'discount-badge';
        badge.textContent = 'Discount!';
        card.appendChild(badge);
    }
    card.appendChild(info);
    return card;
}

function appendBatch() {
    const end = Math.min(renderedCount + BATCH_SIZE, currentFiltered.length);
    if (renderedCount >= end) return;

    const frag = document.createDocumentFragment();
    for (let i = renderedCount; i < end; i++) {
        frag.appendChild(buildCard(currentFiltered[i], i));
    }
    gridEl.appendChild(frag);
    renderedCount = end;
    // Weidian fallback endpoint (thor.weidian.com/detail/getItemSkuInfo)
    // is dead — every JSONP call fails with ERR_HTTP2_PROTOCOL_ERROR.
    // Disabling the call eliminates 50+ failed requests per render and
    // keeps the console clean. Cards whose direct image fails will stay
    // on the placeholder until the upstream is restored or replaced.
    // loadMissingImages();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttr(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// =============================================================
// HEADER HIDE/SHOW ON SCROLL
// =============================================================
// Disable the browser's automatic scroll-restoration on back/forward
// nav and refresh. Otherwise reloading at mid-page leaves the banner
// half-scrolled-off, which looks like "the top is cut by the sticky bar."
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

let lastScrollY = 0;
let scrollTicking = false;
let searchFocused = false;
const header = document.querySelector('header');
const headerBanner = document.querySelector('.header-banner');

// The sticky header only contains search + category tabs. It should
// only hide once the user has scrolled past the (non-sticky) banner —
// otherwise the bar appears to jump while the banner is still on-screen.
function getStickyThreshold() {
    return (headerBanner ? headerBanner.offsetHeight : 0) + 20;
}

// Pin the header to its full visible state while the search is focused.
// Mobile keyboards shrink the viewport and auto-scroll the focused input,
// which can yank a sticky header (and the input inside it) off-screen.
searchInput.addEventListener('focus', () => {
    searchFocused = true;
    header.classList.remove('header-hidden');
});
searchInput.addEventListener('blur', () => {
    searchFocused = false;
});

// Hide the header on scroll-down, show on scroll-up. Hysteresis is
// only applied to the HIDE direction — any scroll-up reveals the bar
// immediately, so the user never feels like it's "stuck hidden".
// Only transform is animated, so the height never shifts.
const SCROLL_DELTA = 8;
window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        scrollTicking = false;
        if (searchFocused) {
            lastScrollY = window.scrollY;
            return;
        }
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;

        if (currentY <= 50) {
            // Near top — always show.
            header.classList.remove('header-hidden');
        } else if (delta < 0) {
            // Any upward movement — reveal immediately, no threshold.
            header.classList.remove('header-hidden');
        } else if (delta > SCROLL_DELTA && currentY > getStickyThreshold()) {
            // Scroll-down past banner with hysteresis — hide.
            header.classList.add('header-hidden');
        }
        // Always update so we don't accumulate drift between events.
        lastScrollY = currentY;
    });
}, { passive: true });

// Infinite scroll — load more cards when near bottom.
// Synchronous append + try/finally so loadingMore can't get stuck true
// if rAF is throttled or appendBatch throws.
window.addEventListener('scroll', () => {
    if (loadingMore || renderedCount >= currentFiltered.length) return;
    const scrollBottom = window.innerHeight + window.scrollY;
    if (scrollBottom >= document.body.offsetHeight - 800) {
        loadingMore = true;
        try {
            appendBatch();
        } finally {
            loadingMore = false;
        }
    }
}, { passive: true });

// =============================================================
// FALLBACK: Load missing images one at a time via weidian JSONP
// =============================================================
const imgCache = {};
const pendingWeidian = {}; // id -> Promise — dedupes concurrent fetches

function weidianImage(itemId) {
    // `in` check, not truthiness — '' means "tried, no image available" and
    // should NOT trigger a retry on subsequent loadMissingImages passes.
    if (itemId in imgCache) return Promise.resolve(imgCache[itemId]);
    if (pendingWeidian[itemId]) return pendingWeidian[itemId];

    pendingWeidian[itemId] = new Promise(resolve => {
        const cb = '_wd' + Math.random().toString(36).slice(2);
        const timeout = setTimeout(() => { done(''); }, 10000);

        function done(url) {
            clearTimeout(timeout);
            delete window[cb];
            delete pendingWeidian[itemId];
            const el = document.getElementById('s_' + cb);
            if (el) el.remove();
            // Cache both successes AND failures (as '') so we don't retry forever.
            imgCache[itemId] = url || '';
            resolve(url);
        }

        window[cb] = function(data) {
            let img = '';
            try {
                const attrs = data?.result?.attrList || [];
                for (const a of attrs) {
                    if (a.attrValues?.[0]?.img) { img = a.attrValues[0].img; break; }
                }
            } catch(e) {}
            done(img);
        };

        const s = document.createElement('script');
        s.id = 's_' + cb;
        // Weidian's API rejects requests with our github.io referer
        // ("Referer Not Allowed", error code 15) and silently doesn't
        // invoke our callback, causing every JSONP call to time out.
        // Strip the referer header to bypass that check.
        s.referrerPolicy = 'no-referrer';
        s.src = 'https://thor.weidian.com/detail/getItemSkuInfo/1.0?callback=' + cb +
                '&param=' + encodeURIComponent(JSON.stringify({itemId: itemId}));
        s.onerror = () => done('');
        document.body.appendChild(s);
    });
    return pendingWeidian[itemId];
}

// Worker-pool fallback loader. Runs up to FALLBACK_CONCURRENCY weidian
// fetches in parallel, with no inter-request throttle — the JSONP endpoint
// handles bursts fine and serial waiting was making ~60-card discount
// sections take 30s+ to fully load.
const FALLBACK_CONCURRENCY = 6;
let fallbackRunning = false;

async function loadMissingImages() {
    if (fallbackRunning) return; // re-entry guard; appendBatch fires this per batch
    fallbackRunning = true;
    try {
        const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
        // Re-scan each pass because cards keep getting appended.
        async function processOne(img) {
            const wid = img.dataset.weidian;
            if (!wid) return;
            if (img.src !== placeholder && !img.src.startsWith('data:')) return;
            if (wid in imgCache) {
                // Either a cached URL or a cached failure ('').
                if (imgCache[wid]) img.src = photoUrl(imgCache[wid], 800, 800);
                return;
            }
            const url = await weidianImage(wid);
            if (url) img.src = photoUrl(url, 800, 800);
        }

        // Iterate until no pending images remain (catches images added by appendBatch
        // during fallback execution). Images whose weidianId has already been tried
        // and returned no result are excluded so this loop terminates.
        // Hard ceiling on while-loop iterations to absolutely prevent a
        // pathological case from pegging the CPU and freezing the page.
        let safety = 50;
        while (safety-- > 0) {
            const pending = Array.from(document.querySelectorAll('img[data-weidian]'))
                .filter(img => {
                    const wid = img.dataset.weidian;
                    // Skip empty ids — they'd otherwise cause an infinite
                    // loop since processOne can't populate imgCache for ''.
                    if (!wid) return false;
                    if (img.src !== placeholder && !img.src.startsWith('data:')) return false;
                    // Skip if already tried and produced no image.
                    if (wid in imgCache && !imgCache[wid]) return false;
                    return true;
                });
            if (pending.length === 0) break;

            let cursor = 0;
            const worker = async () => {
                while (cursor < pending.length) {
                    const img = pending[cursor++];
                    await processOne(img);
                }
            };
            await Promise.all(Array.from({ length: FALLBACK_CONCURRENCY }, worker));
        }
    } finally {
        fallbackRunning = false;
    }
}

// =============================================================
// PRODUCT MODAL CLOSE
// =============================================================
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('modal-closing');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('modal-closing');
        document.body.style.overflow = '';
    }, 250);
}

document.querySelector('.product-modal-close').addEventListener('click', closeProductModal);
document.querySelector('.product-modal-backdrop').addEventListener('click', closeProductModal);

// =============================================================
// INIT
// =============================================================
fetchProducts();

// Auto-refresh only when the tab is hidden, so the user is never
// interrupted mid-scroll by a grid wipe + re-render. When they come
// back to the tab they get fresh data without seeing the reset.
let lastRefresh = Date.now();
document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    if (Date.now() - lastRefresh < REFRESH_INTERVAL) return;
    lastRefresh = Date.now();
    fetchProducts();
});
