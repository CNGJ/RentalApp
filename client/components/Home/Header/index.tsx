/* eslint-disable react/prop-types */
import React, { useContext, FC, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faUser,
  faUserAstronaut,
  faPowerOff,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../../theme";
import { Icon, WrapperHeader, WrapperIcons } from "./styles";
import { ModalContext } from "../../../Context/ModalContext";
import { ProfileContext } from "../../../Context/ProfileContext";
import { Logout } from "../../UserSession/Logout";
import SearchBar from "../SearchBar";
import { ProfileMenu } from "../ProfileMenu/index";

interface IHeaderProps {
  fixed?: boolean;
}

const Header: FC<IHeaderProps> = ({ fixed }) => {
  const { setShowModal, showModal, setInfoModal } = useContext(ModalContext);
  const { profile } = useContext(ProfileContext);
  const router = useRouter();
  const [showProfileMenu, setProfileMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    console.log("render");
  }, [profile]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfile = () => {
    setProfileMenu(!showProfileMenu);
  };
  const handleNewPublication = () => {
    router.push("/newPublication");
  };

  const logOut = () => {
    setShowModal(!showModal);
    setInfoModal({
      children: <Logout />,
      title: "Cerrar sesión",
    });
  };

  const goHome = () => {
    router.push("/");
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(event.target)) {
      setProfileMenu(false);
    }
  };

  return (
    <>
      <WrapperHeader fixed={fixed}>
        <FontAwesomeIcon
          onClick={goHome}
          icon={faUserAstronaut}
          style={{ color: `${theme.Primary}`, cursor: "pointer" }}
        />
        <SearchBar />

        <WrapperIcons ref={ref}>
          <Icon onClick={handleProfile} tooltip={profile ? profile.name : null}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: `${theme.Primary}` }}
            />
            {showProfileMenu && <ProfileMenu />}
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
