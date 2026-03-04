
import computerImg from './assets/images/computer.svg'
import './App.css'
import HeaderClient from './components/HeaderClient'

function App() {

  return (
    <>
      <HeaderClient />
      <main>

        <section id="product-details-section" className="dsc-container">
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
                <div className="dsc-category">
                  <span>Electrónicos</span>
                </div>
                <div className="dsc-category">
                  <span>Computadores</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">
              Comprar
            </div>
            <div className="dsc-btn dsc-btn-white">
              Início
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
