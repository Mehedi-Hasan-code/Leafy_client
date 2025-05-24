import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Urban Gardener',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    text: 'The gardening tips I found here transformed my tiny balcony into a thriving herb garden. Now I grow fresh basil and mint for my cooking!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Vegetable Gardener',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    text: "As a beginner, I was overwhelmed with gardening. This community's advice helped me start my first vegetable patch successfully!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Flower Enthusiast',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    text: 'The seasonal flower guides are amazing! My garden has never looked better. Thank you for sharing such valuable knowledge!',
    rating: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          What Our Gardeners Say
        </h2>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-green-200 text-4xl absolute -top-2 -left-2" />
                  <p className="text-gray-600 italic relative z-10 pl-6">
                    {testimonial.text}
                  </p>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
