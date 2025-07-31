import { users, blogPosts, portfolioProjects, contactSubmissions, type User, type InsertUser, type BlogPost, type InsertBlogPost, type PortfolioProject, type InsertPortfolioProject, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  getAllPortfolioProjects(): Promise<PortfolioProject[]>;
  getPortfolioProject(id: number): Promise<PortfolioProject | undefined>;
  getFeaturedPortfolioProjects(): Promise<PortfolioProject[]>;
  createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject>;

  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private portfolioProjects: Map<number, PortfolioProject>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentUserId: number;
  private currentBlogPostId: number;
  private currentPortfolioProjectId: number;
  private currentContactSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.portfolioProjects = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentBlogPostId = 1;
    this.currentPortfolioProjectId = 1;
    this.currentContactSubmissionId = 1;

    this.seedData();
  }

  private seedData() {
    // Seed blog posts
    const blogPostsData = [
      {
        title: "The Future of Enterprise Software Development",
        content: "Exploring emerging trends and technologies that will shape enterprise software development in 2024 and beyond...",
        excerpt: "Exploring emerging trends and technologies that will shape enterprise software development in 2024 and beyond.",
        category: "Digital Transformation",
        imageUrl: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-01-15"),
        featured: true,
      },
      {
        title: "Optimizing Cloud Infrastructure for Maximum Performance",
        content: "Best practices for designing and implementing scalable cloud solutions that drive business growth...",
        excerpt: "Best practices for designing and implementing scalable cloud solutions that drive business growth.",
        category: "Cloud Computing",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-01-10"),
        featured: false,
      },
      {
        title: "Building High-Performance Development Teams",
        content: "Strategies for assembling and managing remote development teams that deliver exceptional results...",
        excerpt: "Strategies for assembling and managing remote development teams that deliver exceptional results.",
        category: "Team Management",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-01-05"),
        featured: false,
      },
    ];

    blogPostsData.forEach(post => {
      const id = this.currentBlogPostId++;
      this.blogPosts.set(id, { ...post, id });
    });

    // Seed portfolio projects
    const portfolioProjectsData = [
      {
        title: "Microlearning Platform for Professional and Personal Education",
        description: "MKrop provided comprehensive mobile development and frontend engineering services, utilizing Flutter for cross-platform mobile app development and React for building responsive and dynamic frontend interfaces.",
        imageUrl: "/assets/SmartEdu.jpg",
        technologies: ["AWS", "Edtech", "Flutter", "Mobile development", "MongoDB", "Stripe", "TypeScript", "Node.js", "Web development"],
        category: "Web Development",
        featured: false,
      },
      {
        title: "Call Center Monitoring Software That Automates 27% of Client Requests",
        description: "MKrop partnered in designing a tailored AI-powered call center monitoring software for a major telecom enterprise, seamlessly linking operators and customers within an integrated platform.",
        imageUrl: "/assets/CallCenterMonitoring.jpg",
        technologies: [".NET", "AI", "Business process automation (BPA)", "Python", "React"],
        category: "Web Development",
        featured: false,
      },
      {
        title: "Mobile Data Security Software for Telecom Provider",
        description: "As a part of a global team, our talented engineers built iOS and Android mobile security apps for a prominent US telecom giant.",
        imageUrl: "/assets/MobileSecurity.jpg",
        technologies: ["Cybersecurity", "DataProtection", "Java", "Swift", "Telecom"],
        category: "Mobile Development",
        featured: true,
      },
      {
        title: "IoT & ML-based Energy Management Solution",
        description: "Software for IoT energy management, specifically tailored to monitor wind turbines and manage energy production.",
        imageUrl: "/assets/IoTEnergyManagement.jpg",
        technologies: ["AI", "IoT", "DevOps", "ML", "Cloud", "Data analytics", "Energy", "Backend development"],
        category: "Data Analytics",
        featured: true,
      },
      {
        title: "Telehealth Solution: 7-8% Boost in Financial Results",
        description: "MKrop addressed the client’s need for telehealth app development and created native iOS and Android applications, integrating them into the SaaS healthcare environment.",
        imageUrl: "/assets/MobileTelemedicine.jpg",
        technologies: ["AWS", "Healthcare", "Java", "Kotlin", "Swift", "SaaS", "Video streaming", "Chatbot"],
        category: "Mobile Development",
        featured: true,
      },
      {
        title: "Enterprise Data Analytics Platform",
        description: "Advanced analytics solution with real-time data processing and visualization capabilities.",
        imageUrl: "/assets/Enterprise_Data_Analytics_Platform.jpg",
        technologies: ["React", "Python", "AWS", "PostgreSQL"],
        category: "Data Analytics",
        featured: true,
      },
      {
        title: "FinTech Mobile Application",
        description: "Secure mobile banking solution with biometric authentication and real-time transactions.",
        imageUrl: "/assets/Fintech.jpg",
        technologies: ["Flutter", "Node.js", "MongoDB", "Stripe"],
        category: "Mobile Development",
        featured: true,
      },
      {
        title: "Cloud Infrastructure Modernization",
        description: "Complete cloud migration and DevOps transformation for enhanced scalability and security.",
        imageUrl: "/assets/Cloud.jpg",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
        category: "DevOps",
        featured: false,
      },
      {
        title: "AI-Powered Customer Support System",
        description: "Intelligent chatbot and ticket routing system using natural language processing.",
        imageUrl: "/assets/AI-Powered_Customer_Support_System.jpg",
        technologies: ["Python", "TensorFlow", "FastAPI", "React"],
        category: "AI/ML",
        featured: true,
      },
      {
        title: "Healthcare Management System",
        description: "Comprehensive patient management system with secure data handling and compliance features.",
        imageUrl: "/assets/Healthcare_Management_System.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
        category: "Healthcare",
        featured: false,
      },
      {
        title: "Travel Management Software That Automated 88% of Bookings",
        description: "MKrop has crafted a comprehensive mobile and web application to streamline the process of finding and reserving accommodations at ski resorts across the globe.",
        imageUrl: "/assets/Booking.jpg",
        technologies: ["BPA", "ML", "HoReCa", "Mobile development", "Web", "Java", "Travel & hospitality"],
        category: "Mobile Development",
        featured: true,
      },
      {
        title: "3D Medical Imaging Software Development",
        description: "3D medical imaging software for reconstruction of bones, skin, and various organs from X-rays and CT scans implementing machine learning.",
        imageUrl: "/assets/3DHealth.jpg",
        technologies: ["AWS", "Healthcare", "IoT", "Computer Vision", "Python", "Backend development"],
        category: "3D",
        featured: true,
      },
    ];

    portfolioProjectsData.forEach(project => {
      const id = this.currentPortfolioProjectId++;
      this.portfolioProjects.set(id, { ...project, id, projectUrl: null });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.featured)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = { ...insertPost, id, featured: insertPost.featured ?? false };
    this.blogPosts.set(id, post);
    return post;
  }

  async getAllPortfolioProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.portfolioProjects.values());
  }

  async getPortfolioProject(id: number): Promise<PortfolioProject | undefined> {
    return this.portfolioProjects.get(id);
  }

  async getFeaturedPortfolioProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.portfolioProjects.values()).filter(project => project.featured);
  }

  async createPortfolioProject(insertProject: InsertPortfolioProject): Promise<PortfolioProject> {
    const id = this.currentPortfolioProjectId++;
    const project: PortfolioProject = { 
      ...insertProject, 
      id, 
      featured: insertProject.featured ?? false,
      projectUrl: insertProject.projectUrl ?? null
    };
    this.portfolioProjects.set(id, project);
    return project;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id, 
      company: insertSubmission.company ?? null,
      service: insertSubmission.service ?? null,
      submittedAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
