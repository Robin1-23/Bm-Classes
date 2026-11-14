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

  // Tag the ink so the dark theme can recolour it without parsing inline styles
  const ink = String(color).toLowerCase();
  const tone = ink === '#0b1020' || ink === '#020617' ? 'fold-ink' : ink === '#4338ca' ? 'fold-accent' : '';

  return (
    <span className={`fold-text ${tone} ${className}`.replace(/\s+/g, ' ').trim()} style={rootStyle}>
      {/* One copy of the text: a hidden sr-only duplicate made crawlers and AI extractors read every heading twice.
          The trailing space keeps words apart when the block lines are read as plain text. */}
      {text.split('\n').map((line, i) => (
        <span className="fold-text-line" key={i}>{line} </span>
      ))}
    </span>
  );
};

export default FoldText;
