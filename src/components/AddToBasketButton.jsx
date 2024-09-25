import React from 'react';

const AddToBasketButton = ({onClick}) => {
    return (
        <button
            onClick={onClick}
            className="bg-[#F7C32E] w-3/4 p-2 rounded-3xl text-base font-bold "
          >
            Add to basket
          </button>
    );
};

export default AddToBasketButton;