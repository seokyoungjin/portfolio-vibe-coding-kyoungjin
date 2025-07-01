import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  FileText,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "이메일",
      description: "kyoungjin.dev@gmail.com",
      action: "메일 보내기",
      href: "mailto:kyoungjin.dev@gmail.com",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "github.com/kyoungjin",
      action: "프로필 보기",
      href: "https://github.com",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "linkedin.com/in/kyoungjin",
      action: "연결하기",
      href: "https://linkedin.com",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "블로그",
      description: "tech.kyoungjin.blog",
      action: "글 읽기",
      href: "https://blog.example.com",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const quickLinks = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "이력서 다운로드",
      description: "PDF 형태의 상세 이력서",
      href: "/resume.pdf",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub 포트폴리오",
      description: "전체 프로젝트 코드 보기",
      href: "https://github.com",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "기술 블로그",
      description: "개발 경험과 학습 기록",
      href: "https://blog.example.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            연락하기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            새로운 기회나 협업 제안, 기술적인 대화 모두 환영합니다!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 연락 방법들 */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">연락 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <span className={method.iconColor}>{method.icon}</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {method.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.action}
                        <Send className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 퀵 링크 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">빠른 링크</h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 위치 정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                위치 & 근무 환경
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">현재 위치</h4>
                <p className="text-gray-600">서울, 대한민국</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">선호 근무 방식</h4>
                <p className="text-gray-600">
                  하이브리드 / 리모트 / 오프라인 모두 가능
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">시간대</h4>
                <p className="text-gray-600">KST (UTC+9)</p>
              </div>
            </CardContent>
          </Card>

          {/* 관심 분야 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5" />
                관심 있는 대화 주제
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  프론트엔드 개발 및 최신 기술 트렌드
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  사용자 경험(UX) 및 인터페이스(UI) 디자인
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  웹 성능 최적화 및 접근성
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  팀 협업 및 개발 문화
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  새로운 프로젝트 및 협업 기회
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            함께 일하고 싶으신가요?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            새로운 프로젝트, 협업 기회, 또는 단순히 기술에 대한 이야기를 나누고
            싶으시다면 언제든지 연락주세요. 빠른 시일 내에 답변드리겠습니다!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="mailto:kyoungjin.dev@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                이메일 보내기
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                이력서 다운로드
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
