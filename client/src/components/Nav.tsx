import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "/logo1.png";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [utmContent, setUtmContent] = useState("1"); // По умолчанию "1"

  useEffect(() => {
    function getUTMParameter(name: string): string | null {
      let urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Получаем значение utm_content
    const utmContentParam = getUTMParameter('utm_content');

    // Проверяем, является ли значение числом
    if (!utmContentParam || isNaN(Number(utmContentParam))) {
      console.log("utm_content отсутствует или некорректное. Устанавливаем 1");
      setUtmContent("1");
    } else {
      console.log("utm_content из URL:", utmContentParam);
      setUtmContent(utmContentParam); // Устанавливаем значение utmContent как строку
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="ml-4">
            <img src={Logo} alt="Informednoon Logo" className="h-8" />
          </Link>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Dialog>
              <DialogTrigger>
                <Button className="flex items-center">
                  <Rocket className="h-4 w-4 mr-2" /> Start Free Trial
                </Button>
              </DialogTrigger>
              <DialogContent>
                <ContactForm />
              </DialogContent>
            </Dialog>

          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-16 right-0 h-full w-64 bg-white shadow-lg z-50">
            <div className="flex flex-col space-y-4 p-4">
              <Button onClick={() => setIsMenuOpen(false)} className="flex items-center">
                <Rocket className="h-4 w-4 mr-2" /> Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}

       {/* это потом удалить */}
      <div className="pt-16 text-center text-lg font-bold">


      </div>
    </>
  );
}
