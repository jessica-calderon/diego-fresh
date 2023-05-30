import React from "react";

const Home = () => {
    return (
        <div>
            <header
                className='bg-cover bg-center h-screen flex items-center'
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://t3.ftcdn.net/jpg/01/10/76/28/360_F_110762807_L7qoXaHYxE9umYXuUnrgkFATDIMCMq2X.jpg')",
                }}
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='text-5xl font-bold text-white mb-8'>Diego Fresh Tattoos</h1>
                    <p className='text-xl text-white'>Book your appointment today.</p>
                </div>
            </header>
            <section className='bg-[#0f0d0e] py-16'>
                <div className='md:w-4/12 sm:w-{50%0 mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl text-center font-bold text-white mb-8'>About the Artist</h2>
                    <div className='flex justify-center'>
                        <img
                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                            alt='Artist Profile'
                            className='rounded-full w-48 h-48'
                        />
                    </div>
                    <p className='text-white text-center mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tellus vel orci tincidunt sollicitudin. Donec cursus
                        eros id fringilla tincidunt. In rutrum odio et ligula interdum tempor.
                    </p>
                </div>
            </section>
            {/* Rest of the content */}
        </div>
    );
};

export default Home;
