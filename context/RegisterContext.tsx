"use client";

import React, { createContext, useContext, useState } from "react";
import RegisterModal from "@/components/RegisterModal";

interface RegisterContextType {
  openRegister: (batch?: string) => void;
  closeRegister: () => void;
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<string | undefined>(undefined);

  const openRegister = (batch?: string) => {
    setSelectedBatch(batch);
    setIsOpen(true);
  };

  const closeRegister = () => {
    setIsOpen(false);
  };

  return (
    <RegisterContext.Provider value={{ openRegister, closeRegister }}>
      {children}
      <RegisterModal
        isOpen={isOpen}
        onClose={closeRegister}
        defaultBatch={selectedBatch}
      />
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
}
