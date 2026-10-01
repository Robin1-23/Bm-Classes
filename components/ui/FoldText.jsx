import './FoldText.css';

// Lightweight display text. Kept the old FoldText props so call sites don't change;
// the per-letter GSAP animation was removed because it made headings feel laggy.
// Entrance motion comes from the surrounding ScrollReveal instead.
const FoldText = ({
  text = '',
  fontSize = 80,
  fontWeight = 800,
  color = 'currentColor',
  className = '',
  style = {},
}) => {
  const rootStyle = {
    '--fold-text-font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    '--fold-text-font-weight': fontWeight,
    '--fold-text-color': color,
    ...style,
  };

  return (
    <span className={`fold-text ${className}`.trim()} style={rootStyle}>
      <span className="fold-text-sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split('\n').map((line, i) => (
          <span className="fold-text-line" key={i}>{line}</span>
        ))}
      </span>
    </span>
  );
};

export default FoldText;
