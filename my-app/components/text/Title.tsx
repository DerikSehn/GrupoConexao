export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-5xl lg:text-7xl font-secondary text-primary mb-4 text-center bg-black/50 border-l-4 border-primary p-4  shadow-sm shadow-primary   backdrop-blur-sm bg-opacity-95">
      {children}
    </h1>
  );
}