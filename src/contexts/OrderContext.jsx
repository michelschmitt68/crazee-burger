import React from 'react';

const OrderContext = React.createContext({
    // Toggle admin
    isChecked: false,
    handleToggle: () => {},

    // Menus
    menus: {},
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

    //Add on buyList
    handleAddBuyList: () => {},
    handleDeleteBuyList: () => {},
    totalBuy:0
});

export default OrderContext;
