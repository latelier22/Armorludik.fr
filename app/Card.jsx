"use client";
import { useEffect } from "react";

const Card = ({card, buttonColor}) => {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);


  return (
    <header >
<div
  className="block mx-10 flex-grow rounded-lg border-4 border-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!" className="block relative rounded-t-lg overflow-hidden w-full h-0" style={{ paddingTop: '100%' }}>
  <img
    className="absolute top-0 left-0 w-full h-full object-cover object-center"
    src={`images/${card.url}`}
    alt={card.alt}
  />
</a>

  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {card.title}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {card.text}
    </p>
    <div className="flex flex-row justify-center">
    <button
      type="button"
      className={`${buttonColor}  items-center rounded-2xl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
      data-te-ripple-init
      data-te-ripple-color="light">
      {card.button}
    </button>
    </div>
  </div>
</div>
    </header>
  );
};

export default Card;
