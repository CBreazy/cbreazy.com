const BasicButton = ({ children, disabled, variant }) => {
  const baseColors = {
    primary: 'bg-gray-800',
    secondary: 'bg-gray-300',
    third: 'bg-yellow-400',
  };

  const variantClasses = {
    primary: `${baseColors.primary} text-white hover:${baseColors.primary}-700 focus:${baseColors.primary}-600 active:${baseColors.primary}-900`,
    secondary: `${baseColors.secondary} text-black hover:${baseColors.secondary}-400 focus:${baseColors.secondary}-200 active:${baseColors.secondary}-500`,
    third: `${baseColors.third} text-black hover:${baseColors.third}-500 focus:${baseColors.third}-300 active:${baseColors.third}-600`,
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium ${
        variantClasses[variant] || ''
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BasicButton;