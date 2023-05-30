import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Reset messages
        setSuccessMessage("");
        setErrorMessage("");

        // Perform form submission logic
        if (name && email && message) {
            // Simulating a successful form submission
            setSuccessMessage("Thanks for the message, I'll get back to you as soon as possible.");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setErrorMessage("Please fill in all the required fields.");
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className='space-y-4'>
            {successMessage && (
                <div className='bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded relative' role='alert'>
                    <span className='block sm:inline'>{successMessage}</span>
                </div>
            )}
            {errorMessage && (
                <div className='bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <span className='block sm:inline'>{errorMessage}</span>
                </div>
            )}
            <div className='flex flex-col gap-2 relative'>
                <div className='relative'>
                    <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                        <FaUser />
                    </span>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full border border-gray-300 rounded-md p-2 pl-10'
                        required
                    />
                </div>
                <div className='relative'>
                    <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                        <FaEnvelope />
                    </span>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full border border-gray-300 rounded-md p-2 pl-10'
                        required
                    />
                </div>
                <div className='relative'>
                    <span className='absolute left-3 top-[22px] transform -translate-y-1/2 text-gray-500'>
                        <FaComment />
                    </span>
                    <textarea
                        placeholder='Message'
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full border border-gray-300 rounded-md p-2 pl-10'
                        required
                    ></textarea>
                </div>
            </div>
            <div className='flex justify-end'>
                <button type='submit' className='bg-slate-500 hover:bg-slate-400 text-white py-2 px-4 rounded-md'>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
