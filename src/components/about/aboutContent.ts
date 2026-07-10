export const ABOUT_STORY = {
  hero: {
    eyebrow: 'About Gutsphere',
    title: 'GI is my ikigai.',
    lead: 'Gutsphere began with a founder who nearly lost his life to GI illness as an infant — and spent decades learning what the system still does not give patients: a continuous, usable story of their own body.',
  },
  chapters: [
    {
      id: 'beginning',
      eyebrow: 'Nepal · 9 months old',
      title: "Declared dead — revived by a mother's refusal to accept it",
      body: [
        "Bimal Maharjan's GI journey started in the most dramatic way possible. At nine months old, severe diarrhea put him in Kanti Bal Hospital, a government children's hospital in Nepal. He was fighting for each day.",
        'One morning, after his mother stepped out for saline, she returned to find him covered with a white hospital sheet. A neighboring caregiver said the doctors had declared her son dead.',
        'She would not accept it. She found a faint pulse, charged into the room where doctors were gathered, and insisted he was alive. A team worked to revive him. A gentle tap on his knees finally drew a weak cry. He lived — and a lifelong relationship with GI health began.',
      ],
    },
    {
      id: 'growing',
      eyebrow: 'Growing up',
      title: 'A body that rebelled — and a teenage pause that did not last',
      body: [
        'Childhood meant constant negotiation with food, bathrooms, and social plans. Spicy meals were risks. Anxiety around eating out shaped diet, confidence, and daily life.',
        'Teenage years brought a brief respite. Then, after moving to the United States in 2016, a new challenge arrived: chronic constipation — a stark contrast to earlier years, and a clear sign the journey was not over.',
      ],
    },
    {
      id: 'system',
      eyebrow: 'United States healthcare',
      title: 'Rushed visits, a scary word, and a $3,700 bill',
      body: [
        'Blood on toilet paper led to reassurance that felt too thin. A later GI visit felt rushed — little exploration of diet, stress, or lifestyle before a colonoscopy was suggested. Years into constipation and with low ferritin, the same specialist recommended colonoscopy again, this time framed around cancer screening. The word "cancer" pushed agreement despite no family history of GI cancers at that point.',
        'The aftermath crystallized the problem: a procedure treated as preventative still produced roughly $3,700 in bills, collection calls, and opaque insurance battles. The system was hard to navigate even for someone trying to advocate for himself.',
      ],
    },
    {
      id: 'pilot',
      eyebrow: 'Turning point',
      title: 'Becoming the pilot of his own health plane',
      body: [
        "Drawing on his mother's advice — know more about your disease than your doctor — Bimal treated himself as a scientist of his own body. He studied the gut, diet, movement, and the mind-gut connection. He learned how processed, low-fiber patterns could worsen constipation, and rebuilt habits around whole foods, fiber, and consistency.",
        'He eventually lived constipation-free — not as a miracle cure claim, but as hard-won self-knowledge. He wrote a book to turn that pain into something useful for others. Still, he waited three years before starting a company, hoping someone else would build the holistic system he needed. Most offerings treated symptoms in isolation or felt more commercial than healing.',
      ],
    },
    {
      id: 'company',
      eyebrow: 'Why now',
      title: 'Building the platform he could not find',
      body: [
        'Three shifts made waiting feel like the wrong choice: better technology for personalized support at scale, a broader move toward prevention and whole-person care, and the chance to design a continuous patient experience — not another disconnected point solution.',
        "Gutsphere's mission is to create an ecosystem for GI patients and providers: accessible, efficient, and centered on the person living the symptoms. The vision is a holistic, personalized, unified GI care platform. The product starts where the need is urgent — a GI health copilot with core self-care tools — and grows from there.",
      ],
    },
  ],
  mission: {
    title: 'Mission',
    body: 'To create an ecosystem for GI patients and providers, delivering the best GI care in the most accessible, efficient, and cost-effective way possible.',
  },
  vision: {
    title: 'Vision',
    body: 'To establish a holistic, personalized, and unified GI care platform for patients and providers alike.',
  },
  values: [
    'Patient-centric care at accessible cost',
    'Focus on things that do not change',
    'Use our own products',
    'Help people get less sick — and prevent disease',
    'Think long-term; start small',
    'Automate drudgery; protect human attention',
    'Empathy for patients and providers',
    'Focus on the problem; find the simplest effective solution',
  ],
  quote: {
    text: 'I found my purpose in the most unlikely of places: my own gastrointestinal struggles. This journey, fraught with pain and discovery, has led me to my ikigai — my reason for being.',
    name: 'Bimal Maharjan',
    role: 'Founder and CEO, Gutsphere',
  },
  join: {
    title: 'Join the movement',
    body: 'Gutsphere cannot be built from a single data point. Clinicians, scientists, designers, engineers, and patients all belong in this work. The principles of incremental, science-informed self-care are transferable — even when every gut story is unique.',
  },
} as const
