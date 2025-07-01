import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "이커머스 웹사이트",
      description:
        "React와 TypeScript를 활용한 반응형 온라인 쇼핑몰 플랫폼입니다. 사용자 친화적인 UI/UX와 효율적인 상태 관리를 구현했습니다.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
      ],
      features: [
        "반응형 웹 디자인",
        "상품 검색 및 필터링",
        "장바구니 기능",
        "사용자 인증",
        "결제 시스템 연동",
      ],
      role: "프론트엔드 개발자",
      duration: "2023.09 - 2023.12",
      teamSize: "3명",
      challenges: "복잡한 상태 관리와 성능 최적화",
      learned: "Next.js App Router, 상태 관리 패턴, 성능 최적화",
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
      status: "완료",
    },
    {
      id: 2,
      title: "개인 블로그 플랫폼",
      description:
        "Markdown 기반의 개발 블로그 플랫폼입니다. SEO 최적화와 다크모드를 지원하며, 정적 사이트 생성을 통해 빠른 로딩 속도를 구현했습니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Prisma", "PostgreSQL"],
      features: [
        "Markdown 에디터",
        "SEO 최적화",
        "다크모드 지원",
        "댓글 시스템",
        "태그 기반 분류",
      ],
      role: "풀스택 개발자",
      duration: "2023.06 - 2023.08",
      teamSize: "1명 (개인 프로젝트)",
      challenges: "MDX 렌더링 최적화와 SEO 구현",
      learned: "SSG, MDX, SEO 최적화, 다크모드 구현",
      githubUrl: "https://github.com/example/blog",
      liveUrl: "https://my-blog.vercel.app",
      status: "완료",
    },
    {
      id: 3,
      title: "할 일 관리 앱",
      description:
        "React와 Context API를 활용한 개인 프로젝트 관리 도구입니다. 드래그 앤 드롭 기능과 실시간 데이터 동기화를 구현했습니다.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "JavaScript", "CSS Modules", "Firebase"],
      features: [
        "드래그 앤 드롭",
        "실시간 동기화",
        "카테고리 분류",
        "마감일 알림",
        "진행률 추적",
      ],
      role: "프론트엔드 개발자",
      duration: "2023.03 - 2023.05",
      teamSize: "1명 (개인 프로젝트)",
      challenges: "실시간 데이터 동기화와 UX 개선",
      learned: "Firebase 연동, 드래그 앤 드롭 라이브러리, 실시간 데이터 처리",
      githubUrl: "https://github.com/example/todo-app",
      liveUrl: "https://todo-app-demo.vercel.app",
      status: "완료",
    },
    {
      id: 4,
      title: "음식 레시피 공유 플랫폼",
      description:
        "사용자들이 음식 레시피를 공유하고 평가할 수 있는 소셜 플랫폼입니다. 이미지 업로드와 검색 기능을 중점적으로 개발했습니다.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "TypeScript",
        "Styled Components",
        "Node.js",
        "MongoDB",
      ],
      features: [
        "레시피 등록/수정",
        "이미지 업로드",
        "평점 및 리뷰",
        "재료별 검색",
        "북마크 기능",
      ],
      role: "프론트엔드 개발자",
      duration: "2024.01 - 진행중",
      teamSize: "4명",
      challenges: "이미지 최적화와 검색 성능 향상",
      learned: "이미지 처리, 검색 알고리즘, 팀 협업",
      githubUrl: "https://github.com/example/recipe-platform",
      liveUrl: "https://recipe-platform.vercel.app",
      status: "진행중",
    },
  ];

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* 프로젝트 이미지 */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant={project.status === "완료" ? "default" : "secondary"}>
            {project.status}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 기술 스택 */}
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2">
            기술 스택
          </h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* 주요 기능 */}
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2">
            주요 기능
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-muted-foreground/70 text-xs">
                +{project.features.length - 3}개 더
              </li>
            )}
          </ul>
        </div>

        {/* 프로젝트 정보 */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {project.duration}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {project.teamSize}
          </div>
        </div>

        {/* 링크 버튼들 */}
        <div className="flex gap-2 pt-4">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              코드
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              데모
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            프로젝트
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            실무 역량을 키우고 기술을 적용해 본 다양한 프로젝트들입니다
          </p>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 프로젝트 개발 접근법 */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            프로젝트 개발 접근법
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                사용자 중심
              </h4>
              <p className="text-muted-foreground">
                사용자의 니즈를 파악하고 직관적인 인터페이스 설계를 최우선으로
                합니다
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                클린 코드
              </h4>
              <p className="text-muted-foreground">
                유지보수가 쉽고 확장 가능한 깔끔한 코드 작성을 지향합니다
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                성능 최적화
              </h4>
              <p className="text-muted-foreground">
                빠른 로딩 속도와 원활한 사용자 경험을 위한 최적화에 신경 씁니다
              </p>
            </div>
          </div>
        </div>

        {/* GitHub 링크 */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            더 많은 프로젝트가 궁금하신가요?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub에서 더 보기
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
