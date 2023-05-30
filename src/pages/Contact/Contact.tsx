import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <div>
            <section className='bg-gray-800 py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <h2 className='text-3xl font-bold mb-4 text-white'>Send Me A Message</h2>
                            <ContactForm />
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-4 text-white'>Contact Information</h2>
                            <div className='flex items-start mb-2'>
                                <span className='mr-2 text-white mt-1'>
                                    <FaMapMarkerAlt />
                                </span>
                                <p className='text-white'>San Antonio, Texas</p>
                            </div>
                            <div className='flex items-start mb-2'>
                                <span className='mr-2 text-white mt-1'>
                                    <FaPhone />
                                </span>
                                <p className='text-white'>Phone: +123 456 7890</p>
                            </div>
                            <div className='flex items-start mb-2'>
                                <span className='mr-2 text-white mt-1'>
                                    <FaEnvelope />
                                </span>
                                <p className='text-white'>Email: test@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full h-80'>
                    {/* Placeholder for Google Maps */}
                    <iframe
                        title='Google Maps'
                        src='https://www.google.com/maps?q=San%20Antonio,%20Texas&output=embed'
                        width='100%'
                        height='100%'
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        aria-hidden='false'
                        tabIndex={0}
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
