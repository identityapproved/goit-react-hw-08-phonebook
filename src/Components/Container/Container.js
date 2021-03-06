import PropTypes from 'prop-types';
import { SectionMain, SectionTitle } from './Container.styled';

export const Container = ({ children, title }) => {
  return (
    <SectionMain>
      {title ?? <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionMain>
  );
};
