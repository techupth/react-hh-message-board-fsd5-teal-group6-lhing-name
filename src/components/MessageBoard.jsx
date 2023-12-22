import { useState } from "react";
function MessageBoard() {
  const [newMessage, setNewMessage] = useState(""); // state ของ input
  const [message, setMessage] = useState([]); // state ของ message

  //ปุ่มเพิ่ม message จะถูกเพิ่มใน button submit
  const addMessage = (event) => {
    event.preventDefault();
    const addNewMessage = [...message];
    addNewMessage.push(newMessage);
    setMessage(addNewMessage);
  };
  // ปุ่มลบ message ถูกเพิ่มใน button x
  const deleteMessage = (messageIndex) => {
    const deleteNewMessage = [...message];
    deleteNewMessage.splice(messageIndex, 1);
    setMessage(deleteNewMessage);
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
            value={newMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
