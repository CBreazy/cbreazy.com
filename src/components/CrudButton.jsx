const CrudButton = ({ children, variant, disabled }) => {
  const baseColors = {
    save: 'bg-green-500 text-white',
    saveHover: 'hover:bg-green-600',
    saveFocus: 'focus:bg-green-400',
    saveActive: 'active:bg-green-700',
    delete: 'bg-red-500 text-white',
    deleteHover: 'hover:bg-red-600',
    deleteFocus: 'focus:bg-red-400',
    deleteActive: 'active:bg-red-700',
  };

  const variantClasses = {
    save: `${baseColors.save} ${
      disabled ? '' : `${baseColors.saveHover} ${baseColors.saveFocus} ${baseColors.saveActive}`
    }`,
    delete: `${baseColors.delete} ${
      disabled ? '' : `${baseColors.deleteHover} ${baseColors.deleteFocus} ${baseColors.deleteActive}`
    }`,
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium border border-gray-300 ${
        variantClasses[variant] ||
        (disabled ? '' : 'hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300')
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CrudButton;