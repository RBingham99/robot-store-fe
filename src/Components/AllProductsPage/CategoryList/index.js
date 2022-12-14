const CategoryList = (props) => {

    const {handleChange} = props;

    return (
        <form className="form-check">
            <div className="pb-3">
                <h2>Categories</h2>
                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Aprons" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Aprons">Aprons</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Hats" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Hats">Baseball Hats</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Mugs" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Mugs">Mugs</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Shirts" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Shirts">T-shirts</label>
                </div>
            </div>
            
            <div className="pb-3">
                <h2>Characters</h2>
                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Fred" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Fred">Fred</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Dolores" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Dolores">Dolores</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Bubbles" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Bubbles">Bubbles</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" id="Rex" type="checkbox" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="Rex">Rex</label>
                </div>
            </div>
        </form>
    );
}
export default CategoryList;