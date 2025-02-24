import React, { useState } from 'react';
import '../styles/Form.css';

export const Form = ({ fields = [] }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // If no fields are added yet, show a placeholder
  if (!fields.length) {
    return (
      <div className="puck-form empty-form">
        <p>Add form fields using the right sidebar</p>
      </div>
    );
  }

  return (
    <form className="puck-form" onSubmit={(e) => e.preventDefault()}>
      {fields.map((field, index) => (
        <div key={index} className="form-field">
          <label>{field.label || 'Untitled Field'}</label>
          {renderField(field, formData, handleChange)}
        </div>
      ))}
    </form>
  );
};

const renderField = (field, formData, handleChange) => {
  const value = formData[field.name] || '';
  const placeholder = field.placeholder || `Enter ${field.label || 'value'}...`;
  
  switch (field.type) {
    case 'text':
      return (
        <input 
          type="text" 
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      );
    case 'radio':
      return (
        <div className="radio-group">
          {field.options?.map((opt, i) => (
            <div key={i} className="radio-option">
              <input 
                type="radio" 
                id={`${field.name}-${i}`}
                name={field.name}
                value={opt.value}
                checked={value === opt.value}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
              <label htmlFor={`${field.name}-${i}`}>{opt.label || opt.value}</label>
            </div>
          ))}
        </div>
      );
    case 'checkbox':
      return (
        <div className="checkbox-field">
          <input 
            type="checkbox"
            id={field.name}
            checked={value}
            onChange={(e) => handleChange(field.name, e.target.checked)}
          />
          <label htmlFor={field.name}>{field.label}</label>
        </div>
      );
    case 'select':
      return (
        <select 
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
        >
          <option value="">{placeholder}</option>
          {field.options?.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label || opt.value}
            </option>
          ))}
        </select>
      );
    case 'textarea':
      return (
        <textarea 
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
          rows={4}
        />
      );
    default:
      return null;
  }
}; 