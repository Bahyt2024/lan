import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does SaleScout work?",
    answer: "SaleScout uses price automation to keep your products at the top on Noon by analyzing competitor data and adjusting your prices."
  },
  {
    question: "Why does my company need SaleScout?",
    answer: "SaleScout keeps your store ahead, giving you a competitive edge and increasing your revenue."
  },
  {
    question: "Will anyone have access to my data?",
    answer: "Your data is encrypted and never shared with third parties. You have full control and can revoke access anytime."
  },
  {
    question: "Can I test the system before purchasing?",
    answer: "Yes, we offer a 3-day free trial to experience SaleScout's benefits firsthand."
  },
  {
    question: "Can I manage the system myself?",
    answer: "Yes, SaleScout has an intuitive interface for controlling pricing settings, strategies, and accessing sales analytics."
  },
  {
    question: "How quickly will I see results?",
    answer: "SaleScout delivers results within hours, moving your store up the rankings and increasing order flow."
  },
  {
    question: "What if I have questions?",
    answer: "Our support team is always available via WhatsApp or the help section in the system."
  },
  {
    question: "What happens after the trial period ends?",
    answer: "You can choose a plan and continue using SaleScout. If not, all settings and changes remain yours, and you'll only be billed if you continue."
  },
  {
    question: "How is SaleScout better than other pricing systems?",
    answer: "SaleScout updates prices in real-time, keeping you ahead and maximizing profits by adjusting prices strategically."
  }
];
export default function FaqSection() {
  return (
      <section id="faq" className="py-24 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-left sm:text-center mb-16">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">

                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="animate-fadeIn text-left">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 flex justify-center">
            <a
                href="https://api.whatsapp.com/send/?phone=971585661204&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-4 px-8 rounded-md shadow-lg transition transform hover:-translate-y-2 text-lg"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </section>
  );
}
