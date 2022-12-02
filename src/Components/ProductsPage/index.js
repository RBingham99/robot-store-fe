import CategoryList from "./CategoryList";
import AllProductCards from "./AllProductCards";
import {useState} from "react";

const ProductsPage = () => {

    const [checkboxState, setCheckboxState] = useState(
        {
            'Aprons': true,
            'Hats': true,
            'Mugs': true,
            'Shirts': true,
            'Bubbles': true,
            'Dolores': true,
            'Fred': true,
            'Rex': true
        });

    const handleChange = (event) => {
        let category = event.target.id;
        let newState = checkboxState;
        newState[category] = event.target.checked;
        // setCheckboxState(Object.assign(Array.from(checkboxState), {[category]: !checkboxState[category] }));
        setCheckboxState((prevState) => {
            return {...prevState, ...newState};
        });
        }
        // console.log(checkboxState);


    return (
        <div className="py-3 pe-3">
            <h1 className="d-flex justify-content-center">Robot Store</h1>
            <div className="row pt-3">
                <div className="col-sm-2">
                    <CategoryList handleChange={handleChange} />
                </div>
                <div className="col-sm-10">
                    <AllProductCards checkboxState={checkboxState} />
                </div>
            </div>
        </div>

    );
}

export default ProductsPage;