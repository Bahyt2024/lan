import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import video from '@/../NonnLanding.mp4'

const texts = {
  1: "Maximize your sales and profits with the world's №1 repricer",
  2: "Boost your sales and profits. Instantly",
  3: "Win more BuyBoxes",

};

export default function HeroSection() {
  const [headline, setHeadline] = useState("");

  const location = useLocation();
  const navigate = useNavigate(); // Получаем текущий URL

  const [utmContent, setUtmContent] = useState(1);

  // Проверяем и устанавливаем параметр utm_content
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const utmValueString = urlParams.get("promotion/utp_content");

    // Проверяем, если значение присутствует и преобразуем в число
    let utmValue = utmValueString ? parseInt(utmValueString, 10) : 1;

    // Проверяем, что значение в пределах допустимого диапазона
    if (utmValue < 1 || utmValue > 3) {
      utmValue = 1; // По умолчанию utm_content=1
      navigate(`?utp_content=${utmValue}`, { replace: true });
    }

    setUtmContent(utmValue);

    // Устанавливаем headline в зависимости от значения utm_content
    setHeadline(texts[utmValue] || texts[1]);
  }, [location, navigate]);



  // Состояние для хранения заголовка в зависимости от utm_content



  const testimonials = [
    {
      id: 1,
      rating: <span style={{ color: '#FFD700' }}>★★★★★</span>,
      text: "“SaleScout is an essential tool for dynamic pricing! Our sales on Noon have increased significantly thanks to their algorithms.”",
      author: "Ahmed Al-Farsi",
      role: "E-commerce Specialist, Dubai",
    },
    {
      id: 2,
      rating: <span style={{ color: '#FFD700' }}>★★★★★</span>,
      text: "“The service provided by SaleScout makes price management effortless. Our business in the UAE grew by 30% after integrating their solutions.”",
      author: "Fatima Khalid",
      role: "Founder, Abu Dhabi Traders",
    },
    {
      id: 3,
      rating: <span style={{ color: '#FFD700' }}>★★★★★</span>,
      text: "“Ease of use and powerful features make SaleScout the top choice for sellers in the MENA region.”",
      author: "Omar Hassan",
      role: "Sales Director, Emirates Retail",
    },
    {
      id: 4,
      rating: <span style={{ color: '#FFD700' }}>★★★★★</span>,
      text: "“I’ve been using SaleScout for over a year, and I can't imagine working without it. Their customer support is top-notch!”",
      author: "Hassan Al-Maktoum",
      role: "Amazon & Noon Seller, Sharjah",
    },
  ];

  return (
      <section className="relative min-h-[90vh] pt-8 sm:pt-12 pb-8 sm:pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8 items-center">
            {/* Текстовая часть с заголовком и кнопкой */}
            <div className="sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-[3]" dangerouslySetInnerHTML={{ __html: headline }}></h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                No credit card required | Cancel anytime | 3-day trial
              </p>
              <div className="space-y-4 sm:space-y-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full sm:w-auto">Try for free</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <ContactForm />
                  </DialogContent>
                </Dialog>
                <div className="text-sm text-gray-600 mt-2">
                  <p>
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="mx-2">|</span>
                    <span>rated 5 stars by our users</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Секция с видео */}
            <div className="relative">
              <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden border-4 border-black shadow-lg">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Карусель с отзывами */}
          <div className="mt-16 text-center relative space-y-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                className="w-full max-w-6xl mx-auto"
            >
              {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-4">
                      <p className="text-lg font-semibold">
                        <span style={{ color: '#FFD700' }}>★★★★★</span>
                      </p>
                      <p className="text-gray-800 mt-4">{testimonial.text}</p>
                      <p className="mt-6 font-bold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  );
}