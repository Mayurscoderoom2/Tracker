export interface StudentSignup {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  class: string;
  schoolName: string;
  city: string;
  dateOfBirth: string;
  email: string;
  username: string;
  password: string;
}

export interface MentorSignup {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  subjects: string[];
  experience: string;
  city: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}