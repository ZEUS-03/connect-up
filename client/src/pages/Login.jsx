import React ,  {useEffect ,  useState} from 'react'



// for notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validateInputs = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        // Return true if there are no errors, indicating that the inputs are valid
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateInputs()) {
            // Perform login logic here (e.g., API call)
            console.log('Login successful!');
        } else {
            console.log('Login failed. Please fix the errors.');
        }
    };



    return (


<>
        <div className="App">
            <div className="login-container">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>

         {/* for notification */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

</>
    )
}

export default Login




// for notification
const notify = (msg, type) => {
    toast[type](`🦄 ${msg}`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  
  }



