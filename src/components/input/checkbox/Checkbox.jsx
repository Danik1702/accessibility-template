import { CheckboxIcon, CheckboxCheckedIcon } from '../../../assets/icons';

import './checkbox.styles.scss';

export const Checkbox = ({ label, checked = false, name, onChange }) => (
  <div className="checkbox-container vertical-centralize-children">
    <input className="checkbox-input" type="checkbox" id={name} name={name} checked={checked} onChange={onChange} />
    <label className="text-label" htmlFor={name}>{label}</label>

    <div className="checkbox-icon-container">
      {checked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
    </div>
  </div>
);