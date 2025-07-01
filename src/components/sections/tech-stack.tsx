import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Palette,
  Database,
  Wrench,
  Globe,
  GitBranch,
  Smartphone,
  Monitor,
} from "lucide-react";

const TechStack = () => {
  const techCategories = {
    frontend: {
      title: "프론트엔드",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "React", level: 90, description: "컴포넌트 기반 UI 개발" },
        { name: "Next.js", level: 85, description: "풀스택 React 프레임워크" },
        {
          name: "TypeScript",
          level: 80,
          description: "타입 안정성과 개발 효율성",
        },
        {
          name: "JavaScript",
          level: 85,
          description: "ES6+ 모던 자바스크립트",
        },
        { name: "HTML5", level: 95, description: "시맨틱 마크업과 접근성" },
        { name: "CSS3", level: 90, description: "반응형 웹 디자인" },
      ],
    },
    styling: {
      title: "스타일링",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        {
          name: "Tailwind CSS",
          level: 90,
          description: "유틸리티 우선 CSS 프레임워크",
        },
        {
          name: "Styled Components",
          level: 75,
          description: "CSS-in-JS 스타일링",
        },
        { name: "SASS/SCSS", level: 80, description: "CSS 전처리기" },
        {
          name: "Responsive Design",
          level: 85,
          description: "모바일 퍼스트 디자인",
        },
      ],
    },
    tools: {
      title: "개발 도구",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 85, description: "버전 관리와 협업" },
        { name: "GitHub", level: 85, description: "코드 호스팅과 CI/CD" },
        { name: "VS Code", level: 95, description: "주력 개발 환경" },
        { name: "Figma", level: 70, description: "디자인 시스템과 협업" },
      ],
    },
    deployment: {
      title: "배포 & 호스팅",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Vercel", level: 85, description: "프론트엔드 배포 플랫폼" },
        { name: "Netlify", level: 80, description: "정적 사이트 호스팅" },
        { name: "GitHub Pages", level: 75, description: "정적 웹사이트 배포" },
      ],
    },
  };

  const SkillBar = ({
    skill,
  }: {
    skill: { name: string; level: number; description: string };
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <p className="text-sm text-muted-foreground">{skill.description}</p>
    </div>
  );

  return (
    <section id="techstack" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            지속적인 학습과 실무 경험을 통해 습득한 기술들입니다
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              프론트엔드
            </TabsTrigger>
            <TabsTrigger value="styling" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              스타일링
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              개발 도구
            </TabsTrigger>
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              배포
            </TabsTrigger>
          </TabsList>

          {Object.entries(techCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* 학습 중인 기술들 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            학습 중인 기술들
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-lg">Node.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  백엔드 개발 역량 확장을 위한 서버사이드 JavaScript 학습
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">React Native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  모바일 앱 개발을 위한 크로스 플랫폼 프레임워크 학습
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">GraphQL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  효율적인 데이터 페칭을 위한 쿼리 언어와 런타임 학습
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 기술 학습 철학 */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            기술 학습 철학
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <GitBranch className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                기초부터 탄탄히
              </h4>
              <p className="text-gray-600">
                새로운 기술을 학습할 때 항상 기본 원리부터 이해하고 실무에
                적용합니다
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                실전 중심 학습
              </h4>
              <p className="text-gray-600">
                이론 학습과 함께 실제 프로젝트를 통해 기술을 체득하고
                발전시킵니다
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                지속적 개선
              </h4>
              <p className="text-gray-600">
                트렌드를 따라가면서도 검증된 기술을 안정적으로 활용하는 균형을
                추구합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
