import { useState } from "react";

export const useBasket = (menus, handleMenus) => {

    const [totalBuy, SetTotalBuy] = useState(0);

    const handleAddBuyList = (id) => {
        const updatedMenus = menus.map((menu) => {

            if (menu.id === id) {
                menu.quantity += 1; 
            }
            return menu; 
        });

        handleMenus(updatedMenus); 
        handleTotalBuy(updatedMenus); 
    };

    const handleTotalBuy = (updatedMenus) => {
        const total = updatedMenus.reduce((acc, menu) => 
            acc + (menu.price * menu.quantity), 0 
        );
        SetTotalBuy(total); 
        console.log("Total:", total);
    };

    return { handleAddBuyList, totalBuy };
};