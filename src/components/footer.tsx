"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Linkedin, MessageSquare, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:kyoungjin.dev@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: "Blog",
      href: "https://blog.example.com",
      icon: <MessageSquare className="h-5 w-5" />,
    },
  ];

  const quickLinks = [
    { name: "홈", href: "#home" },
    { name: "소개", href: "#about" },
    { name: "기술 스택", href: "#techstack" },
    { name: "프로젝트", href: "#projects" },
    { name: "연락처", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 로고 및 소개 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white dark:text-foreground">
              서경진
            </h3>
            <p className="text-gray-300 dark:text-muted-foreground leading-relaxed">
              사용자 경험을 중시하는 프론트엔드 개발자입니다. React와
              TypeScript를 활용하여 의미 있는 웹 애플리케이션을 만들어갑니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-muted"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-foreground">
              빠른 링크
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white dark:text-muted-foreground dark:hover:text-foreground transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-foreground">
              연락처
            </h4>
            <div className="space-y-2 text-gray-300 dark:text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>kyoungjin.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <span>github.com/kyoungjin</span>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  새로운 기회와 협업을 기다리고 있습니다!
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* 하단 정보 */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} 서경진. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <span>Next.js로 제작</span>
            <span>•</span>
            <span>Vercel로 배포</span>
            <span>•</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:bg-gray-800 px-2"
            >
              <ArrowUp className="h-4 w-4 mr-1" />맨 위로
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
