import { Email } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 60vh;
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    width: 50%;
    height: 40px;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Mantenha-se informado!</Title>
            <Description>Receba atualizações sobre os seus produtos favoritos.</Description>
            <InputContainer>
                <Input placeholder="Seu email" />
                <Button>
                    <Email/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
