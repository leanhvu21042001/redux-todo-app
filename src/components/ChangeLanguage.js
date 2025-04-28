import { Button } from "antd";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();
  return (
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
  );
}
