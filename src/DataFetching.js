import React, {useState, useEffect} from 'react'
import axios from "axios"
function DataFetching() {
    const [post,setPost] = useState ({})
    const [id,setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
setIdFromButtonClick(id)

    }
useEffect (() => {
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res => {
console.log(res)
setPost(res.data)

})
.catch(err => {
console.log(err)

})

},[idFromButtonClick])

    return (

      

        <div className="tekstit">
         <h3>Kirjoita numero 1-100 väliltä ja sivu hakee sinulle numeroa vastaavan lauseen</h3>
    <input type="text" value={id} onChange={e => setId(e.target.value)} /> 

      <button type="button" onClick={handleClick}>Hae teksti</button>
         <div className="lause">{post.title}</div>
       
        </div>
    )
}

export default DataFetching
