"use client";

import Lua from "@/components/Lua";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="w-dvw h-dvh bg-radial bg-gray-950 flex items-center justify-center">
      <Lua onClick={onClick}></Lua>
      {isModalOpen && <Modal onClick={onClick}></Modal>}
    </main>
  );
}
