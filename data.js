

// ============================================================
// DATA.JS v3.0 — Digital Skills Academy
// Visual Learning System with AI Integration
// ============================================================
// NOTE: CODES array is historical reference only.
// Access verification now goes through Supabase.
// ============================================================

var CODES = ['DSA2026','STUDENT01','VIP2026','DZSKILL2025','ATLAS-PRO',
  'LEARN-DZ-01','LEARN-DZ-02','LEARN-DZ-03','ACADEMY-VIP','FORMATION01','FORMATION02'];

var LS = {
  Beginner: { bg: '#052E16', border: '#16A34A', text: '#4ADE80', badge: '🌱' },
  Intermediate: { bg: '#1E3A5F', border: '#2563EB', text: '#60A5FA', badge: '⚡' },
  Advanced: { bg: '#450A0A', border: '#DC2626', text: '#F87171', badge: '🔥' },
  Master: { bg: '#431407', border: '#EA580C', text: '#FB923C', badge: '👑' }
};

var T = {
  fr: {
    badge: 'Formation Complète — 11 Skills + IA',
    title: 'Maîtrisez les Compétences\nDigitales & IA qui Paient en Algérie',
    subtitle: '11 formations complètes + méthodes IA. Graphisme, Social Media, Vidéo, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding, IA.',
    f1: '✓ Méthodes étape par étape avec visuels', f2: '✓ Exercices réels + projets clients', f3: '✓ Outils gratuits + IA intégrée', f4: '✓ Tarifs marché algérien en DZD',
    includesTitle: 'Ce que vous obtenez',
    includes: ['11 formations complètes — Beginner → Master','Leçons visuelles avec captures écran','Exercices pratiques avec livrables concrets','Outils gratuits + IA (ChatGPT, Midjourney, etc.)','Prix du marché algérien en DZD','Scripts de communication client','Accès à vie — mises à jour incluses'],
    already: 'Vous avez déjà acheté?', enter: 'Entrez votre code d\'accès pour commencer.', code: 'VOTRE CODE D\'ACCÈS...',
    access: 'Accéder à la Formation →', loading: 'Vérification...', notBought: 'Pas encore acheté?', whatsapp: '💬 Commander via WhatsApp',
    errEmpty: 'Entrez votre code d\'accès.', errInvalid: 'Code invalide. Vérifiez votre achat.', errUsed: 'Ce code a déjà été utilisé.',
    stats: [{ n: '100+', l: 'Leçons visuelles' }, { n: '4', l: 'Niveaux par skill' }, { n: '0 DZD', l: 'Pour commencer' }],
    footer: 'DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algérie', aTitle: 'Apprenez. Pratiquez.\nSoyez Payé.',
    aSubtitle: '11 skills + IA, du débutant au maître. Chaque leçon vous montre exactement comment faire.',
    aFeatures: ['Méthodes visuelles étape par étape','Exercices réels avec IA','Outils gratuits','Tarifs marché algérien'],
    aRec: '💡 Ordre recommandé: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding → IA',
    startLearning: 'Commencer →', firstClient: 'Premier client', earning: 'Revenus', startWith: 'Commencer avec',
    backSkills: '← Skills', goal: 'Objectif', lessons: 'leçons', back: '← Retour', lesson: 'Leçon', of: 'sur',
    howTo: 'Comment Faire — Étape par Étape', bestWay: 'La Meilleure Façon d\'Apprendre', exercise: 'Votre Exercice Pratique',
    prevLesson: '← Leçon Précédente', nextLesson: 'Leçon Suivante →', nextLevel: 'Niveau Suivant', complete: '👑 Formation Terminée!',
    aiTip: '🤖 Astuce IA', proTip: '💡 Secret Pro', warning: '⚠️ Attention',
    dash: { navLabel: 'Suivi', title: 'Mon Tableau de Bord', subtitle: 'Suivez votre progression sur les 11 compétences', overallTitle: 'Progression Globale', lessonsCompleted: 'leçons terminées', continueLearning: 'Continuer l\'apprentissage →', allComplete: '👑 Toutes les leçons terminées !', lessonsLabel: 'leçons', empty: 'Commencez une leçon pour voir votre progression ici.' }
  },
  ar: {
    badge: 'تكوين كامل — 11 مهارة + ذكاء اصطناعي',
    title: 'تعلم المهارات الرقمية\nوالذكاء الاصطناعي اللي تدر فلوس',
    subtitle: '11 تكوين كامل + طرق الذكاء الاصطناعي. تصميم، سوشيال ميديا، مونتاج، ويب، SEO، بيانات، كتابة، UI/UX، أتمتة، برمجة بالذكاء، ذكاء اصطناعي.',
    f1: '✓ خطوات واضحة مع صور', f2: '✓ تمارين حقيقية + مشاريع', f3: '✓ أدوات مجانية + ذكاء اصطناعي', f4: '✓ أسعار السوق الجزائري',
    includesTitle: 'شنو راه فيه',
    includes: ['11 تكوينات كاملة — مبتدئ → محترف','دروس مرئية مع لقطات الشاشة','تمارين عملية مع نتائج حقيقية','أدوات مجانية + ذكاء اصطناعي','أسعار السوق الجزائري بالدينار','نصوص التواصل مع الزبائن','وصول مدى الحياة — التحديثات مشمولة'],
    already: 'راك شريت من قبل؟', enter: 'دخل رمز الدخول ديالك باش تبدا.', code: 'رمز الدخول...',
    access: 'ادخل للتكوين →', loading: 'كاين التحقق...', notBought: 'مازلتش شريت؟', whatsapp: '💬 اطلب عبر واتساب',
    errEmpty: 'دخل رمز الدخول.', errInvalid: 'الرمز غلط. راجع الشراء.', errUsed: 'هذا الرمز تستخدم من قبل.',
    stats: [{ n: '+100', l: 'درس مرئي' }, { n: '4', l: 'مستويات لكل مهارة' }, { n: '0 دج', l: 'باش تبدا' }],
    footer: 'DigitalSkills.dz — تكوين محترف الجزائر 🇩🇿',
    aBadge: '🇩🇿 أكاديمية المهارات الرقمية — الجزائر', aTitle: 'تعلم. تمرن.\nتربح.',
    aSubtitle: '11 مهارة + ذكاء اصطناعي، من الصفر للاحتراف. كل درس يوريك بالضبط كيفاش تدير.',
    aFeatures: ['خطوات مرئية واضحة','تمارين حقيقية بالذكاء الاصطناعي','أدوات مجانية','أسعار السوق الجزائري'],
    aRec: '💡 الترتيب المنصوح: سوشيال ميديا → تصميم → مونتاج → ويب → SEO → بيانات → كتابة → UI/UX → أتمتة → برمجة بالذكاء → الذكاء الاصطناعي',
    startLearning: 'ابدا التعلم →', firstClient: 'أول زبون', earning: 'الأرباح', startWith: 'ابدا بـ',
    backSkills: 'المهارات →', goal: 'الهدف', lessons: 'دروس', back: 'رجع →', lesson: 'الدرس', of: 'من',
    howTo: 'كيفاش تدير — خطوة بخطوة', bestWay: 'أحسن طريقة باش تتعلم', exercise: 'تمرينك العملي',
    prevLesson: 'الدرس السابق →', nextLesson: '← الدرس الموالي', nextLevel: 'المستوى الموالي', complete: '👑 كملت التكوين!',
    aiTip: '🤖 نصيحة الذكاء الاصطناعي', proTip: '💡 سر محترف', warning: '⚠️ تنبيه',
    dash: { navLabel: 'التقدم', title: 'لوحة التحكم ديالي', subtitle: 'تابع تقدمك في 11 مهارة', overallTitle: 'التقدم الإجمالي', lessonsCompleted: 'درس مكتمل', continueLearning: '← تابع التعلم', allComplete: '👑 كملت كل الدروس!', lessonsLabel: 'دروس', empty: 'ابدأ درساً باش تشوف تقدمك هنا.' }
  },
  en: {
    badge: 'Complete Course — 11 Skills + AI',
    title: 'Master Digital Skills & AI\nThat Generate Income in Algeria',
    subtitle: '11 complete courses + AI methods. Design, Social Media, Video, Web, SEO, Data, Copywriting, UI/UX, Automation, Vibe Coding, AI.',
    f1: '✓ Visual step-by-step methods', f2: '✓ Real exercises + client projects', f3: '✓ Free tools + AI integrated', f4: '✓ Algerian market rates in DZD',
    includesTitle: 'What you get',
    includes: ['11 complete courses — Beginner → Master','Visual lessons with screenshots','Practical exercises with real deliverables','Free tools + AI (ChatGPT, Midjourney, etc.)','Algerian market rates in DZD','Client communication scripts','Lifetime access — updates included'],
    already: 'Already purchased?', enter: 'Enter your access code to get started.', code: 'YOUR ACCESS CODE...',
    access: 'Access the Course →', loading: 'Verifying...', notBought: 'Haven\'t bought yet?', whatsapp: '💬 Order via WhatsApp',
    errEmpty: 'Please enter your access code.', errInvalid: 'Invalid code. Check your purchase.', errUsed: 'This code has already been used.',
    stats: [{ n: '100+', l: 'Visual lessons' }, { n: '4', l: 'Levels per skill' }, { n: '0 DZD', l: 'To get started' }],
    footer: 'DigitalSkills.dz — Professional Training Algeria 🇩🇿',
    aBadge: '🇩🇿 Digital Skills Academy — Algeria', aTitle: 'Learn It. Practice It.\nGet Paid.',
    aSubtitle: '11 skills + AI, beginner to master. Every lesson shows you exactly how to do it.',
    aFeatures: ['Visual step-by-step methods','Real exercises with AI','Free tools only','Algerian market rates'],
    aRec: '💡 Recommended: Social Media → Graphic Design → Video Editing → Web Dev → SEO → Data → Copywriting → UI/UX → Automation → Vibe Coding → AI',
    startLearning: 'Start Learning →', firstClient: 'First client', earning: 'Earning range', startWith: 'Start with',
    backSkills: '← Skills', goal: 'Goal', lessons: 'lessons', back: '← Back', lesson: 'Lesson', of: 'of',
    howTo: 'How To Do It — Step by Step', bestWay: 'The Best Way to Learn This', exercise: 'Your Practice Exercise',
    prevLesson: '← Previous Lesson', nextLesson: 'Next Lesson →', nextLevel: 'Next Level', complete: '👑 Track Complete!',
    aiTip: '🤖 AI Tip', proTip: '💡 Pro Secret', warning: '⚠️ Warning',
    dash: { navLabel: 'Progress', title: 'My Dashboard', subtitle: 'Track your progress across the 11 skills', overallTitle: 'Overall Progress', lessonsCompleted: 'lessons completed', continueLearning: 'Continue Learning →', allComplete: '👑 All lessons complete!', lessonsLabel: 'lessons', empty: 'Start a lesson to see your progress here.' }
  }
};

// ============================================================
// SKILLS — 11 COMPLETE COURSES WITH VISUAL STEPS & AI
// ============================================================
var SKILLS = [

// ============================================================
// SKILL 1: GRAPHIC DESIGN (COMPLET + IA)
// ============================================================
{
  id: 'design',
  icon: '🎨',
  color: '#7C3AED',
  accent: '#A78BFA',
  bg: 'linear-gradient(135deg, #0D0818 0%, #1A0A30 50%, #0D0818 100%)',
  bgImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  earning: '5,000 – 150,000 DZD',
  firstClient: { fr: '2–3 semaines', ar: '2–3 أسابيع', en: '2–3 weeks' },
  startTool: 'Canva (canva.com) + ChatGPT',
  title: { fr: 'Graphic Design', ar: 'التصميم الجرافيكي', en: 'Graphic Design' },
  subtitle: { fr: 'Communication Visuelle + IA', ar: 'التواصل البصري + الذكاء الاصطناعي', en: 'Visual Communication + AI' },
  tagline: { fr: 'Transformez vos idées en visuels qui vendent — avec ou sans IA', ar: 'حوّل أفكارك لتصاميم تبيع — بالذكاء الاصطناعي أو بلا', en: 'Turn ideas into visuals that sell — with or without AI' },
  aiTools: ['Midjourney', 'DALL-E 3', 'Canva AI', 'Adobe Firefly', 'Remove.bg'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Maîtriser Canva + les 4 règles CARP + générer des visuels avec IA', ar: 'إتقان Canva + قواعد CARP الأربعة + توليد تصاميم بالذكاء الاصطناعي', en: 'Master Canva + CARP rules + generate visuals with AI' },
      lessons: [
        {
          id: 'd-b-1',
          title: { fr: 'Canva + IA : Votre Premier Design Pro', ar: 'Canva + الذكاء الاصطناعي: أول تصميم احترافي', en: 'Canva + AI: Your First Pro Design' },
          image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/canva/step1-homepage.jpg',
              caption: { fr: 'Rendez-vous sur canva.com', ar: 'روح لـ canva.com', en: 'Go to canva.com' },
              detail: { fr: 'Créez un compte gratuit. La version Pro n\'est PAS nécessaire pour débuter.', ar: 'أنشئ حساب مجاني. الـ Pro مايش ضروري للبداية.', en: 'Create a free account. Pro version is NOT needed to start.' },
              hotspot: { x: 72, y: 8, label: 'S\'inscrire' },
              shortcuts: ['Ctrl+T : Nouvel onglet', 'canva.com dans la barre d\'adresse'],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/canva/step2-dashboard.jpg',
              caption: { fr: 'Cliquez sur "Créer un design"', ar: 'اضغط على "إنشاء تصميم"', en: 'Click "Create a design"' },
              detail: { fr: 'Choisissez "Post Instagram" (1080×1080px) — le format le plus demandé par les clients algériens.', ar: 'اختار "منشور Instagram" (1080×1080px) — أكثر صيغة مطلوبة من الزبائن الجزائريين.', en: 'Choose "Instagram Post" (1080×1080px) — the most requested format by Algerian clients.' },
              hotspot: { x: 75, y: 12, label: 'Créer un design' },
              shortcuts: ['Dimensions personnalisées: 1080 x 1080 px'],
              aiPrompt: null
            },
            {
              step: 3,
              image: 'images/lessons/canva/step3-ai-generate.jpg',
              caption: { fr: '🤖 Générez une image avec IA', ar: '🤖 ولّد صورة بالذكاء الاصطناعي', en: '🤖 Generate an image with AI' },
              detail: { fr: 'Cliquez sur "Apps" → "Magic Media" (IA intégrée). Écrivez: "Professional coffee shop logo, minimalist, warm colors, Algerian style". Ou utilisez ChatGPT pour générer des prompts optimisés.', ar: 'اضغط على "Apps" → "Magic Media" (ذكاء اصطناعي مدمج). اكتب: "Professional coffee shop logo, minimalist, warm colors, Algerian style". أو استخدم ChatGPT باش تولّد prompts محسّنة.', en: 'Click "Apps" → "Magic Media" (built-in AI). Type: "Professional coffee shop logo, minimalist, warm colors, Algerian style". Or use ChatGPT to generate optimized prompts.' },
              hotspot: { x: 15, y: 25, label: 'Apps' },
              shortcuts: ['Apps → Magic Media → Text to Image'],
              aiPrompt: { tool: 'ChatGPT / Midjourney', prompt: 'Generate 5 professional logo prompts for an Algerian coffee shop. Style: minimalist, warm colors, Arabic calligraphy influence. Format: Midjourney v6 optimized.', result: '5 prompts prêts à copier' }
            },
            {
              step: 4,
              image: 'images/lessons/canva/step4-carp-rules.jpg',
              caption: { fr: 'Appliquez les 4 règles CARP', ar: 'طبق قواعد CARP الأربعة', en: 'Apply the 4 CARP rules' },
              detail: { fr: 'CONTRASTE: Titre en 48px gras, texte en 16px régulier. ALIGNEMENT: Tout aligné à gauche ou centré (pas les deux!). RÉPÉTITION: Même police pour tous les titres. PROXIMITÉ: Le prix près du produit, pas en bas de page.', ar: 'التباين: العنوان 48px عريض، النص 16px عادي. المحاذاة: كلشي على اليسار أو في الوسط (ماشي الاثنين!). التكرار: نفس الخط لكل العناوين. القرب: السعر جنب المنتج، مشي في أسفل الصفحة.', en: 'CONTRAST: Title at 48px bold, text at 16px regular. ALIGNMENT: Everything left-aligned or centered (not both!). REPETITION: Same font for all headings. PROXIMITY: Price near the product, not at the bottom.' },
              hotspot: { x: 50, y: 50, label: 'Vérifier CARP' },
              shortcuts: ['Ctrl+A : Sélectionner tout', 'C : Centrer', 'L : Aligner gauche'],
              aiPrompt: null
            },
            {
              step: 5,
              image: 'images/lessons/canva/step5-export.jpg',
              caption: { fr: 'Exportez en PNG HD', ar: 'صدّر بـ PNG عالي الجودة', en: 'Export as HD PNG' },
              detail: { fr: 'Partager → Télécharger → PNG → Cochez "Fond transparent" si besoin. Pour l\'impression: PDF Print. Secret pro: Exportez aussi en MP4 (4s) pour les stories animées — facturez 2x plus !', ar: 'مشاركة → تحميل → PNG → علّم "خلفية شفافة" إذا لزم. للطباعة: PDF Print. سر محترف: صدّر كمان بـ MP4 (4 ثواني) للستوريز المتحركة — فاتورة ضعف!', en: 'Share → Download → PNG → Check "Transparent background" if needed. For print: PDF Print. Pro secret: Also export as MP4 (4s) for animated stories — charge 2x more!' },
              hotspot: { x: 85, y: 8, label: 'Partager' },
              shortcuts: ['Ctrl+Shift+E : Export rapide'],
              aiPrompt: null
            }
          ],
          method: { fr: 'Ouvrez Canva maintenant et créez un post Instagram pour un restaurant algérien fictif. Utilisez Magic Media pour générer l\'image principale.', ar: 'افتح Canva الآن وأنشئ منشور Instagram لمطعم جزائري وهمي. استخدم Magic Media باش تولّد الصورة الرئيسية.', en: 'Open Canva now and create an Instagram post for a fictional Algerian restaurant. Use Magic Media to generate the main image.' },
          exercise: { fr: 'Créez un post Instagram complet avec: (1) Image générée par IA, (2) Nom du restaurant en arabe/français, (3) Prix d\'un plat en DZD, (4) Horaires d\'ouverture. Exportez en PNG + MP4 4s.', ar: 'أنشئ منشور Instagram كامل يحتوي على: (1) صورة مولدة بالذكاء الاصطناعي، (2) اسم المطعم بالعربية/الفرنسية، (3) سعر طبق بالدينار، (4) أوقات الفتح. صدّر بـ PNG + MP4 4 ثواني.', en: 'Create a complete Instagram post with: (1) AI-generated image, (2) Restaurant name in Arabic/French, (3) Dish price in DZD, (4) Opening hours. Export as PNG + MP4 4s.' },
          tip: { fr: '💡 Secret Pro: Les clients algériens paient 3x plus pour des designs avec animation (MP4/Canva Animation). Un post statique = 500 DZD, un Reel animé = 1,500 DZD.', ar: '💡 سر محترف: الزبائن الجزائريين يدفعوا 3 مرات أكثر للتصاميم المتحركة (MP4/Canva Animation). منشور ثابت = 500 دج، ريل متحرك = 1,500 دج.', en: '💡 Pro Secret: Algerian clients pay 3x more for animated designs (MP4/Canva Animation). Static post = 500 DZD, animated Reel = 1,500 DZD.' }
        },
        {
          id: 'd-b-2',
          title: { fr: 'Photopea : Retouche Pro Gratuite', ar: 'Photopea: تعديل احترافي مجاني', en: 'Photopea: Free Pro Retouching' },
          image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
          layout: 'left',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/photopea/step1-interface.jpg',
              caption: { fr: 'Ouvrez photopea.com', ar: 'افتح photopea.com', en: 'Open photopea.com' },
              detail: { fr: 'Interface 100% identique à Photoshop. Outils à gauche, calques à droite. Aucune installation nécessaire.', ar: 'واجهة 100% نفس Photoshop. الأدوات على اليسار، الطبقات على اليمين. بلا تنصيب.', en: 'Interface 100% identical to Photoshop. Tools on the left, layers on the right. No installation needed.' },
              hotspot: { x: 50, y: 50, label: 'Interface' },
              shortcuts: [],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/photopea/step2-remove-bg.jpg',
              caption: { fr: 'Supprimer l\'arrière-plan', ar: 'إزالة الخلفية', en: 'Remove background' },
              detail: { fr: 'Méthode 1 (rapide): remove.bg (gratuit). Méthode 2 (pro): Outil Baguette Magique (W) → Sélectionner le fond → Suppr. Méthode 3 (IA): Apps → Remove Background AI.', ar: 'طريقة 1 (سريعة): remove.bg (مجاني). طريقة 2 (احترافية): أداة العصا السحرية (W) → اختار الخلفية → Suppr. طريقة 3 (ذكاء اصطناعي): Apps → Remove Background AI.', en: 'Method 1 (fast): remove.bg (free). Method 2 (pro): Magic Wand tool (W) → Select background → Delete. Method 3 (AI): Apps → Remove Background AI.' },
              hotspot: { x: 5, y: 20, label: 'Baguette W' },
              shortcuts: ['W : Baguette Magique', 'Ctrl+Shift+I : Inverser sélection', 'Suppr : Supprimer'],
              aiPrompt: { tool: 'remove.bg', prompt: 'Upload product photo → Auto-remove background → Download PNG', result: 'Fond transparent en 5s' }
            },
            {
              step: 3,
              image: 'images/lessons/photopea/step3-layers.jpg',
              caption: { fr: 'Maîtriser les Calques (Layers)', ar: 'إتقان الطبقات (Layers)', en: 'Master Layers' },
              detail: { fr: 'Chaque élément = un calque séparé. Calque de texte = modifiable. Calque d\'image = transformable. Calque de réglage = modifie tout sans toucher l\'original. Secret: Nommez vos calques (double-clic) pour retrouver facilement.', ar: 'كل عنصر = طبقة منفصلة. طبقة النص = قابلة للتعديل. طبقة الصورة = قابلة للتحويل. طبقة التعديل = تعدل كلشي بلا ما تلمس الأصل. سر: سمّي طبقاتك (double-clic) باش تلقاهم بسهولة.', en: 'Every element = separate layer. Text layer = editable. Image layer = transformable. Adjustment layer = modifies everything without touching original. Secret: Name your layers (double-click) to find them easily.' },
              hotspot: { x: 85, y: 30, label: 'Calques' },
              shortcuts: ['Ctrl+J : Dupliquer calque', 'Ctrl+G : Grouper', 'Ctrl+E : Fusionner'],
              aiPrompt: null
            },
            {
              step: 4,
              image: 'images/lessons/photopea/step4-export.jpg',
              caption: { fr: 'Export PSD + PNG', ar: 'تصدير PSD + PNG', en: 'Export PSD + PNG' },
              detail: { fr: 'Fichier → Enregistrer sous PSD (pour modification future). Fichier → Exporter → PNG (fond transparent) pour le client. Gardez TOUJOURS le PSD — les clients demandent des modifications.', ar: 'ملف → حفظ بصيغة PSD (للتعديل المستقبلي). ملف → تصدير → PNG (خلفية شفافة) للزبون. احتفظ دايماً بـ PSD — الزبائن يطلبوا تعديلات.', en: 'File → Save as PSD (for future edits). File → Export → PNG (transparent) for client. ALWAYS keep the PSD — clients ask for revisions.' },
              hotspot: { x: 10, y: 5, label: 'Fichier' },
              shortcuts: ['Ctrl+S : Enregistrer PSD', 'Ctrl+Shift+S : Enregistrer sous'],
              aiPrompt: null
            }
          ],
          method: { fr: 'Retouchez une photo de produit: supprimez l\'arrière-plan, ajustez la luminosité, ajoutez une ombre portée réaliste. Exportez PSD + PNG.', ar: 'عدّل صورة منتج: أزل الخلفية، ظبط الإضاءة، زيد ظل واقعي. صدّر PSD + PNG.', en: 'Retouch a product photo: remove background, adjust brightness, add realistic drop shadow. Export PSD + PNG.' },
          exercise: { fr: 'Prenez une photo de votre téléphone. (1) Supprimez l\'arrière-plan avec remove.bg, (2) Ouvrez dans Photopea, (3) Ajoutez une ombre portée, (4) Changez la couleur de fond en dégradé, (5) Exportez PSD + PNG.', ar: 'خد صورة من تليفونك. (1) أزل الخلفية بـ remove.bg، (2) افتحها ف Photopea، (3) زيد ظل مسقط، (4) غيّر لون الخلفية بتدرج، (5) صدّر PSD + PNG.', en: 'Take a photo with your phone. (1) Remove background with remove.bg, (2) Open in Photopea, (3) Add drop shadow, (4) Change background to gradient, (5) Export PSD + PNG.' },
          tip: { fr: '🤖 Astuce IA: Utilisez "Generative Fill" (Photopea Pro) ou DALL-E pour générer des arrière-plans de produits professionnels. Un client paie 5,000 DZD pour 10 photos de produits retouchées.', ar: '🤖 نصيحة الذكاء الاصطناعي: استخدم "Generative Fill" (Photopea Pro) أو DALL-E باش تولّد خلفيات منتجات احترافية. زبون يدفع 5,000 دج مقابل 10 صور منتجات معدّلة.', en: '🤖 AI Tip: Use "Generative Fill" (Photopea Pro) or DALL-E to generate professional product backgrounds. A client pays 5,000 DZD for 10 retouched product photos.' }
        }
      ]
    },
    {
      name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
      badge: '⚡',
      duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
      goal: { fr: 'Designs complexes + Branding complet + Mockups 3D avec IA', ar: 'تصاميم معقدة + هوية بصرية كاملة + Mockups 3D بالذكاء الاصطناعي', en: 'Complex designs + Full branding + 3D Mockups with AI' },
      lessons: [
        {
          id: 'd-i-1',
          title: { fr: 'Charte Graphique Complète avec IA', ar: 'هوية بصرية كاملة بالذكاء الاصطناعي', en: 'Complete Brand Identity with AI' },
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/branding/step1-brief.jpg',
              caption: { fr: 'Le Brief Client structuré', ar: 'الموجز الزبون المهيكل', en: 'Structured Client Brief' },
              detail: { fr: 'Utilisez ChatGPT pour générer un brief professionnel. Prompt: "Crée un brief design pour un restaurant algérien traditionnel à Oran. Inclus: cible, valeurs, concurrents, 3 mots-clés visuels."', ar: 'استخدم ChatGPT باش تولّد موجز احترافي. Prompt: "أنشئ موجز تصميم لمطعم جزائري تقليدي في وهران. يشمل: الجمهور المستهدف، القيم، المنافسين، 3 كلمات مفتاحية بصرية."', en: 'Use ChatGPT to generate a professional brief. Prompt: "Create a design brief for a traditional Algerian restaurant in Oran. Include: target audience, values, competitors, 3 visual keywords."' },
              hotspot: { x: 50, y: 50, label: 'Brief' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Crée un brief design complet pour [TYPE BUSINESS] à [VILLE]. Structure: 1. Contexte 2. Cible (âge, revenus, habitudes) 3. Valeurs 4. 3 mots-clés visuels 5. 3 concurrents 6. Budget indicatif', result: 'Brief prêt en 2 minutes' }
            },
            {
              step: 2,
              image: 'images/lessons/branding/step2-logo-ai.jpg',
              caption: { fr: '🤖 Générer 20 logos avec Midjourney', ar: '🤖 ولّد 20 شعار بـ Midjourney', en: '🤖 Generate 20 logos with Midjourney' },
              detail: { fr: 'Midjourney prompt: "Minimalist logo for Algerian coffee shop, warm earth tones, Arabic geometric patterns, vector style, white background --v 6 --s 250". Générez 20 variantes, sélectionnez 3, affinez.', ar: 'Midjourney prompt: "Minimalist logo for Algerian coffee shop, warm earth tones, Arabic geometric patterns, vector style, white background --v 6 --s 250". ولّد 20 نسخة، اختار 3، حسّنهم.', en: 'Midjourney prompt: "Minimalist logo for Algerian coffee shop, warm earth tones, Arabic geometric patterns, vector style, white background --v 6 --s 250". Generate 20 variants, select 3, refine.' },
              hotspot: { x: 50, y: 40, label: 'Midjourney' },
              shortcuts: [],
              aiPrompt: { tool: 'Midjourney', prompt: 'Minimalist [business type] logo, [style] colors, [cultural element] influence, vector style, white background --v 6 --s 250 --no text', result: '20 logos uniques' }
            },
            {
              step: 3,
              image: 'images/lessons/branding/step3-mockup.jpg',
              caption: { fr: 'Mockups 3D réalistes avec IA', ar: 'Mockups 3D واقعية بالذكاء الاصطناعي', en: 'Realistic 3D Mockups with AI' },
              detail: { fr: 'Utilisez Placeit.net (gratuit) ou Mockups-Design.com. Pour les mockups 3D avancés: DALL-E prompt "3D mockup of [logo] on coffee cup, realistic lighting, Algerian café background, 4K". Facturez 10,000 DZD pour une charte complète avec mockups.', ar: 'استخدم Placeit.net (مجاني) أو Mockups-Design.com. للـ mockups 3D المتقدمة: DALL-E prompt "3D mockup of [logo] on coffee cup, realistic lighting, Algerian café background, 4K". فاتورة 10,000 دج مقابل هوية كاملة مع mockups.', en: 'Use Placeit.net (free) or Mockups-Design.com. For advanced 3D mockups: DALL-E prompt "3D mockup of [logo] on coffee cup, realistic lighting, Algerian café background, 4K". Charge 10,000 DZD for complete identity with mockups.' },
              hotspot: { x: 50, y: 50, label: 'Mockup' },
              shortcuts: [],
              aiPrompt: { tool: 'DALL-E 3 / Placeit', prompt: '3D mockup of [your design] on [product], realistic lighting, [location] background, professional photography style, 4K', result: 'Mockup pro en 30s' }
            }
          ],
          method: { fr: 'Créez une charte graphique complète pour un client fictif: logo, couleurs, typographie, mockups carte de visite + enseigne + réseaux sociaux.', ar: 'أنشئ هوية بصرية كاملة لزبون وهمي: شعار، ألوان، خطوط، mockups بطاقة أعمال + لوحة + سوشيال ميديا.', en: 'Create a complete brand identity for a fictional client: logo, colors, typography, mockups business card + signage + social media.' },
          exercise: { fr: 'Charte complète pour "Café El Medina" (Oran): (1) Brief ChatGPT, (2) 20 logos Midjourney, (3) Sélection + vectorisation, (4) Palette de couleurs, (5) Mockups 3D (carte, tasse, enseigne), (6) Templates réseaux sociaux. Livrable: PDF 10 pages + fichiers source.', ar: 'هوية كاملة لـ "Café El Medina" (وهران): (1) موجز ChatGPT، (2) 20 شعار Midjourney، (3) اختيار + تحويل لvector، (4) لوحة ألوان، (5) Mockups 3D (بطاقة، كاس، لوحة)، (6) قوالب سوشيال ميديا. تسليم: PDF 10 صفحات + ملفات المصدر.', en: 'Complete identity for "Café El Medina" (Oran): (1) ChatGPT brief, (2) 20 Midjourney logos, (3) Selection + vectorization, (4) Color palette, (5) 3D Mockups (card, cup, signage), (6) Social media templates. Deliverable: 10-page PDF + source files.' },
          tip: { fr: '💰 Secret Pro: Une charte graphique complète se vend entre 15,000–50,000 DZD en Algérie. Avec les mockups 3D IA, vous justifiez le prix haut. Les clients paient pour VOIR le résultat avant d\'acheter.', ar: '💰 سر محترف: الهوية البصرية الكاملة تتباع بين 15,000–50,000 دج في الجزائر. بالـ mockups 3D بالذكاء الاصطناعي، تبرر السعر العالي. الزبائن يدفعوا باش يشوفوا النتيجة قبل الشراء.', en: '💰 Pro Secret: A complete brand identity sells for 15,000–50,000 DZD in Algeria. With AI 3D mockups, you justify the high price. Clients pay to SEE the result before buying.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 2: SOCIAL MEDIA MANAGEMENT + IA
// ============================================================
{
  id: 'social',
  icon: '📱',
  color: '#2563EB',
  accent: '#60A5FA',
  bg: 'linear-gradient(135deg, #0A1628 0%, #0D1B3E 50%, #0A1628 100%)',
  bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
  earning: '10,000 – 200,000 DZD/mois',
  firstClient: { fr: '1–2 semaines', ar: '1–2 أسابيع', en: '1–2 weeks' },
  startTool: 'Meta Business Suite + ChatGPT + Canva',
  title: { fr: 'Social Media Management', ar: 'إدارة وسائل التواصل', en: 'Social Media Management' },
  subtitle: { fr: 'Stratégie + Contenu + IA', ar: 'استراتيجية + محتوى + ذكاء اصطناعي', en: 'Strategy + Content + AI' },
  tagline: { fr: 'Gérez les réseaux sociaux des entreprises algériennes avec l\'IA', ar: 'دير سوشيال ميديا لمؤسسات جزائرية بالذكاء الاصطناعي', en: 'Manage social media for Algerian businesses with AI' },
  aiTools: ['ChatGPT', 'Canva AI', 'Meta AI', 'Later', 'Metricool'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
      goal: { fr: 'Créer un calendrier éditorial + générer 30 posts avec IA', ar: 'إنشاء تقويم تحريري + توليد 30 منشور بالذكاء الاصطناعي', en: 'Create editorial calendar + generate 30 posts with AI' },
      lessons: [
        {
          id: 's-b-1',
          title: { fr: 'Calendrier Éditorial IA : 30 Jours en 2h', ar: 'تقويم تحريري بالذكاء الاصطناعي: 30 يوم فـ 2 ساعات', en: 'AI Editorial Calendar: 30 Days in 2 Hours' },
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/social/step1-chatgpt-calendar.jpg',
              caption: { fr: 'Générez le calendrier avec ChatGPT', ar: 'ولّد التقويم بـ ChatGPT', en: 'Generate calendar with ChatGPT' },
              detail: { fr: 'Prompt: "Crée un calendrier éditorial Instagram pour un restaurant algérien à Alger. 30 jours. Mix: 40% produit, 30% behind-the-scenes, 20% client, 10% promo. Inclus captions avec hashtags algériens. Format: table JSON."', ar: 'Prompt: "أنشئ تقويم تحريري Instagram لمطعم جزائري في الجزائر العاصمة. 30 يوم. مزيج: 40% منتج، 30% خلف الكواليس، 20% زبون، 10% عروض. يشمل captions مع hashtags جزائرية. صيغة: table JSON."', en: 'Prompt: "Create an Instagram editorial calendar for an Algerian restaurant in Algiers. 30 days. Mix: 40% product, 30% behind-the-scenes, 20% client, 10% promo. Include captions with Algerian hashtags. Format: table JSON."' },
              hotspot: { x: 50, y: 50, label: 'ChatGPT' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Crée un calendrier éditorial 30 jours pour [TYPE BUSINESS] à [VILLE]. Structure: Date | Type de post | Caption (150 mots) | Hashtags (10) | Heure de publication. Mix: 40% produit, 30% BTS, 20% client, 10% promo. Langue: fr+ar.', result: '30 posts prêts à programmer' }
            },
            {
              step: 2,
              image: 'images/lessons/social/step2-canva-batch.jpg',
              caption: { fr: 'Créer 30 visuels en batch avec Canva', ar: 'أنشئ 30 تصميم دفعة واحدة بـ Canva', en: 'Create 30 visuals in batch with Canva' },
              detail: { fr: 'Canva Pro → "Bulk Create": Uploadez un CSV (date, type, texte) → Canva génère automatiquement 30 designs. Ou utilisez Canva AI: "Magic Design" → décrivez le post → IA génère 4 variantes.', ar: 'Canva Pro → "Bulk Create": حمّل CSV (تاريخ، نوع، نص) → Canva تولّد تلقائياً 30 تصميم. أو استخدم Canva AI: "Magic Design" → صف المنشور → الذكاء الاصطناعي يولّد 4 نسخ.', en: 'Canva Pro → "Bulk Create": Upload CSV (date, type, text) → Canva auto-generates 30 designs. Or use Canva AI: "Magic Design" → describe the post → AI generates 4 variants.' },
              hotspot: { x: 50, y: 50, label: 'Bulk Create' },
              shortcuts: ['Apps → Bulk Create', 'Magic Design'],
              aiPrompt: { tool: 'Canva AI', prompt: 'Magic Design: "Instagram post for Algerian couscous Friday special, warm colors, traditional patterns"', result: '4 designs en 10s' }
            },
            {
              step: 3,
              image: 'images/lessons/social/step3-schedule.jpg',
              caption: { fr: 'Programmer avec Meta Business Suite', ar: 'برمج النشر بـ Meta Business Suite', en: 'Schedule with Meta Business Suite' },
              detail: { fr: 'Gratuit et illimité pour Facebook + Instagram. Créateur Studio → Planifier → Uploadez le visuel + caption + hashtags → Choisissez date/heure. Meilleures heures en Algérie: 12h-14h, 19h-22h.', ar: 'مجاني وغير محدود لفيسبوك + انستغرام. Creator Studio → جدولة → حمّل التصميم + caption + hashtags → اختار التاريخ/الوقت. أفضل الأوقات في الجزائر: 12h-14h، 19h-22h.', en: 'Free and unlimited for Facebook + Instagram. Creator Studio → Schedule → Upload visual + caption + hashtags → Choose date/time. Best times in Algeria: 12pm-2pm, 7pm-10pm.' },
              hotspot: { x: 50, y: 50, label: 'Planifier' },
              shortcuts: [],
              aiPrompt: null
            }
          ],
          method: { fr: 'Créez un calendrier complet pour un client fictif: 30 posts programmés avec ChatGPT + Canva + Meta Business Suite.', ar: 'أنشئ تقويم كامل لزبون وهمي: 30 منشور مبرمج بـ ChatGPT + Canva + Meta Business Suite.', en: 'Create a complete calendar for a fictional client: 30 scheduled posts with ChatGPT + Canva + Meta Business Suite.' },
          exercise: { fr: 'Pour "Boulangerie Amoud" (Constantine): (1) ChatGPT: calendrier 30 jours, (2) Canva: 30 visuels avec templates, (3) Meta: programmer les 30 posts, (4) Rapport: heures optimales + hashtags performants.', ar: 'لـ "Boulangerie Amoud" (قسنطينة): (1) ChatGPT: تقويم 30 يوم، (2) Canva: 30 تصميم بقوالب، (3) Meta: برمج الـ 30 منشور، (4) تقرير: الأوقات المثلى + hashtags الأكثر فعالية.', en: 'For "Boulangerie Amoud" (Constantine): (1) ChatGPT: 30-day calendar, (2) Canva: 30 visuals with templates, (3) Meta: schedule all 30 posts, (4) Report: optimal hours + top hashtags.' },
          tip: { fr: '💰 Secret Pro: Un community manager IA facture 30,000–80,000 DZD/mois par client en Algérie. Avec ChatGPT + Canva, vous gérez 5 clients seul (150,000–400,000 DZD/mois).', ar: '💰 سر محترف: مدير مجتمع بالذكاء الاصطناعي يفاتورة 30,000–80,000 دج/شهر لكل زبون في الجزائر. بـ ChatGPT + Canva، تقدر تدير 5 زبائن وحدك (150,000–400,000 دج/شهر).', en: '💰 Pro Secret: An AI community manager charges 30,000–80,000 DZD/month per client in Algeria. With ChatGPT + Canva, you can manage 5 clients alone (150,000–400,000 DZD/month).' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 3: VIDEO EDITING + IA
// ============================================================
{
  id: 'video',
  icon: '🎬',
  color: '#DC2626',
  accent: '#F87171',
  bg: 'linear-gradient(135deg, #1A0505 0%, #2D0A0A 50%, #1A0505 100%)',
  bgImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
  earning: '15,000 – 300,000 DZD/mois',
  firstClient: { fr: '2–3 semaines', ar: '2–3 أسابيع', en: '2–3 weeks' },
  startTool: 'CapCut + Descript + Runway ML',
  title: { fr: 'Video Editing', ar: 'المونتاج', en: 'Video Editing' },
  subtitle: { fr: 'Montage Pro + IA Générative', ar: 'مونتاج احترافي + ذكاء اصطناعي توليدي', en: 'Pro Editing + Generative AI' },
  tagline: { fr: 'Créez des vidéos virales pour les marques algériennes avec l\'IA', ar: 'أنشئ فيديوهات فيروسية للماركات الجزائرية بالذكاء الاصطناعي', en: 'Create viral videos for Algerian brands with AI' },
  aiTools: ['CapCut AI', 'Descript', 'Runway ML', 'Pika Labs', 'HeyGen'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Monter une vidéo Reels/TikTok avec CapCut + générer des transitions IA', ar: 'تعديل فيديو Reels/TikTok بـ CapCut + توليد انتقالات بالذكاء الاصطناعي', en: 'Edit a Reels/TikTok video with CapCut + generate AI transitions' },
      lessons: [
        {
          id: 'v-b-1',
          title: { fr: 'CapCut Pro + IA : Montage Express', ar: 'CapCut Pro + الذكاء الاصطناعي: مونتاج سريع', en: 'CapCut Pro + AI: Express Editing' },
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/video/step1-capcut-import.jpg',
              caption: { fr: 'Importer et couper automatiquement', ar: 'استيراد وقص تلقائي', en: 'Import and auto-cut' },
              detail: { fr: 'CapCut PC → "Auto Cut" détecte les silences et coupe automatiquement. Un vlog de 10 min devient un Reels de 60s en 2 clics. Secret: Gardez les "ums" et "euh" — ça rend authentique pour le marché algérien.', ar: 'CapCut PC → "Auto Cut" يكشف الصمت ويقص تلقائياً. فيديو مدته 10 دقايق يولي Reels 60 ثانية بـ 2 كليك. سر: خلّي "ems" و "euh" — يعطو مصداقية للسوق الجزائري.', en: 'CapCut PC → "Auto Cut" detects silences and auto-cuts. A 10-min vlog becomes a 60s Reels in 2 clicks. Secret: Keep the "ums" and "uhs" — it feels authentic for the Algerian market.' },
              hotspot: { x: 50, y: 50, label: 'Auto Cut' },
              shortcuts: ['Ctrl+I : Importer', 'Auto Cut : Détection silences'],
              aiPrompt: { tool: 'CapCut AI', prompt: 'Auto Cut: Upload video → AI detects best moments → Auto-remove silences → Export 9:16', result: 'Reels prêt en 30s' }
            },
            {
              step: 2,
              image: 'images/lessons/video/step2-ai-subtitles.jpg',
              caption: { fr: '🤖 Sous-titres auto en darija', ar: '🤖 ترجمة تلقائية بالدارجة', en: '🤖 Auto subtitles in darija' },
              detail: { fr: 'CapCut → "Auto Captions" → Choisissez "Arabic" (fonctionne pour darija algérienne aussi!). Personnalisez: police bold, couleur jaune, contour noir. Les vidéos sous-titrées ont 80% plus de rétention.', ar: 'CapCut → "Auto Captions" → اختار "Arabic" (تخدم للدارجة الجزائرية كمان!). خصّص: خط عريض، لون أصفر، حاشية سوداء. الفيديوهات المترجمة عندها 80% احتفاظ أكثر.', en: 'CapCut → "Auto Captions" → Choose "Arabic" (works for Algerian darija too!). Customize: bold font, yellow color, black outline. Subtitled videos have 80% more retention.' },
              hotspot: { x: 50, y: 50, label: 'Auto Captions' },
              shortcuts: ['Text → Auto Captions → Arabic'],
              aiPrompt: null
            },
            {
              step: 3,
              image: 'images/lessons/video/step3-runway.jpg',
              caption: { fr: 'Transitions IA avec Runway ML', ar: 'انتقالات بالذكاء الاصطناعي بـ Runway ML', en: 'AI Transitions with Runway ML' },
              detail: { fr: 'Runway ML → "Gen-2" : Uploadez 2 clips → L\'IA génère une transition cinématographique entre eux. Parfait pour les pubs de restaurants, immobilier, mariages. Coût: ~$0.20/transition. Facturez 2,000 DZD/transition au client.', ar: 'Runway ML → "Gen-2": حمّل مقطعين → الذكاء الاصطناعي يولّد انتقال سينمائي بينهم. مثالي لإعلانات المطاعم، العقارات، الأعراس. التكلفة: ~$0.20/انتقال. فاتورة 2,000 دج/انتقال للزبون.', en: 'Runway ML → "Gen-2": Upload 2 clips → AI generates a cinematic transition between them. Perfect for restaurant ads, real estate, weddings. Cost: ~$0.20/transition. Charge client 2,000 DZD/transition.' },
              hotspot: { x: 50, y: 50, label: 'Gen-2' },
              shortcuts: [],
              aiPrompt: { tool: 'Runway ML Gen-2', prompt: 'Upload clip A + clip B → Select "Cinematic transition" → AI generates seamless morph', result: 'Transition pro en 1 min' }
            }
          ],
          method: { fr: 'Montez un Reels de 60s pour un restaurant algérien: import, auto-cut, sous-titres darija, transition IA, musique tendance.', ar: 'عدّل Reels 60 ثانية لمطعم جزائري: استيراد، قص تلقائي، ترجمة بالدارجة، انتقال بالذكاء الاصطناعي، موسيقى ترند.', en: 'Edit a 60s Reels for an Algerian restaurant: import, auto-cut, darija subtitles, AI transition, trending music.' },
          exercise: { fr: 'Reels pour "Pâtisserie El Amal" (Annaba): (1) Filmez 5 plans (produits, chef, clients), (2) CapCut: auto-cut + sous-titres, (3) Runway: transition entre 2 plans, (4) Musique tendance TikTok Algérie, (5) Export 9:16 + 4:5.', ar: 'Reels لـ "Pâtisserie El Amal" (عنابة): (1) صوّر 5 لقطات (منتجات، شيف، زبائن)، (2) CapCut: قص تلقائي + ترجمة، (3) Runway: انتقال بين لقطتين، (4) موسيقى ترند TikTok الجزائر، (5) تصدير 9:16 + 4:5.', en: 'Reels for "Pâtisserie El Amal" (Annaba): (1) Film 5 shots (products, chef, clients), (2) CapCut: auto-cut + subtitles, (3) Runway: transition between 2 shots, (4) Trending TikTok Algeria music, (5) Export 9:16 + 4:5.' },
          tip: { fr: '🤖 Astuce IA: HeyGen permet de créer un avatar virtuel qui parle darija. Parfait pour les pubs sans filmer. Un client paie 20,000 DZD pour 5 vidéos avatar.', ar: '🤖 نصيحة الذكاء الاصطناعي: HeyGen يسمح بإنشاء avatar افتراضي يتكلم الدارجة. مثالي للإعلانات بلا تصوير. زبون يدفع 20,000 دج مقابل 5 فيديوهات avatar.', en: '🤖 AI Tip: HeyGen lets you create a virtual avatar that speaks darija. Perfect for ads without filming. A client pays 20,000 DZD for 5 avatar videos.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 4: WEB DEVELOPMENT + IA (Vibe Coding)
// ============================================================
{
  id: 'web',
  icon: '🌐',
  color: '#EA580C',
  accent: '#FB923C',
  bg: 'linear-gradient(135deg, #1A0F05 0%, #2D1A0A 50%, #1A0F05 100%)',
  bgImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
  earning: '30,000 – 500,000 DZD/projet',
  firstClient: { fr: '3–4 semaines', ar: '3–4 أسابيع', en: '3–4 weeks' },
  startTool: 'Cursor.sh + Vercel + ChatGPT',
  title: { fr: 'Web Development', ar: 'تطوير الويب', en: 'Web Development' },
  subtitle: { fr: 'Vibe Coding + Sites IA', ar: 'برمجة بالتوجه + مواقع بالذكاء الاصطناعي', en: 'Vibe Coding + AI Sites' },
  tagline: { fr: 'Codez des sites web professionnels sans écrire de code — avec l\'IA', ar: 'برمج مواقع احترافية بلا كتابة كود — بالذكاء الاصطناعي', en: 'Build professional websites without writing code — with AI' },
  aiTools: ['Cursor.sh', 'v0.dev', 'Claude', 'Replit', 'Vercel AI'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Créer un site vitrine complet avec Cursor.sh + le déployer gratuitement', ar: 'إنشاء موقع تعريفي كامل بـ Cursor.sh + نشره مجاناً', en: 'Create a complete showcase site with Cursor.sh + deploy for free' },
      lessons: [
        {
          id: 'w-b-1',
          title: { fr: 'Vibe Coding : Votre Premier Site en 1h', ar: 'برمجة بالتوجه: أول موقع فـ 1 ساعة', en: 'Vibe Coding: Your First Site in 1 Hour' },
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/web/step1-cursor-install.jpg',
              caption: { fr: 'Installez Cursor.sh (VS Code + IA)', ar: 'نصّب Cursor.sh (VS Code + ذكاء اصطناعي)', en: 'Install Cursor.sh (VS Code + AI)' },
              detail: { fr: 'Cursor.sh = VS Code avec Claude/GPT-4 intégré. Téléchargez sur cursor.com. C\'est gratuit. Ouvrez un nouveau fichier → Ctrl+K → Décrivez ce que vous voulez → L\'IA écrit le code.', ar: 'Cursor.sh = VS Code مع Claude/GPT-4 مدمج. حمّله من cursor.com. مجاني. افتح ملف جديد → Ctrl+K → صف اللي تبغي → الذكاء الاصطناعي يكتب الكود.', en: 'Cursor.sh = VS Code with Claude/GPT-4 built-in. Download from cursor.com. It\'s free. Open new file → Ctrl+K → Describe what you want → AI writes the code.' },
              hotspot: { x: 50, y: 50, label: 'Cursor' },
              shortcuts: ['Ctrl+K : AI Chat', 'Ctrl+L : AI Edit', 'Tab : Accept suggestion'],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/web/step2-vibe-prompt.jpg',
              caption: { fr: '🤖 Prompt : "Crée un site restaurant algérien"', ar: '🤖 Prompt: "أنشئ موقع مطعم جزائري"', en: '🤖 Prompt: "Create an Algerian restaurant website"' },
              detail: { fr: 'Dans Cursor: Ctrl+K → Tapez: "Crée un site vitrine responsive pour un restaurant algérien à Oran. Sections: Hero avec image, Menu avec prix en DZD, Galerie, Contact avec WhatsApp, Footer. Style: moderne, couleurs chaudes, typographie élégante." → Entrée → L\'IA génère HTML + CSS + JS complet.', ar: 'ف Cursor: Ctrl+K → اكتب: "أنشئ موقع تعريفي responsive لمطعم جزائري في وهران. أقسام: Hero بصورة، Menu بأسعار بالدينار، معرض، Contact بـ WhatsApp، Footer. ستايل: عصري، ألوان دافئة، طباعة أنيقة." → Entrée → الذكاء الاصطناعي يولّد HTML + CSS + JS كامل.', en: 'In Cursor: Ctrl+K → Type: "Create a responsive showcase site for an Algerian restaurant in Oran. Sections: Hero with image, Menu with prices in DZD, Gallery, Contact with WhatsApp, Footer. Style: modern, warm colors, elegant typography." → Enter → AI generates complete HTML + CSS + JS.' },
              hotspot: { x: 50, y: 50, label: 'Ctrl+K' },
              shortcuts: ['Ctrl+K : Ouvrir AI Chat', 'Ctrl+Entrée : Envoyer prompt'],
              aiPrompt: { tool: 'Cursor.sh', prompt: 'Crée un site vitrine responsive pour [TYPE BUSINESS] à [VILLE]. Sections: Hero, Services/Menu, Galerie, Témoignages, Contact (WhatsApp), Footer. Style: [description]. Langue: fr+ar. Responsive mobile.', result: 'Site complet en 2-5 min' }
            },
            {
              step: 3,
              image: 'images/lessons/web/step3-vercel-deploy.jpg',
              caption: { fr: 'Déployer gratuitement sur Vercel', ar: 'انشر مجاناً على Vercel', en: 'Deploy for free on Vercel' },
              detail: { fr: 'Vercel.com → Connectez GitHub → Uploadez votre dossier → Déploiement auto en 30s. URL gratuite: monsite.vercel.app. Custom domain: 3,000 DZD/an (chez Hostinger.dz). Secret: Vercel est gratuit et illimité pour les sites statiques.', ar: 'Vercel.com → ربط GitHub → حمّل مجلدك → نشر تلقائي فـ 30 ثانية. رابط مجاني: monsite.vercel.app. دومين خاص: 3,000 دج/سنة (عند Hostinger.dz). سر: Vercel مجاني وغير محدود للمواقع الثابتة.', en: 'Vercel.com → Connect GitHub → Upload your folder → Auto deploy in 30s. Free URL: monsite.vercel.app. Custom domain: 3,000 DZD/year (at Hostinger.dz). Secret: Vercel is free and unlimited for static sites.' },
              hotspot: { x: 50, y: 50, label: 'Vercel' },
              shortcuts: ['Drag & Drop dossier', 'Auto-deploy en 30s'],
              aiPrompt: null
            },
            {
              step: 4,
              image: 'images/lessons/web/step4-v0-dev.jpg',
              caption: { fr: 'v0.dev : Générer des composants UI', ar: 'v0.dev: توليد مكونات UI', en: 'v0.dev: Generate UI Components' },
              detail: { fr: 'v0.dev (par Vercel) → Décrivez un composant: "Hero section avec image de fond, titre en arabe, bouton CTA vert, responsive" → L\'IA génère le code React + Tailwind → Copiez-collez dans Cursor. Parfait pour les sections complexes.', ar: 'v0.dev (من Vercel) → صف مكون: "قسم Hero بصورة خلفية، عنوان بالعربية، زر CTA أخضر، responsive" → الذكاء الاصطناعي يولّد كود React + Tailwind → انسخ-ألصق ف Cursor. مثالي للأقسام المعقدة.', en: 'v0.dev (by Vercel) → Describe a component: "Hero section with background image, Arabic title, green CTA button, responsive" → AI generates React + Tailwind code → Copy-paste into Cursor. Perfect for complex sections.' },
              hotspot: { x: 50, y: 50, label: 'v0.dev' },
              shortcuts: ['v0.dev → Describe → Copy → Paste in Cursor'],
              aiPrompt: { tool: 'v0.dev', prompt: 'Hero section for Algerian restaurant, background image overlay, Arabic title right-aligned, green CTA button, mobile responsive, warm color palette', result: 'React + Tailwind code prêt' }
            }
          ],
          method: { fr: 'Créez un site vitrine complet avec Cursor + déployez sur Vercel. Utilisez v0.dev pour les composants complexes.', ar: 'أنشئ موقع تعريفي كامل بـ Cursor + انشر على Vercel. استخدم v0.dev للمكونات المعقدة.', en: 'Create a complete showcase site with Cursor + deploy on Vercel. Use v0.dev for complex components.' },
          exercise: { fr: 'Site pour "Café des Amis" (Tlemcen): (1) Cursor: site complet avec Hero, Menu (prix DZD), Galerie, Contact WhatsApp, (2) v0.dev: composant "Réservation de table", (3) Vercel: déploiement, (4) Test mobile. Livrable: URL live + code source.', ar: 'موقع لـ "Café des Amis" (تلمسان): (1) Cursor: موقع كامل بـ Hero، Menu (أسعار بالدينار)، معرض، Contact WhatsApp، (2) v0.dev: مكون "حجز طاولة"، (3) Vercel: نشر، (4) اختبار موبايل. تسليم: رابط مباشر + كود المصدر.', en: 'Site for "Café des Amis" (Tlemcen): (1) Cursor: complete site with Hero, Menu (DZD prices), Gallery, Contact WhatsApp, (2) v0.dev: "Table reservation" component, (3) Vercel: deploy, (4) Mobile test. Deliverable: live URL + source code.' },
          tip: { fr: '💰 Secret Pro: Un site vitrine simple se vend 30,000–80,000 DZD. Avec réservation en ligne + paiement CCP: 100,000–200,000 DZD. Vibe Coding vous permet de livrer en 2 jours ce qui prenait 2 semaines.', ar: '💰 سر محترف: موقع تعريفي بسيط يتباع 30,000–80,000 دج. مع حجز أونلاين + دفع CCP: 100,000–200,000 دج. برمجة بالتوجه تسمح لك بتسليم فـ 2 أيام اللي كان ياخذ 2 أسبوع.', en: '💰 Pro Secret: A simple showcase site sells for 30,000–80,000 DZD. With online booking + CCP payment: 100,000–200,000 DZD. Vibe Coding lets you deliver in 2 days what used to take 2 weeks.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 5: SEO + IA
// ============================================================
{
  id: 'seo',
  icon: '🔍',
  color: '#9333EA',
  accent: '#C084FC',
  bg: 'linear-gradient(135deg, #1A0A2E 0%, #2D1050 50%, #1A0A2E 100%)',
  bgImage: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=600&q=80',
  earning: '20,000 – 250,000 DZD/mois',
  firstClient: { fr: '2–3 semaines', ar: '2–3 أسابيع', en: '2–3 weeks' },
  startTool: 'Ubersuggest + ChatGPT + Screaming Frog',
  title: { fr: 'SEO', ar: 'تحسين محركات البحث', en: 'SEO' },
  subtitle: { fr: 'Référencement + Contenu IA', ar: 'المرجعية + محتوى بالذكاء الاصطناعي', en: 'SEO + AI Content' },
  tagline: { fr: 'Faites apparaître les entreprises algériennes en 1ère page Google', ar: 'خلّي المؤسسات الجزائرية تظهر في الصفحة الأولى لـ Google', en: 'Get Algerian businesses on Google page 1' },
  aiTools: ['ChatGPT', 'Surfer SEO', 'Jasper', 'Clearscope', 'Ubersuggest AI'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
      goal: { fr: 'Auditer un site + générer un plan de contenu IA + 10 articles optimisés', ar: 'تدقيق موقع + توليد خطة محتوى بالذكاء الاصطناعي + 10 مقالات محسّنة', en: 'Audit a site + generate AI content plan + 10 optimized articles' },
      lessons: [
        {
          id: 'seo-b-1',
          title: { fr: 'SEO Algérien : Mots-Clés + Contenu IA', ar: 'SEO جزائري: كلمات مفتاحية + محتوى بالذكاء الاصطناعي', en: 'Algerian SEO: Keywords + AI Content' },
          image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/seo/step1-ubersuggest.jpg',
              caption: { fr: 'Recherche de mots-clés avec Ubersuggest', ar: 'بحث الكلمات المفتاحية بـ Ubersuggest', en: 'Keyword research with Ubersuggest' },
              detail: { fr: 'Ubersuggest (gratuit 3 recherches/jour) → Tapez "restaurant Oran" → L\'outil montre: volume de recherche, difficulté, suggestions. Secret SEO Algérie: Les gens cherchent en FRANÇAIS et en ARABE. Optimisez les DEUX langues.', ar: 'Ubersuggest (مجاني 3 بحث/يوم) → اكتب "restaurant Oran" → الأداة توري: حجم البحث، الصعوبة، اقتراحات. سر SEO الجزائر: الناس يبحثوا بالفرنسية وبالعربية. حسّن اللغتين.', en: 'Ubersuggest (free 3 searches/day) → Type "restaurant Oran" → Tool shows: search volume, difficulty, suggestions. Algeria SEO Secret: People search in FRENCH and ARABIC. Optimize BOTH languages.' },
              hotspot: { x: 50, y: 50, label: 'Ubersuggest' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Analyse les intentions de recherche pour [MOT-CLÉ] en Algérie. Donne: 1. 10 long-tail keywords fr+ar 2. Questions fréquentes 3. Type de contenu optimal (article, vidéo, liste) 4. Saisonnalité', result: 'Plan SEO complet' }
            },
            {
              step: 2,
              image: 'images/lessons/seo/step2-chatgpt-article.jpg',
              caption: { fr: '🤖 Générer 10 articles SEO avec ChatGPT', ar: '🤖 توليد 10 مقالات SEO بـ ChatGPT', en: '🤖 Generate 10 SEO articles with ChatGPT' },
              detail: { fr: 'Prompt SEO: "Rédige un article de 1500 mots optimisé SEO pour le mot-clé 'meilleur restaurant Oran'. Structure: H1, H2, H3, introduction accrocheuse, 5 sections détaillées, FAQ, conclusion avec CTA. Ton: professionnel mais accessible. Inclus le mot-clé 15 fois naturellement."', ar: 'Prompt SEO: "اكتب مقال 1500 كلمة محسّن SEO لكلمة "أفضل مطعم وهران". هيكل: H1، H2، H3، مقدمة جاذبة، 5 أقسام مفصلة، FAQ، خاتمة بـ CTA. نبرة: احترافية لكن سهلة. ضمّن الكلمة المفتاحية 15 مرة بشكل طبيعي."', en: 'SEO Prompt: "Write a 1500-word SEO-optimized article for keyword 'best restaurant Oran'. Structure: H1, H2, H3, catchy intro, 5 detailed sections, FAQ, conclusion with CTA. Tone: professional but accessible. Include keyword 15 times naturally."' },
              hotspot: { x: 50, y: 50, label: 'ChatGPT' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Rédige un article SEO 1500 mots pour [MOT-CLÉ]. Structure: H1, 5 H2 avec H3, intro accrocheuse, FAQ schema.org, CTA. Ton: [professionnel/amical]. Mots-clés secondaires: [liste]. Langue: fr+ar.', result: 'Article prêt en 3 min' }
            },
            {
              step: 3,
              image: 'images/lessons/seo/step3-schema-markup.jpg',
              caption: { fr: 'Schema Markup pour Google Rich Snippets', ar: 'Schema Markup لـ Google Rich Snippets', en: 'Schema Markup for Google Rich Snippets' },
              detail: { fr: 'Schema.org → Ajoutez du code JSON-LD pour apparaître avec étoiles, prix, horaires directement dans Google. Pour un restaurant: "LocalBusiness" schema avec menu, prix, avis. Générez-le avec ChatGPT: "Génère le schema.org LocalBusiness JSON-LD pour [restaurant] à [ville] avec menu, prix moyen, horaires, téléphone."', ar: 'Schema.org → زيد كود JSON-LD باش تظهر بنجوم، أسعار، أوقات مباشرة ف Google. لمطعم: schema "LocalBusiness" مع menu، أسعار، تقييمات. ولّده بـ ChatGPT: "ولّد schema.org LocalBusiness JSON-LD لـ [مطعم] فـ [مدينة] مع menu، متوسط الأسعار، أوقات، تليفون."', en: 'Schema.org → Add JSON-LD code to appear with stars, prices, hours directly in Google. For a restaurant: "LocalBusiness" schema with menu, prices, reviews. Generate with ChatGPT: "Generate schema.org LocalBusiness JSON-LD for [restaurant] in [city] with menu, average price, hours, phone."' },
              hotspot: { x: 50, y: 50, label: 'Schema' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Génère le schema.org JSON-LD pour [TYPE BUSINESS] à [VILLE]. Inclus: @type, name, address, telephone, openingHours, priceRange, menu, aggregateRating. Format: JSON-LD valide.', result: 'Code schema prêt à copier' }
            }
          ],
          method: { fr: 'Auditez un site algérien, générez un plan de contenu IA, écrivez 10 articles SEO, ajoutez Schema markup.', ar: 'دقق موقع جزائري، ولّد خطة محتوى بالذكاء الاصطناعي، اكتب 10 مقالات SEO، زيد Schema markup.', en: 'Audit an Algerian site, generate AI content plan, write 10 SEO articles, add Schema markup.' },
          exercise: { fr: 'SEO pour "Hôtel El Mountazah" (Annaba): (1) Ubersuggest: 20 mots-clés fr+ar, (2) ChatGPT: 10 articles (1500 mots chacun), (3) Schema: LocalBusiness + FAQ, (4) Rapport: positions Google avant/après. Livrable: 10 articles + code schema + rapport.', ar: 'SEO لـ "Hôtel El Mountazah" (عنابة): (1) Ubersuggest: 20 كلمة مفتاحية fr+ar، (2) ChatGPT: 10 مقالات (1500 كلمة كل واحد)، (3) Schema: LocalBusiness + FAQ، (4) تقرير: مراكز Google قبل/بعد. تسليم: 10 مقالات + كود schema + تقرير.', en: 'SEO for "Hôtel El Mountazah" (Annaba): (1) Ubersuggest: 20 keywords fr+ar, (2) ChatGPT: 10 articles (1500 words each), (3) Schema: LocalBusiness + FAQ, (4) Report: Google rankings before/after. Deliverable: 10 articles + schema code + report.' },
          tip: { fr: '💰 Secret Pro: Un consultant SEO en Algérie facture 30,000–100,000 DZD/mois par client. Avec ChatGPT, vous produisez 10x plus de contenu. Un client qui passe de page 5 à page 1 Google paie volontiers 50,000 DZD/mois.', ar: '💰 سر محترف: مستشار SEO في الجزائر يفاتورة 30,000–100,000 دج/شهر لكل زبون. بـ ChatGPT، تنتج 10 أضعاف المحتوى. زبون ينتقل من صفحة 5 لصفحة 1 Google يدفع بسهولة 50,000 دج/شهر.', en: '💰 Pro Secret: An SEO consultant in Algeria charges 30,000–100,000 DZD/month per client. With ChatGPT, you produce 10x more content. A client moving from page 5 to page 1 Google happily pays 50,000 DZD/month.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 6: DATA ANALYSIS + IA
// ============================================================
{
  id: 'data',
  icon: '📊',
  color: '#0891B2',
  accent: '#22D3EE',
  bg: 'linear-gradient(135deg, #051A1F 0%, #0A2E35 50%, #051A1F 100%)',
  bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  earning: '25,000 – 400,000 DZD/mois',
  firstClient: { fr: '2–3 semaines', ar: '2–3 أسابيع', en: '2–3 weeks' },
  startTool: 'Google Sheets + ChatGPT + Looker Studio',
  title: { fr: 'Data Analysis', ar: 'تحليل البيانات', en: 'Data Analysis' },
  subtitle: { fr: 'Tableaux de Bord + Prédictions IA', ar: 'لوحات القيادة + توقعات بالذكاء الاصطناعي', en: 'Dashboards + AI Predictions' },
  tagline: { fr: 'Transformez les données des entreprises algériennes en décisions intelligentes', ar: 'حوّل بيانات المؤسسات الجزائرية لقرارات ذكية', en: 'Transform Algerian business data into smart decisions' },
  aiTools: ['ChatGPT Advanced Data Analysis', 'Julius AI', 'Ajelix', 'Looker Studio', 'Google Sheets AI'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
      goal: { fr: 'Créer un dashboard interactif + analyser les données avec ChatGPT', ar: 'إنشاء لوحة قيادة تفاعلية + تحليل البيانات بـ ChatGPT', en: 'Create interactive dashboard + analyze data with ChatGPT' },
      lessons: [
        {
          id: 'da-b-1',
          title: { fr: 'Dashboard IA : De Excel à Looker Studio', ar: 'لوحة قيادة بالذكاء الاصطناعي: من Excel لـ Looker Studio', en: 'AI Dashboard: From Excel to Looker Studio' },
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/data/step1-sheets-import.jpg',
              caption: { fr: 'Importer les données dans Google Sheets', ar: 'استيراد البيانات لـ Google Sheets', en: 'Import data into Google Sheets' },
              detail: { fr: 'Créez une feuille avec: Date, Produit, Quantité, Prix, Ville, Canal (WhatsApp/Facebook/Physique). Utilisez "ImportRange" pour connecter plusieurs sources. Secret: Les commerçants algériens utilisent WhatsApp — intégrez les données WhatsApp Business.', ar: 'أنشئ ورقة تحتوي على: التاريخ، المنتج، الكمية، السعر، المدينة، القناة (WhatsApp/Facebook/فيزيك). استخدم "ImportRange" باش تربط مصادر متعددة. سر: التجار الجزائريين يستعملوا WhatsApp — ضمّن بيانات WhatsApp Business.', en: 'Create a sheet with: Date, Product, Quantity, Price, City, Channel (WhatsApp/Facebook/Physical). Use "ImportRange" to connect multiple sources. Secret: Algerian merchants use WhatsApp — integrate WhatsApp Business data.' },
              hotspot: { x: 50, y: 50, label: 'Sheets' },
              shortcuts: ['=IMPORTDATA(URL)', '=QUERY(data, "SELECT * WHERE...")'],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/data/step2-chatgpt-analyze.jpg',
              caption: { fr: '🤖 Analyser avec ChatGPT Advanced Data', ar: '🤖 تحليل بـ ChatGPT Advanced Data', en: '🤖 Analyze with ChatGPT Advanced Data' },
              detail: { fr: 'Uploadez votre CSV dans ChatGPT → "Analyse ces ventes et donne: 1. Produit le plus vendu par ville 2. Meilleur canal de vente 3. Tendance mensuelle 4. Prévision des ventes pour le mois prochain 5. 3 recommandations pour augmenter les revenus." ChatGPT génère graphiques + interprétations.', ar: 'حمّل CSV ديالك ف ChatGPT → "حلل هالمبيعات وعطيني: 1. أكثر منتج مباع حسب المدينة 2. أفضل قناة بيع 3. الاتجاه الشهري 4. توقع المبيعات للشهر الجاي 5. 3 توصيات باش تزيد الدخل." ChatGPT يولّد رسوم بيانية + تحليلات.', en: 'Upload your CSV to ChatGPT → "Analyze these sales and give: 1. Best-selling product by city 2. Best sales channel 3. Monthly trend 4. Sales forecast for next month 5. 3 recommendations to increase revenue." ChatGPT generates charts + interpretations.' },
              hotspot: { x: 50, y: 50, label: 'ChatGPT' },
              shortcuts: ['Upload CSV → Ask for analysis → Download charts'],
              aiPrompt: { tool: 'ChatGPT Advanced Data Analysis', prompt: 'Analyse ce fichier de ventes [CSV]. Donne: 1. KPIs clés (CA, marge, panier moyen) 2. Top 5 produits 3. Tendance 3 mois 4. Prévision mois prochain 5. 5 actions concrètes. Génère 3 graphiques.', result: 'Rapport complet avec graphiques' }
            },
            {
              step: 3,
              image: 'images/lessons/data/step3-looker-studio.jpg',
              caption: { fr: 'Dashboard interactif avec Looker Studio', ar: 'لوحة قيادة تفاعلية بـ Looker Studio', en: 'Interactive Dashboard with Looker Studio' },
              detail: { fr: 'Looker Studio (gratuit) → Connectez Google Sheets → Glissez-déposez les graphiques: camembert (répartition par ville), courbe (tendance temporelle), tableau (top produits). Partagez le lien avec le client — il voit les données en temps réel. Facturez 15,000–50,000 DZD le dashboard.', ar: 'Looker Studio (مجاني) → ربط Google Sheets → اسحب-أفلت الرسوم البيانية: دائري (توزيع حسب المدينة)، منحنى (اتجاه زمني)، جدول (أفضل المنتجات). شارك الرابط مع الزبون — يشوف البيانات فالوقت الحقيقي. فاتورة 15,000–50,000 دج للوحة القيادة.', en: 'Looker Studio (free) → Connect Google Sheets → Drag-and-drop charts: pie (city breakdown), line (time trend), table (top products). Share the link with client — they see data in real-time. Charge 15,000–50,000 DZD per dashboard.' },
              hotspot: { x: 50, y: 50, label: 'Looker' },
              shortcuts: ['Add data source → Google Sheets → Create chart → Share'],
              aiPrompt: null
            }
          ],
          method: { fr: 'Créez un dashboard complet pour un commerce algérien: import données, analyse ChatGPT, visualisation Looker Studio.', ar: 'أنشئ لوحة قيادة كاملة لتاجر جزائري: استيراد بيانات، تحليل ChatGPT، تصور Looker Studio.', en: 'Create a complete dashboard for an Algerian business: import data, ChatGPT analysis, Looker Studio visualization.' },
          exercise: { fr: 'Dashboard pour "Épicerie Benali" (Batna): (1) Sheets: 6 mois de ventes (date, produit, qté, prix, ville, canal), (2) ChatGPT: analyse complète + prévisions, (3) Looker: 5 graphiques interactifs, (4) Rapport PDF avec recommandations. Livrable: lien dashboard + rapport.', ar: 'لوحة قيادة لـ "Épicerie Benali" (باتنة): (1) Sheets: 6 أشهر مبيعات (تاريخ، منتج، كمية، سعر، مدينة، قناة)، (2) ChatGPT: تحليل كامل + توقعات، (3) Looker: 5 رسوم بيانية تفاعلية، (4) تقرير PDF مع توصيات. تسليم: رابط لوحة + تقرير.', en: 'Dashboard for "Épicerie Benali" (Batna): (1) Sheets: 6 months sales (date, product, qty, price, city, channel), (2) ChatGPT: complete analysis + forecasts, (3) Looker: 5 interactive charts, (4) PDF report with recommendations. Deliverable: dashboard link + report.' },
          tip: { fr: '🤖 Astuce IA: Julius AI (julius.ai) permet de converser avec vos données en langage naturel. "Montre-moi les ventes de Ramadan vs le reste de l\'année" → Graphique instantané. Parfait pour les présentations clients.', ar: '🤖 نصيحة الذكاء الاصطناعي: Julius AI (julius.ai) يسمح بالمحادثة مع بياناتك بلغة طبيعية. "وريني مبيعات رمضان مقابل باقي السنة" → رسم بياني فوري. مثالي لعروض الزبائن.', en: '🤖 AI Tip: Julius AI (julius.ai) lets you chat with your data in natural language. "Show me Ramadan sales vs rest of year" → Instant chart. Perfect for client presentations.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 7: COPYWRITING + IA
// ============================================================
{
  id: 'copy',
  icon: '✍️',
  color: '#CA8A04',
  accent: '#FACC15',
  bg: 'linear-gradient(135deg, #1F1505 0%, #352A0A 50%, #1F1505 100%)',
  bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
  earning: '15,000 – 300,000 DZD/projet',
  firstClient: { fr: '1–2 semaines', ar: '1–2 أسابيع', en: '1–2 weeks' },
  startTool: 'ChatGPT + Jasper + Notion AI',
  title: { fr: 'Copywriting', ar: 'الكتابة الإعلانية', en: 'Copywriting' },
  subtitle: { fr: 'Textes qui Vendent + IA', ar: 'نصوص تبيع + ذكاء اصطناعي', en: 'Words That Sell + AI' },
  tagline: { fr: 'Rédigez des textes qui font acheter — en français, arabe et darija', ar: 'اكتب نصوص تخلي الناس يشريوا — بالفرنسية، العربية والدارجة', en: 'Write copy that makes people buy — in French, Arabic and darija' },
  aiTools: ['ChatGPT', 'Jasper', 'Copy.ai', 'Notion AI', 'Claude'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
      goal: { fr: 'Maîtriser AIDA + générer 50 textes avec ChatGPT', ar: 'إتقان AIDA + توليد 50 نص بـ ChatGPT', en: 'Master AIDA + generate 50 copies with ChatGPT' },
      lessons: [
        {
          id: 'c-b-1',
          title: { fr: 'Copywriting IA : AIDA + Prompts Gagnants', ar: 'كتابة إعلانية بالذكاء الاصطناعي: AIDA + Prompts رابحة', en: 'AI Copywriting: AIDA + Winning Prompts' },
          image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/copy/step1-aida.jpg',
              caption: { fr: 'La Formule AIDA', ar: 'قاعدة AIDA', en: 'The AIDA Formula' },
              detail: { fr: 'A = Attention (accroche choc). I = Intérêt (bénéfice clair). D = Désir (preuve sociale). A = Action (CTA urgent). Exemple algérien: "🔥 PROMO RAMADAN — Couscous familial à 1,200 DZD seulement (au lieu de 1,800) — 50 plats dispos — Commandez avant 18h sur WhatsApp 👇"', ar: 'A = انتباه (مفتاح صادم). I = اهتمام (فائدة واضحة). D = رغبة (إثبات اجتماعي). A = عمل (CTA عاجل). مثال جزائري: "🔥 عرض رمضان — كسكس عائلي بـ 1,200 دج فقط (بدل 1,800) — 50 طبق متوفر — اطلب قبل 18h على WhatsApp 👇"', en: 'A = Attention (shock hook). I = Interest (clear benefit). D = Desire (social proof). A = Action (urgent CTA). Algerian example: "🔥 RAMADAN PROMO — Family couscous only 1,200 DZD (was 1,800) — 50 plates available — Order before 6pm on WhatsApp 👇"' },
              hotspot: { x: 50, y: 50, label: 'AIDA' },
              shortcuts: [],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/copy/step2-chatgpt-prompts.jpg',
              caption: { fr: '🤖 50 Prompts Copywriting avec ChatGPT', ar: '🤖 50 Prompt كتابة إعلانية بـ ChatGPT', en: '🤖 50 Copywriting Prompts with ChatGPT' },
              detail: { fr: 'Prompt gagnant: "Rédige 5 captions Instagram pour un restaurant algérien à Béjaïa. Ton: chaleureux, familial, avec expressions locales. Structure: Accroche + Produit + Prix + Urgence + CTA WhatsApp. Inclus 1 émoji par phrase. Longueur: 80-120 mots. Langue: fr+darija."', ar: 'Prompt رابح: "اكتب 5 captions Instagram لمطعم جزائري في بجاية. نبرة: دافية، عائلية، مع تعبيرات محلية. هيكل: مفتاح + منتج + سعر + عجلة + CTA WhatsApp. ضمّن 1 emoji لكل جملة. الطول: 80-120 كلمة. اللغة: فرنسية+دارجة."', en: 'Winning prompt: "Write 5 Instagram captions for an Algerian restaurant in Béjaïa. Tone: warm, family-friendly, with local expressions. Structure: Hook + Product + Price + Urgency + WhatsApp CTA. Include 1 emoji per sentence. Length: 80-120 words. Language: French+darija."' },
              hotspot: { x: 50, y: 50, label: 'ChatGPT' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Rédige [NOMBRE] [TYPE TEXTES] pour [BUSINESS] à [VILLE]. Ton: [chaleureux/professionnel/drôle]. Structure: [AIDA/PAS/4P]. Langue: fr+ar+darija. Inclus: prix en DZD, urgence, CTA WhatsApp, 3 hashtags locaux.', result: 'Textes prêts à publier' }
            },
            {
              step: 3,
              image: 'images/lessons/copy/step3-ab-test.jpg',
              caption: { fr: 'A/B Testing : Quel texte vend plus ?', ar: 'A/B Testing: أنهو نص يبيع أكثر؟', en: 'A/B Testing: Which Copy Sells More?' },
              detail: { fr: 'Créez 2 versions d\'un même post. Version A: "Prix bas" (1,200 DZD). Version B: "Valeur" (Économisez 600 DZD). Postez les 2 sur des jours différents. Comparez: likes, commentaires, messages WhatsApp. Gardez le gagnant. Secret: En Algérie, "Économisez X DZD" convertit 30% mieux que "Prix: X DZD".', ar: 'أنشئ نسختين من نفس المنشور. نسخة A: "سعر منخفض" (1,200 دج). نسخة B: "قيمة" (وفّر 600 دج). انشرهم فأيام مختلفة. قارن: likes، تعليقات، رسائل WhatsApp. احتفظ بالرابح. سر: في الجزائر، "وفّر X دج" يحول 30% أكثر من "السعر: X دج".', en: 'Create 2 versions of the same post. Version A: "Low price" (1,200 DZD). Version B: "Value" (Save 600 DZD). Post on different days. Compare: likes, comments, WhatsApp messages. Keep the winner. Secret: In Algeria, "Save X DZD" converts 30% better than "Price: X DZD".' },
              hotspot: { x: 50, y: 50, label: 'A/B Test' },
              shortcuts: [],
              aiPrompt: null
            }
          ],
          method: { fr: 'Rédigez 50 textes (captions, emails, scripts vidéo) pour un client algérien avec ChatGPT. Testez A/B.', ar: 'اكتب 50 نص (captions، emails، سكريبت فيديو) لزبون جزائري بـ ChatGPT. اختبر A/B.', en: 'Write 50 copies (captions, emails, video scripts) for an Algerian client with ChatGPT. A/B test.' },
          exercise: { fr: 'Pour "Bijouterie El Or" (Oran): (1) ChatGPT: 20 captions Instagram (AIDA), (2) 10 emails promotionnels Ramadan, (3) 5 scripts Reels (30s), (4) A/B test: 2 versions de la même promo. Livrable: 35 textes + rapport A/B.', ar: 'لـ "Bijouterie El Or" (وهران): (1) ChatGPT: 20 caption Instagram (AIDA)، (2) 10 email ترويجي رمضان، (3) 5 سكريبت Reels (30 ثانية)، (4) A/B test: نسختين من نفس العرض. تسليم: 35 نص + تقرير A/B.', en: 'For "Bijouterie El Or" (Oran): (1) ChatGPT: 20 Instagram captions (AIDA), (2) 10 Ramadan promo emails, (3) 5 Reels scripts (30s), (4) A/B test: 2 versions of same promo. Deliverable: 35 copies + A/B report.' },
          tip: { fr: '🤖 Astuce IA: Utilisez "Custom Instructions" dans ChatGPT pour créer un "Copywriter Algérien" personnalisé. Décrivez votre style, vos expressions locales préférées, votre ton. ChatGPT générera toujours dans VOTRE style.', ar: '🤖 نصيحة الذكاء الاصطناعي: استخدم "Custom Instructions" ف ChatGPT باش تخلق "كاتب إعلاني جزائري" مخصص. صف ستايلك، تعبيراتك المحلية المفضلة، نبرتك. ChatGPT يولّد دايماً فـ ستايلك.', en: '🤖 AI Tip: Use "Custom Instructions" in ChatGPT to create a custom "Algerian Copywriter". Describe your style, favorite local expressions, your tone. ChatGPT will always generate in YOUR style.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 8: UI/UX DESIGN + IA
// ============================================================
{
  id: 'uiux',
  icon: '🎯',
  color: '#DB2777',
  accent: '#F472B6',
  bg: 'linear-gradient(135deg, #1A0512 0%, #2D0A1F 50%, #1A0512 100%)',
  bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  earning: '30,000 – 400,000 DZD/projet',
  firstClient: { fr: '3–4 semaines', ar: '3–4 أسابيع', en: '3–4 weeks' },
  startTool: 'Figma + FigJam AI + Uizard',
  title: { fr: 'UI/UX Design', ar: 'تصميم تجربة المستخدم', en: 'UI/UX Design' },
  subtitle: { fr: 'Interfaces + Prototypage IA', ar: 'واجهات + نماذج بالذكاء الاصطناعي', en: 'Interfaces + AI Prototyping' },
  tagline: { fr: 'Concevez des applications et sites web intuitifs avec l\'IA', ar: 'صمم تطبيقات ومواقع بديهية بالذكاء الاصطناعي', en: 'Design intuitive apps and websites with AI' },
  aiTools: ['Figma AI', 'Uizard', 'Galileo AI', 'FigJam AI', 'Maze'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Créer un prototype interactif avec Figma + générer des wireframes IA', ar: 'إنشاء نموذج تفاعلي بـ Figma + توليد wireframes بالذكاء الاصطناعي', en: 'Create interactive prototype with Figma + generate AI wireframes' },
      lessons: [
        {
          id: 'ux-b-1',
          title: { fr: 'Figma + IA : Prototype en 1 Jour', ar: 'Figma + الذكاء الاصطناعي: نموذج فـ 1 يوم', en: 'Figma + AI: Prototype in 1 Day' },
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/uiux/step1-uizard.jpg',
              caption: { fr: 'Générer des wireframes avec Uizard', ar: 'توليد wireframes بـ Uizard', en: 'Generate wireframes with Uizard' },
              detail: { fr: 'Uizard.io → Décrivez votre app: "App de livraison de nourriture algérienne, écran d\'accueil avec liste de restaurants, panier, profil utilisateur, paiement CCP". L\'IA génère les wireframes complets en 30s. Exportez vers Figma.', ar: 'Uizard.io → صف تطبيقك: "App توصيل أكل جزائري، شاشة رئيسية بقائمة مطاعم، سلّة، بروفيل مستخدم، دفع CCP". الذكاء الاصطناعي يولّد الـ wireframes كاملة فـ 30 ثانية. صدّر لـ Figma.', en: 'Uizard.io → Describe your app: "Algerian food delivery app, home screen with restaurant list, cart, user profile, CCP payment". AI generates complete wireframes in 30s. Export to Figma.' },
              hotspot: { x: 50, y: 50, label: 'Uizard' },
              shortcuts: [],
              aiPrompt: { tool: 'Uizard', prompt: 'Generate wireframes for [TYPE APP] with screens: [liste des écrans]. Style: [modern/minimal]. Include: navigation, CTAs, forms. Export to Figma.', result: 'Wireframes complets en 30s' }
            },
            {
              step: 2,
              image: 'images/lessons/uiux/step2-figma-prototype.jpg',
              caption: { fr: 'Prototype interactif Figma', ar: 'نموذج تفاعلي Figma', en: 'Figma Interactive Prototype' },
              detail: { fr: 'Figma → Importez les wireframes Uizard → Ajoutez des couleurs, typographie, images. Prototype mode: reliez les écrans avec des transitions (clic → écran suivant). Partagez le lien — le client clique et navigue comme sur une vraie app.', ar: 'Figma → استورد wireframes Uizard → زيد ألوان، خطوط، صور. وضع النموذج: ربط الشاشات بانتقالات (clic → الشاشة الجاية). شارك الرابط — الزبون يضغط ويتنقل كأنها app حقيقية.', en: 'Figma → Import Uizard wireframes → Add colors, typography, images. Prototype mode: connect screens with transitions (click → next screen). Share the link — client clicks and navigates like a real app.' },
              hotspot: { x: 50, y: 50, label: 'Figma' },
              shortcuts: ['Shift+E : Prototype mode', 'Ctrl+Alt+K : Create component'],
              aiPrompt: null
            },
            {
              step: 3,
              image: 'images/lessons/uiux/step3-user-testing.jpg',
              caption: { fr: 'Tests utilisateurs avec Maze', ar: 'اختبارات المستخدمين بـ Maze', en: 'User Testing with Maze' },
              detail: { fr: 'Maze.co → Importez votre prototype Figma → Créez des missions: "Commandez un couscous et payez par CCP". Envoyez le lien à 5 amis. Maze enregistre: où ils cliquent, où ils bloquent, temps passé. Corrigez les problèmes avant de coder.', ar: 'Maze.co → استورد نموذج Figma ديالك → أنشئ مهام: "اطلب كسكس وادفع بـ CCP". بعت الرابط لـ 5 أصحاب. Maze يسجل: واش يضغطوا، واش يتعثروا، الوقت المقضى. صحح المشاكل قبل البرمجة.', en: 'Maze.co → Import your Figma prototype → Create missions: "Order couscous and pay by CCP". Send link to 5 friends. Maze records: where they click, where they get stuck, time spent. Fix issues before coding.' },
              hotspot: { x: 50, y: 50, label: 'Maze' },
              shortcuts: [],
              aiPrompt: null
            }
          ],
          method: { fr: 'Concevez un prototype complet pour une app algérienne: wireframes Uizard, design Figma, tests Maze.', ar: 'صمم نموذج كامل لتطبيق جزائري: wireframes Uizard، تصميم Figma، اختبارات Maze.', en: 'Design a complete prototype for an Algerian app: Uizard wireframes, Figma design, Maze tests.' },
          exercise: { fr: 'App "DzLivraison" (livraison à Sétif): (1) Uizard: wireframes 5 écrans, (2) Figma: design complet avec branding, (3) Prototype: navigation + transitions, (4) Maze: test avec 5 utilisateurs, (5) Rapport: problèmes + solutions. Livrable: lien prototype + rapport tests.', ar: 'App "DzLivraison" (توصيل فـ سطيف): (1) Uizard: wireframes 5 شاشات، (2) Figma: تصميم كامل مع branding، (3) نموذج: تنقل + انتقالات، (4) Maze: اختبار مع 5 مستخدمين، (5) تقرير: مشاكل + حلول. تسليم: رابط النموذج + تقرير الاختبارات.', en: 'App "DzLivraison" (delivery in Sétif): (1) Uizard: 5-screen wireframes, (2) Figma: complete design with branding, (3) Prototype: navigation + transitions, (4) Maze: test with 5 users, (5) Report: issues + solutions. Deliverable: prototype link + test report.' },
          tip: { fr: '💰 Secret Pro: Un prototype Figma interactif se vend 50,000–150,000 DZD. Les clients algériens paient pour VOIR et TOUCHER avant d\'investir dans le développement. C\'est votre meilleur argument de vente.', ar: '💰 سر محترف: نموذج Figma تفاعلي يتباع 50,000–150,000 دج. الزبائن الجزائريين يدفعوا باش يشوفوا ويلمسوا قبل الاستثمار فالتطوير. هاذا أحسن حجة بيع عندك.', en: '💰 Pro Secret: An interactive Figma prototype sells for 50,000–150,000 DZD. Algerian clients pay to SEE and TOUCH before investing in development. It\'s your best sales argument.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 9: AUTOMATION + IA (Zapier, Make, n8n)
// ============================================================
{
  id: 'auto',
  icon: '⚙️',
  color: '#65A30D',
  accent: '#A3E635',
  bg: 'linear-gradient(135deg, #0F1A05 0%, #1A2E0A 50%, #0F1A05 100%)',
  bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  earning: '20,000 – 250,000 DZD/mois',
  firstClient: { fr: '2–3 semaines', ar: '2–3 أسابيع', en: '2–3 weeks' },
  startTool: 'Make.com + Zapier + n8n',
  title: { fr: 'Automation', ar: 'الأتمتة', en: 'Automation' },
  subtitle: { fr: 'Workflows IA + Bots', ar: 'سير عمل بالذكاء الاصطناعي + بوتات', en: 'AI Workflows + Bots' },
  tagline: { fr: 'Automatisez les tâches répétitives des entreprises algériennes', ar: 'أتمت المهام المتكررة للمؤسسات الجزائرية', en: 'Automate repetitive tasks for Algerian businesses' },
  aiTools: ['Make.com', 'Zapier', 'n8n', 'ChatGPT API', 'WhatsApp Business API'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
      goal: { fr: 'Créer 5 automatisations pour un commerce algérien', ar: 'إنشاء 5 أتمتات لتاجر جزائري', en: 'Create 5 automations for an Algerian business' },
      lessons: [
        {
          id: 'a-b-1',
          title: { fr: 'Make.com : Bot WhatsApp + Sheets + Email', ar: 'Make.com: بوت WhatsApp + Sheets + Email', en: 'Make.com: WhatsApp Bot + Sheets + Email' },
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/auto/step1-make-trigger.jpg',
              caption: { fr: 'Trigger: Nouveau message WhatsApp', ar: 'Trigger: رسالة WhatsApp جديدة', en: 'Trigger: New WhatsApp message' },
              detail: { fr: 'Make.com → Scénario: "WhatsApp Business" (trigger) → Quand un client envoie "Prix" → Le bot répond automatiquement avec la liste des produits et prix. Connectez WhatsApp Business API (gratuit via Meta for Developers).', ar: 'Make.com → سيناريو: "WhatsApp Business" (trigger) → لما زبون يرسل "Prix" → البوت يجاوب تلقائياً بقائمة المنتجات والأسعار. ربط WhatsApp Business API (مجاني عبر Meta for Developers).', en: 'Make.com → Scenario: "WhatsApp Business" (trigger) → When a client sends "Price" → Bot auto-replies with product list and prices. Connect WhatsApp Business API (free via Meta for Developers).' },
              hotspot: { x: 50, y: 50, label: 'Trigger' },
              shortcuts: [],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/auto/step2-sheets-log.jpg',
              caption: { fr: 'Action 1: Logger dans Google Sheets', ar: 'Action 1: تسجيل فـ Google Sheets', en: 'Action 1: Log to Google Sheets' },
              detail: { fr: 'Make.com → "Google Sheets" → Ajoutez une ligne avec: Date, Numéro client, Message, Heure. Le commerçant voit TOUTES les demandes dans un tableau. Plus besoin de chercher dans WhatsApp.', ar: 'Make.com → "Google Sheets" → زيد سطر يحتوي على: التاريخ، رقم الزبون، الرسالة، الوقت. التاجر يشوف كل الطلبات فجدول. بلا حاجة يدور فـ WhatsApp.', en: 'Make.com → "Google Sheets" → Add row with: Date, Client number, Message, Time. The merchant sees ALL requests in a table. No need to search WhatsApp.' },
              hotspot: { x: 50, y: 50, label: 'Sheets' },
              shortcuts: [],
              aiPrompt: null
            },
            {
              step: 3,
              image: 'images/lessons/auto/step3-chatgpt-reply.jpg',
              caption: { fr: '🤖 Action 2: Réponse IA avec ChatGPT', ar: '🤖 Action 2: رد بالذكاء الاصطناعي بـ ChatGPT', en: '🤖 Action 2: AI Reply with ChatGPT' },
              detail: { fr: 'Make.com → "OpenAI (ChatGPT)" → Prompt: "Tu es un assistant pour [Commerce]. Le client demande: [message]. Réponds en darija algérienne avec les prix en DZD. Sois chaleureux et professionnel." → Le bot répond intelligemment, 24h/24.', ar: 'Make.com → "OpenAI (ChatGPT)" → Prompt: "أنت مساعد لـ [Commerce]. الزبون يسأل: [message]. جاوب بالدارجة الجزائرية مع الأسعار بالدينار. كن دافي واحترافي." → البوت يجاوب بذكاء، 24/24.', en: 'Make.com → "OpenAI (ChatGPT)" → Prompt: "You are an assistant for [Business]. The client asks: [message]. Reply in Algerian darija with prices in DZD. Be warm and professional." → Bot replies intelligently, 24/7.' },
              hotspot: { x: 50, y: 50, label: 'ChatGPT' },
              shortcuts: [],
              aiPrompt: { tool: 'Make.com + ChatGPT API', prompt: 'Scénario: WhatsApp message → ChatGPT analyse → Réponse personnalisée darija + prix DZD → Envoi WhatsApp + Log Sheets', result: 'Bot 24/7 intelligent' }
            }
          ],
          method: { fr: 'Créez un bot WhatsApp complet pour un commerce: auto-réponse, log Sheets, notification email pour commandes.', ar: 'أنشئ بوت WhatsApp كامل لتاجر: رد تلقائي، تسجيل Sheets، إشعار email للطلبات.', en: 'Create a complete WhatsApp bot for a business: auto-reply, Sheets log, email notification for orders.' },
          exercise: { fr: 'Bot pour "Boucherie El Feth" (Blida): (1) WhatsApp: trigger mot-clé "Menu", (2) ChatGPT: réponse avec liste viandes + prix DZD, (3) Sheets: log chaque demande, (4) Email: alerte pour commandes >5,000 DZD, (5) Test: 10 conversations. Livrable: lien Make + doc.', ar: 'بوت لـ "Boucherie El Feth" (البليدة): (1) WhatsApp: trigger كلمة "Menu"، (2) ChatGPT: رد بقائمة اللحوم + أسعار بالدينار، (3) Sheets: تسجيل كل طلب، (4) Email: تنبيه للطلبات >5,000 دج، (5) اختبار: 10 محادثات. تسليم: رابط Make + وثيقة.', en: 'Bot for "Boucherie El Feth" (Blida): (1) WhatsApp: trigger word "Menu", (2) ChatGPT: reply with meat list + DZD prices, (3) Sheets: log each request, (4) Email: alert for orders >5,000 DZD, (5) Test: 10 conversations. Deliverable: Make link + doc.' },
          tip: { fr: '💰 Secret Pro: Un bot WhatsApp IA se vend 30,000–80,000 DZD + 5,000–15,000 DZD/mois de maintenance. Un commerçant économise 20h/semaine de réponses manuelles. ROI en 1 semaine.', ar: '💰 سر محترف: بوت WhatsApp بالذكاء الاصطناعي يتباع 30,000–80,000 دج + 5,000–15,000 دج/شهر صيانة. تاجر يوفر 20 ساعة/أسبوع من الردود اليدوية. عائد الاستثمار فـ أسبوع واحد.', en: '💰 Pro Secret: An AI WhatsApp bot sells for 30,000–80,000 DZD + 5,000–15,000 DZD/month maintenance. A merchant saves 20h/week of manual replies. ROI in 1 week.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 10: VIBE CODING
// ============================================================
{
  id: 'vibe',
  icon: '💻',
  color: '#7C3AED',
  accent: '#A78BFA',
  bg: 'linear-gradient(135deg, #0D0818 0%, #1A0A30 50%, #0D0818 100%)',
  bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  earning: '50,000 – 600,000 DZD/projet',
  firstClient: { fr: '3–4 semaines', ar: '3–4 أسابيع', en: '3–4 weeks' },
  startTool: 'Cursor.sh + Replit + Claude',
  title: { fr: 'Vibe Coding', ar: 'البرمجة بالتوجه', en: 'Vibe Coding' },
  subtitle: { fr: 'Développement Accéléré par IA', ar: 'تطوير مسرع بالذكاء الاصطناعي', en: 'AI-Accelerated Development' },
  tagline: { fr: 'Créez des apps et outils complexes sans être développeur', ar: 'أنشئ تطبيقات وأدوات معقدة بلا ما تكون مطوّر', en: 'Build complex apps and tools without being a developer' },
  aiTools: ['Cursor.sh', 'Claude', 'GitHub Copilot', 'Replit', 'v0.dev'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Créer une app fonctionnelle avec IA + la déployer', ar: 'إنشاء تطبيق شغال بالذكاء الاصطناعي + نشره', en: 'Create a functional app with AI + deploy it' },
      lessons: [
        {
          id: 'v-b-1',
          title: { fr: 'Vibe Coding : App de Réservation en 2h', ar: 'برمجة بالتوجه: تطبيق حجز فـ 2 ساعات', en: 'Vibe Coding: Booking App in 2 Hours' },
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/vibe/step1-cursor-prompt.jpg',
              caption: { fr: 'Décrivez l\'app en langage naturel', ar: 'صف التطبيق بلغة طبيعية', en: 'Describe the app in natural language' },
              detail: { fr: 'Cursor.sh → Ctrl+K → "Crée une app de réservation de tables pour restaurant algérien. Fonctions: calendrier de réservation, formulaire (nom, téléphone, nombre de personnes, date/heure), confirmation WhatsApp, admin dashboard pour voir les réservations. Stack: HTML, CSS, JavaScript, Supabase pour la base de données. Style: moderne, couleurs chaudes, responsive."', ar: 'Cursor.sh → Ctrl+K → "أنشئ تطبيق حجز طاولات لمطعم جزائري. وظائف: تقويم حجز، استمارة (اسم، تليفون، عدد الأشخاص، تاريخ/وقت)، تأكيد WhatsApp، لوحة تحكم admin باش يشوف الحجوزات. Stack: HTML، CSS، JavaScript، Supabase للقاعدة. ستايل: عصري، ألوان دافئة، responsive."', en: 'Cursor.sh → Ctrl+K → "Create a table reservation app for an Algerian restaurant. Features: booking calendar, form (name, phone, number of people, date/time), WhatsApp confirmation, admin dashboard to view bookings. Stack: HTML, CSS, JavaScript, Supabase for database. Style: modern, warm colors, responsive."' },
              hotspot: { x: 50, y: 50, label: 'Cursor' },
              shortcuts: ['Ctrl+K : AI Chat', 'Ctrl+L : Edit mode'],
              aiPrompt: { tool: 'Cursor.sh', prompt: 'Crée une [TYPE APP] avec [FONCTIONS]. Stack: [technologies]. Style: [description]. Inclus: [liste features]. Base de données: [Supabase/Firebase]. Déploie sur: [Vercel/Netlify].', result: 'App complète en 1-2h' }
            },
            {
              step: 2,
              image: 'images/lessons/vibe/step2-debug.jpg',
              caption: { fr: 'Déboguer avec l\'IA', ar: 'تصحيح الأخطاء بالذكاء الاصطناعي', en: 'Debug with AI' },
              detail: { fr: 'Quand il y a une erreur → Copiez le message d\'erreur → Ctrl+K → "J\'ai cette erreur: [message]. Corrige le code." L\'IA explique le problème ET corrige le code. Secret: Ne copiez pas l\'erreur sur Google — Cursor est 10x plus rapide.', ar: 'لما يكون خطأ → انسخ رسالة الخطأ → Ctrl+K → "عندي هالخطأ: [message]. صحح الكود." الذكاء الاصطناعي يشرح المشكل ويصحح الكود. سر: ما تنسخش الخطأ فـ Google — Cursor أسرع 10 مرات.', en: 'When there\'s an error → Copy the error message → Ctrl+K → "I have this error: [message]. Fix the code." AI explains the problem AND fixes the code. Secret: Don\'t copy the error to Google — Cursor is 10x faster.' },
              hotspot: { x: 50, y: 50, label: 'Debug' },
              shortcuts: ['Ctrl+K : "Fix this error"', 'F5 : Run & test'],
              aiPrompt: null
            },
            {
              step: 3,
              image: 'images/lessons/vibe/step3-deploy.jpg',
              caption: { fr: 'Déployer sur Vercel en 1 clic', ar: 'انشر على Vercel بـ 1 كليك', en: 'Deploy on Vercel in 1 click' },
              detail: { fr: 'Vercel → Connectez GitHub → Push votre code → Déploiement auto. Domaine gratuit: monapp.vercel.app. Pour un domaine .dz: achetez chez Hostinger.dz (~3,000 DZD/an) → Connectez à Vercel. Secret: Vercel est gratuit et illimité pour les projets personnels.', ar: 'Vercel → ربط GitHub → Push كودك → نشر تلقائي. دومين مجاني: monapp.vercel.app. لدومين .dz: اشتري عند Hostinger.dz (~3,000 دج/سنة) → ربط بـ Vercel. سر: Vercel مجاني وغير محدود للمشاريع الشخصية.', en: 'Vercel → Connect GitHub → Push your code → Auto deploy. Free domain: monapp.vercel.app. For .dz domain: buy at Hostinger.dz (~3,000 DZD/year) → Connect to Vercel. Secret: Vercel is free and unlimited for personal projects.' },
              hotspot: { x: 50, y: 50, label: 'Vercel' },
              shortcuts: ['Git push → Auto-deploy'],
              aiPrompt: null
            }
          ],
          method: { fr: 'Créez une app complète avec Cursor: description → code → debug IA → déploiement Vercel.', ar: 'أنشئ تطبيق كامل بـ Cursor: وصف → كود → تصحيح بالذكاء الاصطناعي → نشر Vercel.', en: 'Create a complete app with Cursor: description → code → AI debug → Vercel deploy.' },
          exercise: { fr: 'App "ReservDZ" pour salon de coiffure (Alger): (1) Cursor: app complète (réservation, calendrier, confirmation SMS), (2) Supabase: base de données réservations, (3) Vercel: déploiement, (4) Test: 10 réservations test. Livrable: URL live + code source + doc.', ar: 'App "ReservDZ" لصالون حلاقة (الجزائر العاصمة): (1) Cursor: تطبيق كامل (حجز، تقويم، تأكيد SMS)، (2) Supabase: قاعدة بيانات الحجوزات، (3) Vercel: نشر، (4) اختبار: 10 حجوزات تجريبية. تسليم: رابط مباشر + كود المصدر + وثيقة.', en: 'App "ReservDZ" for hair salon (Algiers): (1) Cursor: complete app (booking, calendar, SMS confirmation), (2) Supabase: reservations database, (3) Vercel: deploy, (4) Test: 10 test bookings. Deliverable: live URL + source code + doc.' },
          tip: { fr: '💰 Secret Pro: Une app simple (réservation, devis, catalogue) se vend 100,000–300,000 DZD. Avec Vibe Coding, vous la livrez en 2-3 jours. Un développeur traditionnel prend 2-3 semaines et facture 500,000+ DZD.', ar: '💰 سر محترف: تطبيق بسيط (حجز، عرض سعر، كتالوج) يتباع 100,000–300,000 دج. بالبرمجة بالتوجه، تسلمه فـ 2-3 أيام. مطوّر تقليدي ياخذ 2-3 أسابيع ويفاتورة 500,000+ دج.', en: '💰 Pro Secret: A simple app (booking, quote, catalog) sells for 100,000–300,000 DZD. With Vibe Coding, you deliver in 2-3 days. A traditional developer takes 2-3 weeks and charges 500,000+ DZD.' }
        }
      ]
    }
  ]
},

// ============================================================
// SKILL 11: ARTIFICIAL INTELLIGENCE (MAÎTRISE)
// ============================================================
{
  id: 'ai',
  icon: '🤖',
  color: '#E11D48',
  accent: '#FB7185',
  bg: 'linear-gradient(135deg, #1A0510 0%, #2D0A1A 50%, #1A0510 100%)',
  bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
  earning: '50,000 – 1,000,000 DZD/mois',
  firstClient: { fr: '2–4 semaines', ar: '2–4 أسابيع', en: '2–4 weeks' },
  startTool: 'ChatGPT + Claude + Midjourney + API OpenAI',
  title: { fr: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' },
  subtitle: { fr: 'Maîtrise Complète de l\'IA', ar: 'إتقان كامل للذكاء الاصطناعي', en: 'Complete AI Mastery' },
  tagline: { fr: 'Devenez l\'expert IA que les entreprises algériennes embauchent', ar: 'ولّي خبير الذكاء الاصطناعي اللي المؤسسات الجزائرية توظفو', en: 'Become the AI expert Algerian companies hire' },
  aiTools: ['ChatGPT', 'Claude', 'Midjourney', 'DALL-E', 'OpenAI API', 'LangChain', 'Pinecone'],
  levels: [
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Maîtriser les prompts avancés + créer des agents IA simples', ar: 'إتقان prompts متقدمة + إنشاء وكلاء ذكاء اصطناعي بسيطين', en: 'Master advanced prompts + create simple AI agents' },
      lessons: [
        {
          id: 'ai-b-1',
          title: { fr: 'Prompt Engineering : De Débutant à Expert', ar: 'هندسة Prompts: من مبتدئ لخبير', en: 'Prompt Engineering: From Beginner to Expert' },
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
          layout: 'top',
          visualSteps: [
            {
              step: 1,
              image: 'images/lessons/ai/step1-prompt-structure.jpg',
              caption: { fr: 'Structure CRISPE pour prompts parfaits', ar: 'هيكل CRISPE لـ prompts مثالية', en: 'CRISPE Structure for Perfect Prompts' },
              detail: { fr: 'C = Contexte (qui, quoi, où). R = Rôle (tu es expert en...). I = Instructions (fais ceci, puis cela). S = Spécifications (format, longueur, ton). P = Précautions (évite ceci, inclus cela). E = Exemples (voici un exemple de sortie). Exemple: "Tu es un consultant SEO algérien avec 10 ans d\'expérience. Rédige un plan de contenu pour un restaurant à Constantine. Format: table JSON. Ton: professionnel mais chaleureux. Évite le jargon technique. Exemple de sortie: [{mois: \"Janvier\", sujet: \"Meilleurs restaurants Constantine\"}]"', ar: 'C = سياق (شكون، شنو، فين). R = دور (أنت خبير فـ...). I = تعليمات (دير هاذا، بعدها هاذا). S = مواصفات (صيغة، طول، نبرة). P = احتياطات (تجنب هاذا، ضمّن هاذا). E = أمثلة (ها مثال للخروج). مثال: "أنت مستشار SEO جزائري مع 10 سنوات خبرة. اكتب خطة محتوى لمطعم فـ قسنطينة. صيغة: table JSON. نبرة: احترافية لكن دافية. تجنب المصطلحات التقنية. مثال الخروج: [{mois: \"جانفي\"، sujet: \"أفضل مطاعم قسنطينة\"}]"', en: 'C = Context (who, what, where). R = Role (you are an expert in...). I = Instructions (do this, then that). S = Specifications (format, length, tone). P = Precautions (avoid this, include that). E = Examples (here\'s a sample output). Example: "You are an Algerian SEO consultant with 10 years experience. Write a content plan for a restaurant in Constantine. Format: JSON table. Tone: professional but warm. Avoid technical jargon. Sample output: [{month: \"January\", topic: \"Best restaurants Constantine\"}]"' },
              hotspot: { x: 50, y: 50, label: 'CRISPE' },
              shortcuts: [],
              aiPrompt: null
            },
            {
              step: 2,
              image: 'images/lessons/ai/step2-chain-prompts.jpg',
              caption: { fr: 'Chaînage de Prompts : Du brief au livrable', ar: 'تسلسل Prompts: من الموجز للتسليم', en: 'Prompt Chaining: From Brief to Deliverable' },
              detail: { fr: 'Au lieu d\'un seul prompt → Chaînez plusieurs: Prompt 1: "Génère 10 idées d\'articles pour [sujet]" → Prompt 2: "Choisis la meilleure idée et développe un plan détaillé" → Prompt 3: "Rédige l\'article complet basé sur ce plan" → Prompt 4: "Crée 5 captions sociaux média pour promouvoir cet article". Chaque prompt utilise la sortie du précédent. Résultat: qualité 10x supérieure.', ar: 'بدل prompt واحد → سلسل عدة: Prompt 1: "ولّد 10 أفكار مقالات لـ [موضوع]" → Prompt 2: "اختار أفضل فكرة وطوّر خطة مفصلة" → Prompt 3: "اكتب المقال الكامل بناءً على هالخطة" → Prompt 4: "أنشئ 5 captions سوشيال ميديا باش تروج للمقال". كل prompt يستخدم خروج اللي قبلو. النتيجة: جودة أعلى 10 مرات.', en: 'Instead of one prompt → Chain multiple: Prompt 1: "Generate 10 article ideas for [topic]" → Prompt 2: "Pick the best idea and develop a detailed plan" → Prompt 3: "Write the full article based on this plan" → Prompt 4: "Create 5 social media captions to promote this article". Each prompt uses the previous output. Result: 10x better quality.' },
              hotspot: { x: 50, y: 50, label: 'Chain' },
              shortcuts: [],
              aiPrompt: { tool: 'ChatGPT', prompt: 'Prompt 1: [idées] → Prompt 2: [sélection+plan] → Prompt 3: [rédaction] → Prompt 4: [promotion]. Chaînez les sorties.', result: 'Workflow IA complet' }
            },
            {
              step: 3,
              image: 'images/lessons/ai/step3-custom-gpt.jpg',
              caption: { fr: 'Créer un GPT Personnalisé pour clients', ar: 'إنشاء GPT مخصص للزبائن', en: 'Create a Custom GPT for Clients' },
              detail: { fr: 'ChatGPT → "Explore GPTs" → "Create" → Nom: "Assistant [Entreprise]" → Instructions: "Tu es l\'assistant virtuel de [Entreprise]. Tu connais tous les produits, prix, horaires. Tu réponds en darija algérienne. Tu proposes toujours une promotion en cours." → Upload: catalogue produits PDF → Partagez le lien avec le client. Il a maintenant un chatbot IA personnalisé.', ar: 'ChatGPT → "Explore GPTs" → "Create" → الاسم: "مساعد [المؤسسة]" → تعليمات: "أنت المساعد الافتراضي لـ [المؤسسة]. تعرف كل المنتجات، الأسعار، الأوقات. تجاوب بالدارجة الجزائرية. تقترح دايماً عرض حالي." → Upload: كتالوج منتجات PDF → شارك الرابط مع الزبون. عندو الآن chatbot ذكاء اصطناعي مخصص.', en: 'ChatGPT → "Explore GPTs" → "Create" → Name: "[Business] Assistant" → Instructions: "You are the virtual assistant of [Business]. You know all products, prices, hours. You reply in Algerian darija. You always suggest a current promotion." → Upload: product catalog PDF → Share the link with the client. They now have a custom AI chatbot.' },
              hotspot: { x: 50, y: 50, label: 'Custom GPT' },
              shortcuts: ['ChatGPT → Explore → Create GPT'],
              aiPrompt: { tool: 'ChatGPT Custom GPTs', prompt: 'Create a GPT for [BUSINESS TYPE]. Knowledge: [upload PDFs/URLs]. Personality: [warm/professional/funny]. Language: [fr/ar/darija]. Special features: [promotions/booking/FAQ].', result: 'Chatbot personnalisé en 10 min' }
            }
          ],
          method: { fr: 'Maîtrisez CRISPE, le chaînage de prompts, et la création de GPTs personnalisés.', ar: 'إتقان CRISPE، تسلسل prompts، وإنشاء GPTs مخصصة.', en: 'Master CRISPE, prompt chaining, and custom GPT creation.' },
          exercise: { fr: 'Pour "Pharmacie El Hikma" (Tizi Ouzou): (1) CRISPE: 10 prompts optimisés, (2) Chaînage: brief → plan → article → captions, (3) Custom GPT: assistant pharmacie (médicaments, horaires, conseils). Livrable: 10 prompts + article complet + lien GPT.', ar: 'لـ "Pharmacie El Hikma" (تيزي وزو): (1) CRISPE: 10 prompts محسّنة، (2) تسلسل: موجز → خطة → مقال → captions، (3) GPT مخصص: مساعد صيدلية (أدوية، أوقات، نصائح). تسليم: 10 prompts + مقال كامل + رابط GPT.', en: 'For "Pharmacie El Hikma" (Tizi Ouzou): (1) CRISPE: 10 optimized prompts, (2) Chaining: brief → plan → article → captions, (3) Custom GPT: pharmacy assistant (medicines, hours, advice). Deliverable: 10 prompts + full article + GPT link.' },
          tip: { fr: '👑 Secret Ultime: Un expert Prompt Engineer en Algérie facture 50,000–200,000 DZD/mois par client. Vous ne vendez pas du code — vous vendez du TEMPS économisé. Un GPT personnalisé remplace 2 employés à temps plein.', ar: '👑 السر الأخير: خبير Prompt Engineering في الجزائر يفاتورة 50,000–200,000 دج/شهر لكل زبون. ما تبيعش كود — تبيع الوقت الموفّر. GPT مخصص يعوض موظفين بدوام كامل.', en: '👑 Ultimate Secret: A Prompt Engineering expert in Algeria charges 50,000–200,000 DZD/month per client. You don\'t sell code — you sell SAVED TIME. A custom GPT replaces 2 full-time employees.' }
        }
      ]
    }
  ]
}
];
