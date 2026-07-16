// ===== CODES =====
var CODES = ['DSA2026','STUDENT01','VIP2026','DZSKILL2025','ATLAS-PRO','LEARN-DZ-01','LEARN-DZ-02','LEARN-DZ-03','ACADEMY-VIP','FORMATION01','FORMATION02'];

// ===== LEVEL STYLES =====
var LS = {
  Beginner: { bg: '#052E16', border: '#16A34A', text: '#4ADE80', badge: '🌱' },
  Intermediate: { bg: '#1E3A5F', border: '#2563EB', text: '#60A5FA', badge: '⚡' },
  Advanced: { bg: '#450A0A', border: '#DC2626', text: '#F87171', badge: '🔥' },
  Master: { bg: '#431407', border: '#EA580C', text: '#FB923C', badge: '👑' }
};

// ===== TRADUCTIONS =====
var T = {
  fr: {
    badge: 'Formation Complète — 7 Skills',
    title: 'Maîtrisez les Compétences\nDigitales qui Paient en Algérie',
    subtitle: '7 formations complètes. Graphisme, Social Media, Vidéo, Web, SEO, Data, Copywriting.',
    f1: '✓ Méthodes étape par étape', f2: '✓ Exercices réels', f3: '✓ Outils gratuits', f4: '✓ Tarifs marché algérien',
    includesTitle: 'Ce que vous obtenez',
    includes: ['7 formations complètes — Beginner → Master','Chaque leçon: méthode exacte étape par étape','Exercices pratiques avec livrables concrets','Outils gratuits','Prix du marché algérien en DZD','Scripts de communication client','Accès à vie — mises à jour incluses'],
    already: 'Vous avez déjà acheté?', enter: 'Entrez votre code d\'accès pour commencer.', code: 'VOTRE CODE D\'ACCÈS...',
    access: 'Accéder à la Formation →', loading: 'Vérification...', notBought: 'Pas encore acheté?', whatsapp: '💬 Commander via WhatsApp',
    errEmpty: 'Entrez votre code d\'accès.', errInvalid: 'Code invalide. Vérifiez votre achat.', errUsed: 'Ce code a déjà été utilisé.',
    stats: [{ n: '35+', l: 'Leçons détaillées' }, { n: '4', l: 'Niveaux par skill' }, { n: '0 DZD', l: 'Pour commencer' }],
    footer: 'DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algérie', aTitle: 'Apprenez. Pratiquez.\nSoyez Payé.',
    aSubtitle: '7 skills, du débutant au maître. Chaque leçon vous dit exactement comment faire.',
    aFeatures: ['Méthodes étape par étape','Exercices réels','Outils gratuits','Tarifs marché algérien'],
    aRec: '💡 Ordre recommandé: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting',
    startLearning: 'Commencer →', firstClient: 'Premier client', earning: 'Revenus', startWith: 'Commencer avec',
    backSkills: '← Skills', goal: 'Objectif', lessons: 'leçons', back: '← Retour', lesson: 'Leçon', of: 'sur',
    howTo: 'Comment Faire — Étape par Étape', bestWay: 'La Meilleure Façon d\'Apprendre', exercise: 'Votre Exercice Pratique',
    prevLesson: '← Leçon Précédente', nextLesson: 'Leçon Suivante →', nextLevel: 'Niveau Suivant', complete: '👑 Formation Terminée!'
  },
  ar: {
    badge: 'تكوين كامل — 7 مهارات',
    title: 'تعلم المهارات الرقمية\nاللي تدر فلوس في الجزائر',
    subtitle: '7 تكوينات كاملة. تصميم، سوشيال ميديا، مونتاج، ويب، SEO، بيانات، كتابة.',
    f1: '✓ خطوات واضحة وعملية', f2: '✓ تمارين حقيقية', f3: '✓ أدوات مجانية', f4: '✓ أسعار السوق الجزائري',
    includesTitle: 'شنو راه فيه',
    includes: ['7 تكوينات كاملة — مبتدئ → محترف','كل درس: الطريقة الصحيحة خطوة بخطوة','تمارين عملية مع نتائج حقيقية','أدوات مجانية','أسعار السوق الجزائري بالدينار','نصوص التواصل مع الزبائن','وصول مدى الحياة — التحديثات مشمولة'],
    already: 'راك شريت من قبل؟', enter: 'دخل رمز الدخول ديالك باش تبدا.', code: 'رمز الدخول...',
    access: 'ادخل للتكوين →', loading: 'كاين التحقق...', notBought: 'مازلتش شريت؟', whatsapp: '💬 اطلب عبر واتساب',
    errEmpty: 'دخل رمز الدخول.', errInvalid: 'الرمز غلط. راجع الشراء.', errUsed: 'هذا الرمز تستخدم من قبل.',
    stats: [{ n: '+35', l: 'درس مفصل' }, { n: '4', l: 'مستويات لكل مهارة' }, { n: '0 دج', l: 'باش تبدا' }],
    footer: 'DigitalSkills.dz — تكوين محترف الجزائر 🇩🇿',
    aBadge: '🇩🇿 أكاديمية المهارات الرقمية — الجزائر', aTitle: 'تعلم. تمرن.\nتربح.',
    aSubtitle: '7 مهارات، من الصفر للاحتراف. كل درس يقولك بالضبط كيفاش تدير.',
    aFeatures: ['خطوات واضحة وعملية','تمارين حقيقية','أدوات مجانية','أسعار السوق الجزائري'],
    aRec: '💡 الترتيب المنصوح: سوشيال ميديا → تصميم → مونتاج → ويب → SEO → بيانات → كتابة',
    startLearning: 'ابدا التعلم →', firstClient: 'أول زبون', earning: 'الأرباح', startWith: 'ابدا بـ',
    backSkills: 'المهارات →', goal: 'الهدف', lessons: 'دروس', back: 'رجع →', lesson: 'الدرس', of: 'من',
    howTo: 'كيفاش تدير — خطوة بخطوة', bestWay: 'أحسن طريقة باش تتعلم', exercise: 'تمرينك العملي',
    prevLesson: 'الدرس السابق →', nextLesson: '← الدرس الموالي', nextLevel: 'المستوى الموالي', complete: '👑 كملت التكوين!'
  },
  en: {
    badge: 'Complete Course — 7 Skills',
    title: 'Master Digital Skills That\nGenerate Income in Algeria',
    subtitle: '7 complete courses. Design, Social Media, Video, Web, SEO, Data, Copywriting.',
    f1: '✓ Step-by-step methods', f2: '✓ Real exercises', f3: '✓ Free tools only', f4: '✓ Algerian market rates',
    includesTitle: 'What you get',
    includes: ['7 complete courses — Beginner → Master','Every lesson: exact step-by-step method','Practical exercises with real deliverables','Free tools','Algerian market rates in DZD','Client communication scripts','Lifetime access — updates included'],
    already: 'Already purchased?', enter: 'Enter your access code to get started.', code: 'YOUR ACCESS CODE...',
    access: 'Access the Course →', loading: 'Verifying...', notBought: 'Haven\'t bought yet?', whatsapp: '💬 Order via WhatsApp',
    errEmpty: 'Please enter your access code.', errInvalid: 'Invalid code. Check your purchase.', errUsed: 'This code has already been used.',
    stats: [{ n: '35+', l: 'Detailed lessons' }, { n: '4', l: 'Levels per skill' }, { n: '0 DZD', l: 'To get started' }],
    footer: 'DigitalSkills.dz — Professional Training Algeria 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algeria', aTitle: 'Learn It. Practice It.\nGet Paid.',
    aSubtitle: '7 skills, beginner to master. Every lesson tells you exactly how to do it.',
    aFeatures: ['Step-by-step methods','Real exercises','Free tools only','Algerian market rates'],
    aRec: '💡 Recommended: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting',
    startLearning: 'Start Learning →', firstClient: 'First client', earning: 'Earning range', startWith: 'Start with',
    backSkills: '← Skills', goal: 'Goal', lessons: 'lessons', back: '← Back', lesson: 'Lesson', of: 'of',
    howTo: 'How To Do It — Step by Step', bestWay: 'The Best Way to Learn This', exercise: 'Your Practice Exercise',
    prevLesson: '← Previous Lesson', nextLesson: 'Next Lesson →', nextLevel: 'Next Level', complete: '👑 Track Complete!'
  }
};

// ===== SKILLS (7 SKILLS avec bgImage) =====
var SKILLS = [
  // SKILL 1: GRAPHIC DESIGN
  {
    id: 'design',
    icon: '🎨',
    color: '#7C3AED',
    accent: '#A78BFA',
    bg: 'linear-gradient(135deg, #0D0818 0%, #1A0A30 50%, #0D0818 100%)',
    bgImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
    earning: '5,000 – 80,000 DZD',
    firstClient: { fr: '3–4 semaines', ar: '3–4 أسابيع', en: '3–4 weeks' },
    startTool: 'Canva (canva.com)',
    title: { fr: 'Graphic Design', ar: 'التصميم الجرافيكي', en: 'Graphic Design' },
    subtitle: { fr: 'Communication Visuelle', ar: 'التواصل البصري', en: 'Visual Communication' },
    tagline: { fr: 'Transformez vos idées en visuels qui vendent', ar: 'حوّل أفكارك لتصاميم تبيع', en: 'Turn ideas into visuals that sell' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Apprendre les bases de Canva', ar: 'تعلم أساسيات Canva', en: 'Learn Canva basics' },
        lessons: [
          {
            id: 'd-b-1',
            title: { fr: 'Installer et utiliser Canva', ar: 'تنصيب واستخدام Canva', en: 'Install & Use Canva' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Allez sur canva.com','Créez un compte gratuit','Cliquez Créer un design','Choisissez Post Instagram','Utilisez Templates et Éléments'],
              ar: ['روح لـ canva.com','أنشئ حساب مجاني','اضغط إنشاء تصميم','اختار منشور Instagram','استخدم القوالب والعناصر'],
              en: ['Go to canva.com','Create a free account','Click Create a design','Choose Instagram Post','Use Templates & Elements']
            },
            method: { fr: 'Explorez Canva pendant 20 minutes.', ar: 'استكشف Canva لمدة 20 دقيقة.', en: 'Explore Canva for 20 minutes.' },
            exercise: { fr: 'Créez un post Instagram avec votre nom.', ar: 'أنشئ منشور Instagram باسمك.', en: 'Create an Instagram post with your name.' },
            tip: { fr: '💡 Canva Gratuit donne 250k+ templates.', ar: '💡 Canva المجاني يعطيك 250k+ قالب.', en: '💡 Canva Free gives 250k+ templates.' }
          }
        ]
      }
    ]
  },
  // SKILL 2: SOCIAL MEDIA MANAGEMENT
  {
    id: 'smm',
    icon: '📱',
    color: '#059669',
    accent: '#34D399',
    bg: 'linear-gradient(135deg, #021A12 0%, #063A24 50%, #021A12 100%)',
    bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    earning: '15,000 – 60,000 DZD/month',
    firstClient: { fr: '2–3 semaines', ar: '2–3 أسابيع', en: '2–3 weeks' },
    startTool: 'Meta Business Suite + Canva',
    title: { fr: 'Social Media Management', ar: 'إدارة السوشيال ميديا', en: 'Social Media Management' },
    subtitle: { fr: 'Marketing Digital', ar: 'التسويق الرقمي', en: 'Digital Marketing' },
    tagline: { fr: 'Aidez les entreprises à grandir et vendre en ligne', ar: 'ساعد المشاريع تكبر وتبيع أونلاين', en: 'Help businesses grow their audience and sell online' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre les algorithmes', ar: 'تفهم الخوارزميات', en: 'Understand algorithms' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un compte business', ar: 'إعداد حساب Business', en: 'Set up Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Instagram: Profil → Compte professionnel','Facebook: facebook.com/pages/create','Meta Business Suite: connectez Page + Instagram','WhatsApp Business: numéro professionnel'],
              ar: ['Instagram: بروفيل → حساب محترف','Facebook: facebook.com/pages/create','Meta Business Suite: اربط الصفحة + Instagram','WhatsApp Business: رقم احترافي'],
              en: ['Instagram: Profile → Professional account','Facebook: facebook.com/pages/create','Meta Business Suite: connect Page + Instagram','WhatsApp Business: professional number']
            },
            method: { fr: 'Créez un compte test Instagram.', ar: 'أنشئ حساب Instagram تجريبي.', en: 'Create a test Instagram account.' },
            exercise: { fr: 'Configurez un profil business complet.', ar: 'اعدد بروفيل business كامل.', en: 'Set up a complete business profile.' },
            tip: { fr: '💡 Utilisez linktr.ee pour plusieurs liens.', ar: '💡 استخدم linktr.ee لعدة روابط.', en: '💡 Use linktr.ee for multiple links.' }
          }
        ]
      }
    ]
  },
  // SKILL 3: VIDEO EDITING
  {
    id: 'video',
    icon: '🎬',
    color: '#DC2626',
    accent: '#F87171',
    bg: 'linear-gradient(135deg, #1A0303 0%, #3A0A0A 50%, #1A0303 100%)',
    bgImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
    earning: '8,000 – 80,000 DZD/project',
    firstClient: { fr: '4–6 semaines', ar: '4–6 أسابيع', en: '4–6 weeks' },
    startTool: 'CapCut (free) → DaVinci Resolve (free)',
    title: { fr: 'Montage Vidéo', ar: 'مونتاج الفيديو', en: 'Video Editing' },
    subtitle: { fr: 'Création de Contenu', ar: 'إنشاء المحتوى', en: 'Content Creation' },
    tagline: { fr: 'La compétence créative la plus demandée', ar: 'أكثر مهارة إبداعية مطلوبة', en: 'The most in-demand creative skill' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Monter votre première vidéo avec CapCut', ar: 'تعديل أول فيديو باستخدام CapCut', en: 'Edit your first video with CapCut' },
        lessons: [
          {
            id: 'v-b-1',
            title: { fr: 'Installer CapCut et monter votre première vidéo', ar: 'تنصيب CapCut وتعديل أول فيديو', en: 'Install CapCut and edit your first video' },
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Téléchargez CapCut (gratuit)','Ouvrez → + → sélectionnez vidéos','Timeline: clips = blocs','Couper: Split → Delete','Musique: Audio → Sons','Exporter: 1080p 30fps'],
              ar: ['حمّل CapCut (مجاني)','افتح → + → اختار فيديوهات','الجدول الزمني: كليبات','القطع: Split → حذف','الموسيقى: Audio → أصوات','التصدير: 1080p 30fps'],
              en: ['Download CapCut (free)','Open → + → select videos','Timeline: clips = blocks','Cut: Split → Delete','Music: Audio → Sounds','Export: 1080p 30fps']
            },
            method: { fr: 'Filmez 10 clips courts et montez-les.', ar: 'صوّر 10 كليبات قصيرة وعدّلها.', en: 'Film 10 short clips and edit them.' },
            exercise: { fr: 'Vidéo 60 secondes avec musique et texte.', ar: 'فيديو 60 ثانية مع موسيقى ونص.', en: '60-second video with music and text.' },
            tip: { fr: '💡 Chaque clip: 1.5-4 secondes max.', ar: '💡 كل كليب: 1.5-4 ثوانٍ كحد أقصى.', en: '💡 Each clip: 1.5-4 seconds max.' }
          }
        ]
      }
    ]
  },
  // SKILL 4: WEB DEVELOPMENT
  {
    id: 'webdev',
    icon: '💻',
    color: '#F59E0B',
    accent: '#FCD34D',
    bg: 'linear-gradient(135deg, #1A1200 0%, #3A2800 50%, #1A1200 100%)',
    bgImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    earning: '30,000 – 150,000 DZD/project',
    firstClient: { fr: '4–8 semaines', ar: '4–8 أسابيع', en: '4–8 weeks' },
    startTool: 'VS Code + HTML/CSS/JS',
    title: { fr: 'Web Development', ar: 'تطوير الويب', en: 'Web Development' },
    subtitle: { fr: 'Développement Front-End', ar: 'تطوير الواجهات', en: 'Front-End Development' },
    tagline: { fr: 'Créez des sites web professionnels qui génèrent des revenus', ar: 'أنشئ مواقع ويب احترافية تدرّ عليك', en: 'Build professional websites that generate income' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Comprendre le HTML, CSS et créer votre première page web', ar: 'تفهم HTML و CSS وتصنع أول صفحة ويب', en: 'Understand HTML & CSS and create your first web page' },
        lessons: [
          {
            id: 'w-b-1',
            title: { fr: 'HTML - La structure de base', ar: 'HTML - الهيكل الأساسي', en: 'HTML - The basic structure' },
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['VS Code → index.html','! + Tab = structure de base','DOCTYPE html = déclaration','html = racine','head = métadonnées','body = contenu visible'],
              ar: ['VS Code → index.html','! + Tab = هيكل أساسي','DOCTYPE html = تصريح','html = الجذر','head = بيانات وصفية','body = المحتوى الظاهر'],
              en: ['VS Code → index.html','! + Tab = basic structure','DOCTYPE html = declaration','html = root','head = metadata','body = visible content']
            },
            method: { fr: 'Créez 5 pages HTML différentes.', ar: 'أنشئ 5 صفحات HTML مختلفة.', en: 'Create 5 different HTML pages.' },
            exercise: { fr: 'Page "À propos de moi" avec titre, paragraphe, image, lien.', ar: 'صفحة "عني" مع عنوان، فقرة، صورة، رابط.', en: '"About Me" page with heading, paragraph, image, link.' },
            tip: { fr: '💡 Utilisez Emmet pour générer du HTML rapidement.', ar: '💡 استخدم Emmet لتوليد HTML بسرعة.', en: '💡 Use Emmet to generate HTML quickly.' }
          }
        ]
      }
    ]
  },
  // SKILL 5: SEO
  {
    id: 'seo',
    icon: '📈',
    color: '#3B82F6',
    accent: '#60A5FA',
    bg: 'linear-gradient(135deg, #0A1428 0%, #1A2A50 50%, #0A1428 100%)',
    bgImage: 'https://images.unsplash.com/photo-1432889821006-ca37c5ce1bfa?w=600&q=80',
    earning: '20,000 – 100,000 DZD/month',
    firstClient: { fr: '2–4 semaines', ar: '2–4 أسابيع', en: '2–4 weeks' },
    startTool: 'Google Analytics + Search Console',
    title: { fr: 'SEO & Marketing Digital', ar: 'SEO والتسويق الرقمي', en: 'SEO & Digital Marketing' },
    subtitle: { fr: 'Référencement Naturel', ar: 'تحسين محركات البحث', en: 'Search Engine Optimization' },
    tagline: { fr: 'Faites apparaître les sites en première page de Google', ar: 'خلّي المواقع تظهر في الصفحة الأولى من Google', en: 'Make websites appear on Google\'s first page' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre le SEO et les mots-clés', ar: 'تفهم SEO والكلمات المفتاحية', en: 'Understand SEO and keywords' },
        lessons: [
          {
            id: 'seo-b-1',
            title: { fr: 'Introduction au SEO', ar: 'مقدمة في SEO', en: 'Introduction to SEO' },
            image: 'https://images.unsplash.com/photo-1432889821006-ca37c5ce1bfa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['SEO = Search Engine Optimization','3 piliers: technique, contenu, backlinks','Mots-clés: ce que les gens tapent','On-Page SEO: title, meta, H1, URL','Off-Page SEO: backlinks, autorité'],
              ar: ['SEO = تحسين محركات البحث','3 ركائز: تقني، محتوى، روابط','الكلمات المفتاحية: ما يكتبه الناس','On-Page SEO: عنوان، meta، H1، رابط','Off-Page SEO: روابط خلفية، سلطة'],
              en: ['SEO = Search Engine Optimization','3 pillars: technical, content, backlinks','Keywords: what people type','On-Page SEO: title, meta, H1, URL','Off-Page SEO: backlinks, authority']
            },
            method: { fr: 'Recherchez 3 mots-clés sur Google.', ar: 'ابحث عن 3 كلمات مفتاحية في Google.', en: 'Search for 3 keywords on Google.' },
            exercise: { fr: 'Listez 20 mots-clés pour une entreprise.', ar: 'اكتب 20 كلمة مفتاحية لمشروع.', en: 'List 20 keywords for a business.' },
            tip: { fr: '💡 Utilisez Google Keyword Planner.', ar: '💡 استخدم Google Keyword Planner.', en: '💡 Use Google Keyword Planner.' }
          }
        ]
      }
    ]
  },
  // SKILL 6: DATA ANALYSIS
  {
    id: 'data',
    icon: '📊',
    color: '#8B5CF6',
    accent: '#A78BFA',
    bg: 'linear-gradient(135deg, #0D0818 0%, #1A1040 50%, #0D0818 100%)',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    earning: '25,000 – 90,000 DZD/project',
    firstClient: { fr: '3–5 semaines', ar: '3–5 أسابيع', en: '3–5 weeks' },
    startTool: 'Excel + Power BI (free)',
    title: { fr: 'Data Analysis', ar: 'تحليل البيانات', en: 'Data Analysis' },
    subtitle: { fr: 'Analyse de Données', ar: 'تحليل البيانات', en: 'Data Analytics' },
    tagline: { fr: 'Transformez les données en décisions qui rapportent', ar: 'حوّل البيانات لقرارات تدرّ عليك', en: 'Turn data into decisions that generate revenue' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre Excel', ar: 'تفهم Excel', en: 'Understand Excel' },
        lessons: [
          {
            id: 'data-b-1',
            title: { fr: 'Excel pour Débutants', ar: 'Excel للمبتدئين', en: 'Excel for Beginners' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Ouvrez Excel → Nouveau classeur','Colonnes: A, B, C... Lignes: 1, 2, 3...','Somme automatique pour additionner','Filtres: sélectionnez → Filtrer','Graphiques: Insérer → Graphique','Formules: =SOMME, =MOYENNE'],
              ar: ['افتح Excel → مصنف جديد','الأعمدة: A, B, C... الصفوف: 1, 2, 3...','الجمع التلقائي','تصفية: اختر → تصفية','الرسوم: إدراج → رسم بياني','الصيغ: =SUM, =AVERAGE'],
              en: ['Open Excel → New Workbook','Columns: A, B, C... Rows: 1, 2, 3...','AutoSum to add','Filters: select → Filter','Charts: Insert → Chart','Formulas: =SUM, =AVERAGE']
            },
            method: { fr: 'Importez un jeu de données.', ar: 'استورد مجموعة بيانات.', en: 'Import a dataset.' },
            exercise: { fr: 'Tableau de ventes avec 10 produits.', ar: 'جدول مبيعات بـ10 منتجات.', en: 'Sales table with 10 products.' },
            tip: { fr: '💡 Utilisez Ctrl+C Ctrl+V Ctrl+Z.', ar: '💡 استخدم Ctrl+C Ctrl+V Ctrl+Z.', en: '💡 Use Ctrl+C Ctrl+V Ctrl+Z.' }
          }
        ]
      }
    ]
  },
  // SKILL 7: COPYWRITING
  {
    id: 'copy',
    icon: '✍️',
    color: '#EC4899',
    accent: '#F472B6',
    bg: 'linear-gradient(135deg, #1A0512 0%, #3A0A28 50%, #1A0512 100%)',
    bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
    earning: '10,000 – 50,000 DZD/project',
    firstClient: { fr: '1–2 semaines', ar: '1–2 أسابيع', en: '1–2 weeks' },
    startTool: 'Google Docs + Grammarly',
    title: { fr: 'Copywriting', ar: 'الكتابة الإعلانية', en: 'Copywriting' },
    subtitle: { fr: 'Rédaction Publicitaire', ar: 'الكتابة التسويقية', en: 'Copywriting' },
    tagline: { fr: 'Des mots qui vendent, convertissent et persuadent', ar: 'كلمات تبيع وتحوّل وتقنع', en: 'Words that sell, convert and persuade' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–2', ar: 'الأسابيع 1–2', en: 'Weeks 1–2' },
        goal: { fr: 'Maîtriser les bases', ar: 'إتقان الأساسيات', en: 'Master basics' },
        lessons: [
          {
            id: 'copy-b-1',
            title: { fr: 'Les Fondamentaux du Copywriting', ar: 'أساسيات الكتابة الإعلانية', en: 'Copywriting Fundamentals' },
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['AIDA: Attention, Intérêt, Désir, Action','Headlines: 80% des gens lisent les titres','Avantages vs Caractéristiques','Call to Action: dites exactement quoi faire','Storytelling: les histoires vendent mieux'],
              ar: ['AIDA: الانتباه، الاهتمام، الرغبة، الفعل','العناوين: 80% يقرأون العناوين','الفوائد vs الميزات','الدعوة للفعل: قل بالضبط ما يجب فعله','سرد القصص: القصص تبيع أفضل'],
              en: ['AIDA: Attention, Interest, Desire, Action','Headlines: 80% read headlines','Benefits vs Features','Call to Action: tell exactly what to do','Storytelling: stories sell better']
            },
            method: { fr: 'Analysez 10 publicités.', ar: 'حلّل 10 إعلانات.', en: 'Analyze 10 ads.' },
            exercise: { fr: 'Écrivez un titre accrocheur.', ar: 'اكتب عنواناً جذاباً.', en: 'Write a catchy headline.' },
            tip: { fr: '💡 Utilisez des chiffres: "5 secrets"', ar: '💡 استخدم الأرقام: "5 أسرار"', en: '💡 Use numbers: "5 secrets"' }
          }
        ]
      }
    ]
  }
];