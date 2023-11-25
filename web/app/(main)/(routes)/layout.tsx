import Sidebar from "@/components/sidebar";
import Categories from "./(home)/categories";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Sidebar />
      <div className="ml-32 mt-6 bg-[#EDEDED] rounded-tl-3xl h-screen z-10 p-8 text-black">
        <Categories />
      </div>
    </div>
  );
}
