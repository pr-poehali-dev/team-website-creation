import { Button } from "@/components/ui/button";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string;
}

const Banner = ({ title, subtitle, buttonText, imageUrl }: BannerProps) => {
  return (
    <div className="bg-background py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            {subtitle}
          </p>
          <Button size="lg" className="hover-scale">
            {buttonText}
          </Button>
        </div>
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-lg blur"></div>
            <img 
              src={imageUrl} 
              alt="Профессиональная команда" 
              className="relative rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
