import React, { use, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';


const AddFood = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Biriyani'
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault(); //stops reloading the entire page

    if (!image) {
      toast.error('Please upload the image');
      return;
    }
    try {
      await addFood(data, image);
      toast.success('Food added successfully');
      setData({ name: '', description: '', category: 'Biriyani', price: '' });
      setImage(null);
    }
    catch (error) {
      toast.error('Encountered error while adding Food item');
    }

    // useEffect(() => {
    //   console.log(data);

    // },[data]);
  }
  return (
    <div className="mx-2 mt-2">
      <div className="row justify-content-center">
        <div className=" card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Item Name</label>
                <input type="text" placeholder="Enter the item name" className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name} />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Item Category</label>
                <select name="category" id="category" className='form-control' onChange={onChangeHandler} value={data.category} >
                  <option value="Biriyani">Biriyani</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Burgers">Burgers</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Salads" >Salads</option>
                  <option value="Cakes">Cakes</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Item price</label>
                <input type="number" placeholder='&#36;' className="form-control" id="price" required name='price' onChange={onChangeHandler} value={data.price} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Food description</label>
                <textarea className="form-control" placeholder='Enter the item description' id="description" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src={image ? URL.createObjectURL(image) : assets.upload} alt=" " width={98} ></img></label>
                <input type="file" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFood;