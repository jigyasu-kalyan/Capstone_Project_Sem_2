import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedServices from "@/components/FeaturedServices";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex items-start justify-center my-8 px-4">
        <input
          type="text"
          placeholder="Find calm articles or services..."
          className="w-full sm:max-w-md md:max-w-lg lg:max-w-5xl p-4 rounded-md bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 text-lg"
        />
      </div>
      <HeroSection />
      <FeaturedServices />
    </main>
  );
}
