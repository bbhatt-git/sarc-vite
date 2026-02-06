import React, { useState } from 'react';
import { GlassContainer, SectionTitle, PrimaryButton } from '../components/GlassUI';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { AdmissionFormData } from '../types';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    gradeLevel: 'primary',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await addDoc(collection(db, "admissions"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setFormData({
        parentName: '',
        studentName: '',
        email: '',
        phone: '',
        gradeLevel: 'primary',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus('error');
    }
  };

  // Modern Input Style with Dark Mode Support
  const inputClasses = "w-full bg-white/60 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sarc-main dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sarc-green focus:bg-white dark:focus:bg-slate-800 transition-all duration-300 font-sans font-medium";
  const labelClasses = "block text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3 font-bold ml-2";

  return (
    <div className="pt-28 md:pt-40 pb-20 min-h-screen px-4 md:px-6 relative flex items-center justify-center">
      <SEO 
        title="Admissions" 
        description="Apply now to SARC Education Foundation. Open admissions for Primary, Secondary, and +2 Science/Management."
        keywords="Admission Open, School Admission Nepal, +2 Admission, Scholarship, SARC Application"
      />
      <div className="w-full max-w-4xl relative z-10">
        <SectionTitle title="Join Us" subtitle="Start your journey with SARC" />
        
        <GlassContainer className="p-6 md:p-16 bg-white/70 dark:bg-white/[0.05]" hoverEffect={true}>
          {status === 'success' ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-4xl font-sans font-bold text-sarc-main dark:text-white mb-4">We've got it.</h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto font-medium">Thanks for reaching out. We're excited to meet you. Our team will be in touch shortly to schedule a chat.</p>
              <button onClick={() => setStatus('idle')} className="mt-12 text-sarc-green text-sm tracking-widest uppercase hover:text-sarc-main dark:hover:text-white transition-colors font-bold">Start another application</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>Parent / Guardian</label>
                  <input 
                    required 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Who should we contact?"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Student Name</label>
                  <input 
                    required 
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="The future student"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>Email Address</label>
                  <input 
                    required 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="best email to reach you"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Phone Number</label>
                  <input 
                    required 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="your contact number"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Interested In</label>
                <div className="relative">
                  <select 
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="primary">Primary School (Grades 1-5)</option>
                    <option value="secondary">Secondary School (Grades 6-10)</option>
                    <option value="college">College / Pre-University (Grades 11-12)</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Anything else?</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about the student. What are they passionate about?"
                  className={inputClasses}
                ></textarea>
              </div>

              <div className="pt-8 flex justify-center">
                <PrimaryButton type="submit" className="w-full md:w-auto min-w-[300px]" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Submit Application'}
                </PrimaryButton>
              </div>
            </form>
          )}
        </GlassContainer>
      </div>
    </div>
  );
};

export default Admissions;