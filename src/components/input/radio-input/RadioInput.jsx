import './radio-input.styles.scss';

import { RadioCheckedIcon, RadioIcon } from '../../../assets/icons';

export const RadioInput = ({ label, checked = false, name, value, onChange }) => (
  <div className="radio-container vertical-centralize-children">
    <input
      className="radio-input"
      type="radio"
      id={value}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="radio-input-label text-label" htmlFor={value}>{label}</label>

    <div className="radio-input-icon-container">
      {checked ? <RadioCheckedIcon /> : <RadioIcon />}
    </div>
  </div>
);