import React from 'react';
import "../styles/BookingForm.css";
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { formState } from '../state/Atoms/formState';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';


const BookingForm = () => {

  const navigate = useNavigate();
  const [ formData, setFormdata ] = useRecoilState( formState );
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = ( data ) => {
    setFormdata( data )
    submitAPI( formData ) && navigate( '/' );
    console.log( formData );
  };

  return (
    <>
      <form data-testid="booking-form" className='reservation_form' onSubmit={handleSubmit( onSubmit )}>
        <input type="date" placeholder="Choose Date" {...register( "date" )} />
        <input type="time" placeholder="Choose Time" {...register( "time" )} />
        <input type="number" placeholder="Number of Guest" {...register( "guest" )} />
        <select {...register( "type" )}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button type="submit" className="input_button">Submit</button>
      </form>
    </>
  );

}

export default BookingForm