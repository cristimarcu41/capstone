import React, { useState, useReducer, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../bookingsAPI';
import ConfirmedBooking from '../components/ConfirmedBooking';

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export default function Booking() {
  const [formData, setFormData] = useState(()=>{
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : {
      date: '',
      time: '17:00',
      guests: 1,
      occasion: 'birthday',
    };
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  useEffect(() => {
    
  }, []);
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
        setFormData(prev => ({ ...prev, time: availableTimes[0] }));
    }
  }, [availableTimes]);


  // Handler to update form data from inputs
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  // You can also handle submit here
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = submitAPI(formData);
    if (success) {
      setIsSubmitted(true);
      localStorage.removeItem('formData');
    } else {
      console.log('Submission failed');
    }
  };

  return (
    <main className="container">
      <h1>Reservations</h1>
      {isSubmitted ? (
        <ConfirmedBooking />
      ) : (
        <BookingForm
          formData={formData}
          availableTimes={availableTimes}
          onInputChange={handleInput}
          onSubmit={handleSubmit}
        />
      )}
    </main>
  );
} 