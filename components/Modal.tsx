function Modal({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-dvw h-dvh bg-[#00000095] absolute z-10 flex items-center justify-center flex-col gap-4">
      <div className="text-white font-ballet font-bold text-2xl ">
        A lua está linda hoje...
      </div>
      <button
        className="cursor-pointer text-lg bg-red-500 px-6 py-2 rounded-lg font-bold"
        onClick={onClick}
      >
        Fechar
      </button>
    </div>
  );
}

export default Modal;
