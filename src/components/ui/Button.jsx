import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  href,
  type = "button",
  ariaLabel,
  ...props
}) {
  const baseClasses = "btn inline-flex items-center justify-center";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel} {...props}>
        <span className="sr-only">{ariaLabel}</span>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
