import React, { useState } from "react";
import "./FormSection.css";

export default function FormSection() {
  const clearForm = () => {
    setFormData({
      name: "",
      time: "",
      date: "",
      phone: "",
      selectedName: "",
      number: "",
      additionalInfo: "",
    });
    setErrors({
      name: false,
      time: false,
      date: false,
      phone: false,
      selectedName: false,
      number: false,
      additionalInfo: false,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    time: "",
    date: "",
    phone: "",
    selectedName: "",
    number: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    time: false,
    date: false,
    phone: false,
    selectedName: false,
    number: false,
    additionalInfo: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = true;
      }
    });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Форма отправлена!");
      clearForm();
    }
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="form-section__form">
        <h2 className="form-section__title">Book a seat</h2>
        <h3>Please fill out the form and we get back to you</h3>
        <div className="row">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : "input"}
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={errors.time ? "input-error" : "input"}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? "input-error" : "input"}
          />
        </div>
        <div className="row">
          <input
            type="tel"
            name="phone"
            placeholder="Мобильный номер"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : "input"}
          />
          <select
            name="selectedName"
            value={formData.selectedName}
            onChange={handleChange}
            className={errors.selectedName ? "input-error" : "input"}
          >
            <option value="">Выберите имя</option>
            <option value="Борис">Борис</option>
            <option value="Кирил">Кирил</option>
            <option value="Влад">Влад</option>
            <option value="Антон">Антон</option>
          </select>
          <input
            type="number"
            name="number"
            placeholder="Цифры"
            value={formData.number}
            onChange={handleChange}
            className={errors.number ? "input-error" : "input"}
          />
        </div>
        <div>
          <textarea
            name="additionalInfo"
            placeholder="Дополнительная информация"
            value={formData.additionalInfo}
            onChange={handleChange}
            className={errors.additionalInfo ? "input-error" : "textarea"}
          />
        </div>
        <div className="submit-container">
          <button type="submit" className="submit-button">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
