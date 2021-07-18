import styled from 'styled-components';
import { UserIcon, HomeIcon, LogoutIcon, FolderAddIcon, HeartIcon } from '@heroicons/react/outline';
import theme from '../../../theme';

export const WrapperHeader = styled.div<{ fixed: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: solid 0.1px ${theme.Terciary};
  background: rgba(238, 242, 255, 0.2);

  ${props =>
    props.fixed &&
    `position: fixed;
     top: 0;
     width: 100%;
     z-index: 2;
     background: rgba(238, 242, 255, 1);
     `}
`;

export const Title = styled.div`
  font-family: ;
`;

export const Icon = styled.div<{ tooltip?: any; logout?: boolean }>`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  position: relative;
  border-radius: 0.5rem;
  cursor: pointer;
  ::after {
    content: '${({ tooltip }) => tooltip}';
    position: absolute;
    top: 80%;
    font-size: 13px;
    left: -25px;
    right: 0;
    width: 5rem;
    font-weight: 350;
    color: ${theme.Terciary};
    margin-top: 5px;
    border-radius: 0.3rem;
    padding: 0.2rem;
    text-align: center;
  }
  :hover {
    ${({ logout }) => (logout ? `background-color: ${theme.Red};` : `background-color: ${theme.Terciary};`)}
    color: white;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
`;

export const User = styled(UserIcon)`
  width: 1.5rem;
`;

export const Home = styled(HomeIcon)`
  width: 1.5rem;
  cursor: pointer;
`;

export const Logout = styled(LogoutIcon)`
  width: 1.5rem;
`;
export const Collection = styled(FolderAddIcon)`
  width: 1.5rem;
`;

export const Heart = styled(HeartIcon)`
  width: 1.5rem;
`;
