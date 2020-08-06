const k8s = require('@kubernetes/client-node');
const { V1Deployment } = require('@kubernetes/client-node');
// const { V1PodIP, V1Pod, V1Deployment } = require('@kubernetes/client-node');
const yaml = require('js-yaml');
const fs   = require('fs');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const AppsV1= kc.makeApiClient(k8s.AppsV1Api);

var namespace = {
  metadata: {
    name: 'test'
  }
};

const deployment = yaml.safeLoad(fs.readFileSync('deployment.yaml', 'utf8'));
const service = yaml.safeLoad(fs.readFileSync('service.yaml', 'utf8'));

// k8sApi.listNamespacedPod('default').then((res) => {
//     // console.log(res.body)
//     console.log(res.body.items[1].metadata)
//     // console.log(res.body.items[1].spec)
//     // console.log(res.body.items[1].status)
// });


AppsV1.createNamespacedDeployment('default',deployment)
.then((res) => {
  console.log(res.body) 
})
.catch((err) => {
  console.log(err);
});

  


k8sApi.createNamespacedService('default',service)
.then((res) => {
  console.log(res.body) 
})
.catch((err) => {
  console.log(err);
});
