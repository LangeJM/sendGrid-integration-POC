import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

export const EmailTemplateComponent = (props) => {
  const [templateId, setTemplateId] = useState("");
  const [templateTitle, setTemplateTitle] = useState("");
  const [templateVersionId, setTemplateVersionId] = useState("");

  useEffect(() => {
    if (!templateId && !templateTitle) {
      setTemplateId(props.templateId);
      setTemplateTitle(props.templateTitle);
      setTemplateVersionId(props.templateVersionId);
    }
  }, [templateTitle, templateId, templateVersionId]);

  return (
    <Dropdown.Item
      style={{ width: "20em" }}
      onClick={() =>
        props.handleClick(templateId, templateTitle, templateVersionId)
      }
      href={`#${templateId}`}
    >
      {templateTitle}
    </Dropdown.Item>
  );
};
