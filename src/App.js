import { Button, Col, Divider, Row, Typography } from "antd";
import { Trans, useTranslation } from "react-i18next";

import AddTodo from "./components/AddTodo";
import Filters from "./components/Filter";
import TodoList from "./components/TodoList";

const { Title } = Typography;

function App() {
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        maxWidth: "500px",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
      }}
    >
      <div>
        <Button
          type="primary"
          size="small"
          shape="default"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </Button>

        <Button
          type="primary"
          size="small"
          shape="default"
          style={{
            marginLeft: 5,
          }}
          onClick={() => {
            i18n.changeLanguage("vn");
          }}
        >
          VN
        </Button>
      </div>
      <Title style={{ textAlign: "center" }}>
        <Trans i18nKey={"logo"} />
      </Title>
      <Filters />
      <Divider />
      <Row style={{ height: "calc(100% - 40px)" }} gutter={[18, 18]}>
        <Col
          span={24}
          style={{
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          <TodoList />
        </Col>
        <Col span={24}>
          <AddTodo />
        </Col>
      </Row>
    </div>
  );
}

export default App;
