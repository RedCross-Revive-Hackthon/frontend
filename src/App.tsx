import GlobalStyle from './styles/globalStyles';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { styled } from 'styled-components';
import { theme } from './styles/theme';
import { useEffect } from 'react';

const MobileWrapper = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white};

  padding-right: 2rem;
  padding-left: 2rem;
  max-width: var(--app-max-width, 37.5rem);
  min-height: calc(var(--vh, 1vh) * 100);
`;

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const maxWidth = Math.min(37.5, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}rem`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MobileWrapper>
            <Router />
          </MobileWrapper>
        </ThemeProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
