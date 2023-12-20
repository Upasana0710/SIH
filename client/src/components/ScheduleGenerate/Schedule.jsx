import {
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React, { useState } from "react";
import "./schedule.css";
import { generateSchedule } from "../../api/api";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// eslint-disable-next-line react/prop-types
const Schedule = ({ onClose }) => {
  const [inputValues, setInputValues] = useState({
    t_days: 0,
    hoursPerDay: 0,
    sessionLength: "",
  });
  const [selectedType, setSelectedType] = useState("");
  const [schedule, setSchedule] = useState([]);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    setInputValues({ ...inputValues, sessionLength: type });
  };

  const handleGenerate = async () => {
    setInputValues({
      ...inputValues,
      t_days: Number(inputValues.t_days),
      hoursPerDay: Number(inputValues.hoursPerDay),
    });
    const response = await generateSchedule(
      inputValues,
      localStorage.getItem("user_info")
    );
    console.log(response);
    setSchedule(response.data);
  };

  return (
    <div className="mainPage">
      <div className="container">
        <div className="modal">
          <div className="borderContainer">
            <div className="heading">Generate Schedule</div>
            <div className="closeContainer" onClick={() => onClose()}>
              {/* <CloseRoundedIcon style={{ fontSize: "24px" }} /> */}x
            </div>
            <div className="noContainer">
              <input
                type="number"
                placeholder="Total no of days"
                className="inputBox"
                value={inputValues.t_days === 0 ? "" : inputValues.t_days}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    t_days: parseInt(e.target.value),
                  })
                }
              />
              <input
                type="number"
                placeholder="Hours per day"
                min="4"
                max="10"
                className="inputBox"
                value={
                  inputValues.hoursPerDay === 0 ? "" : inputValues.hoursPerDay
                }
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    hoursPerDay: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="chooseText">Choose type of session:</div>
            <div className="noContainer">
              <div
                className={`buttonContainer${
                  selectedType === "30min" ? "Selected" : ""
                }`}
                onClick={() => handleTypeSelection("30min")}
              >
                30 min
              </div>
              <div
                className={`buttonContainer${
                  selectedType === "60min" ? "Selected" : ""
                }`}
                onClick={() => handleTypeSelection("60min")}
              >
                60 min
              </div>
            </div>
            <div className="generateButton" onClick={() => handleGenerate()}>
              Generate
            </div>
            <div className="scheduleContainer">
              {schedule.map((day, index) => (
                <Accordion key={index}>
                  <AccordionSummary>Day {day.day}</AccordionSummary>
                  <AccordionDetails className="sessions">
                    {day.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="session"
                        style={{
                          background:
                            session.type === "Recap/Revision"
                              ? "#87eeee"
                              : "f8deb1",
                        }}
                      >
                        <div>{session.type}</div>
                        <div>{session.time}</div>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
