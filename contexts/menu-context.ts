import { createContext, useContext } from "react";

export type MenuContext = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const MyMenuContext = createContext<MenuContext>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
});

export const useMenuContext = () => {
    return useContext(MyMenuContext);
};
