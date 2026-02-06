import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../firebase';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { Mail, Phone, User, GraduationCap, Calendar, MessageSquare, Loader2, LogOut, FileText, Inbox } from 'lucide-react';
import { AdmissionFormData, ContactMessage } from '../types';
import { useNavigate } from 'react-router-dom';

interface Submission extends AdmissionFormData {
  id: string;
  timestamp?: Timestamp;
}

interface Message extends ContactMessage {
  id: string;
  timestamp?: Timestamp;
}

const Admin: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState<'admissions' | 'messages'>('admissions');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch Admissions
        const admissionsQuery = query(collection(db, "admissions"), orderBy("timestamp", "desc"));
        const admissionsSnapshot = await getDocs(admissionsQuery);
        const admissionsData: Submission[] = admissionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Submission));
        setSubmissions(admissionsData);

        // Fetch Contact Messages
        const messagesQuery = query(collection(db, "contact_messages"), orderBy("timestamp", "desc"));
        const messagesSnapshot = await getDocs(messagesQuery);
        const messagesData: Message[] = messagesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Message));
        setMessages(messagesData);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const formatDate = (timestamp?: Timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp.seconds * 1000).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-40 flex justify-center items-start">
         <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-sarc-green" />
            <p className="text-sarc-main dark:text-white font-sans font-medium tracking-wide">Loading Dashboard...</p>
         </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row mb-12 gap-6">
            <SectionTitle title="Admin Dashboard" subtitle="Overview" align="left" />
            <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 transition-all font-sans text-xs font-bold uppercase tracking-wider"
            >
                <LogOut className="w-4 h-4" />
                Sign Out
            </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('admissions')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-sans text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === 'admissions' 
                ? 'bg-sarc-green text-white shadow-lg shadow-sarc-green/20' 
                : 'bg-white/40 dark:bg-slate-800/40 text-slate-500 hover:bg-white dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            Admissions <span className="ml-1 opacity-70 bg-black/10 dark:bg-white/20 px-1.5 py-0.5 rounded-md text-[10px]">{submissions.length}</span>
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-sans text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === 'messages' 
                ? 'bg-sarc-green text-white shadow-lg shadow-sarc-green/20' 
                : 'bg-white/40 dark:bg-slate-800/40 text-slate-500 hover:bg-white dark:hover:bg-slate-800'
            }`}
          >
            <Inbox className="w-4 h-4" />
            Messages <span className="ml-1 opacity-70 bg-black/10 dark:bg-white/20 px-1.5 py-0.5 rounded-md text-[10px]">{messages.length}</span>
          </button>
        </div>

        {/* ADMISSIONS TAB */}
        {activeTab === 'admissions' && (
          submissions.length === 0 ? (
            <GlassContainer className="p-16 text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-sans text-lg font-medium">No admission applications yet.</p>
            </GlassContainer>
          ) : (
            <div className="grid gap-6 animate-fade-in">
              {submissions.map((sub) => (
                <GlassContainer key={sub.id} className="p-8 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors group">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1 space-y-5">
                      <div>
                        <h3 className="text-2xl font-sans font-bold text-sarc-main dark:text-white flex items-center gap-3">
                          {sub.studentName}
                        </h3>
                        <span className={`
                          inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mt-3 border
                          ${sub.gradeLevel === 'primary' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/30' : 
                            sub.gradeLevel === 'secondary' ? 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-900/30' : 
                            'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-900/30'}
                        `}>
                          <GraduationCap className="w-3 h-3" />
                          {sub.gradeLevel === 'primary' ? 'Primary School' : 
                           sub.gradeLevel === 'secondary' ? 'Secondary School' : 'College / +2'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                          <span className="text-slate-400 dark:text-slate-500 font-medium text-xs uppercase tracking-wider">Guardian</span>
                          <span className="font-semibold text-sarc-main dark:text-white">{sub.parentName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                          <span className="text-slate-400 dark:text-slate-500 font-medium text-xs uppercase tracking-wider">Applied</span>
                          <span className="font-semibold text-sarc-main dark:text-white">
                              {formatDate(sub.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 border-t md:border-t-0 md:border-l border-sarc-main/10 dark:border-white/10 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <a href={`mailto:${sub.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-white/40 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all border border-transparent hover:border-sarc-glassBorder dark:hover:border-white/20 text-sarc-main dark:text-white text-sm font-medium">
                             <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                                  <Mail className="w-4 h-4" /> 
                             </div>
                             <span className="truncate">{sub.email}</span>
                          </a>
                          <a href={`tel:${sub.phone}`} className="flex items-center gap-3 p-3 rounded-lg bg-white/40 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all border border-transparent hover:border-sarc-glassBorder dark:hover:border-white/20 text-sarc-main dark:text-white text-sm font-medium">
                             <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                                  <Phone className="w-4 h-4" /> 
                             </div>
                             <span className="truncate">{sub.phone}</span>
                          </a>
                       </div>
                       
                       {sub.message && (
                         <div className="relative mt-2">
                           <div className="absolute top-3 left-3">
                               <MessageSquare className="w-4 h-4 text-slate-300 dark:text-slate-500" />
                           </div>
                           <div className="bg-slate-50/50 dark:bg-slate-900/50 p-4 pl-10 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm italic leading-relaxed">
                              "{sub.message}"
                           </div>
                         </div>
                       )}
                    </div>
                  </div>
                </GlassContainer>
              ))}
            </div>
          )
        )}

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          messages.length === 0 ? (
            <GlassContainer className="p-16 text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Inbox className="w-8 h-8 text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-sans text-lg font-medium">No messages in inbox.</p>
            </GlassContainer>
          ) : (
            <div className="grid gap-6 animate-fade-in">
              {messages.map((msg) => (
                <GlassContainer key={msg.id} className="p-8 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors group">
                  <div className="flex flex-col gap-6">
                    
                    {/* Header: Name and Date */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-sans font-bold text-sarc-main dark:text-white">
                          {msg.fullName}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wide mt-1">
                          {msg.subject}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                         {formatDate(msg.timestamp)}
                      </span>
                    </div>

                    {/* Contact Info */}
                    <div className="flex gap-4 flex-wrap">
                      <a href={`mailto:${msg.email}`} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-sarc-green transition-colors">
                        <Mail className="w-4 h-4 text-slate-400" />
                        {msg.email}
                      </a>
                      {msg.phone && (
                        <a href={`tel:${msg.phone}`} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-sarc-green transition-colors">
                          <Phone className="w-4 h-4 text-slate-400" />
                          {msg.phone}
                        </a>
                      )}
                    </div>

                    {/* Message Body */}
                    <div className="bg-slate-50 dark:bg-black/20 p-5 rounded-xl border border-slate-100 dark:border-white/5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </div>

                  </div>
                </GlassContainer>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Admin;