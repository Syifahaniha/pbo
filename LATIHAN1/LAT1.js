class SensorPasut {
  constructor(nama, lokasi) {
    this.nama = nama;
    this.lokasi = lokasi;
    this._status = "Nonaktif";
    this.ketinggianAir = 0;
  }

  aktifkan() {
    this._status = "Aktif";
    return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan.`;
  }

  nonaktifkan() {
    this._status = "Nonaktif";
    return `Sensor ${this.nama} di ${this.lokasi} telah dinonaktifkan.`;
  }

  getStatus() {
    return `Status Sensor ${this.nama} di ${this.lokasi} sedang ${this._status}.`;
  }

  ukurKetinggianAir(ketinggian) {
    this.ketinggianAir = ketinggian;
    return `Ketinggian air di ${this.lokasi} saat ini adalah ${this.ketinggianAir} meter.`;
  }

  cekKondisiCuaca(cuaca) {
    return `Kondisi cuaca di ${this.lokasi} adalah ${cuaca}.`;
  }

  cekLatihanKapal() {
    return `Latihan kapal sedang berlangsung di sekitar lokasi sensor ${this.nama}.`;
  }

  deteksiTsunami(detection) {
    if (detection) {
      return `PERINGATAN: Potensi tsunami terdeteksi di sekitar ${this.lokasi}. Segera lakukan evakuasi!`;
    } else {
      return `Tidak ada potensi tsunami yang terdeteksi di ${this.lokasi}.`;
    }
  }

  deteksiBanjirRob() {
    if (this.ketinggianAir > 3.5) {
      return `PERINGATAN: Potensi banjir rob terdeteksi di ${this.lokasi}.`;
    } else {
      return `Tidak ada ancaman banjir rob di ${this.lokasi}.`;
    }
  }

  kirimPeringatanKePelabuhan() {
    if (this.ketinggianAir > 3 || this.deteksiTsunami(true)) {
      return `Peringatan dikirim ke pelabuhan terkait kondisi di ${this.lokasi}: Ketinggian air ${this.ketinggianAir} meter, Potensi bahaya.`;
    } else {
      return `Kondisi normal di ${this.lokasi}. Tidak ada peringatan yang dikirim.`;
    }
  }
}

let sensorTanjungPriok = new SensorPasut("Tanjung Priok", "Jakarta");

console.log(sensorTanjungPriok.aktifkan());

console.log(sensorTanjungPriok.ukurKetinggianAir(4.2));
console.log(sensorTanjungPriok.cekKondisiCuaca("Mendung"));

console.log(sensorTanjungPriok.cekLatihanKapal());

console.log(sensorTanjungPriok.deteksiTsunami(true));
console.log(sensorTanjungPriok.deteksiBanjirRob());

console.log(sensorTanjungPriok.kirimPeringatanKePelabuhan());
