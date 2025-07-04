import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      name: "Двигатель",
      icon: "Settings",
      description: "Поршни, клапаны, прокладки",
    },
    {
      name: "Тормозная система",
      icon: "Zap",
      description: "Колодки, диски, жидкости",
    },
    {
      name: "Подвеска",
      icon: "Car",
      description: "Амортизаторы, пружины, опоры",
    },
    {
      name: "Трансмиссия",
      icon: "Cog",
      description: "Сцепление, масла, фильтры",
    },
    {
      name: "Электрика",
      icon: "Zap",
      description: "Аккумуляторы, свечи, провода",
    },
    { name: "Кузов", icon: "Shield", description: "Зеркала, стекла, фары" },
  ];

  const reviews = [
    {
      name: "Александр П.",
      rating: 5,
      text: "Отличное качество запчастей, быстрая доставка. Рекомендую!",
      date: "2 недели назад",
    },
    {
      name: "Марина К.",
      rating: 5,
      text: "Профессиональный подход, помогли с выбором нужных деталей.",
      date: "1 месяц назад",
    },
    {
      name: "Дмитрий С.",
      rating: 5,
      text: "Выгодные цены, оригинальные запчасти. Буду обращаться еще.",
      date: "3 недели назад",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/img/8da13535-d1bb-4574-ac10-2acc556743fd.jpg"
                alt="Автозапчасти"
                className="w-full max-w-md mx-auto mb-8 rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6 font-roboto">
              АвтоЗапчасти Профи
            </h1>
            <p className="text-xl mb-8 font-open-sans opacity-90">
              Только качественные автозапчасти с быстрой доставкой по всей
              России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={24} />
                <span className="font-semibold">Быстрая доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheck" size={24} />
                <span className="font-semibold">Только оригинал</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={24} />
                <span className="font-semibold">Гарантия качества</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-roboto">
            Категории автозапчастей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <Icon
                      name={category.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-roboto">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-roboto">
            Отзывы наших клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-roboto">
                      {review.name}
                    </CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">
                    {review.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-open-sans">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-roboto">
            Контакты и местоположение
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 font-roboto">
                Наши контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-blue-400" />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-400">
                      Звонки принимаем 9:00 - 21:00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-green-400"
                  />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-400">WhatsApp 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-blue-400" />
                  <div>
                    <p className="font-semibold">info@autoparts-pro.ru</p>
                    <p className="text-sm text-gray-400">
                      Ответим в течение часа
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-red-400 mt-1" />
                  <div>
                    <p className="font-semibold">
                      г. Москва, ул. Автозаводская, 15
                    </p>
                    <p className="text-sm text-gray-400">
                      Пн-Пт: 9:00-19:00, Сб: 9:00-17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 font-roboto">
                Мы на карте
              </h3>
              <div className="bg-gray-700 p-8 rounded-lg text-center">
                <Icon
                  name="MapPin"
                  size={48}
                  className="text-red-400 mx-auto mb-4"
                />
                <p className="text-gray-300 font-open-sans">
                  Интерактивная карта
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  г. Москва, ул. Автозаводская, 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 font-open-sans">
            © 2024 АвтоЗапчасти Профи. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
