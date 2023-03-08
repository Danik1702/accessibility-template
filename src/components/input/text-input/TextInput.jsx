import './text-input.styles.scss';

export const TextInput = ({ 
  label = '',
  placeholder,
  value,
  onChange,
  isRequired = false,
  isSearch = false,
  isPlantMe = false,
  name,
  height = 44,
  children
}) => {
  return (
    <div className="text-input">
      {label && (
        <label htmlFor={name} className="input-label text-label">
          {isRequired ? <span className="required-input-field text-label">{`${'* '}`}</span> : ''}
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          name={name}
          className={`input-field text-label ${isSearch ? 'search-field' : ''} ${isPlantMe ? 'plant-me-input' : ''}`}
          value={value}
          onChange={(e) => onChange(e)} placeholder={placeholder}
          style={{ height: `${height}px` }} 
        />
        {children}
      </div>
    </div>
  );
};