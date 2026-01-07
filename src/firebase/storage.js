// ImgBB API Configuration
const IMGBB_API_KEY = 'cfe7185111917029d548b5462fb64d51';
const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

// Convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// Upload image to ImgBB
export const uploadImage = async (file, path = '') => {
  try {
    // Convert file to base64
    const base64Image = await fileToBase64(file);
    // Remove data:image/...;base64, prefix
    const base64Data = base64Image.split(',')[1];

    // Create FormData for ImgBB API
    const formData = new FormData();
    formData.append('key', IMGBB_API_KEY);
    formData.append('image', base64Data);

    // Upload to ImgBB
    const response = await fetch(IMGBB_API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || 'Failed to upload image to ImgBB');
    }

    const data = await response.json();

    if (data.success && data.data && data.data.url) {
      return data.data.url; // Return the image URL
    } else {
      throw new Error(data.error?.message || 'Failed to upload image');
    }
  } catch (error) {
    console.error('ImgBB upload error:', error);
    throw error;
  }
};

// Delete image (ImgBB doesn't support deletion via API, but we keep this for compatibility)
export const deleteImage = async (url) => {
  // ImgBB doesn't provide a delete API endpoint
  // Images will remain on ImgBB servers
  console.warn('ImgBB does not support image deletion via API');
  return true;
};

// Get image path (kept for compatibility)
export const getImagePath = (folder, filename) => {
  return `${folder}/${filename}`;
};

