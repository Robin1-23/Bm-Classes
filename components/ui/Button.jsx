import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'accent', 'dark', 'whatsapp'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon = null,
  showArrow = false,
  className = '',
  onClick,
  href,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 cursor-pointer active:scale-[0.98] text-center min-h-[44px]';

  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm',
    secondary: 'bg-white hover:bg-indigo-50/50 text-slate-800 border border-slate-200 hover:border-indigo-300',
    accent: 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm',
    dark: 'bg-slate-950 hover:bg-indigo-600 text-white shadow-sm',
    whatsapp: 'bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3.5 text-xs sm:text-sm gap-2',
    lg: 'px-8 py-4 text-sm sm:text-base gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 shrink-0" />}
    </button>
  );
}
