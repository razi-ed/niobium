
interface menuItem {
    value:string;
    link:string;
}

export interface HeaderProps {
    color?:string;
    logoImage?:string;
    logoAltName?:string;
    menuItems?:menuItem
}