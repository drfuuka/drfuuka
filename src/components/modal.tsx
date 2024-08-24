"use client";
import { Modal as NextModal, ModalContent, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Modal({ isOpen, children }: any) {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };
  return (
    <>
      <NextModal
        isOpen={true}
        onOpenChange={handleOpenChange}
        size="full"
        placement="bottom"
        hideCloseButton={true}
        scrollBehavior="inside"
        classNames={{
          wrapper: "mt-12",
          base: "!rounded-tl-3xl max-h-full",
          backdrop: "cursor-pointer",
          body: "bg-background",
        }}
      >
        <ModalContent>{(onClose) => <>{children}</>}</ModalContent>
      </NextModal>
    </>
  );
}
