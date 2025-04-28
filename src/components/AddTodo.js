import { Button, Input, message, Select, Tag } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import todoListSlicer from "../lib/redux/slices/todoListSlice";

export default function AddTodo() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAddButtonClick = () => {
    if (!name.length) {
      message.warn("Vui lòng nhập nội dung");
      return;
    }
    dispatch(
      todoListSlicer.actions.addTodo({
        id: uuidv4(),
        name: name,
        priority: priority,
        completed: false,
      })
    );

    setName("");
    setPriority("Medium");
  };

  return (
    <Input.Group style={{ display: "flex" }}>
      <Input value={name} onChange={handleInputChange} />
      <Select
        defaultValue="Medium"
        value={priority}
        onChange={handlePriorityChange}
      >
        <Select.Option value="High" label="High">
          <Tag color="red">{t("todo_list.high")}</Tag>
        </Select.Option>
        <Select.Option value="Medium" label="Medium">
          <Tag color="blue">{t("todo_list.medium")}</Tag>
        </Select.Option>
        <Select.Option value="Low" label="Low">
          <Tag color="gray">{t("todo_list.low")}</Tag>
        </Select.Option>
      </Select>
      <Button type="primary" onClick={handleAddButtonClick}>
        {t("add_todo.add")}
      </Button>
    </Input.Group>
  );
}
