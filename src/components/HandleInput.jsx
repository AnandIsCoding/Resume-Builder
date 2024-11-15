import React from 'react';

// Use React.forwardRef to forward the ref to the input element
const HandleInput = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      {label && (
        <label className="text-2xl font-bold ml-2 text-blue-500">{label}</label>
      )}
      <input
        ref={ref}  // Pass the ref to the input element
        className="ml-2 px-5 py-2 border-2 border-blue-500 bg-transparent outline-none rounded-xl w-[60%] h-[7vh] mt-1"
        type="text"
        {...props}  // Spread the remaining props (like placeholder, type, etc.)
      />
    </div>
  );
});

export default HandleInput;
