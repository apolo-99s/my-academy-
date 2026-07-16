// ============================================================
// DATA.JS - 10 SKILLS COMPLETS AVEC CHAR7
// ============================================================

var CODES = ['DSA2026','STUDENT01','VIP2026','DZSKILL2025','ATLAS-PRO','LEARN-DZ-01','LEARN-DZ-02','LEARN-DZ-03','ACADEMY-VIP','FORMATION01','FORMATION02'];

var LS = {
  Beginner: { bg: '#052E16', border: '#16A34A', text: '#4ADE80', badge: '🌱' },
  Intermediate: { bg: '#1E3A5F', border: '#2563EB', text: '#60A5FA', badge: '⚡' },
  Advanced: { bg: '#450A0A', border: '#DC2626', text: '#F87171', badge: '🔥' },
  Master: { bg: '#431407', border: '#EA580C', text: '#FB923C', badge: '👑' }
};

var T = {
  fr: {
    badge: 'Formation Complète — 10 Skills',
    title: 'Maîtrisez les Compétences\nDigitales qui Paient en Algérie',
    subtitle: '10 formations complètes. Graphisme, Social Media, Vidéo, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding.',
    f1: '✓ Méthodes étape par étape',
    f2: '✓ Exercices réels',
    f3: '✓ Outils gratuits',
    f4: '✓ Tarifs marché algérien',
    includesTitle: 'Ce que vous obtenez',
    includes: [
      '10 formations complètes — Beginner → Master',
      'Chaque leçon: méthode exacte étape par étape',
      'Exercices pratiques avec livrables concrets',
      'Outils gratuits',
      'Prix du marché algérien en DZD',
      'Scripts de communication client',
      'Accès à vie — mises à jour incluses'
    ],
    already: 'Vous avez déjà acheté?',
    enter: 'Entrez votre code d\'accès pour commencer.',
    code: 'VOTRE CODE D\'ACCÈS...',
    access: 'Accéder à la Formation →',
    loading: 'Vérification...',
    notBought: 'Pas encore acheté?',
    whatsapp: '💬 Commander via WhatsApp',
    errEmpty: 'Entrez votre code d\'accès.',
    errInvalid: 'Code invalide. Vérifiez votre achat.',
    errUsed: 'Ce code a déjà été utilisé.',
    stats: [
      { n: '50+', l: 'Leçons détaillées' },
      { n: '4', l: 'Niveaux par skill' },
      { n: '0 DZD', l: 'Pour commencer' }
    ],
    footer: 'DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algérie',
    aTitle: 'Apprenez. Pratiquez.\nSoyez Payé.',
    aSubtitle: '10 skills, du débutant au maître. Chaque leçon vous dit exactement comment faire.',
    aFeatures: [
      'Méthodes étape par étape',
      'Exercices réels',
      'Outils gratuits',
      'Tarifs marché algérien'
    ],
    aRec: '💡 Ordre recommandé: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding',
    startLearning: 'Commencer →',
    firstClient: 'Premier client',
    earning: 'Revenus',
    startWith: 'Commencer avec',
    backSkills: '← Skills',
    goal: 'Objectif',
    lessons: 'leçons',
    back: '← Retour',
    lesson: 'Leçon',
    of: 'sur',
    howTo: 'Comment Faire — Étape par Étape',
    bestWay: 'La Meilleure Façon d\'Apprendre',
    exercise: 'Votre Exercice Pratique',
    prevLesson: '← Leçon Précédente',
    nextLesson: 'Leçon Suivante →',
    nextLevel: 'Niveau Suivant',
    complete: '👑 Formation Terminée!'
  },
  ar: {
    badge: 'تكوين كامل — 10 مهارات',
    title: 'تعلم المهارات الرقمية\nاللي تدر فلوس في الجزائر',
    subtitle: '10 تكوينات كاملة. تصميم، سوشيال ميديا، مونتاج، ويب، SEO، بيانات، كتابة، UI/UX، أتمتة، برمجة بالذكاء الاصطناعي.',
    f1: '✓ خطوات واضحة وعملية',
    f2: '✓ تمارين حقيقية',
    f3: '✓ أدوات مجانية',
    f4: '✓ أسعار السوق الجزائري',
    includesTitle: 'شنو راه فيه',
    includes: [
      '10 تكوينات كاملة — مبتدئ → محترف',
      'كل درس: الطريقة الصحيحة خطوة بخطوة',
      'تمارين عملية مع نتائج حقيقية',
      'أدوات مجانية',
      'أسعار السوق الجزائري بالدينار',
      'نصوص التواصل مع الزبائن',
      'وصول مدى الحياة — التحديثات مشمولة'
    ],
    already: 'راك شريت من قبل؟',
    enter: 'دخل رمز الدخول ديالك باش تبدا.',
    code: 'رمز الدخول...',
    access: 'ادخل للتكوين →',
    loading: 'كاين التحقق...',
    notBought: 'مازلتش شريت؟',
    whatsapp: '💬 اطلب عبر واتساب',
    errEmpty: 'دخل رمز الدخول.',
    errInvalid: 'الرمز غلط. راجع الشراء.',
    errUsed: 'هذا الرمز تستخدم من قبل.',
    stats: [
      { n: '+50', l: 'درس مفصل' },
      { n: '4', l: 'مستويات لكل مهارة' },
      { n: '0 دج', l: 'باش تبدا' }
    ],
    footer: 'DigitalSkills.dz — تكوين محترف الجزائر 🇩🇿',
    aBadge: '🇩🇿 أكاديمية المهارات الرقمية — الجزائر',
    aTitle: 'تعلم. تمرن.\nتربح.',
    aSubtitle: '10 مهارات، من الصفر للاحتراف. كل درس يقولك بالضبط كيفاش تدير.',
    aFeatures: [
      'خطوات واضحة وعملية',
      'تمارين حقيقية',
      'أدوات مجانية',
      'أسعار السوق الجزائري'
    ],
    aRec: '💡 الترتيب المنصوح: سوشيال ميديا → تصميم → مونتاج → ويب → SEO → بيانات → كتابة → UI/UX → أتمتة → برمجة بالذكاء الاصطناعي',
    startLearning: 'ابدا التعلم →',
    firstClient: 'أول زبون',
    earning: 'الأرباح',
    startWith: 'ابدا بـ',
    backSkills: 'المهارات →',
    goal: 'الهدف',
    lessons: 'دروس',
    back: 'رجع →',
    lesson: 'الدرس',
    of: 'من',
    howTo: 'كيفاش تدير — خطوة بخطوة',
    bestWay: 'أحسن طريقة باش تتعلم',
    exercise: 'تمرينك العملي',
    prevLesson: 'الدرس السابق →',
    nextLesson: '← الدرس الموالي',
    nextLevel: 'المستوى الموالي',
    complete: '👑 كملت التكوين!'
  },
  en: {
    badge: 'Complete Course — 10 Skills',
    title: 'Master Digital Skills That\nGenerate Income in Algeria',
    subtitle: '10 complete courses. Design, Social Media, Video, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding.',
    f1: '✓ Step-by-step methods',
    f2: '✓ Real exercises',
    f3: '✓ Free tools only',
    f4: '✓ Algerian market rates',
    includesTitle: 'What you get',
    includes: [
      '10 complete courses — Beginner → Master',
      'Every lesson: exact step-by-step method',
      'Practical exercises with real deliverables',
      'Free tools',
      'Algerian market rates in DZD',
      'Client communication scripts',
      'Lifetime access — updates included'
    ],
    already: 'Already purchased?',
    enter: 'Enter your access code to get started.',
    code: 'YOUR ACCESS CODE...',
    access: 'Access the Course →',
    loading: 'Verifying...',
    notBought: 'Haven\'t bought yet?',
    whatsapp: '💬 Order via WhatsApp',
    errEmpty: 'Please enter your access code.',
    errInvalid: 'Invalid code. Check your purchase.',
    errUsed: 'This code has already been used.',
    stats: [
      { n: '50+', l: 'Detailed lessons' },
      { n: '4', l: 'Levels per skill' },
      { n: '0 DZD', l: 'To get started' }
    ],
    footer: 'DigitalSkills.dz — Professional Training Algeria 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algeria',
    aTitle: 'Learn It. Practice It.\nGet Paid.',
    aSubtitle: '10 skills, beginner to master. Every lesson tells you exactly how to do it.',
    aFeatures: [
      'Step-by-step methods',
      'Real exercises',
      'Free tools only',
      'Algerian market rates'
    ],
    aRec: '💡 Recommended: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding',
    startLearning: 'Start Learning →',
    firstClient: 'First client',
    earning: 'Earning range',
    startWith: 'Start with',
    backSkills: '← Skills',
    goal: 'Goal',
    lessons: 'lessons',
    back: '← Back',
    lesson: 'Lesson',
    of: 'of',
    howTo: 'How To Do It — Step by Step',
    bestWay: 'The Best Way to Learn This',
    exercise: 'Your Practice Exercise',
    prevLesson: '← Previous Lesson',
    nextLesson: 'Next Lesson →',
    nextLevel: 'Next Level',
    complete: '👑 Track Complete!'
  }
};

// ============================================================
// SKILLS (10 SKILLS)
// ============================================================
var SKILLS = [
  // ============================================================
  // SKILL 1: GRAPHIC DESIGN
  // ============================================================
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
      // BEGINNER
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
          },
          {
            id: 'd-b-2',
            title: { fr: 'Les 4 Règles du Design CARP', ar: '4 قواعد التصميم CARP', en: 'The 4 Design Rules CARP' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['CONTRASTE: Rendez la chose la plus importante différente.','ALIGNEMENT: Rien placé au hasard.','RÉPÉTITION: Même style pour éléments similaires.','PROXIMITÉ: Groupez ce qui va ensemble.'],
              ar: ['التباين: خلّي الحاجة المهمة مختلفة.','المحاذاة: ما كاين والو موضوع بالعشوائية.','التكرار: نفس الستايل للعناصر المتشابهة.','القرب: جمّع الأشياء اللي تمشي مع بعض.'],
              en: ['CONTRAST: Make important things different.','ALIGNMENT: Nothing placed randomly.','REPETITION: Same style for similar elements.','PROXIMITY: Group things that belong together.']
            },
            method: { fr: 'Brisez les 4 règles puis recréez correctement.', ar: 'اكسر الـ4 قواعد ثم أعد إنشاؤه صح.', en: 'Break all 4 rules then recreate correctly.' },
            exercise: { fr: 'Designez une carte de visite 2 fois: une mauvaise, une bonne.', ar: 'صمّم بطاقة أعمال مرتين: سيئة وجيدة.', en: 'Design a business card twice: bad and good.' },
            tip: { fr: '💡 Les pros brisent les règles APRÈS les avoir maîtrisées.', ar: '💡 المحترفون يكسرون القواعد بعد ما يتقنوها.', en: '💡 Professionals break rules AFTER mastering them.' }
          },
          {
            id: 'd-b-3',
            title: { fr: 'Théorie des Couleurs', ar: 'نظرية الألوان', en: 'Color Theory' },
            image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80',
            layout: 'left',
            steps: {
              fr: ['coolors.co — génère des palettes harmonieuses.','Émotions: Rouge=urgence, Bleu=confiance, Vert=nature, Jaune=bonheur, Noir=luxe.','Règle 60-30-10: Principal 60%, Secondaire 30%, Accent 10%.','Extraire couleurs photo: Canva → image → pipette.','Maximum 3 couleurs par design.'],
              ar: ['coolors.co — يولّد باليتات منسجمة.','المشاعر: أحمر=إلحاح، أزرق=ثقة، أخضر=طبيعة، أصفر=سعادة، أسود=فخامة.','قاعدة 60-30-10: رئيسي 60%، ثانوي 30%، بارز 10%.','استخراج ألوان: Canva → صورة → قطّارة.','أقصاه 3 ألوان في تصميم.'],
              en: ['coolors.co — generates harmonious palettes.','Emotions: Red=urgency, Blue=trust, Green=nature, Yellow=happiness, Black=luxury.','60-30-10 rule: Main 60%, Secondary 30%, Accent 10%.','Extract colors: Canva → image → eyedropper.','Maximum 3 colors per design.']
            },
            method: { fr: 'Analysez les couleurs de 5 marques algériennes.', ar: 'حلل ألوان 5 علامات جزائرية.', en: 'Analyze the colors of 5 Algerian brands.' },
            exercise: { fr: 'Générez 5 palettes sur coolors.co.', ar: 'ولّد 5 باليتات على coolors.co.', en: 'Generate 5 palettes on coolors.co.' },
            tip: { fr: '💡 En cas de doute: texte noir sur blanc + UNE couleur accent.', ar: '💡 في حالة الشك: نص أسود على أبيض + لون accent واحد.', en: '💡 When in doubt: black text on white + ONE accent color.' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
        goal: { fr: 'Passer de Canva à Photoshop', ar: 'الانتقال من Canva لـ Photoshop', en: 'Move from Canva to Photoshop' },
        lessons: [
          {
            id: 'd-i-1',
            title: { fr: 'Photopea — Photoshop Gratuit', ar: 'Photopea — بديل Photoshop المجاني', en: 'Photopea — Free Photoshop Alternative' },
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
            layout: 'left',
            steps: {
              fr: ['photopea.com 99% identique à Photoshop','Interface: Gauche=Outils. Droite=Calques.','CALQUES: chaque élément sur son propre calque','Supprimer fond: Baguette magique → Delete','Exporter: PNG ou JPEG'],
              ar: ['photopea.com شبه Photoshop بـ99%','الواجهة: يسار=أدوات. يمين=طبقات.','الطبقات: كل عنصر على طبقته الخاصة','إزالة خلفية: عصا سحرية → Delete','التصدير: PNG أو JPEG'],
              en: ['photopea.com 99% identical to Photoshop','Interface: Left=Tools. Right=Layers.','LAYERS: each element on its own layer','Remove background: Magic Wand → Delete','Export: PNG or JPEG']
            },
            method: { fr: 'Supprimez l\'arrière-plan d\'une photo produit.', ar: 'ازل خلفية صورة منتج.', en: 'Remove background from a product photo.' },
            exercise: { fr: 'Photo produit algérien: fond blanc + prix + nom.', ar: 'صورة منتج جزائري: خلفية بيضاء + سعر + اسم.', en: 'Algerian product photo: white background + price + name.' },
            tip: { fr: '💡 Ombre: clic droit calque → Fusion → Ombre portée', ar: '💡 الظل: انقر يمين الطبقة → خيارات المزج → ظل مسقط', en: '💡 Shadow: right-click layer → Blending Options → Drop Shadow' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 11–20', ar: 'الأسابيع 11–20', en: 'Weeks 11–20' },
        goal: { fr: 'Maîtriser Illustrator', ar: 'إتقان Illustrator', en: 'Master Illustrator' },
        lessons: [
          {
            id: 'd-a-1',
            title: { fr: 'Adobe Illustrator Vecteurs', ar: 'Adobe Illustrator الفيكتور', en: 'Adobe Illustrator Vectors' },
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['Inkscape.org 100% gratuit','Vecteurs: logo adaptable à toutes tailles','Outil Plume P: cliquez=angle, glissez=courbe','Pathfinder: Unir, Soustraction, Intersection'],
              ar: ['Inkscape.org مجاني 100%','الفيكتور: شعار يتكيف مع كل الأحجام','أداة القلم P: اضغط=زاوية، اسحب=منحنى','Pathfinder: توحيد، طرح، تقاطع'],
              en: ['Inkscape.org 100% free','Vectors: logo scales to any size','Pen Tool P: click=angle, drag=curve','Pathfinder: Unite, Subtract, Intersect']
            },
            method: { fr: 'Tracez un logo avec l\'outil Plume uniquement.', ar: 'تتبّع شعاراً بأداة القلم فقط.', en: 'Trace a logo with the Pen Tool only.' },
            exercise: { fr: 'Recréez logo Ooredoo ou Djezzy en vectoriel.', ar: 'أعد إنشاء شعار Ooredoo أو Djezzy كفيكتور.', en: 'Recreate Ooredoo or Djezzy logo as vector.' },
            tip: { fr: '💡 Client avec logo JPEG: proposez de le vectoriser. 3000-8000 DZD.', ar: '💡 زبون بشعار JPEG: اقترح تحويله لفيكتور. 3000-8000 دج.', en: '💡 Client with JPEG logo: offer to vectorize it. 3000-8000 DZD.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une agence de design', ar: 'إدارة أجنسي تصميم', en: 'Run a design agency' },
        lessons: [
          {
            id: 'd-m-1',
            title: { fr: 'De Freelance à Agence', ar: 'من فريلانس لأجنسي', en: 'From Freelancer to Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Travail constant > capacité seul = bon moment','Collaborateur: payé par projet 40-50%','Forfaits: Starter 25K, Croissance 55K, Premium 100K+ DZD','Ciblez les agences publicitaires'],
              ar: ['عمل مستمر > طاقتك وحدك = الوقت المناسب','متعاون: يدفع بالمشروع 40-50%','الباقات: Starter 25K، نمو 55K، Premium 100K+ دج','استهدف وكالات الإعلان'],
              en: ['Constant work > your capacity = right time','Collaborator: paid per project 40-50%','Packages: Starter 25K, Growth 55K, Premium 100K+ DZD','Target advertising agencies']
            },
            method: { fr: 'Fake pitch: refaites logo + 3 posts gratuitement.', ar: 'عرض وهمي: أعد تصميم شعار + 3 منشورات مجاناً.', en: 'Fake pitch: redo logo + 3 posts for free.' },
            exercise: { fr: 'Identifiez 3 entreprises avec design faible. Refonte pour 1.', ar: 'حدّد 3 مشاريع بتصميم ضعيف. إعادة تصميم لواحد.', en: 'Identify 3 businesses with weak design. Redesign for 1.' },
            tip: { fr: '💡 Spécialisez-vous dans UN secteur. Les spécialistes facturent plus.', ar: '💡 تخصّص في قطاع واحد. المتخصصون يشحنون أكثر.', en: '💡 Specialize in ONE sector. Specialists charge more.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 2: SOCIAL MEDIA MANAGEMENT
  // ============================================================
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
      // BEGINNER
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre les algorithmes', ar: 'تفهم الخوارزميات', en: 'Understand algorithms' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un Compte Business', ar: 'إعداد حساب Business', en: 'Set Up a Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Instagram: Profil → Compte professionnel → Business','Facebook: facebook.com/pages/create','Meta Business Suite: connectez Page + Instagram','WhatsApp Business: numéro professionnel'],
              ar: ['Instagram: بروفيل → حساب محترف → Business','Facebook: facebook.com/pages/create','Meta Business Suite: اربط الصفحة + Instagram','WhatsApp Business: رقم احترافي'],
              en: ['Instagram: Profile → Professional → Business','Facebook: facebook.com/pages/create','Meta Business Suite: connect Page + Instagram','WhatsApp Business: professional number']
            },
            method: { fr: 'Créez un compte test Instagram.', ar: 'أنشئ حساب Instagram تجريبي.', en: 'Create a test Instagram account.' },
            exercise: { fr: 'Configurez un profil business complet.', ar: 'اعدد بروفيل business كامل.', en: 'Set up a complete business profile.' },
            tip: { fr: '💡 Utilisez linktr.ee pour plusieurs liens.', ar: '💡 استخدم linktr.ee لعدة روابط.', en: '💡 Use linktr.ee for multiple links.' }
          },
          {
            id: 's-b-2',
            title: { fr: 'Comment Fonctionne Algorithme Instagram', ar: 'كيفاش تشتغل خوارزمية Instagram', en: 'How the Instagram Algorithm Works' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['5 signaux: Sauvegardes, Partages, Commentaires, Likes, Temps','Sauvegardes = le plus puissant','Questions en fin de légende = plus de commentaires','Meilleures heures: 12h-13h30, 18h-20h, 21h-23h'],
              ar: ['5 إشارات: الحفظ، المشاركة، التعليقات، الإعجابات، الوقت','الحفظ = الأقوى','أسئلة في نهاية التعليق = تعليقات أكثر','أفضل الأوقات: 12-13:30، 18-20، 21-23'],
              en: ['5 signals: Saves, Shares, Comments, Likes, Time','Saves = the strongest','Questions at end = more comments','Best times: 12pm-1:30pm, 6pm-8pm, 9pm-11pm']
            },
            method: { fr: 'Regardez 20 posts avec fort engagement.', ar: 'شوف 20 منشور بتفاعل عالٍ.', en: 'Look at 20 posts with high engagement.' },
            exercise: { fr: 'Publiez 3 posts: photo, carrousel, photo+question. Comparez.', ar: 'انشر 3 منشورات: صورة، كاروسيل، صورة+سؤال. قارن.', en: 'Post 3 posts: photo, carousel, photo+question. Compare.' },
            tip: { fr: '💡 Pas de liens externes dans la légende. Mettez-les en bio.', ar: '💡 لا تحط روابط خارجية في التعليق. حطهم في البروفيل.', en: '💡 No external links in caption. Put them in bio.' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–9', ar: 'الأسابيع 4–9', en: 'Weeks 4–9' },
        goal: { fr: 'Créer des Reels et lancer des pubs', ar: 'إنشاء Reels وإطلاق إعلانات', en: 'Create Reels and run ads' },
        lessons: [
          {
            id: 's-i-1',
            title: { fr: 'Créer un Reel qui Génère des Vues', ar: 'إنشاء Reel يحصل على مشاهدات', en: 'Create a Reel That Gets Views' },
            image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Règle 0.5s: premier frame stoppe le scroll','Structure: Accroche 0-2s → Setup 2-8s → Payoff 8-20s → CTA','Tournage: VERTICAL 9:16, caméra arrière','CapCut: Split, Texte, Auto Captions','Audio tendance: utilisez cet audio'],
              ar: ['قاعدة 0.5 ث: أول إطار يوقف التمرير','الهيكل: جذبة 0-2ث → إعداد 2-8ث → نتيجة 8-20ث → CTA','التصوير: عمودي 9:16، كاميرا خلفية','CapCut: قطع، نص، تعليقات تلقائية','الصوت الرائج: استخدم هذا الصوت'],
              en: ['0.5s rule: first frame stops the scroll','Structure: Hook 0-2s → Setup 2-8s → Payoff 8-20s → CTA','Filming: VERTICAL 9:16, back camera','CapCut: Split, Text, Auto Captions','Trending audio: use this audio']
            },
            method: { fr: 'Regardez Reels 20 minutes pour étudier.', ar: 'شاهد Reels 20 دقيقة للدراسة.', en: 'Watch Reels for 20 minutes to study.' },
            exercise: { fr: 'Filmez et éditez 3 Reels différents.', ar: 'صوّر وعدّل 3 Reels مختلفة.', en: 'Film and edit 3 different Reels.' },
            tip: { fr: '💡 Publiez à 19h heure algérienne.', ar: '💡 انشر الساعة 7 مساءً بتوقيت الجزائر.', en: '💡 Post at 7pm Algeria time.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 10–18', ar: 'الأسابيع 10–18', en: 'Weeks 10–18' },
        goal: { fr: 'Développer des stratégies complètes', ar: 'تطوير استراتيجيات كاملة', en: 'Develop full strategies' },
        lessons: [
          {
            id: 's-a-1',
            title: { fr: 'Document de Stratégie Social Media', ar: 'وثيقة استراتيجية سوشيال ميديا', en: 'Social Media Strategy Document' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Section 1: Audit','Section 2: Concurrents','Section 3: Persona','Section 4: Objectifs SMART','Section 5: Stratégie 90 jours'],
              ar: ['القسم 1: تدقيق','القسم 2: منافسون','القسم 3: شخصية','القسم 4: أهداف SMART','القسم 5: استراتيجية 90 يوماً'],
              en: ['Section 1: Audit','Section 2: Competitors','Section 3: Persona','Section 4: SMART Goals','Section 5: 90-day strategy']
            },
            method: { fr: 'Rédigez un document pour une vraie entreprise.', ar: 'اكتب وثيقة لمشروع حقيقي.', en: 'Write a document for a real business.' },
            exercise: { fr: 'Document complet min 8 pages PDF Canva.', ar: 'وثيقة كاملة 8 صفحات PDF Canva.', en: 'Complete document min 8 pages Canva PDF.' },
            tip: { fr: '💡 Ne dites jamais "je pense". Dites "les données montrent".', ar: '💡 لا تقل "أعتقد". قل "البيانات تُظهر".', en: '💡 Never say "I think". Say "the data shows".' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 5+', ar: 'الشهر 5+', en: 'Month 5+' },
        goal: { fr: 'Construire une agence SMM', ar: 'بناء أجنسي SMM', en: 'Build an SMM agency' },
        lessons: [
          {
            id: 's-m-1',
            title: { fr: 'Construire une Agence SMM', ar: 'بناء أجنسي SMM', en: 'Build an SMM Agency' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Mindset: freelance vend son temps, agence vend des résultats','Garantie: livrez des métriques spécifiques','Premier membre: Community Manager 3-4h/jour','Tarification: Starter 15K, Croissance 35K, Premium 65K+ DZD'],
              ar: ['العقلية: فريلانسر يبيع وقته، أجنسي يبيع النتائج','الضمان: سلم مقاييس محددة','أول عضو: مدير مجتمع 3-4 ساعات/يوم','التسعير: Starter 15K، نمو 35K، Premium 65K+ دج'],
              en: ['Mindset: freelancer sells time, agency sells results','Guarantee: deliver specific metrics','First member: Community Manager 3-4h/day','Pricing: Starter 15K, Growth 35K, Premium 65K+ DZD']
            },
            method: { fr: 'Documentez UNE histoire de succès.', ar: 'وثّق قصة نجاح واحدة.', en: 'Document ONE success story.' },
            exercise: { fr: 'Modèle affaires sur 1 page.', ar: 'نموذج عمل في صفحة واحدة.', en: 'Business model on 1 page.' },
            tip: { fr: '💡 1 client → résultats → 1 référral → répétez.', ar: '💡 زبون 1 → نتائج → إحالة 1 → كرّر.', en: '💡 1 client → results → 1 referral → repeat.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 3: VIDEO EDITING
  // ============================================================
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
      // BEGINNER
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
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–11', ar: 'الأسابيع 5–11', en: 'Weeks 5–11' },
        goal: { fr: 'Apprendre DaVinci Resolve', ar: 'تعلم DaVinci Resolve', en: 'Learn DaVinci Resolve' },
        lessons: [
          {
            id: 'v-i-1',
            title: { fr: 'DaVinci Resolve - L\'Outil Pro Gratuit', ar: 'DaVinci Resolve - الأداة الاحترافية المجانية', en: 'DaVinci Resolve - Professional Free Tool' },
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['blackmagicdesign.com → DaVinci Resolve gratuit','Configuration: 25fps 1920x1080','5 pages: Cut, Edit, Fusion, Color, Fairlight','Importer: Fichier → Importer → Media Pool','Montage: Lame B=couper, Sélection A=déplacer','Exporter: Deliver → YouTube ou H.264'],
              ar: ['blackmagicdesign.com → DaVinci Resolve مجاني','الإعداد: 25fps 1920x1080','5 صفحات: Cut, Edit, Fusion, Color, Fairlight','الاستيراد: ملف → استيراد → Media Pool','المونتاج: شفرة B=قطع، تحديد A=تحريك','التصدير: Deliver → YouTube أو H.264'],
              en: ['blackmagicdesign.com → DaVinci Resolve free','Setup: 25fps 1920x1080','5 pages: Cut, Edit, Fusion, Color, Fairlight','Import: File → Import → Media Pool','Editing: Blade B=cut, Selection A=move','Export: Deliver → YouTube or H.264']
            },
            method: { fr: 'Importez 5 minutes de métrage et coupez les moments sans intérêt.', ar: 'استورد 5 دقائق من اللقطات واقطع اللحظات غير المهمة.', en: 'Import 5 minutes of footage and cut uninteresting moments.' },
            exercise: { fr: 'Montez une vidéo de 3 minutes avec DaVinci Resolve.', ar: 'عدّل فيديو 3 دقائق باستخدام DaVinci Resolve.', en: 'Edit a 3-minute video with DaVinci Resolve.' },
            tip: { fr: '💡 Raccourci: I=point IN, O=point OUT, F9=ajouter à la timeline.', ar: '💡 اختصار: I=نقطة البداية, O=نقطة النهاية, F9=أضف للجدول.', en: '💡 Shortcut: I=IN point, O=OUT point, F9=add to timeline.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 12–20', ar: 'الأسابيع 12–20', en: 'Weeks 12–20' },
        goal: { fr: 'Maîtriser l\'étalonnage et les tarifs premium', ar: 'إتقان تصحيح الألوان والأسعار premium', en: 'Master color grading and premium rates' },
        lessons: [
          {
            id: 'v-a-1',
            title: { fr: 'Maîtriser l\'Étalonnage dans DaVinci Resolve', ar: 'إتقان تصحيح الألوان في DaVinci Resolve', en: 'Master Color Grading in DaVinci Resolve' },
            image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Page Color: graphe de noeuds','3 oscilloscopes: Waveform, Parade, Vectorscope','Roues primaires: Lift, Gamma, Gain','Outil Qualificateur: isole UNE couleur','Correspondance: Capturer image fixe → Appliquer grade','LUTs: appliquez à 30-70% opacité'],
              ar: ['صفحة Color: رسم العقد','3 أجهزة قياس: Waveform, Parade, Vectorscope','العجلات الأساسية: Lift, Gamma, Gain','أداة المؤهّل: يعزل لون واحد','المطابقة: التقاط صورة ثابتة → تطبيق الgrade','LUTs: طبّق بشفافية 30-70%'],
              en: ['Color page: node graph','3 scopes: Waveform, Parade, Vectorscope','Primary wheels: Lift, Gamma, Gain','Qualifier tool: isolates ONE color','Matching: Grab Still → Apply Grade','LUTs: apply at 30-70% opacity']
            },
            method: { fr: 'Gradez le même clip de 5 façons différentes.', ar: 'صحّح نفس الكليب بـ5 طرق مختلفة.', en: 'Grade the same clip in 5 different ways.' },
            exercise: { fr: 'Téléchargez 3 clips et gradez-les pour paraître du même film.', ar: 'حمّل 3 كليبات وصحّحها لتبدو من نفس الفيلم.', en: 'Download 3 clips and grade them to look like the same film.' },
            tip: { fr: '💡 Les coloristes utilisent les oscilloscopes, pas leurs yeux.', ar: '💡 مصححو الألوان يستخدمون أجهزة القياس، ليس أعينهم.', en: '💡 Colorists use scopes, not their eyes.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Produire des publicités commerciales', ar: 'إنتاج إعلانات تجارية', en: 'Produce commercial ads' },
        lessons: [
          {
            id: 'v-m-1',
            title: { fr: 'Produire une Publicité Commerciale', ar: 'إنتاج إعلان تجاري', en: 'Produce a Commercial Ad' },
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Structure 30-60s: Problème → Solution → Transformation → CTA','Pré-production: Brief → Script → Storyboard → Shot list','Tournage: 3 prises minimum, variez les angles','Post-production: Montage → Son → Étalonnage → Graphiques','Voix off: enregistrez ou trouvez un voix off','Prix: 40-120K (social), 150-500K (TV) DZD'],
              ar: ['هيكل 30-60ث: مشكلة → حل → تحول → CTA','ما قبل الإنتاج: بريف → سكريبت → Storyboard → قائمة لقطات','التصوير: 3 تسجيلات على الأقل، تنويع الزوايا','ما بعد الإنتاج: مونتاج → صوت → تصحيح ألوان → جرافيك','صوت تعليقي: سجّل أو ابحث عن صوت','الأسعار: 40-120K (سوشيال), 150-500K (تلفزيون) دج'],
              en: ['Structure 30-60s: Problem → Solution → Transformation → CTA','Pre-production: Brief → Script → Storyboard → Shot list','Shooting: 3 takes minimum, vary angles','Post-production: Edit → Sound → Color grade → Graphics','Voiceover: record or find a voiceover artist','Prices: 40-120K (social), 150-500K (TV) DZD']
            },
            method: { fr: 'Créez un pub de démonstration pour un produit local.', ar: 'أنشئ إعلاناً تجريبياً لمنتج محلي.', en: 'Create a spec commercial for a local product.' },
            exercise: { fr: 'Commercial complet 30s pour un produit algérien.', ar: 'إعلان كامل 30 ثانية لمنتج جزائري.', en: 'Complete 30s commercial for an Algerian product.' },
            tip: { fr: '💡 Le monteur qui comprend la stratégie publicitaire gagne 3x plus.', ar: '💡 المحرر الذي يفهم استراتيجية الإعلان يكسب 3 أضعاف.', en: '💡 The editor who understands advertising strategy earns 3x more.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 4: WEB DEVELOPMENT
  // ============================================================
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
      // BEGINNER
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
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–8', ar: 'الأسابيع 5–8', en: 'Weeks 5–8' },
        goal: { fr: 'Apprendre JavaScript et créer des interactions dynamiques', ar: 'تعلم JavaScript وإنشاء تفاعلات ديناميكية', en: 'Learn JavaScript and create dynamic interactions' },
        lessons: [
          {
            id: 'w-i-1',
            title: { fr: 'JavaScript - Rendre votre site interactif', ar: 'JavaScript - اخلّي موقعك تفاعلي', en: 'JavaScript - Make your site interactive' },
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['let nom = "Ahmed";','console.log(nom);','function bonjour() { alert("Bonjour!"); }','document.getElementById("btn").onclick = function() { ... }'],
              ar: ['let nom = "Ahmed";','console.log(nom);','function bonjour() { alert("Bonjour!"); }','document.getElementById("btn").onclick = function() { ... }'],
              en: ['let name = "Ahmed";','console.log(name);','function hello() { alert("Hello!"); }','document.getElementById("btn").onclick = function() { ... }']
            },
            method: { fr: 'Créez un bouton qui affiche une alerte.', ar: 'أنشئ زراً يعرض تنبيه.', en: 'Create a button that shows an alert.' },
            exercise: { fr: 'Créez un compteur avec un bouton "+".', ar: 'أنشئ عداداً مع زر "+".', en: 'Create a counter with a "+" button.' },
            tip: { fr: '💡 Utilisez console.log() pour déboguer.', ar: '💡 استخدم console.log() لتصحيح الأخطاء.', en: '💡 Use console.log() to debug.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 9–16', ar: 'الأسابيع 9–16', en: 'Weeks 9–16' },
        goal: { fr: 'Maîtriser React et les frameworks modernes', ar: 'إتقان React والأطر الحديثة', en: 'Master React and modern frameworks' },
        lessons: [
          {
            id: 'w-a-1',
            title: { fr: 'Introduction à React', ar: 'مقدمة في React', en: 'Introduction to React' },
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['npx create-react-app mon-projet','Components, props, state, hooks','JSX: mélange HTML + JS','Props: passer des données entre composants','State: gérer les données qui changent'],
              ar: ['npx create-react-app mon-projet','المكونات, props, state, hooks','JSX: مزيج HTML + JS','Props: تمرير البيانات بين المكونات','State: إدارة البيانات المتغيرة'],
              en: ['npx create-react-app my-project','Components, props, state, hooks','JSX: HTML + JS mix','Props: pass data between components','State: manage changing data']
            },
            method: { fr: 'Créez un composant React qui affiche "Bonjour, [nom]"', ar: 'أنشئ مكون React يعرض "Bonjour, [nom]"', en: 'Create a React component that displays "Hello, [name]"' },
            exercise: { fr: 'Créez une todo-list avec React.', ar: 'أنشئ قائمة مهام مع React.', en: 'Create a todo-list with React.' },
            tip: { fr: '💡 Utilisez useState et useEffect.', ar: '💡 استخدم useState و useEffect.', en: '💡 Use useState and useEffect.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une équipe de développement', ar: 'إدارة فريق تطوير', en: 'Lead a development team' },
        lessons: [
          {
            id: 'w-m-1',
            title: { fr: 'Architecture et Gestion de Projet Web', ar: 'هندسة وإدارة مشاريع الويب', en: 'Web Architecture and Project Management' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Frontend (React) → Backend (Node) → DB','Git: init, add, commit, push','Agile/Scrum','Déploiement: Vercel, Netlify, Heroku','Sécurité: HTTPS, JWT','Tarification: 50-200K, 200K-1M DZD'],
              ar: ['Frontend (React) → Backend (Node) → DB','Git: init, add, commit, push','Agile/Scrum','النشر: Vercel, Netlify, Heroku','الأمان: HTTPS, JWT','التسعير: 50-200K، 200K-1M دج'],
              en: ['Frontend (React) → Backend (Node) → DB','Git: init, add, commit, push','Agile/Scrum','Deployment: Vercel, Netlify, Heroku','Security: HTTPS, JWT','Pricing: 50-200K, 200K-1M DZD']
            },
            method: { fr: 'Créez un projet complet de A à Z.', ar: 'أنشئ مشروعاً كاملاً من الصفر.', en: 'Create a complete project from scratch.' },
            exercise: { fr: 'Planifiez un projet web pour un client fictif.', ar: 'خطط لمشروع ويب لعميل وهمي.', en: 'Plan a web project for a fictional client.' },
            tip: { fr: '💡 Spécialisez-vous dans une niche.', ar: '💡 تخصّص في مجال.', en: '💡 Specialize in a niche.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 5: SEO
  // ============================================================
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
      // BEGINNER
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
              fr: ['SEO = Search Engine Optimization','3 piliers: technique, contenu, backlinks','Mots-clés: ce que les gens tapent','On-Page: title, meta, H1, URL','Off-Page: backlinks, autorité'],
              ar: ['SEO = تحسين محركات البحث','3 ركائز: تقني، محتوى، روابط','الكلمات المفتاحية: ما يكتبه الناس','On-Page: عنوان، meta، H1، رابط','Off-Page: روابط خلفية، سلطة'],
              en: ['SEO = Search Engine Optimization','3 pillars: technical, content, backlinks','Keywords: what people type','On-Page: title, meta, H1, URL','Off-Page: backlinks, authority']
            },
            method: { fr: 'Recherchez 3 mots-clés sur Google.', ar: 'ابحث عن 3 كلمات مفتاحية في Google.', en: 'Search for 3 keywords on Google.' },
            exercise: { fr: 'Listez 20 mots-clés pour une entreprise.', ar: 'اكتب 20 كلمة مفتاحية لمشروع.', en: 'List 20 keywords for a business.' },
            tip: { fr: '💡 Utilisez Google Keyword Planner.', ar: '💡 استخدم Google Keyword Planner.', en: '💡 Use Google Keyword Planner.' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–8', ar: 'الأسابيع 4–8', en: 'Weeks 4–8' },
        goal: { fr: 'Maîtriser On-Page et Off-Page', ar: 'إتقان On-Page و Off-Page', en: 'Master On-Page and Off-Page' },
        lessons: [
          {
            id: 'seo-i-1',
            title: { fr: 'Optimisation On-Page et Contenu', ar: 'تحسين On-Page والمحتوى', en: 'On-Page Optimization and Content' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Title: 50-60 caractères','Meta: 150-160 caractères','H1-H6: un seul H1','URL: courte, descriptive','Contenu: 800+ mots','Liens internes'],
              ar: ['Title: 50-60 حرف','Meta: 150-160 حرف','H1-H6: H1 واحد','الرابط: قصير، وصفي','المحتوى: 800+ كلمة','روابط داخلية'],
              en: ['Title: 50-60 characters','Meta: 150-160 characters','H1-H6: one H1','URL: short, descriptive','Content: 800+ words','Internal links']
            },
            method: { fr: 'Optimisez une page existante.', ar: 'حسّن صفحة موجودة.', en: 'Optimize an existing page.' },
            exercise: { fr: 'Rédigez un article SEO optimisé (800+ mots).', ar: 'اكتب مقالة SEO محسّنة (800+ كلمة).', en: 'Write an SEO-optimized article (800+ words).' },
            tip: { fr: '💡 Utilisez Yoast SEO ou Rank Math.', ar: '💡 استخدم Yoast SEO أو Rank Math.', en: '💡 Use Yoast SEO or Rank Math.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 9–16', ar: 'الأسابيع 9–16', en: 'Weeks 9–16' },
        goal: { fr: 'Maîtriser les backlinks', ar: 'إتقان الروابط الخلفية', en: 'Master backlinks' },
        lessons: [
          {
            id: 'seo-a-1',
            title: { fr: 'Stratégie de Backlinks', ar: 'استراتيجية الروابط الخلفية', en: 'Backlink Strategy' },
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Backlinks = facteur #1','Qualité > quantité','Guest blogging, broken link building','Analysez concurrents avec Ahrefs','Contenu "linkable": guides','Évitez black hat'],
              ar: ['الروابط الخلفية = عامل #1','الجودة > الكمية','Guest blogging, broken link building','حلل منافسيك مع Ahrefs','محتوى "linkable": أدلة','تجنّب black hat'],
              en: ['Backlinks = factor #1','Quality > quantity','Guest blogging, broken link building','Analyze competitors with Ahrefs','"Linkable" content: guides','Avoid black hat']
            },
            method: { fr: 'Créez une stratégie de backlinks.', ar: 'أنشئ استراتيجية روابط خلفية.', en: 'Create a backlink strategy.' },
            exercise: { fr: 'Identifiez 20 sites pour obtenir un backlink.', ar: 'حدّد 20 موقعاً للحصول على رابط خلفي.', en: 'Identify 20 sites to get a backlink.' },
            tip: { fr: '💡 Les backlinks locaux sont très puissants.', ar: '💡 الروابط الخلفية المحلية قوية جداً.', en: '💡 Local backlinks are very powerful.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une agence SEO', ar: 'إدارة وكالة SEO', en: 'Lead an SEO agency' },
        lessons: [
          {
            id: 'seo-m-1',
            title: { fr: 'Agence SEO', ar: 'وكالة SEO', en: 'SEO Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Audit complet','Rapport PDF','Stratégie 6 mois','KPIs: positions, trafic','Outils: Search Console, Analytics, Ahrefs','Tarification: audit 30-80K, forfait 50-200K DZD'],
              ar: ['تدقيق كامل','تقرير PDF','استراتيجية 6 أشهر','KPIs: مراكز، زيارات','الأدوات: Search Console, Analytics, Ahrefs','التسعير: تدقيق 30-80K، باقة 50-200K دج'],
              en: ['Complete audit','PDF report','6-month strategy','KPIs: positions, traffic','Tools: Search Console, Analytics, Ahrefs','Pricing: audit 30-80K, package 50-200K DZD']
            },
            method: { fr: 'Réalisez un audit SEO complet.', ar: 'قم بتدقيق SEO كامل.', en: 'Perform a complete SEO audit.' },
            exercise: { fr: 'Créez votre offre de services SEO.', ar: 'أنشئ عرض الخدمات SEO الخاص بك.', en: 'Create your SEO service offering.' },
            tip: { fr: '💡 Les clients paient pour des résultats.', ar: '💡 الزبائن يدفعون للنتائج.', en: '💡 Clients pay for results.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 6: DATA ANALYSIS
  // ============================================================
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
      // BEGINNER
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
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–8', ar: 'الأسابيع 4–8', en: 'Weeks 4–8' },
        goal: { fr: 'Maîtriser Power BI', ar: 'إتقان Power BI', en: 'Master Power BI' },
        lessons: [
          {
            id: 'data-i-1',
            title: { fr: 'Power BI - Visualisez vos données', ar: 'Power BI - صور بياناتك', en: 'Power BI - Visualize your data' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Power BI Desktop (gratuit)','Importez vos données: Excel, CSV','Créez des visualisations: graphiques, cartes, jauges','DAX: langage de formules avancées','Partagez: Power BI Service ou PDF'],
              ar: ['Power BI Desktop (مجاني)','استورد بياناتك: Excel، CSV','أنشئ تصورات: رسوماً بيانية، خرائط، مقاييس','DAX: لغة صيغ متقدمة','شارك: Power BI Service أو PDF'],
              en: ['Power BI Desktop (free)','Import your data: Excel, CSV','Create visualizations: charts, maps, gauges','DAX: advanced formula language','Share: Power BI Service or PDF']
            },
            method: { fr: 'Créez un dashboard avec 5 visualisations.', ar: 'أنشئ لوحة قيادة بـ5 تصورات.', en: 'Create a dashboard with 5 visualizations.' },
            exercise: { fr: 'Dashboard de ventes par mois, produit, région.', ar: 'لوحة قيادة للمبيعات حسب الشهر، المنتج، المنطقة.', en: 'Sales dashboard by month, product, region.' },
            tip: { fr: '💡 Utilisez les slicers pour filtrer.', ar: '💡 استخدم slicers للتصفية.', en: '💡 Use slicers to filter.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 9–16', ar: 'الأسابيع 9–16', en: 'Weeks 9–16' },
        goal: { fr: 'Maîtriser SQL et Python', ar: 'إتقان SQL و Python', en: 'Master SQL and Python' },
        lessons: [
          {
            id: 'data-a-1',
            title: { fr: 'SQL - Interrogez vos données', ar: 'SQL - استعلم عن بياناتك', en: 'SQL - Query your data' },
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['SELECT * FROM clients;','SELECT nom FROM clients WHERE ville = "Alger";','JOIN: combinez plusieurs tables','GROUP BY: regroupez','ORDER BY: triez'],
              ar: ['SELECT * FROM clients;','SELECT nom FROM clients WHERE ville = "Alger";','JOIN: ادمج عدة جداول','GROUP BY: جمّع','ORDER BY: رتّب'],
              en: ['SELECT * FROM customers;','SELECT name FROM customers WHERE city = "Algiers";','JOIN: combine tables','GROUP BY: group','ORDER BY: sort']
            },
            method: { fr: 'Créez une base SQLite et écrivez 10 requêtes.', ar: 'أنشئ قاعدة SQLite واكتب 10 استعلامات.', en: 'Create an SQLite database and write 10 queries.' },
            exercise: { fr: 'Requête SQL pour les ventes par mois et produit.', ar: 'استعلام SQL للمبيعات حسب الشهر والمنتج.', en: 'SQL query for sales by month and product.' },
            tip: { fr: '💡 Utilisez SQLite Browser ou DBeaver.', ar: '💡 استخدم SQLite Browser أو DBeaver.', en: '💡 Use SQLite Browser or DBeaver.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Devenir consultant data', ar: 'كن مستشار بيانات', en: 'Become a data consultant' },
        lessons: [
          {
            id: 'data-m-1',
            title: { fr: 'Consultant Data', ar: 'مستشار بيانات', en: 'Data Consultant' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Collecte → Analyse → Visualisation → Recommandations','Outils: Excel, Power BI, SQL, Python','Livrables: dashboards, rapports PDF','Tarification: projet 50-200K, forfait 80-300K DZD'],
              ar: ['جمع → تحليل → تصور → توصيات','الأدوات: Excel, Power BI, SQL, Python','التسليمات: لوحات قيادة، تقارير PDF','التسعير: مشروع 50-200K، باقة 80-300K دج'],
              en: ['Collection → Analysis → Visualization → Recommendations','Tools: Excel, Power BI, SQL, Python','Deliverables: dashboards, PDF reports','Pricing: project 50-200K, package 80-300K DZD']
            },
            method: { fr: 'Réalisez une analyse complète pour une entreprise fictive.', ar: 'قم بتحليل كامل لمشروع وهمي.', en: 'Perform a complete analysis for a fictional company.' },
            exercise: { fr: 'Créez votre offre de services data.', ar: 'أنشئ عرض الخدمات data الخاص بك.', en: 'Create your data service offering.' },
            tip: { fr: '💡 Les données sont le nouvel or.', ar: '💡 البيانات هي الذهب الجديد.', en: '💡 Data is the new gold.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 7: COPYWRITING
  // ============================================================
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
      // BEGINNER
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
              fr: ['AIDA: Attention, Intérêt, Désir, Action','Headlines: 80% lisent les titres','Avantages vs Caractéristiques','Call to Action','Storytelling'],
              ar: ['AIDA: الانتباه، الاهتمام، الرغبة، الفعل','العناوين: 80% يقرأون العناوين','الفوائد vs الميزات','الدعوة للفعل','سرد القصص'],
              en: ['AIDA: Attention, Interest, Desire, Action','Headlines: 80% read headlines','Benefits vs Features','Call to Action','Storytelling']
            },
            method: { fr: 'Analysez 10 publicités.', ar: 'حلّل 10 إعلانات.', en: 'Analyze 10 ads.' },
            exercise: { fr: 'Écrivez un titre accrocheur.', ar: 'اكتب عنواناً جذاباً.', en: 'Write a catchy headline.' },
            tip: { fr: '💡 Les chiffres fonctionnent toujours: "5 secrets"', ar: '💡 الأرقام دائماً تشتغل: "5 أسرار"', en: '💡 Numbers always work: "5 secrets"' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 3–6', ar: 'الأسابيع 3–6', en: 'Weeks 3–6' },
        goal: { fr: 'Rédiger pour différents supports', ar: 'الكتابة لمنصات مختلفة', en: 'Write for different platforms' },
        lessons: [
          {
            id: 'copy-i-1',
            title: { fr: 'Copywriting pour les Réseaux Sociaux', ar: 'الكتابة الإعلانية للسوشيال ميديا', en: 'Copywriting for Social Media' },
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Facebook: posts 100-200 mots','Instagram: légendes 50-150 mots','LinkedIn: posts 200-500 mots','Twitter: 280 caractères max','Reels/TikTok: scripts 15-30s'],
              ar: ['Facebook: منشورات 100-200 كلمة','Instagram: تعليقات 50-150 كلمة','LinkedIn: منشورات 200-500 كلمة','Twitter: 280 حرف كحد أقصى','Reels/TikTok: سكريبتات 15-30ث'],
              en: ['Facebook: 100-200 word posts','Instagram: 50-150 word captions','LinkedIn: 200-500 word posts','Twitter: 280 characters max','Reels/TikTok: 15-30s scripts']
            },
            method: { fr: 'Créez 5 posts pour différentes plateformes.', ar: 'أنشئ 5 منشورات لمنصات مختلفة.', en: 'Create 5 posts for different platforms.' },
            exercise: { fr: 'Rédigez une légende Instagram complète.', ar: 'اكتب تعليقاً إعلانياً كاملاً لـ Instagram.', en: 'Write a complete Instagram caption.' },
            tip: { fr: '💡 Adaptez votre ton à chaque plateforme.', ar: '💡 طوّع نبرتك لكل منصة.', en: '💡 Adapt your tone to each platform.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 7–12', ar: 'الأسابيع 7–12', en: 'Weeks 7–12' },
        goal: { fr: 'Maîtriser le copywriting de vente', ar: 'إتقان الكتابة الإعلانية للبيع', en: 'Master sales copywriting' },
        lessons: [
          {
            id: 'copy-a-1',
            title: { fr: 'Copywriting de Vente - Landing Pages', ar: 'الكتابة الإعلانية للبيع - صفحات الهبوط', en: 'Sales Copywriting - Landing Pages' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Landing page: Accroche → Problème → Solution → Preuve → Offre → CTA','VSL: vidéo de vente 20-40 minutes','Anticipez les objections','Urgence: offres limitées'],
              ar: ['صفحة الهبوط: جذبة → مشكلة → حل → دليل → عرض → CTA','VSL: فيديو بيعي 20-40 دقيقة','توقع الاعتراضات','الإلحاح: عروض محدودة'],
              en: ['Landing page: Hook → Problem → Solution → Proof → Offer → CTA','VSL: 20-40 minute sales video','Anticipate objections','Urgency: limited offers']
            },
            method: { fr: 'Créez une landing page complète.', ar: 'أنشئ صفحة هبوط كاملة.', en: 'Create a complete landing page.' },
            exercise: { fr: 'Rédigez un script VSL complet.', ar: 'اكتب سكريبت VSL كامل.', en: 'Write a complete VSL script.' },
            tip: { fr: '💡 Parlez UNIQUEMENT des avantages client.', ar: '💡 تحدث فقط عن فوائد الزبون.', en: '💡 Talk ONLY about client benefits.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 4+', ar: 'الشهر 4+', en: 'Month 4+' },
        goal: { fr: 'Devenir consultant copywriting', ar: 'كن مستشار كتابة إعلانية', en: 'Become a copywriting consultant' },
        lessons: [
          {
            id: 'copy-m-1',
            title: { fr: 'Consultant Copywriting', ar: 'مستشار كتابة إعلانية', en: 'Copywriting Consultant' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Services: audit, rédaction, scripts, emails','Processus: Brief → Recherche → Rédaction → Révision → Livraison','Tarification: landing page 20-50K, VSL 50-100K, forfait 30-80K DZD','Spécialisez-vous dans une niche'],
              ar: ['الخدمات: تدقيق، كتابة، سكريبتات، إيميلات','العملية: بريف → بحث → كتابة → مراجعة → تسليم','التسعير: صفحة هبوط 20-50K، VSL 50-100K، باقة 30-80K دج','تخصّص في مجال'],
              en: ['Services: audit, writing, scripts, emails','Process: Brief → Research → Writing → Revision → Delivery','Pricing: landing page 20-50K, VSL 50-100K, package 30-80K DZD','Specialize in a niche']
            },
            method: { fr: 'Réalisez un audit de copywriting.', ar: 'قم بتدقيق كتابة إعلانية.', en: 'Perform a copywriting audit.' },
            exercise: { fr: 'Créez votre offre de services copywriting.', ar: 'أنشئ عرض الخدمات الكتابية الخاص بك.', en: 'Create your copywriting service offering.' },
            tip: { fr: '💡 Les meilleurs copywriters facturent à la performance.', ar: '💡 أفضل كتاب الإعلانات يشحنون على الأداء.', en: '💡 The best copywriters charge on performance.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 8: UI/UX DESIGN
  // ============================================================
  {
    id: 'uiux',
    icon: '🎨',
    color: '#6366F1',
    accent: '#818CF8',
    bg: 'linear-gradient(135deg, #0C0A1A 0%, #1A1040 50%, #0C0A1A 100%)',
    bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    earning: '20,000 – 100,000 DZD/month',
    firstClient: { fr: '4–8 semaines', ar: '4–8 أسابيع', en: '4–8 weeks' },
    startTool: 'Figma + Spline (3D) + Pen & Paper',
    title: { fr: 'UI/UX Design 3D', ar: 'تصميم واجهات 3D', en: '3D UI/UX Design' },
    subtitle: { fr: 'User Interface & 3D Experience', ar: 'واجهات وتجارب 3D', en: 'User Interface & 3D Experience' },
    tagline: { fr: 'Créez des expériences numériques immersives en 3D', ar: 'أنشئ تجارب رقمية غامرة بتقنية 3D', en: 'Create immersive 3D digital experiences' },
    levels: [
      // BEGINNER
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Maîtriser les fondamentaux du UI/UX Design', ar: 'إتقان أساسيات UI/UX', en: 'Master UI/UX fundamentals' },
        lessons: [
          {
            id: 'uiux-b-1',
            title: { fr: 'UI vs UX en 3D', ar: 'UI vs UX في 3D', en: 'UI vs UX in 3D' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['UI = Interface Utilisateur = apparence','UX = Expérience Utilisateur = sentiment','En 3D: UI devient immersive (profondeur, perspective)','Objectif: créer des produits 3D que les gens aiment'],
              ar: ['UI = واجهة المستخدم = المظهر','UX = تجربة المستخدم = المشاعر','في 3D: UI تصبح غامرة (عمق، منظور)','الهدف: إنشاء منتجات 3D يحبها الناس'],
              en: ['UI = User Interface = appearance','UX = User Experience = feeling','In 3D: UI becomes immersive (depth, perspective)','Goal: create 3D products people love']
            },
            method: { fr: 'Analysez 3 apps avec des éléments 3D.', ar: 'حلل 3 تطبيقات بعناصر 3D.', en: 'Analyze 3 apps with 3D elements.' },
            exercise: { fr: 'Comparez un design 2D vs 3D. Notez 10 différences.', ar: 'قارن تصميم 2D vs 3D. سجل 10 اختلافات.', en: 'Compare a 2D vs 3D design. Note 10 differences.' },
            tip: { fr: '💡 Le 3D doit être subtil. Trop de 3D tue le 3D.', ar: '💡 يجب أن يكون 3D خفيفاً. الكثير من 3D يقتل 3D.', en: '💡 3D must be subtle. Too much 3D kills 3D.' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–12', ar: 'الأسابيع 5–12', en: 'Weeks 5–12' },
        goal: { fr: 'Maîtriser Figma + Spline', ar: 'إتقان Figma + Spline', en: 'Master Figma + Spline' },
        lessons: [
          {
            id: 'uiux-i-1',
            title: { fr: 'Figma + Spline - 3D Mastery', ar: 'Figma + Spline - إتقان 3D', en: 'Figma + Spline - 3D Mastery' },
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Figma: design collaboratif (gratuit)','Spline: design 3D (gratuit)','Export: Spline → Figma en PNG/SVG','Composants 3D réutilisables','Animations 3D avec Spline'],
              ar: ['Figma: تصميم تعاوني (مجاني)','Spline: تصميم 3D (مجاني)','تصدير: Spline → Figma كـ PNG/SVG','مكونات 3D قابلة لإعادة الاستخدام','رسوم متحركة 3D مع Spline'],
              en: ['Figma: collaborative design (free)','Spline: 3D design (free)','Export: Spline → Figma as PNG/SVG','Reusable 3D components','3D animations with Spline']
            },
            method: { fr: 'Créez un cube rotatif 3D dans Spline. Exportez-le en PNG.', ar: 'أنشئ مكعباً دواراً 3D في Spline. صدّره PNG.', en: 'Create a rotating 3D cube in Spline. Export it as PNG.' },
            exercise: { fr: 'Créez 5 composants 3D avec glassmorphism.', ar: 'أنشئ 5 مكونات 3D مع زجاجية.', en: 'Create 5 3D components with glassmorphism.' },
            tip: { fr: '💡 Spline est l\'outil 3D le plus accessible pour les designers UI/UX.', ar: '💡 Spline هي أداة 3D الأكثر سهولة لمصممي UI/UX.', en: '💡 Spline is the most accessible 3D tool for UI/UX designers.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 13–24', ar: 'الأسابيع 13–24', en: 'Weeks 13–24' },
        goal: { fr: 'Maîtriser la recherche UX et le prototypage avancé', ar: 'إتقان بحث UX والنماذج الأولية المتقدمة', en: 'Master UX research and advanced prototyping' },
        lessons: [
          {
            id: 'uiux-a-1',
            title: { fr: 'Recherche UX 3D', ar: 'بحث تجربة المستخدم 3D', en: '3D UX Research' },
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['UX Research 3D = comprendre les besoins en 3D','Méthodes: interviews, observations','Interview: 5-8 utilisateurs','Personas 3D','Objectif: décisions basées sur des données 3D'],
              ar: ['بحث UX 3D = فهم الاحتياجات في 3D','الطرق: مقابلات، ملاحظات','المقابلة: 5-8 مستخدمين','شخصيات 3D','الهدف: قرارات مبنية على بيانات 3D'],
              en: ['3D UX Research = understanding 3D needs','Methods: interviews, observations','Interview: 5-8 users','3D Personas','Goal: 3D data-driven decisions']
            },
            method: { fr: 'Menez 5 interviews sur l\'expérience 3D.', ar: 'أجرِ 5 مقابلات عن تجربة 3D.', en: 'Conduct 5 interviews about 3D experience.' },
            exercise: { fr: 'Créez un plan de recherche UX 3D complet.', ar: 'أنشئ خطة بحث UX 3D كاملة.', en: 'Create a complete 3D UX research plan.' },
            tip: { fr: '💡 La recherche UX 3D est essentielle pour comprendre la perception de la profondeur.', ar: '💡 بحث UX 3D ضروري لفهم إدراك العمق.', en: '💡 3D UX research is essential to understand depth perception.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Livrer des projets professionnels et construire une agence UI/UX', ar: 'تسليم مشاريع احترافية وبناء وكالة UI/UX', en: 'Deliver professional projects and build a UI/UX agency' },
        lessons: [
          {
            id: 'uiux-m-1',
            title: { fr: 'Agence UI/UX', ar: 'وكالة UI/UX', en: 'UI/UX Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Services: Audit UI/UX, Design 3D, Prototypage','Processus: Brief → Recherche → Design → Prototype → Test → Livraison','Tarification: audit 50-150K, design complet 200K-1M DZD','Spécialisez-vous: SaaS, e-commerce, apps mobiles','Portfolio: 3 projets 3D'],
              ar: ['الخدمات: تدقيق UI/UX، تصميم 3D، نمذجة أولية','العملية: بريف → بحث → تصميم → نموذج أولي → اختبار → تسليم','التسعير: تدقيق 50-150K، تصميم كامل 200K-1M دج','تخصّص: SaaS، التجارة الإلكترونية، تطبيقات موبايل','البورتفوليو: 3 مشاريع 3D'],
              en: ['Services: UI/UX Audit, 3D Design, Prototyping','Process: Brief → Research → Design → Prototype → Test → Delivery','Pricing: audit 50-150K, complete design 200K-1M DZD','Specialize: SaaS, e-commerce, mobile apps','Portfolio: 3 3D projects']
            },
            method: { fr: 'Réalisez un audit UI/UX pour un site.', ar: 'قم بتدقيق UI/UX لموقع.', en: 'Perform a UI/UX audit for a site.' },
            exercise: { fr: 'Créez votre offre de services UI/UX.', ar: 'أنشئ عرض الخدمات UI/UX الخاص بك.', en: 'Create your UI/UX service offering.' },
            tip: { fr: '💡 Les clients paient pour des résultats, pas pour du travail.', ar: '💡 الزبائن يدفعون للنتائج، مش للشغل.', en: '💡 Clients pay for results, not for work.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 9: AUTOMATION WITH N8N
  // ============================================================
  {
    id: 'n8n',
    icon: '⚡',
    color: '#E94E1B',
    accent: '#FF6B35',
    bg: 'linear-gradient(135deg, #1A0A04 0%, #3A1808 50%, #1A0A04 100%)',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    earning: '25,000 – 120,000 DZD/month',
    firstClient: { fr: '3–6 semaines', ar: '3–6 أسابيع', en: '3–6 weeks' },
    startTool: 'n8n (self-hosted or cloud) + Docker',
    title: { fr: 'Automation avec n8n', ar: 'الأتمتة مع n8n', en: 'Automation with n8n' },
    subtitle: { fr: 'Workflow Automation', ar: 'أتمتة سير العمل', en: 'Workflow Automation' },
    tagline: { fr: 'Automatisez tout sans coder', ar: 'أتمتة كل شيء بدون برمجة', en: 'Automate everything without coding' },
    levels: [
      // BEGINNER
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Maîtriser les bases de n8n', ar: 'إتقان أساسيات n8n', en: 'Master n8n basics' },
        lessons: [
          {
            id: 'n8n-b-1',
            title: { fr: 'Introduction à l\'Automatisation', ar: 'مقدمة في الأتمتة', en: 'Introduction to Automation' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Automatisation = faire faire par des machines','n8n = outil open-source','Alternative à Zapier/Make','Workflows = chaînes d\'actions','Nodes = actions, Triggers = déclencheurs'],
              ar: ['الأتمتة = جعل الآلات تقوم بالمهام','n8n = أداة مفتوحة المصدر','بديل لـ Zapier/Make','سير العمل = سلاسل إجراءات','العقد = إجراءات، المشغلات = مبتدئات'],
              en: ['Automation = machines doing tasks','n8n = open-source tool','Alternative to Zapier/Make','Workflows = chains of actions','Nodes = actions, Triggers = starters']
            },
            method: { fr: 'Identifiez 5 tâches répétitives.', ar: 'حدد 5 مهام متكررة.', en: 'Identify 5 repetitive tasks.' },
            exercise: { fr: 'Listez 10 processus à automatiser.', ar: 'اكتب 10 عمليات لأتمتتها.', en: 'List 10 processes to automate.' },
            tip: { fr: '💡 Si vous faites une tâche plus de 3 fois, automatisez-la.', ar: '💡 إذا قمت بمهمة أكثر من 3 مرات، قم بأتمتتها.', en: '💡 If you do a task more than 3 times, automate it.' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
        goal: { fr: 'Connecter n8n aux APIs', ar: 'ربط n8n بـ APIs', en: 'Connect n8n to APIs' },
        lessons: [
          {
            id: 'n8n-i-1',
            title: { fr: 'Requêtes HTTP avec n8n', ar: 'طلبات HTTP مع n8n', en: 'HTTP Requests with n8n' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['HTTP Request = appels API','Méthodes: GET, POST, PUT, DELETE','URL: endpoint','Headers: authentification','Body: données JSON'],
              ar: ['HTTP Request = استدعاء APIs','الطرق: GET، POST، PUT، DELETE','الرابط: نقطة النهاية','الرؤوس: مصادقة','الجسم: بيانات JSON'],
              en: ['HTTP Request = API calls','Methods: GET, POST, PUT, DELETE','URL: endpoint','Headers: authentication','Body: JSON data']
            },
            method: { fr: 'Utilisez JSONPlaceholder pour tester.', ar: 'استخدم JSONPlaceholder للاختبار.', en: 'Use JSONPlaceholder for testing.' },
            exercise: { fr: 'Créez un workflow qui récupère des données d\'une API.', ar: 'أنشئ سير عمل يسترجع بيانات من API.', en: 'Create a workflow that fetches data from an API.' },
            tip: { fr: '💡 Testez avec Postman avant de mettre dans n8n.', ar: '💡 اختبر مع Postman قبل وضعها في n8n.', en: '💡 Test with Postman before putting in n8n.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 11–20', ar: 'الأسابيع 11–20', en: 'Weeks 11–20' },
        goal: { fr: 'Maîtriser les workflows avancés et l\'IA', ar: 'إتقان سير العمل المتقدم والذكاء الاصطناعي', en: 'Master advanced workflows and AI' },
        lessons: [
          {
            id: 'n8n-a-1',
            title: { fr: 'Agents IA avec n8n', ar: 'وكلاء الذكاء الاصطناعي مع n8n', en: 'AI Agents with n8n' },
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Node AI: utiliser OpenAI','GPT-4 pour analyse','Génération de contenu','Analyse de sentiments','Résumé automatique'],
              ar: ['عقدة الذكاء الاصطناعي: استخدام OpenAI','GPT-4 للتحليل','توليد المحتوى','تحليل المشاعر','تلخيص تلقائي'],
              en: ['AI Node: use OpenAI','GPT-4 for analysis','Content generation','Sentiment analysis','Automatic summarization']
            },
            method: { fr: 'Intégrez OpenAI dans n8n.', ar: 'ادمج OpenAI في n8n.', en: 'Integrate OpenAI into n8n.' },
            exercise: { fr: 'Créez un agent IA qui répond automatiquement.', ar: 'أنشئ وكيل ذكاء اصطناعي يرد تلقائياً.', en: 'Create an AI agent that replies automatically.' },
            tip: { fr: '💡 L\'IA + n8n = automatisation intelligente.', ar: '💡 الذكاء الاصطناعي + n8n = أتمتة ذكية.', en: '💡 AI + n8n = intelligent automation.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Construire des automations commerciales', ar: 'بناء أتمتة تجارية', en: 'Build business automations' },
        lessons: [
          {
            id: 'n8n-m-1',
            title: { fr: 'Automatisations Commerciales', ar: 'أتمتة تجارية', en: 'Business Automations' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Processus de vente complet','Gestion de contenu','Support client','Recrutement','Gestion de projet'],
              ar: ['عملية مبيعات كاملة','إدارة المحتوى','دعم العملاء','التوظيف','إدارة المشاريع'],
              en: ['Complete sales process','Content management','Customer support','Recruitment','Project management']
            },
            method: { fr: 'Automatisez un processus métier complet.', ar: 'أتمتة عملية تجارية كاملة.', en: 'Automate a complete business process.' },
            exercise: { fr: 'Créez une automatisation pour un processus de vente.', ar: 'أنشئ أتمتة لعملية مبيعات.', en: 'Create an automation for a sales process.' },
            tip: { fr: '💡 Objectif: des automations sans intervention humaine.', ar: '💡 الهدف: أتمتة بدون تدخل بشري.', en: '💡 Goal: automations without human intervention.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 10: VIBE CODING
  // ============================================================
  {
    id: 'vibecoding',
    icon: '🤖',
    color: '#8B5CF6',
    accent: '#A78BFA',
    bg: 'linear-gradient(135deg, #0D0618 0%, #1A0A30 50%, #0D0618 100%)',
    bgImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    earning: '30,000 – 150,000 DZD/month',
    firstClient: { fr: '4–8 semaines', ar: '4–8 أسابيع', en: '4–8 weeks' },
    startTool: 'Cursor AI + VSCode + GitHub Copilot',
    title: { fr: 'Vibe Coding', ar: 'البرمجة بالذكاء الاصطناعي', en: 'Vibe Coding' },
    subtitle: { fr: 'Développement IA', ar: 'التطوير بالذكاء الاصطناعي', en: 'AI Development' },
    tagline: { fr: 'Construisez avec l\'IA sans être un développeur traditionnel', ar: 'ابنِ بالذكاء الاصطناعي دون أن تكون مبرمجاً تقليدياً', en: 'Build with AI without being a traditional developer' },
    levels: [
      // BEGINNER
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Maîtriser les bases du Vibe Coding', ar: 'إتقان أساسيات البرمجة بالذكاء الاصطناعي', en: 'Master Vibe Coding basics' },
        lessons: [
          {
            id: 'vc-b-1',
            title: { fr: 'Qu\'est-ce que le Vibe Coding?', ar: 'ما هي البرمجة بالذكاء الاصطناعي؟', en: 'What is Vibe Coding?' },
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Vibe Coding = utiliser des assistants IA','L\'IA génère le code, vous guidez','Rôle: prompt engineer, architecte','Outils: Cursor, GitHub Copilot, ChatGPT'],
              ar: ['البرمجة بالذكاء الاصطناعي = استخدام مساعدين ذكاء اصطناعي','الذكاء الاصطناعي يكتب الكود، وأنت توجه','دورك: مهندس أوامر، مهندس معماري','الأدوات: Cursor، GitHub Copilot، ChatGPT'],
              en: ['Vibe Coding = using AI assistants','AI writes code, you guide','Role: prompt engineer, architect','Tools: Cursor, GitHub Copilot, ChatGPT']
            },
            method: { fr: 'Installez ChatGPT et posez une question.', ar: 'ثبّت ChatGPT واسأل سؤالاً.', en: 'Install ChatGPT and ask a question.' },
            exercise: { fr: 'Demandez à ChatGPT d\'expliquer le Vibe Coding.', ar: 'اطلب من ChatGPT شرح البرمجة بالذكاء الاصطناعي.', en: 'Ask ChatGPT to explain Vibe Coding.' },
            tip: { fr: '💡 Le Vibe Coding n\'est PAS une triche.', ar: '💡 البرمجة بالذكاء الاصطناعي ليست غشاً.', en: '💡 Vibe Coding is NOT cheating.' }
          }
        ]
      },
      // INTERMEDIATE
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–12', ar: 'الأسابيع 5–12', en: 'Weeks 5–12' },
        goal: { fr: 'Construire des apps modernes avec React et l\'IA', ar: 'بناء تطبيقات عصرية مع React والذكاء الاصطناعي', en: 'Build modern apps with React and AI' },
        lessons: [
          {
            id: 'vc-i-1',
            title: { fr: 'Construire des Apps React avec l\'IA', ar: 'بناء تطبيقات React بالذكاء الاصطناعي', en: 'Building React Apps with AI' },
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Prompt: "Crée un composant React"','L\'IA écrit le code','Reconnaître props, state, hooks','Tester dans Cursor','Déployer sur Vercel'],
              ar: ['الأمر: "أنشئ مكون React"','الذكاء الاصطناعي يكتب الكود','التعرف على الخصائص، الحالة، الخطافات','الاختبار في Cursor','النشر على Vercel'],
              en: ['Prompt: "Create a React component"','AI writes the code','Recognize props, state, hooks','Test in Cursor','Deploy to Vercel']
            },
            method: { fr: 'Générez un composant React avec l\'IA.', ar: 'ولّد مكون React بالذكاء الاصطناعي.', en: 'Generate a React component with AI.' },
            exercise: { fr: 'Construisez une application React avec l\'IA.', ar: 'ابنِ تطبيق React بالذكاء الاصطناعي.', en: 'Build a React app with AI.' },
            tip: { fr: '💡 Structure: composant → props → interactions → style.', ar: '💡 الهيكل: المكون → الخصائص → التفاعلات → التنسيق.', en: '💡 Structure: component → props → interactions → styling.' }
          }
        ]
      },
      // ADVANCED
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 13–24', ar: 'الأسابيع 13–24', en: 'Weeks 13–24' },
        goal: { fr: 'Construire des SaaS complets', ar: 'بناء SaaS كاملة', en: 'Build complete SaaS' },
        lessons: [
          {
            id: 'vc-a-1',
            title: { fr: 'Construire des SaaS avec l\'IA', ar: 'بناء SaaS بالذكاء الاصطناعي', en: 'Building SaaS with AI' },
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Architecture: React + Node + Supabase','Modèle: Abonnements','Fonctionnalités: Auth, Paiement, Dashboard','Multi-tenant','Pricing: Gratuit, Pro, Enterprise'],
              ar: ['الهندسة: React + Node + Supabase','النموذج: اشتراكات','الميزات: مصادقة، دفع، لوحة تحكم','متعدد المستأجرين','التسعير: مجاني، Pro، Enterprise'],
              en: ['Architecture: React + Node + Supabase','Model: Subscriptions','Features: Auth, Payment, Dashboard','Multi-tenant','Pricing: Free, Pro, Enterprise']
            },
            method: { fr: 'Demandez à l\'IA de créer un plan SaaS.', ar: 'اطلب من الذكاء الاصطناعي إنشاء خطة SaaS.', en: 'Ask AI to create a SaaS plan.' },
            exercise: { fr: 'Construisez un SaaS de gestion de projets.', ar: 'ابنِ SaaS لإدارة المشاريع.', en: 'Build a project management SaaS.' },
            tip: { fr: '💡 Commencez par un SaaS simple et spécialisé.', ar: '💡 ابدأ بـ SaaS بسيط ومتخصص.', en: '💡 Start with a simple specialized SaaS.' }
          }
        ]
      },
      // MASTER
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Créer des produits commercialisables', ar: 'إنشاء منتجات قابلة للتسويق', en: 'Create marketable products' },
        lessons: [
          {
            id: 'vc-m-1',
            title: { fr: 'Monétiser les Produits IA', ar: 'تحقيق الربح من منتجات الذكاء الاصطناعي', en: 'Monetizing AI Products' },
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Modèles: Abonnement, Freemium, Pay-per-use','Prix Algérie: adapté','3 niveaux de prix','Stratégie marketing','Page de vente'],
              ar: ['النماذج: اشتراك، Freemium، دفع لكل استخدام','أسعار الجزائر: مكيفة','3 مستويات أسعار','استراتيجية تسويق','صفحة بيع'],
              en: ['Models: Subscription, Freemium, Pay-per-use','Algeria pricing: adapted','3 pricing tiers','Marketing strategy','Sales page']
            },
            method: { fr: 'Développez un plan de monétisation.', ar: 'طور خطة ربح.', en: 'Develop a monetization plan.' },
            exercise: { fr: 'Créez un plan de monétisation complet avec l\'IA.', ar: 'أنشئ خطة ربح كاملة بالذكاء الاصطناعي.', en: 'Create a complete monetization plan with AI.' },
            tip: { fr: '💡 Les produits IA les plus rentables résolvent un problème spécifique.', ar: '💡 أكثر منتجات الذكاء الاصطناعي ربحاً تحل مشكلة محددة.', en: '💡 The most profitable AI products solve a specific problem.' }
          }
        ]
      }
    ]
  }
];