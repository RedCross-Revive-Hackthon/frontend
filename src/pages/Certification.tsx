import { isAndroid, isIOS } from 'react-device-detect';

import CerificationImg from '../assets/svgs/blood_certification.png';
import React from 'react';
import Text from '../components/common/Text';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router';
import { useRef } from 'react';

const Certification = () => {
  const navigate = useNavigate();
  const handleDeepLink = () => {
    // window.location.replace('https://www.instagram.com/create/story'); //지금 없음
    // 함수가 실행되면 모바일 환경에서 인스타그램 앱으로 넘어감

    // window.location.replace('intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end');
    // window.location.replace('instagram-stories://share'); // 게시글작성으로 바로 넘어가는 Scheme + 데스크탑에선 안됨

    // window.location.replace('intent://instagram.com/_u/ljho6o8/#Intent;package=com.instagram.android;scheme=https;end');
    //안되는 옛날 스킴

    if (isIOS) {
      return window.location.replace('https://www.instagram.com/create/story');
    }
    if (isAndroid) {
      return window.location.replace('intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end');
    }
    window.location.replace('https://www.instagram.com/');
  };

  const imageRef = useRef(null);

  const downloadImage = () => {
    if (imageRef.current) {
      html2canvas(imageRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'myBloodCertification.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };
  return (
    <CertificationWrapper>
      <CertificationImage src={CerificationImg} ref={imageRef}></CertificationImage>
      <Text font="name2" color={theme.colors.gray02}>
        이미지 저장 후 인스타그램 공유 버튼을 눌러주세요
      </Text>
      <PositiveBtnWrapper>
        <PositiveBtn onClick={downloadImage}>
          <Text font="point2" color={theme.colors.white}>
            이미지 저장
          </Text>
        </PositiveBtn>
        <PositiveBtn onClick={handleDeepLink}>
          <Text font="point2" color={theme.colors.white}>
            인스타그램 공유
          </Text>
        </PositiveBtn>
      </PositiveBtnWrapper>
      <NormalBtn onClick={() => navigate('/')}>
        <Text font="point2" color={theme.colors.black}>
          메인화면으로 돌아가기
        </Text>
      </NormalBtn>
    </CertificationWrapper>
  );
};

const CertificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
`;

const PositiveBtnWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
`;

const PositiveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.4rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.deepred};
  width: 16.2rem;
  height: 5.7rem;
`;
const NormalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.4rem;
  border-radius: 1.4rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.white};
  width: 33.4rem;
  height: 5.7rem;
`;

const CertificationImage = styled.img``;
export default Certification;
