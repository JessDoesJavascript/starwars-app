import { Starship } from "../domain/model";
interface ProductListingsProps {
    starships: Starship[];
    handleSeeMoreClick: () => void;
    noMoreStarships: boolean;
}
export declare function ProductListings(props: ProductListingsProps): import("react/jsx-runtime").JSX.Element;
export {};
