import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import TeamMemberCard from "@/components/TeamMemberCard";
import ServiceCard from "@/components/ServiceCard";
import Banner from "@/components/Banner";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Логотип команды" className="h-10 w-10" />
            <span className="text-xl font-bold">ПрофКоманда</span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors" href="/">
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors" href="/services">
                  Услуги
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors" href="/about">
                  О нас
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors" href="/contact">
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button>Связаться с нами</Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <Banner 
          title="Профессиональная команда экспертов"
          subtitle="Мы объединяем опыт и знания для достижения ваших целей"
          buttonText="Узнать больше"
          imageUrl="/placeholder.svg"
        />

        {/* Services Section */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Предоставляем полный спектр профессиональных услуг для вашего бизнеса
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Консультации"
                description="Профессиональные консультации от экспертов рынка"
                icon="📊"
              />
              <ServiceCard 
                title="Разработка"
                description="Создание индивидуальных решений под ваши задачи"
                icon="💻"
              />
              <ServiceCard 
                title="Поддержка"
                description="Постоянное сопровождение и оперативная помощь"
                icon="🛠️"
              />
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" className="group">
                  Все услуги
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Познакомьтесь с профессионалами, которые работают над вашими проектами
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMemberCard 
                name="Алексей Петров"
                position="Руководитель отдела"
                imageUrl="/placeholder.svg"
              />
              <TeamMemberCard 
                name="Елена Смирнова"
                position="Ведущий специалист"
                imageUrl="/placeholder.svg"
              />
              <TeamMemberCard 
                name="Дмитрий Иванов"
                position="Главный эксперт"
                imageUrl="/placeholder.svg"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать сотрудничество?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Наша команда экспертов готова помочь вам достичь ваших целей и решить любые задачи
            </p>
            <Button variant="secondary" size="lg">
              Оставить заявку
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ПрофКоманда</h3>
              <p className="text-muted-foreground">
                Профессиональные решения для вашего бизнеса с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Консультации</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Разработка</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">О компании</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Команда</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <address className="not-italic text-muted-foreground">
                <p>г. Москва, ул. Профессиональная, 123</p>
                <p className="mt-2">+7 (999) 123-45-67</p>
                <p className="mt-2">info@profteam.ru</p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
            <p>© 2023 ПрофКоманда. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
