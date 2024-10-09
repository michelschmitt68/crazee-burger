import { useRef, useState } from "react";
import { fakeMenu1 } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../enums/product";


export const useMenus = () => {

    const [menus, setMenus] = useState(fakeMenu1);
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
        setMenus(fakeMenu1);
    }
    const onDeselect = () => { 
        setSelectedItem(EMPTY_PRODUCT) 
        setEditedProduct(EMPTY_PRODUCT)
    }
    const handleSelectItem = ( id, title, imageSource, price) => {
        const selected = { id, title, imageSource, price };
        console.log(selected)
        setSelectedItem(selected);
        setEditedProduct(selected);
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
    }



    return {menus, handleDelete, handleAdd, handleEdit, resetMenus, onDeselect, handleSelectItem, selectedItem, editedProduct}
}

