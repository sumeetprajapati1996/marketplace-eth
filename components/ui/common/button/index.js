export default function Button({
  children,
  className,
  hoverable = true,
  variant = "purple",
  ...rest
}) {
  const variants = {
    purple: `text-white bg-indigo-600 ${
      hoverable ? "hover:bg-indigo-700" : ""
    }`,
    red: `text-white bg-red-600 ${hoverable ? "hover:bg-red-700" : ""}`,
  };

  return (
    <button
      {...rest}
      className={`
        ${className} 
        ${variants[variant]} 
        disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium 
      `}
    >
      {children}
    </button>
  );
}
