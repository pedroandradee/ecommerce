import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
import axios from "axios";
import { popularProducts } from '../data';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async () => {
            console.log(category);
            try{
                const res = await axios.get( 
                    category ? `http://localhost:5000/api/allProducts?category=${category}` :
                    "http://localhost:5000/api/allProducts"
                );
                console.log(res.data.products);
                setProducts(res.data.products);
            } catch(err){
                console.log(err)
            }
        }
        getProducts();
    }, [category]);

    useEffect(() => {
        category && ( products.length > 0 &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
        ));
    }, [products, category, filters]);

    useEffect(()=>{
        if(sort === "newest"){
            setFilteredProducts(prev=>
                [...prev].sort((a, b)=>a.created_at - b.created_at)    
            );
        } else if(sort === "asc"){
            setFilteredProducts(prev=>
                [...prev].sort((a, b)=>a.price - b.price)    
            );
        } else {
            setFilteredProducts(prev=>
                [...prev].sort((a, b)=>b.price - a.price)    
            );
        }
    }, [sort])

    return (
        <Container>
            {category 
                ? filteredProducts.map(item=> <Product item={item} key={item.id}/>) 
                : products
                    .slice(0,8)
                    .map(item=><Product item={item} key={item.id}/>)}
        </Container>
    )
}

export default Products
