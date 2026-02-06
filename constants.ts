import { StaffMember, Department, NewsItem, Facility, Testimonial } from './types';
import { 
  Atom, 
  BookOpen, 
  BrainCircuit, 
  Crown, 
  Workflow, 
  HeartPulse, 
  BusFront, 
  Coffee, 
  Dna, 
  TrendingUp,
  Monitor,
  Building2,
  Users,
  GraduationCap,
  Microscope,
  Globe,
  Wifi,
  Library
} from 'lucide-react';

// --- SITE CONTENT ---

export const HERO_CONTENT = [
  {
    headline: "Welcome to SARC Education Foundation",
    subheadline: "Leading the way in Science & Management education in Far-West Nepal. Fostering academic excellence, moral integrity, and global competence since 2014."
  }
];

export const ABOUT_LONG_DESC = `
SARC Education Foundation was established in 2014 A.D. (2071 B.S.) by a team of varied intellectuals and academicians with a mission to serve the citizens of Sudurpaschim Province. Located in the heart of Mahendranagar, Kanchanpur, SARC has rapidly grown into a premier institution for +2 Science and Management.

Our institution is not just a college; it is a community dedicated to producing capable, disciplined, and visionary citizens. With state-of-the-art infrastructure, including modern science laboratories, computer labs, and a resource-rich library, we provide an environment conducive to research and practical learning.

We pride ourselves on our faculty—a blend of experienced professors and energetic young teachers who are committed to the holistic development of every student. At SARC, we believe that education extends beyond the classroom. Through various extra-curricular activities, sports, and social initiatives, we groom our students to be leaders of tomorrow.
`;

export const MESSAGES = {
  chairperson: {
    name: "Mr. Ramesh Chand",
    title: "Chairperson",
    image: "https://picsum.photos/400/500?random=1",
    message: `
      Dear Parents and Students,
      
      It gives me immense pleasure to welcome you to SARC Education Foundation. Since our inception, we have been guided by a singular vision: to bring world-class education to the Far-West region of Nepal. We understood early on that talent is evenly distributed, but opportunity is not. SARC was built to be that opportunity.

      In a short span of time, SARC has established itself as a beacon of quality education. Our results in NEB examinations speak for themselves, but what truly defines us is the character of our graduates. We aim to produce not just doctors, engineers, and managers, but responsible citizens who contribute positively to society.

      We are committed to continuous improvement. We are constantly upgrading our facilities, training our teachers, and revising our pedagogy to meet global standards. Thank you for entrusting us with your future.
    `
  },
  principal: {
    name: "Mr. Bhuwan Pant",
    title: "Campus Chief",
    image: "https://picsum.photos/400/500?random=2",
    message: `
      Welcome to SARC,
      
      Education is a transformative journey. At SARC Education Foundation, we strive to make this journey as enriching as possible. Our academic environment is designed to challenge students, provoke thought, and encourage innovation.

      We follow a student-centric approach. Whether it is the rigorous curriculum of the Science stream or the dynamic case-studies of the Management stream, our focus is on conceptual clarity and practical application. We understand that the +2 level is a critical turning point in a student's life, bridging school education and university specialization.

      Discipline is the bedrock of our institution. We believe that freedom without responsibility is chaos. Our students are taught the value of time, respect for others, and the importance of hard work. I invite you to join our vibrant community and embark on a path to excellence.
    `
  }
};

export const STATS = [
    { label: "Established", value: "2071 BS" },
    { label: "Graduates", value: "3,500+" },
    { label: "Faculty Members", value: "50+" },
    { label: "Student Intake", value: "1,200+" }
];

// Facilities - Expanded
export const FACILITIES: Facility[] = [
  {
    id: 'science-labs',
    title: "Science Laboratories",
    description: "Separate, spacious, and well-equipped laboratories for Physics, Chemistry, and Biology (Botany/Zoology) to facilitate practical learning.",
    icon: Microscope
  },
  {
    id: 'computer-lab',
    title: "IT & Computer Lab",
    description: "A modern computer lab with high-speed fiber internet and latest workstations, offering courses in Computer Science and general IT literacy.",
    icon: Monitor
  },
  {
    id: 'library',
    title: "E-Library",
    description: "A vast collection of course books, reference materials, journals, and daily newspapers. Digital access to research papers and e-books is also provided.",
    icon: Library
  },
  {
    id: 'transport',
    title: "Transportation",
    description: "Our fleet of buses ensures safe and timely transportation for students from all major areas of Mahendranagar and surrounding municipalities.",
    icon: BusFront
  },
  {
    id: 'hostel',
    title: "Hostel",
    description: "Separate hostel facilities for boys and girls with strict supervision, hygienic mess, and a study-friendly environment.",
    icon: Building2
  },
  {
    id: 'cafeteria',
    title: "Hygienic Cafeteria",
    description: "Serving healthy and fresh meals and snacks at affordable rates, ensuring the health and well-being of our students and staff.",
    icon: Coffee
  },
  {
    id: 'internet',
    title: "Free Wi-Fi",
    description: "Campus-wide Wi-Fi coverage to ensure students have access to online educational resources whenever needed.",
    icon: Wifi
  },
  {
    id: 'counseling',
    title: "Counseling Unit",
    description: "Dedicated psychological and career counseling services to help students navigate academic pressure and choose the right career path.",
    icon: Users
  }
];

// Academic Programs Detail
export const ACADEMIC_PROGRAMS = [
  { 
    id: 'science',
    level: "+2 Science", 
    desc: "The +2 Science program at SARC is designed for students aspiring to pursue careers in Medicine, Engineering, Agriculture, Forestry, and IT. We provide a rigorous foundation in fundamental sciences.",
    eligibility: "Minimum GPA 2.0 in SEE with C+ in Science & Math, D+ in English, Nepali & Social Studies.",
    subjects: ["Physics", "Chemistry", "Biology (Zoology/Botany)", "Mathematics", "Computer Science", "English", "Nepali"]
  },
  { 
    id: 'management',
    level: "+2 Management", 
    desc: "Our Management program prepares students for the world of business, banking, finance, and hospitality. It lays the groundwork for BBA, BBS, CA, and Hotel Management degrees.",
    eligibility: "Minimum GPA 1.6 in SEE with D+ in Math, English, Nepali, Social Studies & Science.",
    subjects: ["Accountancy", "Economics", "Business Studies", "Hotel Management", "Computer Science", "Business Mathematics", "English", "Nepali"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "SARC provided me with the competitive edge I needed. The regular entrance preparation classes helped me secure a scholarship in MBBS.",
    author: "Dr. Anjali Bhatt",
    role: "Alumni (MBBS)",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    id: '2',
    text: "The supportive environment and the approachable faculty made my two years here memorable. It felt like a second home.",
    author: "Rohan Joshi",
    role: "Alumni (CA)",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    id: '3',
    text: "Choosing the Management stream at SARC was the best decision. The practical exposure and industrial visits were very helpful.",
    author: "Priya Rawal",
    role: "BBA Student",
    image: "https://picsum.photos/100/100?random=22"
  }
];

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: '1',
    name: "Mr. Ramesh Chand",
    designation: "Chairperson",
    credentials: "M.Ed., TU",
    philosophy: "Visionary Leadership",
    role: 'admin',
    image: "https://picsum.photos/300/300?random=1"
  },
  {
    id: '2',
    name: "Mr. Bhuwan Pant",
    designation: "Campus Chief",
    credentials: "M.Sc. Physics",
    philosophy: "Academic Excellence",
    role: 'admin',
    image: "https://picsum.photos/300/300?random=2"
  },
  {
    id: '3',
    name: "Mr. Dinesh Raj",
    designation: "Academic Coordinator",
    credentials: "M.B.A.",
    philosophy: "Student Welfare",
    role: 'faculty',
    image: "https://picsum.photos/300/300?random=3"
  },
  {
    id: '4',
    name: "Mrs. Sarita Joshi",
    designation: "HOD - Biology",
    credentials: "M.Sc. Zoology",
    philosophy: "Research & Inquiry",
    role: 'faculty',
    image: "https://picsum.photos/300/300?random=4"
  },
   {
    id: '5',
    name: "Mr. Kamal Bashyal",
    designation: "HOD - Management",
    credentials: "M.B.S.",
    philosophy: "Practical Business",
    role: 'faculty',
    image: "https://picsum.photos/300/300?random=5"
  },
  {
    id: '6',
    name: "Mr. Suresh Yadav",
    designation: "Senior Faculty",
    credentials: "M.Sc. Math",
    philosophy: "Logical Thinking",
    role: 'faculty',
    image: "https://picsum.photos/300/300?random=6"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'sci',
    name: "Department of Science",
    description: "Fostering scientific inquiry and rigorous academic discipline.",
    icon: Atom,
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"]
  },
  {
    id: 'mgmt',
    name: "Department of Management",
    description: "Developing future business leaders and entrepreneurs.",
    icon: TrendingUp,
    subjects: ["Accountancy", "Economics", "Business Studies", "Hotel Management"]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: "Grade XI Entrance Examination 2081",
    date: "Ashadh 15, 2081",
    excerpt: "Entrance examinations for the new academic session of Grade XI (Science & Management) will be held on Ashadh 20. Collect forms from the administration.",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: '2',
    title: "Excellent Results in NEB Grade XII",
    date: "Bhadra 10, 2080",
    excerpt: "SARC continues its legacy of excellence with 100% pass results in Grade XII Science and Management streams. Congratulations to all students.",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: '3',
    title: "Sports Week 2080 Conclusion",
    date: "Poush 05, 2080",
    excerpt: "The annual Sports Week concluded with a grand ceremony. Winners were awarded medals and certificates by the Campus Chief.",
    image: "https://picsum.photos/600/400?random=12"
  }
];