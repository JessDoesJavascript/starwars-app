import { Starship } from "../domain/model";
import "../index.css";
interface ProductCardProps {
    starship: Starship;
    addToCartFn: (message: string) => void;
}
export declare function ProductCard(props: ProductCardProps): import("react/jsx-runtime").JSX.Element;
export {};
