import React from 'react'
import styled from "styled-components";
import { Language, NotificationsNone, Settings,  } from "@material-ui/icons";

const Container = styled.div`
    width: 100%
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 10;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div``;

const Logo = styled.h1`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color #555;
`;

const TopIconBadge = styled.span`
    display: flex;
    width: 15px;
    height: 15px;
    position: absolute;
    top: -3px;
    right: 0;
    border-radius: 50%;
    color: white;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    background-color: red;
`;

const ImageProfile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>CMC ADMIN</Logo></Left>
                <Right>
                    <IconContainer>
                        <NotificationsNone />
                        <TopIconBadge>2</TopIconBadge>
                    </IconContainer>
                    <IconContainer>
                        <Language />
                    </IconContainer>
                    <IconContainer>
                        <Settings />
                    </IconContainer>
                    <ImageProfile src="http://localhost:5000/images/lily.jpg" />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
