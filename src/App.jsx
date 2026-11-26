import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Reusables
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import FloatingContactBar from './components/common/FloatingContactBar';
import AppointmentModal from './components/forms/AppointmentModal';

// Pages
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import VisionMission from './pages/About/VisionMission';
import WhyChooseUs from './pages/About/WhyChooseUs';
import ExpertDentists from './pages/About/ExpertDentists';

import TreatmentsIndex from './pages/Treatments/TreatmentsIndex';
import TreatmentDetail from './pages/Treatments/TreatmentDetail';

import InternationalPatients from './pages/International/InternationalPatients';
import DentalTourism from './pages/International/DentalTourism';
import InternationalPatientServices from './pages/International/InternationalPatientServices';

import Gallery from './pages/Gallery/Gallery';
import BlogIndex from './pages/Blog/BlogIndex';
import BlogArticle from './pages/Blog/BlogArticle';
import ContactUs from './pages/Contact/ContactUs';
import LocationDetail from './pages/Locations/LocationDetail';
import LandingPageTemplate from './pages/Landing/LandingPageTemplate';
import { PrivacyPolicy, ThankYouPage, GenericUtilityPage } from './pages/Utility/UtilityPages';

// Dynamic Router for matching root permalinks
import { blogPosts } from './data/blogPosts';
import { treatmentsData } from './data/treatmentsData';

function DynamicCatchAll({ onOpenBooking }) {
  // Check if current path matches a known blog post or treatment
  const path = window.location.pathname.replace(/^\/|\/$/g, '');

  const isBlogPost = blogPosts.find(p => p.slug === path);
  if (isBlogPost) {
    return <BlogArticle customSlug={path} onOpenBooking={onOpenBooking} />;
  }

  const isTreatment = treatmentsData.find(t => t.slug === path || t.altSlug === path);
  if (isTreatment) {
    return <TreatmentDetail customSlug={isTreatment.slug} onOpenBooking={onOpenBooking} />;
  }

  return (
    <GenericUtilityPage 
      title="Hyderabad Smiles Advanced Dental Hospitals" 
      message="Welcome to Hyderabad Smiles. Explore our specialized dental treatments, schedule a consultation, or contact our clinics across Jubilee Hills, Madhapur, and Punjagutta."
    />
  );
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalDefaultBranch, setModalDefaultBranch] = useState('Jubilee Hills');
  const [modalDefaultTreatment, setModalDefaultTreatment] = useState('Dental Implants');

  const handleOpenBooking = (branch = 'Jubilee Hills', treatment = 'Dental Implants') => {
    setModalDefaultBranch(branch);
    setModalDefaultTreatment(treatment);
    setBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-warm-ivory text-navy selection:bg-orange selection:text-white">
        <ScrollToTop />

        {/* Global Header */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        {/* Main Content Area */}
        <main className="flex-grow pb-16 sm:pb-0">
          <Routes>
            {/* 1. HOMEPAGE */}
            <Route path="/" element={<Home onOpenBooking={() => handleOpenBooking()} />} />

            {/* 2. ABOUT US & COMPANY */}
            <Route path="/about-us" element={<AboutUs onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/about-us/" element={<AboutUs onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/vision-mission/" element={<VisionMission />} />
            <Route path="/why-choose-us" element={<WhyChooseUs onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/why-choose-us/" element={<WhyChooseUs onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/why-choose-hyderabad-smiles" element={<WhyChooseUs onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/why-choose-hyderabad-smiles/" element={<WhyChooseUs onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/expert-dentists-in-hyderabad" element={<ExpertDentists onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/expert-dentists-in-hyderabad/" element={<ExpertDentists onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/sample-page" element={<ExpertDentists onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/sample-page/" element={<ExpertDentists onOpenBooking={() => handleOpenBooking()} />} />

            {/* 3. TREATMENTS & SPECIALIZATIONS */}
            <Route path="/treatments" element={<TreatmentsIndex onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/treatments/" element={<TreatmentsIndex onOpenBooking={() => handleOpenBooking()} />} />

            <Route path="/dental-implant" element={<TreatmentDetail customSlug="dental-implant" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Dental Implants')} />} />
            <Route path="/dental-implant/" element={<TreatmentDetail customSlug="dental-implant" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Dental Implants')} />} />

            <Route path="/aligners" element={<TreatmentDetail customSlug="aligners" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Invisible Clear Aligners')} />} />
            <Route path="/aligners/" element={<TreatmentDetail customSlug="aligners" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Invisible Clear Aligners')} />} />
            <Route path="/aligners-l1" element={<TreatmentDetail customSlug="aligners" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Invisible Clear Aligners')} />} />
            <Route path="/aligners-l1/" element={<TreatmentDetail customSlug="aligners" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Invisible Clear Aligners')} />} />

            <Route path="/root-canal-treatment-in-hyderabad" element={<TreatmentDetail customSlug="root-canal-treatment-in-hyderabad" onOpenBooking={() => handleOpenBooking('Madhapur', 'Root Canal Treatment')} />} />
            <Route path="/root-canal-treatment-in-hyderabad/" element={<TreatmentDetail customSlug="root-canal-treatment-in-hyderabad" onOpenBooking={() => handleOpenBooking('Madhapur', 'Root Canal Treatment')} />} />

            <Route path="/cosmetic-dentistry" element={<TreatmentDetail customSlug="cosmetic-dentistry" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Cosmetic Dentistry')} />} />
            <Route path="/cosmetic-dentistry/" element={<TreatmentDetail customSlug="cosmetic-dentistry" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Cosmetic Dentistry')} />} />

            <Route path="/digital-smile-design" element={<TreatmentDetail customSlug="digital-smile-design" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Digital Smile Design')} />} />
            <Route path="/digital-smile-design/" element={<TreatmentDetail customSlug="digital-smile-design" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Digital Smile Design')} />} />

            <Route path="/teeth-whitening-in-hyderabad" element={<TreatmentDetail customSlug="teeth-whitening-in-hyderabad" onOpenBooking={() => handleOpenBooking('Madhapur', 'Teeth Whitening')} />} />
            <Route path="/teeth-whitening-in-hyderabad/" element={<TreatmentDetail customSlug="teeth-whitening-in-hyderabad" onOpenBooking={() => handleOpenBooking('Madhapur', 'Teeth Whitening')} />} />

            <Route path="/orthodontics" element={<TreatmentDetail customSlug="orthodontics" onOpenBooking={() => handleOpenBooking('Punjagutta', 'Orthodontics & Braces')} />} />
            <Route path="/orthodontics/" element={<TreatmentDetail customSlug="orthodontics" onOpenBooking={() => handleOpenBooking('Punjagutta', 'Orthodontics & Braces')} />} />

            <Route path="/pedodontics" element={<TreatmentDetail customSlug="pedodontics" onOpenBooking={() => handleOpenBooking('Punjagutta', 'Pediatric Dental Care')} />} />
            <Route path="/pedodontics/" element={<TreatmentDetail customSlug="pedodontics" onOpenBooking={() => handleOpenBooking('Punjagutta', 'Pediatric Dental Care')} />} />
            <Route path="/pediatric-dentist-in-hyderabad" element={<TreatmentDetail customSlug="pedodontics" onOpenBooking={() => handleOpenBooking('Punjagutta', 'Pediatric Dental Care')} />} />
            <Route path="/pediatric-dentist-in-hyderabad/" element={<TreatmentDetail customSlug="pedodontics" onOpenBooking={() => handleOpenBooking('Punjagutta', 'Pediatric Dental Care')} />} />

            <Route path="/periodontics" element={<TreatmentDetail customSlug="periodontics" onOpenBooking={() => handleOpenBooking('Madhapur', 'Periodontics & Gum Care')} />} />
            <Route path="/periodontics/" element={<TreatmentDetail customSlug="periodontics" onOpenBooking={() => handleOpenBooking('Madhapur', 'Periodontics & Gum Care')} />} />

            <Route path="/prosthodontic" element={<TreatmentDetail customSlug="prosthodontic" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Crowns & Bridges')} />} />
            <Route path="/prosthodontic/" element={<TreatmentDetail customSlug="prosthodontic" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Crowns & Bridges')} />} />

            <Route path="/oral-and-maxillofacial-surgeon" element={<TreatmentDetail customSlug="oral-and-maxillofacial-surgeon" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Oral & Maxillofacial Surgery')} />} />
            <Route path="/oral-and-maxillofacial-surgeon/" element={<TreatmentDetail customSlug="oral-and-maxillofacial-surgeon" onOpenBooking={() => handleOpenBooking('Jubilee Hills', 'Oral & Maxillofacial Surgery')} />} />

            {/* 4. LOCATIONS & BRANCHES */}
            <Route path="/jubilee-hills" element={<LocationDetail branchId="jubilee-hills" onOpenBooking={() => handleOpenBooking('Jubilee Hills')} />} />
            <Route path="/jubilee-hills/" element={<LocationDetail branchId="jubilee-hills" onOpenBooking={() => handleOpenBooking('Jubilee Hills')} />} />

            <Route path="/madhapur-location" element={<LocationDetail branchId="madhapur" onOpenBooking={() => handleOpenBooking('Madhapur')} />} />
            <Route path="/madhapur-location/" element={<LocationDetail branchId="madhapur" onOpenBooking={() => handleOpenBooking('Madhapur')} />} />
            <Route path="/dental-clinic-in-madhapur" element={<LocationDetail branchId="madhapur" onOpenBooking={() => handleOpenBooking('Madhapur')} />} />
            <Route path="/dental-clinic-in-madhapur/" element={<LocationDetail branchId="madhapur" onOpenBooking={() => handleOpenBooking('Madhapur')} />} />

            <Route path="/punjagutta-location" element={<LocationDetail branchId="punjagutta" onOpenBooking={() => handleOpenBooking('Punjagutta')} />} />
            <Route path="/punjagutta-location/" element={<LocationDetail branchId="punjagutta" onOpenBooking={() => handleOpenBooking('Punjagutta')} />} />
            <Route path="/dental-clinic-in-punjagutta" element={<LocationDetail branchId="punjagutta" onOpenBooking={() => handleOpenBooking('Punjagutta')} />} />
            <Route path="/dental-clinic-in-punjagutta/" element={<LocationDetail branchId="punjagutta" onOpenBooking={() => handleOpenBooking('Punjagutta')} />} />

            {/* 5. INTERNATIONAL PATIENTS & DENTAL TOURISM */}
            <Route path="/international-patients" element={<InternationalPatients onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/international-patients/" element={<InternationalPatients onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/dental-tourism" element={<DentalTourism onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/dental-tourism/" element={<DentalTourism onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/international-patient-services" element={<InternationalPatientServices onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/international-patient-services/" element={<InternationalPatientServices onOpenBooking={() => handleOpenBooking()} />} />

            {/* 6. GALLERY & BEFORE/AFTER */}
            <Route path="/gallery" element={<Gallery onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/gallery/" element={<Gallery onOpenBooking={() => handleOpenBooking()} />} />

            {/* 7. BLOG & POSTS */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogArticle onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/blog/:slug/" element={<BlogArticle onOpenBooking={() => handleOpenBooking()} />} />

            {/* 8. CONTACT & BOOKING */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact-us/" element={<ContactUs />} />

            {/* 9. CAMPAIGN LANDING PAGES */}
            <Route path="/landing-page-for-aligners" element={<LandingPageTemplate title="Best Clear Aligners in Jubilee Hills & Madhapur" subtitle="Discreet, painless smile alignment with 3D digital precision." defaultTreatment="Invisible Clear Aligners" />} />
            <Route path="/landing-page-for-aligners/" element={<LandingPageTemplate title="Best Clear Aligners in Jubilee Hills & Madhapur" subtitle="Discreet, painless smile alignment with 3D digital precision." defaultTreatment="Invisible Clear Aligners" />} />

            <Route path="/landing-page-2" element={<LandingPageTemplate title="Advanced Dental Implants & Smile Transformation" subtitle="Fixed teeth in one day with world-class FDA approved dental implants." defaultTreatment="Dental Implants & Fixed Teeth" />} />
            <Route path="/landing-page-2/" element={<LandingPageTemplate title="Advanced Dental Implants & Smile Transformation" subtitle="Fixed teeth in one day with world-class FDA approved dental implants." defaultTreatment="Dental Implants & Fixed Teeth" />} />

            <Route path="/landingpage-1" element={<LandingPageTemplate title="Painless Root Canal & Smile Solutions" subtitle="Save your natural teeth with single-sitting microscopic endodontics." defaultTreatment="Root Canal Treatment" />} />
            <Route path="/landingpage-1/" element={<LandingPageTemplate title="Painless Root Canal & Smile Solutions" subtitle="Save your natural teeth with single-sitting microscopic endodontics." defaultTreatment="Root Canal Treatment" />} />

            <Route path="/generic-landing-page" element={<LandingPageTemplate />} />
            <Route path="/generic-landing-page/" element={<LandingPageTemplate />} />
            <Route path="/generic-landing-page-2" element={<LandingPageTemplate />} />
            <Route path="/generic-landing-page-2/" element={<LandingPageTemplate />} />
            <Route path="/landing-page" element={<LandingPageTemplate />} />
            <Route path="/landing-page/" element={<LandingPageTemplate />} />
            <Route path="/landing-page-for-implants" element={<LandingPageTemplate defaultTreatment="Dental Implants & Fixed Teeth" />} />
            <Route path="/landing-page-for-implants/" element={<LandingPageTemplate defaultTreatment="Dental Implants & Fixed Teeth" />} />
            <Route path="/landing-page-for-root-canal" element={<LandingPageTemplate defaultTreatment="Root Canal Treatment" />} />
            <Route path="/landing-page-for-root-canal/" element={<LandingPageTemplate defaultTreatment="Root Canal Treatment" />} />

            {/* 10. POLICIES & UTILITY PAGES */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/thank-you/" element={<ThankYouPage />} />

            {/* 11. DYNAMIC CATCH-ALL FOR ROOT BLOG PERMALINKS & UTILITY URLS */}
            <Route path="/:slug" element={<DynamicCatchAll onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/:slug/" element={<DynamicCatchAll onOpenBooking={() => handleOpenBooking()} />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Quick Action Contacts */}
        <FloatingContactBar onOpenBooking={() => handleOpenBooking()} />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultBranch={modalDefaultBranch}
          defaultTreatment={modalDefaultTreatment}
        />
      </div>
    </BrowserRouter>
  );
}
