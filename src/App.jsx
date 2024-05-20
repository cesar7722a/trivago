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
              className="flex flex-col justify-center  cursor-pointer
              text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5] 
              ">
              <di className="flex items-center justify-start gap-1.5">
                <RxCounterClockwiseClock className="size-5" />
                Visualizações recentes
              </di>
              <div className="flex-none absolute mt-80 w-72 h-60 bg-[#FFF] rounded-md shadow-2xl 
              invisible hover:visible">
                <span className="flex-none">card</span>
              </div>
            </li>
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5] cursor-pointer">
              <CiHeart className="size-7" />
              Favoritos
            </li>
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5] cursor-pointer">
              <TfiWorld className="size-5" />
              PT.
              <LuEuro />
            </li>
            <li
              className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5] cursor-pointer">
              <HiOutlineUserCircle className="size-6" />
              Fazer Login
            </li>
            <li className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5] cursor-pointer">
              <RiMenuLine className="size-5" />
              Menu
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex justify-start h-16 shadow-2xl mt-8 mx-44 rounded-md">
          <div className="flex hover:bg-[#F3F4F5] hover:rounded-lg m-1">
            <section className="flex gap-2 items-center">
              <IoIosSearch className="text-black cursor-pointer size-7 w-9 font-bold" />
              <section className="flex flex-col">
                <h2 className="text-[#6c707a] text-[12px]">Destino</h2>
                <h3 className="text-[#0a1121] text-[14px] font-bold">Estado Unido da Amé...</h3>
              </section>
              <span className="p-2 cursor-pointer text-[#0a1121] font-bold">x</span>
            </section>
          </div>

          <div className="flex items-center border border-x-[#dbdde1] border-y-0 w-80">
            <section className="flex items-center hover:bg-[#F3F4F5] hover:rounded-lg w-36 m-1">
              <GoArchive className="text-black cursor-pointer size-5 w-9 font-bold" />
              <section>
                <h2 className="flex flex-col text-sm/3">Entada</h2>
                <h3 className="text-xs text-[#0a1121]">ter, 22/03/2012</h3>
              </section>
            </section>
            <section className="w-px h-8 bg-[#dbdde1]"></section>
            <section className="hover:bg-[#F3F4F5] pl-2 w-36 flex flex-col h-full gap-1 justify-center hover:rounded-lg m-1">
              <h2 className="flex flex-col text-sm/3">Saída</h2>
              <strong className="text-xs">ter, 22/03/2012</strong>
            </section>
          </div>

          <div className="flex gap-4">
            <section className="flex justify-start gap-2 w-60 pl-2 border border-spacing-2">
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
