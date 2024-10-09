import { useState } from "react";

export const useAdminPanel = () => {

    const [activeTab, setActiveTab] = useState("addProduct");
    const [isVisible, setIsVisible] = useState(false);

    const handleIsVisible = (isVisible) => {
        setIsVisible(isVisible)
        console.log(isVisible)
    }

    const handleActiveTab = (activeTab) => {
        setActiveTab(activeTab);
    }
    return { activeTab, isVisible, handleIsVisible, handleActiveTab}
}