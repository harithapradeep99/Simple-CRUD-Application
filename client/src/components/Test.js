import React from 'react'
import {  useParams } from 'react-router-dom'

function Test() {

    const match = useParams();
    return (
        <div>Test
            {/* {match.params.name} */}
            {JSON.stringify(match)}
        </div>
    )
}



// const Test = () => {
//     return (
//         <div>Test</div>
//     )
// }

export default Test