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

  return (
    <form className="puck-form">
      {fields.map((field, index) => (
        <div key={index} className="form-field">
          <label>{field.label}</label>
          {renderField(field, formData, handleChange)}
        </div>
      ))}
    </form>
  );
};

const renderField = (field, formData, handleChange) => {
  const value = formData[field.name] || '';

  switch (field.type) {
    case 'text':
      return (
        <input
          type="text"
          placeholder={field.placeholder || ''}
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      );
    case 'radio':
      return field.options?.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name={field.name}
            value={opt.value}
            checked={value === opt.value}
            onChange={(e) => handleChange(field.name, e.target.value)}
          /> {opt.label}
        </div>
      ));
    case 'checkbox':
      return (
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => handleChange(field.name, e.target.checked)}
        />
      );
    case 'select':
      return (
        <select
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
        >
          <option value="">Select an option</option>
          {field.options?.map((opt, i) => (
            <option key={i} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      );
    case 'textarea':
      return (
        <textarea
          placeholder={field.placeholder || ''}
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      );
    default:
      return null;
  }
}; 