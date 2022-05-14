import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shopData } from "../../../mock/shop";
import { Container, Div, DivTabs, Flexing, Wrap } from "./style";

export const Description = () => {
  const [indexs, setIndexs] = useState(0);

  const { TabPane } = DivTabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <Container>
      <Container.LocationLink>
        Каталог / Женщинам / Платья / Бархатное платье с открытой спинкой{" "}
      </Container.LocationLink>

      {/* Wrap */}
      <Wrap>
        <Wrap.Box>
          <Flexing>
            <div>
              {shopData.map((value, index) => {
                return (
                  <Flexing.SmallImg
                    onClick={() => setIndexs(index)}
                    src={value}
                    alt="imgsSmall"
                  />
                );
              })}
            </div>
            <Flexing.MainImg src={shopData[indexs]} alt="imgMain" />
          </Flexing>
        </Wrap.Box>
        <Wrap.Box second>
          <Wrap.Header>Бархатное платье с открытой спинкой</Wrap.Header>
          <Wrap.Price>6 500 ₸</Wrap.Price>
          <Link to={"/cart"}>
            <Wrap.Btn>Купить сейчас</Wrap.Btn>
          </Link>

          {/* text */}
          <Wrap.Title>
            Размер: <Wrap.Span>XS-S</Wrap.Span>
          </Wrap.Title>
          <Wrap.Title>
            Состояние: <Wrap.Span>Б\У</Wrap.Span>
          </Wrap.Title>

          <Wrap.Title>
            Магазин: <Wrap.Span>Robin.clothes</Wrap.Span>
          </Wrap.Title>

          {/* Tabs */}
          <DivTabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Описание" key="1">
              Бархатное синее платье с открытой спинкой. Материал приятный телу.
              Состояние отличное . Состав: 100% полиэстер. 1
            </TabPane>
            <TabPane tab="О магазине" key="2">
              Selective second hand by Robin Clothes. Существуем с 2017-го года.
              Качественнные и уникальные вещи по выгодной цене.
              <Wrap.ConIcons>
                <Div>
                  <Div.Location />
                  <Div.Items>г. Алматы, ул. Назарбаева 120</Div.Items>
                </Div>
                <Div>
                  <Div.Phone />
                  <Div.Items>+7 (702) 345 54 23</Div.Items>
                </Div>
                <Div>
                  <Div.Instagram />
                  <Div.Items>+7 (702) 345 54 23</Div.Items>
                </Div>
              </Wrap.ConIcons>
            </TabPane>
            <TabPane tab="Условия" key="3">
              Бархатное синее платье с открытой спинкой. Материал приятный телу.
              Состояние отличное . Состав: 100% полиэстер. 3
            </TabPane>
          </DivTabs>
        </Wrap.Box>
      </Wrap>
    </Container>
  );
};

export default Description;
