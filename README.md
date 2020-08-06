# Node_operator_trial

Requirements:
1. Have minikube istalled
2. Have a VM installed

Instructions to run:

1. Pull the image from Docker Hub
`docker pull venkat19967/login`

2. Navigate to cloned folder

3. Run
`npm install`

4. Run
`minikube start`
wait till the cluster is up and running

5. Run
`node main.js`

6. Get the service URL by running:
`minikube service --url login`

7. Copy paste the URL in the browser to access the webapp
