// ============================================================
// DATA.JS - 10 SKILLS AVEC CHAR7 DÉTAILLÉ
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
// SKILLS (10 SKILLS AVEC CHAR7 DÉTAILLÉ)
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
      // ===== BEGINNER =====
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
        goal: { fr: 'Apprendre les bases de Canva et comprendre l\'importance du design visuel', ar: 'تعلم أساسيات Canva وفهم أهمية التصميم البصري', en: 'Learn Canva basics and understand the importance of visual design' },
        lessons: [
          // Lesson 1
          {
            id: 'd-b-1',
            title: { fr: 'Pourquoi le design visuel est essentiel pour votre business', ar: 'لماذا التصميم البصري ضروري لعملك', en: 'Why visual design is essential for your business' },
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                '🎯 Pourquoi le design est important: Dans un monde où les gens scannent du contenu en moins de 3 secondes, un bon design attire l\'attention et crée une première impression positive.',
                '📈 Impact sur les ventes: Les entreprises qui investissent dans le design voient leurs ventes augmenter de 30% en moyenne. Un visuel professionnel inspire confiance.',
                '🎨 Le design raconte une histoire: Avant même de lire votre texte, vos couleurs, polices et mises en page communiquent déjà un message.',
                '🛠️ Canva: L\'outil gratuit qui démocratise le design. Des millions de templates sont disponibles pour vous aider à démarrer sans expérience.',
                '💡 Objectif de cette formation: À la fin, vous serez capable de créer des visuels professionnels en moins de 10 minutes.',
                '🔑 La clé: La pratique régulière est plus importante que le talent. 15 minutes par jour suffisent.',
                '📊 Pour les entreprises algériennes: Un bon design vous différencie de vos concurrents. Les clients paient plus pour des produits bien présentés.',
                '🚀 Votre premier pas: Ouvrez Canva maintenant. Ne concevez rien, juste explorez l\'interface.'
              ],
              ar: [
                '🎯 لماذا التصميم مهم: في عالم يمسح فيه الناس المحتوى في أقل من 3 ثوانٍ، التصميم الجيد يجذب الانتباه ويخلق انطباعاً أولياً إيجابياً.',
                '📈 التأثير على المبيعات: الشركات التي تستثمر في التصميم ترى مبيعاتها تزيد بنسبة 30% في المتوسط. المظهر الاحترافي يلهم الثقة.',
                '🎨 التصميم يحكي قصة: حتى قبل قراءة نصك، الألوان والخطوط والتخطيطات تنقل رسالة بالفعل.',
                '🛠️ Canva: الأداة المجانية التي ت democratise التصميم. ملايين القوالب متاحة لمساعدتك على البدء دون خبرة.',
                '💡 هدف هذا التكوين: في النهاية، ستكون قادراً على إنشاء تصاميم احترافية في أقل من 10 دقائق.',
                '🔑 المفتاح: الممارسة المنتظمة أهم من الموهبة. 15 دقيقة يومياً كافية.',
                '📊 للشركات الجزائرية: التصميم الجيد يميزك عن منافسيك. العملاء يدفعون أكثر للمنتجات المعروضة بشكل جيد.',
                '🚀 خطوتك الأولى: افتح Canva الآن. لا تصمم شيئاً، فقط استكشف الواجهة.'
              ],
              en: [
                '🎯 Why design matters: In a world where people scan content in under 3 seconds, good design grabs attention and creates a positive first impression.',
                '📈 Impact on sales: Companies that invest in design see their sales increase by 30% on average. A professional look inspires trust.',
                '🎨 Design tells a story: Even before reading your text, your colors, fonts, and layouts already communicate a message.',
                '🛠️ Canva: The free tool that democratizes design. Millions of templates are available to help you get started without experience.',
                '💡 Goal of this training: By the end, you\'ll be able to create professional visuals in under 10 minutes.',
                '🔑 The key: Regular practice is more important than talent. 15 minutes a day is enough.',
                '📊 For Algerian businesses: Good design sets you apart from your competitors. Customers pay more for well-presented products.',
                '🚀 Your first step: Open Canva now. Don\'t design anything, just explore the interface.'
              ]
            },
            method: {
              fr: 'Ouvrez Canva et passez 20 minutes à explorer chaque bouton, chaque menu, chaque section. Ne dessinez rien — juste familiarisez-vous avec l\'interface. C\'est le premier pas vers la maîtrise du design.',
              ar: 'افتح Canva واقضِ 20 دقيقة تستكشف كل زر وكل قائمة وكل قسم. لا تصمم شيئاً — فقط تعرف على الواجهة. هذه أول خطوة نحو إتقان التصميم.',
              en: 'Open Canva and spend 20 minutes exploring every button, every menu, every section. Don\'t design anything — just familiarize yourself with the interface. This is the first step towards mastering design.'
            },
            exercise: {
              fr: 'Créez un post Instagram avec votre nom et un fond coloré. Ne cherchez pas à faire parfait — l\'objectif est de toucher à chaque outil. Exportez-le et gardez-le comme témoignage de votre point de départ.',
              ar: 'أنشئ منشور Instagram باسمك وخلفية ملونة. لا تبحث عن الكمال — الهدف هو لمس كل أداة. صدّره واحتفظ به كشاهد على نقطة بدايتك.',
              en: 'Create an Instagram post with your name and a colored background. Don\'t aim for perfect — the goal is to touch every tool. Export it and keep it as a testament to your starting point.'
            },
            tip: {
              fr: '💡 La version gratuite de Canva vous donne accès à plus de 250 000 templates. Ne passez pas à la version Pro avant d\'avoir vos premiers clients payants. L\'outil gratuit est déjà très puissant.',
              ar: '💡 النسخة المجانية من Canva تعطيك أكثر من 250,000 قالب. لا تنتقل للإصدار Pro قبل أن تجيب أول زبون. الأداة المجانية قوية جداً بالفعل.',
              en: '💡 The free version of Canva gives you access to over 250,000 templates. Don\'t upgrade to Pro until you have your first paying clients. The free tool is already very powerful.'
            }
          },
          // Lesson 2
          {
            id: 'd-b-2',
            title: { fr: 'Les 4 Règles d\'Or du Design (CARP) — La base de tout bon visuel', ar: 'قواعد التصميم الأربعة الذهبية (CARP) — أساس أي تصميم جيد', en: 'The 4 Golden Rules of Design (CARP) — The foundation of any good visual' },
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            layout: 'right',
            steps: {
              fr: [
                '🎯 Règle 1 - CONTRASTE: Le contraste permet de mettre en évidence l\'élément le plus important. Exemple: si vous vendez un produit, son prix doit être plus grand et plus coloré que les autres informations.',
                '📐 Règle 2 - ALIGNEMENT: Tous les éléments doivent être alignés. Rien ne doit être placé au hasard. Utilisez les guides (Vue → Afficher les règles) pour aligner parfaitement vos éléments.',
                '🔄 Règle 3 - RÉPÉTITION: Utilisez les mêmes polices, couleurs et styles pour les éléments similaires. Exemple: tous vos titres utilisent la même police et la même couleur.',
                '📦 Règle 4 - PROXIMITÉ: Groupez les éléments qui vont ensemble. Séparez ce qui n\'a pas de lien. Exemple: le nom du produit et son prix doivent être proches.',
                '💡 Pourquoi ces règles sont importantes: Elles créent un design cohérent et professionnel. Les designs qui respectent ces règles sont plus faciles à comprendre et plus agréables à regarder.',
                '🔍 Exemple concret: Prenez un flyer de restaurant et identifiez ces 4 règles. Vous verrez que les meilleurs flyers les respectent toutes.',
                '🚀 Application pratique: Ouvrez un template Canva et identifiez ces règles dans chaque élément. Cela vous entraînera à les reconnaître.',
                '📊 Résultat: En maîtrisant ces règles, vous pouvez transformer n\'importe quel design amateur en design professionnel.'
              ],
              ar: [
                '🎯 القاعدة 1 - التباين: التباين يسمح بإبراز العنصر الأكثر أهمية. مثال: إذا كنت تبيع منتجاً، يجب أن يكون سعره أكبر وأكثر لوناً من المعلومات الأخرى.',
                '📐 القاعدة 2 - المحاذاة: كل العناصر يجب أن تكون محاذية. لا شيء يجب أن يوضع عشوائياً. استخدم الخطوط (عرض → أظهر الخطوط) لمحاذاة عناصرك بالضبط.',
                '🔄 القاعدة 3 - التكرار: استخدم نفس الخطوط والألوان والأنماط للعناصر المتشابهة. مثال: كل عناوينك تستخدم نفس الخط ونفس اللون.',
                '📦 القاعدة 4 - القرب: جمّع العناصر التي تمشي مع بعض. افصل ما ليس له رابط. مثال: اسم المنتج وسعره يجب أن يكونا متقاربين.',
                '💡 لماذا هذه القواعد مهمة: تخلق تصميماً متماسكاً واحترافياً. التصاميم التي تحترم هذه القواعد أسهل في الفهم وأكثر متعة في النظر.',
                '🔍 مثال عملي: خذ إعلان مطعم وحدّد هذه القواعد الأربع. ستلاحظ أن أفضل الإعلانات تحترمها كلها.',
                '🚀 تطبيق عملي: افتح قالب Canva وحدّد هذه القواعد في كل عنصر. هذا يدربك على التعرف عليها.',
                '📊 النتيجة: بإتقان هذه القواعد، يمكنك تحويل أي تصميم هاوٍ إلى تصميم احترافي.'
              ],
              en: [
                '🎯 Rule 1 - CONTRAST: Contrast highlights the most important element. Example: if you\'re selling a product, its price should be bigger and more colorful than other information.',
                '📐 Rule 2 - ALIGNMENT: All elements must be aligned. Nothing should be placed randomly. Use guides (View → Show Rulers) to perfectly align your elements.',
                '🔄 Rule 3 - REPETITION: Use the same fonts, colors, and styles for similar elements. Example: all your titles use the same font and color.',
                '📦 Rule 4 - PROXIMITY: Group elements that belong together. Separate unrelated elements. Example: product name and price should be close together.',
                '💡 Why these rules matter: They create a cohesive and professional design. Designs that follow these rules are easier to understand and more pleasant to look at.',
                '🔍 Concrete example: Take a restaurant flyer and identify these 4 rules. You\'ll see that the best flyers follow all of them.',
                '🚀 Practical application: Open a Canva template and identify these rules in each element. This trains you to recognize them.',
                '📊 Result: By mastering these rules, you can transform any amateur design into a professional one.'
              ]
            },
            method: {
              fr: 'Créez deux versions d\'une carte de visite: une en violant volontairement les 4 règles, et une en les respectant parfaitement. La comparaison directe rend les règles inoubliables. Vous verrez immédiatement la différence de qualité professionnelle.',
              ar: 'أنشئ نسختين من بطاقة أعمال: واحدة تكسر فيها القواعد الأربعة عمداً، وواحدة تتبعها بالضبط. المقارنة المباشرة تجعل القواعد لا تُنسى. سترى فوراً الفرق في الجودة الاحترافية.',
              en: 'Create two versions of a business card: one deliberately violating all 4 rules, and one following them perfectly. The direct comparison makes the rules unforgettable. You\'ll immediately see the difference in professional quality.'
            },
            exercise: {
              fr: 'Refaites la carte de visite d\'un restaurant algérien (El Baraka) en respectant PARFAITEMENT les 4 règles. Comparez avec l\'original et notez 5 différences. Partagez votre version avec un ami pour avoir un retour.',
              ar: 'أعد تصميم بطاقة أعمال لمطعم جزائري (البركة) باتباع القواعد الأربعة بالضبط. قارن مع الأصل وسجل 5 اختلافات. شارك نسختك مع صديق للحصول على ملاحظات.',
              en: 'Redesign an Algerian restaurant\'s business card (El Baraka) by PERFECTLY following the 4 rules. Compare with the original and note 5 differences. Share your version with a friend for feedback.'
            },
            tip: {
              fr: '💡 Les designers professionnels ne brisent les règles qu\'APRÈS les avoir parfaitement maîtrisées. C\'est la différence entre un amateur et un pro. Apprenez d\'abord les règles, puis apprenez à les briser avec intention.',
              ar: '💡 المصممون المحترفون لا يكسرون القواعد إلا بعد إتقانها تماماً. هذا هو الفرق بين الهاوي والمحترف. تعلم القواعد أولاً، ثم تعلم كسرها بقصد.',
              en: '💡 Professional designers only break rules AFTER mastering them perfectly. That\'s the difference between an amateur and a pro. Learn the rules first, then learn to break them with intention.'
            }
          }
        ]
      },
      // ===== INTERMEDIATE =====
      {
        name: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
        badge: '⚡',
        duration: { fr: 'Semaines 5–10', ar: 'الأسابيع 5–10', en: 'Weeks 5–10' },
        goal: { fr: 'Passer de Canva à Photoshop et créer des designs pour vos premiers clients', ar: 'الانتقال من Canva إلى Photoshop وإنشاء تصاميم لأول زبائنك', en: 'Move from Canva to Photoshop and create designs for your first clients' },
        lessons: [
          {
            id: 'd-i-1',
            title: { fr: 'Photopea — L\'alternative gratuite à Photoshop', ar: 'Photopea — البديل المجاني لـ Photoshop', en: 'Photopea — The free Photoshop alternative' },
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
            layout: 'left',
            steps: {
              fr: [
                '🔧 Qu\'est-ce que Photopea? Un éditeur en ligne qui ressemble à 99% à Photoshop, mais totalement gratuit. Fonctionne dans votre navigateur.',
                '📐 L\'interface: À gauche = barre d\'outils (sélection, pinceau, texte, etc.). À droite = panneau des calques. En haut = menu et options.',
                '📄 Les calques: Ce sont des feuilles transparentes superposées. Chaque élément (texte, image, forme) doit être sur son propre calque.',
                '🖼️ Ouvrir une photo: Fichier → Ouvrir. Double-cliquez sur le calque "Arrière-plan" → OK pour le déverrouiller.',
                '✂️ Supprimer un fond: Utilisez l\'outil Baguette magique, cliquez sur le fond, puis Delete. Pour des fonds complexes, utilisez Sélection → Sujet.',
                '📝 Ajouter du texte: Sélectionnez l\'outil T, cliquez sur le canvas, tapez votre texte. Modifiez la police, la taille, la couleur.',
                '💾 Exporter: Fichier → Exporter → Exporter sous → PNG (cochez Transparence) ou JPEG.',
                '🎯 Pourquoi c\'est utile: Photopea vous permet de faire tout ce que vous faisiez sur Canva, mais avec des possibilités infinies.'
              ],
              ar: [
                '🔧 ما هو Photopea؟ محرر أونلاين يشبه Photoshop بنسبة 99%، لكنه مجاني تماماً. يشتغل في متصفحك.',
                '📐 الواجهة: على اليسار = شريط الأدوات (تحديد، فرشاة، نص...). على اليمين = لوحة الطبقات. في الأعلى = القائمة والخيارات.',
                '📄 الطبقات: هي أوراق شفافة مكدسة. كل عنصر (نص، صورة، شكل) يجب أن يكون على طبقته الخاصة.',
                '🖼️ فتح صورة: ملف → فتح. انقر مرتين على طبقة "الخلفية" → OK لفكها.',
                '✂️ حذف خلفية: استخدم أداة العصا السحرية، انقر على الخلفية، ثم Delete. للخلفيات المعقدة، استخدم تحديد → الموضوع.',
                '📝 إضافة نص: اختر أداة T، انقر على المساحة، اكتب نصك. غيّر الخط، الحجم، اللون.',
                '💾 التصدير: ملف → تصدير → تصدير كـ → PNG (فعّل الشفافية) أو JPEG.',
                '🎯 لماذا هذا مفيد: Photopea يسمح لك بفعل كل ما كنت تفعله على Canva، لكن بإمكانيات لا نهائية.'
              ],
              en: [
                '🔧 What is Photopea? An online editor that looks 99% like Photoshop, but completely free. Works in your browser.',
                '📐 Interface: Left = toolbar (selection, brush, text, etc.). Right = layers panel. Top = menu and options.',
                '📄 Layers: These are transparent sheets stacked on top of each other. Each element (text, image, shape) must be on its own layer.',
                '🖼️ Opening a photo: File → Open. Double-click on the "Background" layer → OK to unlock it.',
                '✂️ Removing a background: Use the Magic Wand tool, click on the background, then Delete. For complex backgrounds, use Select → Subject.',
                '📝 Adding text: Select the T tool, click on the canvas, type your text. Change font, size, color.',
                '💾 Export: File → Export → Export As → PNG (check Transparency) or JPEG.',
                '🎯 Why this is useful: Photopea lets you do everything you did on Canva, but with infinite possibilities.'
              ]
            },
            method: {
              fr: 'Ouvrez une photo de produit dans Photopea, supprimez l\'arrière-plan, ajoutez un fond blanc, puis ajoutez le nom du produit et son prix en texte. C\'est une simulation parfaite pour créer une publicité professionnelle.',
              ar: 'افتح صورة منتج في Photopea، ازل الخلفية، أضف خلفية بيضاء، ثم أضف اسم المنتج وسعره كنص. هذه محاكاة مثالية لإنشاء إعلان احترافي.',
              en: 'Open a product photo in Photopea, remove the background, add a white background, then add the product name and price as text. This is a perfect simulation for creating a professional ad.'
            },
            exercise: {
              fr: 'Prenez une photo d\'un produit algérien (ex: café, huile d\'olive, miel). Supprimez le fond, placez-le sur fond blanc, ajoutez le prix et le nom avec une belle typographie. Exportez en PNG. Vous venez de créer votre première pub professionnelle.',
              ar: 'خذ صورة منتج جزائري (مثال: قهوة، زيت زيتون، عسل). ازل الخلفية، ضعه على خلفية بيضاء، أضف السعر والاسم بخط جميل. صدّر PNG. أنت الآن أنشأت أول إعلان احترافي لك.',
              en: 'Take a photo of an Algerian product (e.g.: coffee, olive oil, honey). Remove the background, place it on a white background, add price and name with a nice font. Export as PNG. You\'ve just created your first professional ad.'
            },
            tip: {
              fr: '💡 Astuce pro: Pour ajouter une ombre portée à votre produit, faites un clic droit sur le calque, choisissez "Options de fusion", puis "Ombre portée". Réglez l\'opacité à 40%, la distance à 10px, le flou à 20px. Le résultat devient instantanément plus professionnel.',
              ar: '💡 نصيحة احترافية: لإضافة ظل مسقط لمنتجك، انقر يميناً على الطبقة، اختر "خيارات المزج"، ثم "ظل مسقط". اضبط الشفافية على 40%، المسافة 10px، التعتيم 20px. النتيجة تصبح أكثر احترافية فوراً.',
              en: '💡 Pro tip: To add a drop shadow to your product, right-click on the layer, choose "Blending Options", then "Drop Shadow". Set opacity to 40%, distance to 10px, blur to 20px. The result instantly becomes more professional.'
            }
          }
        ]
      },
      // ===== ADVANCED =====
      {
        name: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
        badge: '🔥',
        duration: { fr: 'Semaines 11–20', ar: 'الأسابيع 11–20', en: 'Weeks 11–20' },
        goal: { fr: 'Maîtriser les outils vectoriels et créer des identités visuelles complètes', ar: 'إتقان الأدوات المتجهة وإنشاء هويات بصرية كاملة', en: 'Master vector tools and create complete visual identities' },
        lessons: [
          {
            id: 'd-a-1',
            title: { fr: 'Les vecteurs — Le secret des logos professionnels', ar: 'الفيكتورات — سر الشعارات الاحترافية', en: 'Vectors — The secret of professional logos' },
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
            layout: 'right',
            steps: {
              fr: [
                '🔍 Qu\'est-ce qu\'un vecteur? Une image mathématique qui peut être agrandie à l\'infini sans perdre en qualité. Contrairement aux images classiques (JPEG, PNG) qui deviennent floues quand on les agrandit.',
                '🛠️ Inkscape: L\'outil vectoriel gratuit (inkscape.org). Très similaire à Adobe Illustrator, mais totalement gratuit.',
                '✏️ L\'outil Plume (P): L\'outil le plus important pour dessiner des formes précises. Cliquez pour créer un angle droit. Cliquez et glissez pour créer une courbe.',
                '📐 Pathfinder: Des outils qui transforment vos formes. Unir (fusionner), Soustraire (enlever), Intersection (garder le chevauchement).',
                '🎨 Couleurs: Sélectionnez une forme, cliquez sur le carré de remplissage en bas à gauche, entrez le code hexadécimal (ex: #FF0000 pour le rouge).',
                '💡 Pourquoi c\'est important: Les logos vectoriels sont indispensables pour les marques professionnelles.',
                '🚀 Application: Recréez le logo d\'une marque algérienne (Ooredoo, Djezzy) en vectoriel.',
                '📊 Résultat: Vous saurez créer des logos que les clients pourront utiliser sur des cartes de visite ET sur des panneaux géants.'
              ],
              ar: [
                '🔍 ما هو الفيكتور؟ صورة رياضية يمكن تكبيرها إلى ما لا نهاية دون فقدان الجودة. عكس الصور العادية (JPEG، PNG) التي تصبح ضبابية عند تكبيرها.',
                '🛠️ Inkscape: الأداة المتجهة المجانية (inkscape.org). شبيهة جداً بـ Adobe Illustrator، لكنها مجانية تماماً.',
                '✏️ أداة القلم (P): الأداة الأهم لرسم أشكال دقيقة. اضغط لزاوية مستقيمة. اضغط واسحب لمنحنى.',
                '📐 Pathfinder: أدوات تحول أشكالك. توحيد (دمج)، طرح (إزالة)، تقاطع (الحفاظ على التداخل).',
                '🎨 الألوان: اختر شكلاً، انقر على مربع التعبئة في الأسفل اليسار، أدخل الكود السداسي (مثال: #FF0000 للأحمر).',
                '💡 لماذا هذا مهم: الشعارات المتجهة ضرورية للعلامات التجارية الاحترافية.',
                '🚀 التطبيق: أعد إنشاء شعار علامة جزائرية (Ooredoo، Djezzy) كفيكتور.',
                '📊 النتيجة: ستعرف كيف تنشئ شعارات يمكن للزبائن استخدامها على بطاقات أعمال وعلى لوحات إعلانية ضخمة.'
              ],
              en: [
                '🔍 What is a vector? A mathematical image that can be scaled infinitely without losing quality. Unlike regular images (JPEG, PNG) that become blurry when enlarged.',
                '🛠️ Inkscape: The free vector tool (inkscape.org). Very similar to Adobe Illustrator, but completely free.',
                '✏️ Pen Tool (P): The most important tool for drawing precise shapes. Click for a straight corner. Click and drag for a curve.',
                '📐 Pathfinder: Tools that transform your shapes. Unite (merge), Subtract (remove), Intersection (keep the overlap).',
                '🎨 Colors: Select a shape, click on the fill square at bottom left, enter the hex code (e.g.: #FF0000 for red).',
                '💡 Why this matters: Vector logos are essential for professional brands.',
                '🚀 Application: Recreate an Algerian brand\'s logo (Ooredoo, Djezzy) as vector.',
                '📊 Result: You\'ll know how to create logos that clients can use on business cards AND on giant billboards.'
              ]
            },
            method: {
              fr: 'Recréez un logo simple (ex: Ooredoo) en utilisant UNIQUEMENT l\'outil Plume dans Inkscape. Ne vous découragez pas si ce n\'est pas parfait au premier essai — c\'est normal. Répétez l\'exercice avec 5 logos différents sur une semaine.',
              ar: 'أعد إنشاء شعار بسيط (مثال: Ooredoo) باستخدام أداة القلم فقط في Inkscape. لا تيأس إذا لم يكن مثالياً في المحاولة الأولى — هذا طبيعي. كرر التمرين مع 5 شعارات مختلفة على مدار أسبوع.',
              en: 'Recreate a simple logo (e.g.: Ooredoo) using ONLY the Pen Tool in Inkscape. Don\'t get discouraged if it\'s not perfect on the first try — that\'s normal. Repeat the exercise with 5 different logos over a week.'
            },
            exercise: {
              fr: 'Choisissez une marque algérienne et recréez son logo en vectoriel. Exportez-le en PNG transparent, en PNG blanc, en PNG noir, et en PDF. Vous avez maintenant un logo prêt pour tout type de support.',
              ar: 'اختر علامة تجارية جزائرية وأعد إنشاء شعارها كفيكتور. صدّره كـ PNG شفاف، PNG أبيض، PNG أسود، وPDF. لديك الآن شعار جاهز لأي نوع من الدعم.',
              en: 'Choose an Algerian brand and recreate its logo as vector. Export it as transparent PNG, white PNG, black PNG, and PDF. You now have a logo ready for any type of support.'
            },
            tip: {
              fr: '💡 Business idea: Si un client a un logo en JPEG, proposez-lui de le vectoriser. Facturez 3000-8000 DZD pour 30-90 minutes de travail. C\'est une demande très courante que les designers débutants peuvent facilement satisfaire.',
              ar: '💡 فكرة تجارية: إذا كان لدى زبون شعار بصيغة JPEG، اقترح عليه تحويله إلى فيكتور. اشحن 3000-8000 دج مقابل 30-90 دقيقة عمل. هذا طلب شائع جداً يمكن للمصممين المبتدئين تلبيته بسهولة.',
              en: '💡 Business idea: If a client has a JPEG logo, offer to vectorize it. Charge 3000-8000 DZD for 30-90 minutes of work. This is a very common request that beginner designers can easily fulfill.'
            }
          }
        ]
      },
      // ===== MASTER =====
      {
        name: { fr: 'Maître', ar: 'محترف', en: 'Master' },
        badge: '👑',
        duration: { fr: 'Mois 6+', ar: 'الشهر 6+', en: 'Month 6+' },
        goal: { fr: 'Construire votre agence de design et former votre équipe', ar: 'بناء وكالة التصميم الخاصة بك وتشكيل فريقك', en: 'Build your design agency and form your team' },
        lessons: [
          {
            id: 'd-m-1',
            title: { fr: 'De freelance à agence — Comment passer à l\'échelle supérieure', ar: 'من فريلانس إلى وكالة — كيف تنتقل إلى المستوى التالي', en: 'From freelancer to agency — How to scale up' },
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                '🚀 Le bon moment: Quand votre travail dépasse votre capacité individuelle ET que vous refusez des projets. C\'est le signal qu\'il est temps de grandir.',
                '👥 Votre premier collaborateur: Votre meilleur étudiant ou un designer en ligne. Payez-le par projet, 40-50% du montant. C\'est gagnant-gagnant.',
                '🎯 Vos rôles: Vous gérez l\'acquisition de clients et les propositions de qualité. Votre équipe gère l\'exécution.',
                '🏢 Créer votre marque: Nom, logo, site Carrd.co (gratuit, 30 minutes), Instagram professionnel.',
                '💰 Forfaits proposés: Starter (25K/mois) pour les petites entreprises, Croissance (55K/mois) pour les PME, Premium (100K+/mois) pour les grandes marques.',
                '🎯 Ciblez les agences publicitaires: Un seul client agence équivaut à 10 clients individuels en termes de revenus.',
                '📊 Stratégie: Spécialisez-vous dans un secteur particulier (restauration, santé, e-commerce). Les spécialistes facturent plus cher.',
                '🏆 Résultat: Vous passez de 1 client à une agence qui gère 10 clients avec la même charge de travail.'
              ],
              ar: [
                '🚀 الوقت المناسب: عندما يتجاوز عملك قدرتك الفردية وترفض مشاريع. هذه إشارة أن الوقت قد حان للنمو.',
                '👥 أول متعاون لك: أفضل طالب لديك أو مصمم أونلاين. ادفع له بالمشروع، 40-50% من المبلغ. هذا ربح للطرفين.',
                '🎯 أدوارك: أنت تدير استقطاب العملاء والعروض الجيدة. فريقك يدير التنفيذ.',
                '🏢 إنشاء علامتك التجارية: اسم، شعار، موقع Carrd.co (مجاني، 30 دقيقة)، Instagram احترافي.',
                '💰 الباقات المقترحة: Starter (25K/شهر) للشركات الصغيرة، Croissance (55K/شهر) للمؤسسات المتوسطة، Premium (100K+/شهر) للعلامات الكبيرة.',
                '🎯 استهدف وكالات الإعلان: زبون وكالة واحد يساوي 10 زبائن أفراد من حيث الإيرادات.',
                '📊 استراتيجية: تخصّص في قطاع معين (المطاعم، الصحة، التجارة الإلكترونية). المتخصصون يشحنون أكثر.',
                '🏆 النتيجة: تنتقل من زبون واحد إلى وكالة تدير 10 زبائن بنفس عبء العمل.'
              ],
              en: [
                '🚀 The right time: When your work exceeds your individual capacity AND you\'re refusing projects. That\'s the signal it\'s time to grow.',
                '👥 Your first collaborator: Your best student or an online designer. Pay them per project, 40-50% of the amount. It\'s win-win.',
                '🎯 Your roles: You handle client acquisition and quality proposals. Your team handles execution.',
                '🏢 Creating your brand: Name, logo, Carrd.co site (free, 30 minutes), professional Instagram.',
                '💰 Packages offered: Starter (25K/month) for small businesses, Growth (55K/month) for SMEs, Premium (100K+/month) for big brands.',
                '🎯 Target advertising agencies: One agency client equals 10 individual clients in terms of revenue.',
                '📊 Strategy: Specialize in a specific sector (restaurants, health, e-commerce). Specialists charge more.',
                '🏆 Result: You go from 1 client to an agency managing 10 clients with the same workload.'
              ]
            },
            method: {
              fr: 'Identifiez une entreprise algérienne avec un design faible. Refaites leur logo + 3 posts pour leur Instagram gratuitement. Envoyez-leur en disant "Je voulais vous montrer ce qui est possible". Ce pitch non sollicité vous ouvrira des portes.',
              ar: 'حدد شركة جزائرية بتصميم ضعيف. أعد تصميم شعارهم + 3 منشورات لـ Instagram مجاناً. أرسل لهم قائلاً "أردت أن أريك ما هو ممكن". هذا العرض غير المطلوب سيفتح لك أبواباً.',
              en: 'Identify an Algerian business with weak design. Redo their logo + 3 posts for their Instagram for free. Send it saying "I wanted to show you what\'s possible". This unsolicited pitch will open doors for you.'
            },
            exercise: {
              fr: 'Créez un modèle d\'affaires sur 1 page: votre niche, 3 forfaits avec prix, votre garantie, 3 canaux d\'acquisition, et votre objectif de revenus à 6 mois. Ce document vous servira de feuille de route.',
              ar: 'أنشئ نموذج عمل في صفحة واحدة: تخصصك، 3 باقات مع أسعار، ضمانك، 3 قنوات استقطاب، وهدف إيراداتك في 6 أشهر. هذه الوثيقة ستكون خريطة طريقك.',
              en: 'Create a business model on 1 page: your niche, 3 packages with prices, your guarantee, 3 acquisition channels, and your 6-month revenue goal. This document will be your roadmap.'
            },
            tip: {
              fr: '💡 La stratégie la plus rapide: spécialisez-vous dans UN secteur (ex: restaurants algériens). Les spécialistes facturent 2-3x plus que les généralistes. Un client qui vous recommande dans son secteur est votre meilleur marketing.',
              ar: '💡 أسرع استراتيجية: تخصّص في قطاع واحد (مثال: المطاعم الجزائرية). المتخصصون يشحنون 2-3 أضعاف العامين. زبون يوصي بك في قطاعه هو أفضل تسويق لك.',
              en: '💡 The fastest strategy: specialize in ONE sector (e.g.: Algerian restaurants). Specialists charge 2-3x more than generalists. A client who recommends you in their sector is your best marketing.'
            }
          }
        ]
      }
    ]
  },
  // ============================================================
  // SKILL 2: SOCIAL MEDIA MANAGEMENT (DÉTAILLÉ)
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
      // ===== BEGINNER =====
      {
        name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
        badge: '🌱',
        duration: { fr: 'Semaines 1–3', ar: 'الأسابيع 1–3', en: 'Weeks 1–3' },
        goal: { fr: 'Comprendre les algorithmes et créer une stratégie de contenu qui attire des clients', ar: 'تفهم الخوارزميات وإنشاء استراتيجية محتوى تجذب العملاء', en: 'Understand algorithms and create a content strategy that attracts clients' },
        lessons: [
          {
            id: 's-b-1',
            title: { fr: 'Configurer un compte business professionnel sur Instagram et Facebook', ar: 'إعداد حساب Business احترافي على Instagram وFacebook', en: 'Set up a professional business account on Instagram and Facebook' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: [
                '📱 Instagram: Allez dans votre Profil → les 3 lignes en haut à droite → Paramètres → Compte → "Passer en compte professionnel" → choisissez "Business".',
                '📘 Facebook: Rendez-vous sur facebook.com/pages/create → sélectionnez "Entreprise" → donnez un nom et une catégorie à votre page.',
                '🔗 Meta Business Suite: business.facebook.com → connectez votre Page Facebook et votre compte Instagram.',
                '💬 WhatsApp Business: Téléchargez l\'application, utilisez un numéro professionnel et liez-le à votre compte Facebook. Indispensable en Algérie.',
                '✅ Profil 100%: Photo professionnelle, bio de 80 caractères max, lien bio (linktr.ee), localisation, bouton "Contacter" activé.',
                '📂 Dossier "Contenu Client": Créez un dossier sur votre ordinateur pour chaque client avec photos, vidéos, légendes prêtes à l\'emploi.',
                '🎯 Pourquoi c\'est important: Les clients potentiels jugent votre professionnalisme en 3 secondes. Un profil complet inspire confiance.',
                '📊 Résultat: Vous avez maintenant une présence professionnelle prête à attirer vos premiers clients.'
              ],
              ar: [
                '📱 Instagram: روح للبروفيل → 3 خطوط في الأعلى → إعدادات → حساب → "تحويل لحساب محترف" → اختار "Business".',
                '📘 Facebook: روح لـ facebook.com/pages/create → اختار "مشروع" → سمّي صفحتك وحدّد الفئة.',
                '🔗 Meta Business Suite: business.facebook.com → اربط صفحة Facebook وحساب Instagram.',
                '💬 WhatsApp Business: حمّل التطبيق، استخدم رقم احترافي واربطه بحساب Facebook. ضروري في الجزائر.',
                '✅ بروفيل 100%: صورة احترافية، bio 80 حرف كحد أقصى، رابط bio (linktr.ee)، الموقع، زر "تواصل" مفعّل.',
                '📂 مجلد "محتوى الزبون": أنشئ مجلداً على كمبيوتريك لكل زبون فيه صور، فيديوهات، تعليقات جاهزة.',
                '🎯 لماذا هذا مهم: الزبائن المحتملون يحكمون على احترافيتك في 3 ثوانٍ. بروفيل كامل يلهم الثقة.',
                '📊 النتيجة: لديك الآن حضور احترافي جاهز لجذب أول زبائنك.'
              ],
              en: [
                '📱 Instagram: Go to your Profile → the 3 lines at top right → Settings → Account → "Switch to Professional Account" → choose "Business".',
                '📘 Facebook: Go to facebook.com/pages/create → select "Business" → name your page and choose a category.',
                '🔗 Meta Business Suite: business.facebook.com → connect your Facebook Page and Instagram account.',
                '💬 WhatsApp Business: Download the app, use a professional number and link it to your Facebook account. Essential in Algeria.',
                '✅ 100% Profile: Professional photo, 80-char bio, bio link (linktr.ee), location, "Contact" button activated.',
                '📂 "Client Content" folder: Create a folder on your computer for each client with photos, videos, ready-to-use captions.',
                '🎯 Why it matters: Potential clients judge your professionalism in 3 seconds. A complete profile inspires trust.',
                '📊 Result: You now have a professional presence ready to attract your first clients.'
              ]
            },
            method: {
              fr: 'Créez un compte Instagram test avec une nouvelle adresse email. Appelez-le "DZFoodTest". Utilisez-le comme bac à sable pour tester toutes vos stratégies sans risquer votre compte principal.',
              ar: 'أنشئ حساب Instagram تجريبي بإيميل جديد. سمّيه "DZFoodTest". استخدمه كصندوق رمل لتجربة كل استراتيجياتك دون المخاطرة بحسابك الرئيسي.',
              en: 'Create a test Instagram account with a new email address. Call it "DZFoodTest". Use it as a sandbox to test all your strategies without risking your main account.'
            },
            exercise: {
              fr: 'Configurez un profil business complet pour un restaurant fictif sur Instagram ET Facebook. Connectez les deux comptes à Meta Business Suite. Prenez une capture d\'écran du profil à 100% comme preuve de votre travail.',
              ar: 'اعدد بروفيل business كامل لمطعم وهمي على Instagram وFacebook. اربط الحسابين بـ Meta Business Suite. خذ لقطة شاشة للبروفيل 100% كدليل على عملك.',
              en: 'Set up a complete business profile for a fictional restaurant on Instagram AND Facebook. Connect both accounts to Meta Business Suite. Screenshot the 100% profile as proof of your work.'
            },
            tip: {
              fr: '💡 Linktr.ee est gratuit et vous permet de créer une page avec plusieurs boutons: WhatsApp, Facebook, Menu, Localisation. C\'est la solution la plus professionnelle pour les entreprises algériennes.',
              ar: '💡 linktr.ee مجاني ويسمح لك بإنشاء صفحة بعدة أزرار: WhatsApp، Facebook، القائمة، الموقع. هذا هو الحل الأكثر احترافية للشركات الجزائرية.',
              en: '💡 Linktr.ee is free and lets you create a page with multiple buttons: WhatsApp, Facebook, Menu, Location. This is the most professional solution for Algerian businesses.'
            }
          }
        ]
      }
    ]
  }
  // ===== SKILL 3: VIDEO EDITING =====
  // ===== SKILL 4: WEB DEVELOPMENT =====
  // ===== SKILL 5: SEO =====
  // ===== SKILL 6: DATA ANALYSIS =====
  // ===== SKILL 7: COPYWRITING =====
  // ===== SKILL 8: UI/UX DESIGN =====
  // ===== SKILL 9: AUTOMATION WITH N8N =====
  // ===== SKILL 10: VIBE CODING =====
];