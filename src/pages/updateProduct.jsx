import React, { Component } from 'react';
import axios from 'axios'

class UpdateProduct extends Component {
    state = {
        product:{
            _id: "",
            title: "",
            image:"",
            category: "",
            description: "",
            price: "",
            stock: ""
        } 
    }

    handleFetch = async (e) => {
        // e.preventDefault()
        // const id = e.currentTarget.value
        const { data: product } = await axios.post('http://localhost:5000/api/updateProduct/fetch', this.state.product)
        // console.log(product)
        this.setState({
            // id: product._id,
            // title: product.title,
            // category: product.category,
            // description: product.description,
            // price: product.price,
            // stock: product.stock
            product
        })
        // console.log(this.state)

        // console.log(await axios.post('http://localhost:5000/api/updateProduct',this.state.id))
        // console.log('console',this.state.id)
    }

    handleChange = (e) => {
        const product = {...this.state.product}
        product[e.currentTarget.name] = e.currentTarget.value
        this.setState({product})
        // const id = e.currentTarget.value
        // this.setState({ id: id })
        // console.log(id)
    }

    handleSubmit= async()=>{
        const {data:response} = await axios.post('http://localhost:5000/api/updateProduct/update', this.state.product)
        if(response) alert('successfully updated')


    }

    render() {
        console.log(this.state.product)
        // console.log(this.state.product.price)
        const product = this.state.product
        return (
            <div className='col-10 offset-1 max-width-1600 mx-auto mt-5'>

                <div className='col-6 mb-5'>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Enter Product ID" name='_id' onChange={this.handleChange} />
                        <button class="btn btn-outline-primary" onClick={this.handleFetch} type="button">Fetch</button>
                    </div>
                </div>

                <div className='col-8'>
                    <div class="input-group my-5">
                        <span class="input-group-text "><p className='m-0 fs-6 mx-4'>Title</p></span>
                        <input class="form-control" name="title" defaultValue={product.title} onChange={this.handleChange}/>
                    </div>
                </div>

                <div className='col-8'>
                    <div class="input-group my-5">
                        <span class="input-group-text "><p className='m-0 fs-6 mx-4'>Image</p></span>
                        <input class="form-control" name="image" defaultValue={product.image} onChange={this.handleChange}/>
                    </div>
                </div>

                <div className='col-8'>
                    <div class="input-group  my-5">
                        <span class="input-group-text "><p className='m-0 fs-6 mx-4'>Category</p></span>
                        <input class="form-control" name='category' defaultValue={product.category} onChange={this.handleChange}/>
                    </div>
                </div>

                <div className='col-8'>
                    <div class="input-group my-5">
                        <span class="input-group-text "><p className='m-0 fs-6 mx-4'>Description</p></span>
                        <input class="form-control" name='description' defaultValue={product.description} onChange={this.handleChange}/>
                    </div></div>

                <div className='col-8'>
                    <div class="input-group my-5">
                        <span class="input-group-text "><p className='m-0 fs-6 mx-4'>Price</p></span>
                        <input class="form-control" name='price' defaultValue={product.price} onChange={this.handleChange}/>
                    </div></div>

                <div className='col-8'>
                    <div class="input-group my-5">
                        <span class="input-group-text "><p className='m-0 fs-6 mx-4'>Stock</p></span>
                        <input class="form-control" name='stock' defaultValue={product.stock} onChange={this.handleChange}/>
                    </div></div>

                <div className='my-5'>
                    <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Update</button>
                </div>
            </div>
        );
    }
}

export default UpdateProduct;