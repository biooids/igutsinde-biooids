//@ts-nocheck
import "./pay.css";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

function Pricing() {
  const config = {
    public_key: "FLWPUBK_TEST-9e84acc10c215760d7577ab2b2c8274a-X",
    tx_ref: Date.now(),
    amount: 1300,
    currency: "RWF",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "ehwapyongm@gmailcom",
      phone_number: "",
      name: "john doe",
    },
    customizations: {
      title: "Igutsinde",
      description: "Kwishyura kugirango ukoreshe service zose",
      logo: "https://firebasestorage.googleapis.com/v0/b/soft-biooid.appspot.com/o/igutsindelogo.png?alt=media&token=809a6124-79cb-4ad2-a09b-be2de2db9d25",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
    <section className="min-h-screen ">
      <div className="pay-card p-3 rounded-lg max-w-[300px] flex flex-col gap-5 m-auto mt-5">
        <h2 className="text-3xl font-bold">Pro</h2>
        <p>
          Kanda ahakurikira maze w'ishyure, twashyize ku{" "}
          <span className="font-bold text-green-500">1300 Rwf.</span> Ufite
          ikibazo twandikire kuri{" "}
          <span className="font-bold text-green-500">WhatsApp</span>{" "}
          <span className="font-bold text-green-500">0790931024.</span>
        </p>
        <div className="flex text-xl  gap-3">
          <p>1300/Ukwezi</p>
          <p className="line-through text-red-500">2000/Ukwezi</p>
        </div>
        <FlutterWaveButton {...fwConfig} className="btn" />
      </div>
    </section>
  );
}

export default Pricing;
