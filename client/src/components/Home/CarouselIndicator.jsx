import React from "react";

const CarouselIndicator = ({
  onClickHandler,
  isSelected,
  index,
  label,
}) => {
  if (isSelected) {
    return (
      <li
        className="bg-primary rounded-full h-2 w-2 inline-block mx-2"
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    );
  }
  return (
    <li
      className="bg-gray-300 rounded-full h-2 w-2 inline-block mx-2"
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

export default CarouselIndicator;
