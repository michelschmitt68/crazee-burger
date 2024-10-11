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

    const handleDeleteBuyList = (id) => {
        const updatedMenus = menus.map((menu) => {
            if (menu.id === id) {
                return { ...menu, quantity: 0 };
            }
            return menu; 
        });
        handleMenus(updatedMenus); 
        handleTotalBuy(updatedMenus);
    }

    const handleTotalBuy = (updatedMenus) => {
        const total = updatedMenus.reduce((acc, menu) => 
            acc + (menu.price * menu.quantity), 0 
        );
        SetTotalBuy(total); 
    };

    return { handleAddBuyList, handleDeleteBuyList, totalBuy };
};