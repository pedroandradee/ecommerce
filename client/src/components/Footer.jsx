import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex: 1;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    color: white;
    background-color: #${props=>props.color};
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`;

const Title= styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
`;

const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CMC</Logo>
                <Description>Descrição sobre a empresa de ecomerce que esta sendo disponibilizada.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links importantes</Title>
                <List>
                    <ListItem>Início</ListItem>
                    <ListItem>Carrinho</ListItem>
                    <ListItem>Moda Masculina</ListItem>
                    <ListItem>Moda Feminina</ListItem>
                    <ListItem>Acessórios</ListItem>
                    <ListItem>Minha Conta</ListItem>
                    <ListItem>Rastreamento</ListItem>
                    <ListItem>Lista de Desejos</ListItem>
                    <ListItem>Termos</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contato</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/>Endereço</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/>Telefone de contato</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/>Email de contato</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
