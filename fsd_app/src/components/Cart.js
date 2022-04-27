import { useEffect, useState } from "react";
import { connect } from "react-redux";
function Cart({ cart }) {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0
        cart.forEach(item => {
            count = count + item.qty;
        });
        setCartCount(count)
    }, [cart, cartCount])
    return (
        <>{cartCount}</>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};
export default connect(mapStateToProps)(Cart)



