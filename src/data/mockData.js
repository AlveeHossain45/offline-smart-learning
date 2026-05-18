export const courses = [
    {
      id: 1,
      title: "Advanced React & Modern Web Development",
      instructor: "Sarah Johnson",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      duration: "8 hours",
      progress: 45,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      category: "Development",
      isDownloaded: true,
      lessons: 24,
      level: "Advanced",
      rating: 4.9,
      students: 12453,
      description: "Master React with hooks, context API, and modern best practices. Build real-world applications.",
      whatYouLearn: [
        "React Hooks in depth",
        "Context API for state management",
        "Performance optimization",
        "Testing React applications",
        "Deployment strategies"
      ],
      requirements: [
        "Basic JavaScript knowledge",
        "HTML/CSS fundamentals",
        "Computer with internet"
      ]
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      duration: "12 hours",
      progress: 20,
      thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      category: "AI & ML",
      isDownloaded: false,
      lessons: 36,
      level: "Intermediate",
      rating: 4.8,
      students: 8942,
      description: "Learn machine learning algorithms and real-world applications with Python.",
      whatYouLearn: [
        "Supervised learning",
        "Unsupervised learning",
        "Neural networks",
        "Model evaluation",
        "Real-world projects"
      ],
      requirements: [
        "Python basics",
        "Basic math knowledge",
        "Curiosity for AI"
      ]
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      instructor: "Emma Rodriguez",
      instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      duration: "6 hours",
      progress: 80,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      category: "Design",
      isDownloaded: true,
      lessons: 18,
      level: "Beginner",
      rating: 4.7,
      students: 15234,
      description: "Design beautiful and functional user interfaces that users love.",
      whatYouLearn: [
        "Design principles",
        "Color theory",
        "Typography",
        "Wireframing",
        "Prototyping"
      ],
      requirements: [
        "No prior design experience",
        "Creativity",
        "Figma (free tool)"
      ]
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      instructor: "Prof. James Wilson",
      instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      duration: "15 hours",
      progress: 10,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Data Science",
      isDownloaded: false,
      lessons: 42,
      level: "Advanced",
      rating: 4.9,
      students: 6734,
      description: "Complete data science bootcamp with Python, pandas, and scikit-learn.",
      whatYouLearn: [
        "Data cleaning",
        "Data visualization",
        "Statistical analysis",
        "Machine learning",
        "Big data tools"
      ],
      requirements: [
        "Python programming",
        "Statistics basics",
        "Analytical mindset"
      ]
    },
    {
      id: 5,
      title: "Cloud Computing with AWS",
      instructor: "Alex Thompson",
      instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      duration: "10 hours",
      progress: 0,
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      category: "Cloud",
      isDownloaded: false,
      lessons: 30,
      level: "Intermediate",
      rating: 4.8,
      students: 5231,
      description: "Master AWS services and cloud architecture for modern applications.",
      whatYouLearn: [
        "EC2 and S3",
        "Lambda functions",
        "Database services",
        "Security best practices",
        "Cost optimization"
      ],
      requirements: [
        "Basic IT knowledge",
        "Command line experience",
        "AWS free tier account"
      ]
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      instructor: "Lisa Wang",
      instructorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      duration: "9 hours",
      progress: 0,
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      category: "Security",
      isDownloaded: false,
      lessons: 28,
      level: "Beginner",
      rating: 4.9,
      students: 7823,
      description: "Learn cybersecurity fundamentals and protect digital assets.",
      whatYouLearn: [
        "Network security",
        "Cryptography",
        "Threat detection",
        "Security audits",
        "Incident response"
      ],
      requirements: [
        "Basic computer knowledge",
        "Interest in security",
        "Ethical mindset"
      ]
    }
  ];
  
  export const recentActivities = [
    { id: 1, activity: "Completed 'React Hooks' lesson", time: "2 hours ago", type: "lesson", details: "Advanced React Course" },
    { id: 2, activity: "Downloaded 'Machine Learning' course", time: "1 day ago", type: "download", details: "2.4 GB" },
    { id: 3, activity: "Earned '7 Day Streak' badge", time: "2 days ago", type: "achievement", details: "Keep it up!" },
    { id: 4, activity: "Started 'UI Design' course", time: "3 days ago", type: "course", details: "Lesson 1 completed" },
    { id: 5, activity: "Completed quiz with 95% score", time: "5 days ago", type: "achievement", details: "JavaScript Fundamentals" },
    { id: 6, activity: "Shared certificate on LinkedIn", time: "1 week ago", type: "achievement", details: "React Certification" }
  ];
  
  export const statistics = {
    totalHours: 127,
    completedCourses: 8,
    streakDays: 15,
    downloadedLessons: 28,
    quizzesTaken: 24,
    averageScore: 85,
    certificatesEarned: 3,
    totalCourses: 12
  };
  
  export const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Computer Science Student",
      content: "This platform changed how I learn. Offline access is a game-changer! I can study anywhere without worrying about internet.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      course: "React Development"
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Web Developer",
      content: "The AI study assistant is incredibly helpful. Best learning investment ever. The personalized recommendations are spot on!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      course: "UI/UX Design"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Data Scientist",
      content: "Finally a platform that understands offline learning needs. The progress sync is flawless and the content is top-notch.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      course: "Data Science"
    }
  ];
  
  export const weeklyData = [
    { day: "Mon", hours: 2.5, lessons: 3 },
    { day: "Tue", hours: 3.5, lessons: 4 },
    { day: "Wed", hours: 2, lessons: 2 },
    { day: "Thu", hours: 4, lessons: 5 },
    { day: "Fri", hours: 3, lessons: 3 },
    { day: "Sat", hours: 1.5, lessons: 2 },
    { day: "Sun", hours: 2, lessons: 2 }
  ];
  
  export const categories = [
    "All",
    "Development",
    "AI & ML",
    "Design",
    "Data Science",
    "Cloud",
    "Security",
    "Business",
    "Marketing"
  ];
  
  export const achievements = [
    { id: 1, title: "Early Bird", description: "Complete 5 lessons before noon", points: 100, icon: "🌅", completed: true },
    { id: 2, title: "Night Owl", description: "Study after 10 PM", points: 100, icon: "🦉", completed: true },
    { id: 3, title: "Speed Demon", description: "Complete a course in 7 days", points: 200, icon: "⚡", completed: false },
    { id: 4, title: "Perfect Score", description: "Get 100% on a quiz", points: 150, icon: "🎯", completed: true },
    { id: 5, title: "Social Butterfly", description: "Share 5 certificates", points: 100, icon: "🦋", completed: false }
  ];