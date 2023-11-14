import React, { useState } from "react";

// modal
import ContactsTransactionBox from "../../Modals/Home/ContactsTransactionBox";
import PayBox from "../../Modals/Home/PayBox";

// custom Hook
import useModal from "../../hooks/useModal";
import useLongPress from "../../hooks/useLongPress";

// dummy data
import { people } from "../../data/payRail-MVP";

function ContactList({ selectedPerson = {} }) {
  // Is used for <ContactsTransactionBox/> modal
  const { isOpen, openModal, closeModal, toggleModal } = useModal();

  // Is used for <PayBox/> modal
  const {
    isOpen: isPayBoxOpen,
    openModal: openPayBoxModal,
    closeModal: closePayBoxModal,
    toggleModal: togglePayBoxModal,
  } = useModal();

  const [selected, setSelected] = useState(null);

  const longPressActions = useLongPress(
    () => {
      openPayBoxModal();
    },
    (data) => {
      setSelected(data);
      openModal();
    }
  );

  // date sorting
  const sortedData =
    selectedPerson && selectedPerson.name
      ? people
          .filter((person) => person.name === selectedPerson.name)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      : people.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="mt-3">
      {/* checks if people array is empty then it will display "No Transactions Yet" */}
      {sortedData.length === 0 ? (
        <div className=" text-center pt-4">No Contacts Yet</div>
      ) : (
        sortedData.map((data, i) => (
          <div {...longPressActions(data)} key={i}>
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
            <div className="flex text-sm justify-between border-b-2 border-dotted border-gray-900">
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

      {/* modal for opening the PayBox */}
      {isPayBoxOpen && (
        <PayBox isOpen={isPayBoxOpen} toggleModal={togglePayBoxModal} />
      )}
    </div>
  );
}

export default ContactList;
