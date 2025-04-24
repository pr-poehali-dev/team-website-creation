
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string;
}

const Banner: FC<BannerProps> = ({ title, subtitle, buttonText, imageUrl }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-background to-accent/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
            <p className="text-xl text-muted-foreground">{subtitle}</p>
            <Button size="lg" className="hover-scale">{buttonText}</Button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src={imageUrl} 
              alt="Профессиональная команда" 
              className="rounded-lg shadow-lg max-w-full h-auto hover-scale"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
