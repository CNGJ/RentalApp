/* eslint-disable react/prop-types */
import React, { useContext, FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import {
  faUser,
  faUserAstronaut,
  faPowerOff,
  faFolderPlus,
} from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../../theme';
import { Icon, WrapperHeader, WrapperIcons } from './styles';
import { ModalContext } from '../../../Context/ModalContext';
import { ProfileContext } from '../../../Context/ProfileContext';
import { Login } from '../../UserSession/Login';
import { Logout } from '../../UserSession/Logout';
import SearchBar from '../SearchBar';

interface IHeaderProps {
  fixed?: boolean;
}

const Header: FC<IHeaderProps> = ({ fixed }) => {
  const {
    setShowModal, showModal, setInfoModal,
  } = useContext(ModalContext);
  const { profile } = useContext(ProfileContext);
  const router = useRouter();

  useEffect(() => {
    console.log('render');
  }, [profile]);

  const handleProfile = () => {
    setShowModal(!showModal);
    setInfoModal({
      children: <Login />,
    });
  };
  const handleNewPublication = () => {
    router.push('/newPublication');
  };

  const logOut = () => {
    setShowModal(!showModal);
    setInfoModal({
      children: <Logout />,
      title: 'Cerrar sesión',
    });
  };

  const goHome = () => {
    router.push('/');
  };

  return (
    <>
      <WrapperHeader fixed={fixed}>
        <FontAwesomeIcon
          onClick={goHome}
          icon={faUserAstronaut}
          style={{ color: `${theme.Primary}`, cursor: 'pointer' }}
        />
        <SearchBar />

        <WrapperIcons>
          <Icon onClick={handleProfile} tooltip={profile ? profile.name : null}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: `${theme.Primary}` }}
            />
            {/* {profile && <p> {profile.name} </p>} */}
          </Icon>
          {/* <Icon>
            <FontAwesomeIcon
              icon={faUsers}
              style={{ color: `${theme.Primary}` }}
            />
          </Icon> */}
          {profile && (
            <>
              <Icon onClick={handleNewPublication}>
                <FontAwesomeIcon
                  icon={faFolderPlus}
                  style={{ color: `${theme.Primary}` }}
                />
              </Icon>
              <Icon onClick={logOut}>
                <FontAwesomeIcon
                  icon={faPowerOff}
                  style={{ color: `${theme.Primary}` }}
                />
              </Icon>
            </>
          )}
        </WrapperIcons>
      </WrapperHeader>
    </>
  );
};

export default Header;
