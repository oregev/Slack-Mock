// Core
import { getRoomMessages, getRoomName } from 'DB/firestoreUtils';
import { Dispatch, SetStateAction } from 'react';
// import { setChannel } from 'Store/room/slice';
import { useAppDispatch } from 'Store/hooks';
import { setRoomName, setRoomMessages, setRoomId } from 'Store/room/slice';
// Styles
import { SidebarOptionContainer, SidebarOptionChannel } from './sidebarOption.style';

interface SidebarOptionsProps {
  title: string;
  Icon: any;
  id?: string;
  addChannelOption?: boolean;
  openModal?: Dispatch<SetStateAction<boolean>> | null;
}

export const SidebarOption = ({
  title,
  Icon,
  id,
  addChannelOption,
  openModal,
}: SidebarOptionsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const selectChannel = async () => {
    if (id) {
      try {
        const roomData = await getRoomName(id);
        dispatch(setRoomName(roomData?.name));
        const messages = await getRoomMessages(id);
        dispatch(setRoomMessages(messages));
        dispatch(setRoomId(id));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('ERROR: geting selected data from channel', error);
      }
    }
  };

  const handleOptionClick = () => {
    if (addChannelOption && openModal) {
      openModal(true);
    } else if (addChannelOption) {
      selectChannel();
    }
  };

  return (
    <SidebarOptionContainer onClick={handleOptionClick}>
      {Icon && <Icon fontSize="medium" style={{ padding: 2, marginRight: 6 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

SidebarOption.defaultProps = {
  id: null,
  addChannelOption: false,
  openModal: null,
};
