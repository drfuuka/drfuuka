import { TGalleriesItem } from "@/types/timeline.type";
import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
} from "@nextui-org/react";
import React from "react";

type Props = Omit<ModalProps, "children"> & {
  modalData?: TGalleriesItem | null;
};

export default function ModalViewProject({ modalData, ...props }: Props) {
  return (
    <Modal
      {...props}
      size="4xl"
      backdrop="blur"
      classNames={{
        body: "bg-background",
        header: "bg-background",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {modalData?.title}
            </ModalHeader>
            <ModalBody>
              {modalData && (
                <>
                  <div className="grid grid-cols-12 gap-5 pb-5">
                    <div className="col-span-8">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={modalData.url}
                          alt={""}
                          width={500}
                          height={300}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <span className="text-xs">
                        {modalData.description
                          ? modalData.description
                          : "No description"}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
