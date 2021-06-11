import React, { useContext, FC, useEffect } from "react";
import { User, Group } from "../../Icons";
import SearchBox from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, WrapperHeader, WrapperIcons } from "./styles";
import { theme } from "../../theme";
import { useRouter } from "next/router";
import {
  faUser,
  faUserAstronaut,
  faUserCircle,
  faUserCog,
  faUsers,
  faPowerOff,
  faFolderPlus,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ModalContext } from "../../Context/ModalContext";
import { ProfileContext } from "../../Context/ProfileContext";
import { Login } from "../Login";

interface IHeaderProps {
  fixed?: boolean;
}

const Header: FC<IHeaderProps> = ({ fixed }) => {
  const { setShowModal, showModal, setInfoModal, ToastInfo } =
    useContext(ModalContext);
  const { profile, refetch } = useContext(ProfileContext);
  const router = useRouter();

  useEffect(() => {
    console.log("render");
  }, [profile]);

  const handleProfile = () => {
    setShowModal(!showModal);
    setInfoModal({
      children: <Login />,
    });
  };
  const handleNewPublication = () => {
    router.push("/newPublication");
  };

  const logOut = () => {
    localStorage.removeItem("travel-token");
    refetch();
    ToastInfo("Has finalizado sesion");
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <WrapperHeader fixed={fixed}>
        <FontAwesomeIcon
          onClick={goHome}
          icon={faUserAstronaut}
          style={{ color: `${theme.Primary}`, cursor: "pointer" }}
        />
        <SearchBox />

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
          {true && (
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
