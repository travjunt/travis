import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    ${'' /* background: #F1F3F5; */}
    background: white;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    justify-self: center;
`
const Button = styled.button`
    background: #569ff2;
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    width: 252px;
    font-weight: 600;
    font-size: 18px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-column: repeat(1, 1fr);
    grid-gap: 10px;
    color: #486791;

    a {
        transition: 0.8s;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;

`


const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Want to grab a coffee?</Text>
        <Button><a href="mailto:travjunt@gmail.com">Get in Touch</a></Button>
        <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}</LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer