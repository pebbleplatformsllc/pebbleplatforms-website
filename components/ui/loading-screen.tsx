import Image from "next/image";

export function LoadingScreen({ fadeOut }: { fadeOut: boolean }) {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#010204] to-[#030912] flex items-center justify-center transition-opacity duration-1000 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <Image 
        src="/images/no-loafing.png"
        alt="No Loafing Logo"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </div>
  );
}