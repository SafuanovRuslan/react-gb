import './index.css';
import Message from '../Message';

function Messages({ messageList }) {
    return (
        <div className="messages">
            {messageList.map((message) => {
                return (
                    <Message messageObj={ message } key={message.key}/>
                );
            })}
        </div>
    );
}
  
export default Messages;