import { useRef, useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../enums/product";
import { findObjectById } from "../utils/arrays";
import { updateMenu } from "../api/product";

export const useMenus = () => {
    const [menus, setMenus] = useState(fakeMenu2);
    const [selectedItem, setSelectedItem] = useState(EMPTY_PRODUCT);
    const [editedProduct, setEditedProduct] = useState(null);
    const firstInputRef = useRef(null);

    const handleDelete = (id, userId) => {
        setMenus((prevMenus) => {
            const updatedMenus = prevMenus.filter(menu => menu.id !== id);
            updateMenu(userId, updatedMenus);
            return updatedMenus;
        });
    }

    const handleAdd = (newMenu, userId) => {
        setMenus((prevMenus) => {
            const updatedMenus = [...prevMenus, newMenu];
            updateMenu(userId, updatedMenus);
            return updatedMenus;
        });
    }

    const handleEdit = (updatedItem, userId) => {
        setMenus((prevMenus) => {
            const updatedMenus = prevMenus.map((menu) =>
                menu.id === updatedItem.id ? updatedItem : menu
            );
            updateMenu(userId, updatedMenus); // Met à jour le menu avec la version mise à jour
            return updatedMenus;
        });
        setSelectedItem(updatedItem);
        setEditedProduct(updatedItem);
    };

    const resetMenus = (userId) => {
        setMenus(fakeMenu2);
        updateMenu(userId, fakeMenu2);
    }

    const onDeselect = () => { 
        setSelectedItem(EMPTY_PRODUCT); 
        setEditedProduct(EMPTY_PRODUCT);
    }

    const handleSelectItem = (id) => {
        const itemSelected = findObjectById(id, menus);
        setSelectedItem(itemSelected);
        setEditedProduct(itemSelected);
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }

    const handleMenus = (menus, userId) => {
        setMenus(menus);
        updateMenu(userId, menus);
    }

    return { menus, handleMenus, handleDelete, handleAdd, handleEdit, resetMenus, onDeselect, handleSelectItem, selectedItem, editedProduct };
}
