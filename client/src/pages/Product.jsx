import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const ProductDescription = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px 0px;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    width: 50%
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 0px 5px;
    border: 1px solid teal;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async() => {
            try{
                const res = await publicRequest.get(`/products/${id}`);
                setProduct(res.data.product);
            } catch(err){} 
        }
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if(type === "inc"){
            setQuantity(quantity + 1);
        }
        if(type === "dec" && quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const handleClick = (e) => {
        //update cart
        dispatch(addProduct({...product, quantity, color, size}));
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Img src={product ? product.image : "https://i.ibb.co/S6qMxwr/jean.png" }/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product ? product.title : "Macacão Jeans"}</Title>
                    <ProductDescription>{product ? product.description : "Macacão produzido a partir de tecido jeans."}</ProductDescription>
                    <Price>R$ {product ? product.price : "100,00"}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Cor</FilterTitle>
                            {product?.colors?.map(c=>(
                                <FilterColor key={c.id} color={c.color} onClick={()=>setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSize onClick={(e)=>setSize(e.target.value)}>
                                {product?.sizes?.map(s=>(
                                    <FilterSizeOption key={s.id}>{s.size}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADICIONAR AO CARRINHO</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
