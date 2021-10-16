// Core
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
// Firebase
import { serverTimestamp } from 'firebase/firestore';
// Redux
import { setRoomName } from 'Store/room/slice';
import { useAppDispatch, useAppSelector } from 'Store/hooks';
import { getChannelNamefromDb, updateChannelMessagesToDb } from 'DB/firestoreUtils';
import { selectUser } from 'Store/auth/slice';
// Style
import { ChatInputContainer } from './chat.style';

interface ChatInputProps {
  id: string;
  name: string;
}

export const ChatInput = ({ id, name }: ChatInputProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  const handleSendMessage = async (event: KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (!id) {
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      updateChannelMessagesToDb({ id, message, timestamp: serverTimestamp(), user });
      setMessage('');
    }
  };

  useEffect(() => {
    const getChannelName = async () => {
      const channelName = await getChannelNamefromDb(id);
      if (channelName) {
        dispatch(setRoomName(channelName));
      }
    };
    if (id) {
      getChannelName();
    }
  }, [id]);

  return (
    <ChatInputContainer>
      <form>
        <input
          value={message}
          type="text"
          placeholder={`Message #${name || ''}`}
          onKeyDown={handleSendMessage}
          onChange={handleInputChange}
        />
      </form>
    </ChatInputContainer>
  );
};
