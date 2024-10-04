import React from 'react';

const AdminContext = React.createContext({
    // Toggle admin
    isChecked: false,
    handleToggle: () => {},

    // Menus
    menus: [],
    setMenus: () => {},
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
    setIsVisible: () => {},

    // Tabs
    activeTab: "", 
    setActiveTab: () => {}
});

export default AdminContext;
