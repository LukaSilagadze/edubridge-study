import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { EVENT_DEFAULTS, EVENT_SELECT_OPTIONS } from '../../admin/adminConfig';
import { uploadImage } from '../../admin/cloudinary';
import { eventToForm, formToEvent } from '../../admin/eventMapper';

function SelectField({ label, name, value, options, onChange }) {
  return (
    <label>
      {label}
      <select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextField({ label, name, value, onChange, required = false, type = 'text', placeholder = '' }) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function ImageField({ label, name, value, onFileChange, onUrlChange, uploading }) {
  return (
    <div className="admin_image_field">
      <label>
        {label}
        <input type="file" accept="image/*" onChange={(event) => onFileChange(name, event.target.files?.[0])} />
      </label>
      <label>
        Image URL
        <input type="text" name={name} value={value} onChange={onUrlChange} placeholder="https://... or /images/file.jpg" />
      </label>
      {uploading && <div className="admin_uploading">Uploading image...</div>}
      {value && <img src={value} alt="" className="admin_image_preview" />}
    </div>
  );
}

export default function AdminEventFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [form, setForm] = useState(EVENT_DEFAULTS);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchEvent() {
      if (!id) return;

      try {
        const snapshot = await getDoc(doc(db, 'events', id));
        if (!snapshot.exists()) {
          setError('Event was not found.');
          return;
        }

        setForm(eventToForm(snapshot.data()));
      } catch (fetchError) {
        console.error('Could not load event:', fetchError);
        setError('Could not load event.');
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  async function handleFileChange(fieldName, file) {
    if (!file) return;

    setUploadingField(fieldName);
    setError('');

    try {
      const url = await uploadImage(file);
      setForm((currentForm) => ({ ...currentForm, [fieldName]: url }));
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setUploadingField('');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError('');

    try {
      const eventData = formToEvent(form);

      if (isEditing) {
        await updateDoc(doc(db, 'events', id), eventData);
        navigate('/admin/events');
        return;
      }

      const docRef = await addDoc(collection(db, 'events'), {
        ...eventData,
        createdAt: new Date().toISOString(),
      });
      navigate(`/admin/events/${docRef.id}/edit`);
    } catch (saveError) {
      console.error('Could not save event:', saveError);
      setError(saveError.message || 'Could not save event.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="admin_shell">
        <div className="admin_loading">Loading event...</div>
      </main>
    );
  }

  return (
    <main className="admin_shell">
      <header className="admin_topbar">
        <div>
          <p className="admin_eyebrow">{isEditing ? 'Edit event' : 'Create event'}</p>
          <h1>{isEditing ? form.title || 'Untitled event' : 'New event'}</h1>
        </div>
        <div className="admin_topbar_actions">
          <Link to="/admin/events" className="admin_secondary_btn">Back to events</Link>
          {isEditing && <Link to={`/events/${id}`} className="admin_secondary_btn">View public page</Link>}
        </div>
      </header>

      <form className="admin_panel admin_form" onSubmit={handleSubmit}>
        {error && <div className="admin_error">{error}</div>}

        <section className="admin_form_section">
          <h2>Core details</h2>
          <div className="admin_form_grid">
            <TextField label="Title" name="title" value={form.title} onChange={handleChange} required />
            <SelectField label="Status" name="status" value={form.status} options={EVENT_SELECT_OPTIONS.status} onChange={handleChange} />
            <SelectField label="Category" name="category" value={form.category} options={EVENT_SELECT_OPTIONS.category} onChange={handleChange} />
            <TextField label="Subject" name="subject" value={form.subject} onChange={handleChange} />
            <SelectField label="Grade" name="grade" value={form.grade} options={EVENT_SELECT_OPTIONS.grade} onChange={handleChange} />
            <TextField label="Age range" name="age" value={form.age} onChange={handleChange} />
            <SelectField label="Location" name="location" value={form.location} options={EVENT_SELECT_OPTIONS.location} onChange={handleChange} />
            <TextField label="Date" name="date" value={form.date} onChange={handleChange} placeholder="2026-05-08 or display text" />
            <TextField label="Registration deadline" name="deadline" value={form.deadline} onChange={handleChange} />
            <SelectField label="Price" name="price" value={form.price} options={EVENT_SELECT_OPTIONS.price} onChange={handleChange} />
            <SelectField label="Language" name="language" value={form.language} options={EVENT_SELECT_OPTIONS.language} onChange={handleChange} />
            <TextField label="Registration link" name="registrationLink" value={form.registrationLink} onChange={handleChange} type="url" />
          </div>

          <label>
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="6"
              required
            />
          </label>
        </section>

        <section className="admin_form_section">
          <h2>Images</h2>
          <div className="admin_form_grid">
            <ImageField
              label="Main image upload"
              name="image"
              value={form.image}
              onFileChange={handleFileChange}
              onUrlChange={handleChange}
              uploading={uploadingField === 'image'}
            />
            <ImageField
              label="Organizer logo upload"
              name="organizerLogo"
              value={form.organizerLogo}
              onFileChange={handleFileChange}
              onUrlChange={handleChange}
              uploading={uploadingField === 'organizerLogo'}
            />
          </div>
        </section>

        <section className="admin_form_section">
          <h2>Organizer and capacity</h2>
          <div className="admin_form_grid">
            <TextField label="Organizer name" name="organizerName" value={form.organizerName} onChange={handleChange} />
            <TextField label="Current participants" name="participants" value={form.participants} onChange={handleChange} type="number" />
            <TextField label="Maximum participants" name="maxParticipants" value={form.maxParticipants} onChange={handleChange} type="number" />
          </div>
        </section>

        <div className="admin_form_actions">
          <Link to="/admin/events" className="admin_secondary_btn">Cancel</Link>
          <button type="submit" className="admin_primary_btn" disabled={saving || Boolean(uploadingField)}>
            {saving ? 'Saving...' : 'Save event'}
          </button>
        </div>
      </form>
    </main>
  );
}
