
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary hover:translate-y-[-5px]">
      <CardHeader className="pb-2">
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
