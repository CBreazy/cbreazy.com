const BasicButton = ({ children, disabled, variant }) => {
  const baseColors = {
    primary: 'bg-neutral-800 text-white',
    primaryHover: 'hover:bg-neutral-700',
    primaryFocus: 'focus:bg-neutral-600',
    primaryActive: 'active:bg-neutral-900',
    secondary: 'bg-neutral-300 text-black',
    secondaryHover: 'hover:bg-neutral-400',
    secondaryFocus: 'focus:bg-neutral-200',
    secondaryActive: 'active:bg-neutral-500',
    third: 'bg-yellow-400 text-black',
    thirdHover: 'hover:bg-yellow-500',
    thirdFocus: 'focus:bg-yellow-300',
    thirdActive: 'active:bg-yellow-600',
  };

  const variantClasses = {
    primary: `${baseColors.primary} ${
      disabled
        ? ''
        : `${baseColors.primaryHover} ${baseColors.primaryFocus} ${baseColors.primaryActive}`
    }`,
    secondary: `${baseColors.secondary} ${
      disabled
        ? ''
        : `${baseColors.secondaryHover} ${baseColors.secondaryFocus} ${baseColors.secondaryActive}`
    }`,
    third: `${baseColors.third} ${
      disabled
        ? ''
        : `${baseColors.thirdHover} ${baseColors.thirdFocus} ${baseColors.thirdActive}`
    }`,
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