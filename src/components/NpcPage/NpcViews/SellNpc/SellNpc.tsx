import { useState } from "react";
import { game } from "../../../../Game/Game";
import { RealItem } from "../../../../Game/Loot";
import './SellNpc.scss';

export function SellNpc () {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
    });
    
    return <div>
        <div>Sell</div>
        <div>
            {backpackList.map(
                (item, index) => <SellItem item={item} key={index}/>
            )}
        </div>
    </div>
}

function SellItem({item}: {item: RealItem}) {
    const realPrice = Math.round(item.price / game.player.skillsList.getSellDivider());

    function sell() {
        game.player.inventory.backpack.remove(item);
        game.player.money += realPrice;
    }

    return <div className="sell-item" onClick={sell}>
        <b>{item.name}</b> price: {realPrice} gold
    </div>
}