// ============================================================
// DATA.JS - 10 SKILLS COMPLETS AVEC CHAR7 DÉTAILLÉ
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
              fr: ['CONTRASTE: Rendez l\'élément le plus important plus grand, plus coloré ou plus différent du reste.','ALIGNEMENT: Rien ne doit être placé au hasard. Activez les guides pour aligner parfaitement vos éléments.','RÉPÉTITION: Utilisez la même police, les mêmes couleurs et le même style pour les éléments similaires.','PROXIMITÉ: Groupez les éléments qui vont ensemble et séparez ceux qui n\'ont pas de lien.','Astuce pro: Ouvrez n\'importe quel template Canva et identifiez ces 4 règles dans chaque élément.','Exercice: Cherchez "flyer restaurant algérie" sur Google. Identifiez les règles respectées et brisées.'],
              ar: ['التباين: خلّي العنصر الأهم أكبر، أو أكثر لوناً، أو مختلفاً عن الباقي.','المحاذاة: ما كاين والو موضوع بالعشوائية. فعّل الخطوط باش تراصف عناصرك بالضبط.','التكرار: استخدم نفس الخط، نفس الألوان ونفس الستايل للعناصر المتشابهة.','القرب: جمّع العناصر اللي تمشي مع بعض وفرّق اللي ما عندهمش رابط.','نصيحة: افتح أي قالب Canva وحدّد هالقواعد الأربعة في كل عنصر.','تمرين: دور على "flyer مطعم الجزائر" في Google. حدّد القواعد المطبقة والمكسورة.'],
              en: ['CONTRAST: Make the most important element bigger, more colorful, or different from the rest.','ALIGNMENT: Nothing should be placed randomly. Enable guides to align your elements perfectly.','REPETITION: Use the same font, colors and style for similar elements.','PROXIMITY: Group elements that belong together and separate those that don\'t.','Pro tip: Open any Canva template and identify these 4 rules in every element.','Exercise: Search "flyer restaurant algeria" on Google. Identify rules followed and broken.']
            },
            method: { fr: 'Créez deux versions d\'un même design: une où vous violez les 4 règles, et une où vous les respectez parfaitement.', ar: 'أنشئ نسختين من نفس التصميم: وحدة تكسر فيها القواعد الأربعة، ووحدة تتبعها بالضبط.', en: 'Create two versions of the same design: one where you break all 4 rules, and one where you follow them perfectly.' },
            exercise: { fr: 'Designez une carte de visite pour un restaurant algérien DEUX fois: Version 1 = violez les 4 règles. Version 2 = respectez-les parfaitement.', ar: 'صمّم بطاقة أعمال لمطعم جزائري مرتين: نسخة 1 = اكسر القواعد الأربعة. نسخة 2 = اتبعها بالضبط.', en: 'Design a business card for an Algerian restaurant TWICE: Version 1 = violate all 4 rules. Version 2 = follow them perfectly.' },
            tip: { fr: '💡 Les designers professionnels ne brisent les règles qu\'APRÈS les avoir parfaitement maîtrisées.', ar: '💡 المصممون المحترفين ما يكسرونش القواعد إلا بعد ما يتقنوها بالكامل.', en: '💡 Professional designers only break rules AFTER perfectly mastering them.' }
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
          }
        ]
      }
    ]
  }
];