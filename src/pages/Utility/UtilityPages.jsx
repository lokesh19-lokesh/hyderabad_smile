import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Home, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export function PrivacyPolicy() {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy-policy/' }]} />
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-navy/60 mb-8">
          Last Updated: November 2026 | Hyderabad Smiles Advanced Dental Hospitals
        </p>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-warm-beige shadow-soft space-y-6 text-sm sm:text-base leading-relaxed text-navy/80">
          <p>
            At Hyderabad Smiles Advanced Dental Hospitals ("we", "our", or "us"), we are deeply committed to protecting the privacy, confidentiality, and security of our patients and website visitors. This Privacy Policy outlines how we collect, handle, and safeguard your medical and personal data.
          </p>

          <h2 className="font-serif font-bold text-xl text-navy mt-6">1. Information We Collect</h2>
          <p>
            We collect personal information when you book an appointment, submit an inquiry form, or contact us via WhatsApp/phone. This includes your name, phone number, email address, preferred clinic branch, and details regarding your dental concerns.
          </p>

          <h2 className="font-serif font-bold text-xl text-navy mt-6">2. Use of Information</h2>
          <p>
            Your information is used strictly to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Confirm, manage, and coordinate your clinical dental appointments</li>
            <li>Provide personalized medical evaluations and preliminary cost estimates</li>
            <li>Deliver post-treatment follow-up and clinical communication</li>
            <li>Maintain ISO 9001:2008 patient care and medical record standards</li>
          </ul>

          <h2 className="font-serif font-bold text-xl text-navy mt-6">3. Confidentiality & Security</h2>
          <p>
            We never sell, rent, or trade your personal or health data to third parties. All patient health records and communication logs are stored in secure, HIPAA-compliant databases accessible solely by authorized hospital staff and treating dentists.
          </p>

          <h2 className="font-serif font-bold text-xl text-navy mt-6">4. Contact Our Privacy Officer</h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to modify your patient information, please email us at <strong>hyderabadsmiles@gmail.com</strong> or call <strong>+91 88016 27272</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ThankYouPage() {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy flex items-center justify-center p-4 py-20">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-warm-beige text-center shadow-soft">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy">Thank You!</h1>
        <p className="text-navy/70 text-sm mt-3 leading-relaxed">
          Your request has been received by Hyderabad Smiles Advanced Dental Hospitals. Our senior patient coordinator will contact you shortly to confirm your consultation.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 btn-orange-gradient rounded-full font-bold text-xs sm:text-sm shadow-premium"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function GenericUtilityPage({ title = "Information Page", message }) {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-warm-beige shadow-soft text-center">
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy mb-4">{title}</h1>
          <p className="text-navy/70 text-sm sm:text-base leading-relaxed mb-6">
            {message || "Welcome to Hyderabad Smiles Advanced Dental Hospitals. Please explore our dental treatments or contact our clinics directly."}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 btn-orange-gradient rounded-full font-bold text-xs sm:text-sm shadow-premium"
            >
              Back to Home
            </Link>
            <Link
              to="/contact-us/"
              className="px-6 py-3 bg-navy text-white rounded-full font-bold text-xs sm:text-sm hover:bg-navy-light transition-colors"
            >
              Contact Hospital
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
