"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 overflow-auto py-10"
      onClick={close}
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#141414] rounded-md w-[57vw] ">
        <div
          className="absolute top-7 right-10 cursor-pointer z-50"
          onClick={close}
        >
          <i className="fa-solid fa-xmark text-white text-lg"></i>
        </div>
        {children}
      </div>
    </div>
  );
}
