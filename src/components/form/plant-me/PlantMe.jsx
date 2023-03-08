import { useState } from 'react';
import { RegularButton, TextInput } from '../../index';

import './plant-me.styles.scss';

export const PlantMeForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const inputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(email)
  };

  return (
    <form className="plant-me-form" onSubmit={formSubmitHandler}>
      <div className="plant-me-input-container">
        <TextInput
          value={email}
          onChange={inputChangeHandler}
          placeholder="example@gmail.com"
          isPlantMe
          name="plant-me-input"
        />
      </div>

      <div className="plant-me-submit-container">
        <RegularButton
          text="Subscribe"
          type="submit"
          height={54}
        />
      </div>
    </form>
  );
}