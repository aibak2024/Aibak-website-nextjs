import { BookOpen, Users, Trophy, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals and experienced educators",
    icon: BookOpen,
  },
  {
    title: "Community Learning",
    description: "Join a vibrant community of learners and grow together",
    icon: Users,
  },
  {
    title: "Achievement Focused",
    description: "Track your progress and earn certificates of completion",
    icon: Trophy,
  },
  {
    title: "Career Growth",
    description: "Develop skills that align with industry demands",
    icon: Target,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">Why Choose AIBAK?</h2>
          <p className="mt-4 text-muted-foreground">
            Discover the advantages of learning with us and how we can help you achieve your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;