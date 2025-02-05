import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import InputMask from 'react-input-mask';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import React, { useState, useEffect } from 'react';


const texts = {
    1: "Maximize your sales and profits with the world's №1 repricer",
    2: "Boost your sales and profits. Instantly",
    3: "Win more BuyBoxes",

};

const formSchema = z.object({
    storeName: z.string().min(2, "Store name is required"),
    phone: z.string().min(6, "Phone number is required"),
});

export default function ContactForm() {
    const [utp, setUtp] = React.useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const utmContent = urlParams.get("utp_content"); // Получаем значение utm_content
        if (utmContent) {
            setUtp(utmContent); // Устанавливаем значение в состояние utp
        }
    }, []);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            storeName: "",
            phone: "",
        },
    });

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            // Получаем utm-параметры из URL
            const urlParams = new URLSearchParams(window.location.search);
            const utmContent = urlParams.get("utm_content") || "";

            // Преобразуем utmContent в число, если это возможно
            const utmContentNumber = parseInt(utmContent);

            // Если utmContent не является числом, используем дефолтное значение
            // const utpText = !isNaN(utmContentNumber) ? texts[utmContentNumber] : "Default UTP";

            // Отправляем данные на сервер
            const response = await fetch('https://uae.salescout.me/send-promotion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    storeName: data.storeName,
                    phoneNumber: data.phone,
                    Utp: texts[utp], // Отправляем УТП
                }),
            });

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: "Your details were sent successfully!",
                });
                form.reset();
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Something went wrong. Please try again.",
                });
            }
        } catch (error) {
            console.error("Error sending data:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again.",
            });
        }
    };

    return (
        <div className="p-3 sm:p-6 rounded-xl bg-white shadow-md">
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6">Contact Us</h2>
            <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-6">
                We will get back to you asap!
            </p>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)} // Изменяем обработчик на handleSubmit
                    className="space-y-2 sm:space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl className="w-full">
                                    <input
                                        {...field}
                                        placeholder="Phone"
                                        type="tel"
                                        maxLength={20} // Ограничение на 20 символов
                                        inputMode="numeric" // Подсказка для мобильных клавиатур
                                        pattern="[0-9]*" // Только цифры
                                        onInput={(e) => {
                                            // Оставляем только цифры
                                            e.target.value = e.target.value.replace(/\D/g, '');
                                        }}
                                        className="w-full text-base h-10 rounded-lg border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-4"
                                    />
                                </FormControl>
                            </FormItem>

                        )}
                    />

                    <FormField
                        control={form.control}
                        name="storeName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl className="w-full">
                                    <Input
                                        placeholder="Store Name"
                                        {...field}
                                        className="w-full text-base h-10 rounded-lg border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs sm:text-sm" />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full text-xs sm:text-base h-8 sm:h-10 rounded-lg"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? "Sending..." : "Send"}
                    </Button>
                </form>
            </Form>


        </div>
    );
}
