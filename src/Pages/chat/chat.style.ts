import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

export const ChatHeaderSection = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > p {
    display: flex;
    align-items: center;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
  }
`;

export const ChatMessages = styled.div``;
export const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;

export const MessageContainer = styled.div``;
export const MessgeInfo = styled.div``;
