import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// icon
import CloseIcon from "@mui/icons-material/Close";

export default function ModalLayout({ title, children, isOpen, toggleModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10" onClose={toggleModal}>
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-56 h-96 overflow-y-auto p-6 transition-all transform bg-white shadow-xl rounded-2xl no-scrollbar absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <div className="flex">
                {/* Title begins here */}
                <Dialog.Title
                  as="h3"
                  className=" flex-grow text-lg font-bold italic"
                >
                  {title}
                </Dialog.Title>
                {/* Title ends here */}

                {/* Close button begins here*/}
                <div className="">
                  <button
                    type="button"
                    className="bg-black rounded-md text-md text-white font-medium focus:outline-none focus:ring-white"
                    onClick={toggleModal}
                  >
                    <CloseIcon />
                  </button>
                </div>
                {/* Close button ends here */}
              </div>
              <div className="mt-2 overflow-y-auto">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
