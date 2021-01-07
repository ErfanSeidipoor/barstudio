
import { GET_ALL_TAGS_WITH_PRODUCTS_URL } from "../../Services/constants";
import { TagCard } from "../../components/TagCard";
import { Button } from "../../components/Button";
import useAxios from 'axios-hooks'
import { Tag } from "../../Models";
import { useHistory } from "react-router-dom";
import './index.css'

const TagsPage  = ()=>{

    const [{ data, loading, error }] = useAxios<Tag[]>(GET_ALL_TAGS_WITH_PRODUCTS_URL)
    const history = useHistory()  

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div id="tags-page">
            <h1 className="header">
                {"List of All Tags"}
            </h1>
            <Button label={"Add New Tag"} onClick={()=>history.push("tags/create")}/>
            {
                data?.map(tag=>(
                    <TagCard
                        key={tag.id}
                        tag={tag}
                        onDetailsClick={()=>history.push("tags/"+tag.id)}
                    />
                ))
            }
        </div>
    )   
}

export default TagsPage