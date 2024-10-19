import React from 'react';

const OrderContext = React.createContext({

    //userId
    username: "",
    
    // Toggle admin
    isChecked: false,
    handleToggle: () => {},

    // Menus
    menus: [],
    handleMenus: () => {},
    resetMenus: () => {}, 

    // Select
    handleSelectItem: () => {},
    selectedItem: {},
    onDeselect: () => {},
    
    // Add
    newProduct: {},
    setNewProduct: () => {},
    handleAdd: () => {},

    // Edit
    editedProduct: {}, 
    setEditedProduct: () => {},
    handleEdit: () => {},
    firstInputRef: React.createRef(), 

    // Delete  
    handleDelete: () => {},

    // Panel admin
    isVisible: false, 
    handleIsVisible: () => {},

    // Tabs
    activeTab: "", 
    handleActivTab: () => {},

    // //Add on buyList
    // handleAddBuyList: () => {},
    // handleDeleteBuyList: () => {},
    // totalBuy:0

    //basket
    basket: [],
    totalBuy: 0,
    handleAddToBasket: () => {},
    handleDeleteBasketProduct: () => {}
});

export default OrderContext;
