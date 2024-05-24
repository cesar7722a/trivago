import logoTrivago from "./assets/imagens/Trivago-Logo.jpg";
import hotel_1 from "./assets/imagens/imagens hotel/0e134be9f0673d77a2381165da01d6c4070146eb7b1e67777a516d664e56.jpeg"
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
      <main className="bg-gray-100 mt-4">
        <div className="mx-48 flex justify-between items-center pt-5 mb-4">
          <section className="flex gap-1.5 items-center">
            <span className="text-[14px] text-[#0a1121] font-bold cursor-default">Ordenar por</span>
            <select name="" id=""
              className="cursor-pointer rounded-lg h-9 bg-white
                       w-44 text-[14px] outline-none border border-gray-300 px-1">
              <option value="">Sugestões</option>
              <option value="">Somente Preço</option>
              <option value="">Avaliação e Sugestões</option>
              <option value="">Preço e Sugestões</option>
              <option value="">Somente avaliação</option>
            </select>
          </section>
          <section className="flex gap-4 items-center">
            <span className="text-[14px] flex gap-1 text-[#0a1121]">
              Encontramos
              <strong>1000+</strong>
              hóteis em
              <strong>324</strong>
              sites
            </span>
            <span className="bg-center border border-white px-16 py-2.5 rounded-lg 
            cursor-pointer">
              <span className="flex items-center text-[14px] font-bold text-[#0a1121] bg-white py-1 px-4 rounded-lg gap-2 border border-[#0a1121]">
                <MdLocationPin className="size-5" />Ver no mapa
              </span>
            </span>
          </section>
        </div>
        <div className="flex flex-col mx-48">
          <p className="flex items-center gap-1 text-[12px] text-[#6c707a] cursor-pointer mb-0.5">
            Como o pagamento afeta a classificação
            <CiCircleAlert className="size-5" />
          </p>
          <div className="flex h-52 border shadow-lg rounded-lg gap-2 bg-white">
            <div className="rounded-tl-lg rounded-bl-lg h-auto">
              <img src={hotel_1} alt="" className="h-full w-72 rounded-tl-lg rounded-bl-lg" />
            </div>
            <div className="flex flex-col w-2/4 py-2 gap-3">
              <section className="flex justify-between items-center">
                <span className="text-[20px] font-bold">Holiday Inn Express & Suites Miami...</span>
                <FaRegHeart className="size-5 hover:text-red-700 cursor-pointer" />
              </section>
              <section className="flex gap-1.5 items-center">
                <span className="flex">
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                </span>
                <span>Hotel</span>
              </section>
              <section className="flex justify-between h-8 items-center hover:bg-gray-100 pr-1 cursor-pointer text-sm text-[#0a1121]">
                <span>Kendall</span>
                <FaAngleDown />
              </section>
              <section className="flex justify-between h-8 items-center hover:bg-gray-100 pr-1 cursor-pointer text-sm text-[#0a1121]">
                <span>
                  <strong>8.9 - Muito Bom </strong>
                  (2011 avalições)
                </span>
                <FaAngleDown />
              </section>
            </div>
            <div className="flex flex-col w-96 p-2 pb-0 pl-0">
              <section className="flex flex-col gap-2 border border-[#005f00] p-1 pl-1.5 h-52 bg-[#f1f8ea] rounded-lg">
                <section className="text-[12px] text-[#0a1121] font-bold mt-1">Holiday Inn Express</section>
                <section className="flex gap-1">
                  <span className="flex items-center text-[12px] text-[#005f00] font-bold gap-1">
                    <FaCheck />
                    cancelamento gratuito
                  </span>
                  <span className="flex items-center text-[12px] text-[#005f00] gap-1">
                    <FaCheck />
                    cancelamento gratuito
                  </span>
                </section>
                <section className="flex items-center gap-4 justify-between">
                  <section className="flex flex-col">
                    <span className="flex items-center text-lg font-bold"><LuEuro /> 100</span>
                    <span className="flex items-center text-[11px] gap-1">
                      17 noite por
                      <strong className="flex items-center"><LuEuro />1.060</strong>
                    </span>
                  </section>
                  <button className="bg-green-700 py-1.5 px-9 rounded-lg text-white font-bold">Ver Oferta</button>
                </section>
              </section>
              <section className="flex text-[12px] text-[#0a1121] gap-2 my-2">
                <section className="flex flex-col hover:bg-gray-300 cursor-pointer bg-[#f3f4f5] border w-32 rounded-lg p-1">
                  <span className="font-bold ">Country Inn & Suites</span>
                  <span className="flex items-center font-bold text-[16px]"><LuEuro /> 64</span>
                  <span>Por diária</span>
                </section>
                <section>
                  <section className="flex flex-col hover:bg-gray-300 cursor-pointer gap-0 border bg-[#f3f4f5] w-44 rounded-lg p-1">
                    <span className="font-bold">Nosso Preço mais baixo:</span>
                    <section className="flex justify-between items-center">
                      <span className="flex items-center text-[16px] font-bold"><LuEuro />66</span>
                      <FaAngleDown />
                    </section>
                    <span>Por diária no site: Moreroo...</span>
                  </section>
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
