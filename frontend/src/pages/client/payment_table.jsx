import React from "react";
import Card from "@/components/ui/Card";
import PaymentRec from "./react-tables/PaymentRec";

const paymenttable = () => {
  return (
    <div className=" space-y-5">
      <PaymentRec />
    </div>
  );
};

export default paymenttable;
