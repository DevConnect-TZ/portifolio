import { useState } from 'react';
import { uploadImage } from '../firebase/storage';

const ImageUpload = ({ onUpload, currentImage, folder = 'images' }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    // Upload to Firebase Storage
    setUploading(true);
    try {
      const filename = `${Date.now()}_${file.name}`;
      const path = `${folder}/${filename}`;
      const url = await uploadImage(file, path);
      onUpload(url);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      {preview && (
        <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-300">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <label className="flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg cursor-pointer hover:bg-primary-600 transition-colors">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          disabled={uploading}
        />
        <span>{uploading ? 'Uploading...' : preview ? 'Change Image' : 'Upload Image'}</span>
      </label>
    </div>
  );
};

export default ImageUpload;

