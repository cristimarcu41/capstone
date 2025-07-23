import React from 'react';

const BookingForm = ({ formData, onInputChange, availableTimes, onSubmit }) => {
  return (
    <form className="reservation-form" onSubmit={onSubmit}>
      <div className="input-group">
        <label htmlFor="res-date" className="form-label" id="res-date-label">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={onInputChange}
          className="form-input"
          required
          aria-describedby="res-date-label"
        />
      </div>

      <div className="input-group">
        <label htmlFor="res-time" className="form-label" id="res-time-label">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={onInputChange}
          className="form-input"
          required
          aria-describedby="res-time-label"
          aria-live="polite"
        >
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="guests" className="form-label" id="guests-label">Number of guests</label>
        <input
          type="number"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formData.guests}
          onChange={onInputChange}
          className="form-input"
          required
          aria-describedby="guests-label"
        />
      </div>

      <div className="input-group">
        <label htmlFor="occasion" className="form-label" id="occasion-label">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={onInputChange}
          className="form-input"
          required
          aria-describedby="occasion-label"
        >
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
      </div>

      <button type="submit"  className="form-submit" >Book Now</button>
    </form>
  );
};

export default BookingForm