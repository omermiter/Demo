import React, {useState, useEffect} from 'react';
import Card from './planCard';
import "../styles/plans.css"


function Plans(){

    const [plans, setPlans] = useState([]);

    useEffect(() => {

        fetch(`https://676fe806b353db80c323e20f.mockapi.io/plans/v1/plans`)
        .then(response => response.json())
        .then(response => setPlans(response))
        .catch(err => console.error(err));

        
    }, []); 





    return (
        <div className='plans-cont' id='plans'>
            {plans.map(plan => {
                return <Card name={plan.data} desc={plan.description} price={plan.price} valid={plan.validity}/>
            })}
        </div>
    );
}

export default Plans;