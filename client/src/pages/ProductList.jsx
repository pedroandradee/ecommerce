import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})};
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Produtos:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled>Cor</Option>
                        <Option>branco</Option>
                        <Option>preto</Option>
                        <Option>vermelho</Option>
                        <Option>azul</Option>
                        <Option>amarelo</Option>
                        <Option>verde</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled selected>Tamanho</Option>
                        <Option>PP</Option>
                        <Option>P</Option>
                        <Option>M</Option>
                        <Option>G</Option>
                        <Option>GG</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Classificar Produtos: </FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Preço</Option>
                        <Option value="asc">Preço (Crescente)</Option>
                        <Option value="desc">Preço (Decrescente)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
