// Firebase
import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  DocumentData,
  FieldValue,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from 'Config/index';
// Types
import { UserData } from 'Store/auth/slice';

/**
 * @name addNewChannel
 * @description This function addes new channel to the db 'rooms' collection.
 * @param name - name of the new channel.
 */
export const addNewChannel = async (name: string): Promise<void> => {
  if (name) {
    try {
      await addDoc(collection(db, 'rooms'), {
        name,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error adding channel to DB,', error);
    }
  }
};

/**
 * @name getSelectedRoomName
 * @description This function gets the selected room name.
 * @param id - The room id
 * @returns An object with { name: string } field.
 */
export const getRoomName = async (id: string): Promise<DocumentData | null> => {
  const docRef = doc(db, 'rooms', id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Problem with getting room name from db', error);
  }
  return null;
};

/**
 * @name getRoomMessages
 * @description This function retrives the messages for a room form the db.
 * @param id - The room id
 * @returns An object with room data of an empty array.
 */
export const getRoomMessages = async (id: string): Promise<DocumentData[] | []> => {
  const messagesCollectionRef = collection(db, 'rooms', id, 'messages');
  const messagesCollection: DocumentData[] = [];
  try {
    const quearySanpshot = await getDocs(messagesCollectionRef);
    quearySanpshot.forEach((messageData) => {
      messagesCollection.push({
        message: messageData.data().message,
        timestamp: messageData.data().timestamp,
        user: messageData.data().user,
      });
    });
    return messagesCollection;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Problem with getting channel name from db', error);
  }
  return [];
};

// ==================================================================================

export const getSelectedChannel = async (id: string): Promise<DocumentData | null> => {
  // const data: DocumentData;
  const docRef = doc(db, 'rooms', id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    // const quearySanpshot = await getDocs(collection(db, 'rooms', id, 'messages'));
    // quearySanpshot.forEach((document) => {
    //   data.push(document.data());
    // });
    // return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Problem with getting channels from db', error);
  }
  return null;
};

export const getSelectedChannels = async (): Promise<DocumentData[]> => {
  try {
    const quearySanpshot = await getDocs(collection(db, 'rooms'));
    const data: DocumentData[] = [];
    quearySanpshot.forEach((document) => {
      data.push(document.data());
    });
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Problem with getting channels from db', error);
  }
  return [];
};

export const getChannelNamefromDb = async (id: string): Promise<string | null> => {
  try {
    const quearySanpshot = await getDocs(collection(db, 'rooms'));
    let data: DocumentData | null = null;
    quearySanpshot.forEach((document) => {
      if (document.id === id) {
        data = document.data().name;
      }
    });
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Problem with getting channel name from db', error);
  }
  return null;
};

interface ChannelMessageProps {
  id: string;
  message: string;
  timestamp: FieldValue;
  user: UserData;
}

export const updateChannelMessagesToDb = async ({
  id,
  message,
  timestamp,
  user,
}: ChannelMessageProps): Promise<void> => {
  try {
    const documentRef = doc(db, 'rooms', id);
    const messegeCollection = collection(documentRef, 'messages');
    await addDoc(messegeCollection, {
      message,
      timestamp,
      user,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Updating the room chat error'`, error);
  }
};

export const getChannelMessagesfromDb = async (id: string): Promise<DocumentData[] | null> => {
  try {
    const messagesRef = collection(db, 'rooms', id, 'messages');
    const messagesQueary = query(messagesRef, orderBy('desc'));
    const quearySanpshot = await getDocs(messagesQueary);
    let data: DocumentData | null = null;
    quearySanpshot.forEach((message) => {
      if (message.id === id) {
        data = message.data().name;
      }
    });
    // console.log('data', data);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Problem with getting channel name from db', error);
  }
  return null;
};
