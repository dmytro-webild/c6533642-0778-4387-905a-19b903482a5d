"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "الرئيسية",
          id: "/",
        },
        {
          name: "أسعار العملات",
          id: "/rates",
        },
        {
          name: "الحوالات",
          id: "/transfers",
        },
        {
          name: "تواصل معنا",
          id: "/contact",
        },
      ]}
      brandName="Mersal Money"
    />
  </div>

  <div id="transfers-page" data-section="transfers-page">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "تحويل عبر الوكلاء",
          price: "عمولة منخفضة",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DN5VLJQQvuqHSdXtvgajMKVnMt/uploaded-1778109736688-x4rwfa02.jpg",
        },
        {
          id: "p2",
          name: "تحويل بنكي دولي",
          price: "سريع وآمن",
          imageSrc: "http://img.b2bpic.net/free-photo/detail-shot-skyscrapers_1359-988.jpg?_wi=3",
        },
        {
          id: "p3",
          name: "محفظة رقمية",
          price: "فورية",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",
        },
      ]}
      title="خدمات التحويل"
      description="اختر الطريقة الأنسب لإرسال أموالك بكل سهولة ويسر."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      title="أسئلة التحويل"
      description="كل ما تحتاج معرفته عن إرسال الأموال."
      faqs={[
        {
          id: "q1",
          title: "ما هو الحد الأدنى؟",
          content: "الحد الأدنى هو 10 دولارات.",
        },
        {
          id: "q2",
          title: "كم تستغرق التحويلات؟",
          content: "معظم التحويلات تصل خلال دقائق.",
        },
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DN5VLJQQvuqHSdXtvgajMKVnMt/uploaded-1778109736688-x4rwfa02.jpg"
      logoText="Mersal Money"
      leftLink={{
        text: "سياسة الخصوصية",
        href: "#",
      }}
      rightLink={{
        text: "حقوق النشر © 2024",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
