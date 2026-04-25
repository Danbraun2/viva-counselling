export type FocusArea = {
  slug: string;
  title: string;
  short: string;
  icon: string; // path under /images
  hero?: string; // path under /images for hero background
  heroOverlay?: number; // 0..1
  quote: { text: string; author: string };
  intro: string[];
  signsTitle: string;
  signs: string[];
  helpTitle: string;
  help: string[];
};

const ICON = {
  preg: "/images/Preg_White.png",
  momBaby: "/images/2.-Mom-Baby.png",
  butterfly: "/images/4.-Butterfly.png",
  family: "/images/5.-Family.png",
  heart: "/images/6.-Heart.png",
  teens: "/images/7.-Teens.png",
  embrace: "/images/8.-Embrace.png",
  scale: "/images/9.-Scale.png",
  flowers: "/images/10.-Flowers_Short.png",
  heartHand: "/images/Heart_In_Hand.png",
};

export const focusAreasFull: FocusArea[] = [
  {
    slug: "prenatal-wellness",
    title: "Prenatal Wellness",
    short: "Steady support through pregnancy.",
    icon: ICON.preg,
    quote: {
      text: "The transition into parenthood is one of the most profound life changes a person can experience.",
      author: "",
    },
    intro: [
      "During pregnancy, multiple changes happen at once — physical, relational, identity-based, and circumstantial. It's common to feel joy and worry in the same breath, alongside self-doubt or disorientation.",
      "Hormonal shifts, sleep disruption, evolving roles, and new responsibilities all contribute to emotional changes. None of it means something is wrong with you — but you don't have to navigate it alone.",
    ],
    signsTitle: "Signs prenatal counselling could help",
    signs: [
      "Persistent tearfulness, low mood, or hopelessness",
      "Difficulty connecting emotionally with the pregnancy",
      "Anxiety, panic, or persistent edginess",
      "Emotional numbness or feeling overwhelmed",
      "Withdrawing from friends and family",
      "Irritability or frequent mood fluctuations",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "Using evidence-based approaches, we'll explore your experiences while building steadiness, confidence, and a renewed trust in your body before birth and into postpartum.",
      "Sessions can address anxiety and stress management, mood regulation, processing past trauma or previous loss, working through difficult birth experiences, growing self-compassion and parental confidence, and strengthening partner and support systems.",
    ],
  },
  {
    slug: "postpartum-support",
    title: "Postpartum Support",
    short: "Tender care for the after.",
    icon: ICON.momBaby,
    quote: {
      text: "In the quiet, unseen moments of care, love, and exhaustion — you are doing something extraordinary.",
      author: "",
    },
    intro: [
      "The period after a baby's arrival weaves tender moments together with real emotional challenges. Many new parents feel waves of overwhelm, sadness, fear, or disconnection — even when this baby is wanted and loved.",
      "Adjusting to parenthood means navigating hormonal shifts, sleep loss, physical recovery, identity changes, and constant caregiving — all while bonds form and deepen. Traumatic birth, feeding difficulties, isolation, relationship strain, and exhaustion can intensify this season.",
      "Bonding often grows gradually rather than instantly. That's normal — not failure.",
    ],
    signsTitle: "Signs postpartum counselling could help",
    signs: [
      "Ongoing sadness, emptiness, or isolation",
      "Difficulty bonding with your baby or uncertainty about how",
      "Anxiety, panic, or feeling on edge",
      "Emotional numbness or feeling overwhelmed",
      "Guilt, shame, or feeling like you're not a good-enough parent",
      "Irritability or frequent mood swings",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "We unpack what you're experiencing, identify the patterns underneath, and develop responses that feel doable in real life — not just in theory.",
      "Practical tools for managing intrusive thoughts and regulating the nervous system sit alongside deeper emotional work — making sense of birth, naming feelings of disconnection, and rediscovering yourself inside this new role.",
    ],
  },
  {
    slug: "fertility-challenges",
    title: "Fertility Challenges",
    short: "Compassionate care through hope, loss, and uncertainty.",
    icon: ICON.scale,
    quote: {
      text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
      author: "Mary Anne Radmacher",
    },
    intro: [
      "Fertility struggles are emotionally taxing — and often invisible. Trying to conceive, especially when it isn't happening the way you'd hoped, creates cyclical hope and disappointment that can ripple through every part of life: relationships, self-perception, work, friendships.",
      "Common companions on this road are sadness, frustration, anxiety, anger, self-doubt, and grief. Fertility treatments add another layer — physical, financial, and psychological demands all at once.",
    ],
    signsTitle: "Signs fertility counselling could help",
    signs: [
      "Feeling unusually low, hopeless, or emotionally exhausted",
      "Grief, sadness, and loss after each cycle or setback",
      "Feeling consumed by conception-related thoughts",
      "Ongoing anxiety about timelines, outcomes, and treatments",
      "Life feeling on hold; difficulty planning ahead",
      "Feeling jealous, triggered, or withdrawn around pregnant friends",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "Counselling provides a non-judgmental space to feel what you feel without pretending or performing. Together we develop strategies for living alongside uncertainty, manage anxiety, and strengthen communication with your partner.",
      "We also work on identity — making sure your sense of self stays whole, separate from any single outcome on this journey.",
    ],
  },
  {
    slug: "pregnancy-loss-grief",
    title: "Pregnancy Loss & Grief",
    short: "A space to grieve without filtering.",
    icon: ICON.butterfly,
    quote: {
      text: "There is no greater agony than bearing an untold story inside of you.",
      author: "Maya Angelou",
    },
    intro: [
      "Miscarriage — whether early or late, sudden or expected — creates profound emotional pain. Sadness, anger, guilt, numbness, longing — all of these can move through you, sometimes all at once.",
      "There is no right way to grieve, and no timeline you have to meet. Your experience deserves to be received with care.",
    ],
    signsTitle: "Signs grief counselling could help",
    signs: [
      "Difficulty making sense of what happened",
      "Feeling isolated or misunderstood by others",
      "Emotional numbness, shock, or disbelief",
      "Guilt, shame, or self-blame",
      "Heightened anxiety about future pregnancies",
      "Persistent sadness, grief, or emptiness",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "Therapy offers a judgment-free space to express what you're feeling without filtering it for anyone else.",
      "We'll move with the waves of grief together — navigating triggers, partner dynamics, and difficult anniversaries — focused on honouring the loss rather than rushing past it.",
    ],
  },
  {
    slug: "parenthood",
    title: "Parenthood",
    short: "Showing up imperfectly, day after day.",
    icon: ICON.family,
    quote: {
      text: "There's no one way to be a perfect parent and a million ways to be a great one.",
      author: "Jill Churchill",
    },
    intro: [
      "Parenting offers some of life's most meaningful rewards — and some of its most stretched-thin moments. Self-doubt, irritability, and constant adjustment are part of the territory.",
      "Parenting doesn't come with a universal guidebook. The work here isn't perfection — it's connected, responsive relationships rooted in your family's values.",
    ],
    signsTitle: "Signs parent support could help",
    signs: [
      "Feeling irritable or guilty about how you respond to your child",
      "Persistent anxiety about your child's well-being or development",
      "Feeling overwhelmed, burnt out, or constantly on edge",
      "Lacking confidence in your parenting",
      "Difficulty setting boundaries or staying consistent",
      "Struggling to balance personal needs with parenting demands",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "We'll work on stress management, emotional regulation, and strategies for the harder parenting moments. We'll explore developmental context, communication, and boundary-setting.",
      "Equally important: reconnecting you with your own needs — softening guilt, easing burnout, and remembering that taking care of yourself is part of taking care of them.",
    ],
  },
  {
    slug: "adolescence",
    title: "Adolescence",
    short: "A judgment-free space to figure things out.",
    icon: ICON.teens,
    quote: {
      text: "It takes courage to grow up and become who you really are.",
      author: "E.E. Cummings",
    },
    intro: [
      "Growing up has its own weather system. Pressure can come from school, friendships, home, and the inside of your own head — sometimes all at once.",
      "Many teens describe persistent low mood, lack of motivation, disconnection from themselves, struggles with eating or body image, or coping behaviours that have become hard to break.",
      "Counselling here is a private, judgment-free space to talk at your own pace and be authentic without pressure.",
    ],
    signsTitle: "Signs counselling could help",
    signs: [
      "Feeling anxious, overwhelmed, or constantly stressed",
      "Feeling misunderstood, alone, or disconnected",
      "Low mood, sadness, or depression",
      "Struggling with self-esteem or self-worth",
      "Wanting better relationships with friends, family, or partners",
      "Wanting guidance through transitions",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "Together we'll work on understanding your thoughts, feelings, and reactions, building healthier relationships with food, body, and self, exploring coping strategies around substance use, strengthening confidence and identity, and navigating friendships, family, and life changes.",
    ],
  },
  {
    slug: "relationships-communication",
    title: "Relationships & Communication",
    short: "Move out of stuck patterns toward connection.",
    icon: ICON.heartHand,
    quote: {
      text: "To be human is to need others, and this is no flaw or weakness.",
      author: "Dr. Sue Johnson",
    },
    intro: [
      "Relationships can be among the most meaningful — and the most challenging — parts of life. Maybe you're having the same conversation on repeat without feeling heard. Maybe small miscommunications keep escalating. Maybe a once-close relationship feels distant, and you're not sure if you can find your way back.",
      "Change doesn't happen all at once. With support, it is possible to move out of stuck patterns and toward something more connected and fulfilling.",
    ],
    signsTitle: "Signs relationship counselling could help",
    signs: [
      "Frequent unresolved arguments that escalate",
      "Lack of emotional or practical support from your partner",
      "Issues with emotional or physical intimacy",
      "Difficulty communicating openly and effectively",
      "Doubts or mistrust toward your partner",
      "Feeling stuck in routine, missing growth or excitement",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "Whether you come alone or together, we'll create a judgment-free space to look at the patterns underneath the conflict.",
      "We'll work on communication skills, surface the needs that are driving the friction, and build a more empathetic, attuned connection — one that fits the relationship you actually want.",
    ],
  },
  {
    slug: "eating-disorders",
    title: "Eating Disorders",
    short: "Healing your relationship with food, body, and self.",
    icon: ICON.flowers,
    quote: {
      text: "You can't go back and change the beginning, but you can start where you are and change the ending.",
      author: "C.S. Lewis",
    },
    intro: [
      "Struggles with food, body, and self-worth can feel isolating and consuming. What started as coping or control can leave you feeling stuck, overwhelmed, or out of control. There may be cycles of restriction, binging, or constant food preoccupation, alongside shame, guilt, and a longing for peace.",
      "Hesitation about change is understandable. Eating disorders aren't a willpower failure — they develop for reasons, and they often serve a purpose. The work begins by understanding that purpose with compassion.",
    ],
    signsTitle: "Signs counselling could help",
    signs: [
      "Preoccupation with food, weight, and body",
      "Relying on food, eating, or exercise to manage emotions",
      "Skipping meals, calorie counting, or over-exercising",
      "Overeating or feeling out of control with food",
      "Binging, purging, or restricting for a sense of control",
      "Mood, energy, and concentration changes",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "Reaching out is significant — especially when you have mixed feelings about change. Those feelings are welcome here.",
      "Rather than focusing only on food or behaviours, we'll explore the underlying causes — control, emotional management, accomplishment, or coping with difficult experiences. We move at a safe, supportive pace, building trust, awareness, and meaningful small shifts over time.",
    ],
  },
  {
    slug: "trauma-ptsd-childhood-wounds",
    title: "Trauma, PTSD & Childhood Wounds",
    short: "From survival mode toward resilience.",
    icon: ICON.embrace,
    quote: {
      text: "Trauma is not what happens to us, but what we hold inside in the absence of an empathic witness.",
      author: "Dr. Peter Levine",
    },
    intro: [
      "Trauma shapes how we experience the world, our relationships, and our sense of self. It lives in thoughts, emotions, and physical sensations — sometimes long after the original events.",
      "VIVA offers compassionate, trauma-informed therapy at a pace your nervous system can handle, helping you move from survival mode toward healing and resilience.",
    ],
    signsTitle: "Signs trauma counselling could help",
    signs: [
      "Feeling on edge, unsafe, or unable to trust yourself or others",
      "Intrusive thoughts or unwanted memories",
      "Persistent anxiety, fear, or hypervigilance",
      "Shame, guilt, or low self-worth",
      "Overthinking, ruminating, or expecting the worst",
      "Negative core beliefs (e.g. “I'm not worthy of love”)",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "We use a somatic approach that recognizes how the body holds trauma. You don't have to relive every detail of the past — instead we focus on the present-day impact and gently reshape the limiting stories you carry.",
      "The goal isn't to erase what happened. It's to change your relationship to it, so it no longer runs the show.",
    ],
  },
  {
    slug: "self-esteem-self-worth",
    title: "Self-Esteem & Self-Worth",
    short: "Quiet the inner critic. Trust your own voice.",
    icon: ICON.heart,
    quote: {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    intro: [
      "Your relationship with yourself shapes nearly everything else. Low self-esteem can sound like an inner critic on repeat, persistent self-doubt, and a quiet sense of not being enough.",
      "These patterns usually develop over years — through experiences, relationships, and the messages we absorbed about who we are and what we should be.",
      "Therapy creates room to explore that relationship — to understand where limiting beliefs began, soften the inner critic, and reconnect with your authentic self.",
    ],
    signsTitle: "Signs counselling could help",
    signs: [
      "A persistent inner critic or harsh self-talk",
      "Comparing yourself to others unfavourably",
      "Feeling insufficient or unworthy",
      "Difficulty receiving compliments or positive feedback",
      "Feeling undeserving of love, success, or happiness",
      "People-pleasing; prioritizing others' needs above your own",
    ],
    helpTitle: "How VIVA can help",
    help: [
      "We approach the origins of these beliefs with curiosity and care, not judgment. The work involves softening self-criticism, recognizing patterns, setting boundaries, learning to trust your voice, and validating your own needs.",
      "Step by step, you build a more trusting relationship with yourself — one that doesn't depend on anyone else's approval.",
    ],
  },
];

export const focusBySlug = Object.fromEntries(
  focusAreasFull.map((f) => [f.slug, f]),
);
