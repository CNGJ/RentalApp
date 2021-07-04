/* eslint-disable react/prop-types */
import React, { useContext, FC, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Icon, WrapperHeader, WrapperIcons, User, Home, Logout, Collection } from './styles';
import { ModalContext } from '../../../Context/ModalContext';
import { ProfileContext } from '../../../Context/ProfileContext';
import SearchBar from '../SearchBar';
import ProfileMenu from '../ProfileMenu/index';
import Login from '../../UserSession/Login';
import LogoutComponent from '../../UserSession/Logout';

interface IHeaderProps {
  fixed?: boolean;
}

const Header: FC<IHeaderProps> = ({ fixed }) => {
  const { setShowModal, showModal, setInfoModal } = useContext(ModalContext);
  const { profile } = useContext(ProfileContext);
  const router = useRouter();
  const [showProfileMenu, setProfileMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = event => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(event.target)) {
      setProfileMenu(false);
    }
  };
  useEffect(() => {
    console.log('render');
  }, [profile]);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfile = () => {
    if (profile) {
      setProfileMenu(!showProfileMenu);
    } else {
      setShowModal(!showModal);
      setInfoModal({
        children: <Login />,
        title: 'Inicia Sesion'
      });
    }
  };
  const handleNewPublication = () => {
    router.push('/newPublication');
  };

  const logOut = () => {
    setShowModal(!showModal);
    setInfoModal({
      children: <LogoutComponent />,
      title: 'Cerrar sesión'
    });
  };

  const goHome = () => {
    router.push('/');
  };

  return (
    <>
      <WrapperHeader fixed={fixed}>
        <Home onClick={goHome} />
        <SearchBar />

        <WrapperIcons ref={ref}>
          <Icon onClick={handleProfile} tooltip={profile ? profile.name : null}>
            <User />
            {showProfileMenu && <ProfileMenu />}
          </Icon>
          {profile && (
            <>
              <Icon onClick={handleNewPublication}>
                <Collection />
              </Icon>
              <Icon onClick={logOut} logout>
                <Logout />
              </Icon>
            </>
          )}
        </WrapperIcons>
      </WrapperHeader>
    </>
  );
};

export default Header;
