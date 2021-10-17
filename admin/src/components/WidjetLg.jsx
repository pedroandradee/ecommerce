import styled from "styled-components";

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`;

const Tr = styled.tr``;

const Th = styled.th`
    text-align: left;
`;

const Td = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const Name = styled.span`
    
`;

const TdDate = styled.td`
    font-weight: 300;
`;

const TdAmount = styled.td`
    font-weight: 300;
`;

const TdStatus = styled.td``;

const Btn = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${props=>props.type === "Approved" ? "#e5faf2" : 
        (props.type === "Declined"  ? "#fff0f1" :
        (props.type === "Pending" && "#ebf1fe"))};
    };
    color: ${props=>props.type === "Approved" ? "#3bb077" :
        (props.type === "Declined" ? "#d95087" : 
        (props.type === "Pending" && "#2a7ade"))};
`;


const WidjetLg = () => {

    const Button = ({type}) => {
        return <Btn type={type}>{type}</Btn>
    }

    return (
        <Container>
            <Title>Latest Transations</Title>
            <Table>
                <Tr>
                    <Th>Customer</Th>
                    <Th>Date</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                </Tr>
                <Tr>
                    <Td>
                        <Image src="http://localhost:5000/images/anya.jpg" />
                        <Name>Anya Taylor-Joy</Name>
                    </Td>
                    <TdDate>2 Jun 2021</TdDate>
                    <TdAmount>R$ 3000.00</TdAmount>
                    <TdStatus>
                        <Button type="Approved" />
                    </TdStatus>
                </Tr>
                <Tr>
                    <Td>
                        <Image src="http://localhost:5000/images/elle_anning.jpg" />
                        <Name>Elle Fanning</Name>
                    </Td>
                    <TdDate>10 Mar 2021</TdDate>
                    <TdAmount>R$ 320.00</TdAmount>
                    <TdStatus>
                        <Button type="Pending" />
                    </TdStatus>
                </Tr>
                <Tr>
                    <Td>
                        <Image src="http://localhost:5000/images/maisie_williams.jpg" />
                        <Name>Maisie Williams</Name>
                    </Td>
                    <TdDate>17 Oct 2021</TdDate>
                    <TdAmount>R$ 90.00</TdAmount>
                    <TdStatus>
                        <Button type="Declined" />
                    </TdStatus>
                </Tr>
            </Table>
        </Container>
    )
}

export default WidjetLg;
