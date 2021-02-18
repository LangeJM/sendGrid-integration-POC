import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

export const Customer = (props) => {
  const [customerEnums, setCustomerEnums] = useState(
    props.customer.customerEnums
  );
  const [cardBorder, setCardBorder] = useState("bg-light");

  useEffect(() => {
    if (props.activeCustomerEmail === props.customer.email) {
      setCardBorder("primary");
    } else setCardBorder("");
  }, [props.activeCustomerEmail, props.customer.email]);

  const { email, firstName, lastName, street, city } = props.customer;
  return (
    <Card
      key={email}
      className="bg-light m-2 flex-fill"
      border={`${cardBorder}`}
      onClick={() => {
        props.handleCustomerClick(
          props.customer.customerEnums,
          props.customer.email
        );
      }}
    >
      <Card.Body>
        <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
        <Card.Text as="div">
          <p className="mb-1">{street}</p>
          <p className="mb-1">{city}</p>
          <p className="mb-1">{email}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
