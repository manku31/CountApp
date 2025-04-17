import { memo } from "react";

function Button({ onClickEvent, children }) {
  console.log(`${children} Button is triggered`);

  const buttonCss = `text-white font-medium py-2 px-4 rounded-lg shadow transition-colors duration-200 flex items-center justify-center ${
    children === "Increment"
      ? "bg-green-500 hover:bg-green-600"
      : "bg-red-500 hover:bg-red-600"
  }`;

  return (
    <button className={buttonCss} onClick={onClickEvent}>
      {children}
    </button>
  );
}

export default memo(Button);
