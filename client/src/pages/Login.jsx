import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state=>state.user);

    const handleClick = (e) => {
        e.preventDefault();
        if(username !== "" && password !== ""){
            login(dispatch, {username, password});
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>ENTRAR</Title>
                <Form>
                    <Input placeholder="Login" onChange={(e)=>setUsername(e.target.value)}/>
                    <Input placeholder="Senha" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>ENTRAR</Button>
                    { error && <Error>Credenciais incorretas ou usuário inexistente.</Error> }
                    <Link>ESQUECEU SUA SENHA?</Link>
                    <Link href="/register">CRIAR UMA CONTA</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
