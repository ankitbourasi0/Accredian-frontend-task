import React, { useRef, useState } from "react";
import Button from "./utils/button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DividerSpacer from "./utils/divider";
import NavBar from "./components/Navbar";
import ReferralBenefits from "./components/ReferralBenefits";
import HowRefer from "./components/ReferProcess";

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="flex justify-between max-w-[250px] w-full items-center">
        <a href="https://accredian.com/">
          <img src="/images/Link.png" alt="Accredian" className="h-8" />
        </a>
        <Button btnName={"Courses"} styles={"py-2 px-4"} />
      </div>
      <nav>
        <ul className="flex space-x-6 items-center font-semibold text-black">
          <li>
            <a href="#" className="text-gray-600">
              Refer & Earn
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              About Us
            </a>
          </li>
          <li>
            <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">
              <a target="_blank" href="https://accredian.com/login">
                {" "}
                Login
              </a>
            </button>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              <a target="_blank" href="https://trial.accredian.com/">
                Try for free
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);



const HeroSection = () => {
  const handleFormSubmit = async (data) => {
    // Handle form submission logic here (e.g., send data to server)
    try {
    console.log("Submitted data:", data);
      const response = await axios.post('https://accredian-backend-task-5hn9.onrender.com/api/referrals', data);
      console.log('API response:', response.data);
      // console.log(response.data.status)
      // console.log(response.status)

      if(response.data.status === 200 | response.status){
        console.log(response.data.data.referrer_name,response.data.data.referee_name,response.data.data.course)
        toast.success(
          <div>
            <h3>Referred successfully!</h3>
            <p>{response.data.data.referrer_name} Referred</p>
            <p>to {response.data.data.referee_name}</p>
            <p>course: {response.data.data.course}!</p>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
      
    } catch(error) {
      toast.error('Referral Already Done !!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

         console.error('Error:', error);
         // Handle the error appropriately, e.g., show an error message to the user
         if (error.response) {
           // The request was made and the server responded with a status code
           // that falls out of the range of 2xx
           console.log(error.response.data);
           console.log(error.response.status);
           console.log(error.response.headers);
         } else if (error.request) {
           // The request was made but no response was received
           console.log(error.request);
         } else {
           // Something happened in setting up the request that triggered an Error
           console.log('Error', error.message);
         }
       }

  };
  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-8 relative overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="max-w-md space-y-9">
          <h1 className="text-7xl font-bold mb-4">Let's Learn & Earn</h1>
          <p className="text-4xl mb-6">
            Get a chance to <br /> win up-to{" "}
            <span className="text-blue-600 font-bold">Rs. 15,000</span>
          </p>
          <ReferralForm onSubmit={handleFormSubmit} />
        </div>
        <div className="relative">
          <img
            src="/images/hero.png"
            alt="Happy students"
            className="max-w-2xl"
          />
          {/* <img src="/path-to-phone-image.png" alt="Phone app" className="absolute -top-10 -left-20 max-w-xs transform rotate-12" /> */}
        </div>
      </div>
      <img
        src="/images/dollar.png"
        alt="Dollar"
        className="absolute top-0 left-0 w-32 "
      />
      <img
        src="/images/dollar.png"
        alt="Dollar"
        className="absolute bottom-0 right-0 w-32 rotate-180"
      />
      <ToastContainer />
    </div>
  );
};

const App = () => (
  <div className="bg-gray-100 min-h-screen">
    <div className="bg-blue-50 text-center py-2 text-sm">
      Navigate your ideal career path with tailored expert advice
      <a href="#" className="text-blue-600 ml-2">
        Contact Expert
      </a>
    </div>
    <Header />
    <NavBar />
    <HeroSection />
    <DividerSpacer styles={"my-32"}/>
    <HowRefer />
    <DividerSpacer styles={"my-32"}/>
    <ReferralBenefits />

  </div>
);

export default App;





const ReferralForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });
  const [errors, setErrors] = useState({}); // State for validation errors
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Update specific field in state object
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm(); // Perform validation

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);

      console.log("ForMData::: ",formData)
      setFormData({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
        course: "",
      }); // Reset form data after submission
      setErrors({}); // Clear errors after successful submission
      setShowModal(false); // Close modal after submission
    } else {
      setErrors(newErrors);
   
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.referrerName) {
      newErrors.referrerName = "Referrer Name is required.";
    }
    if (
      !formData.referrerEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referrerEmail)
    ) {
      newErrors.referrerEmail = "Invalid Referrer Email.";
    }
    if (!formData.refereeName) {
      newErrors.refereeName = "Referee Name is required.";
    }
    if (
      !formData.refereeEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.refereeEmail)
    ) {
      newErrors.refereeEmail = "Invalid Referee Email.";
    }
    if (!formData.course) {
      newErrors.course = "Course is required.";
    }

    return newErrors;
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => setShowModal(true)}
        btnName={"Refer a Friend"}
        styles={"py-3 px-10 text-xl"}
      />

<ToastContainer />

      <div className="w-full">
        {showModal && (
           <div
           className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out"
           onClick={handleClickOutside}
         >
           <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
             <div className="w-full bg-white rounded-lg shadow-lg p-8 md:w-3/4 lg:w-1/2" ref={formRef}>
               <form onSubmit={handleSubmit} className="space-y-4">
                 <div className="flex flex-col">
                   <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="referrerName">
                     Referrer Name
                   </label>
                   <input
                     className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.referrerName ? 'border-red-500' : ''}`}
                     id="referrerName"
                     type="text"
                     name="referrerName"
                     value={formData.referrerName}
                     onChange={handleChange}
                   />
                   {errors.referrerName && <span className="text-red-500 text-xs">{errors.referrerName}</span>}
                 </div>
                 <div className="flex flex-col">
                   <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="referrerEmail">
                     Referrer Email
                   </label>
                   <input
                     className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.referrerEmail ? 'border-red-500' : ''}`}
                     id="referrerEmail"
                     type="email" // Use type="email" for email input
                     name="referrerEmail"
                     value={formData.referrerEmail}
                     onChange={handleChange}
                   />
                   {errors.referrerEmail && <span className="text-red-500 text-xs">{errors.referrerEmail}</span>}
                 </div>
                 <div className="flex flex-col">
                   <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="referrerEmail">
                   Referee Name
                   </label>
                   <input
                     className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.referrerEmail ? 'border-red-500' : ''}`}
                     id="refereeName"
                     type="text" 
                     name="refereeName"
                     value={formData.refereeName}
                     onChange={handleChange}
                   />
                   {errors.refereeName && <span className="text-red-500 text-xs">{errors.refereeName}</span>}
                 </div>

                 <div className="flex flex-col">
                   <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="referrerEmail">
                     Referee Email
                   </label>
                   <input
                     className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.referrerEmail ? 'border-red-500' : ''}`}
                     id="refereeEmail"
                     type="email" // Use type="email" for email input
                     name="refereeEmail"
                     value={formData.refereeEmail}
                     onChange={handleChange}
                   />
                   {errors.refereeEmail && <span className="text-red-500 text-xs">{errors.refereeEmail}</span>}
                 </div>

                 <div className="flex flex-col">
                   <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="referrerEmail">
                     Course
                   </label>
                   <input
                     className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.referrerEmail ? 'border-red-500' : ''}`}
                     id="course"
                     type="text" 
                     name="course"
                     value={formData.course}
                     onChange={handleChange}
                   />
                   {errors.course && <span className="text-red-500 text-xs">{errors.course}</span>}
                 </div>

                 
                 {/* ... other form fields with similar structure ... */}
                 <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                   Submit
                 </button>
               </form>
             </div>
           </div>
         </div>
        )}
      </div>
    </React.Fragment>
  );
};
