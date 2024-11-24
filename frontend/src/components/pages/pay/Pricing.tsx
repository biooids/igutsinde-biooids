//@ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import "./pay.css";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { RootState } from "../../../app/store";
import { useState } from "react";
import { actionSuccess } from "../../../app/user/userSlice";
import { RiCheckDoubleFill } from "react-icons/ri";

function Pricing() {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const config = {
    public_key: "FLWPUBK_TEST-9e84acc10c215760d7577ab2b2c8274a-X",
    tx_ref: Date.now(),
    amount: 1500,
    currency: "RWF",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${currentUser.user.userName}@gmail.com` || "user@gmail.com",
      phone_number: "250",
      name: `${currentUser ? currentUser.user.userName : ""}`,
    },
    customizations: {
      title: "Igutsinde",
      description: "Kwishyura kugirango ukoreshe service zose",
      logo: "https://firebasestorage.googleapis.com/v0/b/soft-biooid.appspot.com/o/igutsindelogo.png?alt=media&token=809a6124-79cb-4ad2-a09b-be2de2db9d25",
    },
  };

  const handleFlutterWavePayment = async (payload) => {
    console.log("data for req body", payload);
    try {
      setError(null);
      setShowModal(false);

      const res = await fetch("/api/payment/payWithFlutterWave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        dispatch(actionSuccess(data));
        setShowModal(true);
      } else {
        setError(data.message);
        setShowModal(true);
        return;
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setShowModal(true);
      return;
    }
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      if (response.status === "successful") {
        console.log(response);
        handleFlutterWavePayment({
          tx_ref: `${response.tx_ref}`,
          order_id: `${response.transaction_id}`,
          amount: `${response.amount}`,
          currency: response.currency,
          email: response.customer.email,
          phone_number: response.customer.phone_number,
          fullname: response.customer.name,
          id: currentUser.user._id,
        });
      } else {
        console.log(response.status);
        setError(response.status);
        setShowModal(true);
      }

      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
    <section className="min-h-screen  ">
      <h2 className="text-3xl font-bold text-center mt-5">
        Tora uburyo ushaka kwishyuramo
      </h2>
      <div className="flex gap-3 flex-wrap m-auto mt-5  justify-center">
        <div className="pay-card p-3 rounded-lg w-[300px] flex flex-col gap-5 ">
          <h3 className="text-3xl font-bold">Uburyo 1,</h3>
          <p>
            Kanda ahakurikira maze w'ishyure, twashyize ku{" "}
            <span className="font-bold text-green-500">1500 Rwf.</span> Ufite
            ikibazo twandikire kuri{" "}
            <span className="font-bold text-green-500">WhatsApp : </span>{" "}
            <span className="font-bold text-green-500">0790931024.</span>
          </p>
          <div className="flex text-xl  gap-3">
            <p>1500/Ukwezi</p>
            <p className="line-through text-red-500">2000/Ukwezi</p>
          </div>
          {currentUser.user.paid ? (
            <p className="text-green-500 text-3xl font-bold flex justify-center items-center gap-3  ">
              Paid <RiCheckDoubleFill />
            </p>
          ) : (
            <FlutterWaveButton {...fwConfig} className="btn" />
          )}
          {showModal && (
            <div
              role="alert"
              className={`alert ${error ? "alert-error" : "alert-success"}`}
            >
              {error ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              <span>{error ? error : "Payment Successful"}</span>
            </div>
          )}
        </div>
        <div className="pay-card p-3 rounded-lg w-[300px] flex flex-col gap-5 ">
          <h3 className="text-3xl font-bold">Uburyo 2,</h3>
          <p>
            Wishyure kuri iyi code maze utwandikire kuri{" "}
            <span className="font-bold text-green-500">
              WhatsApp : 0790931024{" "}
            </span>
            utumenyeshe, maze tugushyire muri sisiteme yabishyuye.
          </p>
          <div className="flex text-xl  gap-3">
            <p>1500/Ukwezi</p>
            <p className="line-through text-red-500">2000/Ukwezi</p>
          </div>
          {currentUser.user.paid ? (
            <p className="text-green-500 text-3xl font-bold flex justify-center items-center gap-3  ">
              Paid <RiCheckDoubleFill />
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
