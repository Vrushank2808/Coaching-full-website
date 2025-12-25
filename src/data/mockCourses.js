export const courses = [
  {
    id: 1,
    title: "JEE Mains + Advanced Mastery",
    slug: "jee-mains-advanced",
    description: "A rigorous 2-year classroom program designed to help students crack JEE Mains & Advanced with top ranks. Includes exhaustive study material and test series.",
    instructor: {
      name: "Dr. R.K. Verma",
      qualification: "Ph.D Physics, IIT Kanpur",
      bio: "20+ years of teaching experience with over 500 IIT selections."
    },
    duration: "24 Months",
    fees: 150000,
    currency: "INR",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    prerequisites: ["Class 10th Pass", "Strong Foundation in Mathematics"],
    syllabus: [
      {
        title: "Mechanics & Kinematics",
        description: "Laws of Motion, Work Energy Power, Rotational Mechanics",
        week: 1
      },
      {
        title: "Electrodynamics",
        description: "Electrostatics, Current Electricity, Magnetism & EMI",
        week: 12
      },
      {
        title: "Modern Physics & Optics",
        description: "Ray Optics, Wave Optics, Dual Nature of Matter",
        week: 24
      }
    ]
  },
  {
    id: 2,
    title: "NEET Medical Excellence",
    slug: "neet-medical",
    description: "Comprehensive coaching for medical aspirants covering Physics, Chemistry, and Biology (Botany + Zoology) based on NCERT pattern.",
    instructor: {
      name: "Prof. S. Gupta",
      qualification: "M.Sc Zoology, Gold Medalist",
      bio: "Expert in Botany and Zoology with a unique teaching style."
    },
    duration: "12 Months",
    fees: 120000,
    currency: "INR",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    prerequisites: ["Class 11th Science", "Biology Background"],
    syllabus: [
      {
        title: "Human Physiology",
        description: "Digestion, Respiration, Circulation, Excretion",
        week: 1
      },
      {
        title: "Genetics & Evolution",
        description: "Mendelian Genetics, Molecular Basis of Inheritance",
        week: 8
      }
    ]
  },
  {
    id: 3,
    title: "Foundation Builder (Class 9-10)",
    slug: "foundation-builder",
    description: "Build a strong base for future competitive exams like JEE, NEET, and Olympiads. Focus on conceptual clarity.",
    instructor: {
      name: "Eng. A. Kumar",
      qualification: "B.Tech, NIT Trichy",
      bio: "Passionate about building strong foundations for young minds."
    },
    duration: "12 Months",
    fees: 65000,
    currency: "INR",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    prerequisites: ["Class 8th Pass"],
    syllabus: [
      {
        title: "Number Systems & Algebra",
        description: "Real Numbers, Polynomials, Linear Equations",
        week: 1
      },
      {
        title: "Science Fundamentals",
        description: "Motion, Force, Atoms & Molecules",
        week: 10
      }
    ]
  }
];