import './Message.css';

function Message(props) {
    return (
        <div className="message">
            <div className="message__head">
                <div className="message__sender">{props.sender}</div>
                <div className="message__time">{new Date().getDate()}.{new Date().getMonth() + 1} {new Date().getHours()}:{new Date().getMinutes()}</div>
            </div>
            <div className="message__text">{props.text}</div>
            <div className="message__tail"></div>
        </div>
    );
}
  
export default Message;