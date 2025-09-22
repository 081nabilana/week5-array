# Week 5 - Array Methods (JavaScript)

## Identitas
- Nama : `Nabila Noor Azizah`
- NIM  : `F1D022081`

---

## Deskripsi Tugas
Pada pertemuan minggu ini, fokus utamanya adalah mengenal dan mencoba **6 metode penting Array di JavaScript**.  
Method yang dipakai yaitu:
- `map()`
- `filter()`
- `reduce()`
- `find()`
- `some()`
- `every()`

---

## Dataset
Dataset diambil dari dunia **Harry Potter**, dengan dua kelompok utama:
- **Order of the Phoenix**
- **Death Eaters**

Masing-masing karakter memiliki atribut:
- `id`
- `character`
- `nickname`
- `strength`
- `specialty`

![array data](screenshots/array_data.png)

---

## Implementasi

### 1. map()
- **Tujuan**: Mengubah semua `character` menjadi huruf `kapital` (contoh transformasi data).  
- **Screenshot**:  
  ![code map()](screenshots/1_map_code.png)

  ![run map()](screenshots/1_map_run.png)

---

### 2. filter()
- **Tujuan**: Menyaring karakter dengan `strength >= 95` untuk menemukan wizard terkuat.
- **Screenshot**:  
  ![code map()](screenshots/2_filter_code.png)
  
  ![code map()](screenshots/2_filter_run.png)

---

### 3. reduce()
- **Tujuan**: Menghitung total keseluruhan strength dari seluruh karakter.
- **Screenshot**:  
  ![code map()](screenshots/3_reduce_code.png)
  
  ![code map()](screenshots/3_reduce_run.png)

---

### 4. find()
- **Tujuan**: Menemukan karakter pertama yang mengandung nama `Harry`.
- **Screenshot**:  
  ![code map()](screenshots/4_find_code.png)
  
  ![code map()](screenshots/4_find_run.png)

---

### 5. some()
- **Tujuan**: Mengecek apakah ada karakter dengan `specialty === "Dark Magic"`.
- **Screenshot**:  
  ![code map()](screenshots/5_some_code.png)
  
  ![code map()](screenshots/5_some_run.png)

---

### 6. every()
- **Tujuan**: Mengecek apakah semua karakter memiliki `strength >= 70`.
- **Screenshot**:  
  ![code map()](screenshots/6_every_code.png)
  
  ![code map()](screenshots/6_every_run.png)

---

## Kesimpulan
Dari percobaan keenam metode array:
- `map()` sangat berguna untuk **transformasi data**.
- `filter()` dipakai untuk **menyaring data** sesuai kriteria.
- `reduce()` berguna untuk **mengagregasi/menghitung total** dari seluruh data.
- `find()` efektif untuk **mencari satu elemen spesifik**.
- `some()` membantu mengecek **apakah ada kondisi tertentu terpenuhi**.
- `every()` digunakan untuk **validasi bahwa semua elemen memenuhi kondisi**.