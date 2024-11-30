# Actividad integradora de kubernetes
Este proyecto consiste en un servicio HTTP sencillo que verifica si una palabra es un palíndromo. La aplicación fue desarrollada utilizando Node.js y Express, y se empaquetó como una imagen de Docker basada en la actividad integradora anterior. Esta imagen se subió a Docker Hub para facilitar su despliegue y reutilización.
Para esta actividad, el trabajo se dividió en dos partes:
- Deployment: Implementación de un deployment en Kubernetes para gestionar el despliegue de la aplicación. En esta etapa, el acceso al servicio se realizó mediante un port-forwarding.
- Servicio tipo LoadBalancer: Configuración de un Service de tipo LoadBalancer para exponer el servicio públicamente y permitir el acceso externo.

## Deployment
### Instrucciones para realizar las pruebas

Como se puede apreciar en la siguiente imagen las pruebas pueden realizarse en su totalidad utilizando un Cluster de GCP

![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/deployment/deploy1.png)

- Ejecutar el siguiente comando para aplicar el archivo de Deployment:

```bash
kubectl apply -f palindromo-deployment.yaml
```
- Obtener el nombre de los Pods:

```bash
kubectl get pods
```

![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/deployment/deploy2.png)

- Realizar un port-forwarding para acceder al servicio:

```bash
kubectl port-forward "nombre de tu pod" 8080:8080
```
![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/deployment/deploy3.png)

- Abrí tu navegador y accede a la URL http://localhost:8080/palindromo?palabra=radar para probar la aplicación. El resultado debería ser similar a:

![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/deployment/deploy4.png)

## LoadBalancer

### Instrucciones para realizar las pruebas

- Ejecutar el siguiente comando para aplicar el archivo de loadbalancer:
  
```bash
kubectl apply -f palindromo-loadbalancer.yaml
```
![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/loadbalancer/loadbalancer1.png)

- Es necesario verificar el estado del servicio, ya que del mismo necesitaremos el EXTERNAL-IP para realizar las pruebas correspondientes(siempre y cuando no estemos utilizando el contexto de docker-desktop)

```bash
kubectl get svc palindromo-loadbalancer
```
![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/loadbalancer/loadbalancer2.png)

- Abrí tu navegador y accede a la URL http://EXTERNAL-IP/palindromo?palabra=radar para realizar la prueba. El resultado debería ser similar a:

![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/loadbalancer/loadbalancer3.png)

- Para validar el balanceo de carga, inspecciona los logs de cada Pod:

```bash
kubectl get pods
```
```bash
kubectl logs "nombre de tu pod"
```

- Finalmente, se puede observar la configuración en el dashboard de GCP:

![image](https://github.com/JonatanMuller07/actividad-kubernetes/blob/master/imagenes/loadbalancer/loadbalancer4.png)
