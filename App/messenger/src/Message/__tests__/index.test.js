import Message from "..";
import { render } from "@testing-library/react";

const message = {
    key: '1234',
    sender: 'Me',
    text: 'lorem ipsum',
}

const noAuthorMessage = {
    key: '1234',
    text: 'lorem ipsum',
}

describe('Message', () => {
    it('Message snapshot', () => {
        const renderedMessage = render(<Message messageObj={message} />);

        expect(renderedMessage).toMatchSnapshot()
    })

    it('Message no author', () => {
        const renderedMessage = render(<Message messageObj={noAuthorMessage} />);

        expect(renderedMessage).toMatchSnapshot()
    })
})