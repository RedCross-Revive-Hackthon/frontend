import { ReactComponent as HomeIc } from '../assets/svgs/home.svg';
import { Icon } from '../components/icon';
// import { HomeIc } from '../components/icon/icon';
import { styled } from 'styled-components';
const Main = () => {
  return (
    <>
      왜안떠
      <Test />
    </>
  );
};

export default Main;

const Test = styled(Icon.HomeIc)``;
