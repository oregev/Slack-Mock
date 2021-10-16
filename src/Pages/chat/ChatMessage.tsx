import { DocumentData } from 'firebase/firestore';
import { MessageContainer, MessgeInfo } from './chat.style';

export const ChatMessage = ({ messageData }: DocumentData): JSX.Element => {
  const { message, timestamp, user } = messageData;
  return (
    <MessageContainer>
      <img src={user.image} alt="user" />
      <MessgeInfo>
        <h4>
          user name <span>{timestamp?.toDate().toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessgeInfo>
    </MessageContainer>
  );
};
