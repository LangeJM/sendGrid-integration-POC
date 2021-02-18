import { getEmailTemplates, getTemplateHtml } from "../../sendgridApi";
import { EmailTemplateComponent } from "./emailTemplateComponent";
import React, { useState, useEffect } from "react";
import { Dropdown, Button } from "react-bootstrap";

export const EmailTemplates = () => {
  const [emailTemplates, setEmailTemplates] = useState("");
  const [templateHtml, setTemplateHtml] = useState("");
  const [activeDropDownItem, setActiveDropDownItem] = useState(
    "Choose Email Template"
  );

  useEffect(() => {
    getEmailTemplates()
      .then((res) => {
        createTemplatesObject(res.data.result);
        console.log("Raw API response: ", res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const createTemplatesObject = (templates) => {
    const templatesObject = [];
    for (const template of templates) {
      for (const ver of template.versions) {
        if (ver.active === 1) {
          const templateObj = {
            id: ver.template_id,
            subject: ver.subject,
            activeVersionId: ver.id,
          };
          templatesObject.push(templateObj);
        }
      }
    }
    setEmailTemplates(templatesObject);
  };

  const onClickTemplate = (templateId, templateTitle) => {
    setActiveDropDownItem(templateTitle);
    getTemplateHtml(templateId)
      .then((res) => {
        const html = res.data.versions[0].html_content;
        const htmlCleaned = html.split("<body>")[1].split("</body>")[0]; // this is to clean the html from body tags that overwrite the document style (e.g. font family)
        // setTemplateHtml(res.data.versions[0].html_content);   html as it arrives from Sendgrid API
        setTemplateHtml(htmlCleaned);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(emailTemplates);
  return (
    <div
      id="templatesContainer"
      className="d-flex flex-column m-3 align-items-center w-75"
    >
      <div className="d-flex flex-row align-items-center">
        <h5 className="pt-1 mr-3">Email Templates:</h5>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown"
            style={{ width: "20em" }}
          >
            {activeDropDownItem}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {emailTemplates &&
              emailTemplates.map((template) => (
                <EmailTemplateComponent
                  key={template.id}
                  templateId={template.id}
                  templateTitle={template.subject}
                  templateVersionId={template.activeVersionId}
                  handleClick={onClickTemplate}
                ></EmailTemplateComponent>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div id="templateContent" className="mt-3 w-75 border border-light">
        {/* {templateHtml} */}
        <div dangerouslySetInnerHTML={{ __html: templateHtml }} />
        {templateHtml && (
          <Button className="dark mt-3 float-right w-25">Send Email</Button>
        )}
      </div>
    </div>
  );
};
