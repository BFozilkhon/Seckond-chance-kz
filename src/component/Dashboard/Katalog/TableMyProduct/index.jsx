import React, { useState } from "react";
import { Container, InputCon, actives, Flexing, Selects } from "./style";
import TableKatalog from "./Table";

const { Option } = Selects;

export const TableMyProduct = () => {
  const [active, setActive] = useState("normal");

  return (
    <Container>
      <Container.Header>Заказы</Container.Header>
      <Flexing input>
        <InputCon>
          <InputCon.Search />
          <InputCon.Input
            placeholder="Поиск заказа по номеру, названию товара или покупателю"
            type="text"
          />
        </InputCon>

        {/* firstSelect */}
        <Selects
          showSearch
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Selects>

        {/* SecondSelect */}
        <Selects
          showSearch
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Selects>

        {/* thirdSelect */}
        <Selects
          showSearch
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Selects>
      </Flexing>
      <Flexing>
        <Container.Btn
          onClick={() => setActive("normal")}
          style={active === "normal" ? actives : {}}
        >
          Стандартные
        </Container.Btn>
        <Container.Btn
          second
          onClick={() => setActive("discount")}
          style={active === "discount" ? actives : {}}
        >
          Аукционные
        </Container.Btn>
      </Flexing>
      <TableKatalog />
    </Container>
  );
};

export default TableMyProduct;
