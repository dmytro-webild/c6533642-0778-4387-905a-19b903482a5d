"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

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
        { name: "الرئيسية", id: "/" },
        { name: "أسعار العملات", id: "/rates" },
        { name: "الحوالات", id: "/transfers" },
        { name: "تواصل معنا", id: "/contact" },
      ]}
      brandName="Mersal Money"
      button={{ text: "ابدأ الآن", href: "#" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="مرسال موني للصرافة والتحويلات"
      description="حلول مالية وتحويلات عالمية بسرعة وأمان. نتميز بالدقة والالتزام بأعلى معايير الخدمة المصرفية لعملائنا في كل مكان."
      testimonials={[
        {
          name: "أحمد المنصور",          handle: "@ahmed",          testimonial: "خدمة سريعة واحترافية جداً، أشكر فريق مرسال على دقة المواعيد.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1"},
        {
          name: "سارة سعيد",          handle: "@sara",          testimonial: "أفضل أسعار صرف وأمان عالي في التحويلات الدولية.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-outdoor-businessman_23-2148763884.jpg"},
        {
          name: "خالد العبسي",          handle: "@khaled",          testimonial: "تجربة مستخدم مذهلة، النظام التقني ممتاز وشفاف.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-businesswoman_23-2148204371.jpg"},
        {
          name: "نور الهدى",          handle: "@nour",          testimonial: "ثقة وموثوقية في كل عملية تحويل قمت بها.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-yellow-jacket_23-2149020792.jpg"},
        {
          name: "محمد حسين",          handle: "@mohammed",          testimonial: "الخدمة متميزة وفريق العمل محترف جداً في التعامل.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-looking-camera-smiling-sitting-workplace-desk_482257-5730.jpg"},
      ]}
      buttons={[{ text: "أسعار العملات", href: "/rates" }, { text: "إرسال حوالة", href: "/transfers" }]}
      imageSrc="http://img.b2bpic.net/free-photo/detail-shot-skyscrapers_1359-988.jpg?_wi=1"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="أرقام تعكس ثقتكم"
      tag="إحصائيات مرسال"
      metrics={[
        { id: "m1", value: "150+", description: "دولة مغطاة" },
        { id: "m2", value: "50K+", description: "عميل سعيد" },
        { id: "m3", value: "24/7", description: "دعم فني" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{ items: ["لا تأخير في المعاملات", "لا عمولات خفية", "لا إجراءات معقدة"] }}
      positiveCard={{ items: ["تحويلات فورية", "أسعار منافسة", "أمان وحماية", "تغطية دولية واسعة"] }}
      title="لماذا مرسال موني؟"
      description="نقدم خدمات مالية مبتكرة تجمع بين الأمان التقني والالتزام بالأصول المالية."
      buttons={[{ text: "ابدأ التحويل الآن", href: "/transfers" }]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      title="آراء عملائنا"
      description="نحن فخورون بثقة عملائنا في خدماتنا المصرفية."
      testimonials={[]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="تواصل مع فريقنا"
      description="نحن هنا لخدمتك دائماً. اترك استفسارك وسيقوم فريق العمل بالتواصل معك فوراً."
      inputs={[
        { name: "name", type: "text", placeholder: "الاسم الكامل", required: true },
        { name: "phone", type: "tel", placeholder: "رقم الهاتف", required: true },
      ]}
      textarea={{ name: "message", placeholder: "اكتب رسالتك هنا...", rows: 4 }}
      imageSrc="http://img.b2bpic.net/free-photo/detail-shot-skyscrapers_1359-988.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DN5VLJQQvuqHSdXtvgajMKVnMt/uploaded-1778109736688-x4rwfa02.jpg"
      logoText="Mersal Money"
      leftLink={{ text: "سياسة الخصوصية", href: "#" }}
      rightLink={{ text: "حقوق النشر © 2024", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}