import styled from 'styled-components';

const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;
    transition: color .25s ease-in-out;

    &:focus,
    &:hover {
        color: #006666;
    }
`

export default Link;