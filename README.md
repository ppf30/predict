# PREDICT
Predict contiene un modelo preentrenado con ```TensorFlow```. Una vez confirma que el modelo está correctamente cargado y que los datos tienen el tamaño correcto (el que debe devolver acquire), se ejecuta obteniendo una predicción del consumo de energía. Este resultado se almacena en ```MongoDB```.

## Repositorios del proyecto
```bash 
https://github.com/ppf30/acquire.git
```
```bash
https://github.com/ppf30/orchestrator.git
```
```bash
https://github.com/ppf30/predict.git
```


## Uso Local

```bash
# Iniciar el orquestador
node server.js
```

## Uso docker
Todo el proyecto está dockerizado, por lo tanto si queremos probarlo con contenedores debemos clonar los repositorios y con el ```docker-compose.yml``` en la carpeta, ejecutamos los siguientes comandos en la terminal:
```bash
docker-compose up -d --build
```

Al finalizar podemos eliminar los contenedores:
```bash
docker-compose down
```
## Pruebas en Postman
GET http://localhost:3001/health

GET http://localhost:3001/ready

POST http://localhost:3001/predict
```bash
# Body
{
  "features": [1.315, 1.81, 1.27, 8, 0, 9, 30],
  "meta": {
    "source": "orchestrator",
    "dataId": "6772c1f3e2a0b12345678901",
    "featureCount": 7,
    "scalerVersion": "v1",
    "targetDate": "2025-11-26T22:00:00.000Z",
    "dailyValues": [28.186, 27.809, 27.44],
    "kunnaMeta": {
      "alias": "6339651",
      "name": "1d",
      "daysUsed": ["2025-11-25", "2025-11-24", "2025-11-23"]
    },
    "fetchMeta": {
      "timeStart": "2025-11-22T18:43:10.000Z",
      "timeEnd": "2025-11-25T18:43:10.000Z"
    }
  }
}
```




## Lenguaje 

* Todo el código está en Java Scrip

## Estructura del Proyecto

```
predict/
│── controllers/
│──│── predictControllers.js
│── model/
│──│── group1-shard1of1.bin
│──│── model.json
│──│── Prediction.js
│── node_modules/
│── routes/
│──│── predictRoutes.js
│── services/
│──│── tfModelService.js
│── dockerfile
│── package-lock.json
│── package.json
│── server_all.js
│── server.js
│── README.md

```


## Licencia

Este proyecto está bajo la licencia MIT.
