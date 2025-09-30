/**
 * 🎨 PORTFOLIO CONFIGURATION FILE
 * 
 * Edit this file to easily update your portfolio content!
 * Just change the values below and your website will automatically update.
 */

export const portfolioConfig = {
  // 👤 PERSONAL INFORMATION
  personal: {
    name: "Darshan Kachhiya",
    role: "Computer Engineering Student",
    tagline: "Web Developer | Problem Solver",
    
    // 📞 CONTACT DETAILS
    phone: "+91 9664534359",
    email: "kachhiyadarshan6514@gmail.com",
    location: "Gujarat, India",
    
    // 🌐 SOCIAL LINKS
    linkedin: "https://www.linkedin.com/in/darshan-kachhiya-4b102a24a/",
    github: "https://github.com/Darshan2139",
    website: "https://darshan-portfolio.com",
    
    // 📄 RESUME LINK (Replace with your resume URL)
    resumeUrl: "https://cdn.builder.io/o/assets%2Fed4e30a48aec483489234b0932ccd474%2F54eea89476ea44c1b0356eb89b44330b?alt=media&token=62cc38b8-a5b5-4a6f-ae4f-26c6b104ec5a&apiKey=ed4e30a48aec483489234b0932ccd474",
    
    // ��️ PROFILE IMAGES (Add your photo URLs here)
    profileImages: {
      main: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1756665628/1c984aee-a4a0-4c03-a659-1c310dea7cdc_tafeie.jpg",
      about: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1756665628/1c984aee-a4a0-4c03-a659-1c310dea7cdc_tafeie.jpg",
    }
  },

  // ℹ️ ABOUT SECTION
  about: "Sophomore Computer Engineering student at CHARUSAT University, skilled in software development and problem-solving. Passionate about building impactful digital solutions, with a creative edge in photography and videography.",

  // 🎓 EDUCATION (Add more schools/colleges here)
  education: [
    {
      institution: "CHARUSAT University",
      degree: "B.Tech Computer Engineering",
      duration: "July 2023 - Present",
      score: "7.37/10.0 CGPA",
      scoreType: "cgpa", // "cgpa" or "percentage"
      coursework: [
        "Programming Languages",
        "Web Development", 
        "Computer Architecture",
        "Comparison of Learning Algorithms",
        "Computational Theory"
      ]
    },
    {
      institution: "Jay Ambe International School",
      degree: "Higher Secondary Education (GSEB)",
      duration: "2021 - 2023",
      score: "58%",
      scoreType: "percentage", // "cgpa" or "percentage"
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English"
      ]
    }
    // Add more education entries here if needed
  ],

  // 💼 PROJECTS (Add your projects here - they will automatically appear on the website)
  projects: [
    {
      name: "TripKrafter.in",
      description: "TripKrafter.in is a travel platform where users can plan personalized trips, connect with fellow travelers, and co-create memorable travel experiences through shared itineraries and community engagement.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      semester: "Semester 3",
      github: "https://github.com/AryaKayastha/SGP-1_TripKrafter",
      demo: "https://tripkrafter.in",
      status: "coming-soon",
      altProject: { name: "SkillMart", demo: "https://skillmart-client.onrender.com/" },
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755769278/Untitled_design_bays0i.png",
      featured: true
    },
    {
      name: "SkillMart",
      description: "Developed SkillMart, a platform where students are grouped into batches to collaborate on projects and enhance their skills. Mentors actively monitor student progress, provide guidance, and ensure effective project execution.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      semester: "Semester 4",
      github: "https://github.com/Darshan2139/SkillMart-deploy",
      demo: "https://skillmart-client.onrender.com/",
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755769075/Group_1_fnnwxg.png",
      featured: true
    }
    // 🆕 ADD MORE PROJECTS HERE:
    // {
    //   name: "Your New Project",
    //   description: "Description of your project...",
    //   technologies: ["React", "Node.js", "MongoDB"],
    //   semester: "Semester 5",
    //   github: "https://github.com/yourusername/project",
    //   demo: "https://yourproject.com",
    //   image: "https://your-image-url.com/image.jpg",
    //   featured: true
    // }
  ],

  // 💻 TECHNOLOGIES & SKILLS
  technologies: {
    languages: ["Python", "C++", "C", "Java"],
    frameworks: ["MERN Stack", "Django"],
    tools: ["Git Version Control", "Google Sites", "Figma", "Microsoft Office", "AI Tools"],
    
    // 📊 SKILL LEVELS (0-100)
    skillLevels: {
      "JavaScript": 90,
      "Python": 85,
      "React.js": 88,
      "Node.js": 80,
      "MongoDB": 75,
      "MySQL": 82,
      "Git": 85,
      "C++": 78,
      "Java": 70,
      "Django": 72
    }
  },

  // 🏆 CO-CURRICULAR ACTIVITIES
  coCurricular: [
    {
      title: "Odoo x CHARUSAT Hackathon",
      role: "Core Member",
      duration: "Feb '25 - Mar '25",
      description: "Achieved 1L+ digital reach via Instagram marketing.",
      icon: "trophy" as const
    },
    {
      title: "NSS Event – SmileFiesta",
      role: "Organizer", 
      duration: "Jan '25",
      description: "Led university-wide NSS cultural event.",
      icon: "users" as const
    },
    {
      title: "Media Team",
      role: "Department Member",
      duration: "Nov '23 – Ongoing",
      description: "Designed visual content and managed media initiatives.",
      icon: "camera" as const
    },
    {
      title: "Odoo Hackathon 2025",
      role: "Finalist",
      duration: "Aug '25",
      description: "Selected for final offline round at Gandhinagar.",
      icon: "award" as const
    },
    {
      title: "HackNUthon 6.0 - Nirma University",
      role: "Top 10 (9th Place)",
      duration: "Mar 29–31, 2025",
      description: "HackNUthon 6.0 was a national-level hackathon hosted by the Computer Society of India (CSI) at Nirma University from March 29–31, 2025. Secured 9th place (Top 10).",
      icon: "trophy" as const
    }
    // 🆕 ADD MORE ACTIVITIES HERE
  ],

  // 📈 OPTIONAL: Co-curricular stats displayed at the bottom of Activities section
  coCurricularStats: [
    { value: "5+", label: "Activities" },
    { value: "2+", label: "Leadership Roles" },
    { value: "1L+", label: "Digital Reach" },
    { value: "1+", label: "Hackathon Finalist" }
  ],

  // 🧩 UI TEXTS: make headings and labels editable
  ui: {
    hero: {
      rotatingTexts: [
        "Computer Engineering Student",
        "Web Developer",
        "Problem Solver",
        "Creative Thinker"
      ]
    },
    technologies: {
      titles: {
        coreSkills: "Core Skills",
        frameworks: "Frameworks & Libraries",
        tools: "Tools & Technologies"
      },
      headings: {
        proficiency: "Skill Proficiency",
        stack: "Technology Stack"
      }
    },
    projects: {
      moreProjectsText: "More projects coming soon..."
    }
  },

  // 🏅 CERTIFICATIONS (Add your certificates here - they will automatically appear)
  certificationsFolder: "https://drive.google.com/drive/folders/1okVYCr9pciDxrOtEP5fd3w15Pbr1Bo9e?usp=drive_link", // Link to view all certificates

  certifications: [
    {
      name: "Innotech Certificate",
      issuer: "CHARUSAT University",
      description: "Technical event participation at CHARUSAT University Innotech",
      date: "2024",
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755768746/23CE051_Darshan_Kachhiya_v1i1v8.jpg",
      link: "#"
    },
    {
      name: "AWS Community Day Certificate",
      issuer: "AWS Student Community",
      description: "Focused on AWS technologies and cloud innovations",
      date: "2024",
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755768891/aws_community_day_page-0001_jd148f.jpg",
      link: "#"
    },
    {
      name: "GDSC ML Study Jams Certificate",
      issuer: "Google Developer Student Clubs",
      description: "Completed Machine Learning Study Jams, gaining practical ML knowledge",
      date: "2024",
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755768815/GDSC_Kachhiya_Darshan_d1g3go.png",
      link: "#"
    },
    {
      name: "Deep Learning and Reinforcement Learning",
      issuer: "IBM via Coursera",
      description: "Comprehensive course covering deep learning fundamentals, neural networks, and reinforcement learning algorithms. Gained hands-on experience with TensorFlow, Keras, and advanced ML techniques.",
      date: "Aug 2025",
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755768553/Deep_Learning_and_Reinforcement_Learning_page-0001_lb6jmy.jpg",
      link: "#"
    },
    {
      name: "Server-side JavaScript with Node.js",
      issuer: "NIIT via Coursera",
      description: "Advanced course on server-side development using Node.js. Covered Express.js, RESTful APIs, database integration, and full-stack JavaScript application development.",
      date: "Aug 2025",
      image: "https://res.cloudinary.com/ddljrgyvx/image/upload/v1755768588/Server_side_JavaScript_with_Node_page-0001_oxagrx.jpg",
      link: "#"
    }
    // 🆕 ADD MORE CERTIFICATES HERE:
    // {
    //   name: "Your Certificate Name",
    //   issuer: "Issuing Organization",
    //   description: "What you learned or achieved",
    //   date: "2024",
    //   image: "https://your-certificate-image-url.com/cert.jpg",
    //   link: "https://verify-certificate-link.com"
    // }
  ]
};

/**
 * 📝 HOW TO UPDATE YOUR PORTFOLIO:
 * 
 * 1. 🖼️ TO ADD PHOTOS:
 *    - Upload your photos to any image hosting service (Google Drive, Imgur, etc.)
 *    - Copy the direct image URL
 *    - Replace the "/placeholder.svg" URLs above with your image URLs
 * 
 * 2. 🚀 TO ADD NEW PROJECTS:
 *    - Copy one of the existing project objects
 *    - Update the name, description, technologies, etc.
 *    - Add your GitHub and demo links
 *    - Add the project image URL
 * 
 * 3. 🏅 TO ADD NEW CERTIFICATES:
 *    - Copy one of the existing certificate objects
 *    - Update the name, issuer, description, date
 *    - Add the certificate image URL
 *    - Add verification link if available
 * 
 * 4. 💾 SAVE THE FILE:
 *    - After making changes, save this file
 *    - Your website will automatically update!
 * 
 * 💡 TIP: Keep your image URLs accessible and make sure they're direct links to images!
 */
