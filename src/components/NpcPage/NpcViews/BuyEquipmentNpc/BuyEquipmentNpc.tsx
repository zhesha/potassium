import { game } from "../../../../Game/Game";
import { InventoryLoot } from "../../../../Game/Inventory";
import { LootItem, getRealItemFromLoot } from "../../../../Game/Loot";
import { lootMap } from "../../../../Game/lootMap";

import './BuyEquipmentNpc.scss'

// камʼяні
//     зброя м 6м
//     лати м 4м
//     шолом м 2м
//     взуття м 2м
// бронзові
//     лати м 6м
//     щит м 6м
//     рукавиці м 3м
//     взуття м 3м
// срібні
//     зброя р 11р
//     шолом р 3р
//     щит р 6р
//     рукавиці р 3р
// золоті
//     зброя р 15р
//     лати р 8р
//     щит р 8р
//     взуття р 5р
// унікальні
//     зброя 20
//     лати 10
//     шолом 5
//     рукавиці 5
// Loot

export function BuyEquipmentNpc () {
    return <div>
        <div>Buy Equipment</div>
        <div>
            <BuyItem item={lootMap[2][7]}/>
        </div>
    </div>;
}

interface BuyItemProps {
    item: LootItem
}

function BuyItem ({item}: BuyItemProps) {
    item = item as InventoryLoot;
    const realPrice = item.price * game.player.skillsList.getBuyMultiplier();
    function buy () {
        const realItem = getRealItemFromLoot(item);
        if (realItem && game.player.money >= realPrice) {
            game.player.money -= realPrice;
            game.player.inventory.backpack.add(realItem);
        }
    }
    return <div className="buy-item" onClick={buy}>{item.name}: {realPrice}</div>;
}