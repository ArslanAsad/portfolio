"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { MailOpen, FolderGit2, ExternalLink } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiOracle,
  SiPandas,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiDotnet,
  SiSpringboot,
  SiNextdotjs,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

// Typewriter component
function Typewriter({ text, speed = 100, onComplete, showCursor = true }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursorState((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      {showCursor && (
        <span
          className={`${
            showCursorState ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          |
        </span>
      )}
    </span>
  );
}

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSubmit = async (values) => {
    const typedValues = values;

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: typedValues.name,
      from_email: typedValues.email,
      message: typedValues.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("❌ Failed to send message.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-black/70 backdrop-filter backdrop-blur-md flex flex-col sm:flex-row justify-between sm:justify-around items-center h-auto sm:h-17 p-4 text-lg sm:text-xl font-semibold text-white fixed w-full top-0 z-50 border-b border-white/10">
        <button onClick={() => scrollToSection("home")}>Arslan.dev</button>
        <div className="flex flex-row gap-4 sm:gap-10">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-purple-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-purple-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Landing */}
      <section
        id="home"
        className={`bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] w-screen min-h-screen flex flex-col gap-7 p-4 sm:p-10 justify-center items-center pt-20 sm:pt-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-5 justify-start text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white min-h-[1.2em]">
            <Typewriter
              text="Hey, I'm Arslan Asad"
              speed={80}
              onComplete={() => setShowSecondLine(true)}
              showCursor={false}
            />
          </h1>
          {showSecondLine && (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white min-h-[1.2em] animate-fade-in">
              <Typewriter text="A Software Engineer 💻" speed={80} />
            </h1>
          )}
        </div>
        <div
          className={`w-full sm:w-2/3 flex flex-col justify-start text-center sm:text-left transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-4">
            A <b>fullstack</b> developer with solid foundations in{" "}
            <b>backend</b> and <b>AI</b>.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold">
            Passionate for building intelligent and efficient web solutions, I
            thrive at the intersection of backend architecture, AI integration,
            and user-centric design to deliver seamless and functional
            experiences.
          </p>
        </div>
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center text-white transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            className="cursor-pointer w-full sm:w-auto"
            onClick={() => scrollToSection("contact")}
          >
            <MailOpen className="mr-2" /> Contact Me
          </Button>
          <Button
            className="cursor-pointer w-full sm:w-auto"
            onClick={() => scrollToSection("projects")}
          >
            <FolderGit2 className="mr-2" /> View Projects
          </Button>
          <div className="hidden sm:block">|</div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/arslan-asad-301084262/"
              className="hover:text-purple-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/ArslanAsad/"
              className="hover:text-purple-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={`bg-black w-screen text-white flex flex-col gap-7 p-4 sm:p-10 justify-center items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          Skills I Have
        </h1>
        <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center max-w-4xl">
          <Button className="text-xs sm:text-sm">
            Fullstack Web Development
          </Button>
          <Button className="text-xs sm:text-sm">Database Design</Button>
          <Button className="text-xs sm:text-sm">API Integration</Button>
          <Button className="text-xs sm:text-sm">AI Integration</Button>
          <Button className="text-xs sm:text-sm">DevOps</Button>
          <Button className="text-xs sm:text-sm">CI/CD Pipeline</Button>
        </div>
      </section>

      {/* Tools */}
      <section
        className={`bg-black w-screen text-white flex flex-col gap-7 p-4 sm:p-10 justify-center items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          Tools I Use
        </h1>

        <div className="w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Languages
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center mb-8">
            <SiJavascript className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiTypescript className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiPython className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiCplusplus className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <FaJava className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Frontend
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center mb-8">
            <SiReact className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiNextdotjs className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiTailwindcss className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiShadcnui className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiHtml5 className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiCss3 className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Backend
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center mb-8">
            <SiNodedotjs className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiDjango className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiFlask className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiFastapi className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiDotnet className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiSpringboot className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiMongodb className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiMysql className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiPostgresql className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiOracle className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiPandas className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiScikitlearn className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            DevOps
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center">
            <SiDocker className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiKubernetes className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiGithub className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiGithubactions className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
            <SiJenkins className="text-2xl sm:text-3xl hover:scale-110 transition-transform" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`bg-black w-screen text-white flex flex-col gap-7 p-4 sm:p-10 justify-center items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                📚 Full Stack Online Bookstore
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A fully-featured online bookstore that allows users to browse,
              search, and purchase books securely. It solves the problem of
              building scalable e-commerce backends with integrated payments,
              user authentication, and notification systems—all packed in a
              responsive UI.
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">
                <a
                  href="https://github.com/ArslanAsad/bookstore"
                  className="flex items-center gap-2"
                >
                  See On GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                🧠 Resume-Assisted Job Scraper API
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              An intelligent job scraping API that extracts job listings from
              sites like LinkedIn and Indeed based on keywords from the user's
              uploaded resume. It simplifies the job search process by
              automatically matching jobs tailored to a candidate's profile.
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">
                <a
                  href="https://github.com/ArslanAsad/job-matching-system"
                  className="flex items-center gap-2"
                >
                  See On GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                🛒 MERN Stack E-Commerce App
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A modern e-commerce platform built with the MERN stack that
              handles product browsing, user authentication, and checkout.
              Designed as a course project, it tackles real-world challenges in
              building performant and user-friendly shopping experiences.
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                📅 Event Management System
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A desktop application for scheduling and managing events using
              .NET and SQL. Developed for administrative use, it streamlines
              event coordination tasks such as bookings, attendees, and
              schedules for organizations.
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                💰 Budget & Expense Tracker
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A personal finance tool that helps users monitor their spending,
              categorize expenses, and visualize budget usage over time. It
              addresses the challenge of managing day-to-day finances with a
              simple and intuitive JavaFX interface.
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                📊 BPM Model Analyzer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A Python tool that parses and analyzes business process models to
              identify inefficiencies and provide structural insights. It
              assists businesses in refining workflows and improving operational
              efficiency through model-driven analysis.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className={`bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] w-screen text-white flex flex-col gap-7 p-4 sm:p-10 justify-center items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          Contact Me
        </h1>
        <div className="bg-white w-full max-w-md p-4 sm:p-6 rounded-xl shadow-md border-2 border-purple-700">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 sm:px-6 py-8">
        <Separator className="mb-6 bg-gray-800" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm text-muted-foreground">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-white">Arslan Asad</h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
              <img
                src="https://flagcdn.com/w20/pk.png"
                alt="Pakistan flag"
                className="w-5 h-3 rounded-sm"
              />
              <span>Based In Pakistan</span>
            </div>
          </div>
          <div className="text-center">
            Built with React, Javascript, Tailwind CSS, and ShadCN/UI.
          </div>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/ArslanAsad/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arslan-asad-301084262/"
              className="hover:text-purple-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © 2024 Arslan. All rights are reserved.
        </div>
      </footer>
    </div>
  );
}
