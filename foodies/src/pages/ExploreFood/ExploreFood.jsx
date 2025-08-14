import React, { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const ExploreFood = () => {

    const [category, setCategory] = useState('All');
    const [searchText, setSearchText] = useState('');
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group mb-3">
                                <select className='form-select mt-2 ' style={{ 'maxWidth': '150px' }} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="Biriyani">Biriyani</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Rolls">Rolls</option>
                                    <option value="Burgers">Burgers</option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Salads" >Salads</option>
                                    <option value="Cakes">Cakes</option>
                                </select>
                                <input type="text" className='form-control mt-2' placeholder='Search your favourite item..'
                                    onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                                <button className='btn btn-primary mt-2' type='submit' >
                                    <i className='bi bi-search'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FoodDisplay category={category} searchText={searchText} />
        </>
    )
}

export default ExploreFood;