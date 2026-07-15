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
// ============================================
// SKILL: UI/UX DESIGN
// ============================================

{
  id: 'uiux',
  icon: '🎨',
  color: '#6366F1',
  accent: '#818CF8',
  bg: '#0C0A1A',
  earning: '20,000 – 100,000 DZD/month',
  firstClient: {
    fr: '4–8 semaines',
    ar: '4–8 أسابيع',
    en: '4–8 weeks'
  },
  startTool: 'Figma + Adobe XD + Pen & Paper',
  title: {
    fr: 'UI/UX Design',
    ar: 'تصميم واجهات المستخدم وتجربة المستخدم',
    en: 'UI/UX Design'
  },
  subtitle: {
    fr: 'User Interface & Experience',
    ar: 'تصميم واجهات وتجارب المستخدم',
    en: 'User Interface & Experience'
  },
  tagline: {
    fr: 'Créez des expériences numériques qui racontent des histoires et convertissent les utilisateurs',
    ar: 'أنشئ تجارب رقمية تحكي قصصاً وتحول المستخدمين',
    en: 'Create digital experiences that tell stories and convert users'
  },
  levels: [
    // ============================================
    // LEVEL 1: BEGINNER - 8 Lessons
    // ============================================
    {
      name: {
        fr: 'Débutant',
        ar: 'مبتدئ',
        en: 'Beginner'
      },
      badge: '🌱',
      duration: {
        fr: 'Semaines 1–4',
        ar: 'الأسابيع 1–4',
        en: 'Weeks 1–4'
      },
      goal: {
        fr: 'Maîtriser les fondamentaux du UI/UX Design et créer vos premiers wireframes',
        ar: 'إتقان أساسيات تصميم واجهات وتجارب المستخدم وإنشاء أول الرسوم الهيكلية',
        en: 'Master UI/UX Design fundamentals and create your first wireframes'
      },
      lessons: [
        // Lesson 1: UI vs UX
        {
          id: 'uiux-b-1',
          title: {
            fr: 'UI vs UX - Comprendre la Différence',
            ar: 'UI vs UX - فهم الفرق',
            en: 'UI vs UX - Understanding the Difference'
          },
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
          layout: 'top',
          steps: {
            fr: [
              'UI = User Interface (Interface Utilisateur) = l\'apparence du produit',
              'UX = User Experience (Expérience Utilisateur) = comment l\'utilisateur se sent',
              'UI est ce que vous voyez, UX est ce que vous ressentez',
              'Exemple: Un site beau mais confus = bon UI, mauvais UX',
              'Exemple: Un site simple mais agréable = bon UX, UI correct',
              'Les deux doivent travailler ensemble pour un grand produit',
              'Le UI/UX Designer combine les deux disciplines',
              'Objectif final: créer des produits que les gens aiment utiliser'
            ],
            ar: [
              'UI = واجهة المستخدم = مظهر المنتج',
              'UX = تجربة المستخدم = كيف يشعر المستخدم',
              'UI هو ما تراه، UX هو ما تشعر به',
              'مثال: موقع جميل لكن مربك = UI جيد، UX سيء',
              'مثال: موقع بسيط لكن ممتع = UX جيد، UI مقبول',
              'يجب أن يعمل الاثنان معاً لمنتج رائع',
              'مصمم UI/UX يجمع بين التخصصين',
              'الهدف النهائي: إنشاء منتجات يحب الناس استخدامها'
            ],
            en: [
              'UI = User Interface = the appearance of the product',
              'UX = User Experience = how the user feels',
              'UI is what you see, UX is what you feel',
              'Example: A beautiful but confusing site = good UI, bad UX',
              'Example: A simple but enjoyable site = good UX, okay UI',
              'Both must work together for a great product',
              'The UI/UX Designer combines both disciplines',
              'Final goal: create products people love to use'
            ]
          },
          method: {
            fr: 'Analysez 3 applications que vous utilisez quotidiennement. Notez 5 éléments UI et 5 éléments UX pour chacune. Identifiez ce qui fonctionne et ce qui pourrait être amélioré.',
            ar: 'حلل 3 تطبيقات تستخدمها يومياً. سجل 5 عناصر UI و5 عناصر UX لكل منها. حدد ما يعمل وما يمكن تحسينه.',
            en: 'Analyze 3 applications you use daily. Note 5 UI elements and 5 UX elements for each. Identify what works and what could be improved.'
          },
          exercise: {
            fr: 'Créez une comparaison visuelle: prenez une capture d\'écran d\'une app bien conçue et une mal conçue. Notez 10 différences UI et 10 différences UX. Présentez vos conclusions.',
            ar: 'أنشئ مقارنة بصرية: خذ لقطة شاشة لتطبيق مصمم جيداً وآخر سيئ التصميم. سجل 10 اختلافات في UI و10 اختلافات في UX. قدم استنتاجاتك.',
            en: 'Create a visual comparison: take a screenshot of a well-designed app and a poorly designed one. Note 10 UI differences and 10 UX differences. Present your findings.'
          },
          tip: {
            fr: '💡 Un bon UI/UX Designer pense d\'abord à l\'utilisateur. La beauté suit la fonctionnalité. Si un produit n\'est pas utile, même le plus beau design échoue.',
            ar: '💡 مصمم UI/UX الجيد يفكر أولاً في المستخدم. الجمال يتبع الوظيفة. إذا لم يكن المنتج مفيداً، حتى أجمل تصميم يفشل.',
            en: '💡 A good UI/UX Designer thinks about the user first. Beauty follows functionality. If a product isn\'t useful, even the most beautiful design fails.'
          }
        },
        // Lesson 2: Design Principles
        {
          id: 'uiux-b-2',
          title: {
            fr: 'Principes de Design',
            ar: 'مبادئ التصميم',
            en: 'Design Principles'
          },
          image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Contraste: les éléments différents se distinguent (couleurs, tailles)',
              'Alignement: tout doit être aligné, rien au hasard',
              'Répétition: utiliser les mêmes styles pour les mêmes éléments',
              'Proximité: grouper les éléments connexes ensemble',
              'Hiérarchie: ordonner l\'importance par taille/couleur/position',
              'Équilibre: répartir le poids visuel harmonieusement',
              'Espace blanc: utiliser l\'espace vide pour respirer',
              'Ces principes s\'appliquent à TOUT design'
            ],
            ar: [
              'التباين: العناصر المختلفة تبرز (ألوان، أحجام)',
              'المحاذاة: كل شيء يجب أن يكون محاذياً، لا شيء عشوائي',
              'التكرار: استخدام نفس الأنماط لنفس العناصر',
              'التقارب: تجميع العناصر المرتبطة معاً',
              'التسلسل الهرمي: ترتيب الأهمية بالحجم/اللون/الموضع',
              'التوازن: توزيع الوزن البصري بتناغم',
              'الفراغ الأبيض: استخدام المساحة الفارغة للتنفس',
              'هذه المبادئ تنطبق على أي تصميم'
            ],
            en: [
              'Contrast: different elements stand out (colors, sizes)',
              'Alignment: everything should be aligned, nothing random',
              'Repetition: use same styles for same elements',
              'Proximity: group related elements together',
              'Hierarchy: order importance by size/color/position',
              'Balance: distribute visual weight harmoniously',
              'White space: use empty space for breathing room',
              'These principles apply to ALL design'
            ]
          },
          method: {
            fr: 'Prenez un design que vous aimez (affiche, site, app). Identifiez chaque principe de design utilisé. Notez comment ils contribuent à l\'efficacité du design.',
            ar: 'خذ تصميماً تحبه (ملصق، موقع، تطبيق). حدد كل مبدأ تصميم مستخدم. سجل كيف يساهم كل مبدأ في فعالية التصميم.',
            en: 'Take a design you like (poster, site, app). Identify each design principle used. Note how they contribute to the design\'s effectiveness.'
          },
          exercise: {
            fr: 'Refaites un design existant en violant DÉLIBÉREMENT chaque principe. Refaites-le ensuite en suivant parfaitement les principes. Comparez les deux versions.',
            ar: 'أعد تصميم موجود عن عمد بكسر كل مبدأ. ثم أعد تصميمه باتباع المبادئ تماماً. قارن النسختين.',
            en: 'Redesign an existing design by DELIBERATELY violating each principle. Then redesign it perfectly following the principles. Compare both versions.'
          },
          tip: {
            fr: '💡 Les grands designers maîtrisent les règles pour mieux les briser. Mais d\'abord, apprenez les règles. L\'intuition vient avec la pratique des principes.',
            ar: '💡 المصممون الكبار يتقنون القواعد لكسرها بشكل أفضل. لكن أولاً، تعلم القواعد. الحدس يأتي مع ممارسة المبادئ.',
            en: '💡 Great designers master the rules to break them better. But first, learn the rules. Intuition comes with practicing principles.'
          }
        },
        // Lesson 3: Color Theory
        {
          id: 'uiux-b-3',
          title: {
            fr: 'Théorie des Couleurs en UI Design',
            ar: 'نظرية الألوان في تصميم واجهات المستخدم',
            en: 'Color Theory in UI Design'
          },
          image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Roue chromatique: les relations entre les couleurs',
              'Couleurs primaires: Rouge, Bleu, Jaune',
              'Couleurs secondaires: Vert, Orange, Violet',
              'Couleurs tertiaires: mélange de primaires et secondaires',
              'Palettes de couleurs: Monochrome, Complémentaire, Analogue',
              'Psychologie des couleurs: chaque couleur évoque des émotions',
              'Contraste: essentiel pour l\'accessibilité (WCAG)',
              'Exemple: Bleu = confiance, Rouge = urgence, Vert = succès'
            ],
            ar: [
              'عجلة الألوان: العلاقات بين الألوان',
              'الألوان الأساسية: الأحمر، الأزرق، الأصفر',
              'الألوان الثانوية: الأخضر، البرتقالي، البنفسجي',
              'الألوان الثلاثية: مزج الأساسية والثانوية',
              'لوحات الألوان: أحادية اللون، مكملة، متماثلة',
              'سيكولوجية الألوان: كل لون يثير مشاعر',
              'التباين: ضروري لإمكانية الوصول (WCAG)',
              'مثال: الأزرق = ثقة، الأحمر = طوارئ، الأخضر = نجاح'
            ],
            en: [
              'Color wheel: relationships between colors',
              'Primary colors: Red, Blue, Yellow',
              'Secondary colors: Green, Orange, Purple',
              'Tertiary colors: mix of primary and secondary',
              'Color palettes: Monochrome, Complementary, Analogous',
              'Color psychology: each color evokes emotions',
              'Contrast: essential for accessibility (WCAG)',
              'Example: Blue = trust, Red = urgency, Green = success'
            ]
          },
          method: {
            fr: 'Créez 5 palettes de couleurs pour 5 types d\'entreprises différents (fintech, santé, éducation, voyage, luxe). Justifiez chaque choix de couleur.',
            ar: 'أنشئ 5 لوحات ألوان لـ5 أنواع مختلفة من الشركات (تقنية مالية، صحة، تعليم، سفر، فاخرة). برر كل اختيار لون.',
            en: 'Create 5 color palettes for 5 different business types (fintech, health, education, travel, luxury). Justify each color choice.'
          },
          exercise: {
            fr: 'Analysez les couleurs de 10 sites web populaires. Notez leur palette primaire, secondaire, et accent. Expliquez pourquoi ces choix fonctionnent pour leur marque.',
            ar: 'حلل ألوان 10 مواقع ويب شهيرة. سجل لوحتهم الأساسية والثانوية والبارزة. اشرح لماذا هذه الخيارات تعمل لعلامتهم التجارية.',
            en: 'Analyze the colors of 10 popular websites. Note their primary, secondary, and accent palettes. Explain why these choices work for their brand.'
          },
          tip: {
            fr: '💡 Utilisez des outils comme Coolors, Adobe Color ou Figma pour créer des palettes. Commencez avec 3 couleurs: primaire, secondaire, accent. Ajoutez-en plus seulement si nécessaire.',
            ar: '💡 استخدم أدوات مثل Coolors أو Adobe Color أو Figma لإنشاء لوحات. ابدأ بـ3 ألوان: أساسي، ثانوي، بارز. أضف المزيد فقط إذا لزم الأمر.',
            en: '💡 Use tools like Coolors, Adobe Color, or Figma to create palettes. Start with 3 colors: primary, secondary, accent. Add more only if needed.'
          }
        },
        // Lesson 4: Typography
        {
          id: 'uiux-b-4',
          title: {
            fr: 'Typographie en UI Design',
            ar: 'الطباعة في تصميم واجهات المستخدم',
            en: 'Typography in UI Design'
          },
          image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Typographie = l\'art d\'organiser et de styliser le texte',
              'Polices: Serif (élégant), Sans-serif (moderne), Script (décoratif)',
              'Hiérarchie typographique: Titre (H1), Sous-titre (H2), Corps (body)',
              'Taille: 16-18px pour le texte principal, 24-32px pour les titres',
              'Espacement: line-height (1.5x), letter-spacing (0.5-1px)',
              'Limitez à 2 familles de polices maximum',
              'Google Fonts: 1400+ polices gratuites',
              'Exemple: Inter (moderne) + Merriweather (élégant)'
            ],
            ar: [
              'الطباعة = فن تنظيم وتصميم النصوص',
              'الخطوط: Serif (أنيق)، Sans-serif (عصري)، Script (زخرفي)',
              'التسلسل الهرمي للطباعة: عنوان رئيسي، عنوان فرعي، نص',
              'الحجم: 16-18px للنص الرئيسي، 24-32px للعناوين',
              'التباعد: ارتفاع السطر (1.5x)، تباعد الحروف (0.5-1px)',
              'حدد عائلتي خط كحد أقصى',
              'Google Fonts: 1400+ خط مجاني',
              'مثال: Inter (عصري) + Merriweather (أنيق)'
            ],
            en: [
              'Typography = the art of organizing and styling text',
              'Fonts: Serif (elegant), Sans-serif (modern), Script (decorative)',
              'Typographic hierarchy: Title (H1), Subtitle (H2), Body',
              'Size: 16-18px for body text, 24-32px for titles',
              'Spacing: line-height (1.5x), letter-spacing (0.5-1px)',
              'Limit to 2 font families maximum',
              'Google Fonts: 1400+ free fonts',
              'Example: Inter (modern) + Merriweather (elegant)'
            ]
          },
          method: {
            fr: 'Créez une hiérarchie typographique pour un article de blog. Utilisez 2 polices, 5 tailles différentes, et variez les poids (gras, régulier, léger). Justifiez chaque choix.',
            ar: 'أنشئ تسلسلاً هرمياً للطباعة لمقال مدونة. استخدم خطين و5 أحجام مختلفة وتباين في الوزن (غامق، عادي، خفيف). برر كل اختيار.',
            en: 'Create a typographic hierarchy for a blog article. Use 2 fonts, 5 different sizes, and vary weights (bold, regular, light). Justify each choice.'
          },
          exercise: {
            fr: 'Refaites la typographie d\'un site web existant. Choisissez 3 nouvelles combinaisons de polices et testez-les. Créez un moodboard montrant pourquoi chaque combinaison fonctionne.',
            ar: 'أعد تصميم طباعة موقع ويب موجود. اختر 3 تركيبات خطوط جديدة واختبرها. أنشئ لوحة مزاجية تظهر لماذا كل تركيبة تعمل.',
            en: 'Redesign the typography of an existing website. Choose 3 new font combinations and test them. Create a moodboard showing why each combination works.'
          },
          tip: {
            fr: '💡 La typographie constitue 90% de la perception de votre design. Choisissez des polices qui reflètent votre marque. Testez-les toujours avec du vrai contenu, pas du Lorem Ipsum.',
            ar: '💡 الطباعة تشكل 90% من إدراك تصميمك. اختر خطوطاً تعكس علامتك التجارية. اختبرها دائماً بمحتوى حقيقي، ليس بـ Lorem Ipsum.',
            en: '💡 Typography makes up 90% of your design perception. Choose fonts that reflect your brand. Always test with real content, not Lorem Ipsum.'
          }
        },
        // Lesson 5: Layout & Grid
        {
          id: 'uiux-b-5',
          title: {
            fr: 'Layout & Grilles',
            ar: 'التخطيط والشبكات',
            en: 'Layout & Grid'
          },
          image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Grille = structure invisible qui organise les éléments',
              'Systèmes de grille: 12 colonnes (standard), 16 colonnes, 24 colonnes',
              'Gouttières: espace entre les colonnes (16-24px)',
              'Marges: espace sur les bords (16-40px)',
              'Hiérarchie de grille: containers, rows, columns',
              'Breakpoints: Mobile (1 col), Tablette (4-8 col), Desktop (12 col)',
              'Figma: utilisation des Auto Layout + Grids',
              'Exemple: Amazon, Airbnb, Apple utilisent tous des grilles'
            ],
            ar: [
              'الشبكة = هيكل غير مرئي ينظم العناصر',
              'أنظمة الشبكة: 12 عموداً (قياسي)، 16 عموداً، 24 عموداً',
              'المزاريب: مسافة بين الأعمدة (16-24px)',
              'الهوامش: مسافة على الحواف (16-40px)',
              'تسلسل الشبكة: حاويات، صفوف، أعمدة',
              'نقاط التوقف: موبايل (عمود 1)، جهاز لوحي (4-8 أعمدة)، سطح المكتب (12 عموداً)',
              'Figma: استخدام التخطيط التلقائي + الشبكات',
              'مثال: Amazon، Airbnb، Apple كلها تستخدم شبكات'
            ],
            en: [
              'Grid = invisible structure that organizes elements',
              'Grid systems: 12 columns (standard), 16 columns, 24 columns',
              'Gutters: space between columns (16-24px)',
              'Margins: space on edges (16-40px)',
              'Grid hierarchy: containers, rows, columns',
              'Breakpoints: Mobile (1 col), Tablet (4-8 col), Desktop (12 col)',
              'Figma: Use Auto Layout + Grids',
              'Example: Amazon, Airbnb, Apple all use grids'
            ]
          },
          method: {
            fr: 'Prenez 5 sites web populaires. Superposez une grille de 12 colonnes sur leurs designs. Analysez comment ils utilisent les colonnes, les gouttières, et les marges.',
            ar: 'خذ 5 مواقع ويب شهيرة. ضع شبكة من 12 عموداً فوق تصاميمها. حلل كيف يستخدمون الأعمدة والمزاريب والهوامش.',
            en: 'Take 5 popular websites. Overlay a 12-column grid on their designs. Analyze how they use columns, gutters, and margins.'
          },
          exercise: {
            fr: 'Créez une page web complète en utilisant une grille de 12 colonnes. Incluez: header, navigation, contenu principal, sidebar, footer. Assurez-vous que tout est parfaitement aligné.',
            ar: 'أنشئ صفحة ويب كاملة باستخدام شبكة من 12 عموداً. تشمل: رأس، تنقل، محتوى رئيسي، شريط جانبي، تذييل. تأكد من أن كل شيء محاذٍ تماماً.',
            en: 'Create a complete web page using a 12-column grid. Include: header, navigation, main content, sidebar, footer. Ensure everything is perfectly aligned.'
          },
          tip: {
            fr: '💡 Ne laissez jamais d\'éléments flotter au hasard. Utilisez la grille pour tout aligner. Un design aligné = un design professionnel. C\'est aussi simple que ça.',
            ar: '💡 لا تترك أبداً عناصر تطفو بشكل عشوائي. استخدم الشبكة لمحاذاة كل شيء. تصميم محاذي = تصميم احترافي. بهذه البساطة.',
            en: '💡 Never leave elements floating randomly. Use the grid to align everything. An aligned design = a professional design. It\'s that simple.'
          }
        },
        // Lesson 6: Wireframing
        {
          id: 'uiux-b-6',
          title: {
            fr: 'Wireframing - Les Bases',
            ar: 'الرسوم الهيكلية - الأساسيات',
            en: 'Wireframing - The Basics'
          },
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Wireframe = croquis basse fidélité du design',
              'Niveaux: Low-fidelity (papier), Medium (digital), High (détaillé)',
              'Éléments: boîtes pour images, lignes pour texte, formes pour boutons',
              'Objectif: tester la structure avant de s\'attacher aux détails',
              'Outils: Papier/crayon, Figma, Balsamiq, Miro',
              'Ne vous inquiétez pas des couleurs ou polices',
              'Concentrez-vous sur: mise en page, hiérarchie, fonctionnalité',
              'Itérez: faites 3-5 versions avant de finaliser'
            ],
            ar: [
              'الرسم الهيكلي = مخطط منخفض الدقة للتصميم',
              'المستويات: منخفض الدقة (ورق)، متوسط (رقمي)، عالي (مفصل)',
              'العناصر: مربعات للصور، خطوط للنص، أشكال للأزرار',
              'الهدف: اختبار الهيكل قبل الالتزام بالتفاصيل',
              'الأدوات: ورق/قلم، Figma، Balsamiq، Miro',
              'لا تقلق بشأن الألوان أو الخطوط',
              'ركز على: التخطيط، التسلسل الهرمي، الوظيفة',
              'كرر: اعمل 3-5 نسخ قبل الانتهاء'
            ],
            en: [
              'Wireframe = low-fidelity sketch of the design',
              'Levels: Low-fidelity (paper), Medium (digital), High (detailed)',
              'Elements: boxes for images, lines for text, shapes for buttons',
              'Goal: test structure before committing to details',
              'Tools: Paper/pen, Figma, Balsamiq, Miro',
              'Don\'t worry about colors or fonts',
              'Focus on: layout, hierarchy, functionality',
              'Iterate: make 3-5 versions before finalizing'
            ]
          },
          method: {
            fr: 'Dessinez 3 wireframes différents pour la page d\'accueil d\'une application de votre choix. Faites-les sur papier d\'abord, puis numériquement. Comparez les 3 approches.',
            ar: 'ارسم 3 رسوم هيكلية مختلفة للصفحة الرئيسية لتطبيق من اختيارك. اعملها على الورق أولاً، ثم رقمياً. قارن الطرق الثلاث.',
            en: 'Draw 3 different wireframes for the homepage of an app of your choice. Do them on paper first, then digitally. Compare the 3 approaches.'
          },
          exercise: {
            fr: 'Créez un wireframe complet pour une application mobile de réservation de restaurant. Incluez: écran d\'accueil, recherche, résultats, détails, réservation, confirmation. 3 niveaux de fidélité.',
            ar: 'أنشئ رسماً هيكلياً كاملاً لتطبيق موبايل لحجز مطعم. يشمل: شاشة رئيسية، بحث، نتائج، تفاصيل، حجز، تأكيد. 3 مستويات من الدقة.',
            en: 'Create a complete wireframe for a restaurant booking mobile app. Include: home screen, search, results, details, booking, confirmation. 3 fidelity levels.'
          },
          tip: {
            fr: '💡 Le wireframing est l\'étape la plus importante. 80% de votre temps devrait être en wireframes, 20% en design final. Un bon wireframe = un bon design final.',
            ar: '💡 الرسم الهيكلي هو الخطوة الأكثر أهمية. 80% من وقتك يجب أن يكون في الرسوم الهيكلية، 20% في التصميم النهائي. رسم هيكلي جيد = تصميم نهائي جيد.',
            en: '💡 Wireframing is the most important step. 80% of your time should be on wireframes, 20% on final design. A good wireframe = a good final design.'
          }
        },
        // Lesson 7: User Flow
        {
          id: 'uiux-b-7',
          title: {
            fr: 'User Flow - Le Parcours Utilisateur',
            ar: 'تدفق المستخدم - رحلة المستخدم',
            en: 'User Flow - The User Journey'
          },
          image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'User Flow = le chemin que l\'utilisateur suit pour accomplir une tâche',
              'Étapes: Point de départ → Actions → Décisions → Point d\'arrivée',
              'Visualisation: diagrammes avec rectangles, losanges, flèches',
              'Rectangles = pages/écrans, Losanges = décisions, Flèches = navigation',
              'Exemple: Acheter un produit: Accueil → Recherche → Produit → Panier → Paiement → Confirmation',
              'Identifier les points de friction: où l\'utilisateur bloque?',
              'Optimiser le flow: réduire les étapes, simplifier les décisions',
              'Objectif: le chemin le plus court vers l\'objectif de l\'utilisateur'
            ],
            ar: [
              'تدفق المستخدم = المسار الذي يتبعه المستخدم لإنجاز مهمة',
              'الخطوات: نقطة البداية → إجراءات → قرارات → نقطة النهاية',
              'التصور: رسوم بيانية بمستطيلات، معينات، أسهم',
              'المستطيلات = صفحات/شاشات، المعينات = قرارات، الأسهم = تنقل',
              'مثال: شراء منتج: رئيسية → بحث → منتج → سلة → دفع → تأكيد',
              'تحديد نقاط الاحتكاك: أين يتعطل المستخدم؟',
              'تحسين التدفق: تقليل الخطوات، تبسيط القرارات',
              'الهدف: أقصر طريق إلى هدف المستخدم'
            ],
            en: [
              'User Flow = the path the user follows to complete a task',
              'Steps: Starting point → Actions → Decisions → End point',
              'Visualization: diagrams with rectangles, diamonds, arrows',
              'Rectangles = pages/screens, Diamonds = decisions, Arrows = navigation',
              'Example: Buy a product: Home → Search → Product → Cart → Payment → Confirmation',
              'Identify friction points: where does the user get stuck?',
              'Optimize flow: reduce steps, simplify decisions',
              'Goal: the shortest path to the user\'s objective'
            ]
          },
          method: {
            fr: 'Créez un user flow complet pour 3 scénarios: 1) S\'inscrire à un service, 2) Acheter un produit, 3) Contacter le support. Cartographiez chaque étape.',
            ar: 'أنشئ تدفق مستخدم كامل لـ3 سيناريوهات: 1) التسجيل في خدمة، 2) شراء منتج، 3) الاتصال بالدعم. رسم خرائط لكل خطوة.',
            en: 'Create a complete user flow for 3 scenarios: 1) Sign up for a service, 2) Buy a product, 3) Contact support. Map out each step.'
          },
          exercise: {
            fr: 'Analysez le user flow d\'une application populaire (ex: Airbnb). Identifiez chaque étape, les points de friction, et suggérez 3 améliorations. Créez le flow optimisé.',
            ar: 'حلل تدفق المستخدم لتطبيق شهير (مثال: Airbnb). حدد كل خطوة ونقاط الاحتكاك واقترح 3 تحسينات. أنشئ التدفق المحسّن.',
            en: 'Analyze the user flow of a popular app (ex: Airbnb). Identify each step, friction points, and suggest 3 improvements. Create the optimized flow.'
          },
          tip: {
            fr: '💡 Un bon user flow est invisible. L\'utilisateur ne pense pas à la navigation - il pense à accomplir sa tâche. Testez toujours vos flows avec des vrais utilisateurs.',
            ar: '💡 تدفق المستخدم الجيد غير مرئي. لا يفكر المستخدم في التنقل - بل يفكر في إنجاز مهمته. اختبر دائماً تدفقاتك مع مستخدمين حقيقيين.',
            en: '💡 A good user flow is invisible. The user doesn\'t think about navigation - they think about completing their task. Always test your flows with real users.'
          }
        },
        // Lesson 8: Design Thinking
        {
          id: 'uiux-b-8',
          title: {
            fr: 'Design Thinking - Approche Centrée Utilisateur',
            ar: 'التفكير التصميمي - نهج يركز على المستخدم',
            en: 'Design Thinking - User-Centered Approach'
          },
          image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Design Thinking = méthode de résolution de problèmes centrée sur l\'humain',
              '5 phases: Empathie, Définir, Idéation, Prototype, Tester',
              'Empathie: comprendre les besoins réels des utilisateurs',
              'Définir: formuler clairement le problème',
              'Idéation: générer des solutions (brainstorming)',
              'Prototype: créer des solutions tangibles (wireframes)',
              'Tester: valider avec des utilisateurs réels',
              'Itératif: revenez en arrière à n\'importe quelle phase'
            ],
            ar: [
              'التفكير التصميمي = طريقة لحل المشاكل تركز على الإنسان',
              '5 مراحل: التعاطف، التعريف، التوليد، النموذج، الاختبار',
              'التعاطف: فهم احتياجات المستخدمين الحقيقية',
              'التعريف: صياغة المشكلة بوضوح',
              'التوليد: إنتاج حلول (العصف الذهني)',
              'النموذج: إنشاء حلول ملموسة (رسوم هيكلية)',
              'الاختبار: التحقق مع مستخدمين حقيقيين',
              'تكرار: عد إلى أي مرحلة'
            ],
            en: [
              'Design Thinking = human-centered problem-solving method',
              '5 phases: Empathize, Define, Ideate, Prototype, Test',
              'Empathize: understand real user needs',
              'Define: clearly formulate the problem',
              'Ideate: generate solutions (brainstorming)',
              'Prototype: create tangible solutions (wireframes)',
              'Test: validate with real users',
              'Iterative: go back to any phase'
            ]
          },
          method: {
            fr: 'Appliquez le Design Thinking à un problème de votre vie quotidienne. Parcourez les 5 phases. Documentez chaque phase. Participez à un atelier de Design Thinking.',
            ar: 'طبق التفكير التصميمي على مشكلة في حياتك اليومية. انتقل عبر المراحل الخمس. وثق كل مرحلة. شارك في ورشة عمل للتفكير التصميمي.',
            en: 'Apply Design Thinking to a problem in your daily life. Go through all 5 phases. Document each phase. Participate in a Design Thinking workshop.'
          },
          exercise: {
            fr: 'Choisissez un problème réel (ex: les transports en commun à Alger). Appliquez les 5 phases du Design Thinking. Créez une présentation de 10 slides montrant votre processus.',
            ar: 'اختر مشكلة حقيقية (مثال: وسائل النقل العام في الجزائر). طبق مراحل التفكير التصميمي الخمس. أنشئ عرضاً من 10 شرائح يظهر عمليتك.',
            en: 'Choose a real problem (ex: public transport in Algiers). Apply the 5 Design Thinking phases. Create a 10-slide presentation showing your process.'
          },
          tip: {
            fr: '💡 Le Design Thinking n\'est pas une formule magique. C\'est un outil. Utilisez-le quand vous avez besoin de comprendre les utilisateurs et de résoudre des problèmes complexes.',
            ar: '💡 التفكير التصميمي ليس صيغة سحرية. إنها أداة. استخدمها عندما تحتاج إلى فهم المستخدمين وحل مشاكل معقدة.',
            en: '💡 Design Thinking isn\'t a magic formula. It\'s a tool. Use it when you need to understand users and solve complex problems.'
          }
        }
      ]
    },
    // ============================================
    // LEVEL 2: INTERMEDIATE - 8 Lessons
    // ============================================
    {
      name: {
        fr: 'Intermédiaire',
        ar: 'متوسط',
        en: 'Intermediate'
      },
      badge: '⚡',
      duration: {
        fr: 'Semaines 5–12',
        ar: 'الأسابيع 5–12',
        en: 'Weeks 5–12'
      },
      goal: {
        fr: 'Maîtriser Figma, créer des composants avancés et commencer à designer pour le web et le mobile',
        ar: 'إتقان Figma، إنشاء مكونات متقدمة والبدء في تصميم الويب والموبايل',
        en: 'Master Figma, create advanced components and start designing for web and mobile'
      },
      lessons: [
        // Lesson 1: Figma Complete
        {
          id: 'uiux-i-1',
          title: {
            fr: 'Figma - Maîtrise Complète',
            ar: 'Figma - إتقان كامل',
            en: 'Figma - Complete Mastery'
          },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'top',
          steps: {
            fr: [
              'Figma = outil de design collaboratif (gratuit pour individus)',
              'Interface: Canvas central, panneaux gauche/droite, barre supérieure',
              'Outils: Rectangle, Texte, Ellipse, Ligne, Stylo, Main',
              'Frames: conteneurs pour vos designs (tailles d\'écran)',
              'Layers: organisez vos éléments dans une hiérarchie',
              'Plugins: extensible avec des plugins communautaires',
              'Prototypage: créez des prototypes interactifs',
              'Partage: collaborez en temps réel avec votre équipe'
            ],
            ar: [
              'Figma = أداة تصميم تعاونية (مجانية للأفراد)',
              'الواجهة: لوحة مركزية، لوحات يسار/يمين، شريط علوي',
              'الأدوات: مستطيل، نص، قطع ناقص، خط، قلم، يد',
              'الإطارات: حاويات لتصاميمك (أحجام الشاشات)',
              'الطبقات: تنظيم عناصرك في تسلسل هرمي',
              'الإضافات: قابلة للتوسيع بإضافات المجتمع',
              'النماذج الأولية: إنشاء نماذج تفاعلية',
              'المشاركة: التعاون في الوقت الفعلي مع فريقك'
            ],
            en: [
              'Figma = collaborative design tool (free for individuals)',
              'Interface: Center canvas, left/right panels, top bar',
              'Tools: Rectangle, Text, Ellipse, Line, Pen, Hand',
              'Frames: containers for your designs (screen sizes)',
              'Layers: organize your elements in hierarchy',
              'Plugins: extensible with community plugins',
              'Prototyping: create interactive prototypes',
              'Sharing: collaborate in real-time with your team'
            ]
          },
          method: {
            fr: 'Créez un projet Figma pour un site web de portfolio. Ajoutez 5 frames (pages), utilisez au moins 10 shapes, 5 text elements, et 3 images. Organisez tout avec des layers.',
            ar: 'أنشئ مشروع Figma لموقع ويب بورتفوليو. أضف 5 إطارات (صفحات)، استخدم 10 أشكال على الأقل، 5 عناصر نص، و3 صور. نظم كل شيء بطبقات.',
            en: 'Create a Figma project for a portfolio website. Add 5 frames (pages), use at least 10 shapes, 5 text elements, and 3 images. Organize everything with layers.'
          },
          exercise: {
            fr: 'Refaites un site web populaire dans Figma (ex: le site d\'une banque algérienne). Reconstruisez la page d\'accueil et une page intérieure. Prenez des captures pour comparer avec l\'original.',
            ar: 'أعد إنشاء موقع ويب شهير في Figma (مثال: موقع بنك جزائري). أعد بناء الصفحة الرئيسية وصفحة داخلية. خذ لقطات للمقارنة مع الأصل.',
            en: 'Redesign a popular website in Figma (ex: an Algerian bank\'s site). Rebuild the homepage and an inner page. Take screenshots to compare with the original.'
          },
          tip: {
            fr: '💡 Maîtrisez les raccourcis Figma: R (rectangle), T (texte), F (frame), Shift+2 (zoom), Shift+0 (reset). La vitesse vient des raccourcis.',
            ar: '💡 أتقن اختصارات Figma: R (مستطيل)، T (نص)، F (إطار)، Shift+2 (تكبير)، Shift+0 (إعادة تعيين). السرعة تأتي من الاختصارات.',
            en: '💡 Master Figma shortcuts: R (rectangle), T (text), F (frame), Shift+2 (zoom), Shift+0 (reset). Speed comes from shortcuts.'
          }
        },
        // Lesson 2: Auto Layout
        {
          id: 'uiux-i-2',
          title: {
            fr: 'Auto Layout dans Figma',
            ar: 'التخطيط التلقائي في Figma',
            en: 'Auto Layout in Figma'
          },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Auto Layout = système de grille flexible pour organiser des éléments',
              'Raccourci: Shift + A pour activer Auto Layout',
              'Direction: verticale (colonne) ou horizontale (rangée)',
              'Padding: espace entre les bords et le contenu',
              'Gap: espace entre les éléments',
              'Fill: l\'élément s\'étire pour remplir l\'espace disponible',
              'Hug: l\'élément s\'ajuste au contenu',
              'Exemple: boutons, cartes, listes, navigations'
            ],
            ar: [
              'التخطيط التلقائي = نظام شبكي مرن لتنظيم العناصر',
              'اختصار: Shift + A لتفعيل التخطيط التلقائي',
              'الاتجاه: عمودي أو أفقي',
              'الحشو: مسافة بين الحواف والمحتوى',
              'الفجوة: مسافة بين العناصر',
              'Fill: العنصر يتمدد لملء المساحة المتاحة',
              'Hug: العنصر يتكيف مع المحتوى',
              'مثال: أزرار، بطاقات، قوائم، تنقل'
            ],
            en: [
              'Auto Layout = flexible grid system to organize elements',
              'Shortcut: Shift + A to enable Auto Layout',
              'Direction: vertical (column) or horizontal (row)',
              'Padding: space between edges and content',
              'Gap: space between elements',
              'Fill: element stretches to fill available space',
              'Hug: element adjusts to content',
              'Example: buttons, cards, lists, navigations'
            ]
          },
          method: {
            fr: 'Créez 5 composants différents en utilisant Auto Layout: un bouton, une carte, une navigation, une liste, un formulaire. Faites-les responsive en utilisant Fill et Hug.',
            ar: 'أنشئ 5 مكونات مختلفة باستخدام التخطيط التلقائي: زر، بطاقة، تنقل، قائمة، نموذج. اجعلها متجاوبة باستخدام Fill وHug.',
            en: 'Create 5 different components using Auto Layout: a button, a card, a navigation, a list, a form. Make them responsive using Fill and Hug.'
          },
          exercise: {
            fr: 'Refaites une interface populaire (ex: Netflix) en utilisant uniquement Auto Layout. Aucune position absolue, aucun élément flottant. Tout doit être dans des Auto Layouts.',
            ar: 'أعد إنشاء واجهة شهيرة (مثال: Netflix) باستخدام التخطيط التلقائي فقط. لا مواضع مطلقة، ولا عناصر عائمة. كل شيء يجب أن يكون في تخطيطات تلقائية.',
            en: 'Redesign a popular interface (ex: Netflix) using only Auto Layout. No absolute positions, no floating elements. Everything must be in Auto Layouts.'
          },
          tip: {
            fr: '💡 Auto Layout est votre meilleur ami dans Figma. Une fois que vous le maîtrisez, vous pouvez créer des designs 5x plus rapidement et 10x plus facile à mettre à jour.',
            ar: '💡 التخطيط التلقائي هو أفضل صديق لك في Figma. بمجرد إتقانه، يمكنك إنشاء تصاميم أسرع بـ5 مرات وأسهل بـ10 مرات للتحديث.',
            en: '💡 Auto Layout is your best friend in Figma. Once you master it, you can create designs 5x faster and 10x easier to update.'
          }
        },
        // Lesson 3: Components
        {
          id: 'uiux-i-3',
          title: {
            fr: 'Composants dans Figma',
            ar: 'المكونات في Figma',
            en: 'Components in Figma'
          },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Composant = élément réutilisable (bouton, carte, icon)',
              'Créer: sélectionnez l\'élément → Cliquez sur "Create Component"',
              'Instance = copie du composant (liée au parent)',
              'Modifier le parent → toutes les instances se mettent à jour',
              'Nested Components = composants dans des composants',
              'Overrides: modifier une instance sans affecter les autres',
              'Organisation: nommez vos composants (Bouton/Primary, Bouton/Secondary)',
              'Exemple: système de design avec 50+ composants'
            ],
            ar: [
              'المكون = عنصر قابل لإعادة الاستخدام (زر، بطاقة، أيقونة)',
              'الإنشاء: حدد العنصر → انقر على "إنشاء مكون"',
              'المثيل = نسخة من المكون (مرتبطة بالأصل)',
              'تعديل الأصل → يتم تحديث جميع المثيلات',
              'مكونات متداخلة = مكونات داخل مكونات',
              'التجاوزات: تعديل مثيل دون التأثير على الآخرين',
              'التنظيم: اسم مكوناتك (زر/أساسي، زر/ثانوي)',
              'مثال: نظام تصميم مع 50+ مكوناً'
            ],
            en: [
              'Component = reusable element (button, card, icon)',
              'Create: select element → Click "Create Component"',
              'Instance = copy of component (linked to parent)',
              'Edit parent → all instances update',
              'Nested Components = components inside components',
              'Overrides: modify an instance without affecting others',
              'Organization: name your components (Button/Primary, Button/Secondary)',
              'Example: design system with 50+ components'
            ]
          },
          method: {
            fr: 'Créez un système de boutons: 5 variantes (primary, secondary, outline, disabled, danger). Utilisez un composant principal et 4 instances avec overrides.',
            ar: 'أنشئ نظام أزرار: 5 متغيرات (أساسي، ثانوي، مخطط، معطل، خطر). استخدم مكوناً رئيسياً و4 مثيلات مع تجاوزات.',
            en: 'Create a button system: 5 variants (primary, secondary, outline, disabled, danger). Use a main component and 4 instances with overrides.'
          },
          exercise: {
            fr: 'Construisez un système de design complet pour une application mobile: 10 composants (boutons, inputs, cards, modals, etc.), organisés en pages, tous réutilisables.',
            ar: 'ابنِ نظام تصميم كامل لتطبيق موبايل: 10 مكونات (أزرار، إدخالات، بطاقات، نوافذ منبثقة، إلخ)، منظمة في صفحات، كلها قابلة لإعادة الاستخدام.',
            en: 'Build a complete design system for a mobile app: 10 components (buttons, inputs, cards, modals, etc.), organized in pages, all reusable.'
          },
          tip: {
            fr: '💡 Les composants sont la clé de la scalabilité. Un bon système de composants permet à une équipe de 10 designers de travailler sur le même projet sans conflits.',
            ar: '💡 المكونات هي مفتاح قابلية التوسع. نظام مكونات جيد يسمح لفريق من 10 مصممين بالعمل على نفس المشروع دون تعارضات.',
            en: '💡 Components are the key to scalability. A good component system allows a team of 10 designers to work on the same project without conflicts.'
          }
        },
        // Lesson 4: Variants
        {
          id: 'uiux-i-4',
          title: {
            fr: 'Variants dans Figma',
            ar: 'المتغيرات في Figma',
            en: 'Variants in Figma'
          },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Variants = différentes versions d\'un même composant',
              'Propriétés: State (default, hover, active, disabled)',
              'Propriétés: Size (small, medium, large)',
              'Propriétés: Color (primary, secondary, danger)',
              'Propriétés: Icon (left, right, none)',
              'Combinez les propriétés pour créer des centaines de variations',
              'Raccourci: sélectionnez plusieurs composants → "Combine as Variants"',
              'Utilisation: choisir une variante dans la barre latérale droite'
            ],
            ar: [
              'المتغيرات = إصدارات مختلفة لنفس المكون',
              'الخصائص: الحالة (افتراضي، تمرير، نشط، معطل)',
              'الخصائص: الحجم (صغير، متوسط، كبير)',
              'الخصائص: اللون (أساسي، ثانوي، خطر)',
              'الخصائص: الأيقونة (يسار، يمين، لا شيء)',
              'دمج الخصائص لإنشاء مئات التغييرات',
              'اختصار: حدد مكونات متعددة → "دمج كمتغيرات"',
              'الاستخدام: اختيار متغير في الشريط الجانبي الأيمن'
            ],
            en: [
              'Variants = different versions of the same component',
              'Properties: State (default, hover, active, disabled)',
              'Properties: Size (small, medium, large)',
              'Properties: Color (primary, secondary, danger)',
              'Properties: Icon (left, right, none)',
              'Combine properties to create hundreds of variations',
              'Shortcut: select multiple components → "Combine as Variants"',
              'Usage: choose variant in right sidebar'
            ]
          },
          method: {
            fr: 'Créez un système de bouton complet avec variants: 3 tailles × 4 états × 5 couleurs = 60 variations. Organisez-les dans un grid pour voir toutes les combinaisons.',
            ar: 'أنشئ نظام أزرار كامل مع متغيرات: 3 أحجام × 4 حالات × 5 ألوان = 60 تغييراً. نظمها في شبكة لرؤية كل التركيبات.',
            en: 'Create a complete button system with variants: 3 sizes × 4 states × 5 colors = 60 variations. Organize them in a grid to see all combinations.'
          },
          exercise: {
            fr: 'Créez 3 familles de composants avec variants: 1) Input fields (3 tailles × 4 états), 2) Cards (2 tailles × 3 styles), 3) Icons (2 tailles × 10 couleurs).',
            ar: 'أنشئ 3 عائلات من المكونات مع متغيرات: 1) حقول الإدخال (3 أحجام × 4 حالات)، 2) البطاقات (حجمين × 3 أنماط)، 3) الأيقونات (حجمين × 10 ألوان).',
            en: 'Create 3 component families with variants: 1) Input fields (3 sizes × 4 states), 2) Cards (2 sizes × 3 styles), 3) Icons (2 sizes × 10 colors).'
          },
          tip: {
            fr: '💡 Les variants rendent votre système de design incroyablement puissant. Un seul composant peut remplacer 50+ composants individuels.',
            ar: '💡 المتغيرات تجعل نظام التصميم الخاص بك قوياً بشكل لا يصدق. مكون واحد يمكن أن يحل محل 50+ مكوناً فردياً.',
            en: '💡 Variants make your design system incredibly powerful. One component can replace 50+ individual components.'
          }
        },
        // Lesson 5: Responsive Design
        {
          id: 'uiux-i-5',
          title: {
            fr: 'Design Responsive',
            ar: 'التصميم المتجاوب',
            en: 'Responsive Design'
          },
          image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Responsive = design qui s\'adapte à toutes les tailles d\'écran',
              'Breakpoints: Mobile (360-420px), Tablette (768-1024px), Desktop (1200px+)',
              'Mobile-first: design pour mobile puis agrandissez pour desktop',
              'Desktop-first: design pour desktop puis réduisez pour mobile',
              'Contenu: adaptez la taille, l\'espacement, la disposition',
              'Navigation: hamburger menu sur mobile, barre complète sur desktop',
              'Images: redimensionnables, compressées, optimisées',
              'Figma: utilisez les contraintes (constraints) et auto layout'
            ],
            ar: [
              'التصميم المتجاوب = تصميم يتكيف مع جميع أحجام الشاشات',
              'نقاط التوقف: موبايل (360-420px)، جهاز لوحي (768-1024px)، سطح المكتب (1200px+)',
              'موبايل أولاً: تصميم للموبايل ثم تكبير لسطح المكتب',
              'سطح المكتب أولاً: تصميم لسطح المكتب ثم تصغير للموبايل',
              'المحتوى: تكييف الحجم والتباعد والترتيب',
              'التنقل: قائمة هامبرغر على الموبايل، شريط كامل على سطح المكتب',
              'الصور: قابلة لإعادة التحجيم، مضغوطة، محسّنة',
              'Figma: استخدم القيود والتخطيط التلقائي'
            ],
            en: [
              'Responsive = design that adapts to all screen sizes',
              'Breakpoints: Mobile (360-420px), Tablet (768-1024px), Desktop (1200px+)',
              'Mobile-first: design for mobile then scale up to desktop',
              'Desktop-first: design for desktop then scale down to mobile',
              'Content: adapt size, spacing, layout',
              'Navigation: hamburger menu on mobile, full bar on desktop',
              'Images: resizable, compressed, optimized',
              'Figma: use constraints and auto layout'
            ]
          },
          method: {
            fr: 'Prenez un design que vous avez créé. Faites 3 versions: mobile, tablette, desktop. Utilisez les constraints et auto layout pour que tout s\'ajuste automatiquement.',
            ar: 'خذ تصميماً أنشأته. اعمل 3 نسخ: موبايل، جهاز لوحي، سطح المكتب. استخدم القيود والتخطيط التلقائي ليتكيف كل شيء تلقائياً.',
            en: 'Take a design you created. Make 3 versions: mobile, tablet, desktop. Use constraints and auto layout so everything adjusts automatically.'
          },
          exercise: {
            fr: 'Concevez une landing page responsive. Créez 3 frames (mobile, tablette, desktop). Assurez-vous que tous les éléments se réorganisent correctement aux 3 tailles.',
            ar: 'صمم صفحة هبوط متجاوبة. أنشئ 3 إطارات (موبايل، جهاز لوحي، سطح المكتب). تأكد من إعادة ترتيب جميع العناصر بشكل صحيح في الأحجام الثلاثة.',
            en: 'Design a responsive landing page. Create 3 frames (mobile, tablet, desktop). Ensure all elements reorganize correctly at all 3 sizes.'
          },
          tip: {
            fr: '💡 Le responsive design n\'est plus un luxe, c\'est une nécessité. 60% du trafic web vient du mobile. Si votre design ne fonctionne pas sur mobile, 60% de vos utilisateurs partent.',
            ar: '💡 التصميم المتجاوب لم يعد رفاهية، بل ضرورة. 60% من حركة المرور على الويب تأتي من الموبايل. إذا لم يعمل تصميمك على الموبايل، 60% من مستخدميك يرحلون.',
            en: '💡 Responsive design is no longer a luxury, it\'s a necessity. 60% of web traffic comes from mobile. If your design doesn\'t work on mobile, 60% of your users leave.'
          }
        },
        // Lesson 6: Design Systems
        {
          id: 'uiux-i-6',
          title: {
            fr: 'Systèmes de Design',
            ar: 'أنظمة التصميم',
            en: 'Design Systems'
          },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Design System = collection de composants, styles, et règles',
              'Styles: Couleurs, Typographie, Espacement, Shadows, Border Radius',
              'Composants: Boutons, Inputs, Cards, Modal, Navigation',
              'Documentation: Guide d\'utilisation, Pattern Library, Code snippets',
              'Outils: Figma + Storybook (pour développement)',
              'Avantages: Cohérence, Rapidité, Scalabilité',
              'Exemple: Material Design (Google), Carbon (IBM)',
              'Commencez petit: 3-5 composants, évoluez ensuite'
            ],
            ar: [
              'نظام التصميم = مجموعة من المكونات والأنماط والقواعد',
              'الأنماط: الألوان، الطباعة، التباعد، الظلال، نصف القطر',
              'المكونات: أزرار، حقول إدخال، بطاقات، نوافذ منبثقة، تنقل',
              'التوثيق: دليل الاستخدام، مكتبة الأنماط، مقتطفات الكود',
              'الأدوات: Figma + Storybook (للتطوير)',
              'المزايا: الاتساق، السرعة، قابلية التوسع',
              'مثال: Material Design (Google)، Carbon (IBM)',
              'ابدأ صغيراً: 3-5 مكونات، ثم تطور'
            ],
            en: [
              'Design System = collection of components, styles, and rules',
              'Styles: Colors, Typography, Spacing, Shadows, Border Radius',
              'Components: Buttons, Inputs, Cards, Modal, Navigation',
              'Documentation: Usage Guide, Pattern Library, Code snippets',
              'Tools: Figma + Storybook (for development)',
              'Benefits: Consistency, Speed, Scalability',
              'Example: Material Design (Google), Carbon (IBM)',
              'Start small: 3-5 components, evolve from there'
            ]
          },
          method: {
            fr: 'Créez votre premier design system. Commencez par: 5 couleurs, 3 typographies, un système d\'espacement (4px, 8px, 16px, 24px, 32px). Puis ajoutez 5 composants.',
            ar: 'أنشئ نظام التصميم الأول لك. ابدأ بـ: 5 ألوان، 3 خطوط، نظام تباعد (4px، 8px، 16px، 24px، 32px). ثم أضف 5 مكونات.',
            en: 'Create your first design system. Start with: 5 colors, 3 fonts, a spacing system (4px, 8px, 16px, 24px, 32px). Then add 5 components.'
          },
          exercise: {
            fr: 'Construisez un design system complet pour une application de type SaaS. Incluez: Styles (couleurs, typo, spacing), Composants (20+), Templates (3-5 pages), Documentation.',
            ar: 'ابنِ نظام تصميم كامل لتطبيق من نوع SaaS. يشمل: الأنماط (ألوان، خطوط، تباعد)، المكونات (20+)، القوالب (3-5 صفحات)، التوثيق.',
            en: 'Build a complete design system for a SaaS-type application. Include: Styles (colors, typo, spacing), Components (20+), Templates (3-5 pages), Documentation.'
          },
          tip: {
            fr: '💡 Un bon design system est la différence entre un produit et une marque. C\'est l\'ADN visuel de votre entreprise. Investissez du temps à le construire bien.',
            ar: '💡 نظام التصميم الجيد هو الفرق بين منتج وعلامة تجارية. إنه الحمض النووي البصري لشركتك. استثمر الوقت في بنائه بشكل جيد.',
            en: '💡 A good design system is the difference between a product and a brand. It\'s the visual DNA of your company. Invest time in building it well.'
          }
        },
        // Lesson 7: Mobile Design
        {
          id: 'uiux-i-7',
          title: {
            fr: 'Design Mobile',
            ar: 'تصميم الموبايل',
            en: 'Mobile Design'
          },
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Mobile = l\'écran principal (70% du trafic web)',
              'Taille: 375x812 (iPhone X), 414x896 (iPhone 11), 360x640 (Android)',
              'Design: Pouces, gestes, contexte (en déplacement)',
              'Navigation: Tab Bar (bas), Navigation (haut), Hamburger',
              'Contenu: Priorisez, simplifiez, une action par écran',
              'Formulaires: utilisez les bons claviers (email, nombre, téléphone)',
              'Gestes: Tap, Swipe, Pinch, Long press',
              'Ergonomie: tout doit être accessible avec un pouce'
            ],
            ar: [
              'الموبايل = الشاشة الرئيسية (70% من حركة مرور الويب)',
              'الحجم: 375x812 (iPhone X)، 414x896 (iPhone 11)، 360x640 (Android)',
              'التصميم: الإبهام، الإيماءات، السياق (أثناء التنقل)',
              'التنقل: شريط علامات تبويب (أسفل)، تنقل (أعلى)، هامبرغر',
              'المحتوى: الأولوية، التبسيط، إجراء واحد لكل شاشة',
              'النماذج: استخدم لوحات المفاتيح الصحيحة (بريد إلكتروني، رقم، هاتف)',
              'الإيماءات: نقر، تمرير، قرص، ضغط مطول',
              'بيئة العمل: كل شيء يجب أن يكون متاحاً بالإبهام'
            ],
            en: [
              'Mobile = the primary screen (70% of web traffic)',
              'Size: 375x812 (iPhone X), 414x896 (iPhone 11), 360x640 (Android)',
              'Design: Thumbs, gestures, context (on the go)',
              'Navigation: Tab Bar (bottom), Navigation (top), Hamburger',
              'Content: Prioritize, simplify, one action per screen',
              'Forms: use the right keyboards (email, number, phone)',
              'Gestures: Tap, Swipe, Pinch, Long press',
              'Ergonomics: everything should be reachable with one thumb'
            ]
          },
          method: {
            fr: 'Prenez un site web que vous aimez. Redessinez-le pour mobile en gardant 60% des fonctionnalités, 30% en simplification, 10% en suppression. Justifiez chaque décision.',
            ar: 'خذ موقع ويب تحبه. أعد تصميمه للموبايل مع الاحتفاظ بـ60% من الميزات، 30% تبسيط، 10% إزالة. برر كل قرار.',
            en: 'Take a website you like. Redesign it for mobile keeping 60% of features, 30% simplification, 10% removal. Justify each decision.'
          },
          exercise: {
            fr: 'Concevez 5 écrans d\'application mobile pour un service de livraison de repas: Accueil, Recherche, Résultats, Détails du restaurant, Panier. Respectez les contraintes mobiles.',
            ar: 'صمم 5 شاشات لتطبيق موبايل لخدمة توصيل طعام: رئيسية، بحث، نتائج، تفاصيل مطعم، سلة. احترم قيود الموبايل.',
            en: 'Design 5 mobile app screens for a food delivery service: Home, Search, Results, Restaurant details, Cart. Respect mobile constraints.'
          },
          tip: {
            fr: '💡 Le mobile est impitoyable: si votre design ne fonctionne pas en 3 secondes, l\'utilisateur part. Testez toujours sur un vrai téléphone, pas juste sur Figma.',
            ar: '💡 الموبايل قاسٍ: إذا لم يعمل تصميمك في 3 ثوانٍ، يغادر المستخدم. اختبر دائماً على هاتف حقيقي، وليس فقط على Figma.',
            en: '💡 Mobile is unforgiving: if your design doesn\'t work in 3 seconds, the user leaves. Always test on a real phone, not just in Figma.'
          }
        },
        // Lesson 8: Web Design
        {
          id: 'uiux-i-8',
          title: {
            fr: 'Web Design',
            ar: 'تصميم الويب',
            en: 'Web Design'
          },
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b853aba4?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Web = plus grand écran, plus de possibilités, plus de complexité',
              'Taille: 1200-1440px standard, parfois plus pour les grandes résolutions',
              'Layout: Multi-colonnes, contenus riches, animations',
              'Navigation: Barre supérieure, sidebar, footer détaillé',
              'Contenu: plus de texte, plus d\'images, vidéos, interactions',
              'Scrolling: important - les gens scrollent, utilisez-le',
              'Interactions: Hover, transitions, micro-interactions',
              'Exemple: Landing pages, portfolios, sites vitrines'
            ],
            ar: [
              'الويب = شاشة أكبر، إمكانيات أكثر، تعقيد أكبر',
              'الحجم: 1200-1440px قياسي، أحياناً أكثر للدقة العالية',
              'التخطيط: متعدد الأعمدة، محتوى غني، رسوم متحركة',
              'التنقل: شريط علوي، شريط جانبي، تذييل مفصل',
              'المحتوى: نص أكثر، صور أكثر، فيديوهات، تفاعلات',
              'التمرير: مهم - الناس تمرر، استخدمها',
              'التفاعلات: تمرير، انتقالات، تفاعلات صغيرة',
              'مثال: صفحات الهبوط، البورتفوليو، مواقع العرض'
            ],
            en: [
              'Web = bigger screen, more possibilities, more complexity',
              'Size: 1200-1440px standard, sometimes wider for high resolutions',
              'Layout: Multi-column, rich content, animations',
              'Navigation: Top bar, sidebar, detailed footer',
              'Content: more text, more images, videos, interactions',
              'Scrolling: important - people scroll, use it',
              'Interactions: Hover, transitions, micro-interactions',
              'Example: Landing pages, portfolios, showcase sites'
            ]
          },
          method: {
            fr: 'Prenez le design mobile que vous avez créé. Faites une version web complète. Ajoutez des fonctionnalités qui n\'étaient pas possibles sur mobile (hover, vidéos, plus de contenu).',
            ar: 'خذ التصميم المحمول الذي أنشأته. اصنع نسخة ويب كاملة. أضف ميزات لم تكن ممكنة على الموبايل (تمرير، فيديوهات، محتوى أكثر).',
            en: 'Take the mobile design you created. Make a complete web version. Add features that weren\'t possible on mobile (hover, videos, more content).'
          },
          exercise: {
            fr: 'Concevez une landing page web complète: Hero section, Features (3), Testimonials (3), Pricing (3 plans), CTA final. 5 sections, design professionnel, responsive.',
            ar: 'صمم صفحة هبوط ويب كاملة: قسم رئيسي، ميزات (3)، شهادات (3)، أسعار (3 خطط)، دعوة للعمل النهائية. 5 أقسام، تصميم احترافي، متجاوب.',
            en: 'Design a complete web landing page: Hero section, Features (3), Testimonials (3), Pricing (3 plans), Final CTA. 5 sections, professional design, responsive.'
          },
          tip: {
            fr: '💡 Le web et le mobile sont complémentaires. Ne concevez pas l\'un sans penser à l\'autre. Un bon designer crée des expériences cohérentes sur tous les supports.',
            ar: '💡 الويب والموبايل مكملان لبعضهما. لا تصمم أحدهما دون التفكير في الآخر. المصمم الجيد يخلق تجارب متسقة على جميع المنصات.',
            en: '💡 Web and mobile are complementary. Don\'t design one without thinking about the other. A good designer creates consistent experiences across all platforms.'
          }
        }
      ]
    },
    // ============================================
    // LEVEL 3: ADVANCED - 8 Lessons
    // ============================================
    {
      name: {
        fr: 'Avancé',
        ar: 'متقدم',
        en: 'Advanced'
      },
      badge: '🔥',
      duration: {
        fr: 'Semaines 13–24',
        ar: 'الأسابيع 13–24',
        en: 'Weeks 13–24'
      },
      goal: {
        fr: 'Maîtriser la recherche UX, le prototypage avancé, et livrer des projets à des clients professionnels',
        ar: 'إتقان بحث تجربة المستخدم، النماذج الأولية المتقدمة، وتسليم مشاريع لعملاء محترفين',
        en: 'Master UX research, advanced prototyping, and deliver projects to professional clients'
      },
      lessons: [
        // Lesson 1: UX Research
        {
          id: 'uiux-a-1',
          title: {
            fr: 'Recherche UX',
            ar: 'بحث تجربة المستخدم',
            en: 'UX Research'
          },
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
          layout: 'top',
          steps: {
            fr: [
              'UX Research = comprendre les besoins et comportements des utilisateurs',
              'Méthodes qualitatives: interviews, observations, personas',
              'Méthodes quantitatives: sondages, analytics, A/B testing',
              'Interview: 5-8 utilisateurs, questions ouvertes, écouter plus que parler',
              'Sondages: Google Forms, Typeform, à grande échelle',
              'Analytics: Google Analytics, Hotjar, heatmaps',
              'Synthèse: affinités, patterns, insights',
              'Objectif: prendre des décisions basées sur des données réelles'
            ],
            ar: [
              'بحث تجربة المستخدم = فهم احتياجات وسلوكيات المستخدمين',
              'الطرق النوعية: المقابلات، الملاحظات، الشخصيات',
              'الطرق الكمية: الاستبيانات، التحليلات، اختبار A/B',
              'المقابلة: 5-8 مستخدمين، أسئلة مفتوحة، استمع أكثر مما تتكلم',
              'الاستبيانات: Google Forms، Typeform، على نطاق واسع',
              'التحليلات: Google Analytics، Hotjar، خرائط الحرارة',
              'التوليف: التقارب، الأنماط، الأفكار',
              'الهدف: اتخاذ قرارات مبنية على بيانات حقيقية'
            ],
            en: [
              'UX Research = understanding user needs and behaviors',
              'Qualitative methods: interviews, observations, personas',
              'Quantitative methods: surveys, analytics, A/B testing',
              'Interview: 5-8 users, open questions, listen more than talk',
              'Surveys: Google Forms, Typeform, large scale',
              'Analytics: Google Analytics, Hotjar, heatmaps',
              'Synthesis: affinities, patterns, insights',
              'Goal: make decisions based on real data'
            ]
          },
          method: {
            fr: 'Menez 5 interviews utilisateurs. Préparez 10 questions ouvertes. Enregistrez (avec permission), transcrivez, et identifiez 5 patterns communs. Présentez vos findings.',
            ar: 'أجرِ 5 مقابلات مع مستخدمين. جهز 10 أسئلة مفتوحة. سجل (بإذن)، انسخ، وحدد 5 أنماط مشتركة. قدم نتائجك.',
            en: 'Conduct 5 user interviews. Prepare 10 open questions. Record (with permission), transcribe, and identify 5 common patterns. Present your findings.'
          },
          exercise: {
            fr: 'Créez un plan de recherche UX complet pour un projet de votre choix. Incluez: objectifs, méthodes, participants, questions, timeline, analyse prévue.',
            ar: 'أنشئ خطة بحث UX كاملة لمشروع من اختيارك. تشمل: الأهداف، الطرق، المشاركون، الأسئلة، الجدول الزمني، التحليل المتوقع.',
            en: 'Create a complete UX research plan for a project of your choice. Include: objectives, methods, participants, questions, timeline, analysis plan.'
          },
          tip: {
            fr: '💡 La recherche UX n\'est pas facultative. Les designers qui font de la recherche créent des produits 3x plus efficaces que ceux qui ne le font pas.',
            ar: '💡 بحث UX ليس اختيارياً. المصممون الذين يقومون بالبحث يصنعون منتجات أكثر فعالية بـ3 مرات من أولئك الذين لا يفعلون.',
            en: '💡 UX research isn\'t optional. Designers who do research create products 3x more effective than those who don\'t.'
          }
        },
        // Lesson 2: Personas
        {
          id: 'uiux-a-2',
          title: {
            fr: 'Personas Utilisateur',
            ar: 'شخصيات المستخدم',
            en: 'User Personas'
          },
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Persona = personnage fictif représentant un type d\'utilisateur',
              'Éléments: Nom, Âge, Profession, Photo, Bio, Objectifs, Pain points',
              'Objectifs: ce que l\'utilisateur veut accomplir',
              'Pain points: frustrations, obstacles, défis',
              'Scénarios: situations d\'utilisation typiques',
              'Motivations: pourquoi l\'utilisateur utilise votre produit',
              '3-5 personas maximum par projet',
              'Utilisation: guide pour toutes les décisions de design'
            ],
            ar: [
              'الشخصية = شخصية خيالية تمثل نوعاً من المستخدمين',
              'العناصر: الاسم، العمر، المهنة، الصورة، السيرة الذاتية، الأهداف، نقاط الألم',
              'الأهداف: ما يريد المستخدم تحقيقه',
              'نقاط الألم: الإحباطات، العقبات، التحديات',
              'السيناريوهات: حالات الاستخدام النموذجية',
              'الدوافع: لماذا يستخدم المستخدم منتجك',
              'الحد الأقصى 3-5 شخصيات لكل مشروع',
              'الاستخدام: دليل لجميع قرارات التصميم'
            ],
            en: [
              'Persona = fictional character representing a user type',
              'Elements: Name, Age, Profession, Photo, Bio, Goals, Pain points',
              'Goals: what the user wants to accomplish',
              'Pain points: frustrations, obstacles, challenges',
              'Scenarios: typical use situations',
              'Motivations: why the user uses your product',
              '3-5 personas maximum per project',
              'Usage: guide for all design decisions'
            ]
          },
          method: {
            fr: 'Créez 3 personas pour un projet de votre choix. Utilisez des données réelles de vos interviews. Donnez-leur des noms, des photos, des histoires. Utilisez-les pour guider vos designs.',
            ar: 'أنشئ 3 شخصيات لمشروع من اختيارك. استخدم بيانات حقيقية من مقابلاتك. أعطهم أسماء وصوراً وقصصاً. استخدمها لتوجيه تصميماتك.',
            en: 'Create 3 personas for a project of your choice. Use real data from your interviews. Give them names, photos, stories. Use them to guide your designs.'
          },
          exercise: {
            fr: 'Pour un projet de votre choix, créez une affiche de persona A1. Incluez: tous les éléments, une citation, un jour typique, 3 scénarios d\'utilisation.',
            ar: 'لمشروع من اختيارك، أنشئ ملصق شخصية بحجم A1. يشمل: جميع العناصر، اقتباس، يوم نموذجي، 3 سيناريوهات استخدام.',
            en: 'For a project of your choice, create an A1 persona poster. Include: all elements, a quote, a typical day, 3 use scenarios.'
          },
          tip: {
            fr: '💡 Les personas ne sont pas des exercices académiques. Utilisez-les. Accrochez-les sur votre mur. Quand vous avez un doute, demandez: "Que ferait [nom du persona]?".',
            ar: '💡 الشخصيات ليست تمارين أكاديمية. استخدمها. علقها على حائطك. عندما تكون في شك، اسأل: "ماذا سيفعل [اسم الشخصية]؟".',
            en: '💡 Personas aren\'t academic exercises. Use them. Pin them to your wall. When in doubt, ask: "What would [persona name] do?".'
          }
        },
        // Lesson 3: Journey Maps
        {
          id: 'uiux-a-3',
          title: {
            fr: 'Cartes de Parcours Utilisateur',
            ar: 'خرائط رحلة المستخدم',
            en: 'User Journey Maps'
          },
          image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Journey Map = visualisation de l\'expérience utilisateur dans le temps',
              'Phases: Découverte, Recherche, Comparaison, Achat, Post-achat',
              'Actions: ce que l\'utilisateur fait à chaque phase',
              'Pensées: ce que l\'utilisateur pense',
              'Émotions: ce que l\'utilisateur ressent (courbe émotionnelle)',
              'Points de friction: où l\'utilisateur rencontre des problèmes',
              'Opportunités: où améliorer l\'expérience',
              'Objectif: 1 map = 1 persona = 1 scénario'
            ],
            ar: [
              'خريطة الرحلة = تصور لتجربة المستخدم مع مرور الوقت',
              'المراحل: الاكتشاف، البحث، المقارنة، الشراء، ما بعد الشراء',
              'الإجراءات: ما يفعله المستخدم في كل مرحلة',
              'الأفكار: ما يفكر فيه المستخدم',
              'المشاعر: ما يشعر به المستخدم (منحنى عاطفي)',
              'نقاط الاحتكاك: أين يواجه المستخدم مشاكل',
              'الفرص: أين تحسين التجربة',
              'الهدف: خريطة واحدة = شخصية واحدة = سيناريو واحد'
            ],
            en: [
              'Journey Map = visualization of user experience over time',
              'Phases: Discovery, Research, Comparison, Purchase, Post-purchase',
              'Actions: what the user does at each phase',
              'Thoughts: what the user thinks',
              'Emotions: what the user feels (emotional curve)',
              'Friction points: where the user encounters problems',
              'Opportunities: where to improve the experience',
              'Goal: 1 map = 1 persona = 1 scenario'
            ]
          },
          method: {
            fr: 'Créez une journey map pour un de vos personas. Cartographiez 5-8 phases, 5-10 actions par phase. Identifiez 3 points de friction majeurs et proposez 3 solutions.',
            ar: 'أنشئ خريطة رحلة لأحد شخصياتك. رسم خرائط لـ5-8 مراحل، 5-10 إجراءات لكل مرحلة. حدد 3 نقاط احتكاك رئيسية واقترح 3 حلول.',
            en: 'Create a journey map for one of your personas. Map 5-8 phases, 5-10 actions per phase. Identify 3 major friction points and propose 3 solutions.'
          },
          exercise: {
            fr: 'Créez une journey map complète pour le parcours d\'achat d\'un produit. Incluez: 6 phases, émotions par phase, 3 points de friction, 5 opportunités d\'amélioration.',
            ar: 'أنشئ خريطة رحلة كاملة لمسار شراء منتج. تشمل: 6 مراحل، مشاعر لكل مرحلة، 3 نقاط احتكاك، 5 فرص للتحسين.',
            en: 'Create a complete journey map for a product purchase journey. Include: 6 phases, emotions per phase, 3 friction points, 5 improvement opportunities.'
          },
          tip: {
            fr: '💡 Une journey map bien faite est plus puissante qu\'un rapport de 50 pages. Elle raconte une histoire et rend visible ce qui est invisible. Investissez du temps dans votre première map.',
            ar: '💡 خريطة رحلة مصممة جيداً هي أقوى من تقرير من 50 صفحة. إنها تحكي قصة وتجعل غير المرئي مرئياً. استثمر الوقت في خريطتك الأولى.',
            en: '💡 A well-made journey map is more powerful than a 50-page report. It tells a story and makes the invisible visible. Invest time in your first map.'
          }
        },
        // Lesson 4: Prototyping
        {
          id: 'uiux-a-4',
          title: {
            fr: 'Prototypage Avancé',
            ar: 'النمذجة الأولية المتقدمة',
            en: 'Advanced Prototyping'
          },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Prototype = version interactive de votre design',
              'Types: Low-fidelity (cliquable), High-fidelity (animé)',
              'Figma Prototyping: connectez les frames avec des lignes',
              'Interactions: Click, Hover, Drag, Scroll, Type',
              'Transitions: Slide, Fade, Smart Animate, Push',
              'Micro-interactions: animations subtiles (50-300ms)',
              'Testing: testez vos prototypes avec de vrais utilisateurs',
              'Exemple: prototype d\'app avec 20 écrans + animations'
            ],
            ar: [
              'النموذج الأولي = نسخة تفاعلية من تصميمك',
              'الأنواع: منخفض الدقة (قابل للنقر)، عالي الدقة (متحرك)',
              'النمذجة في Figma: ربط الإطارات بخطوط',
              'التفاعلات: نقر، تمرير، سحب، تمرير، كتابة',
              'الانتقالات: انزلاق، تلاشي، تحريك ذكي، دفع',
              'التفاعلات الدقيقة: رسوم متحركة دقيقة (50-300ms)',
              'الاختبار: اختبر نماذجك الأولية مع مستخدمين حقيقيين',
              'مثال: نموذج تطبيق بـ20 شاشة + رسوم متحركة'
            ],
            en: [
              'Prototype = interactive version of your design',
              'Types: Low-fidelity (clickable), High-fidelity (animated)',
              'Figma Prototyping: connect frames with lines',
              'Interactions: Click, Hover, Drag, Scroll, Type',
              'Transitions: Slide, Fade, Smart Animate, Push',
              'Micro-interactions: subtle animations (50-300ms)',
              'Testing: test your prototypes with real users',
              'Example: app prototype with 20 screens + animations'
            ]
          },
          method: {
            fr: 'Créez un prototype complet de 15 écrans dans Figma. Ajoutez des transitions, des micro-interactions, et des états (hover, loading, error). Testez-le sur votre téléphone.',
            ar: 'أنشئ نموذجاً أولياً كاملاً من 15 شاشة في Figma. أضف انتقالات وتفاعلات دقيقة وحالات (تمرير، تحميل، خطأ). اختبره على هاتفك.',
            en: 'Create a complete 15-screen prototype in Figma. Add transitions, micro-interactions, and states (hover, loading, error). Test it on your phone.'
          },
          exercise: {
            fr: 'Créez un prototype haute fidélité pour une application de e-commerce. Incluez: 20 écrans, 5 micro-interactions, 3 transitions différentes, 2 états de chargement.',
            ar: 'أنشئ نموذجاً أولياً عالي الدقة لتطبيق تجارة إلكترونية. يشمل: 20 شاشة، 5 تفاعلات دقيقة، 3 انتقالات مختلفة، حالتي تحميل.',
            en: 'Create a high-fidelity prototype for an e-commerce app. Include: 20 screens, 5 micro-interactions, 3 different transitions, 2 loading states.'
          },
          tip: {
            fr: '💡 Le prototypage n\'est pas pour faire joli - c\'est pour tester. Plus votre prototype est proche du produit final, plus vos tests utilisateur seront valables.',
            ar: '💡 النمذجة الأولية ليست للجمال - إنها للاختبار. كلما كان نموذجك الأولي أقرب للمنتج النهائي، كانت اختبارات المستخدم الخاصة بك أكثر صحة.',
            en: '💡 Prototyping isn\'t for pretty - it\'s for testing. The closer your prototype is to the final product, the more valid your user tests will be.'
          }
        },
        // Lesson 5: Micro Interactions
        {
          id: 'uiux-a-5',
          title: {
            fr: 'Micro-Interactions',
            ar: 'التفاعلات الدقيقة',
            en: 'Micro-Interactions'
          },
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Micro-interaction = petit moment interactif (50-300ms)',
              '4 parties: Trigger (ce qui déclenche), Règle (comment ça marche), Feedback (ce que voit l\'utilisateur), Loop (répétition)',
              'Exemples: Bouton qui s\'anime au clic, Carrousel qui glisse, Like qui explose',
              'Pourquoi: rend l\'expérience humaine, mémorable, agréable',
              'Sans micro-interactions: expérience robotique',
              'Outils: Figma (Smart Animate), Protopie, Principle',
              'Bonnes pratiques: rapides (200ms), subtiles, cohérentes',
              'Exemple: le "heart" de Twitter qui s\'anime'
            ],
            ar: [
              'التفاعل الدقيق = لحظة تفاعلية صغيرة (50-300ms)',
              '4 أجزاء: المشغل (ما يبدأ)، القاعدة (كيف يعمل)، التغذية الراجعة (ما يراه المستخدم)، التكرار',
              'أمثلة: زر يتحرك عند النقر، دائري ينزلق، إعجاب ينفجر',
              'لماذا: يجعل التجربة إنسانية، لا تُنسى، ممتعة',
              'بدون تفاعلات دقيقة: تجربة آلية',
              'الأدوات: Figma (التحريك الذكي)، Protopie، Principle',
              'الممارسات الجيدة: سريعة (200ms)، دقيقة، متسقة',
              'مثال: قلب تويتر الذي يتحرك'
            ],
            en: [
              'Micro-interaction = small interactive moment (50-300ms)',
              '4 parts: Trigger (what starts it), Rule (how it works), Feedback (what user sees), Loop (repetition)',
              'Examples: Button animating on click, Carousel sliding, Like exploding',
              'Why: makes the experience human, memorable, enjoyable',
              'Without micro-interactions: robotic experience',
              'Tools: Figma (Smart Animate), Protopie, Principle',
              'Best practices: fast (200ms), subtle, consistent',
              'Example: Twitter\'s heart animation'
            ]
          },
          method: {
            fr: 'Analysez 10 applications populaires. Identifiez 3 micro-interactions dans chacune. Notez ce qui fonctionne et ce qui pourrait être amélioré. Catégorisez les types.',
            ar: 'حلل 10 تطبيقات شهيرة. حدد 3 تفاعلات دقيقة في كل منها. سجل ما يعمل وما يمكن تحسينه. صنف الأنواع.',
            en: 'Analyze 10 popular apps. Identify 3 micro-interactions in each. Note what works and what could be improved. Categorize the types.'
          },
          exercise: {
            fr: 'Créez 5 micro-interactions dans Figma: 1) Bouton qui bounce au hover, 2) Loader qui tourne, 3) Like qui pulse, 4) Menu qui slide, 5) Input qui s\'anime au focus.',
            ar: 'أنشئ 5 تفاعلات دقيقة في Figma: 1) زر يرتد عند التمرير، 2) مؤشر تحميل يدور، 3) إعجاب ينبض، 4) قائمة تنزلق، 5) حقل إدخال يتحرك عند التركيز.',
            en: 'Create 5 micro-interactions in Figma: 1) Button bounces on hover, 2) Spinning loader, 3) Pulsing like, 4) Sliding menu, 5) Input animating on focus.'
          },
          tip: {
            fr: '💡 Les micro-interactions sont le secret des produits qu\'on aime. Pas besoin d\'animations complexes. 200ms de mouvement peut transformer l\'expérience entière.',
            ar: '💡 التفاعلات الدقيقة هي سر المنتجات التي نحبها. لا حاجة لرسوم متحركة معقدة. 200ms من الحركة يمكن أن تحول التجربة بأكملها.',
            en: '💡 Micro-interactions are the secret to lovable products. No complex animations needed. 200ms of motion can transform the entire experience.'
          }
        },
        // Lesson 6: Accessibility
        {
          id: 'uiux-a-6',
          title: {
            fr: 'Accessibilité - Design pour Tous',
            ar: 'إمكانية الوصول - تصميم للجميع',
            en: 'Accessibility - Design for All'
          },
          image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e96d2?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Accessibilité = concevoir pour tous, y compris les personnes handicapées',
              'Contenu: WCAG (Web Content Accessibility Guidelines)',
              'Niveaux: A (minimum), AA (recommandé), AAA (excellent)',
              'Contraste: ratio 4.5:1 pour le texte, 3:1 pour les grands textes',
              'Taille: texte minimum 16px, espacement suffisant',
              'Navigation: au clavier, pas seulement à la souris',
              'Screen readers: compatibilité avec les lecteurs d\'écran',
              'Exemple: Apple et Microsoft excellent en accessibilité'
            ],
            ar: [
              'إمكانية الوصول = تصميم للجميع، بما في ذلك الأشخاص ذوي الإعاقة',
              'المحتوى: WCAG (إرشادات إمكانية الوصول لمحتوى الويب)',
              'المستويات: A (الحد الأدنى)، AA (موصى به)، AAA (ممتاز)',
              'التباين: نسبة 4.5:1 للنص، 3:1 للنصوص الكبيرة',
              'الحجم: نص بحد أدنى 16px، تباعد كافٍ',
              'التنقل: عبر لوحة المفاتيح، وليس فقط بالماوس',
              'قارئات الشاشة: التوافق مع قارئات الشاشة',
              'مثال: Apple وMicrosoft تتفوقان في إمكانية الوصول'
            ],
            en: [
              'Accessibility = designing for all, including people with disabilities',
              'Content: WCAG (Web Content Accessibility Guidelines)',
              'Levels: A (minimum), AA (recommended), AAA (excellent)',
              'Contrast: 4.5:1 ratio for text, 3:1 for large text',
              'Size: minimum 16px text, sufficient spacing',
              'Navigation: by keyboard, not just mouse',
              'Screen readers: compatibility with screen readers',
              'Example: Apple and Microsoft excel in accessibility'
            ]
          },
          method: {
            fr: 'Testez votre design avec un lecteur d\'écran (NVDA sur PC, VoiceOver sur Mac). Essayez de naviguer uniquement au clavier. Notez les problèmes rencontrés.',
            ar: 'اختبر تصميمك مع قارئ شاشة (NVDA على PC، VoiceOver على Mac). حاول التنقل باستخدام لوحة المفاتيح فقط. سجل المشاكل التي واجهتها.',
            en: 'Test your design with a screen reader (NVDA on PC, VoiceOver on Mac). Try navigating with keyboard only. Note the problems encountered.'
          },
          exercise: {
            fr: 'Auditez un site web populaire pour l\'accessibilité. Utilisez un outil comme WAVE ou Lighthouse. Notez 10 problèmes et proposez 10 solutions.',
            ar: 'دقق في موقع ويب شهير من حيث إمكانية الوصول. استخدم أداة مثل WAVE أو Lighthouse. سجل 10 مشاكل واقترح 10 حلول.',
            en: 'Audit a popular website for accessibility. Use a tool like WAVE or Lighthouse. Note 10 problems and propose 10 solutions.'
          },
          tip: {
            fr: '💡 L\'accessibilité n\'est pas une option, c\'est une obligation légale et morale. 15% de la population a un handicap. Ignorer l\'accessibilité, c\'est ignorer 15% de vos utilisateurs.',
            ar: '💡 إمكانية الوصول ليست اختياراً، بل التزام قانوني وأخلاقي. 15% من السكان لديهم إعاقة. تجاهل إمكانية الوصول هو تجاهل 15% من مستخدميك.',
            en: '💡 Accessibility isn\'t optional, it\'s a legal and moral obligation. 15% of the population has a disability. Ignoring accessibility is ignoring 15% of your users.'
          }
        },
        // Lesson 7: Usability Testing
        {
          id: 'uiux-a-7',
          title: {
            fr: 'Tests d\'Utilisabilité',
            ar: 'اختبارات سهولة الاستخدام',
            en: 'Usability Testing'
          },
          image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e96d2?w=800&q=80',
          layout: 'left',
          steps: {
            fr: [
              'Usability Testing = observer des utilisateurs interagir avec votre design',
              'Types: Modéré (en personne), Non modéré (automatisé), À distance (en ligne)',
              'Protocole: 5-8 participants, 5-10 tâches, 60-90 minutes',
              'Tâches: spécifiques, réalisables, non guidées',
              'Métriques: taux de succès, temps, erreurs, satisfaction',
              'Outils: Lookback, UserTesting, Maze, Optimal Workshop',
              'Analyse: identifiez les patterns, priorisez les problèmes',
              'Itérez: testez, modifiez, retestez'
            ],
            ar: [
              'اختبار سهولة الاستخدام = مراقبة المستخدمين أثناء تفاعلهم مع تصميمك',
              'الأنواع: معتدل (شخصياً)، غير معتدل (آلي)، عن بُعد (أونلاين)',
              'البروتوكول: 5-8 مشاركين، 5-10 مهام، 60-90 دقيقة',
              'المهام: محددة، قابلة للتحقيق، غير موجهة',
              'المقاييس: معدل النجاح، الوقت، الأخطاء، الرضا',
              'الأدوات: Lookback، UserTesting، Maze، Optimal Workshop',
              'التحليل: تحديد الأنماط، تحديد أولويات المشاكل',
              'كرر: اختبر، عدّل، اختبر مرة أخرى'
            ],
            en: [
              'Usability Testing = observing users interact with your design',
              'Types: Moderated (in-person), Unmoderated (automated), Remote (online)',
              'Protocol: 5-8 participants, 5-10 tasks, 60-90 minutes',
              'Tasks: specific, achievable, unguided',
              'Metrics: success rate, time, errors, satisfaction',
              'Tools: Lookback, UserTesting, Maze, Optimal Workshop',
              'Analysis: identify patterns, prioritize problems',
              'Iterate: test, modify, test again'
            ]
          },
          method: {
            fr: 'Préparez un test utilisabilité pour votre prototype. Créez 5 tâches, trouvez 5 participants, faites le test, analysez les résultats. Rapport de 2 pages.',
            ar: 'جهز اختبار سهولة استخدام لنموذجك الأولي. أنشئ 5 مهام، ابحث عن 5 مشاركين، أجرِ الاختبار، حلل النتائج. تقرير من صفحتين.',
            en: 'Prepare a usability test for your prototype. Create 5 tasks, find 5 participants, run the test, analyze results. 2-page report.'
          },
          exercise: {
            fr: 'Conduisez un test utilisabilité complet. Incluez: 1) Plan de test, 2) Script, 3) 5 participants, 4) Résultats, 5) 5 recommandations d\'amélioration.',
            ar: 'أجرِ اختبار سهولة استخدام كامل. يشمل: 1) خطة اختبار، 2) نص، 3) 5 مشاركين، 4) نتائج، 5) 5 توصيات للتحسين.',
            en: 'Conduct a complete usability test. Include: 1) Test plan, 2) Script, 3) 5 participants, 4) Results, 5) 5 improvement recommendations.'
          },
          tip: {
            fr: '💡 5 utilisateurs suffisent pour trouver 80% des problèmes d\'utilisabilité. Testez tôt, testez souvent. Un test par semaine pendant le projet.',
            ar: '💡 5 مستخدمين كافٍ للعثور على 80% من مشاكل سهولة الاستخدام. اختبر مبكراً، اختبر كثيراً. اختبار واحد أسبوعياً أثناء المشروع.',
            en: '💡 5 users are enough to find 80% of usability problems. Test early, test often. One test per week during the project.'
          }
        },
        // Lesson 8: Developer Handoff
        {
          id: 'uiux-a-8',
          title: {
            fr: 'Handoff aux Développeurs',
            ar: 'التسليم للمطورين',
            en: 'Developer Handoff'
          },
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
          layout: 'right',
          steps: {
            fr: [
              'Handoff = livraison du design aux développeurs',
              'Figma: Inspect mode pour voir les détails (couleurs, tailles, espacements)',
              'Exporter: assets (icônes, images) en PNG, SVG, PDF',
              'Design Tokens: couleurs, typographie, espacement en variables',
              'Redlines: annotations avec mesures et spécifications',
              'Style Guide: document de référence pour tout le projet',
              'Réunions: workshops avec l\'équipe de développement',
              'Objectif: design implémenté à 100% comme prévu'
            ],
            ar: [
              'التسليم للمطورين = تسليم التصميم للمطورين',
              'Figma: وضع التدقيق لرؤية التفاصيل (الألوان، الأحجام، التباعد)',
              'التصدير: أصول (أيقونات، صور) بتنسيق PNG، SVG، PDF',
              'رموز التصميم: الألوان، الطباعة، التباعد كمتغيرات',
              'الخطوط الحمراء: تعليقات توضيحية مع قياسات ومواصفات',
              'دليل الأنماط: وثيقة مرجعية للمشروع بأكمله',
              'الاجتماعات: ورش عمل مع فريق التطوير',
              'الهدف: تنفيذ التصميم بنسبة 100% كما هو مخطط'
            ],
            en: [
              'Handoff = delivering design to developers',
              'Figma: Inspect mode to see details (colors, sizes, spacing)',
              'Export: assets (icons, images) as PNG, SVG, PDF',
              'Design Tokens: colors, typography, spacing as variables',
              'Redlines: annotations with measurements and specs',
              'Style Guide: reference document for the entire project',
              'Meetings: workshops with the development team',
              'Goal: design implemented 100% as intended'
            ]
          },
          method: {
            fr: 'Préparez un package de handoff complet pour votre projet. Incluez: 1) Figma file partagé, 2) Assets exportés, 3) Design tokens, 4) Style guide, 5) Documentation.',
            ar: 'جهز حزمة تسليم كاملة لمشروعك. تشمل: 1) ملف Figma مشترك، 2) أصول مصدرة، 3) رموز تصميم، 4) دليل أنماط، 5) توثيق.',
            en: 'Prepare a complete handoff package for your project. Include: 1) Shared Figma file, 2) Exported assets, 3) Design tokens, 4) Style guide, 5) Documentation.'
          },
          exercise: {
            fr: 'Créez un handoff complet pour un projet de votre choix. Rendez chaque détail inspectable. Ajoutez des commentaires pour les parties complexes. Exportez les assets nécessaires.',
            ar: 'أنشئ تسليماً كاملاً لمشروع من اختيارك. اجعل كل تفصيل قابلاً للتدقيق. أضف تعليقات للأجزاء المعقدة. صدّر الأصول اللازمة.',
            en: 'Create a complete handoff for a project of your choice. Make every detail inspectable. Add comments for complex parts. Export necessary assets.'
          },
          tip: {
            fr: '💡 Un bon handoff est la différence entre un design bien implémenté et un design massacré. Passez 20% de votre temps sur le handoff. Les développeurs vous adoreront.',
            ar: '💡 التسليم الجيد هو الفرق بين تصميم منفذ جيداً وتصميم مشوّه. اقضِ 20% من وقتك على التسليم. سيعشقك المطورون.',
            en: '💡 A good handoff is the difference between a well-implemented design and a butchered one. Spend 20% of your time on handoff. Developers will love you.'
          }
        }
      ]
    }
  ]
}// ===== SKILL 8: UI/UX DESIGN =====
{
  id: 'uiux',
  icon: '🎨',
  color: '#6366F1',
  accent: '#818CF8',
  bg: '#0C0A1A',
  earning: '20,000 – 100,000 DZD/month',
  firstClient: { fr: '4–8 semaines', ar: '4–8 أسابيع', en: '4–8 weeks' },
  startTool: 'Figma + Adobe XD + Pen & Paper',
  title: { fr: 'UI/UX Design', ar: 'تصميم واجهات المستخدم وتجربة المستخدم', en: 'UI/UX Design' },
  subtitle: { fr: 'User Interface & Experience', ar: 'تصميم واجهات وتجارب المستخدم', en: 'User Interface & Experience' },
  tagline: { fr: 'Créez des expériences numériques qui racontent des histoires et convertissent les utilisateurs', ar: 'أنشئ تجارب رقمية تحكي قصصاً وتحول المستخدمين', en: 'Create digital experiences that tell stories and convert users' },
  levels: [
    // LEVEL 1: BEGINNER - 8 Lessons
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Maîtriser les fondamentaux du UI/UX Design et créer vos premiers wireframes', ar: 'إتقان أساسيات تصميم واجهات وتجارب المستخدم وإنشاء أول الرسوم الهيكلية', en: 'Master UI/UX Design fundamentals and create your first wireframes' },
      lessons: [
        {
          id: 'uiux-b-1',
          title: { fr: 'UI vs UX - Comprendre la Différence', ar: 'UI vs UX - فهم الفرق', en: 'UI vs UX - Understanding the Difference' },
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
          layout: 'top',
          steps: {
            fr: ['UI = User Interface (Interface Utilisateur) = l\'apparence du produit','UX = User Experience (Expérience Utilisateur) = comment l\'utilisateur se sent','UI est ce que vous voyez, UX est ce que vous ressentez','Exemple: Un site beau mais confus = bon UI, mauvais UX','Exemple: Un site simple mais agréable = bon UX, UI correct','Les deux doivent travailler ensemble pour un grand produit','Le UI/UX Designer combine les deux disciplines','Objectif final: créer des produits que les gens aiment utiliser'],
            ar: ['UI = واجهة المستخدم = مظهر المنتج','UX = تجربة المستخدم = كيف يشعر المستخدم','UI هو ما تراه، UX هو ما تشعر به','مثال: موقع جميل لكن مربك = UI جيد، UX سيء','مثال: موقع بسيط لكن ممتع = UX جيد، UI مقبول','يجب أن يعمل الاثنان معاً لمنتج رائع','مصمم UI/UX يجمع بين التخصصين','الهدف النهائي: إنشاء منتجات يحب الناس استخدامها'],
            en: ['UI = User Interface = the appearance of the product','UX = User Experience = how the user feels','UI is what you see, UX is what you feel','Example: A beautiful but confusing site = good UI, bad UX','Example: A simple but enjoyable site = good UX, okay UI','Both must work together for a great product','The UI/UX Designer combines both disciplines','Final goal: create products people love to use']
          },
          method: { fr: 'Analysez 3 applications que vous utilisez quotidiennement. Notez 5 éléments UI et 5 éléments UX pour chacune.', ar: 'حلل 3 تطبيقات تستخدمها يومياً. سجل 5 عناصر UI و5 عناصر UX لكل منها.', en: 'Analyze 3 applications you use daily. Note 5 UI elements and 5 UX elements for each.' },
          exercise: { fr: 'Créez une comparaison visuelle: une app bien conçue et une mal conçue. Notez 10 différences.', ar: 'أنشئ مقارنة بصرية: تطبيق مصمم جيداً وآخر سيئ. سجل 10 اختلافات.', en: 'Create a visual comparison: a well-designed app and a poorly designed one. Note 10 differences.' },
          tip: { fr: '💡 Un bon UI/UX Designer pense d\'abord à l\'utilisateur. La beauté suit la fonctionnalité.', ar: '💡 مصمم UI/UX الجيد يفكر أولاً في المستخدم. الجمال يتبع الوظيفة.', en: '💡 A good UI/UX Designer thinks about the user first. Beauty follows functionality.' }
        },
        {
          id: 'uiux-b-2',
          title: { fr: 'Principes de Design', ar: 'مبادئ التصميم', en: 'Design Principles' },
          image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Contraste: les éléments différents se distinguent','Alignement: tout doit être aligné','Répétition: utiliser les mêmes styles pour les mêmes éléments','Proximité: grouper les éléments connexes','Hiérarchie: ordonner l\'importance par taille/couleur','Équilibre: répartir le poids visuel','Espace blanc: utiliser l\'espace vide pour respirer','Ces principes s\'appliquent à TOUT design'],
            ar: ['التباين: العناصر المختلفة تبرز','المحاذاة: كل شيء يجب أن يكون محاذياً','التكرار: استخدام نفس الأنماط لنفس العناصر','التقارب: تجميع العناصر المرتبطة','التسلسل الهرمي: ترتيب الأهمية بالحجم/اللون','التوازن: توزيع الوزن البصري','الفراغ الأبيض: استخدام المساحة الفارغة','هذه المبادئ تنطبق على أي تصميم'],
            en: ['Contrast: different elements stand out','Alignment: everything should be aligned','Repetition: use same styles for same elements','Proximity: group related elements','Hierarchy: order importance by size/color','Balance: distribute visual weight','White space: use empty space','These principles apply to ALL design']
          },
          method: { fr: 'Prenez un design que vous aimez. Identifiez chaque principe utilisé.', ar: 'خذ تصميماً تحبه. حدد كل مبدأ مستخدم.', en: 'Take a design you like. Identify each principle used.' },
          exercise: { fr: 'Refaites un design en violant chaque principe, puis en les suivant parfaitement.', ar: 'أعد تصميم بكسر كل مبدأ، ثم باتباع المبادئ تماماً.', en: 'Redesign by violating each principle, then by following them perfectly.' },
          tip: { fr: '💡 Les grands designers maîtrisent les règles pour mieux les briser.', ar: '💡 المصممون الكبار يتقنون القواعد لكسرها بشكل أفضل.', en: '💡 Great designers master the rules to break them better.' }
        },
        {
          id: 'uiux-b-3',
          title: { fr: 'Théorie des Couleurs en UI Design', ar: 'نظرية الألوان في تصميم واجهات المستخدم', en: 'Color Theory in UI Design' },
          image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Roue chromatique: les relations entre les couleurs','Couleurs primaires: Rouge, Bleu, Jaune','Couleurs secondaires: Vert, Orange, Violet','Palettes: Monochrome, Complémentaire, Analogue','Psychologie des couleurs: chaque couleur évoque des émotions','Contraste: essentiel pour l\'accessibilité','Exemple: Bleu = confiance, Rouge = urgence, Vert = succès'],
            ar: ['عجلة الألوان: العلاقات بين الألوان','الألوان الأساسية: الأحمر، الأزرق، الأصفر','الألوان الثانوية: الأخضر، البرتقالي، البنفسجي','اللوحات: أحادية اللون، مكملة، متماثلة','سيكولوجية الألوان: كل لون يثير مشاعر','التباين: ضروري لإمكانية الوصول','مثال: الأزرق = ثقة، الأحمر = طوارئ، الأخضر = نجاح'],
            en: ['Color wheel: relationships between colors','Primary colors: Red, Blue, Yellow','Secondary colors: Green, Orange, Purple','Palettes: Monochrome, Complementary, Analogous','Color psychology: each color evokes emotions','Contrast: essential for accessibility','Example: Blue = trust, Red = urgency, Green = success']
          },
          method: { fr: 'Créez 5 palettes pour 5 types d\'entreprises (fintech, santé, éducation, voyage, luxe).', ar: 'أنشئ 5 لوحات لـ5 أنواع من الشركات (تقنية مالية، صحة، تعليم، سفر، فاخرة).', en: 'Create 5 palettes for 5 business types (fintech, health, education, travel, luxury).' },
          exercise: { fr: 'Analysez les couleurs de 10 sites web populaires. Notez leur palette primaire, secondaire, et accent.', ar: 'حلل ألوان 10 مواقع ويب شهيرة. سجل لوحتهم الأساسية والثانوية والبارزة.', en: 'Analyze the colors of 10 popular websites. Note their primary, secondary, and accent palettes.' },
          tip: { fr: '💡 Utilisez Coolors, Adobe Color ou Figma pour créer des palettes. Commencez avec 3 couleurs.', ar: '💡 استخدم Coolors أو Adobe Color أو Figma لإنشاء لوحات. ابدأ بـ3 ألوان.', en: '💡 Use Coolors, Adobe Color, or Figma to create palettes. Start with 3 colors.' }
        },
        {
          id: 'uiux-b-4',
          title: { fr: 'Typographie en UI Design', ar: 'الطباعة في تصميم واجهات المستخدم', en: 'Typography in UI Design' },
          image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Typographie = l\'art d\'organiser le texte','Polices: Serif (élégant), Sans-serif (moderne)','Hiérarchie: Titre (H1), Sous-titre (H2), Corps','Taille: 16-18px pour le texte principal','Espacement: line-height (1.5x)','Limitez à 2 familles de polices maximum','Google Fonts: 1400+ polices gratuites'],
            ar: ['الطباعة = فن تنظيم النصوص','الخطوط: Serif (أنيق)، Sans-serif (عصري)','التسلسل: عنوان رئيسي، عنوان فرعي، نص','الحجم: 16-18px للنص الرئيسي','التباعد: ارتفاع السطر (1.5x)','حدد عائلتي خط كحد أقصى','Google Fonts: 1400+ خط مجاني'],
            en: ['Typography = the art of organizing text','Fonts: Serif (elegant), Sans-serif (modern)','Hierarchy: Title (H1), Subtitle (H2), Body','Size: 16-18px for body text','Spacing: line-height (1.5x)','Limit to 2 font families maximum','Google Fonts: 1400+ free fonts']
          },
          method: { fr: 'Créez une hiérarchie typographique pour un article de blog.', ar: 'أنشئ تسلسلاً هرمياً للطباعة لمقال مدونة.', en: 'Create a typographic hierarchy for a blog article.' },
          exercise: { fr: 'Refaites la typographie d\'un site web existant avec 3 nouvelles combinaisons.', ar: 'أعد تصميم طباعة موقع ويب موجود بـ3 تركيبات جديدة.', en: 'Redesign the typography of an existing website with 3 new combinations.' },
          tip: { fr: '💡 La typographie constitue 90% de la perception de votre design.', ar: '💡 الطباعة تشكل 90% من إدراك تصميمك.', en: '💡 Typography makes up 90% of your design perception.' }
        },
        {
          id: 'uiux-b-5',
          title: { fr: 'Layout & Grilles', ar: 'التخطيط والشبكات', en: 'Layout & Grid' },
          image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Grille = structure invisible qui organise les éléments','Systèmes: 12 colonnes (standard), 16, 24','Gouttières: espace entre les colonnes (16-24px)','Marges: espace sur les bords (16-40px)','Breakpoints: Mobile (1 col), Tablette (4-8), Desktop (12)','Figma: Auto Layout + Grids'],
            ar: ['الشبكة = هيكل غير مرئي ينظم العناصر','الأنظمة: 12 عموداً (قياسي)، 16، 24','المزاريب: مسافة بين الأعمدة (16-24px)','الهوامش: مسافة على الحواف (16-40px)','نقاط التوقف: موبايل (عمود 1)، جهاز لوحي (4-8)، سطح المكتب (12)','Figma: التخطيط التلقائي + الشبكات'],
            en: ['Grid = invisible structure that organizes elements','Systems: 12 columns (standard), 16, 24','Gutters: space between columns (16-24px)','Margins: space on edges (16-40px)','Breakpoints: Mobile (1 col), Tablet (4-8), Desktop (12)','Figma: Auto Layout + Grids']
          },
          method: { fr: 'Superposez une grille de 12 colonnes sur 5 sites web populaires.', ar: 'ضع شبكة من 12 عموداً فوق 5 مواقع ويب شهيرة.', en: 'Overlay a 12-column grid on 5 popular websites.' },
          exercise: { fr: 'Créez une page web complète avec une grille de 12 colonnes.', ar: 'أنشئ صفحة ويب كاملة بشبكة من 12 عموداً.', en: 'Create a complete web page with a 12-column grid.' },
          tip: { fr: '💡 Un design aligné = un design professionnel.', ar: '💡 تصميم محاذي = تصميم احترافي.', en: '💡 An aligned design = a professional design.' }
        },
        {
          id: 'uiux-b-6',
          title: { fr: 'Wireframing - Les Bases', ar: 'الرسوم الهيكلية - الأساسيات', en: 'Wireframing - The Basics' },
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Wireframe = croquis basse fidélité du design','Niveaux: Low-fidelity (papier), Medium (digital), High (détaillé)','Éléments: boîtes pour images, lignes pour texte','Objectif: tester la structure avant les détails','Outils: Papier/crayon, Figma, Balsamiq','Concentrez-vous sur: mise en page, hiérarchie, fonctionnalité'],
            ar: ['الرسم الهيكلي = مخطط منخفض الدقة للتصميم','المستويات: منخفض (ورق)، متوسط (رقمي)، عالي (مفصل)','العناصر: مربعات للصور، خطوط للنص','الهدف: اختبار الهيكل قبل التفاصيل','الأدوات: ورق/قلم، Figma، Balsamiq','ركز على: التخطيط، التسلسل الهرمي، الوظيفة'],
            en: ['Wireframe = low-fidelity sketch of the design','Levels: Low (paper), Medium (digital), High (detailed)','Elements: boxes for images, lines for text','Goal: test structure before details','Tools: Paper/pen, Figma, Balsamiq','Focus on: layout, hierarchy, functionality']
          },
          method: { fr: 'Dessinez 3 wireframes différents pour une application de votre choix.', ar: 'ارسم 3 رسوم هيكلية مختلفة لتطبيق من اختيارك.', en: 'Draw 3 different wireframes for an app of your choice.' },
          exercise: { fr: 'Créez un wireframe complet pour une application mobile de réservation de restaurant.', ar: 'أنشئ رسماً هيكلياً كاملاً لتطبيق موبايل لحجز مطعم.', en: 'Create a complete wireframe for a restaurant booking mobile app.' },
          tip: { fr: '💡 80% de votre temps en wireframes, 20% en design final.', ar: '💡 80% من وقتك في الرسوم الهيكلية، 20% في التصميم النهائي.', en: '💡 80% of your time on wireframes, 20% on final design.' }
        },
        {
          id: 'uiux-b-7',
          title: { fr: 'User Flow - Le Parcours Utilisateur', ar: 'تدفق المستخدم - رحلة المستخدم', en: 'User Flow - The User Journey' },
          image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['User Flow = le chemin que l\'utilisateur suit','Étapes: Point de départ → Actions → Décisions → Point d\'arrivée','Visualisation: diagrammes avec rectangles, losanges, flèches','Exemple: Acheter un produit: Accueil → Recherche → Produit → Panier → Paiement','Identifier les points de friction','Optimiser le flow: réduire les étapes'],
            ar: ['تدفق المستخدم = المسار الذي يتبعه المستخدم','الخطوات: نقطة البداية → إجراءات → قرارات → نقطة النهاية','التصور: رسوم بيانية بمستطيلات، معينات، أسهم','مثال: شراء منتج: رئيسية → بحث → منتج → سلة → دفع','تحديد نقاط الاحتكاك','تحسين التدفق: تقليل الخطوات'],
            en: ['User Flow = the path the user follows','Steps: Starting point → Actions → Decisions → End point','Visualization: diagrams with rectangles, diamonds, arrows','Example: Buy a product: Home → Search → Product → Cart → Payment','Identify friction points','Optimize flow: reduce steps']
          },
          method: { fr: 'Créez un user flow complet pour 3 scénarios.', ar: 'أنشئ تدفق مستخدم كامل لـ3 سيناريوهات.', en: 'Create a complete user flow for 3 scenarios.' },
          exercise: { fr: 'Analysez le user flow d\'une application populaire (Airbnb). Suggérez 3 améliorations.', ar: 'حلل تدفق مستخدم لتطبيق شهير (Airbnb). اقترح 3 تحسينات.', en: 'Analyze the user flow of a popular app (Airbnb). Suggest 3 improvements.' },
          tip: { fr: '💡 Un bon user flow est invisible. L\'utilisateur pense à sa tâche, pas à la navigation.', ar: '💡 تدفق المستخدم الجيد غير مرئي. يفكر المستخدم في مهمته، ليس في التنقل.', en: '💡 A good user flow is invisible. The user thinks about their task, not navigation.' }
        },
        {
          id: 'uiux-b-8',
          title: { fr: 'Design Thinking - Approche Centrée Utilisateur', ar: 'التفكير التصميمي - نهج يركز على المستخدم', en: 'Design Thinking - User-Centered Approach' },
          image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Design Thinking = méthode centrée sur l\'humain','5 phases: Empathie, Définir, Idéation, Prototype, Tester','Empathie: comprendre les besoins réels','Définir: formuler clairement le problème','Idéation: générer des solutions','Prototype: créer des solutions tangibles','Tester: valider avec des utilisateurs réels','Itératif: revenez à n\'importe quelle phase'],
            ar: ['التفكير التصميمي = طريقة تركز على الإنسان','5 مراحل: التعاطف، التعريف، التوليد، النموذج، الاختبار','التعاطف: فهم الاحتياجات الحقيقية','التعريف: صياغة المشكلة بوضوح','التوليد: إنتاج حلول','النموذج: إنشاء حلول ملموسة','الاختبار: التحقق مع مستخدمين حقيقيين','تكرار: عد إلى أي مرحلة'],
            en: ['Design Thinking = human-centered method','5 phases: Empathize, Define, Ideate, Prototype, Test','Empathize: understand real needs','Define: clearly formulate the problem','Ideate: generate solutions','Prototype: create tangible solutions','Test: validate with real users','Iterative: go back to any phase']
          },
          method: { fr: 'Appliquez le Design Thinking à un problème de votre vie quotidienne.', ar: 'طبق التفكير التصميمي على مشكلة في حياتك اليومية.', en: 'Apply Design Thinking to a problem in your daily life.' },
          exercise: { fr: 'Choisissez un problème réel (ex: transports à Alger). Appliquez les 5 phases. Créez une présentation.', ar: 'اختر مشكلة حقيقية (مثال: النقل في الجزائر). طبق المراحل الخمس. أنشئ عرضاً.', en: 'Choose a real problem (ex: transport in Algiers). Apply the 5 phases. Create a presentation.' },
          tip: { fr: '💡 Le Design Thinking est un outil. Utilisez-le pour comprendre les utilisateurs et résoudre des problèmes complexes.', ar: '💡 التفكير التصميمي أداة. استخدمها لفهم المستخدمين وحل مشاكل معقدة.', en: '💡 Design Thinking is a tool. Use it to understand users and solve complex problems.' }
        }
      ]
    },
    // LEVEL 2: INTERMEDIATE - 8 Lessons
    {
      name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
      badge: '⚡',
      duration: { fr: 'Semaines 5–12', ar: 'الأسابيع 5–12', en: 'Weeks 5–12' },
      goal: { fr: 'Maîtriser Figma, créer des composants avancés et designer pour le web et le mobile', ar: 'إتقان Figma، إنشاء مكونات متقدمة والتصميم للويب والموبايل', en: 'Master Figma, create advanced components and design for web and mobile' },
      lessons: [
        {
          id: 'uiux-i-1',
          title: { fr: 'Figma - Maîtrise Complète', ar: 'Figma - إتقان كامل', en: 'Figma - Complete Mastery' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'top',
          steps: {
            fr: ['Figma = outil de design collaboratif (gratuit)','Interface: Canvas central, panneaux latéraux','Outils: Rectangle, Texte, Ellipse, Ligne, Stylo','Frames: conteneurs pour vos designs','Layers: organisez vos éléments','Plugins: extensible','Prototypage: créez des prototypes interactifs','Partage: collaborez en temps réel'],
            ar: ['Figma = أداة تصميم تعاونية (مجانية)','الواجهة: لوحة مركزية، لوحات جانبية','الأدوات: مستطيل، نص، قطع ناقص، خط، قلم','الإطارات: حاويات لتصاميمك','الطبقات: تنظيم عناصرك','الإضافات: قابلة للتوسيع','النماذج الأولية: نماذج تفاعلية','المشاركة: تعاون في الوقت الفعلي'],
            en: ['Figma = collaborative design tool (free)','Interface: Center canvas, side panels','Tools: Rectangle, Text, Ellipse, Line, Pen','Frames: containers for your designs','Layers: organize your elements','Plugins: extensible','Prototyping: interactive prototypes','Sharing: real-time collaboration']
          },
          method: { fr: 'Créez un projet Figma pour un portfolio avec 5 frames.', ar: 'أنشئ مشروع Figma لبورتفوليو بـ5 إطارات.', en: 'Create a Figma project for a portfolio with 5 frames.' },
          exercise: { fr: 'Refaites un site web populaire dans Figma (page d\'accueil et page intérieure).', ar: 'أعد إنشاء موقع ويب شهير في Figma (صفحة رئيسية وداخلية).', en: 'Redesign a popular website in Figma (homepage and inner page).' },
          tip: { fr: '💡 Raccourcis: R (rectangle), T (texte), F (frame), Shift+2 (zoom).', ar: '💡 اختصارات: R (مستطيل)، T (نص)، F (إطار)، Shift+2 (تكبير).', en: '💡 Shortcuts: R (rectangle), T (text), F (frame), Shift+2 (zoom).' }
        },
        {
          id: 'uiux-i-2',
          title: { fr: 'Auto Layout dans Figma', ar: 'التخطيط التلقائي في Figma', en: 'Auto Layout in Figma' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Auto Layout = système de grille flexible','Raccourci: Shift + A','Direction: verticale ou horizontale','Padding: espace entre les bords et le contenu','Gap: espace entre les éléments','Fill: l\'élément s\'étire','Hug: l\'élément s\'ajuste au contenu'],
            ar: ['التخطيط التلقائي = نظام شبكي مرن','اختصار: Shift + A','الاتجاه: عمودي أو أفقي','الحشو: مسافة بين الحواف والمحتوى','الفجوة: مسافة بين العناصر','Fill: العنصر يتمدد','Hug: العنصر يتكيف مع المحتوى'],
            en: ['Auto Layout = flexible grid system','Shortcut: Shift + A','Direction: vertical or horizontal','Padding: space between edges and content','Gap: space between elements','Fill: element stretches','Hug: element adjusts to content']
          },
          method: { fr: 'Créez 5 composants avec Auto Layout: bouton, carte, navigation, liste, formulaire.', ar: 'أنشئ 5 مكونات بـ Auto Layout: زر، بطاقة، تنقل، قائمة، نموذج.', en: 'Create 5 components with Auto Layout: button, card, navigation, list, form.' },
          exercise: { fr: 'Refaites Netflix en utilisant uniquement Auto Layout.', ar: 'أعد إنشاء Netflix باستخدام التخطيط التلقائي فقط.', en: 'Redesign Netflix using only Auto Layout.' },
          tip: { fr: '💡 Auto Layout = 5x plus rapide, 10x plus facile à mettre à jour.', ar: '💡 التخطيط التلقائي = أسرع بـ5 مرات، وأسهل بـ10 مرات للتحديث.', en: '💡 Auto Layout = 5x faster, 10x easier to update.' }
        },
        {
          id: 'uiux-i-3',
          title: { fr: 'Composants dans Figma', ar: 'المكونات في Figma', en: 'Components in Figma' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Composant = élément réutilisable','Créer: sélectionnez → "Create Component"','Instance = copie du composant','Modifier le parent → toutes les instances se mettent à jour','Nested Components = composants dans composants','Overrides: modifier une instance sans affecter les autres'],
            ar: ['المكون = عنصر قابل لإعادة الاستخدام','الإنشاء: حدد → "إنشاء مكون"','المثيل = نسخة من المكون','تعديل الأصل → تحديث جميع المثيلات','مكونات متداخلة = مكونات داخل مكونات','التجاوزات: تعديل مثيل دون التأثير على الآخرين'],
            en: ['Component = reusable element','Create: select → "Create Component"','Instance = copy of component','Edit parent → all instances update','Nested Components = components inside components','Overrides: modify instance without affecting others']
          },
          method: { fr: 'Créez un système de boutons: 5 variantes (primary, secondary, outline, disabled, danger).', ar: 'أنشئ نظام أزرار: 5 متغيرات (أساسي، ثانوي، مخطط، معطل، خطر).', en: 'Create a button system: 5 variants (primary, secondary, outline, disabled, danger).' },
          exercise: { fr: 'Construisez un système de design mobile: 10 composants réutilisables.', ar: 'ابنِ نظام تصميم موبايل: 10 مكونات قابلة لإعادة الاستخدام.', en: 'Build a mobile design system: 10 reusable components.' },
          tip: { fr: '💡 Les composants permettent à 10 designers de travailler sans conflits.', ar: '💡 المكونات تسمح لـ10 مصممين بالعمل دون تعارضات.', en: '💡 Components allow 10 designers to work without conflicts.' }
        },
        {
          id: 'uiux-i-4',
          title: { fr: 'Variants dans Figma', ar: 'المتغيرات في Figma', en: 'Variants in Figma' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Variants = différentes versions du même composant','Propriétés: State (default, hover, active)','Propriétés: Size (small, medium, large)','Propriétés: Color (primary, secondary)','Combinez les propriétés pour créer des variations','Raccourci: sélectionnez plusieurs composants → "Combine as Variants"'],
            ar: ['المتغيرات = إصدارات مختلفة لنفس المكون','الخصائص: الحالة (افتراضي، تمرير، نشط)','الخصائص: الحجم (صغير، متوسط، كبير)','الخصائص: اللون (أساسي، ثانوي)','دمج الخصائص لإنشاء تغييرات','اختصار: حدد مكونات متعددة → "دمج كمتغيرات"'],
            en: ['Variants = different versions of same component','Properties: State (default, hover, active)','Properties: Size (small, medium, large)','Properties: Color (primary, secondary)','Combine properties to create variations','Shortcut: select multiple → "Combine as Variants"']
          },
          method: { fr: 'Créez un système de bouton: 3 tailles × 4 états × 5 couleurs = 60 variations.', ar: 'أنشئ نظام أزرار: 3 أحجام × 4 حالات × 5 ألوان = 60 تغييراً.', en: 'Create a button system: 3 sizes × 4 states × 5 colors = 60 variations.' },
          exercise: { fr: 'Créez 3 familles de composants avec variants.', ar: 'أنشئ 3 عائلات من المكونات مع متغيرات.', en: 'Create 3 component families with variants.' },
          tip: { fr: '💡 Un composant avec variants remplace 50+ composants individuels.', ar: '💡 مكون واحد مع متغيرات يحل محل 50+ مكوناً فردياً.', en: '💡 One component with variants replaces 50+ individual components.' }
        },
        {
          id: 'uiux-i-5',
          title: { fr: 'Design Responsive', ar: 'التصميم المتجاوب', en: 'Responsive Design' },
          image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Responsive = design qui s\'adapte à toutes les tailles d\'écran','Breakpoints: Mobile (360-420px), Tablette (768-1024px), Desktop (1200px+)','Mobile-first: design pour mobile puis desktop','Navigation: hamburger sur mobile, barre complète sur desktop','Figma: utilisez constraints et auto layout'],
            ar: ['التصميم المتجاوب = تصميم يتكيف مع جميع أحجام الشاشات','نقاط التوقف: موبايل (360-420px)، جهاز لوحي (768-1024px)، سطح المكتب (1200px+)','موبايل أولاً: تصميم للموبايل ثم سطح المكتب','التنقل: هامبرغر على الموبايل، شريط كامل على سطح المكتب','Figma: استخدم القيود والتخطيط التلقائي'],
            en: ['Responsive = design that adapts to all screen sizes','Breakpoints: Mobile (360-420px), Tablet (768-1024px), Desktop (1200px+)','Mobile-first: design for mobile then desktop','Navigation: hamburger on mobile, full bar on desktop','Figma: use constraints and auto layout']
          },
          method: { fr: 'Faites 3 versions d\'un design: mobile, tablette, desktop.', ar: 'اعمل 3 نسخ من تصميم: موبايل، جهاز لوحي، سطح المكتب.', en: 'Make 3 versions of a design: mobile, tablet, desktop.' },
          exercise: { fr: 'Concevez une landing page responsive (3 frames).', ar: 'صمم صفحة هبوط متجاوبة (3 إطارات).', en: 'Design a responsive landing page (3 frames).' },
          tip: { fr: '💡 60% du trafic web vient du mobile. Si votre design ne fonctionne pas sur mobile, 60% des utilisateurs partent.', ar: '💡 60% من حركة مرور الويب تأتي من الموبايل. إذا لم يعمل تصميمك على الموبايل، 60% من المستخدمين يرحلون.', en: '💡 60% of web traffic comes from mobile. If your design doesn\'t work on mobile, 60% of users leave.' }
        },
        {
          id: 'uiux-i-6',
          title: { fr: 'Systèmes de Design', ar: 'أنظمة التصميم', en: 'Design Systems' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Design System = collection de composants, styles, et règles','Styles: Couleurs, Typographie, Espacement','Composants: Boutons, Inputs, Cards','Documentation: Guide d\'utilisation','Avantages: Cohérence, Rapidité, Scalabilité','Exemple: Material Design (Google)'],
            ar: ['نظام التصميم = مجموعة من المكونات والأنماط والقواعد','الأنماط: الألوان، الطباعة، التباعد','المكونات: أزرار، حقول إدخال، بطاقات','التوثيق: دليل الاستخدام','المزايا: الاتساق، السرعة، قابلية التوسع','مثال: Material Design (Google)'],
            en: ['Design System = collection of components, styles, rules','Styles: Colors, Typography, Spacing','Components: Buttons, Inputs, Cards','Documentation: Usage Guide','Benefits: Consistency, Speed, Scalability','Example: Material Design (Google)']
          },
          method: { fr: 'Créez votre premier design system: 5 couleurs, 3 typographies, système d\'espacement, 5 composants.', ar: 'أنشئ نظام التصميم الأول: 5 ألوان، 3 خطوط، نظام تباعد، 5 مكونات.', en: 'Create your first design system: 5 colors, 3 fonts, spacing system, 5 components.' },
          exercise: { fr: 'Construisez un design system complet pour une application SaaS (20+ composants).', ar: 'ابنِ نظام تصميم كامل لتطبيق SaaS (20+ مكوناً).', en: 'Build a complete design system for a SaaS app (20+ components).' },
          tip: { fr: '💡 Un bon design system est l\'ADN visuel de votre entreprise.', ar: '💡 نظام التصميم الجيد هو الحمض النووي البصري لشركتك.', en: '💡 A good design system is the visual DNA of your company.' }
        },
        {
          id: 'uiux-i-7',
          title: { fr: 'Design Mobile', ar: 'تصميم الموبايل', en: 'Mobile Design' },
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Mobile = l\'écran principal (70% du trafic)','Tailles: 375x812 (iPhone X), 360x640 (Android)','Design: Pouces, gestes, contexte','Navigation: Tab Bar (bas), Navigation (haut)','Contenu: simplifiez, une action par écran','Ergonomie: accessible avec un pouce'],
            ar: ['الموبايل = الشاشة الرئيسية (70% من الحركة)','الأحجام: 375x812 (iPhone X)، 360x640 (Android)','التصميم: الإبهام، الإيماءات، السياق','التنقل: شريط علامات تبويب (أسفل)، تنقل (أعلى)','المحتوى: تبسيط، إجراء واحد لكل شاشة','بيئة العمل: متاحة بإبهام واحد'],
            en: ['Mobile = primary screen (70% of traffic)','Sizes: 375x812 (iPhone X), 360x640 (Android)','Design: Thumbs, gestures, context','Navigation: Tab Bar (bottom), Navigation (top)','Content: simplify, one action per screen','Ergonomics: reachable with one thumb']
          },
          method: { fr: 'Redessinez un site web pour mobile (60% features, 30% simplification, 10% suppression).', ar: 'أعد تصميم موقع ويب للموبايل (60% ميزات، 30% تبسيط، 10% إزالة).', en: 'Redesign a website for mobile (60% features, 30% simplification, 10% removal).' },
          exercise: { fr: 'Concevez 5 écrans d\'application mobile pour un service de livraison.', ar: 'صمم 5 شاشات لتطبيق موبايل لخدمة توصيل.', en: 'Design 5 mobile app screens for a delivery service.' },
          tip: { fr: '💡 Le mobile est impitoyable: 3 secondes pour convaincre.', ar: '💡 الموبايل قاسٍ: 3 ثوانٍ للإقناع.', en: '💡 Mobile is unforgiving: 3 seconds to convince.' }
        },
        {
          id: 'uiux-i-8',
          title: { fr: 'Web Design', ar: 'تصميم الويب', en: 'Web Design' },
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b853aba4?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Web = plus grand écran, plus de possibilités','Taille: 1200-1440px standard','Layout: Multi-colonnes, animations','Navigation: Barre supérieure, sidebar','Contenu: plus de texte, vidéos, interactions','Interactions: Hover, transitions'],
            ar: ['الويب = شاشة أكبر، إمكانيات أكثر','الحجم: 1200-1440px قياسي','التخطيط: متعدد الأعمدة، رسوم متحركة','التنقل: شريط علوي، شريط جانبي','المحتوى: نص أكثر، فيديوهات، تفاعلات','التفاعلات: تمرير، انتقالات'],
            en: ['Web = bigger screen, more possibilities','Size: 1200-1440px standard','Layout: Multi-column, animations','Navigation: Top bar, sidebar','Content: more text, videos, interactions','Interactions: Hover, transitions']
          },
          method: { fr: 'Prenez le design mobile → version web complète avec hover, vidéos, plus de contenu.', ar: 'خذ التصميم المحمول → نسخة ويب كاملة مع تمرير، فيديوهات، محتوى أكثر.', en: 'Take mobile design → complete web version with hover, videos, more content.' },
          exercise: { fr: 'Concevez une landing page web: Hero, Features (3), Testimonials (3), Pricing (3), CTA.', ar: 'صمم صفحة هبوط ويب: رئيسي، ميزات (3)، شهادات (3)، أسعار (3)، CTA.', en: 'Design a web landing page: Hero, Features (3), Testimonials (3), Pricing (3), CTA.' },
          tip: { fr: '💡 Web et mobile sont complémentaires. Créez des expériences cohérentes.', ar: '💡 الويب والموبايل مكملان. اصنع تجارب متسقة.', en: '💡 Web and mobile are complementary. Create consistent experiences.' }
        }
      ]
    },
    // LEVEL 3: ADVANCED - 8 Lessons
    {
      name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
      badge: '🔥',
      duration: { fr: 'Semaines 13–24', ar: 'الأسابيع 13–24', en: 'Weeks 13–24' },
      goal: { fr: 'Maîtriser la recherche UX, le prototypage avancé, et livrer des projets professionnels', ar: 'إتقان بحث تجربة المستخدم، النماذج الأولية المتقدمة، وتسليم مشاريع احترافية', en: 'Master UX research, advanced prototyping, and deliver professional projects' },
      lessons: [
        {
          id: 'uiux-a-1',
          title: { fr: 'Recherche UX', ar: 'بحث تجربة المستخدم', en: 'UX Research' },
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
          layout: 'top',
          steps: {
            fr: ['UX Research = comprendre les besoins des utilisateurs','Méthodes qualitatives: interviews, observations','Méthodes quantitatives: sondages, analytics','Interview: 5-8 utilisateurs, questions ouvertes','Sondages: Google Forms, Typeform','Analytics: Google Analytics, Hotjar','Objectif: décisions basées sur des données réelles'],
            ar: ['بحث UX = فهم احتياجات المستخدمين','الطرق النوعية: المقابلات، الملاحظات','الطرق الكمية: الاستبيانات، التحليلات','المقابلة: 5-8 مستخدمين، أسئلة مفتوحة','الاستبيانات: Google Forms، Typeform','التحليلات: Google Analytics، Hotjar','الهدف: قرارات مبنية على بيانات حقيقية'],
            en: ['UX Research = understanding user needs','Qualitative: interviews, observations','Quantitative: surveys, analytics','Interview: 5-8 users, open questions','Surveys: Google Forms, Typeform','Analytics: Google Analytics, Hotjar','Goal: decisions based on real data']
          },
          method: { fr: 'Menez 5 interviews utilisateurs. Identifiez 5 patterns communs.', ar: 'أجرِ 5 مقابلات مع مستخدمين. حدد 5 أنماط مشتركة.', en: 'Conduct 5 user interviews. Identify 5 common patterns.' },
          exercise: { fr: 'Créez un plan de recherche UX complet pour un projet.', ar: 'أنشئ خطة بحث UX كاملة لمشروع.', en: 'Create a complete UX research plan for a project.' },
          tip: { fr: '💡 Les designers qui font de la recherche créent des produits 3x plus efficaces.', ar: '💡 المصممون الذين يقومون بالبحث يصنعون منتجات أكثر فعالية بـ3 مرات.', en: '💡 Designers who do research create products 3x more effective.' }
        },
        {
          id: 'uiux-a-2',
          title: { fr: 'Personas Utilisateur', ar: 'شخصيات المستخدم', en: 'User Personas' },
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Persona = personnage fictif représentant un type d\'utilisateur','Éléments: Nom, Âge, Profession, Photo, Bio, Objectifs, Pain points','3-5 personas maximum par projet','Utilisation: guide pour toutes les décisions de design'],
            ar: ['الشخصية = شخصية خيالية تمثل نوعاً من المستخدمين','العناصر: الاسم، العمر، المهنة، الصورة، السيرة، الأهداف، نقاط الألم','الحد الأقصى 3-5 شخصيات لكل مشروع','الاستخدام: دليل لجميع قرارات التصميم'],
            en: ['Persona = fictional character representing a user type','Elements: Name, Age, Profession, Photo, Bio, Goals, Pain points','3-5 personas maximum per project','Usage: guide for all design decisions']
          },
          method: { fr: 'Créez 3 personas pour un projet de votre choix.', ar: 'أنشئ 3 شخصيات لمشروع من اختيارك.', en: 'Create 3 personas for a project of your choice.' },
          exercise: { fr: 'Créez une affiche de persona A1 avec tous les éléments.', ar: 'أنشئ ملصق شخصية بحجم A1 مع جميع العناصر.', en: 'Create an A1 persona poster with all elements.' },
          tip: { fr: '💡 Accrochez vos personas sur le mur. Demandez: "Que ferait [nom]?"', ar: '💡 علق شخصياتك على الحائط. اسأل: "ماذا سيفعل [الاسم]؟"', en: '💡 Pin your personas to the wall. Ask: "What would [name] do?"' }
        },
        {
          id: 'uiux-a-3',
          title: { fr: 'Cartes de Parcours Utilisateur', ar: 'خرائط رحلة المستخدم', en: 'User Journey Maps' },
          image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Journey Map = visualisation de l\'expérience utilisateur','Phases: Découverte, Recherche, Comparaison, Achat, Post-achat','Actions, Pensées, Émotions','Points de friction: où l\'utilisateur bloque','Opportunités: améliorations','1 map = 1 persona = 1 scénario'],
            ar: ['خريطة الرحلة = تصور لتجربة المستخدم','المراحل: الاكتشاف، البحث، المقارنة، الشراء، ما بعد الشراء','إجراءات، أفكار، مشاعر','نقاط الاحتكاك: أين يتعطل المستخدم','الفرص: تحسينات','خريطة واحدة = شخصية واحدة = سيناريو واحد'],
            en: ['Journey Map = visualization of user experience','Phases: Discovery, Research, Comparison, Purchase, Post-purchase','Actions, Thoughts, Emotions','Friction points: where user gets stuck','Opportunities: improvements','1 map = 1 persona = 1 scenario']
          },
          method: { fr: 'Créez une journey map pour un de vos personas (5-8 phases).', ar: 'أنشئ خريطة رحلة لأحد شخصياتك (5-8 مراحل).', en: 'Create a journey map for one of your personas (5-8 phases).' },
          exercise: { fr: 'Créez une journey map complète: 6 phases, émotions, 3 points de friction, 5 opportunités.', ar: 'أنشئ خريطة رحلة كاملة: 6 مراحل، مشاعر، 3 نقاط احتكاك، 5 فرص.', en: 'Create a complete journey map: 6 phases, emotions, 3 friction points, 5 opportunities.' },
          tip: { fr: '💡 Une journey map bien faite raconte une histoire et rend visible l\'invisible.', ar: '💡 خريطة رحلة جيدة تحكي قصة وتجعل غير المرئي مرئياً.', en: '💡 A well-made journey map tells a story and makes the invisible visible.' }
        },
        {
          id: 'uiux-a-4',
          title: { fr: 'Prototypage Avancé', ar: 'النمذجة الأولية المتقدمة', en: 'Advanced Prototyping' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Prototype = version interactive de votre design','Types: Low-fidelity, High-fidelity','Figma: connectez les frames avec des lignes','Interactions: Click, Hover, Drag, Scroll','Transitions: Slide, Fade, Smart Animate','Micro-interactions: animations subtiles (50-300ms)'],
            ar: ['النموذج الأولي = نسخة تفاعلية من تصميمك','الأنواع: منخفض الدقة، عالي الدقة','Figma: ربط الإطارات بخطوط','التفاعلات: نقر، تمرير، سحب، تمرير','الانتقالات: انزلاق، تلاشي، تحريك ذكي','التفاعلات الدقيقة: رسوم متحركة دقيقة'],
            en: ['Prototype = interactive version of your design','Types: Low-fidelity, High-fidelity','Figma: connect frames with lines','Interactions: Click, Hover, Drag, Scroll','Transitions: Slide, Fade, Smart Animate','Micro-interactions: subtle animations (50-300ms)']
          },
          method: { fr: 'Créez un prototype complet de 15 écrans dans Figma.', ar: 'أنشئ نموذجاً أولياً كاملاً من 15 شاشة في Figma.', en: 'Create a complete 15-screen prototype in Figma.' },
          exercise: { fr: 'Créez un prototype haute fidélité pour une application e-commerce: 20 écrans, 5 micro-interactions.', ar: 'أنشئ نموذجاً أولياً عالي الدقة لتطبيق تجارة إلكترونية: 20 شاشة، 5 تفاعلات دقيقة.', en: 'Create a high-fidelity prototype for an e-commerce app: 20 screens, 5 micro-interactions.' },
          tip: { fr: '💡 Plus votre prototype est proche du final, plus vos tests utilisateur sont valables.', ar: '💡 كلما كان نموذجك أقرب للنهائي، كانت اختبارات المستخدم أكثر صحة.', en: '💡 The closer your prototype to final, the more valid your user tests.' }
        },
        {
          id: 'uiux-a-5',
          title: { fr: 'Micro-Interactions', ar: 'التفاعلات الدقيقة', en: 'Micro-Interactions' },
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Micro-interaction = petit moment interactif (50-300ms)','4 parties: Trigger, Règle, Feedback, Loop','Exemples: Bouton animé, Like qui explose','Sans micro-interactions: expérience robotique','Outils: Figma (Smart Animate), Protopie','Bonnes pratiques: rapides, subtiles, cohérentes'],
            ar: ['التفاعل الدقيق = لحظة تفاعلية صغيرة (50-300ms)','4 أجزاء: مشغل، قاعدة، تغذية راجعة، تكرار','أمثلة: زر متحرك، إعجاب ينفجر','بدون تفاعلات دقيقة: تجربة آلية','الأدوات: Figma (التحريك الذكي)، Protopie','الممارسات الجيدة: سريعة، دقيقة، متسقة'],
            en: ['Micro-interaction = small interactive moment (50-300ms)','4 parts: Trigger, Rule, Feedback, Loop','Examples: Button animating, Like exploding','Without micro-interactions: robotic experience','Tools: Figma (Smart Animate), Protopie','Best practices: fast, subtle, consistent']
          },
          method: { fr: 'Analysez 10 apps. Identifiez 3 micro-interactions dans chacune.', ar: 'حلل 10 تطبيقات. حدد 3 تفاعلات دقيقة في كل منها.', en: 'Analyze 10 apps. Identify 3 micro-interactions in each.' },
          exercise: { fr: 'Créez 5 micro-interactions dans Figma: bouton bounce, loader, like pulse, menu slide, input focus.', ar: 'أنشئ 5 تفاعلات دقيقة في Figma: زر يرتد، مؤشر تحميل، إعجاب ينبض، قائمة تنزلق، حقل إدخال.', en: 'Create 5 micro-interactions in Figma: button bounce, loader, like pulse, menu slide, input focus.' },
          tip: { fr: '💡 200ms de mouvement peut transformer l\'expérience entière.', ar: '💡 200ms من الحركة يمكن أن تحول التجربة بأكملها.', en: '💡 200ms of motion can transform the entire experience.' }
        },
        {
          id: 'uiux-a-6',
          title: { fr: 'Accessibilité - Design pour Tous', ar: 'إمكانية الوصول - تصميم للجميع', en: 'Accessibility - Design for All' },
          image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e96d2?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Accessibilité = concevoir pour tous, y compris handicapés','WCAG: A (minimum), AA (recommandé), AAA (excellent)','Contraste: 4.5:1 pour le texte','Taille: texte minimum 16px','Navigation: au clavier','Screen readers: compatibilité'],
            ar: ['إمكانية الوصول = تصميم للجميع، بما في ذلك ذوي الإعاقة','WCAG: A (الحد الأدنى)، AA (موصى به)، AAA (ممتاز)','التباين: 4.5:1 للنص','الحجم: نص بحد أدنى 16px','التنقل: عبر لوحة المفاتيح','قارئات الشاشة: التوافق'],
            en: ['Accessibility = designing for all, including disabilities','WCAG: A (minimum), AA (recommended), AAA (excellent)','Contrast: 4.5:1 for text','Size: minimum 16px text','Navigation: by keyboard','Screen readers: compatibility']
          },
          method: { fr: 'Testez votre design avec un lecteur d\'écran et au clavier uniquement.', ar: 'اختبر تصميمك مع قارئ شاشة ولوحة مفاتيح فقط.', en: 'Test your design with a screen reader and keyboard only.' },
          exercise: { fr: 'Auditez un site web pour l\'accessibilité. Notez 10 problèmes et 10 solutions.', ar: 'دقق في موقع ويب من حيث إمكانية الوصول. سجل 10 مشاكل و10 حلول.', en: 'Audit a website for accessibility. Note 10 problems and 10 solutions.' },
          tip: { fr: '💡 15% de la population a un handicap. Ignorer l\'accessibilité = ignorer 15% des utilisateurs.', ar: '💡 15% من السكان لديهم إعاقة. تجاهل إمكانية الوصول = تجاهل 15% من المستخدمين.', en: '💡 15% of the population has a disability. Ignoring accessibility = ignoring 15% of users.' }
        },
        {
          id: 'uiux-a-7',
          title: { fr: 'Tests d\'Utilisabilité', ar: 'اختبارات سهولة الاستخدام', en: 'Usability Testing' },
          image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e96d2?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Usability Testing = observer des utilisateurs','Types: Modéré, Non modéré, À distance','5-8 participants, 5-10 tâches, 60-90 minutes','Métriques: taux de succès, temps, erreurs','Outils: Lookback, UserTesting, Maze','Analyse: identifiez les patterns'],
            ar: ['اختبار سهولة الاستخدام = مراقبة المستخدمين','الأنواع: معتدل، غير معتدل، عن بُعد','5-8 مشاركين، 5-10 مهام، 60-90 دقيقة','المقاييس: معدل النجاح، الوقت، الأخطاء','الأدوات: Lookback، UserTesting، Maze','التحليل: تحديد الأنماط'],
            en: ['Usability Testing = observing users','Types: Moderated, Unmoderated, Remote','5-8 participants, 5-10 tasks, 60-90 minutes','Metrics: success rate, time, errors','Tools: Lookback, UserTesting, Maze','Analysis: identify patterns']
          },
          method: { fr: 'Préparez un test utilisabilité: 5 tâches, 5 participants, analyse des résultats.', ar: 'جهز اختبار سهولة استخدام: 5 مهام، 5 مشاركين، تحليل النتائج.', en: 'Prepare a usability test: 5 tasks, 5 participants, results analysis.' },
          exercise: { fr: 'Conduisez un test complet: plan, script, 5 participants, résultats, 5 recommandations.', ar: 'أجرِ اختباراً كاملاً: خطة، نص، 5 مشاركين، نتائج، 5 توصيات.', en: 'Conduct a complete test: plan, script, 5 participants, results, 5 recommendations.' },
          tip: { fr: '💡 5 utilisateurs suffisent pour trouver 80% des problèmes. Testez tôt, testez souvent.', ar: '💡 5 مستخدمين كافٍ للعثور على 80% من المشاكل. اختبر مبكراً، اختبر كثيراً.', en: '💡 5 users are enough to find 80% of problems. Test early, test often.' }
        },
        {
          id: 'uiux-a-8',
          title: { fr: 'Handoff aux Développeurs', ar: 'التسليم للمطورين', en: 'Developer Handoff' },
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Handoff = livraison du design aux développeurs','Figma: Inspect mode pour les détails','Exporter: assets (PNG, SVG, PDF)','Design Tokens: variables','Redlines: annotations avec mesures','Style Guide: document de référence'],
            ar: ['التسليم للمطورين = تسليم التصميم للمطورين','Figma: وضع التدقيق للتفاصيل','التصدير: أصول (PNG، SVG، PDF)','رموز التصميم: متغيرات','الخطوط الحمراء: تعليقات توضيحية','دليل الأنماط: وثيقة مرجعية'],
            en: ['Handoff = delivering design to developers','Figma: Inspect mode for details','Export: assets (PNG, SVG, PDF)','Design Tokens: variables','Redlines: annotations with measurements','Style Guide: reference document']
          },
          method: { fr: 'Préparez un package de handoff complet pour votre projet.', ar: 'جهز حزمة تسليم كاملة لمشروعك.', en: 'Prepare a complete handoff package for your project.' },
          exercise: { fr: 'Créez un handoff complet: Figma partagé, assets exportés, design tokens, style guide, documentation.', ar: 'أنشئ تسليماً كاملاً: Figma مشترك، أصول مصدرة، رموز تصميم، دليل أنماط، توثيق.', en: 'Create a complete handoff: shared Figma, exported assets, design tokens, style guide, documentation.' },
          tip: { fr: '💡 Un bon handoff = design bien implémenté. Passez 20% de votre temps sur le handoff.', ar: '💡 تسليم جيد = تصميم منفذ جيداً. اقضِ 20% من وقتك على التسليم.', en: '💡 A good handoff = well-implemented design. Spend 20% of your time on handoff.' }
        }
      ]
    }
  ]
}