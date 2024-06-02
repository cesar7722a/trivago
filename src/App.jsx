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
import { FaAngleRight } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LiMenu } from "./componentes/li-menu";
import { ModalMenu } from "./componentes/card-menu"
import { Modal } from "./componentes/modal";
import { CardModal } from "./card_modal";
import { TitleModal } from "./componentes/titleModal";
import { SelectCountry } from "./componentes/dinaComponentes/select";
import { CustomSelect } from "./componentes/customSelect";

function App() {

  return (
    < div>
      <header>
        <div className="flex justify-between items-center h-13 px-48">
          <h1 className="">
            <img className="w-28 h-full" src={logoTrivago} alt="Logo trivago" title="Logo trivago" />
          </h1>
          <ul className="flex">

            <LiMenu>
              <di className="flex items-center justify-start gap-1.5">
                <RxCounterClockwiseClock className="size-5" />
                Visualizações recentes
              </di>
              <ModalMenu>
                <span>card</span>
              </ModalMenu>
            </LiMenu>

            <LiMenu>
              <CiHeart className="size-7" />
              Favoritos
            </LiMenu>
            <LiMenu>
              <TfiWorld className="size-5" />
              PT.
              <LuEuro />
            </LiMenu>
            <LiMenu>
              <HiOutlineUserCircle className="size-6" />
              Fazer Login
            </LiMenu>
            <LiMenu>
              <di className="flex items-center justify-start gap-1.5">
                <RiMenuLine className="size-5" />
                Menu
              </di>
              <ModalMenu className="w-6 h-12">
                visualizações
              </ModalMenu>
            </LiMenu>
          </ul>
        </div>
        <hr />
        <div className="flex justify-start h-15 shadow-[0_4px_10px_4px_rgba(0,0,0,0.2)] mt-8 mx-48 rounded-lg">
          <div className="flex hover:bg-[#F3F4F5] hover:rounded-lg m-1">
            <section className="flex gap-2.5 items-center">
              <IoIosSearch className="text-black cursor-pointer size-7 w-9 font-bold" />
              <section className="flex flex-col">
                <h2 className="text-[#6c707a] text-xs">Destino</h2>
                <h3 className="text-[#0a1121] text-sm font-bold">Estado Unido da Amé...</h3>
              </section>
              <span className="p-3 cursor-pointer text-[#0a1121] font-bold">X</span>
            </section>
          </div>

          <div className="flex items-center border border-x-[#dbdde1] border-y-0 w-80 cursor-pointer">
            <section className="flex items-center gap-2.5 hover:bg-[#F3F4F5] hover:rounded-lg h-14 w-52 mx-1">
              <GoArchive className="text-black cursor-pointer size-5 w-9 font-bold" />
              <section className="flex flex-col w-28">
                <h2 className="text-[#6c707a] text-xs">Entada</h2>
                <h3 className="text-[#0a1121] text-sm font-bold">ter, 22/03/2012</h3>
              </section>
            </section>
            <section className="w-px h-8 bg-[#dbdde1]"></section>
            <section className="hover:bg-[#F3F4F5] pl-2 w-44 flex flex-col h-14 justify-center hover:rounded-lg m-1">
              <h2 className="text-[#6c707a] text-xs">Saída</h2>
              <h3 className="text-[#0a1121] text-sm font-bold">ter, 22/03/2012</h3>
            </section>
          </div>

          <div className="flex gap-3 items-center">
            <section className="flex items-center justify-start gap-3 w-[14.6rem] pl-2 hover:bg-[#F3F4F5] my-1 ml-1 h-14 hover:rounded-lg cursor-pointer">
              <LuBedDouble className="size-5" />
              <section>
                <h2 className="text-[#6c707a] text-xs">Hóspedes e quartos</h2>
                <h3 className="text-[#0a1121] text-sm font-bold">2 hóspedes, 1 quarto</h3>
              </section>
            </section>
            <button className="bg-[#0077c2] py-[12px] px-[32px] text-base text-[#fff] font-bold rounded-lg">Pesquisar</button>
          </div>
        </div>

        <div className="flex mx-48 gap-2 mt-10">
          <section className="flex flex-col w-72 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-sm text-[#0a1121]">
              <strong>Preço:</strong>por diária
            </h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="flex gap-1 items-center text-sm"><LuEuro />1 -<LuEuro />500 +</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-sm text-[#0a1121]">
              <strong>Filtros</strong>
            </h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-sm">Escolher</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-sm text-[#0a1121]">
              <strong>Avaliação</strong>
            </h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-sm">Todas</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-pointer">
            <h2 className="flex gap-1 ml-2 mb-1 text-sm text-[#0a1121]"><strong>Tipo</strong></h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-sm">Escolher</span>
              <FaAngleDown />
            </section>
          </section>

          <section className="w-40 cursor-not-allowed">
            <h2 className="flex gap-1 ml-2 mb-1 text-sm text-[#0a1121] cursor-not-allowed">
              <strong>Localização</strong>
            </h2>
            <section className="flex border border-[#dbdde1] 
            items-center justify-between px-2.5 py-1.5
            rounded-3xl">
              <span className="text-sm">Estados Unidos d...</span>
              <FaAngleDown />
            </section>
          </section>

        </div>
      </header>
      <main className="bg-gray-100 mt-4">
        <div className="mx-48 flex justify-between items-center pt-5 mb-4">
          <section className="flex gap-1.5 items-center">
            <span className="text-sm text-[#0a1121] font-bold cursor-default">Ordenar por</span>
            <select name="" id=""
              className="cursor-pointer rounded-lg h-9 bg-white
                       w-44 text-sm outline-none border border-gray-300 px-1">
              <option value="">Sugestões</option>
              <option value="">Somente Preço</option>
              <option value="">Avaliação e Sugestões</option>
              <option value="">Preço e Sugestões</option>
              <option value="">Somente avaliação</option>
            </select>
          </section>
          <section className="flex gap-4 items-center">
            <span className="text-sm flex gap-1 text-[#0a1121]">
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
          <p className="flex items-center gap-1 text-xs text-[#6c707a] cursor-pointer mb-0.5">
            Como o pagamento afeta a classificação
            <CiCircleAlert className="size-5" />
          </p>
          <div className="flex flex-col gap-2">
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
          <div className="flex justify-center items-center h-16 mt-6 gap-2 text-base">
            <button className="w-8 h-8
            bg-gray-600 rounded-md text-white font-bold">
              1
            </button>
            <button className="w-8 h-8 text-slate-500 hover:border
             hover:bg-white hover:border-slate-500 font-bold rounded-md">
              2
            </button>
            <button className="w-8 h-8 text-slate-500 hover:border
             hover:bg-white hover:border-slate-500 font-bold rounded-md">
              3
            </button>
            <button className="w-8 h-8 text-slate-500 hover:border
             hover:bg-white hover:border-slate-500 font-bold rounded-md">
              4
            </button>
            <span className="font-bold text-sm text-slate-500">...</span>
            <button className="w-8 h-8 text-slate-500 hover:border
             hover:bg-white hover:border-slate-500 font-bold rounded-md">
              40
            </button>
            <button className="w-8 h-8 text-black hover:border flex justify-center items-center
             hover:bg-white hover:border-slate-500 font-bold rounded-md">
              <FaAngleRight />
            </button>
          </div>
          <div className="my-5">
            <hr />
          </div>
          <div className="  border-gray-300 items-center mb-8 bg-white h-16 rounded-2xl">
            <div className="flex text-xs border  border-gray-300 rounded-2xl
          text-[#0a1121] items-center gap-2 bg-white h-16 pl-2">
              <IoIosNotificationsOutline className="size-8 text-orange-400" />
              <p>Os preços e a disponibilidade que recebemos dos sites de reserva mudam com frequência. Por isso, pode haver diferenças entre as ofertas que você viu no trivago e os preços disponíveis nos sites de reserva.</p>
            </div>
            <div className="bg-[#afb3bc] h-1 mx-[20px] rounded-bl-2xl rounded-br-2xl"></div>
          </div>
        </div>
      </main>
      <footer className="bg-[#0a1121]">
        <div className="mx-44 pt-10 pb-20">
          <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold">Trivago</h1>
            <section className="flex items-center gap-1.5 h-12">
              <span className="h-5 w-5 bg-white flex items-center justify-center rounded-full">
                <FaFacebookF className="size-4" />
              </span>
              <span className="h-5 w-5 bg-white flex items-center justify-center rounded-full">
                <FaXTwitter className="size-4" />
              </span >
              <span className="h-5 w-5 bg-white flex items-center justify-center rounded-full">
                <FaInstagram className="size-4" />
              </span>
              <span className="h-5 w-5 bg-white flex items-center justify-center rounded-full">
                <FaYoutube className="size-4" />
              </span>
              <span className="h-5 w-5 bg-white flex items-center justify-center rounded-full">
                <FaLinkedinIn className="size-4" />
              </span>
            </section>
          </div>
          <div className="mt-8 mb-6">
            <select name="" id=""
              className="cursor-pointer rounded-lg h-9 text-white
                       w-56 text-sm outline-none bg-[#0a1121] border border-gray-300 px-1">
              <option value="">Sugestões</option>
              <option value="">Somente Preço</option>
              <option value="">Avaliação e Sugestões</option>
              <option value="">Preço e Sugestões</option>
              <option value="">Somente avaliação</option>
            </select>
          </div>
          <div className="flex gap-4">
            <ul className="flex flex-col gap-2 w-[22rem]">
              <li className="text-sm text-white"><a href="#">Quem Somos</a></li>
              <li className="text-sm text-white"><a href="#">Vagas</a></li>
              <li className="text-sm text-white"><a href="#">Imprensa</a></li>
              <li className="text-sm text-white"><a href="#">Investor relations</a></li>
              <li className="text-sm text-white"><a href="#">App trivago - acesse de onde estiver</a></li>
              <li className="text-sm text-white"><a href="#">trivago Business Studio</a></li>
              <li className="text-sm text-white"><a href="#">Affiliate</a></li>
            </ul>
            <ul className="flex flex-col gap-2 w-[22rem]">
              <li className="text-sm text-white"><a href="#">Central de ajuda</a></li>
              <li className="text-sm text-white"><a href="#">Descubra como o trivago funciona</a></li>
              <li className="text-sm text-white"><a href="#">Condições de uso</a></li>
              <li className="text-sm text-white"><a href="#">Informações legais</a></li>
              <li className="text-sm text-white"><a href="#">Preferências de cookies</a></li>
              <li className="text-sm text-white"><a href="#">Aviso de Privacidade</a></li>
              <li className="text-sm text-white"><a href="#">Cyber Security</a></li>
            </ul>
            <div className="flex flex-col gap-5">
              <p className="text-xl text-white font-bold">Quer ideias exclusivas para a sua próxima estadia? Inscreva-se em nossa newsletter.</p>
              <section className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Endereço de e-mail"
                  className=" bg-[#0a1121] border-b-2 border-[#0077c2] py-2 w-80 text-xl  outline-none placeholder:text-white placeholder:text-lg" />
                <button
                  className="px-8 py-2 bg-[#0077c2] text-lg text-white rounded-lg">
                  Inscreva-se
                </button>
              </section>
              <section>
                <p className="text-[#dbdde1] text-xs">Quer ideias exclusivas para a sua próxima estadia? Inscreva-se em nossa newsletter.</p>
                <p className="text-[#dbdde1] text-xs">Direitos autorais 2024 trivago | Todos os direitos reservados.</p>
              </section>
            </div>
          </div>
        </div>
      </footer>
      <Modal>
        <CardModal>
          <TitleModal>
            <h1 className="text-[#000] text-base font-bold">Selecione o idioma e a moeda</h1>
            <span className="text-[#000] text-base font-bold cursor-pointer">X</span>
          </TitleModal>
          <CustomSelect className="px-6">
            <h1 className="text-xs text-[#0a1121]">Idioma</h1>
            <SelectCountry
              className="w-[21.2rem] border border-r-emerald-50 px-2 py-2 rounded-lg mt-1 text-[#0a1121] outline-none"
              optionCountry={
                ["Angola", "França", "Alemanha", "Quenia", "Japão", "Ruanda"]
              } />
          </CustomSelect>
          <CustomSelect className="px-6">
            <h1 className="text-xs text-[#0a1121]">Moeda</h1>
            <SelectCountry
              className="w-[21.2rem] border border-r-emerald-50 px-2 py-2 rounded-lg mt-1 text-[#0a1121] outline-none"
              optionCountry={
                ["EUR-Euro", "GBP-Libra esterlina", "USD-Dólar dos Estados Unidos", "ARS-Peso Argentino", "AUD-Dólar australiano", "BRL-Real"]
              } />
          </CustomSelect>
          <div className="py-4 flex items-center justify-end pr-4 border border-t-emerald-50 rounded-br-lg rounded-bl-lg">
            <button className="bg-[#007cc2] px-3 py-2 font-bold rounded-lg text-white text-sm">Aplicar</button>
          </div>
        </CardModal>
      </Modal>
    </div>
  )
}

export default App
