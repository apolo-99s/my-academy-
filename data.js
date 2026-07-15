// ===== CODES D'ACCÈS =====
var CODES = ['DSA2026','STUDENT01','VIP2026','DZSKILL2025','ATLAS-PRO','LEARN-DZ-01','LEARN-DZ-02','LEARN-DZ-03','ACADEMY-VIP','FORMATION01','FORMATION02'];

// ===== STYLES DES NIVEAUX =====
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
    f1: '✓ Méthodes étape par étape',
    f2: '✓ Exercices réels',
    f3: '✓ Outils gratuits',
    f4: '✓ Tarifs marché algérien',
    includesTitle: 'Ce que vous obtenez',
    includes: ['7 formations complètes — Beginner → Master','Chaque leçon: méthode exacte étape par étape','Exercices pratiques avec livrables concrets','Outils gratuits','Prix du marché algérien en DZD','Scripts de communication client','Accès à vie — mises à jour incluses'],
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
    stats: [{ n: '35+', l: 'Leçons détaillées' }, { n: '4', l: 'Niveaux par skill' }, { n: '0 DZD', l: 'Pour commencer' }],
    footer: 'DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algérie',
    aTitle: 'Apprenez. Pratiquez.\nSoyez Payé.',
    aSubtitle: '7 skills, du débutant au maître. Chaque leçon vous dit exactement comment faire.',
    aFeatures: ['Méthodes étape par étape','Exercices réels','Outils gratuits','Tarifs marché algérien'],
    aRec: '💡 Ordre recommandé: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting',
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
    badge: 'تكوين كامل — 7 مهارات',
    title: 'تعلم المهارات الرقمية\nاللي تدر فلوس في الجزائر',
    subtitle: '7 تكوينات كاملة. تصميم، سوشيال ميديا، مونتاج، ويب، SEO، بيانات، كتابة.',
    f1: '✓ خطوات واضحة وعملية',
    f2: '✓ تمارين حقيقية',
    f3: '✓ أدوات مجانية',
    f4: '✓ أسعار السوق الجزائري',
    includesTitle: 'شنو راه فيه',
    includes: ['7 تكوينات كاملة — مبتدئ → محترف','كل درس: الطريقة الصحيحة خطوة بخطوة','تمارين عملية مع نتائج حقيقية','أدوات مجانية','أسعار السوق الجزائري بالدينار','نصوص التواصل مع الزبائن','وصول مدى الحياة — التحديثات مشمولة'],
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
    stats: [{ n: '+35', l: 'درس مفصل' }, { n: '4', l: 'مستويات لكل مهارة' }, { n: '0 دج', l: 'باش تبدا' }],
    footer: 'DigitalSkills.dz — تكوين محترف الجزائر 🇩🇿',
    aBadge: '🇩🇿 أكاديمية المهارات الرقمية — الجزائر',
    aTitle: 'تعلم. تمرن.\nتربح.',
    aSubtitle: '7 مهارات، من الصفر للاحتراف. كل درس يقولك بالضبط كيفاش تدير.',
    aFeatures: ['خطوات واضحة وعملية','تمارين حقيقية','أدوات مجانية','أسعار السوق الجزائري'],
    aRec: '💡 الترتيب المنصوح: سوشيال ميديا → تصميم → مونتاج → ويب → SEO → بيانات → كتابة',
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
    badge: 'Complete Course — 7 Skills',
    title: 'Master Digital Skills That\nGenerate Income in Algeria',
    subtitle: '7 complete courses. Design, Social Media, Video, Web, SEO, Data, Copywriting.',
    f1: '✓ Step-by-step methods',
    f2: '✓ Real exercises',
    f3: '✓ Free tools only',
    f4: '✓ Algerian market rates',
    includesTitle: 'What you get',
    includes: ['7 complete courses — Beginner → Master','Every lesson: exact step-by-step method','Practical exercises with real deliverables','Free tools','Algerian market rates in DZD','Client communication scripts','Lifetime access — updates included'],
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
    stats: [{ n: '35+', l: 'Detailed lessons' }, { n: '4', l: 'Levels per skill' }, { n: '0 DZD', l: 'To get started' }],
    footer: 'DigitalSkills.dz — Professional Training Algeria 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algeria',
    aTitle: 'Learn It. Practice It.\nGet Paid.',
    aSubtitle: '7 skills, beginner to master. Every lesson tells you exactly how to do it.',
    aFeatures: ['Step-by-step methods','Real exercises','Free tools only','Algerian market rates'],
    aRec: '💡 Recommended: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting',
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

// ===== SKILLS =====
var SKILLS = [

  // ============================================================
  // SKILL 1: GRAPHIC DESIGN (original avec niveaux + détails)
  // ============================================================
  {
    id: 'design',
    icon: '🎨',
    color: '#7C3AED',
    accent: '#A78BFA',
    bg: '#0D0818',
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
        goal: { fr: 'Apprendre les 4 règles visuelles et créer vos premiers designs dans Canva', ar: 'تعلم 4 قواعد التصميم وتصنع أول تصاميمك في Canva', en: 'Learn the 4 visual rules and create your first real designs in Canva' },
        lessons: [
          {
            id: 'd-b-1',
            title: { fr: 'Comment installer et utiliser Canva', ar: 'كيفاش تنصب وتستعمل Canva', en: 'How to Install & Use Canva' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Allez sur canva.com ou téléchargez l\'app depuis Google Play ou App Store.','Cliquez S\'inscrire et créez un compte gratuit avec votre email ou Google.','Cliquez Créer un design en haut du tableau de bord.','Choisissez Post Instagram Carré — canvas vierge 1080x1080px.','Panneau GAUCHE: Templates, Éléments, Texte, Arrière-plan, Téléchargements.','Barre du HAUT: contrôles de police, couleurs, position.','Ctrl+Z pour annuler. Ctrl+D pour dupliquer.','Bouton Partager → Télécharger → PNG pour réseaux ou PDF pour impression.'],
              ar: ['روح لـ canva.com ولا حمّل التطبيق من Google Play أو App Store.','اضغط سجّل وأنشئ حساب مجاني بإيميلك أو Google.','اضغط إنشاء تصميم في الأعلى.','اختار منشور Instagram — canvas فارغ 1080x1080px.','اللوحة اليسرى: Templates، عناصر، نص، خلفية، تحميلات.','شريط الأعلى: خطوط، ألوان، موضع.','Ctrl+Z للتراجع. Ctrl+D للنسخ.','زر مشاركة → تحميل → PNG للسوشيال أو PDF للطباعة.'],
              en: ['Go to canva.com or download the app from Google Play or App Store.','Click Sign Up and create a free account with your email or Google.','Click Create a design at the top of the dashboard.','Choose Instagram Post Square — blank 1080x1080px canvas.','LEFT panel: Templates, Elements, Text, Background, Uploads.','TOP toolbar: font controls, colors, position.','Ctrl+Z to undo. Ctrl+D to duplicate.','Share button → Download → PNG for social or PDF for print.']
            },
            method: { fr: 'Ouvrez Canva maintenant et passez 20 minutes à cliquer sur chaque bouton. Ne dessinez rien — explorez juste. Cette session est votre vraie leçon.', ar: 'افتح Canva الآن واقضِ 20 دقيقة تضغط على كل زر. ما تصمّمش شيء — بس استكشف.', en: 'Open Canva right now and spend 20 minutes clicking every button. Do not design anything — just explore.' },
            exercise: { fr: 'Créez un post Instagram avec votre nom en grand texte gras et un fond coloré. Téléchargez-le.', ar: 'صنع منشور Instagram باسمك بخط كبير وخلفية ملونة. حمّله.', en: 'Create an Instagram post with your name in big bold text and a colored background. Download it.' },
            tip: { fr: '💡 Canva Gratuit vous donne 250 000+ templates. Passez à Pro seulement après avoir des clients payants.', ar: '💡 Canva المجاني يعطيك +250,000 قالب. انتقل للـ Pro بس بعد ما تجيك زبائن.', en: '💡 Canva Free gives you 250,000+ templates. Only upgrade after you have paying clients.' }
          },
          {
            id: 'd-b-2',
            title: { fr: 'Les 4 Règles du Design CARP', ar: '4 قواعد التصميم CARP', en: 'The 4 Design Rules CARP' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['CONTRASTE: Rendez la chose la plus importante la plus grande ou la plus différente.','ALIGNEMENT: Rien placé au hasard. Activez les guides: Vue → Afficher règles.','RÉPÉTITION: Même police, même couleur, même style pour les éléments similaires.','PROXIMITÉ: Groupez les choses qui vont ensemble. Séparez ce qui ne va pas.','Pratiquez: Ouvrez un template Canva. Identifiez chaque règle dans chaque élément.','Cherchez flyer algérie restaurant sur Google. Identifiez les règles respectées et brisées.'],
              ar: ['التباين: خلّي الحاجة المهمة أكبر أو أختلف.','المحاذاة: ما كاين والو موضوع بالعشوائية. فعّل الخطوط: عرض → أظهر الخطوط.','التكرار: نفس الخط، نفس اللون، نفس الستايل للعناصر المتشابهة.','القرب: جمّع الأشياء اللي تمشي مع بعض. فرّق ما لا يمشي.','تمرّن: افتح قالب Canva. حدّد كل قاعدة في كل عنصر.','دور على flyer algérie restaurant في Google. حدّد القواعد المتّبعة والمكسورة.'],
              en: ['CONTRAST: Make the most important thing the biggest or most different.','ALIGNMENT: Nothing placed randomly. Enable guides: View → Show Rulers.','REPETITION: Same font, same color, same style for similar elements.','PROXIMITY: Group things that belong together. Separate what does not.','Practice: Open a Canva template. Identify each rule in each element.','Search flyer algerie restaurant on Google. Identify rules followed and broken.']
            },
            method: { fr: 'Brisez les 4 règles délibérément dans un design puis recréez-le correctement. La comparaison rend les règles inoubliables.', ar: 'اكسر الـ4 قواعد بالقصد في تصميم ثم أعد إنشاؤه صح. المقارنة تخلّيك ما تنساش.', en: 'Break all 4 rules deliberately in one design then recreate it correctly. The comparison makes rules unforgettable.' },
            exercise: { fr: 'Designez Restaurant El Baraka Alger comme carte de visite DEUX FOIS: Version 1 = violez les 4 règles. Version 2 = respectez-les parfaitement.', ar: 'صمّم مطعم البركة الجزائر كبطاقة أعمال مرتين: نسخة 1 = اكسر الـ4 قواعد. نسخة 2 = اتبّعها.', en: 'Design Restaurant El Baraka Alger as a business card TWICE: Version 1 violate all 4 rules. Version 2 follow them perfectly.' },
            tip: { fr: '💡 Les designers professionnels brisent les règles seulement APRÈS les avoir maîtrisées.', ar: '💡 المصممون المحترفون يكسرون القواعد بس بعد ما يتقنوها.', en: '💡 Professional designers break rules only AFTER mastering them.' }
          },
          {
            id: 'd-b-3',
            title: { fr: 'Théorie des Couleurs', ar: 'نظرية الألوان', en: 'Color Theory' },
            image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80',
            layout: 'left',
            steps: {
              fr: ['coolors.co — génère des palettes harmonieuses. Espace = nouvelle palette.','Émotions: Rouge=urgence. Bleu=confiance. Vert=nature. Jaune=bonheur. Noir=luxe.','Règle 60-30-10: Principal 60% fonds, Secondaire 30% titres, Accent 10% boutons.','Extraire couleurs photo: Canva → image → pipette → appliquez aux textes.','Vérifier harmonie: color.adobe.com → Complémentaire → bougez la roue.','Maximum 3 couleurs par design en tant que débutant.'],
              ar: ['coolors.co — يولّد باليتات منسجمة. مسافة = باليت جديد.','المشاعر: أحمر=إلحاح. أزرق=ثقة. أخضر=طبيعة. أصفر=سعادة. أسود=فخامة.','قاعدة 60-30-10: رئيسي 60% خلفيات، ثانوي 30% عناوين، accent 10% أزرار.','استخراج ألوان صورة: Canva → صورة → قطّارة → طبّق على النصوص.','تحقق الانسجام: color.adobe.com → تكميلي → حرّك العجلة.','أقصاه 3 ألوان في تصميم واحد وأنت مبتدئ.'],
              en: ['coolors.co generates harmonious palettes. Space = new palette.','Emotions: Red=urgency. Blue=trust. Green=nature. Yellow=happiness. Black=luxury.','60-30-10 rule: Main 60% backgrounds, Secondary 30% titles, Accent 10% buttons.','Extract colors from photo: Canva → image → eyedropper → apply to text.','Check harmony: color.adobe.com → Complementary → move the wheel.','Maximum 3 colors per design as a beginner.']
            },
            method: { fr: 'Analysez les pages Instagram de 5 marques algériennes. Pour chaque post populaire: couleur principale, émotion, nombre de couleurs.', ar: 'حلّل صفحات Instagram لـ5 علامات جزائرية. لكل منشور شهير: اللون الرئيسي، المشاعر، عدد الألوان.', en: 'Analyze Instagram pages of 5 Algerian brands. For each popular post: main color, emotion, number of colors.' },
            exercise: { fr: 'Générez 5 palettes sur coolors.co. Pour chacune: nommez un type entreprise algérienne et expliquez pourquoi les couleurs correspondent.', ar: 'ولّد 5 باليتات على coolors.co. لكل واحدة: سمّي نوع مشروع جزائري وشرح لماذا الألوان تناسبه.', en: 'Generate 5 palettes on coolors.co. For each name an Algerian business type and explain why colors fit.' },
            tip: { fr: '💡 En cas de doute: texte noir sur blanc + UNE couleur accent. Toujours professionnel.', ar: '💡 في حالة الشك: نص أسود على أبيض + لون accent واحد. دائماً يبان محترف.', en: '💡 When in doubt: black text on white + ONE accent color. Always looks professional.' }
          },
          {
            id: 'd-b-4',
            title: { fr: 'Typographie', ar: 'الخطوط', en: 'Typography' },
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['fonts.google.com — 1400+ polices gratuites. Serif=formel. Sans-serif=moderne.','Maximum 2 familles: une décorative pour TITRES une lisible pour CORPS.','Hiérarchie: Titre 36-72px. Sous-titre 18-28px. Corps 14-16px.','Dans Canva: cliquez texte → nom police → recherchez → sélectionnez.','Espacement lettres MAJUSCULES: Canva → Espacement → +50 à +150 pour look premium.','Évitez: Comic Sans, Papyrus, Times New Roman.'],
              ar: ['fonts.google.com — +1400 خط مجاني. Serif=رسمي. Sans-serif=عصري.','أقصاه عائلتين: واحد زخرفي للعناوين وواحد واضح للنص.','الهرمية: عنوان 36-72px. فرعي 18-28px. نص 14-16px.','في Canva: اضغط نص → اسم الخط → ابحث → اختار.','تباعد الحروف الكبيرة: Canva → تباعد → +50 إلى +150 للمظهر الفاخر.','تجنّب: Comic Sans، Papyrus، Times New Roman.'],
              en: ['fonts.google.com 1400+ free fonts. Serif=formal. Sans-serif=modern.','Maximum 2 families: one decorative for TITLES one readable for BODY.','Hierarchy: Title 36-72px. Subtitle 18-28px. Body 14-16px.','In Canva: click text → font name → search → select.','Letter spacing UPPERCASE: Canva → Spacing → +50 to +150 for premium look.','Avoid: Comic Sans, Papyrus, Times New Roman.']
            },
            method: { fr: 'Allez sur fontpair.co — parcourez 20 associations. Pour chacune: quel type entreprise convient-il?', ar: 'روح لـ fontpair.co — شوف 20 تركيبة. لكل واحدة: أنهي نوع مشروع يناسبها؟', en: 'Go to fontpair.co browse 20 pairings. For each: what type of business does this suit?' },
            exercise: { fr: 'Designez la même carte de visite 4 fois: Classique, Moderne, Créative, Premium. Laquelle pour restaurant, cabinet, boutique?', ar: 'صمّم نفس بطاقة الأعمال 4 مرات: كلاسيكي، عصري، إبداعي، فاخر. أيها لمطعم، مكتب، بوتيك؟', en: 'Design the same business card 4 times: Classic Modern Creative Premium. Which for restaurant office boutique?' },
            tip: { fr: '💡 Pour arabe: Cairo, Tajawal ou Noto Kufi Arabic — Google Fonts modernes gratuits.', ar: '💡 للعربية: Cairo، Tajawal أو Noto Kufi Arabic — خطوط Google عصرية ومجانية.', en: '💡 For Arabic: Cairo, Tajawal, or Noto Kufi Arabic — modern free Google Fonts.' }
          },
          {
            id: 'd-b-5',
            title: { fr: 'Créer un Logo de Zéro', ar: 'إنشاء شعار من الصفر', en: 'Create a Logo from Zero' },
            image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['Brief: Nom? Activité? Clients? 3 adjectifs décrivant la marque?','Recherche: logo + secteur sur Google. 10 logos concurrents.','Esquisse: 10 concepts en 15 minutes sur papier. Sans effacement.','Canva: Taille 500x500px. Éléments → icônes. Icône + nom. 3 couleurs.','Test N&B: Téléchargez avec filtre noir et blanc. Si encore beau = vrai logo.','Livraison: PNG transparent, PNG blanc, PNG noir, PDF impression.'],
              ar: ['البريف: الاسم؟ النشاط؟ الزبائن؟ 3 صفات للعلامة؟','البحث: logo + القطاع في Google. 10 شعارات منافسين.','الرسم: 10 أفكار في 15 دقيقة على الورق. بلا محو.','Canva: حجم 500x500px. عناصر → أيقونات. أيقونة + اسم. 3 ألوان.','اختبار أسود/أبيض: حمّل بفلتر. إذا زال يبان زين = شعار حقيقي.','التسليم: PNG شفاف، PNG أبيض، PNG أسود، PDF طباعة.'],
              en: ['Brief: Name? Activity? Customers? 3 adjectives describing the brand?','Research: logo + industry on Google. 10 competitor logos.','Sketch: 10 concepts in 15 minutes on paper. No erasing.','Canva: Size 500x500px. Elements → icons. Icon + name. 3 colors.','B&W test: Download with black and white filter. If still good = real logo.','Delivery: PNG transparent PNG white PNG black PDF print.']
            },
            method: { fr: 'RE-CRÉEZ des logos existants. Prenez Djezzy ou Ooredoo et reconstruisez dans Canva.', ar: 'أعد إنشاء شعارات موجودة. خذ Djezzy أو Ooredoo وأعد بناؤها في Canva.', en: 'RE-CREATE existing logos. Take Djezzy or Ooredoo and rebuild in Canva.' },
            exercise: { fr: 'Logo complet pour ATLAS café premium algérien: 3 variantes couleur, 1 noir, 1 blanc. 3 phrases expliquant chaque choix.', ar: 'شعار كامل لـ ATLAS قهوة جزائرية فاخرة: 3 ألوان، نسخة سوداء، بيضاء. 3 جمل تشرح كل اختيار.', en: 'Complete logo for ATLAS premium Algerian café: 3 color variants 1 black 1 white. 3 sentences explaining each choice.' },
            tip: { fr: '💡 Les logos les plus professionnels sont les plus simples. Apple = une pomme. Nike = un swoosh.', ar: '💡 أكثر الشعارات احترافية هي الأبسط. Apple = تفاحة. Nike = swoosh.', en: '💡 The most professional logos are the simplest. Apple = an apple. Nike = a swoosh.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
        goal: { fr: 'Passer de Canva à Photoshop construire de vrais projets clients', ar: 'الانتقال من Canva لـ Photoshop وبناء مشاريع حقيقية', en: 'Move from Canva to Photoshop build real client projects' },
        lessons: [
          {
            id: 'd-i-1',
            title: { fr: 'Photopea — Photoshop Gratuit', ar: 'Photopea — بديل Photoshop المجاني', en: 'Photopea — Free Photoshop Alternative' },
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
            layout: 'left',
            steps: {
              fr: ['photopea.com fonctionne dans le navigateur identique à Photoshop à 99% gratuit.','Interface: Gauche=Outils. Droite=Calques. Haut=Options. Centre=Canvas.','CALQUES: Feuilles transparentes empilées. Chaque élément sur son propre calque.','Ouvrir photo: Fichier → Ouvrir. Double-cliquez Arrière-plan → OK pour déverrouiller.','Supprimer fond: Baguette magique → cliquez fond → Delete. Complexe: Sélection → Objet.','Texte: T → cliquez canvas → tapez → changez police taille couleur.','Exporter: Fichier → Exporter → Exporter sous → PNG cochez Transparence ou JPEG.'],
              ar: ['photopea.com يشتغل في المتصفح شبه Photoshop بـ99% مجاني.','الواجهة: يسار=أدوات. يمين=طبقات. أعلى=خيارات. وسط=Canvas.','الطبقات: أوراق شفافة مكدّسة. كل عنصر على طبقته الخاصة.','فتح صورة: ملف → فتح. انقر مرتين الخلفية → OK لفتحها.','إزالة خلفية: عصا سحرية → اضغط الخلفية → Delete. معقد: تحديد → موضوع.','نص: T → اضغط Canvas → اكتب → غيّر الخط الحجم اللون.','تصدير: ملف → تصدير → تصدير كـ → PNG فعّل الشفافية أو JPEG.'],
              en: ['photopea.com runs in browser 99% identical to Photoshop free.','Interface: Left=Tools. Right=Layers. Top=Options. Center=Canvas.','LAYERS: Transparent sheets stacked. Each element on its own layer.','Open photo: File → Open. Double-click Background → OK to unlock.','Remove background: Magic Wand → click background → Delete. Complex: Select → Subject.','Text: T → click canvas → type → change font size color.','Export: File → Export → Export As → PNG check Transparency or JPEG.']
            },
            method: { fr: 'Sur Photopea: ouvrez un produit supprimez arrière-plan ajoutez fond coloré + texte prix. Simulation parfaite pub.', ar: 'على Photopea: افتح منتج ازل الخلفية زيد خلفية ملونة + نص سعر. محاكاة إعلان حقيقي.', en: 'On Photopea: open a product remove background add colored background + price text. Perfect ad simulation.' },
            exercise: { fr: 'Photo produit algérien: supprimez fond dans Photopea placez sur blanc ajoutez prix + nom + ombre. Exportez PNG.', ar: 'صورة منتج جزائري: ازل الخلفية في Photopea حطّها على أبيض زيد سعر + اسم + ظل. صدّر PNG.', en: 'Algerian product photo: remove background in Photopea place on white add price + name + shadow. Export PNG.' },
            tip: { fr: '💡 Ombre: clic droit calque → Fusion → Ombre portée → opacité 40% distance 10px flou 20px.', ar: '💡 الظل: انقر يمين الطبقة → خيارات المزج → ظل مسقط → شفافية 40% مسافة 10px تعتيم 20px.', en: '💡 Shadow: right-click layer → Blending Options → Drop Shadow → opacity 40% distance 10px blur 20px.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 11–20', ar: 'الأسابيع 11–20', en: 'Weeks 11–20' },
        goal: { fr: 'Maîtriser Illustrator livrer des identités complètes fixer des tarifs professionnels', ar: 'إتقان Illustrator تسليم هويات كاملة تحديد أسعار احترافية', en: 'Master Illustrator deliver full brand identities set professional rates' },
        lessons: [
          {
            id: 'd-a-1',
            title: { fr: 'Adobe Illustrator Vecteurs', ar: 'Adobe Illustrator الفيكتور', en: 'Adobe Illustrator Vectors' },
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['Inkscape inkscape.org 100% gratuit très similaire à Illustrator.','Vecteurs: un logo vectoriel adapte de carte de visite à panneau 10m sans perte.','Outil Plume P: Cliquez=angle droit. Cliquez+glissez=courbe. Cliquez départ=fermer.','Tracer logo: Importez image → verrouillez calque → nouveau calque → tracez Plume.','Pathfinder: Unir fusionner Soustraction soustraire Intersection chevaucher.','Couleurs: sélectionnez forme → carré Remplissage bas gauche → entrez code hex.'],
              ar: ['Inkscape inkscape.org مجاني 100% شبيه جداً بـ Illustrator.','الفيكتور: شعار فيكتور يتكيّف من بطاقة لإعلان 10م بدون فقدان جودة.','أداة القلم P: اضغط=زاوية مستقيمة. اضغط+اسحب=منحنى. اضغط البداية=أغلق.','تتبع شعار: استورد صورة → اقفل الطبقة → طبقة جديدة → تتبّع بالقلم.','Pathfinder: توحيد دمج طرح إزالة تقاطع الاحتفاظ بالتداخل.','الألوان: اختار شكل → مربع التعبئة أسفل يسار → أدخل كود hex.'],
              en: ['Inkscape inkscape.org 100% free very similar to Illustrator.','Vectors: a vector logo scales from business card to 10m billboard without quality loss.','Pen Tool P: Click=straight corner. Click+drag=curve. Click start=close shape.','Trace logo: Import image → lock layer → new layer → trace with Pen Tool.','Pathfinder: Unite merge Minus Front subtract Intersect overlap only.','Colors: select shape → Fill square bottom left → enter hex code.']
            },
            method: { fr: 'Imprimez un logo simple 3-5 formes. Tracez chaque forme avec UNIQUEMENT Outil Plume dans Inkscape. Répétez pour 5 logos sur une semaine.', ar: 'اطبع شعاراً بسيطاً 3-5 أشكال. تتبّع كل شكل بأداة القلم فقط في Inkscape. كرّر لـ5 شعارات على أسبوع.', en: 'Print a simple logo 3-5 shapes. Trace every shape with ONLY the Pen Tool in Inkscape. Repeat for 5 logos over one week.' },
            exercise: { fr: 'Recréez logo Ooredoo ou Djezzy dans Inkscape: Outil Plume + Pathfinder uniquement. Comparez au logo original.', ar: 'أعد إنشاء شعار Ooredoo أو Djezzy في Inkscape: أداة القلم + Pathfinder فقط. قارن مع الأصل.', en: 'Recreate Ooredoo or Djezzy logo in Inkscape: Pen Tool + Pathfinder only. Compare to the original.' },
            tip: { fr: '💡 Client avec logo JPEG: proposez de le redessiner en vectoriel. Facturez 3000-8000 DZD. Durée 30-90 minutes.', ar: '💡 زبون بشعار JPEG: اقترح إعادة رسمه كفيكتور. اشحن 3000-8000 دج. المدة 30-90 دقيقة.', en: '💡 Client with JPEG logo: offer to redraw as vector. Charge 3000-8000 DZD. Duration 30-90 minutes.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une agence de design embaucher des juniors', ar: 'إدارة أجنسي تصميم توظيف مساعدين', en: 'Run a design agency hire juniors' },
        lessons: [
          {
            id: 'd-m-1',
            title: { fr: 'De Freelance à Agence', ar: 'من فريلانس لأجنسي', en: 'From Freelancer to Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Bon moment: travail constant > capacité seul ET vous refusez des projets. Pas avant.','Collaborateur: votre meilleur étudiant ou designer en ligne. Paiement par projet.','Rôles: Vous=acquisition propositions qualité. Eux=exécution. Payez-les 40-50%.','Marque agence: Nom logo Instagram site Carrd.co gratuit 30 min.','Forfaits: Starter 25K/mois. Croissance 55K/mois. Premium 100K+/mois. DZD','Ciblez les agences publicitaires: 1 client agence = 10 clients individuels.'],
              ar: ['الوقت المناسب: عمل مستمر > طاقتك وحدك وترفض مشاريع. مش قبل.','المتعاون: أحسن طالب أو مصمم أونلاين. دفع بالمشروع.','الأدوار: أنت=استقطاب عروض جودة. هم=تنفيذ. ادفع لهم 40-50%.','علامة الأجنسي: اسم شعار Instagram موقع Carrd.co مجاني 30 دقيقة.','الباقات: Starter 25K/شهر. نمو 55K/شهر. Premium 100K+/شهر. دج','استهدف وكالات الإعلان: زبون أجنسي واحد = 10 زبائن أفراد.'],
              en: ['Right time: constant work > your capacity alone AND refusing projects. Not before.','Collaborator: your best student or online designer. Pay per project.','Roles: You=acquisition proposals quality. Them=execution. Pay them 40-50%.','Agency brand: Name logo Instagram Carrd.co site free 30 min.','Packages: Starter 25K/month. Growth 55K/month. Premium 100K+/month. DZD','Target advertising agencies: 1 agency client = 10 individual clients.']
            },
            method: { fr: 'Fake pitch: trouvez entreprise avec mauvais design. Refaites logo + 3 posts gratuitement. Envoyez: Je voulais vous montrer ce qui est possible.', ar: 'عرض وهمي: لقّي مشروعاً بتصميم ضعيف. أعد تصميم الشعار + 3 منشورات مجاناً. أرسل: أردت أن أريك ما هو ممكن.', en: 'Fake pitch: find business with bad design. Redo logo + 3 posts for free. Send: I wanted to show you what is possible.' },
            exercise: { fr: 'Identifiez 3 entreprises algériennes avec design faible. Refonte non sollicitée pour 1: logo + 2 posts. Message prospection. Publiez comme concept.', ar: 'حدّد 3 مشاريع جزائرية بتصميم ضعيف. إعادة تصميم غير مطلوبة لواحد: شعار + 2 منشور. رسالة تواصل. انشر كمشروع مفهوم.', en: 'Identify 3 Algerian businesses with weak design. Unsolicited redesign for 1: logo + 2 posts. Outreach message. Publish as concept project.' },
            tip: { fr: '💡 Stratégie la plus rapide: spécialisez-vous dans UN secteur. Les spécialistes facturent toujours plus.', ar: '💡 أسرع استراتيجية: تخصّص في قطاع واحد. المتخصصون دائماً يشحنون أكثر.', en: '💡 Fastest strategy: specialize in ONE sector. Specialists always charge more.' }
          }
        ]
      }
    ]
  },

  // ============================================================
  // SKILL 2: SOCIAL MEDIA MANAGEMENT (original)
  // ============================================================
  {
    id: 'smm',
    icon: '📱',
    color: '#059669',
    accent: '#34D399',
    bg: '#021A12',
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
        goal: { fr: 'Comprendre les algorithmes et créer votre première stratégie de contenu', ar: 'تفهم الخوارزميات وتصنع أول استراتيجية محتوى', en: 'Understand algorithms and create your first content strategy' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un Compte Business', ar: 'إعداد حساب Business', en: 'Set Up a Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Instagram: Profil → 3 lignes → Paramètres → Compte → Passer en compte professionnel → Business.','Facebook: facebook.com/pages/create → Entreprise → nom + catégorie → remplissez TOUS les champs.','Meta Business Suite: business.facebook.com → connectez Page + Instagram → gère les deux.','WhatsApp Business: téléchargez app → numéro professionnel → liez dans Facebook. Indispensable Algérie.','Profil 100%: photo bio 80 chars lien bio linktr.ee gratuit localisation bouton contact.','Dossier Contenu Client: Photos Vidéos Légendes Posts approuvés.'],
              ar: ['Instagram: بروفيل → 3 خطوط → إعدادات → حساب → تحويل لحساب محترف → Business.','Facebook: facebook.com/pages/create → مشروع → اسم + فئة → اكمل كل الحقول.','Meta Business Suite: business.facebook.com → اربط الصفحة + Instagram → تدير الاثنين.','WhatsApp Business: حمّل التطبيق → رقم احترافي → اربط في Facebook. ضروري للجزائر.','بروفيل 100%: صورة bio 80 حرف رابط bio linktr.ee مجاني موقع زر تواصل.','مجلد محتوى الزبون: صور فيديوهات تعليقات منشورات معتمدة.'],
              en: ['Instagram: Profile → 3 lines → Settings → Account → Switch to Professional → Business.','Facebook: facebook.com/pages/create → Business → name + category → fill in EVERY field.','Meta Business Suite: business.facebook.com → connect Page + Instagram → manages both.','WhatsApp Business: download app → business number → link in Facebook. Essential Algeria.','Profile 100%: photo bio 80 chars bio link linktr.ee free location contact button.','Create Client Content folder: Photos Videos Captions Approved posts.']
            },
            method: { fr: 'Créez un compte test Instagram avec un nouvel email. Appelez-le DZFoodTestAccount. Votre bac à sable pour tester chaque stratégie.', ar: 'أنشئ حساب Instagram تجريبي بإيميل جديد. سمّيه DZFoodTestAccount. صندوق رملك لتجربة كل استراتيجية.', en: 'Create a test Instagram account with a new email. Call it DZFoodTestAccount. Your sandbox to test every strategy.' },
            exercise: { fr: 'Configurez un profil business complet pour un restaurant fictif sur Instagram ET Facebook. Connectez les deux à Meta Business Suite. Capturez le profil 100% comme preuve.', ar: 'اعدد بروفيل business كامل لمطعم وهمي على Instagram وFacebook. اربط الاثنين بـ Meta Business Suite. صوّر البروفيل 100% كدليل.', en: 'Set up a complete business profile for a fictional restaurant on Instagram AND Facebook. Connect both to Meta Business Suite. Screenshot the 100% complete profile as proof.' },
            tip: { fr: '💡 Lien en bio: utilisez linktr.ee pour une page gratuite avec plusieurs boutons WhatsApp Facebook Menu Maps.', ar: '💡 رابط البروفيل: استخدم linktr.ee لصفحة مجانية بعدة أزرار WhatsApp Facebook قائمة خرائط.', en: '💡 Bio link: use linktr.ee to create a free page with multiple buttons WhatsApp Facebook Menu Maps.' }
          },
          {
            id: 's-b-2',
            title: { fr: 'Comment Fonctionne Algorithme Instagram', ar: 'كيفاش تشتغل خوارزمية Instagram', en: 'How the Instagram Algorithm Works' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['Algorithme a UN objectif: garder les gens sur app. Montre contenu le plus susceptible engager.','5 signaux: 1.SAUVEGARDES fort. 2.PARTAGES. 3.COMMENTAIRES +10 mots. 4.LIKES. 5.TEMPS VISIONNAGE.','Ingéniez sauvegardes: terminez chaque post éducatif par Sauvegardez ce post.','Ingéniez commentaires: question spécifique fin légende. Entre tajine et couscous ce week-end?','Insights: post → Voir les insights. Comptes touchés impressions interactions.','Meilleures heures Algérie: 12h-13h30, 18h-20h, 21h-23h.'],
              ar: ['الخوارزمية لها هدف واحد: تبقّي الناس على التطبيق. تعرض المحتوى الأكثر تفاعلاً.','5 إشارات: 1.الحفظ الأقوى. 2.المشاركة. 3.التعليقات +10 كلمات. 4.الإعجابات. 5.وقت المشاهدة.','اهندس الحفظ: اختم كل منشور تعليمي بـ احفظ هذا المنشور.','اهندس التعليقات: سؤال محدد في نهاية التعليق. بين الطاجين والكسكس هذا الويكند؟','Insights: منشور → عرض الإحصائيات. الحسابات المُوصَلة مرات الظهور التفاعلات.','أفضل أوقات الجزائر: 12-13:30، 18-20، 21-23.'],
              en: ['Algorithm has ONE goal: keep people on the app. Shows content most likely to engage.','5 signals: 1.SAVES strongest. 2.SHARES. 3.COMMENTS 10+ words. 4.LIKES. 5.WATCH TIME.','Engineer saves: end every educational post with Save this post.','Engineer comments: specific question at end. Between tajine and couscous this weekend?','Insights: post → View Insights. Accounts reached impressions interactions.','Best times Algeria: 12pm-1:30pm 6pm-8pm 9pm-11pm.']
            },
            method: { fr: 'Regardez 20 derniers posts comptes avec fort engagement. Pour chacun: question dans légende? CTA sauvegarde? Notez le pattern.', ar: 'شوف آخر 20 منشور للحسابات بتفاعل عالٍ. لكل واحد: سؤال في التعليق؟ CTA للحفظ؟ لاحظ النمط.', en: 'Look at last 20 posts from accounts with high engagement. For each: question in caption? Save CTA? Note the pattern.' },
            exercise: { fr: 'Sur votre compte test: publiez 3 posts en 3 jours. Post 1: photo sans CTA. Post 2: carrousel + Sauvegardez. Post 3: photo + question. Comparez Insights après 48h.', ar: 'على حسابك التجريبي: انشر 3 منشورات في 3 أيام. منشور 1: صورة بدون CTA. منشور 2: كاروسيل + احفظ. منشور 3: صورة + سؤال. قارن Insights بعد 48 ساعة.', en: 'On your test account: publish 3 posts over 3 days. Post 1: photo no CTA. Post 2: carousel + Save. Post 3: photo + question. Compare Insights after 48h.' },
            tip: { fr: '💡 Instagram supprime posts avec liens externes dans LÉGENDE. Toujours dire lien en bio.', ar: '💡 Instagram يُخفّض المنشورات التي تحتوي روابط في التعليق. دائماً قل الرابط في البروفيل.', en: '💡 Instagram suppresses posts with external links in the CAPTION. Always say link in bio.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–9', ar: 'الأسابيع 4–9', en: 'Weeks 4–9' },
        goal: { fr: 'Créer des Reels lancer des pubs gérer votre premier vrai client', ar: 'إنشاء Reels إطلاق إعلانات إدارة أول زبون حقيقي', en: 'Create Reels run ads manage your first real client' },
        lessons: [
          {
            id: 's-i-1',
            title: { fr: 'Créer un Reel qui Génère de Vraies Vues', ar: 'إنشاء Reel يحصل على مشاهدات حقيقية', en: 'Create a Reel That Gets Real Views' },
            image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Règle 0.5 seconde: premier frame doit stopper le scroll. JAMAIS logo ou écran intro.','Structure: Accroche 0-2s Setup 2-8s Payoff 8-20s CTA dernières 2s.','Tournage: téléphone VERTICAL 9:16. Caméra arrière. Regardez OBJECTIF pas écran.','CapCut: Nouveau projet → clips → Split pour couper → Texte → Auto Captions.','Audio tendance: onglet Reels → flèche tendance → utilisez cet audio.','Sous-titres obligatoires: 60% regardent sans son. CapCut → Texte → Sous-titres automatiques.'],
              ar: ['قاعدة 0.5 ثانية: أول إطار يجب أن يوقف التمرير. أبداً لا شعار أو شاشة مقدمة.','الهيكل: خطّاف 0-2 ث إعداد 2-8 ث النتيجة 8-20 ث CTA آخر 2 ث.','التصوير: هاتف عمودي 9:16. الكاميرا الخلفية. انظر للعدسة مش الشاشة.','CapCut: مشروع جديد → كليبات → Split للقطع → نص → تعليقات تلقائية.','الصوت الرائج: تبويب Reels → سهم الترند → استخدم هذا الصوت.','ترجمة إلزامية: 60% يشاهدون بدون صوت. CapCut → نص → تعليقات تلقائية.'],
              en: ['0.5 second rule: first frame must stop the scroll. NEVER a logo or intro screen.','Structure: Hook 0-2s Setup 2-8s Payoff 8-20s CTA last 2s.','Filming: phone VERTICAL 9:16. Back camera. Look at LENS not screen.','CapCut: New project → clips → Split to cut → Text → Auto Captions.','Trending audio: Reels tab → trending arrow → use this audio.','Subtitles mandatory: 60% watch without sound. CapCut → Text → Auto Captions.']
            },
            method: { fr: 'Regardez Reels 20 minutes consciemment pour étudier. Chaque Reel qui vous garde 5s+: pause. Quest-ce qui était accroche? Notez résultats.', ar: 'شاهد Reels 20 دقيقة بوعي للدراسة. كل Reel يبقيك +5 ثوانٍ: توقف. ما كان الخطّاف؟ دوّن نتائجك.', en: 'Watch Reels consciously for 20 minutes to study. Every Reel that keeps you 5s+: pause. What was the hook? Note your findings.' },
            exercise: { fr: 'Filmez et éditez 3 Reels: 1 Avant Après. 2 3 Conseils éducatif. 3 Coulisses. Publiez sur compte test. Comparez vues après 48h.', ar: 'صوّر وعدّل 3 Reels: 1 قبل/بعد. 2 3 نصائح تعليمي. 3 كواليس. انشر على حسابك التجريبي. قارن المشاهدات بعد 48 ساعة.', en: 'Film and edit 3 Reels: 1 Before After. 2 Educational 3 Tips. 3 Behind the scenes. Post on test account. Compare views after 48h.' },
            tip: { fr: '💡 Publiez votre meilleur Reel à 19h heure algérienne. Utilisez Meta Business Suite pour programmer.', ar: '💡 انشر أفضل Reel لديك الساعة 7 مساءً بالتوقيت الجزائري. استخدم Meta Business Suite للجدولة.', en: '💡 Post your best Reel at 7pm Algeria time. Use Meta Business Suite to schedule in advance.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 10–18', ar: 'الأسابيع 10–18', en: 'Weeks 10–18' },
        goal: { fr: 'Développer des stratégies complètes gérer plusieurs clients', ar: 'تطوير استراتيجيات كاملة إدارة عدة زبائن', en: 'Develop full strategies manage multiple clients' },
        lessons: [
          {
            id: 's-a-1',
            title: { fr: 'Document de Stratégie Social Media', ar: 'وثيقة استراتيجية سوشيال ميديا', en: 'Social Media Strategy Document' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Section 1 Audit: followers taux engagement top 5 posts analysés démographie fréquence.','Section 2 Concurrents: 3-5 directs. Followers engagement contenu fréquence. Identifiez GAPS.','Section 3 Persona: profil fictif complet. Nom âge ville job revenus objectifs habitudes.','Section 4 Objectifs SMART: Augmenter engagement de 1.2% à 4.5% en 90 jours.','Section 5 Stratégie 90 jours: plateformes piliers mix formats fréquence hashtags pubs.','Présentez en PDF Canva designé. Vous positionne comme premium avant que client voie tarifs.'],
              ar: ['القسم 1 التدقيق: المتابعون معدل التفاعل أفضل 5 منشورات محللة ديموغرافية تكرار النشر.','القسم 2 المنافسون: 3-5 مباشرين. متابعون تفاعل محتوى تكرار. حدّد الثغرات.','القسم 3 الشخصية: ملف خيالي كامل. الاسم العمر المدينة العمل الدخل الأهداف العادات.','القسم 4 أهداف SMART: زيادة التفاعل من 1.2% إلى 4.5% في 90 يوماً.','القسم 5 استراتيجية 90 يوماً: منصات ركائز مزيج صيغ تكرار هاشتاقات إعلانات.','قدّمها كـ PDF Canva مصمّم. يضعك كخيار premium قبل أن يرى الزبون أسعارك.'],
              en: ['Section 1 Audit: followers engagement rate top 5 posts analyzed demographics posting frequency.','Section 2 Competitors: 3-5 direct. Followers engagement content frequency. Identify GAPS.','Section 3 Persona: complete fictional profile. Name age city job income goals habits.','Section 4 SMART Goals: Increase engagement from 1.2% to 4.5% in 90 days.','Section 5 90-day strategy: platforms pillars format mix frequency hashtags ads.','Present as designed Canva PDF. Positions you as premium before client sees your rates.']
            },
            method: { fr: 'Rédigez votre premier document pour une vraie entreprise locale même si elle ne vous a pas engagé. Envoyez-le en cadeau gratuit. Taux de réponse extrêmement élevé.', ar: 'اكتب أول وثيقة لمشروع محلي حقيقي حتى لو لم يوظّفك. أرسلها كهدية مجانية. معدل استجابة مرتفع جداً.', en: 'Write your first document for a real local business even if they have not hired you. Send it as a free gift. Extremely high response rate.' },
            exercise: { fr: 'Document complet min 8 pages PDF Canva pour une entreprise algérienne. Toutes les 5 sections.', ar: 'وثيقة كاملة 8 ص PDF Canva على الأقل لمشروع جزائري. كل الأقسام الخمسة.', en: 'Complete document min 8 pages Canva PDF for an Algerian business. All 5 sections.' },
            tip: { fr: '💡 Ne dites jamais je pense. Dites les données montrent. La confiance par les données = ce que les clients paient.', ar: '💡 لا تقل أبداً أعتقد. قل البيانات تُظهر. الثقة بالبيانات هي ما يدفع الزبائن.', en: '💡 Never say I think. Say the data shows. Confidence backed by data is what clients pay for.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 5+', ar: 'الشهر 5+', en: 'Month 5+' },
        goal: { fr: 'Construire une agence SMM avec clients récurrents', ar: 'بناء أجنسي SMM مع زبائن متكررين', en: 'Build an SMM agency with recurring clients' },
        lessons: [
          {
            id: 's-m-1',
            title: { fr: 'Construire une Agence SMM', ar: 'بناء أجنسي SMM', en: 'Build an SMM Agency' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Mindset: freelance vend son temps. Agence vend des résultats. Garantissez des métriques spécifiques.','Garantie: définissez quelle métrique vous livrez avec confiance. Continuez gratuitement si vous manquez.','Premier membre: Community Manager 3-4h/jour. 15000-25000 DZD/mois. Groupes Facebook Algeria.','Tarification: Starter 15K/mois. Croissance 35K/mois. Premium 65K+/mois. DZD','Acquisition: Référrals 10% commission DMs Instagram froids partenariats designers devs.','Case study: documentez 1 succès client avant actions après. Instagram carousel + PDF.'],
              ar: ['العقلية: فريلانسر يبيع وقته. أجنسي يبيع النتائج. اضمن مقاييس محددة.','الضمان: حدّد أي مقياس تسلّمه بثقة. استمر مجاناً إذا فاتتك الهدف.','أول عضو: مدير مجتمع 3-4 ساعات/يوم. 15000-25000 دج/شهر. مجموعات Facebook الجزائر.','التسعير: Starter 15K/شهر. نمو 35K/شهر. Premium +65K/شهر. دج','الاستقطاب: إحالات عمولة 10% DMs Instagram باردة شراكات مصممين مطورين.','دراسة الحالة: وثّق نجاح زبون واحد قبل الإجراءات بعد. كاروسيل Instagram + PDF.'],
              en: ['Mindset: freelancer sells time. Agency sells results. Guarantee specific metrics.','Guarantee: define what metric you confidently deliver. Continue free if you miss the target.','First member: Community Manager 3-4h/day. 15000-25000 DZD/month. Algeria Facebook groups.','Pricing: Starter 15K/month. Growth 35K/month. Premium 65K+/month. DZD','Acquisition: Referrals 10% commission cold Instagram DMs partnerships designers devs.','Case study: document 1 client success before actions after. Instagram carousel + PDF.']
            },
            method: { fr: 'Documentez UNE histoire de succès: métriques avant ce que vous avez fait métriques 3 mois après. Ce contenu vous apportera plus de clients que tout discours commercial.', ar: 'وثّق قصة نجاح واحدة: المقاييس قبل ما فعلته المقاييس 3 أشهر بعد. هذا المحتوى يجلب أكثر من أي عرض بيع.', en: 'Document ONE success story: metrics before what you did metrics 3 months after. This content brings more clients than any sales pitch.' },
            exercise: { fr: 'Modèle affaires sur 1 page: votre niche 3 forfaits avec prix votre garantie 3 canaux acquisition objectif revenus 6 mois.', ar: 'نموذج عمل في صفحة واحدة: نيشتك 3 باقات مع أسعار ضمانك 3 قنوات استقطاب هدف الإيرادات 6 أشهر.', en: 'Business model on 1 page: your niche 3 packages with prices your guarantee 3 acquisition channels 6-month revenue goal.' },
            tip: { fr: '💡 Chemin le plus rapide: 1 client → résultats exceptionnels → 1 référral → répétez. Pas besoin site ou pub pour commencer.', ar: '💡 أسرع طريق: زبون 1 → نتائج استثنائية → إحالة 1 → كرّر. لا تحتاج موقع أو إعلانات للبدء.', en: '💡 Fastest path: 1 client → exceptional results → 1 referral → repeat. No need for website or ads to start.' }
          }
        ]
      }
    ]
  },

  // ============================================================
  // SKILL 3: VIDEO EDITING (original)
  // ============================================================
  {
    id: 'video',
    icon: '🎬',
    color: '#DC2626',
    accent: '#F87171',
    bg: '#1A0303',
    earning: '8,000 – 80,000 DZD/project',
    firstClient: { fr: '4–6 semaines', ar: '4–6 أسابيع', en: '4–6 weeks' },
    startTool: 'CapCut (free) → DaVinci Resolve (free)',
    title: { fr: 'Montage Vidéo', ar: 'مونتاج الفيديو', en: 'Video Editing' },
    subtitle: { fr: 'Création de Contenu', ar: 'إنشاء المحتوى', en: 'Content Creation' },
    tagline: { fr: 'La compétence créative la plus demandée de la décennie', ar: 'أكثر مهارة إبداعية مطلوبة في العقد', en: 'The most in-demand creative skill of the decade' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Monter votre première vidéo complète avec CapCut sur téléphone', ar: 'تعديل أول فيديو كامل باستخدام CapCut على هاتفك', en: 'Edit your first complete video using CapCut on your phone' },
        lessons: [
          {
            id: 'v-b-1',
            title: { fr: 'Installer CapCut et Monter votre Première Vidéo', ar: 'تنصيب CapCut وتعديل أول فيديو', en: 'Install CapCut and Edit Your First Video' },
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Téléchargez CapCut depuis Google Play ou App Store gratuit sans filigrane.','Ouvrez CapCut → + → sélectionnez vidéos et photos → Ajouter → timeline s\'ouvre.','Timeline: clips = blocs. Tapez clip → sélectionné. Bas: Split Delete Speed.','Couper: faites glisser la ligne blanche vers le moment voulu → Split → Delete partie non voulue.','Musique: Audio → Sons → recherchez → +. Volume → baissez à 30% si vous avez dialogue.','Texte: Texte → Ajouter → tapez → choisissez police couleur → faites glisser pour positionner.','Exporter: flèche haut droite → 1080p et 30fps → exportez.'],
              ar: ['حمّل CapCut من Google Play أو App Store مجاني بدون علامة مائية.','افتح CapCut → + → اختار فيديوهات وصور → أضف → الجدول الزمني يفتح.','الجدول الزمني: الكليبات = بلوكات. اضغط كليب → محدد. الأسفل: Split Delete Speed.','القطع: اسحب الخط الأبيض للحظة المطلوبة → Split → احذف الجزء غير المرغوب.','الموسيقى: Audio → أصوات → ابحث → +. Volume → خفّض لـ30% إذا كان لديك حوار.','النص: نص → أضف → اكتب → اختار خط لون → اسحب للتموضع.','التصدير: سهم أعلى يمين → 1080p و30fps → صدّر.'],
              en: ['Download CapCut from Google Play or App Store free no watermark.','Open CapCut → + → select videos and photos → Add → timeline opens.','Timeline: clips = blocks. Tap clip → selected. Bottom: Split Delete Speed.','Cut: drag white line to the moment you want → Split → Delete unwanted part.','Music: Audio → Sounds → search → +. Volume → lower to 30% if you have dialogue.','Text: Text → Add → type → choose font color → drag to position.','Export: arrow top right → 1080p and 30fps → export.']
            },
            method: { fr: 'Filmez 10 courts clips de nimporte quoi. Importez dans CapCut. Gardez seulement 3 meilleures secondes de chacun. Ajoutez musique. Exportez. Regardez et notez ce qui semble bizarre.', ar: 'صوّر 10 كليبات قصيرة من أي شيء. استورد في CapCut. احتفظ بأحسن 3 ثوانٍ من كل واحد. زيد موسيقى. صدّر. شاهد ولاحظ ما يبدو غريباً.', en: 'Film 10 short clips of anything. Import into CapCut. Keep only best 3 seconds of each. Add music. Export. Watch and note what seems off.' },
            exercise: { fr: 'Vidéo 60 secondes sur votre journée: minimum 8 clips différents musique de fond votre nom en texte au début titre à la fin.', ar: 'فيديو 60 ثانية عن يومك: 8 كليبات مختلفة على الأقل موسيقى خلفية اسمك كنص في البداية عنوان في النهاية.', en: '60-second video about your day: minimum 8 different clips background music your name as text at start title at end.' },
            tip: { fr: '💡 Erreur la plus commune: clips trop longs. Chaque clip devrait faire 1.5-4 secondes max. Le montage rapide semble toujours plus professionnel.', ar: '💡 أكثر خطأ شيوعاً: كليبات طويلة جداً. كل كليب يجب أن يكون 1.5-4 ثوانٍ كحد أقصى.', en: '💡 Most common mistake: clips too long. Every clip should be 1.5-4 seconds max. Fast pacing always looks more professional.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–11', ar: 'الأسابيع 5–11', en: 'Weeks 5–11' },
        goal: { fr: 'Apprendre DaVinci Resolve se spécialiser construire votre portfolio', ar: 'تعلم DaVinci Resolve التخصص بناء بورتفوليوك', en: 'Learn DaVinci Resolve specialize in a video type build your portfolio' },
        lessons: [
          {
            id: 'v-i-1',
            title: { fr: 'DaVinci Resolve L\'Outil Pro Gratuit', ar: 'DaVinci Resolve الأداة الاحترافية المجانية', en: 'DaVinci Resolve Professional Free Tool' },
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['blackmagicdesign.com → DaVinci Resolve gratuit PAS Studio payant.','Configuration: Fichier → Paramètres projet → 25fps 1920x1080.','5 pages: Cut Edit utilisez celle-ci Fusion Color Fairlight. Commencez Edit + Color.','Importer: Fichier → Importer → Importer médias → Media Pool → faites glisser vers Timeline.','Montage: Lame B=couper. Sélection A=déplacer. Backspace=supprimer.','Exporter: page Deliver → YouTube ou H.264 1080p → Tout rendre.'],
              ar: ['blackmagicdesign.com → DaVinci Resolve مجاني مش Studio مدفوع.','الإعداد: ملف → إعدادات المشروع → 25fps 1920x1080.','5 صفحات: Cut Edit استخدم هذه Fusion Color Fairlight. ابدأ Edit + Color.','الاستيراد: ملف → استيراد → استيراد وسائط → Media Pool → اسحب للجدول الزمني.','المونتاج: شفرة B=قطع. تحديد A=تحريك. Backspace=حذف.','التصدير: صفحة Deliver → YouTube أو H.264 1080p → تصيير الكل.'],
              en: ['blackmagicdesign.com → DaVinci Resolve free NOT Studio paid.','Setup: File → Project Settings → 25fps 1920x1080.','5 pages: Cut Edit use this Fusion Color Fairlight. Start with Edit + Color.','Import: File → Import → Import Media → Media Pool → drag to Timeline.','Editing: Blade B=cut. Selection A=move. Backspace=delete.','Export: Deliver page → YouTube or H.264 1080p → Render All.']
            },
            method: { fr: 'Importez 5 minutes de métrage. Votre seule tâche: coupez chaque moment sans intérêt. Principe fondamental du montage.', ar: 'استورد 5 دقائق من اللقطات. مهمتك الوحيدة: اقطع كل لحظة بلا اهتمام. المبدأ الأساسي للمونتاج.', en: 'Import 5 minutes of footage. Your only task: cut out every uninteresting moment. Core principle of editing.' },
            exercise: { fr: 'Montez une vidéo de 3 minutes dans DaVinci Resolve métrage gratuit sur pexels.com/videos: coupes propres musique libre correction colorimétrique.', ar: 'عدّل فيديو 3 دقائق في DaVinci Resolve لقطات مجانية على pexels.com/videos: قطع نظيفة موسيقى مجانية تصحيح ألوان.', en: 'Edit a 3-minute video in DaVinci Resolve free footage on pexels.com/videos: clean cuts free music color correction.' },
            tip: { fr: '💡 Raccourci pro: I = marquez point IN. O = marquez point OUT. F9 = ajoutez automatiquement à la timeline.', ar: '💡 اختصار احترافي: I = نقطة البداية. O = نقطة النهاية. F9 = أضف تلقائياً للجدول الزمني.', en: '💡 Pro shortcut: I = mark IN point. O = mark OUT point. F9 = automatically add to timeline.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 12–20', ar: 'الأسابيع 12–20', en: 'Weeks 12–20' },
        goal: { fr: 'Maîtriser DaVinci Resolve Color tarifs premium', ar: 'إتقان DaVinci Resolve Color أسعار premium', en: 'Master DaVinci Resolve Color page command premium rates' },
        lessons: [
          {
            id: 'v-a-1',
            title: { fr: 'Maîtriser Étalonnage dans DaVinci Resolve', ar: 'إتقان تصحيح الألوان في DaVinci Resolve', en: 'Master Color Grading in DaVinci Resolve' },
            image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Page Color: graphe de noeuds. Noeud 1=Correction. Noeud 2=Grade créatif.','3 oscilloscopes: Forme onde luminosité. Parade R G B équilibrés. Vectorscope saturation.','Roues primaires: Lift ombres Gamma tons moyens Gain hautes lumières.','Outil Qualificateur: pipette → cliquez couleur → isole SEULEMENT cette couleur.','Correspondance plans: clic droit clip gradé → Capturer image fixe → Appliquer grade.','LUTs: clic droit noeud → LUTs → appliquez. Réduisez opacité à 30-70%. Jamais 100%.'],
              ar: ['صفحة Color: رسم العقد. عقدة 1=تصحيح. عقدة 2=grade إبداعي.','3 أجهزة قياس: شكل الموجة السطوع. Parade R G B متوازنة. Vectorscope التشبع.','العجلات الأساسية: Lift ظلال Gamma أوساط Gain إضاءات.','أداة المؤهّل: قطّارة → اضغط لون → يعزل هذا اللون فقط.','مطابقة اللقطات: انقر يمين كليب → التقاط صورة ثابتة → تطبيق الgrade.','LUTs: انقر يمين عقدة → LUTs → طبّق. قلّل الشفافية لـ30-70%. أبداً 100%.'],
              en: ['Color page: node graph. Node 1=Correction. Node 2=Creative grade.','3 scopes: Waveform brightness. Parade R G B balanced. Vectorscope saturation.','Primary wheels: Lift shadows Gamma midtones Gain highlights.','Qualifier tool: eyedropper → click color → isolates ONLY that color.','Shot matching: right-click graded clip → Grab Still → Apply Grade.','LUTs: right-click node → LUTs → apply. Reduce opacity to 30-70%. Never 100%.']
            },
            method: { fr: 'Gradez le même clip 5 façons: 1 Après-midi dorée. 2 Thriller froid. 3 Film vintage. 4 Action. 5 Romance douce. Exportez les 5.', ar: 'صحّح نفس الكليب بـ5 طرق: 1 بعد ظهر ذهبي. 2 إثارة باردة. 3 فيلم قديم. 4 أكشن. 5 رومانسية ناعمة. صدّر الـ5.', en: 'Grade the same clip 5 ways: 1 Golden afternoon. 2 Cold thriller. 3 Vintage film. 4 Action. 5 Soft romance. Export all 5.' },
            exercise: { fr: 'Téléchargez 3 clips Pexels extérieur portrait nuit. Gradez les 3 pour paraître appartenir au même film. Montrez avant après.', ar: 'حمّل 3 كليبات Pexels خارجي بورتريه ليلي. صحّح الـ3 ليبدوا من نفس الفيلم. أظهر قبل بعد.', en: 'Download 3 Pexels clips outdoor portrait night. Grade all 3 to look like the same film. Show before after.' },
            tip: { fr: '💡 Coloristes utilisent les oscilloscopes pas leurs yeux. Fixez exposition technique dabord. Grade créatif sur exposition mauvaise = toujours mauvais.', ar: '💡 مصححو الألوان يستخدمون أجهزة القياس ليس أعينهم. صحّح الكشف التقني أولاً. grade إبداعي على كشف سيئ = دائماً سيئ.', en: '💡 Colorists use scopes not eyes. Fix technical exposure first. Creative grade on wrong exposure = always bad.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Produire des publicités commerciales construire une société de production', ar: 'إنتاج إعلانات تجارية بناء شركة إنتاج', en: 'Produce commercial videos build a production company' },
        lessons: [
          {
            id: 'v-m-1',
            title: { fr: 'Produire et Monter une Publicité Commerciale', ar: 'إنتاج ومونتاج إعلان تجاري', en: 'Produce and Edit a Commercial Ad' },
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Structure 30-60s: 0-5s=Problème. 5-20s=Solution. 20-28s=Transformation. 28-30s=CTA.','Pré-production: Brief → script → storyboard → liste plans → repérage → talent → planning tournage.','Sur le plateau: dirigez le talent. Minimum 3 prises. Variez angles. Ne quittez pas sans tous les plans.','Post-production: montage image → sound design → étalonnage → graphiques → révision client → export.','Voix off: groupes Facebook voix off algérie ou enregistrez vous-même + Adobe Podcast.','Prix: pub sociale 30s=40-120K. TV=150-500K. Montage seul=divisez par 3. DZD'],
              ar: ['هيكل 30-60 ث: 0-5 ث=مشكلة. 5-20 ث=الحل. 20-28 ث=التحول. 28-30 ث=CTA.','ما قبل الإنتاج: بريف → سكريبت → storyboard → قائمة لقطات → استكشاف → ممثلون → جدول تصوير.','في الموقع: وجّه الممثلين. 3 تسجيلات على الأقل. تنويع الزوايا. لا تغادر بدون كل اللقطات.','ما بعد الإنتاج: مونتاج الصورة → تصميم صوتي → تصحيح ألوان → جرافيك → مراجعة الزبون → تصدير.','الصوت التعليقي: مجموعات Facebook voix off algérie أو سجّل بنفسك + Adobe Podcast.','الأسعار: إعلان سوشيال 30 ث=40-120K. تلفزيون=150-500K. مونتاج فقط=اقسم على 3. دج'],
              en: ['Structure 30-60s: 0-5s=Problem. 5-20s=Solution. 20-28s=Transformation. 28-30s=CTA.','Pre-production: Brief → script → storyboard → shot list → location → talent → shooting schedule.','On set: direct talent. Minimum 3 takes. Vary angles. Do not leave without all shots.','Post-production: picture edit → sound design → color grade → graphics → client review → export.','Voiceover: Facebook groups voix off algérie or record yourself + Adobe Podcast.','Prices: 30s social commercial=40-120K. TV=150-500K. Editing only=divide by 3. DZD']
            },
            method: { fr: 'Créez votre premier pub de démonstration: choisissez un vrai produit local. Écrivez script 30s. Filmez. Montez. Publiez sur Instagram en taguant la marque.', ar: 'أنشئ أول إعلانك التجريبي: اختار منتجاً محلياً حقيقياً. اكتب سكريبت 30 ث. صوّر. عدّل. انشر على Instagram مع وضع علامة للعلامة.', en: 'Create your first spec commercial: choose a real local product. Write 30s script. Film. Edit. Post on Instagram tagging the brand.' },
            exercise: { fr: 'Commercial complet 30s pour Sahara Fresh jus bio algérien: storyboard tournage montage grade vibrant voix off. Exportez horizontal et vertical.', ar: 'إعلان كامل 30 ث لـ Sahara Fresh عصير عضوي جزائري: storyboard تصوير مونتاج grade نابض صوت تعليقي. صدّر أفقي وعمودي.', en: 'Complete 30s commercial for Sahara Fresh Algerian organic juice: storyboard filming editing vibrant grade voiceover. Export horizontal and vertical.' },
            tip: { fr: '💡 Le monteur qui comprend la stratégie publicitaire gagne 3x plus que celui qui ne connait que le logiciel.', ar: '💡 المحرر الذي يفهم استراتيجية الإعلان يكسب 3 أضعاف من يعرف البرنامج فقط.', en: '💡 The editor who understands advertising strategy earns 3x more than one who only knows the software.' }
          }
        ]
      }
    ]
  },

  // ============================================================
  // SKILL 4: WEB DEVELOPMENT (nouveau)
  // ============================================================
  {
    id: 'webdev',
    icon: '💻',
    color: '#F59E0B',
    accent: '#FCD34D',
    bg: '#1A1200',
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
              fr: ['Ouvrez VS Code → Fichier → Nouveau fichier → index.html.','Tapez ! → appuyez Tab pour générer la structure HTML de base.','DOCTYPE html est la déclaration. html est la racine. head contient les métadonnées.','body contient tout ce qui s\'affiche sur la page.','h1 à h6 = titres. p = paragraphe. a = lien (href). img = image (src).','div = conteneur. section = section. main = contenu principal.','Ouvrez le fichier dans le navigateur pour voir le résultat.'],
              ar: ['افتح VS Code → ملف → ملف جديد → index.html.','اكتب ! → اضغط Tab لتوليد هيكل HTML الأساسي.','DOCTYPE html هو التصريح. html هو الجذر. head يحتوي البيانات الوصفية.','body يحتوي كل ما يظهر على الصفحة.','h1 إلى h6 = عناوين. p = فقرة. a = رابط (href). img = صورة (src).','div = حاوية. section = قسم. main = المحتوى الرئيسي.','افتح الملف في المتصفح لمشاهدة النتيجة.'],
              en: ['Open VS Code → File → New File → index.html.','Type ! → press Tab to generate basic HTML structure.','DOCTYPE html is the declaration. html is the root. head contains metadata.','body contains everything displayed on the page.','h1 to h6 = headings. p = paragraph. a = link (href). img = image (src).','div = container. section = section. main = main content.','Open the file in browser to see result.']
            },
            method: { fr: 'Créez 5 pages HTML différentes et ouvrez-les dans le navigateur pour voir la différence.', ar: 'أنشئ 5 صفحات HTML مختلفة وافتحها في المتصفح لترى الفرق.', en: 'Create 5 different HTML pages and open them in browser to see the difference.' },
            exercise: { fr: 'Créez une page "À propos de moi" avec: 1 titre, 1 paragraphe, 1 image, 1 lien vers Google.', ar: 'أنشئ صفحة "عني" بها: عنوان، فقرة، صورة، رابط إلى Google.', en: 'Create an "About Me" page with: 1 heading, 1 paragraph, 1 image, 1 link to Google.' },
            tip: { fr: '💡 Utilisez Emmet pour générer du HTML plus rapidement. Exemple: div.container>p*3', ar: '💡 استخدم Emmet لتوليد HTML أسرع. مثال: div.container>p*3', en: '💡 Use Emmet to generate HTML faster. Example: div.container>p*3' }
          },
          {
            id: 'w-b-2',
            title: { fr: 'CSS - Le style qui rend votre site magnifique', ar: 'CSS - التصميم اللي يخلّي موقعك جميل', en: 'CSS - The style that makes your site beautiful' },
            image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['CSS = Cascading Style Sheets. Fichier style.css lié avec link rel="stylesheet" href="style.css".','Sélecteurs: h1 { color: blue; } = tous les h1 deviennent bleus.','Classes: .ma-classe { } -> utilisez class="ma-classe" dans HTML.','Propriétés courantes: color, background-color, font-size, margin, padding, border, width, height.','Boîte: margin = espace extérieur. padding = espace intérieur. border = contour.','Flexbox: display:flex + justify-content + align-items pour disposition flexible.'],
              ar: ['CSS = أوراق الأنماط المتتالية. ملف style.css مربوط بـ link rel="stylesheet" href="style.css".','المحددات: h1 { color: blue; } = كل h1 يصبح أزرق.','الفئات: .ma-classe { } -> استخدم class="ma-classe" في HTML.','الخصائص الشائعة: color, background-color, font-size, margin, padding, border, width, height.','المربع: margin = المسافة الخارجية. padding = المسافة الداخلية. border = الحدود.','Flexbox: display:flex + justify-content + align-items للترتيب المرن.'],
              en: ['CSS = Cascading Style Sheets. style.css file linked with link rel="stylesheet" href="style.css".','Selectors: h1 { color: blue; } = all h1 become blue.','Classes: .my-class { } -> use class="my-class" in HTML.','Common properties: color, background-color, font-size, margin, padding, border, width, height.','Box: margin = outer space. padding = inner space. border = outline.','Flexbox: display:flex + justify-content + align-items for flexible layout.']
            },
            method: { fr: 'Créez une page web et appliquez 5 styles différents. Expérimentez avec chaque propriété.', ar: 'أنشئ صفحة ويب وطبّق 5 تصاميم مختلفة. جرب كل خاصية.', en: 'Create a web page and apply 5 different styles. Experiment with each property.' },
            exercise: { fr: 'Stylisez votre page "À propos de moi": titre bleu, fond gris clair, texte centré, image arrondie.', ar: 'صمّم صفحة "عني": عنوان أزرق، خلفية رمادية، نص في المنتصف، صورة مدورة.', en: 'Style your "About Me" page: blue heading, light gray background, centered text, rounded image.' },
            tip: { fr: '💡 Utilisez les outils de développement (F12) pour expérimenter le CSS en direct.', ar: '💡 استخدم أدوات المطور (F12) لتجربة CSS مباشرة.', en: '💡 Use DevTools (F12) to experiment with CSS live.' }
          }
        ]
      },
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
              fr: ['JavaScript est le langage qui rend les sites web interactifs.','Ouvrez la console du navigateur (F12 → Console) pour tester du code.','Déclarez une variable: let nom = "Ahmed";','Affichez dans la console: console.log(nom);','Créez une fonction: function bonjour() { alert("Bonjour!"); }','Ajoutez un événement: document.getElementById("btn").onclick = function() { ... }'],
              ar: ['JavaScript هي اللغة اللي تخلّي المواقع تفاعلية.','افتح وحدة التحكم في المتصفح (F12 → Console) لتجربة الكود.','صرّح بمتغير: let nom = "Ahmed";','أظهر في وحدة التحكم: console.log(nom);','أنشئ دالة: function bonjour() { alert("Bonjour!"); }','أضف حدث: document.getElementById("btn").onclick = function() { ... }'],
              en: ['JavaScript is the language that makes websites interactive.','Open browser console (F12 → Console) to test code.','Declare a variable: let name = "Ahmed";','Display in console: console.log(name);','Create a function: function hello() { alert("Hello!"); }','Add an event: document.getElementById("btn").onclick = function() { ... }']
            },
            method: { fr: 'Créez une page HTML avec un bouton qui affiche une alerte quand on clique dessus.', ar: 'أنشئ صفحة HTML مع زر يعرض تنبيه عند النقر عليه.', en: 'Create an HTML page with a button that shows an alert when clicked.' },
            exercise: { fr: 'Créez un compteur: un bouton "+" qui augmente un nombre affiché à l\'écran.', ar: 'أنشئ عداداً: زر "+" يزيد رقماً معروضاً على الشاشة.', en: 'Create a counter: a "+" button that increases a number displayed on screen.' },
            tip: { fr: '💡 Utilisez console.log() pour déboguer votre code.', ar: '💡 استخدم console.log() لتصحيح أخطاء الكود.', en: '💡 Use console.log() to debug your code.' }
          }
        ]
      },
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
              fr: ['React est une bibliothèque JavaScript pour construire des interfaces utilisateur.','Créez un projet: npx create-react-app mon-projet','Structure: components, props, state, hooks.','JSX: mélange de HTML et JavaScript.','Props: passer des données entre composants.','State: gérer les données qui changent.'],
              ar: ['React هي مكتبة JavaScript لبناء واجهات المستخدم.','أنشئ مشروعاً: npx create-react-app mon-projet','الهيكل: المكونات، props، state، hooks.','JSX: مزيج من HTML و JavaScript.','Props: تمرير البيانات بين المكونات.','State: إدارة البيانات المتغيرة.'],
              en: ['React is a JavaScript library for building user interfaces.','Create a project: npx create-react-app my-project','Structure: components, props, state, hooks.','JSX: mix of HTML and JavaScript.','Props: pass data between components.','State: manage changing data.']
            },
            method: { fr: 'Créez un composant React qui affiche "Bonjour, [nom]"', ar: 'أنشئ مكون React يعرض "Bonjour, [nom]"', en: 'Create a React component that displays "Hello, [name]"' },
            exercise: { fr: 'Créez une todo-list avec React: ajouter et supprimer des tâches.', ar: 'أنشئ قائمة مهام مع React: إضافة وحذف المهام.', en: 'Create a todo-list with React: add and delete tasks.' },
            tip: { fr: '💡 Utilisez les hooks (useState, useEffect) pour gérer l\'état.', ar: '💡 استخدم hooks (useState, useEffect) لإدارة الحالة.', en: '💡 Use hooks (useState, useEffect) to manage state.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une équipe de développement et livrer des projets complexes', ar: 'إدارة فريق تطوير وتسليم مشاريع معقدة', en: 'Lead a development team and deliver complex projects' },
        lessons: [
          {
            id: 'w-m-1',
            title: { fr: 'Architecture et Gestion de Projet Web', ar: 'هندسة وإدارة مشاريع الويب', en: 'Web Architecture and Project Management' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Architecture: Frontend (React) → Backend (Node.js) → Base de données (MongoDB/PostgreSQL).','Git: versionnez votre code avec git init, git add, git commit, git push.','Méthodologie: Agile / Scrum pour gérer les sprints et les livrables.','Déploiement: Vercel, Netlify (frontend) et Heroku, AWS (backend).','Sécurité: HTTPS, authentification JWT, validation des inputs.','Tarification: site vitrine 50-200K DZD, site e-commerce 200K-1M DZD.'],
              ar: ['الهندسة: Frontend (React) → Backend (Node.js) → قاعدة البيانات (MongoDB/PostgreSQL).','Git: versionnez كودك بـ git init, git add, git commit, git push.','المنهجية: Agile / Scrum لإدارة الـ sprints والتسليمات.','النشر: Vercel, Netlify (frontend) و Heroku, AWS (backend).','الأمان: HTTPS، مصادقة JWT، التحقق من المدخلات.','التسعير: موقع عرضي 50-200K دج، موقع تجاري 200K-1M دج.'],
              en: ['Architecture: Frontend (React) → Backend (Node.js) → Database (MongoDB/PostgreSQL).','Git: version your code with git init, git add, git commit, git push.','Methodology: Agile / Scrum to manage sprints and deliverables.','Deployment: Vercel, Netlify (frontend) and Heroku, AWS (backend).','Security: HTTPS, JWT authentication, input validation.','Pricing: portfolio site 50-200K DZD, e-commerce site 200K-1M DZD.']
            },
            method: { fr: 'Créez un projet complet de A à Z: planification → conception → développement → déploiement.', ar: 'أنشئ مشروعاً كاملاً من الصفر: تخطيط → تصميم → تطوير → نشر.', en: 'Create a complete project from A to Z: planning → design → development → deployment.' },
            exercise: { fr: 'Planifiez et estimez un projet web pour un client fictif: cahier des charges, stack technique, timeline, budget.', ar: 'خطط وقدّر مشروع ويب لعميل وهمي: دفتر الشروط، التقنيات، الجدول الزمني، الميزانية.', en: 'Plan and estimate a web project for a fictional client: specifications, tech stack, timeline, budget.' },
            tip: { fr: '💡 Spécialisez-vous dans une niche: e-commerce, SaaS, sites vitrines. Les spécialistes facturent plus.', ar: '💡 تخصّص في مجال معين: التجارة الإلكترونية، SaaS، المواقع العرضية. المتخصصون يشحنون أكثر.', en: '💡 Specialize in a niche: e-commerce, SaaS, portfolio sites. Specialists charge more.' }
          }
        ]
      }
    ]
  },

  // ============================================================
  // SKILL 5: SEO (nouveau)
  // ============================================================
  {
    id: 'seo',
    icon: '📈',
    color: '#3B82F6',
    accent: '#60A5FA',
    bg: '#0A1428',
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
            title: { fr: 'Introduction au SEO - Comment Google fonctionne', ar: 'مقدمة في SEO - كيفاش تشتغل Google', en: 'Introduction to SEO - How Google works' },
            image: 'https://images.unsplash.com/photo-1432889821006-ca37c5ce1bfa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['SEO = Search Engine Optimization. C\'est l\'ensemble des techniques qui permettent à un site web d\'apparaître en haut des résultats de recherche sur Google.','Google utilise plus de 200 facteurs pour classer les sites. Les 3 piliers du SEO: 1. SEO Technique (la structure du site), 2. Contenu (le texte), 3. Backlinks (les liens externes).','Les mots-clés sont ce que les gens tapent dans Google. Exemple: si vous vendez des chaussures, vos mots-clés sont "chaussures", "baskets", "chaussures pas chères".','Le SEO On-Page: tout ce que vous pouvez contrôler sur votre site. Les balises title (le titre dans les résultats Google), meta description (le texte sous le lien), les H1 (titres), et les URL.','Le SEO Off-Page: ce qui se passe en dehors de votre site. Les backlinks (liens d\'autres sites vers le vôtre) sont le facteur le plus important.','Objectif SEO: comprendre ce que recherchent vos clients potentiels et créer du contenu qui répond à leurs questions.'],
              ar: ['SEO = تحسين محركات البحث. هو مجموعة التقنيات اللي تخلّي الموقع يظهر في أعلى نتائج البحث على Google.','Google يستخدم أكثر من 200 عامل لترتيب المواقع. 3 ركائز SEO: 1. التقني (هيكل الموقع)، 2. المحتوى (النص)، 3. الروابط الخلفية (الروابط الخارجية).','الكلمات المفتاحية هي اللي يكتبها الناس في Google. مثال: إذا تبيع شوز، كلماتك هي "شوز"، "باسكيت"، "شوز رخيص".','SEO On-Page: كل شيء تقدر تتحكم فيه على موقعك. علامات title (العنوان في نتائج Google)، meta description (النص تحت الرابط)، H1 (العناوين)، والـ URL.','SEO Off-Page: اللي يخرج خارج موقعك. الروابط الخلفية (روابط من مواقع أخرى لموقعك) هي العامل الأهم.','هدف SEO: تفهم شنو يبحث عنه زبائنك المحتملين وتصنع محتوى يجاوب على أسئلتهم.'],
              en: ['SEO = Search Engine Optimization. It\'s the set of techniques that help a website appear at the top of Google search results.','Google uses over 200 factors to rank sites. The 3 pillars of SEO: 1. Technical SEO (site structure), 2. Content (text), 3. Backlinks (external links).','Keywords are what people type into Google. Example: if you sell shoes, your keywords are "shoes", "sneakers", "cheap shoes".','On-Page SEO: everything you can control on your site. Title tags (the title in Google results), meta description (the text under the link), H1s (headings), and URLs.','Off-Page SEO: what happens outside your site. Backlinks (links from other sites to yours) are the most important factor.','SEO goal: understand what your potential clients are searching for and create content that answers their questions.']
            },
            method: { fr: 'Faites une recherche Google pour 3 mots-clés qui vous intéressent. Analysez les 10 premiers résultats.', ar: 'ابحث في Google عن 3 كلمات مفتاحية تهمك. حلّل النتائج العشرة الأولى.', en: 'Google search for 3 keywords that interest you. Analyze the top 10 results.' },
            exercise: { fr: 'Listez 20 mots-clés pour une entreprise de votre choix. Classez-les par catégorie.', ar: 'اكتب 20 كلمة مفتاحية لمشروع من اختيارك. صنّفهم حسب الفئة.', en: 'List 20 keywords for a business of your choice. Classify them by category.' },
            tip: { fr: '💡 Utilisez Google Keyword Planner (outil gratuit) pour trouver des mots-clés.', ar: '💡 استخدم Google Keyword Planner (أداة مجانية) باش تلاقي كلمات مفتاحية.', en: '💡 Use Google Keyword Planner (free tool) to find keywords.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–8', ar: 'الأسابيع 4–8', en: 'Weeks 4–8' },
        goal: { fr: 'Maîtriser les techniques On-Page et Off-Page', ar: 'إتقان تقنيات On-Page و Off-Page', en: 'Master On-Page and Off-Page techniques' },
        lessons: [
          {
            id: 'seo-i-1',
            title: { fr: 'Optimisation On-Page et Contenu', ar: 'تحسين On-Page والمحتوى', en: 'On-Page Optimization and Content' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Optimisez vos balises title: 50-60 caractères, incluez le mot-clé principal.','Meta description: 150-160 caractères, incluez un CTA.','Structure H1-H6: un seul H1 par page, hiérarchisez le contenu.','URL: courte, descriptive, incluez le mot-clé (ex: /chaussures-homme).','Contenu: 800+ mots, répondez aux questions des utilisateurs, incluez des images optimisées.','Liens internes: reliez vos pages entre elles pour distribuer l\'autorité.'],
              ar: ['حسّن علامات title: 50-60 حرف، ضمّن الكلمة المفتاحية الرئيسية.','Meta description: 150-160 حرف، ضمّن دعوة للفعل.','هيكل H1-H6: H1 واحد فقط لكل صفحة، رتّب المحتوى.','الرابط: قصير، وصفي، يضمّن الكلمة المفتاحية (مثال: /ahzia-rijal).','المحتوى: 800+ كلمة، جاوب على أسئلة المستخدمين، ضمّن صوراً محسّنة.','الروابط الداخلية: اربط صفحاتك ببعض لتوزيع السلطة.'],
              en: ['Optimize title tags: 50-60 characters, include the main keyword.','Meta description: 150-160 characters, include a CTA.','H1-H6 structure: one H1 per page, hierarchy of content.','URL: short, descriptive, include keyword (e.g.: /mens-shoes).','Content: 800+ words, answer user questions, include optimized images.','Internal links: link your pages together to distribute authority.']
            },
            method: { fr: 'Optimisez une page existante de votre site avec toutes les techniques On-Page.', ar: 'حسّن صفحة موجودة على موقعك بكل تقنيات On-Page.', en: 'Optimize an existing page on your site with all On-Page techniques.' },
            exercise: { fr: 'Rédigez un article de blog SEO optimisé (800+ mots) avec titres, meta, et liens internes.', ar: 'اكتب مقالة مدونة محسّنة لـ SEO (800+ كلمة) مع عناوين، meta، وروابط داخلية.', en: 'Write an SEO-optimized blog post (800+ words) with headings, meta, and internal links.' },
            tip: { fr: '💡 Utilisez Yoast SEO (WordPress) ou Rank Math pour analyser votre optimisation.', ar: '💡 استخدم Yoast SEO (WordPress) أو Rank Math لتحليل تحسينك.', en: '💡 Use Yoast SEO (WordPress) or Rank Math to analyze your optimization.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 9–16', ar: 'الأسابيع 9–16', en: 'Weeks 9–16' },
        goal: { fr: 'Maîtriser les backlinks et les stratégies avancées', ar: 'إتقان الروابط الخلفية والاستراتيجيات المتقدمة', en: 'Master backlinks and advanced strategies' },
        lessons: [
          {
            id: 'seo-a-1',
            title: { fr: 'Stratégie de Backlinks', ar: 'استراتيجية الروابط الخلفية', en: 'Backlink Strategy' },
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Les backlinks sont le facteur de classement numéro 1 pour Google.','Qualité > quantité: un lien d\'un site autoritaire vaut plus que 100 liens de sites faibles.','Techniques: guest blogging, broken link building, mentions non liées, annuaires de qualité.','Analysez vos concurrents: outils comme Ahrefs ou SEMrush pour voir leurs backlinks.','Créez du contenu "linkable": guides, études de cas, infographies, outils gratuits.','Évitez les techniques black hat: achat de liens, PBN, spam de commentaires.'],
              ar: ['الروابط الخلفية هي عامل الترتيب رقم 1 لـ Google.','الجودة > الكمية: رابط واحد من موقع قوي يساوي أكثر من 100 رابط من مواقع ضعيفة.','التقنيات: التدوين كضيف، broken link building، الإشارات غير المرتبطة، الأدلة الجيدة.','حلّل منافسيك: استخدم Ahrefs أو SEMrush لمشاهدة روابطهم الخلفية.','أنشئ محتوى "linkable": أدلة، دراسات حالة، إنفوغرافيك، أدوات مجانية.','تجنّب تقنيات black hat: شراء روابط، PBN، تعليقات سبام.'],
              en: ['Backlinks are Google\'s #1 ranking factor.','Quality > quantity: one link from an authoritative site is worth more than 100 links from weak sites.','Techniques: guest blogging, broken link building, unlinked mentions, quality directories.','Analyze your competitors: tools like Ahrefs or SEMrush to see their backlinks.','Create "linkable" content: guides, case studies, infographics, free tools.','Avoid black hat techniques: buying links, PBN, comment spam.']
            },
            method: { fr: 'Créez une stratégie de backlinks pour un site dans une niche de votre choix.', ar: 'أنشئ استراتيجية روابط خلفية لموقع في مجال من اختيارك.', en: 'Create a backlink strategy for a site in a niche of your choice.' },
            exercise: { fr: 'Identifiez 20 sites où vous pourriez obtenir un backlink. Rédigez un pitch pour chacun.', ar: 'حدّد 20 موقعاً يمكنك الحصول على رابط خلفي منه. اكتب عرضاً لكل واحد.', en: 'Identify 20 sites where you could get a backlink. Write a pitch for each.' },
            tip: { fr: '💡 Les backlinks locaux (blogs algériens, annuaires DZ) sont très puissants pour le référencement local.', ar: '💡 الروابط الخلفية المحلية (المدونات الجزائرية، الأدلة الجزائرية) قوية جداً للـ SEO المحلي.', en: '💡 Local backlinks (Algerian blogs, DZ directories) are very powerful for local SEO.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une agence SEO et livrer des résultats mesurables', ar: 'إدارة وكالة SEO وتحقيق نتائج قابلة للقياس', en: 'Lead an SEO agency and deliver measurable results' },
        lessons: [
          {
            id: 'seo-m-1',
            title: { fr: 'Agence SEO - De la Stratégie aux Résultats', ar: 'وكالة SEO - من الاستراتيجية للنتائج', en: 'SEO Agency - From Strategy to Results' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Audit SEO complet: technique, contenu, backlinks, concurrence.','Rapport d\'audit: PDF professionnel avec recommandations détaillées.','Stratégie 6 mois: objectifs SMART, budget, plan d\'action mensuel.','Suivi des KPIs: positions Google, trafic organique, taux de conversion, ROAS.','Outils: Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog.','Tarification: audit 30-80K DZD, forfait mensuel 50-200K DZD selon la taille du site.'],
              ar: ['تدقيق SEO كامل: تقني، محتوى، روابط خلفية، منافسة.','تقرير التدقيق: PDF احترافي مع توصيات مفصلة.','استراتيجية 6 أشهر: أهداف SMART، ميزانية، خطة عمل شهرية.','متابعة مؤشرات الأداء: مراكز Google، الزيارات العضوية، معدل التحويل، ROAS.','الأدوات: Google Search Console، Google Analytics، Ahrefs، SEMrush، Screaming Frog.','التسعير: تدقيق 30-80K دج، باقة شهرية 50-200K دج حسب حجم الموقع.'],
              en: ['Complete SEO audit: technical, content, backlinks, competition.','Audit report: professional PDF with detailed recommendations.','6-month strategy: SMART goals, budget, monthly action plan.','KPI tracking: Google positions, organic traffic, conversion rate, ROAS.','Tools: Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog.','Pricing: audit 30-80K DZD, monthly package 50-200K DZD depending on site size.']
            },
            method: { fr: 'Réalisez un audit SEO complet pour un site de votre choix et présentez-le sous forme de rapport PDF.', ar: 'قم بتدقيق SEO كامل لموقع من اختيارك وقدمه كتقرير PDF.', en: 'Perform a complete SEO audit for a site of your choice and present it as a PDF report.' },
            exercise: { fr: 'Créez votre offre de services SEO: audit, forfaits mensuels, garanties, cas clients.', ar: 'أنشئ عرض الخدمات SEO الخاص بك: تدقيق، باقات شهرية، ضمانات، حالات عملاء.', en: 'Create your SEO service offering: audit, monthly packages, guarantees, case studies.' },
            tip: { fr: '💡 Les clients paient pour des résultats, pas pour du travail. Garantissez des positions ou un trafic spécifique.', ar: '💡 الزبائن يدفعون للنتائج، مش للشغل. اضمن مراكز محددة أو زيارة محددة.', en: '💡 Clients pay for results, not for work. Guarantee specific positions or traffic.' }
          }
        ]
      }
    ]
  },

  // ============================================================
  // SKILL 6: DATA ANALYSIS (nouveau)
  // ============================================================
  {
    id: 'data',
    icon: '📊',
    color: '#8B5CF6',
    accent: '#A78BFA',
    bg: '#0D0818',
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
        goal: { fr: 'Comprendre Excel et les bases de l\'analyse', ar: 'تفهم Excel وأساسيات التحليل', en: 'Understand Excel and analysis basics' },
        lessons: [
          {
            id: 'data-b-1',
            title: { fr: 'Excel - L\'outil incontournable pour analyser des données', ar: 'Excel - الأداة التي لا غنى عنها لتحليل البيانات', en: 'Excel - The essential tool for data analysis' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Ouvrez Excel → Nouveau classeur. Les colonnes: A, B, C... Lignes: 1, 2, 3...','Pour saisir des données: cliquez sur une cellule, tapez, appuyez sur Entrée.','Formule SOMME: =SOMME(A1:A10) ou bouton "Somme automatique".','Filtres: sélectionnez vos données → onglet Données → Filtrer.','Graphiques: sélectionnez vos données → Insérer → choisissez un graphique.','Formules essentielles: =MOYENNE(), =MAX(), =MIN(), =NB()'],
              ar: ['افتح Excel → مصنف جديد. الأعمدة: A, B, C... الصفوف: 1, 2, 3...','لإدخال البيانات: اضغط على خلية، اكتب، اضغط Enter.','صيغة SUM: =SUM(A1:A10) أو زر "الجمع التلقائي".','التصفية: اختر بياناتك → تبويب البيانات → تصفية.','الرسوم البيانية: اختر بياناتك → إدراج → اختار رسم بياني.','الصيغ الأساسية: =AVERAGE()، =MAX()، =MIN()، =COUNT()'],
              en: ['Open Excel → New Workbook. Columns: A, B, C... Rows: 1, 2, 3...','To enter data: click on a cell, type, press Enter.','SUM formula: =SUM(A1:A10) or "AutoSum" button.','Filters: select your data → Data tab → Filter.','Charts: select your data → Insert → choose a chart.','Essential formulas: =AVERAGE(), =MAX(), =MIN(), =COUNT()']
            },
            method: { fr: 'Importez un jeu de données et explorez-le avec Excel: filtres, graphiques, formules.', ar: 'استورد مجموعة بيانات واستكشفها مع Excel: تصفية، رسوم بيانية، صيغ.', en: 'Import a dataset and explore it with Excel: filters, charts, formulas.' },
            exercise: { fr: 'Créez un tableau de ventes avec 10 produits. Ajoutez: Nom, Quantité, Prix, Total. Utilisez SOMME pour le total général.', ar: 'أنشئ جدول مبيعات بـ10 منتجات. زيد: الاسم، الكمية، السعر، المجموع. استخدم SUM للمجموع الكلي.', en: 'Create a sales table with 10 products. Add: Name, Quantity, Price, Total. Use SUM for the grand total.' },
            tip: { fr: '💡 Raccourcis: Ctrl+C (copier), Ctrl+V (coller), Ctrl+Z (annuler), Ctrl+S (enregistrer).', ar: '💡 اختصارات: Ctrl+C (نسخ)، Ctrl+V (لصق)، Ctrl+Z (تراجع)، Ctrl+S (حفظ).', en: '💡 Shortcuts: Ctrl+C (copy), Ctrl+V (paste), Ctrl+Z (undo), Ctrl+S (save).' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–8', ar: 'الأسابيع 4–8', en: 'Weeks 4–8' },
        goal: { fr: 'Maîtriser Power BI et les visualisations avancées', ar: 'إتقان Power BI والتصورات المتقدمة', en: 'Master Power BI and advanced visualizations' },
        lessons: [
          {
            id: 'data-i-1',
            title: { fr: 'Power BI - Visualisez vos données comme un pro', ar: 'Power BI - صور بياناتك كمحترف', en: 'Power BI - Visualize your data like a pro' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Power BI est un outil de visualisation de données gratuit de Microsoft.','Téléchargez Power BI Desktop (gratuit) sur microsoft.com.','Importez vos données: Excel, CSV, base de données.','Créez des visualisations: graphiques, cartes, tableaux, jauges.','Les DAX: langage de formules pour créer des calculs avancés.','Partagez vos dashboards: publiez sur Power BI Service ou exportez en PDF.'],
              ar: ['Power BI هو أداة تصور بيانات مجانية من Microsoft.','حمّل Power BI Desktop (مجاني) من microsoft.com.','استورد بياناتك: Excel، CSV، قاعدة بيانات.','أنشئ تصورات: رسوماً بيانية، خرائط، جداول، مقاييس.','DAX: لغة صيغ لإنشاء حسابات متقدمة.','شارك لوحات القيادة: انشر على Power BI Service أو صدّر PDF.'],
              en: ['Power BI is a free data visualization tool from Microsoft.','Download Power BI Desktop (free) from microsoft.com.','Import your data: Excel, CSV, database.','Create visualizations: charts, maps, tables, gauges.','DAX: formula language for advanced calculations.','Share your dashboards: publish to Power BI Service or export to PDF.']
            },
            method: { fr: 'Importez un dataset et créez un dashboard complet avec 5 visualisations différentes.', ar: 'استورد مجموعة بيانات وأنشئ لوحة قيادة كاملة بـ5 تصورات مختلفة.', en: 'Import a dataset and create a complete dashboard with 5 different visualizations.' },
            exercise: { fr: 'Créez un dashboard de ventes avec: ventes par mois, par produit, par région, top 10 des produits.', ar: 'أنشئ لوحة قيادة للمبيعات: مبيعات حسب الشهر، المنتج، المنطقة، أفضل 10 منتجات.', en: 'Create a sales dashboard with: sales by month, product, region, top 10 products.' },
            tip: { fr: '💡 Utilisez les slicers pour filtrer vos données interactivement.', ar: '💡 استخدم slicers لتصفية بياناتك بشكل تفاعلي.', en: '💡 Use slicers to filter your data interactively.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 9–16', ar: 'الأسابيع 9–16', en: 'Weeks 9–16' },
        goal: { fr: 'Maîtriser SQL et Python pour l\'analyse de données', ar: 'إتقان SQL و Python لتحليل البيانات', en: 'Master SQL and Python for data analysis' },
        lessons: [
          {
            id: 'data-a-1',
            title: { fr: 'SQL - Interrogez vos données comme un data analyst', ar: 'SQL - استعلم عن بياناتك كمحلل بيانات', en: 'SQL - Query your data like a data analyst' },
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['SQL est le langage standard pour interroger les bases de données.','SELECT * FROM clients; — sélectionne toutes les colonnes de la table clients.','SELECT nom, email FROM clients WHERE ville = "Alger"; — filtre les clients d\'Alger.','JOIN: combinez plusieurs tables (ex: clients + commandes).','GROUP BY: regroupez les données (ex: ventes par mois).','ORDER BY: triez les résultats (ex: par date décroissante).'],
              ar: ['SQL هي اللغة القياسية للاستعلام عن قواعد البيانات.','SELECT * FROM clients; — يختار كل الأعمدة من جدول العملاء.','SELECT nom, email FROM clients WHERE ville = "Alger"; — يصفّي عملاء الجزائر.','JOIN: ادمج عدة جداول (مثال: العملاء + الطلبات).','GROUP BY: جمّع البيانات (مثال: المبيعات حسب الشهر).','ORDER BY: رتّب النتائج (مثال: حسب التاريخ تنازلياً).'],
              en: ['SQL is the standard language for querying databases.','SELECT * FROM customers; — selects all columns from the customers table.','SELECT name, email FROM customers WHERE city = "Algiers"; — filters Algiers customers.','JOIN: combine multiple tables (e.g.: customers + orders).','GROUP BY: group data (e.g.: sales by month).','ORDER BY: sort results (e.g.: by date descending).']
            },
            method: { fr: 'Créez une base de données SQLite et écrivez 10 requêtes différentes pour analyser les données.', ar: 'أنشئ قاعدة بيانات SQLite واكتب 10 استعلامات مختلفة لتحليل البيانات.', en: 'Create an SQLite database and write 10 different queries to analyze data.' },
            exercise: { fr: 'Écrivez une requête SQL qui calcule le total des ventes par mois et par produit.', ar: 'اكتب استعلام SQL يحسب إجمالي المبيعات حسب الشهر والمنتج.', en: 'Write an SQL query that calculates total sales by month and product.' },
            tip: { fr: '💡 Utilisez SQLite Browser ou DBeaver pour pratiquer vos requêtes.', ar: '💡 استخدم SQLite Browser أو DBeaver لممارسة استعلاماتك.', en: '💡 Use SQLite Browser or DBeaver to practice your queries.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Devenir consultant en data et diriger des projets d\'analyse', ar: 'كن مستشاراً للبيانات وادير مشاريع تحليل', en: 'Become a data consultant and lead analysis projects' },
        lessons: [
          {
            id: 'data-m-1',
            title: { fr: 'Consultant Data - De la donnée à la décision stratégique', ar: 'مستشار بيانات - من البيانات للقرار الاستراتيجي', en: 'Data Consultant - From data to strategic decision' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le consultant data aide les entreprises à prendre des décisions basées sur les données.','Processus: Collecte → Nettoyage → Analyse → Visualisation → Recommandations.','Outils: Excel, Power BI, SQL, Python (Pandas, Matplotlib).','Livrables: dashboards interactifs, rapports PDF, présentations stratégiques.','Tarification: projet 50-200K DZD, forfait mensuel 80-300K DZD.','Exemples: analyse de la rentabilité, optimisation des stocks, prédiction des ventes.'],
              ar: ['مستشار البيانات يساعد المشاريع على اتخاذ قرارات مبنية على البيانات.','العملية: جمع → تنظيف → تحليل → تصور → توصيات.','الأدوات: Excel، Power BI، SQL، Python (Pandas, Matplotlib).','التسليمات: لوحات قيادة تفاعلية، تقارير PDF، عروض استراتيجية.','التسعير: مشروع 50-200K دج، باقة شهرية 80-300K دج.','أمثلة: تحليل الربحية، تحسين المخزون، توقع المبيعات.'],
              en: ['Data consultants help businesses make data-driven decisions.','Process: Collection → Cleaning → Analysis → Visualization → Recommendations.','Tools: Excel, Power BI, SQL, Python (Pandas, Matplotlib).','Deliverables: interactive dashboards, PDF reports, strategic presentations.','Pricing: project 50-200K DZD, monthly package 80-300K DZD.','Examples: profitability analysis, inventory optimization, sales prediction.']
            },
            method: { fr: 'Réalisez une analyse complète pour une entreprise fictive: collectez, nettoyez, analysez, visualisez et présentez.', ar: 'قم بتحليل كامل لمشروع وهمي: اجمع، نظّف، حلّل، صوّر وقدّم.', en: 'Perform a complete analysis for a fictional company: collect, clean, analyze, visualize and present.' },
            exercise: { fr: 'Créez votre offre de services data: dashboard, audit, formation, consulting.', ar: 'أنشئ عرض الخدمات data الخاص بك: لوحة قيادة، تدقيق، تكوين، استشارة.', en: 'Create your data service offering: dashboard, audit, training, consulting.' },
            tip: { fr: '💡 Les données sont le nouvel or. Les entreprises paient cher pour des insights qui augmentent leur rentabilité.', ar: '💡 البيانات هي الذهب الجديد. المشاريع تدفع كثيراً للحصول على رؤى تزيد أرباحها.', en: '💡 Data is the new gold. Companies pay top dollar for insights that increase their profitability.' }
          }
        ]
      }
    ]
  },

  // ============================================================
  // SKILL 7: COPYWRITING (nouveau)
  // ============================================================
  {
    id: 'copy',
    icon: '✍️',
    color: '#EC4899',
    accent: '#F472B6',
    bg: '#1A0512',
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
        goal: { fr: 'Maîtriser les bases du copywriting', ar: 'إتقان أساسيات الكتابة الإعلانية', en: 'Master copywriting basics' },
        lessons: [
          {
            id: 'copy-b-1',
            title: { fr: 'Les Fondamentaux du Copywriting - Vendre avec des mots', ar: 'أساسيات الكتابة الإعلانية - البيع بالكلمات', en: 'Copywriting Fundamentals - Selling with words' },
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le Copywriting est l\'art de vendre avec des mots. C\'est la compétence la plus rentable en marketing.','La méthode AIDA: Attention → Intérêt → Désir → Action.','Headlines: 80% des gens lisent les titres, 20% le reste.','Caractéristiques vs Avantages: une caractéristique est un fait, l\'avantage est ce que ça apporte au client.','Call to Action: dites EXACTEMENT quoi faire.','Storytelling: les histoires vendent mieux que les faits.'],
              ar: ['الكتابة الإعلانية هي فن البيع بالكلمات. هي المهارة الأكثر ربحية في التسويق.','طريقة AIDA: الانتباه → الاهتمام → الرغبة → الفعل.','العناوين: 80% يقرأون العناوين، 20% الباقي.','الميزات vs الفوائد: الميزة حقيقة، الفائدة هي ما يعود على الزبون.','الدعوة للفعل: قل بالضبط شو يدير.','سرد القصص: القصص تبيع أفضل من الحقائق.'],
              en: ['Copywriting is the art of selling with words. It\'s the most profitable skill in marketing.','The AIDA method: Attention → Interest → Desire → Action.','Headlines: 80% read headlines, 20% the rest.','Features vs Benefits: a feature is a fact, the benefit is what it brings to the customer.','Call to Action: tell EXACTLY what to do.','Storytelling: stories sell better than facts.']
            },
            method: { fr: 'Analysez 10 publicités et identifiez AIDA, le titre, le CTA et les avantages.', ar: 'حلّل 10 إعلانات وحدّد AIDA، العنوان، الدعوة للفعل والفوائد.', en: 'Analyze 10 ads and identify AIDA, the headline, CTA and benefits.' },
            exercise: { fr: 'Écrivez un titre accrocheur pour un produit de votre choix. Utilisez des chiffres, des questions ou l\'urgence.', ar: 'اكتب عنواناً جذاباً لمنتج من اختيارك. استخدم أرقاماً، أسئلة أو إلحاحاً.', en: 'Write a catchy headline for a product of your choice. Use numbers, questions or urgency.' },
            tip: { fr: '💡 Les chiffres fonctionnent toujours: "5 secrets", "10 astuces", "3 étapes".', ar: '💡 الأرقام دائماً تشتغل: "5 أسرار"، "10 نصائح"، "3 خطوات".', en: '💡 Numbers always work: "5 secrets", "10 tips", "3 steps".' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 3–6', ar: 'الأسابيع 3–6', en: 'Weeks 3–6' },
        goal: { fr: 'Maîtriser les techniques avancées et rédiger pour différents supports', ar: 'إتقان التقنيات المتقدمة والكتابة لمنصات مختلفة', en: 'Master advanced techniques and write for different platforms' },
        lessons: [
          {
            id: 'copy-i-1',
            title: { fr: 'Copywriting pour les Réseaux Sociaux', ar: 'الكتابة الإعلانية للسوشيال ميديا', en: 'Copywriting for Social Media' },
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Réseaux sociaux: contenu court, punchy, visuel.','Facebook: posts 100-200 mots, questions, émotions.','Instagram: légendes 50-150 mots, hashtags, CTA.','LinkedIn: posts 200-500 mots, professionnel, valeur ajoutée.','Twitter/X: 280 caractères max, concis, impactant.','Reels/TikTok: scripts de 15-30 secondes, accroche forte.'],
              ar: ['السوشيال ميديا: محتوى قصير، قوي، بصري.','Facebook: منشورات 100-200 كلمة، أسئلة، عواطف.','Instagram: تعليقات 50-150 كلمة، هاشتاجات، دعوة للفعل.','LinkedIn: منشورات 200-500 كلمة، احترافي، قيمة مضافة.','Twitter/X: 280 حرف كحد أقصى، موجز، مؤثر.','Reels/TikTok: سكريبتات 15-30 ثانية، جذبة قوية.'],
              en: ['Social media: short, punchy, visual content.','Facebook: 100-200 word posts, questions, emotions.','Instagram: 50-150 word captions, hashtags, CTA.','LinkedIn: 200-500 word posts, professional, added value.','Twitter/X: 280 characters max, concise, impactful.','Reels/TikTok: 15-30 second scripts, strong hook.']
            },
            method: { fr: 'Créez 5 posts pour différentes plateformes sur le même sujet.', ar: 'أنشئ 5 منشورات لمنصات مختلفة حول نفس الموضوع.', en: 'Create 5 posts for different platforms on the same topic.' },
            exercise: { fr: 'Rédigez une légende Instagram pour un produit avec: accroche, description, avantages, CTA, 5 hashtags.', ar: 'اكتب تعليقاً إعلانياً لـ Instagram لمنتج مع: جذبة، وصف، فوائد، دعوة للفعل، 5 هاشتاجات.', en: 'Write an Instagram caption for a product with: hook, description, benefits, CTA, 5 hashtags.' },
            tip: { fr: '💡 Adaptez votre ton à chaque plateforme: LinkedIn = professionnel, Instagram = décontracté.', ar: '💡 طوّع نبرتك لكل منصة: LinkedIn = احترافي، Instagram = غير رسمي.', en: '💡 Adapt your tone to each platform: LinkedIn = professional, Instagram = casual.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 7–12', ar: 'الأسابيع 7–12', en: 'Weeks 7–12' },
        goal: { fr: 'Maîtriser le copywriting de vente (VSL, landing pages, emails)', ar: 'إتقان الكتابة الإعلانية للبيع (VSL، صفحات هبوط، إيميلات)', en: 'Master sales copywriting (VSL, landing pages, emails)' },
        lessons: [
          {
            id: 'copy-a-1',
            title: { fr: 'Copywriting de Vente - Landing Pages et VSL', ar: 'الكتابة الإعلانية للبيع - صفحات الهبوط و VSL', en: 'Sales Copywriting - Landing Pages and VSL' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Landing page: page unique avec un seul objectif (vente, inscription).','Structure: Accroche → Problème → Solution → Preuve → Offre → CTA.','VSL (Video Sales Letter): vidéo de vente de 20-40 minutes.','Script VSL: Accroche → Histoire → Problème → Solution → Objections → Offre → CTA.','Les objections: anticipez les doutes du client et répondez-y.','L\'urgence: offres limitées dans le temps, quantités limitées.'],
              ar: ['صفحة الهبوط: صفحة واحدة بهدف واحد (بيع، تسجيل).','الهيكل: جذبة → مشكلة → حل → دليل → عرض → دعوة للفعل.','VSL (Video Sales Letter): فيديو بيعي من 20-40 دقيقة.','سكريبت VSL: جذبة → قصة → مشكلة → حل → اعتراضات → عرض → دعوة للفعل.','الاعتراضات: توقع شكوك الزبون وأجب عليها.','الإلحاح: عروض محدودة الوقت، كميات محدودة.'],
              en: ['Landing page: single page with one goal (sale, signup).','Structure: Hook → Problem → Solution → Proof → Offer → CTA.','VSL (Video Sales Letter): 20-40 minute sales video.','VSL Script: Hook → Story → Problem → Solution → Objections → Offer → CTA.','Objections: anticipate client doubts and answer them.','Urgency: time-limited offers, limited quantities.']
            },
            method: { fr: 'Créez une landing page complète avec copy pour un produit de votre choix.', ar: 'أنشئ صفحة هبوط كاملة مع كتابة إعلانية لمنتج من اختيارك.', en: 'Create a complete landing page with copy for a product of your choice.' },
            exercise: { fr: 'Rédigez un script VSL complet (30 minutes) pour un programme de formation.', ar: 'اكتب سكريبت VSL كامل (30 دقيقة) لبرنامج تكويني.', en: 'Write a complete VSL script (30 minutes) for a training program.' },
            tip: { fr: '💡 Les landing pages qui convertissent le mieux sont celles qui parlent UNIQUEMENT des avantages client.', ar: '💡 صفحات الهبوط الأكثر تحويلاً هي التي تتحدث فقط عن فوائد الزبون.', en: '💡 Landing pages that convert best are those that talk ONLY about client benefits.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 4+', ar: 'الشهر 4+', en: 'Month 4+' },
        goal: { fr: 'Devenir consultant en copywriting et diriger des projets', ar: 'كن مستشاراً في الكتابة الإعلانية وادير مشاريع', en: 'Become a copywriting consultant and lead projects' },
        lessons: [
          {
            id: 'copy-m-1',
            title: { fr: 'Consultant Copywriting - Vendre avec des mots', ar: 'مستشار كتابة إعلانية - البيع بالكلمات', en: 'Copywriting Consultant - Selling with words' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le consultant copywriting aide les entreprises à améliorer leurs textes de vente.','Services: audit de copy, rédaction de landing pages, scripts VSL, emails.','Processus: Brief client → Recherche → Rédaction → Révision → Livraison.','Tarification: landing page 20-50K DZD, VSL 50-100K DZD, forfait mensuel 30-80K DZD.','Spécialisez-vous dans une niche: SaaS, e-commerce, formation, santé.','Résultats: le ROI du copywriting est le plus élevé en marketing (10x-100x).'],
              ar: ['مستشار الكتابة الإعلانية يساعد المشاريع على تحسين نصوص البيع.','الخدمات: تدقيق النصوص، كتابة صفحات هبوط، سكريبتات VSL، إيميلات.','العملية: بريف الزبون → بحث → كتابة → مراجعة → تسليم.','التسعير: صفحة هبوط 20-50K دج، VSL 50-100K دج، باقة شهرية 30-80K دج.','تخصّص في مجال: SaaS، التجارة الإلكترونية، التكوين، الصحة.','النتائج: عائد الاستثمار في الكتابة الإعلانية هو الأعلى في التسويق (10x-100x).'],
              en: ['Copywriting consultants help businesses improve their sales copy.','Services: copy audit, landing page writing, VSL scripts, emails.','Process: Client brief → Research → Writing → Revision → Delivery.','Pricing: landing page 20-50K DZD, VSL 50-100K DZD, monthly package 30-80K DZD.','Specialize in a niche: SaaS, e-commerce, training, health.','Results: copywriting ROI is the highest in marketing (10x-100x).']
            },
            method: { fr: 'Réalisez un audit de copywriting pour une entreprise de votre choix.', ar: 'قم بتدقيق كتابة إعلانية لمشروع من اختيارك.', en: 'Perform a copywriting audit for a business of your choice.' },
            exercise: { fr: 'Créez votre offre de services copywriting avec 3 forfaits et des garanties.', ar: 'أنشئ عرض الخدمات الكتابية الخاص بك بـ3 باقات وضمانات.', en: 'Create your copywriting service offering with 3 packages and guarantees.' },
            tip: { fr: '💡 Les meilleurs copywriters facturent à la performance: commission sur les ventes générées.', ar: '💡 أفضل كتاب الإعلانات يشحنون على الأداء: عمولة على المبيعات المحققة.', en: '💡 The best copywriters charge on performance: commission on sales generated.' }
          }
        ]
      }
    ]
  }
];