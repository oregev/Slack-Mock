// Core
import { useState, useEffect } from 'react';
// Firebase
import { DocumentData, collection, onSnapshot } from 'firebase/firestore';
import { db } from 'Config/index';
// Redux
import { selectRoomId, selectRoomMessages, selectRoomName } from 'Store/room/slice';
import { useAppSelector } from 'Store/hooks';
// Utils
import { getChannelMessagesfromDb } from 'DB/firestoreUtils';
// Icons
import { InfoOutlinedIcon, StarBorderOutlinedIcon } from 'Assets';
// Components
import { ChatInput } from './ChatInput';
// Style
import { ChatContainer, ChatHeader, ChatHeaderSection, ChatMessages } from './chat.style';
import { ChatMessage } from './ChatMessage';

export const Chat = (): JSX.Element => {
  const roomId = useAppSelector(selectRoomId);
  const roomName = useAppSelector(selectRoomName);
  const roomMessages = useAppSelector(selectRoomMessages);

  // const [roomMessages, setMessages] = useState<DocumentData[]>();

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, 'rooms', roomId, 'messages'), (query) => {
  //     const fetchedMessages: DocumentData[] = [];
  //     query.forEach((message) => {
  //       fetchedMessages.push({ data: message.data(), id: message.id });
  //     });
  //     setMessages(fetchedMessages);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const getRoomChatHistory = async () => {
      const history = await getChannelMessagesfromDb(roomId);
      if (history) {
        // setMessages(history);
      }
    };
    if (roomId) {
      getRoomChatHistory();
    }
  }, [roomId]);

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderSection>
          <h4>
            <strong>#{roomName}</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </ChatHeaderSection>
        <ChatHeaderSection>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </ChatHeaderSection>
      </ChatHeader>
      <ChatMessages>
        {roomMessages &&
          roomMessages.map((messageData: DocumentData) => (
            <ChatMessage key={messageData.id} messageData={messageData} />
          ))}
      </ChatMessages>
      <ChatInput id={roomId} name={roomName} />
    </ChatContainer>
  );
};
