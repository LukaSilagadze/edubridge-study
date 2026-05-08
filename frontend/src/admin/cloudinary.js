import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from './adminConfig';

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export async function uploadImage(file) {
  if (!file) return '';

  if (!file.type.startsWith('image/')) {
    throw new Error('Please upload an image file.');
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error('Image must be smaller than 5 MB.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('folder', 'edubridge/events');

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || 'Image upload failed.');
  }

  return data.secure_url;
}
