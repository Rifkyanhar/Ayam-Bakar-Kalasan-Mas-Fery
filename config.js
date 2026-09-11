// =========================================================
// CONFIG.JS — Meja Pintar (Sistem Pesan Menu Resto QR)
// =========================================================
// Diisi ULANG setiap ada pelanggan resto baru. File index.html TIDAK
// perlu diedit lagi — cukup ganti isi file config.js ini sebelum
// deploy ke folder/repo resto yang baru.
// =========================================================

window.RESTO_CONFIG = {

  // ===== 1. Identitas resto =====
  RESTO: {
    name: "Nama Resto",
    lat: 0.000000,          // ambil dari Google Maps (klik kanan lokasi > koordinat)
    lng: 0.000000,
    wa: "628xxxxxxxxxx",    // nomor WA resto (tanpa spasi/simbol)
    addr: "Alamat lengkap resto"
  },

  // ===== 2. Firebase (Realtime Database + Auth khusus resto ini) =====
  // Ambil dari Firebase Console > Project Settings > General > Your apps
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // Akun staff — dibuat manual di Firebase Console > Authentication > Users
  // (email tidak perlu inbox asli, cuma perlu formatnya benar)
  DAPUR_EMAIL: "dapur@namaresto.app",
  KASIR_EMAIL: "kasir@namaresto.app",

  // ===== 3. Nilai default (resto bisa ganti sendiri lewat Panel Kasir > Pengaturan) =====
  DEFAULT_GOOGLE_REVIEW_LINK: "https://maps.app.goo.gl/ISI_LINK_REVIEW",
  DEFAULT_PAYMENT_INFO: {
    bank1Name: "BCA", bank1Number: "",
    bank2Name: "BNI", bank2Number: "",
    bankHolder: "",
    ewalletNumber: "", ewalletHolder: ""
  },
  DEFAULT_GEOFENCE_TOLERANCE_M: 10,
  DEFAULT_TABLE_COUNT: 30,
  MAX_TABLE_COUNT: 30,
  MAX_MENU_ITEMS: 30,

  // ===== 4. NAFA Tech — Langganan (JANGAN diubah, sama untuk semua resto) =====
  NAFA_SUPABASE_URL: "https://uuejlrebqanlkgguerhk.supabase.co",
  NAFA_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZWpscmVicWFubGtnZ3VlcmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNDI3MTIsImV4cCI6MjEwMDcxODcxMn0.CnlC0xknSICXYv1hxCEcqwsSYP8N6QVXHm_Z_xsKluY",
  NAFA_PRODUCT_KEY: "menu-resto-qr",
  NAFA_OWNER_WHATSAPP: "6285290078889",
  NAFA_OWNER_EMAIL: "nafatechid@gmail.com",
  NAFA_SUBSCRIPTION_DAYS: 30,

  // ⚠️ PALING PENTING — WAJIB DIISI DENGAN BENAR:
  // Isi PERSIS SAMA dengan nomor WA/email yang diketik pelanggan waktu
  // mendaftar & bayar lewat langganan.html. Kalau beda walau satu karakter,
  // status "sudah bayar" TIDAK akan kebaca oleh web app resto ini, dan
  // banner "langganan belum aktif" akan terus muncul meski sudah bayar.
  NAFA_CUSTOMER_ID: "ISI_SAMA_PERSIS_DENGAN_KONTAK_DI_FORM_LANGGANAN"
};
