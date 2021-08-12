import React from "react";

const AlphaKeyboard = (
  { setShowNumKeyboard, input, setInput, handleSubmit },
  ref
) => {
  const rowOne = ["A", "B", "C", "D", "E", "F", "G"];
  const rowTwo = ["H", "I", "J", "K", "L", "M", "N"];
  const rowThree = ["O", "P", "Q", "R", "S", "T", "U"];
  const rowFour = ["V", "W", "X", "Y", "Z", "-", `'`];

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
      <div className="key-board-box" id="show-alpabets">
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
          <span className="arrow-change show-numbers">
            <button onClick={() => setShowNumKeyboard(true)}> 123</button>
          </span>
        </div>
        <div className="key-board-row">{renderRowImp(rowThree)}</div>
        <div className="key-board-row">{renderRowImp(rowFour)}</div>
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
            <button
              onClick={() => {
                setInput("");
              }}>
              CLEAR
            </button>
          </span>
          <span className="search-btn">
            <button onClick={handleSubmit}>SEARCH</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(AlphaKeyboard);
