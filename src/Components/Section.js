import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

// children은 예약어인 react-prop임
const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
