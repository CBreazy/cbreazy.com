const CrudButton = ({ children, variant }) => {
    const baseColors = {
      save: 'bg-green-500',
      saveHover: 'hover:bg-green-600',
      saveFocus: 'focus:bg-green-400',
      saveActive: 'active:bg-green-700',
      delete: 'bg-red-500',
      deleteHover: 'hover:bg-red-600',
	  deleteFocus: 'focus:bg-red-400',
	  deleteActive: 'active:bg-red-700',
    };
  
    const variantClasses = {
      save: `text-white border-none ${baseColors.save} ${baseColors.saveHover} ${baseColors.saveFocus} ${baseColors.saveActive}`,
      delete: `text-white border-none ${baseColors.delete} ${baseColors.deleteHover} ${baseColors.deleteFocus} ${baseColors.deleteActive}`,
    };
  
    return (
      <button
        className={`px-4 py-2 rounded-md font-medium border border-gray-300 ${
          variantClasses[variant] || ''
        } hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300`}
      >
        {children}
      </button>
    );
  };
  
  export default CrudButton;