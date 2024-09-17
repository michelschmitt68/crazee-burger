import React from 'react';


const MenusContext = React.createContext({
    menus: [{}],
    setMenus: () => {}
})

export default MenusContext;
