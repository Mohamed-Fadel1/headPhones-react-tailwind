import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const AboutText = () => {
  return (
    <>
      <div className="container py-12 text-center ">
        <UpdateFollower
           mouseOptions={{
            backgroundColor: '#aa6d6b',
            zIndex: 2,
            followSpeed: 1.5,
            scale: 10,
            mixBlendMode: 'lighten',
          }}
        >
        <div className="bg-gradient-to-t from-primary to-primary/70 text-white p-8 rounded-3xl hover:scale-105 duration-500 transition-all hover:shadow-2xl">
          <p className="text-4xl max-w-[700px] m-auto">
            Headphones With Good Quality And Affordable Price
          </p>
        </div>
        </UpdateFollower>
      
      </div>
    </>
  );
};

export default AboutText;
