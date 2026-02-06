import React, { useState } from 'react';
import { GlassContainer, SectionTitle, PrimaryButton } from '../components/GlassUI';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await addDoc(collection(db, "contact_messages"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error submitting message: ", error);
      setStatus('error');
    }
  };

  const inputClasses = "w-full bg-white/60 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 text-sarc-main dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sarc-green focus:bg-white dark:focus:bg-slate-800 transition-all duration-300 font-sans font-medium text-sm";
  const labelClasses = "block text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2 font-bold ml-1";

  const ContactCard: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <GlassContainer className="p-6 flex flex-col items-center text-center gap-4 h-full" hoverEffect={true}>
      <div className="w-12 h-12 rounded-full bg-sarc-green/10 dark:bg-sarc-green/20 flex items-center justify-center text-sarc-green flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-sarc-main dark:text-white mb-2">{title}</h4>
        <div className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed">
          {children}
        </div>
      </div>
    </GlassContainer>
  );

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SARC Education Foundation",
    "description": "Get in touch with SARC Education Foundation. Visit us in Mahendranagar or call 099-525271.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "SARC Education Foundation",
      "telephone": "+977-099-525271",
      "email": "contact@sarc.edu.np",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bheemdatt-6",
        "addressLocality": "Mahendranagar",
        "addressRegion": "Kanchanpur",
        "postalCode": "10400",
        "addressCountry": "NP"
      },
      "url": "https://sarc.edu.np",
      "logo": "https://raw.githubusercontent.com/bbhatt-git/sarc-school/refs/heads/sarc/public/images/sarc.png"
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen px-4 md:px-6 relative">
      <SEO 
        title="Contact" 
        description="Get in touch with SARC Education Foundation. Call us at 099-525271 or visit our college in Mahendranagar."
        keywords="Contact SARC, SARC Location, Phone Number, Email, Admissions Contact"
        schema={contactSchema}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Get in Touch" subtitle="We'd love to hear from you" />

        <div className="space-y-12 md:space-y-16">
          <div className="max-w-5xl mx-auto w-full">
            <GlassContainer className="p-6 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-sans font-bold text-sarc-main dark:text-white mb-2">Send Us a Message</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-10 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-sarc-main dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Thank you for contacting us.</p>
                  <button onClick={() => setStatus('idle')} className="text-sarc-green text-xs font-bold uppercase tracking-widest hover:underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses}>Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className={inputClasses} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+977 98XX-XXXXXX" className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses}>Subject *</label>
                      <input required name="subject" value={formData.subject} onChange={handleChange} placeholder="What is your inquiry about?" className={inputClasses} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Message *</label>
                    <textarea required rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." className={inputClasses} ></textarea>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <PrimaryButton type="submit" className="w-full md:w-auto min-w-[200px]" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </PrimaryButton>
                  </div>
                </form>
              )}
            </GlassContainer>
          </div>

          <GlassContainer className="h-[300px] md:h-[400px] p-2" hoverEffect={true}>
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.0263640066266!2d80.1772183!3d28.9691883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1bbed6175c58b%3A0xe549557457a1773a!2sSARC%20Education%20Foundation!5e0!3m2!1sen!2snp!4v1715424000000!5m2!1sen!2snp" 
                  width="100%" height="100%" style={{border:0, borderRadius: '1.5rem'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SARC Location Map" className="grayscale-[20%] hover:grayscale-0 transition-all duration-700 dark:invert-[90%] dark:hue-rotate-180"
              ></iframe>
          </GlassContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <ContactCard icon={MapPin} title="Address">Bheemdatt-6, Mahendranagar,<br/>Kanchanpur, Nepal</ContactCard>
             <ContactCard icon={Phone} title="Phone"><a href="tel:099-525271" className="hover:text-sarc-green transition-colors block">099-525271</a><a href="tel:+9779800000000" className="hover:text-sarc-green transition-colors block">+977 980-0000000</a></ContactCard>
             <ContactCard icon={Mail} title="Email"><a href="mailto:contact@sarc.edu.np" className="hover:text-sarc-green transition-colors block">contact@sarc.edu.np</a><a href="mailto:admissions@sarc.edu.np" className="hover:text-sarc-green transition-colors block">admissions@sarc.edu.np</a></ContactCard>
             <ContactCard icon={Clock} title="Working Hours"><div className="flex flex-col gap-1 w-full"><div className="flex justify-between w-full gap-2"><span>Sun - Fri:</span><span>9:00 - 17:00</span></div><div className="flex justify-between w-full gap-2 opacity-70"><span>Sat:</span><span>Closed</span></div></div></ContactCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;