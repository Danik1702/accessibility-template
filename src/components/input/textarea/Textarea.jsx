import './textarea.styles.scss';

export const Textarea = ({ label, value, onChange, name, placeholder = 'Text here...' }) => (
  <div className="textarea-container">
    <label className="textarea-label text-label" htmlFor={name}>{label}</label>
    <textarea
      className="textarea-input text-label"
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </div>
);