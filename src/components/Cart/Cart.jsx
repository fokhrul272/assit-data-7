import PropTypes from "prop-types";

const Cart = ({index, cook, handlePrepare}) => {
    const {calories, preparing_time,recipe_name} = cook;
    return (
        <div>
             <div className="flex justify-around mt-4">
             <div className="grid grid-cols-3 gap-16 mb-16">
               
               
                <h3 className="text-2xl font-bold">{index + 1}</h3>
                <h3 className="text-2xl font-bold">{recipe_name}</h3>
                <h3 className="text-2xl font-bold">{preparing_time}</h3>
                <h3 className="text-2xl font-bold">{calories}</h3>
            </div>
            <div>
                <button
                onClick={() => handlePrepare(cook.recipe_id, cook)}
                className="bg-gray-400 p-2 rounded-lg">Preparing</button>
                </div>
                    {/* <p className="text-3xl font-bold">{index+1}</p>
                    <h5 className="text-3xl font-bold">{cart.title.slice(0, 8)}</h5>
                    <h5 className="text-3xl font-bold">{cart.price}</h5>
                    <button onClick={() => handleDelete(cart.id)}
                    className="bg-gray-400 rounded-lg p-2">Delete</button> */}
                    
                </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    cook: PropTypes.object,
    handlePrepare:  PropTypes.func
}

export default Cart;


