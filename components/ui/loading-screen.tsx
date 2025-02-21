export function LoadingScreen({ fadeOut }: { fadeOut: boolean }) {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#010204] to-[#030912] flex items-center justify-center transition-opacity duration-1000 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <img 
        src="/images/logo.png" 
        alt="Pebble Platforms Logo" 
        className="w-24 h-24 animate-pulse"
      />
    </div>
  );
}