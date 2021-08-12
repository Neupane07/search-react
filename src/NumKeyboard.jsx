import React from "react";

const NumKeyboard = (
  { setShowNumKeyboard, input, setInput, handleSubmit },
  ref
) => {
  const rowOne = [1, 2, 3, "&", "#", "(", ")"];
  const rowTwo = [4, 5, 6, "@", "!", "?", ":"];
  const rowThree = [7, 8, 9, 0, ".", "_", "="];
  const renderRowImp = (arr) => {
    return arr.map((button) => {
      return (
        <>
          <span className="key" key={button}>
            <button
              onClick={() => {
                setInput(input + button);
                if (ref.current) {
                  ref.current.focus();
                }
              }}>
              {button}
            </button>
          </span>
        </>
      );
    });
  };

  const handleBackspace = () => {
    setInput(input.substr(0, input.length - 1));
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <>
      <div className="key-board-box" id="show-numbers">
        <div className="key-board-row">
          {renderRowImp(rowOne)}
          <span className="arrow-change">
            <button onClick={handleBackspace}>
              <img src="assets/images/icons/clear-icon.png" alt="clear icon" />
            </button>
          </span>
        </div>
        <div className="key-board-row">
          {renderRowImp(rowTwo)}
          <span className="arrow-change show-alpabets">
            <button onClick={() => setShowNumKeyboard(false)}>&amp; ABC</button>
          </span>
        </div>
        <div className="key-board-row">{renderRowImp(rowThree)}</div>
        <div className="key-board-row">
          <span className="space-clear">
            <button
              onClick={() => {
                setInput(input + " ");
                if (ref.current) {
                  ref.current.focus();
                }
              }}>
              SPACE
            </button>
          </span>
          <span className="space-clear">
            <button onClick={() => setInput("")}>CLEAR</button>
          </span>
          <span className="search-btn">
            <button onClick={handleSubmit}>SEARCH</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(NumKeyboard);
