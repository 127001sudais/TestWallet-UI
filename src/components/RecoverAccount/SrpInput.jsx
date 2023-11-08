import React, { useState, useCallback } from "react";

import { isValidMnemonic } from "@ethersproject/hdnode";

import { parseSecretRecoveryPhrase } from "../../utils/RecoverOldAccount/parse-secret-recovery-phrase";

// Import for icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RestoreIcon from "@mui/icons-material/Restore";

// Importing Banner
import Notice from "../Notice/Notice";

// Hard coded default number of words in a Secret Recovery Phrase
const defaultNumberOfWords = 12;

// Main component function
function SrpInput() {
  // State variables to manage the SRP input ,visibility, related errors and paste failures
  const [draftSrp, setDraftSrp] = useState(
    new Array(defaultNumberOfWords).fill("")
  );
  const [showSrp, setShowSrp] = useState(
    new Array(defaultNumberOfWords).fill(false)
  );
  const [srpError, setSrpError] = useState("");
  const [pasteFailed, setPasteFailed] = useState(false);

  // Function to toggle the visibility of a specific SRP word
  const toggleShowSrp = useCallback((index) => {
    setShowSrp((currentShowSrp) => {
      const newShowSrp = currentShowSrp.slice();
      newShowSrp[index] = !newShowSrp[index];
      return newShowSrp;
    });
  }, []);

  // Function to handle changes in SRP words
  const onSrpWordChange = useCallback(
    (index, newWord) => {
      const newSrp = draftSrp.slice();
      newSrp[index] = newWord.trim();

      let newSrpError = "";
      const joinedDraftSrp = newSrp.join(" ").trim();

      if (newSrp.some((word) => word !== "")) {
        if (newSrp.some((word) => word === "")) {
          newSrpError = "All words are required.";
        } else if (joinedDraftSrp !== joinedDraftSrp.toLowerCase()) {
          newSrpError =
            "The Secret Recovery Phrase should not contain uppercase letters.";
        } else if (!isValidMnemonic(joinedDraftSrp)) {
          newSrpError = "The SRP is not valid.";
        }
      }

      // Update the SRP and error state
      setDraftSrp(newSrp);
      setSrpError(newSrpError);
    },
    [draftSrp]
  );

  // Funtion to handle pasting of SRP
  const onSrpPaste = useCallback(async (rawSrp) => {
    const parsedSrp = parseSecretRecoveryPhrase(rawSrp);

    // changed
    if (!parsedSrp.valid) {
      setPasteFailed(true);
      setSrpError(parsedSrp.error);
      return;
    }

    const newSrp = parsedSrp.phrase.split(" ");

    // changed
    if (newSrp.length > defaultNumberOfWords) {
      setPasteFailed(true);
      setSrpError("The Secret Recovery Phrase has too many words.");
      return;
    }

    // Update the SRP and reset pasteFailed state
    setDraftSrp(newSrp);
    setPasteFailed(false);

    try {
      await navigator.clipboard.writeText(""); // clears the clipboard
    } catch (error) {
      console.error("failed to clear clipboard", error);
    }
  }, []);

  return (
    <div className="flex flex-col ">
      {/* Render SRP error message if present */}
      {srpError && <Notice text={srpError} />}
      {/* Render the SRP input fields */}
      {[...Array(defaultNumberOfWords).keys()].map((index) => {
        return (
          <div className=" mt-2 text-xs " key={index}>
            <div className="flex justify-evenly">
              <p className="">{`${index + 1}.`}</p>

              <input
                className="border-2 rounded-md"
                type={showSrp[index] ? "text" : "password"}
                onChange={(e) => {
                  e.preventDefault();
                  onSrpWordChange(index, e.target.value);
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  onSrpPaste(e.clipboardData.getData("text"));
                }}
                value={draftSrp[index]}
                autoComplete="off"
              />

              <button onClick={() => toggleShowSrp(index)}>
                {showSrp[index] ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>
        );
      })}

      {/* Render paste failure message iif pasted SRP is invalid */}

      {/* Restore button */}
      <div className="text-center my-2">
        <button>
          <RestoreIcon className="" />
        </button>
      </div>
    </div>
  );
}

export default SrpInput;
