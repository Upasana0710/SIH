import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SlotBooking.module.css";

const SlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>Book Your Slot</div>
        <div className={styles.teachearInfo}>
          <div className={styles.teachearName}>
            Teacher Name: <span>Upasana Chaudhuri</span>
          </div>
          <div className={styles.teachearSubject}>
            Subject: <span>DSA</span>
          </div>
        </div>

        <div className={styles.datePicker}>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div className={styles.slotsContainer}>
          Select Slot Time:
          <div className={styles.slots}>
            <div className={(styles.slotTime, styles.available)}>
              9:00 AM - 10:00 AM
            </div>
            <div className={(styles.slotTime, styles.notavailable)}>
              10:00 AM - 11:00 AM
            </div>
            <div className={(styles.slotTime, styles.available)}>
              2:00 PM - 3:00 PM
            </div>
            <div className={(styles.slotTime, styles.notavailable)}>
              6:00 PM - 7:00 PM
            </div>
            <div className={(styles.slotTime, styles.available)}>
              7:00 PM - 8:00PM
            </div>
            <div className={(styles.slotTime, styles.notavailable)}>
              9:00 PM - 10:00 PM
            </div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.btn}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
