import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AllProductCards from './Components/AllProductCards';
import CategoryList from './Components/CategoryList';
import {useState} from "react";

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

function App() {
  return (
      <div className="py-3 pe-3">
          <h1 className="d-flex justify-content-center">Robot Store</h1>
          <div className="row pt-3">
              <div className="col-sm-2">
                  <CategoryList checkboxState={checkboxState} setCheckboxState={setCheckboxState} />
              </div>
              <div className="col-sm-10">
                  <AllProductCards />
              </div>
          </div>
      </div>

  );
}

export default App;
