import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {connect} from 'react-redux'

class Home extends Component{

    mapProducts = () =>{ 
        console.log(this.props.products.map(product => {
           return product.title
        }))
        this.props.products.map(product => {
        return <ProductCard key={product.id} product={product}/>})
    }
    render() {
        return (
            <div className="home">
                <div className="home-products">
                    <section className="cards">
                    {this.props.products.map(product => {
                        return <ProductCard key={product.id} product={product}/>
                    })}
                    {/**this.products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })*/}
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        products: state.allProducts.products
    }
}

export default connect(mapStateToProps)(Home)