import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BgImage from 'gatsby-background-image';

import Container from './Container';

const StyledBgImage = styled(BgImage)`
  background-size: cover;
  height: 35vh;
`;

const TextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  height: 100%;
  background-image: linear-gradient(to top, #358537 1.2rem, #35853700);
`;

const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  color: #853735;
`;

const Greeting = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "trees.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <StyledBgImage Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextContainer>
        <Title>Let me show you some pandas</Title>
      </TextContainer>
    </StyledBgImage>
  );
};

export default Greeting;
