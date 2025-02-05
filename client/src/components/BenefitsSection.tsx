import { ArrowUpRight, Zap, Shield, Box, Target, TrendingUp } from "lucide-react"; // Импорт иконок
import { Card, CardContent } from "@/components/ui/card"; // Импорт компонентов Card
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"; // Импорт компонентов Dialog
import { Button } from "@/components/ui/button"; // Импорт компонента Button
import ContactForm from "@/components/ContactForm"; // Импорт компонента ContactForm

// Данные о преимуществах
const benefits = [
  {
    icon: <ArrowUpRight className="h-6 w-6" />,
    title: "Set it and forget it",
    description: "AI-powered algorithms keep you ahead of the competition, allowing you to focus on running your business."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Raise the Buy Box price",
    description: "Get and keep the Buy Box while maximizing profit by raising prices as high as possible without losing it."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Battle tested",
    description: "With over 15 years of experience, our software incorporates advanced algorithms to handle every scenario."
  }
];

export default function BenefitsSectionNonLanding() {
  return (
    <section id="benefits" className="py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-[-20px] text-center lg:text-right lg:pr-40">
          Win more buybox
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Левая сторона: Видео в черной рамке */}
          <div className="relative flex justify-center lg:pl-8">
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] h-[450px] sm:h-[500px] md:h-[550px]">
              <div className="absolute inset-0 bg-black rounded-[2rem] sm:rounded-[3rem] shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-7 bg-black rounded-б-2xl sm:rounded-б-3xl" />
                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bottom-1 sm:bottom-2 left-1 sm:left-2 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/VIDEO_Phone.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Правая сторона: Текстовый контент */}
          <div>
            <p className="text-lg text-gray-600 mb-8">
               We analyze the market and your reviews every minute to keep your product at the top. With real-time monitoring, we ensure maximum visibility and sales efficiency, helping you stay ahead of the competition.
            </p>

            {/* Список преимуществ */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Win and keep the Buy Box
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our Buy Box strategy not only helps you to get the Buy Box but also to keep it, ensuring your products remain among the top offers.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Find your optimal price regardless of competition
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our Optimal Price algorithm uses AI to find the best prices for your products, regardless of your competitors.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Maintain sales velocity
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The Private Label algorithm helps to find the best price to maximize your profits while maintaining a high level of sales.
                </p>

                {/* Кнопка "Уведомить меня" с диалогом */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full sm:w-auto bg-primary text-white py-3 px-6 rounded-md shadow-lg hover:bg-primary/90">
                      Notify Me
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <ContactForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



