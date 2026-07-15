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

// ===== SKILLS (10 SKILLS AVEC CHAR7 KAMEL) =====
var SKILLS = [
  // ============================================================
  // SKILL 1: GRAPHIC DESIGN
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
        goal: { fr: 'Apprendre les bases de Canva', ar: 'تعلم أساسيات Canva', en: 'Learn Canva basics' },
        lessons: [
          {
            id: 'd-b-1',
            title: { fr: 'Installer et utiliser Canva', ar: 'تنصيب واستخدام Canva', en: 'Install & Use Canva' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Allez sur canva.com ou téléchargez l\'app depuis Google Play ou App Store. C\'est gratuit et sans carte de crédit.','Cliquez sur "S\'inscrire" et créez un compte avec votre email ou via Google.','Une fois connecté, cliquez sur "Créer un design" en haut à droite.','Choisissez "Post Instagram Carré" — un canvas vierge de 1080x1080px.','Explorez le panneau de gauche: Templates, Éléments, Texte, Arrière-plan, Téléchargements.','Utilisez la barre du haut pour modifier les polices, couleurs, et positions.','Apprenez les raccourcis: Ctrl+Z pour annuler, Ctrl+D pour dupliquer.','Pour exporter: cliquez sur "Partager" → "Télécharger" → PNG ou PDF.'],
              ar: ['روح لـ canva.com أو حمّل التطبيق من Google Play أو App Store. مجاني وبدون بطاقة ائتمان.','اضغط على "سجّل" وأنشئ حساباً بإيميلك أو عبر Google.','بعد الدخول، اضغط على "إنشاء تصميم" في أعلى اليمين.','اختار "منشور Instagram مربع" — مساحة فارغة 1080x1080px.','استكشف اللوحة اليسرى: قوالب، عناصر، نص، خلفية، تحميلات.','استخدم الشريط العلوي لتغيير الخطوط والألوان والمواضع.','تعلّم الاختصارات: Ctrl+Z للتراجع، Ctrl+D للنسخ.','للتصدير: اضغط "مشاركة" → "تحميل" → PNG أو PDF.'],
              en: ['Go to canva.com or download the app from Google Play or App Store. It\'s free and no credit card required.','Click "Sign Up" and create an account with your email or via Google.','Once logged in, click "Create a design" at the top right.','Choose "Instagram Post Square" — a blank 1080x1080px canvas.','Explore the left panel: Templates, Elements, Text, Background, Uploads.','Use the top toolbar to change fonts, colors, and positions.','Learn shortcuts: Ctrl+Z to undo, Ctrl+D to duplicate.','To export: click "Share" → "Download" → PNG or PDF.']
            },
            method: { fr: 'Ouvrez Canva maintenant et passez 20 minutes à explorer chaque bouton. Ne concevez rien — juste explorez l\'interface. C\'est votre première leçon.', ar: 'افتح Canva الآن واقضِ 20 دقيقة تستكشف كل زر. لا تصمم شيئاً — فقط استكشف الواجهة. هذا درسك الأول.', en: 'Open Canva now and spend 20 minutes exploring every button. Don\'t design anything — just explore the interface. This is your first lesson.' },
            exercise: { fr: 'Créez un post Instagram avec votre nom en grand texte gras et un fond coloré. Téléchargez-le et sauvegardez-le.', ar: 'أنشئ منشور Instagram باسمك بخط كبير وعريض وخلفية ملونة. حمّله واحفظه.', en: 'Create an Instagram post with your name in big bold text and a colored background. Download and save it.' },
            tip: { fr: '💡 Canva Gratuit donne accès à plus de 250 000 templates. Ne passez pas à la version Pro avant d\'avoir vos premiers clients payants.', ar: '💡 Canva المجاني يعطيك أكثر من 250,000 قالب. لا تنتقل للـ Pro قبل ما تجيك أول زبون.', en: '💡 Canva Free gives you access to over 250,000 templates. Don\'t upgrade to Pro until you have your first paying clients.' }
          }
        ]
      },
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
              fr: ['Photopea (photopea.com) est un éditeur en ligne 99% identique à Photoshop, totalement gratuit.','L\'interface: à gauche les outils (sélection, pinceau, texte), à droite les calques.','Les calques sont des feuilles transparentes superposées. Chaque élément doit être sur son propre calque.','Pour supprimer un fond: utilisez l\'outil Baguette magique, cliquez sur le fond, puis Delete.','Pour exporter: Fichier → Exporter → Exporter sous → PNG (cochez Transparence) ou JPEG.'],
              ar: ['Photopea (photopea.com) هو محرر أونلاين شبيه بـ Photoshop بنسبة 99%، مجاني تماماً.','الواجهة: على اليسار الأدوات (تحديد، فرشاة، نص)، على اليمين الطبقات.','الطبقات هي أوراق شفافة مكدسة. كل عنصر يجب أن يكون على طبقته الخاصة.','لحذف الخلفية: استخدم أداة العصا السحرية، انقر على الخلفية، ثم Delete.','للتصدير: ملف → تصدير → تصدير كـ → PNG (فعّل الشفافية) أو JPEG.'],
              en: ['Photopea (photopea.com) is an online editor 99% identical to Photoshop, completely free.','Interface: on the left tools (selection, brush, text), on the right layers.','Layers are transparent sheets stacked on top of each other. Each element must be on its own layer.','To remove background: use the Magic Wand tool, click on the background, then Delete.','To export: File → Export → Export As → PNG (check Transparency) or JPEG.']
            },
            method: { fr: 'Ouvrez une photo de produit dans Photopea, supprimez l\'arrière-plan, ajoutez un fond blanc et du texte (nom + prix).', ar: 'افتح صورة منتج في Photopea، ازل الخلفية، أضف خلفية بيضاء ونص (الاسم + السعر).', en: 'Open a product photo in Photopea, remove the background, add a white background and text (name + price).' },
            exercise: { fr: 'Photo produit algérien: supprimez le fond, placez sur fond blanc, ajoutez le prix et le nom. Exportez en PNG.', ar: 'صورة منتج جزائري: ازل الخلفية، حطها على خلفية بيضاء، زيد السعر والاسم. صدّر PNG.', en: 'Algerian product photo: remove background, place on white, add price and name. Export as PNG.' },
            tip: { fr: '💡 Pour ajouter une ombre: clic droit sur le calque → Options de fusion → Ombre portée → opacité 40%, distance 10px, flou 20px.', ar: '💡 لإضافة ظل: انقر يمين على الطبقة → خيارات المزج → ظل مسقط → شفافية 40%، مسافة 10px، تعتيم 20px.', en: '💡 To add a shadow: right-click on the layer → Blending Options → Drop Shadow → opacity 40%, distance 10px, blur 20px.' }
          }
        ]
      },
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
              fr: ['Inkscape (inkscape.org) est un outil vectoriel 100% gratuit et très similaire à Illustrator.','Les vecteurs sont des images qui peuvent être agrandies à l\'infini sans perte de qualité.','L\'outil Plume (P) permet de tracer des formes précises: cliquez pour un angle droit, glissez pour une courbe.','Pour recréer un logo: importez l\'image, verrouillez le calque, créez un nouveau calque et tracez avec la Plume.','Pathfinder: Unir (fusionner), Soustraction (soustraire), Intersection (chevaucher).','Pour les couleurs: sélectionnez la forme → carré de remplissage → entrez le code hexadécimal.'],
              ar: ['Inkscape (inkscape.org) أداة فيكتور مجانية 100% وشبيهة جداً بـ Illustrator.','الفيكتورات هي صور يمكن تكبيرها إلى ما لا نهاية دون فقدان الجودة.','أداة القلم (P) تسمح برسم أشكال دقيقة: اضغط لزاوية مستقيمة، اسحب لمنحنى.','لإعادة إنشاء شعار: استورد الصورة، اقفل الطبقة، أنشئ طبقة جديدة وتتبّع بالقلم.','Pathfinder: توحيد (دمج)، طرح (سحب)، تقاطع (تداخل).','للألوان: اختر الشكل → مربع التعبئة → أدخل الكود السداسي.'],
              en: ['Inkscape (inkscape.org) is a 100% free vector tool very similar to Illustrator.','Vectors are images that can be scaled infinitely without quality loss.','The Pen Tool (P) allows you to draw precise shapes: click for a straight corner, drag for a curve.','To recreate a logo: import the image, lock the layer, create a new layer and trace with the Pen.','Pathfinder: Unite (merge), Minus Front (subtract), Intersect (overlap).','For colors: select the shape → Fill square → enter the hex code.']
            },
            method: { fr: 'Recréez un logo simple (3-5 formes) en utilisant UNIQUEMENT l\'outil Plume dans Inkscape.', ar: 'أعد إنشاء شعار بسيط (3-5 أشكال) باستخدام أداة القلم فقط في Inkscape.', en: 'Recreate a simple logo (3-5 shapes) using ONLY the Pen Tool in Inkscape.' },
            exercise: { fr: 'Recréez le logo d\'Ooredoo ou Djezzy en vectoriel avec Inkscape. Utilisez uniquement la Plume et Pathfinder.', ar: 'أعد إنشاء شعار Ooredoo أو Djezzy كفيكتور مع Inkscape. استخدم القلم و Pathfinder فقط.', en: 'Recreate the Ooredoo or Djezzy logo as vector with Inkscape. Use only the Pen and Pathfinder.' },
            tip: { fr: '💡 Client avec logo JPEG: proposez de le vectoriser. Facturez 3000-8000 DZD pour 30-90 minutes de travail.', ar: '💡 زبون بشعار JPEG: اقترح تحويله لفيكتور. اشحن 3000-8000 دج مقابل 30-90 دقيقة عمل.', en: '💡 Client with JPEG logo: offer to vectorize it. Charge 3000-8000 DZD for 30-90 minutes of work.' }
          }
        ]
      },
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
              fr: ['Le bon moment: quand vous avez un travail constant qui dépasse votre capacité seul ET que vous refusez des projets.','Collaborateur: engagez votre meilleur étudiant ou un designer en ligne. Paiement par projet (40-50% du montant).','Rôles: Vous gérez l\'acquisition et les propositions qualité. Eux gèrent l\'exécution.','Créez votre marque d\'agence: nom, logo, site Carrd.co (30 minutes, gratuit).','Forfaits: Starter 25K/mois, Croissance 55K/mois, Premium 100K+/mois.','Ciblez les agences publicitaires: 1 client agence = 10 clients individuels.'],
              ar: ['الوقت المناسب: عندما يكون لديك عمل مستمر يفوق طاقتك وحدك وترفض مشاريع.','المتعاون: وظّف أفضل طالب أو مصمم أونلاين. دفع بالمشروع (40-50% من المبلغ).','الأدوار: أنت تدير الاستقطاب والعروض. هم يديرون التنفيذ.','أنشئ علامة الأجنسي: اسم، شعار، موقع Carrd.co (30 دقيقة، مجاني).','الباقات: Starter 25K/شهر، نمو 55K/شهر، Premium 100K+/شهر.','استهدف وكالات الإعلان: زبون أجنسي واحد = 10 زبائن أفراد.'],
              en: ['The right time: when you have constant work exceeding your solo capacity AND you\'re refusing projects.','Collaborator: hire your best student or an online designer. Payment per project (40-50% of the amount).','Roles: You handle acquisition and quality proposals. They handle execution.','Create your agency brand: name, logo, Carrd.co site (30 minutes, free).','Packages: Starter 25K/month, Growth 55K/month, Premium 100K+/month.','Target advertising agencies: 1 agency client = 10 individual clients.']
            },
            method: { fr: 'Créez un pitch non sollicité: trouvez une entreprise avec un mauvais design, refaites leur logo + 3 posts gratuitement. Envoyez-leur en disant "Je voulais vous montrer ce qui est possible".', ar: 'أنشئ عرضاً غير مطلوب: ابحث عن مشروع بتصميم ضعيف، أعد تصميم شعارهم + 3 منشورات مجاناً. أرسل لهم قائلاً "أردت أن أريك ما هو ممكن".', en: 'Create an unsolicited pitch: find a business with poor design, redo their logo + 3 posts for free. Send it saying "I wanted to show you what\'s possible".' },
            exercise: { fr: 'Identifiez 3 entreprises algériennes avec un design faible. Refaites le design pour l\'une d\'elles: logo + 2 posts. Envoyez un message de prospection.', ar: 'حدّد 3 مشاريع جزائرية بتصميم ضعيف. أعد تصميم واحد منهم: شعار + 2 منشور. أرسل رسالة تواصل.', en: 'Identify 3 Algerian businesses with weak design. Redesign one of them: logo + 2 posts. Send a prospecting message.' },
            tip: { fr: '💡 La stratégie la plus rapide: spécialisez-vous dans UN secteur. Les spécialistes facturent toujours plus cher que les généralistes.', ar: '💡 أسرع استراتيجية: تخصّص في قطاع واحد. المتخصصون دائماً يشحنون أكثر من العامين.', en: '💡 The fastest strategy: specialize in ONE sector. Specialists always charge more than generalists.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 2: SOCIAL MEDIA MANAGEMENT (version simplifiée mais avec char7)
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
        goal: { fr: 'Comprendre les algorithmes', ar: 'تفهم الخوارزميات', en: 'Understand algorithms' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un Compte Business', ar: 'إعداد حساب Business', en: 'Set Up a Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Instagram: allez dans Profil → les 3 lignes → Paramètres → Compte → "Passer en compte professionnel" → choisissez "Business".','Facebook: allez sur facebook.com/pages/create → choisissez "Entreprise" → donnez un nom et une catégorie.','Meta Business Suite: connectez-vous sur business.facebook.com → connectez votre Page Facebook et votre compte Instagram.','WhatsApp Business: téléchargez l\'application, utilisez un numéro professionnel et liez-le à votre compte Facebook.','Profil 100%: ajoutez une photo professionnelle, une bio de 80 caractères, un lien linktr.ee, et activez le bouton "Contacter".'],
              ar: ['Instagram: روح للبروفيل → 3 خطوط → إعدادات → حساب → "تحويل لحساب محترف" → اختار "Business".','Facebook: روح لـ facebook.com/pages/create → اختار "مشروع" → سمّي صفحتك وحدّد الفئة.','Meta Business Suite: سجل دخول على business.facebook.com → اربط صفحة Facebook وحساب Instagram.','WhatsApp Business: حمّل التطبيق، استخدم رقم احترافي واربطه بحساب Facebook.','بروفيل 100%: زيد صورة احترافية، bio 80 حرف، رابط linktr.ee، وفعّل زر "تواصل".'],
              en: ['Instagram: go to Profile → 3 lines → Settings → Account → "Switch to Professional Account" → choose "Business".','Facebook: go to facebook.com/pages/create → select "Business" → name your page and choose a category.','Meta Business Suite: log in to business.facebook.com → connect your Facebook Page and Instagram account.','WhatsApp Business: download the app, use a professional number and link it to your Facebook account.','100% Profile: add a professional photo, 80-char bio, linktr.ee link, and activate the "Contact" button.']
            },
            method: { fr: 'Créez un compte test Instagram avec un email jetable. Appelez-le "DZFoodTest" — votre bac à sable pour tester toutes vos stratégies.', ar: 'أنشئ حساب Instagram تجريبي بإيميل مؤقت. سمّيه "DZFoodTest" — صندوق الرمل الخاص بك لتجربة كل الاستراتيجيات.', en: 'Create a test Instagram account with a disposable email. Call it "DZFoodTest" — your sandbox to test all your strategies.' },
            exercise: { fr: 'Configurez un profil business complet pour un restaurant fictif sur Instagram ET Facebook. Connectez les deux comptes à Meta Business Suite.', ar: 'اعدد بروفيل business كامل لمطعم وهمي على Instagram وFacebook. اربط الحسابين بـ Meta Business Suite.', en: 'Set up a complete business profile for a fictional restaurant on Instagram AND Facebook. Connect both accounts to Meta Business Suite.' },
            tip: { fr: '💡 Utilisez linktr.ee pour créer une page de destination gratuite avec plusieurs boutons: WhatsApp, Facebook, Menu, Localisation.', ar: '💡 استخدم linktr.ee لإنشاء صفحة هبوط مجانية بعدة أزرار: WhatsApp، Facebook، القائمة، الموقع.', en: '💡 Use linktr.ee to create a free landing page with multiple buttons: WhatsApp, Facebook, Menu, Location.' }
          }
        ]
      },
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
              fr: ['Règle 0.5s: le premier frame doit stopper le scroll. JAMAIS de logo ou d\'écran d\'intro.','Structure: Accroche (0-2s) → Setup (2-8s) → Payoff (8-20s) → CTA (dernières 2s).','Tournage: téléphone VERTICAL (9:16), caméra arrière, regardez l\'objectif pas l\'écran.','CapCut: nouveau projet → clips → Split pour couper → Texte → Auto Captions.','Audio tendance: onglet Reels → flèche tendance → utilisez cet audio.','Sous-titres obligatoires: 60% regardent sans son. CapCut → Texte → Sous-titres automatiques.'],
              ar: ['قاعدة 0.5 ث: أول إطار يجب أن يوقف التمرير. أبداً لا شعار أو شاشة مقدمة.','الهيكل: جذبة (0-2ث) → إعداد (2-8ث) → نتيجة (8-20ث) → CTA (آخر 2ث).','التصوير: هاتف عمودي (9:16)، كاميرا خلفية، انظر للعدسة مش الشاشة.','CapCut: مشروع جديد → كليبات → Split للقطع → نص → تعليقات تلقائية.','الصوت الرائج: تبويب Reels → سهم الترند → استخدم هذا الصوت.','الترجمة إلزامية: 60% يشاهدون بدون صوت. CapCut → نص → تعليقات تلقائية.'],
              en: ['0.5s rule: the first frame must stop the scroll. NEVER a logo or intro screen.','Structure: Hook (0-2s) → Setup (2-8s) → Payoff (8-20s) → CTA (last 2s).','Filming: phone VERTICAL (9:16), back camera, look at the lens not the screen.','CapCut: new project → clips → Split to cut → Text → Auto Captions.','Trending audio: Reels tab → trending arrow → use this audio.','Subtitles mandatory: 60% watch without sound. CapCut → Text → Auto Captions.']
            },
            method: { fr: 'Regardez des Reels pendant 20 minutes avec un œil critique. Chaque Reel qui vous retient plus de 5s: mettez pause et notez ce qui vous a accroché.', ar: 'شاهد Reels لمدة 20 دقيقة بعين ناقدة. كل Reel يبقيك أكثر من 5ث: وقّف ودوّن ما جذبك.', en: 'Watch Reels for 20 minutes with a critical eye. Every Reel that keeps you for more than 5s: pause and note what hooked you.' },
            exercise: { fr: 'Filmez et éditez 3 Reels différents: 1) Avant/Après, 2) 3 Conseils éducatifs, 3) Coulisses. Publiez-les sur votre compte test.', ar: 'صوّر وعدّل 3 Reels مختلفة: 1) قبل/بعد، 2) 3 نصائح تعليمية، 3) كواليس. انشرهم على حسابك التجريبي.', en: 'Film and edit 3 different Reels: 1) Before/After, 2) 3 Educational Tips, 3) Behind the Scenes. Post them on your test account.' },
            tip: { fr: '💡 Publiez votre meilleur Reel à 19h (heure algérienne). Utilisez Meta Business Suite pour programmer à l\'avance.', ar: '💡 انشر أفضل Reel لديك الساعة 7 مساءً (توقيت الجزائر). استخدم Meta Business Suite للجدولة مسبقاً.', en: '💡 Post your best Reel at 7pm (Algeria time). Use Meta Business Suite to schedule in advance.' }
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
              fr: ['Section 1 Audit: followers, taux d\'engagement, top 5 posts analysés, démographie, fréquence de publication.','Section 2 Concurrents: 3-5 concurrents directs. Analysez leurs followers, engagement, contenu, fréquence. Identifiez les GAPS.','Section 3 Persona: profil fictif complet (nom, âge, ville, job, revenus, objectifs, habitudes).','Section 4 Objectifs SMART: ex: Augmenter l\'engagement de 1.2% à 4.5% en 90 jours.','Section 5 Stratégie 90 jours: plateformes, piliers de contenu, mix de formats, fréquence, hashtags, budget pubs.','Présentez en PDF designé sur Canva. Cela vous positionne comme premium avant même que le client ne voie vos tarifs.'],
              ar: ['القسم 1 تدقيق: المتابعون، معدل التفاعل، أفضل 5 منشورات، الديموغرافيا، تكرار النشر.','القسم 2 المنافسون: 3-5 منافسين مباشرين. حلل متابعيهم، تفاعلهم، محتواهم، تكرارهم. حدّد الثغرات.','القسم 3 الشخصية: ملف خيالي كامل (الاسم، العمر، المدينة، العمل، الدخل، الأهداف، العادات).','القسم 4 أهداف SMART: مثال: زيادة التفاعل من 1.2% إلى 4.5% في 90 يوماً.','القسم 5 استراتيجية 90 يوماً: المنصات، ركائز المحتوى، مزيج الصيغ، التكرار، الهاشتاجات، ميزانية الإعلانات.','قدّمها كـ PDF مصمم على Canva. يضعك كخيار premium قبل أن يرى الزبون أسعارك.'],
              en: ['Section 1 Audit: followers, engagement rate, top 5 posts analyzed, demographics, posting frequency.','Section 2 Competitors: 3-5 direct competitors. Analyze their followers, engagement, content, frequency. Identify GAPS.','Section 3 Persona: complete fictional profile (name, age, city, job, income, goals, habits).','Section 4 SMART Goals: Example: Increase engagement from 1.2% to 4.5% in 90 days.','Section 5 90-day strategy: platforms, content pillars, format mix, frequency, hashtags, ad budget.','Present as a designed Canva PDF. Positions you as premium before the client even sees your rates.']
            },
            method: { fr: 'Rédigez votre premier document pour une vraie entreprise locale, même si elle ne vous a pas engagé. Envoyez-le comme cadeau gratuit. Le taux de réponse est extrêmement élevé.', ar: 'اكتب أول وثيقة لمشروع محلي حقيقي، حتى لو لم يوظّفك. أرسلها كهدية مجانية. معدل الاستجابة مرتفع جداً.', en: 'Write your first document for a real local business, even if they haven\'t hired you. Send it as a free gift. The response rate is extremely high.' },
            exercise: { fr: 'Créez un document complet (8 pages minimum) en PDF Canva pour une entreprise algérienne. Incluez toutes les 5 sections.', ar: 'أنشئ وثيقة كاملة (8 صفحات كحد أدنى) PDF Canva لمشروع جزائري. تضمّن الأقسام الخمسة.', en: 'Create a complete document (8 pages minimum) as a Canva PDF for an Algerian business. Include all 5 sections.' },
            tip: { fr: '💡 Ne dites jamais "je pense". Dites "les données montrent". La confiance basée sur les données est ce que les clients paient vraiment.', ar: '💡 لا تقل أبداً "أعتقد". قل "البيانات تُظهر". الثقة المبنية على البيانات هي ما يدفع الزبائن حقاً.', en: '💡 Never say "I think". Say "the data shows". Data-based confidence is what clients really pay for.' }
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
              fr: ['Mindset: un freelance vend son temps. Une agence vend des résultats. Garantissez des métriques spécifiques.','Garantie: définissez quelle métrique vous livrez avec confiance. Continuez gratuitement si vous manquez l\'objectif.','Premier membre: Community Manager 3-4h/jour. Salaire: 15000-25000 DZD/mois. Recrutez dans les groupes Facebook Algérie.','Tarification: Starter 15K/mois, Croissance 35K/mois, Premium 65K+/mois.','Acquisition: Références (10% commission), DMs Instagram froids, partenariats avec designers et développeurs.','Case study: documentez 1 succès client (avant/après). Publiez en carousel Instagram + PDF.'],
              ar: ['العقلية: فريلانسر يبيع وقته. أجنسي يبيع النتائج. اضمن مقاييس محددة.','الضمان: حدّد أي مقياس تسلّمه بثقة. استمر مجاناً إذا فاتك الهدف.','أول عضو: مدير مجتمع 3-4 ساعات/يوم. الراتب: 15000-25000 دج/شهر. ابحث في مجموعات Facebook الجزائر.','التسعير: Starter 15K/شهر، نمو 35K/شهر، Premium 65K+/شهر.','الاستقطاب: إحالات (عمولة 10%)، DMs Instagram باردة، شراكات مع مصممين ومطورين.','دراسة حالة: وثّق نجاح زبون واحد (قبل/بعد). انشر كاروسيل Instagram + PDF.'],
              en: ['Mindset: a freelancer sells their time. An agency sells results. Guarantee specific metrics.','Guarantee: define what metric you confidently deliver. Continue for free if you miss the target.','First member: Community Manager 3-4h/day. Salary: 15000-25000 DZD/month. Recruit in Algeria Facebook groups.','Pricing: Starter 15K/month, Growth 35K/month, Premium 65K+/month.','Acquisition: Referrals (10% commission), cold Instagram DMs, partnerships with designers and developers.','Case study: document 1 client success (before/after). Publish as an Instagram carousel + PDF.']
            },
            method: { fr: 'Documentez UNE histoire de succès: métriques avant → ce que vous avez fait → métriques 3 mois après. Ce contenu vous apportera plus de clients que n\'importe quel pitch commercial.', ar: 'وثّق قصة نجاح واحدة: المقاييس قبل → ما فعلته → المقاييس بعد 3 أشهر. هذا المحتوى يجلب عملاء أكثر من أي عرض بيع.', en: 'Document ONE success story: metrics before → what you did → metrics 3 months after. This content will bring you more clients than any sales pitch.' },
            exercise: { fr: 'Créez un modèle d\'affaires sur 1 page: votre niche, 3 forfaits avec prix, votre garantie, 3 canaux d\'acquisition, objectif de revenus 6 mois.', ar: 'أنشئ نموذج عمل في صفحة واحدة: نيشتك، 3 باقات مع أسعار، ضمانك، 3 قنوات استقطاب، هدف الإيرادات 6 أشهر.', en: 'Create a business model on 1 page: your niche, 3 packages with prices, your guarantee, 3 acquisition channels, 6-month revenue goal.' },
            tip: { fr: '💡 Le chemin le plus rapide: 1 client → des résultats exceptionnels → 1 recommandation → répétez. Pas besoin de site web ou de publicité pour commencer.', ar: '💡 أسرع طريق: زبون 1 → نتائج استثنائية → إحالة 1 → كرّر. لا تحتاج موقعاً أو إعلانات للبدء.', en: '💡 The fastest path: 1 client → exceptional results → 1 referral → repeat. No need for a website or ads to start.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 3: VIDEO EDITING (version simplifiée avec char7)
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
              fr: ['Téléchargez CapCut depuis Google Play ou App Store — gratuit, sans filigrane.','Ouvrez l\'app → cliquez sur + → sélectionnez vos vidéos et photos → Ajouter.','La timeline est votre espace de travail: chaque clip est un bloc. Tapez sur un clip pour le sélectionner.','Pour couper: faites glisser la ligne blanche → Split → Delete la partie inutile.','Pour ajouter de la musique: Audio → Sons → recherchez → +.','Pour ajouter du texte: Texte → Ajouter → tapez → choisissez police et couleur.','Pour exporter: flèche en haut à droite → 1080p et 30fps → exportez.'],
              ar: ['حمّل CapCut من Google Play أو App Store — مجاني، بدون علامة مائية.','افتح التطبيق → اضغط + → اختار فيديوهاتك وصورك → أضف.','الجدول الزمني هو مساحة عملك: كل كليب هو بلوك. اضغط على كليب لتحديده.','للقطع: اسحب الخط الأبيض → Split → احذف الجزء غير المرغوب.','لإضافة موسيقى: Audio → Sons → ابحث → +.','لإضافة نص: نص → أضف → اكتب → اختار الخط واللون.','للتصدير: السهم في أعلى يمين → 1080p و30fps → صدّر.'],
              en: ['Download CapCut from Google Play or App Store — free, no watermark.','Open the app → click + → select your videos and photos → Add.','The timeline is your workspace: each clip is a block. Tap a clip to select it.','To cut: drag the white line → Split → Delete the unwanted part.','To add music: Audio → Sounds → search → +.','To add text: Text → Add → type → choose font and color.','To export: arrow top right → 1080p and 30fps → export.']
            },
            method: { fr: 'Filmez 10 courts clips de n\'importe quoi (votre bureau, un paysage, un objet). Importez-les dans CapCut et gardez seulement les 3 meilleures secondes de chaque clip.', ar: 'صوّر 10 كليبات قصيرة من أي شيء (مكتبك، منظر طبيعي، شيء). استوردهم في CapCut واحتفظ بأحسن 3 ثوانٍ من كل كليب.', en: 'Film 10 short clips of anything (your desk, a landscape, an object). Import them into CapCut and keep only the best 3 seconds from each clip.' },
            exercise: { fr: 'Créez une vidéo de 60 secondes qui raconte votre journée: minimum 8 clips différents, une musique de fond, votre nom en texte au début.', ar: 'أنشئ فيديو 60 ثانية يحكي يومك: 8 كليبات مختلفة على الأقل، موسيقى خلفية، اسمك كنص في البداية.', en: 'Create a 60-second video telling your day: minimum 8 different clips, background music, your name as text at the start.' },
            tip: { fr: '💡 L\'erreur la plus commune: des clips trop longs. Chaque clip devrait durer entre 1.5 et 4 secondes maximum. Un montage rapide semble toujours plus professionnel.', ar: '💡 أكثر خطأ شائع: كليبات طويلة جداً. كل كليب يجب أن يكون بين 1.5 و4 ثوانٍ كحد أقصى. المونتاج السريع يبان دائماً أكثر احترافية.', en: '💡 Most common mistake: clips that are too long. Each clip should be between 1.5 and 4 seconds max. Fast-paced editing always looks more professional.' }
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
              fr: ['Téléchargez DaVinci Resolve sur blackmagicdesign.com (version gratuite).','Configuration: Fichier → Paramètres projet → 25fps et 1920x1080.','5 pages: Cut, Edit (utilisez celle-ci), Fusion, Color, Fairlight. Commencez avec Edit + Color.','Pour importer: Fichier → Importer → Importer médias → Media Pool → glissez vers la Timeline.','Pour monter: Lame B = couper, Sélection A = déplacer, Backspace = supprimer.','Pour exporter: page Deliver → choisissez YouTube ou H.264 1080p → Tout rendre.'],
              ar: ['حمّل DaVinci Resolve من blackmagicdesign.com (النسخة المجانية).','الإعداد: ملف → إعدادات المشروع → 25fps و1920x1080.','5 صفحات: Cut، Edit (استخدم هذه)، Fusion، Color، Fairlight. ابدأ بـ Edit + Color.','للاستيراد: ملف → استيراد → استيراد وسائط → Media Pool → اسحب للجدول الزمني.','للمونتاج: شفرة B = قطع، تحديد A = تحريك، Backspace = حذف.','للتصدير: صفحة Deliver → اختار YouTube أو H.264 1080p → تصيير الكل.'],
              en: ['Download DaVinci Resolve from blackmagicdesign.com (free version).','Setup: File → Project Settings → 25fps and 1920x1080.','5 pages: Cut, Edit (use this one), Fusion, Color, Fairlight. Start with Edit + Color.','To import: File → Import → Import Media → Media Pool → drag to Timeline.','To edit: Blade B = cut, Selection A = move, Backspace = delete.','To export: Deliver page → choose YouTube or H.264 1080p → Render All.']
            },
            method: { fr: 'Importez 5 minutes de métrage dans DaVinci Resolve. Votre seule tâche: couper chaque moment sans intérêt. C\'est le principe fondamental du montage.', ar: 'استورد 5 دقائق من اللقطات في DaVinci Resolve. مهمتك الوحيدة: اقطع كل لحظة بدون اهتمام. هذا المبدأ الأساسي للمونتاج.', en: 'Import 5 minutes of footage into DaVinci Resolve. Your only task: cut out every uninteresting moment. This is the fundamental principle of editing.' },
            exercise: { fr: 'Montez une vidéo de 3 minutes avec DaVinci Resolve en utilisant des clips gratuits de pexels.com/videos. Incluez coupes propres, musique libre, et correction colorimétrique.', ar: 'عدّل فيديو 3 دقائق مع DaVinci Resolve باستخدام لقطات مجانية من pexels.com/videos. تشمل قطعاً نظيفة، موسيقى مجانية، وتصحيح ألوان.', en: 'Edit a 3-minute video with DaVinci Resolve using free clips from pexels.com/videos. Include clean cuts, free music, and color correction.' },
            tip: { fr: '💡 Raccourci pro: I = marquer point IN, O = marquer point OUT, F9 = ajouter automatiquement à la timeline.', ar: '💡 اختصار احترافي: I = نقطة البداية، O = نقطة النهاية، F9 = أضف تلقائياً للجدول.', en: '💡 Pro shortcut: I = mark IN point, O = mark OUT point, F9 = automatically add to timeline.' }
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
              fr: ['Page Color: graphe de noeuds. Noeud 1 = Correction, Noeud 2 = Grade créatif.','3 oscilloscopes: Waveform (luminosité), Parade (équilibre R G B), Vectorscope (saturation).','Roues primaires: Lift (ombres), Gamma (tons moyens), Gain (hautes lumières).','Outil Qualificateur: pipette → cliquez une couleur → isole UNIQUEMENT cette couleur.','Correspondance: clic droit sur un clip gradé → Capturer image fixe → Appliquer le grade.','LUTs: clic droit sur un noeud → LUTs → appliquez. Réduisez l\'opacité à 30-70%. Jamais 100%.'],
              ar: ['صفحة Color: رسم العقد. العقدة 1 = تصحيح، العقدة 2 = Grade إبداعي.','3 أجهزة قياس: Waveform (السطوع)، Parade (توازن R G B)، Vectorscope (التشبع).','العجلات الأساسية: Lift (ظلال)، Gamma (أوساط)، Gain (إضاءات).','أداة المؤهّل: قطّارة → اضغط لون → يعزل هذا اللون فقط.','المطابقة: انقر يمين على كليب مصحّح → التقاط صورة ثابتة → تطبيق الـ Grade.','LUTs: انقر يمين على عقدة → LUTs → طبّق. قلّل الشفافية إلى 30-70%. أبداً 100%.'],
              en: ['Color page: node graph. Node 1 = Correction, Node 2 = Creative grade.','3 scopes: Waveform (brightness), Parade (R G B balance), Vectorscope (saturation).','Primary wheels: Lift (shadows), Gamma (midtones), Gain (highlights).','Qualifier tool: eyedropper → click a color → isolates ONLY that color.','Matching: right-click on a graded clip → Grab Still → Apply Grade.','LUTs: right-click on a node → LUTs → apply. Reduce opacity to 30-70%. Never 100%.']
            },
            method: { fr: 'Gradez le même clip de 5 façons différentes: 1) Après-midi dorée, 2) Thriller froid, 3) Film vintage, 4) Action, 5) Romance douce. Exportez les 5 versions.', ar: 'صحّح نفس الكليب بـ5 طرق مختلفة: 1) بعد ظهر ذهبي، 2) إثارة باردة، 3) فيلم قديم، 4) أكشن، 5) رومانسية ناعمة. صدّر النسخ الخمس.', en: 'Grade the same clip in 5 different ways: 1) Golden afternoon, 2) Cold thriller, 3) Vintage film, 4) Action, 5) Soft romance. Export all 5 versions.' },
            exercise: { fr: 'Téléchargez 3 clips Pexels (extérieur, portrait, nuit). Gradez les 3 pour qu\'ils paraissent appartenir au même film. Montrez les versions avant/après.', ar: 'حمّل 3 كليبات Pexels (خارجي، بورتريه، ليلي). صحّحهم ليبدوا من نفس الفيلم. أظهر النسخ قبل/بعد.', en: 'Download 3 Pexels clips (outdoor, portrait, night). Grade them to look like they belong to the same film. Show before/after versions.' },
            tip: { fr: '💡 Les coloristes utilisent les oscilloscopes, pas leurs yeux. Fixez d\'abord l\'exposition technique. Un grade créatif sur une mauvaise exposition sera toujours mauvais.', ar: '💡 مصححو الألوان يستخدمون أجهزة القياس، ليس أعينهم. صحّح الكشف التقني أولاً. Grade إبداعي على كشف سيئ = دائماً سيئ.', en: '💡 Colorists use scopes, not their eyes. Fix technical exposure first. A creative grade on wrong exposure will always be bad.' }
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
              fr: ['Structure 30-60s: 0-5s = Problème, 5-20s = Solution, 20-28s = Transformation, 28-30s = CTA.','Pré-production: Brief → Script → Storyboard → Liste des plans → Repérage → Planning tournage.','Sur le plateau: Dirigez le talent. Minimum 3 prises. Variez les angles. Ne partez pas sans tous les plans.','Post-production: Montage image → Sound design → Étalonnage → Graphiques → Révision client → Export.','Voix off: Trouvez un voix off dans les groupes Facebook "voix off algérie" ou enregistrez-vous + Adobe Podcast.','Prix: pub sociale 30s = 40-120K DZD, TV = 150-500K DZD, montage seul = divisez par 3.'],
              ar: ['هيكل 30-60ث: 0-5ث = مشكلة، 5-20ث = حل، 20-28ث = تحول، 28-30ث = CTA.','ما قبل الإنتاج: بريف → سكريبت → Storyboard → قائمة اللقطات → استكشاف → جدول تصوير.','في الموقع: وجّه الممثلين. 3 تسجيلات على الأقل. تنويع الزوايا. لا تغادر بدون كل اللقطات.','ما بعد الإنتاج: مونتاج الصورة → تصميم صوتي → تصحيح ألوان → جرافيك → مراجعة الزبون → تصدير.','صوت تعليقي: ابحث في مجموعات Facebook "voix off algérie" أو سجّل بنفسك + Adobe Podcast.','الأسعار: إعلان سوشيال 30ث = 40-120K دج، تلفزيون = 150-500K دج، مونتاج فقط = اقسم على 3.'],
              en: ['Structure 30-60s: 0-5s = Problem, 5-20s = Solution, 20-28s = Transformation, 28-30s = CTA.','Pre-production: Brief → Script → Storyboard → Shot list → Location scouting → Shooting schedule.','On set: Direct talent. Minimum 3 takes. Vary angles. Don\'t leave without all shots.','Post-production: Picture edit → Sound design → Color grade → Graphics → Client review → Export.','Voiceover: Find voiceover in Facebook groups "voix off algérie" or record yourself + Adobe Podcast.','Prices: 30s social commercial = 40-120K DZD, TV = 150-500K DZD, editing only = divide by 3.']
            },
            method: { fr: 'Créez votre premier pub de démonstration: choisissez un produit local réel. Écrivez un script de 30s. Filmez. Montez. Publiez sur Instagram en taguant la marque.', ar: 'أنشئ أول إعلانك التجريبي: اختر منتجاً محلياً حقيقياً. اكتب سكريبت 30ث. صوّر. عدّل. انشر على Instagram مع وضع علامة للعلامة التجارية.', en: 'Create your first spec commercial: choose a real local product. Write a 30s script. Film. Edit. Post on Instagram tagging the brand.' },
            exercise: { fr: 'Créez un commercial complet de 30s pour un produit algérien (ex: jus Sahara Fresh). Incluez storyboard, tournage, montage, grade vibrant, voix off. Exportez horizontal et vertical.', ar: 'أنشئ إعلاناً كاملاً 30ث لمنتج جزائري (مثال: عصير Sahara Fresh). يشمل storyboard، تصوير، مونتاج، Grade نابض، صوت تعليقي. صدّر أفقي وعمودي.', en: 'Create a complete 30s commercial for an Algerian product (e.g.: Sahara Fresh juice). Include storyboard, filming, editing, vibrant grade, voiceover. Export horizontal and vertical.' },
            tip: { fr: '💡 Le monteur qui comprend la stratégie publicitaire gagne 3x plus que celui qui ne connaît que le logiciel.', ar: '💡 المحرر الذي يفهم استراتيجية الإعلان يكسب 3 أضعاف من يعرف البرنامج فقط.', en: '💡 The editor who understands advertising strategy earns 3x more than one who only knows the software.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 4-10: WEBDEV, SEO, DATA, COPYWRITING, UI/UX, N8N, VIBE CODING
  // (Version simplifiée mais avec char7 pour chaque lesson)
  // ============================================================
  // SKILL 4: WEB DEVELOPMENT
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
              fr: ['Ouvrez VS Code (ou tout autre éditeur de code) → Nouveau fichier → index.html.','Tapez ! et appuyez sur Tab pour générer la structure HTML de base.','DOCTYPE html déclare que c\'est un document HTML5. <html> est la racine.','<head> contient les métadonnées (titre, encodage). <body> contient le contenu visible.','Les titres: <h1> à <h6>. <h1> est le plus important, <h6> le moins.','Les paragraphes: <p> pour le texte. Les liens: <a href="url">texte</a>.','Les images: <img src="image.jpg" alt="description">. Les conteneurs: <div> et <section>.','Ouvrez le fichier dans le navigateur pour voir le résultat.'],
              ar: ['افتح VS Code (أو أي محرر كود) → ملف جديد → index.html.','اكتب ! واضغط Tab لتوليد هيكل HTML الأساسي.','DOCTYPE html تصريح بأنها صفحة HTML5. <html> هو الجذر.','<head> يحتوي البيانات الوصفية (العنوان، الترميز). <body> يحتوي المحتوى الظاهر.','العناوين: <h1> إلى <h6>. <h1> هو الأهم، <h6> الأقل.','الفقرات: <p> للنص. الروابط: <a href="رابط">نص</a>.','الصور: <img src="صورة.jpg" alt="وصف">. الحاويات: <div> و <section>.','افتح الملف في المتصفح لمشاهدة النتيجة.'],
              en: ['Open VS Code (or any code editor) → New File → index.html.','Type ! and press Tab to generate the basic HTML structure.','DOCTYPE html declares it\'s an HTML5 document. <html> is the root.','<head> contains metadata (title, encoding). <body> contains visible content.','Headings: <h1> to <h6>. <h1> is most important, <h6> least.','Paragraphs: <p> for text. Links: <a href="url">text</a>.','Images: <img src="image.jpg" alt="description">. Containers: <div> and <section>.','Open the file in your browser to see the result.']
            },
            method: { fr: 'Créez 5 pages HTML différentes: index.html, about.html, contact.html, services.html, blog.html. Ouvrez-les dans le navigateur pour voir la différence.', ar: 'أنشئ 5 صفحات HTML مختلفة: index.html، about.html، contact.html، services.html، blog.html. افتحهم في المتصفح لترى الفرق.', en: 'Create 5 different HTML pages: index.html, about.html, contact.html, services.html, blog.html. Open them in the browser to see the difference.' },
            exercise: { fr: 'Créez une page "À propos de moi" avec: 1 titre principal, 1 paragraphe, 1 image de vous, et 1 lien vers Google.', ar: 'أنشئ صفحة "عني" بها: عنوان رئيسي، فقرة، صورة لك، ورابط إلى Google.', en: 'Create an "About Me" page with: 1 main heading, 1 paragraph, 1 picture of you, and 1 link to Google.' },
            tip: { fr: '💡 Utilisez Emmet pour générer du HTML plus rapidement. Exemple: div.container>p*3 génère une div avec classe "container" et 3 paragraphes.', ar: '💡 استخدم Emmet لتوليد HTML أسرع. مثال: div.container>p*3 يولد div مع كلاس "container" و3 فقرات.', en: '💡 Use Emmet to generate HTML faster. Example: div.container>p*3 generates a div with class "container" and 3 paragraphs.' }
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
              fr: ['JavaScript est le langage qui rend les sites web interactifs.','Ouvrez la console du navigateur (F12 → Console) pour tester du code.','Déclarez une variable: let nom = "Ahmed";','Affichez dans la console: console.log(nom);','Créez une fonction: function bonjour() { alert("Bonjour!"); }','Ajoutez un événement: document.getElementById("btn").onclick = function() { ... }','Le DOM (Document Object Model) permet de manipuler le HTML.','Exemple: document.getElementById("titre").style.color = "red";'],
              ar: ['JavaScript هي اللغة التي تخلّي المواقع تفاعلية.','افتح وحدة التحكم في المتصفح (F12 → Console) لتجربة الكود.','صرّح بمتغير: let nom = "Ahmed";','أظهر في وحدة التحكم: console.log(nom);','أنشئ دالة: function bonjour() { alert("Bonjour!"); }','أضف حدث: document.getElementById("btn").onclick = function() { ... }','DOM يسمح بمعالجة HTML.','مثال: document.getElementById("titre").style.color = "red";'],
              en: ['JavaScript is the language that makes websites interactive.','Open the browser console (F12 → Console) to test code.','Declare a variable: let name = "Ahmed";','Display in console: console.log(name);','Create a function: function hello() { alert("Hello!"); }','Add an event: document.getElementById("btn").onclick = function() { ... }','The DOM (Document Object Model) allows manipulating HTML.','Example: document.getElementById("title").style.color = "red";']
            },
            method: { fr: 'Créez une page HTML avec un bouton qui affiche une alerte "Bonjour!" quand on clique dessus.', ar: 'أنشئ صفحة HTML مع زر يعرض تنبيه "Bonjour!" عند النقر عليه.', en: 'Create an HTML page with a button that shows an alert "Hello!" when clicked.' },
            exercise: { fr: 'Créez un compteur: un bouton "+" qui augmente un nombre affiché à l\'écran, et un bouton "-" qui le diminue.', ar: 'أنشئ عداداً: زر "+" يزيد رقماً معروضاً على الشاشة، وزر "-" يقلله.', en: 'Create a counter: a "+" button that increases a displayed number, and a "-" button that decreases it.' },
            tip: { fr: '💡 Utilisez console.log() pour déboguer votre code. C\'est la technique la plus simple pour comprendre ce qui se passe.', ar: '💡 استخدم console.log() لتصحيح أخطاء الكود. هذه أبسط تقنية لفهم ما يحدث.', en: '💡 Use console.log() to debug your code. It\'s the simplest technique to understand what\'s happening.' }
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
              fr: ['React est une bibliothèque JavaScript pour construire des interfaces utilisateur.','Créez un projet: npx create-react-app mon-projet (ou utilisez Vite).','Structure: components, props, state, hooks (useState, useEffect).','JSX: mélange de HTML et JavaScript (ex: <h1>{nom}</h1>).','Props: passer des données entre composants (ex: <User name="Ahmed" />).','State: gérer les données qui changent avec useState.','Exemple: const [count, setCount] = useState(0);','Déployez sur Vercel ou Netlify pour partager votre travail.'],
              ar: ['React هي مكتبة JavaScript لبناء واجهات المستخدم.','أنشئ مشروعاً: npx create-react-app mon-projet (أو استخدم Vite).','الهيكل: المكونات، الخصائص، الحالة، الخطافات (useState، useEffect).','JSX: مزيج من HTML و JavaScript (مثال: <h1>{nom}</h1>).','الخصائص: تمرير البيانات بين المكونات (مثال: <User name="Ahmed" />).','الحالة: إدارة البيانات المتغيرة مع useState.','مثال: const [count, setCount] = useState(0);','انشر على Vercel أو Netlify لمشاركة عملك.'],
              en: ['React is a JavaScript library for building user interfaces.','Create a project: npx create-react-app my-project (or use Vite).','Structure: components, props, state, hooks (useState, useEffect).','JSX: mix of HTML and JavaScript (e.g.: <h1>{name}</h1>).','Props: pass data between components (e.g.: <User name="Ahmed" />).','State: manage changing data with useState.','Example: const [count, setCount] = useState(0);','Deploy to Vercel or Netlify to share your work.']
            },
            method: { fr: 'Créez un composant React qui affiche "Bonjour, [nom]" en utilisant les props.', ar: 'أنشئ مكون React يعرض "Bonjour, [nom]" باستخدام الخصائص.', en: 'Create a React component that displays "Hello, [name]" using props.' },
            exercise: { fr: 'Créez une todo-list avec React: ajouter des tâches, supprimer des tâches, et marquer les tâches comme complètes.', ar: 'أنشئ قائمة مهام مع React: إضافة مهام، حذف مهام، ووضع علامة مكتمل على المهام.', en: 'Create a todo-list with React: add tasks, delete tasks, and mark tasks as complete.' },
            tip: { fr: '💡 Utilisez les hooks (useState, useEffect) pour gérer l\'état et les effets de bord. Ce sont les briques de base de React moderne.', ar: '💡 استخدم hooks (useState، useEffect) لإدارة الحالة والتأثيرات الجانبية. هذه هي اللبنات الأساسية لـ React الحديث.', en: '💡 Use hooks (useState, useEffect) to manage state and side effects. They are the building blocks of modern React.' }
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
              fr: ['Architecture: Frontend (React) → Backend (Node.js/Express) → Base de données (MongoDB/PostgreSQL).','Git: versionnez votre code avec git init, git add, git commit, git push.','Méthodologie: Agile / Scrum pour gérer les sprints et les livrables.','Déploiement: Vercel/Netlify pour le frontend, Heroku/Render/AWS pour le backend.','Sécurité: HTTPS, authentification JWT, validation des inputs, CORS.','Tarification: site vitrine 50-200K DZD, site e-commerce 200K-1M DZD.','Spécialisez-vous: e-commerce, SaaS, sites vitrines. Les spécialistes facturent plus.'],
              ar: ['الهندسة: الواجهة الأمامية (React) → الخلفية (Node.js/Express) → قاعدة البيانات (MongoDB/PostgreSQL).','Git: تحكم في إصدارات كودك مع git init, git add, git commit, git push.','المنهجية: Agile / Scrum لإدارة الدورات والتسليمات.','النشر: Vercel/Netlify للواجهة الأمامية، Heroku/Render/AWS للخلفية.','الأمان: HTTPS، مصادقة JWT، التحقق من المدخلات، CORS.','التسعير: موقع عرضي 50-200K دج، موقع تجاري 200K-1M دج.','تخصّص: التجارة الإلكترونية، SaaS، المواقع العرضية. المتخصصون يشحنون أكثر.'],
              en: ['Architecture: Frontend (React) → Backend (Node.js/Express) → Database (MongoDB/PostgreSQL).','Git: version your code with git init, git add, git commit, git push.','Methodology: Agile / Scrum to manage sprints and deliverables.','Deployment: Vercel/Netlify for frontend, Heroku/Render/AWS for backend.','Security: HTTPS, JWT authentication, input validation, CORS.','Pricing: portfolio site 50-200K DZD, e-commerce site 200K-1M DZD.','Specialize: e-commerce, SaaS, portfolio sites. Specialists charge more.']
            },
            method: { fr: 'Créez un projet complet de A à Z: planification → conception → développement → déploiement. Utilisez Git pour suivre chaque étape.', ar: 'أنشئ مشروعاً كاملاً من الصفر: تخطيط → تصميم → تطوير → نشر. استخدم Git لتتبع كل خطوة.', en: 'Create a complete project from A to Z: planning → design → development → deployment. Use Git to track each step.' },
            exercise: { fr: 'Planifiez et estimez un projet web pour un client fictif: cahier des charges, stack technique, timeline, budget, équipe.', ar: 'خطط وقدّر مشروع ويب لعميل وهمي: دفتر الشروط، التقنيات، الجدول الزمني، الميزانية، الفريق.', en: 'Plan and estimate a web project for a fictional client: specifications, tech stack, timeline, budget, team.' },
            tip: { fr: '💡 Les clients ne paient pas pour le code, ils paient pour les problèmes résolus. Un projet bien géré avec un code correct est plus important qu\'un projet parfait en retard.', ar: '💡 الزبائن لا يدفعون للكود، بل للمشاكل المحلولة. مشروع جيد الإدارة بكود صحيح أهم من مشروع مثالي متأخر.', en: '💡 Clients don\'t pay for code, they pay for solved problems. A well-managed project with correct code is more important than a perfect late project.' }
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
            title: { fr: 'Introduction au SEO', ar: 'مقدمة في SEO', en: 'Introduction to SEO' },
            image: 'https://images.unsplash.com/photo-1432889821006-ca37c5ce1bfa?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['SEO = Search Engine Optimization. C\'est l\'ensemble des techniques pour apparaître en haut de Google.','Google utilise plus de 200 facteurs pour classer les sites.','Les 3 piliers: Technique (structure du site), Contenu (textes), Backlinks (liens externes).','Mots-clés: ce que les gens tapent dans Google. Exemple: "chaussures pas chères Alger".','On-Page: title, meta description, H1, URL (optimisez-les).','Off-Page: backlinks, autorité du site (les autres sites qui parlent de vous).','Objectif: comprendre ce que recherchent vos clients et créer du contenu qui répond à leurs questions.'],
              ar: ['SEO = تحسين محركات البحث. مجموعة تقنيات للظهور في أعلى Google.','Google يستخدم أكثر من 200 عامل لترتيب المواقع.','3 ركائز: التقني (هيكل الموقع)، المحتوى (النصوص)، الروابط الخلفية (الروابط الخارجية).','الكلمات المفتاحية: ما يكتبه الناس في Google. مثال: "شوز رخيص الجزائر".','On-Page: العنوان، الوصف، H1، الرابط (حسّنهم).','Off-Page: روابط خلفية، سلطة الموقع (المواقع الأخرى التي تتحدث عنك).','الهدف: فهم ما يبحث عنه زبائنك وإنشاء محتوى يجاوب على أسئلتهم.'],
              en: ['SEO = Search Engine Optimization. The set of techniques to appear at the top of Google.','Google uses over 200 factors to rank sites.','The 3 pillars: Technical (site structure), Content (texts), Backlinks (external links).','Keywords: what people type into Google. Example: "cheap shoes Algiers".','On-Page: title, meta description, H1, URL (optimize them).','Off-Page: backlinks, site authority (other sites talking about you).','Goal: understand what your clients search for and create content that answers their questions.']
            },
            method: { fr: 'Faites une recherche Google pour 3 mots-clés qui vous intéressent. Analysez les 10 premiers résultats: titres, descriptions, URL.', ar: 'ابحث في Google عن 3 كلمات مفتاحية تهمك. حلّل النتائج العشرة الأولى: العناوين، الأوصاف، الروابط.', en: 'Google search for 3 keywords that interest you. Analyze the top 10 results: titles, descriptions, URLs.' },
            exercise: { fr: 'Listez 20 mots-clés pour une entreprise de votre choix. Classez-les par catégorie: généraux, de niche, locaux (Algérie).', ar: 'اكتب 20 كلمة مفتاحية لمشروع من اختيارك. صنّفهم حسب الفئة: عامة، متخصصة، محلية (الجزائر).', en: 'List 20 keywords for a business of your choice. Classify them by category: general, niche, local (Algeria).' },
            tip: { fr: '💡 Utilisez Google Keyword Planner (outil gratuit) pour trouver des mots-clés et voir leur volume de recherche mensuel en Algérie.', ar: '💡 استخدم Google Keyword Planner (أداة مجانية) للعثور على كلمات مفتاحية ومعرفة حجم البحث الشهري في الجزائر.', en: '💡 Use Google Keyword Planner (free tool) to find keywords and see their monthly search volume in Algeria.' }
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
              fr: ['Title: 50-60 caractères, incluez le mot-clé principal au début.','Meta description: 150-160 caractères, incluez un CTA (ex: "Achetez maintenant").','Structure H1-H6: un seul H1 par page. Les H2, H3 organisent le contenu.','URL: courte, descriptive, avec le mot-clé. Ex: /chaussures-homme-alger.','Contenu: 800+ mots minimum. Utilisez des sous-titres, listes, images.','Liens internes: reliez vos pages entre elles pour distribuer l\'autorité.','Utilisez des images optimisées (taille réduite, nom descriptif, alt text).'],
              ar: ['العنوان: 50-60 حرف، ضمّن الكلمة المفتاحية الرئيسية في البداية.','الوصف: 150-160 حرف، ضمّن دعوة للفعل (مثال: "تسوق الآن").','هيكل H1-H6: H1 واحد فقط لكل صفحة. H2، H3 تنظم المحتوى.','الرابط: قصير، وصفي، مع الكلمة المفتاحية. مثال: /ahzia-rijal-alger.','المحتوى: 800+ كلمة كحد أدنى. استخدم عناوين فرعية، قوائم، صور.','الروابط الداخلية: اربط صفحاتك ببعض لتوزيع السلطة.','استخدم صوراً محسّنة (حجم صغير، اسم وصفي، نص بديل).'],
              en: ['Title: 50-60 characters, include the main keyword at the start.','Meta description: 150-160 characters, include a CTA (e.g.: "Buy now").','H1-H6 structure: one H1 per page. H2, H3 organize the content.','URL: short, descriptive, with the keyword. Ex: /mens-shoes-algiers.','Content: 800+ words minimum. Use subheadings, lists, images.','Internal links: link your pages together to distribute authority.','Use optimized images (reduced size, descriptive name, alt text).']
            },
            method: { fr: 'Prenez une page existante de votre site. Optimisez le title, la meta description, les H1-H6, et l\'URL. Ajoutez des liens internes.', ar: 'خذ صفحة موجودة على موقعك. حسّن العنوان، الوصف، H1-H6، والرابط. أضف روابط داخلية.', en: 'Take an existing page on your site. Optimize the title, meta description, H1-H6, and URL. Add internal links.' },
            exercise: { fr: 'Rédigez un article de blog SEO optimisé (800+ mots) sur un sujet de votre choix. Incluez le mot-clé principal 3-4 fois, des sous-titres, et des liens internes.', ar: 'اكتب مقالة مدونة محسّنة لـ SEO (800+ كلمة) حول موضوع من اختيارك. ضمّن الكلمة المفتاحية 3-4 مرات، عناوين فرعية، وروابط داخلية.', en: 'Write an SEO-optimized blog post (800+ words) on a topic of your choice. Include the main keyword 3-4 times, subheadings, and internal links.' },
            tip: { fr: '💡 Utilisez Yoast SEO (WordPress) ou Rank Math pour analyser votre optimisation On-Page. Ils vous donnent des conseils concrets pour vous améliorer.', ar: '💡 استخدم Yoast SEO (WordPress) أو Rank Math لتحليل تحسين On-Page الخاص بك. يقدمان نصائح ملموسة للتحسين.', en: '💡 Use Yoast SEO (WordPress) or Rank Math to analyze your On-Page optimization. They give concrete advice to improve.' }
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
              fr: ['Les backlinks sont le facteur de classement numéro 1 pour Google.','Qualité > quantité: un lien d\'un site autoritaire (ex: journal) vaut plus que 100 liens de sites faibles.','Techniques: guest blogging (écrire sur d\'autres blogs), broken link building (remplacer des liens cassés), annuaires de qualité.','Analysez vos concurrents: utilisez Ahrefs ou SEMrush pour voir leurs backlinks.','Créez du contenu "linkable": guides, études de cas, infographies, outils gratuits.','Évitez les techniques black hat: achat de liens, PBN, spam de commentaires.'],
              ar: ['الروابط الخلفية هي عامل الترتيب رقم 1 لـ Google.','الجودة > الكمية: رابط واحد من موقع قوي (مثال: جريدة) يساوي أكثر من 100 رابط من مواقع ضعيفة.','التقنيات: guest blogging (الكتابة على مدونات أخرى)، broken link building (استبدال روابط مكسورة)، أدلة جيدة.','حلّل منافسيك: استخدم Ahrefs أو SEMrush لمشاهدة روابطهم الخلفية.','أنشئ محتوى "linkable": أدلة، دراسات حالة، إنفوغرافيك، أدوات مجانية.','تجنّب تقنيات black hat: شراء روابط، PBN، تعليقات سبام.'],
              en: ['Backlinks are Google\'s #1 ranking factor.','Quality > quantity: one link from an authoritative site (e.g.: a newspaper) is worth more than 100 links from weak sites.','Techniques: guest blogging, broken link building, quality directories.','Analyze your competitors: use Ahrefs or SEMrush to see their backlinks.','Create "linkable" content: guides, case studies, infographics, free tools.','Avoid black hat techniques: buying links, PBN, comment spam.']
            },
            method: { fr: 'Créez une stratégie de backlinks pour un site dans une niche de votre choix. Identifiez 20 sites cibles et 5 types de contenu "linkable".', ar: 'أنشئ استراتيجية روابط خلفية لموقع في مجال من اختيارك. حدد 20 موقعاً مستهدفاً و5 أنواع من المحتوى "linkable".', en: 'Create a backlink strategy for a site in a niche of your choice. Identify 20 target sites and 5 types of "linkable" content.' },
            exercise: { fr: 'Identifiez 20 sites où vous pourriez obtenir un backlink. Rédigez un pitch personnalisé pour chacun (2-3 phrases).', ar: 'حدّد 20 موقعاً يمكنك الحصول على رابط خلفي منه. اكتب عرضاً مخصصاً لكل واحد (2-3 جمل).', en: 'Identify 20 sites where you could get a backlink. Write a personalized pitch for each (2-3 sentences).' },
            tip: { fr: '💡 Les backlinks locaux (blogs algériens, annuaires DZ) sont très puissants pour le référencement local. Commencez par eux, ils sont plus faciles à obtenir.', ar: '💡 الروابط الخلفية المحلية (المدونات الجزائرية، الأدلة الجزائرية) قوية جداً للـ SEO المحلي. ابدأ بها، فهي أسهل في الحصول عليها.', en: '💡 Local backlinks (Algerian blogs, DZ directories) are very powerful for local SEO. Start with them, they\'re easier to get.' }
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
            title: { fr: 'Agence SEO', ar: 'وكالة SEO', en: 'SEO Agency' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Audit SEO complet: technique, contenu, backlinks, concurrence.','Rapport d\'audit: PDF professionnel avec recommandations détaillées.','Stratégie 6 mois: objectifs SMART, budget, plan d\'action mensuel.','Suivi des KPIs: positions Google, trafic organique, taux de conversion.','Outils: Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog.','Tarification: audit 30-80K DZD, forfait mensuel 50-200K DZD selon la taille du site.','Garantissez des résultats: les clients paient pour des positions ou du trafic spécifique.'],
              ar: ['تدقيق SEO كامل: تقني، محتوى، روابط خلفية، منافسة.','تقرير التدقيق: PDF احترافي مع توصيات مفصلة.','استراتيجية 6 أشهر: أهداف SMART، ميزانية، خطة عمل شهرية.','متابعة مؤشرات الأداء: مراكز Google، الزيارات العضوية، معدل التحويل.','الأدوات: Google Search Console، Google Analytics، Ahrefs، SEMrush، Screaming Frog.','التسعير: تدقيق 30-80K دج، باقة شهرية 50-200K دج حسب حجم الموقع.','اضمن نتائج: الزبائن يدفعون مقابل مراكز محددة أو زيارة محددة.'],
              en: ['Complete SEO audit: technical, content, backlinks, competition.','Audit report: professional PDF with detailed recommendations.','6-month strategy: SMART goals, budget, monthly action plan.','KPI tracking: Google positions, organic traffic, conversion rate.','Tools: Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog.','Pricing: audit 30-80K DZD, monthly package 50-200K DZD depending on site size.','Guarantee results: clients pay for specific positions or traffic.']
            },
            method: { fr: 'Réalisez un audit SEO complet pour un site de votre choix (ou un site fictif). Présentez-le sous forme de rapport PDF professionnel.', ar: 'قم بتدقيق SEO كامل لموقع من اختيارك (أو موقع وهمي). قدمه كتقرير PDF احترافي.', en: 'Perform a complete SEO audit for a site of your choice (or a fictional site). Present it as a professional PDF report.' },
            exercise: { fr: 'Créez votre offre de services SEO: audit, forfaits mensuels, garanties, cas clients. Préparez une présentation commerciale.', ar: 'أنشئ عرض الخدمات SEO الخاص بك: تدقيق، باقات شهرية، ضمانات، حالات عملاء. جهز عرضاً تجارياً.', en: 'Create your SEO service offering: audit, monthly packages, guarantees, case studies. Prepare a sales presentation.' },
            tip: { fr: '💡 Les clients paient pour des résultats, pas pour du travail. Garantissez des positions ou un trafic spécifique. Si vous les obtenez, vous avez des clients à vie.', ar: '💡 الزبائن يدفعون للنتائج، مش للشغل. اضمن مراكز محددة أو زيارة محددة. إذا حققتها، لديك زبائن مدى الحياة.', en: '💡 Clients pay for results, not for work. Guarantee specific positions or traffic. If you deliver, you have clients for life.' }
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
        goal: { fr: 'Comprendre Excel', ar: 'تفهم Excel', en: 'Understand Excel' },
        lessons: [
          {
            id: 'data-b-1',
            title: { fr: 'Excel - L\'outil incontournable', ar: 'Excel - الأداة التي لا غنى عنها', en: 'Excel - The essential tool' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Ouvrez Excel → Nouveau classeur. Les colonnes: A, B, C... Les lignes: 1, 2, 3...','Pour saisir des données: cliquez sur une cellule, tapez, appuyez sur Entrée.','Formule SOMME: =SOMME(A1:A10) ou le bouton "Somme automatique".','Filtres: sélectionnez vos données → onglet Données → Filtrer.','Graphiques: sélectionnez vos données → Insérer → choisissez un graphique.','Formules essentielles: =MOYENNE() pour la moyenne, =MAX() pour le max, =MIN() pour le min.','Utilisez Ctrl+Shift+Flèche pour sélectionner rapidement des plages.'],
              ar: ['افتح Excel → مصنف جديد. الأعمدة: A, B, C... الصفوف: 1, 2, 3...','لإدخال البيانات: اضغط على خلية، اكتب، اضغط Enter.','صيغة SUM: =SUM(A1:A10) أو زر "الجمع التلقائي".','التصفية: اختر بياناتك → تبويب البيانات → تصفية.','الرسوم البيانية: اختر بياناتك → إدراج → اختار رسم بياني.','الصيغ الأساسية: =AVERAGE() للمعدل، =MAX() للقيمة القصوى، =MIN() للقيمة الدنيا.','استخدم Ctrl+Shift+سهم لتحديد نطاقات بسرعة.'],
              en: ['Open Excel → New Workbook. Columns: A, B, C... Rows: 1, 2, 3...','To enter data: click on a cell, type, press Enter.','SUM formula: =SUM(A1:A10) or the "AutoSum" button.','Filters: select your data → Data tab → Filter.','Charts: select your data → Insert → choose a chart.','Essential formulas: =AVERAGE() for the average, =MAX() for the max, =MIN() for the min.','Use Ctrl+Shift+Arrow to quickly select ranges.']
            },
            method: { fr: 'Importez un jeu de données (CSV ou Excel). Explorez-le: triez, filtrez, créez 3 graphiques différents.', ar: 'استورد مجموعة بيانات (CSV أو Excel). استكشفها: رتّب، صفّي، أنشئ 3 رسوم بيانية مختلفة.', en: 'Import a dataset (CSV or Excel). Explore it: sort, filter, create 3 different charts.' },
            exercise: { fr: 'Créez un tableau de ventes avec 10 produits. Ajoutez les colonnes: Nom, Quantité vendue, Prix unitaire, Total. Utilisez SOMME pour le total général.', ar: 'أنشئ جدول مبيعات بـ10 منتجات. زيد الأعمدة: الاسم، الكمية المباعة، السعر الوحدة، المجموع. استخدم SUM للمجموع الكلي.', en: 'Create a sales table with 10 products. Add the columns: Name, Quantity sold, Unit price, Total. Use SUM for the grand total.' },
            tip: { fr: '💡 Raccourcis: Ctrl+C (copier), Ctrl+V (coller), Ctrl+Z (annuler), Ctrl+S (enregistrer). Utilisez-les pour gagner du temps.', ar: '💡 اختصارات: Ctrl+C (نسخ)، Ctrl+V (لصق)، Ctrl+Z (تراجع)، Ctrl+S (حفظ). استخدمها لتوفير الوقت.', en: '💡 Shortcuts: Ctrl+C (copy), Ctrl+V (paste), Ctrl+Z (undo), Ctrl+S (save). Use them to save time.' }
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
              fr: ['Power BI est un outil de visualisation de données gratuit de Microsoft.','Téléchargez Power BI Desktop sur microsoft.com.','Importez vos données: Excel, CSV, ou base de données.','Créez des visualisations: graphiques à barres, cartes, tableaux, jauges.','DAX: le langage de formules pour créer des calculs avancés.','Exemple: Total Ventes = SUMX(Ventes, Ventes[Quantité] * Ventes[Prix]).','Partagez vos dashboards: publiez sur Power BI Service ou exportez en PDF.'],
              ar: ['Power BI هو أداة تصور بيانات مجانية من Microsoft.','حمّل Power BI Desktop من microsoft.com.','استورد بياناتك: Excel، CSV، أو قاعدة بيانات.','أنشئ تصورات: رسوماً بيانية، خرائط، جداول، مقاييس.','DAX: لغة صيغ لإنشاء حسابات متقدمة.','مثال: إجمالي المبيعات = SUMX(المبيعات, المبيعات[الكمية] * المبيعات[السعر]).','شارك لوحات القيادة: انشر على Power BI Service أو صدّر PDF.'],
              en: ['Power BI is a free data visualization tool from Microsoft.','Download Power BI Desktop from microsoft.com.','Import your data: Excel, CSV, or database.','Create visualizations: bar charts, maps, tables, gauges.','DAX: formula language for advanced calculations.','Example: Total Sales = SUMX(Sales, Sales[Quantity] * Sales[Price]).','Share your dashboards: publish to Power BI Service or export as PDF.']
            },
            method: { fr: 'Importez un dataset et créez un dashboard complet avec 5 visualisations différentes (graphique, carte, jauge, tableau, KPI).', ar: 'استورد مجموعة بيانات وأنشئ لوحة قيادة كاملة بـ5 تصورات مختلفة (رسم بياني، خريطة، مقياس، جدول، مؤشر أداء).', en: 'Import a dataset and create a complete dashboard with 5 different visualizations (chart, map, gauge, table, KPI).' },
            exercise: { fr: 'Créez un dashboard de ventes avec: ventes par mois (graphique à barres), par produit (camembert), par région (carte), top 10 des produits (tableau).', ar: 'أنشئ لوحة قيادة للمبيعات مع: مبيعات حسب الشهر (رسم بياني)، حسب المنتج (مخطط دائري)، حسب المنطقة (خريطة)، أفضل 10 منتجات (جدول).', en: 'Create a sales dashboard with: sales by month (bar chart), by product (pie chart), by region (map), top 10 products (table).' },
            tip: { fr: '💡 Utilisez les slicers pour filtrer vos données interactivement. Un slicer permet aux utilisateurs de sélectionner une période, un produit, ou une région.', ar: '💡 استخدم slicers لتصفية بياناتك بشكل تفاعلي. يسمح slicer للمستخدمين بتحديد فترة، منتج، أو منطقة.', en: '💡 Use slicers to filter your data interactively. A slicer allows users to select a period, product, or region.' }
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
              fr: ['SQL est le langage standard pour interroger les bases de données.','SELECT * FROM clients; — sélectionne toutes les colonnes de la table clients.','SELECT nom, email FROM clients WHERE ville = "Alger"; — filtre les clients d\'Alger.','JOIN: combinez plusieurs tables. Ex: SELECT * FROM clients JOIN commandes ON clients.id = commandes.client_id;','GROUP BY: regroupez les données. Ex: SELECT ville, COUNT(*) FROM clients GROUP BY ville;','ORDER BY: triez les résultats. Ex: SELECT * FROM clients ORDER BY nom ASC;','Pratiquez sur SQLite ou PostgreSQL.'],
              ar: ['SQL هي اللغة القياسية للاستعلام عن قواعد البيانات.','SELECT * FROM clients; — يختار كل الأعمدة من جدول العملاء.','SELECT nom, email FROM clients WHERE ville = "Alger"; — يصفّي عملاء الجزائر.','JOIN: ادمج عدة جداول. مثال: SELECT * FROM clients JOIN commandes ON clients.id = commandes.client_id;','GROUP BY: جمّع البيانات. مثال: SELECT ville, COUNT(*) FROM clients GROUP BY ville;','ORDER BY: رتّب النتائج. مثال: SELECT * FROM clients ORDER BY nom ASC;','تمرّن على SQLite أو PostgreSQL.'],
              en: ['SQL is the standard language for querying databases.','SELECT * FROM customers; — selects all columns from the customers table.','SELECT name, email FROM customers WHERE city = "Algiers"; — filters Algiers customers.','JOIN: combine multiple tables. Ex: SELECT * FROM customers JOIN orders ON customers.id = orders.customer_id;','GROUP BY: group data. Ex: SELECT city, COUNT(*) FROM customers GROUP BY city;','ORDER BY: sort results. Ex: SELECT * FROM customers ORDER BY name ASC;','Practice on SQLite or PostgreSQL.']
            },
            method: { fr: 'Créez une base de données SQLite avec une table "clients" et une table "commandes". Écrivez 5 requêtes pour analyser les données.', ar: 'أنشئ قاعدة بيانات SQLite مع جدول "العملاء" وجدول "الطلبات". اكتب 5 استعلامات لتحليل البيانات.', en: 'Create an SQLite database with a "customers" table and an "orders" table. Write 5 queries to analyze the data.' },
            exercise: { fr: 'Écrivez une requête SQL qui calcule le total des ventes par mois et par produit. Utilisez JOIN, GROUP BY, et ORDER BY.', ar: 'اكتب استعلام SQL يحسب إجمالي المبيعات حسب الشهر والمنتج. استخدم JOIN و GROUP BY و ORDER BY.', en: 'Write an SQL query that calculates total sales by month and product. Use JOIN, GROUP BY, and ORDER BY.' },
            tip: { fr: '💡 Utilisez SQLite Browser (gratuit) pour visualiser vos bases de données et tester vos requêtes. C\'est plus simple que la ligne de commande.', ar: '💡 استخدم SQLite Browser (مجاني) لعرض قواعد البيانات واختبار استعلاماتك. إنه أبسط من سطر الأوامر.', en: '💡 Use SQLite Browser (free) to visualize your databases and test your queries. It\'s simpler than the command line.' }
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
              fr: ['Le consultant data aide les entreprises à prendre des décisions basées sur les données.','Processus: Collecte → Nettoyage → Analyse → Visualisation → Recommandations.','Outils: Excel, Power BI, SQL, Python (Pandas, Matplotlib).','Livrables: dashboards interactifs, rapports PDF, présentations stratégiques.','Tarification: projet 50-200K DZD, forfait mensuel 80-300K DZD.','Exemples: analyse de rentabilité, optimisation des stocks, prédiction des ventes.','Spécialisez-vous dans un secteur: retail, finance, santé, e-commerce.'],
              ar: ['مستشار البيانات يساعد الشركات على اتخاذ قرارات مبنية على البيانات.','العملية: جمع → تنظيف → تحليل → تصور → توصيات.','الأدوات: Excel، Power BI، SQL، Python (Pandas, Matplotlib).','التسليمات: لوحات قيادة تفاعلية، تقارير PDF، عروض استراتيجية.','التسعير: مشروع 50-200K دج، باقة شهرية 80-300K دج.','أمثلة: تحليل الربحية، تحسين المخزون، توقع المبيعات.','تخصّص في قطاع: البيع بالتجزئة، المالية، الصحة، التجارة الإلكترونية.'],
              en: ['Data consultants help businesses make data-driven decisions.','Process: Collection → Cleaning → Analysis → Visualization → Recommendations.','Tools: Excel, Power BI, SQL, Python (Pandas, Matplotlib).','Deliverables: interactive dashboards, PDF reports, strategic presentations.','Pricing: project 50-200K DZD, monthly package 80-300K DZD.','Examples: profitability analysis, inventory optimization, sales prediction.','Specialize in a sector: retail, finance, healthcare, e-commerce.']
            },
            method: { fr: 'Réalisez une analyse complète pour une entreprise fictive. Utilisez un dataset public (ex: données de ventes). Présentez votre analyse en 10 slides.', ar: 'قم بتحليل كامل لشركة وهمية. استخدم مجموعة بيانات عامة (مثال: بيانات مبيعات). قدم تحليلك في 10 شرائح.', en: 'Perform a complete analysis for a fictional company. Use a public dataset (e.g.: sales data). Present your analysis in 10 slides.' },
            exercise: { fr: 'Créez votre offre de services data: dashboard, audit, formation, consulting. Définissez vos prix pour le marché algérien.', ar: 'أنشئ عرض الخدمات data الخاص بك: لوحة قيادة، تدقيق، تكوين، استشارة. حدد أسعارك للسوق الجزائري.', en: 'Create your data service offering: dashboard, audit, training, consulting. Define your prices for the Algerian market.' },
            tip: { fr: '💡 Les données sont le nouvel or. Les entreprises paient cher pour des insights qui augmentent leur rentabilité. Votre valeur est dans votre capacité à raconter une histoire avec les données.', ar: '💡 البيانات هي الذهب الجديد. الشركات تدفع كثيراً للحصول على رؤى تزيد أرباحها. قيمتك في قدرتك على سرد قصة بالبيانات.', en: '💡 Data is the new gold. Companies pay top dollar for insights that increase profitability. Your value is in your ability to tell a story with data.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 7: COPYWRITING (simplifié avec char7)
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
        goal: { fr: 'Maîtriser les bases', ar: 'إتقان الأساسيات', en: 'Master basics' },
        lessons: [
          {
            id: 'copy-b-1',
            title: { fr: 'Les Fondamentaux du Copywriting', ar: 'أساسيات الكتابة الإعلانية', en: 'Copywriting Fundamentals' },
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Le Copywriting est l\'art de vendre avec des mots. C\'est la compétence la plus rentable en marketing.','La méthode AIDA: Attention → Intérêt → Désir → Action.','Headlines: 80% des gens lisent les titres, 20% le reste. Un bon titre fait la différence.','Caractéristiques vs Avantages: une caractéristique est un fait, l\'avantage est ce que ça apporte au client.','Call to Action: dites EXACTEMENT quoi faire. Ex: "Achetez maintenant", "Téléchargez le guide".','Storytelling: les histoires vendent mieux que les faits. Racontez une histoire qui montre comment votre produit a résolu un problème.'],
              ar: ['الكتابة الإعلانية هي فن البيع بالكلمات. هي المهارة الأكثر ربحية في التسويق.','طريقة AIDA: الانتباه → الاهتمام → الرغبة → الفعل.','العناوين: 80% يقرأون العناوين، 20% الباقي. العنوان الجيد يصنع الفرق.','الميزات vs الفوائد: الميزة حقيقة، الفائدة هي ما يعود على الزبون.','الدعوة للفعل: قل بالضبط شو يدير. مثال: "اشتري الآن"، "حمّل الدليل".','سرد القصص: القصص تبيع أفضل من الحقائق. احكي قصة تظهر كيف حلّ منتجك مشكلة.'],
              en: ['Copywriting is the art of selling with words. It\'s the most profitable skill in marketing.','The AIDA method: Attention → Interest → Desire → Action.','Headlines: 80% read headlines, 20% the rest. A good headline makes the difference.','Features vs Benefits: a feature is a fact, the benefit is what it brings to the customer.','Call to Action: tell EXACTLY what to do. Ex: "Buy now", "Download the guide".','Storytelling: stories sell better than facts. Tell a story that shows how your product solved a problem.']
            },
            method: { fr: 'Analysez 10 publicités que vous voyez sur Facebook, Instagram ou dans la rue. Identifiez AIDA, le titre, le CTA, et les avantages.', ar: 'حلّل 10 إعلانات تشوفها على Facebook، Instagram أو في الشارع. حدد AIDA، العنوان، الدعوة للفعل، والفوائد.', en: 'Analyze 10 ads you see on Facebook, Instagram or in the street. Identify AIDA, the headline, the CTA, and the benefits.' },
            exercise: { fr: 'Écrivez un titre accrocheur pour un produit de votre choix. Utilisez des chiffres ("5 secrets"), des questions ("Vous avez mal au dos?"), ou l\'urgence ("Offre limitée").', ar: 'اكتب عنواناً جذاباً لمنتج من اختيارك. استخدم أرقاماً ("5 أسرار")، أسئلة ("عندك ألم في الظهر؟")، أو إلحاحاً ("عرض محدود").', en: 'Write a catchy headline for a product of your choice. Use numbers ("5 secrets"), questions ("Have back pain?"), or urgency ("Limited offer").' },
            tip: { fr: '💡 Les chiffres fonctionnent toujours en copywriting: "5 secrets", "10 astuces", "3 étapes". Le cerveau humain est attiré par les nombres.', ar: '💡 الأرقام دائماً تشتغل في الكتابة الإعلانية: "5 أسرار"، "10 نصائح"، "3 خطوات". الدماغ البشري ينجذب للأرقام.', en: '💡 Numbers always work in copywriting: "5 secrets", "10 tips", "3 steps". The human brain is attracted to numbers.' }
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
              fr: ['Facebook: posts 100-200 mots, questions, émotions. Utilisez des appels à l\'action.','Instagram: légendes 50-150 mots, 5-10 hashtags, CTA, emojis.','LinkedIn: posts 200-500 mots, professionnel, valeur ajoutée, storytelling.','Twitter/X: 280 caractères max, concis, impactant, utilisez des threads.','Reels/TikTok: scripts de 15-30 secondes, accroche forte, sous-titres.','Adaptez le ton: LinkedIn = professionnel, Instagram = décontracté, Twitter = punchy.'],
              ar: ['Facebook: منشورات 100-200 كلمة، أسئلة، عواطف. استخدم دعوات للفعل.','Instagram: تعليقات 50-150 كلمة، 5-10 هاشتاجات، دعوة للفعل، إيموجي.','LinkedIn: منشورات 200-500 كلمة، احترافي، قيمة مضافة، سرد قصص.','Twitter/X: 280 حرف كحد أقصى، موجز، مؤثر، استخدم خيوطاً.','Reels/TikTok: سكريبتات 15-30 ثانية، جذبة قوية، ترجمة.','كيّف النبرة: LinkedIn = احترافي، Instagram = غير رسمي، Twitter = قوي.'],
              en: ['Facebook: 100-200 word posts, questions, emotions. Use calls to action.','Instagram: 50-150 word captions, 5-10 hashtags, CTA, emojis.','LinkedIn: 200-500 word posts, professional, added value, storytelling.','Twitter/X: 280 characters max, concise, impactful, use threads.','Reels/TikTok: 15-30 second scripts, strong hook, subtitles.','Adapt tone: LinkedIn = professional, Instagram = casual, Twitter = punchy.']
            },
            method: { fr: 'Créez 5 posts pour différentes plateformes sur le même sujet. Adaptez le format, la longueur, et le ton pour chaque plateforme.', ar: 'أنشئ 5 منشورات لمنصات مختلفة حول نفس الموضوع. كيّف التنسيق، الطول، والنبرة لكل منصة.', en: 'Create 5 posts for different platforms on the same topic. Adapt the format, length, and tone for each platform.' },
            exercise: { fr: 'Rédigez une légende Instagram complète pour un produit avec: accroche (1 phrase), description (50 mots), avantages (3 points), CTA, et 5 hashtags.', ar: 'اكتب تعليقاً إعلانياً كاملاً لـ Instagram لمنتج مع: جذبة (جملة)، وصف (50 كلمة)، فوائد (3 نقاط)، دعوة للفعل، و5 هاشتاجات.', en: 'Write a complete Instagram caption for a product with: hook (1 sentence), description (50 words), benefits (3 points), CTA, and 5 hashtags.' },
            tip: { fr: '💡 Adaptez votre ton à chaque plateforme. Ce qui fonctionne sur LinkedIn ne fonctionne pas sur TikTok. Étudiez le style de chaque plateforme.', ar: '💡 طوّع نبرتك لكل منصة. ما ينجح على LinkedIn لا ينجح على TikTok. ادرس أسلوب كل منصة.', en: '💡 Adapt your tone to each platform. What works on LinkedIn doesn\'t work on TikTok. Study the style of each platform.' }
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
              fr: ['Landing page: page unique avec un seul objectif (vente, inscription, téléchargement).','Structure: Accroche → Problème → Solution → Preuve → Offre → CTA.','VSL (Video Sales Letter): vidéo de vente de 20-40 minutes qui raconte une histoire.','Script VSL: Accroche → Histoire → Problème → Solution → Objections → Offre → CTA.','Anticipez les objections: pourquoi le client hésite-t-il? Répondez-y avant qu\'il ne les pose.','Urgence: offres limitées dans le temps, quantités limitées, bonus exclusifs.'],
              ar: ['صفحة الهبوط: صفحة واحدة بهدف واحد (بيع، تسجيل، تحميل).','الهيكل: جذبة → مشكلة → حل → دليل → عرض → دعوة للفعل.','VSL (Video Sales Letter): فيديو بيعي 20-40 دقيقة يحكي قصة.','سكريبت VSL: جذبة → قصة → مشكلة → حل → اعتراضات → عرض → دعوة للفعل.','توقع الاعتراضات: لماذا يتردد الزبون؟ أجب عليها قبل أن يطرحها.','الإلحاح: عروض محدودة الوقت، كميات محدودة، مكافآت حصرية.'],
              en: ['Landing page: single page with one goal (sale, signup, download).','Structure: Hook → Problem → Solution → Proof → Offer → CTA.','VSL (Video Sales Letter): 20-40 minute sales video that tells a story.','VSL Script: Hook → Story → Problem → Solution → Objections → Offer → CTA.','Anticipate objections: why does the client hesitate? Answer them before they ask.','Urgency: time-limited offers, limited quantities, exclusive bonuses.']
            },
            method: { fr: 'Créez une landing page complète avec copy pour un produit de votre choix. Incluez accroche, problème, solution, preuve, offre, et CTA.', ar: 'أنشئ صفحة هبوط كاملة مع كتابة إعلانية لمنتج من اختيارك. تشمل جذبة، مشكلة، حل، دليل، عرض، ودعوة للفعل.', en: 'Create a complete landing page with copy for a product of your choice. Include hook, problem, solution, proof, offer, and CTA.' },
            exercise: { fr: 'Rédigez un script VSL complet (30 minutes) pour un programme de formation. Structurez en 5 parties: accroche, problème, solution, objections, offre.', ar: 'اكتب سكريبت VSL كامل (30 دقيقة) لبرنامج تكويني. هيكله في 5 أجزاء: جذبة، مشكلة، حل، اعتراضات، عرض.', en: 'Write a complete VSL script (30 minutes) for a training program. Structure in 5 parts: hook, problem, solution, objections, offer.' },
            tip: { fr: '💡 Les landing pages qui convertissent le mieux sont celles qui parlent UNIQUEMENT des avantages client. Pas de jargon technique, juste des bénéfices.', ar: '💡 صفحات الهبوط الأكثر تحويلاً هي التي تتحدث فقط عن فوائد الزبون. لا مصطلحات تقنية، فقط فوائد.', en: '💡 Landing pages that convert best are those that talk ONLY about client benefits. No technical jargon, just benefits.' }
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
              fr: ['Le consultant copywriting aide les entreprises à améliorer leurs textes de vente.','Services: audit de copy, rédaction de landing pages, scripts VSL, emails, posts sociaux.','Processus: Brief client → Recherche → Rédaction → Révision → Livraison.','Tarification: landing page 20-50K DZD, VSL 50-100K DZD, forfait mensuel 30-80K DZD.','Spécialisez-vous dans une niche: SaaS, e-commerce, formation, santé.','Résultats: le ROI du copywriting est le plus élevé en marketing (10x-100x).'],
              ar: ['مستشار الكتابة الإعلانية يساعد الشركات على تحسين نصوص البيع.','الخدمات: تدقيق النصوص، كتابة صفحات هبوط، سكريبتات VSL، إيميلات، منشورات اجتماعية.','العملية: بريف الزبون → بحث → كتابة → مراجعة → تسليم.','التسعير: صفحة هبوط 20-50K دج، VSL 50-100K دج، باقة شهرية 30-80K دج.','تخصّص في مجال: SaaS، التجارة الإلكترونية، التكوين، الصحة.','النتائج: عائد الاستثمار في الكتابة الإعلانية هو الأعلى في التسويق (10x-100x).'],
              en: ['Copywriting consultants help businesses improve their sales copy.','Services: copy audit, landing page writing, VSL scripts, emails, social posts.','Process: Client brief → Research → Writing → Revision → Delivery.','Pricing: landing page 20-50K DZD, VSL 50-100K DZD, monthly package 30-80K DZD.','Specialize in a niche: SaaS, e-commerce, training, health.','Results: copywriting ROI is the highest in marketing (10x-100x).']
            },
            method: { fr: 'Réalisez un audit de copywriting pour une entreprise de votre choix. Identifiez 5 problèmes et proposez 5 solutions concrètes.', ar: 'قم بتدقيق كتابة إعلانية لشركة من اختيارك. حدد 5 مشاكل واقترح 5 حلول ملموسة.', en: 'Perform a copywriting audit for a business of your choice. Identify 5 problems and propose 5 concrete solutions.' },
            exercise: { fr: 'Créez votre offre de services copywriting avec 3 forfaits, des garanties, et une page de vente. Définissez vos prix pour le marché algérien.', ar: 'أنشئ عرض الخدمات الكتابية الخاص بك بـ3 باقات، ضمانات، وصفحة بيع. حدد أسعارك للسوق الجزائري.', en: 'Create your copywriting service offering with 3 packages, guarantees, and a sales page. Define your prices for the Algerian market.' },
            tip: { fr: '💡 Les meilleurs copywriters facturent à la performance: commission sur les ventes générées. Vous gagnez quand vos clients gagnent.', ar: '💡 أفضل كتاب الإعلانات يشحنون على الأداء: عمولة على المبيعات المحققة. تربح عندما يربح زبائنك.', en: '💡 The best copywriters charge on performance: commission on sales generated. You win when your clients win.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 8: UI/UX DESIGN (version simplifiée avec char7)
  // ============================================================
  {
    id: 'uiux',
    icon: '🎨',
    color: '#6366F1',
    accent: '#818CF8',
    bg: '#0C0A1A',
    earning: '20,000 – 100,000 DZD/month',
    firstClient: { fr: '4–8 semaines', ar: '4–8 أسابيع', en: '4–8 weeks' },
    startTool: 'Figma + Adobe XD + Pen & Paper',
    title: { fr: 'UI/UX Design', ar: 'تصميم واجهات المستخدم', en: 'UI/UX Design' },
    subtitle: { fr: 'User Interface & Experience', ar: 'تصميم واجهات وتجارب المستخدم', en: 'User Interface & Experience' },
    tagline: { fr: 'Créez des expériences numériques qui convertissent', ar: 'أنشئ تجارب رقمية تحول المستخدمين', en: 'Create digital experiences that convert' },
    levels: [
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Maîtriser les fondamentaux du UI/UX', ar: 'إتقان أساسيات UI/UX', en: 'Master UI/UX fundamentals' },
        lessons: [
          {
            id: 'uiux-b-1',
            title: { fr: 'UI vs UX - Comprendre la Différence', ar: 'UI vs UX - فهم الفرق', en: 'UI vs UX - Understanding the Difference' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['UI = User Interface (Interface Utilisateur) = l\'apparence du produit (couleurs, polices, boutons).','UX = User Experience (Expérience Utilisateur) = comment l\'utilisateur se sent en utilisant le produit.','UI est ce que vous voyez, UX est ce que vous ressentez.','Exemple: Un site beau mais confus = bon UI, mauvais UX.','Exemple: Un site simple mais agréable = bon UX, UI correct.','Les deux doivent travailler ensemble pour un grand produit.','Le UI/UX Designer combine les deux disciplines.','Objectif final: créer des produits que les gens aiment utiliser.'],
              ar: ['UI = واجهة المستخدم = مظهر المنتج (الألوان، الخطوط، الأزرار).','UX = تجربة المستخدم = كيف يشعر المستخدم عند استخدام المنتج.','UI هو ما تراه، UX هو ما تشعر به.','مثال: موقع جميل لكن مربك = UI جيد، UX سيء.','مثال: موقع بسيط لكن ممتع = UX جيد، UI مقبول.','يجب أن يعمل الاثنان معاً لمنتج رائع.','مصمم UI/UX يجمع بين التخصصين.','الهدف النهائي: إنشاء منتجات يحب الناس استخدامها.'],
              en: ['UI = User Interface = the appearance of the product (colors, fonts, buttons).','UX = User Experience = how the user feels when using the product.','UI is what you see, UX is what you feel.','Example: A beautiful but confusing site = good UI, bad UX.','Example: A simple but enjoyable site = good UX, okay UI.','Both must work together for a great product.','The UI/UX Designer combines both disciplines.','Final goal: create products people love to use.']
            },
            method: { fr: 'Analysez 3 applications que vous utilisez quotidiennement. Notez 5 éléments UI et 5 éléments UX pour chacune. Identifiez ce qui fonctionne et ce qui pourrait être amélioré.', ar: 'حلل 3 تطبيقات تستخدمها يومياً. سجل 5 عناصر UI و5 عناصر UX لكل منها. حدد ما يعمل وما يمكن تحسينه.', en: 'Analyze 3 applications you use daily. Note 5 UI elements and 5 UX elements for each. Identify what works and what could be improved.' },
            exercise: { fr: 'Créez une comparaison visuelle: prenez une capture d\'écran d\'une app bien conçue et une mal conçue. Notez 10 différences UI et 10 différences UX.', ar: 'أنشئ مقارنة بصرية: خذ لقطة شاشة لتطبيق مصمم جيداً وآخر سيئ التصميم. سجل 10 اختلافات في UI و10 اختلافات في UX.', en: 'Create a visual comparison: take a screenshot of a well-designed app and a poorly designed one. Note 10 UI differences and 10 UX differences.' },
            tip: { fr: '💡 Un bon UI/UX Designer pense d\'abord à l\'utilisateur. La beauté suit la fonctionnalité. Si un produit n\'est pas utile, même le plus beau design échoue.', ar: '💡 مصمم UI/UX الجيد يفكر أولاً في المستخدم. الجمال يتبع الوظيفة. إذا لم يكن المنتج مفيداً، حتى أجمل تصميم يفشل.', en: '💡 A good UI/UX Designer thinks about the user first. Beauty follows functionality. If a product isn\'t useful, even the most beautiful design fails.' }
          }
        ]
      },
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–12', ar: 'الأسابيع 5–12', en: 'Weeks 5–12' },
        goal: { fr: 'Maîtriser Figma', ar: 'إتقان Figma', en: 'Master Figma' },
        lessons: [
          {
            id: 'uiux-i-1',
            title: { fr: 'Figma - Maîtrise Complète', ar: 'Figma - إتقان كامل', en: 'Figma - Complete Mastery' },
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Figma est un outil de design collaboratif (gratuit pour les individus).','Interface: Canvas central, panneaux gauche/droite, barre supérieure.','Outils: Rectangle (R), Texte (T), Ellipse (O), Ligne (L), Stylo (P), Main (H).','Frames: conteneurs pour vos designs (taille d\'écran).','Layers: organisez vos éléments dans une hiérarchie.','Auto Layout: système de grille flexible (Shift + A).','Prototypage: créez des prototypes interactifs en connectant les frames.','Partage: collaborez en temps réel avec votre équipe.'],
              ar: ['Figma هي أداة تصميم تعاونية (مجانية للأفراد).','الواجهة: لوحة مركزية، لوحات يسار/يمين، شريط علوي.','الأدوات: مستطيل (R)، نص (T)، قطع ناقص (O)، خط (L)، قلم (P)، يد (H).','الإطارات: حاويات لتصاميمك (أحجام الشاشات).','الطبقات: تنظيم عناصرك في تسلسل هرمي.','التخطيط التلقائي: نظام شبكي مرن (Shift + A).','النماذج الأولية: أنشئ نماذج تفاعلية بربط الإطارات.','المشاركة: تعاون في الوقت الفعلي مع فريقك.'],
              en: ['Figma is a collaborative design tool (free for individuals).','Interface: Center canvas, left/right panels, top bar.','Tools: Rectangle (R), Text (T), Ellipse (O), Line (L), Pen (P), Hand (H).','Frames: containers for your designs (screen sizes).','Layers: organize your elements in hierarchy.','Auto Layout: flexible grid system (Shift + A).','Prototyping: create interactive prototypes by connecting frames.','Sharing: collaborate in real-time with your team.']
            },
            method: { fr: 'Créez un projet Figma pour un site web de portfolio. Ajoutez 5 frames (pages), utilisez au moins 10 shapes, 5 text elements, et 3 images.', ar: 'أنشئ مشروع Figma لموقع ويب بورتفوليو. أضف 5 إطارات (صفحات)، استخدم 10 أشكال على الأقل، 5 عناصر نص، و3 صور.', en: 'Create a Figma project for a portfolio website. Add 5 frames (pages), use at least 10 shapes, 5 text elements, and 3 images.' },
            exercise: { fr: 'Refaites un site web populaire dans Figma (ex: le site d\'une banque algérienne). Reconstruisez la page d\'accueil et une page intérieure.', ar: 'أعد إنشاء موقع ويب شهير في Figma (مثال: موقع بنك جزائري). أعد بناء الصفحة الرئيسية وصفحة داخلية.', en: 'Redesign a popular website in Figma (ex: an Algerian bank\'s site). Rebuild the homepage and an inner page.' },
            tip: { fr: '💡 Maîtrisez les raccourcis Figma: R (rectangle), T (texte), F (frame), Shift+2 (zoom), Shift+0 (reset). La vitesse vient des raccourcis.', ar: '💡 أتقن اختصارات Figma: R (مستطيل)، T (نص)، F (إطار)، Shift+2 (تكبير)، Shift+0 (إعادة تعيين). السرعة تأتي من الاختصارات.', en: '💡 Master Figma shortcuts: R (rectangle), T (text), F (frame), Shift+2 (zoom), Shift+0 (reset). Speed comes from shortcuts.' }
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
            title: { fr: 'Recherche UX', ar: 'بحث تجربة المستخدم', en: 'UX Research' },
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['UX Research = comprendre les besoins et comportements des utilisateurs.','Méthodes qualitatives: interviews (5-8 utilisateurs), observations, personas.','Méthodes quantitatives: sondages (Google Forms, Typeform), analytics.','Interview: questions ouvertes, écouter plus que parler.','Sondages: à grande échelle pour valider des hypothèses.','Synthèse: identifiez des patterns, des insights.','Objectif: prendre des décisions basées sur des données réelles.'],
              ar: ['بحث UX = فهم احتياجات وسلوكيات المستخدمين.','الطرق النوعية: مقابلات (5-8 مستخدمين)، ملاحظات، شخصيات.','الطرق الكمية: استبيانات (Google Forms، Typeform)، تحليلات.','المقابلة: أسئلة مفتوحة، استمع أكثر مما تتكلم.','الاستبيانات: على نطاق واسع للتحقق من الفرضيات.','التوليف: حدد الأنماط والأفكار.','الهدف: اتخاذ قرارات مبنية على بيانات حقيقية.'],
              en: ['UX Research = understanding user needs and behaviors.','Qualitative methods: interviews (5-8 users), observations, personas.','Quantitative methods: surveys (Google Forms, Typeform), analytics.','Interview: open questions, listen more than talk.','Surveys: large scale to validate hypotheses.','Synthesis: identify patterns and insights.','Goal: make decisions based on real data.']
            },
            method: { fr: 'Menez 5 interviews utilisateurs. Préparez 10 questions ouvertes. Enregistrez (avec permission), transcrivez, et identifiez 5 patterns communs.', ar: 'أجرِ 5 مقابلات مع مستخدمين. جهز 10 أسئلة مفتوحة. سجل (بإذن)، انسخ، وحدد 5 أنماط مشتركة.', en: 'Conduct 5 user interviews. Prepare 10 open questions. Record (with permission), transcribe, and identify 5 common patterns.' },
            exercise: { fr: 'Créez un plan de recherche UX complet pour un projet de votre choix. Incluez: objectifs, méthodes, participants, questions, timeline, analyse prévue.', ar: 'أنشئ خطة بحث UX كاملة لمشروع من اختيارك. تشمل: الأهداف، الطرق، المشاركون، الأسئلة، الجدول الزمني، التحليل المتوقع.', en: 'Create a complete UX research plan for a project of your choice. Include: objectives, methods, participants, questions, timeline, analysis plan.' },
            tip: { fr: '💡 La recherche UX n\'est pas facultative. Les designers qui font de la recherche créent des produits 3x plus efficaces que ceux qui ne le font pas.', ar: '💡 بحث UX ليس اختيارياً. المصممون الذين يقومون بالبحث يصنعون منتجات أكثر فعالية بـ3 مرات من أولئك الذين لا يفعلون.', en: '💡 UX research isn\'t optional. Designers who do research create products 3x more effective than those who don\'t.' }
          }
        ]
      },
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Livrer des projets professionnels', ar: 'تسليم مشاريع احترافية', en: 'Deliver professional projects' },
        lessons: [
          {
            id: 'uiux-m-1',
            title: { fr: 'Handoff aux Développeurs', ar: 'التسليم للمطورين', en: 'Developer Handoff' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Handoff = livraison du design aux développeurs.','Figma: Inspect mode pour voir les détails (couleurs, tailles, espacements).','Exporter: assets (icônes, images) en PNG, SVG, PDF.','Design Tokens: couleurs, typographie, espacement en variables.','Redlines: annotations avec mesures et spécifications.','Style Guide: document de référence pour tout le projet.','Réunions: workshops avec l\'équipe de développement.','Objectif: design implémenté à 100% comme prévu.'],
              ar: ['التسليم للمطورين = تسليم التصميم للمطورين.','Figma: وضع التدقيق لرؤية التفاصيل (الألوان، الأحجام، التباعد).','التصدير: أصول (أيقونات، صور) بتنسيق PNG، SVG، PDF.','رموز التصميم: الألوان، الطباعة، التباعد كمتغيرات.','الخطوط الحمراء: تعليقات توضيحية مع قياسات ومواصفات.','دليل الأنماط: وثيقة مرجعية للمشروع بأكمله.','الاجتماعات: ورش عمل مع فريق التطوير.','الهدف: تنفيذ التصميم بنسبة 100% كما هو مخطط.'],
              en: ['Handoff = delivering design to developers.','Figma: Inspect mode to see details (colors, sizes, spacing).','Export: assets (icons, images) as PNG, SVG, PDF.','Design Tokens: colors, typography, spacing as variables.','Redlines: annotations with measurements and specs.','Style Guide: reference document for the entire project.','Meetings: workshops with the development team.','Goal: design implemented 100% as intended.']
            },
            method: { fr: 'Préparez un package de handoff complet pour votre projet. Incluez: 1) Figma file partagé, 2) Assets exportés, 3) Design tokens, 4) Style guide, 5) Documentation.', ar: 'جهز حزمة تسليم كاملة لمشروعك. تشمل: 1) ملف Figma مشترك، 2) أصول مصدرة، 3) رموز تصميم، 4) دليل أنماط، 5) توثيق.', en: 'Prepare a complete handoff package for your project. Include: 1) Shared Figma file, 2) Exported assets, 3) Design tokens, 4) Style guide, 5) Documentation.' },
            exercise: { fr: 'Créez un handoff complet pour un projet de votre choix. Rendez chaque détail inspectable. Ajoutez des commentaires pour les parties complexes.', ar: 'أنشئ تسليماً كاملاً لمشروع من اختيارك. اجعل كل تفصيل قابلاً للتدقيق. أضف تعليقات للأجزاء المعقدة.', en: 'Create a complete handoff for a project of your choice. Make every detail inspectable. Add comments for complex parts.' },
            tip: { fr: '💡 Un bon handoff est la différence entre un design bien implémenté et un design massacré. Passez 20% de votre temps sur le handoff. Les développeurs vous adoreront.', ar: '💡 التسليم الجيد هو الفرق بين تصميم منفذ جيداً وتصميم مشوّه. اقضِ 20% من وقتك على التسليم. سيعشقك المطورون.', en: '💡 A good handoff is the difference between a well-implemented design and a butchered one. Spend 20% of your time on handoff. Developers will love you.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 9: AUTOMATION WITH N8N (simplifié avec char7)
  // ============================================================
  {
    id: 'n8n',
    icon: '⚡',
    color: '#E94E1B',
    accent: '#FF6B35',
    bg: '#1A0A04',
    earning: '25,000 – 120,000 DZD/month',
    firstClient: { fr: '3–6 semaines', ar: '3–6 أسابيع', en: '3–6 weeks' },
    startTool: 'n8n (self-hosted or cloud) + Docker',
    title: { fr: 'Automation avec n8n', ar: 'الأتمتة مع n8n', en: 'Automation with n8n' },
    subtitle: { fr: 'Workflow Automation', ar: 'أتمتة سير العمل', en: 'Workflow Automation' },
    tagline: { fr: 'Automatisez tout sans coder - connectez vos apps, économisez des heures', ar: 'أتمتة كل شيء بدون برمجة - اربط تطبيقاتك، وفر ساعات', en: 'Automate everything without coding - connect your apps, save hours' },
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
              fr: ['Qu\'est-ce que l\'automatisation? = faire faire par des machines ce qui est répétitif.','Pourquoi automatiser? = gagner du temps, réduire les erreurs, travailler 24/7.','Exemples: envoyer des emails automatiques, publier sur les réseaux sociaux, traiter des données.','n8n = outil d\'automatisation open-source qui connecte vos applications.','Alternative à Zapier/Make (gratuit, auto-hébergé).','Les workflows = des chaînes d\'actions qui s\'exécutent automatiquement.','Composants: Nodes (actions), Triggers (déclencheurs), Connections (liens).'],
              ar: ['ما هي الأتمتة؟ = جعل الآلات تقوم بما هو متكرر.','لماذا الأتمتة؟ = توفير الوقت، تقليل الأخطاء، العمل 24/7.','أمثلة: إرسال رسائل بريد إلكتروني تلقائية، نشر على وسائل التواصل، معالجة البيانات.','n8n = أداة أتمتة مفتوحة المصدر تربط تطبيقاتك.','بديل لـ Zapier/Make (مجاني، مستضاف ذاتياً).','سير العمل = سلاسل من الإجراءات التي يتم تنفيذها تلقائياً.','المكونات: العقد (الإجراءات)، المشغلات، الروابط.'],
              en: ['What is automation? = making machines do what is repetitive.','Why automate? = save time, reduce errors, work 24/7.','Examples: send automatic emails, post on social media, process data.','n8n = open-source automation tool that connects your apps.','Alternative to Zapier/Make (free, self-hosted).','Workflows = chains of actions that execute automatically.','Components: Nodes (actions), Triggers (starters), Connections (links).']
            },
            method: { fr: 'Identifiez 5 tâches répétitives que vous faites chaque semaine. Notez combien de temps chacune prend. Multipliez par 52 semaines. Ce sont les heures que vous pouvez économiser avec n8n.', ar: 'حدد 5 مهام متكررة تقوم بها كل أسبوع. سجل كم من الوقت يستغرق كل منها. اضرب في 52 أسبوعاً. هذه هي الساعات التي يمكنك توفيرها مع n8n.', en: 'Identify 5 repetitive tasks you do every week. Note how long each takes. Multiply by 52 weeks. These are the hours you can save with n8n.' },
            exercise: { fr: 'Créez une liste de 10 processus métier que vous pouvez automatiser dans votre vie quotidienne ou professionnelle. Priorisez les 3 plus importants.', ar: 'أنشئ قائمة من 10 عمليات تجارية يمكنك أتمتتها في حياتك اليومية أو المهنية. رتب أولويات الـ3 الأكثر أهمية.', en: 'Create a list of 10 business processes you can automate in your daily or professional life. Prioritize the top 3 most important.' },
            tip: { fr: '💡 La règle d\'or: Si vous faites une tâche plus de 3 fois, automatisez-la. Le temps investi dans l\'automatisation est toujours rentabilisé.', ar: '💡 القاعدة الذهبية: إذا قمت بمهمة أكثر من 3 مرات، قم بأتمتتها. الوقت المستثمر في الأتمتة يعود دائماً بفوائد.', en: '💡 Golden rule: If you do a task more than 3 times, automate it. The time invested in automation always pays back.' }
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
              fr: ['HTTP Request Node = faites des appels API directement depuis n8n.','Méthodes: GET (récupérer), POST (créer), PUT (mettre à jour), DELETE (supprimer).','URL: endpoint de l\'API que vous voulez appeler.','Headers: authentification (API Key, JWT), Content-Type, Accept.','Body: données à envoyer (JSON, XML, form-data).','Query Parameters: filtres, pagination, tri.','Réponse: récupérez et utilisez les données retournées.','Gestion d\'erreurs: que faire si l\'API répond avec une erreur.'],
              ar: ['عقدة HTTP Request = استدعاء APIs مباشرة من n8n.','الطرق: GET (استرجاع)، POST (إنشاء)، PUT (تحديث)، DELETE (حذف).','الرابط: نقطة نهاية API التي تريد استدعاءها.','الرؤوس: مصادقة (مفتاح API، JWT)، نوع المحتوى، Accept.','الجسم: البيانات المرسلة (JSON، XML، form-data).','معلمات الاستعلام: تصفية، ترقيم، ترتيب.','الاستجابة: استرجع واستخدم البيانات المعادة.','معالجة الأخطاء: ماذا تفعل إذا استجاب API بخطأ.'],
              en: ['HTTP Request Node = make API calls directly from n8n.','Methods: GET (retrieve), POST (create), PUT (update), DELETE (delete).','URL: API endpoint you want to call.','Headers: authentication (API Key, JWT), Content-Type, Accept.','Body: data to send (JSON, XML, form-data).','Query Parameters: filters, pagination, sorting.','Response: retrieve and use the returned data.','Error handling: what to do if the API responds with an error.']
            },
            method: { fr: 'Utilisez l\'API publique JSONPlaceholder pour votre premier test. Faites une requête GET pour récupérer des posts, puis une requête POST pour créer un post.', ar: 'استخدم API العامة JSONPlaceholder لاختبارك الأول. قم بطلب GET لاسترجاع المنشورات، ثم طلب POST لإنشاء منشور.', en: 'Use the public JSONPlaceholder API for your first test. Make a GET request to fetch posts, then a POST request to create a post.' },
            exercise: { fr: 'Créez un workflow qui: 1) Récupère les 10 derniers posts d\'un blog, 2) Filtre ceux qui contiennent un mot-clé, 3) Les transforme en format HTML, 4) Envoie un email récapitulatif.', ar: 'أنشئ سير عمل يقوم: 1) باسترجاع آخر 10 منشورات من مدونة، 2) بتصفية تلك التي تحتوي على كلمة مفتاحية، 3) بتحويلها إلى تنسيق HTML، 4) بإرسال بريد إلكتروني موجز.', en: 'Create a workflow that: 1) Fetches the last 10 posts from a blog, 2) Filters those containing a keyword, 3) Transforms them to HTML format, 4) Sends a summary email.' },
            tip: { fr: '💡 Testez toujours vos requêtes HTTP avec Postman ou Insomnia avant de les mettre dans n8n. Cela vous évite de debugger dans n8n ce qui pourrait être plus simple à tester ailleurs.', ar: '💡 اختبر دائماً طلبات HTTP الخاصة بك مع Postman أو Insomnia قبل وضعها في n8n. هذا يوفر عليك تصحيح الأخطاء في n8n مما قد يكون أبسط في الاختبار في مكان آخر.', en: '💡 Always test your HTTP requests with Postman or Insomnia before putting them in n8n. This saves you from debugging in n8n what could be simpler to test elsewhere.' }
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
              fr: ['Node AI: utilisez des modèles d\'IA dans vos workflows.','OpenAI Node: GPT-4, GPT-3.5, Dall-E, Whisper.','Anthropic Node: Claude 3 (Opus, Sonnet, Haiku).','Hugging Face: modèles open-source gratuits.','Exemple: analyse de sentiments, génération de contenu, résumé de texte.','LangChain: framework pour agents IA complexes.','Combinez IA + Actions: l\'IA prend des décisions puis exécute.'],
              ar: ['عقدة الذكاء الاصطناعي: استخدم نماذج الذكاء الاصطناعي في سير العمل الخاص بك.','OpenAI: GPT-4، GPT-3.5، Dall-E، Whisper.','Anthropic: Claude 3 (Opus، Sonnet، Haiku).','Hugging Face: نماذج مفتوحة المصدر مجانية.','مثال: تحليل المشاعر، توليد المحتوى، تلخيص النص.','LangChain: إطار لوكلاء الذكاء الاصطناعي المعقدة.','اجمع الذكاء الاصطناعي + الإجراءات: الذكاء الاصطناعي يتخذ قرارات ثم ينفذ.'],
              en: ['AI Node: use AI models in your workflows.','OpenAI Node: GPT-4, GPT-3.5, Dall-E, Whisper.','Anthropic Node: Claude 3 (Opus, Sonnet, Haiku).','Hugging Face: free open-source models.','Example: sentiment analysis, content generation, text summarization.','LangChain: framework for complex AI agents.','Combine AI + Actions: AI makes decisions then executes.']
            },
            method: { fr: 'Intégrez l\'API OpenAI dans n8n. Créez un workflow qui prend un prompt, le soumet à GPT-4, et affiche la réponse.', ar: 'ادمج API OpenAI في n8n. أنشئ سير عمل يأخذ أمراً، يرسله إلى GPT-4، ويعرض الرد.', en: 'Integrate the OpenAI API into n8n. Create a workflow that takes a prompt, submits it to GPT-4, and displays the response.' },
            exercise: { fr: 'Créez un agent IA qui: 1) Reçoit des emails de support, 2) Analyse le sentiment du client, 3) Génère une réponse appropriée, 4) L\'envoie automatiquement.', ar: 'أنشئ وكيل ذكاء اصطناعي يقوم: 1) باستقبال رسائل دعم، 2) بتحليل شعور العميل، 3) بتوليد رد مناسب، 4) بإرساله تلقائياً.', en: 'Create an AI agent that: 1) Receives support emails, 2) Analyzes client sentiment, 3) Generates an appropriate response, 4) Sends it automatically.' },
            tip: { fr: '💡 L\'IA est la cerise sur le gâteau de l\'automatisation. Combinez l\'IA avec vos workflows pour créer des systèmes qui pensent et agissent automatiquement.', ar: '💡 الذكاء الاصطناعي هو الكرزة على كعكة الأتمتة. ادمج الذكاء الاصطناعي مع سير العمل لإنشاء أنظمة تفكر وتتصرف تلقائياً.', en: '💡 AI is the cherry on top of automation. Combine AI with your workflows to create systems that think and act automatically.' }
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
              fr: ['Objectif: automatiser des processus métier complets.','Exemple: Processus de vente complet (lead → client).','Exemple: Gestion de contenu (idée → publication).','Exemple: Support client (ticket → résolution).','Exemple: Recrutement (candidature → embauche).','Exemple: Gestion de projet (tâche → livraison).','Bonnes pratiques: documenter, versionner, monitorer.','Passer à l\'échelle: de 1 à 100 clients automatisés.'],
              ar: ['الهدف: أتمتة عمليات تجارية كاملة.','مثال: عملية مبيعات كاملة (عميل محتمل → عميل).','مثال: إدارة المحتوى (فكرة → نشر).','مثال: دعم العملاء (تذكرة → حل).','مثال: التوظيف (طلب → تعيين).','مثال: إدارة المشاريع (مهمة → تسليم).','الممارسات الجيدة: توثيق، تحكم في الإصدارات، مراقبة.','التوسع: من 1 إلى 100 عميل آلي.'],
              en: ['Goal: automate complete business processes.','Example: Complete sales process (lead → client).','Example: Content management (idea → publication).','Example: Customer support (ticket → resolution).','Example: Recruitment (application → hiring).','Example: Project management (task → delivery).','Best practices: document, version, monitor.','Scale: from 1 to 100 automated clients.']
            },
            method: { fr: 'Identifiez un processus métier complet dans votre vie professionnelle. Automatisez chaque étape de A à Z. Testez avec des données réelles pendant 1 semaine.', ar: 'حدد عملية تجارية كاملة في حياتك المهنية. أتمتة كل خطوة من الألف إلى الياء. اختبر ببيانات حقيقية لمدة أسبوع.', en: 'Identify a complete business process in your professional life. Automate every step from A to Z. Test with real data for 1 week.' },
            exercise: { fr: 'Créez une automatisation complète pour un processus de vente: 1) Lead capture, 2) Qualification, 3) Email sequence, 4) Rendez-vous auto-planifié, 5) Onboarding.', ar: 'أنشئ أتمتة كاملة لعملية مبيعات: 1) التقاط العميل المحتمل، 2) التأهيل، 3) تسلسل البريد الإلكتروني، 4) موعد ذاتي الجدولة، 5) استقبال العميل.', en: 'Create a complete automation for a sales process: 1) Lead capture, 2) Qualification, 3) Email sequence, 4) Auto-scheduled meeting, 5) Onboarding.' },
            tip: { fr: '💡 L\'objectif final est d\'avoir des automations qui tournent sans intervention humaine. Votre temps doit être consacré à améliorer le système, pas à le faire fonctionner.', ar: '💡 الهدف النهائي هو الحصول على أتمتة تعمل بدون تدخل بشري. يجب أن يكرس وقتك لتحسين النظام، وليس لتشغيله.', en: '💡 The final goal is to have automations that run without human intervention. Your time should be spent improving the system, not running it.' }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 10: VIBE CODING (simplifié avec char7)
  // ============================================================
  {
    id: 'vibecoding',
    icon: '🤖',
    color: '#8B5CF6',
    accent: '#A78BFA',
    bg: '#0D0618',
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
              fr: ['Définition: Vibe Coding = utiliser des assistants IA pour écrire du code.','Pourquoi c\'est différent: Vous devenez un "producteur" pas un "codeur" traditionnel.','L\'IA génère le code, vous guidez et validez les résultats.','Exemple: "Crée une calculatrice React" → L\'IA écrit tout le code.','Votre rôle: prompt engineer, architecte, testeur, et validateur.','Avantages: 10x plus rapide, 100x plus accessible, moins d\'erreurs.','Limites: l\'IA fait des erreurs, vous devez comprendre ce qu\'elle produit.','Outils principaux: Cursor, GitHub Copilot, ChatGPT, Claude.'],
              ar: ['تعريف: البرمجة بالذكاء الاصطناعي = استخدام مساعدين ذكاء اصطناعي لكتابة الأكواد.','لماذا مختلف: أنت تصبح "منتجاً" وليس "مبرمجاً" تقليدياً.','الذكاء الاصطناعي يكتب الكود، وأنت توجه وتتحقق من النتائج.','مثال: "اصنع آلة حاسبة React" → الذكاء الاصطناعي يكتب كل الكود.','دورك: مهندس الأوامر، المهندس المعماري، المختبر، والمدقق.','المزايا: أسرع بـ10 مرات، أسهل بـ100 مرة، أخطاء أقل.','الحدود: الذكاء الاصطناعي يخطئ، عليك فهم ما ينتجه.','الأدوات الرئيسية: Cursor، GitHub Copilot، ChatGPT، Claude.'],
              en: ['Definition: Vibe Coding = using AI assistants to write code.','Why it\'s different: You become a "producer" not a traditional "coder".','AI generates the code, you guide and validate the results.','Example: "Create a React calculator" → AI writes all the code.','Your role: prompt engineer, architect, tester, and validator.','Benefits: 10x faster, 100x more accessible, fewer errors.','Limits: AI makes mistakes, you need to understand what it produces.','Main tools: Cursor, GitHub Copilot, ChatGPT, Claude.']
            },
            method: { fr: 'Installez ChatGPT ou Claude maintenant. Posez-lui une question simple: "Comment créer une page web avec une calculatrice?". Observez la réponse détaillée.', ar: 'ثبّت ChatGPT أو Claude الآن. اسأل سؤالاً بسيطاً: "كيف تصنع صفحة ويب بها آلة حاسبة؟". لاحظ الإجابة المفصلة.', en: 'Install ChatGPT or Claude now. Ask a simple question: "How to create a web page with a calculator?". Observe the detailed response.' },
            exercise: { fr: 'Demandez à ChatGPT de vous expliquer ce qu\'est le Vibe Coding en 100 mots. Puis demandez-lui de vous donner 5 exemples d\'applications qu\'on peut créer avec l\'IA.', ar: 'اطلب من ChatGPT شرح ما هي البرمجة بالذكاء الاصطناعي في 100 كلمة. ثم اطلب منه إعطائك 5 أمثلة لتطبيقات يمكن إنشاؤها بالذكاء الاصطناعي.', en: 'Ask ChatGPT to explain what Vibe Coding is in 100 words. Then ask it to give you 5 examples of applications that can be built with AI.' },
            tip: { fr: '💡 Le Vibe Coding n\'est PAS une triche. C\'est la nouvelle façon de développer. Les développeurs qui refusent d\'utiliser l\'IA seront remplacés par ceux qui l\'utilisent.', ar: '💡 البرمجة بالذكاء الاصطناعي ليست غشاً. هذه هي الطريقة الجديدة للتطوير. المطورون الذين يرفضون استخدام الذكاء الاصطناعي سيتم استبدالهم بأولئك الذين يستخدمونه.', en: '💡 Vibe Coding is NOT cheating. It\'s the new way to develop. Developers who refuse to use AI will be replaced by those who do.' }
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
              fr: ['React = bibliothèque JavaScript pour construire des interfaces utilisateur.','Prompt: "Crée un composant React pour une carte de produit avec image, nom, prix".','L\'IA écrit le composant, vous le collez dans App.jsx.','Apprenez à reconnaître les props, state, et hooks (useState, useEffect).','Demandez à l\'IA: "Ajoute un état pour gérer le panier".','Testez dans Cursor: il détecte automatiquement les erreurs.','Itérez: ajoutez fonctionnalité par fonctionnalité.','Déployez sur Vercel pour une expérience React parfaite.'],
              ar: ['React = مكتبة جافا سكريبت لبناء واجهات المستخدم.','الأمر: "أنشئ مكون React لبطاقة منتج مع صورة واسم وسعر".','الذكاء الاصطناعي يكتب المكون، وأنت تنسخه في App.jsx.','تعلم التعرف على الخصائص والحالة والخطافات (useState, useEffect).','اطلب من الذكاء الاصطناعي: "أضف حالة لإدارة السلة".','اختبر في Cursor: يكتشف الأخطاء تلقائياً.','كرّر: أضف ميزة تلو الأخرى.','انشر على Vercel لتجربة React مثالية.'],
              en: ['React = JavaScript library for building user interfaces.','Prompt: "Create a React component for a product card with image, name, price".','AI writes the component, you paste it into App.jsx.','Learn to recognize props, state, and hooks (useState, useEffect).','Ask AI: "Add state to manage the cart".','Test in Cursor: it automatically detects errors.','Iterate: add feature by feature.','Deploy to Vercel for the perfect React experience.']
            },
            method: { fr: 'Demandez à l\'IA de générer un composant React pour un système de notation par étoiles (1-5). Copiez le code dans Cursor, testez-le, puis demandez à l\'IA d\'ajouter la possibilité de cliquer pour noter.', ar: 'اطلب من الذكاء الاصطناعي توليد مكون React لنظام تقييم بالنجوم (1-5). انسخ الكود في Cursor، اختبره، ثم اطلب من الذكاء الاصطناعي إضافة إمكانية النقر للتقييم.', en: 'Ask AI to generate a React component for a star rating system (1-5). Copy the code into Cursor, test it, then ask AI to add click-to-rate functionality.' },
            exercise: { fr: 'Construisez une application de galerie photo React. L\'application doit: Afficher une grille de 9 photos, permettre d\'agrandir une photo en cliquant dessus, avoir un design moderne.', ar: 'ابنِ تطبيق معرض صور React. يجب أن يعرض التطبيق: شبكة من 9 صور، يسمح بتكبير الصورة عند النقر عليها، له تصميم عصري.', en: 'Build a React photo gallery app. It should: Display a 9-photo grid, allow enlarging a photo on click, have a modern design.' },
            tip: { fr: '💡 Toujours structurer vos prompts React: d\'abord le composant, puis les props, puis les interactions, puis le style. L\'IA répond mieux avec cette progression logique.', ar: '💡 دائماً هيكل أوامر React: أولاً المكون، ثم الخصائص، ثم التفاعلات، ثم التنسيق. يستجيب الذكاء الاصطناعي بشكل أفضل مع هذا التقدم المنطقي.', en: '💡 Always structure your React prompts: first the component, then props, then interactions, then styling. AI responds better with this logical progression.' }
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
              fr: ['SaaS = Software as a Service (application payante en ligne).','Architecture: Frontend (React) + Backend (Node/Express) + Base de données (Supabase/Firebase).','Modèle économique: Abonnements (mensuel, annuel).','Stripe = paiement en ligne (ou CIH pour algériens).','Fonctionnalités clés: Authentification, Paiement, Dashboard, Notifications.','Multi-tenant: Une codebase pour tous les clients.','Demandez à l\'IA: "Structure d\'un projet SaaS avec React, Express et PostgreSQL".','Pricing tiers: Gratuit, Pro, Enterprise.'],
              ar: ['SaaS = برنامج كخدمة (تطبيق مدفوع أونلاين).','الهيكل: الواجهة الأمامية (React) + الخلفية (Node/Express) + قاعدة البيانات (Supabase/Firebase).','النموذج الاقتصادي: اشتراكات (شهرية، سنوية).','Stripe = الدفع أونلاين (أو CIH للجزائريين).','الميزات الرئيسية: مصادقة، دفع، لوحة تحكم، إشعارات.','متعدد المستأجرين: قاعدة كود واحدة لجميع العملاء.','اطلب من الذكاء الاصطناعي: "هيكل مشروع SaaS مع React وExpress وPostgreSQL".','فئات التسعير: مجاني، Pro، Enterprise.'],
              en: ['SaaS = Software as a Service (paid online application).','Architecture: Frontend (React) + Backend (Node/Express) + Database (Supabase/Firebase).','Business model: Subscriptions (monthly, yearly).','Stripe = online payment (or CIH for Algerians).','Key features: Authentication, Payment, Dashboard, Notifications.','Multi-tenant: One codebase for all customers.','Ask AI: "SaaS project structure with React, Express and PostgreSQL".','Pricing tiers: Free, Pro, Enterprise.']
            },
            method: { fr: 'Demandez à l\'IA de créer un plan détaillé pour une application SaaS. Incluez: l\'architecture technique, la base de données, l\'authentification, les paiements, le dashboard.', ar: 'اطلب من الذكاء الاصطناعي إنشاء خطة مفصلة لتطبيق SaaS. تشمل: الهيكل التقني، قاعدة البيانات، المصادقة، المدفوعات، لوحة التحكم.', en: 'Ask AI to create a detailed plan for a SaaS app. Include: technical architecture, database, authentication, payments, dashboard.' },
            exercise: { fr: 'Construisez un SaaS complet: Application de gestion de projets. Fonctionnalités: 3 rôles (admin, manager, member), création de projets, attribution de tâches, suivi des progrès.', ar: 'ابنِ SaaS كاملاً: تطبيق إدارة المشاريع. الميزات: 3 أدوار (مدير، مدير مشروع، عضو)، إنشاء مشاريع، تعيين مهام، تتبع التقدم.', en: 'Build a complete SaaS: Project management app. Features: 3 roles (admin, manager, member), project creation, task assignment, progress tracking.' },
            tip: { fr: '💡 Commencez par un SaaS simple et spécialisé. "Un CRM pour commerces en Algérie" est plus viable que "Un CRM pour tout le monde". La spécialisation paie.', ar: '💡 ابدأ بـ SaaS بسيط ومتخصص. "نظام CRM للمتاجر في الجزائر" أكثر جدوى من "نظام CRM للجميع". التخصص يدفع.', en: '💡 Start with a simple specialized SaaS. "A CRM for Algerian businesses" is more viable than "A CRM for everyone". Specialization pays.' }
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
              fr: ['Modèles de monétisation: Abonnement (revenus récurrents), Pay-per-use (paiement à l\'utilisation), Freemium (gratuit pour attirer, payant pour les fonctionnalités avancées).','Prix Algérie: Adaptez vos prix au pouvoir d\'achat local. Un prix de 500-2000 DZD par mois peut être accessible.','Créez 3 niveaux de prix: Basic (fonctionnalités essentielles), Pro (fonctionnalités avancées), Enterprise (tout inclus).','Stratégie marketing: Utilisez LinkedIn pour les B2B, Instagram/Facebook pour les B2C, et les groupes Facebook algériens.','Page de vente: Créez une page qui explique le problème, votre solution, les avantages, les témoignages.'],
              ar: ['نماذج الربح: الاشتراك (إيرادات متكررة)، الدفع لكل استخدام، Freemium (مجاني لجذب العملاء، مدفوع للميزات المتقدمة).','أسعار الجزائر: كيّف أسعارك مع القدرة الشرائية المحلية. سعر 500-2000 دج شهرياً يمكن أن يكون في المتناول.','أنشئ 3 مستويات أسعار: أساسي (ميزات أساسية)، Pro (ميزات متقدمة)، Enterprise (كل شيء).','استراتيجية التسويق: استخدم LinkedIn للـ B2B، Instagram/Facebook للـ B2C، ومجموعات Facebook الجزائرية.','صفحة البيع: أنشئ صفحة تشرح المشكلة، الحل، المزايا، الشهادات.'],
              en: ['Monetization models: Subscription (recurring revenue), Pay-per-use, Freemium (free to attract, paid for advanced features).','Algeria pricing: Adapt your prices to local purchasing power. A price of 500-2000 DZD per month can be affordable.','Create 3 pricing tiers: Basic (essential features), Pro (advanced features), Enterprise (everything).','Marketing strategy: Use LinkedIn for B2B, Instagram/Facebook for B2C, and Algerian Facebook groups.','Sales page: Create a page that explains the problem, your solution, benefits, testimonials.']
            },
            method: { fr: 'Choisissez un projet IA que vous avez construit. Développez un plan de monétisation complet. Utilisez l\'IA pour estimer les prix potentiels, calculer les coûts, et prévoir les revenus.', ar: 'اختر مشروع ذكاء اصطناعي بنيته. طوّر خطة ربح كاملة. استخدم الذكاء الاصطناعي لتقدير الأسعار المحتملة، حساب التكاليف، وتوقع الإيرادات.', en: 'Choose an AI project you\'ve built. Develop a complete monetization plan. Use AI to estimate potential prices, calculate costs, and forecast revenue.' },
            exercise: { fr: 'Créez un plan de monétisation complet: 1) 3 niveaux de prix, 2) Calcul des coûts d\'infrastructure, 3) Projection des revenus, 4) Stratégie marketing, 5) Page de vente.', ar: 'أنشئ خطة ربح كاملة: 1) 3 مستويات أسعار، 2) حساب تكاليف البنية التحتية، 3) توقع الإيرادات، 4) استراتيجية تسويق، 5) صفحة بيع.', en: 'Create a complete monetization plan: 1) 3 pricing tiers, 2) Infrastructure cost calculation, 3) Revenue projection, 4) Marketing strategy, 5) Sales page.' },
            tip: { fr: '💡 Les produits IA les plus rentables résolvent un problème spécifique et douloureux. "Un outil qui génère des descriptifs produits pour e-commerce" est plus rentable que "Un outil de génération de texte général".', ar: '💡 أكثر منتجات الذكاء الاصطناعي ربحاً تحل مشكلة محددة ومؤلمة. "أداة تولد أوصاف منتجات للتجارة الإلكترونية" أكثر ربحاً من "أداة توليد نصوص عامة".', en: '💡 The most profitable AI products solve a specific and painful problem. "A tool that generates product descriptions for e-commerce" is more profitable than "A general text generation tool".' }
          }
        ]
      }
    ]
  }
];