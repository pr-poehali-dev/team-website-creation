import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const TeamMemberCard = ({ name, position, imageUrl }: TeamMemberCardProps) => {
  return (
    <Card className="text-center hover-scale transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pt-6 pb-2">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">{name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{position}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
