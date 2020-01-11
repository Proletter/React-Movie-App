import React from 'react';
import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn'
// import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const LoadMoreBtn = ({ text, callback }) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)
export default LoadMoreBtn;