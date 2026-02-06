import { LucideIcon } from 'lucide-react';

export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  credentials: string;
  philosophy: string;
  image?: string;
  role: 'admin' | 'faculty' | 'arts' | 'athletics';
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  subjects?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface AdmissionFormData {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  gradeLevel: string;
  message: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp?: any;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  image: string;
}
