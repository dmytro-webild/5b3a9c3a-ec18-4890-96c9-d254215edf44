"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Our Story",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Visit Us",
          id: "contact",
        },
      ]}
      brandName="Velora Café"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Elegance in Every Sip"
      description="Velora Café offers a sanctuary of refined flavor and artisanal craft, set in a beautifully curated, minimal space."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      carouselItems={[
        {
          id: "c1",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-cup-coffee-new-delicious-mini-cakes-with-different-shapes-wooden-table-coffee-shop_482257-19866.jpg",
          imageAlt: "Cafe ambiance",
        },
        {
          id: "c2",
          imageSrc: "http://img.b2bpic.net/free-photo/cropped-photo-man-white-shirt-holding-hot-coffee-cup_171337-9996.jpg",
          imageAlt: "Coffee beans",
        },
        {
          id: "c3",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-girl-sitting-cafe_176420-5921.jpg",
          imageAlt: "Cafe interior",
        },
        {
          id: "c4",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-pastry-breakfast_23-2148354695.jpg",
          imageAlt: "Pastries",
        },
        {
          id: "c5",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-male-barista-holding-professional-coffee-machine-cup_23-2148824423.jpg",
          imageAlt: "Barista",
        },
        {
          id: "c6",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-tiramisu-plate-flat-lay_23-2149599622.jpg",
          imageAlt: "Evening cafe",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="A Crafted Ritual"
      buttons={[
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Velvet Espresso",
          price: "$5.50",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-coffee-shop-city_53876-30213.jpg",
        },
        {
          id: "p2",
          name: "Artisanal Sourdough Croissant",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast_1084-46.jpg",
        },
        {
          id: "p3",
          name: "Lavender Infused Latte",
          price: "$6.25",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hot-cup-coffee_53876-123577.jpg",
        },
      ]}
      title="Signature Selections"
      description="Hand-crafted coffee and artisanal pastries curated for the discerning palate."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Elena Rossi",
          role: "Journalist",
          company: "Daily Gazette",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-good-looking-office-lady-enjoying-hot-coffee-holding-cup-sitttin-cafe-alone_197531-22842.jpg",
        },
        {
          id: "t2",
          name: "Julian Thorne",
          role: "Architect",
          company: "Studio X",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-businessman-suit-drinking-coffee-tea-from-office-mug-smiling-enthusiastic-camera-s_1258-154152.jpg",
        },
        {
          id: "t3",
          name: "Sofia Chen",
          role: "Designer",
          company: "Art Collective",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/shot-lovely-cute-girl-trendy-blouse_291650-621.jpg",
        },
        {
          id: "t4",
          name: "Marcus Vane",
          role: "Critic",
          company: "Food World",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/women-taking-coffee-with-friends_329181-11914.jpg",
        },
        {
          id: "t5",
          name: "Liam Scott",
          role: "Photographer",
          company: "Lens Pro",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-good-looking-office-lady-enjoying-hot-coffee-holding-cup-sitttin-cafe-alone_197531-22842.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "1.2k+",
          label: "Coffee Served Daily",
        },
        {
          value: "98%",
          label: "Guest Satisfaction",
        },
        {
          value: "5+",
          label: "Years of Artistry",
        },
      ]}
      title="Stories from Velora"
      description="Experience why our guests cherish their time with us."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Visit us in the heart of the city for your daily ritual."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Velora Café"
      copyrightText="© 2025 Velora Café. Crafted for perfection."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
