import styled from 'styled-components';

const Line = () => {
  return (
    <>
      <LineHr></LineHr>
    </>
  );
};

const LineHr = styled.hr`
  opacity: 0.5;
  width: 33.5rem;
  stroke-width: 1px;
  /* stroke: var(--white, #fff); */
  stroke: #d9d9d9;
`;

export default Line;
