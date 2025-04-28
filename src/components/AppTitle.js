import Title from "antd/lib/typography/Title";
import { Trans } from "react-i18next";

export default function AppTitle() {
  return (
    <Title style={{ textAlign: "center" }}>
      <Trans i18nKey={"logo"} />
    </Title>
  );
}
