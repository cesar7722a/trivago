import logoTrivago from "./assets/imagens/Trivago-Logo.jpg";
import { FaGlobe } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GoArchive } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";

function App() {

  return (
    <>
      <header>
        <div>
          <h1 className="w-8 h-8"><img src={logoTrivago} alt="Logo trivago" title="Logo trivago" /></h1>
          <ul>
            <li><RxCounterClockwiseClock />Visualizações recentes</li>
            <li><MdFavoriteBorder />Favoritos</li>
            <li><FaGlobe />PT.E</li>
            <li><FaRegCircleUser />Fazer Login</li>
            <li><MdMenu />Menu</li>
          </ul>
        </div>
        <hr />
        <div>

          <div>
            <section>
              <IoIosSearch />
              <section>
                <h2>Destino</h2>
                <h3>Estado Unido da Amé...</h3>
              </section>
              <span>x</span>
            </section>
          </div>

          <div>
            <section>
              <GoArchive />
              <section>
                <h2>Entada</h2>
                <h3>ccolocar data</h3>
              </section>
            </section>
            <section></section>
            <section>
              <h2>Saída</h2>
              <h3>colocar data</h3>
            </section>
          </div>

          <div>
            <section>
              <LuBedDouble />
              <section>
                <h2>Hóspedes e quartos</h2>
                <h3>2 hóspedes, 1 quarto</h3>
              </section>
            </section>
            <button>Pesquisar</button>
          </div>
        </div>

        <div>
          <section>
            <h2><strong>Preço:</strong>por diária</h2>
            <section>
              <span>E 1 - E 500 +</span>
              v
            </section>
          </section>

          <section>
            <h2><strong>Filtros</strong></h2>
            <section>
              <span>Escolher</span>
              v
            </section>
          </section>

          <section>
            <h2><strong>Avaliação</strong></h2>
            <section>
              <span>Todas</span>
              v
            </section>
          </section>

          <section>
            <h2><strong>Tipo</strong></h2>
            <section>
              <span>Escolher</span>
              v
            </section>
          </section>

          <section>
            <h2><strong>Localização</strong></h2>
            <section>
              <span>Estados Unidos d...</span>
              v
            </section>
          </section>

        </div>
      </header>
      <main>
        <div>
          <section>
            <span>Ordenar por</span>
            <select name="" id="">
              <option value="">Sugestões</option>
              <option value="">Somente Preço</option>
              <option value="">Avaliação e Sugestões</option>
              <option value="">Preço e Sugestões</option>
              <option value="">Somente avaliação</option>
            </select>
          </section>
          <section>
            <span>Encontramos <strong>1000</strong>+ hóteis em 324 sites</span>
            <span><MdLocationPin />Ver no mapa</span>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
