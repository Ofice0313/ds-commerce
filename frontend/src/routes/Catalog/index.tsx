import HeaderClient from "../../components/HeaderClient"
import './styles.css'
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import type { ProductDTO } from "../../models/products";

const product: ProductDTO = {
    id: 1,
    name: "Smart TV",
    price: 5000.90,
    description: "The TV is very good, with a 4K resolution and a 60Hz refresh rate. It has a sleek design and comes with a remote control. The picture quality is excellent, with vibrant colors",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources-devsuperior/master/backend/img/2-big.jpg",
    categories: [
        { id: 1, name: "Electrónicos" },
        { id: 2, name: "Computadores" }
    ]
};

export default function Catalog() {
    return (
        <>
            <HeaderClient/>
            <main>
                <section id="catalog-section" className="dsc-container"> 
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                    </div>

                    <ButtonNextPage name="Carregar mais"/>
                </section>
            </main>
        </>
    );
}