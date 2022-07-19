
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList( { juegos }) {    

  return (
    <div className="itemList">      
      <div className="itemList_grid">
          {juegos.map((juego, index) => (
            <Item key={index} juego={juego} />
          ))}
        </div>
    </div>
  );
}

export default ItemList;
