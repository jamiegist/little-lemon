import "./Booking.css";

function BookingForm() {
    return (
<form>
        <label>
          Number of Guests:
          <input type="number" name="Number of Guests" />
          Occasion:
          <input type="text" name="Occasion" />
          Date:
          <input type="date" name="Date" />
          Time:
          <input type="time" name="Time" />
        </label>
        <div className="submitButton">
          <button type="submit">Submit</button>
        </div>
</form>
    );
}

export default BookingForm;