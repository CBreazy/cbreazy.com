const IconButton = ({ children, disabled }) => {
  return (
    <button
      className={`bg-neutral-800 text-white px-4 py-2 rounded-md font-medium flex items-center ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-700 focus:bg-neutral-600 active:bg-neutral-900'
      }`}
      disabled={disabled}
    >
      <span className="mr-2 text-xl">+</span> {children}
    </button>
  );
};

export default IconButton;