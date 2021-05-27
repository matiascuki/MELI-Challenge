# MELI challenge

## Ejercicio 1 - Investigación/Script ↓

Instrucciones:
1. Descargar los archivos de este repositorio
2. Una vez que tenemos los archivos en una carpeta abrimos la terminal
3. Navegamos en la terminal hasta llegar a la carpeta
4. Usar el próximo comando sin las comillas: " npm i "
5. Una vez instalada las dependencias usar el siguiente: " npm start "
6. Se abre la web donde podes ingresar un ID de usuario, al presionar search muestra los resultados a través de la consola 

## Ejercicio 2 SQL ↓

Se encuentra en "Ejercicio SQL.sql" junto sus respectivas anotaciones.

## Ejercicio 3 Lectura y comprensión ↓

El output del script imprime los movimientos que tuvo el envío
Sucursal donde se encuentra - Fecha del evento - descripción del mismo

## Ejercicio 4 Script básico bash ↓

#!/bin/bash
users_id=(71665538 66146765 132961968 15096445 172753273 54152646) 

Se declara un array con los ids de usuarios requeridos.

for users_id in ${users_id[*]}
do
curl=$(curl -s "api.mercadolibre.com/users/$users_id/shipping_preferences" | jq -c
'.services')

Se itera el array, por cada usuario genera una petición a la API.

echo "$users_id: $curl"
done

Se imprime cada json en una linea.