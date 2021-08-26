import MessageList from "..";
import { render } from "@testing-library/react";

const messages = [
    {
        key: '1',
        sender: 'Me',
        text: 'lorem ipsum 1',
    },
    {
        key: '2',
        sender: 'Me',
        text: 'lorem ipsum 2',
    },
    {
        key: '3',
        sender: 'Me',
        text: 'lorem ipsum 3',
    },{
        key: '4',
        sender: 'Me',
        text: 'lorem ipsum 4',
    }
]

describe('Message', () => {
    it('MessageList snapshot', () => {
        const renderedMessageList = render(<MessageList messageList={messages} />);

        expect(renderedMessageList).toMatchSnapshot()
    })

    it('Message no iterable value', () => {
        const renderedMessageList = render(<MessageList messageList={null} />);

        expect(renderedMessageList).toMatchSnapshot()
    })
})