import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Home, MailOutlined, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: calc(100vh - 50px);
    flex: 1;
    position: sticky;
    top: 50px;
    background-color: rgb(251, 251, 255);
`;

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`;

const SidebarMenu = styled.div`
    margin-bottom: 10px;
`;

const Title = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`;

const SidebarListItem = styled.li`
    display: flex;
    padding: 5px;
    cursor: pointer;
    align-items: center;
    border-radius: 10px;
    background-color: ${props=>props.active ? "rgb(228, 228, 250)" : "transparent"};
    &:hover{
        background-color: rgb(228, 228, 250);
    }
`;

const SidebarListItemText = styled.span``;

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <SidebarMenu>
                    <Title>Dashboard</Title>
                    <SidebarList>
                        <SidebarListItem active={true}>
                            <Home style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Home</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <Timeline style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Analytics</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <TrendingUp style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Sales</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Quick Menu</Title>
                    <SidebarList>
                        <SidebarListItem active={false}>
                            <PermIdentity style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Users</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <Storefront style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Products</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <AttachMoney style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Transactions</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <BarChart style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Reports</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Notifications</Title>
                    <SidebarList>
                        <SidebarListItem active={false}>
                            <MailOutlined style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Mail</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <DynamicFeed style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Feedback</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <ChatBubbleOutline style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Messages</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Staff</Title>
                    <SidebarList>
                        <SidebarListItem active={false}>
                            <WorkOutline style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Manage</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <Timeline style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Analytics</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <Report style={{marginRight:"5px", fontSize:"20px"}} />
                            <SidebarListItemText>Reports</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
