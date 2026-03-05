import './styles.css'
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import type { ProductDTO } from '../../../models/products';

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

export default function ProductDetails() {
    return (
        <>
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary name="Comprar" />
                        <ButtonInverse name="Início" />
                    </div>
                </section>
            </main>
        </>
    );
}