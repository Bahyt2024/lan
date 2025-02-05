import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      // Here you would typically send this data to your CRM or email service
      // For demo purposes, we'll just return success
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid input" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
