<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pembayaran - Exclusive Automotive</title>
    <link rel="stylesheet" href="payment.css" />
    <style>
      .summary-container {
        background: #262626;
        padding: 1rem;
        border-radius: 5px;
        margin-top: 1.5rem;
        display: none;
      }
      .summary-container h2 {
        color: #ff0000;
        margin-bottom: 1rem;
      }
      .summary-item {
        margin-bottom: 0.5rem;
        border-bottom: 1px solid #444;
        padding-bottom: 0.3rem;
      }
    </style>
  </head>
  <body>
    <div class="payment-container">
      <h1>Konfirmasi Pembelian</h1>
      <div class="car-details">
        <p><strong>Mobil:</strong> <span id="carName"></span></p>
        <p><strong>Harga:</strong> <span id="carPrice"></span></p>
      </div>

      <h2>Data Pembeli</h2>
      <form id="paymentForm">
        <input type="text" id="buyerName" placeholder="Nama Lengkap" required />
        <input type="email" id="buyerEmail" placeholder="Email" required />
        <input
          type="tel"
          id="buyerPhone"
          placeholder="Nomor Telepon"
          required
        />
        <textarea
          id="buyerAddress"
          placeholder="Alamat Lengkap"
          required
        ></textarea>

        <h2>Metode Pembayaran</h2>
        <div class="payment-methods">
          <label>
            <input type="radio" name="method" value="QRIS" required />
            QRIS
          </label>
          <label>
            <input type="radio" name="method" value="Transfer Bank" />
            Transfer Bank
          </label>
          <label>
            <input type="radio" name="method" value="Kartu Kredit" />
            Kartu Kredit
          </label>
        </div>

        <button type="submit">Lanjutkan Pembayaran</button>
      </form>

      <!-- Ringkasan -->
      <div class="summary-container" id="summaryContainer">
        <h2>Ringkasan Pembelian</h2>
        <div class="summary-item">
          <strong>Mobil:</strong> <span id="summaryCar"></span>
        </div>
        <div class="summary-item">
          <strong>Harga:</strong> <span id="summaryPrice"></span>
        </div>
        <div class="summary-item">
          <strong>Nama:</strong> <span id="summaryName"></span>
        </div>
        <div class="summary-item">
          <strong>Email:</strong> <span id="summaryEmail"></span>
        </div>
        <div class="summary-item">
          <strong>Telepon:</strong> <span id="summaryPhone"></span>
        </div>
        <div class="summary-item">
          <strong>Alamat:</strong> <span id="summaryAddress"></span>
        </div>
        <div class="summary-item">
          <strong>Metode:</strong> <span id="summaryMethod"></span>
        </div>
        <button id="confirmPaymentBtn">Konfirmasi & Bayar</button>
      </div>
    </div>

    <script>
      // Ambil data mobil dari URL
      const urlParams = new URLSearchParams(window.location.search);
      const carName = urlParams.get("name");
      const carPrice = urlParams.get("price");

      document.getElementById("carName").innerText = carName;
      document.getElementById("carPrice").innerText = carPrice;

      // Handle form submit
      document
        .getElementById("paymentForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Ambil data dari form
          const name = document.getElementById("buyerName").value;
          const email = document.getElementById("buyerEmail").value;
          const phone = document.getElementById("buyerPhone").value;
          const address = document.getElementById("buyerAddress").value;
          const method = document.querySelector(
            'input[name="method"]:checked'
          ).value;

          // Sembunyikan form, tampilkan ringkasan
          document.getElementById("paymentForm").style.display = "none";
          const summary = document.getElementById("summaryContainer");
          summary.style.display = "block";

          // Isi ringkasan
          document.getElementById("summaryCar").innerText = carName;
          document.getElementById("summaryPrice").innerText = carPrice;
          document.getElementById("summaryName").innerText = name;
          document.getElementById("summaryEmail").innerText = email;
          document.getElementById("summaryPhone").innerText = phone;
          document.getElementById("summaryAddress").innerText = address;
          document.getElementById("summaryMethod").innerText = method;
        });

      // Tombol Konfirmasi & Bayar
      document
        .getElementById("confirmPaymentBtn")
        .addEventListener("click", function () {
          alert("Pembayaran sedang diproses...");
          // Di sini bisa diarahkan ke API Midtrans
        });
    </script>
  </body>
</html>
