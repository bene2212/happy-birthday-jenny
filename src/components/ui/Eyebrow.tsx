export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-deep/80 font-sans font-medium ${className}`}
    >
      {children}
    </span>
  );
}
