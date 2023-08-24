import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
interface ValueProps {
  children: ReactNode;
  font: string;
  color?: string;
}

const Text = ({ children, font, color }: ValueProps) => {
  return (
    <TextWrapper $font={font} $color={color || 'defaultColor'}>
      {children}
    </TextWrapper>
  );
};

const TextWrapper = styled.span<{ $font: string; $color: string }>`
  display: flex;
  align-items: center;

  word-break: keep-all;
  color: ${({ $color }) => $color};
  ${({ $font, theme }) => {
    switch ($font) {
      case 'head1':
        return theme.fonts.head1;
      case 'head2':
        return theme.fonts.head2;
      case 'head3':
        return theme.fonts.head3;

      case 'head4':
        return theme.fonts.head4;
      case 'head5':
        return theme.fonts.head5;

      case 'body2':
        return theme.fonts.body2;
      case 'body3':
        return theme.fonts.body3;
      case 'body4':
        return theme.fonts.body4;
      case 'body5':
        return theme.fonts.body5;
      case 'body7':
        return theme.fonts.body7;

      case 'name1':
        return theme.fonts.name1;
      case 'name2':
        return theme.fonts.name2;
      case 'univ1':
        return theme.fonts.univ1;
      case 'univ2':
        return theme.fonts.univ2;
      case 'point1':
        return theme.fonts.point1;
      case 'point2':
        return theme.fonts.point2;

      case 'point3':
        return theme.fonts.point3;

      default:
        return '';
    }
  }};
`;

export default Text;
