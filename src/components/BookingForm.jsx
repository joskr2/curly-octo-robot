import React from 'react';
import "../styles/BookingForm.css";
import { useForm } from 'react-hook-form';
import Button from './Button';

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log( data );
  console.log( errors );

  return (
    <>
      <form className='reservation_form' onSubmit={handleSubmit( onSubmit )}>
        <input type="date" placeholder="Choose Date" {...register( "Choose Date" )} />
        <input type="time" placeholder="Choose Time" {...register( "Choose Time" )} />
        <input type="number" placeholder="Number of Guest" {...register( "Number of Guest" )} />
        <select {...register( "Occasion" )}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button type="submit"   className="input_button">Submit</button>
      </form>
    </>

  );

}

export default BookingForm