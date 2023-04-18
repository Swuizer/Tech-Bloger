import React from "react";
import Typed from "react-typed";

const TypeData = () => {
  return (
    <div>
      <Typed
      className="text-orange-600 text-sm sm:text-base font-bold"
        strings={[
          "Welcome to my Tech Bloger Website"
        ]}
        loop={true}
        typeSpeed={100}
        backSpeed={80}
        backDelay={1400}
      />
    </div>
  );
};

export default TypeData;
