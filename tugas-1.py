import numpy as np

print("======= Tugas 1 =======")
a = float(input("Masukkan nilai A: "))
b = float(input("Masukkan nilai B: "))
c = float(input("Masukkan nilai C: "))
ta = int(input("Nilai T memiliki rentang nilai dari (°C): "))
tb = int(input("hingga (°C): "))

T = list(range(ta, tb+1))
P = []

for item in T:
    cache = a - (b / (item + c))
    P.append(np.exp(cache))

print("Berikut nilai P [suhu:nilai P]")
hasil = ""
for index, element in enumerate(P):
    cache = float(element)
    hasil += f"[{T[index]}:{cache:.4f}]" + "   "
print(hasil)