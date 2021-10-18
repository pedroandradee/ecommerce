import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    width: 100%
    justify-content: space-between;
`;

const Item = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const SpanTitle = styled.span`
    font-size: 20px;
`;

const MoneyContainer = styled.div`
    display: flex;
    margin: 10px 0px;
    align-items: center;
`;

const SpanMoney = styled.span`
    font-size: 30px;
    font-weight: 600;
`;

const SpanMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const SpanSub = styled.span`
    font-size: 15px;
    color: gray;
`;

const FeaturedInfo = () => {
    return (
        <Container>
            <Item>
                <SpanTitle>Revenue</SpanTitle>
                <MoneyContainer>
                    <SpanMoney>R$ 2,41</SpanMoney>
                    <SpanMoneyRate>
                        -11,4 
                        <ArrowDownward style={{fontSize:"14px", marginLeft: "5px", color: false ? "green" : "red"}} />
                    </SpanMoneyRate>
                </MoneyContainer>
                <SpanSub>Compared to last month</SpanSub>
            </Item>
            <Item>
                <SpanTitle>Sales</SpanTitle>
                <MoneyContainer>
                    <SpanMoney>R$ 4,415</SpanMoney>
                    <SpanMoneyRate>
                        -1,4 
                        <ArrowDownward  style={{fontSize:"14px", marginLeft: "5px", color: false ? "green" : "red"}} />
                    </SpanMoneyRate>
                </MoneyContainer>
                <SpanSub>Compared to last month</SpanSub>
            </Item>
            <Item>
                <SpanTitle>Cost</SpanTitle>
                <MoneyContainer>
                    <SpanMoney>R$ 2,225</SpanMoney>
                    <SpanMoneyRate>
                        +2,4 
                        <ArrowUpward  style={{fontSize:"14px", marginLeft: "5px", color: true ? "green" : "red"}} />
                    </SpanMoneyRate>
                </MoneyContainer>
                <SpanSub>Compared to last month</SpanSub>
            </Item>
        </Container>
    )
}

export default FeaturedInfo
