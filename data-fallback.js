// ============================================================
// DATA.JS - 10 SKILLS COMPLETS AVEC CHAR7 DÉTAILLÉ
// ============================================================

// NOTE: this CODES array is no longer used for access checks — that now
// goes through Supabase (see supabase-schema.sql / app.js checkAccess()).
// Kept here only as a historical reference of the original seed codes.
var CODES = ['DSA2026','STUDENT01','VIP2026','DZSKILL2025','ATLAS-PRO','LEARN-DZ-01','LEARN-DZ-02','LEARN-DZ-03','ACADEMY-VIP','FORMATION01','FORMATION02'];

var LS = {
  Beginner: { bg: '#052E16', border: '#16A34A', text: '#4ADE80', badge: '🌱' },
  Intermediate: { bg: '#1E3A5F', border: '#2563EB', text: '#60A5FA', badge: '⚡' },
  Advanced: { bg: '#450A0A', border: '#DC2626', text: '#F87171', badge: '🔥' },
  Master: { bg: '#431407', border: '#EA580C', text: '#FB923C', badge: '👑' }
};

var T = {
  fr: {
    badge: 'Formation Complète — 11 Skills',
    title: 'Maîtrisez les Compétences\nDigitales qui Paient en Algérie',
    subtitle: '11 formations complètes. Graphisme, Social Media, Vidéo, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding, IA.',
    f1: '✓ Méthodes étape par étape', f2: '✓ Exercices réels', f3: '✓ Outils gratuits', f4: '✓ Tarifs marché algérien',
    includesTitle: 'Ce que vous obtenez',
    includes: ['11 formations complètes — Beginner → Master','Chaque leçon: méthode exacte étape par étape','Exercices pratiques avec livrables concrets','Outils gratuits','Prix du marché algérien en DZD','Scripts de communication client','Accès à vie — mises à jour incluses'],
    already: 'Vous avez déjà acheté?', enter: 'Entrez votre code d\'accès pour commencer.', code: 'VOTRE CODE D\'ACCÈS...',
    access: 'Accéder à la Formation →', loading: 'Vérification...', notBought: 'Pas encore acheté?', whatsapp: '💬 Commander via WhatsApp',
    errEmpty: 'Entrez votre code d\'accès.', errInvalid: 'Code invalide. Vérifiez votre achat.', errUsed: 'Ce code a déjà été utilisé.',
    stats: [{ n: '50+', l: 'Leçons détaillées' }, { n: '4', l: 'Niveaux par skill' }, { n: '0 DZD', l: 'Pour commencer' }],
    footer: 'DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algérie', aTitle: 'Apprenez. Pratiquez.\nSoyez Payé.',
    aSubtitle: '11 skills, du débutant au maître. Chaque leçon vous dit exactement comment faire.',
    aFeatures: ['Méthodes étape par étape','Exercices réels','Outils gratuits','Tarifs marché algérien'],
    aRec: '💡 Ordre recommandé: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding → IA',
    startLearning: 'Commencer →', firstClient: 'Premier client', earning: 'Revenus', startWith: 'Commencer avec',
    backSkills: '← Skills', goal: 'Objectif', lessons: 'leçons', back: '← Retour', lesson: 'Leçon', of: 'sur',
    howTo: 'Comment Faire — Étape par Étape', bestWay: 'La Meilleure Façon d\'Apprendre', exercise: 'Votre Exercice Pratique',
    prevLesson: '← Leçon Précédente', nextLesson: 'Leçon Suivante →', nextLevel: 'Niveau Suivant', complete: '👑 Formation Terminée!',
    dash: { navLabel: 'Suivi', title: 'Mon Tableau de Bord', subtitle: 'Suivez votre progression sur les 11 compétences', overallTitle: 'Progression Globale', lessonsCompleted: 'leçons terminées', continueLearning: 'Continuer l\'apprentissage →', allComplete: '👑 Toutes les leçons terminées !', lessonsLabel: 'leçons', empty: 'Commencez une leçon pour voir votre progression ici.' }
  },
  ar: {
    badge: 'تكوين كامل — 10 مهارات',
    title: 'تعلم المهارات الرقمية\nاللي تدر فلوس في الجزائر',
    subtitle: '11 تكوينات كاملة. تصميم، سوشيال ميديا، مونتاج، ويب، SEO، بيانات، كتابة، UI/UX، أتمتة، برمجة بالذكاء الاصطناعي، ذكاء اصطناعي.',
    f1: '✓ خطوات واضحة وعملية', f2: '✓ تمارين حقيقية', f3: '✓ أدوات مجانية', f4: '✓ أسعار السوق الجزائري',
    includesTitle: 'شنو راه فيه',
    includes: ['11 تكوينات كاملة — مبتدئ → محترف','كل درس: الطريقة الصحيحة خطوة بخطوة','تمارين عملية مع نتائج حقيقية','أدوات مجانية','أسعار السوق الجزائري بالدينار','نصوص التواصل مع الزبائن','وصول مدى الحياة — التحديثات مشمولة'],
    already: 'راك شريت من قبل؟', enter: 'دخل رمز الدخول ديالك باش تبدا.', code: 'رمز الدخول...',
    access: 'ادخل للتكوين →', loading: 'كاين التحقق...', notBought: 'مازلتش شريت؟', whatsapp: '💬 اطلب عبر واتساب',
    errEmpty: 'دخل رمز الدخول.', errInvalid: 'الرمز غلط. راجع الشراء.', errUsed: 'هذا الرمز تستخدم من قبل.',
    stats: [{ n: '+50', l: 'درس مفصل' }, { n: '4', l: 'مستويات لكل مهارة' }, { n: '0 دج', l: 'باش تبدا' }],
    footer: 'DigitalSkills.dz — تكوين محترف الجزائر 🇩🇿',
    aBadge: '🇩🇿 أكاديمية المهارات الرقمية — الجزائر', aTitle: 'تعلم. تمرن.\nتربح.',
    aSubtitle: '10 مهارات، من الصفر للاحتراف. كل درس يقولك بالضبط كيفاش تدير.',
    aFeatures: ['خطوات واضحة وعملية','تمارين حقيقية','أدوات مجانية','أسعار السوق الجزائري'],
    aRec: '💡 الترتيب المنصوح: سوشيال ميديا → تصميم → مونتاج → ويب → SEO → بيانات → كتابة → UI/UX → أتمتة → برمجة بالذكاء الاصطناعي → الذكاء الاصطناعي',
    startLearning: 'ابدا التعلم →', firstClient: 'أول زبون', earning: 'الأرباح', startWith: 'ابدا بـ',
    backSkills: 'المهارات →', goal: 'الهدف', lessons: 'دروس', back: 'رجع →', lesson: 'الدرس', of: 'من',
    howTo: 'كيفاش تدير — خطوة بخطوة', bestWay: 'أحسن طريقة باش تتعلم', exercise: 'تمرينك العملي',
    prevLesson: 'الدرس السابق →', nextLesson: '← الدرس الموالي', nextLevel: 'المستوى الموالي', complete: '👑 كملت التكوين!',
    dash: { navLabel: 'التقدم', title: 'لوحة التحكم ديالي', subtitle: 'تابع تقدمك في 11 مهارة', overallTitle: 'التقدم الإجمالي', lessonsCompleted: 'درس مكتمل', continueLearning: '← تابع التعلم', allComplete: '👑 كملت كل الدروس!', lessonsLabel: 'دروس', empty: 'ابدأ درساً باش تشوف تقدمك هنا.' }
  },
  en: {
    badge: 'Complete Course — 11 Skills',
    title: 'Master Digital Skills That\nGenerate Income in Algeria',
    subtitle: '11 complete courses. Design, Social Media, Video, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding, AI.',
    f1: '✓ Step-by-step methods', f2: '✓ Real exercises', f3: '✓ Free tools only', f4: '✓ Algerian market rates',
    includesTitle: 'What you get',
    includes: ['11 complete courses — Beginner → Master','Every lesson: exact step-by-step method','Practical exercises with real deliverables','Free tools','Algerian market rates in DZD','Client communication scripts','Lifetime access — updates included'],
    already: 'Already purchased?', enter: 'Enter your access code to get started.', code: 'YOUR ACCESS CODE...',
    access: 'Access the Course →', loading: 'Verifying...', notBought: 'Haven\'t bought yet?', whatsapp: '💬 Order via WhatsApp',
    errEmpty: 'Please enter your access code.', errInvalid: 'Invalid code. Check your purchase.', errUsed: 'This code has already been used.',
    stats: [{ n: '50+', l: 'Detailed lessons' }, { n: '4', l: 'Levels per skill' }, { n: '0 DZD', l: 'To get started' }],
    footer: 'DigitalSkills.dz — Professional Training Algeria 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algeria', aTitle: 'Learn It. Practice It.\nGet Paid.',
    aSubtitle: '11 skills, beginner to master. Every lesson tells you exactly how to do it.',
    aFeatures: ['Step-by-step methods','Real exercises','Free tools only','Algerian market rates'],
    aRec: '💡 Recommended: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding → AI',
    startLearning: 'Start Learning →', firstClient: 'First client', earning: 'Earning range', startWith: 'Start with',
    backSkills: '← Skills', goal: 'Goal', lessons: 'lessons', back: '← Back', lesson: 'Lesson', of: 'of',
    howTo: 'How To Do It — Step by Step', bestWay: 'The Best Way to Learn This', exercise: 'Your Practice Exercise',
    prevLesson: '← Previous Lesson', nextLesson: 'Next Lesson →', nextLevel: 'Next Level', complete: '👑 Track Complete!',
    dash: { navLabel: 'Progress', title: 'My Dashboard', subtitle: 'Track your progress across the 11 skills', overallTitle: 'Overall Progress', lessonsCompleted: 'lessons completed', continueLearning: 'Continue Learning →', allComplete: '👑 All lessons complete!', lessonsLabel: 'lessons', empty: 'Start a lesson to see your progress here.' }
  }
};

// ============================================================
// SKILLS (10 SKILLS COMPLETS)
// ============================================================
var SKILLS = [
  // ============================================================
  // SKILL 1: GRAPHIC DESIGN (COMPLET)
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
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Apprendre les bases de Canva et les 4 règles du design', ar: 'تعلم أساسيات Canva وقواعد التصميم الأربعة', en: 'Learn Canva basics and the 4 design rules' },
        lessons: [
          {
            id: 'd-b-1',
            title: { fr: 'Installer et utiliser Canva comme un pro', ar: 'تنصيب واستخدام Canva كمحترف', en: 'Install and use Canva like a pro' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Rendez-vous sur canva.com ou téléchargez l\'application depuis Google Play ou App Store — c\'est totalement gratuit.','Cliquez sur "S\'inscrire" et créez un compte avec votre email ou directement via Google, ça prend 30 secondes.','Une fois connecté, cliquez sur "Créer un design" en haut à droite du tableau de bord.','Choisissez "Post Instagram Carré" — vous aurez un canvas vierge de 1080x1080 pixels, parfait pour commencer.','À gauche, vous avez le panneau principal: Templates (des milliers de modèles), Éléments (formes, icônes), Texte, Arrière-plan, et vos Téléchargements.','En haut, la barre d\'outils vous permet de modifier la police, la taille, la couleur et la position de vos éléments.','Utilisez Ctrl+Z pour annuler une action et Ctrl+D pour dupliquer un élément — ces raccourcis vous feront gagner un temps fou.','Pour exporter: cliquez sur "Partager" en haut à droite → "Télécharger" → choisissez PNG (pour les réseaux sociaux) ou PDF (pour l\'impression).'],
              ar: ['روح لـ canva.com أو حمّل التطبيق من Google Play أو App Store — مجاني تماماً.','اضغط على "سجّل" وأنشئ حساب بإيميلك أو عبر Google، ياخذ 30 ثانية فقط.','بعد الدخول، اضغط على "إنشاء تصميم" في أعلى يمين لوحة التحكم.','اختار "منشور Instagram مربع" — راح يكون عندك مساحة فارغة 1080x1080 بكسل، مثالية للبداية.','على اليسار عندك اللوحة الرئيسية: قوالب (آلاف النماذج)، عناصر (أشكال وأيقونات)، نص، خلفية، وملفاتك المحمّلة.','في الأعلى، شريط الأدوات يسمح لك بتغيير الخط، الحجم، اللون وموضع العناصر.','استخدم Ctrl+Z للتراجع و Ctrl+D للنسخ — هالاختصارات توفر وقتك بزاف.','للتصدير: اضغط على "مشاركة" → "تحميل" → اختار PNG (للتواصل الاجتماعي) أو PDF (للطباعة).'],
              en: ['Go to canva.com or download the app from Google Play or App Store — it\'s completely free.','Click "Sign Up" and create an account with your email or via Google, it takes 30 seconds.','Once logged in, click "Create a design" at the top right of the dashboard.','Choose "Instagram Post Square" — you\'ll have a blank 1080x1080px canvas, perfect to start.','On the left, you have the main panel: Templates (thousands of models), Elements (shapes, icons), Text, Background, and your Uploads.','At the top, the toolbar lets you change font, size, color and position of your elements.','Use Ctrl+Z to undo and Ctrl+D to duplicate — these shortcuts will save you a lot of time.','To export: click "Share" → "Download" → choose PNG (for social media) or PDF (for printing).']
            },
            method: { fr: 'Ouvrez Canva maintenant et passez 20 minutes à cliquer sur chaque bouton. Ne concevez rien — explorez juste.', ar: 'افتح Canva الآن واقضِ 20 دقيقة تضغط على كل زر. ما تصمّمش شيء — بس استكشف.', en: 'Open Canva now and spend 20 minutes clicking every button. Do not design anything — just explore.' },
            exercise: { fr: 'Créez un post Instagram avec votre nom en grand texte gras et un fond coloré. Téléchargez-le.', ar: 'أنشئ منشور Instagram باسمك بخط كبير وعريض وخلفية ملونة. حمّله.', en: 'Create an Instagram post with your name in big bold text and a colored background. Download it.' },
            tip: { fr: '💡 Canva Gratuit vous donne accès à plus de 250 000 templates. Ne passez pas à la version Pro avant d\'avoir vos premiers clients payants.', ar: '💡 Canva المجاني يعطيك أكثر من 250,000 قالب. ما تنتقلش للـ Pro قبل ما تجيك أول زبون.', en: '💡 Canva Free gives you access to over 250,000 templates. Don\'t upgrade to Pro until you have your first paying clients.' }
          },
          {
            id: 'd-b-2',
            title: { fr: 'Les 4 Règles d\'Or du Design (CARP)', ar: 'قواعد التصميم الأربعة الذهبية (CARP)', en: 'The 4 Golden Rules of Design (CARP)' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['CONTRASTE: Rendez l\'élément le plus important plus grand, plus coloré ou plus différent du reste.','ALIGNEMENT: Rien ne doit être placé au hasard. Activez les guides pour aligner parfaitement vos éléments.','RÉPÉTITION: Utilisez la même police, les mêmes couleurs et le même style pour les éléments similaires.','PROXIMITÉ: Groupez les éléments qui vont ensemble et séparez ceux qui n\'ont pas de lien.','Astuce pro: Ouvrez n\'importe quel template Canva et identifiez ces 4 règles dans chaque élément.','Exercice: Cherchez "flyer restaurant algerie" sur Google. Identifiez les règles respectées et brisées.'],
              ar: ['التباين: خلّي العنصر الأهم أكبر، أو أكثر لوناً، أو مختلفاً عن الباقي.','المحاذاة: ما كاين والو موضوع بالعشوائية. فعّل الخطوط باش تراصف عناصرك بالضبط.','التكرار: استخدم نفس الخط، نفس الألوان ونفس الستايل للعناصر المتشابهة.','القرب: جمّع العناصر اللي تمشي مع بعض وفرّق اللي ما عندهمش رابط.','نصيحة: افتح أي قالب Canva وحدّد هالقواعد الأربعة في كل عنصر.','تمرين: دور على "flyer مطعم الجزائر" في Google. حدّد القواعد المطبقة والمكسورة.'],
              en: ['CONTRAST: Make the most important element bigger, more colorful, or different from the rest.','ALIGNMENT: Nothing should be placed randomly. Enable guides to align your elements perfectly.','REPETITION: Use the same font, colors and style for similar elements.','PROXIMITY: Group elements that belong together and separate those that don\'t.','Pro tip: Open any Canva template and identify these 4 rules in every element.','Exercise: Search "flyer restaurant algeria" on Google. Identify rules followed and broken.']
            },
            method: { fr: 'Créez deux versions d\'un même design: une où vous violez les 4 règles, et une où vous les respectez parfaitement.', ar: 'أنشئ نسختين من نفس التصميم: وحدة تكسر فيها القواعد الأربعة، ووحدة تتبعها بالضبط.', en: 'Create two versions of the same design: one where you break all 4 rules, and one where you follow them perfectly.' },
            exercise: { fr: 'Designez une carte de visite pour un restaurant algérien DEUX fois: Version 1 = violez les 4 règles. Version 2 = respectez-les parfaitement.', ar: 'صمّم بطاقة أعمال لمطعم جزائري مرتين: نسخة 1 = اكسر القواعد الأربعة. نسخة 2 = اتبعها بالضبط.', en: 'Design a business card for an Algerian restaurant TWICE: Version 1 = violate all 4 rules. Version 2 = follow them perfectly.' },
            tip: { fr: '💡 Les designers professionnels ne brisent les règles qu\'APRÈS les avoir parfaitement maîtrisées.', ar: '💡 المصممون المحترفين ما يكسرونش القواعد إلا بعد ما يتقنوها بالكامل.', en: '💡 Professional designers only break rules AFTER perfectly mastering them.' }
          },
          {
            id: 'd-b-3',
            title: { fr: 'Typographie et Hiérarchie Visuelle', ar: 'الطباعة والتسلسل البصري', en: 'Typography and Visual Hierarchy' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Une police se divise en 2 grandes familles: Serif (avec empattements, ex: Times) qui inspire confiance/tradition, et Sans-serif (sans empattements, ex: Helvetica) qui inspire modernité/clarté.','Ne mélangez jamais plus de 2 polices dans un même design: une pour les titres (display), une pour le texte courant (lisible).','La hiérarchie visuelle guide l\'oeil: le titre doit être 2 à 3 fois plus grand que le texte, en gras, avec une couleur ou un espace qui le distingue.','L\'interlignage (line-height) idéal pour un texte lisible est de 1.4 à 1.6 fois la taille de la police — trop serré fatigue l\'oeil, trop large casse le lien visuel.','Ne justifiez jamais le texte en petites tailles (ça crée des espaces blancs irréguliers) — préférez l\'alignement à gauche.','Sur Canva: testez toujours "Combinaisons de polices" plutôt que de choisir au hasard — Canva propose déjà des paires qui fonctionnent.'],
              ar: ['الخط ينقسم لـ 2 عائلات كبار: Serif (بحواف زخرفية، مثل Times) يعطي ثقة وتقليد، و Sans-serif (بلا حواف، مثل Helvetica) يعطي حداثة ووضوح.','ما تخلطش أكثر من خطين ف نفس التصميم: واحد للعناوين (display)، وواحد للنص العادي (يقرا بسهولة).','التسلسل البصري يوجه العين: العنوان خاصو يكون أكبر بمرتين-3 مرات من النص، بخط عريض، بلون أو مسافة تميزو.','المسافة بين الأسطر (line-height) المثالية للنص المقروء هي 1.4 إلى 1.6 مرة حجم الخط — قريب بزاف يتعب العين، بعيد بزاف يكسر الرابط البصري.','ما تسويش النص (justify) ف الأحجام الصغيرة (يخلق مسافات بيضاء غير منتظمة) — فضّل المحاذاة لليسار.','ف Canva: جرب دايماً "Combinaisons de polices" بدل ما تختار عشوائياً — Canva عندها أزواج جاهزة تخدم.'],
              en: ['A font falls into 2 main families: Serif (with small strokes, e.g. Times) which feels trustworthy/traditional, and Sans-serif (no strokes, e.g. Helvetica) which feels modern/clean.','Never mix more than 2 fonts in one design: one for headings (display), one for body text (readable).','Visual hierarchy guides the eye: the heading should be 2-3x bigger than body text, bold, with a color or spacing that sets it apart.','Ideal line-height for readable text is 1.4 to 1.6 times the font size — too tight tires the eye, too loose breaks the visual connection.','Never justify text at small sizes (creates uneven white gaps) — prefer left alignment.','On Canva: always try "Font Combinations" instead of picking randomly — Canva already suggests pairs that work.']
            },
            method: { fr: 'Prenez un même texte et essayez-le avec 3 combinaisons de polices différentes, puis demandez à un ami laquelle est la plus lisible.', ar: 'خد نفس النص وجربو ب3 تركيبات خطوط مختلفة، وسأل صاحبك أيهم أوضح.', en: 'Take the same text and try it with 3 different font pairings, then ask a friend which is most readable.' },
            exercise: { fr: 'Créez une affiche simple avec un titre et un sous-titre pour un événement (mariage, ouverture de commerce), en appliquant les règles de hiérarchie.', ar: 'أنشئ ملصق بسيط بعنوان وعنوان فرعي لمناسبة (عرس، افتتاح محل)، طبق قواعد التسلسل.', en: 'Create a simple poster with a title and subtitle for an event (wedding, shop opening), applying the hierarchy rules.' },
            tip: { fr: '💡 Les débutants sur-utilisent les polices "fun" (Comic Sans, cursives) — 90% des designs professionnels utilisent 1 à 2 polices sobres maximum.', ar: '💡 المبتدئين يستعملو بزاف الخطوط "الكيفية" (Comic Sans، مائلة) — 90% من التصاميم الاحترافية تستخدم خط واحد أو خطين رزينين فقط.', en: '💡 Beginners overuse "fun" fonts (Comic Sans, script fonts) — 90% of professional designs use just 1-2 sober fonts.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
        goal: { fr: 'Passer de Canva à des outils professionnels avec Photopea', ar: 'الانتقال من Canva لأدوات احترافية مع Photopea', en: 'Move from Canva to professional tools with Photopea' },
        lessons: [
          {
            id: 'd-i-1',
            title: { fr: 'Photopea — L\'Alternative Gratuite à Photoshop', ar: 'Photopea — البديل المجاني لـ Photoshop', en: 'Photopea — The Free Photoshop Alternative' },
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
            layout: 'left',
            steps: {
              fr: ['Rendez-vous sur photopea.com — c\'est un clone de Photoshop qui tourne directement dans votre navigateur, sans installation, et il est 100% gratuit.','L\'interface est identique à Photoshop: les outils sont à gauche, les calques (Layers) sont à droite, et la barre d\'options est en haut.','Le concept clé: les CALQUES. Chaque élément (photo, texte, forme) doit être sur son propre calque pour rester modifiable indépendamment.','Pour supprimer un arrière-plan: sélectionnez l\'outil Baguette Magique (W), cliquez sur le fond, puis appuyez sur Suppr — répétez sur les zones oubliées avec Maj+clic.','Ajoutez une ombre portée réaliste: clic droit sur le calque → Options de fusion → Ombre portée, ajustez l\'opacité à 30-40% pour un rendu naturel.','Utilisez les Calques de Réglage pour corriger la luminosité et le contraste sans jamais modifier l\'image originale.','Exportez en PNG (fond transparent conservé) via Fichier → Exporter comme → PNG.'],
              ar: ['روح لـ photopea.com — نسخة من Photoshop تخدم مباشرة في المتصفح، بلا تنصيب، ومجانية 100%.','الواجهة نفسها Photoshop: الأدوات على اليسار، الطبقات (Layers) على اليمين، وشريط الخيارات في الأعلى.','المفهوم الأساسي: الطبقات. كل عنصر (صورة، نص، شكل) خاصو يكون في طبقته الخاصة باش يبقى قابل للتعديل بمفرده.','باش تزيل الخلفية: اختار أداة العصا السحرية (W)، اضغط على الخلفية، بعدها Suppr — كرر على الأماكن الناقصة بـ Maj+clic.','زيد ظل واقعي: كليك يمين على الطبقة → خيارات المزج → ظل مسقط، ظبط الشفافية 30-40% باش يبان طبيعي.','استخدم طبقات التعديل باش تصحح الإضاءة والتباين بلا ما تلمس الصورة الأصلية.','صدّر بـ PNG (تبقى الخلفية شفافة) عبر ملف → تصدير كـ → PNG.'],
              en: ['Go to photopea.com — a Photoshop clone that runs directly in your browser, no installation needed, and it\'s 100% free.','The interface is identical to Photoshop: tools on the left, Layers on the right, and the options bar at the top.','Key concept: LAYERS. Every element (photo, text, shape) should be on its own layer to stay independently editable.','To remove a background: select the Magic Wand tool (W), click the background, then press Delete — repeat on missed spots with Shift+click.','Add a realistic drop shadow: right-click the layer → Blending Options → Drop Shadow, set opacity to 30-40% for a natural look.','Use Adjustment Layers to fix brightness and contrast without ever touching the original image.','Export as PNG (keeps transparent background) via File → Export as → PNG.']
            },
            method: { fr: 'Supprimez l\'arrière-plan d\'une photo de produit et remplacez-le par un fond uni.', ar: 'ازل خلفية صورة منتج وعوضها بخلفية لون واحد.', en: 'Remove the background from a product photo and replace it with a solid color.' },
            exercise: { fr: 'Trouvez une photo de produit algérien en ligne (téléphone, vêtement, plat), supprimez le fond, ajoutez une ombre et un fond coloré, puis ajoutez le prix en DZD.', ar: 'دور على صورة منتج جزائري أونلاين (هاتف، لباس، طبق)، ازل الخلفية، زيد ظل وخلفية ملونة، وزيد السعر بالدينار.', en: 'Find an Algerian product photo online (phone, clothing, dish), remove the background, add a shadow and colored background, then add the price in DZD.' },
            tip: { fr: '💡 Photopea sauvegarde en format .psd — gardez toujours le fichier source pour pouvoir le modifier plus tard.', ar: '💡 Photopea يسجل بصيغة .psd — احتفظ دائماً بالملف الأصلي باش تقدر تعدلو من بعد.', en: '💡 Photopea saves in .psd format — always keep the source file so you can edit it later.' }
          },
          {
            id: 'd-i-2',
            title: { fr: 'Créer un Logo qui Fonctionne', ar: 'تصميم شعار يخدم فعلاً', en: 'Creating a Logo That Works' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Il existe 4 types de logos: Wordmark (le nom stylisé, ex: Coca-Cola), Lettermark (initiales, ex: HM), Symbole (icône seule, ex: Nike), Combiné (icône + texte).','Pour un client débutant/petit budget, le Wordmark ou Combiné est le plus simple et le plus sûr — évitez les symboles abstraits qui demandent une grosse notoriété pour être reconnus.','Un bon logo doit fonctionner en noir et blanc pur (test obligatoire) — si le logo perd son sens sans couleur, il est trop dépendant de la couleur.','Testez le logo en très petit (favicon, 32x32px) — s\'il devient illisible, simplifiez les détails.','Posez toujours 5 questions au client avant de commencer: secteur d\'activité, 3 concurrents qu\'il aime/n\'aime pas, 3 mots qui décrivent sa marque, couleurs à éviter, où sera utilisé le logo.','Livrez toujours au minimum 3 formats: PNG fond transparent (web), SVG (vectoriel, redimensionnable), et une version noir/blanc.'],
              ar: ['كاين 4 أنواع دي شعارات: Wordmark (الاسم مصمم بأسلوب، مثل Coca-Cola)، Lettermark (الحروف الأولى، مثل HM)، رمز (أيقونة لوحدها، مثل Nike)، مركب (أيقونة + نص).','للزبون المبتدئ أو بميزانية صغيرة، Wordmark أو المركب هو الأسهل والأأمن — تجنب الرموز المجردة اللي تحتاج شهرة كبيرة باش تتعرف.','الشعار الجيد خاصو يخدم بالأبيض والأسود الصافي (اختبار إجباري) — إذا الشعار خسر معناه بلا لون، يبقى معتمد بزاف على اللون.','جرب الشعار بحجم صغير جداً (favicon، 32x32 بكسل) — إذا ولى غير مقروء، بسّط التفاصيل.','سول دايماً 5 أسئلة للزبون قبل ما تبدا: قطاع النشاط، 3 منافسين يحبهم/ما يحبهمش، 3 كلمات توصف الماركة، ألوان يتجنبها، وين غادي يستعمل الشعار.','سلّم دايماً على الأقل 3 صيغ: PNG خلفية شفافة (ويب)، SVG (فيكتور، قابل للتحجيم)، ونسخة أبيض وأسود.'],
              en: ['There are 4 logo types: Wordmark (styled name, e.g. Coca-Cola), Lettermark (initials, e.g. HM), Symbol (icon alone, e.g. Nike), Combination (icon + text).','For a beginner/small-budget client, a Wordmark or Combination is the simplest and safest — avoid abstract symbols that need heavy brand recognition to work.','A good logo must work in pure black and white (mandatory test) — if the logo loses meaning without color, it\'s too color-dependent.','Test the logo at a very small size (favicon, 32x32px) — if it becomes unreadable, simplify the details.','Always ask the client 5 questions before starting: industry, 3 competitors they like/dislike, 3 words describing their brand, colors to avoid, where the logo will be used.','Always deliver at least 3 formats: transparent-background PNG (web), SVG (vector, scalable), and a black & white version.']
            },
            method: { fr: 'Choisissez une marque existante et recréez son logo dans les 4 catégories (wordmark, lettermark, symbole, combiné) pour comprendre les différences.', ar: 'اختار ماركة موجودة وأعد إنشاء شعارها ف الأنواع الأربعة (wordmark، lettermark، رمز، مركب) باش تفهم الفروق.', en: 'Pick an existing brand and recreate its logo across the 4 categories (wordmark, lettermark, symbol, combination) to understand the differences.' },
            exercise: { fr: 'Designez un logo simple (wordmark ou combiné) pour un petit commerce algérien fictif, en testant le noir et blanc et la petite taille.', ar: 'صمّم شعار بسيط (wordmark أو مركب) لمحل جزائري صغير وهمي، جرب الأبيض والأسود والحجم الصغير.', en: 'Design a simple logo (wordmark or combination) for a fictional small Algerian shop, testing it in black & white and at small size.' },
            tip: { fr: '💡 Ne présentez jamais 1 seule option à un client — présentez toujours 3 directions différentes pour qu\'il ait un vrai choix.', ar: '💡 ما تقدمش خيار واحد فقط للزبون — قدم دايماً 3 اتجاهات مختلفة باش يكون عندو اختيار حقيقي.', en: '💡 Never present a client with just 1 option — always present 3 different directions so they have a real choice.' }
          },
          {
            id: 'd-i-3',
            title: { fr: 'Travailler avec un Client : du Brief à la Livraison', ar: 'التعامل مع الزبون: من البريف للتسليم', en: 'Working with a Client: From Brief to Delivery' },
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un brief écrit protège les deux parties — même informel (message WhatsApp structuré), notez toujours: objectif, deadline, budget, nombre de révisions incluses.','Limitez les révisions gratuites à 2-3 rounds maximum — au-delà, facturez un supplément (précisez-le dès le devis).','Demandez toujours 30-50% d\'acompte avant de commencer — cela filtre les clients non sérieux et sécurise votre temps.','Présentez votre travail avec un contexte, pas juste un fichier: expliquez vos choix (pourquoi cette couleur, cette police) — cela réduit les demandes de changement arbitraires.','Un client qui ne répond pas à une demande de feedback pendant 7 jours = projet en pause; ne bloquez pas votre planning pour lui.','Livrez les fichiers organisés dans un dossier nommé clairement (ClientNom_Projet_Date) avec un fichier "Lisez-moi" qui explique quel format utiliser où.'],
              ar: ['البريف المكتوب يحمي الطرفين — حتى ولو غير رسمي (رسالة واتساب منظمة)، سجل دائماً: الهدف، الديدلاين، الميزانية، عدد التعديلات المشمولة.','حدد التعديلات المجانية بـ 2-3 مرات كحد أقصى — بعدها، احسب زيادة (وضحها من البداية ف العرض).','اطلب دائماً عربون 30-50% قبل ما تبدا — هذا يصفي الزبائن غير الجديين ويحمي وقتك.','قدم شغلك مع سياق، ماشي غير ملف: اشرح اختياراتك (علاش هذا اللون، هذا الخط) — هذا يقلل طلبات التغيير العشوائية.','الزبون اللي ما يجاوبش على طلب ملاحظات لمدة 7 أيام = المشروع متوقف؛ ما تسدش برنامجك عليه.','سلّم الملفات منظمة ف مجلد بإسم واضح (اسم الزبون_المشروع_التاريخ) مع ملف "اقرأني" يشرح أي صيغة تستعمل وين.'],
              en: ['A written brief protects both sides — even informal (a structured WhatsApp message), always note: goal, deadline, budget, number of included revisions.','Limit free revisions to 2-3 rounds max — beyond that, charge extra (state this in the quote from the start).','Always ask for a 30-50% deposit before starting — this filters out non-serious clients and secures your time.','Present your work with context, not just a file: explain your choices (why this color, this font) — this reduces arbitrary change requests.','A client who doesn\'t respond to a feedback request for 7 days = project on hold; don\'t block your schedule for them.','Deliver files organized in a clearly named folder (ClientName_Project_Date) with a "Read me" file explaining which format to use where.']
            },
            method: { fr: 'Rédigez un brief type que vous pourrez réutiliser pour chaque nouveau client (formulaire ou message pré-rempli).', ar: 'اكتب بريف نموذجي تقدر تعاود تستعملو لكل زبون جديد (استمارة أو رسالة جاهزة).', en: 'Write a template brief you can reuse for every new client (a form or pre-filled message).' },
            exercise: { fr: 'Simulez un échange complet avec un client fictif: brief → 1er rendu → 1 révision → livraison finale, en rédigeant chaque message.', ar: 'حاكي تبادل كامل مع زبون وهمي: بريف → أول تسليم → تعديل واحد → تسليم نهائي، اكتب كل رسالة.', en: 'Simulate a full exchange with a fictional client: brief → first draft → 1 revision → final delivery, writing out each message.' },
            tip: { fr: '💡 Un client difficile dès le premier échange le reste souvent après paiement — apprenez à repérer les signaux (indécision extrême, refus de payer un acompte) et à décliner poliment si besoin.', ar: '💡 الزبون الصعيب من أول تبادل غالباً يبقى صعيب حتى بعد الدفع — تعلم تعرف الإشارات (تردد مبالغ فيه، رفض دفع عربون) وترفض بلطف إذا احتجت.', en: '💡 A difficult client from the first exchange often stays difficult after payment — learn to spot the signals (extreme indecision, refusing to pay a deposit) and decline politely if needed.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 11–20', ar: 'الأسابيع 11–20', en: 'Weeks 11–20' },
        goal: { fr: 'Maîtriser le design vectoriel avec Inkscape', ar: 'إتقان التصميم الفيكتوري مع Inkscape', en: 'Master vector design with Inkscape' },
        lessons: [
          {
            id: 'd-a-1',
            title: { fr: 'Inkscape — Maîtriser le Vectoriel', ar: 'Inkscape — إتقان الفيكتور', en: 'Inkscape — Mastering Vectors' },
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['Téléchargez Inkscape (inkscape.org) — c\'est l\'équivalent gratuit et open-source d\'Adobe Illustrator, 100% suffisant pour un usage professionnel.','La différence fondamentale avec Photopea: le vectoriel n\'est pas fait de pixels mais de formes mathématiques — un logo vectoriel peut être agrandi à l\'infini sans perdre en qualité.','Maîtrisez l\'outil Plume (touche B): un clic simple crée un point anguleux, un clic-glissé crée une courbe fluide.','Utilisez le panneau Pathfinder pour combiner des formes: Union (fusionne), Différence (soustrait), Intersection (garde le chevauchement).','Travaillez avec des calques nommés clairement pour garder un fichier propre et modifiable.','Exportez toujours en SVG (pour le web) et en PDF vectoriel (pour l\'impression professionnelle).'],
              ar: ['حمّل Inkscape (inkscape.org) — البديل المجاني والمفتوح المصدر لـ Adobe Illustrator، كافي 100% للاستعمال الاحترافي.','الفرق الأساسي مع Photopea: الفيكتور ماشي بيكسلات، هو أشكال رياضية — الشعار الفيكتوري يكبر بلا حدود بلا ما يخسر الجودة.','اتقن أداة القلم (B): كليك بسيط يعطي نقطة زاوية، كليك مسحوب يعطي منحنى ناعم.','استخدم لوحة Pathfinder باش تدمج الأشكال: Union (دمج)، Difference (طرح)، Intersection (تقاطع).','اخدم بطبقات مسماة بوضوح باش يبقى الملف نظيف وقابل للتعديل.','صدّر دائماً بـ SVG (للويب) وPDF فيكتوري (للطباعة الاحترافية).'],
              en: ['Download Inkscape (inkscape.org) — the free, open-source equivalent of Adobe Illustrator, 100% sufficient for professional use.','The key difference from Photopea: vectors aren\'t made of pixels but mathematical shapes — a vector logo can be scaled infinitely without losing quality.','Master the Pen Tool (key B): a simple click creates a sharp point, a click-drag creates a smooth curve.','Use the Pathfinder panel to combine shapes: Union (merges), Difference (subtracts), Intersection (keeps overlap).','Work with clearly named layers to keep the file clean and editable.','Always export as SVG (for web) and vector PDF (for professional printing).']
            },
            method: { fr: 'Recréez un logo simple existant en utilisant uniquement l\'outil Plume, sans tracé automatique.', ar: 'أعد إنشاء شعار بسيط موجود باستخدام أداة القلم فقط، بلا تتبع تلقائي.', en: 'Recreate an existing simple logo using only the Pen Tool, no auto-trace.' },
            exercise: { fr: 'Choisissez le logo d\'une marque algérienne connue (Djezzy, Ooredoo, Cevital) et reconstruisez-le entièrement en vectoriel dans Inkscape.', ar: 'اختار شعار ماركة جزائرية معروفة (Djezzy، Ooredoo، Cevital) وأعد بناءه بالكامل فيكتور في Inkscape.', en: 'Choose the logo of a well-known Algerian brand (Djezzy, Ooredoo, Cevital) and rebuild it entirely in vector form in Inkscape.' },
            tip: { fr: '💡 Un client avec seulement un logo en JPEG flou a besoin de le vectoriser — c\'est un service payant à part entière (3000-8000 DZD).', ar: '💡 الزبون اللي عندو غير شعار JPEG معتم محتاج يحوله فيكتور — هادي خدمة مدفوعة بذاتها (3000-8000 دج).', en: '💡 A client with only a blurry JPEG logo needs it vectorized — that\'s a standalone paid service (3000-8000 DZD).' }
          },
          {
            id: 'd-a-2',
            title: { fr: 'Identité de Marque Complète', ar: 'نظام هوية بصرية كامل', en: 'Complete Brand Identity System' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'left',
            steps: {
              fr: ['Une identité de marque va bien au-delà du logo: elle inclut la palette de couleurs (3-5 couleurs max), la typographie (2 polices), et le ton visuel (moderne, artisanal, luxueux...).','Créez une palette avec 1 couleur primaire (dominante), 1-2 couleurs secondaires, et 1 couleur d\'accent (pour les call-to-action) — testez le contraste avec un outil comme WebAIM.','Documentez tout dans un "Brand Guideline" (charte graphique): logo (variantes, zone de protection, tailles minimales), couleurs (codes HEX/RGB/CMJN), typographies, exemples d\'usage correct/incorrect.','Déclinez le logo sur 3 supports clés dès le début: carte de visite, en-tête de facture, template de post réseaux sociaux — cela révèle les problèmes d\'adaptabilité avant la livraison.','Une charte graphique professionnelle fait généralement 8 à 20 pages en PDF, exportable et facile à partager avec toute personne qui travaillera sur la marque après vous.','Le prix d\'une identité de marque complète (logo + charte + déclinaisons) est nettement supérieur à un logo seul — c\'est un projet à part entière, pas un "extra gratuit".'],
              ar: ['الهوية البصرية تتعدى الشعار بكثير: تشمل لوحة الألوان (3-5 ألوان كحد أقصى)، الطباعة (خطين)، والنبرة البصرية (عصري، حرفي، فاخر...).','اصنع لوحة بلون أساسي واحد (مهيمن)، 1-2 ألوان ثانوية، ولون تمييز واحد (للدعوة للفعل) — اختبر التباين بأداة مثل WebAIM.','وثق كل شيء ف "دليل الهوية": الشعار (نسخ، منطقة الحماية، الأحجام الدنيا)، الألوان (رموز HEX/RGB/CMJN)، الخطوط، أمثلة استخدام صحيح/خاطئ.','طبّق الشعار على 3 وسائل أساسية من البداية: بطاقة أعمال، ترويسة فاتورة، قالب منشور سوشيال ميديا — هذا يكشف مشاكل التكيف قبل التسليم.','الدليل الاحترافي عادة يكون 8 إلى 20 صفحة PDF، قابل للمشاركة مع أي حد يخدم على الماركة بعدك.','سعر هوية بصرية كاملة (شعار + دليل + تطبيقات) أعلى بكثير من شعار لوحدو — هو مشروع قائم بذاته، ماشي "إضافة مجانية".'],
              en: ['A brand identity goes far beyond the logo: it includes the color palette (3-5 colors max), typography (2 fonts), and visual tone (modern, artisanal, luxury...).','Build a palette with 1 primary color (dominant), 1-2 secondary colors, and 1 accent color (for calls-to-action) — test contrast with a tool like WebAIM.','Document everything in a "Brand Guideline": logo (variants, protection zone, minimum sizes), colors (HEX/RGB/CMYK codes), typography, correct/incorrect usage examples.','Apply the logo to 3 key materials from the start: business card, invoice header, social media post template — this reveals adaptability problems before delivery.','A professional brand guideline is typically 8 to 20 pages as a PDF, shareable with anyone who\'ll work on the brand after you.','The price of a complete brand identity (logo + guideline + applications) is significantly higher than a logo alone — it\'s a standalone project, not a "free extra".']
            },
            method: { fr: 'Prenez le logo créé dans la leçon précédente et construisez sa palette de couleurs complète avec les 3 rôles (primaire/secondaire/accent).', ar: 'خد الشعار اللي صنعتو ف الدرس السابق وابني لوحة ألوانه الكاملة بالأدوار الثلاثة (أساسي/ثانوي/تمييز).', en: 'Take the logo built in the previous lesson and construct its full color palette with the 3 roles (primary/secondary/accent).' },
            exercise: { fr: 'Créez une mini charte graphique de 3 pages (logo + couleurs + typographie) pour votre marque personnelle ou un client fictif.', ar: 'أنشئ دليل هوية مصغر 3 صفحات (شعار + ألوان + طباعة) لماركتك الشخصية أو زبون وهمي.', en: 'Create a mini 3-page brand guideline (logo + colors + typography) for your own personal brand or a fictional client.' },
            tip: { fr: '💡 Utilisez coolors.co pour générer et tester des palettes de couleurs harmonieuses gratuitement.', ar: '💡 استخدم coolors.co باش تولد وتختبر لوحات ألوان متناسقة مجاناً.', en: '💡 Use coolors.co to generate and test harmonious color palettes for free.' }
          },
          {
            id: 'd-a-3',
            title: { fr: 'Print vs Digital : CMJN, Résolution et Fond Perdu', ar: 'الطباعة مقابل الرقمي: CMJN، الدقة والحد الزائد', en: 'Print vs Digital: CMYK, Resolution and Bleed' },
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['RGB (Rouge-Vert-Bleu) est fait pour les écrans (web, réseaux sociaux) — CMJN (Cyan-Magenta-Jaune-Noir) est fait pour l\'impression. Une couleur vive en RGB peut paraître terne une fois imprimée.','Toujours convertir un fichier en mode CMJN AVANT de l\'envoyer à l\'imprimeur — sinon les couleurs changeront de façon imprévisible.','Résolution: le web utilise 72 DPI (dots per inch), l\'impression demande minimum 300 DPI — une image basse résolution paraîtra floue une fois imprimée en grand format.','Le "fond perdu" (bleed) est une marge supplémentaire de 3-5mm au-delà du format final — indispensable pour éviter les bordures blanches si la découpe n\'est pas parfaite.','Gardez les éléments importants (texte, logo) à au moins 5mm des bords du document (marge de sécurité) pour éviter qu\'ils soient coupés.','Pour l\'impression professionnelle, exportez toujours en PDF avec les polices vectorisées/incorporées (pas en JPEG) pour garantir une netteté parfaite.'],
              ar: ['RGB (أحمر-أخضر-أزرق) مصمم للشاشات (ويب، سوشيال ميديا) — CMJN (سيان-ماجنتا-أصفر-أسود) مصمم للطباعة. اللون الزاهي ف RGB يمكن يبان باهت بعد ما يتطبع.','حوّل الملف دايماً لوضع CMJN قبل ما تبعثو للمطبعة — وإلا الألوان غادي تتبدل بطريقة غير متوقعة.','الدقة: الويب يستخدم 72 DPI، الطباعة تحتاج 300 DPI كحد أدنى — صورة بدقة منخفضة غادي تبان معتمة إذا طُبعت بحجم كبير.','"الحد الزائد" (bleed) هو هامش إضافي 3-5 مم زيادة على الحجم النهائي — ضروري لتفادي الحواف البيضاء إذا القص ما كانش بالضبط.','خلي العناصر المهمة (نص، شعار) على الأقل 5 مم من حواف الوثيقة (هامش أمان) باش ما يتقصوش.','للطباعة الاحترافية، صدّر دايماً PDF بخطوط محولة لفيكتور/مدمجة (ماشي JPEG) باش تضمن وضوح كامل.'],
              en: ['RGB (Red-Green-Blue) is made for screens (web, social media) — CMYK (Cyan-Magenta-Yellow-Black) is made for printing. A vivid RGB color can look dull once printed.','Always convert a file to CMYK mode BEFORE sending it to the printer — otherwise colors will shift unpredictably.','Resolution: web uses 72 DPI, printing needs a minimum of 300 DPI — a low-resolution image will look blurry once printed large.','"Bleed" is an extra 3-5mm margin beyond the final trim size — essential to avoid white borders if the cut isn\'t perfectly aligned.','Keep important elements (text, logo) at least 5mm from the document edges (safety margin) so they don\'t get cut off.','For professional printing, always export as PDF with vectorized/embedded fonts (not JPEG) to guarantee perfect sharpness.']
            },
            method: { fr: 'Prenez un visuel déjà créé et exportez-le deux fois: une version web (RGB, 72 DPI) et une version print (CMJN, 300 DPI) — comparez les tailles de fichier et les couleurs.', ar: 'خد تصميم صنعتو من قبل وصدّرو مرتين: نسخة ويب (RGB، 72 DPI) ونسخة طباعة (CMJN، 300 DPI) — قارن حجم الملفات والألوان.', en: 'Take a visual you\'ve already created and export it twice: a web version (RGB, 72 DPI) and a print version (CMYK, 300 DPI) — compare file sizes and colors.' },
            exercise: { fr: 'Préparez un flyer A5 prêt pour l\'impression avec fond perdu de 3mm et marge de sécurité de 5mm.', ar: 'جهّز flyer A5 جاهز للطباعة بحد زائد 3 مم وهامش أمان 5 مم.', en: 'Prepare a print-ready A5 flyer with a 3mm bleed and a 5mm safety margin.' },
            tip: { fr: '💡 Les imprimeries algériennes demandent souvent le fichier en PDF avec fond perdu inclus — demandez toujours leurs spécifications exactes avant de livrer.', ar: '💡 المطابع الجزائرية غالباً تطلب الملف PDF بالحد الزائد مدمج فيه — اسأل دايماً عن مواصفاتهم بالضبط قبل التسليم.', en: '💡 Algerian print shops often ask for the file as a PDF with bleed included — always ask for their exact specs before delivering.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Passer de Freelance à Agence de Design', ar: 'الانتقال من فريلانس لأجنسي تصميم', en: 'Move from Freelancer to Design Agency' },
        lessons: [
          {
            id: 'd-m-1',
            title: { fr: 'De Freelance à Agence de Design', ar: 'من فريلانس لأجنسي تصميم', en: 'From Freelancer to Design Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le signal pour passer à l\'agence: vous refusez des clients faute de temps, ou vous travaillez plus de 50h/semaine sur du design seul.','Recrutez un premier collaborateur en freelance, payé au projet (40-50% du prix facturé au client) plutôt qu\'en salaire fixe au début.','Structurez vos offres en 3 forfaits clairs: Starter (~25 000 DZD, logo + 5 visuels), Croissance (~55 000 DZD, identité complète), Premium (100 000+ DZD, branding complet).','Démarchez directement les agences de publicité et de communication qui sous-traitent souvent le design visuel — elles ont un flux de clients constant.','Créez un book (portfolio) qui montre 3 à 5 projets complets avec avant/après, pas seulement des visuels isolés.','Spécialisez-vous idéalement dans un secteur (restauration, mode, immobilier) — les clients paient plus cher un spécialiste reconnu qu\'un généraliste.'],
              ar: ['إشارة الانتقال للأجنسي: تولي ترفض زبائن بسبب الوقت، أو تخدم أكثر من 50 ساعة/أسبوع في التصميم وحدك.','جيب متعاون أول فريلانس، يتخلص بالمشروع (40-50% من ثمن الفاتورة للزبون) بدل راتب ثابت في البداية.','رتب عروضك في 3 باقات واضحة: Starter (~25,000 دج، شعار + 5 تصاميم)، نمو (~55,000 دج، هوية كاملة)، Premium (100,000+ دج، براندينغ كامل).','قصد مباشرة وكالات الإشهار والتواصل اللي غالباً يسندو التصميم البصري لمقاول خارجي — عندهم تدفق زبائن ثابت.','اصنع بورتفوليو يوري 3 إلى 5 مشاريع كاملة بقبل/بعد، ماشي غير تصاميم منفصلة.','تخصص في قطاع واحد (مطاعم، موضة، عقار) — الزبائن يدفعو أكثر للمتخصص المعروف من العام.'],
              en: ['The signal to move to an agency: you\'re turning down clients due to lack of time, or working over 50h/week on design alone.','Bring on a first freelance collaborator, paid per project (40-50% of the client invoice) rather than a fixed salary at first.','Structure your offers into 3 clear packages: Starter (~25,000 DZD, logo + 5 visuals), Growth (~55,000 DZD, complete identity), Premium (100,000+ DZD, full branding).','Approach advertising and communication agencies directly — they often outsource visual design and have a steady client flow.','Build a portfolio (book) showing 3 to 5 complete projects with before/after, not just isolated visuals.','Ideally specialize in one sector (restaurants, fashion, real estate) — clients pay more for a recognized specialist than a generalist.']
            },
            method: { fr: 'Faites un "fake pitch": redesignez gratuitement le logo et 3 posts d\'une entreprise locale pour l\'utiliser comme exemple dans votre book.', ar: 'دير "عرض وهمي": أعد تصميم شعار و3 منشورات لمشروع محلي مجاناً باش تستخدمها كمثال في البورتفوليو ديالك.', en: 'Do a "fake pitch": redesign a local business\'s logo and 3 posts for free to use as an example in your portfolio.' },
            exercise: { fr: 'Identifiez 3 entreprises algériennes avec un design visuel faible, et créez une proposition de refonte complète pour l\'une d\'elles.', ar: 'حدد 3 مشاريع جزائرية بتصميم بصري ضعيف، واصنع اقتراح إعادة تصميم كامل لواحد منهم.', en: 'Identify 3 Algerian businesses with weak visual design, and create a complete redesign proposal for one of them.' },
            tip: { fr: '💡 Les clients ne paient pas pour "du travail" — ils paient pour un résultat qui les fait paraître professionnels. Vendez la transformation, pas les heures.', ar: '💡 الزبائن ما يدفعوش على "الخدمة" — يدفعو على نتيجة توريهم محترفين. بيع التحول، ماشي الساعات.', en: '💡 Clients don\'t pay for "work" — they pay for a result that makes them look professional. Sell the transformation, not the hours.' }
          },
          {
            id: 'd-m-2',
            title: { fr: 'Tarifer et Négocier avec les Clients', ar: 'التسعير والتفاوض مع الزبائن', en: 'Pricing and Negotiating with Clients' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Ne facturez jamais "à l\'heure" pour un client débutant à négocier — facturez "au projet" (prix fixe) pour éviter les discussions sans fin sur le temps passé.','Trois méthodes de tarification courantes: prix fixe par projet (le plus simple à vendre), forfait mensuel (pour du travail récurrent), et tarif à la valeur (pour les gros clients).','Quand un client dit "c\'est trop cher": ne baissez jamais le prix directement — proposez plutôt de réduire le scope (moins de révisions, moins de déclinaisons) pour un prix plus bas.','Un devis professionnel doit toujours inclure: description précise du livrable, délai, nombre de révisions incluses, modalités de paiement, et une date de validité de l\'offre.','Augmentez vos tarifs progressivement tous les 3-5 nouveaux clients satisfaits — un designer qui garde le même prix pendant des années sous-estime sa propre progression.','N\'acceptez jamais un paiement 100% "à la livraison" pour un nouveau client inconnu — l\'acompte protège contre les impayés et les clients qui disparaissent.'],
              ar: ['ما تحسبش "بالساعة" لزبون مبتدئ ف التفاوض — احسب "بالمشروع" (سعر ثابت) باش تتفادى النقاشات اللي ما تخلصش على الوقت المصروف.','3 طرق تسعير شائعة: سعر ثابت للمشروع (الأسهل ف البيع)، باقة شهرية (للشغل المتكرر)، والتسعير بالقيمة (للزبائن الكبار).','منين الزبون يقول "غالي بزاف": ما تنقصش السعر مباشرة — اقترح بدل ذلك تقليص النطاق (تعديلات أقل، تطبيقات أقل) بسعر أقل.','العرض الاحترافي خاصو دايماً يشمل: وصف دقيق للتسليم، الأجل، عدد التعديلات المشمولة، طريقة الدفع، وتاريخ صلاحية العرض.','زيد أسعارك تدريجياً كل 3-5 زبائن جدد راضين — المصمم اللي يخلي نفس السعر لسنوات يقلل من قيمة تطوره.','ما تقبلش دفع 100% "عند التسليم" لزبون جديد ما تعرفوش — العربون يحميك من عدم الدفع والزبائن اللي يختفيو.'],
              en: ['Never charge "by the hour" to a client new to negotiating — charge "per project" (fixed price) to avoid endless discussions about time spent.','Three common pricing methods: fixed project price (easiest to sell), monthly retainer (for recurring work), and value-based pricing (for large clients).','When a client says "it\'s too expensive": never lower the price directly — instead offer to reduce the scope (fewer revisions, fewer applications) for a lower price.','A professional quote should always include: precise deliverable description, timeline, number of included revisions, payment terms, and an offer validity date.','Raise your rates gradually every 3-5 new satisfied clients — a designer who keeps the same price for years is undervaluing their own growth.','Never accept 100% payment "on delivery" from a new unknown client — a deposit protects against non-payment and disappearing clients.']
            },
            method: { fr: 'Simulez une négociation: un client fictif vous demande une réduction de 30% — rédigez votre réponse en proposant une alternative de scope plutôt qu\'une baisse de prix.', ar: 'حاكي مفاوضة: زبون وهمي يطلب تخفيض 30% — اكتب ردك تقترح بديل ف النطاق بدل تخفيض السعر.', en: 'Simulate a negotiation: a fictional client asks for a 30% discount — write your response offering a scope alternative instead of a price cut.' },
            exercise: { fr: 'Créez une grille tarifaire simple avec 3 offres (Starter/Standard/Premium) pour vos services de design, avec un prix en DZD pour chacune.', ar: 'أنشئ جدول أسعار بسيط بـ3 عروض (Starter/Standard/Premium) لخدماتك ف التصميم، بسعر بالدينار لكل وحدة.', en: 'Create a simple pricing table with 3 offers (Starter/Standard/Premium) for your design services, with a price in DZD for each.' },
            tip: { fr: '💡 Le silence est un outil de négociation — après avoir donné votre prix, ne le justifiez pas immédiatement, laissez le client réagir en premier.', ar: '💡 الصمت أداة تفاوض — بعد ما تعطي سعرك، ما تبررش مباشرة، خلي الزبون يرد أولاً.', en: '💡 Silence is a negotiation tool — after stating your price, don\'t immediately justify it, let the client react first.' }
          },
          {
            id: 'd-m-3',
            title: { fr: 'Construire un Portfolio qui Vend', ar: 'بناء بورتفوليو يبيع', en: 'Building a Portfolio That Sells' },
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un portfolio ne doit PAS montrer tout ce que vous avez fait — sélectionnez seulement vos 6 à 10 meilleurs projets, la qualité prime toujours sur la quantité.','Pour chaque projet, montrez le contexte: le problème du client, votre solution, et si possible le résultat (ex: "+40% d\'engagement après le rebranding") — pas seulement l\'image finale.','Créez un portfolio gratuit avec Behance.net ou Canva (page web) — inutile d\'investir dans un site personnel payant avant d\'avoir des clients réguliers.','Placez vos 2-3 meilleurs projets en premier — la majorité des visiteurs ne scrollent jamais jusqu\'en bas.','Si vous manquez de vrais projets clients, créez des projets fictifs ("spec work") de haute qualité pour des marques que vous admirez — précisez clairement que c\'est un projet personnel.','Ajoutez toujours une page "À propos" avec une photo, votre spécialité, et un moyen de contact clair (WhatsApp, email).'],
              ar: ['البورتفوليو ما خاصوش يوري كلش دار — اختار غير أحسن 6 إلى 10 مشاريع، الجودة دايماً أهم من الكمية.','لكل مشروع، وري السياق: مشكلة الزبون، الحل ديالك، وإذا أمكن النتيجة (مثلاً: "+40% تفاعل بعد إعادة التصميم") — ماشي غير الصورة النهائية.','أنشئ بورتفوليو مجاني بـ Behance.net أو Canva (صفحة ويب) — ما فيهاش فايدة تستثمر ف موقع شخصي مدفوع قبل ما يكون عندك زبائن منتظمين.','حط أحسن 2-3 مشاريع ف الأول — أغلب الزوار ما يوصلوش للأسفل.','إذا نقصوك مشاريع حقيقية، أنشئ مشاريع وهمية ("spec work") عالية الجودة لماركات تعجبك — وضح بوضوح أنه مشروع شخصي.','زيد دائماً صفحة "عني" بصورة، تخصصك، ووسيلة تواصل واضحة (واتساب، إيميل).'],
              en: ['A portfolio should NOT show everything you\'ve made — select only your 6 to 10 best projects, quality always beats quantity.','For each project, show the context: the client\'s problem, your solution, and if possible the result (e.g. "+40% engagement after the rebrand") — not just the final image.','Build a free portfolio with Behance.net or Canva (web page) — no need to invest in a paid personal website before you have regular clients.','Put your 2-3 best projects first — most visitors never scroll all the way down.','If you lack real client projects, create high-quality fictional projects ("spec work") for brands you admire — clearly state it\'s a personal project.','Always add an "About" page with a photo, your specialty, and a clear way to contact you (WhatsApp, email).']
            },
            method: { fr: 'Sélectionnez vos 3 meilleurs travaux actuels (même issus des exercices de cette formation) et rédigez pour chacun 2-3 phrases de contexte.', ar: 'اختار أحسن 3 أشغال حالية ديالك (حتى من تمارين هاد التكوين) واكتب لكل واحد 2-3 جمل سياق.', en: 'Select your 3 best current works (even from this course\'s exercises) and write 2-3 context sentences for each.' },
            exercise: { fr: 'Créez la structure de votre portfolio (liste des projets dans l\'ordre, avec un titre et une phrase de contexte pour chacun).', ar: 'أنشئ هيكل البورتفوليو ديالك (لائحة المشاريع بالترتيب، بعنوان وجملة سياق لكل واحد).', en: 'Create your portfolio\'s structure (list of projects in order, with a title and context sentence for each).' },
            tip: { fr: '💡 Un portfolio de 6 projets excellents convertit mieux qu\'un portfolio de 20 projets moyens — osez retirer vos anciens travaux faibles.', ar: '💡 بورتفوليو بـ6 مشاريع ممتازة يبيع أحسن من بورتفوليو بـ20 مشروع متوسط — تجرأ وحيد أشغالك القديمة الضعيفة.', en: '💡 A portfolio of 6 excellent projects converts better than one with 20 average projects — dare to remove your weaker old work.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 2: SOCIAL MEDIA MANAGEMENT (COMPLET)
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
    tagline: { fr: 'Aidez les entreprises à grandir et vendre en ligne', ar: 'ساعد المشاريع تكبر وتبيع أونلاين', en: 'Help businesses grow and sell online' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre les algorithmes et créer une stratégie de contenu', ar: 'تفهم الخوارزميات وإنشاء استراتيجية محتوى', en: 'Understand algorithms and create a content strategy' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un Compte Business Professionnel', ar: 'إعداد حساب Business احترافي', en: 'Set up a Professional Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Instagram: Profil → 3 lignes → Paramètres → Compte → Passer en compte professionnel → Business.','Facebook: facebook.com/pages/create → Entreprise → nom + catégorie.','Meta Business Suite: business.facebook.com → connectez Page + Instagram.','WhatsApp Business: téléchargez app → numéro professionnel → liez dans Facebook.','Profil 100%: photo bio 80 chars lien bio linktr.ee gratuit localisation bouton contact.'],
              ar: ['Instagram: بروفيل → 3 خطوط → إعدادات → حساب → تحويل لحساب محترف → Business.','Facebook: facebook.com/pages/create → مشروع → اسم + فئة.','Meta Business Suite: business.facebook.com → اربط الصفحة + Instagram.','WhatsApp Business: حمّل التطبيق → رقم احترافي → اربط في Facebook.','بروفيل 100%: صورة bio 80 حرف رابط bio linktr.ee مجاني موقع زر تواصل.'],
              en: ['Instagram: Profile → 3 lines → Settings → Account → Switch to Professional → Business.','Facebook: facebook.com/pages/create → Business → name + category.','Meta Business Suite: business.facebook.com → connect Page + Instagram.','WhatsApp Business: download app → business number → link in Facebook.','100% Profile: photo bio 80 chars bio link linktr.ee free location contact button.']
            },
            method: { fr: 'Créez un compte test Instagram avec un nouvel email.', ar: 'أنشئ حساب Instagram تجريبي بإيميل جديد.', en: 'Create a test Instagram account with a new email.' },
            exercise: { fr: 'Configurez un profil business complet pour un restaurant fictif.', ar: 'اعدد بروفيل business كامل لمطعم وهمي.', en: 'Set up a complete business profile for a fictional restaurant.' },
            tip: { fr: '💡 Utilisez linktr.ee pour une page gratuite avec plusieurs boutons.', ar: '💡 استخدم linktr.ee لصفحة مجانية بعدة أزرار.', en: '💡 Use linktr.ee for a free page with multiple buttons.' }
          },
          {
            id: 's-b-2',
            title: { fr: 'Comprendre l\'Algorithme Instagram', ar: 'فهم خوارزمية Instagram', en: 'Understanding the Instagram Algorithm' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['L\'algorithme a un seul objectif: garder les gens sur l\'app.','5 signaux: 1.SAUVEGARDES (le plus puissant), 2.PARTAGES, 3.COMMENTAIRES, 4.LIKES, 5.TEMPS DE VISIONNAGE.','Terminez chaque post éducatif par "Sauvegardez ce post".','Posez une question spécifique en fin de légende.','Meilleures heures Algérie: 12h-13h30, 18h-20h, 21h-23h.'],
              ar: ['الخوارزمية عندها هدف واحد: تخلّي الناس على التطبيق.','5 إشارات: 1.الحفظ (الأقوى), 2.المشاركة, 3.التعليقات, 4.الإعجابات, 5.وقت المشاهدة.','اختم كل منشور تعليمي بـ "احفظ هذا المنشور".','اطرح سؤال محدد في نهاية التعليق.','أفضل أوقات الجزائر: 12-13:30, 18-20, 21-23.'],
              en: ['The algorithm has one goal: keep people on the app.','5 signals: 1.SAVES (strongest), 2.SHARES, 3.COMMENTS, 4.LIKES, 5.WATCH TIME.','End every educational post with "Save this post".','Ask a specific question at the end of the caption.','Best times Algeria: 12pm-1:30pm, 6pm-8pm, 9pm-11pm.']
            },
            method: { fr: 'Regardez 20 posts avec fort engagement et notez les patterns.', ar: 'شوف 20 منشور بتفاعل عالٍ ولاحظ الأنماط.', en: 'Look at 20 posts with high engagement and note the patterns.' },
            exercise: { fr: 'Publiez 3 posts: photo, carrousel, photo+question. Comparez les Insights.', ar: 'انشر 3 منشورات: صورة, كاروسيل, صورة+سؤال. قارن Insights.', en: 'Post 3 posts: photo, carousel, photo+question. Compare Insights.' },
            tip: { fr: '💡 Pas de liens externes dans la légende. Mettez-les en bio.', ar: '💡 لا تحط روابط خارجية في التعليق. حطهم في البروفيل.', en: '💡 No external links in caption. Put them in bio.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–9', ar: 'الأسابيع 4–9', en: 'Weeks 4–9' },
        goal: { fr: 'Créer des Reels et lancer des publicités', ar: 'إنشاء Reels وإطلاق إعلانات', en: 'Create Reels and run ads' },
        lessons: [
          {
            id: 's-i-1',
            title: { fr: 'Créer un Reel qui Génère des Vues', ar: 'إنشاء Reel يحصل على مشاهدات', en: 'Create a Reel That Gets Views' },
            image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Règle 0.5s: premier frame stoppe le scroll.','Structure: Accroche 0-2s → Setup 2-8s → Payoff 8-20s → CTA.','Tournage: VERTICAL 9:16, caméra arrière.','CapCut: Split, Texte, Auto Captions.','Audio tendance: utilisez cet audio.'],
              ar: ['قاعدة 0.5 ث: أول إطار يوقف التمرير.','الهيكل: جذبة 0-2ث → إعداد 2-8ث → نتيجة 8-20ث → CTA.','التصوير: عمودي 9:16، كاميرا خلفية.','CapCut: قطع، نص، تعليقات تلقائية.','الصوت الرائج: استخدم هذا الصوت.'],
              en: ['0.5s rule: first frame stops the scroll.','Structure: Hook 0-2s → Setup 2-8s → Payoff 8-20s → CTA.','Filming: VERTICAL 9:16, back camera.','CapCut: Split, Text, Auto Captions.','Trending audio: use this audio.']
            },
            method: { fr: 'Regardez Reels 20 minutes pour étudier.', ar: 'شاهد Reels 20 دقيقة للدراسة.', en: 'Watch Reels for 20 minutes to study.' },
            exercise: { fr: 'Filmez et éditez 3 Reels différents.', ar: 'صوّر وعدّل 3 Reels مختلفة.', en: 'Film and edit 3 different Reels.' },
            tip: { fr: '💡 Publiez à 19h heure algérienne.', ar: '💡 انشر الساعة 7 مساءً بتوقيت الجزائر.', en: '💡 Post at 7pm Algeria time.' }
          },
          {
            id: 's-i-2',
            title: { fr: 'Les Bases des Publicités Payantes (Meta Ads)', ar: 'أساسيات الإعلانات المدفوعة (Meta Ads)', en: 'Paid Ads Basics (Meta Ads)' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Meta Ads Manager (business.facebook.com) gère les pubs Facebook + Instagram depuis un seul endroit.','Commencez petit: 500-1000 DZD/jour de budget test pendant 3-5 jours avant d\'augmenter.','Ciblage de base: âge, ville (ex: Alger, Oran), centres d\'intérêt liés au produit — évitez un ciblage trop large ou trop étroit.','L\'objectif "Trafic" ou "Engagement" convient aux débutants; "Conversions" demande plus de données pour bien fonctionner.','Changez la publicité si le coût par clic est très supérieur à la moyenne du secteur après 3 jours de diffusion.'],
              ar: ['Meta Ads Manager (business.facebook.com) يدير إعلانات Facebook + Instagram من مكان واحد.','ابدا صغير: ميزانية تجريبية 500-1000 دج/يوم لمدة 3-5 أيام قبل ما تزيد.','استهداف أساسي: العمر، المدينة (مثلاً الجزائر العاصمة، وهران)، الاهتمامات المرتبطة بالمنتج — تجنب استهداف واسع بزاف أو ضيق بزاف.','هدف "الزيارات" أو "التفاعل" يناسب المبتدئين؛ "التحويلات" يحتاج بيانات أكثر باش يخدم مزيان.','بدل الإعلان إذا تكلفة النقرة عالية بزاف من متوسط القطاع بعد 3 أيام بث.'],
              en: ['Meta Ads Manager (business.facebook.com) manages Facebook + Instagram ads from one place.','Start small: a 500-1000 DZD/day test budget for 3-5 days before scaling up.','Basic targeting: age, city (e.g. Algiers, Oran), interests related to the product — avoid targeting too broad or too narrow.','The "Traffic" or "Engagement" objective suits beginners; "Conversions" needs more data to work well.','Pause the ad if cost-per-click is far above the industry average after 3 days of running.']
            },
            method: { fr: 'Explorez Meta Ads Manager sans lancer de campagne réelle — familiarisez-vous avec les objectifs et le ciblage.', ar: 'استكشف Meta Ads Manager بلا ما تطلق حملة حقيقية — تعرف على الأهداف والاستهداف.', en: 'Explore Meta Ads Manager without launching a real campaign — get familiar with objectives and targeting.' },
            exercise: { fr: 'Planifiez une campagne test: objectif, budget, ciblage et durée pour un petit commerce fictif.', ar: 'خطط لحملة تجريبية: الهدف، الميزانية، الاستهداف والمدة لمحل صغير وهمي.', en: 'Plan a test campaign: objective, budget, targeting and duration for a fictional small business.' },
            tip: { fr: '💡 Un bon visuel bat un bon ciblage — testez toujours 2-3 visuels différents pour la même audience.', ar: '💡 التصميم الجيد يفوق الاستهداف الجيد — جرب دايماً 2-3 تصاميم مختلفة لنفس الجمهور.', en: '💡 A great visual beats great targeting — always test 2-3 different visuals for the same audience.' }
          }
        ]
      },
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
              fr: ['Section 1: Audit (followers, engagement, top posts)','Section 2: Concurrents (3-5 directs)','Section 3: Persona (profil fictif complet)','Section 4: Objectifs SMART','Section 5: Stratégie 90 jours'],
              ar: ['القسم 1: تدقيق (متابعون، تفاعل، أفضل المنشورات)','القسم 2: منافسون (3-5 مباشرين)','القسم 3: شخصية (ملف خيالي كامل)','القسم 4: أهداف SMART','القسم 5: استراتيجية 90 يوماً'],
              en: ['Section 1: Audit (followers, engagement, top posts)','Section 2: Competitors (3-5 direct)','Section 3: Persona (complete fictional profile)','Section 4: SMART Goals','Section 5: 90-day strategy']
            },
            method: { fr: 'Rédigez un document pour une vraie entreprise.', ar: 'اكتب وثيقة لمشروع حقيقي.', en: 'Write a document for a real business.' },
            exercise: { fr: 'Document complet min 8 pages PDF Canva.', ar: 'وثيقة كاملة 8 صفحات PDF Canva.', en: 'Complete document min 8 pages Canva PDF.' },
            tip: { fr: '💡 Ne dites jamais "je pense". Dites "les données montrent".', ar: '💡 لا تقل "أعتقد". قل "البيانات تُظهر".', en: '💡 Never say "I think". Say "the data shows".' }
          },
          {
            id: 's-a-2',
            title: { fr: 'Calendrier de Contenu et Analyse des KPIs', ar: 'تقويم المحتوى وتحليل مؤشرات الأداء', en: 'Content Calendar and KPI Analysis' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un calendrier de contenu planifie 2-4 semaines à l\'avance: mix de posts éducatifs, promotionnels et engageants (règle 80/20: 80% valeur, 20% vente).','Utilisez Google Sheets ou Notion (gratuits) pour planifier: date, plateforme, type de contenu, statut.','Les 3 KPIs à suivre chaque semaine: taux d\'engagement (likes+comments+shares/reach), taux de croissance des abonnés, taux de conversion (clics vers le site).','Un taux d\'engagement de 3-6% est bon sur Instagram; en dessous de 1%, le contenu ou le timing doit être revu.','Comparez toujours vos résultats à votre propre historique (mois précédent), pas seulement aux moyennes du secteur.'],
              ar: ['تقويم المحتوى يخطط 2-4 أسابيع مسبقاً: مزيج بين منشورات تعليمية، ترويجية، وتفاعلية (قاعدة 80/20: 80% قيمة، 20% بيع).','استخدم Google Sheets أو Notion (مجانيين) للتخطيط: التاريخ، المنصة، نوع المحتوى، الحالة.','3 مؤشرات أداء تتابعها كل أسبوع: معدل التفاعل (إعجابات+تعليقات+مشاركات/الوصول)، معدل نمو المتابعين، معدل التحويل (نقرات نحو الموقع).','معدل تفاعل 3-6% جيد ف Instagram؛ تحت 1%، خاصك تراجع المحتوى أو التوقيت.','قارن نتائجك دائماً بتاريخك الخاص (الشهر السابق)، ماشي غير بمتوسطات القطاع.'],
              en: ['A content calendar plans 2-4 weeks ahead: a mix of educational, promotional and engaging posts (80/20 rule: 80% value, 20% sales).','Use Google Sheets or Notion (free) to plan: date, platform, content type, status.','3 KPIs to track weekly: engagement rate (likes+comments+shares/reach), follower growth rate, conversion rate (clicks to site).','A 3-6% engagement rate is good on Instagram; below 1%, content or timing needs revisiting.','Always compare results to your own history (previous month), not just industry averages.']
            },
            method: { fr: 'Créez un calendrier de contenu vide sur Google Sheets avec les colonnes essentielles.', ar: 'أنشئ تقويم محتوى فارغ ف Google Sheets بالأعمدة الأساسية.', en: 'Create an empty content calendar on Google Sheets with the essential columns.' },
            exercise: { fr: 'Planifiez 2 semaines de contenu (10-14 posts) respectant la règle 80/20 pour une marque fictive.', ar: 'خطط أسبوعين من المحتوى (10-14 منشور) يحترم قاعدة 80/20 لماركة وهمية.', en: 'Plan 2 weeks of content (10-14 posts) following the 80/20 rule for a fictional brand.' },
            tip: { fr: '💡 Bloquez 2h chaque dimanche pour planifier toute la semaine — cela évite de publier dans l\'urgence.', ar: '💡 خصص 2 ساعة كل يوم أحد باش تخطط الأسبوع كامل — هذا يفادي النشر ف اللحظة الأخيرة.', en: '💡 Block 2 hours every Sunday to plan the whole week — this avoids last-minute posting.' }
          }
        ]
      },
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
          },
          {
            id: 's-m-2',
            title: { fr: 'Rapports Client et Fidélisation', ar: 'تقارير الزبون والاحتفاظ به', en: 'Client Reporting and Retention' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Envoyez un rapport mensuel simple: 3 chiffres clés (croissance, engagement, conversions) + 1 phrase d\'analyse + 1 action prévue pour le mois suivant.','Un rapport visuel (Canva, 1 page) est plus lu qu\'un tableau Excel complexe — les clients veulent comprendre en 30 secondes.','Anticipez les questions du client: préparez toujours "pourquoi" avant qu\'il demande, surtout si un chiffre a baissé.','La fidélisation coûte 5x moins cher que trouver un nouveau client — un appel mensuel de 15 minutes prévient 80% des résiliations.','Proposez une montée en gamme (upsell) seulement après 2-3 mois de résultats prouvés, jamais dès le premier mois.'],
              ar: ['بعث تقرير شهري بسيط: 3 أرقام أساسية (نمو، تفاعل، تحويلات) + جملة تحليل + إجراء مخطط للشهر الجاي.','التقرير المرئي (Canva، صفحة وحدة) يتقرا أكثر من جدول Excel معقد — الزبائن يبغيو يفهمو ف 30 ثانية.','توقع أسئلة الزبون: جهز دائماً "علاش" قبل ما يسأل، خاصة إذا رقم هبط.','الاحتفاظ بالزبون يكلف 5 مرات أقل من إيجاد زبون جديد — مكالمة شهرية 15 دقيقة تمنع 80% من الإلغاءات.','اقترح ترقية (upsell) غير بعد 2-3 أشهر من نتائج مثبتة، ماشي من أول شهر.'],
              en: ['Send a simple monthly report: 3 key numbers (growth, engagement, conversions) + 1 analysis sentence + 1 planned action for next month.','A visual report (Canva, 1 page) gets read more than a complex Excel table — clients want to understand in 30 seconds.','Anticipate client questions: always prepare "why" before they ask, especially if a number dropped.','Retention costs 5x less than finding a new client — a monthly 15-minute call prevents 80% of cancellations.','Offer an upsell only after 2-3 months of proven results, never in the first month.']
            },
            method: { fr: 'Créez un template de rapport mensuel réutilisable sur Canva.', ar: 'أنشئ نموذج تقرير شهري قابل لإعادة الاستخدام ف Canva.', en: 'Create a reusable monthly report template on Canva.' },
            exercise: { fr: 'Rédigez un rapport mensuel complet pour un client fictif dont l\'engagement a légèrement baissé.', ar: 'اكتب تقرير شهري كامل لزبون وهمي التفاعل ديالو هبط شوية.', en: 'Write a complete monthly report for a fictional client whose engagement slightly dropped.' },
            tip: { fr: '💡 Un client qui comprend pourquoi un chiffre a baissé reste; un client surpris par une mauvaise nouvelle part.', ar: '💡 الزبون اللي يفهم علاش رقم هبط يبقى؛ الزبون اللي يتفاجئ بخبر سيء يمشي.', en: '💡 A client who understands why a number dropped stays; a client surprised by bad news leaves.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 3: VIDEO EDITING (COMPLET)
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
          },
          {
            id: 'v-b-2',
            title: { fr: 'Composition et Cadrage pour le Mobile', ar: 'التأطير والتكوين للموبايل', en: 'Composition and Framing for Mobile' },
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Filmez toujours en format vertical 9:16 pour les Reels/TikTok/Stories — le format horizontal ne fonctionne que pour YouTube.','Règle des tiers: activez la grille de votre caméra et placez le sujet sur une des lignes, pas au centre.','Laissez de l\'espace au-dessus de la tête (headroom) mais pas trop — un cadrage trop serré ou trop lointain paraît amateur.','Stabilisez toujours: posez le téléphone, utilisez un trépied (20-30 DZD sur les marchés) ou activez la stabilisation logicielle.','La lumière naturelle (face à une fenêtre) donne un résultat 10x meilleur que l\'éclairage de la pièce — filmez toujours face à la lumière, jamais dos à elle.'],
              ar: ['صوّر دائماً بالعمودي 9:16 لـ Reels/TikTok/Stories — الأفقي يخدم غير لـ YouTube.','قاعدة الأثلاث: فعّل شبكة الكاميرا وحط الموضوع على واحد من الخطوط، ماشي ف الوسط.','خلي مسافة فوق الراس (headroom) بلا ما تكون كبيرة بزاف — تأطير ضيق بزاف أو بعيد بزاف يبان هاوي.','ثبت دائماً: حط الهاتف، استخدم حامل ثلاثي (20-30 دج ف السوق) أو فعّل التثبيت البرمجي.','الضوء الطبيعي (قدام نافذة) يعطي نتيجة أحسن بـ10 مرات من إضاءة الغرفة — صوّر دائماً وجهك للضوء، ماشي ظهرك.'],
              en: ['Always film in vertical 9:16 for Reels/TikTok/Stories — horizontal only works for YouTube.','Rule of thirds: turn on your camera grid and place the subject on one of the lines, not the center.','Leave headroom above the subject but not too much — framing too tight or too far looks amateurish.','Always stabilize: rest the phone, use a tripod (20-30 DZD in local markets) or turn on software stabilization.','Natural light (facing a window) gives a 10x better result than room lighting — always film facing the light, never with your back to it.']
            },
            method: { fr: 'Filmez le même sujet 3 fois: centré, sur la règle des tiers, et avec un mauvais éclairage — comparez.', ar: 'صوّر نفس الموضوع 3 مرات: ف الوسط، بقاعدة الأثلاث، وبإضاءة سيئة — قارن.', en: 'Film the same subject 3 times: centered, on the rule of thirds, and with bad lighting — compare.' },
            exercise: { fr: 'Filmez un produit ou une personne avec un cadrage professionnel: règle des tiers, stabilisé, bien éclairé.', ar: 'صوّر منتج أو شخص بتأطير احترافي: قاعدة الأثلاث، مثبت، إضاءة مزيانة.', en: 'Film a product or person with professional framing: rule of thirds, stabilized, well lit.' },
            tip: { fr: '💡 Un iPhone/Android récent bien cadré et bien éclairé bat une caméra pro mal utilisée.', ar: '💡 هاتف حديث مؤطر ومضاء مزيان يفوق كاميرا احترافية مستعملة بطريقة سيئة.', en: '💡 A recent phone well-framed and well-lit beats a pro camera used badly.' }
          }
        ]
      },
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
          },
          {
            id: 'v-i-2',
            title: { fr: 'Audio et Son : la Moitié Oubliée du Montage', ar: 'الصوت: النصف المنسي من المونتاج', en: 'Audio and Sound: The Forgotten Half of Editing' },
            image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['80% de l\'impact émotionnel d\'une vidéo vient du son, pas de l\'image — un mauvais son ruine une belle vidéo, un bon son sauve une image moyenne.','Musique libre de droits: Pixabay Music, YouTube Audio Library, Uppbeat (gratuits) — jamais de musique commerciale sans licence.','Baissez toujours la musique de fond (-15 à -20dB) quand quelqu\'un parle, pour que la voix reste claire.','Ajoutez des effets sonores subtils (whoosh, click) sur les transitions et textes qui apparaissent — cela rend le montage plus professionnel sans effort.','Exportez toujours en écoutant au casque ET sur haut-parleur de téléphone — le rendu est très différent selon l\'appareil.'],
              ar: ['80% من التأثير العاطفي للفيديو يجي من الصوت، ماشي من الصورة — صوت سيء يخرب فيديو جميل، صوت جيد ينقذ صورة متوسطة.','موسيقى بلا حقوق: Pixabay Music، YouTube Audio Library، Uppbeat (مجانيين) — عمرك ما تستخدم موسيقى تجارية بلا رخصة.','هبط الموسيقى الخلفية دائماً (-15 إلى -20dB) منين حد يهدر، باش الصوت يبقى واضح.','زيد أصوات خفيفة (whoosh، click) على الانتقالات والنصوص اللي تبان — هذا يخلي المونتاج احترافي بلا جهد.','صدّر ديماً وانت تسمع بسماعة ومكبر الهاتف — النتيجة تختلف بزاف حسب الجهاز.'],
              en: ['80% of a video\'s emotional impact comes from sound, not image — bad sound ruins a beautiful video, good sound saves an average one.','Royalty-free music: Pixabay Music, YouTube Audio Library, Uppbeat (free) — never use commercial music without a license.','Always lower background music (-15 to -20dB) when someone is talking, so the voice stays clear.','Add subtle sound effects (whoosh, click) on transitions and appearing text — this makes editing feel professional with little effort.','Always export while listening on headphones AND on phone speaker — the result sounds very different depending on the device.']
            },
            method: { fr: 'Prenez une vidéo déjà montée et ajoutez uniquement de la musique + 2-3 effets sonores.', ar: 'خد فيديو معدل من قبل وزيد بس موسيقى + 2-3 أصوات.', en: 'Take an already edited video and add only music + 2-3 sound effects.' },
            exercise: { fr: 'Montez une vidéo de 30 secondes en travaillant le son en priorité: musique, voix claire, effets sur les transitions.', ar: 'عدّل فيديو 30 ثانية بالتركيز على الصوت بالأولوية: موسيقى، صوت واضح، أصوات ف الانتقالات.', en: 'Edit a 30-second video prioritizing sound: music, clear voice, effects on transitions.' },
            tip: { fr: '💡 Si vous devez choisir entre une meilleure image ou un meilleur son avec un temps limité, choisissez le son.', ar: '💡 إذا خاصك تختار بين صورة أحسن أو صوت أحسن بوقت محدود، اختار الصوت.', en: '💡 If you must choose between better image or better sound with limited time, choose sound.' }
          }
        ]
      },
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
          },
          {
            id: 'v-a-2',
            title: { fr: 'Motion Graphics et Titres Animés', ar: 'الموشن غرافيك والعناوين المتحركة', en: 'Motion Graphics and Animated Titles' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['La page Fusion de DaVinci Resolve permet d\'animer du texte sans After Effects — accessible gratuitement.','Les "keyframes" (images clés) définissent un début et une fin: position, taille, opacité — le logiciel calcule l\'animation entre les deux.','Utilisez un easing (accélération/décélération) plutôt qu\'une vitesse constante — cela rend l\'animation naturelle, pas robotique.','Les lower thirds (bandeaux d\'info en bas de l\'écran, ex: nom + titre) doivent rester à l\'écran minimum 3-4 secondes pour être lus.','Réutilisez toujours le même style d\'animation dans une même vidéo (cohérence) — mélanger 5 styles de transitions différentes paraît amateur.'],
              ar: ['صفحة Fusion ف DaVinci Resolve تسمح بتحريك النص بلا After Effects — متوفرة مجاناً.','"Keyframes" (الإطارات المفتاحية) تحدد بداية ونهاية: الموضع، الحجم، الشفافية — البرنامج يحسب الحركة بينهم.','استخدم easing (تسارع/تباطؤ) بدل سرعة ثابتة — هذا يخلي الحركة طبيعية، ماشي آلية.','الـ lower thirds (أشرطة معلومات أسفل الشاشة، مثلاً اسم + لقب) خاصها تبقى ف الشاشة على الأقل 3-4 ثوانٍ باش تتقرا.','استعمل دائماً نفس ستايل الحركة ف نفس الفيديو (تناسق) — خلط 5 أساليب انتقال مختلفة يبان هاوي.'],
              en: ['DaVinci Resolve\'s Fusion page lets you animate text without After Effects — available for free.','"Keyframes" define a start and end: position, size, opacity — the software calculates the animation in between.','Use easing (acceleration/deceleration) instead of constant speed — this makes the animation feel natural, not robotic.','Lower thirds (info bars at the bottom of the screen, e.g. name + title) should stay on screen at least 3-4 seconds to be read.','Always reuse the same animation style within one video (consistency) — mixing 5 different transition styles looks amateurish.']
            },
            method: { fr: 'Créez un titre animé simple (apparition + disparition) dans la page Fusion.', ar: 'أنشئ عنوان متحرك بسيط (ظهور + اختفاء) ف صفحة Fusion.', en: 'Create a simple animated title (appear + disappear) in the Fusion page.' },
            exercise: { fr: 'Ajoutez un lower third animé (nom + titre) à une vidéo d\'interview fictive.', ar: 'زيد lower third متحرك (اسم + لقب) لفيديو مقابلة وهمية.', en: 'Add an animated lower third (name + title) to a fictional interview video.' },
            tip: { fr: '💡 Créez un modèle de titre une fois et réutilisez-le pour tous vos futurs projets — gain de temps énorme.', ar: '💡 اصنع نموذج عنوان مرة وحدة وأعد استعمالو ف كل مشاريعك الجاية — توفير وقت هائل.', en: '💡 Build a title template once and reuse it for all your future projects — huge time saver.' }
          }
        ]
      },
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
          },
          {
            id: 'v-m-2',
            title: { fr: 'Construire une Activité de Montage Vidéo', ar: 'بناء نشاط مونتاج فيديو', en: 'Building a Video Editing Business' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['3 types de clients: créateurs de contenu (paiement récurrent mensuel), entreprises (projets ponctuels), agences (sous-traitance régulière) — chacun a un rythme de paiement différent.','Créez un showreel de 60-90 secondes montrant vos 5-6 meilleurs montages, jamais un montage complet entier.','Tarifez au projet pour les vidéos ponctuelles (8-30K DZD selon durée/complexité), et au forfait mensuel pour les créateurs récurrents (15-50K DZD/mois pour X vidéos).','Livrez toujours un premier montage (draft) avant la version finale — cela évite de refaire tout le travail si la direction ne convient pas.','Automatisez votre réception de fichiers avec un lien Google Drive/WeTransfer dédié par client pour éviter les fichiers perdus dans WhatsApp.'],
              ar: ['3 أنواع زبائن: صناع محتوى (دفع شهري متكرر)، مشاريع (مشاريع لمرة وحدة)، وكالات (تعاقد فرعي منتظم) — كل واحد عندو إيقاع دفع مختلف.','اصنع showreel 60-90 ثانية يوري أحسن 5-6 مونتاجات ديالك، عمرك ما تعرض مونتاج كامل.','احسب بالمشروع للفيديوهات لمرة وحدة (8-30K دج حسب المدة/التعقيد)، وبالباقة الشهرية للصناع المتكررين (15-50K دج/شهر لعدد فيديوهات).','سلّم دائماً مونتاج أولي (draft) قبل النسخة النهائية — هذا يفادي إعادة كل الشغل إذا الاتجاه ما ناسبش.','أتمت استقبال الملفات برابط Google Drive/WeTransfer خاص بكل زبون باش تفادي ضياع الملفات ف WhatsApp.'],
              en: ['3 client types: content creators (recurring monthly payment), businesses (one-off projects), agencies (regular subcontracting) — each has a different payment rhythm.','Build a 60-90 second showreel showing your 5-6 best edits, never a full complete edit.','Charge per project for one-off videos (8-30K DZD depending on length/complexity), and monthly retainers for recurring creators (15-50K DZD/month for X videos).','Always deliver a first draft before the final version — this avoids redoing all the work if the direction is off.','Automate file intake with a dedicated Google Drive/WeTransfer link per client to avoid lost files in WhatsApp.']
            },
            method: { fr: 'Sélectionnez vos 5 meilleurs montages actuels et assemblez-les en un showreel de moins de 90 secondes.', ar: 'اختار أحسن 5 مونتاجات حالية ديالك وجمعهم ف showreel أقل من 90 ثانية.', en: 'Select your 5 best current edits and assemble them into a showreel under 90 seconds.' },
            exercise: { fr: 'Créez une grille tarifaire (projet unique vs forfait mensuel) pour vos services de montage.', ar: 'أنشئ جدول أسعار (مشروع وحيد vs باقة شهرية) لخدماتك ف المونتاج.', en: 'Create a pricing table (single project vs monthly retainer) for your editing services.' },
            tip: { fr: '💡 Les créateurs de contenu récurrents sont le revenu le plus stable — priorisez-les sur les projets ponctuels.', ar: '💡 صناع المحتوى المتكررين هم أكثر مصدر دخل مستقر — فضلهم على المشاريع لمرة وحدة.', en: '💡 Recurring content creators are the most stable income — prioritize them over one-off projects.' }
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
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Comprendre le HTML et CSS et créer votre première page web', ar: 'تفهم HTML و CSS وتصنع أول صفحة ويب', en: 'Understand HTML and CSS and create your first web page' },
        lessons: [
          {
            id: 'w-b-1',
            title: { fr: 'HTML - La structure de base de tout site web', ar: 'HTML - هيكل أساسي لكل موقع ويب', en: 'HTML - The basic structure of every website' },
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Ouvrez VS Code → Fichier → Nouveau fichier → index.html.','Tapez ! → appuyez Tab pour générer la structure HTML de base.','DOCTYPE html est la déclaration. html est la racine. head contient les métadonnées.','body contient tout ce qui s\'affiche sur la page.','h1 à h6 = titres. p = paragraphe. a = lien (href). img = image (src).','div = conteneur. section = section. main = contenu principal.'],
              ar: ['افتح VS Code → ملف → ملف جديد → index.html.','اكتب ! → اضغط Tab لتوليد هيكل HTML الأساسي.','DOCTYPE html هو التصريح. html هو الجذر. head يحتوي البيانات الوصفية.','body يحتوي كل ما يظهر على الصفحة.','h1 إلى h6 = عناوين. p = فقرة. a = رابط (href). img = صورة (src).','div = حاوية. section = قسم. main = المحتوى الرئيسي.'],
              en: ['Open VS Code → File → New File → index.html.','Type ! → press Tab to generate basic HTML structure.','DOCTYPE html is the declaration. html is the root. head contains metadata.','body contains everything displayed on the page.','h1 to h6 = headings. p = paragraph. a = link (href). img = image (src).','div = container. section = section. main = main content.']
            },
            method: { fr: 'Créez 5 pages HTML différentes et ouvrez-les dans le navigateur.', ar: 'أنشئ 5 صفحات HTML مختلفة وافتحها في المتصفح.', en: 'Create 5 different HTML pages and open them in browser.' },
            exercise: { fr: 'Page "À propos de moi" avec titre, paragraphe, image, lien.', ar: 'صفحة "عني" مع عنوان، فقرة، صورة، رابط.', en: '"About Me" page with heading, paragraph, image, link.' },
            tip: { fr: '💡 Utilisez Emmet pour générer du HTML plus rapidement.', ar: '💡 استخدم Emmet لتوليد HTML أسرع.', en: '💡 Use Emmet to generate HTML faster.' }
          },
          {
            id: 'w-b-2',
            title: { fr: 'CSS - Rendre votre site magnifique', ar: 'CSS - يجعل موقعك جميلاً', en: 'CSS - Make your site beautiful' },
            image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
            layout: 'right',
            steps: {
              fr: ['CSS = Cascading Style Sheets. Fichier style.css lié avec link rel="stylesheet" href="style.css".','Sélecteurs: h1 { color: blue; } = tous les h1 deviennent bleus.','Classes: .ma-classe { } -> utilisez class="ma-classe" dans HTML.','Propriétés courantes: color, background-color, font-size, margin, padding, border.','Flexbox: display:flex + justify-content + align-items pour disposition flexible.'],
              ar: ['CSS = أوراق الأنماط. ملف style.css مربوط بـ link rel="stylesheet" href="style.css".','المحددات: h1 { color: blue; } = كل h1 يصبح أزرق.','الفئات: .ma-classe { } -> استخدم class="ma-classe" في HTML.','الخصائص الشائعة: color, background-color, font-size, margin, padding, border.','Flexbox: display:flex + justify-content + align-items للترتيب المرن.'],
              en: ['CSS = Cascading Style Sheets. style.css file linked with link rel="stylesheet" href="style.css".','Selectors: h1 { color: blue; } = all h1 become blue.','Classes: .my-class { } -> use class="my-class" in HTML.','Common properties: color, background-color, font-size, margin, padding, border.','Flexbox: display:flex + justify-content + align-items for flexible layout.']
            },
            method: { fr: 'Créez une page web et appliquez 5 styles différents.', ar: 'أنشئ صفحة ويب وطبّق 5 تصاميم مختلفة.', en: 'Create a web page and apply 5 different styles.' },
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
              ar: ['JavaScript هي اللغة اللي تخلّي المواقع تفاعلية.','افتح وحدة التحكم (F12 → Console) لتجربة الكود.','صرّح بمتغير: let nom = "Ahmed";','أظهر في وحدة التحكم: console.log(nom);','أنشئ دالة: function bonjour() { alert("Bonjour!"); }','أضف حدث: document.getElementById("btn").onclick = function() { ... }'],
              en: ['JavaScript is the language that makes websites interactive.','Open browser console (F12 → Console) to test code.','Declare a variable: let name = "Ahmed";','Display in console: console.log(name);','Create a function: function hello() { alert("Hello!"); }','Add an event: document.getElementById("btn").onclick = function() { ... }']
            },
            method: { fr: 'Créez un bouton qui affiche une alerte quand on clique dessus.', ar: 'أنشئ زراً يعرض تنبيه عند النقر عليه.', en: 'Create a button that shows an alert when clicked.' },
            exercise: { fr: 'Créez un compteur: un bouton "+" qui augmente un nombre affiché à l\'écran.', ar: 'أنشئ عداداً: زر "+" يزيد رقماً معروضاً على الشاشة.', en: 'Create a counter: a "+" button that increases a number displayed on screen.' },
            tip: { fr: '💡 Utilisez console.log() pour déboguer votre code.', ar: '💡 استخدم console.log() لتصحيح أخطاء الكود.', en: '💡 Use console.log() to debug your code.' }
          },
          {
            id: 'w-i-2',
            title: { fr: 'Design Responsive : un Site qui S\'adapte à Tous les Écrans', ar: 'التصميم المتجاوب: موقع يتكيف مع كل الشاشات', en: 'Responsive Design: A Site That Adapts to Every Screen' },
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['70% des visiteurs en Algérie naviguent depuis un téléphone — un site non responsive perd la majorité de ses visiteurs.','Flexbox (display: flex) organise les éléments en ligne ou colonne facilement, avec justify-content et align-items pour l\'alignement.','Media queries: @media (max-width: 600px) { ... } applique un style différent uniquement sur petit écran.','Testez toujours avec les DevTools (F12 → icône téléphone/tablette) pour voir le rendu sur différentes tailles sans changer d\'appareil.','Règle simple: concevez d\'abord pour mobile (mobile-first), puis adaptez pour desktop — l\'inverse est plus source d\'erreurs.'],
              ar: ['70% من الزوار ف الجزائر يتصفحو من الهاتف — موقع ماشي متجاوب يخسر أغلب زواره.','Flexbox (display: flex) ينظم العناصر بخط أو عمود بسهولة، مع justify-content و align-items للمحاذاة.','Media queries: @media (max-width: 600px) { ... } يطبق ستايل مختلف غير ف الشاشة الصغيرة.','جرب دائماً بـ DevTools (F12 → أيقونة الهاتف/التابلت) باش تشوف النتيجة ف أحجام مختلفة بلا ما تبدل جهاز.','قاعدة بسيطة: صمم أولاً للموبايل (mobile-first)، بعدها كيّف للكمبيوتر — العكس مصدر أخطاء أكثر.'],
              en: ['70% of visitors in Algeria browse from a phone — a non-responsive site loses the majority of its visitors.','Flexbox (display: flex) organizes elements in a row or column easily, with justify-content and align-items for alignment.','Media queries: @media (max-width: 600px) { ... } applies a different style only on small screens.','Always test with DevTools (F12 → phone/tablet icon) to see the result at different sizes without switching devices.','Simple rule: design for mobile first, then adapt for desktop — the reverse causes more errors.']
            },
            method: { fr: 'Prenez votre page "À propos de moi" et rendez-la responsive avec une media query.', ar: 'خد صفحة "عني" ديالك وخليها متجاوبة بـ media query.', en: 'Take your "About Me" page and make it responsive with a media query.' },
            exercise: { fr: 'Créez une page avec 3 colonnes qui deviennent 1 seule colonne sur mobile (moins de 600px).', ar: 'أنشئ صفحة بـ3 أعمدة تولي عمود واحد ف الموبايل (أقل من 600 بكسل).', en: 'Create a page with 3 columns that become 1 single column on mobile (under 600px).' },
            tip: { fr: '💡 Utilisez des unités relatives (%, vw, rem) plutôt que des pixels fixes pour un vrai responsive.', ar: '💡 استخدم وحدات نسبية (%، vw، rem) بدل بكسلات ثابتة باش يكون تجاوب حقيقي.', en: '💡 Use relative units (%, vw, rem) instead of fixed pixels for true responsiveness.' }
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
            exercise: { fr: 'Créez une todo-list avec React.', ar: 'أنشئ قائمة مهام مع React.', en: 'Create a todo-list with React.' },
            tip: { fr: '💡 Utilisez les hooks (useState, useEffect) pour gérer l\'état.', ar: '💡 استخدم hooks (useState, useEffect) لإدارة الحالة.', en: '💡 Use hooks (useState, useEffect) to manage state.' }
          },
          {
            id: 'w-a-2',
            title: { fr: 'APIs : Connecter votre Site à des Données Réelles', ar: 'APIs: ربط موقعك ببيانات حقيقية', en: 'APIs: Connecting Your Site to Real Data' },
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Une API permet à votre site de récupérer des données depuis un serveur (météo, produits, utilisateurs) sans les écrire en dur dans le code.','fetch(\'https://api.exemple.com/data\') récupère les données; .then(res => res.json()) les convertit en objet JavaScript utilisable.','Les données arrivent en format JSON (JavaScript Object Notation) — une structure clé-valeur facile à lire et manipuler.','Utilisez useEffect en React pour appeler une API automatiquement quand le composant se charge — pas à chaque clic.','Gérez toujours les 3 états d\'un appel API dans l\'interface: chargement (loading), succès (affichage des données), erreur (message clair pour l\'utilisateur).'],
              ar: ['الـ API تسمح لموقعك يجيب بيانات من سيرفر (طقس، منتجات، مستخدمين) بلا ما تكتبهم بالثابت ف الكود.','fetch(\'https://api.exemple.com/data\') يجيب البيانات؛ .then(res => res.json()) يحولهم لكائن JavaScript قابل للاستعمال.','البيانات توصل بصيغة JSON — هيكل مفتاح-قيمة سهل القراءة والتعامل معاه.','استخدم useEffect ف React باش تستدعي API تلقائياً منين المكون يتحمل — ماشي ف كل كليك.','دبر دائماً 3 حالات لاستدعاء API ف الواجهة: تحميل (loading)، نجاح (عرض البيانات)، خطأ (رسالة واضحة للمستخدم).'],
              en: ['An API lets your site fetch data from a server (weather, products, users) without hardcoding it in the code.','fetch(\'https://api.example.com/data\') retrieves the data; .then(res => res.json()) converts it to a usable JavaScript object.','Data arrives as JSON (JavaScript Object Notation) — a key-value structure that\'s easy to read and work with.','Use useEffect in React to call an API automatically when the component loads — not on every click.','Always handle the 3 states of an API call in the UI: loading, success (display data), error (clear message for the user).']
            },
            method: { fr: 'Utilisez jsonplaceholder.typicode.com (API gratuite de test) pour récupérer et afficher une liste d\'utilisateurs.', ar: 'استخدم jsonplaceholder.typicode.com (API تجريبي مجاني) باش تجيب وتعرض لائحة مستخدمين.', en: 'Use jsonplaceholder.typicode.com (free test API) to fetch and display a list of users.' },
            exercise: { fr: 'Créez un composant React qui affiche une liste de produits récupérés depuis une API, avec un état de chargement.', ar: 'أنشئ مكون React يعرض لائحة منتجات مجابة من API، بحالة تحميل.', en: 'Create a React component that displays a list of products fetched from an API, with a loading state.' },
            tip: { fr: '💡 Utilisez toujours un try/catch autour de vos appels API — un serveur peut tomber en panne à tout moment.', ar: '💡 استخدم دائماً try/catch حول استدعاءات API ديالك — السيرفر يقدر يطيح ف أي وقت.', en: '💡 Always wrap your API calls in try/catch — a server can go down at any moment.' }
          }
        ]
      },
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
              fr: ['Frontend (React) → Backend (Node.js) → Base de données (MongoDB/PostgreSQL).','Git: versionnez votre code avec git init, git add, git commit, git push.','Méthodologie: Agile / Scrum pour gérer les sprints.','Déploiement: Vercel, Netlify (frontend) et Heroku, AWS (backend).','Sécurité: HTTPS, authentification JWT, validation des inputs.','Tarification: site vitrine 50-200K DZD, site e-commerce 200K-1M DZD.'],
              ar: ['Frontend (React) → Backend (Node.js) → قاعدة البيانات (MongoDB/PostgreSQL).','Git: versionnez كودك بـ git init, git add, git commit, git push.','Agile / Scrum لإدارة الـ sprints.','النشر: Vercel, Netlify (frontend) و Heroku, AWS (backend).','الأمان: HTTPS، مصادقة JWT، التحقق من المدخلات.','التسعير: موقع عرضي 50-200K دج، موقع تجاري 200K-1M دج.'],
              en: ['Frontend (React) → Backend (Node.js) → Database (MongoDB/PostgreSQL).','Git: version your code with git init, git add, git commit, git push.','Agile / Scrum to manage sprints.','Deployment: Vercel, Netlify (frontend) and Heroku, AWS (backend).','Security: HTTPS, JWT authentication, input validation.','Pricing: portfolio site 50-200K DZD, e-commerce site 200K-1M DZD.']
            },
            method: { fr: 'Créez un projet complet de A à Z.', ar: 'أنشئ مشروعاً كاملاً من الصفر.', en: 'Create a complete project from scratch.' },
            exercise: { fr: 'Planifiez un projet web pour un client fictif.', ar: 'خطط لمشروع ويب لعميل وهمي.', en: 'Plan a web project for a fictional client.' },
            tip: { fr: '💡 Spécialisez-vous dans une niche: e-commerce, SaaS, sites vitrines.', ar: '💡 تخصّص في مجال: التجارة الإلكترونية، SaaS، المواقع العرضية.', en: '💡 Specialize in a niche: e-commerce, SaaS, portfolio sites.' }
          },
          {
            id: 'w-m-2',
            title: { fr: 'Freelance Web : de la Vente à la Maintenance', ar: 'الفريلانس ويب: من البيع للصيانة', en: 'Web Freelancing: From Sales to Maintenance' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un devis web doit toujours préciser: nombre de pages, fonctionnalités incluses, nombre de révisions, hébergement (inclus ou non), délai de livraison.','Proposez toujours un contrat de maintenance mensuel (5-15K DZD/mois) après la livraison — mises à jour, sécurité, petites modifications — c\'est un revenu récurrent stable.','Le nom de domaine et l\'hébergement doivent être au nom du CLIENT, pas au vôtre — cela évite les conflits si la collaboration s\'arrête.','Formez toujours le client à l\'usage basique de son site (comment changer un texte, une image) avec une courte vidéo ou un document.','Livrez un site avec Google Analytics déjà installé — le client voit sa valeur ajoutée concrètement (visiteurs, pages populaires).'],
              ar: ['العرض الويب خاصو يحدد دائماً: عدد الصفحات، الميزات المشمولة، عدد التعديلات، الاستضافة (مشمولة ولا لا)، أجل التسليم.','اقترح دائماً عقد صيانة شهري (5-15K دج/شهر) بعد التسليم — تحديثات، أمان، تعديلات صغيرة — هذا دخل متكرر مستقر.','اسم النطاق والاستضافة خاصهم يكونو باسم الزبون، ماشي باسمك — هذا يفادي النزاعات إذا التعاون توقف.','كوّن الزبون دائماً على الاستخدام الأساسي لموقعو (كيفاش يبدل نص، صورة) بفيديو قصير أو وثيقة.','سلّم موقع بـ Google Analytics مثبت من قبل — الزبون يشوف القيمة المضافة بشكل ملموس (زوار، صفحات رائجة).'],
              en: ['A web quote should always specify: number of pages, included features, number of revisions, hosting (included or not), delivery timeline.','Always offer a monthly maintenance contract (5-15K DZD/month) after delivery — updates, security, small changes — this is stable recurring income.','The domain name and hosting should be in the CLIENT\'s name, not yours — this avoids conflicts if the collaboration ends.','Always train the client on basic site usage (how to change text, an image) with a short video or document.','Deliver a site with Google Analytics already installed — the client sees the added value concretely (visitors, popular pages).']
            },
            method: { fr: 'Rédigez un modèle de devis web réutilisable avec toutes les mentions essentielles.', ar: 'اكتب نموذج عرض ويب قابل لإعادة الاستخدام بكل البيانات الأساسية.', en: 'Write a reusable web quote template with all the essential details.' },
            exercise: { fr: 'Créez une offre de maintenance mensuelle avec 3 niveaux de service (Basique/Standard/Premium) et leurs prix en DZD.', ar: 'أنشئ عرض صيانة شهري بـ3 مستويات خدمة (أساسي/عادي/Premium) وأسعارهم بالدينار.', en: 'Create a monthly maintenance offer with 3 service tiers (Basic/Standard/Premium) and their prices in DZD.' },
            tip: { fr: '💡 La maintenance mensuelle transforme un revenu ponctuel en revenu prévisible chaque mois.', ar: '💡 الصيانة الشهرية تحول دخل لمرة وحدة لدخل متوقع كل شهر.', en: '💡 Monthly maintenance turns one-off income into predictable income every month.' }
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
              fr: ['SEO = Search Engine Optimization.','Google utilise plus de 200 facteurs pour classer les sites.','Les 3 piliers du SEO: 1. Technique, 2. Contenu, 3. Backlinks.','Mots-clés: ce que les gens tapent dans Google.','On-Page: title, meta, H1, URL.','Off-Page: backlinks, autorité.'],
              ar: ['SEO = تحسين محركات البحث.','Google يستخدم أكثر من 200 عامل لترتيب المواقع.','3 ركائز SEO: 1. التقني, 2. المحتوى, 3. الروابط الخلفية.','الكلمات المفتاحية: ما يكتبه الناس في Google.','On-Page: عنوان، meta، H1، رابط.','Off-Page: روابط خلفية، سلطة.'],
              en: ['SEO = Search Engine Optimization.','Google uses over 200 factors to rank sites.','The 3 pillars of SEO: 1. Technical, 2. Content, 3. Backlinks.','Keywords: what people type into Google.','On-Page: title, meta, H1, URL.','Off-Page: backlinks, authority.']
            },
            method: { fr: 'Recherchez 3 mots-clés sur Google et analysez les résultats.', ar: 'ابحث عن 3 كلمات مفتاحية في Google وحلل النتائج.', en: 'Search for 3 keywords on Google and analyze the results.' },
            exercise: { fr: 'Listez 20 mots-clés pour une entreprise de votre choix.', ar: 'اكتب 20 كلمة مفتاحية لمشروع من اختيارك.', en: 'List 20 keywords for a business of your choice.' },
            tip: { fr: '💡 Utilisez Google Keyword Planner pour trouver des mots-clés.', ar: '💡 استخدم Google Keyword Planner للعثور على كلمات مفتاحية.', en: '💡 Use Google Keyword Planner to find keywords.' }
          },
          {
            id: 'seo-b-2',
            title: { fr: 'Recherche de Mots-Clés et Intention de Recherche', ar: 'بحث الكلمات المفتاحية ونية البحث', en: 'Keyword Research and Search Intent' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['4 types d\'intention de recherche: informationnelle ("comment faire X"), navigationnelle ("nom de marque"), transactionnelle ("acheter X"), commerciale ("meilleur X").','Ciblez toujours des mots-clés qui correspondent à l\'intention de votre page — un article de blog ne classera jamais pour un mot-clé transactionnel.','Outils gratuits: Google Keyword Planner, AnswerThePublic, Google Trends, et la fonction "Recherches associées" en bas des résultats Google.','Les mots-clés "longue traîne" (3-5 mots précis, ex: "meilleur traiteur mariage Alger") ont moins de recherches mais convertissent mieux et sont plus faciles à classer.','Notez toujours le volume de recherche ET la difficulté — viser uniquement les mots-clés à fort volume mène souvent à une concurrence impossible à battre en débutant.'],
              ar: ['4 أنواع نية بحث: معلوماتية ("كيفاش ندير X")، ملاحية ("اسم ماركة")، تحويلية ("نشري X")، تجارية ("أحسن X").','استهدف دائماً كلمات مفتاحية تطابق نية صفحتك — مقال مدونة عمره ما يترتب لكلمة مفتاحية تحويلية.','أدوات مجانية: Google Keyword Planner، AnswerThePublic، Google Trends، وخاصية "عمليات بحث ذات صلة" أسفل نتائج Google.','الكلمات المفتاحية "الطويلة" (3-5 كلمات دقيقة، مثلاً "أحسن طرايتور عرس الجزائر") عندها بحث أقل لكن تحول أحسن وأسهل للترتيب.','سجل دائماً حجم البحث والصعوبة معاً — استهداف غير الكلمات بحجم بحث عالي غالباً يودي لمنافسة مستحيلة للمبتدئ.'],
              en: ['4 search intent types: informational ("how to do X"), navigational ("brand name"), transactional ("buy X"), commercial ("best X").','Always target keywords matching your page\'s intent — a blog post will never rank for a transactional keyword.','Free tools: Google Keyword Planner, AnswerThePublic, Google Trends, and the "Related searches" at the bottom of Google results.','"Long-tail" keywords (3-5 precise words, e.g. "best wedding caterer Algiers") have less search volume but convert better and are easier to rank.','Always note search volume AND difficulty together — targeting only high-volume keywords often leads to competition impossible to beat as a beginner.']
            },
            method: { fr: 'Tapez un mot-clé large dans Google et notez les 8 suggestions qui apparaissent en bas de page.', ar: 'اكتب كلمة مفتاحية واسعة ف Google ولاحظ 8 اقتراحات اللي تبان أسفل الصفحة.', en: 'Type a broad keyword into Google and note the 8 suggestions that appear at the bottom of the page.' },
            exercise: { fr: 'Classez vos 20 mots-clés de la leçon précédente par intention (info/nav/transactionnel/commercial).', ar: 'صنّف 20 كلمة مفتاحية من الدرس السابق حسب النية (معلومات/ملاحة/تحويل/تجاري).', en: 'Classify your 20 keywords from the previous lesson by intent (info/nav/transactional/commercial).' },
            tip: { fr: '💡 Un débutant devrait toujours viser des mots-clés longue traîne à faible concurrence en premier.', ar: '💡 المبتدئ خاصو دائماً يستهدف كلمات طويلة بمنافسة ضعيفة أولاً.', en: '💡 A beginner should always target low-competition long-tail keywords first.' }
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
              fr: ['Title: 50-60 caractères avec mot-clé','Meta description: 150-160 caractères avec CTA','H1-H6: un seul H1 par page','URL: courte, descriptive, avec mot-clé','Contenu: 800+ mots, répondez aux questions','Liens internes: reliez vos pages'],
              ar: ['Title: 50-60 حرف مع كلمة مفتاحية','Meta description: 150-160 حرف مع CTA','H1-H6: H1 واحد فقط لكل صفحة','الرابط: قصير، وصفي، مع كلمة مفتاحية','المحتوى: 800+ كلمة، جاوب على الأسئلة','الروابط الداخلية: اربط صفحاتك'],
              en: ['Title: 50-60 characters with keyword','Meta description: 150-160 characters with CTA','H1-H6: one H1 per page','URL: short, descriptive, with keyword','Content: 800+ words, answer questions','Internal links: link your pages']
            },
            method: { fr: 'Optimisez une page existante de votre site.', ar: 'حسّن صفحة موجودة على موقعك.', en: 'Optimize an existing page on your site.' },
            exercise: { fr: 'Rédigez un article SEO optimisé (800+ mots).', ar: 'اكتب مقالة SEO محسّنة (800+ كلمة).', en: 'Write an SEO-optimized article (800+ words).' },
            tip: { fr: '💡 Utilisez Yoast SEO ou Rank Math.', ar: '💡 استخدم Yoast SEO أو Rank Math.', en: '💡 Use Yoast SEO or Rank Math.' }
          },
          {
            id: 'seo-i-2',
            title: { fr: 'SEO Technique : Vitesse, Mobile et Sitemap', ar: 'SEO تقني: السرعة، الموبايل و Sitemap', en: 'Technical SEO: Speed, Mobile and Sitemap' },
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Testez la vitesse de votre site avec PageSpeed Insights (gratuit, de Google) — un site lent (+3s) fait fuir 50% des visiteurs.','Compressez toujours vos images avant de les mettre en ligne (TinyPNG.com, gratuit) — c\'est la cause n°1 des sites lents.','Le "Mobile-Friendly Test" de Google vérifie si votre site fonctionne bien sur téléphone — critère officiel de classement depuis 2019.','Un sitemap.xml (liste de toutes vos pages) soumis à Google Search Console aide Google à découvrir et indexer votre site plus vite.','Vérifiez qu\'il n\'y a pas de liens cassés (404) avec un outil gratuit comme Screaming Frog (version gratuite jusqu\'à 500 URLs).'],
              ar: ['اختبر سرعة موقعك بـ PageSpeed Insights (مجاني، من Google) — موقع بطيء (+3 ثواني) يخسر 50% من الزوار.','ضغط صورك دائماً قبل ما تحطهم أونلاين (TinyPNG.com، مجاني) — هذا السبب رقم 1 للمواقع البطيئة.','"Mobile-Friendly Test" من Google يتحقق إذا موقعك يخدم مزيان ف الهاتف — معيار ترتيب رسمي من 2019.','sitemap.xml (لائحة كل صفحاتك) مقدم لـ Google Search Console يساعد Google يكتشف ويفهرس موقعك أسرع.','تأكد ما كاينش روابط مكسورة (404) بأداة مجانية مثل Screaming Frog (نسخة مجانية لحد 500 رابط).'],
              en: ['Test your site\'s speed with PageSpeed Insights (free, from Google) — a slow site (+3s) drives away 50% of visitors.','Always compress your images before uploading them (TinyPNG.com, free) — this is the #1 cause of slow sites.','Google\'s "Mobile-Friendly Test" checks if your site works well on phones — an official ranking factor since 2019.','A sitemap.xml (list of all your pages) submitted to Google Search Console helps Google discover and index your site faster.','Check for broken links (404) with a free tool like Screaming Frog (free up to 500 URLs).']
            },
            method: { fr: 'Testez la vitesse de votre propre site (ou celui d\'un ami) avec PageSpeed Insights et notez le score.', ar: 'اختبر سرعة موقعك (أو موقع صاحبك) بـ PageSpeed Insights ولاحظ النتيجة.', en: 'Test your own site\'s (or a friend\'s) speed with PageSpeed Insights and note the score.' },
            exercise: { fr: 'Compressez 5 images d\'un site avec TinyPNG et comparez la taille avant/après.', ar: 'ضغط 5 صور من موقع بـ TinyPNG وقارن الحجم قبل/بعد.', en: 'Compress 5 images from a site with TinyPNG and compare the size before/after.' },
            tip: { fr: '💡 Une image mal compressée peut à elle seule ralentir un site de 2-3 secondes.', ar: '💡 صورة غير مضغوطة مزيان وحدها تقدر تبطي الموقع 2-3 ثوانٍ.', en: '💡 A single poorly compressed image can slow a site down by 2-3 seconds.' }
          }
        ]
      },
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
              fr: ['Backlinks = facteur de classement #1','Qualité > quantité','Guest blogging, broken link building, annuaires','Analysez concurrents avec Ahrefs/SEMrush','Contenu "linkable": guides, infographies','Évitez black hat'],
              ar: ['الروابط الخلفية = عامل الترتيب #1','الجودة > الكمية','Guest blogging, broken link building, أدلة','حلل منافسيك مع Ahrefs/SEMrush','محتوى "linkable": أدلة، إنفوغرافيك','تجنّب black hat'],
              en: ['Backlinks = ranking factor #1','Quality > quantity','Guest blogging, broken link building, directories','Analyze competitors with Ahrefs/SEMrush','"Linkable" content: guides, infographics','Avoid black hat']
            },
            method: { fr: 'Créez une stratégie de backlinks.', ar: 'أنشئ استراتيجية روابط خلفية.', en: 'Create a backlink strategy.' },
            exercise: { fr: 'Identifiez 20 sites pour obtenir un backlink.', ar: 'حدّد 20 موقعاً للحصول على رابط خلفي.', en: 'Identify 20 sites to get a backlink.' },
            tip: { fr: '💡 Les backlinks locaux (blogs algériens) sont très puissants.', ar: '💡 الروابط الخلفية المحلية (المدونات الجزائرية) قوية جداً.', en: '💡 Local backlinks (Algerian blogs) are very powerful.' }
          },
          {
            id: 'seo-a-2',
            title: { fr: 'SEO Local pour les Commerces Algériens', ar: 'SEO محلي للمشاريع الجزائرية', en: 'Local SEO for Algerian Businesses' },
            image: 'https://images.unsplash.com/photo-1432889821006-ca37c5ce1bfa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Google Business Profile (gratuit) est l\'outil n°1 du SEO local — sans lui, un commerce n\'apparaît jamais dans "Maps" ou le pack local.','Remplissez 100% du profil: horaires exacts, photos réelles (pas de stock), catégorie précise, numéro WhatsApp, description avec mots-clés locaux.','Encouragez activement les avis clients (Google reviews) — 5-10 avis positifs récents pèsent plus qu\'un logo parfait pour le classement local.','Répondez à TOUS les avis, positifs et négatifs — cela montre à Google (et aux clients) que le commerce est actif et sérieux.','Utilisez le nom de la ville dans vos contenus (titre, description) quand c\'est pertinent: "Traiteur à Oran" bat "Traiteur professionnel" pour une recherche locale.'],
              ar: ['Google Business Profile (مجاني) هو الأداة رقم 1 لـ SEO المحلي — بلاه، المشروع عمره ما يبان ف "Maps" أو الحزمة المحلية.','عمر البروفيل 100%: أوقات دقيقة، صور حقيقية (ماشي stock)، فئة دقيقة، رقم واتساب، وصف بكلمات مفتاحية محلية.','شجع بنشاط تقييمات الزبائن (Google reviews) — 5-10 تقييمات إيجابية حديثة توزن أكثر من شعار مثالي للترتيب المحلي.','رد على كل التقييمات، الإيجابية والسلبية — هذا يوري لـ Google (والزبائن) إن المشروع نشيط وجدي.','استخدم اسم المدينة ف محتواك (العنوان، الوصف) منين يكون مناسب: "طرايتور ف وهران" يفوز على "طرايتور محترف" لبحث محلي.'],
              en: ['Google Business Profile (free) is the #1 local SEO tool — without it, a business never appears in "Maps" or the local pack.','Fill out 100% of the profile: exact hours, real photos (no stock), precise category, WhatsApp number, description with local keywords.','Actively encourage customer reviews (Google reviews) — 5-10 recent positive reviews weigh more than a perfect logo for local ranking.','Reply to ALL reviews, positive and negative — this shows Google (and customers) the business is active and serious.','Use the city name in your content (title, description) when relevant: "Caterer in Oran" beats "Professional caterer" for a local search.']
            },
            method: { fr: 'Créez (ou auditez) un Google Business Profile et complétez tous les champs manquants.', ar: 'أنشئ (أو دقق) Google Business Profile وكمل كل الحقول الناقصة.', en: 'Create (or audit) a Google Business Profile and fill in all missing fields.' },
            exercise: { fr: 'Rédigez 3 modèles de réponse aux avis: un pour un avis 5 étoiles, un pour 3 étoiles, un pour 1 étoile.', ar: 'اكتب 3 نماذج رد على التقييمات: واحد لتقييم 5 نجوم، واحد لـ3 نجوم، واحد لنجمة وحدة.', en: 'Write 3 review response templates: one for a 5-star review, one for 3-star, one for 1-star.' },
            tip: { fr: '💡 Répondre à un avis négatif avec calme et professionnalisme peut convaincre plus de clients qu\'un avis positif.', ar: '💡 الرد على تقييم سلبي بهدوء واحترافية يقدر يقنع زبائن أكثر من تقييم إيجابي.', en: '💡 Responding calmly and professionally to a negative review can convince more clients than a positive one.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Diriger une agence SEO', ar: 'إدارة وكالة SEO', en: 'Lead an SEO agency' },
        lessons: [
          {
            id: 'seo-m-1',
            title: { fr: 'Agence SEO - De la Stratégie aux Résultats', ar: 'وكالة SEO - من الاستراتيجية للنتائج', en: 'SEO Agency - From Strategy to Results' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Audit SEO complet: technique, contenu, backlinks','Rapport PDF avec recommandations','Stratégie 6 mois: objectifs SMART, budget','KPIs: positions Google, trafic, taux de conversion','Outils: Search Console, Analytics, Ahrefs, SEMrush','Tarification: audit 30-80K, forfait 50-200K DZD'],
              ar: ['تدقيق SEO كامل: تقني، محتوى، روابط','تقرير PDF مع توصيات','استراتيجية 6 أشهر: أهداف SMART، ميزانية','KPIs: مراكز Google، الزيارات، معدل التحويل','الأدوات: Search Console, Analytics, Ahrefs, SEMrush','التسعير: تدقيق 30-80K، باقة 50-200K دج'],
              en: ['Complete SEO audit: technical, content, backlinks','PDF report with recommendations','6-month strategy: SMART goals, budget','KPIs: Google positions, traffic, conversion rate','Tools: Search Console, Analytics, Ahrefs, SEMrush','Pricing: audit 30-80K, package 50-200K DZD']
            },
            method: { fr: 'Réalisez un audit SEO complet.', ar: 'قم بتدقيق SEO كامل.', en: 'Perform a complete SEO audit.' },
            exercise: { fr: 'Créez votre offre de services SEO.', ar: 'أنشئ عرض الخدمات SEO الخاص بك.', en: 'Create your SEO service offering.' },
            tip: { fr: '💡 Les clients paient pour des résultats, pas pour du travail.', ar: '💡 الزبائن يدفعون للنتائج، مش للشغل.', en: '💡 Clients pay for results, not for work.' }
          },
          {
            id: 'seo-m-2',
            title: { fr: 'Rapports SEO et Fidélisation Client', ar: 'تقارير SEO والاحتفاظ بالزبون', en: 'SEO Reporting and Client Retention' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le SEO prend 3-6 mois pour montrer des résultats significatifs — expliquez cela AVANT de signer, jamais après, pour éviter les malentendus.','Un rapport mensuel doit montrer 3 choses: positions Google (mots-clés suivis), trafic organique (Analytics), et actions réalisées ce mois-ci.','Utilisez Google Search Console (gratuit) pour montrer au client des données officielles Google, plus crédibles qu\'un outil tiers.','Fixez des objectifs réalistes dès le départ (ex: top 10 sur 5 mots-clés en 4 mois) — un client avec des attentes claires reste plus longtemps.','Renouvelez le contrat 1 mois avant son échéance avec un résumé des progrès — ne laissez jamais un contrat expirer sans discussion.'],
              ar: ['SEO ياخذ 3-6 أشهر باش يوري نتائج مهمة — اشرح هذا قبل التوقيع، عمرك بعد، باش تفادي سوء الفهم.','التقرير الشهري خاصو يوري 3 حاجات: مراكز Google (كلمات مفتاحية متتبعة)، الزيارات العضوية (Analytics)، والإجراءات المنجزة هاد الشهر.','استخدم Google Search Console (مجاني) باش توري للزبون بيانات رسمية من Google، أكثر مصداقية من أداة خارجية.','حدد أهداف واقعية من البداية (مثلاً: top 10 على 5 كلمات مفتاحية ف 4 أشهر) — زبون بتوقعات واضحة يبقى أكثر.','جدد العقد شهر قبل انتهائه بملخص التقدم — عمرك ما تخلي عقد ينتهي بلا نقاش.'],
              en: ['SEO takes 3-6 months to show meaningful results — explain this BEFORE signing, never after, to avoid misunderstandings.','A monthly report should show 3 things: Google positions (tracked keywords), organic traffic (Analytics), and actions completed this month.','Use Google Search Console (free) to show the client official Google data, more credible than a third-party tool.','Set realistic goals from the start (e.g. top 10 on 5 keywords in 4 months) — a client with clear expectations stays longer.','Renew the contract 1 month before it expires with a progress summary — never let a contract lapse without discussion.']
            },
            method: { fr: 'Créez un template de rapport mensuel SEO avec les 3 sections essentielles.', ar: 'أنشئ نموذج تقرير شهري SEO بـ3 أقسام أساسية.', en: 'Create a monthly SEO report template with the 3 essential sections.' },
            exercise: { fr: 'Rédigez le premier email à envoyer à un client au moment de la signature, expliquant le délai de 3-6 mois.', ar: 'اكتب أول إيميل تبعثو لزبون وقت التوقيع، يشرح مدة 3-6 أشهر.', en: 'Write the first email to send a client at signing, explaining the 3-6 month timeline.' },
            tip: { fr: '💡 Un client bien informé dès le départ ne panique pas s\'il ne voit pas de résultats au bout de 3 semaines.', ar: '💡 الزبون اللي مفهم من البداية ما يخافش إذا ما شافش نتائج بعد 3 أسابيع.', en: '💡 A client well-informed from the start doesn\'t panic if they don\'t see results after 3 weeks.' }
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
          },
          {
            id: 'data-b-2',
            title: { fr: 'Nettoyer des Données avant de les Analyser', ar: 'تنظيف البيانات قبل تحليلها', en: 'Cleaning Data Before Analysis' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Règle d\'or: 80% du temps d\'un analyste va au nettoyage des données, 20% seulement à l\'analyse — c\'est normal, pas un problème.','Supprimez les doublons: Données → Supprimer les doublons dans Excel, en sélectionnant les colonnes à comparer.','Gérez les valeurs manquantes: ne les laissez jamais vides silencieusement — décidez de les supprimer, les remplacer par une moyenne, ou les marquer clairement.','Uniformisez les formats: "Alger", "ALGER", "alger" sont 3 valeurs différentes pour Excel — utilisez MAJUSCULE() ou NOMPROPRE() pour uniformiser.','Vérifiez les valeurs aberrantes (ex: un âge de 300 ans) avec un tri croissant/décroissant rapide sur chaque colonne numérique.'],
              ar: ['قاعدة ذهبية: 80% من وقت المحلل يمشي ف تنظيف البيانات، 20% بس ف التحليل — هذا عادي، ماشي مشكل.','امسح التكرارات: بيانات → إزالة التكرارات ف Excel، باختيار الأعمدة اللي تقارن.','دبر القيم الناقصة: ما تخليهاش فارغة بصمت — قرر تمسحها، تعوضها بمعدل، أو تعلمها بوضوح.','وحد الصيغ: "الجزائر"، "الجزائر العاصمة"، "جزائر" هي 3 قيم مختلفة لـ Excel — استخدم دوال باش توحدهم.','تحقق من القيم الشاذة (مثلاً عمر 300 سنة) بترتيب تصاعدي/تنازلي سريع على كل عمود رقمي.'],
              en: ['Golden rule: 80% of an analyst\'s time goes to cleaning data, only 20% to analysis — that\'s normal, not a problem.','Remove duplicates: Data → Remove Duplicates in Excel, selecting the columns to compare.','Handle missing values: never leave them silently blank — decide to delete them, replace with an average, or clearly flag them.','Standardize formats: "Algiers", "ALGIERS", "algiers" are 3 different values to Excel — use UPPER() or PROPER() to standardize.','Check for outliers (e.g. an age of 300) with a quick ascending/descending sort on each numeric column.']
            },
            method: { fr: 'Prenez le tableau de ventes créé dans la leçon précédente et ajoutez volontairement 3 erreurs (doublon, case vide, faute de frappe) à corriger.', ar: 'خد جدول المبيعات من الدرس السابق وزيد قصداً 3 أخطاء (تكرار، خانة فارغة، خطأ كتابة) باش تصححهم.', en: 'Take the sales table from the previous lesson and deliberately add 3 errors (duplicate, blank cell, typo) to fix.' },
            exercise: { fr: 'Nettoyez un tableau de 20 lignes contenant des doublons, des cases vides et des formats incohérents.', ar: 'نظف جدول 20 سطر فيه تكرارات، خانات فارغة وصيغ غير متناسقة.', en: 'Clean a 20-row table containing duplicates, blank cells and inconsistent formats.' },
            tip: { fr: '💡 Ne supprimez jamais le fichier original — travaillez toujours sur une copie pour le nettoyage.', ar: '💡 عمرك ما تمسح الملف الأصلي — اخدم دائماً على نسخة للتنظيف.', en: '💡 Never delete the original file — always work on a copy for cleaning.' }
          }
        ]
      },
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
          },
          {
            id: 'data-i-2',
            title: { fr: 'Construire des Dashboards Efficaces', ar: 'بناء لوحات قيادة فعالة', en: 'Building Effective Dashboards' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un bon dashboard répond à UNE question business claire (ex: "Où perdons-nous des clients?") — pas "montrer toutes les données possibles".','Placez les chiffres les plus importants en haut à gauche — c\'est la première zone que l\'oeil regarde (lecture en Z).','Limitez-vous à 5-7 visualisations par page — un dashboard surchargé devient illisible et perd son utilité.','Choisissez le bon graphique: évolution dans le temps = ligne, comparaison = barres, répartition = camembert (max 5 catégories).','Utilisez la couleur avec parcimonie: une seule couleur d\'alerte (rouge) pour les problèmes, le reste en tons neutres.'],
              ar: ['لوحة القيادة الجيدة تجاوب على سؤال تجاري واحد واضح (مثلاً: "وين نخسرو الزبائن؟") — ماشي "نوري كل البيانات الممكنة".','حط الأرقام الأهم فوق ف اليسار — هذي أول منطقة تشوفها العين (قراءة على شكل Z).','حدد نفسك بـ5-7 تصورات ف كل صفحة — لوحة محملة بزاف توالي غير مقروءة وتخسر فائدتها.','اختار الرسم المناسب: تطور ف الوقت = خط، مقارنة = أعمدة، توزيع = دائرة (كحد أقصى 5 فئات).','استخدم اللون بحذر: لون تنبيه واحد (أحمر) للمشاكل، الباقي بألوان محايدة.'],
              en: ['A good dashboard answers ONE clear business question (e.g. "Where are we losing customers?") — not "show all possible data".','Place the most important numbers top-left — this is the first zone the eye scans (Z-pattern reading).','Limit yourself to 5-7 visualizations per page — an overloaded dashboard becomes unreadable and loses its purpose.','Choose the right chart type: trend over time = line, comparison = bars, breakdown = pie (max 5 categories).','Use color sparingly: one single alert color (red) for problems, the rest in neutral tones.']
            },
            method: { fr: 'Prenez le dashboard de la leçon précédente et réduisez-le à 5 visualisations essentielles maximum.', ar: 'خد لوحة القيادة من الدرس السابق وقلصها لـ5 تصورات أساسية كحد أقصى.', en: 'Take the dashboard from the previous lesson and reduce it to 5 essential visualizations max.' },
            exercise: { fr: 'Créez un dashboard qui répond à UNE question précise: "Quel est notre meilleur produit par région?"', ar: 'أنشئ لوحة قيادة تجاوب على سؤال دقيق: "شنو أحسن منتج ديالنا حسب المنطقة؟"', en: 'Create a dashboard that answers ONE precise question: "What is our best product by region?"' },
            tip: { fr: '💡 Si vous devez expliquer votre dashboard pendant 5 minutes, il est trop compliqué — retravaillez-le.', ar: '💡 إذا خاصك تشرح لوحتك مدة 5 دقائق، تبقى معقدة بزاف — عاود اخدم عليها.', en: '💡 If you need 5 minutes to explain your dashboard, it\'s too complicated — rework it.' }
          }
        ]
      },
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
              fr: ['SQL est le langage standard pour interroger les bases de données.','SELECT * FROM clients;','SELECT nom FROM clients WHERE ville = "Alger";','JOIN: combinez plusieurs tables','GROUP BY: regroupez','ORDER BY: triez'],
              ar: ['SQL هي اللغة القياسية للاستعلام عن قواعد البيانات.','SELECT * FROM clients;','SELECT nom FROM clients WHERE ville = "Alger";','JOIN: ادمج عدة جداول','GROUP BY: جمّع','ORDER BY: رتّب'],
              en: ['SQL is the standard language for querying databases.','SELECT * FROM customers;','SELECT name FROM customers WHERE city = "Algiers";','JOIN: combine tables','GROUP BY: group','ORDER BY: sort']
            },
            method: { fr: 'Créez une base SQLite et écrivez 10 requêtes.', ar: 'أنشئ قاعدة SQLite واكتب 10 استعلامات.', en: 'Create an SQLite database and write 10 queries.' },
            exercise: { fr: 'Requête SQL pour les ventes par mois et produit.', ar: 'استعلام SQL للمبيعات حسب الشهر والمنتج.', en: 'SQL query for sales by month and product.' },
            tip: { fr: '💡 Utilisez SQLite Browser ou DBeaver.', ar: '💡 استخدم SQLite Browser أو DBeaver.', en: '💡 Use SQLite Browser or DBeaver.' }
          },
          {
            id: 'data-a-2',
            title: { fr: 'Python et Pandas : Automatiser l\'Analyse', ar: 'Python و Pandas: أتمتة التحليل', en: 'Python and Pandas: Automating Analysis' },
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Python + la librairie Pandas permet d\'analyser des fichiers Excel/CSV de millions de lignes qu\'Excel ne peut pas gérer.','Installez via Anaconda (gratuit) qui inclut déjà Python, Pandas et Jupyter Notebook (environnement de code interactif).','pd.read_csv(\'fichier.csv\') charge un fichier en quelques secondes; df.head() affiche les 5 premières lignes.','df.groupby(\'colonne\').sum() reproduit en une ligne ce qui prendrait 10 clics dans Excel pour grouper et sommer.','L\'avantage clé: un script Python écrit une fois se réexécute en 1 clic chaque mois sur de nouvelles données — Excel demande de tout refaire manuellement.'],
              ar: ['Python + مكتبة Pandas تسمح بتحليل ملفات Excel/CSV بملايين الأسطر اللي Excel ما يقدرش يديرهم.','ثبت عبر Anaconda (مجاني) اللي فيه Python، Pandas و Jupyter Notebook (بيئة كود تفاعلية).','pd.read_csv(\'fichier.csv\') يحمل ملف ف ثوانٍ قليلة؛ df.head() يعرض أول 5 أسطر.','df.groupby(\'colonne\').sum() يعيد بسطر واحد اللي يحتاج 10 كليكات ف Excel للتجميع والجمع.','الميزة الأساسية: سكريبت Python مكتوب مرة يعاد تنفيذه بكليك واحد كل شهر على بيانات جديدة — Excel يحتاج إعادة كل شيء يدوياً.'],
              en: ['Python + the Pandas library lets you analyze Excel/CSV files with millions of rows that Excel can\'t handle.','Install via Anaconda (free) which already includes Python, Pandas and Jupyter Notebook (interactive coding environment).','pd.read_csv(\'file.csv\') loads a file in seconds; df.head() displays the first 5 rows.','df.groupby(\'column\').sum() replicates in one line what would take 10 clicks in Excel to group and sum.','Key advantage: a Python script written once re-runs in 1 click every month on new data — Excel requires redoing everything manually.']
            },
            method: { fr: 'Installez Anaconda et ouvrez Jupyter Notebook — tapez print("Bonjour") pour vérifier que tout fonctionne.', ar: 'ثبت Anaconda وافتح Jupyter Notebook — اكتب print("Bonjour") باش تتأكد كلشي خدام.', en: 'Install Anaconda and open Jupyter Notebook — type print("Hello") to check everything works.' },
            exercise: { fr: 'Chargez un fichier CSV de ventes avec Pandas et affichez le total des ventes par produit avec groupby().', ar: 'حمل ملف CSV للمبيعات بـ Pandas واعرض مجموع المبيعات لكل منتج بـ groupby().', en: 'Load a sales CSV file with Pandas and display total sales per product using groupby().' },
            tip: { fr: '💡 Ne cherchez pas à tout apprendre de Python d\'un coup — maîtrisez juste read_csv, groupby et to_excel pour être déjà très utile.', ar: '💡 ما تحاولش تتعلم كل Python مرة وحدة — اتقن غير read_csv، groupby و to_excel باش تكون مفيد بزاف.', en: '💡 Don\'t try to learn all of Python at once — just master read_csv, groupby and to_excel to already be very useful.' }
          }
        ]
      },
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
          },
          {
            id: 'data-m-2',
            title: { fr: 'Data Storytelling : Présenter aux Clients', ar: 'سرد البيانات: العرض على الزبائن', en: 'Data Storytelling: Presenting to Clients' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['La majorité des clients ne comprennent pas les termes techniques (variance, corrélation) — traduisez toujours en impact business ("ce produit rapporte 3x plus").','Structurez chaque présentation en 3 parties: le contexte (pourquoi cette analyse), les découvertes clés (3 maximum), et les recommandations concrètes.','Une seule idée par slide/graphique — un client qui doit choisir où regarder ne retient rien.','Terminez toujours par une recommandation actionnable, pas juste des constats — "les ventes ont baissé" doit devenir "réduisez le stock du produit X de 30%".','Anticipez 2-3 questions probables du client et préparez vos réponses avant la présentation, pas pendant.'],
              ar: ['أغلب الزبائن ما يفهموش المصطلحات التقنية (variance، corrélation) — ترجم دائماً لتأثير تجاري ("هذا المنتج يدر 3 أضعاف أكثر").','رتب كل عرض ف 3 أجزاء: السياق (علاش هذا التحليل)، الاكتشافات الأساسية (3 كحد أقصى)، والتوصيات الملموسة.','فكرة واحدة فقط لكل slide/رسم — الزبون اللي خاصو يختار وين يشوف ما يحتفظش بوالو.','اختم دائماً بتوصية قابلة للتنفيذ، ماشي غير ملاحظات — "المبيعات هبطت" خاصها تولي "قلص مخزون المنتج X بـ30%".','توقع 2-3 أسئلة محتملة من الزبون وجهز إجاباتك قبل العرض، ماشي أثناءه.'],
              en: ['Most clients don\'t understand technical terms (variance, correlation) — always translate into business impact ("this product earns 3x more").','Structure every presentation in 3 parts: context (why this analysis), key findings (3 max), and concrete recommendations.','One idea per slide/chart only — a client who has to choose where to look retains nothing.','Always end with an actionable recommendation, not just observations — "sales dropped" should become "reduce Product X stock by 30%".','Anticipate 2-3 likely client questions and prepare your answers before the presentation, not during.']
            },
            method: { fr: 'Prenez une analyse déjà réalisée et réduisez-la à 3 découvertes clés maximum avec une recommandation chacune.', ar: 'خد تحليل دار من قبل وقلصو لـ3 اكتشافات أساسية كحد أقصى بتوصية لكل واحدة.', en: 'Take an analysis you\'ve already done and reduce it to 3 key findings max, each with a recommendation.' },
            exercise: { fr: 'Préparez une présentation de 5 slides pour un dirigeant non-technique, basée sur une de vos analyses précédentes.', ar: 'جهز عرض 5 slides لمدير ماشي تقني، مبني على واحد من تحليلاتك السابقة.', en: 'Prepare a 5-slide presentation for a non-technical executive, based on one of your previous analyses.' },
            tip: { fr: '💡 Un client convaincu par une histoire simple agit; un client noyé de chiffres reporte sa décision.', ar: '💡 الزبون اللي تقنعو قصة بسيطة يتحرك؛ الزبون اللي يغرق ف الأرقام يأجل قراره.', en: '💡 A client convinced by a simple story acts; a client drowning in numbers postpones their decision.' }
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
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–2', ar: 'الأسابيع 1–2', en: 'Weeks 1–2' },
        goal: { fr: 'Maîtriser les bases du copywriting', ar: 'إتقان أساسيات الكتابة الإعلانية', en: 'Master copywriting basics' },
        lessons: [
          {
            id: 'copy-b-1',
            title: { fr: 'Les Fondamentaux du Copywriting', ar: 'أساسيات الكتابة الإعلانية', en: 'Copywriting Fundamentals' },
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le Copywriting est l\'art de vendre avec des mots.','AIDA: Attention → Intérêt → Désir → Action.','Headlines: 80% lisent les titres, 20% le reste.','Caractéristiques vs Avantages: une caractéristique est un fait, l\'avantage est ce que ça apporte.','Call to Action: dites EXACTEMENT quoi faire.','Storytelling: les histoires vendent mieux que les faits.'],
              ar: ['الكتابة الإعلانية هي فن البيع بالكلمات.','AIDA: الانتباه → الاهتمام → الرغبة → الفعل.','العناوين: 80% يقرأون العناوين، 20% الباقي.','الميزات vs الفوائد: الميزة حقيقة، الفائدة هي ما يعود على الزبون.','الدعوة للفعل: قل بالضبط شو يدير.','سرد القصص: القصص تبيع أفضل من الحقائق.'],
              en: ['Copywriting is the art of selling with words.','AIDA: Attention → Interest → Desire → Action.','Headlines: 80% read headlines, 20% the rest.','Features vs Benefits: a feature is a fact, the benefit is what it brings.','Call to Action: tell EXACTLY what to do.','Storytelling: stories sell better than facts.']
            },
            method: { fr: 'Analysez 10 publicités.', ar: 'حلّل 10 إعلانات.', en: 'Analyze 10 ads.' },
            exercise: { fr: 'Écrivez un titre accrocheur.', ar: 'اكتب عنواناً جذاباً.', en: 'Write a catchy headline.' },
            tip: { fr: '💡 Les chiffres fonctionnent toujours: "5 secrets"', ar: '💡 الأرقام دائماً تشتغل: "5 أسرار"', en: '💡 Numbers always work: "5 secrets"' }
          },
          {
            id: 'copy-b-2',
            title: { fr: 'Comprendre son Audience avant d\'Écrire', ar: 'فهم الجمهور قبل الكتابة', en: 'Understanding Your Audience Before Writing' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Écrire pour "tout le monde" ne convainc personne — définissez UNE personne précise: âge, situation, problème principal.','Posez 3 questions avant chaque texte: Qu\'est-ce qui empêche cette personne de dormir? Qu\'est-ce qu\'elle veut vraiment (pas juste le produit)? Qu\'est-ce qui l\'empêche d\'acheter (objection)?','Utilisez le langage exact de votre audience — lisez les commentaires et avis clients pour capturer leurs propres mots, pas votre vocabulaire marketing.','Une bonne accroche parle du problème du lecteur, pas de votre produit — "Fatigué de X?" fonctionne mieux que "Découvrez notre produit".','Le "vous" doit apparaître plus souvent que le "nous/je" dans un texte de vente — le lecteur s\'intéresse à lui-même, pas à votre entreprise.'],
              ar: ['الكتابة لـ"كل الناس" ما تقنعش حتى حد — حدد شخص واحد دقيق: العمر، الوضعية، المشكلة الأساسية.','اطرح 3 أسئلة قبل كل نص: شنو اللي يقلق هذا الشخص؟ شنو اللي يبغيه فعلاً (ماشي غير المنتج)؟ شنو اللي يمنعو من الشراء (اعتراض)؟','استخدم اللغة الدقيقة لجمهورك — اقرا التعليقات وتقييمات الزبائن باش تلقط كلماتهم، ماشي مفرداتك التسويقية.','الجذبة الجيدة تحكي على مشكلة القارئ، ماشي على منتجك — "تعبان من X؟" تخدم أحسن من "اكتشف منتجنا".','"انت" خاصها تبان أكثر من "احنا/انا" ف نص بيعي — القارئ مهتم بروحو، ماشي بمشروعك.'],
              en: ['Writing for "everyone" convinces no one — define ONE specific person: age, situation, main problem.','Ask 3 questions before writing: What keeps this person up at night? What do they really want (not just the product)? What stops them from buying (objection)?','Use your audience\'s exact language — read customer comments and reviews to capture their own words, not your marketing vocabulary.','A good hook speaks to the reader\'s problem, not your product — "Tired of X?" works better than "Discover our product".','"You" should appear more often than "we/I" in sales copy — the reader cares about themselves, not your company.']
            },
            method: { fr: 'Choisissez un produit et répondez aux 3 questions clés pour définir son acheteur type.', ar: 'اختار منتج وجاوب على 3 أسئلة أساسية باش تحدد المشتري النموذجي ديالو.', en: 'Choose a product and answer the 3 key questions to define its typical buyer.' },
            exercise: { fr: 'Réécrivez un titre publicitaire générique en le rendant spécifique à une personne précise que vous avez définie.', ar: 'أعد كتابة عنوان إعلاني عام وخليه دقيق لشخص محدد عرفتو.', en: 'Rewrite a generic ad headline to make it specific to a precise person you\'ve defined.' },
            tip: { fr: '💡 Si votre texte peut s\'appliquer à n\'importe quel produit similaire, il n\'est pas assez spécifique.', ar: '💡 إذا نصك يقدر ينطبق على أي منتج مشابه، معناها ماشي دقيق بزاف.', en: '💡 If your copy could apply to any similar product, it\'s not specific enough.' }
          }
        ]
      },
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
              fr: ['Facebook: posts 100-200 mots, questions, émotions','Instagram: légendes 50-150 mots, hashtags, CTA','LinkedIn: posts 200-500 mots, professionnel','Twitter: 280 caractères max, concis','Reels/TikTok: scripts 15-30s, accroche forte'],
              ar: ['Facebook: منشورات 100-200 كلمة، أسئلة، عواطف','Instagram: تعليقات 50-150 كلمة، هاشتاجات، CTA','LinkedIn: منشورات 200-500 كلمة، احترافي','Twitter: 280 حرف كحد أقصى، موجز','Reels/TikTok: سكريبتات 15-30ث، جذبة قوية'],
              en: ['Facebook: 100-200 word posts, questions, emotions','Instagram: 50-150 word captions, hashtags, CTA','LinkedIn: 200-500 word posts, professional','Twitter: 280 characters max, concise','Reels/TikTok: 15-30s scripts, strong hook']
            },
            method: { fr: 'Créez 5 posts pour différentes plateformes.', ar: 'أنشئ 5 منشورات لمنصات مختلفة.', en: 'Create 5 posts for different platforms.' },
            exercise: { fr: 'Rédigez une légende Instagram complète.', ar: 'اكتب تعليقاً إعلانياً كاملاً لـ Instagram.', en: 'Write a complete Instagram caption.' },
            tip: { fr: '💡 Adaptez votre ton à chaque plateforme.', ar: '💡 طوّع نبرتك لكل منصة.', en: '💡 Adapt your tone to each platform.' }
          },
          {
            id: 'copy-i-2',
            title: { fr: 'Copywriting Email : Objets et Séquences', ar: 'الكتابة الإعلانية للإيميل: العناوين والسلاسل', en: 'Email Copywriting: Subject Lines and Sequences' },
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['L\'objet de l\'email détermine 50% du taux d\'ouverture — un bon email avec un mauvais objet ne sera jamais lu.','Objets efficaces: créez une curiosité ("La raison pour laquelle X..."), utilisez des chiffres, ou posez une question directe.','Évitez les mots qui déclenchent les spams: "GRATUIT", "!!!", tout en majuscules — cela réduit la délivrabilité.','Une séquence email de bienvenue (3-5 emails automatiques) convertit mieux qu\'un seul email: email 1 = bienvenue, email 2 = valeur, email 3 = offre.','Chaque email ne doit avoir qu\'UN SEUL call-to-action — plusieurs CTA dans le même email dispersent l\'attention et réduisent les clics.'],
              ar: ['عنوان الإيميل يحدد 50% من معدل الفتح — إيميل جيد بعنوان سيء عمرو ما يتقرا.','عناوين فعالة: اصنع فضول ("السبب اللي X...")، استخدم أرقام، أو اطرح سؤال مباشر.','تجنب الكلمات اللي تفعّل السبام: "مجاني"، "!!!"، كلشي بحروف كبيرة — هذا يقلل التوصيل.','سلسلة إيميلات ترحيبية (3-5 إيميلات تلقائية) تحول أحسن من إيميل واحد: إيميل 1 = ترحيب، إيميل 2 = قيمة، إيميل 3 = عرض.','كل إيميل خاصو يكون فيه دعوة فعل وحدة فقط — عدة CTA ف نفس الإيميل تشتت الانتباه وتقلل النقرات.'],
              en: ['The subject line determines 50% of the open rate — a great email with a bad subject line will never get read.','Effective subject lines: create curiosity ("The reason X..."), use numbers, or ask a direct question.','Avoid spam-trigger words: "FREE", "!!!", all caps — this reduces deliverability.','A welcome email sequence (3-5 automatic emails) converts better than a single email: email 1 = welcome, email 2 = value, email 3 = offer.','Each email should have only ONE call-to-action — multiple CTAs in the same email scatter attention and reduce clicks.']
            },
            method: { fr: 'Écrivez 5 versions différentes d\'un même objet d\'email et choisissez la plus intrigante.', ar: 'اكتب 5 نسخ مختلفة لنفس عنوان الإيميل واختار أكثرها إثارة للفضول.', en: 'Write 5 different versions of the same email subject line and pick the most intriguing.' },
            exercise: { fr: 'Rédigez une séquence de 3 emails de bienvenue pour un nouvel abonné (bienvenue → valeur → offre).', ar: 'اكتب سلسلة 3 إيميلات ترحيبية لمشترك جديد (ترحيب → قيمة → عرض).', en: 'Write a 3-email welcome sequence for a new subscriber (welcome → value → offer).' },
            tip: { fr: '💡 Testez toujours 2 objets différents sur une petite partie de votre liste avant d\'envoyer à tout le monde.', ar: '💡 جرب دائماً عنوانين مختلفين على جزء صغير من قائمتك قبل ما تبعث لكل الناس.', en: '💡 Always test 2 different subject lines on a small part of your list before sending to everyone.' }
          }
        ]
      },
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
          },
          {
            id: 'copy-a-2',
            title: { fr: 'Tester ses Textes avec l\'A/B Testing', ar: 'اختبار نصوصك بـ A/B Testing', en: 'Testing Your Copy with A/B Testing' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['L\'A/B testing compare 2 versions d\'un même texte (A et B) envoyées à des audiences similaires pour voir laquelle convertit le mieux.','Ne testez qu\'UN SEUL élément à la fois (le titre OU le CTA OU l\'image) — tester plusieurs éléments en même temps rend impossible de savoir ce qui a fonctionné.','Un test a besoin d\'un minimum de données pour être fiable — sur de petites audiences (moins de 100 personnes), les résultats peuvent être dus au hasard.','Vos propres opinions ne comptent pas en copywriting — seuls les résultats du test déterminent la meilleure version, même si vous préférez esthétiquement l\'autre.','Documentez chaque test (ce qui a été testé, résultat, date) pour construire une bibliothèque de ce qui fonctionne pour votre audience spécifique.'],
              ar: ['A/B testing يقارن نسختين من نفس النص (A و B) مبعوثين لجمهور متشابه باش تشوف أيهم يحول أحسن.','اختبر غير عنصر واحد ف كل مرة (العنوان أو CTA أو الصورة) — اختبار عدة عناصر مرة وحدة يخلي مستحيل تعرف شنو اللي خدم.','الاختبار محتاج حد أدنى من البيانات باش يكون موثوق — ف جمهور صغير (أقل من 100 شخص)، النتائج ممكن تكون صدفة.','آراءك الشخصية ما تهمش ف الكتابة الإعلانية — نتائج الاختبار وحدها اللي تحدد أحسن نسخة، حتى لو تفضل الأخرى جمالياً.','وثق كل اختبار (شنو تم اختباره، النتيجة، التاريخ) باش تبني مكتبة لما يخدم مع جمهورك الخاص.'],
              en: ['A/B testing compares 2 versions of the same text (A and B) sent to similar audiences to see which converts better.','Only test ONE element at a time (the headline OR the CTA OR the image) — testing multiple elements at once makes it impossible to know what worked.','A test needs a minimum amount of data to be reliable — on small audiences (under 100 people), results can be due to chance.','Your own opinions don\'t count in copywriting — only test results determine the best version, even if you aesthetically prefer the other.','Document every test (what was tested, result, date) to build a library of what works for your specific audience.']
            },
            method: { fr: 'Écrivez 2 versions différentes d\'un même titre publicitaire, en changeant uniquement l\'accroche.', ar: 'اكتب نسختين مختلفتين لنفس العنوان الإعلاني، بتغيير الجذبة فقط.', en: 'Write 2 different versions of the same ad headline, changing only the hook.' },
            exercise: { fr: 'Concevez un plan de test A/B complet: quel élément tester, sur quelle audience, et comment mesurer le résultat.', ar: 'صمم خطة اختبار A/B كاملة: أي عنصر تختبر، على أي جمهور، وكيفاش تقيس النتيجة.', en: 'Design a complete A/B test plan: which element to test, on which audience, and how to measure the result.' },
            tip: { fr: '💡 Même les copywriters expérimentés se trompent souvent sur quelle version va gagner — c\'est pour ça qu\'on teste.', ar: '💡 حتى كتاب الإعلانات المحترفين غالباً يغلطو على أي نسخة راح تربح — لهذا نختبرو.', en: '💡 Even experienced copywriters are often wrong about which version will win — that\'s why we test.' }
          }
        ]
      },
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
          },
          {
            id: 'copy-m-2',
            title: { fr: 'Construire son Portfolio et Choisir une Niche', ar: 'بناء بورتفوليو واختيار مجال', en: 'Building Your Portfolio and Choosing a Niche' },
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un copywriter généraliste ("j\'écris pour tous les secteurs") a plus de mal à se vendre qu\'un spécialiste ("je rédige des emails pour les e-commerces de mode").','Choisissez une niche selon 2 critères: un secteur qui vous intéresse vraiment, et où les entreprises ont un budget marketing établi.','Votre portfolio doit montrer des résultats, pas juste du texte: si possible, ajoutez le contexte ("cet email a généré 40 ventes en 24h").','Sans clients réels au début, créez 3-5 échantillons fictifs de haute qualité dans votre niche choisie — précisez qu\'il s\'agit d\'exemples.','Utilisez LinkedIn activement dans votre niche: commentez, partagez du contenu utile — c\'est souvent plus rentable que la prospection à froid pour un copywriter.'],
              ar: ['كاتب إعلانات عام ("نكتب لكل القطاعات") صعيب عليه يبيع روحو أكثر من متخصص ("نكتب إيميلات لمتاجر الموضة الإلكترونية").','اختار مجال حسب 2 معايير: قطاع يهمك فعلاً، وفيه المشاريع عندها ميزانية تسويقية ثابتة.','بورتفوليوك خاصو يوري نتائج، ماشي غير نص: إذا أمكن، زيد السياق ("هذا الإيميل جاب 40 بيعة ف 24 ساعة").','بلا زبائن حقيقيين ف البداية، اصنع 3-5 عينات وهمية عالية الجودة ف المجال اللي اخترتو — وضح إنها أمثلة.','استخدم LinkedIn بنشاط ف مجالك: علق، شارك محتوى مفيد — غالباً أربح من البحث البارد لكاتب إعلانات.'],
              en: ['A generalist copywriter ("I write for all sectors") struggles more to sell themselves than a specialist ("I write emails for fashion e-commerce").','Choose a niche based on 2 criteria: a sector you genuinely find interesting, and where businesses have established marketing budgets.','Your portfolio should show results, not just text: if possible, add context ("this email generated 40 sales in 24h").','Without real clients at first, create 3-5 high-quality fictional samples in your chosen niche — clearly state they\'re examples.','Use LinkedIn actively in your niche: comment, share useful content — this is often more profitable than cold outreach for a copywriter.']
            },
            method: { fr: 'Listez 3 secteurs qui vous intéressent et évaluez pour chacun s\'il a un budget marketing établi.', ar: 'اكتب 3 قطاعات تهمك وقيم لكل واحد إذا عندو ميزانية تسويقية ثابتة.', en: 'List 3 sectors that interest you and evaluate for each whether it has an established marketing budget.' },
            exercise: { fr: 'Choisissez une niche et créez 2 échantillons fictifs de haute qualité (un post et un email) pour cette niche.', ar: 'اختار مجال واصنع عينتين وهميتين عالية الجودة (منشور وإيميل) لهاد المجال.', en: 'Choose a niche and create 2 high-quality fictional samples (a post and an email) for that niche.' },
            tip: { fr: '💡 Il vaut mieux être "LE copywriter des salles de sport" que "un copywriter parmi mille".', ar: '💡 أحسن تكون "كاتب الإعلانات ديال القاعات الرياضية" من "كاتب إعلانات وسط الألف".', en: '💡 It\'s better to be "THE copywriter for gyms" than "a copywriter among a thousand".' }
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
              fr: ['UI = Interface Utilisateur = apparence du produit','UX = Expérience Utilisateur = comment l\'utilisateur se sent','En 3D: UI devient immersive (profondeur, perspective)','Objectif: créer des produits 3D que les gens aiment'],
              ar: ['UI = واجهة المستخدم = مظهر المنتج','UX = تجربة المستخدم = كيف يشعر المستخدم','في 3D: UI تصبح غامرة (عمق، منظور)','الهدف: إنشاء منتجات 3D يحبها الناس'],
              en: ['UI = User Interface = appearance of the product','UX = User Experience = how the user feels','In 3D: UI becomes immersive (depth, perspective)','Goal: create 3D products people love']
            },
            method: { fr: 'Analysez 3 apps avec des éléments 3D.', ar: 'حلل 3 تطبيقات بعناصر 3D.', en: 'Analyze 3 apps with 3D elements.' },
            exercise: { fr: 'Comparez un design 2D vs 3D. Notez 10 différences.', ar: 'قارن تصميم 2D vs 3D. سجل 10 اختلافات.', en: 'Compare a 2D vs 3D design. Note 10 differences.' },
            tip: { fr: '💡 Le 3D doit être subtil. Trop de 3D tue le 3D.', ar: '💡 يجب أن يكون 3D خفيفاً. الكثير من 3D يقتل 3D.', en: '💡 3D must be subtle. Too much 3D kills 3D.' }
          },
          {
            id: 'uiux-b-2',
            title: { fr: 'Le Wireframing : Structurer avant de Décorer', ar: 'الـ Wireframing: التنظيم قبل التزيين', en: 'Wireframing: Structure Before Decoration' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un wireframe est un croquis basse-fidélité (gris, sans couleur ni police finale) qui montre uniquement la structure et l\'organisation des éléments.','L\'avantage: un wireframe se dessine en 10 minutes sur papier, contre plusieurs heures pour un design final — cela permet d\'itérer vite sans perdre de temps.','Commencez toujours par le mobile (écran le plus contraint) avant le desktop — c\'est plus facile d\'ajouter de l\'espace que d\'en enlever.','Placez les éléments par ordre de priorité: ce que l\'utilisateur doit voir en premier va en haut/au centre, le secondaire en dessous.','Figma (gratuit) a une bibliothèque de formes basiques (rectangles gris, lignes de texte) parfaite pour wireframer rapidement.'],
              ar: ['الـ wireframe هو رسم بدقة منخفضة (رمادي، بلا لون أو خط نهائي) يوري بس الهيكل وتنظيم العناصر.','الفائدة: wireframe يترسم ف 10 دقائق على ورقة، مقابل ساعات لتصميم نهائي — هذا يسمح بتكرار سريع بلا ضياع وقت.','ابدا دائماً بالموبايل (الشاشة الأكثر تقييداً) قبل الكمبيوتر — أسهل تزيد مساحة من ما تنقصها.','حط العناصر حسب الأولوية: اللي خاص المستخدم يشوفو أول يمشي فوق/ف الوسط، الثانوي تحت.','Figma (مجاني) عندها مكتبة أشكال أساسية (مستطيلات رمادية، خطوط نص) مثالية للـ wireframe السريع.'],
              en: ['A wireframe is a low-fidelity sketch (gray, no color or final font) that shows only the structure and organization of elements.','The advantage: a wireframe can be drawn in 10 minutes on paper, versus several hours for a final design — this allows fast iteration without wasting time.','Always start with mobile (the most constrained screen) before desktop — it\'s easier to add space than to remove it.','Place elements by priority order: what the user must see first goes at the top/center, secondary elements below.','Figma (free) has a library of basic shapes (gray rectangles, text lines) perfect for quick wireframing.']
            },
            method: { fr: 'Dessinez à la main sur papier le wireframe d\'une page d\'accueil simple en 10 minutes chrono.', ar: 'ارسم بيدك على ورقة wireframe لصفحة رئيسية بسيطة ف 10 دقائق بالساعة.', en: 'Hand-sketch on paper the wireframe of a simple homepage in a timed 10 minutes.' },
            exercise: { fr: 'Créez un wireframe basse-fidélité (Figma ou papier) pour l\'écran d\'accueil d\'une app de livraison de nourriture.', ar: 'أنشئ wireframe بدقة منخفضة (Figma أو ورقة) لشاشة رئيسية لتطبيق توصيل أكل.', en: 'Create a low-fidelity wireframe (Figma or paper) for the home screen of a food delivery app.' },
            tip: { fr: '💡 Ne montrez jamais un wireframe en couleur à un client — il se concentrera sur les couleurs au lieu de la structure.', ar: '💡 عمرك ما توري wireframe بالألوان لزبون — راح يركز على الألوان بدل الهيكل.', en: '💡 Never show a colored wireframe to a client — they\'ll focus on colors instead of structure.' }
          }
        ]
      },
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
          },
          {
            id: 'uiux-i-2',
            title: { fr: 'Prototypage et Parcours Utilisateur dans Figma', ar: 'النمذجة الأولية ومسار المستخدم ف Figma', en: 'Prototyping and User Flows in Figma' },
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un prototype relie plusieurs écrans avec des interactions cliquables — cela simule l\'app réelle sans écrire de code.','Dans Figma: mode "Prototype" (en haut), reliez un bouton à un écran cible en glissant une flèche depuis le bord de l\'élément.','Un "user flow" (parcours utilisateur) cartographie chaque étape depuis l\'ouverture de l\'app jusqu\'à l\'objectif final (ex: achat) — dessinez-le avant de designer les écrans.','Utilisez des transitions simples (Instant, Dissolve) plutôt que des animations complexes pour un prototype de test rapide.','Partagez le prototype avec un lien Figma cliquable (gratuit) — le testeur n\'a besoin d\'aucun compte pour l\'essayer.'],
              ar: ['البروتوتايب يربط عدة شاشات بتفاعلات قابلة للنقر — هذا يحاكي التطبيق الحقيقي بلا كتابة كود.','ف Figma: وضع "Prototype" (فوق)، اربط زر بشاشة هدف بسحب سهم من حافة العنصر.','"user flow" (مسار المستخدم) يخطط كل خطوة من فتح التطبيق للهدف النهائي (مثلاً الشراء) — ارسمو قبل تصميم الشاشات.','استخدم انتقالات بسيطة (Instant، Dissolve) بدل رسوم متحركة معقدة لبروتوتايب اختبار سريع.','شارك البروتوتايب برابط Figma قابل للنقر (مجاني) — المختبر ما يحتاج حساب باش يجربو.'],
              en: ['A prototype links multiple screens with clickable interactions — this simulates the real app without writing code.','In Figma: "Prototype" mode (top), connect a button to a target screen by dragging an arrow from the element\'s edge.','A "user flow" maps out every step from opening the app to the final goal (e.g. purchase) — draw it before designing the screens.','Use simple transitions (Instant, Dissolve) rather than complex animations for a quick test prototype.','Share the prototype with a clickable Figma link (free) — the tester needs no account to try it.']
            },
            method: { fr: 'Reliez 2 écrans wireframés de la leçon précédente avec un simple clic dans le mode Prototype de Figma.', ar: 'اربط شاشتين wireframe من الدرس السابق بكليك بسيط ف وضع Prototype ديال Figma.', en: 'Link 2 wireframed screens from the previous lesson with a simple click in Figma\'s Prototype mode.' },
            exercise: { fr: 'Créez un prototype cliquable de 3-4 écrans pour un parcours "commander un plat" dans une app de livraison.', ar: 'أنشئ بروتوتايب قابل للنقر بـ3-4 شاشات لمسار "طلب طبق" ف تطبيق توصيل.', en: 'Create a clickable prototype of 3-4 screens for an "order a meal" flow in a delivery app.' },
            tip: { fr: '💡 Testez votre prototype vous-même en essayant de "vous perdre" — si c\'est facile de se perdre, simplifiez le parcours.', ar: '💡 جرب البروتوتايب بروحك وحاول "تضيع" — إذا سهل تضيع، بسّط المسار.', en: '💡 Test your own prototype by trying to "get lost" — if it\'s easy to get lost, simplify the flow.' }
          }
        ]
      },
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
          },
          {
            id: 'uiux-a-2',
            title: { fr: 'Accessibilité et Tests d\'Utilisabilité', ar: 'إمكانية الوصول واختبارات سهولة الاستخدام', en: 'Accessibility and Usability Testing' },
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['L\'accessibilité conçoit pour tous, y compris les personnes malvoyantes ou daltoniennes — ce n\'est pas optionnel, c\'est un signe de professionnalisme.','Vérifiez le contraste texte/fond avec WebAIM Contrast Checker (gratuit) — un ratio minimum de 4.5:1 est requis pour un texte lisible.','Ne comptez jamais uniquement sur la couleur pour transmettre une information (ex: erreur en rouge seul) — ajoutez toujours une icône ou un texte.','Un test d\'utilisabilité simple: donnez 3 tâches à 5 utilisateurs réels sur votre prototype et observez où ils bloquent, sans les aider.','5 utilisateurs suffisent pour détecter 80% des problèmes d\'utilisabilité majeurs — inutile d\'attendre d\'en avoir 50 pour commencer à corriger.'],
              ar: ['إمكانية الوصول تصمم للجميع، بما فيهم ضعاف البصر أو عمى الألوان — ماشي اختياري، هو علامة احترافية.','تحقق من تباين النص/الخلفية بـ WebAIM Contrast Checker (مجاني) — نسبة 4.5:1 كحد أدنى مطلوبة لنص مقروء.','عمرك ما تعتمد غير على اللون لنقل معلومة (مثلاً خطأ بالأحمر لوحدو) — زيد دائماً أيقونة أو نص.','اختبار سهولة استخدام بسيط: أعطي 3 مهام لـ5 مستخدمين حقيقيين على البروتوتايب ديالك ولاحظ وين يتعطلو، بلا ما تعاونهم.','5 مستخدمين كافيين باش تكتشف 80% من مشاكل سهولة الاستخدام الكبرى — ما فيهاش فايدة تستنى 50 باش تبدا تصحح.'],
              en: ['Accessibility designs for everyone, including visually impaired or colorblind users — this isn\'t optional, it\'s a mark of professionalism.','Check text/background contrast with WebAIM Contrast Checker (free) — a minimum 4.5:1 ratio is required for readable text.','Never rely on color alone to convey information (e.g. an error in red alone) — always add an icon or text too.','A simple usability test: give 3 tasks to 5 real users on your prototype and observe where they get stuck, without helping them.','5 users are enough to detect 80% of major usability problems — no need to wait for 50 users before starting to fix issues.']
            },
            method: { fr: 'Vérifiez le contraste des couleurs d\'un design existant avec WebAIM Contrast Checker.', ar: 'تحقق من تباين ألوان تصميم موجود بـ WebAIM Contrast Checker.', en: 'Check the color contrast of an existing design with WebAIM Contrast Checker.' },
            exercise: { fr: 'Testez votre prototype de la leçon précédente avec 3 personnes de votre entourage: donnez-leur une tâche et observez sans les guider.', ar: 'جرب البروتوتايب ديالك من الدرس السابق مع 3 أشخاص من محيطك: أعطيهم مهمة ولاحظ بلا ما توجههم.', en: 'Test your prototype from the previous lesson with 3 people around you: give them a task and observe without guiding them.' },
            tip: { fr: '💡 Si 3 utilisateurs différents bloquent au même endroit, ce n\'est pas un hasard — c\'est un vrai problème de design à corriger.', ar: '💡 إذا 3 مستخدمين مختلفين تعطلو ف نفس المكان، ماشي صدفة — هي مشكلة تصميم حقيقية خاصها تصحيح.', en: '💡 If 3 different users get stuck at the same spot, it\'s not chance — it\'s a real design problem to fix.' }
          }
        ]
      },
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
          },
          {
            id: 'uiux-m-2',
            title: { fr: 'Handoff aux Développeurs et Design Systems', ar: 'تسليم للمطورين وأنظمة التصميم', en: 'Developer Handoff and Design Systems' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le "handoff" est le moment où vous transmettez le design aux développeurs — un mauvais handoff cause 90% des écarts entre design et produit final.','Dans Figma, activez le mode "Inspect" pour que les développeurs voient directement les valeurs exactes: couleurs (HEX), espacements (px), polices, tailles.','Un "design system" regroupe tous les composants réutilisables (boutons, champs, cartes) avec leurs variantes — cela évite de redessiner les mêmes éléments à chaque écran.','Nommez vos calques et composants clairement ("Bouton/Primaire/Actif" plutôt que "Rectangle 47") — les développeurs perdent un temps énorme avec des fichiers mal organisés.','Prévoyez toujours les états manquants (hover, erreur, chargement, vide) — les designers oublient souvent ces états, ce qui bloque les développeurs.'],
              ar: ['"الـ handoff" هو اللحظة اللي تسلم فيها التصميم للمطورين — handoff سيء يسبب 90% من الفروقات بين التصميم والمنتج النهائي.','ف Figma، فعّل وضع "Inspect" باش المطورين يشوفو مباشرة القيم الدقيقة: الألوان (HEX)، المسافات (px)، الخطوط، الأحجام.','"design system" يجمع كل المكونات القابلة لإعادة الاستخدام (أزرار، حقول، بطاقات) بتنوعاتهم — هذا يفادي إعادة رسم نفس العناصر ف كل شاشة.','سمي طبقاتك ومكوناتك بوضوح ("زر/أساسي/فعال" بدل "مستطيل 47") — المطورين يخسرو وقت هائل بملفات غير منظمة.','توقع دائماً الحالات الناقصة (hover، خطأ، تحميل، فارغ) — المصممين غالباً ينساو هاد الحالات، وهذا يعطل المطورين.'],
              en: ['"Handoff" is the moment you pass the design to developers — a bad handoff causes 90% of gaps between design and final product.','In Figma, enable "Inspect" mode so developers can see exact values directly: colors (HEX), spacing (px), fonts, sizes.','A "design system" groups all reusable components (buttons, fields, cards) with their variants — this avoids redrawing the same elements on every screen.','Name your layers and components clearly ("Button/Primary/Active" rather than "Rectangle 47") — developers waste enormous time with poorly organized files.','Always plan for missing states (hover, error, loading, empty) — designers often forget these states, which blocks developers.']
            },
            method: { fr: 'Prenez un composant déjà designé et créez ses 3 variantes manquantes (hover, désactivé, chargement).', ar: 'خد مكون مصمم من قبل واصنع 3 تنوعات ناقصة (hover، معطل، تحميل).', en: 'Take an already designed component and create its 3 missing variants (hover, disabled, loading).' },
            exercise: { fr: 'Créez une mini bibliothèque de composants (3 boutons, 1 champ de texte) avec des noms clairs et tous leurs états.', ar: 'أنشئ مكتبة مكونات مصغرة (3 أزرار، حقل نص واحد) بأسماء واضحة وكل حالاتهم.', en: 'Create a mini component library (3 buttons, 1 text field) with clear names and all their states.' },
            tip: { fr: '💡 Un design system bien construit fait gagner des dizaines d\'heures sur chaque nouveau projet — c\'est un investissement, pas une perte de temps.', ar: '💡 design system مبني مزيان يوفر عشرات الساعات ف كل مشروع جديد — هو استثمار، ماشي ضياع وقت.', en: '💡 A well-built design system saves dozens of hours on every new project — it\'s an investment, not wasted time.' }
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
              fr: ['Automatisation = faire faire par des machines ce qui est répétitif.','n8n = outil open-source qui connecte vos applications.','Alternative à Zapier/Make (gratuit, auto-hébergé).','Workflows = chaînes d\'actions qui s\'exécutent automatiquement.','Nodes = actions, Triggers = déclencheurs, Connections = liens.'],
              ar: ['الأتمتة = جعل الآلات تقوم بما هو متكرر.','n8n = أداة مفتوحة المصدر تربط تطبيقاتك.','بديل لـ Zapier/Make (مجاني، مستضاف ذاتياً).','سير العمل = سلاسل إجراءات يتم تنفيذها تلقائياً.','العقد = إجراءات، المشغلات = مبتدئات، الروابط = وصلات.'],
              en: ['Automation = having machines do what is repetitive.','n8n = open-source tool that connects your apps.','Alternative to Zapier/Make (free, self-hosted).','Workflows = chains of actions that execute automatically.','Nodes = actions, Triggers = starters, Connections = links.']
            },
            method: { fr: 'Identifiez 5 tâches répétitives que vous faites chaque semaine.', ar: 'حدد 5 مهام متكررة تقوم بها كل أسبوع.', en: 'Identify 5 repetitive tasks you do every week.' },
            exercise: { fr: 'Listez 10 processus à automatiser.', ar: 'اكتب 10 عمليات لأتمتتها.', en: 'List 10 processes to automate.' },
            tip: { fr: '💡 Si vous faites une tâche plus de 3 fois, automatisez-la.', ar: '💡 إذا قمت بمهمة أكثر من 3 مرات، قم بأتمتتها.', en: '💡 If you do a task more than 3 times, automate it.' }
          },
          {
            id: 'n8n-b-2',
            title: { fr: 'Modèles d\'Automatisation Courants', ar: 'نماذج أتمتة شائعة', en: 'Common Automation Templates' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['n8n propose des centaines de modèles prêts à l\'emploi (n8n.io/workflows) — commencez toujours par chercher un modèle avant de construire de zéro.','Automatisation la plus simple pour débuter: nouvelle réponse à un formulaire Google Forms → envoi automatique d\'un email de confirmation.','2e automatisation utile: nouveau message WhatsApp/Instagram → notification automatique sur Telegram/Slack pour ne rien manquer.','3e automatisation: nouvelle ligne dans Google Sheets → création automatique d\'un événement dans Google Calendar.','Chaque workflow a un "Trigger" (déclencheur, ex: nouveau formulaire) suivi d\'un ou plusieurs "Nodes" (actions, ex: envoyer email) — c\'est toujours cette structure de base.'],
              ar: ['n8n يقترح مئات النماذج الجاهزة (n8n.io/workflows) — دور دائماً على نموذج قبل ما تبني من الصفر.','أبسط أتمتة للبداية: رد جديد على استمارة Google Forms → بعث تلقائي لإيميل تأكيد.','2 أتمتة مفيدة: رسالة جديدة WhatsApp/Instagram → إشعار تلقائي على Telegram/Slack باش ما تفوتكش.','3 أتمتة: سطر جديد ف Google Sheets → إنشاء تلقائي لحدث ف Google Calendar.','كل workflow عندو "Trigger" (مشغل، مثلاً استمارة جديدة) متبوع بواحد أو أكثر "Nodes" (إجراءات، مثلاً بعث إيميل) — دايماً نفس الهيكل الأساسي.'],
              en: ['n8n offers hundreds of ready-made templates (n8n.io/workflows) — always search for a template before building from scratch.','Simplest automation to start with: new Google Forms response → automatic confirmation email sent.','2nd useful automation: new WhatsApp/Instagram message → automatic Telegram/Slack notification so nothing is missed.','3rd automation: new row in Google Sheets → automatic Google Calendar event creation.','Every workflow has a "Trigger" (e.g. new form) followed by one or more "Nodes" (actions, e.g. send email) — it\'s always this same basic structure.']
            },
            method: { fr: 'Parcourez n8n.io/workflows et identifiez 3 modèles qui pourraient vous être utiles.', ar: 'تصفح n8n.io/workflows وحدد 3 نماذج ممكن تكون مفيدة ليك.', en: 'Browse n8n.io/workflows and identify 3 templates that could be useful to you.' },
            exercise: { fr: 'Construisez un workflow simple: Google Forms → email de confirmation automatique.', ar: 'ابني workflow بسيط: Google Forms → إيميل تأكيد تلقائي.', en: 'Build a simple workflow: Google Forms → automatic confirmation email.' },
            tip: { fr: '💡 Un modèle existant modifié légèrement vous fait gagner 80% du temps par rapport à partir de zéro.', ar: '💡 نموذج موجود متغير شوية يوفر ليك 80% من الوقت مقارنة بالبداية من الصفر.', en: '💡 A slightly modified existing template saves you 80% of the time compared to starting from scratch.' }
          }
        ]
      },
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
              fr: ['HTTP Request = appels API.','Méthodes: GET, POST, PUT, DELETE.','URL: endpoint de l\'API.','Headers: authentification.','Body: données JSON.'],
              ar: ['HTTP Request = استدعاء APIs.','الطرق: GET, POST, PUT, DELETE.','الرابط: نقطة نهاية API.','الرؤوس: مصادقة.','الجسم: بيانات JSON.'],
              en: ['HTTP Request = API calls.','Methods: GET, POST, PUT, DELETE.','URL: API endpoint.','Headers: authentication.','Body: JSON data.']
            },
            method: { fr: 'Utilisez JSONPlaceholder pour tester vos requêtes.', ar: 'استخدم JSONPlaceholder لاختبار طلباتك.', en: 'Use JSONPlaceholder to test your requests.' },
            exercise: { fr: 'Créez un workflow qui récupère des données d\'une API.', ar: 'أنشئ سير عمل يسترجع بيانات من API.', en: 'Create a workflow that fetches data from an API.' },
            tip: { fr: '💡 Testez avec Postman avant de mettre dans n8n.', ar: '💡 اختبر مع Postman قبل وضعها في n8n.', en: '💡 Test with Postman before putting in n8n.' }
          },
          {
            id: 'n8n-i-2',
            title: { fr: 'Les Webhooks : Déclencher un Workflow Instantanément', ar: 'الـ Webhooks: تشغيل workflow فورياً', en: 'Webhooks: Triggering a Workflow Instantly' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un webhook est une URL unique générée par n8n qui déclenche le workflow instantanément dès qu\'elle reçoit des données — contrairement au polling qui vérifie toutes les X minutes.','Ajoutez un node "Webhook" en premier dans votre workflow — n8n génère automatiquement une URL de test et une URL de production.','Cas d\'usage typique: un formulaire sur votre site web envoie les données directement au webhook n8n dès la soumission, sans délai.','Testez toujours avec l\'URL de test d\'abord (visible dans n8n) avant de passer à l\'URL de production dans votre vrai formulaire.','Les webhooks sont plus rapides et plus fiables que les vérifications périodiques — préférez-les chaque fois qu\'un service les propose.'],
              ar: ['الـ webhook هو رابط فريد يولده n8n يشغل الـ workflow فورياً منين يستقبل بيانات — عكس polling اللي يتحقق كل X دقائق.','زيد node "Webhook" أول واحد ف الـ workflow ديالك — n8n يولد تلقائياً رابط تجريبي ورابط إنتاج.','حالة استخدام نموذجية: استمارة ف موقعك تبعث البيانات مباشرة لـ webhook n8n فور التسليم، بلا تأخير.','جرب دائماً برابط الاختبار أولاً (يبان ف n8n) قبل ما تنتقل لرابط الإنتاج ف الاستمارة الحقيقية.','الـ webhooks أسرع وأوثق من التحققات الدورية — فضلهم كل مرة خدمة تقترحهم.'],
              en: ['A webhook is a unique URL generated by n8n that triggers the workflow instantly as soon as it receives data — unlike polling, which checks every X minutes.','Add a "Webhook" node first in your workflow — n8n automatically generates a test URL and a production URL.','Typical use case: a form on your website sends data directly to the n8n webhook upon submission, with no delay.','Always test with the test URL first (visible in n8n) before switching to the production URL in your real form.','Webhooks are faster and more reliable than periodic checks — prefer them whenever a service offers them.']
            },
            method: { fr: 'Créez un workflow avec un node Webhook et testez-le en envoyant une requête depuis l\'URL de test.', ar: 'أنشئ workflow بـ node Webhook وجربو ببعث طلب من رابط الاختبار.', en: 'Create a workflow with a Webhook node and test it by sending a request from the test URL.' },
            exercise: { fr: 'Construisez un workflow: Webhook reçoit des données de contact → envoie une notification par email.', ar: 'ابني workflow: Webhook يستقبل بيانات تواصل → يبعث إشعار بالإيميل.', en: 'Build a workflow: Webhook receives contact data → sends an email notification.' },
            tip: { fr: '💡 Gardez votre URL de production secrète — n\'importe qui la connaissant peut déclencher votre workflow.', ar: '💡 خلي رابط الإنتاج ديالك سري — أي حد يعرفو يقدر يشغل الـ workflow ديالك.', en: '💡 Keep your production URL secret — anyone who knows it can trigger your workflow.' }
          }
        ]
      },
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
              fr: ['Node AI: utiliser OpenAI.','GPT-4 pour analyse, génération de contenu, analyse de sentiments, résumé automatique.'],
              ar: ['عقدة الذكاء الاصطناعي: استخدام OpenAI.','GPT-4 للتحليل، توليد المحتوى، تحليل المشاعر، تلخيص تلقائي.'],
              en: ['AI Node: use OpenAI.','GPT-4 for analysis, content generation, sentiment analysis, automatic summarization.']
            },
            method: { fr: 'Intégrez OpenAI dans n8n.', ar: 'ادمج OpenAI في n8n.', en: 'Integrate OpenAI into n8n.' },
            exercise: { fr: 'Créez un agent IA qui répond automatiquement.', ar: 'أنشئ وكيل ذكاء اصطناعي يرد تلقائياً.', en: 'Create an AI agent that replies automatically.' },
            tip: { fr: '💡 L\'IA + n8n = automatisation intelligente.', ar: '💡 الذكاء الاصطناعي + n8n = أتمتة ذكية.', en: '💡 AI + n8n = intelligent automation.' }
          },
          {
            id: 'n8n-a-2',
            title: { fr: 'Gestion des Erreurs et Débogage des Workflows', ar: 'إدارة الأخطاء وتصحيح الـ workflows', en: 'Error Handling and Workflow Debugging' },
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un workflow en production échouera tôt ou tard (API en panne, données manquantes) — prévoir l\'erreur n\'est pas optionnel, c\'est indispensable.','Ajoutez un "Error Trigger" workflow séparé qui s\'active automatiquement quand n\'importe quel autre workflow échoue.','Configurez une notification d\'erreur (email/Telegram) pour être alerté immédiatement au lieu de découvrir le problème des jours plus tard.','Utilisez le node "IF" pour vérifier que les données reçues sont valides AVANT de continuer le workflow — cela évite les erreurs en cascade.','Le panneau "Executions" de n8n garde un historique de chaque exécution — utilisez-le pour voir exactement où et pourquoi un workflow a échoué.'],
              ar: ['workflow ف الإنتاج راح يفشل عاجلاً أو آجلاً (API معطل، بيانات ناقصة) — توقع الخطأ ماشي اختياري، هو ضروري.','زيد workflow "Error Trigger" منفصل يتفعل تلقائياً منين أي workflow آخر يفشل.','ظبط إشعار خطأ (إيميل/Telegram) باش تنبه فوراً بدل ما تكتشف المشكل بعد أيام.','استخدم node "IF" باش تتحقق إن البيانات المستقبلة صحيحة قبل ما تكمل الـ workflow — هذا يفادي الأخطاء المتسلسلة.','لوحة "Executions" ف n8n تحتفظ بتاريخ كل تنفيذ — استخدمها باش تشوف بالضبط وين وعلاش workflow فشل.'],
              en: ['A workflow in production will fail sooner or later (API down, missing data) — planning for errors isn\'t optional, it\'s essential.','Add a separate "Error Trigger" workflow that activates automatically whenever any other workflow fails.','Set up an error notification (email/Telegram) to be alerted immediately instead of discovering the problem days later.','Use the "IF" node to check that received data is valid BEFORE continuing the workflow — this prevents cascading errors.','n8n\'s "Executions" panel keeps a history of every run — use it to see exactly where and why a workflow failed.']
            },
            method: { fr: 'Créez un Error Trigger workflow simple qui envoie une notification quand un autre workflow échoue.', ar: 'أنشئ Error Trigger workflow بسيط يبعث إشعار منين workflow آخر يفشل.', en: 'Create a simple Error Trigger workflow that sends a notification when another workflow fails.' },
            exercise: { fr: 'Ajoutez une vérification IF à un workflow existant pour valider les données avant traitement.', ar: 'زيد تحقق IF لـ workflow موجود باش تتأكد من البيانات قبل المعالجة.', en: 'Add an IF check to an existing workflow to validate data before processing.' },
            tip: { fr: '💡 Un workflow sans gestion d\'erreur qui échoue silencieusement peut coûter des semaines de données perdues sans que personne ne s\'en rende compte.', ar: '💡 workflow بلا إدارة أخطاء يفشل بصمت يقدر يكلف أسابيع من البيانات الضائعة بلا ما حد يحس.', en: '💡 A workflow with no error handling that fails silently can cost weeks of lost data before anyone notices.' }
          }
        ]
      },
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
              fr: ['Processus de vente complet (lead → client)','Gestion de contenu (idée → publication)','Support client (ticket → résolution)','Recrutement (candidature → embauche)','Gestion de projet (tâche → livraison)'],
              ar: ['عملية مبيعات كاملة (عميل محتمل → عميل)','إدارة المحتوى (فكرة → نشر)','دعم العملاء (تذكرة → حل)','التوظيف (طلب → تعيين)','إدارة المشاريع (مهمة → تسليم)'],
              en: ['Complete sales process (lead → client)','Content management (idea → publication)','Customer support (ticket → resolution)','Recruitment (application → hiring)','Project management (task → delivery)']
            },
            method: { fr: 'Automatisez un processus métier complet de A à Z.', ar: 'أتمتة عملية تجارية كاملة من الألف إلى الياء.', en: 'Automate a complete business process from A to Z.' },
            exercise: { fr: 'Créez une automatisation pour un processus de vente.', ar: 'أنشئ أتمتة لعملية مبيعات.', en: 'Create an automation for a sales process.' },
            tip: { fr: '💡 Objectif: des automations sans intervention humaine.', ar: '💡 الهدف: أتمتة بدون تدخل بشري.', en: '💡 Goal: automations without human intervention.' }
          },
          {
            id: 'n8n-m-2',
            title: { fr: 'Vendre des Services d\'Automatisation aux Clients', ar: 'بيع خدمات الأتمتة للزبائن', en: 'Selling Automation Services to Clients' },
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Les clients n\'achètent pas "de l\'automatisation" — ils achètent du temps économisé ou de l\'argent gagné. Chiffrez toujours l\'impact: "3h/semaine économisées = X DZD/mois".','Identifiez les tâches répétitives d\'un client en lui posant une question simple: "Que faites-vous manuellement chaque semaine qui vous ennuie?"','Tarification: audit + petite automation simple (15-40K DZD), système complet multi-étapes (60-150K DZD), forfait maintenance mensuel (10-25K DZD/mois).','Commencez toujours petit avec un nouveau client (1 automation simple) avant de proposer un système complet — cela construit la confiance.','Documentez chaque automation livrée avec un schéma simple (avant/après) — le client doit comprendre ce qui se passe même sans compétence technique.'],
              ar: ['الزبائن ما يشريوش "أتمتة" — يشريو وقت موفر أو فلوس مكسوبة. احسب دائماً التأثير: "3 ساعات/أسبوع موفرة = X دج/شهر".','حدد المهام المتكررة لزبون بسؤال بسيط: "شنو تدير يدوياً كل أسبوع ويضجرك؟"','التسعير: تدقيق + أتمتة صغيرة بسيطة (15-40K دج)، نظام كامل متعدد المراحل (60-150K دج)، باقة صيانة شهرية (10-25K دج/شهر).','ابدا دائماً صغير مع زبون جديد (أتمتة بسيطة وحدة) قبل ما تقترح نظام كامل — هذا يبني الثقة.','وثق كل أتمتة سلمتها بمخطط بسيط (قبل/بعد) — الزبون خاصو يفهم شنو واقع حتى بلا مهارة تقنية.'],
              en: ['Clients don\'t buy "automation" — they buy saved time or earned money. Always quantify the impact: "3h/week saved = X DZD/month".','Identify a client\'s repetitive tasks with a simple question: "What do you do manually every week that annoys you?"','Pricing: audit + one small simple automation (15-40K DZD), full multi-step system (60-150K DZD), monthly maintenance retainer (10-25K DZD/month).','Always start small with a new client (1 simple automation) before proposing a full system — this builds trust.','Document every automation delivered with a simple diagram (before/after) — the client needs to understand what happens even without technical skill.']
            },
            method: { fr: 'Interviewez une personne (ami, famille) sur ses tâches répétitives et identifiez 1 automation possible.', ar: 'قابل شخص (صاحب، عائلة) على مهامه المتكررة وحدد أتمتة واحدة ممكنة.', en: 'Interview someone (friend, family) about their repetitive tasks and identify 1 possible automation.' },
            exercise: { fr: 'Créez une offre de services d\'automatisation avec 3 niveaux et le calcul du temps économisé pour chacun.', ar: 'أنشئ عرض خدمات أتمتة بـ3 مستويات وحساب الوقت الموفر لكل واحد.', en: 'Create an automation services offer with 3 tiers and the time-saved calculation for each.' },
            tip: { fr: '💡 Un devis avec "vous économiserez 12h/mois" convainc plus qu\'un devis qui décrit juste la technique.', ar: '💡 عرض بـ"راح توفر 12 ساعة/شهر" يقنع أكثر من عرض يوصف غير التقنية.', en: '💡 A quote saying "you\'ll save 12h/month" convinces more than one that just describes the technical details.' }
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
    tagline: { fr: 'Construisez des produits professionnels avec l\'IA sans être un développeur traditionnel', ar: 'ابنِ منتجات احترافية بالذكاء الاصطناعي دون أن تكون مبرمجاً تقليدياً', en: 'Build professional products with AI without being a traditional developer' },
    levels: [
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
              fr: ['Vibe Coding = utiliser des assistants IA pour écrire du code.','L\'IA génère le code, vous guidez et validez.','Rôle: prompt engineer, architecte, testeur.','Outils: Cursor, GitHub Copilot, ChatGPT, Claude.'],
              ar: ['البرمجة بالذكاء الاصطناعي = استخدام مساعدين ذكاء اصطناعي لكتابة الأكواد.','الذكاء الاصطناعي يكتب الكود، وأنت توجه وتتحقق.','دورك: مهندس أوامر، مهندس معماري، مختبر.','الأدوات: Cursor، GitHub Copilot، ChatGPT، Claude.'],
              en: ['Vibe Coding = using AI assistants to write code.','AI generates code, you guide and validate.','Role: prompt engineer, architect, tester.','Tools: Cursor, GitHub Copilot, ChatGPT, Claude.']
            },
            method: { fr: 'Installez ChatGPT et posez une question.', ar: 'ثبّت ChatGPT واسأل سؤالاً.', en: 'Install ChatGPT and ask a question.' },
            exercise: { fr: 'Demandez à ChatGPT d\'expliquer le Vibe Coding.', ar: 'اطلب من ChatGPT شرح البرمجة بالذكاء الاصطناعي.', en: 'Ask ChatGPT to explain Vibe Coding.' },
            tip: { fr: '💡 Le Vibe Coding n\'est PAS une triche. C\'est la nouvelle façon de développer.', ar: '💡 البرمجة بالذكاء الاصطناعي ليست غشاً. هذه هي الطريقة الجديدة للتطوير.', en: '💡 Vibe Coding is NOT cheating. It\'s the new way to develop.' }
          },
          {
            id: 'vc-b-2',
            title: { fr: 'Écrire des Prompts Efficaces pour Générer du Code', ar: 'كتابة أوامر فعالة لتوليد الكود', en: 'Writing Effective Prompts to Generate Code' },
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un mauvais prompt ("fais-moi un site") donne un résultat générique — un bon prompt précise le contexte, la technologie, et le résultat attendu.','Structure d\'un bon prompt: Contexte (quel projet) + Tâche précise (quoi faire) + Contraintes (technologie, style) + Format de sortie attendu.','Donnez toujours des exemples concrets à l\'IA si possible ("comme ce bouton: [description]") — cela réduit énormément les allers-retours.','Décomposez les grosses demandes en petites étapes: demandez d\'abord la structure, puis le style, puis les interactions — pas tout en un seul prompt géant.','Précisez toujours les contraintes techniques (langage, framework, version) — sans elles, l\'IA choisit au hasard et le code peut ne pas correspondre à votre projet.'],
              ar: ['أمر سيء ("دير ليا موقع") يعطي نتيجة عامة — أمر جيد يحدد السياق، التقنية، والنتيجة المتوقعة.','هيكل أمر جيد: السياق (أي مشروع) + المهمة الدقيقة (شنو تدير) + القيود (تقنية، ستايل) + صيغة الخرج المتوقعة.','أعطي دائماً أمثلة ملموسة للذكاء الاصطناعي إذا أمكن ("مثل هذا الزر: [وصف]") — هذا يقلل بزاف الذهاب والإياب.','قسم الطلبات الكبيرة لخطوات صغيرة: اطلب أولاً الهيكل، بعدها الستايل، بعدها التفاعلات — ماشي كلشي ف أمر واحد ضخم.','حدد دائماً القيود التقنية (اللغة، framework، النسخة) — بلاهم، الذكاء الاصطناعي يختار عشوائياً والكود ممكن ما يناسبش مشروعك.'],
              en: ['A bad prompt ("make me a website") gives a generic result — a good prompt specifies context, technology, and the expected output.','Structure of a good prompt: Context (which project) + Precise task (what to do) + Constraints (technology, style) + Expected output format.','Always give the AI concrete examples when possible ("like this button: [description]") — this drastically reduces back-and-forth.','Break big requests into small steps: ask for the structure first, then the style, then the interactions — not everything in one giant prompt.','Always specify technical constraints (language, framework, version) — without them, the AI picks randomly and the code may not fit your project.']
            },
            method: { fr: 'Réécrivez le prompt "fais-moi un site" en ajoutant contexte, tâche précise et contraintes.', ar: 'أعد كتابة الأمر "دير ليا موقع" وزيد السياق، المهمة الدقيقة والقيود.', en: 'Rewrite the prompt "make me a website" by adding context, precise task and constraints.' },
            exercise: { fr: 'Écrivez un prompt complet pour demander à une IA de créer un formulaire de contact en HTML/CSS.', ar: 'اكتب أمر كامل باش تطلب من الذكاء الاصطناعي يصنع استمارة تواصل بـ HTML/CSS.', en: 'Write a complete prompt asking an AI to create a contact form in HTML/CSS.' },
            tip: { fr: '💡 Si le résultat de l\'IA ne convient pas, précisez ce qui ne va pas plutôt que de redemander la même chose.', ar: '💡 إذا نتيجة الذكاء الاصطناعي ما ناسبتش، حدد شنو ما خدمش بدل ما تعاود نفس الطلب.', en: '💡 If the AI\'s result isn\'t right, specify what\'s wrong rather than asking the same thing again.' }
          }
        ]
      },
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
          },
          {
            id: 'vc-i-2',
            title: { fr: 'Déboguer du Code Généré par l\'IA', ar: 'تصحيح الكود المولد بالذكاء الاصطناعي', en: 'Debugging AI-Generated Code' },
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['L\'IA se trompe régulièrement — ne jamais copier-coller du code sans le lire, même si ça "a l\'air correct".','Quand une erreur apparaît, copiez le message d\'erreur EXACT et donnez-le à l\'IA — elle corrige bien plus vite avec le message précis qu\'avec "ça ne marche pas".','Utilisez la console du navigateur (F12) pour voir les erreurs JavaScript en temps réel — c\'est votre meilleur outil de débogage, IA ou pas.','Testez le code par petits morceaux au fur et à mesure que l\'IA le génère — attendre d\'avoir 200 lignes avant de tester rend le débogage 10x plus difficile.','Si l\'IA ne corrige pas le bug après 2-3 tentatives, changez d\'approche: demandez-lui d\'expliquer le code ligne par ligne pour trouver l\'erreur vous-même.'],
              ar: ['الذكاء الاصطناعي يغلط بانتظام — عمرك ما تنسخ-تلصق كود بلا ما تقراه، حتى لو "يبان صحيح".','منين يبان خطأ، انسخ رسالة الخطأ بالضبط وأعطيها للذكاء الاصطناعي — يصحح أسرع بكثير برسالة دقيقة من "ما يخدمش".','استخدم وحدة تحكم المتصفح (F12) باش تشوف أخطاء JavaScript ف الوقت الحقيقي — هي أحسن أداة تصحيح ديالك، بالذكاء الاصطناعي ولا بلاه.','جرب الكود بقطع صغيرة كيما الذكاء الاصطناعي يولدو — انتظار 200 سطر قبل التجربة يخلي التصحيح أصعب بـ10 مرات.','إذا الذكاء الاصطناعي ما صححش الخطأ بعد 2-3 محاولات، بدل الطريقة: اطلب منو يشرح الكود سطر بسطر باش تلقى الخطأ بروحك.'],
              en: ['AI makes mistakes regularly — never copy-paste code without reading it, even if it "looks correct".','When an error appears, copy the EXACT error message and give it to the AI — it fixes things much faster with the precise message than with "it doesn\'t work".','Use the browser console (F12) to see JavaScript errors in real time — it\'s your best debugging tool, AI or not.','Test the code in small chunks as the AI generates it — waiting until you have 200 lines before testing makes debugging 10x harder.','If the AI doesn\'t fix the bug after 2-3 attempts, change approach: ask it to explain the code line by line so you find the error yourself.']
            },
            method: { fr: 'Provoquez volontairement une erreur simple dans un code et pratiquez à copier le message exact pour le corriger.', ar: 'اصنع قصداً خطأ بسيط ف كود وتمرن على نسخ الرسالة بالضبط باش تصححو.', en: 'Deliberately trigger a simple error in some code and practice copying the exact message to fix it.' },
            exercise: { fr: 'Prenez un code généré par l\'IA avec un bug, ouvrez la console (F12), identifiez l\'erreur et corrigez-la avec l\'aide de l\'IA.', ar: 'خد كود مولد بالذكاء الاصطناعي فيه خطأ، افتح وحدة التحكم (F12)، حدد الخطأ وصححو بمساعدة الذكاء الاصطناعي.', en: 'Take AI-generated code with a bug, open the console (F12), identify the error, and fix it with AI\'s help.' },
            tip: { fr: '💡 90% des bugs de débutant s\'affichent clairement dans la console — regardez-y avant de paniquer.', ar: '💡 90% من أخطاء المبتدئ تبان بوضوح ف وحدة التحكم — شوف فيها قبل ما تخاف.', en: '💡 90% of beginner bugs show up clearly in the console — check it before panicking.' }
          }
        ]
      },
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
          },
          {
            id: 'vc-a-2',
            title: { fr: 'Connecter une App IA à une Base de Données (Supabase)', ar: 'ربط تطبيق ذكاء اصطناعي بقاعدة بيانات (Supabase)', en: 'Connecting an AI App to a Database (Supabase)' },
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Supabase (gratuit pour démarrer) donne une vraie base de données PostgreSQL + authentification + API en quelques clics, sans gérer de serveur.','Demandez à l\'IA de générer le schéma SQL (tables, colonnes) à partir d\'une description simple de votre app en langage naturel.','La Row Level Security (RLS) de Supabase contrôle qui peut lire/écrire quoi — demandez toujours à l\'IA d\'expliquer les policies qu\'elle génère avant de les activer.','Une clé "anon/publishable" peut être visible publiquement dans le code frontend — jamais la clé "service_role", qui donne un accès total à la base.','Testez toujours les permissions en vous connectant avec un compte utilisateur normal (pas admin) pour vérifier que la sécurité fonctionne comme prévu.'],
              ar: ['Supabase (مجاني للبداية) يعطي قاعدة بيانات PostgreSQL حقيقية + مصادقة + API بضغطات قليلة، بلا إدارة سيرفر.','اطلب من الذكاء الاصطناعي يولد schema SQL (جداول، أعمدة) من وصف بسيط لتطبيقك بلغة طبيعية.','الـ Row Level Security (RLS) ديال Supabase يتحكم شكون يقدر يقرا/يكتب شنو — اطلب دائماً من الذكاء الاصطناعي يشرح الـ policies اللي يولدها قبل ما تفعلها.','مفتاح "anon/publishable" يقدر يبان بشكل عام ف كود الـ frontend — عمرك ما مفتاح "service_role"، اللي يعطي وصول كامل للقاعدة.','جرب دائماً الصلاحيات بالدخول بحساب مستخدم عادي (ماشي admin) باش تتأكد الأمان يخدم كيما متوقع.'],
              en: ['Supabase (free to start) gives you a real PostgreSQL database + authentication + API in a few clicks, with no server to manage.','Ask the AI to generate the SQL schema (tables, columns) from a simple natural-language description of your app.','Supabase\'s Row Level Security (RLS) controls who can read/write what — always ask the AI to explain the policies it generates before enabling them.','An "anon/publishable" key can safely be visible in frontend code — never the "service_role" key, which grants full access to the database.','Always test permissions by signing in as a regular user account (not admin) to verify security works as intended.']
            },
            method: { fr: 'Créez un compte Supabase gratuit et demandez à l\'IA de générer un schéma simple (ex: table "tasks" avec titre et statut).', ar: 'أنشئ حساب Supabase مجاني واطلب من الذكاء الاصطناعي يولد schema بسيط (مثلاً جدول "tasks" بعنوان وحالة).', en: 'Create a free Supabase account and ask the AI to generate a simple schema (e.g. a "tasks" table with title and status).' },
            exercise: { fr: 'Connectez une app simple (todo-list) à Supabase avec l\'aide de l\'IA: création, lecture, et suppression de tâches.', ar: 'اربط تطبيق بسيط (قائمة مهام) بـ Supabase بمساعدة الذكاء الاصطناعي: إنشاء، قراءة، وحذف المهام.', en: 'Connect a simple app (todo-list) to Supabase with AI\'s help: create, read, and delete tasks.' },
            tip: { fr: '💡 Ne désactivez jamais la RLS "pour tester plus vite" et n\'oubliez pas de la réactiver — c\'est la cause n°1 des fuites de données sur les projets Supabase.', ar: '💡 عمرك ما تعطل RLS "باش تجرب أسرع" وما تنساش تعاود تفعلها — هذا السبب رقم 1 لتسرب البيانات ف مشاريع Supabase.', en: '💡 Never disable RLS "to test faster" without remembering to re-enable it — this is the #1 cause of data leaks on Supabase projects.' }
          }
        ]
      },
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
          },
          {
            id: 'vc-m-2',
            title: { fr: 'Lancer et Vendre son Produit Créé avec l\'IA', ar: 'إطلاق وبيع منتجك المصنوع بالذكاء الاصطناعي', en: 'Launching and Selling Your AI-Built Product' },
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Ne visez jamais la perfection avant de lancer — un "MVP" (produit minimum viable) avec 3 fonctionnalités qui marchent bat un produit à 20 fonctionnalités jamais terminé.','Trouvez vos 10 premiers utilisateurs manuellement (groupes Facebook, contacts directs) avant de dépenser en publicité — leur feedback vaut plus que n\'importe quelle métrique.','Un site vitrine simple (Framer, Carrd, ou une landing page générée par l\'IA) suffit pour commencer à vendre — inutile d\'attendre un site parfait.','Écoutez les retours utilisateurs mais ne changez pas de direction à chaque commentaire — distinguez les vrais problèmes récurrents des préférences individuelles.','Documentez votre parcours de construction (build in public sur les réseaux) — cela attire naturellement des utilisateurs intéressés et de la crédibilité.'],
              ar: ['عمرك ما تستهدف الكمال قبل الإطلاق — "MVP" (منتج بحد أدنى قابل للتطبيق) بـ3 ميزات تخدم يفوز على منتج بـ20 ميزة عمرو ما يكمل.','لقى أول 10 مستخدمين ديالك يدوياً (مجموعات Facebook، تواصل مباشر) قبل ما تصرف على إعلانات — ملاحظاتهم تسوى أكثر من أي مقياس.','موقع عرضي بسيط (Framer، Carrd، أو landing page مولدة بالذكاء الاصطناعي) كافي باش تبدا تبيع — ما فيهاش فايدة تستنى موقع مثالي.','اسمع ملاحظات المستخدمين لكن ما تبدلش الاتجاه ف كل تعليق — فرق بين المشاكل الحقيقية المتكررة والتفضيلات الفردية.','وثق مسار البناء ديالك (build in public على السوشيال ميديا) — هذا يجذب طبيعياً مستخدمين مهتمين ومصداقية.'],
              en: ['Never aim for perfection before launching — an "MVP" (minimum viable product) with 3 working features beats a 20-feature product that\'s never finished.','Find your first 10 users manually (Facebook groups, direct contacts) before spending on ads — their feedback is worth more than any metric.','A simple landing page (Framer, Carrd, or an AI-generated landing page) is enough to start selling — no need to wait for a perfect site.','Listen to user feedback but don\'t change direction with every comment — distinguish real recurring problems from individual preferences.','Document your building journey (build in public on social media) — this naturally attracts interested users and credibility.']
            },
            method: { fr: 'Listez les 3 fonctionnalités absolument essentielles de votre produit — tout le reste attend la version 2.', ar: 'اكتب 3 ميزات ضرورية بالكامل لمنتجك — كل الباقي ينتظر النسخة 2.', en: 'List the 3 absolutely essential features of your product — everything else waits for version 2.' },
            exercise: { fr: 'Rédigez un plan de lancement: où trouver vos 10 premiers utilisateurs, et le message exact que vous leur enverrez.', ar: 'اكتب خطة إطلاق: وين تلقى أول 10 مستخدمين، والرسالة بالضبط اللي راح تبعثلهم.', en: 'Write a launch plan: where to find your first 10 users, and the exact message you\'ll send them.' },
            tip: { fr: '💡 Un produit imparfait avec de vrais utilisateurs vaut infiniment plus qu\'un produit parfait que personne n\'utilise.', ar: '💡 منتج غير كامل بمستخدمين حقيقيين يسوى أكثر بكثير من منتج مثالي حتى حد ما يستعملو.', en: '💡 An imperfect product with real users is worth infinitely more than a perfect product no one uses.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 11: AI TOOLS MASTERY
  // ============================================================
  {
    id: 'aitools',
    icon: '🧠',
    color: '#06B6D4',
    accent: '#22D3EE',
    bg: 'linear-gradient(135deg, #001418 0%, #012A33 50%, #001418 100%)',
    bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    earning: '20,000 – 100,000 DZD/month',
    firstClient: { fr: '2–4 semaines', ar: '2–4 أسابيع', en: '2–4 weeks' },
    startTool: 'ChatGPT + Claude (versions gratuites)',
    title: { fr: 'Maîtrise des Outils IA', ar: 'إتقان أدوات الذكاء الاصطناعي', en: 'AI Tools Mastery' },
    subtitle: { fr: 'Intelligence Artificielle Appliquée', ar: 'الذكاء الاصطناعي التطبيقي', en: 'Applied Artificial Intelligence' },
    tagline: { fr: 'Maîtrisez les outils qui redéfinissent le travail', ar: 'أتقن الأدوات اللي عم تعيد تعريف الشغل', en: 'Master the tools redefining work' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre ce qu\'est vraiment l\'IA et découvrir la boîte à outils', ar: 'فهم شنو هو الذكاء الاصطناعي فعلاً واكتشاف صندوق الأدوات', en: 'Understand what AI really is and discover the toolbox' },
        lessons: [
          {
            id: 'ai-b-1',
            title: { fr: 'Qu\'est-ce que l\'IA, Vraiment?', ar: 'شنو هو الذكاء الاصطناعي فعلاً؟', en: 'What Is AI, Really?' },
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['L\'IA "générative" (ChatGPT, Midjourney) diffère de l\'IA "restreinte" (filtre anti-spam, recommandations Netflix) — la première crée du contenu nouveau, la seconde suit des règles fixes.','Un LLM (grand modèle de langage) fonctionne par prédiction: il devine le mot suivant le plus probable, un "token" à la fois, à partir de tout ce qui précède.','La "fenêtre de contexte" est la mémoire de travail de l\'IA pendant une conversation — au-delà d\'une certaine longueur, elle "oublie" le début de l\'échange.','5 grandes catégories d\'outils IA: texte (ChatGPT, Claude), image (Midjourney, DALL-E), vidéo/voix (Runway, ElevenLabs), code (Cursor, Copilot), automatisation (Zapier, n8n).','Les versions gratuites suffisent pour apprendre et pour 80% des usages quotidiens — ne payez que lorsque vous atteignez une vraie limite.'],
              ar: ['الذكاء الاصطناعي "التوليدي" (ChatGPT، Midjourney) يختلف عن الذكاء الاصطناعي "المقيد" (فلتر السبام، توصيات Netflix) — الأول يخلق محتوى جديد، الثاني يتبع قواعد ثابتة.','LLM (نموذج لغوي كبير) يخدم بالتنبؤ: يخمن الكلمة الموالية الأكثر احتمالاً، "token" ف كل مرة، من كل ما سبق.','"نافذة السياق" هي الذاكرة العاملة للذكاء الاصطناعي أثناء المحادثة — بعد طول معين، "ينسى" بداية التبادل.','5 فئات كبار لأدوات الذكاء الاصطناعي: نص (ChatGPT، Claude)، صورة (Midjourney، DALL-E)، فيديو/صوت (Runway، ElevenLabs)، كود (Cursor، Copilot)، أتمتة (Zapier، n8n).','النسخ المجانية كافية للتعلم ولـ80% من الاستخدام اليومي — ادفع غير منين توصل لحد حقيقي.'],
              en: ['"Generative" AI (ChatGPT, Midjourney) differs from "narrow" AI (spam filters, Netflix recommendations) — the first creates new content, the second follows fixed rules.','An LLM (large language model) works by prediction: it guesses the most likely next word, one "token" at a time, based on everything before it.','The "context window" is the AI\'s working memory during a conversation — past a certain length, it "forgets" the start of the exchange.','5 major AI tool categories: text (ChatGPT, Claude), image (Midjourney, DALL-E), video/voice (Runway, ElevenLabs), code (Cursor, Copilot), automation (Zapier, n8n).','Free versions are enough to learn and for 80% of daily use — only pay once you hit a real limit.']
            },
            method: { fr: 'Ouvrez ChatGPT (version gratuite) et posez-lui une question sur un sujet que vous connaissez bien — évaluez si la réponse est correcte.', ar: 'افتح ChatGPT (النسخة المجانية) واسألو سؤال على موضوع تعرفو مزيان — قيم إذا الجواب صحيح.', en: 'Open ChatGPT (free version) and ask it a question about a topic you know well — evaluate if the answer is correct.' },
            exercise: { fr: 'Listez les 5 catégories d\'outils IA et trouvez un exemple gratuit pour chacune que vous n\'avez jamais utilisé.', ar: 'اكتب 5 فئات أدوات الذكاء الاصطناعي ولقى مثال مجاني لكل واحدة ما استعملتهاش من قبل.', en: 'List the 5 AI tool categories and find a free example for each that you\'ve never used.' },
            tip: { fr: '💡 "IA" n\'est pas magique — c\'est un outil de prédiction statistique très puissant, pas une entité qui "comprend" comme un humain.', ar: '💡 "الذكاء الاصطناعي" ماشي سحر — هو أداة تنبؤ إحصائية قوية بزاف، ماشي كائن "يفهم" كيما الإنسان.', en: '💡 "AI" isn\'t magic — it\'s a very powerful statistical prediction tool, not an entity that "understands" like a human.' }
          },
          {
            id: 'ai-b-2',
            title: { fr: 'La Boîte à Outils IA : Choisir le Bon Outil', ar: 'صندوق أدوات الذكاء الاصطناعي: اختيار الأداة المناسبة', en: 'The AI Toolbox: Choosing the Right Tool' },
            image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Texte & raisonnement: ChatGPT (polyvalent), Claude (rédaction longue et nuancée), Perplexity (recherche avec sources) — chacun a une force différente.','Image: Midjourney (qualité artistique, payant), DALL-E (intégré à ChatGPT), Stable Diffusion (gratuit, open-source, plus technique).','Vidéo & voix: Runway et Pika pour la vidéo générée, ElevenLabs pour des voix off réalistes en plusieurs langues.','Code & automatisation: Cursor et GitHub Copilot pour écrire du code, Zapier/Make/n8n pour connecter des applications sans coder.','Ne choisissez jamais un outil parce qu\'il est "à la mode" — choisissez selon la tâche précise: besoin de sources vérifiables → Perplexity, pas ChatGPT.'],
              ar: ['نص وتفكير: ChatGPT (متعدد الاستخدامات)، Claude (كتابة طويلة ودقيقة)، Perplexity (بحث بمصادر) — كل واحد عندو قوة مختلفة.','صورة: Midjourney (جودة فنية، مدفوع)، DALL-E (مدمج ف ChatGPT)، Stable Diffusion (مجاني، مفتوح المصدر، أكثر تقنية).','فيديو وصوت: Runway و Pika للفيديو المولد، ElevenLabs لأصوات واقعية بعدة لغات.','كود وأتمتة: Cursor و GitHub Copilot لكتابة الكود، Zapier/Make/n8n لربط التطبيقات بلا برمجة.','عمرك ما تختار أداة لأنها "رائجة" — اختار حسب المهمة الدقيقة: تحتاج مصادر موثوقة → Perplexity، ماشي ChatGPT.'],
              en: ['Text & reasoning: ChatGPT (versatile), Claude (long nuanced writing), Perplexity (research with sources) — each has a different strength.','Image: Midjourney (artistic quality, paid), DALL-E (built into ChatGPT), Stable Diffusion (free, open-source, more technical).','Video & voice: Runway and Pika for generated video, ElevenLabs for realistic voiceovers in multiple languages.','Code & automation: Cursor and GitHub Copilot to write code, Zapier/Make/n8n to connect apps without coding.','Never choose a tool because it\'s "trendy" — choose based on the precise task: need verifiable sources → Perplexity, not ChatGPT.']
            },
            method: { fr: 'Testez 2 outils texte différents (ex: ChatGPT et Claude) avec exactement la même question et comparez les réponses.', ar: 'جرب أداتين نص مختلفتين (مثلاً ChatGPT و Claude) بنفس السؤال بالضبط وقارن الأجوبة.', en: 'Test 2 different text tools (e.g. ChatGPT and Claude) with the exact same question and compare the answers.' },
            exercise: { fr: 'Créez un tableau personnel avec vos 5 outils IA préférés, un par catégorie, et pourquoi vous les avez choisis.', ar: 'أنشئ جدول شخصي بـ5 أدوات ذكاء اصطناعي مفضلة عندك، وحدة لكل فئة، وعلاش اخترتهم.', en: 'Create a personal table with your 5 favorite AI tools, one per category, and why you chose them.' },
            tip: { fr: '💡 Gardez une liste à jour de vos outils — 3 nouveaux outils sérieux sortent en moyenne chaque mois.', ar: '💡 خلي لائحة أدواتك محدثة — 3 أدوات جدية جديدة تطلع ف المعدل كل شهر.', en: '💡 Keep an updated list of your tools — 3 new serious tools launch on average every month.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 4–8', ar: 'الأسابيع 4–8', en: 'Weeks 4–8' },
        goal: { fr: 'Maîtriser le prompt engineering et connaître les pièges cachés', ar: 'إتقان هندسة الأوامر ومعرفة الفخاخ الخفية', en: 'Master prompt engineering and know the hidden pitfalls' },
        lessons: [
          {
            id: 'ai-i-1',
            title: { fr: 'Prompt Engineering : les Vraies Techniques', ar: 'هندسة الأوامر: التقنيات الحقيقية', en: 'Prompt Engineering: The Real Techniques' },
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un prompt précis contient 4 éléments: le rôle ("Tu es un expert en..."), le contexte, la tâche exacte, et le format de sortie attendu.','Traitez l\'IA comme une conversation, pas un distributeur automatique — si la première réponse ne convient pas, précisez plutôt que de recommencer de zéro.','Le "raisonnement étape par étape": demandez "réfléchis étape par étape avant de répondre" — cela améliore nettement la qualité sur les tâches complexes.','Les exemples négatifs sont aussi utiles que les positifs: "ne fais pas X" guide autant que "fais Y".','Donnez un persona/audience à l\'IA ("explique comme à un débutant") pour calibrer automatiquement le ton et le niveau de détail.'],
              ar: ['أمر دقيق فيه 4 عناصر: الدور ("انت خبير ف...")، السياق، المهمة الدقيقة، وصيغة الخرج المتوقعة.','تعامل مع الذكاء الاصطناعي كمحادثة، ماشي كموزع آلي — إذا الجواب الأول ما ناسبش، حدد بدل ما تبدا من الصفر.','"التفكير خطوة بخطوة": اطلب "فكر خطوة بخطوة قبل ما تجاوب" — هذا يحسن بوضوح الجودة ف المهام المعقدة.','الأمثلة السلبية مفيدة قد الإيجابية: "ما تديرش X" يوجه قد "دير Y".','أعطي persona/جمهور للذكاء الاصطناعي ("اشرح كأنك تحكي لمبتدئ") باش يضبط تلقائياً النبرة ومستوى التفصيل.'],
              en: ['A precise prompt has 4 elements: the role ("You are an expert in..."), context, the exact task, and the expected output format.','Treat AI as a conversation, not a vending machine — if the first answer isn\'t right, refine it rather than starting over.','"Step-by-step reasoning": ask it to "think step by step before answering" — this notably improves quality on complex tasks.','Negative examples are as useful as positive ones: "don\'t do X" guides just as much as "do Y".','Give the AI a persona/audience ("explain like to a beginner") to automatically calibrate tone and level of detail.']
            },
            method: { fr: 'Reprenez un prompt raté que vous avez déjà utilisé et réécrivez-le avec les 4 éléments (rôle, contexte, tâche, format).', ar: 'خد أمر فاشل استعملتو من قبل وأعد كتابتو بـ4 عناصر (دور، سياق، مهمة، صيغة).', en: 'Take a failed prompt you\'ve used before and rewrite it with the 4 elements (role, context, task, format).' },
            exercise: { fr: 'Écrivez un même prompt en 3 versions progressives: vague, précis, et avec chain-of-thought — comparez les 3 résultats.', ar: 'اكتب نفس الأمر بـ3 نسخ متدرجة: غامض، دقيق، وبـ chain-of-thought — قارن النتائج الـ3.', en: 'Write the same prompt in 3 progressive versions: vague, precise, and with chain-of-thought — compare the 3 results.' },
            tip: { fr: '💡 Un bon prompt ressemble à un brief donné à un collègue compétent mais qui ne connaît rien du contexte — soyez aussi précis qu\'avec un humain.', ar: '💡 الأمر الجيد يشبه بريف معطى لزميل كفء لكن ما يعرفش السياق — كون دقيق قد ما تكون مع إنسان.', en: '💡 A good prompt is like a brief given to a competent colleague who knows nothing about the context — be as precise as you would with a human.' }
          },
          {
            id: 'ai-i-2',
            title: { fr: 'Les Secrets que Personne n\'Explique aux Débutants', ar: 'الأسرار اللي حتى حد ما يشرحها للمبتدئين', en: 'The Secrets Nobody Explains to Beginners' },
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['"Garbage in, garbage out": la qualité de la réponse est plafonnée par la qualité de la question — un prompt vague donne toujours une réponse générique.','L\'IA "hallucine": elle peut affirmer des faits faux avec une confiance totale — vérifiez toujours les chiffres, citations et faits précis avant de les utiliser.','Aucune IA ne garde de mémoire entre 2 sessions différentes (sauf fonctionnalité spécifique activée) — redonnez le contexte à chaque nouvelle conversation.','Les meilleurs résultats viennent de la combinaison de plusieurs outils (texte → image → automatisation), jamais d\'un seul outil utilisé isolément.','Ne confiez jamais une décision à enjeu élevé (juridique, médical, financier important) entièrement à l\'IA — elle assiste, elle ne remplace pas un humain qualifié.'],
              ar: ['"Garbage in, garbage out": جودة الجواب محدودة بجودة السؤال — أمر غامض دائماً يعطي جواب عام.','الذكاء الاصطناعي "يهلوس": يقدر يأكد معلومات غلط بثقة كاملة — تحقق دائماً من الأرقام، الاقتباسات والحقائق الدقيقة قبل ما تستعملهم.','حتى ذكاء اصطناعي ما يحتفظ بذاكرة بين جلستين مختلفتين (إلا ميزة خاصة مفعلة) — أعطي السياق من جديد ف كل محادثة جديدة.','أحسن النتائج تجي من دمج عدة أدوات (نص → صورة → أتمتة)، عمرها من أداة واحدة مستعملة لوحدها.','عمرك ما تسلم قرار بمخاطر عالية (قانوني، طبي، مالي مهم) بالكامل للذكاء الاصطناعي — هو يساعد، ما يعوضش إنسان مؤهل.'],
              en: ['"Garbage in, garbage out": answer quality is capped by question quality — a vague prompt always gives a generic answer.','AI "hallucinates": it can state false facts with total confidence — always verify numbers, quotes and precise facts before using them.','No AI keeps memory between 2 different sessions (unless a specific feature is enabled) — give the context again in every new conversation.','The best results come from combining multiple tools (text → image → automation), never from one tool used in isolation.','Never hand a high-stakes decision (legal, medical, major financial) entirely to AI — it assists, it doesn\'t replace a qualified human.']
            },
            method: { fr: 'Demandez à l\'IA un fait précis et vérifiable (une date, un chiffre) sur un sujet que vous connaissez, et vérifiez si elle a raison.', ar: 'اطلب من الذكاء الاصطناعي حقيقة دقيقة وقابلة للتحقق (تاريخ، رقم) على موضوع تعرفو، وتحقق إذا صح.', en: 'Ask the AI a precise, verifiable fact (a date, a number) about a topic you know, and check if it\'s right.' },
            exercise: { fr: 'Listez 3 situations de votre vie professionnelle où vous ne devriez jamais laisser l\'IA décider seule.', ar: 'اكتب 3 وضعيات ف حياتك المهنية وين عمرك ما تخلي الذكاء الاصطناعي يقرر وحدو.', en: 'List 3 situations in your professional life where you should never let AI decide alone.' },
            tip: { fr: '💡 Faites toujours une relecture humaine avant de publier ou d\'envoyer un contenu généré par IA — sans exception.', ar: '💡 دير دائماً مراجعة بشرية قبل ما تنشر أو تبعث محتوى مولد بالذكاء الاصطناعي — بلا استثناء.', en: '💡 Always do a human review before publishing or sending AI-generated content — no exceptions.' }
          }
        ]
      },
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 9–16', ar: 'الأسابيع 9–16', en: 'Weeks 9–16' },
        goal: { fr: 'Construire des workflows IA automatisés et professionnels', ar: 'بناء workflows ذكاء اصطناعي أوتوماتيكية واحترافية', en: 'Build automated, professional AI workflows' },
        lessons: [
          {
            id: 'ai-a-1',
            title: { fr: 'Construire des Workflows IA Automatisés', ar: 'بناء workflows ذكاء اصطناعي أوتوماتيكية', en: 'Building Automated AI Workflows' },
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Un "workflow IA" enchaîne plusieurs outils pour transformer une idée en résultat fini sans intervention manuelle répétée à chaque étape.','Exemple concret: une idée de post → l\'IA rédige le texte → une autre IA génère l\'image → un outil comme Zapier publie automatiquement sur les réseaux sociaux.','Identifiez d\'abord la tâche répétitive (celle que vous faites plus de 3 fois par semaine) avant de chercher à l\'automatiser.','Zapier/Make/n8n connectent les IA à vos autres outils (Gmail, Google Sheets, réseaux sociaux) sans écrire de code.','Construisez votre "AI stack" personnel: 1 outil texte, 1 outil image, 1 outil d\'automatisation — 3 outils bien maîtrisés valent mieux que 10 outils à moitié compris.'],
              ar: ['"workflow ذكاء اصطناعي" يربط عدة أدوات باش يحول فكرة لنتيجة نهائية بلا تدخل يدوي متكرر ف كل خطوة.','مثال ملموس: فكرة منشور → الذكاء الاصطناعي يكتب النص → ذكاء اصطناعي آخر يولد الصورة → أداة مثل Zapier تنشر تلقائياً على السوشيال ميديا.','حدد أولاً المهمة المتكررة (اللي تديرها أكثر من 3 مرات ف الأسبوع) قبل ما تحاول تؤتمتها.','Zapier/Make/n8n تربط الذكاء الاصطناعي بأدواتك الأخرى (Gmail، Google Sheets، السوشيال ميديا) بلا كتابة كود.','ابني "AI stack" شخصي: أداة نص وحدة، أداة صورة وحدة، أداة أتمتة وحدة — 3 أدوات متقنة أحسن من 10 أدوات نص مفهومة.'],
              en: ['An "AI workflow" chains multiple tools to turn an idea into a finished result without repeated manual intervention at each step.','Concrete example: a post idea → AI writes the text → another AI generates the image → a tool like Zapier auto-publishes to social media.','First identify the repetitive task (one you do more than 3 times a week) before trying to automate it.','Zapier/Make/n8n connect AI to your other tools (Gmail, Google Sheets, social media) without writing code.','Build your personal "AI stack": 1 text tool, 1 image tool, 1 automation tool — 3 well-mastered tools beat 10 half-understood ones.']
            },
            method: { fr: 'Dessinez sur papier le schéma d\'un workflow simple pour une tâche que vous répétez chaque semaine.', ar: 'ارسم على ورقة مخطط workflow بسيط لمهمة تكررها كل أسبوع.', en: 'Sketch on paper the diagram of a simple workflow for a task you repeat every week.' },
            exercise: { fr: 'Construisez (ou planifiez en détail) un workflow: idée de contenu → texte généré par IA → image générée par IA.', ar: 'ابني (أو خطط بالتفصيل) workflow: فكرة محتوى → نص مولد بالذكاء الاصطناعي → صورة مولدة بالذكاء الاصطناعي.', en: 'Build (or plan in detail) a workflow: content idea → AI-generated text → AI-generated image.' },
            tip: { fr: '💡 Commencez par automatiser une seule étape, pas tout le processus d\'un coup — un workflow trop ambitieux dès le départ échoue souvent.', ar: '💡 ابدا بأتمتة خطوة وحدة، ماشي كل العملية دفعة وحدة — workflow طموح بزاف من البداية غالباً يفشل.', en: '💡 Start by automating a single step, not the whole process at once — an overly ambitious workflow from the start often fails.' }
          },
          {
            id: 'ai-a-2',
            title: { fr: 'Combiner Plusieurs IA pour un Résultat Professionnel', ar: 'دمج عدة أدوات ذكاء اصطناعي لنتيجة احترافية', en: 'Combining Multiple AIs for a Professional Result' },
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Aucun outil IA n\'excelle dans tout — un pipeline professionnel utilise l\'outil le plus fort à chaque étape (texte, image, voix, montage).','Exemple pipeline vidéo: script écrit avec Claude → voix off générée avec ElevenLabs → visuels avec Midjourney → montage assemblé avec CapCut/DaVinci.','Gardez une cohérence de style entre les outils: définissez d\'abord un guide de ton/couleurs, puis donnez ce guide à chaque IA utilisée.','Sauvegardez vos meilleurs prompts dans un document réutilisable — cela évite de "réinventer" un bon prompt à chaque nouveau projet.','Testez toujours le pipeline complet sur un petit projet avant de l\'appliquer à un gros projet client — un maillon faible casse tout le résultat.'],
              ar: ['حتى أداة ذكاء اصطناعي ما تتفوق ف كلشي — pipeline احترافي يستخدم الأداة الأقوى ف كل خطوة (نص، صورة، صوت، مونتاج).','مثال pipeline فيديو: سكريبت مكتوب بـ Claude → صوت تعليقي مولد بـ ElevenLabs → مرئيات بـ Midjourney → مونتاج مجمع بـ CapCut/DaVinci.','خلي تناسق ستايل بين الأدوات: حدد أولاً دليل نبرة/ألوان، بعدها أعطي هذا الدليل لكل ذكاء اصطناعي مستعمل.','احتفظ بأحسن أوامرك ف وثيقة قابلة لإعادة الاستخدام — هذا يفادي "إعادة اختراع" أمر جيد ف كل مشروع جديد.','جرب دائماً الـ pipeline الكامل على مشروع صغير قبل ما تطبقو على مشروع زبون كبير — حلقة ضعيفة تكسر كل النتيجة.'],
              en: ['No AI tool excels at everything — a professional pipeline uses the strongest tool for each step (text, image, voice, editing).','Video pipeline example: script written with Claude → voiceover generated with ElevenLabs → visuals with Midjourney → edit assembled with CapCut/DaVinci.','Keep style consistency across tools: first define a tone/color guide, then give this guide to every AI used.','Save your best prompts in a reusable document — this avoids "reinventing" a good prompt for every new project.','Always test the full pipeline on a small project before applying it to a big client project — one weak link breaks the whole result.']
            },
            method: { fr: 'Choisissez un petit projet (ex: un post avec image) et listez précisément quel outil IA vous utiliserez à chaque étape.', ar: 'اختار مشروع صغير (مثلاً منشور بصورة) واكتب بدقة أي أداة ذكاء اصطناعي راح تستعمل ف كل خطوة.', en: 'Choose a small project (e.g. a post with an image) and precisely list which AI tool you\'ll use at each step.' },
            exercise: { fr: 'Réalisez un mini-pipeline complet: texte avec un outil, image avec un autre, assemblage final — documentez chaque étape.', ar: 'حقق mini-pipeline كامل: نص بأداة، صورة بأداة أخرى، تجميع نهائي — وثق كل خطوة.', en: 'Carry out a complete mini-pipeline: text with one tool, image with another, final assembly — document each step.' },
            tip: { fr: '💡 Un pipeline documenté peut être délégué ou vendu comme service — c\'est la base d\'une offre professionnelle.', ar: '💡 pipeline موثق يقدر يفوض أو يباع كخدمة — هو أساس عرض احترافي.', en: '💡 A documented pipeline can be delegated or sold as a service — it\'s the foundation of a professional offer.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 5+', ar: 'الشهر 5+', en: 'Month 5+' },
        goal: { fr: 'Transformer les compétences IA en revenu réel', ar: 'تحويل مهارات الذكاء الاصطناعي لدخل حقيقي', en: 'Turn AI skills into real income' },
        lessons: [
          {
            id: 'ai-m-1',
            title: { fr: 'Gagner de l\'Argent avec l\'IA', ar: 'ربح المال بالذكاء الاصطناعي', en: 'Earning Money with AI' },
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['3 façons de monétiser les compétences IA: freelance (rédaction, design assistés par IA), automatisation pour PME, formation/consulting sur les outils IA.','Ne vendez jamais du "contenu IA brut" — vendez le résultat final retravaillé et adapté au client, l\'IA est votre outil, pas votre produit.','Tarifez selon le résultat livré, pas selon le temps passé avec l\'IA — un client paie pour un texte fini, pas pour "combien de temps ChatGPT a tourné".','Prix de départ réalistes pour le marché algérien: rédaction assistée par IA 3-10K DZD/article, automatisation simple pour PME 15-40K DZD/projet.','Montrez toujours votre valeur ajoutée humaine dans votre portfolio: la direction créative, la vérification, l\'adaptation au client — pas juste "généré par IA".'],
              ar: ['3 طرق لربح المال من مهارات الذكاء الاصطناعي: فريلانس (كتابة، تصميم بمساعدة الذكاء الاصطناعي)، أتمتة للمشاريع الصغيرة، تكوين/استشارة على أدوات الذكاء الاصطناعي.','عمرك ما تبيع "محتوى ذكاء اصطناعي خام" — بيع النتيجة النهائية معاد صياغتها ومكيفة للزبون، الذكاء الاصطناعي أداتك، ماشي منتجك.','احسب حسب النتيجة المسلمة، ماشي حسب الوقت المصروف مع الذكاء الاصطناعي — الزبون يدفع لنص كامل، ماشي لـ"قداش دار ChatGPT".','أسعار بداية واقعية للسوق الجزائري: كتابة بمساعدة الذكاء الاصطناعي 3-10K دج/مقال، أتمتة بسيطة لمشروع صغير 15-40K دج/مشروع.','وري دائماً قيمتك المضافة البشرية ف البورتفوليو: التوجيه الإبداعي، التحقق، التكييف مع الزبون — ماشي غير "مولد بالذكاء الاصطناعي".'],
              en: ['3 ways to monetize AI skills: freelancing (AI-assisted writing, design), automation for small businesses, training/consulting on AI tools.','Never sell "raw AI content" — sell the final reworked result adapted to the client, AI is your tool, not your product.','Price based on the delivered result, not time spent with AI — a client pays for a finished text, not for "how long ChatGPT ran".','Realistic starting prices for the Algerian market: AI-assisted writing 3-10K DZD/article, simple automation for small businesses 15-40K DZD/project.','Always show your human added value in your portfolio: creative direction, verification, client adaptation — not just "AI-generated".']
            },
            method: { fr: 'Listez 3 services que vous pourriez proposer dès maintenant en combinant vos compétences existantes avec l\'IA.', ar: 'اكتب 3 خدمات تقدر تقترحها من داب بدمج مهاراتك الحالية مع الذكاء الاصطناعي.', en: 'List 3 services you could offer right now by combining your existing skills with AI.' },
            exercise: { fr: 'Créez une offre de service simple (1 page) précisant le livrable, le prix en DZD, et votre valeur ajoutée humaine.', ar: 'أنشئ عرض خدمة بسيط (صفحة وحدة) يحدد التسليم، السعر بالدينار، وقيمتك المضافة البشرية.', en: 'Create a simple service offer (1 page) specifying the deliverable, the price in DZD, and your human added value.' },
            tip: { fr: '💡 Les clients qui découvrent que "c\'est fait par IA" sans le savoir à l\'avance perdent confiance — soyez transparent sur votre usage de l\'IA.', ar: '💡 الزبائن اللي يكتشفو "هذا مصنوع بالذكاء الاصطناعي" بلا ما يعرفو مسبقاً يخسرو الثقة — كون شفاف على استخدامك للذكاء الاصطناعي.', en: '💡 Clients who discover "it\'s AI-made" without knowing beforehand lose trust — be transparent about your use of AI.' }
          },
          {
            id: 'ai-m-2',
            title: { fr: 'Construire une Offre de Services IA pour Entreprises', ar: 'بناء عرض خدمات ذكاء اصطناعي للمشاريع', en: 'Building an AI Services Offer for Businesses' },
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Les PME algériennes ont souvent des tâches répétitives non automatisées (réponses clients, création de contenu, rapports) — c\'est votre marché cible.','Commencez par un audit gratuit ou à bas prix: identifiez 3 tâches automatisables chez un client potentiel, cela ouvre la porte à une vraie mission payante.','Packagez votre offre en 3 niveaux clairs: Découverte (1 automatisation simple, 15-30K DZD), Croissance (workflow complet, 40-80K DZD), Partenariat (accompagnement mensuel, 15-30K DZD/mois).','Formez toujours un peu le client à utiliser ce que vous avez construit — un client autonome renouvelle sa confiance, un client dépendant à 100% hésite à continuer.','Restez à jour: suivez 2-3 sources fiables sur l\'actualité IA chaque semaine — ce secteur change plus vite que n\'importe quel autre domaine du digital.'],
              ar: ['المشاريع الصغيرة الجزائرية غالباً عندها مهام متكررة ماشي مؤتمتة (ردود الزبائن، إنشاء محتوى، تقارير) — هذا سوقك المستهدف.','ابدا بتدقيق مجاني أو بسعر منخفض: حدد 3 مهام قابلة للأتمتة عند زبون محتمل، هذا يفتح الباب لمهمة حقيقية مدفوعة.','رتب عرضك ف 3 مستويات واضحة: اكتشاف (أتمتة بسيطة وحدة، 15-30K دج)، نمو (workflow كامل، 40-80K دج)، شراكة (مرافقة شهرية، 15-30K دج/شهر).','كوّن الزبون دائماً شوية على استخدام اللي بنيتو — زبون مستقل يجدد ثقتو، زبون معتمد 100% يتردد يكمل.','ابقى محدث: تابع 2-3 مصادر موثوقة على أخبار الذكاء الاصطناعي كل أسبوع — هذا القطاع يتبدل أسرع من أي مجال ديجيتال آخر.'],
              en: ['Algerian small businesses often have repetitive non-automated tasks (customer replies, content creation, reports) — that\'s your target market.','Start with a free or low-cost audit: identify 3 automatable tasks at a potential client\'s, this opens the door to a real paid mission.','Package your offer into 3 clear tiers: Discovery (1 simple automation, 15-30K DZD), Growth (full workflow, 40-80K DZD), Partnership (monthly support, 15-30K DZD/month).','Always train the client a bit on using what you\'ve built — an autonomous client renews their trust, a 100% dependent client hesitates to continue.','Stay current: follow 2-3 reliable AI news sources every week — this sector changes faster than any other digital field.']
            },
            method: { fr: 'Identifiez une entreprise (réelle ou fictive) et listez 3 tâches répétitives qu\'elle pourrait automatiser avec l\'IA.', ar: 'حدد مشروع (حقيقي أو وهمي) واكتب 3 مهام متكررة يقدر يؤتمتها بالذكاء الاصطناعي.', en: 'Identify a business (real or fictional) and list 3 repetitive tasks it could automate with AI.' },
            exercise: { fr: 'Rédigez votre grille tarifaire à 3 niveaux (Découverte/Croissance/Partenariat) pour vos services IA aux entreprises.', ar: 'اكتب جدول أسعارك بـ3 مستويات (اكتشاف/نمو/شراكة) لخدمات الذكاء الاصطناعي ديالك للمشاريع.', en: 'Write your 3-tier pricing table (Discovery/Growth/Partnership) for your AI services to businesses.' },
            tip: { fr: '💡 La formation continue n\'est pas optionnelle dans l\'IA — bloquez 1h par semaine pour rester à jour, sinon vos compétences deviennent obsolètes en quelques mois.', ar: '💡 التكوين المستمر ماشي اختياري ف الذكاء الاصطناعي — خصص ساعة ف الأسبوع باش تبقى محدث، وإلا مهاراتك تولي قديمة ف أشهر قليلة.', en: '💡 Continuous learning isn\'t optional in AI — block 1h a week to stay current, otherwise your skills become outdated within months.' }
          }
        ]
      }
    ]
  }
];

