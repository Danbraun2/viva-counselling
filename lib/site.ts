export const site = {
  name: "VIVA Counselling",
  shortName: "VIVA",
  tagline: "Accessible and personalized mental health support — in person or from your home.",
  description:
    "Vancouver-based counselling practice offering in-person and online therapy across British Columbia. Specializing in prenatal & postpartum wellness, fertility, parenting, trauma, and more.",
  email: "vivamindfulnessgroup@gmail.com",
  address: {
    line1: "201–2780 Granville Street",
    line2: "Vancouver, BC V6H 3J3",
    full: "201–2780 Granville Street, Vancouver, BC V6H 3J3",
  },
  bookingUrl: "https://vivacounsellinggroup.janeapp.com",
  psychologyToday: "https://www.psychologytoday.com/ca/therapists/jaclyn-vancouver-bc",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/focus", label: "Areas of Focus" },
  { href: "/contact", label: "Contact" },
] as const;

// 4-up services row used on the home page (mirrors the live Squarespace site)
export const homeServices = [
  {
    title: "Youth Counselling",
    image: "/images/vitaly-gariev-QxkvMblcaJ0.jpg",
    href: "/services#youth",
  },
  {
    title: "Adult Counselling",
    image: "/images/priscilla-du-preez-K8XYGbw4Ahg.jpg",
    href: "/services#individual",
  },
  {
    title: "Couples Counselling",
    image: "/images/henry-lai-klMk70RskNc.jpg",
    href: "/services#couples",
  },
  {
    title: "Family Consultation",
    image: "/images/hoi-an-and-da-nang-photographer-5oJZqQZY0jE.jpg",
    href: "/services#family",
  },
];

export const homeImages = {
  hero: "/images/paul-summers-ArtVJ-217Cw.jpg",
  heroFocal: { x: 49.47, y: 30.4 },
  portrait: "/images/Elle-Group-29.jpg",
};

export type Service = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  blurb: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "individual",
    title: "Individual Therapy",
    duration: "50 mins",
    price: "$185",
    blurb: "A safe space, just for you.",
    description:
      "Individual therapy provides a safe space where you can talk openly, make sense of what you're going through, and feel supported without judgment. Whether you're feeling overwhelmed, stuck, or simply seeking greater self-understanding, individual therapy can help you process challenges, develop coping skills, and move toward healing at your own pace.",
  },
  {
    slug: "youth",
    title: "Youth Counselling",
    duration: "50 mins",
    price: "$185",
    blurb: "For teens 14+ navigating the noise of growing up.",
    description:
      "Growing up can feel overwhelming. Youth counselling offers an authentic and engaging environment for adolescents ages 14+ to explore their thoughts, feelings, and experiences. Whether facing anxiety, eating disorders, relational challenges, school pressures, or challenges at home, counselling can help build emotional awareness and insight, develop coping strategies, and increase confidence.",
  },
  {
    slug: "couples",
    title: "Couples Therapy",
    duration: "50 mins",
    price: "$215",
    blurb: "Reconnect, communicate, and weather change together.",
    description:
      "Couples therapy offers a supportive space to navigate the emotional complexities of fertility, pregnancy, early parenthood, grief, and loss together. It can help partners strengthen communication, process shared and individual experiences, and stay connected during times of stress, uncertainty, and change.",
  },
  {
    slug: "family",
    title: "Family Consultation",
    duration: "50 mins",
    price: "$215",
    blurb: "Strengthen the bonds within your family system.",
    description:
      "Family Consultations offer support for parents and caregivers wanting to strengthen communication and bonds between family members. Together we explore patterns, challenges, and dynamics that may be impacting family functioning, while building practical tools to foster understanding, cooperation, and connection.",
  },
];

import { focusAreasFull } from "./focus";

export const focusAreas = focusAreasFull.map((f) => ({
  title: f.title,
  icon: f.icon,
  slug: f.slug,
}));

export const testimonials = [
  {
    quote:
      "This is the first time I've felt truly comfortable opening up to a therapist. Jaclyn's warmth and understanding have helped me work through things I've held onto for years. I'm so grateful I found her.",
    author: "Lauren H.",
    role: "Viva Counselling Client",
  },
  {
    quote:
      "Working with Jaclyn has been one of the best investments I've made for myself. She has been there for me during the lowest points, and helped me move from feeling lost to clear about my purpose.",
    author: "Catherine T.",
    role: "Viva Counselling client",
  },
  {
    quote:
      "I was nervous to start therapy, but Jaclyn made the process feel so approachable. She listens deeply and asks thoughtful questions that really help me reflect. I've made more progress than I ever expected.",
    author: "Natalie S.",
    role: "Viva Counselling client",
  },
];
