-- Ejercicio SQL 

SELECT p.carrierID, p.zona, (p.costo * q.`cantidad de envios`) AS Costo_mes
FROM COSTOS p
INNER JOIN [cantidad de envios] q
ON q.zona = p.zona
WHERE q.mes = 1
ORDER BY Costo_mes

/*  En principio habría que buscar mas Carriers obviamente sin embargo con $3.000.000 propondría lo siguiente↓↓

Costo por Carrier

Carrier A 10.000 * 50 = 500.000
Carrier B 10.000 * 19 = $ 190.000
Carrier C 3.000 * 20 = $ 60.000
Total = $ 750.000

Envíos restantes

AMBA = 37.000
Bs As = 40.000
Resto = 50.000  
*/

-- Carrier A
SELECT c.name, c.capacity, (c.capacity * p.costo) AS costo_por_carrier
FROM Carrier c
INNER JOIN COSTOS p
ON c.carrierID = p.carrierID
WHERE p.zona = 'Resto' AND p.carrierID = 1

-- Carrier B
SELECT c.name, c.capacity, (c.capacity * p.costo) AS costo_por_carrier
FROM Carrier c
INNER JOIN COSTOS p
ON c.carrierID = p.carrierID
WHERE p.zona = 'Bs As' AND p.carrierID = 2

-- Carrier C
SELECT c.name, c.capacity, (c.capacity * p.costo) AS costo_por_carrier
FROM Carrier c
INNER JOIN COSTOS p
ON c.carrierID = p.carrierID
WHERE p.zona = 'AMBA' AND p.carrierID = 3

