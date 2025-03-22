import './ShopItemClass.css';
import { Component } from 'react';
import PropTypes from "prop-types";

class ShopItemClass extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }
    
    render() {
        return (
            <div className="main-content">
                <h2>{this.item.brand}</h2>
                <h1>{this.item.title}</h1>
                <h3>{this.item.description}</h3>
                <div className="description">{this.item.descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{this.item.currency}{this.item.price.toFixed(2)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

// проверка типов с помощью PropTypes
ShopItemClass.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionFull: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    })
}

export default ShopItemClass;
