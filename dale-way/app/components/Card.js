export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`} {...props}>
      {children}
    </div>
  );
}