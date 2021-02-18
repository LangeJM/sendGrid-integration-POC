import React from "react";
import { Button } from "react-bootstrap";

export const CustomerCycle = (props) => {
  const customerEnums = [
    {
      customerEnum: 1,
      label: "Welcome",
      sent: props.customerEnums[1] ? true : false,
    },
    {
      customerEnum: 2,
      label: "Onboarding",
      sent: props.customerEnums[2] ? true : false,
    },
    {
      customerEnum: 3,
      label: "Complete Profile",
      sent: props.customerEnums[3] ? true : false,
    },
    {
      customerEnum: 4,
      label: "Proposal sent",
      sent: props.customerEnums[4] ? true : false,
    },
    {
      customerEnum: 5,
      label: "Proposal updated",
      sent: props.customerEnums[5] ? true : false,
    },
    {
      customerEnum: 6,
      label: "Proposal confirmed",
      sent: props.customerEnums[6] ? true : false,
    },
    {
      customerEnum: 7,
      label: "Contract signed",
      sent: props.customerEnums[7] ? true : false,
    },
    {
      customerEnum: 8,
      label: "Contract signed",
      sent: props.customerEnums[8] ? true : false,
    },
  ];

  return (
    <div
      id="emailTemplatesContainer"
      className="d-flex flex-column m-3 align-items-center"
    >
      <div id="templatesHeader">
        <h5 className="pt-2 something">Customer Cycle</h5>
      </div>
      <div id="templates" className="mt-1">
        {customerEnums.map((item, idx) => (
          <div
            key={item.customerEnum}
            className="d-flex flex-column align-items-center mt-0"
          >
            <Button
              key={item.customerEnum}
              className={`my-3 w-100 p-2 ${
                item.sent ? "btn-success" : "btn-danger"
              }`}
            >
              {item.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
