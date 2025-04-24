import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
