import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";

require("dotenv").config();

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
    ${mobile({ padding: "8px" })}
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;

const Image = styled.img`
    width: 200px
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justidy-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 24px;
    margin: 5px;
    border: 1px solid teal;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async () => {
            try{
                const res = await userRequest.post("/api/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                });
                history.push("/sucess", { data:res.data });
            } catch(err) {}
        }
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, history])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>SEU CARRINHO</Title>
                <Top>
                    <TopButton>CONTINUAR COMPRANDO</TopButton>
                    <TopTexts>
                        <TopText>Carrinho de Compras (2)</TopText>
                        <TopText>Lista de Desejos (10)</TopText>
                    </TopTexts>
                    <TopButton type="filled">FINALIZAR PEDIDO</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products?.map(product=>(
                            <Product>
                                <ProductDetail>
                                    <Image src={product.image}/>
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product.id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Tamanho:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add />
                                    </ProductAmountContainer>
                                    <ProductPrice>R$ {product.price*product.quantity}</ProductPrice>
                                </PriceDetail>
                                
                            </Product>
                        ))}
                        <Hr />
                        
                        </Info>
                    <Summary>
                        <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Taxa de envio</SummaryItemText>
                            <SummaryItemPrice>R$ 30,00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desconto de envio</SummaryItemText>
                            <SummaryItemPrice>R$ -30,00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total </SummaryItemText>
                            <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="CMC"
                            billingAddress
                            shippingAddress
                            description={`Seu total é R$${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <SummaryButton>FINALIZAR PEDIDO</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
