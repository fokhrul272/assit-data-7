import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

const Carts = ({cooks, handlePrepare, handleCurrent}) => {
    // console.log(carts);
    return (
        <div>
            <div>
                <div className="">
            <h3 className="text-3xl font-bold text-center">Want to cook: {cooks.length}</h3>
            <hr />
            <div className="grid grid-cols-4 gap-16 mb-16">
                <h3 className="text-2xl font-bold">Name</h3>
                <h3 className="text-2xl font-bold">Time</h3>
                <h3 className="text-2xl font-bold">Calories</h3>
            </div>
            <hr />
            <div className="flex justify-between mt-16">
                <h3 className="text 2xl font-bold">Total Time: 0 minutes</h3>
                <h3 className="text 2xl font-bold">Total Calories: 0 calories</h3>
            </div>
        </div>
                {
                    cooks.map((cook, index) => <Cart
                    key={index}
                    cook={cook}
                    index={index}
                    handlePrepare={handlePrepare}
                    handleCurrent={handleCurrent}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

Carts.propTypes ={
    cooks: PropTypes.array,
    handlePrepare: PropTypes.func,
    handleCurrent: PropTypes.func
}

export default Carts;



