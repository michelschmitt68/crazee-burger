import React from 'react';

const AdminContext = React.createContext({

  //toogle admin
  isChecked: false,
  handleToggle: () => {},

  //menus
  menus: [],
  setMenus: () => {},
  resetMenus: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  newProduct: {},
  setNewProduct: () => {}
});

export default AdminContext;