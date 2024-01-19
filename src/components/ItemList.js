import { CDN_URLS } from "../utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
            
                {items.map(item=><div key={item.card.info.id} className="p-2 m-2  border-gray-200 text-left border-b-2 flex justify-between">
                    
                    <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                    <span> - ₹ {(item.card.info.price)/100 || (item.card.info.defaultPrice)/100}</span>
                    </div>
                    <div>
                        <p className="text-xs">{item.card.info.category}</p>
                    </div>
                    </div>
                    <div className="w-3/12 p-4 relative flex justify-center">
                    
                    {/* <div className="absolute"> */}
                    <button className="absolute p-2 rounded-lg  bg-white shadow-lg bottom-0">Add +</button>
                    {/* </div> */}
                    <img src={CDN_URLS+item.card.info.imageId}/>
                    </div>
                </div>)}
            
        </div>
    )
}

export default ItemList;