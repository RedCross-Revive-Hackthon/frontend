import ReactDom from 'react-dom';
import { ReactNode } from 'react';
interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal') as HTMLElement;
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
