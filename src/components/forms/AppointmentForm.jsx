import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Calendar, Clock, MapPin, User, Phone, Mail, Stethoscope } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function AppointmentForm({ defaultBranch = '', defaultTreatment = '', onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: defaultBranch || 'Jubilee Hills',
    treatment: defaultTreatment || 'Dental Implants',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const treatmentsList = [
    'Dental Implants & Fixed Teeth',
    'Invisible Clear Aligners',
    'Root Canal Treatment',
    'Cosmetic Dentistry & Smile Makeover',
    'Digital Smile Design',
    'Teeth Whitening',
    'Orthodontics & Braces',
    'Pediatric Dental Care',
    'Periodontics & Gum Care',
    'Crowns & Bridges (Zirconia)',
    'Wisdom Tooth / Oral Surgery',
    'General Dental Checkup'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone number.');
      setStatus('error');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate backend submission (or integrate with API endpoint)
    setTimeout(() => {
      setStatus('success');
      if (onSuccess) onSuccess();
    }, 800);
  };

  const openWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello Hyderabad Smiles!\nI just booked an appointment on your website:\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Branch: ${formData.branch}\n` +
      `Treatment: ${formData.treatment}\n` +
      `Preferred Date: ${formData.preferredDate || 'Earliest Available'}\n` +
      `Time: ${formData.preferredTime}`
    );
    window.open(`https://wa.me/918801627272?text=${text}`, '_blank');
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-3xl border border-warm-beige text-center shadow-soft">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-navy">Appointment Request Received!</h3>
        <p className="text-navy/70 mt-2 max-w-md mx-auto text-sm leading-relaxed">
          Thank you, <strong className="text-navy">{formData.name}</strong>. Our senior dental coordinator from our{' '}
          <strong className="text-orange">{formData.branch}</strong> branch will call you shortly at{' '}
          <strong className="text-navy">{formData.phone}</strong> to confirm your exact appointment slot.
        </p>

        <div className="mt-6 p-4 bg-warm-ivory rounded-2xl border border-warm-beige/60 text-left text-xs text-navy/80 space-y-1.5 max-w-sm mx-auto">
          <div><strong>Branch:</strong> {formData.branch}</div>
          <div><strong>Treatment:</strong> {formData.treatment}</div>
          <div><strong>Preferred Slot:</strong> {formData.preferredDate || 'Earliest available'} ({formData.preferredTime})</div>
          <div><strong>Hospital Hotline:</strong> {siteData.phone}</div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={openWhatsAppConfirmation}
            className="px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold text-sm shadow hover:bg-[#20ba59] transition-colors"
          >
            Confirm Fast via WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-6 py-3 bg-warm-cream text-navy rounded-full font-semibold text-sm hover:bg-warm-beige transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl border border-warm-beige/80 shadow-soft">
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Patient Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Full Name <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Mobile Number <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
            />
          </div>
        </div>

        {/* Nearest Branch */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Select Nearest Branch <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all appearance-none cursor-pointer"
            >
              <option value="Jubilee Hills">Jubilee Hills / Kavuri Hills Branch</option>
              <option value="Madhapur">Madhapur (Ayyappa Society)</option>
              <option value="Punjagutta">Punjagutta (Beside Dr. Agarwal Eye Hosp)</option>
            </select>
          </div>
        </div>

        {/* Treatment Needed */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Dental Treatment / Concern <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <Stethoscope className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all appearance-none cursor-pointer"
            >
              {treatmentsList.map((t, idx) => (
                <option key={idx} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
            />
          </div>
        </div>

        {/* Preferred Time Slot */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Preferred Time Slot
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-navy/40 absolute left-3.5 top-3.5" />
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all appearance-none cursor-pointer"
            >
              <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
              <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
              <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Symptoms / Notes */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70 mb-1.5">
            Brief Symptoms or Questions (Optional)
          </label>
          <textarea
            name="message"
            rows="2"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your dental concern or any specific doctor you wish to consult..."
            className="w-full px-4 py-2.5 rounded-xl border border-warm-beige bg-warm-ivory/30 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 px-6 btn-orange-gradient rounded-xl font-bold text-base shadow-premium hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {status === 'loading' ? (
            <span>Securing Your Slot...</span>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              <span>Confirm Appointment Booking</span>
            </>
          )}
        </button>
        <p className="text-center text-xs text-navy/50 mt-2.5">
          🔒 Your contact details are strictly confidential. Our team will call you within 15–30 minutes to confirm.
        </p>
      </div>
    </form>
  );
}
