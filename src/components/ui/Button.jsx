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
  className: classNameFromProps = "",
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

  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    classNameFromProps,
  ]
    .filter(Boolean)
    .join(" ");

  // ===== File download =====
  if (href && isFile) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        download
        {...props}
      >
        <span className="sr-only">{ariaLabel}</span>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    );
  }

  // ===== Link =====
  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        {...props}
      >
        <span className="sr-only">{ariaLabel}</span>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  // ===== Button =====
  return (
    <button type={type} className={className} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
