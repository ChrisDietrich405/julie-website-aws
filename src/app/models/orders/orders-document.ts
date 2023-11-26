import { Document } from "mongoose";

interface OrdersDocument extends Document {
  customer: {
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: Number;
  };

  deliveryAddress: {
    streetAddress: String;
    city: String;
    zipCode: Number;
  };
  status: String;
  orderCode: String;
  payment: {
    type: String;
  };
}

export default OrdersDocument;
