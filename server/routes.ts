import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertPortfolioProjectSchema, insertContactSubmissionSchema } from "@shared/schema";

const contactTgTemplate = `📩 *New Contact Form Submission*

*Name:* {{NAME}}
*Email:* {{EMAIL}}
*Company:* {{COMPANY}}
*Service:* {{SERVICE}}
🕒 *Submitted At:* {{DATE}}
*Message:*
\`\`\`
{{MESSAGE}}
\`\`\`
`;

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog posts routes
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/featured", async (req, res) => {
    try {
      const posts = await storage.getFeaturedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured blog posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: "Invalid blog post data" });
    }
  });

  // Portfolio projects routes
  app.get("/api/portfolio-projects", async (req, res) => {
    try {
      const projects = await storage.getAllPortfolioProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio projects" });
    }
  });

  app.get("/api/portfolio-projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedPortfolioProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured portfolio projects" });
    }
  });

  app.get("/api/portfolio-projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getPortfolioProject(id);
      if (!project) {
        return res.status(404).json({ message: "Portfolio project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio project" });
    }
  });

  app.post("/api/portfolio-projects", async (req, res) => {
    try {
      const validatedData = insertPortfolioProjectSchema.parse(req.body);
      const project = await storage.createPortfolioProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: "Invalid portfolio project data" });
    }
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
      const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
      if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
        return res.status(500).json({ message: "Telegram bot configuration is missing" });
      }
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      let message = contactTgTemplate;
      message = message
        .replace("{{NAME}}", submission.name)
        .replace("{{EMAIL}}", submission.email)
        .replace("{{COMPANY}}", submission.company || "N/A")
        .replace("{{SERVICE}}", submission.service || "Other")
        .replace("{{MESSAGE}}", submission.message)
        .replace(
          "{{DATE}}",
          new Date(submission.submittedAt).toLocaleString(
            'en-US', { timeZone: 'Europe/Kyiv' }
          )
        );
      const formData = new URLSearchParams();
      formData.append("chat_id", TELEGRAM_CHAT_ID);
      formData.append("parse_mode", "Markdown");
      formData.append("text", message);
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        console.error("Failed to send message to Telegram:", await response.text());
        return res.status(500).json({ message: "Failed to send contact form submission" });
      }
      res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
