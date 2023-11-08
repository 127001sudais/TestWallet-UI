import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// importing test data
import { people } from "../../data/payRail-MVP";

export default function SearchBar({ setSelectedPerson }) {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  //   Filter the people based on the query
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSelectChange = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="">
      <Combobox value={selected} onChange={handleSelectChange}>
        <div className="relative mt-1">
          <div className="relative w-full  overflow-hidden rounded-md  text-left shadow-md focus:outline-none text-sm">
            {/* Input field for the combobox */}
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter Name"
            />

            {/* Combobox button begins here  */}
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                // aria-hidden = true is used for to get ignored by assistive technologies(disabled people use)
                aria-hidden="true"
              />
            </Combobox.Button>

            {/* Combobox button ends here */}
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* Options begins here */}

            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              {filteredPeople.length === 0 && query !== "" ? (
                // If there are no options (contacts/people) it displays `Nothing found.`
                <div className="relative select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                // Renders a Combobox.Option for each person

                filteredPeople.map((person, i) => (
                  <Combobox.Option
                    // each <Combobox.Option> component is given a key prop with a unique identifier for the person.
                    key={i}
                    // The className prop is a function that dynamically generates a class string based on the active state of the option
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-gray-600 text-white" : "text-gray-900"
                      }`
                    }
                    // The value prop is set to the person object itself.
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        {/* Display the person's name */}
                        <span
                          className={`block truncate ${
                            selected ? "font-bold" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {/* Display a check icon if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-gray-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
            {/* Options ends here */}
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
