// ============================================================
// DATA.JS - 10 SKILLS AVEC BACKGROUND IMAGES + CONTENU COMPLET
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
// SKILLS (10 SKILLS AVEC BACKGROUND IMAGES + CONTENU COMPLET)
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
              fr: ['Allez sur canva.com ou téléchargez l\'app depuis Google Play ou App Store.','Cliquez S\'inscrire et créez un compte gratuit avec votre email ou Google.','Cliquez Créer un design en haut du tableau de bord.','Choisissez Post Instagram Carré — canvas vierge 1080x1080px.','Panneau GAUCHE: Templates, Éléments, Texte, Arrière-plan, Téléchargements.','Barre du HAUT: contrôles de police, couleurs, position.','Ctrl+Z pour annuler. Ctrl+D pour dupliquer.','Bouton Partager → Télécharger → PNG pour réseaux ou PDF pour impression.'],
              ar: ['روح لـ canva.com أو حمّل التطبيق من Google Play أو App Store.','اضغط سجّل وأنشئ حساب مجاني بإيميلك أو Google.','اضغط إنشاء تصميم في الأعلى.','اختار منشور Instagram — canvas فارغ 1080x1080px.','اللوحة اليسرى: Templates، عناصر، نص، خلفية، تحميلات.','شريط الأعلى: خطوط، ألوان، موضع.','Ctrl+Z للتراجع. Ctrl+D للنسخ.','زر مشاركة → تحميل → PNG للسوشيال أو PDF للطباعة.'],
              en: ['Go to canva.com or download the app from Google Play or App Store.','Click Sign Up and create a free account with your email or Google.','Click Create a design at the top of the dashboard.','Choose Instagram Post Square — blank 1080x1080px canvas.','LEFT panel: Templates, Elements, Text, Background, Uploads.','TOP toolbar: font controls, colors, position.','Ctrl+Z to undo. Ctrl+D to duplicate.','Share button → Download → PNG for social or PDF for print.']
            },
            method: { fr: 'Ouvrez Canva maintenant et passez 20 minutes à cliquer sur chaque bouton. Ne dessinez rien — explorez juste.', ar: 'افتح Canva الآن واقضِ 20 دقيقة تضغط على كل زر. ما تصمّمش شيء — بس استكشف.', en: 'Open Canva right now and spend 20 minutes clicking every button. Do not design anything — just explore.' },
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
        goal: { fr: 'Maîtriser Illustrator', ar: 'إتقان Illustrator', en: 'Master Illustrator' },
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
        goal: { fr: 'Diriger une agence de design', ar: 'إدارة أجنسي تصميم', en: 'Run a design agency' },
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
  // ===== SKILL 2: SOCIAL MEDIA MANAGEMENT =====
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
            title: { fr: 'Configurer un Compte Business', ar: 'إعداد حساب Business', en: 'Set Up a Business Account' },
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
            layout: 'top',
            steps: {
              fr: ['Instagram: Profil → 3 lignes → Paramètres → Compte → Passer en compte professionnel → Business.','Facebook: facebook.com/pages/create → Entreprise → nom + catégorie → remplissez TOUS les champs.','Meta Business Suite: business.facebook.com → connectez Page + Instagram → gère les deux.','WhatsApp Business: téléchargez app → numéro professionnel → liez dans Facebook. Indispensable Algérie.','Profil 100%: photo bio 80 chars lien bio linktr.ee gratuit localisation bouton contact.','Dossier Contenu Client: Photos Vidéos Légendes Posts approuvés.'],
              ar: ['Instagram: بروفيل → 3 خطوط → إعدادات → حساب → تحويل لحساب محترف → Business.','Facebook: facebook.com/pages/create → مشروع → اسم