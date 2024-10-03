import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (product) => {

   return [
    {
        type:"text",
        name:"title",
        Icon:<FaHamburger/>,
        placeholder:"Nom du produit (ex: Super Burger)",
        value: product.title
    },
    {
        type:"text",
        name:"imageSource",
        Icon:<BsFillCameraFill/>,
        placeholder:"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        value: product.imageSource
    },
    {
        type:"text",
        name:"price",
        Icon:<MdOutlineEuro/>,
        placeholder:"Prix",
        value: product.price
    }
    
]}


