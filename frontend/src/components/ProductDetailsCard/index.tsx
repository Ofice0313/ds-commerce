import './styles.css'
import computerImg from '../../assets/images/computer.svg'
import ProductCategory from '../ProductCategory'

export default function ProductDetailsCard () {
    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
              <img src={computerImg} alt="Computer" />
            </div>
            <div className="dsc-product-details-bottom">
              <h3>R$ 5000,00</h3>
              <h4>Computer Gamer XT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur explicabo perferendis autem nam culpa harum iusto obcaecati eveniet
                voluptas fugit aspernatur corporis dicta delectus voluptatum
                soluta, dolores eaque neque? Qui!
              </p>
              <div className="dsc-category-container">
                <ProductCategory name="Electrónicos" />
                <ProductCategory name="Computadores" />
              </div>
            </div>
          </div>
    );
}