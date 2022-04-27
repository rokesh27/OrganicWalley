import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function AddProductsForm({SoldBy}) {
    let history = useHistory()
    function OpenPop() {
        Swal.fire(
            'Good job!',
            'You added the product Successfully!',
            'success'
        )
    }
    const [Full_name, setName] = useState('')
    const [type, setType] = useState('')
    const [Qty, setQty] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [desc, setdesc] = useState('')
    const [img, setimg] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { Full_name, type, Qty, price, discount, desc, img ,SoldBy }
        console.log(type)
                axios.post(
                    `http://localhost:9000/api/products`,{
                        "Full_name":Full_name,
                        "type":type,
                        "Qty":Qty,
                        "price":price,
                        "discount":discount,
                        "desc":desc,
                        "Image":img,
                        "SoldbyEmail":SoldBy.email,
                        "SoldByUserName":SoldBy.UserName,
                        
                    }, ).then(res => {
                        console.log("successfully posted Address")
                          })
                          .catch(err => alert(err))
                
         
history.push('/yourProducts')

    }
    return (
        <>
            <form onSubmit={handleSubmit} action='/yourProducts'>
                <input type="text" placeholder="Product Name*" name="Full_name" value={Full_name}
                    onChange={(e) => setName(e.target.value)} className="addInf" required /><br></br>
                <select onChange={(e) => setType(e.target.value)} className="addInf" required autofocus >
                    <option value="none">select</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Pulses">Pulses</option>
                    <option value="dairy">dairy</option>
                </select>
                <input type="number" placeholder="Qty(kgs/liters)" name="Qty" value={Qty}
                    onChange={(e) => setQty(e.target.value)} className="addInf" required /><br></br>
                <input type="number" placeholder="Price per kg/L" name="price" value={price}
                    onChange={(e) => setPrice(e.target.value)} className="addInf" required /><br></br>
                <input type="number" placeholder="Discount in %" name="discount" value={discount}
                    onChange={(e) => setDiscount(e.target.value)} className="addInf" required /><br></br>
                <input type="text" placeholder="Product discription" name="desc" value={desc}
                    onChange={(e) => setdesc(e.target.value)} className="addInf" required /><br></br>
                <input type="url"
                    id="avatar" name="img" value={img}
                    onChange={(e) => setimg(e.target.value)} className="addInf" required />
                <button type="submit" className='adrsbutton' onClick={() => OpenPop()}>ADD PRODUCT</button>


            </form>
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        SoldBy:state.counterReducer1.user
    };
};
export default connect(mapStateToProps)(AddProductsForm)