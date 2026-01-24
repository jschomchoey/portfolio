export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  ...props
}) {
  const baseClasses = "btn inline-flex items-center justify-center";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };
  const sizeClasses = {
    sm: "btn-small",
    md: "btn-medium",
    lg: "btn-large",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
