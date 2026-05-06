"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { DollarSign, CreditCard, TrendingUp, ShieldCheck } from "lucide-react";

export default function RatesPage() {
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
      button={{ text: "تواصل معنا", href: "/contact" }}
    />
  </div>

  <div id="rates-page" data-section="rates-page">
      <AboutMetric
      useInvertedBackground={false}
      title="أسعار صرف العملات اليومية"
      metrics={[
        { icon: DollarSign, label: "الدولار الأمريكي", value: "1250 YER" },
        { icon: DollarSign, label: "اليورو", value: "1360 YER" },
        { icon: CreditCard, label: "الريال السعودي", value: "333 YER" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="التزامنا بالشفافية"
      description="نعرض لكم تحديثات العملات لحظة بلحظة."
      metrics={[
        { id: "r1", icon: TrendingUp, title: "تحديثات لحظية", value: "فوري" },
        { id: "r2", icon: ShieldCheck, title: "دقة بيانات", value: "عالية" },
      ]}
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
