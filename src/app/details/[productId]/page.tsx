"use client";

import { ChangeEvent, useState } from "react";

import Image from "next/image";
import { allProducts } from "@/app/data/data";
import { usePathname } from "next/navigation";
import {
  AiOutlineArrowRight,
  AiOutlineArrowDown,
  AiOutlineStar,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

import ProductNotFound from "@/app/components/ProductNotFound";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/GlobalRedux/Features/cart/cartSlice";
import { RootState } from "@/app/GlobalRedux/store";

import styles from "@/app/styles/productDetails.module.css";

interface cepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface ProductData {
  id: string,
  image: string,
  name: string,
  price: number,
  quantity: number,
}


export default function Home() {
  const [careGuideOpen, setCareGuideOpen] = useState(true);
  const [plantBioOpen, setPlantBioOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState<string | undefined>();
  const [cepData, setCepData] = useState<cepData[]>([]);
  const [error, setError] = useState(false);

  const pathname = usePathname();
  const product = pathname.split("/")[2];
  const productFiltered = decodeURIComponent(product);
  const productData = allProducts.find((item) => item.name === productFiltered);

  const dispatch = useDispatch();

  interface CartItem {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }

  const handleAddToCart = () => {
    if (!productData) return;
    
    const item = {
      id: productData.id,
      image: productData.image,
      name: productData.name,
      price: productData.price,
      quantity: quantity,
    };


    dispatch(addToCart(item));
  };

  const handleSetCep = (e: ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const getCep = async () => {
    const regexCEP = /^[0-9]{5}-?[0-9]{3}$/;

    if (!cep || !regexCEP.test(cep)) {
      setError(true);
      return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.erro) {
      setError(true);
      return;
    }
    setCepData([data]);
    setError(false);
  };

  const handleOpenDropDown = (dropDownName: string) => {
    if (dropDownName == "careGuideOpen")
      return (
        setCareGuideOpen(!careGuideOpen),
        setPlantBioOpen(false),
        setReviewsOpen(false)
      );
    if (dropDownName == "plantBioOpen")
      return (
        setPlantBioOpen(!plantBioOpen),
        setCareGuideOpen(false),
        setReviewsOpen(false)
      );
    if (dropDownName == "reviewsOpen")
      return (
        setReviewsOpen(!reviewsOpen),
        setCareGuideOpen(false),
        setPlantBioOpen(false)
      );
  };

  const changeCartQuantityUP = () => {
    setQuantity(quantity + 1);
  };
  const changeCartQuantityDOWN = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <main>
      <section className={styles.details_container}>
        {productData ? (
          <div className={styles.details_wrapper}>
            <div>
              <Image
                src={productData.image}
                alt={productData.name}
                width={330}
                height={260}
                className={styles.details_image}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.details_header}>
                <h1 className={styles.details_product_title}>
                  {productData.name}
                </h1>
                <div className={styles.details_product_price}>
                  <span>R${productData.price}</span>
                  {productData.oldPrice && (
                    <span className={styles.details_oldPrice}>
                      R${productData.oldPrice}
                    </span>
                  )}
                </div>
                <p>{productData.details}</p>
              </div>
              <div className={styles.options}>
                <div className={styles.options_quantity}>
                  <span>Quantidade</span>
                  <div className={styles.options_quantity_selector}>
                    <AiOutlinePlus onClick={changeCartQuantityUP} />
                    <span>{quantity}</span>
                    <AiOutlineMinus onClick={changeCartQuantityDOWN} />
                  </div>
                </div>
                <div className={styles.options_select}>
                  <span>Inclui vaso</span>
                  <select name="" id="">
                    <option value="">Não</option>
                    <option value="">Sim</option>
                  </select>
                </div>
              </div>
              <div className={styles.button_wrapper}>
                <button onClick={handleAddToCart} className={styles.button}>Adicionar ao Carrinho</button>
              </div>
              <div className={styles.details_delivery}>
                <h2>Entrega</h2>
                <p>
                  <span>Frete grátis</span> para São Paulo em compras acima de
                  R$200.00
                </p>
                <div className={styles.details_delivery_calc}>
                  <span>Calcular frete</span>
                  <div className={styles.details_delivery_calc_input}>
                    <input
                      type="text"
                      placeholder="00000-000"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          getCep();
                        }
                      }}
                      onChange={handleSetCep}
                      value={cep}
                    />
                    <button onClick={getCep}>Checar</button>
                  </div>
                  {error && (
                    <span className={styles.details_delivery_calc_error}>
                      CEP inválido
                    </span>
                  )}
                  {cepData.map((item) => (
                    <div
                      key={item.cep}
                      className={styles.details_delivery_calc_result}
                    > 
                      <p>
                        Delivery disponivel para esta localidade com o prazo entre <span>5 a 10 dias úteis.</span>
                      </p>
                      <div className={styles.details_delivery_calc_result_cep}>
                      <span>{item.logradouro},&nbsp;</span>
                      <span>{item.bairro},&nbsp;</span>
                      <span>{item.localidade}&nbsp;</span>
                      <span>{item.uf}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ProductNotFound />
        )}
      </section>
      <section className={styles.other_details_image_section}>
        <div className={styles.other_details_image_wrapper}>
          <Image
            src={"/Background.svg"}
            alt="a"
            width={1440}
            height={580}
            className={styles.other_details_image}
          />
        </div>
        <div className={styles.other_details_wrapper}>
          <div className={styles.other_details}>
            <div className={styles.other_details_dropdown}>
              <div className={styles.other_details_dropdown_headers}>
                <h2 onClick={() => handleOpenDropDown("careGuideOpen")}>
                  {careGuideOpen ? (
                    <AiOutlineArrowDown />
                  ) : (
                    <AiOutlineArrowRight />
                  )}
                  Guia de Cuidados
                </h2>
                <h2 onClick={() => handleOpenDropDown("plantBioOpen")}>
                  {plantBioOpen ? (
                    <AiOutlineArrowDown />
                  ) : (
                    <AiOutlineArrowRight />
                  )}
                  Sobre a Planta
                </h2>
                <h2 onClick={() => handleOpenDropDown("reviewsOpen")}>
                  {reviewsOpen ? (
                    <AiOutlineArrowDown />
                  ) : (
                    <AiOutlineArrowRight />
                  )}
                  Avaliações
                </h2>
              </div>
              <div className={styles.other_details_dropdown_content_container}>
                {careGuideOpen && (
                  <div className={styles.other_details_dropdown_content}>
                    <h1>Regagem</h1>
                    <p>
                      Verifique as necessidades de regagem específicas de cada
                      planta. Algumas plantas requerem rega regular, enquanto
                      outras preferem que o solo seque um pouco entre as regas.
                      Observe os sinais de falta ou excesso de água, como folhas
                      murchas ou amareladas. Forneça água suficiente para manter
                      o solo úmido, mas evite encharcar, pois o acúmulo de água
                      pode levar ao apodrecimento das raízes.
                    </p>
                    <h1>Requisitos de Luz</h1>
                    <p>
                      Conheça os requisitos de luz de cada planta. Algumas
                      plantas preferem luz solar direta, enquanto outras se
                      adaptam melhor à luz indireta ou sombra. Posicione as
                      plantas em locais que atendam às suas necessidades de luz.
                      Isso pode incluir janelas ensolaradas para plantas que
                      adoram sol ou áreas com menor intensidade luminosa para
                      plantas que preferem sombra. Observe sinais de falta ou
                      excesso de luz, como folhas queimadas pelo sol ou
                      crescimento lento.
                    </p>
                    <h1>Umidade</h1>
                    <p>
                      Monitore a umidade do ambiente em que as plantas estão
                      localizadas. Algumas plantas preferem um ambiente mais
                      úmido, enquanto outras se adaptam bem a ambientes mais
                      secos. Use técnicas como pulverização de água, bandejas de
                      água ou umidificadores para ajustar a umidade, se
                      necessário, de acordo com as necessidades das plantas.
                    </p>
                  </div>
                )}
                {plantBioOpen && (
                  <div className={styles.other_details_dropdown_content}>
                    <h1>Descrição</h1>
                    <p>
                      A Planta é uma adição versátil e encantadora para qualquer
                      espaço. Com suas características únicas e beleza natural,
                      essa planta trará vida e frescor onde quer que seja
                      colocada.
                    </p>
                    <h1>Características</h1>
                    <ul>
                      <li>
                        Folhagem Exuberante: A planta exibe uma folhagem
                        exuberante, com diferentes formas e tamanhos de folhas.
                        Sua variedade de tons verdes adiciona profundidade e
                        vivacidade ao ambiente.
                      </li>
                      <li>
                        Adaptabilidade: Essa planta possui uma capacidade
                        impressionante de se adaptar a diferentes condições de
                        luz e umidade. Ela pode prosperar tanto em locais com
                        luz direta como em áreas com sombra parcial.
                      </li>
                      <li>
                        Estilo Minimalista: Com sua simplicidade elegante, a
                        planta se encaixa perfeitamente em qualquer estilo de
                        decoração, desde ambientes modernos a espaços mais
                        tradicionais.
                      </li>
                    </ul>
                  </div>
                )}
                {reviewsOpen && (
                  <div
                    className={
                      styles.other_details_dropdown_content_review_wrapper
                    }
                  >
                    <div
                      className={styles.other_details_dropdown_content_review}
                    >
                      <div className={styles.review}>
                        <h1>Felipe</h1>
                        <span>1 dia atrás</span>
                        <p>
                          A Planta é linda e se adaptou facilmente ao meu
                          espaço. Estou muito satisfeito!
                        </p>
                        <span>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </span>
                      </div>
                      <div className={styles.review}>
                        <h1>Ana</h1>
                        <span>1 semana atrás</span>
                        <p>
                          A Planta é simplesmente encantadora! Adoro como ela
                          traz vida ao meu ambiente de forma tão fácil de
                          cuidar. Recomendo!
                        </p>
                        <span>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </span>
                      </div>
                      <div className={styles.review}>
                        <h1>Pedro</h1>
                        <span>3 dias atrás</span>
                        <p>
                          A Planta é perfeita para quem procura uma planta
                          versátil e de baixa manutenção. Estou muito feliz com
                          a minha escolha e ela adicionou um toque especial à
                          minha casa.
                        </p>
                        <span>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
