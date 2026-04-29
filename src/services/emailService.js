const API_BASE_URL = process.env.REACT_APP_EMAIL_API_BASE || 'https://mail.devtz.site/api';

const postEmail = async (path, payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const errorMessage = errorBody.error || `Request failed with status ${response.status}`;
      return { success: false, error: errorMessage };
    }

    const data = await response.json();
    return { success: true, response: data };
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, error: error.message || 'Unable to send email' };
  }
};

/**
 * Send contact form email via backend
 */
export const sendContactEmail = async (formData) => {
  return postEmail('/contact', {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  });
};

/**
 * Send hire request email via backend
 */
export const sendHireRequestEmail = async (formData) => {
  return postEmail('/hire', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    projectName: formData.projectName,
    sampleLink: formData.sampleLink,
    description: formData.description,
  });
};

/**
 * Send achievement page message email via backend
 */
export const sendAchievementMessageEmail = async (formData) => {
  return postEmail('/achievement', {
    name: formData.name,
    email: formData.email,
    subject: formData.subject || 'Message from Achievements Page',
    message: formData.message,
  });
};

