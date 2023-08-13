# Ejercicio File System Archivos - Composite

Esta es una implementación del ejemplo de File System implementado en NestJS con TypeScript.<br>
Solamente es una traducción de lenguaje del [ejemplo de File System del docente Fernando Dodino](https://github.com/uqbar-project/video-composite-archivos) desarrollado en kotlin.

## Dominio
Dada una estructura de archivos y directorios, queremos saber:

- el tamaño de un elemento
  - un archivo tiene el tamaño definido
  - un directorio tiene el tamaño de todos los archivos contenidos en él y en sus subdirectorios
- si un elemento es grande
  - un archivo es grande si pesa más de 5 MB
  - un directorio es grande si tiene más de 2 elementos (sean archivos o directorios) o tiene un tamaño de más de 10 MB

## Ejecución
La ejecucion de este proyecto es meramente con propósito educativo. Por lo tanto la ejecución con el comando `npm start` solo comenzaría la ejecución de un programa que no tiene funcionalidad.<br><br>
Por lo tanto, para testear el código se debe ejecutar el siguiente comando:
```
npm test
```
