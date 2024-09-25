import React from 'react';

const DetelsButton = ({text}) => {
    return (
        <button className="border py-1 md:py-2 px-2 md:px-4 hover:bg-purple-500 hover:text-white md:text-xl text-purple-500 border-purple-500 rounded-lg">
        {text}
      </button>
    );
};

export default DetelsButton;