import data from '../../assets/DB.json'

import CartHeader from '../CartHeader'
import { Link } from 'react-router-dom'
function address3() {
   
    const Address = data.address
    return (
        <>
        
      
       
        <div className='Address'>
        <h1 className='styling'>Adresses</h1>
     {
                    
                        Address.map((a) =>
                            <div className='cartSummary1'>
                           <ul className="cartSummaryUl1"> 
                             
                             
                              <li>  Pincode:{a.Pincode}</li>
                           <li> common Address:{a.comAdd}</li>
                             <li>   Town:{a.Town}</li>
                             <li>   District:{a.District}</li>
                             <li>   State:{a.State}</li>
                                

                                </ul></div>

                        )
                    }


</div>
            

        </>
    )
}
export default address3