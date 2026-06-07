import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  // Validaciones de campo individuales
  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'name') {
      if (!value.trim()) {
        errorMsg = 'El nombre es obligatorio.';
      } else if (value.trim().length < 3) {
        errorMsg = 'El nombre debe tener al menos 3 caracteres.';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errorMsg = 'El correo electrónico es obligatorio.';
      } else if (!emailRegex.test(value)) {
        errorMsg = 'Ingresa un formato de correo válido (ej. nombre@correo.com).';
      }
    }

    if (name === 'message') {
      if (!value.trim()) {
        errorMsg = 'El mensaje no puede estar vacío.';
      } else if (value.trim().length < 10) {
        errorMsg = 'El mensaje debe tener al menos 10 caracteres.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg
    }));
  };

  // Manejador del cambio de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Validar en tiempo real mientras el usuario tipea
    validateField(name, value);
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todo de forma global antes de permitir el submit
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un formato de correo válido (ej. nombre@correo.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);

    // Evitar el envío si existe algún mensaje de error
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    // Cambiar estado a cargando/enviando
    setStatus('submitting');

    // Simulación asíncrona de envío (Promesa simulada)
    setTimeout(() => {
      setStatus('success');
      // Limpiar campos del formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Regresar al estado inicial tras 5 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-grid">
          {/* Tarjeta de Información de Contacto */}
          <div className="contact-info glass-card">
            <h3>¿Hablamos?</h3>
            <p>
              ¿Tienes un proyecto en mente, buscas un desarrollador o quieres consultarme alguna duda? Escríbeme y me pondré en contacto contigo a la brevedad.
            </p>

            <div className="contact-links-list">
              <div className="contact-link-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Correo Electrónico</h4>
                  <a href="mailto:juanandres.arias@utp.edu.co" className="contact-detail-value">
                    juanandres.arias@utp.edu.co
                  </a>
                </div>
              </div>

              <div className="contact-link-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/juan-andr%C3%A9s-arias-tasc%C3%B3n/" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                    linkedin.com/in/juan-andrés-arias-tascón
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact-form-container glass-card">
            {status === 'success' ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>¡Mensaje enviado con éxito!</h3>
                <p>Tu correo ha sido recibido. Te responderé muy pronto al email proporcionado.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Nombre */}
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder=" " // Obligatorio para truco de CSS floating label
                    required
                  />
                  <label htmlFor="name" className="form-label">Nombre Completo</label>
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                {/* Correo */}
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Asunto */}
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">Asunto (Opcional)</label>
                </div>

                {/* Mensaje */}
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder=" "
                    rows="5"
                    required
                  ></textarea>
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* Botón de Enviar */}
                <button
                  type="submit"
                  className="btn-premium submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <div className="spinner"></div>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
