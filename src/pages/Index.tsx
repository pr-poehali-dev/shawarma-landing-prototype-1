import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const products = [
    { name: 'Классическая', price: '250₽', description: 'Курица, овощи, соус' },
    { name: 'Острая', price: '280₽', description: 'Курица, острый соус, халапеньо' },
    { name: 'Сырная', price: '300₽', description: 'Курица, сыр моцарелла, овощи' },
    { name: 'Говяжья', price: '320₽', description: 'Говядина, овощи, фирменный соус' }
  ];

  const reviews = [
    { name: 'Анна К.', text: 'Лучшая шаурма в городе! Всегда свежая и вкусная', rating: 5 },
    { name: 'Дмитрий П.', text: 'Быстрая доставка, горячая еда. Рекомендую!', rating: 5 },
    { name: 'Елена М.', text: 'Большие порции, отличное соотношение цена-качество', rating: 5 }
  ];

  const faqItems = [
    { q: 'Какое время доставки?', a: 'Среднее время доставки составляет 30-45 минут в зависимости от вашего адреса.' },
    { q: 'Есть ли вегетарианские варианты?', a: 'Да, мы предлагаем вегетарианскую шаурму с фалафелем и овощами.' },
    { q: 'Какая минимальная сумма заказа?', a: 'Минимальная сумма заказа для доставки составляет 500₽.' },
    { q: 'Принимаете ли вы оплату картой?', a: 'Да, мы принимаем оплату наличными и банковскими картами.' }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Шаурма</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'why', 'services', 'prices', 'reviews', 'faq', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'why' && 'Почему мы'}
                  {section === 'services' && 'Услуги'}
                  {section === 'prices' && 'Цены'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-muted to-white">
          <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Настоящая <span className="text-primary">Шаурма</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Свежие ингредиенты, авторские рецепты и быстрая доставка прямо к вашей двери
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="text-lg" onClick={() => scrollToSection('prices')}>
                    Меню
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('contacts')}>
                    Контакты
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img
                  src="/img/213b4c96-b61f-4490-a523-c28beb8cbe4a.jpg"
                  alt="Шаурма"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">О нас</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы готовим самую вкусную шаурму в городе уже более 5 лет. Наша команда использует только свежие продукты
                и оригинальные рецепты, чтобы каждый клиент остался доволен. Мы верим, что качественная еда должна быть
                доступной каждому.
              </p>
            </div>
          </div>
        </section>

        <section id="why" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Leaf', title: 'Свежие продукты', desc: 'Только качественные ингредиенты каждый день' },
                { icon: 'Clock', title: 'Быстрая доставка', desc: 'Доставим горячую шаурму за 30-45 минут' },
                { icon: 'Heart', title: 'С любовью', desc: 'Готовим каждую порцию с душой и заботой' }
              ].map((item, idx) => (
                <Card key={idx} className="hover-scale">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: 'ShoppingBag', title: 'Самовывоз', desc: 'Забирайте заказ сами и получите скидку 10%' },
                { icon: 'Bike', title: 'Доставка', desc: 'Доставляем по всему городу быстро и бесплатно от 500₽' }
              ].map((service, idx) => (
                <Card key={idx} className="hover-scale">
                  <CardContent className="p-8 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Меню и цены</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, idx) => (
                <Card key={idx} className="bg-white hover-scale">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-3xl font-bold text-primary">{product.price}</span>
                      <Button>Заказать</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Отзывы клиентов</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <Card key={idx} className="hover-scale">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{review.text}"</p>
                    <p className="font-semibold">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                        <p className="text-muted-foreground">Ежедневно с 10:00 до 23:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Имя</label>
                        <input
                          type="text"
                          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Телефон</label>
                        <input
                          type="tel"
                          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Шаурма. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
