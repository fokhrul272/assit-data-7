import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";

const Products = ({handleCook}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='flex justify-around mt-20'>
            <div>
                {
                    products.map((product, index) => <Product
                    key={index}
                    product={product}
                    handleCook={handleCook}
                    ></Product>)
                }
            </div>
        </div>
    );
};

Products.propTypes ={
    handleCook: PropTypes.func
}

export default Products;



