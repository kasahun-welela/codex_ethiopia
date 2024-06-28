import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <CardTitle>Skills & Expertise</CardTitle>
        <CardDescription>Showcase your expertise</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="bg-muted text-foreground whitespace-nowrap"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Skills;
