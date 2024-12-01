import PropTypes from "prop-types";
import Cooking from "../../Cooking/Cooking";

const Cookings = ({runs}) => {
    console.log(runs);
    return (
        <div>
            <h3 className="text-3xl font-bold text-center justify-center items-center">Currently cooking:{runs.length}</h3>
            <Cooking></Cooking>
        </div>
    );
};

Cookings.propTypes ={
    runs: PropTypes.array
}




export default Cookings;




