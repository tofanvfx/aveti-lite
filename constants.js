
// Using lorem ipsum for English and a sample Odia text to match the visual
const ENGLISH_LOREM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
const ODIA_LOREM = "";

export const TabType = {
  LESSON_1: 'Lesson 1',
  LESSON_2: 'Lesson 2',
  WORKSHEET_1: 'Worksheet 1',
  LESSON_3: 'Lesson 3',
  LESSON_4: 'Lesson 4',
  REVISION: 'Revision',
  TESTA: 'Testa'
};

export const MOCK_LESSON_DATA = {
  classLevel: "Class 7",
  chapterNumber: "06",
  chapterTitle: "Life Processes in Plants",
  sections: [
    {
      id: 'intro',
      title: 'Aditi',
      subtitle: 'Introduction',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'concept',
      title: 'Bodh',
      subtitle: 'Conceptual Understanding',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'practice',
      title: 'Abhyas',
      subtitle: 'Practice',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'app',
      title: 'Prayog',
      subtitle: 'Application',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'expand',
      title: 'Prasar',
      subtitle: 'Expansion',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    }
  ]
};

const LESSON_1_SECTIONS = [
  {
    id: 'intro',
    title: 'Aditi',
    subtitle: 'Introduction',
    englishText: [
      "Show a small plant or draw one on the board.",
      "Instruct students to draw how the plant may look after 1 month.",
      "Ask some students to share how the plant changed.",
      "Explain that as plants grow, they become taller, their stems become thicker, they grow new leaves, and sometimes fruits and flowers.",
      "Erase the board."
    ],
    odiaText: ODIA_LOREM,
    image: "https://drive.google.com/thumbnail?id=1-QXWiR2M3DLBkqv2nrCGpyU3AGcBBeA9&sz=w500"
  },
  {
    id: 'concept',
    title: 'Bodh',
    subtitle: 'Conceptual Understanding',
    englishText: [
      "Tell the class that they will now find out why plants grow and change over time.",
      "Draw the setup on the board.",
      "Instruct partners to discuss which plant will survive after 1 month and why.",
      "Ask some partners to share their answers.",
      "Explain that only Plant A will survive. This shows that plants need both water and sunlight to live and grow.",
      "Erase the board."
    ],
    odiaText: ODIA_LOREM,
    image: "https://drive.google.com/thumbnail?id=14IA44QPyL0ViJItXB0ZKf_I76hQ_DZTQ&sz=w500"
  },
  {
    id: 'practice',
    title: 'Abhyas',
    subtitle: 'Practice',
    englishText: [
      "Draw the setup on the board.",
      "Instruct partners to discuss which plant will survive after 1 month and why.",
      "Ask a few partners to share answers.",
      "Explain that both plants A and B will survive. This tells us that plants can survive in light other than sunlight also.",
      "Erase the board."
    ],
    odiaText: ODIA_LOREM,
    image: "https://drive.google.com/thumbnail?id=17R5IyVtzZ8baOHQiMu6Mk0u0AoOeaGdm&sz=w500"
  },
  {
    id: 'app',
    title: 'Prayog',
    subtitle: 'Application',
    englishText: [
      "Draw the second setup on the board.",
      "Instruct partners to discuss which plant will survive after 1 month and why.",
      "Ask a few partners to share their answers.",
      "Explain that both Plant A and Plant B will survive. This shows that plants can survive in light other than sunlight as well.",
      "Erase the board."
    ],
    odiaText: ODIA_LOREM,
    image: "https://drive.google.com/thumbnail?id=1pQu4ZjavtZcgbDQ7o-sLd_8lpanAT0PC&sz=w1000"
  },
  {
    id: 'expand',
    title: 'Prasar',
    subtitle: 'Expansion',
    englishText: [
      "Instruct students to plant seeds in two bottles.",
      "Keep one in the sun and one under a lamp.",
      "Water both.",
      "Watch which plant grows better in two weeks."
    ],
    odiaText: ODIA_LOREM
  }
];

export const GET_MOCK_DATA_FOR_TAB = (tab) => {
  const data = { ...MOCK_LESSON_DATA };

  // Dynamic content based on tab
  if (tab === TabType.LESSON_1) {
    data.sections = LESSON_1_SECTIONS;
  }

  return data;
};

export const TABS = [
  {
    id: TabType.LESSON_1,
    label: 'Lesson 1',
    theme: ['bg-yellow-300', 'bg-orange-300', 'bg-yellow-100'],
    cardTheme: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: TabType.LESSON_2,
    label: 'Lesson 2',
    theme: ['bg-pink-300', 'bg-purple-300', 'bg-rose-200'],
    cardTheme: 'bg-pink-50',
    borderColor: 'border-pink-200'
  },
  {
    id: TabType.WORKSHEET_1,
    label: 'Worksheet 1',
    theme: ['bg-blue-300', 'bg-cyan-300', 'bg-indigo-200'],
    cardTheme: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: TabType.LESSON_3,
    label: 'Lesson 3',
    theme: ['bg-emerald-300', 'bg-green-300', 'bg-teal-200'],
    cardTheme: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    id: TabType.LESSON_4,
    label: 'Lesson 4',
    theme: ['bg-purple-300', 'bg-violet-300', 'bg-fuchsia-200'],
    cardTheme: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: TabType.REVISION,
    label: 'Revision',
    theme: ['bg-orange-300', 'bg-amber-300', 'bg-yellow-200'],
    cardTheme: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: TabType.TEST,
    label: 'Test',
    theme: ['bg-red-300', 'bg-rose-300', 'bg-red-200'],
    cardTheme: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];
