// HSC SmartPrep BD
// বাংলা প্রশ্নব্যাংক — MCQ, সৃজনশীল ও বোর্ড প্রশ্ন

window.HSC_SMARTPREP_DATA = {
  subjects: [
    { id: "physics", name: "পদার্থবিজ্ঞান" },
    { id: "chemistry", name: "রসায়ন" },
    { id: "higher-math", name: "উচ্চতর গণিত" },
    { id: "biology", name: "জীববিজ্ঞান" },
    { id: "ict", name: "তথ্য ও যোগাযোগ প্রযুক্তি" }
  ],

  mcqQuestions: [
    {
      id: 1,
      subject: "physics",
      chapter: "ভৌত জগৎ ও পরিমাপ",
      question: "দৈর্ঘ্যের SI একক কোনটি?",
      options: ["সেকেন্ড", "মিটার", "কিলোগ্রাম", "নিউটন"],
      answer: 1,
      explanation: "দৈর্ঘ্যের SI একক হলো মিটার।"
    },
    {
      id: 2,
      subject: "physics",
      chapter: "গতি",
      question: "বেগের SI একক কোনটি?",
      options: ["মিটার/সেকেন্ড", "মিটার", "সেকেন্ড", "কিলোমিটার"],
      answer: 0,
      explanation: "বেগ = সরণ / সময়। তাই একক m/s।"
    },
    {
      id: 3,
      subject: "physics",
      chapter: "গতি",
      question: "ত্বরণের SI একক কোনটি?",
      options: ["m/s", "m/s²", "kg/m", "N/m"],
      answer: 1,
      explanation: "ত্বরণের একক মিটার প্রতি সেকেন্ড বর্গ।"
    },
    {
      id: 4,
      subject: "physics",
      chapter: "নিউটনীয় বলবিদ্যা",
      question: "নিউটনের দ্বিতীয় সূত্র অনুযায়ী বলের সমীকরণ কোনটি?",
      options: ["F = ma", "F = mv", "F = m/a", "F = a/m"],
      answer: 0,
      explanation: "নেট বল = ভর × ত্বরণ।"
    },

    {
      id: 5,
      subject: "chemistry",
      chapter: "পরমাণুর গঠন",
      question: "পারমাণবিক সংখ্যা কী নির্দেশ করে?",
      options: ["নিউট্রনের সংখ্যা", "প্রোটনের সংখ্যা", "ভরসংখ্যা", "শক্তিস্তরের সংখ্যা"],
      answer: 1,
      explanation: "পারমাণবিক সংখ্যা হলো নিউক্লিয়াসে প্রোটনের সংখ্যা।"
    },
    {
      id: 6,
      subject: "chemistry",
      chapter: "পর্যায় সারণি",
      question: "আধুনিক পর্যায় সূত্রের ভিত্তি কী?",
      options: ["পারমাণবিক ভর", "পারমাণবিক সংখ্যা", "নিউট্রন সংখ্যা", "ঘনত্ব"],
      answer: 1,
      explanation: "মৌলগুলোর ধর্ম পারমাণবিক সংখ্যার পর্যায়বৃত্ত ফাংশন।"
    },
    {
      id: 7,
      subject: "chemistry",
      chapter: "রাসায়নিক বন্ধন",
      question: "NaCl-এ কোন ধরনের বন্ধন থাকে?",
      options: ["সমযোজী", "আয়নিক", "ধাতব", "হাইড্রোজেন"],
      answer: 1,
      explanation: "Na ও Cl-এর মধ্যে ইলেকট্রন স্থানান্তরের ফলে আয়নিক বন্ধন তৈরি হয়।"
    },
    {
      id: 8,
      subject: "chemistry",
      chapter: "মোলের ধারণা",
      question: "এক মোল পদার্থে প্রায় কতটি কণা থাকে?",
      options: ["6.022 × 10²³", "3 × 10⁸", "9.8", "1.6 × 10⁻¹⁹"],
      answer: 0,
      explanation: "অ্যাভোগাড্রো ধ্রুবক প্রায় 6.022 × 10²³ mol⁻¹।"
    },

    {
      id: 9,
      subject: "higher-math",
      chapter: "ম্যাট্রিক্স",
      question: "একটি ২ × ৩ ম্যাট্রিক্সে মোট কয়টি উপাদান থাকে?",
      options: ["৫", "৬", "৯", "১২"],
      answer: 1,
      explanation: "উপাদানের সংখ্যা = সারি × স্তম্ভ = ২ × ৩ = ৬।"
    },
    {
      id: 10,
      subject: "higher-math",
      chapter: "ত্রিকোণমিতি",
      question: "sin²θ + cos²θ-এর মান কত?",
      options: ["০", "১", "২", "tan θ"],
      answer: 1,
      explanation: "মৌলিক পরিচিতি অনুযায়ী sin²θ + cos²θ = 1।"
    },
    {
      id: 11,
      subject: "higher-math",
      chapter: "বীজগণিত",
      question: "x² − 9-এর উৎপাদক কোনটি?",
      options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 3)²", "(x + 9)(x − 1)"],
      answer: 0,
      explanation: "বর্গের অন্তর: a² − b² = (a − b)(a + b)।"
    },
    {
      id: 12,
      subject: "higher-math",
      chapter: "অন্তরীকরণ",
      question: "d(x²)/dx কত?",
      options: ["x", "2x", "x³", "২"],
      answer: 1,
      explanation: "ঘাত নিয়ম অনুযায়ী d(xⁿ)/dx = nxⁿ⁻¹।"
    },

    {
      id: 13,
      subject: "biology",
      chapter: "কোষ ও এর গঠন",
      question: "কোষের শক্তি উৎপাদনের প্রধান অঙ্গাণু কোনটি?",
      options: ["রাইবোজোম", "গলজি বডি", "মাইটোকন্ড্রিয়া", "লাইসোজোম"],
      answer: 2,
      explanation: "মাইটোকন্ড্রিয়ায় কোষীয় শ্বসনের মাধ্যমে অধিকাংশ ATP উৎপন্ন হয়।"
    },
    {
      id: 14,
      subject: "biology",
      chapter: "কোষ বিভাজন",
      question: "মাইটোসিসে সাধারণত কয়টি অপত্য কোষ তৈরি হয়?",
      options: ["একটি", "দুটি", "তিনটি", "চারটি"],
      answer: 1,
      explanation: "একটি মাতৃকোষ থেকে সাধারণত দুটি অপত্য কোষ তৈরি হয়।"
    },
    {
      id: 15,
      subject: "biology",
      chapter: "জিনতত্ত্ব",
      question: "বংশগতির মৌলিক একক কোনটি?",
      options: ["জিন", "টিস্যু", "অঙ্গ", "কোষঝিল্লি"],
      answer: 0,
      explanation: "জিন হলো বংশগত তথ্যের মৌলিক একক।"
    },
    {
      id: 16,
      subject: "biology",
      chapter: "উদ্ভিদ শারীরতত্ত্ব",
      question: "সালোকসংশ্লেষণে উদ্ভিদ প্রধানত কোন গ্যাস গ্রহণ করে?",
      options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই-অক্সাইড", "হাইড্রোজেন"],
      answer: 2,
      explanation: "সালোকসংশ্লেষণে উদ্ভিদ কার্বন ডাই-অক্সাইড ব্যবহার করে।"
    },

    {
      id: 17,
      subject: "ict",
      chapter: "সংখ্যা পদ্ধতি",
      question: "বাইনারি সংখ্যা পদ্ধতিতে কোন দুটি অঙ্ক ব্যবহৃত হয়?",
      options: ["০ ও ১", "১ ও ২", "০ থেকে ৯", "A থেকে F"],
      answer: 0,
      explanation: "বাইনারি সংখ্যা পদ্ধতির ভিত্তি ২; অঙ্ক দুটি ০ ও ১।"
    },
    {
      id: 18,
      subject: "ict",
      chapter: "HTML",
      question: "HTML-এর পূর্ণরূপ কোনটি?",
      options: [
        "High Text Machine Language",
        "HyperText Markup Language",
        "Hyper Transfer Main Language",
        "Home Tool Markup Language"
      ],
      answer: 1,
      explanation: "HTML-এর পূর্ণরূপ HyperText Markup Language।"
    },
    {
      id: 19,
      subject: "ict",
      chapter: "লজিক গেট",
      question: "AND গেটের আউটপুট ১ হয় কখন?",
      options: [
        "সব ইনপুট ০ হলে",
        "যেকোনো একটি ইনপুট ১ হলে",
        "সব ইনপুট ১ হলে",
        "সব সময়"
      ],
      answer: 2,
      explanation: "AND গেটের সব ইনপুট ১ হলেই আউটপুট ১ হয়।"
    },
    {
      id: 20,
      subject: "ict",
      chapter: "ওয়েব ডিজাইন",
      question: "HTML-এ অনুচ্ছেদ তৈরির ট্যাগ কোনটি?",
      options: ["<h1>", "<p>", "<br>", "<img>"],
      answer: 1,
      explanation: "অনুচ্ছেদ তৈরিতে <p> ট্যাগ ব্যবহার করা হয়।"
    }
  ],

  creativeQuestions: [
    {
      id: 1,
      subject: "physics",
      chapter: "গতি",
      stimulus: "একটি বস্তু স্থির অবস্থা থেকে যাত্রা শুরু করে ৫ সেকেন্ডে ২০ m/s বেগ অর্জন করল।",
      questions: [
        { part: "ক", marks: 1, question: "দ্রুতি কী?" },
        { part: "খ", marks: 2, question: "সুষম ত্বরণ বলতে কী বোঝায়?" },
        { part: "গ", marks: 3, question: "বস্তুটির ত্বরণ নির্ণয় করো।" },
        { part: "ঘ", marks: 4, question: "বস্তুটি প্রথম ৫ সেকেন্ডে কত দূরত্ব অতিক্রম করেছে নির্ণয় করো।" }
      ]
    },
    {
      id: 2,
      subject: "chemistry",
      chapter: "পরমাণুর গঠন",
      stimulus: "একটি নিরপেক্ষ পরমাণুর পারমাণবিক সংখ্যা ১১ এবং ভরসংখ্যা ২৩।",
      questions: [
        { part: "ক", marks: 1, question: "আইসোটোপ কী?" },
        { part: "খ", marks: 2, question: "পরমাণুর বৈদ্যুতিক নিরপেক্ষতা ব্যাখ্যা করো।" },
        { part: "গ", marks: 3, question: "পরমাণুটির প্রোটন, নিউট্রন ও ইলেকট্রন সংখ্যা নির্ণয় করো।" },
        { part: "ঘ", marks: 4, question: "পরমাণুটির ইলেকট্রন বিন্যাস লেখো এবং এর পর্যায় ও গ্রুপ নির্ণয় করো।" }
      ]
    },
    {
      id: 3,
      subject: "higher-math",
      chapter: "ম্যাট্রিক্স",
      stimulus: "A = [[১, ২], [৩, ৪]] একটি ২ × ২ ম্যাট্রিক্স।",
      questions: [
        { part: "ক", marks: 1, question: "একক ম্যাট্রিক্স কী?" },
        { part: "খ", marks: 2, question: "ম্যাট্রিক্সের ট্রান্সপোজ বলতে কী বোঝায়?" },
        { part: "গ", marks: 3, question: "A-এর নির্ণায়ক নির্ণয় করো।" },
        { part: "ঘ", marks: 4, question: "A-এর বিপরীত ম্যাট্রিক্স নির্ণয় করো।" }
      ]
    },
    {
      id: 4,
      subject: "biology",
      chapter: "কোষ ও এর গঠন",
      stimulus: "একটি কোষে নিউক্লিয়াস, মাইটোকন্ড্রিয়া ও রাইবোজোম দেখা যায়।",
      questions: [
        { part: "ক", marks: 1, question: "কোষ কী?" },
        { part: "খ", marks: 2, question: "কোষের নিউক্লিয়াসের দুটি কাজ লেখো।" },
        { part: "গ", marks: 3, question: "মাইটোকন্ড্রিয়ার গঠন ও কাজ ব্যাখ্যা করো।" },
        { part: "ঘ", marks: 4, question: "মাইটোকন্ড্রিয়া ও রাইবোজোমের কাজের তুলনা করো।" }
      ]
    },
    {
      id: 5,
      subject: "ict",
      chapter: "সংখ্যা পদ্ধতি",
      stimulus: "একটি কম্পিউটার  (1011)₂ এবং (12)₁₀ সংখ্যার ওপর কাজ করে।",
      questions: [
        { part: "ক", marks: 1, question: "বিট কী?" },
        { part: "খ", marks: 2, question: "বাইনারি সংখ্যা পদ্ধতি ব্যাখ্যা করো।" },
        { part: "গ", marks: 3, question: "(1011)₂-কে দশমিক সংখ্যায় রূপান্তর করো।" },
        { part: "ঘ", marks: 4, question: "(1011)₂ ও (12)₁₀-এর যোগফল বাইনারিতে নির্ণয় করো।" }
      ]
    }
  ],

  boardQuestions: [
    {
      id: 1,
      subject: "physics",
      chapter: "গতি",
      board: "নিজস্ব অনুশীলন",
      year: null,
      question: "একটি বস্তু স্থির অবস্থা থেকে ৪ m/s² সুষম ত্বরণে চলতে শুরু করল। ৫ সেকেন্ড পরে এর বেগ কত হবে?",
      answer: "v = u + at = ০ + ৪ × ৫ = ২০ m/s।",
      note: "এটি অনুশীলনী প্রশ্ন; কোনো নির্দিষ্ট বোর্ড বা বছরের প্রশ্ন হিসেবে দাবি করা হচ্ছে না।"
    },
    {
      id: 2,
      subject: "chemistry",
      chapter: "মোলের ধারণা",
      board: "নিজস্ব অনুশীলন",
      year: null,
      question: "১৮ গ্রাম পানিতে কত মোল পানি রয়েছে? (H₂O-এর মোলার ভর ১৮ g/mol)",
      answer: "মোল সংখ্যা = ভর / মোলার ভর = ১৮ / ১৮ = ১ mol।",
      note: "এটি অনুশীলনী প্রশ্ন; বোর্ডের হুবহু প্রশ্ন নয়।"
    },
    {
      id: 3,
      subject: "higher-math",
      chapter: "ত্রিকোণমিতি",
      board: "নিজস্ব অনুশীলন",
      year: null,
      question: "যদি sin θ = ৩/৫ এবং θ সূক্ষ্মকোণ হয়, তবে cos θ নির্ণয় করো।",
      answer: "cos²θ = ১ − sin²θ = ১ − ৯/২৫ = ১৬/২৫। তাই cos θ = ৪/৫।",
      note: "এটি অনুশীলনী প্রশ্ন; বোর্ডের হুবহু প্রশ্ন নয়।"
    },
    {
      id: 4,
      subject: "biology",
      chapter: "কোষ বিভাজন",
      board: "নিজস্ব অনুশীলন",
      year: null,
      question: "মাইটোসিস ও মিয়োসিসের মধ্যে দুটি পার্থক্য লেখো।",
      answer: "মাইটোসিসে সাধারণত দুটি অপত্য কোষ তৈরি হয় এবং ক্রোমোজোম সংখ্যা অপরিবর্তিত থাকে। মিয়োসিসে সাধারণত চারটি হ্যাপ্লয়েড অপত্য কোষ তৈরি হয় এবং ক্রোমোজোম সংখ্যা অর্ধেক হয়।",
      note: "এটি অনুশীলনী প্রশ্ন; বোর্ডের হুবহু প্রশ্ন নয়।"
    },
    {
      id: 5,
      subject: "ict",
      chapter: "সংখ্যা পদ্ধতি",
      board: "নিজস্ব অনুশীলন",
      year: null,
      question: "(1010)₂-কে দশমিক সংখ্যায় রূপান্তর করো।",
      answer: "(1010)₂ = ১×২³ + ০×২² + ১×২¹ + ০×২⁰ = ১০।",
      note: "এটি অনুশীলনী প্রশ্ন; বোর্ডের হুবহু প্রশ্ন নয়।"
    }
  ]
};

// পুরোনো ধরনের নাম ব্যবহার করা পেজের জন্য সহজ alias
window.mcqQuestions = window.HSC_SMARTPREP_DATA.mcqQuestions;
window.creativeQuestions = window.HSC_SMARTPREP_DATA.creativeQuestions;
window.boardQuestions = window.HSC_SMARTPREP_DATA.boardQuestions;
window.hscSubjects = window.HSC_SMARTPREP_DATA.subjects;