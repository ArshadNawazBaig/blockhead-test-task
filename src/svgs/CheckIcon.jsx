export const CheckIcon = ({ colorClass, ...props }) => {
  return (
    <svg
      className={`absolute 
                w-4 h-4
                hidden peer-checked:block
                pointer-events-none text-${colorClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};
