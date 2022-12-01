import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AllProductCards from './Components/AllProductCards';
import CategoryList from './Components/CategoryList';

function App() {
  return (
      <div className="row">
          <div className="col-sm-3">
              <CategoryList />
          </div>
          <div className="col-sm-9">
              <AllProductCards />
          </div>
      </div>
  );
}

export default App;
