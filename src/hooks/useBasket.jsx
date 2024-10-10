export const useBasket = (menus, handleMenus) => {

    const handleAddBuyList = (id) => {

        handleMenus((prevMenus) => 
            prevMenus.map((menu) => 
                menu.id === id 
                    ? { ...menu, quantity: menu.quantity + 1 } 
                    : menu
            )
        );
    };

    return { handleAddBuyList };
};