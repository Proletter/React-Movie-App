import styled from 'styled-components';

export const StyledMovieThumb = styled.div `
  
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: {
        0 2.8 px 2.2 px rgba(0, 0, 0, 0.034),
        0 6.7 px 5.3 px rgba(0, 0, 0, 0.048),
        0 12.5 px 10 px rgba(0, 0, 0, 0.06),
        0 22.3 px 17.9 px rgba(0, 0, 0, 0.072),
        0 41.8 px 33.4 px rgba(0, 0, 0, 0.086),
        0 100 px 80 px rgba(0, 0, 0, 0.12);
        }
    }









    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;