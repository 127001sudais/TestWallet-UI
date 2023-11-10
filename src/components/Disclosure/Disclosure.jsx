import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function CustomDisclosure({
  children,
  aboutOption,
  aboutAnswer,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full ">
        {/* button which contains text begins here */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex mt-2 w-full bg-black rounded focus:outline-none"
        >
          <p className="flex-1 text-white font-semibold"> {aboutOption}</p>
          <ChevronUpIcon
            className={` text-white ${
              !isOpen ? "rotate-180 transform" : ""
            }h-5 w-5 `}
          />
        </button>
        {/* button which contains text ends here */}

        <Transition
          show={isOpen}
          enter="transition ease-out duration-500"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          {isOpen && (
            <div className=" rounded bg-black shadow-2xl">
              <p className="mt-2 text-sm text-white">{aboutAnswer}</p>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
}
