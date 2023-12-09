import React, { useState,useEffect } from 'react';
import "../login.css";
import AnimatedPage from './AnimatedPage';




export default function LoginSignUp() {
    const [action,setAction]=useState("Sign Up");
    const initialValues = { username: "", email: "", Intemail:"",birth:"",gender:"",phone:"",city:"",programme:"",branch:"",pass:"",logemail:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    
    const initialValues2 = { logemail:"",password:""};
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
        setIsSubmit2(false);;
      };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormValues2({ ...formValues2, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
      const handleSubmit2 = (e) => {
        e.preventDefault();
        setFormErrors2(validate2(formValues2));
        setIsSubmit2(true);
      };
      useEffect(() => {
        
        if (Object.keys(formErrors).length === 0 && isSubmit) {
       
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         if (!values.username) {
         errors.username = "Name is required!";
         }
        if (!values.Intemail) {
         errors.Intemail = " Institute Email is required!";
        }else if (!regex.test(values.Intemail)) {
            errors.Intemail = "This is not a valid email format!";
          }
         if (!values.birth) {
         errors.birth = "Date of birth is required!";
          }
         if (!values.gender) {
          errors.gender = "Gender is required!";
         }
          if (!values.phone) {
         errors.phone = "Phone is required!";
          }else if(values.phone.length>10){
            errors.phone="Invalid Phone Number";
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
        }
         else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
         if (!values.pass) {
          errors.pass= "Password is required!";}
        else if (values.pass.length < 4) {
          errors.pass = "Password must be more than 4 characters";
        } else if (values.pass.length > 10) {
          errors.pass = "Password cannot exceed more than 10 characters";
        }
       
        return errors;
      };
      useEffect(() => {
       
        if (Object.keys(formErrors2).length === 0 && isSubmit2) {
          
        }
      }, [formErrors2]);
      const validate2 = (values) => {
        const errors2 = {};
        const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         
        if (!values.logemail) {
            errors2.logemail = " Email is required!";
           }else if (!regex2.test(values.logemail)) {
               errors2.logemail = "This is not a valid email format!";
             }
             if (!values.password) {
               errors2.password= "Password is required";}
             else if (values.password.length < 4) {
               errors2.password = "Password must be more than 4 characters";
             } else if (values.password.length > 10) {
               errors2.password = "Password cannot exceed more than 10 characters";
             }
        return errors2;
      };
  return (
    <AnimatedPage>
        
      
    <div className='container'>

   
        
        <div className='header'>
        <div className="submit-container">
            <div className={action==="Sign In"?"submit gray":"submit"}onClick={()=>setAction("Sign Up")}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>setAction("Sign In")}>Sign In</div>
             
        </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='inputs'>
            
            {action==="Sign In"?<div></div>:<div>
            <div className='input'>
            <input 
            type='text'
            name='username'
            value={formValues.username}
            onChange={handleChange}
             placeholder='Name'
             />
             </div>
             <p className="error">{formErrors.username}</p>
        <br/>
        
        <div className='input'>
        <input 
        type='email' 
        name="Intemail"
        placeholder='Instituition Mail'
        value={formValues.Intemail}
        onChange={handleChange}
       />
        </div>
        <p className="error">{formErrors.Intemail}</p>
        
        <br/>
     
        <div className='input'>
            <img src='' alt=''/>
            <input type='Date' 
            name='birth'
            placeholder='DOB'
            value={formValues.birth}
        onChange={handleChange}
        />
        </div>
        <p className='error'>{formErrors.birth}</p>
       <br/>
       
       
        <div className='input'>
            
            <input type='text'
            name='gender'
             placeholder='Gender'
             value={formValues.gender}
        onChange={handleChange}/>
        </div>
        <p className='error'>{formErrors.gender}</p>
        <br/>
       
        <div className='input'>
            
            <input type='number' 
            name='phone'
            placeholder='Phone'
            value={formValues.phone}
        onChange={handleChange}
        />
        </div>
        <p className='error'>{formErrors.phone}</p>
        <br/>
        
        <div className='input'>
          
            <input type='text' 
            name='city'
            placeholder='City'
            value={formValues.city}
        onChange={handleChange}
       />
       </div>
       <p className='error'>{formErrors.city}</p>
        <br/>
        
        <div className='input'>
           
            <input type='text' name='programme'
             placeholder='Programme'
             value={formValues.programme}
        onChange={handleChange}
       />

        </div>
        <p className='error'>{formErrors.programme}</p>
        <br/>
        
        <div className='input'>
            
            <input type='text'name='branch' placeholder='Branch'
            value={formValues.branch}
            onChange={handleChange}
            />

        </div>
        <p className='error'>{formErrors.branch}</p>
        <br/>
    
   
        <div className='input'>
           
            <input type='email' 
            name='email'
            placeholder='Email Id'
            value={formValues.email}
          onChange={handleChange}
       />

        </div>
        <p className='error'>{formErrors.email}</p>
        <br/>
        <div className='input'>
           
            <input type='password' 
            name='pass'
            placeholder='Password'
            value={formValues.pass}
        onChange={handleChange}
        />

        </div>
        <p className='error'>{formErrors.pass}</p>
        <button type="submit" className='submit-form'>Submit</button>
        <div onClick={resetForm} className='submit-form'>Reset</div>
        
        </div>}
        </div>
        </form> 

        {action==="Sign Up"?<div></div>:<div>
            <form onSubmit={handleSubmit2}>
        <div className='inputs'>
            
            <div className='input'>
           
            <input 
            type='email'
            name='logemail'
            value={formValues2.logemail}
            onChange={handleChange2}
             placeholder='Email Id'
             />
             </div>
             <p className='error'>{formErrors2.logemail}</p>
        
        
        <div className='input'>
        
        <input 
        type='password' 
        name="password"
        placeholder='Password'
        value={formValues2.password}
        onChange={handleChange2}
       />
        </div>

        <p className='error'>{formErrors2.password}</p>

        <div className="forgot-password">

        
Forgot Password?<span> Click Here!  </span></div>
        <button className="submit-form" id="sub">Submit </button>
        <div onClick={resetForm2} className='submit-form' id="res">Reset</div>

        </div>
        
   
            
            </form></div>}
           
        
        
           
        
        
      
    </div>
    </AnimatedPage>
      
);
}
