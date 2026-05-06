"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Headphones } from "lucide-react";

export default function ContactPage() {
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
      button={{ text: "اتصل بنا", href: "tel:+123456789" }}
    />
  </div>

  <div id="contact-page" data-section="contact-page">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "كيف أرسل حوالة؟", content: "يمكنك زيارة أي فرع أو استخدام تطبيقنا للبدء فوراً." },
        { id: "f2", title: "ما هي رسوم التحويل؟", content: "الرسوم تبدأ من 0.5% وتختلف حسب الوجهة والعملة." },
        { id: "f3", title: "هل التحويل آمن؟", content: "نعم، نستخدم أحدث أنظمة التشفير الدولية لضمان أمان معاملاتكم." },
      ]}
      title="أسئلة شائعة"
      description="كل ما تحتاجه من معلومات حول خدماتنا المالية."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="دعمنا"
      title="نحن هنا لمساعدتك"
      description="فريقنا مستعد للإجابة على كافة تساؤلاتك المالية."
      subdescription="تواصل معنا عبر القنوات الرسمية لأي مساعدة تقنية أو استفسار عن حوالة."
      icon={Headphones}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-office_329181-19343.jpg"
      mediaAnimation="opacity"
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
