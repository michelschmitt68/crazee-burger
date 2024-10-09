import { useRef, useState } from "react";
import { fakeMenu1 } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../enums/product";


export const useMenus = () => {

    const [menus, setMenus] = useState(fakeMenu1);
    const [selectedItem, setSelectedItem] = useState(EMPTY_PRODUCT);
    const [editedProduct, setEditedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("addProduct");
    const [isVisible, setIsVisible] = useState(false);
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
        setSelectedItem(selected);
        setEditedProduct(selected);
        setActiveTab("editProduct");
        setIsVisible(true);
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
    }

    const handleIsVisible = (isVisible) => {
        setIsVisible(!isVisible)
    }

    const handleActiveTab = (activeTab) => {
        setActiveTab(activeTab);
    }

    const handleEditedProduct = (product) => {
        setEditedProduct(product);
    }
    return {menus, handleDelete, handleAdd, handleEdit, resetMenus, onDeselect, handleSelectItem, selectedItem, editedProduct, handleEditedProduct, activeTab, handleActiveTab, isVisible, handleIsVisible}
}

