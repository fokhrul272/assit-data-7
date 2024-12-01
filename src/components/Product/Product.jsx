import PropTypes from "prop-types";

const Product = ({product, handleCook }) => {
    // console.log(handleCart);
    const {calories, preparing_time, recipe_id, recipe_image,recipe_name, short_description} = product;
    return (
        <div>
         <div className='w-80 border-8 p-6 space-y-4 rounded-lg'>
                    <img className='w-52 rounded-lg' src={recipe_image} alt="" />
                    <h1 className='text-3xl font-bold'>{recipe_name}</h1>
                    <p>{short_description}</p>
                    <div>
                    <div className="flex justify-between">
                        <h3 className="flex gap-2">{preparing_time}</h3>
                        <h3 className="flex gap-2">{calories}</h3>
                    </div>
                        <button onClick={() => handleCook(product)}
                        className='bg-gray-400 rounded-lg p-4'>Want to Cook</button>
                    </div>
                </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
    handleCook: PropTypes.func
}

export default Product;



