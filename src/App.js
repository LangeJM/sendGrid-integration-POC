import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { EmailTemplates } from "./components/emailTemplates/emailTemplates";
import { CustomerCycle } from "./components/customers/customerCycle";
import { Customer } from "./components/customers/customer";
import { Header } from "./components/header";

const mockCustomers = [
  {
    firstName: "Lior",
    lastName: "Roil",
    street: "Rothschild Blvd 50",
    city: "Tel Aviv-Yafo, 61000",
    email: "lior@roil.co.il",
    customerEnums: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
    },
  },
  {
    firstName: "Maor",
    lastName: "Roam",
    street: "HaGefen 50",
    city: "Kfar Saba, 41000",
    email: "maor@roam.co.il",
    customerEnums: {
      1: true,
      2: true,
      3: true,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    },
  },
  {
    firstName: "Riut",
    lastName: "Tuir",
    street: "HaDekel 1",
    city: "Raanana, 55000",
    email: "riut@tuir.co.il",
    customerEnums: {
      1: true,
      2: true,
      3: false,
      4: true,
      5: true,
      6: false,
      7: false,
      8: false,
    },
  },
  {
    firstName: "Peter",
    lastName: "Retep",
    street: "HaHatul 7",
    city: "Bat Yam, 31000",
    email: "peter@retep.co.il",
    customerEnums: {
      1: true,
      2: true,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    },
  },
  {
    firstName: "Lucy",
    lastName: "Ycul",
    street: "HaKelev 13",
    city: "Holon, 59000",
    email: "lucy@Ycul.co.il",
    customerEnums: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: false,
      8: true,
    },
  },
];

function App() {
  const [activeCustomerEnums, setActiveCustomerEnums] = useState("");
  const [activeCustomerEmail, setActiveCustomerEmail] = useState("");

  const handleCustomerClick = (customerEnums, customerEmail) => {
    setActiveCustomerEnums(customerEnums);
    setActiveCustomerEmail(customerEmail);
  };

  return (
    <div className="App">
      <Header />
      <div className="d-flex flex-row justify-content-center">
        {mockCustomers &&
          mockCustomers.map((customer) => (
            <Customer
              key={customer.email}
              customer={customer}
              activeCustomerEmail={activeCustomerEmail}
              handleCustomerClick={handleCustomerClick}
            />
          ))}
      </div>
      <div className="d-flex flex-row mx-5">
        <CustomerCycle customerEnums={activeCustomerEnums} />
        <EmailTemplates />
      </div>
    </div>
  );
}

export default App;
