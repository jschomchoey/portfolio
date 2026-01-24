export default function Capsule({
  children,
  variant = "primary",
  className = "",
}) {
  const variantClasses = {
    primary: "capsule-primary",
    secondary: "capsule-secondary",
    outline: "capsule-outline",
  };

  return (
    <span className={`capsule ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
