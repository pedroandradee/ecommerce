import styled from "styled-components";

import { Visibility } from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`;

const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
`;

const Username = styled.span`
    font-weight: 600;
`;

const UserClass = styled.span`
    font-weight: 300;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;

const WidjetSm = () => {
    return (
        <Container>
            <Title>New Join Members</Title>
            <List>
                <ListItem>
                    <UserImage src="http://localhost:5000/images/anya.jpg" />
                    <User>
                        <Username>Anya Taylor-Joy</Username>
                        <UserClass>Student</UserClass>
                    </User>
                    <Button>
                        <Visibility style={{fontSize: "16px", marginRight: "5px"}} />
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <UserImage src="http://localhost:5000/images/elle_anning.jpg" />
                    <User>
                        <Username>Elle Fanning</Username>
                        <UserClass>Student</UserClass>
                    </User>
                    <Button>
                        <Visibility style={{fontSize: "16px", marginRight: "5px"}} />
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <UserImage src="http://localhost:5000/images/maisie_williams.jpg" />
                    <User>
                        <Username>Maisie Williams</Username>
                        <UserClass>Student</UserClass>
                    </User>
                    <Button>
                        <Visibility style={{fontSize: "16px", marginRight: "5px"}} />
                        Display
                    </Button>
                </ListItem>
            </List>
        </Container>
    )
}

export default WidjetSm
