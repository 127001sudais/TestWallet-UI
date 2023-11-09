import React, { useState } from "react";

// modal
import ContactsTransactionBox from "../../Modals/Home/ContactsTransactionBox";

// custom Hook
import useModal from "../../hooks/useModal";

// dummy data
import { people } from "../../data/payRail-MVP";

function ContactList({ selectedPerson = {} }) {
  const { isOpen, openModal, closeModal, toggleModal } = useModal();

  const [selected, setSelected] = useState(null);

  //
  const handleModalOpen = (data) => {
    setSelected(data);
    openModal();
  };

  // date sorting
  const sortedData =
    selectedPerson && selectedPerson.name
      ? people
          .filter((person) => person.name === selectedPerson.name)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      : people.sort((a, b) => new Date(b.date) - new Date(a.date));

  // console.log("people", people.length);
  // console.log("sortedData", sortedData.length);
  // console.log("selectedPerson", selectedPerson);
  return (
    <div className="mt-3">
      {/* checks if people array is empty then it will display "No Transactions Yet" */}
      {sortedData.length === 0 ? (
        <div className=" text-center pt-4">No Contacts Yet</div>
      ) : (
        sortedData.map((data, i) => (
          <div
            className="flex flex-col"
            key={i}
            onClick={() => handleModalOpen(data)}
          >
            {/* this is for date and time */}
            {(() => {
              const lastTransaction =
                data.transactions[data.transactions.length - 1];
              return (
                <div
                  className="flex text-xs justify-between rounded-sm bg-gray-200"
                  key={lastTransaction.id}
                >
                  <p className="">{lastTransaction.date}</p>
                  <p>{lastTransaction.time}</p>
                </div>
              );
            })()}

            {/*  for the name and amount */}
            <div className="flex text-sm justify-between border-b-2 border-dotted border-gray-400">
              <p>{data.name}</p>

              {/* for the MVP no color change on the amount wether it is positive or negative */}
              {(() => {
                const lastAmount =
                  data.transactions[data.transactions.length - 1];
                return (
                  <p
                    className={`text-${
                      lastAmount.amount >= 0 ? "black" : "black"
                    }`}
                  >
                    {lastAmount.amount >= 0
                      ? lastAmount.amount
                      : `-${Math.abs(lastAmount.amount)}`}
                  </p>
                );
              })()}
            </div>
            <br />
          </div>
        ))
      )}
      {/* modal for showing transactions with the Contacts */}
      {isOpen && selected && (
        <ContactsTransactionBox
          isOpen={isOpen}
          toggleModal={toggleModal}
          person={selected}
        />
      )}
    </div>
  );
}

export default ContactList;
