import './Messages.css';

function Messages({ messageList }) {
    return (
        <div className="messages">
            {messageList.map((message) => {
                return (
                    <div className="message" key={message.key}>
                        <div className="message__head">
                            <div className="message__sender">{message.sender}</div>
                            <div className="message__time">{new Date().getDate()}.{new Date().getMonth() + 1} {new Date().getHours()}:{new Date().getMinutes()}</div>
                        </div>
                        <div className="message__text">{message.text}</div>
                        <div className="message__tail"></div>
                    </div>
                );
            })}
        </div>

    );
}
  
export default Messages;