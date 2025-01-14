import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const MobilePage = () => {
  const [qrCodeData, setQrCodeData] = useState(null);

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    html5QrcodeScanner.render(
      (decodedText) => {
        console.log("QR Code detected: ", decodedText);
        setQrCodeData(decodedText);
      },
      (error) => {
        console.warn("QR Code scan error: ", error);
      }
    );

    return () => html5QrcodeScanner.clear();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Scan QR Code (Mobile)</h1>
      <div id="reader" style={{ width: "300px", margin: "0 auto" }}></div>
      {qrCodeData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Scanned Data:</h2>
          <p>{qrCodeData}</p>
        </div>
      )}
    </div>
  );
};

export default MobilePage;
