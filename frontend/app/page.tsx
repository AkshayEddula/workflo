'use client'
import Hero from "@/component/Hero";
import HeroFeatureas from "@/component/HeroFeatureas";
import Main from "@/component/Main";
import Navbar from "@/component/Navbar";
import { useGlobalContext } from "./Context/store";
import TaskModal from "@/component/TaskModal";

export default function Home() {

  const { isAuthenticated } = useGlobalContext();
  const { isModalOpen } = useGlobalContext();

  return (
    <main className="flex">
      {isAuthenticated && <>
        <Navbar />
        <div className="relative flex flex-col p-6 gap-4">
          <div>
            <div>
              <Hero />
              <HeroFeatureas />
            </div>
            <Main />
          </div>
          <div className="absolute right-0 top-0">
            {isModalOpen && <TaskModal />}
          </div>
        </div>
      </>}
    </main>
  );
}
