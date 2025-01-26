import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Bot.scss'
import axios from "axios";
const Bot = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        problem: "",
      });
    
     
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const setMessage = (event) => {
        event.preventDefault();
    
        const token = "8067183480:AAFKCrO3LUj1a82nwf0on6R-5OUok77whTc";
        const chat_id = "6068975139";
    
        if (!token || !chat_id) {
          console.error("Telegram Bot Token or Chat ID is missing.");
          return;
        }
    
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
        const message = `
          📌 *New Inquiry from Website*:
          - 👤 Name: ${formData.name}
          - 🧑 Surname: ${formData.surname}
          - 📞 Phone: ${formData.phone}
          - 📝 Problem: ${formData.problem}
        `;
    
        axios
        .post(url, {
          chat_id: chat_id,
          text: message,
          parse_mode: "Markdown",
        })
        .then(() => {
          console.log("Message sent successfully");
          toast.success("Message sent successfully!");
          setFormData({ name: "", surname: "", phone: "", problem: "" });
        })
        .catch((error) => {
          console.error("Error sending message", error);
          toast.error("Failed to send the message. Please try again.");
        });
      
      };
  return (
    <div className='Bot'>
        <div id='Contact' className='Bot_flex'>
            <div className='Bot_img'>
            
            </div>
            <div className='Bot_text'>
                <h5>GET IN TOUCH</h5>
                <h1>It’s very easy to contact!</h1>
                 <form  onSubmit={setMessage} action="">
                    <input  type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required  placeholder='Your name'/>
                    <input  name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required type="text" placeholder='Email address'/>
                    <input   name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required type="text" placeholder='Web address' />
                    <textarea  name="problem"
              id="problem"
              value={formData.problem}
              onChange={handleInputChange}
              required placeholder='Type message...'></textarea>
                    <button>SEND MESSAGE NOW</button>
                 </form>
            </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Bot