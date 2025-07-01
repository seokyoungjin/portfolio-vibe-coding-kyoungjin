import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            개발에 대한 열정과 사용자 경험을 중시하는 프론트엔드 개발자입니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 소개 텍스트 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              개발자로서의 여정
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                안녕하세요! 사용자 중심의 웹 개발을 추구하는 프론트엔드 개발자
                서경진입니다. 새로운 기술을 학습하고 적용하는 것을 즐기며, 항상
                더 나은 사용자 경험을 제공하기 위해 노력하고 있습니다.
              </p>
              <p>
                React와 TypeScript를 중심으로 한 모던 프론트엔드 기술 스택을
                활용하여 직관적이고 반응성이 뛰어난 웹 애플리케이션을
                개발합니다. 팀워크를 중시하며, 함께 성장하는 개발 문화를
                만들어가고 있습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Git</Badge>
            </div>
          </div>

          {/* 이미지 또는 시각적 요소 */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  🚀
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  "코드로 세상을 더 편리하게"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 특징 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">창의적 사고</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                문제를 다양한 관점에서 바라보고 창의적인 해결책을 찾습니다
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">목표 지향적</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                명확한 목표를 설정하고 체계적으로 달성해 나갑니다
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg">지속적 학습</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                새로운 기술과 트렌드를 꾸준히 학습하고 적용합니다
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-lg">사용자 중심</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자의 입장에서 생각하고 최고의 경험을 제공합니다
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 개발 동기 및 목표 */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            개발 동기 & 목표
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                개발을 시작한 이유
              </h4>
              <p className="text-muted-foreground">
                기술을 통해 사람들의 일상을 더욱 편리하게 만들고 싶다는 꿈에서
                시작했습니다. 코드 한 줄 한 줄이 누군가의 문제를 해결하고, 더
                나은 경험을 제공할 수 있다는 점에 큰 매력을 느꼈습니다.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                앞으로의 목표
              </h4>
              <p className="text-muted-foreground">
                사용자 친화적인 인터페이스 개발에 전문성을 키우고, 팀원들과 함께
                성장하며, 기술을 통해 사회에 긍정적인 영향을 미치는 개발자가
                되는 것이 목표입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
