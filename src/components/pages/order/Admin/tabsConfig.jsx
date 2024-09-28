import { IoAdd } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";

const tabsConfig = [
  {
    id: "addProduct",
    Icon: <IoAdd className="icon" />,
    inputValue: "Ajouter un produit",

  },
  {
    id: "editProduct",
    Icon: <FaPen className="icon" />,
    inputValue: "Modifier un produit",
  }
];

export default tabsConfig;