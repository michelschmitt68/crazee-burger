import { useRef, useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../enums/product";
import { findObjectById } from "../utils/arrays";


export const useMenus = () => {

    const [menus, setMenus] = useState(fakeMenu2);
    const [selectedItem, setSelectedItem] = useState(EMPTY_PRODUCT);
    const [editedProduct, setEditedProduct] = useState(null);
    const firstInputRef = useRef(null);

    const handleDelete = (id) => {
        setMenus(prevMenus => prevMenus.filter(menu => menu.id !== id));
    }
    const handleAdd = (newMenu) => {
        setMenus([...menus, newMenu]);
    }
    const handleEdit = (updatedItem) => {
        setMenus((prevMenus) =>
          prevMenus.map((menu) =>
            menu.id === updatedItem.id ? updatedItem : menu
          )
        );
        setSelectedItem(updatedItem);
        setEditedProduct(updatedItem)
    }
    const resetMenus = () => {
        setMenus(fakeMenu2);
    }
    const onDeselect = () => { 
        setSelectedItem(EMPTY_PRODUCT) 
        setEditedProduct(EMPTY_PRODUCT)
    }
    const handleSelectItem = (id) => {
        const itemSelected = findObjectById(id, menus)
        console.log("suite", itemSelected)
        setSelectedItem(itemSelected);
        setEditedProduct(itemSelected);
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
    }

    const handleMenus = (menus) => {
        setMenus(menus);
    }

    return {menus, handleMenus, handleDelete, handleAdd, handleEdit, resetMenus, onDeselect, handleSelectItem, selectedItem, editedProduct}
}

