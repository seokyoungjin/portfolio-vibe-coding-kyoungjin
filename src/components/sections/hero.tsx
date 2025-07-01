"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* 프로필 이미지 영역 */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            서경진
          </div>

          {/* 메인 제목 */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              안녕하세요! 👋
              <br />
              <span className="text-blue-600">프론트엔드 개발자</span>
              <br />
              서경진입니다
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              React, TypeScript, Next.js를 활용하여 사용자 경험을 중시하는
              <br className="hidden sm:block" />웹 애플리케이션을 개발합니다
            </p>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="px-8 py-3 text-lg"
            >
              더 알아보기
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="mailto:example@email.com">
                  <Mail className="mr-2 h-5 w-5" />
                  이메일
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  이력서
                </a>
              </Button>
            </div>
          </div>

          {/* 간단한 소개 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                💻 개발 분야
              </h3>
              <p className="text-gray-600">
                프론트엔드 웹 개발
                <br />
                반응형 웹 디자인
                <br />
                사용자 인터페이스 개발
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                🚀 주요 기술
              </h3>
              <p className="text-gray-600">
                React, Next.js
                <br />
                TypeScript, JavaScript
                <br />
                Tailwind CSS
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">🎯 목표</h3>
              <p className="text-gray-600">
                사용자 중심 개발
                <br />
                지속적인 학습과 성장
                <br />
                팀과 함께하는 개발
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
