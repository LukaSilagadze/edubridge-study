import { EVENT_DEFAULTS } from './adminConfig';

function cleanText(value) {
  return typeof value === 'string' ? value.trim() : value;
}

function cleanNumber(value) {
  if (value === '' || value === null || value === undefined) return '';
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : '';
}

function assertSafeUrl(value, fieldName) {
  const trimmed = cleanText(value);
  if (!trimmed) return '';

  if (trimmed.startsWith('/')) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.protocol === 'https:') return url.href;
  } catch {
    throw new Error(`${fieldName} must be an HTTPS URL or a local /images path.`);
  }

  throw new Error(`${fieldName} must be an HTTPS URL or a local /images path.`);
}

export function eventToForm(event) {
  return {
    ...EVENT_DEFAULTS,
    ...event,
    participants: event.participants ?? '',
    maxParticipants: event.maxParticipants ?? '',
    organizerName: event.organizer?.name || '',
    organizerLogo: event.organizer?.logo || '',
  };
}

export function formToEvent(form) {
  if (!cleanText(form.title)) {
    throw new Error('Title is required.');
  }

  if (!cleanText(form.description)) {
    throw new Error('Description is required.');
  }

  if (!cleanText(form.image)) {
    throw new Error('Main image is required.');
  }

  const event = {
    title: cleanText(form.title),
    category: cleanText(form.category),
    subject: cleanText(form.subject),
    grade: cleanText(form.grade),
    age: cleanText(form.age),
    location: cleanText(form.location),
    date: cleanText(form.date),
    deadline: cleanText(form.deadline),
    description: cleanText(form.description),
    image: assertSafeUrl(form.image, 'Main image'),
    status: cleanText(form.status) || 'open',
    price: cleanText(form.price),
    language: cleanText(form.language),
    registrationLink: assertSafeUrl(form.registrationLink, 'Registration link'),
    participants: cleanNumber(form.participants),
    maxParticipants: cleanNumber(form.maxParticipants),
    organizer: {
      name: cleanText(form.organizerName),
      logo: assertSafeUrl(form.organizerLogo, 'Organizer logo'),
    },
    updatedAt: new Date().toISOString(),
  };

  Object.keys(event).forEach((key) => {
    if (event[key] === '') delete event[key];
  });

  if (!event.organizer.name && !event.organizer.logo) {
    delete event.organizer;
  }

  return event;
}
