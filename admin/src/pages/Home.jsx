import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidjetLg from "../components/WidjetLg";
import WidjetSm from "../components/WidjetSm";
import { userData } from "../data";

const Container = styled.div`
    flex: 4;
`;

const Widjets = styled.div`
    display: flex;
    margin: 20px;
`;

const Home = () => {
    return (
        <Container>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <Widjets>
                <WidjetSm/>
                <WidjetLg/>
            </Widjets>
        </Container>
    )
}

export default Home
