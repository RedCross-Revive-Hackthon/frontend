import { Checked, NotChecked } from '../components/icon/icon';

import EventImg from '../assets/images/eventImg.png';
import Footer from '../components/common/Footer';
import attendanceBg from '../assets/images/출석체크배경.png';
import attendanceMessage from '../assets/images/출석체크문구.png';
import attendanceTitle from '../assets/images/출석체크타이틀.png';
import { styled } from 'styled-components';
import { useState } from 'react';

const Event = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <AttendanceWrapper>
        <AttendanceTitle src={attendanceTitle} />
        <AttendaceMain>
          <AttendanceMessage src={attendanceMessage} />
          <CheckList>
            {[...Array(30)].map((_, idx) => (
              <CheckContainer
                onClick={() => {
                  idx === 0 && setIsClicked(true);
                }}>
                {idx === 0 && isClicked ? <Checked /> : <NotChecked />}
              </CheckContainer>
            ))}
          </CheckList>
        </AttendaceMain>
      </AttendanceWrapper>
      <ImgContainer src={EventImg} />
      <Footer />
    </>
  );
};

export default Event;

const AttendanceTitle = styled.img`
  width: 16.6rem;
`;

const AttendanceMessage = styled.img`
  margin: 2.4rem 0;
  width: 25.5rem;
`;

const AttendanceWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  background-image: url(${attendanceBg});
  padding-top: 5rem;
`;

const AttendaceMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  border-radius: 1.4rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  background-color: white;
  width: 33.5rem;
  height: 43.6rem;
`;

const CheckList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-gap: 1.4rem;
  width: 25.6rem;
`;

const CheckContainer = styled.div`
  cursor: pointer;
`;

const ImgContainer = styled.img`
  position: absolute;
  top: 62.9rem;
  width: 100%;
`;
