export interface ValidationError {
  field: string;
  message: string;
}

export const validateEmail = (email: string): ValidationError | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { field: 'email', message: 'Email is required' };
  }
  if (!emailRegex.test(email)) {
    return { field: 'email', message: 'Invalid email format' };
  }
  return null;
};

export const validateRequired = (value: string, field: string): ValidationError | null => {
  if (!value.trim()) {
    return { field, message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` };
  }
  return null;
};

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const validateContactForm = (data: ContactFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  const nameError = validateRequired(data.name, 'name');
  if (nameError) errors.push(nameError);

  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);

  const messageError = validateRequired(data.message, 'message');
  if (messageError) errors.push(messageError);

  return errors;
}; 