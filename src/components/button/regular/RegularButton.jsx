import './regular-button.styles.scss';

export const RegularButton = ({
  text,
  onClick = null,
  height = 48,
  type = 'button'
}) => (
  <div className="button-wrapper">
    <button type={type} className="button text-link" tabIndex={0} onClick={onClick} style={{ height: `${height}px` }}>{text}</button>
  </div>
);