import QRCode from "qrcode";
import React, { useState } from "react";

const ServerCopyQr = ({ nationalId, dateOfBirth, name }) => {
  const [qrImage, setQrImage] = useState("");
  {
    QRCode.toDataURL(`${nationalId} ${dateOfBirth} ${name}`)
      .then((url) => {
        setQrImage(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      {/* <img
        // id="qr"
        src={`/public/barcode.gif`}
        style={{ height: "110px", width: "120px", marginLeft: "-10px" }}
        // height="110px"
        // width="110px"
        alt="QR Code"
      /> */}
      <img
        // id="qr"
        src={qrImage}
        // style={{ height: "150px", width: "190px", marginLeft: "-30px" }}
        style={{ height: "135px", width: "170px", marginLeft: "-25px" }}
        // height="110px"
        // width="110px"
        alt="QR Code"
      />
    </>
  );
};

export default ServerCopyQr;
