
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FC } from "react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ name, position, imageUrl }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <CardContent className="pt-1 p-0 text-muted-foreground">
          {position}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default TeamMemberCard;
