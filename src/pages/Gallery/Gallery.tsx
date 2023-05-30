import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery: React.FC = () => {
  const images = [
    'https://t3.ftcdn.net/jpg/01/10/76/28/360_F_110762807_L7qoXaHYxE9umYXuUnrgkFATDIMCMq2X.jpg',
    'https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.jpg?s=612x612&w=0&k=20&c=79iUS8RSYKXAmLfHkf9S3DgsKXUaj2-jEksKAWMerNA=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXFSsYcWgpvvIFwA-gYHGTYgznikZWUFsD4OPjJNk33ynrbR02V1v_731pI9zNvWgnYI&usqp=CAU',
    'https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?cs=srgb&dl=pexels-adrian-boustead-955938.jpg&fm=jpg',
    'https://st3.depositphotos.com/4208693/12871/i/600/depositphotos_128718822-stock-photo-tattooer-makes-cool-tattoo-in.jpg',
    'https://images.pexels.com/photos/2126124/pexels-photo-2126124.jpeg?cs=srgb&dl=pexels-brett-sayles-2126124.jpg&fm=jpg',
  ];

  return (
    <div className="bg-[#0f0d0e]  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-bold text-white mb-8">Gallery</h1>
        <div className="carousel-container">
          <Carousel
            showThumbs={true}
            dynamicHeight={true}
            showStatus={false}
            thumbWidth={80}
            // thumbHeight={60}
            selectedItem={0}
            renderThumbs={(children) => children}
            className="carousel"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
