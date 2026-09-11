// =========================================================
// CONFIG.JS — Kalasan Mas Fery (sudah terisi, siap pakai)
// =========================================================
window.RESTO_CONFIG = {

  RESTO: {
    name: "Ayam Bakar & Goreng Kalasan Mas Fery",
    lat: -6.1820389,
    lng: 106.6344833,
    wa: "085773144582",
    addr: "Jl. Soleh Ali No. 3 Kavling Pasar Anyar"
  },

  firebaseConfig: {
    apiKey: "AIzaSyBaizb6QqUyvGIdzNn10c40CjNTVLP3-Xo",
    authDomain: "ayam-bakar-kalasan-mas-fery.firebaseapp.com",
    databaseURL: "https://ayam-bakar-kalasan-mas-fery-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ayam-bakar-kalasan-mas-fery",
    storageBucket: "ayam-bakar-kalasan-mas-fery.firebasestorage.app",
    messagingSenderId: "259635639789",
    appId: "1:259635639789:web:74a06a46083f146bf863e4"
  },

  DAPUR_EMAIL: "dapur@kalasanmasfery.app",
  KASIR_EMAIL: "kasir@kalasanmasfery.app",

  DEFAULT_GOOGLE_REVIEW_LINK: "https://maps.app.goo.gl/XXyNHnfwyzSV33SV8",
  DEFAULT_PAYMENT_INFO: {
    bank1Name: "BCA", bank1Number: "4090708835",
    bank2Name: "BNI", bank2Number: "2052343385",
    bankHolder: "MOCHAMMAD RIFKI ANHAR",
    ewalletNumber: "0852-9007-8889", ewalletHolder: "MOCHAMMAD RIFKI ANHAR"
  },
  DEFAULT_GEOFENCE_TOLERANCE_M: 10,
  DEFAULT_TABLE_COUNT: 30,
  MAX_TABLE_COUNT: 30,
  MAX_MENU_ITEMS: 30,

  NAFA_SUPABASE_URL: "https://uuejlrebqanlkgguerhk.supabase.co",
  NAFA_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZWpscmVicWFubGtnZ3VlcmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNDI3MTIsImV4cCI6MjEwMDcxODcxMn0.CnlC0xknSICXYv1hxCEcqwsSYP8N6QVXHm_Z_xsKluY",
  NAFA_PRODUCT_KEY: "menu-resto-qr",
  NAFA_OWNER_WHATSAPP: "6285290078889",
  NAFA_OWNER_EMAIL: "nafatechid@gmail.com",
  NAFA_SUBSCRIPTION_DAYS: 30,

  // ⚠️ GANTI INI: isi dengan kontak (WA/email) persis yang dipakai Mas Fery
  // waktu langganan/bayar produk ini. Cek di Supabase Table Editor, tabel
  // product_subscriptions, kolom customer_contact, baris product_key =
  // 'menu-resto-qr' milik Mas Fery — salin nilainya persis ke sini.
  NAFA_CUSTOMER_ID: "085773144582"
};
