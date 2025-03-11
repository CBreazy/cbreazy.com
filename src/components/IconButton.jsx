const IconButton = ({ children }) => {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-md font-medium flex items-center hover:bg-gray-700 focus:bg-gray-600 active:bg-gray-900">
      <span className="mr-2 text-xl">+</span> {children}
    </button>
  );
};

export default IconButton;