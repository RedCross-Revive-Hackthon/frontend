import React from 'react';
import { styled } from 'styled-components';
const ThemeTest = () => {
  return (
    <MainComponentsWrapper>
      <Head1>head1</Head1>
      <Head2>head2</Head2>
      <Head3>head3</Head3>
      <Name1>name1</Name1>
      <Name2>name2</Name2>
      <Univ1>univ1</Univ1>
      <Univ2>univ2</Univ2>
      <Point1>point1</Point1>
      <Point2>point2</Point2>
    </MainComponentsWrapper>
  );
};

export default ThemeTest;

const MainComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head1 = styled.span`
  ${({ theme }) => theme.fonts.head1}
  color:${({ theme }) => theme.colors.deepred};
`;

const Head2 = styled.span`
  width: 10rem;
  ${({ theme }) => theme.fonts.head2}
  background-color:${({ theme }) => theme.colors.redorange_gra_00};
`;

const Head3 = styled.span`
  ${({ theme }) => theme.fonts.head3}
`;

const Name1 = styled.span`
  ${({ theme }) => theme.fonts.name1}
`;

const Name2 = styled.span`
  ${({ theme }) => theme.fonts.name2}
`;

const Univ1 = styled.span`
  ${({ theme }) => theme.fonts.univ1}
`;
const Univ2 = styled.span`
  ${({ theme }) => theme.fonts.univ2}
`;
const Point1 = styled.span`
  ${({ theme }) => theme.fonts.point1}
`;
const Point2 = styled.span`
  ${({ theme }) => theme.fonts.point2}
`;
