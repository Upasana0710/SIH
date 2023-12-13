import { useState, useEffect } from "react";
import "../login.css";
import AnimatedPage from "./AnimatedPage";
import { signin, signup } from "../api/api";

export default function LoginSignUp() {
  const [action, setAction] = useState("Sign Up");
  const initialValues = {
    name: "",
    email: "",
    instituteEmail: "",
    dob: "",
    gender: "",
    phone: "",
    city: "",
    programme: "",
    branch: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues2 = { email: "", password: "" };
  const [formValues2, setFormValues2] = useState(initialValues2);
  const [formErrors2, setFormErrors2] = useState({});
  const [isSubmit2, setIsSubmit2] = useState(false);

  const resetForm = () => {
    setFormValues(initialValues);
    setFormErrors({});
    setIsSubmit(false);
  };
  const resetForm2 = () => {
    setFormValues2(initialValues2);
    setFormErrors2({});
    setIsSubmit2(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    try{
      const response = await signup(formValues);
      if(response.data.message === "User already exists.") setFormErrors({...formErrors, email: "User already exists"})
      setIsSubmit(true);
    }catch(error){
      console.log(error);
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setFormErrors2(validate2(formValues2));
    try{
      const response = await signin(formValues2)
      if(response.data.message === "User doesn't exist.") setFormErrors2({...formErrors2, email: "User doesn't exist."})
      if(response.data.message === "Invalid credentials") setFormErrors2({...formErrors2, password: "Invalid password"})
      setIsSubmit2(true);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {}, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.instituteEmail) {
      errors.instituteEmail = " Institute Email is required!";
    } else if (!regex.test(values.instituteEmail)) {
      errors.instituteEmail = "This is not a valid email format!";
    }
    if (!values.dob) {
      errors.dob = "Date of dob is required!";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (values.phone.length > 10) {
      errors.phone = "Invalid Phone Number";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.programme) {
      errors.programme = "Programme is required!";
    }
    if (!values.branch) {
      errors.branch = "Branch is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  useEffect(() => {}, [formErrors2]);
  const validate2 = (values) => {
    const errors2 = {};
    const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors2.email = " Email is required!";
    } else if (!regex2.test(values.email)) {
      errors2.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors2.password = "Password is required";
    } else if (values.password.length < 4) {
      errors2.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors2.password = "Password cannot exceed more than 10 characters";
    }
    return errors2;
  };
  return (
    <AnimatedPage>
      <div className="container">
        <div className="header">
          <div className="submit-container">
            <div
              className={action === "Sign In" ? "submit gray" : "submit"}
              onClick={() => {
                resetForm2()
                setAction("Sign Up")
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                resetForm();
                setAction("Sign In")
              }}
            >
              Sign In
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            {action === "Sign In" ? (
              <div></div>
            ) : (
              <div>
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={(e)=>setFormValues({...formValues, name: e.target.value})}
                    placeholder="Name"
                  />
                </div>
                <p className="error">{formErrors.name}</p>
                <br />

                <div className="input">
                  <input
                    type="email"
                    name="instituteEmail"
                    placeholder="Instituition Mail"
                    value={formValues.instituteEmail}
                    onChange={(e)=>setFormValues({...formValues, instituteEmail: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.instituteEmail}</p>

                <br />

                <div className="input">
                  <img src="" alt="" />
                  <input
                    type="Date"
                    name="dob"
                    placeholder="DOB"
                    value={formValues.dob}
                    onChange={(e)=>setFormValues({...formValues, dob: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.dob}</p>
                <br />

                <div className="input">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formValues.gender}
                    onChange={(e)=>setFormValues({...formValues, gender: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.gender}</p>
                <br />

                <div className="input">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    value={formValues.phone}
                    onChange={(e)=>setFormValues({...formValues, phone: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.phone}</p>
                <br />

                <div className="input">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formValues.city}
                    onChange={(e)=>setFormValues({...formValues, city: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.city}</p>
                <br />

                <div className="input">
                  <input
                    type="text"
                    name="programme"
                    placeholder="Programme"
                    value={formValues.programme}
                    onChange={(e)=>setFormValues({...formValues, programme: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.programme}</p>
                <br />

                <div className="input">
                  <input
                    type="text"
                    name="branch"
                    placeholder="Branch"
                    value={formValues.branch}
                    onChange={(e)=>setFormValues({...formValues, branch: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.branch}</p>
                <br />

                <div className="input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    value={formValues.email}
                    onChange={(e)=>setFormValues({...formValues, email: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.email}</p>
                <br />
                <div className="input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={(e)=>setFormValues({...formValues, password: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors.password}</p>
                <button type="submit" className="submit-form">
                  Submit
                </button>
                <div onClick={resetForm} className="submit-form">
                  Reset
                </div>
              </div>
            )}
          </div>
        </form>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div>
            <form onSubmit={handleSubmit2}>
              <div className="inputs">
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    value={formValues2.email}
                    onChange={(e)=>setFormValues2({...formValues2, email: e.target.value})}
                    placeholder="Email Id"
                  />
                </div>
                <p className="error">{formErrors2.email}</p>

                <div className="input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues2.password}
                    onChange={(e)=>setFormValues2({...formValues2, password: e.target.value})}
                  />
                </div>
                <p className="error">{formErrors2.password}</p>

                <div className="forgot-password">
                  Forgot Password?<span> Click Here! </span>
                </div>
                <button className="submit-form" id="sub" onClick={()=>handleSubmit2()}>
                  Submit{" "}
                </button>
                <div onClick={resetForm2} className="submit-form" id="res">
                  Reset
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}
