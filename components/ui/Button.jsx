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
  const baseStyles = 'inline-flex items-center justify-center font-black rounded-2xl transition-all duration-300 cursor-pointer active:scale-95 text-center';

  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25 border border-indigo-500',
    secondary: 'bg-white hover:bg-indigo-50/50 text-slate-800 border border-slate-200 hover:border-indigo-300',
    accent: 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25',
    dark: 'bg-slate-950 hover:bg-indigo-600 text-white shadow-sm',
    whatsapp: 'bg-[#25D366] hover:bg-emerald-500 text-white shadow-md',
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
