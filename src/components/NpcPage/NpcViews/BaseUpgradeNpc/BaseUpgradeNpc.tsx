import { useState } from "react";
import { game } from "../../../../Game/Game";
import { RealItem, isArmor, isBoots, isGloves, isHelmet, isShield, isWeapon } from "../../../../Game/Loot";
import './BaseUpgradeNpc.scss';
import { isInventoryItem } from "../../../../Game/Loot";

export function BaseUpgradeNpc () {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);
    const [weapon, setWeapon] = useState(game.player.inventory.weapon);
    const [armor, setArmor] = useState(game.player.inventory.armor);
    const [shield, setShield] = useState(game.player.inventory.shield);
    const [boots, setBoots] = useState(game.player.inventory.boots);
    const [gloves, setGloves] = useState(game.player.inventory.gloves);
    const [helmet, setHelmet] = useState(game.player.inventory.helmet);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
        setWeapon(game.player.inventory.weapon);
        setArmor(game.player.inventory.armor);
        setShield(game.player.inventory.shield);
        setBoots(game.player.inventory.boots);
        setGloves(game.player.inventory.gloves);
        setHelmet(game.player.inventory.helmet);
    });
    
    return <div>
        <div>Used</div>
        <div>
            {weapon && <UpgradeItem item={weapon} />}
            {armor && <UpgradeItem item={armor} />}
            {shield && <UpgradeItem item={shield} />}
            {boots && <UpgradeItem item={boots} />}
            {gloves && <UpgradeItem item={gloves} />}
            {helmet && <UpgradeItem item={helmet} />}
        </div>
        <div>Backpack</div>
        <div>
            {backpackList.map(
                (item, index) => <UpgradeItem item={item} key={index}/>
            )}
        </div>
    </div>
}

function UpgradeItem({item}: {item: RealItem}) {
    const price = 50;
    if (!isInventoryItem(item)) {
        return null;
    }
    function upgrade() {
        if (isWeapon(item) && item.dmg < item.baseValueMax && game.player.money >= price) {
            item.dmg += item.baseValueStep
            game.player.money -= price;
        }
        if (isArmor(item) && item.blockPercent < item.baseValueMax && game.player.money >= price) {
            item.blockPercent += item.baseValueStep
            game.player.money -= price;
        }
        if (isShield(item) && item.blockChance < item.baseValueMax && game.player.money >= price) {
            item.blockChance += item.baseValueStep
            game.player.money -= price;
        }
        if (isBoots(item) && item.rate < item.baseValueMax && game.player.money >= price) {
            item.rate += item.baseValueStep
            game.player.money -= price;
        }
        if (isGloves(item) && item.hitChance < item.baseValueMax && game.player.money >= price) {
            item.hitChance += item.baseValueStep
            game.player.money -= price;
        }
        if (isHelmet(item) && item.blockValue < item.baseValueMax && game.player.money >= price) {
            item.blockValue += item.baseValueStep
            game.player.money -= price;
        }
    }

    return <div className="sell-item" onClick={upgrade}>
        <b>{item.name}</b>
    </div>
}