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
        title: "Enterprise Data Analytics Platform",
        description: "Advanced analytics solution with real-time data processing and visualization capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "Python", "AWS", "PostgreSQL"],
        category: "Data Analytics",
        featured: true,
      },
      {
        title: "FinTech Mobile Application",
        description: "Secure mobile banking solution with biometric authentication and real-time transactions.",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["Flutter", "Node.js", "MongoDB", "Stripe"],
        category: "Mobile Development",
        featured: true,
      },
      {
        title: "Cloud Infrastructure Modernization",
        description: "Complete cloud migration and DevOps transformation for enhanced scalability and security.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
        category: "DevOps",
        featured: false,
      },
      {
        title: "E-commerce Marketplace Platform",
        description: "Scalable multi-vendor e-commerce platform with advanced search and payment processing.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
        category: "Web Development",
        featured: false,
      },
      {
        title: "AI-Powered Customer Support System",
        description: "Intelligent chatbot and ticket routing system using natural language processing.",
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["Python", "TensorFlow", "FastAPI", "React"],
        category: "AI/ML",
        featured: false,
      },
      {
        title: "Healthcare Management System",
        description: "Comprehensive patient management system with secure data handling and compliance features.",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
        category: "Healthcare",
        featured: false,
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
