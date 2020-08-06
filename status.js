const k8s = require('@kubernetes/client-node');
const { V1Deployment } = require('@kubernetes/client-node');
// const { V1PodIP, V1Pod, V1Deployment } = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const AppsV1= kc.makeApiClient(k8s.AppsV1Api);


