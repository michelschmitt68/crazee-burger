
import React from 'react';

const AdminContext = React.createContext({

  //toogle admin
   isChecked: false,
   handleToggle: () => {},

  //menus
   menus: [],
   setMenus: () => {},
   resetMenus: () => {}, 
   
    //select
     handleSelectItem: () => {},
     selectedItem: {},
    //add
     newProduct: {},
     setNewProduct: () => {},
     handleAdd: () => {},
    //edit
     editedProduct: {}, 
     setEditedProduct: () => {} ,
     handleEdit: () => {},
    //delete  
     handleDelete: () => {},

    //Panel admin
     isVisible: false, 
     setIsVisible: () => {},
      //tabs
       activeTab: "", 
       setActiveTab: () => {}

});

export default AdminContext;