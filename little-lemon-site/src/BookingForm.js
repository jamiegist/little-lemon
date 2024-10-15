function BookingForm() {
    return (
<form>
        e.preventDefault();
        <label>
          Number of Guests:
          <input type="date" name="Date" />
          <input type="time" name="Time" />
          <input type="number" name="Number of Guests" />
          <input type="text" name="Occasion" />
        </label>
        <button type="submit">Submit</button>
</form>
    );
}

export default BookingForm;