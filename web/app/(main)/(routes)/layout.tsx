import Loader from "@/components/loader";
import Sidebar from "@/components/sidebar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <Loader />
      <div>
        <Sidebar />
        <div className="ml-8 mt-20 md:ml-32 md:mt-6 dark:bg-[#EDEDED] bg-[#2b2b2b] rounded-tl-3xl h-screen md:z-10 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
