import { Features } from "./components/Featires";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="px-[20px] lg:container lg:px-[20px] mx-auto">
      <Features />
    </div>
    </>
  );
}
