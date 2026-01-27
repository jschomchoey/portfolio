import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  href,
  isFile = false,
  target = "_self",
  rel,
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

  // File Link, External Link
  if (href && isFile) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel ?? "noopener noreferrer"}
        aria-label={ariaLabel}
        {...props}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    );
  }

  // Internal Link
  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button type={type} className={className} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
