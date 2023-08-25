import { Close } from '../icon/icon';
import Text from '../common/Text';
import { modalContentState } from '../../states/modalContentState';
import { splitNumberToEqualSum } from '../../utils/numberQuarter';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useRecoilValue } from 'recoil';
interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const modalContent = useRecoilValue(modalContentState);
  const splitedNumbers = splitNumberToEqualSum(modalContent.score);
  return (
    <ModalWrapper>
      <Content>
        <Title>
          <StyledClose onClick={onClose} />
          <Text font="body2" color={theme.colors.black}>
            점수 현황
          </Text>
        </Title>
        <Main>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              헌혈
            </Text>
            <Text font="body5" color={theme.colors.black}>
              {splitedNumbers[0].toLocaleString()}점
            </Text>
          </DetailOneLine>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              헌혈 증서 나눔
            </Text>
            <Text font="body5" color={theme.colors.black}>
              {splitedNumbers[1].toLocaleString()}점
            </Text>
          </DetailOneLine>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              지정 헌혈
            </Text>
            <Text font="body5" color={theme.colors.black}>
              {splitedNumbers[2].toLocaleString()}점
            </Text>
          </DetailOneLine>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              커뮤니티
            </Text>
            <Text font="body5" color={theme.colors.black}>
              {splitedNumbers[3].toLocaleString()}점
            </Text>
          </DetailOneLine>
        </Main>
        <Divider />
        <DetailOneLine>
          <Text font="body2" color={theme.colors.black}>
            총점
          </Text>
          <Text font="body2" color={theme.colors.deepred}>
            {modalContent.score.toLocaleString()}점
          </Text>
        </DetailOneLine>
      </Content>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  display: flex;

  position: fixed;
  align-items: center;
  justify-content: center;

  width: 33.5rem;
`;

const Content = styled.aside`
  position: fixed;
  border-radius: 1.4rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background-color: ${theme.colors.white};
  padding: 0 2.8rem;
  width: 28rem;
  height: 36rem;
`;

const StyledClose = styled(Close)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.9rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-top: 6.6rem;
`;

const DetailOneLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  margin: 1.8rem 0;
  border-bottom: 0.1rem solid #d9d9d9;
`;
