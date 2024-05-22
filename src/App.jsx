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
        <div className="flex justify-between items-center h-13 px-48">
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
        <div className="flex justify-start h-15 shadow-[0_4px_10px_4px_rgba(0,0,0,0.2)] mt-8 mx-48 rounded-lg">
          <div className="flex hover:bg-[#F3F4F5] hover:rounded-lg m-1">
            <section className="flex gap-2.5 items-center">
              <IoIosSearch className="text-black cursor-pointer size-7 w-9 font-bold" />
              <section className="flex flex-col">
                <h2 className="text-[#6c707a] text-[12px]">Destino</h2>
                <h3 className="text-[#0a1121] text-[14px] font-bold">Estado Unido da Amé...</h3>
              </section>
              <span className="p-3 cursor-pointer text-[#0a1121] font-bold">X</span>
            </section>
          </div>

          <div className="flex items-center border border-x-[#dbdde1] border-y-0 w-80 cursor-pointer">
            <section className="flex items-center gap-2.5 hover:bg-[#F3F4F5] hover:rounded-lg h-14 w-52 mx-1">
              <GoArchive className="text-black cursor-pointer size-5 w-9 font-bold" />
              <section className="flex flex-col w-28">
                <h2 className="text-[#6c707a] text-[12px]">Entada</h2>
                <h3 className="text-[#0a1121] text-[14px] font-bold">ter, 22/03/2012</h3>
              </section>
            </section>
            <section className="w-px h-8 bg-[#dbdde1]"></section>
            <section className="hover:bg-[#F3F4F5] pl-2 w-44 flex flex-col h-14 justify-center hover:rounded-lg m-1">
              <h2 className="text-[#6c707a] text-[12px]">Saída</h2>
              <h3 className="text-[#0a1121] text-[14px] font-bold">ter, 22/03/2012</h3>
            </section>
          </div>

          <div className="flex gap-3 items-center">
            <section className="flex items-center justify-start gap-3 w-[14.6rem] pl-2 hover:bg-[#F3F4F5] my-1 ml-1 h-14 hover:rounded-lg cursor-pointer">
              <LuBedDouble className="size-5" />
              <section>
                <h2 className="text-[#6c707a] text-[12px]">Hóspedes e quartos</h2>
                <h3 className="text-[#0a1121] text-[14px] font-bold">2 hóspedes, 1 quarto</h3>
              </section>
            </section>
            <button className="bg-[#0077c2] py-[12px] px-[32px] text-[16px] text-[#fff] font-bold rounded-lg">Pesquisar</button>
          </div>
        </div>

        <div className="flex mx-48 gap-2 mt-10">
          <section className="flex flex-col w-72 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-[14px] text-[#0a1121]"><strong>Preço:</strong>por diária</h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="flex gap-1 items-center text-[14px]"><LuEuro />1 -<LuEuro />500 +</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-[14px] text-[#0a1121]"><strong>Filtros</strong></h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-[14px]">Escolher</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-[14px] text-[#0a1121]"><strong>Avaliação</strong></h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-[14px]">Todas</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-[14px] text-[#0a1121]"><strong>Tipo</strong></h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-[14px]">Escolher</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-not-allowed">
            <h2 className="flex gap-1 ml-2 mb-1 text-[14px] text-[#0a1121] cursor-not-allowed"><strong>Localização</strong></h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-[14px]">Estados Unidos d...</span>
              <FaAngleDown />
            </section>
          </section>

        </div>
      </header>
      <main className="bg-[#dbdde1] mt-4">
        <div className="mx-48 flex justify-between items-center pt-5">
          <section className="flex gap-1.5 items-center">
            <span className="text-[14px] text-[#0a1121] font-bold cursor-default">Ordenar por</span>
            <select name="" id="" className="pt-1 pr-2 pb-3 pl-4 rounded-lg outline-none border-spacing-2 border-[#dbdde1] ">
              <option value="">Sugestões</option>
              <option value="">Somente Preço</option>
              <option value="">Avaliação e Sugestões</option>
              <option value="">Preço e Sugestões</option>
              <option value="">Somente avaliação</option>
            </select>
          </section>
          <section className="flex gap-16">
            <span>Encontramos <strong>1000</strong>+ hóteis em 324 sites</span>
            <span>
              <span className="flex items-center"><MdLocationPin />Ver no mapa</span>
            </span>
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
