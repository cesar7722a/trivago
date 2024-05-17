import logoTrivago from "./assets/imagens/Trivago-Logo.jpg";
import { CiHeart } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { LuEuro } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiMenuLine } from "react-icons/ri";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GoArchive } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

function App() {

  return (
    < div>
      <header>
        <div className="flex justify-between items-center h-13 px-44">
          <h1 className="">
            <img className="w-28 h-full" src={logoTrivago} alt="Logo trivago" title="Logo trivago" />
          </h1>
          <ul className="flex">
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5]">
              <RxCounterClockwiseClock className="size-5" />
              Visualizações recentes
            </li>
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5]">
              <CiHeart className="size-7" />
              Favoritos
            </li>
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5]">
              <TfiWorld className="size-5" />
              PT.
              <LuEuro />
            </li>
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5]">
              <HiOutlineUserCircle className="size-6" />
              Fazer Login
            </li>
            <li className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5]">
              <RiMenuLine className="size-5" />
              Menu
            </li>
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
              <span>E 1 - <LuEuro /> 500 +</span>
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
        <div>
          <p>Como o pagamento afeta a classificação<CiCircleAlert /></p>
          <div>
            <img src="" alt="" />
            <div>
              <section>
                <span>Holiday Inn Express & Suites Miami Kendall, An Ihg Hotel </span><FaRegHeart />
              </section>
              <section>
                <span><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></span>
                <span> Hotel</span>
              </section>
              <section>
                <span>Kendall</span><FaAngleDown />
              </section>
              <section>
                <span><strong>8.9 - Muito Bom </strong>(2011 avalições)</span><FaAngleDown />
              </section>
            </div>
            <div>
              <section>
                <section>Holiday Inn Express</section>
                <section>
                  <span><FaCheck />cancelamento gratuito</span>
                </section>
                <section>
                  <span><LuEuro /> 100</span>
                  <button>Ver Oferta</button>
                </section>
              </section>
              <section>
                <section>
                  <span>Country Inn & Suites</span>
                  <span><LuEuro /> 64</span>
                </section>
                <section>
                  <section>
                    <span>Nosso Preço mais baixo:</span>
                    <span><LuEuro />Morerooms</span>
                  </section>
                  <FaAngleDown />
                </section>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
