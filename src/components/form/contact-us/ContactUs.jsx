import { useState } from 'react';
import {
  TextInput,
  RadioInput,
  Textarea,
  Checkbox,
  RegularButton
} from '../../index';

import './contact-us.styles.scss';

const radioValuesArray = [
  { id: 0, value: 'UI Developer' },
  { id: 1, value: 'UI/UX Designer' },
  { id: 2, value: 'Accessibility  Expert' },
  { id: 3, value: 'QA Engineer' },
  { id: 4, value: 'Other' }
];

export const ContactUsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    ITCluster: radioValuesArray[0].value,
    termsOne: false,
    termsTwo: false
  });

  const inputChangeHandler = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const radioInputChangeHandler = e => {
    setFormData(prevState => ({
      ...prevState,
      ITCluster: e.target.name
    }));
  };

  const checkboxInputChangeHandler = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="contact-us-form-container">
      <form className="contact-us-form" onSubmit={formSubmitHandler}>
        <div className="two-text-inputs-container">
          <div className="text-input-container">
            <TextInput
              label="First Name"
              placeholder="Den"
              value={formData.firstName}
              onChange={inputChangeHandler}
              isRequired
              name="firstName"
            />
          </div>

          <div className="text-input-container">
            <TextInput
              label="Last Name"
              placeholder="Doe"
              value={formData.lastName}
              onChange={inputChangeHandler}
              isRequired
              name="lastName"
            />
          </div>
        </div>

        <div className="two-text-inputs-container">
          <div className="text-input-container">
            <TextInput
              label="Email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={inputChangeHandler}
              name="email"
            />
          </div>

          <div className="text-input-container">
            <TextInput
              label="Phone Number"
              placeholder="000000000000"
              value={formData.phoneNumber}
              onChange={inputChangeHandler}
              name="phoneNumber"
            />
          </div>
        </div>

        <div className="radio-input-group">
          <ul className="radio-inputs-list">
            {radioValuesArray.map(el => (
              <li key={el.id} className="radio-input-wrapper">
                <RadioInput
                  label={el.value}
                  name={el.value}
                  checked={el.value === formData.ITCluster}
                  value={el.value}
                  onChange={radioInputChangeHandler}
                />
              </li>
            ))}
          </ul>
        </div>

        <Textarea
          label="Message"
          value={formData.message}
          onChange={inputChangeHandler}
          name="message"
        />

        <div className="checkbox-group">
          <div className="checkbox-wrapper">
            <Checkbox
              label="Accept the Terms"
              checked={formData.termsOne}
              name="termsOne"
              onChange={checkboxInputChangeHandler}
            />
          </div>
          
          <div className="checkbox-wrapper">
            <Checkbox
              label="Accept the Terms 2"
              checked={formData.termsTwo}
              name="termsTwo"
              onChange={checkboxInputChangeHandler}
            />
          </div>
        </div>

        <div className="form-submit-container">
          <div className="form-submit-button">
            <RegularButton
              text="Send Message"
              type="submit"
            />
          </div>
        </div>
      </form>
    </section>
  );
};