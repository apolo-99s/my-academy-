// ============================================================
// DATA.JS - 10 SKILLS AVEC CHAR7 KAMEL
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
    f1: '✓ Méthodes étape par étape', f2: '✓ Exercices réels', f3: '✓ Outils gratuits', f4: '✓ Tarifs marché algérien',
    includesTitle: 'Ce que vous obtenez',
    includes: ['10 formations complètes — Beginner → Master','Chaque leçon: méthode exacte étape par étape','Exercices pratiques avec livrables concrets','Outils gratuits','Prix du marché algérien en DZD','Scripts de communication client','Accès à vie — mises à jour incluses'],
    already: 'Vous avez déjà acheté?', enter: 'Entrez votre code d\'accès pour commencer.', code: 'VOTRE CODE D\'ACCÈS...',
    access: 'Accéder à la Formation →', loading: 'Vérification...', notBought: 'Pas encore acheté?', whatsapp: '💬 Commander via WhatsApp',
    errEmpty: 'Entrez votre code d\'accès.', errInvalid: 'Code invalide. Vérifiez votre achat.', errUsed: 'Ce code a déjà été utilisé.',
    stats: [{ n: '50+', l: 'Leçons détaillées' }, { n: '4', l: 'Niveaux par skill' }, { n: '0 DZD', l: 'Pour commencer' }],
    footer: 'DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algérie', aTitle: 'Apprenez. Pratiquez.\nSoyez Payé.',
    aSubtitle: '10 skills, du débutant au maître. Chaque leçon vous dit exactement comment faire.',
    aFeatures: ['Méthodes étape par étape','Exercices réels','Outils gratuits','Tarifs marché algérien'],
    aRec: '💡 Ordre recommandé: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding',
    startLearning: 'Commencer →', firstClient: 'Premier client', earning: 'Revenus', startWith: 'Commencer avec',
    backSkills: '← Skills', goal: 'Objectif', lessons: 'leçons', back: '← Retour', lesson: 'Leçon', of: 'sur',
    howTo: 'Comment Faire — Étape par Étape', bestWay: 'La Meilleure Façon d\'Apprendre', exercise: 'Votre Exercice Pratique',
    prevLesson: '← Leçon Précédente', nextLesson: 'Leçon Suivante →', nextLevel: 'Niveau Suivant', complete: '👑 Formation Terminée!'
  },
  ar: {
    badge: 'تكوين كامل — 10 مهارات',
    title: 'تعلم المهارات الرقمية\nاللي تدر فلوس في الجزائر',
    subtitle: '10 تكوينات كاملة. تصميم، سوشيال ميديا، مونتاج، ويب، SEO، بيانات، كتابة، UI/UX، أتمتة، برمجة بالذكاء الاصطناعي.',
    f1: '✓ خطوات واضحة وعملية', f2: '✓ تمارين حقيقية', f3: '✓ أدوات مجانية', f4: '✓ أسعار السوق الجزائري',
    includesTitle: 'شنو راه فيه',
    includes: ['10 تكوينات كاملة — مبتدئ → محترف','كل درس: الطريقة الصحيحة خطوة بخطوة','تمارين عملية مع نتائج حقيقية','أدوات مجانية','أسعار السوق الجزائري بالدينار','نصوص التواصل مع الزبائن','وصول مدى الحياة — التحديثات مشمولة'],
    already: 'راك شريت من قبل؟', enter: 'دخل رمز الدخول ديالك باش تبدا.', code: 'رمز الدخول...',
    access: 'ادخل للتكوين →', loading: 'كاين التحقق...', notBought: 'مازلتش شريت؟', whatsapp: '💬 اطلب عبر واتساب',
    errEmpty: 'دخل رمز الدخول.', errInvalid: 'الرمز غلط. راجع الشراء.', errUsed: 'هذا الرمز تستخدم من قبل.',
    stats: [{ n: '+50', l: 'درس مفصل' }, { n: '4', l: 'مستويات لكل مهارة' }, { n: '0 دج', l: 'باش تبدا' }],
    footer: 'DigitalSkills.dz — تكوين محترف الجزائر 🇩🇿',
    aBadge: '🇩🇿 أكاديمية المهارات الرقمية — الجزائر', aTitle: 'تعلم. تمرن.\nتربح.',
    aSubtitle: '10 مهارات، من الصفر للاحتراف. كل درس يقولك بالضبط كيفاش تدير.',
    aFeatures: ['خطوات واضحة وعملية','تمارين حقيقية','أدوات مجانية','أسعار السوق الجزائري'],
    aRec: '💡 الترتيب المنصوح: سوشيال ميديا → تصميم → مونتاج → ويب → SEO → بيانات → كتابة → UI/UX → أتمتة → برمجة بالذكاء الاصطناعي',
    startLearning: 'ابدا التعلم →', firstClient: 'أول زبون', earning: 'الأرباح', startWith: 'ابدا بـ',
    backSkills: 'المهارات →', goal: 'الهدف', lessons: 'دروس', back: 'رجع →', lesson: 'الدرس', of: 'من',
    howTo: 'كيفاش تدير — خطوة بخطوة', bestWay: 'أحسن طريقة باش تتعلم', exercise: 'تمرينك العملي',
    prevLesson: 'الدرس السابق →', nextLesson: '← الدرس الموالي', nextLevel: 'المستوى الموالي', complete: '👑 كملت التكوين!'
  },
  en: {
    badge: 'Complete Course — 10 Skills',
    title: 'Master Digital Skills That\nGenerate Income in Algeria',
    subtitle: '10 complete courses. Design, Social Media, Video, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding.',
    f1: '✓ Step-by-step methods', f2: '✓ Real exercises', f3: '✓ Free tools only', f4: '✓ Algerian market rates',
    includesTitle: 'What you get',
    includes: ['10 complete courses — Beginner → Master','Every lesson: exact step-by-step method','Practical exercises with real deliverables','Free tools','Algerian market rates in DZD','Client communication scripts','Lifetime access — updates included'],
    already: 'Already purchased?', enter: 'Enter your access code to get started.', code: 'YOUR ACCESS CODE...',
    access: 'Access the Course →', loading: 'Verifying...', notBought: 'Haven\'t bought yet?', whatsapp: '💬 Order via WhatsApp',
    errEmpty: 'Please enter your access code.', errInvalid: 'Invalid code. Check your purchase.', errUsed: 'This code has already been used.',
    stats: [{ n: '50+', l: 'Detailed lessons' }, { n: '4', l: 'Levels per skill' }, { n: '0 DZD', l: 'To get started' }],
    footer: 'DigitalSkills.dz — Professional Training Algeria 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algeria', aTitle: 'Learn It. Practice It.\nGet Paid.',
    aSubtitle: '10 skills, beginner to master. Every lesson tells you exactly how to do it.',
    aFeatures: ['Step-by-step methods','Real exercises','Free tools only','Algerian market rates'],
    aRec: '💡 Recommended: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding',
    startLearning: 'Start Learning →', firstClient: 'First client', earning: 'Earning range', startWith: 'Start with',
    backSkills: '← Skills', goal: 'Goal', lessons: 'lessons', back: '← Back', lesson: 'Lesson', of: 'of',
    howTo: 'How To Do It — Step by Step', bestWay: 'The Best Way to Learn This', exercise: 'Your Practice Exercise',
    prevLesson: '← Previous Lesson', nextLesson: 'Next Lesson →', nextLevel: 'Next Level', complete: '👑 Track Complete!'
  }
};

// ============================================================
// SKILLS (10 SKILLS AVEC CHAR7 KAMEL)
// ============================================================
var SKILLS = [
  // ===== SKILL 1: GRAPHIC DESIGN =====
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
      // ===== BEGINNER =====
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Apprendre les bases de Canva et les 4 règles du design', ar: 'تعلم أساسيات Canva وقواعد التصميم الأربعة', en: 'Learn Canva basics and the 4 design rules' },
        lessons: [
          // Lesson 1: Installer Canva
          {
            id: 'd-b-1',
            title: { fr: 'Installer et utiliser Canva comme un pro', ar: 'تنصيب واستخدام Canva كمحترف', en: 'Install and use Canva like a pro' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Rendez-vous sur canva.com ou téléchargez l\'application depuis Google Play ou App Store — c\'est totalement gratuit.',
                'Cliquez sur "S\'inscrire" et créez un compte avec votre email ou directement via Google, ça prend 30 secondes.',
                'Une fois connecté, cliquez sur "Créer un design" en haut à droite du tableau de bord.',
                'Choisissez "Post Instagram Carré" — vous aurez un canvas vierge de 1080x1080 pixels, parfait pour commencer.',
                'À gauche, vous avez le panneau principal: Templates (des milliers de modèles), Éléments (formes, icônes), Texte, Arrière-plan, et vos Téléchargements.',
                'En haut, la barre d\'outils vous permet de modifier la police, la taille, la couleur et la position de vos éléments.',
                'Utilisez Ctrl+Z pour annuler une action et Ctrl+D pour dupliquer un élément — ces raccourcis vous feront gagner un temps fou.',
                'Pour exporter: cliquez sur "Partager" en haut à droite → "Télécharger" → choisissez PNG (pour les réseaux sociaux) ou PDF (pour l\'impression).'
              ],
              ar: [
                'روح لـ canva.com أو حمّل التطبيق من Google Play أو App Store — مجاني تماماً.',
                'اضغط على "سجّل" وأنشئ حساب بإيميلك أو عبر Google، ياخذ 30 ثانية فقط.',
                'بعد الدخول، اضغط على "إنشاء تصميم" في أعلى يمين لوحة التحكم.',
                'اختار "منشور Instagram مربع" — راح يكون عندك مساحة فارغة 1080x1080 بكسل، مثالية للبداية.',
                'على اليسار عندك اللوحة الرئيسية: قوالب (آلاف النماذج)، عناصر (أشكال وأيقونات)، نص، خلفية، وملفاتك المحمّلة.',
                'في الأعلى، شريط الأدوات يسمح لك بتغيير الخط، الحجم، اللون وموضع العناصر.',
                'استخدم Ctrl+Z للتراجع و Ctrl+D للنسخ — هالاختصارات توفر وقتك بزاف.',
                'للتصدير: اضغط على "مشاركة" → "تحميل" → اختار PNG (للتواصل الاجتماعي) أو PDF (للطباعة).'
              ],
              en: [
                'Go to canva.com or download the app from Google Play or App Store — it\'s completely free.',
                'Click "Sign Up" and create an account with your email or via Google, it takes 30 seconds.',
                'Once logged in, click "Create a design" at the top right of the dashboard.',
                'Choose "Instagram Post Square" — you\'ll have a blank 1080x1080px canvas, perfect to start.',
                'On the left, you have the main panel: Templates (thousands of models), Elements (shapes, icons), Text, Background, and your Uploads.',
                'At the top, the toolbar lets you change font, size, color and position of your elements.',
                'Use Ctrl+Z to undo and Ctrl+D to duplicate — these shortcuts will save you a lot of time.',
                'To export: click "Share" → "Download" → choose PNG (for social media) or PDF (for printing).'
              ]
            },
            method: {
              fr: 'Ouvrez Canva maintenant et passez 20 minutes à cliquer sur chaque bouton. Ne concevez rien — explorez juste. Cette session est votre vraie leçon.',
              ar: 'افتح Canva الآن واقضِ 20 دقيقة تضغط على كل زر. ما تصمّمش شيء — بس استكشف. هالجلسة هي درسك الحقيقي.',
              en: 'Open Canva now and spend 20 minutes clicking every button. Do not design anything — just explore. This session is your real lesson.'
            },
            exercise: {
              fr: 'Créez un post Instagram avec votre nom en grand texte gras et un fond coloré. Téléchargez-le et envoyez-le à votre formateur.',
              ar: 'أنشئ منشور Instagram باسمك بخط كبير وعريض وخلفية ملونة. حمّله وأرسله للمدرب.',
              en: 'Create an Instagram post with your name in big bold text and a colored background. Download it and send it to your trainer.'
            },
            tip: {
              fr: '💡 Canva Gratuit vous donne accès à plus de 250 000 templates. Ne passez pas à la version Pro avant d\'avoir vos premiers clients payants.',
              ar: '💡 Canva المجاني يعطيك أكثر من 250,000 قالب. ما تنتقلش للـ Pro قبل ما تجيك أول زبون.',
              en: '💡 Canva Free gives you access to over 250,000 templates. Don\'t upgrade to Pro until you have your first paying clients.'
            }
          },
          // Lesson 2: 4 règles CARP
          {
            id: 'd-b-2',
            title: { fr: 'Les 4 Règles d\'Or du Design (CARP)', ar: 'قواعد التصميم الأربعة الذهبية (CARP)', en: 'The 4 Golden Rules of Design (CARP)' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'right',
            steps: {
              fr: [
                'CONTRASTE: Rendez l\'élément le plus important le plus grand, plus coloré ou plus différent du reste. Le contraste attire l\'œil et crée une hiérarchie visuelle.',
                'ALIGNEMENT: Rien ne doit être placé au hasard. Activez les guides (Vue → Afficher les règles) pour aligner parfaitement vos éléments.',
                'RÉPÉTITION: Utilisez la même police, les mêmes couleurs et le même style pour les éléments similaires. Cela crée une cohérence professionnelle.',
                'PROXIMITÉ: Groupez les éléments qui vont ensemble et séparez ceux qui n\'ont pas de lien. L\'espacement crée la clarté.',
                'Astuce pro: Ouvrez n\'importe quel template Canva et identifiez ces 4 règles dans chaque élément. Vous verrez qu\'elles sont toutes respectées.',
                'Exercice: Cherchez "flyer restaurant algérie" sur Google. Identifiez quelles règles sont respectées et lesquelles sont brisées.'
              ],
              ar: [
                'التباين: خلّي العنصر الأهم أكبر، أو أكثر لوناً، أو مختلفاً عن الباقي. التباين يجذب العين ويخلق تسلسلاً بصرياً.',
                'المحاذاة: ما كاين والو موضوع بالعشوائية. فعّل الخطوط (عرض → أظهر الخطوط) باش تراصف عناصرك بالضبط.',
                'التكرار: استخدم نفس الخط، نفس الألوان ونفس الستايل للعناصر المتشابهة. هذا يخلق انسجاماً احترافياً.',
                'القرب: جمّع العناصر اللي تمشي مع بعض وفرّق اللي ما عندهمش رابط. التباعد يخلق الوضوح.',
                'نصيحة: افتح أي قالب Canva وحدّد هالقواعد الأربعة في كل عنصر. راح تشوف أنهم كلهم مطبقين.',
                'تمرين: دور على "flyer مطعم الجزائر" في Google. حدّد القواعد المطبقة والمكسورة.'
              ],
              en: [
                'CONTRAST: Make the most important element bigger, more colorful, or different from the rest. Contrast attracts the eye and creates visual hierarchy.',
                'ALIGNMENT: Nothing should be placed randomly. Enable guides (View → Show Rulers) to align your elements perfectly.',
                'REPETITION: Use the same font, colors and style for similar elements. This creates professional consistency.',
                'PROXIMITY: Group elements that belong together and separate those that don\'t. Spacing creates clarity.',
                'Pro tip: Open any Canva template and identify these 4 rules in every element. You\'ll see they\'re all respected.',
                'Exercise: Search "flyer restaurant algeria" on Google. Identify which rules are followed and which are broken.'
              ]
            },
            method: {
              fr: 'Créez deux versions d\'un même design: une où vous violez délibérément les 4 règles, et une où vous les respectez parfaitement. La comparaison rend les règles inoubliables.',
              ar: 'أنشئ نسختين من نفس التصميم: وحدة تكسر فيها القواعد الأربعة، ووحدة تتبعها بالضبط. المقارنة تخلّيك ما تنساش القواعد.',
              en: 'Create two versions of the same design: one where you deliberately break all 4 rules, and one where you follow them perfectly. The comparison makes the rules unforgettable.'
            },
            exercise: {
              fr: 'Designez une carte de visite pour un restaurant algérien (El Baraka) DEUX fois: Version 1 = violez les 4 règles. Version 2 = respectez-les parfaitement. Comparez les deux.',
              ar: 'صمّم بطاقة أعمال لمطعم جزائري (البركة) مرتين: نسخة 1 = اكسر القواعد الأربعة. نسخة 2 = اتبعها بالضبط. قارن بينهما.',
              en: 'Design a business card for an Algerian restaurant (El Baraka) TWICE: Version 1 = violate all 4 rules. Version 2 = follow them perfectly. Compare both.'
            },
            tip: {
              fr: '💡 Les designers professionnels ne brisent les règles qu\'APRÈS les avoir parfaitement maîtrisées. C\'est la différence entre un amateur et un pro.',
              ar: '💡 المصممون المحترفين ما يكسرونش القواعد إلا بعد ما يتقنوها بالكامل. هذا هو الفرق بين الهاوي والمحترف.',
              en: '💡 Professional designers only break rules AFTER perfectly mastering them. That\'s the difference between an amateur and a pro.'
            }
          },
          // Lesson 3: Théorie des couleurs
          {
            id: 'd-b-3',
            title: { fr: 'Théorie des Couleurs', ar: 'نظرية الألوان', en: 'Color Theory' },
            image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80',
            layout: 'left',
            steps: {
              fr: [
                'coolors.co — génère des palettes harmonieuses. Appuyez sur la barre d\'espace pour générer une nouvelle palette.',
                'Émotions des couleurs: Rouge=urgence, passion. Bleu=confiance, calme. Vert=nature, santé. Jaune=bonheur, optimisme. Noir=luxe, élégance.',
                'Règle 60-30-10: 60% de couleur principale (fonds), 30% de couleur secondaire (titres), 10% de couleur d\'accent (boutons, éléments importants).',
                'Pour extraire des couleurs d\'une photo: Canva → image → outil pipette → appliquez aux textes et formes.',
                'Vérifiez l\'harmonie des couleurs sur color.adobe.com → choisissez Complémentaire → bougez la roue pour trouver des combinaisons.',
                'Maximum 3 couleurs par design en tant que débutant — c\'est une règle simple mais efficace.'
              ],
              ar: [
                'coolors.co — يولّد باليتات منسجمة. اضغط على مفتاح المسافة لتوليد باليت جديد.',
                'مشاعر الألوان: أحمر=إلحاح، شغف. أزرق=ثقة، هدوء. أخضر=طبيعة، صحة. أصفر=سعادة، تفاؤل. أسود=فخامة، أناقة.',
                'قاعدة 60-30-10: 60% لون رئيسي (خلفيات)، 30% لون ثانوي (عناوين)، 10% لون بارز (أزرار، عناصر مهمة).',
                'لاستخراج ألوان من صورة: Canva → صورة → أداة القطارة → طبّق على النصوص والأشكال.',
                'تحقق من تناسق الألوان على color.adobe.com → اختار مكمل → حرّك العجلة لتجد تركيبات.',
                'أقصاه 3 ألوان في تصميم واحد وأنت مبتدئ — هذه قاعدة بسيطة لكن فعالة.'
              ],
              en: [
                'coolors.co — generates harmonious palettes. Press the spacebar to generate a new palette.',
                'Color emotions: Red=urgency, passion. Blue=trust, calm. Green=nature, health. Yellow=happiness, optimism. Black=luxury, elegance.',
                '60-30-10 rule: 60% primary color (backgrounds), 30% secondary color (titles), 10% accent color (buttons, important elements).',
                'To extract colors from a photo: Canva → image → eyedropper tool → apply to text and shapes.',
                'Check color harmony on color.adobe.com → choose Complementary → move the wheel to find combinations.',
                'Maximum 3 colors per design as a beginner — this is a simple but effective rule.'
              ]
            },
            method: {
              fr: 'Analysez les pages Instagram de 5 marques algériennes. Pour chaque post populaire: notez la couleur principale, l\'émotion qu\'elle évoque, et le nombre de couleurs utilisées.',
              ar: 'حلّل صفحات Instagram لـ5 علامات جزائرية. لكل منشور شهير: سجل اللون الرئيسي، المشاعر التي يثيرها، وعدد الألوان المستخدمة.',
              en: 'Analyze the Instagram pages of 5 Algerian brands. For each popular post: note the main color, the emotion it evokes, and the number of colors used.'
            },
            exercise: {
              fr: 'Générez 5 palettes sur coolors.co. Pour chacune: nommez un type d\'entreprise algérienne et expliquez pourquoi les couleurs correspondent à son activité.',
              ar: 'ولّد 5 باليتات على coolors.co. لكل واحدة: سمّي نوع مشروع جزائري واشرح لماذا الألوان تناسبه.',
              en: 'Generate 5 palettes on coolors.co. For each: name an Algerian business type and explain why the colors fit its activity.'
            },
            tip: {
              fr: '💡 En cas de doute: texte noir sur fond blanc + UNE couleur d\'accent. C\'est simple, lisible et toujours professionnel.',
              ar: '💡 في حالة الشك: نص أسود على أبيض + لون accent واحد. بسيط، واضح، ودائماً يبان محترف.',
              en: '💡 When in doubt: black text on white + ONE accent color. Simple, readable, and always looks professional.'
            }
          }
        ]
      },
      // ===== INTERMEDIATE =====
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
        goal: { fr: 'Passer de Canva à Photoshop et construire vos premiers projets clients', ar: 'الانتقال من Canva إلى Photoshop وبناء أول مشاريعك للزبائن', en: 'Move from Canva to Photoshop and build your first client projects' },
        lessons: [
          {
            id: 'd-i-1',
            title: { fr: 'Photopea — L\'alternative gratuite à Photoshop', ar: 'Photopea — البديل المجاني لـ Photoshop', en: 'Photopea — The free alternative to Photoshop' },
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
            layout: 'left',
            steps: {
              fr: [
                'Photopea (photopea.com) fonctionne directement dans votre navigateur et est identique à Photoshop à 99% — totalement gratuit.',
                'L\'interface: à gauche vous avez la barre d\'outils (sélection, pinceau, texte, etc.). À droite, le panneau des calques. En haut, les options contextuelles.',
                'Les CALQUES sont comme des feuilles transparentes superposées. Chaque élément (texte, image, forme) doit être sur son propre calque pour pouvoir le modifier indépendamment.',
                'Pour ouvrir une photo: Fichier → Ouvrir. Double-cliquez sur le calque "Arrière-plan" et cliquez OK pour le déverrouiller.',
                'Pour supprimer un fond: utilisez l\'outil Baguette magique, cliquez sur le fond, puis appuyez sur Delete. Pour les fonds complexes: Sélection → Sujet.',
                'Pour ajouter du texte: sélectionnez l\'outil T, cliquez sur le canvas, tapez votre texte, puis modifiez police, taille et couleur.',
                'Pour exporter: Fichier → Exporter → Exporter sous → PNG (en cochant Transparence) ou JPEG.'
              ],
              ar: [
                'Photopea (photopea.com) يشتغل مباشرة في المتصفح وهو مطابق لـ Photoshop بنسبة 99% — مجاني تماماً.',
                'الواجهة: على اليسار عندك شريط الأدوات (تحديد، فرشاة، نص...). على اليمين، لوحة الطبقات. في الأعلى، الخيارات السياقية.',
                'الطبقات هي أوراق شفافة مكدسة. كل عنصر (نص، صورة، شكل) لازم يكون على طبقته الخاصة باش تقدر تعدله بشكل مستقل.',
                'لفتح صورة: ملف → فتح. انقر مرتين على طبقة "الخلفية" واضغط OK باش تفتحها.',
                'لحذف الخلفية: استخدم أداة العصا السحرية، انقر على الخلفية، ثم اضغط Delete. للخلفيات المعقدة: تحديد → الموضوع.',
                'لإضافة نص: اختر أداة T، انقر على المساحة، اكتب نصك، ثم غيّر الخط، الحجم واللون.',
                'للتصدير: ملف → تصدير → تصدير كـ → PNG (فعّل الشفافية) أو JPEG.'
              ],
              en: [
                'Photopea (photopea.com) runs directly in your browser and is 99% identical to Photoshop — completely free.',
                'Interface: on the left you have the toolbar (selection, brush, text, etc.). On the right, the layers panel. At the top, contextual options.',
                'LAYERS are like transparent sheets stacked on top of each other. Each element (text, image, shape) must be on its own layer to edit it independently.',
                'To open a photo: File → Open. Double-click on the "Background" layer and click OK to unlock it.',
                'To remove a background: use the Magic Wand tool, click on the background, then press Delete. For complex backgrounds: Select → Subject.',
                'To add text: select the T tool, click on the canvas, type your text, then change font, size and color.',
                'To export: File → Export → Export As → PNG (check Transparency) or JPEG.'
              ]
            },
            method: {
              fr: 'Ouvrez une photo de produit dans Photopea, supprimez l\'arrière-plan, ajoutez un fond coloré et du texte (nom du produit + prix). C\'est une simulation parfaite d\'une publicité professionnelle.',
              ar: 'افتح صورة منتج في Photopea، ازل الخلفية، زيد خلفية ملونة ونص (اسم المنتج + السعر). هذي محاكاة مثالية لإعلان احترافي.',
              en: 'Open a product photo in Photopea, remove the background, add a colored background and text (product name + price). This is a perfect simulation of a professional ad.'
            },
            exercise: {
              fr: 'Prenez une photo d\'un produit algérien (ex: café, huile d\'olive, miel). Supprimez le fond dans Photopea, placez-le sur fond blanc, ajoutez le prix et le nom. Exportez en PNG.',
              ar: 'اخذ صورة منتج جزائري (مثلاً: قهوة، زيت زيتون، عسل). ازل الخلفية في Photopea، حطها على خلفية بيضاء، زيد السعر والاسم. صدّر PNG.',
              en: 'Take a photo of an Algerian product (e.g.: coffee, olive oil, honey). Remove the background in Photopea, place it on a white background, add price and name. Export as PNG.'
            },
            tip: {
              fr: '💡 Pour ajouter une ombre: clic droit sur le calque → Options de fusion → Ombre portée → opacité 40%, distance 10px, flou 20px. Le résultat est immédiatement professionnel.',
              ar: '💡 لإضافة ظل: انقر يمين على الطبقة → خيارات المزج → ظل مسقط → شفافية 40%، مسافة 10px، تعتيم 20px. النتيجة تكون احترافية مباشرة.',
              en: '💡 To add a shadow: right-click on the layer → Blending Options → Drop Shadow → opacity 40%, distance 10px, blur 20px. The result is instantly professional.'
            }
          }
        ]
      },
      // ===== ADVANCED =====
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 11–20', ar: 'الأسابيع 11–20', en: 'Weeks 11–20' },
        goal: { fr: 'Maîtriser Illustrator et livrer des identités visuelles complètes', ar: 'إتقان Illustrator وتسليم هويات بصرية كاملة', en: 'Master Illustrator and deliver complete visual identities' },
        lessons: [
          {
            id: 'd-a-1',
            title: { fr: 'Adobe Illustrator Vecteurs', ar: 'Adobe Illustrator الفيكتور', en: 'Adobe Illustrator Vectors' },
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
            layout: 'right',
            steps: {
              fr: [
                'Inkscape (inkscape.org) est un outil vectoriel 100% gratuit et très similaire à Illustrator.',
                'Les vecteurs sont des images qui peuvent être agrandies à l\'infini sans perte de qualité — un logo vectoriel s\'adapte d\'une carte de visite à un panneau de 10 mètres.',
                'L\'outil Plume (P) permet de tracer des formes précises: cliquez pour un angle droit, cliquez et glissez pour une courbe, cliquez sur le point de départ pour fermer la forme.',
                'Pour recréer un logo: importez l\'image, verrouillez le calque, créez un nouveau calque et tracez avec la Plume.',
                'Pathfinder: Unir (fusionner), Soustraction (soustraire), Intersection (chevaucher) — ces outils transforment vos formes.',
                'Pour les couleurs: sélectionnez la forme → le carré de remplissage en bas à gauche → entrez le code hexadécimal de la couleur.'
              ],
              ar: [
                'Inkscape (inkscape.org) أداة فيكتور مجانية 100% وشبيهة جداً بـ Illustrator.',
                'الفيكتورات هي صور يمكن تكبيرها إلى ما لا نهاية دون فقدان الجودة — شعار فيكتور يتكيف من بطاقة إلى إعلان 10 أمتار.',
                'أداة القلم (P) تسمح برسم أشكال دقيقة: اضغط لزاوية مستقيمة، اضغط واسحب لمنحنى، اضغط على نقطة البداية لإغلاق الشكل.',
                'لإعادة إنشاء شعار: استورد الصورة، اقفل الطبقة، أنشئ طبقة جديدة وتتبّع بالقلم.',
                'Pathfinder: توحيد (دمج)، طرح (سحب)، تقاطع (تداخل) — هذه الأدوات تحول أشكالك.',
                'للألوان: اختر الشكل → مربع التعبئة في الأسفل اليسار → أدخل الكود السداسي للون.'
              ],
              en: [
                'Inkscape (inkscape.org) is a 100% free vector tool very similar to Illustrator.',
                'Vectors are images that can be scaled infinitely without quality loss — a vector logo adapts from a business card to a 10-meter billboard.',
                'The Pen Tool (P) allows you to draw precise shapes: click for a straight corner, click and drag for a curve, click the starting point to close the shape.',
                'To recreate a logo: import the image, lock the layer, create a new layer and trace with the Pen.',
                'Pathfinder: Unite (merge), Minus Front (subtract), Intersect (overlap) — these tools transform your shapes.',
                'For colors: select the shape → the fill square at the bottom left → enter the hex code for the color.'
              ]
            },
            method: {
              fr: 'Imprimez un logo simple (3-5 formes). Tracez chaque forme avec UNIQUEMENT l\'outil Plume dans Inkscape. Répétez pour 5 logos sur une semaine.',
              ar: 'اطبع شعاراً بسيطاً (3-5 أشكال). تتبّع كل شكل بأداة القلم فقط في Inkscape. كرّر لـ5 شعارات على أسبوع.',
              en: 'Print a simple logo (3-5 shapes). Trace every shape with ONLY the Pen Tool in Inkscape. Repeat for 5 logos over one week.'
            },
            exercise: {
              fr: 'Recréez le logo d\'Ooredoo ou Djezzy en vectoriel avec Inkscape. Utilisez uniquement l\'outil Plume et Pathfinder. Comparez avec le logo original.',
              ar: 'أعد إنشاء شعار Ooredoo أو Djezzy كفيكتور مع Inkscape. استخدم أداة القلم و Pathfinder فقط. قارن مع الشعار الأصلي.',
              en: 'Recreate the Ooredoo or Djezzy logo as vector with Inkscape. Use only the Pen Tool and Pathfinder. Compare with the original logo.'
            },
            tip: {
              fr: '💡 Client avec logo JPEG: proposez de le redessiner en vectoriel. Facturez 3000-8000 DZD pour 30-90 minutes de travail.',
              ar: '💡 زبون بشعار JPEG: اقترح إعادة رسمه كفيكتور. اشحن 3000-8000 دج مقابل 30-90 دقيقة عمل.',
              en: '💡 Client with JPEG logo: offer to redraw it as vector. Charge 3000-8000 DZD for 30-90 minutes of work.'
            }
          }
        ]
      },
      // ===== MASTER =====
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une agence de design et embaucher des juniors', ar: 'إدارة أجنسي تصميم وتوظيف مساعدين', en: 'Run a design agency and hire juniors' },
        lessons: [
          {
            id: 'd-m-1',
            title: { fr: 'De Freelance à Agence', ar: 'من فريلانس لأجنسي', en: 'From Freelancer to Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Bon moment: quand vous avez un travail constant qui dépasse votre capacité seul ET que vous refusez des projets. Pas avant.',
                'Collaborateur: votre meilleur étudiant ou un designer en ligne. Paiement par projet. Payez-les 40-50% du montant.',
                'Rôles: Vous gérez l\'acquisition et les propositions de qualité. Eux gèrent l\'exécution.',
                'Marque agence: Nom, logo, site Carrd.co (30 minutes, gratuit), Instagram professionnel.',
                'Forfaits: Starter 25K/mois, Croissance 55K/mois, Premium 100K+/mois.',
                'Ciblez les agences publicitaires: 1 client agence = 10 clients individuels en termes de revenus.'
              ],
              ar: [
                'الوقت المناسب: عندما يكون لديك عمل مستمر يفوق طاقتك وحدك وترفض مشاريع. مش قبل.',
                'المتعاون: أفضل طالب أو مصمم أونلاين. دفع بالمشروع. ادفع لهم 40-50% من المبلغ.',
                'الأدوار: أنت تدير الاستقطاب والعروض الجيدة. هم يديرون التنفيذ.',
                'علامة الأجنسي: اسم، شعار، موقع Carrd.co (30 دقيقة، مجاني)، Instagram احترافي.',
                'الباقات: Starter 25K/شهر، نمو 55K/شهر، Premium 100K+/شهر.',
                'استهدف وكالات الإعلان: زبون أجنسي واحد = 10 زبائن أفراد من حيث الإيرادات.'
              ],
              en: [
                'Right time: when you have constant work exceeding your solo capacity AND you\'re refusing projects. Not before.',
                'Collaborator: your best student or an online designer. Payment per project. Pay them 40-50% of the amount.',
                'Roles: You handle acquisition and quality proposals. They handle execution.',
                'Agency brand: Name, logo, Carrd.co site (30 minutes, free), professional Instagram.',
                'Packages: Starter 25K/month, Growth 55K/month, Premium 100K+/month.',
                'Target advertising agencies: 1 agency client = 10 individual clients in terms of revenue.'
              ]
            },
            method: {
              fr: 'Créez un pitch non sollicité: trouvez une entreprise avec un mauvais design, refaites leur logo + 3 posts gratuitement. Envoyez-leur en disant "Je voulais vous montrer ce qui est possible".',
              ar: 'أنشئ عرضاً غير مطلوب: ابحث عن مشروع بتصميم ضعيف، أعد تصميم شعارهم + 3 منشورات مجاناً. أرسل لهم قائلاً "أردت أن أريك ما هو ممكن".',
              en: 'Create an unsolicited pitch: find a business with poor design, redo their logo + 3 posts for free. Send it saying "I wanted to show you what\'s possible".'
            },
            exercise: {
              fr: 'Identifiez 3 entreprises algériennes avec un design faible. Refaites le design pour l\'une d\'elles: logo + 2 posts. Envoyez un message de prospection.',
              ar: 'حدّد 3 مشاريع جزائرية بتصميم ضعيف. أعد تصميم واحد منهم: شعار + 2 منشور. أرسل رسالة تواصل.',
              en: 'Identify 3 Algerian businesses with weak design. Redesign one of them: logo + 2 posts. Send a prospecting message.'
            },
            tip: {
              fr: '💡 La stratégie la plus rapide: spécialisez-vous dans UN secteur. Les spécialistes facturent toujours plus cher que les généralistes.',
              ar: '💡 أسرع استراتيجية: تخصّص في قطاع واحد. المتخصصون دائماً يشحنون أكثر من العامين.',
              en: '💡 The fastest strategy: specialize in ONE sector. Specialists always charge more than generalists.'
            }
          }
        ]
      }
    ]
  },
  // ===== SKILL 2: SOCIAL MEDIA MANAGEMENT (4 niveaux) =====
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
        goal: { fr: 'Comprendre les algorithmes et créer votre première stratégie de contenu', ar: 'تفهم الخوارزميات وتصنع أول استراتيجية محتوى', en: 'Understand algorithms and create your first content strategy' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un Compte Business Professionnel', ar: 'إعداد حساب Business احترافي', en: 'Set up a Professional Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Instagram: Allez dans votre Profil → les 3 lignes en haut à droite → Paramètres → Compte → "Passer en compte professionnel" → choisissez "Business".',
                'Facebook: Rendez-vous sur facebook.com/pages/create → sélectionnez "Entreprise" → donnez un nom et une catégorie à votre page.',
                'Meta Business Suite: Connectez-vous sur business.facebook.com → connectez votre Page Facebook et votre compte Instagram.',
                'WhatsApp Business: Téléchargez l\'application, utilisez un numéro professionnel et liez-le à votre compte Facebook. Indispensable en Algérie.',
                'Profil 100%: Ajoutez une photo professionnelle, une bio de 80 caractères max, un lien bio (linktr.ee est gratuit) et activez le bouton "Contacter".',
                'Créez un dossier "Contenu Client" sur votre ordinateur avec: Photos, Vidéos, Légendes prêtes à l\'emploi.'
              ],
              ar: [
                'Instagram: روح للبروفيل → 3 خطوط في الأعلى → إعدادات → حساب → "تحويل لحساب محترف" → اختار "Business".',
                'Facebook: روح لـ facebook.com/pages/create → اختار "مشروع" → سمّي صفحتك وحدّد الفئة.',
                'Meta Business Suite: سجل دخول على business.facebook.com → اربط صفحة Facebook وحساب Instagram.',
                'WhatsApp Business: حمّل التطبيق، استخدم رقم احترافي واربطه بحساب Facebook. ضروري في الجزائر.',
                'بروفيل 100%: زيد صورة احترافية، bio 80 حرف كحد أقصى، رابط bio (linktr.ee مجاني) وفعّل زر "تواصل".',
                'أنشئ مجلد "محتوى الزبون" على كمبيوتريك فيه: صور، فيديوهات، تعليقات جاهزة.'
              ],
              en: [
                'Instagram: Go to your Profile → the 3 lines → Settings → Account → "Switch to Professional Account" → choose "Business".',
                'Facebook: Go to facebook.com/pages/create → select "Business" → name your page and choose a category.',
                'Meta Business Suite: Log in to business.facebook.com → connect your Facebook Page and Instagram account.',
                'WhatsApp Business: Download the app, use a professional number and link it to your Facebook account. Essential in Algeria.',
                '100% Profile: Add a professional photo, a bio of 80 characters max, a bio link (linktr.ee is free) and activate the "Contact" button.',
                'Create a "Client Content" folder on your computer with: Photos, Videos, Ready-to-use Captions.'
              ]
            },
            method: {
              fr: 'Créez un compte Instagram test avec une nouvelle adresse email. Appelez-le "DZFoodTest" — ce sera votre bac à sable pour tester toutes vos stratégies.',
              ar: 'أنشئ حساب Instagram تجريبي بإيميل جديد. سمّيه "DZFoodTest" — هذا صندوق الرمل الخاص بك لتجربة كل الاستراتيجيات.',
              en: 'Create a test Instagram account with a new email address. Call it "DZFoodTest" — this will be your sandbox to test all your strategies.'
            },
            exercise: {
              fr: 'Configurez un profil business complet pour un restaurant fictif sur Instagram ET Facebook. Connectez les deux comptes à Meta Business Suite. Capturez d\'écran pour preuve.',
              ar: 'اعدد بروفيل business كامل لمطعم وهمي على Instagram وFacebook. اربط الحسابين بـ Meta Business Suite. خذ لقطة شاشة كدليل.',
              en: 'Set up a complete business profile for a fictional restaurant on Instagram AND Facebook. Connect both accounts to Meta Business Suite. Screenshot as proof.'
            },
            tip: {
              fr: '💡 Utilisez linktr.ee pour créer une page de destination gratuite avec plusieurs boutons: WhatsApp, Facebook, Menu, Localisation. C\'est la solution la plus professionnelle en Algérie.',
              ar: '💡 استخدم linktr.ee باش تصنع صفحة هبوط مجانية بعدة أزرار: WhatsApp، Facebook، القائمة، الموقع. هذا أحسن حل احترافي في الجزائر.',
              en: '💡 Use linktr.ee to create a free landing page with multiple buttons: WhatsApp, Facebook, Menu, Location. This is the most professional solution in Algeria.'
            }
          },
          {
            id: 's-b-2',
            title: { fr: 'Comprendre et Dompter l\'Algorithme Instagram', ar: 'تفهم والسيطرة على خوارزمية Instagram', en: 'Understand and Master the Instagram Algorithm' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'right',
            steps: {
              fr: [
                'L\'algorithme a un seul objectif: garder les gens le plus longtemps possible sur l\'application. Il montre donc le contenu qui génère le plus d\'engagement.',
                'Les 5 signaux les plus importants: 1. SAUVEGARDES (le plus puissant), 2. PARTAGES, 3. COMMENTAIRES de +10 mots, 4. LIKES, 5. TEMPS DE VISIONNAGE.',
                'Pour augmenter les sauvegardes: terminez chaque post éducatif par "Sauvegardez ce post pour le retrouver plus tard".',
                'Pour booster les commentaires: posez une question spécifique en fin de légende. Ex: "Entre tajine et couscous, quel est votre plat préféré ce weekend?"',
                'Analysez vos Insights: chaque post → "Voir les insights" → vous verrez: comptes touchés, impressions, interactions.',
                'Les meilleures heures de publication en Algérie: 12h-13h30, 18h-20h, 21h-23h. Testez ces créneaux.'
              ],
              ar: [
                'الخوارزمية عندها هدف واحد: تخلّي الناس أطول وقت ممكن على التطبيق. لذلك تعرض المحتوى اللي يولد أكبر تفاعل.',
                'أقوى 5 إشارات: 1. الحفظ (الأقوى)، 2. المشاركة، 3. التعليقات +10 كلمات، 4. الإعجابات، 5. وقت المشاهدة.',
                'باش تزيد الحفظ: اختم كل منشور تعليمي بـ "احفظ هذا المنشور باش ترجعله وقت الحاجة".',
                'باش تزيد التعليقات: اطرح سؤال محدد في نهاية التعليق. مثال: "بين الطاجين والكسكس، شنو هو طبقك المفضل هذا الويكند؟"',
                'حلّل Insights: كل منشور → "عرض الإحصائيات" → راح تشوف: الحسابات الموصلة، مرات الظهور، التفاعلات.',
                'أفضل أوقات النشر في الجزائر: 12-13:30، 18-20، 21-23. جرب هالمواعيد.'
              ],
              en: [
                'The algorithm has one goal: keep people on the app as long as possible. So it shows content that generates the most engagement.',
                'The 5 most important signals: 1. SAVES (the strongest), 2. SHARES, 3. COMMENTS of +10 words, 4. LIKES, 5. WATCH TIME.',
                'To increase saves: end every educational post with "Save this post to find it later".',
                'To boost comments: ask a specific question at the end of the caption. Ex: "Between tajine and couscous, what\'s your favorite dish this weekend?"',
                'Analyze your Insights: each post → "View Insights" → you\'ll see: accounts reached, impressions, interactions.',
                'Best posting times in Algeria: 12pm-1:30pm, 6pm-8pm, 9pm-11pm. Test these time slots.'
              ]
            },
            method: {
              fr: 'Pendant 20 minutes, regardez consciemment les Reels. Chaque Reel qui vous retient plus de 5 secondes: mettez en pause. Notez: Quel était l\'accroche? Quelle émotion a été utilisée?',
              ar: 'لمدة 20 دقيقة، شاهد Reels بوعي. كل Reel يبقيك أكثر من 5 ثوانٍ: وقّف. دوّن: شو كانت الجذبة؟ شو المشاعر المستخدمة؟',
              en: 'For 20 minutes, consciously watch Reels. Every Reel that keeps you for more than 5 seconds: pause. Note: What was the hook? What emotion was used?'
            },
            exercise: {
              fr: 'Publiez 3 posts différents sur votre compte test: Post 1 = photo sans CTA. Post 2 = carrousel + "Sauvegardez ce post". Post 3 = photo + question. Comparez les Insights après 48h.',
              ar: 'انشر 3 منشورات مختلفة على حسابك التجريبي: منشور 1 = صورة بدون CTA. منشور 2 = كاروسيل + "احفظ هذا المنشور". منشور 3 = صورة + سؤال. قارن Insights بعد 48 ساعة.',
              en: 'Post 3 different posts on your test account: Post 1 = photo without CTA. Post 2 = carousel + "Save this post". Post 3 = photo + question. Compare Insights after 48h.'
            },
            tip: {
              fr: '💡 Instagram pénalise sévèrement les posts qui contiennent des liens externes dans la LÉGENDE. Dites toujours "lien en bio" ou "lien dans ma bio".',
              ar: '💡 Instagram يعاقب بشدة المنشورات اللي فيها روابط خارجية في التعليق. دائماً قول "الرابط في البروفيل" أو "الرابط في البايو".',
              en: '💡 Instagram severely penalizes posts that contain external links in the CAPTION. Always say "link in bio" or "link in my bio".'
            }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–9', ar: 'الأسابيع 4–9', en: 'Weeks 4–9' },
        goal: { fr: 'Créer des Reels, lancer des pubs et gérer votre premier vrai client', ar: 'إنشاء Reels، إطلاق إعلانات وإدارة أول زبون حقيقي', en: 'Create Reels, run ads and manage your first real client' },
        lessons: [
          {
            id: 's-i-1',
            title: { fr: 'Créer un Reel qui Génère de Vraies Vues', ar: 'إنشاء Reel يحصل على مشاهدات حقيقية', en: 'Create a Reel That Gets Real Views' },
            image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Règle 0.5 seconde: le premier frame doit stopper le scroll. JAMAIS de logo ou d\'écran d\'intro.',
                'Structure: Accroche (0-2s) → Setup (2-8s) → Payoff (8-20s) → CTA (dernières 2s).',
                'Tournage: téléphone VERTICAL (9:16), caméra arrière, regardez l\'objectif pas l\'écran.',
                'CapCut: Nouveau projet → clips → Split pour couper → Texte → Auto Captions.',
                'Audio tendance: onglet Reels → flèche tendance → utilisez cet audio.',
                'Sous-titres obligatoires: 60% regardent sans son. CapCut → Texte → Sous-titres automatiques.'
              ],
              ar: [
                'قاعدة 0.5 ثانية: أول إطار يجب أن يوقف التمرير. أبداً لا شعار أو شاشة مقدمة.',
                'الهيكل: خطّاف (0-2ث) → إعداد (2-8ث) → نتيجة (8-20ث) → CTA (آخر 2ث).',
                'التصوير: هاتف عمودي (9:16)، الكاميرا الخلفية، انظر للعدسة مش الشاشة.',
                'CapCut: مشروع جديد → كليبات → Split للقطع → نص → تعليقات تلقائية.',
                'الصوت الرائج: تبويب Reels → سهم الترند → استخدم هذا الصوت.',
                'الترجمة إلزامية: 60% يشاهدون بدون صوت. CapCut → نص → تعليقات تلقائية.'
              ],
              en: [
                '0.5 second rule: the first frame must stop the scroll. NEVER a logo or intro screen.',
                'Structure: Hook (0-2s) → Setup (2-8s) → Payoff (8-20s) → CTA (last 2s).',
                'Filming: phone VERTICAL (9:16), back camera, look at the lens not the screen.',
                'CapCut: New project → clips → Split to cut → Text → Auto Captions.',
                'Trending audio: Reels tab → trending arrow → use this audio.',
                'Subtitles mandatory: 60% watch without sound. CapCut → Text → Auto Captions.'
              ]
            },
            method: {
              fr: 'Regardez des Reels pendant 20 minutes avec un œil critique. Chaque Reel qui vous retient plus de 5s: mettez pause et notez ce qui vous a accroché.',
              ar: 'شاهد Reels لمدة 20 دقيقة بعين ناقدة. كل Reel يبقيك أكثر من 5ث: وقّف ودوّن ما جذبك.',
              en: 'Watch Reels for 20 minutes with a critical eye. Every Reel that keeps you for more than 5s: pause and note what hooked you.'
            },
            exercise: {
              fr: 'Filmez et éditez 3 Reels différents: 1) Avant/Après, 2) 3 Conseils éducatifs, 3) Coulisses. Publiez-les sur votre compte test.',
              ar: 'صوّر وعدّل 3 Reels مختلفة: 1) قبل/بعد، 2) 3 نصائح تعليمية، 3) كواليس. انشرهم على حسابك التجريبي.',
              en: 'Film and edit 3 different Reels: 1) Before/After, 2) 3 Educational Tips, 3) Behind the Scenes. Post them on your test account.'
            },
            tip: {
              fr: '💡 Publiez votre meilleur Reel à 19h (heure algérienne). Utilisez Meta Business Suite pour programmer à l\'avance.',
              ar: '💡 انشر أفضل Reel لديك الساعة 7 مساءً (توقيت الجزائر). استخدم Meta Business Suite للجدولة مسبقاً.',
              en: '💡 Post your best Reel at 7pm (Algeria time). Use Meta Business Suite to schedule in advance.'
            }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 10–18', ar: 'الأسابيع 10–18', en: 'Weeks 10–18' },
        goal: { fr: 'Développer des stratégies complètes et gérer plusieurs clients', ar: 'تطوير استراتيجيات كاملة وإدارة عدة زبائن', en: 'Develop full strategies and manage multiple clients' },
        lessons: [
          {
            id: 's-a-1',
            title: { fr: 'Document de Stratégie Social Media', ar: 'وثيقة استراتيجية سوشيال ميديا', en: 'Social Media Strategy Document' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Section 1 Audit: followers, taux d\'engagement, top 5 posts analysés, démographie, fréquence de publication.',
                'Section 2 Concurrents: 3-5 concurrents directs. Analysez leurs followers, engagement, contenu, fréquence. Identifiez les GAPS.',
                'Section 3 Persona: profil fictif complet (nom, âge, ville, job, revenus, objectifs, habitudes).',
                'Section 4 Objectifs SMART: Ex: Augmenter l\'engagement de 1.2% à 4.5% en 90 jours.',
                'Section 5 Stratégie 90 jours: plateformes, piliers de contenu, mix de formats, fréquence, hashtags, budget pubs.',
                'Présentez en PDF designé sur Canva. Cela vous positionne comme premium avant même que le client ne voie vos tarifs.'
              ],
              ar: [
                'القسم 1 تدقيق: المتابعون، معدل التفاعل، أفضل 5 منشورات، الديموغرافيا، تكرار النشر.',
                'القسم 2 المنافسون: 3-5 منافسين مباشرين. حلل متابعيهم، تفاعلهم، محتواهم، تكرارهم. حدّد الثغرات.',
                'القسم 3 الشخصية: ملف خيالي كامل (الاسم، العمر، المدينة، العمل، الدخل، الأهداف، العادات).',
                'القسم 4 أهداف SMART: مثال: زيادة التفاعل من 1.2% إلى 4.5% في 90 يوماً.',
                'القسم 5 استراتيجية 90 يوماً: المنصات، ركائز المحتوى، مزيج الصيغ، التكرار، الهاشتاجات، ميزانية الإعلانات.',
                'قدّمها كـ PDF مصمم على Canva. يضعك كخيار premium قبل أن يرى الزبون أسعارك.'
              ],
              en: [
                'Section 1 Audit: followers, engagement rate, top 5 posts analyzed, demographics, posting frequency.',
                'Section 2 Competitors: 3-5 direct competitors. Analyze their followers, engagement, content, frequency. Identify GAPS.',
                'Section 3 Persona: complete fictional profile (name, age, city, job, income, goals, habits).',
                'Section 4 SMART Goals: Example: Increase engagement from 1.2% to 4.5% in 90 days.',
                'Section 5 90-day strategy: platforms, content pillars, format mix, frequency, hashtags, ad budget.',
                'Present as a designed Canva PDF. Positions you as premium before the client even sees your rates.'
              ]
            },
            method: {
              fr: 'Rédigez votre premier document pour une vraie entreprise locale, même si elle ne vous a pas engagé. Envoyez-le comme cadeau gratuit. Le taux de réponse est extrêmement élevé.',
              ar: 'اكتب أول وثيقة لمشروع محلي حقيقي، حتى لو لم يوظّفك. أرسلها كهدية مجانية. معدل الاستجابة مرتفع جداً.',
              en: 'Write your first document for a real local business, even if they haven\'t hired you. Send it as a free gift. The response rate is extremely high.'
            },
            exercise: {
              fr: 'Créez un document complet (8 pages minimum) en PDF Canva pour une entreprise algérienne. Incluez toutes les 5 sections.',
              ar: 'أنشئ وثيقة كاملة (8 صفحات كحد أدنى) PDF Canva لمشروع جزائري. تضمّن الأقسام الخمسة.',
              en: 'Create a complete document (8 pages minimum) as a Canva PDF for an Algerian business. Include all 5 sections.'
            },
            tip: {
              fr: '💡 Ne dites jamais "je pense". Dites "les données montrent". La confiance basée sur les données est ce que les clients paient vraiment.',
              ar: '💡 لا تقل أبداً "أعتقد". قل "البيانات تُظهر". الثقة المبنية على البيانات هي ما يدفع الزبائن حقاً.',
              en: '💡 Never say "I think". Say "the data shows". Data-based confidence is what clients really pay for.'
            }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 5+', ar: 'الشهر 5+', en: 'Month 5+' },
        goal: { fr: 'Construire une agence SMM avec des clients récurrents', ar: 'بناء أجنسي SMM مع زبائن متكررين', en: 'Build an SMM agency with recurring clients' },
        lessons: [
          {
            id: 's-m-1',
            title: { fr: 'Construire une Agence SMM', ar: 'بناء أجنسي SMM', en: 'Build an SMM Agency' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Mindset: un freelance vend son temps. Une agence vend des résultats. Garantissez des métriques spécifiques.',
                'Garantie: définissez quelle métrique vous livrez avec confiance. Continuez gratuitement si vous manquez l\'objectif.',
                'Premier membre: Community Manager 3-4h/jour. Salaire: 15000-25000 DZD/mois. Recrutez dans les groupes Facebook Algérie.',
                'Tarification: Starter 15K/mois, Croissance 35K/mois, Premium 65K+/mois.',
                'Acquisition: Références (10% commission), DMs Instagram froids, partenariats avec designers et développeurs.',
                'Case study: documentez 1 succès client (avant/après). Publiez en carousel Instagram + PDF.'
              ],
              ar: [
                'العقلية: فريلانسر يبيع وقته. أجنسي يبيع النتائج. اضمن مقاييس محددة.',
                'الضمان: حدّد أي مقياس تسلّمه بثقة. استمر مجاناً إذا فاتك الهدف.',
                'أول عضو: مدير مجتمع 3-4 ساعات/يوم. الراتب: 15000-25000 دج/شهر. ابحث في مجموعات Facebook الجزائر.',
                'التسعير: Starter 15K/شهر، نمو 35K/شهر، Premium 65K+/شهر.',
                'الاستقطاب: إحالات (عمولة 10%)، DMs Instagram باردة، شراكات مع مصممين ومطورين.',
                'دراسة حالة: وثّق نجاح زبون واحد (قبل/بعد). انشر كاروسيل Instagram + PDF.'
              ],
              en: [
                'Mindset: a freelancer sells their time. An agency sells results. Guarantee specific metrics.',
                'Guarantee: define what metric you confidently deliver. Continue for free if you miss the target.',
                'First member: Community Manager 3-4h/day. Salary: 15000-25000 DZD/month. Recruit in Algeria Facebook groups.',
                'Pricing: Starter 15K/month, Growth 35K/month, Premium 65K+/month.',
                'Acquisition: Referrals (10% commission), cold Instagram DMs, partnerships with designers and developers.',
                'Case study: document 1 client success (before/after). Publish as an Instagram carousel + PDF.'
              ]
            },
            method: {
              fr: 'Documentez UNE histoire de succès: métriques avant → ce que vous avez fait → métriques 3 mois après. Ce contenu vous apportera plus de clients que n\'importe quel pitch commercial.',
              ar: 'وثّق قصة نجاح واحدة: المقاييس قبل → ما فعلته → المقاييس بعد 3 أشهر. هذا المحتوى يجلب عملاء أكثر من أي عرض بيع.',
              en: 'Document ONE success story: metrics before → what you did → metrics 3 months after. This content will bring you more clients than any sales pitch.'
            },
            exercise: {
              fr: 'Créez un modèle d\'affaires sur 1 page: votre niche, 3 forfaits avec prix, votre garantie, 3 canaux d\'acquisition, objectif de revenus 6 mois.',
              ar: 'أنشئ نموذج عمل في صفحة واحدة: نيشتك، 3 باقات مع أسعار، ضمانك، 3 قنوات استقطاب، هدف الإيرادات 6 أشهر.',
              en: 'Create a business model on 1 page: your niche, 3 packages with prices, your guarantee, 3 acquisition channels, 6-month revenue goal.'
            },
            tip: {
              fr: '💡 Le chemin le plus rapide: 1 client → des résultats exceptionnels → 1 recommandation → répétez. Pas besoin de site web ou de publicité pour commencer.',
              ar: '💡 أسرع طريق: زبون 1 → نتائج استثنائية → إحالة 1 → كرّر. لا تحتاج موقعاً أو إعلانات للبدء.',
              en: '💡 The fastest path: 1 client → exceptional results → 1 referral → repeat. No need for a website or ads to start.'
            }
          }
        ]
      }
    ]
  },
  // ===== SKILL 3: VIDEO EDITING (4 niveaux) =====
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
              fr: [
                'Téléchargez CapCut depuis Google Play ou App Store gratuit sans filigrane.',
                'Ouvrez CapCut → + → sélectionnez vidéos et photos → Ajouter → timeline s\'ouvre.',
                'Timeline: clips = blocs. Tapez clip → sélectionné. Bas: Split Delete Speed.',
                'Couper: faites glisser la ligne blanche vers le moment voulu → Split → Delete partie non voulue.',
                'Musique: Audio → Sons → recherchez → +. Volume → baissez à 30% si vous avez dialogue.',
                'Texte: Texte → Ajouter → tapez → choisissez police couleur → faites glisser pour positionner.',
                'Exporter: flèche haut droite → 1080p et 30fps → exportez.'
              ],
              ar: [
                'حمّل CapCut من Google Play أو App Store مجاني بدون علامة مائية.',
                'افتح CapCut → + → اختار فيديوهات وصور → أضف → الجدول الزمني يفتح.',
                'الجدول الزمني: الكليبات = بلوكات. اضغط كليب → محدد. الأسفل: Split Delete Speed.',
                'القطع: اسحب الخط الأبيض للحظة المطلوبة → Split → احذف الجزء غير المرغوب.',
                'الموسيقى: Audio → أصوات → ابحث → +. Volume → خفّض لـ30% إذا كان لديك حوار.',
                'النص: نص → أضف → اكتب → اختار خط لون → اسحب للتموضع.',
                'التصدير: سهم أعلى يمين → 1080p و30fps → صدّر.'
              ],
              en: [
                'Download CapCut from Google Play or App Store free no watermark.',
                'Open CapCut → + → select videos and photos → Add → timeline opens.',
                'Timeline: clips = blocks. Tap clip → selected. Bottom: Split Delete Speed.',
                'Cut: drag white line to the moment you want → Split → Delete unwanted part.',
                'Music: Audio → Sounds → search → +. Volume → lower to 30% if you have dialogue.',
                'Text: Text → Add → type → choose font color → drag to position.',
                'Export: arrow top right → 1080p and 30fps → export.'
              ]
            },
            method: {
              fr: 'Filmez 10 courts clips de nimporte quoi. Importez dans CapCut. Gardez seulement 3 meilleures secondes de chacun. Ajoutez musique. Exportez. Regardez et notez ce qui semble bizarre.',
              ar: 'صوّر 10 كليبات قصيرة من أي شيء. استورد في CapCut. احتفظ بأحسن 3 ثوانٍ من كل واحد. زيد موسيقى. صدّر. شاهد ولاحظ ما يبدو غريباً.',
              en: 'Film 10 short clips of anything. Import into CapCut. Keep only best 3 seconds of each. Add music. Export. Watch and note what seems off.'
            },
            exercise: {
              fr: 'Vidéo 60 secondes sur votre journée: minimum 8 clips différents, musique de fond, votre nom en texte au début, titre à la fin.',
              ar: 'فيديو 60 ثانية عن يومك: 8 كليبات مختلفة على الأقل، موسيقى خلفية، اسمك كنص في البداية، عنوان في النهاية.',
              en: '60-second video about your day: minimum 8 different clips, background music, your name as text at the start, title at the end.'
            },
            tip: {
              fr: '💡 Erreur la plus commune: clips trop longs. Chaque clip devrait faire 1.5-4 secondes max. Le montage rapide semble toujours plus professionnel.',
              ar: '💡 أكثر خطأ شيوعاً: كليبات طويلة جداً. كل كليب يجب أن يكون 1.5-4 ثوانٍ كحد أقصى. المونتاج السريع يبان دائماً أكثر احترافية.',
              en: '💡 Most common mistake: clips too long. Every clip should be 1.5-4 seconds max. Fast pacing always looks more professional.'
            }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–11', ar: 'الأسابيع 5–11', en: 'Weeks 5–11' },
        goal: { fr: 'Apprendre DaVinci Resolve et se spécialiser dans un type de vidéo', ar: 'تعلم DaVinci Resolve والتخصص في نوع معين من الفيديو', en: 'Learn DaVinci Resolve and specialize in a video type' },
        lessons: [
          {
            id: 'v-i-1',
            title: { fr: 'DaVinci Resolve - L\'Outil Pro Gratuit', ar: 'DaVinci Resolve - الأداة الاحترافية المجانية', en: 'DaVinci Resolve - Professional Free Tool' },
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Téléchargez DaVinci Resolve sur blackmagicdesign.com (version gratuite, PAS Studio payant).',
                'Configuration: Fichier → Paramètres projet → 25fps et 1920x1080.',
                '5 pages: Cut, Edit (utilisez celle-ci), Fusion, Color, Fairlight. Commencez avec Edit + Color.',
                'Pour importer: Fichier → Importer → Importer médias → Media Pool → glissez vers la Timeline.',
                'Pour monter: Lame B = couper, Sélection A = déplacer, Backspace = supprimer.',
                'Pour exporter: page Deliver → choisissez YouTube ou H.264 1080p → Tout rendre.'
              ],
              ar: [
                'حمّل DaVinci Resolve من blackmagicdesign.com (النسخة المجانية، مش Studio المدفوع).',
                'الإعداد: ملف → إعدادات المشروع → 25fps و1920x1080.',
                '5 صفحات: Cut، Edit (استخدم هذه)، Fusion، Color، Fairlight. ابدأ بـ Edit + Color.',
                'للاستيراد: ملف → استيراد → استيراد وسائط → Media Pool → اسحب للجدول الزمني.',
                'للمونتاج: شفرة B = قطع، تحديد A = تحريك، Backspace = حذف.',
                'للتصدير: صفحة Deliver → اختار YouTube أو H.264 1080p → تصيير الكل.'
              ],
              en: [
                'Download DaVinci Resolve from blackmagicdesign.com (free version, NOT Studio paid).',
                'Setup: File → Project Settings → 25fps and 1920x1080.',
                '5 pages: Cut, Edit (use this one), Fusion, Color, Fairlight. Start with Edit + Color.',
                'To import: File → Import → Import Media → Media Pool → drag to Timeline.',
                'To edit: Blade B = cut, Selection A = move, Backspace = delete.',
                'To export: Deliver page → choose YouTube or H.264 1080p → Render All.'
              ]
            },
            method: {
              fr: 'Importez 5 minutes de métrage dans DaVinci Resolve. Votre seule tâche: couper chaque moment sans intérêt. C\'est le principe fondamental du montage.',
              ar: 'استورد 5 دقائق من اللقطات في DaVinci Resolve. مهمتك الوحيدة: اقطع كل لحظة بدون اهتمام. هذا المبدأ الأساسي للمونتاج.',
              en: 'Import 5 minutes of footage into DaVinci Resolve. Your only task: cut out every uninteresting moment. This is the fundamental principle of editing.'
            },
            exercise: {
              fr: 'Montez une vidéo de 3 minutes avec DaVinci Resolve en utilisant des clips gratuits de pexels.com/videos. Incluez coupes propres, musique libre, et correction colorimétrique.',
              ar: 'عدّل فيديو 3 دقائق مع DaVinci Resolve باستخدام لقطات مجانية من pexels.com/videos. تشمل قطعاً نظيفة، موسيقى مجانية، وتصحيح ألوان.',
              en: 'Edit a 3-minute video with DaVinci Resolve using free clips from pexels.com/videos. Include clean cuts, free music, and color correction.'
            },
            tip: {
              fr: '💡 Raccourci pro: I = marquer point IN, O = marquer point OUT, F9 = ajouter automatiquement à la timeline.',
              ar: '💡 اختصار احترافي: I = نقطة البداية، O = نقطة النهاية، F9 = أضف تلقائياً للجدول.',
              en: '💡 Pro shortcut: I = mark IN point, O = mark OUT point, F9 = automatically add to timeline.'
            }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 12–20', ar: 'الأسابيع 12–20', en: 'Weeks 12–20' },
        goal: { fr: 'Maîtriser l\'étalonnage et fixer des tarifs premium', ar: 'إتقان تصحيح الألوان وتحديد أسعار premium', en: 'Master color grading and set premium rates' },
        lessons: [
          {
            id: 'v-a-1',
            title: { fr: 'Maîtriser l\'Étalonnage dans DaVinci Resolve', ar: 'إتقان تصحيح الألوان في DaVinci Resolve', en: 'Master Color Grading in DaVinci Resolve' },
            image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Page Color: graphe de noeuds. Noeud 1 = Correction, Noeud 2 = Grade créatif.',
                '3 oscilloscopes: Waveform (luminosité), Parade (équilibre R G B), Vectorscope (saturation).',
                'Roues primaires: Lift (ombres), Gamma (tons moyens), Gain (hautes lumières).',
                'Outil Qualificateur: pipette → cliquez une couleur → isole UNIQUEMENT cette couleur.',
                'Correspondance: clic droit sur un clip gradé → Capturer image fixe → Appliquer le grade.',
                'LUTs: clic droit sur un noeud → LUTs → appliquez. Réduisez l\'opacité à 30-70%. Jamais 100%.'
              ],
              ar: [
                'صفحة Color: رسم العقد. العقدة 1 = تصحيح، العقدة 2 = Grade إبداعي.',
                '3 أجهزة قياس: Waveform (السطوع)، Parade (توازن R G B)، Vectorscope (التشبع).',
                'العجلات الأساسية: Lift (ظلال)، Gamma (أوساط)، Gain (إضاءات).',
                'أداة المؤهّل: قطّارة → اضغط لون → يعزل هذا اللون فقط.',
                'المطابقة: انقر يمين على كليب مصحّح → التقاط صورة ثابتة → تطبيق الـ Grade.',
                'LUTs: انقر يمين على عقدة → LUTs → طبّق. قلّل الشفافية إلى 30-70%. أبداً 100%.'
              ],
              en: [
                'Color page: node graph. Node 1 = Correction, Node 2 = Creative grade.',
                '3 scopes: Waveform (brightness), Parade (R G B balance), Vectorscope (saturation).',
                'Primary wheels: Lift (shadows), Gamma (midtones), Gain (highlights).',
                'Qualifier tool: eyedropper → click a color → isolates ONLY that color.',
                'Matching: right-click on a graded clip → Grab Still → Apply Grade.',
                'LUTs: right-click on a node → LUTs → apply. Reduce opacity to 30-70%. Never 100%.'
              ]
            },
            method: {
              fr: 'Gradez le même clip de 5 façons différentes: 1) Après-midi dorée, 2) Thriller froid, 3) Film vintage, 4) Action, 5) Romance douce. Exportez les 5 versions.',
              ar: 'صحّح نفس الكليب بـ5 طرق مختلفة: 1) بعد ظهر ذهبي، 2) إثارة باردة، 3) فيلم قديم، 4) أكشن، 5) رومانسية ناعمة. صدّر النسخ الخمس.',
              en: 'Grade the same clip in 5 different ways: 1) Golden afternoon, 2) Cold thriller, 3) Vintage film, 4) Action, 5) Soft romance. Export all 5 versions.'
            },
            exercise: {
              fr: 'Téléchargez 3 clips Pexels (extérieur, portrait, nuit). Gradez les 3 pour qu\'ils paraissent appartenir au même film. Montrez les versions avant/après.',
              ar: 'حمّل 3 كليبات Pexels (خارجي، بورتريه، ليلي). صحّحهم ليبدوا من نفس الفيلم. أظهر النسخ قبل/بعد.',
              en: 'Download 3 Pexels clips (outdoor, portrait, night). Grade them to look like they belong to the same film. Show before/after versions.'
            },
            tip: {
              fr: '💡 Les coloristes utilisent les oscilloscopes, pas leurs yeux. Fixez d\'abord l\'exposition technique. Un grade créatif sur une mauvaise exposition sera toujours mauvais.',
              ar: '💡 مصححو الألوان يستخدمون أجهزة القياس، ليس أعينهم. صحّح الكشف التقني أولاً. Grade إبداعي على كشف سيئ = دائماً سيئ.',
              en: '💡 Colorists use scopes, not their eyes. Fix technical exposure first. A creative grade on wrong exposure will always be bad.'
            }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Produire des publicités commerciales et construire une société de production', ar: 'إنتاج إعلانات تجارية وبناء شركة إنتاج', en: 'Produce commercial videos and build a production company' },
        lessons: [
          {
            id: 'v-m-1',
            title: { fr: 'Produire et Monter une Publicité Commerciale', ar: 'إنتاج ومونتاج إعلان تجاري', en: 'Produce and Edit a Commercial Ad' },
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Structure 30-60s: 0-5s = Problème, 5-20s = Solution, 20-28s = Transformation, 28-30s = CTA.',
                'Pré-production: Brief → Script → Storyboard → Liste des plans → Repérage → Planning tournage.',
                'Sur le plateau: Dirigez le talent. Minimum 3 prises. Variez les angles. Ne partez pas sans tous les plans.',
                'Post-production: Montage image → Sound design → Étalonnage → Graphiques → Révision client → Export.',
                'Voix off: Trouvez un voix off dans les groupes Facebook "voix off algérie" ou enregistrez-vous + Adobe Podcast.',
                'Prix: pub sociale 30s = 40-120K DZD, TV = 150-500K DZD, montage seul = divisez par 3.'
              ],
              ar: [
                'هيكل 30-60ث: 0-5ث = مشكلة، 5-20ث = حل، 20-28ث = تحول، 28-30ث = CTA.',
                'ما قبل الإنتاج: بريف → سكريبت → Storyboard → قائمة اللقطات → استكشاف → جدول تصوير.',
                'في الموقع: وجّه الممثلين. 3 تسجيلات على الأقل. تنويع الزوايا. لا تغادر بدون كل اللقطات.',
                'ما بعد الإنتاج: مونتاج الصورة → تصميم صوتي → تصحيح ألوان → جرافيك → مراجعة الزبون → تصدير.',
                'صوت تعليقي: ابحث في مجموعات Facebook "voix off algérie" أو سجّل بنفسك + Adobe Podcast.',
                'الأسعار: إعلان سوشيال 30ث = 40-120K دج، تلفزيون = 150-500K دج، مونتاج فقط = اقسم على 3.'
              ],
              en: [
                'Structure 30-60s: 0-5s = Problem, 5-20s = Solution, 20-28s = Transformation, 28-30s = CTA.',
                'Pre-production: Brief → Script → Storyboard → Shot list → Location scouting → Shooting schedule.',
                'On set: Direct talent. Minimum 3 takes. Vary angles. Don\'t leave without all shots.',
                'Post-production: Picture edit → Sound design → Color grade → Graphics → Client review → Export.',
                'Voiceover: Find voiceover in Facebook groups "voix off algérie" or record yourself + Adobe Podcast.',
                'Prices: 30s social commercial = 40-120K DZD, TV = 150-500K DZD, editing only = divide by 3.'
              ]
            },
            method: {
              fr: 'Créez votre premier pub de démonstration: choisissez un produit local réel. Écrivez un script de 30s. Filmez. Montez. Publiez sur Instagram en taguant la marque.',
              ar: 'أنشئ أول إعلانك التجريبي: اختر منتجاً محلياً حقيقياً. اكتب سكريبت 30ث. صوّر. عدّل. انشر على Instagram مع وضع علامة للعلامة التجارية.',
              en: 'Create your first spec commercial: choose a real local product. Write a 30s script. Film. Edit. Post on Instagram tagging the brand.'
            },
            exercise: {
              fr: 'Créez un commercial complet de 30s pour un produit algérien (ex: jus Sahara Fresh). Incluez storyboard, tournage, montage, grade vibrant, voix off. Exportez horizontal et vertical.',
              ar: 'أنشئ إعلاناً كاملاً 30ث لمنتج جزائري (مثال: عصير Sahara Fresh). يشمل storyboard، تصوير، مونتاج، Grade نابض، صوت تعليقي. صدّر أفقي وعمودي.',
              en: 'Create a complete 30s commercial for an Algerian product (e.g.: Sahara Fresh juice). Include storyboard, filming, editing, vibrant grade, voiceover. Export horizontal and vertical.'
            },
            tip: {
              fr: '💡 Le monteur qui comprend la stratégie publicitaire gagne 3x plus que celui qui ne connaît que le logiciel.',
              ar: '💡 المحرر الذي يفهم استراتيجية الإعلان يكسب 3 أضعاف من يعرف البرنامج فقط.',
              en: '💡 The editor who understands advertising strategy earns 3x more than one who only knows the software.'
            }
          }
        ]
      }
    ]
  },
  // ===== SKILL 4: WEB DEVELOPMENT (4 niveaux) =====
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
            title: { fr: 'HTML - La structure de base de tout site web', ar: 'HTML - هيكل أساسي لكل موقع ويب', en: 'HTML - The basic structure of every website' },
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'Ouvrez VS Code (ou tout autre éditeur de code) → Fichier → Nouveau fichier → index.html.',
                'Tapez le point d\'exclamation (!) et appuyez sur Tab — cela génère automatiquement la structure HTML de base.',
                'DOCTYPE html déclare que c\'est un document HTML5. <html> est la racine. <head> contient les métadonnées (titre, encodage, etc.).',
                'Le <body> contient tout ce qui s\'affiche sur la page: textes, images, liens, boutons.',
                'Les titres: <h1> à <h6> — <h1> est le plus important, <h6> le moins important. Utilisez <h1> pour le titre principal.',
                'Les paragraphes: <p> pour le texte normal. Les liens: <a href="https://google.com">Google</a> pour créer des liens.',
                'Les images: <img src="photo.jpg" alt="description">. Les div: <div> sont des conteneurs qui permettent de structurer la page.'
              ],
              ar: [
                'افتح VS Code (أو أي محرر كود) → ملف → ملف جديد → index.html.',
                'اكتب علامة التعجب (!) واضغط Tab — هذا يولّد هيكل HTML الأساسي تلقائياً.',
                'DOCTYPE html تصريح بأنها صفحة HTML5. <html> هو الجذر. <head> يحتوي البيانات الوصفية (العنوان، الترميز، الخ.).',
                '<body> يحتوي كل ما يظهر على الصفحة: نصوص، صور، روابط، أزرار.',
                'العناوين: <h1> إلى <h6> — <h1> هو الأهم، <h6> الأقل أهمية. استخدم <h1> للعنوان الرئيسي.',
                'الفقرات: <p> للنص العادي. الروابط: <a href="https://google.com">Google</a> لإنشاء روابط.',
                'الصور: <img src="photo.jpg" alt="وصف">. الـ div: <div> هي حاويات تسمح بتنظيم الصفحة.'
              ],
              en: [
                'Open VS Code (or any code editor) → File → New File → index.html.',
                'Type the exclamation mark (!) and press Tab — this automatically generates the basic HTML structure.',
                'DOCTYPE html declares it\'s an HTML5 document. <html> is the root. <head> contains metadata (title, encoding, etc.).',
                'The <body> contains everything displayed on the page: text, images, links, buttons.',
                'Headings: <h1> to <h6> — <h1> is the most important, <h6> the least. Use <h1> for the main title.',
                'Paragraphs: <p> for normal text. Links: <a href="https://google.com">Google</a> to create links.',
                'Images: <img src="photo.jpg" alt="description">. The div: <div> are containers that structure the page.'
              ]
            },
            method: {
              fr: 'Créez 5 pages HTML différentes: index.html, about.html, contact.html, services.html, blog.html. Ouvrez-les dans le navigateur pour voir la différence.',
              ar: 'أنشئ 5 صفحات HTML مختلفة: index.html، about.html، contact.html، services.html، blog.html. افتحهم في المتصفح لترى الفرق.',
              en: 'Create 5 different HTML pages: index.html, about.html, contact.html, services.html, blog.html. Open them in the browser to see the difference.'
            },
            exercise: {
              fr: 'Créez une page "À propos de moi" complète avec: 1 titre principal (<h1>), 1 sous-titre (<h2>), 1 paragraphe vous présentant, 1 image de vous, et 1 lien vers Google.',
              ar: 'أنشئ صفحة "عني" كاملة بها: عنوان رئيسي (<h1>)، عنوان فرعي (<h2>)، فقرة تعرفك، صورة لك، ورابط إلى Google.',
              en: 'Create a complete "About Me" page with: 1 main heading (<h1>), 1 subheading (<h2>), 1 paragraph introducing yourself, 1 picture of yourself, and 1 link to Google.'
            },
            tip: {
              fr: '💡 Utilisez Emmet pour générer du HTML plus rapidement. Exemple: tapez "div.container>p*3" et appuyez sur Tab — cela génère une div avec une classe "container" et 3 paragraphes.',
              ar: '💡 استخدم Emmet لتوليد HTML أسرع. مثال: اكتب "div.container>p*3" واضغط Tab — هذا يولّد div مع كلاس "container" و3 فقرات.',
              en: '💡 Use Emmet to generate HTML faster. Example: type "div.container>p*3" and press Tab — this generates a div with class "container" and 3 paragraphs.'
            }
          },
          {
            id: 'w-b-2',
            title: { fr: 'CSS - Le style qui rend votre site magnifique', ar: 'CSS - التصميم اللي يخلّي موقعك جميل', en: 'CSS - The style that makes your site beautiful' },
            image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
            layout: 'right',
            steps: {
              fr: [
                'CSS (Cascading Style Sheets) est le langage qui donne du style à votre HTML. Créez un fichier style.css et liez-le à votre HTML avec: <link rel="stylesheet" href="style.css">.',
                'Les sélecteurs: h1 { color: blue; } — cela rend tous les titres <h1> bleus. Vous pouvez sélectionner par balise, classe ou ID.',
                'Les classes: .ma-classe { background: red; } — utilisez class="ma-classe" dans votre HTML pour appliquer le style.',
                'Les propriétés essentielles: color (couleur du texte), background-color (fond), font-size (taille), margin (marge extérieure), padding (marge intérieure), border (bordure).',
                'Le modèle de boîte: margin = espace hors de la boîte, padding = espace à l\'intérieur, border = contour.',
                'Flexbox: display:flex + justify-content + align-items permet de disposer les éléments flexiblement — c\'est LA méthode moderne.'
              ],
              ar: [
                'CSS هو اللغة اللي تعطي ستايل لـ HTML. أنشئ ملف style.css واربطه بـ HTML بـ: <link rel="stylesheet" href="style.css">.',
                'المحددات: h1 { color: blue; } — هذا يخلّي كل عناوين <h1> زرقاء. تقدر تحدد بالوسومة، الكلاس أو الـ ID.',
                'الكلاسات: .ma-classe { background: red; } — استخدم class="ma-classe" في HTML باش تطبق الستايل.',
                'الخصائص الأساسية: color (لون النص)، background-color (الخلفية)، font-size (الحجم)، margin (الهامش الخارجي)، padding (الهامش الداخلي)، border (الحدود).',
                'نموذج المربع: margin = المساحة خارج المربع، padding = المساحة داخل المربع، border = الحدود.',
                'Flexbox: display:flex + justify-content + align-items تخلّيك ترتب العناصر بمرونة — هذي الطريقة العصرية.'
              ],
              en: [
                'CSS (Cascading Style Sheets) is the language that styles your HTML. Create a style.css file and link it to your HTML with: <link rel="stylesheet" href="style.css">.',
                'Selectors: h1 { color: blue; } — this turns all <h1> headings blue. You can select by tag, class or ID.',
                'Classes: .my-class { background: red; } — use class="my-class" in your HTML to apply the style.',
                'Essential properties: color (text color), background-color (background), font-size (size), margin (outer space), padding (inner space), border (outline).',
                'The box model: margin = space outside the box, padding = space inside, border = outline.',
                'Flexbox: display:flex + justify-content + align-items lets you arrange elements flexibly — this is THE modern method.'
              ]
            },
            method: {
              fr: 'Prenez une page HTML simple et appliquez-y 5 styles différents. Expérimentez avec chaque propriété, changez les valeurs, observez le résultat en direct dans votre navigateur avec les DevTools (F12).',
              ar: 'خذ صفحة HTML بسيطة وطبّق عليها 5 ستايلات مختلفة. جرب كل خاصية، غيّر القيم، شاهد النتيجة مباشرة في المتصفح باستخدام أدوات المطور (F12).',
              en: 'Take a simple HTML page and apply 5 different styles to it. Experiment with each property, change values, observe the result live in your browser using DevTools (F12).'
            },
            exercise: {
              fr: 'Stylisez votre page "À propos de moi": titre principal en bleu, fond de page gris clair, texte centré, image arrondie (border-radius: 50%), marges de 20px. Utilisez Flexbox pour centrer le contenu.',
              ar: 'صمّم صفحة "عني": العنوان الرئيسي أزرق، خلفية الصفحة رمادية، النص في المنتصف، صورة مدورة (border-radius: 50%)، هوامش 20px. استخدم Flexbox لتوسيط المحتوى.',
              en: 'Style your "About Me" page: main heading in blue, light gray page background, centered text, rounded image (border-radius: 50%), margins of 20px. Use Flexbox to center the content.'
            },
            tip: {
              fr: '💡 Utilisez les DevTools (F12) de votre navigateur pour expérimenter le CSS en direct. Vous pouvez modifier n\'importe quelle propriété et voir le changement instantanément — puis copier le code dans votre fichier.',
              ar: '💡 استخدم أدوات المطور (F12) في متصفحك لتجربة CSS مباشرة. تقدر تغيّر أي خاصية وتشوف التغيير فوراً — ثم انسخ الكود في ملفك.',
              en: '💡 Use your browser\'s DevTools (F12) to experiment with CSS live. You can modify any property and see the change instantly — then copy the code into your file.'
            }
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
              fr: [
                'JavaScript est le langage qui rend les sites web interactifs. Ouvrez la console du navigateur (F12 → Console) pour tester du code.',
                'Déclarez une variable: let nom = "Ahmed"; — une variable stocke une valeur.',
                'Affichez dans la console: console.log(nom); — cela affiche "Ahmed" dans la console.',
                'Créez une fonction: function bonjour() { alert("Bonjour!"); } — une fonction exécute du code.',
                'Ajoutez un événement: document.getElementById("btn").onclick = function() { alert("Cliqué!"); } — cela exécute la fonction quand on clique sur le bouton.',
                'Le DOM (Document Object Model) permet de manipuler le HTML. Exemple: document.getElementById("titre").style.color = "red"; change la couleur du texte.'
              ],
              ar: [
                'JavaScript هي اللغة اللي تخلّي المواقع تفاعلية. افتح وحدة التحكم في المتصفح (F12 → Console) لتجربة الكود.',
                'صرّح بمتغير: let nom = "Ahmed"; — المتغير يخزّن قيمة.',
                'أظهر في وحدة التحكم: console.log(nom); — هذا يعرض "Ahmed" في وحدة التحكم.',
                'أنشئ دالة: function bonjour() { alert("Bonjour!"); } — الدالة تنفذ كوداً.',
                'أضف حدث: document.getElementById("btn").onclick = function() { alert("تم النقر!"); } — هذا ينفذ الدالة عند النقر على الزر.',
                'DOM يسمح بمعالجة HTML. مثال: document.getElementById("titre").style.color = "red"; يغير لون النص.'
              ],
              en: [
                'JavaScript is the language that makes websites interactive. Open the browser console (F12 → Console) to test code.',
                'Declare a variable: let name = "Ahmed"; — a variable stores a value.',
                'Display in console: console.log(name); — this displays "Ahmed" in the console.',
                'Create a function: function hello() { alert("Hello!"); } — a function executes code.',
                'Add an event: document.getElementById("btn").onclick = function() { alert("Clicked!"); } — this executes the function when the button is clicked.',
                'The DOM (Document Object Model) allows manipulating HTML. Example: document.getElementById("title").style.color = "red"; changes the text color.'
              ]
            },
            method: {
              fr: 'Créez une page HTML avec un bouton qui affiche une alerte "Bonjour!" quand on clique dessus. Puis ajoutez un compteur qui s\'incrémente à chaque clic.',
              ar: 'أنشئ صفحة HTML مع زر يعرض تنبيه "Bonjour!" عند النقر عليه. ثم أضف عداداً يزداد مع كل نقرة.',
              en: 'Create an HTML page with a button that shows an alert "Hello!" when clicked. Then add a counter that increments with each click.'
            },
            exercise: {
              fr: 'Créez un compteur: un bouton "+" qui augmente un nombre affiché à l\'écran, et un bouton "-" qui le diminue. Le nombre doit être affiché dans un élément HTML.',
              ar: 'أنشئ عداداً: زر "+" يزيد رقماً معروضاً على الشاشة، وزر "-" يقلله. يجب عرض الرقم في عنصر HTML.',
              en: 'Create a counter: a "+" button that increases a displayed number, and a "-" button that decreases it. The number must be displayed in an HTML element.'
            },
            tip: {
              fr: '💡 Utilisez console.log() pour déboguer votre code. C\'est la technique la plus simple pour comprendre ce qui se passe dans votre programme.',
              ar: '💡 استخدم console.log() لتصحيح أخطاء الكود. هذه أبسط تقنية لفهم ما يحدث في برنامجك.',
              en: '💡 Use console.log() to debug your code. It\'s the simplest technique to understand what\'s happening in your program.'
            }
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
              fr: [
                'React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Créez un projet: npx create-react-app mon-projet (ou utilisez Vite pour plus de rapidité).',
                'Structure: components (composants), props (propriétés), state (état), hooks (useState, useEffect).',
                'JSX: mélange de HTML et JavaScript. Exemple: <h1>Bonjour {nom}</h1>',
                'Props: passer des données entre composants. Exemple: <User name="Ahmed" age="25" />',
                'State: gérer les données qui changent avec useState. Exemple: const [count, setCount] = useState(0);',
                'Déployez sur Vercel ou Netlify pour partager votre travail en ligne.'
              ],
              ar: [
                'React هي مكتبة JavaScript لبناء واجهات المستخدم. أنشئ مشروعاً: npx create-react-app mon-projet (أو استخدم Vite للسرعة).',
                'الهيكل: المكونات، الخصائص (props)، الحالة (state)، الخطافات (useState، useEffect).',
                'JSX: مزيج من HTML و JavaScript. مثال: <h1>مرحباً {nom}</h1>',
                'الخصائص: تمرير البيانات بين المكونات. مثال: <User name="Ahmed" age="25" />',
                'الحالة: إدارة البيانات المتغيرة مع useState. مثال: const [count, setCount] = useState(0);',
                'انشر على Vercel أو Netlify لمشاركة عملك أونلاين.'
              ],
              en: [
                'React is a JavaScript library for building user interfaces. Create a project: npx create-react-app my-project (or use Vite for speed).',
                'Structure: components, props, state, hooks (useState, useEffect).',
                'JSX: mix of HTML and JavaScript. Example: <h1>Hello {name}</h1>',
                'Props: pass data between components. Example: <User name="Ahmed" age="25" />',
                'State: manage changing data with useState. Example: const [count, setCount] = useState(0);',
                'Deploy to Vercel or Netlify to share your work online.'
              ]
            },
            method: {
              fr: 'Créez un composant React qui affiche "Bonjour, [nom]" en utilisant les props. Puis ajoutez un bouton qui change le nom quand on clique dessus.',
              ar: 'أنشئ مكون React يعرض "Bonjour, [nom]" باستخدام الخصائص. ثم أضف زراً يغير الاسم عند النقر عليه.',
              en: 'Create a React component that displays "Hello, [name]" using props. Then add a button that changes the name when clicked.'
            },
            exercise: {
              fr: 'Créez une todo-list avec React: ajouter des tâches, supprimer des tâches, et marquer les tâches comme complètes. Utilisez useState pour gérer la liste.',
              ar: 'أنشئ قائمة مهام مع React: إضافة مهام، حذف مهام، ووضع علامة مكتمل على المهام. استخدم useState لإدارة القائمة.',
              en: 'Create a todo-list with React: add tasks, delete tasks, and mark tasks as complete. Use useState to manage the list.'
            },
            tip: {
              fr: '💡 Utilisez les hooks (useState, useEffect) pour gérer l\'état et les effets de bord. Ce sont les briques de base de React moderne.',
              ar: '💡 استخدم hooks (useState، useEffect) لإدارة الحالة والتأثيرات الجانبية. هذه هي اللبنات الأساسية لـ React الحديث.',
              en: '💡 Use hooks (useState, useEffect) to manage state and side effects. They are the building blocks of modern React.'
            }
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
              fr: [
                'Architecture: Frontend (React) → Backend (Node.js/Express) → Base de données (MongoDB/PostgreSQL).',
                'Git: versionnez votre code avec git init, git add, git commit, git push.',
                'Méthodologie: Agile / Scrum pour gérer les sprints et les livrables.',
                'Déploiement: Vercel/Netlify pour le frontend, Heroku/Render/AWS pour le backend.',
                'Sécurité: HTTPS, authentification JWT, validation des inputs, CORS.',
                'Tarification: site vitrine 50-200K DZD, site e-commerce 200K-1M DZD.'
              ],
              ar: [
                'الهندسة: الواجهة الأمامية (React) → الخلفية (Node.js/Express) → قاعدة البيانات (MongoDB/PostgreSQL).',
                'Git: تحكم في إصدارات كودك مع git init, git add, git commit, git push.',
                'المنهجية: Agile / Scrum لإدارة الدورات والتسليمات.',
                'النشر: Vercel/Netlify للواجهة الأمامية، Heroku/Render/AWS للخلفية.',
                'الأمان: HTTPS، مصادقة JWT، التحقق من المدخلات، CORS.',
                'التسعير: موقع عرضي 50-200K دج، موقع تجاري 200K-1M دج.'
              ],
              en: [
                'Architecture: Frontend (React) → Backend (Node.js/Express) → Database (MongoDB/PostgreSQL).',
                'Git: version your code with git init, git add, git commit, git push.',
                'Methodology: Agile / Scrum to manage sprints and deliverables.',
                'Deployment: Vercel/Netlify for frontend, Heroku/Render/AWS for backend.',
                'Security: HTTPS, JWT authentication, input validation, CORS.',
                'Pricing: portfolio site 50-200K DZD, e-commerce site 200K-1M DZD.'
              ]
            },
            method: {
              fr: 'Créez un projet complet de A à Z: planification → conception → développement → déploiement. Utilisez Git pour suivre chaque étape.',
              ar: 'أنشئ مشروعاً كاملاً من الصفر: تخطيط → تصميم → تطوير → نشر. استخدم Git لتتبع كل خطوة.',
              en: 'Create a complete project from A to Z: planning → design → development → deployment. Use Git to track each step.'
            },
            exercise: {
              fr: 'Planifiez et estimez un projet web pour un client fictif: cahier des charges, stack technique, timeline, budget, équipe.',
              ar: 'خطط وقدّر مشروع ويب لعميل وهمي: دفتر الشروط، التقنيات، الجدول الزمني، الميزانية، الفريق.',
              en: 'Plan and estimate a web project for a fictional client: specifications, tech stack, timeline, budget, team.'
            },
            tip: {
              fr: '💡 Les clients ne paient pas pour le code, ils paient pour les problèmes résolus. Un projet bien géré avec un code correct est plus important qu\'un projet parfait en retard.',
              ar: '💡 الزبائن لا يدفعون للكود، بل للمشاكل المحلولة. مشروع جيد الإدارة بكود صحيح أهم من مشروع مثالي متأخر.',
              en: '💡 Clients don\'t pay for code, they pay for solved problems. A well-managed project with correct code is more important than a perfect late project.'
            }
          }
        ]
      }
    ]
  },
  // ===== SKILL 5: SEO (4 niveaux) =====
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
            title: { fr: 'Introduction au SEO - Comment Google fonctionne', ar: 'مقدمة في SEO - كيفاش تشتغل Google', en: 'Introduction to SEO - How Google works' },
            image: 'https://images.unsplash.com/photo-1432889821006-ca37c5ce1bfa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                'SEO = Search Engine Optimization. C\'est l\'ensemble des techniques qui permettent à un site web d\'apparaître en haut des résultats de recherche sur Google.',
                'Google utilise plus de 200 facteurs pour classer les sites. Les 3 piliers du SEO: 1. SEO Technique (la structure du site), 2. Contenu (le texte), 3. Backlinks (les liens externes).',
                'Les mots-clés sont ce que les gens tapent dans Google. Exemple: si vous vendez des chaussures, vos mots-clés sont "chaussures", "baskets", "chaussures pas chères".',
                'Le SEO On-Page: tout ce que vous pouvez contrôler sur votre site. Les balises title (le titre dans les résultats Google), meta description (le texte sous le lien), les H1 (titres), et les URL.',
                'Le SEO Off-Page: ce qui se passe en dehors de votre site. Les backlinks (liens d\'autres sites vers le vôtre) sont le facteur le plus important.',
                'Objectif SEO: comprendre ce que recherchent vos clients potentiels et créer du contenu qui répond à leurs questions.'
              ],
              ar: [
                'SEO = تحسين محركات البحث. هو مجموعة التقنيات اللي تخلّي الموقع يظهر في أعلى نتائج البحث على Google.',
                'Google يستخدم أكثر من 200 عامل لترتيب المواقع. 3 ركائز SEO: 1. التقني (هيكل الموقع)، 2. المحتوى (النص)، 3. الروابط الخلفية (الروابط الخارجية).',
                'الكلمات المفتاحية هي اللي يكتبها الناس في Google. مثال: إذا تبيع شوز، كلماتك هي "شوز"، "باسكيت"، "شوز رخيص".',
                'SEO On-Page: كل شيء تقدر تتحكم فيه على موقعك. علامات title (العنوان في نتائج Google)، meta description (النص تحت الرابط)، H1 (العناوين)، والـ URL.',
                'SEO Off-Page: اللي يخرج خارج موقعك. الروابط الخلفية (روابط من مواقع أخرى لموقعك) هي العامل الأهم.',
                'هدف SEO: تفهم شنو يبحث عنه زبائنك المحتملين وتصنع محتوى يجاوب على أسئلتهم.'
              ],
              en: [
                'SEO = Search Engine Optimization. It\'s the set of techniques that help a website appear at the top of Google search results.',
                'Google uses over 200 factors to rank sites. The 3 pillars of SEO: 1. Technical SEO (site structure), 2. Content (text), 3. Backlinks (external links).',
                'Keywords are what people type into Google. Example: if you sell shoes, your keywords are "shoes", "sneakers", "cheap shoes".',
                'On-Page SEO: everything you can control on your site. Title tags (the title in Google results), meta description (the text under the link), H1s (headings), and URLs.',
                'Off-Page SEO: what happens outside your site. Backlinks (links from other sites to yours) are the most important factor.',
                'SEO goal: understand what your potential clients are searching for and create content that answers their questions.'
              ]
            },
            method: {
              fr: 'Faites une recherche Google pour 3 mots-clés qui vous intéressent. Analysez les 10 premiers résultats: titres, descriptions, URL.',
              ar: 'ابحث في Google عن 3 كلمات مفتاحية تهمك. حلّل النتائج العشرة الأولى: العناوين، الأوصاف، الروابط.',
              en: 'Google search for 3 keywords that interest you. Analyze the top 10 results: titles, descriptions, URLs.'
            },
            exercise: {
              fr: 'Listez 20 mots-clés pour une entreprise de votre choix. Classez-les par catégorie: généraux, de niche, locaux (Algérie).',
              ar: 'اكتب 20 كلمة مفتاحية لمشروع من اختيارك. صنّفهم حسب الفئة: عامة، متخصصة، محلية (الجزائر).',
              en: 'List 20 keywords for a business of your choice. Classify them by category: general, niche, local (Algeria).'
            },
            tip: {
              fr: '💡 Utilisez Google Keyword Planner (outil gratuit) pour trouver des mots-clés et voir leur volume de recherche mensuel en Algérie.',
              ar: '💡 استخدم Google Keyword Planner (أداة مجانية) للعثور على كلمات مفتاحية ومعرفة حجم البحث الشهري في الجزائر.',
              en: '💡 Use Google Keyword Planner (free tool) to find keywords and see their monthly search volume in Algeria.'
            }
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
              fr: [
                'Optimisez vos balises title: 50-60 caractères, incluez le mot-clé principal au début.',
                'Meta description: 150-160 caractères, incluez un CTA (ex: "Achetez maintenant").',
                'Structure H1-H6: un seul H1 par page. Les H2, H3 organisent le contenu.',
                'URL: courte, descriptive, avec le mot-clé. Ex: /chaussures-homme-alger.',
                'Contenu: 800+ mots minimum. Utilisez des sous-titres, listes, images.',
                'Liens internes: reliez vos pages entre elles pour distribuer l\'autorité.'
              ],
              ar: [
                'حسّن علامات title: 50-60 حرف، ضمّن الكلمة المفتاحية الرئيسية في البداية.',
                'Meta description: 150-160 حرف، ضمّن دعوة للفعل (مثال: "تسوق الآن").',
                'هيكل H1-H6: H1 واحد فقط لكل صفحة. H2، H3 تنظم المحتوى.',
                'الرابط: قصير، وصفي، مع الكلمة المفتاحية. مثال: /ahzia-rijal-alger.',
                'المحتوى: 800+ كلمة كحد أدنى. استخدم عناوين فرعية، قوائم، صور.',
                'الروابط الداخلية: اربط صفحاتك ببعض لتوزيع السلطة.'
              ],
              en: [
                'Optimize title tags: 50-60 characters, include the main keyword at the start.',
                'Meta description: 150-160 characters, include a CTA (e.g.: "Buy now").',
                'H1-H6 structure: one H1 per page. H2, H3 organize the content.',
                'URL: short, descriptive, with the keyword. Ex: /mens-shoes-algiers.',
                'Content: 800+ words minimum. Use subheadings, lists, images.',
                'Internal links: link your pages together to distribute authority.'
              ]
            },
            method: {
              fr: 'Prenez une page existante de votre site. Optimisez le title, la meta description, les H1-H6, et l\'URL. Ajoutez des liens internes.',
              ar: 'خذ صفحة موجودة على موقعك. حسّن العنوان، الوصف، H1-H6، والرابط. أضف روابط داخلية.',
              en: 'Take an existing page on your site. Optimize the title, meta description, H1-H6, and URL. Add internal links.'
            },
            exercise: {
              fr: 'Rédigez un article de blog SEO optimisé (800+ mots) sur un sujet de votre choix. Incluez le mot-clé principal 3-4 fois, des sous-titres, et des liens internes.',
              ar: 'اكتب مقالة مدونة محسّنة لـ SEO (800+ كلمة) حول موضوع من اختيارك. ضمّن الكلمة المفتاحية 3-4 مرات، عناوين فرعية، وروابط داخلية.',
              en: 'Write an SEO-optimized blog post (800+ words) on a topic of your choice. Include the main keyword 3-4 times, subheadings, and internal links.'
            },
            tip: {
              fr: '💡 Utilisez Yoast SEO (WordPress) ou Rank Math pour analyser votre optimisation On-Page. Ils vous donnent des conseils concrets pour vous améliorer.',
              ar: '💡 استخدم Yoast SEO (WordPress) أو Rank Math لتحليل تحسين On-Page الخاص بك. يقدمان نصائح ملموسة للتحسين.',
              en: '💡 Use Yoast SEO (WordPress) or Rank Math to analyze your On-Page optimization. They give concrete advice to improve.'
            }
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
              fr: [
                'Les backlinks sont le facteur de classement numéro 1 pour Google.',
                'Qualité > quantité: un lien d\'un site autoritaire (ex: journal) vaut plus que 100 liens de sites faibles.',
                'Techniques: guest blogging (écrire sur d\'autres blogs), broken link building (remplacer des liens cassés), annuaires de qualité.',
                'Analysez vos concurrents: utilisez Ahrefs ou SEMrush pour voir leurs backlinks.',
                'Créez du contenu "linkable": guides, études de cas, infographies, outils gratuits.',
                'Évitez les techniques black hat: achat de liens, PBN, spam de commentaires.'
              ],
              ar: [
                'الروابط الخلفية هي عامل الترتيب رقم 1 لـ Google.',
                'الجودة > الكمية: رابط واحد من موقع قوي (مثال: جريدة) يساوي أكثر من 100 رابط من مواقع ضعيفة.',
                'التقنيات: guest blogging (الكتابة على مدونات أخرى)، broken link building (استبدال روابط مكسورة)، أدلة جيدة.',
                'حلّل منافسيك: استخدم Ahrefs أو SEMrush لمشاهدة روابطهم الخلفية.',
                'أنشئ محتوى "linkable": أدلة، دراسات حالة، إنفوغرافيك، أدوات مجانية.',
                'تجنّب تقنيات black hat: شراء روابط، PBN، تعليقات سبام.'
              ],
              en: [
                'Backlinks are Google\'s #1 ranking factor.',
                'Quality > quantity: one link from an authoritative site (e.g.: a newspaper) is worth more than 100 links from weak sites.',
                'Techniques: guest blogging, broken link building, quality directories.',
                'Analyze your competitors: use Ahrefs or SEMrush to see their backlinks.',
                'Create "linkable" content: guides, case studies, infographics, free tools.',
                'Avoid black hat techniques: buying links, PBN, comment spam.'
              ]
            },
            method: {
              fr: 'Créez une stratégie de backlinks pour un site dans une niche de votre choix. Identifiez 20 sites cibles et 5 types de contenu "linkable".',
              ar: 'أنشئ استراتيجية روابط خلفية لموقع في مجال من اختيارك. حدد 20 موقعاً مستهدفاً و5 أنواع من المحتوى "linkable".',
              en: 'Create a backlink strategy for a site in a niche of your choice. Identify 20 target sites and 5 types of "linkable" content.'
            },
            exercise: {
              fr: 'Identifiez 20 sites où vous pourriez obtenir un backlink. Rédigez un pitch personnalisé pour chacun (2-3 phrases).',
              ar: 'حدّد 20 موقعاً يمكنك الحصول على رابط خلفي منه. اكتب عرضاً مخصصاً لكل واحد (2-3 جمل).',
              en: 'Identify 20 sites where you could get a backlink. Write a personalized pitch for each (2-3 sentences).'
            },
            tip: {
              fr: '💡 Les backlinks locaux (blogs algériens, annuaires DZ) sont très puissants pour le référencement local. Commencez par eux, ils sont plus faciles à obtenir.',
              ar: '💡 الروابط الخلفية المحلية (المدونات الجزائرية، الأدلة الجزائرية) قوية جداً للـ SEO المحلي. ابدأ بها، فهي أسهل في الحصول عليها.',
              en: '💡 Local backlinks (Algerian blogs, DZ directories) are very powerful for local SEO. Start with them, they\'re easier to get.'
            }
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
              fr: [
                'Audit SEO complet: technique, contenu, backlinks, concurrence.',
                'Rapport d\'audit: PDF professionnel avec recommandations détaillées.',
                'Stratégie 6 mois: objectifs SMART, budget, plan d\'action mensuel.',
                'Suivi des KPIs: positions Google, trafic organique, taux de conversion.',
                'Outils: Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog.',
                'Tarification: audit 30-80K DZD, forfait mensuel 50-200K DZD selon la taille du site.'
              ],
              ar: [
                'تدقيق SEO كامل: تقني، محتوى، روابط خلفية، منافسة.',
                'تقرير التدقيق: PDF احترافي مع توصيات مفصلة.',
                'استراتيجية 6 أشهر: أهداف SMART، ميزانية، خطة عمل شهرية.',
                'متابعة مؤشرات الأداء: مراكز Google، الزيارات العضوية، معدل التحويل.',
                'الأدوات: Google Search Console، Google Analytics، Ahrefs، SEMrush، Screaming Frog.',
                'التسعير: تدقيق 30-80K دج، باقة شهرية 50-200K دج حسب حجم الموقع.'
              ],
              en: [
                'Complete SEO audit: technical, content, backlinks, competition.',
                'Audit report: professional PDF with detailed recommendations.',
                '6-month strategy: SMART goals, budget, monthly action plan.',
                'KPI tracking: Google positions, organic traffic, conversion rate.',
                'Tools: Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog.',
                'Pricing: audit 30-80K DZD, monthly package 50-200K DZD depending on site size.'
              ]
            },
            method: {
              fr: 'Réalisez un audit SEO complet pour un site de votre choix (ou un site fictif). Présentez-le sous forme de rapport PDF professionnel.',
              ar: 'قم بتدقيق SEO كامل لموقع من اختيارك (أو موقع وهمي). قدمه كتقرير PDF احترافي.',
              en: 'Perform a complete SEO audit for a site of your choice (or a fictional site). Present it as a professional PDF report.'
            },
            exercise: {
              fr: 'Créez votre offre de services SEO: audit, forfaits mensuels, garanties, cas clients. Préparez une présentation commerciale.',
              ar: 'أنشئ عرض الخدمات SEO الخاص بك: تدقيق، باقات شهرية، ضمانات، حالات عملاء. جهز عرضاً تجارياً.',
              en: 'Create your SEO service offering: audit, monthly packages, guarantees, case studies. Prepare a sales presentation.'
            },
            tip: {
              fr: '💡 Les clients paient pour des résultats, pas pour du travail. Garantissez des positions ou un trafic spécifique. Si vous les obtenez, vous avez des clients à vie.',
              ar: '💡 الزبائن يدفعون للنتائج، مش للشغل. اضمن مراكز محددة أو زيارة محددة. إذا حققتها، لديك زبائن مدى الحياة.',
              en: '💡 Clients pay for results, not for work. Guarantee specific positions or traffic. If you deliver, you have clients for life.'
            }
          }
        ]
      }
    ]
  },
  // ===== SKILL 6: DATA ANALYSIS (4 niveaux) =====
  // ===== SKILL 7: COPYWRITING (4 niveaux) =====
  // ===== SKILL 8: UI/UX DESIGN (4 niveaux) =====
  // ===== SKILL 9: AUTOMATION WITH N8N (4 niveaux) =====
  // ===== SKILL 10: VIBE CODING (4 niveaux) =====
];