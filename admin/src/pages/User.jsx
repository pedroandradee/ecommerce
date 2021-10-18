import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
    padding: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1``;

const Button = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
`;

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const UserShow = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`;

const UserShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const Image = styled.img`
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const Username = styled.span`
    font-weight: 600;
`;

const Job = styled.span`
    font-weight: 300;
`;

const UserShowBottom = styled.div`
    margin-top: 20px;
`;

const UserShowBottomTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`;

const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`;

const UsernameBottom = styled.span`
    margin-ledt: 10px;
`;

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`;

const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`;

const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Left = styled.div``;

const Item = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const Right = styled.div``;

const UserUpdateUpload = styled.div``;

const ImageUpdate = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;

const InputUpdate = styled.input`
    display: none;
`;


const User = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Edit user</Title>
                <Button>Create</Button>
            </TitleContainer>
            <UserContainer>
                <UserShow>
                    <UserShowTop>
                        <Image src="http://localhost:5000/images/anya.jpg" />
                        <UserShowTopTitle>
                            <Username>Anya Taylor-Joy</Username>
                            <Job>Actress</Job>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowBottomTitle>Account Details</UserShowBottomTitle>
                        <UserShowInfo>
                            <PermIdentity style={{fontSize:"16px"}}/>
                            <UsernameBottom>anyaT</UsernameBottom>
                        </UserShowInfo>
                        <UserShowInfo>
                            <CalendarToday style={{fontSize:"16px"}}/>
                            <UsernameBottom>04/16/1996</UsernameBottom>
                        </UserShowInfo>
                        <UserShowBottomTitle>Contact Details</UserShowBottomTitle>
                        <UserShowInfo>
                            <PhoneAndroid style={{fontSize:"16px"}}/>
                            <UsernameBottom>+1 123 456 78</UsernameBottom>
                        </UserShowInfo>
                        <UserShowInfo>
                            <MailOutline style={{fontSize:"16px"}}/>
                            <UsernameBottom>anyaT@email.com</UsernameBottom>
                        </UserShowInfo>
                        <UserShowInfo>
                            <LocationSearching style={{fontSize:"16px"}}/>
                            <UsernameBottom>Address</UsernameBottom>
                        </UserShowInfo>
                    </UserShowBottom>
                </UserShow>
                <UserUpdate>
                    <UserUpdateTitle>Edit</UserUpdateTitle>
                    <UserUpdateForm>
                        <Left>
                            <Item>
                                <Label>Username</Label>
                                <Input placeholder="anyaT" type="text" />
                            </Item>
                            <Item>
                                <Label>Full Name</Label>
                                <Input placeholder="Anya Taylor-Joy" type="text" />
                            </Item>
                            <Item>
                                <Label>Email</Label>
                                <Input placeholder="anyaT@email.com" type="email" />
                            </Item>
                            <Item>
                                <Label>Phone number</Label>
                                <Input placeholder="+1 123 456 78" type="text" />
                            </Item>
                            <Item>
                                <Label>Address</Label>
                                <Input placeholder="Address" type="text" />
                            </Item>
                        </Left>
                        <Right>
                            <UserUpdateUpload>
                                <ImageUpdate src="http://localhost:5000/images/anya.jpg" />
                                <Label htmlFor="file" ><Publish /></Label>
                                <InputUpdate type="file" id="file" />
                            </UserUpdateUpload>
                        </Right>
                    </UserUpdateForm>
                </UserUpdate>
            </UserContainer>
        </Container>
    )
}

export default User
