///* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Product from "./Product";

async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
        throw new Error("Failed to fetch the data");
    }
    return res.json();
}

function ProductFeed() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData();
                console.log("Fetched Products:", data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='mx-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {products.map((item, index) => (
                <Product item={item} key={index} />
            ))}
        </div>
    );
}

export default ProductFeed;