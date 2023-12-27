import styled, { css } from "styled-components";

export const fonts = css`
    font-family: var(--font-primary);
`

export const FontTitle = styled.h1`
    ${fonts};
    font-size: ${({font}) => font === "big" ? "2.5rem" : "1.5rem"};
    color: var(--color-white);
`

export const FontParagraph = styled.p`
    ${fonts};
    font-size: ${({font}) => font === "big" ? "2rem" : "1rem"};
    color: var(--color-white);
`