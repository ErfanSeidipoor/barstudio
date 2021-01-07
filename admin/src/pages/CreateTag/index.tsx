
import { useState } from "react";
import { Button } from "../../components/Button";
import { createTag, } from "../../Services";
import { useHistory } from "react-router-dom";

import './index.css'

const CreateTagPage  = ()=>{
    const [tagName, setTagName] = useState("")
    const history = useHistory()


    return (
        <div id="create-tag-page">
            <h1 className="header">
                {"Add New Tag "}
            </h1>
            <form className="edit-form" onSubmit={e=>e.preventDefault()}>
                name: <input
                    value={tagName}
                    onChange={e=>setTagName(e.target.value)}
                />
                <Button
                    label={'change'}
                    onClick={()=>createTag(tagName).then(res=>history.push('/tags/'+res.data.id))}
                />
            </form>
        </div>
    )   
}

export default CreateTagPage