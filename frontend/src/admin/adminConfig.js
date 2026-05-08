export const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dx3k2eft3';

export const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'edubridge_events';

export const EVENT_DEFAULTS = {
  title: '',
  category: 'workshops',
  subject: '',
  grade: '',
  age: '',
  location: '',
  date: '',
  deadline: '',
  description: '',
  image: '',
  status: 'open',
  price: '',
  language: '',
  participants: '',
  maxParticipants: '',
  registrationLink: '',
  organizerName: '',
  organizerLogo: '',
};

export const EVENT_SELECT_OPTIONS = {
  status: [
    { value: 'open', label: 'Open' },
    { value: 'closed', label: 'Closed' },
  ],
  category: [
    { value: 'olympiads', label: 'Olympiads' },
    { value: 'tournaments', label: 'Tournaments' },
    { value: 'workshops', label: 'Workshops' },
    { value: 'conferences', label: 'Conferences' },
    { value: 'charity', label: 'Charity' },
    { value: 'labs', label: 'Labs' },
    { value: 'camp', label: 'Camp' },
    { value: 'mun', label: 'MUN' },
    { value: 'competitions', label: 'Competitions' },
    { value: 'course', label: 'Course' },
    { value: 'fair', label: 'Fair' },
    { value: 'hackathons', label: 'Hackathons' },
    { value: 'volunteering', label: 'Volunteering' },
  ],
  grade: [
    { value: '', label: 'Not specified' },
    { value: 'elementary', label: 'Elementary' },
    { value: 'middle', label: 'Middle' },
    { value: 'high', label: 'High' },
  ],
  location: [
    { value: '', label: 'Not specified' },
    { value: 'online', label: 'Online' },
    { value: 'offline', label: 'Offline' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'tbilisi', label: 'Tbilisi' },
    { value: 'kutaisi', label: 'Kutaisi' },
    { value: 'batumi', label: 'Batumi' },
    { value: 'rustavi', label: 'Rustavi' },
  ],
  price: [
    { value: '', label: 'Not specified' },
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Paid' },
    { value: 'under50', label: 'Under 50' },
    { value: '50to100', label: '50 to 100' },
    { value: 'over100', label: 'Over 100' },
  ],
  language: [
    { value: '', label: 'Not specified' },
    { value: 'georgian', label: 'Georgian' },
    { value: 'english', label: 'English' },
    { value: 'russian', label: 'Russian' },
    { value: 'bilingual', label: 'Bilingual' },
  ],
};
