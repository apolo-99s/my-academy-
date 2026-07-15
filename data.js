// ===== SKILL 10: VIBE CODING (AI-Powered Development) =====
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
    // LEVEL 1: BEGINNER - 8 Lessons
    {
      name: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
      badge: '🌱',
      duration: { fr: 'Semaines 1–4', ar: 'الأسابيع 1–4', en: 'Weeks 1–4' },
      goal: { fr: 'Maîtriser les bases du Vibe Coding et créer votre première application avec l\'IA', ar: 'إتقان أساسيات البرمجة بالذكاء الاصطناعي وإنشاء أول تطبيق لك', en: 'Master Vibe Coding basics and create your first AI-powered application' },
      lessons: [
        {
          id: 'vc-b-1',
          title: { fr: 'Qu\'est-ce que le Vibe Coding?', ar: 'ما هي البرمجة بالذكاء الاصطناعي؟', en: 'What is Vibe Coding?' },
          image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
          layout: 'top',
          steps: {
            fr: ['Définition: Vibe Coding = utiliser des assistants IA pour écrire du code','Pourquoi c\'est différent: Vous devenez un "producteur" pas un "codage" traditionnel','L\'IA génère le code, vous guidez et validez les résultats','Exemple: "Crée une calculatrice React" → L\'IA écrit tout le code','Votre rôle: prompt engineer, architecte, testeur, et validateur','Avantages: 10x plus rapide, 100x plus accessible, moins d\'erreurs','Limites: l\'IA fait des erreurs, vous devez comprendre ce qu\'elle produit','Outils principaux: Cursor, GitHub Copilot, ChatGPT, Claude'],
            ar: ['تعريف: البرمجة بالذكاء الاصطناعي = استخدام مساعدين ذكاء اصطناعي لكتابة الأكواد','لماذا مختلف: أنت تصبح "منتجاً" وليس "مبرمجاً" تقليدياً','الذكاء الاصطناعي يكتب الكود، وأنت توجه وتتحقق من النتائج','مثال: "اصنع آلة حاسبة React" → الذكاء الاصطناعي يكتب كل الكود','دورك: مهندس الأوامر، المهندس المعماري، المختبر، والمدقق','المزايا: أسرع بـ10 مرات، أسهل بـ100 مرة، أخطاء أقل','الحدود: الذكاء الاصطناعي يخطئ، عليك فهم ما ينتجه','الأدوات الرئيسية: Cursor، GitHub Copilot، ChatGPT، Claude'],
            en: ['Definition: Vibe Coding = using AI assistants to write code','Why it\'s different: You become a "producer" not a traditional "coder"','AI generates the code, you guide and validate the results','Example: "Create a React calculator" → AI writes all the code','Your role: prompt engineer, architect, tester, and validator','Benefits: 10x faster, 100x more accessible, fewer errors','Limits: AI makes mistakes, you need to understand what it produces','Main tools: Cursor, GitHub Copilot, ChatGPT, Claude']
          },
          method: { fr: 'Installez ChatGPT ou Claude maintenant. Posez-lui une question simple: "Comment créer une page web avec une calculatrice?". Observez la réponse détaillée.', ar: 'ثبّت ChatGPT أو Claude الآن. اسأل سؤالاً بسيطاً: "كيف تصنع صفحة ويب بها آلة حاسبة؟". لاحظ الإجابة المفصلة.', en: 'Install ChatGPT or Claude now. Ask a simple question: "How to create a web page with a calculator?". Observe the detailed response.' },
          exercise: { fr: 'Demandez à ChatGPT de vous expliquer ce qu\'est le Vibe Coding en 100 mots. Puis demandez-lui de vous donner 5 exemples d\'applications qu\'on peut créer avec l\'IA.', ar: 'اطلب من ChatGPT شرح ما هي البرمجة بالذكاء الاصطناعي في 100 كلمة. ثم اطلب منه إعطائك 5 أمثلة لتطبيقات يمكن إنشاؤها بالذكاء الاصطناعي.', en: 'Ask ChatGPT to explain what Vibe Coding is in 100 words. Then ask it to give you 5 examples of applications that can be built with AI.' },
          tip: { fr: '💡 Le Vibe Coding n\'est PAS une triche. C\'est la nouvelle façon de développer.', ar: '💡 البرمجة بالذكاء الاصطناعي ليست غشاً. هذه هي الطريقة الجديدة للتطوير.', en: '💡 Vibe Coding is NOT cheating. It\'s the new way to develop.' }
        },
        {
          id: 'vc-b-2',
          title: { fr: 'L\'État d\'Esprit du Programmeur IA', ar: 'عقلية المبرمج بالذكاء الاصطناعي', en: 'AI Programming Mindset' },
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
          layout: 'right',
          steps: {
            fr: ['Passer de "comment coder" à "comment décrire ce que je veux"','L\'IA excelle avec des instructions claires et détaillées','Apprenez à penser en "spécifications" pas en "syntaxe"','Développez la patience: l\'IA peut avoir besoin de 2-3 essais','Acceptez que vous allez faire des erreurs - c\'est comme ça qu\'on apprend','Pratiquez la "lecture critique" du code généré par l\'IA','Commencez petit: chaque grand projet commence par un petit pas','Célébrez chaque victoire: chaque application construite est une réussite'],
            ar: ['الانتقال من "كيف أكتب كوداً" إلى "كيف أصف ما أريد"','الذكاء الاصطناعي يتفوق مع التعليمات الواضحة والمفصلة','تعلم التفكير في "مواصفات" وليس في "صياغة"','طوّر الصبر: قد يحتاج الذكاء الاصطناعي 2-3 محاولات','تقبل أنك سترتكب أخطاء - هكذا تتعلم','مارس "القراءة النقدية" للكود المولد بواسطة الذكاء الاصطناعي','ابدأ صغيراً: كل مشروع كبير يبدأ بخطوة صغيرة','احتفل بكل انتصار: كل تطبيق تبني هو نجاح'],
            en: ['Shift from "how to code" to "how to describe what I want"','AI excels with clear and detailed instructions','Learn to think in "specifications" not "syntax"','Develop patience: AI may need 2-3 attempts','Accept that you will make mistakes - that\'s how you learn','Practice "critical reading" of AI-generated code','Start small: every big project starts with a small step','Celebrate every victory: every app built is a success']
          },
          method: { fr: 'Pendant 15 minutes, ne tapez PAS de code. Utilisez ChatGPT pour décrire une application de liste de tâches en français, sans code.', ar: 'لمدة 15 دقيقة، لا تكتب كوداً. استخدم ChatGPT لوصف تطبيق قائمة مهام بالعربية، بدون كود.', en: 'For 15 minutes, do NOT type code. Use ChatGPT to describe a todo list application in English, without code.' },
          exercise: { fr: 'Écrivez une description détaillée (200 mots) d\'une application de votre choix en utilisant uniquement des mots, pas de code.', ar: 'اكتب وصفاً مفصلاً (200 كلمة) لتطبيق من اختيارك باستخدام الكلمات فقط، بدون كود.', en: 'Write a detailed description (200 words) of an application of your choice using only words, no code.' },
          tip: { fr: '💡 La meilleure façon d\'apprendre le Vibe Coding est de COMMENCER. Ne lisez pas trop sur le sujet - construisez quelque chose aujourd\'hui!', ar: '💡 أفضل طريقة لتعلم البرمجة بالذكاء الاصطناعي هي أن تبدأ. لا تقرأ كثيراً عن الموضوع - ابنِ شيئاً اليوم!', en: '💡 The best way to learn Vibe Coding is to START. Don\'t read too much about it - build something today!' }
        },
        {
          id: 'vc-b-3',
          title: { fr: 'Fondamentaux du Prompt Engineering', ar: 'أساسيات هندسة الأوامر', en: 'Prompt Engineering Fundamentals' },
          image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
          layout: 'left',
          steps: {
            fr: ['Prompt Engineering = l\'art de parler à l\'IA pour obtenir les meilleurs résultats','Règle 1: SOYEZ SPÉCIFIQUE. "Fais une calculatrice" vs "Fais une calculatrice React avec des boutons 0-9, +, -, *, /, =, et une interface moderne"','Règle 2: DONNEZ UN CONTEXTE. "Je suis un débutant, explique comme si j\'avais 6 mois d\'expérience"','Règle 3: DEMANDEZ DES EXPLICATIONS. "Explique chaque ligne de code"','Règle 4: UTILISEZ DES EXEMPLES. "Comme ceci: [exemple]"','Règle 5: ITÉREZ. La première réponse n\'est jamais parfaite, affinez','Règle 6: SPÉCIFIEZ LE FORMAT. "Donne-moi le code en un seul fichier HTML"','Règle 7: DÉCOMPOSEZ. "D\'abord fais la structure, puis ajoute le style, puis les fonctionnalités"'],
            ar: ['هندسة الأوامر = فن التحدث مع الذكاء الاصطناعي للحصول على أفضل النتائج','القاعدة 1: كُن مُحدداً. "اصنع آلة حاسبة" vs "اصنع آلة حاسبة React بأزرار 0-9، +، -، *، /، =، وواجهة عصرية"','القاعدة 2: قدم السياق. "أنا مبتدئ، اشرح كما لو كان لدي 6 أشهر خبرة"','القاعدة 3: اطلب تفسيرات. "اشرح كل سطر من الكود"','القاعدة 4: استخدم الأمثلة. "مثل هذا: [مثال]"','القاعدة 5: كرر وحسّن. الإجابة الأولى ليست مثالية أبداً، حسّنها','القاعدة 6: حدد التنسيق. "أعطني الكود في ملف HTML واحد"','القاعدة 7: قسّم. "أولاً اصنع الهيكل، ثم أضف التنسيق، ثم الوظائف"'],
            en: ['Prompt Engineering = the art of talking to AI to get the best results','Rule 1: BE SPECIFIC. "Make a calculator" vs "Make a React calculator with 0-9 buttons, +, -, *, /, =, and a modern interface"','Rule 2: GIVE CONTEXT. "I\'m a beginner, explain like I have 6 months experience"','Rule 3: ASK FOR EXPLANATIONS. "Explain each line of code"','Rule 4: USE EXAMPLES. "Like this: [example]"','Rule 5: ITERATE. The first response is never perfect, refine it','Rule 6: SPECIFY FORMAT. "Give me the code in a single HTML file"','Rule 7: DECOMPOSE. "First make the structure, then add styling, then functionality"']
          },
          method: { fr: 'Prenez votre description d\'application de la leçon précédente. Transformez-la en prompt structuré en utilisant les 7 règles.', ar: 'خذ وصف تطبيقك من الدرس السابق. حوّله إلى أمر منظم باستخدام القواعد السبع.', en: 'Take your app description from the previous lesson. Turn it into a structured prompt using the 7 rules.' },
          exercise: { fr: 'Écrivez 5 prompts différents pour la même application: "une application météo". Variez le niveau de détail, le contexte, et le format.', ar: 'اكتب 5 أوامر مختلفة لنفس التطبيق: "تطبيق الطقس". تنوع في مستوى التفاصيل والسياق والتنسيق.', en: 'Write 5 different prompts for the same application: "a weather app". Vary detail level, context, and format.' },
          tip: { fr: '💡 Le meilleur prompt commence toujours par un objectif clair. "Je veux créer une application qui..." Dites à l\'IA ce que vous voulez construire, pas comment le construire.', ar: '💡 أفضل أمر يبدأ دائماً بهدف واضح. "أريد إنشاء تطبيق..." أخبر الذكاء الاصطناعي بما تريد بناءه، وليس كيفية بنائه.', en: '💡 The best prompt always starts with a clear goal. "I want to build an app that..." Tell the AI what you want to build, not how to build it.' }
        },
        {
          id: 'vc-b-4',
          title: { fr: 'Utiliser les Assistants de Codage IA', ar: 'استخدام مساعدي البرمجة بالذكاء الاصطناعي', en: 'Using AI Coding Assistants' },
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
          layout: 'top',
          steps: {
            fr: ['Cursor AI: Le meilleur éditeur IA (téléchargez gratuitement)','GitHub Copilot: Assistant intégré à VSCode','Configurer Cursor: Fichier → Préférences → IA → Activez','Interface: Barre latérale de chat, autocomplétion, génération de code','Raccourci Cursor: Ctrl+K pour générer, Ctrl+L pour chat','Demandez à l\'IA d\'écrire du code directement dans le fichier','Utilisez @ pour mentionner des fichiers spécifiques dans le chat','Exemple: @App.jsx "Ajoute un état pour les tâches"'],
            ar: ['Cursor AI: أفضل محرر ذكاء اصطناعي (حمّله مجاناً)','GitHub Copilot: مساعد مدمج في VSCode','إعداد Cursor: ملف → تفضيلات → الذكاء الاصطناعي → فعّل','الواجهة: شريط جانبي للمحادثة، إكمال تلقائي، توليد الكود','اختصار Cursor: Ctrl+K للتوليد، Ctrl+L للمحادثة','اطلب من الذكاء الاصطناعي كتابة كود مباشرة في الملف','استخدم @ لذكر ملفات محددة في المحادثة','مثال: @App.jsx "أضف حالة للمهام"'],
            en: ['Cursor AI: The best AI editor (download for free)','GitHub Copilot: Assistant integrated into VSCode','Setup Cursor: File → Preferences → AI → Enable','Interface: Sidebar chat, autocomplete, code generation','Cursor shortcut: Ctrl+K to generate, Ctrl+L to chat','Ask AI to write code directly into the file','Use @ to mention specific files in chat','Example: @App.jsx "Add state for todos"']
          },
          method: { fr: 'Téléchargez Cursor AI maintenant. Ouvrez-le et créez un nouveau fichier HTML. Appuyez sur Ctrl+K et tapez: "Crée une page HTML avec un en-tête, une section principale, et un pied de page".', ar: 'حمّل Cursor AI الآن. افتحه وأنشئ ملف HTML جديد. اضغط Ctrl+K واكتب: "أنشئ صفحة HTML برأس وقسم رئيسي وتذييل".', en: 'Download Cursor AI now. Open it and create a new HTML file. Press Ctrl+K and type: "Create an HTML