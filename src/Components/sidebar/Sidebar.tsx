// Core
import { useState, useEffect, FormEvent } from 'react';
// Modal
import Modal from 'react-modal';
// Firebase
import { DocumentData, collection, onSnapshot } from 'firebase/firestore';
import { db } from 'Config/index';
// Redux
import { useAppDispatch, useAppSelector } from 'Store/hooks';
import { setChannels, getChannels } from 'Store/app/slice';

// Mui
import * as MuiIcons from 'Assets/index';
// Utils
import { addNewChannel } from 'DB/firestoreUtils';
// Componerts
import { SidebarOption } from './SidebarOption';
// Style
import {
  SidebarContainer,
  SidebarHeader,
  SidebarInfo,
  sidebarModalStyle,
  StyledCreateIcon,
  StyledFiberManualRecordIcon,
} from './sidebar.style';

export const Sidebar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const channels = useAppSelector(getChannels);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'rooms'), (query) => {
      const fetchedChannels: DocumentData[] = [];
      query.forEach((document) => {
        fetchedChannels.push({ data: document.data(), id: document.id });
      });
      dispatch(setChannels(fetchedChannels));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const channelName = event.currentTarget.channelName.value;
    if (channelName) {
      addNewChannel(channelName);
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h2>PAPA FAM HQ</h2>
            <h3>
              <StyledFiberManualRecordIcon />
              Dark Light
            </h3>
          </SidebarInfo>
          <StyledCreateIcon />
        </SidebarHeader>
        <SidebarOption Icon={MuiIcons.InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={MuiIcons.InboxIcon} title="Mentions & reactions" />
        <SidebarOption Icon={MuiIcons.DraftIcon} title="Saved items" />
        <SidebarOption Icon={MuiIcons.BookmarkBorderIcon} title="Channel browser" />
        <SidebarOption Icon={MuiIcons.PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={MuiIcons.AppsIcon} title="Apps" />
        <SidebarOption Icon={MuiIcons.FileCopyIcon} title="File browser" />
        <SidebarOption Icon={MuiIcons.ExpendLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icon={MuiIcons.ExpendMoreIcon} title="Channels" />
        <hr />
        <SidebarOption
          Icon={MuiIcons.AddIcon}
          title="Add Channel"
          addChannelOption
          openModal={setIsModalOpen}
        />
        {channels &&
          channels.map(({ data, id }) => (
            <SidebarOption key={id} id={id} Icon={null} title={data.name} addChannelOption />
          ))}
      </SidebarContainer>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        style={sidebarModalStyle}
        contentLabel="App modal"
        // onAfterOpen={() => console.log('modal open')}
        onRequestClose={handleModalClose}
      >
        <button type="button" onClick={handleModalClose}>
          X
        </button>
        <div>Add channel</div>
        <form onSubmit={handleSubmit}>
          <input id="channelName" type="text" />
          <button type="button" onClick={handleModalClose}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </form>
      </Modal>
    </>
  );
};
