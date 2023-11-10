import React from "react";

// modal layout
import ModalLayout from "../../containers/ModalLayout/ModalLayout";

function ContactsTransactionBox({ person, isOpen, toggleModal }) {
  return (
    <>
      <ModalLayout
        title="Transaction Box"
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        <div className="px-2">
          {person && (
            <>
              <h2>{person.name}</h2>
              {Array.isArray(person.transactions) && (
                <>
                  {person.transactions.map((transaction, i) => (
                    <div
                      className="flex text-xs justify-between mt-2 border-b-2 border-gray-500 border-dotted "
                      key={i}
                    >
                      <p>{transaction.date}</p>
                      <p>{transaction.time}</p>
                      <p className="font-bold"> {transaction.amount}</p>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </ModalLayout>
    </>
  );
}

export default ContactsTransactionBox;
