// export const ALIASES = {
//   onprem: {
//     ci: {
//       Teamcity: "TC",
//     },
//     network: {
//       OpenServiceMesh: "OSM",
//     },
//     proxmox: {
//       Pve: "ProxmoxVE",
//     },
//     storage: {
//       CephOsd: "CEPH_OSD",
//     },
//   },
//   aws: {
//     analytics: {
//       ElasticsearchService: "ES",
//     },
//     business: {
//       AlexaForBusiness: "A4B",
//     },
//     blockchain: {
//       QuantumLedgerDatabaseQldb: "QLDB",
//     },
//     compute: {
//       ApplicationAutoScaling: "AutoScaling",
//       EC2Ami: "AMI",
//       EC2ContainerRegistry: "ECR",
//       ElasticBeanstalk: "EB",
//       ElasticContainerService: "ECS",
//       ElasticKubernetesService: "EKS",
//       ServerlessApplicationRepository: "SAR",
//     },
//     database: {
//       DatabaseMigrationService: "DMS",
//       DocumentdbMongodbCompatibility: "DocumentDB",
//       DynamodbDax: "DAX",
//       DynamodbGlobalSecondaryIndex: "DynamodbGSI",
//       Database: "DB",
//       Dynamodb: "DDB",
//       Elasticache: "ElastiCache",
//       QuantumLedgerDatabaseQldb: "QLDB",
//     },
//     devtools: {
//       CommandLineInterface: "CLI",
//       DeveloperTools: "DevTools",
//     },
//     engagement: {
//       SimpleEmailServiceSes: "SES",
//     },
//     general: {
//       GenericOfficeBuilding: "OfficeBuilding",
//     },
//     integration: {
//       SimpleNotificationServiceSns: "SNS",
//       SimpleQueueServiceSqs: "SQS",
//       StepFunctions: "SF",
//     },
//     iot: {
//       Freertos: "FreeRTOS",
//       IotHardwareBoard: "IotBoard",
//     },
//     management: {
//       SystemsManager: "SSM",
//       SystemsManagerParameterStore: "ParameterStore",
//     },
//     migration: {
//       ApplicationDiscoveryService: "ADS",
//       CloudendureMigration: "CEM",
//       DatabaseMigrationService: "DMS",
//       MigrationAndTransfer: "MAT",
//       ServerMigrationService: "SMS",
//     },
//     ml: {
//       DeepLearningContainers: "DLC",
//     },
//     network: {
//       CloudFront: "CF",
//       ElasticLoadBalancing: "ELB",
//       ElbApplicationLoadBalancer: "ALB",
//       ElbClassicLoadBalancer: "CLB",
//       ElbNetworkLoadBalancer: "NLB",
//       GlobalAccelerator: "GAX",
//       InternetGateway: "IGW",
//       TransitGateway: "TGW",
//       TransitGatewayAttachment: "TGWAttach",
//     },
//     security: {
//       CertificateManager: "ACM",
//       Cloudhsm: "CloudHSM",
//       DirectoryService: "DS",
//       FirewallManager: "FMS",
//       IdentityAndAccessManagementIamAccessAnalyzer: "IAMAccessAnalyzer",
//       IdentityAndAccessManagementIamAWSSts: "IAMAWSSts",
//       IdentityAndAccessManagementIamPermissions: "IAMPermissions",
//       IdentityAndAccessManagementIamRole: "IAMRole",
//       IdentityAndAccessManagementIam: "IAM",
//       KeyManagementService: "KMS",
//       ResourceAccessManager: "RAM",
//     },
//     storage: {
//       CloudendureDisasterRecovery: "CDR",
//       ElasticBlockStoreEBS: "EBS",
//       ElasticFileSystemEFS: "EFS",
//       Fsx: "FSx",
//       SimpleStorageServiceS3: "S3",
//     },
//   },
//   azure: {
//     compute: {
//       ContainerRegistries: "ACR",
//       KubernetesServices: "AKS",
//       VMScaleSet: "VMSS",
//     },
//   },
//   gcp: {
//     compute: {
//       AppEngine: "GAE",
//       Functions: "GCF",
//       ComputeEngine: "GCE",
//       KubernetesEngine: "GKE",
//     },
//     devtools: {
//       ContainerRegistry: "GCR",
//     },
//     ml: {
//       NaturalLanguageAPI: "NLAPI",
//       SpeechToText: "STT",
//       TextToSpeech: "TTS",
//     },
//     network: {
//       VirtualPrivateCloud: "VPC",
//     },
//     security: {
//       KeyManagementService: "KMS",
//       SecurityCommandCenter: "SCC",
//     },
//     storage: {
//       Storage: "GCS",
//     },
//   },
//   firebase: {
//     grow: {
//       Messaging: "FCM",
//     },
//   },
//   k8s: {
//     clusterconfig: {
//       Limits: "LimitRange",
//       HPA: "HorizontalPodAutoscaler",
//     },
//     compute: {
//       Deploy: "Deployment",
//       DS: "DaemonSet",
//       RS: "ReplicaSet",
//       STS: "StatefulSet",
//     },
//     controlplane: {
//       API: "APIServer",
//       CM: "ControllerManager",
//       KProxy: "KubeProxy",
//       Sched: "Scheduler",
//     },
//     group: {
//       NS: "Namespace",
//     },
//     network: {
//       Ep: "Endpoint",
//       Ing: "Ingress",
//       Netpol: "NetworkPolicy",
//       SVC: "Service",
//     },
//     podconfig: {
//       CM: "ConfigMap",
//     },
//     rbac: {
//       CRole: "ClusterRole",
//       CRB: "ClusterRoleBinding",
//       RB: "RoleBinding",
//       SA: "ServiceAccount",
//     },
//     storage: {
//       PV: "PersistentVolume",
//       PVC: "PersistentVolumeClaim",
//       SC: "StorageClass",
//       Vol: "Volume",
//     },
//   },
//   alibabacloud: {
//     application: {
//       LogService: "SLS",
//       MessageNotificationService: "MNS",
//       PerformanceTestingService: "PTS",
//       SmartConversationAnalysis: "SCA",
//     },
//     compute: {
//       AutoScaling: "ESS",
//       ElasticComputeService: "ECS",
//       ElasticContainerInstance: "ECI",
//       ElasticHighPerformanceComputing: "EHPC",
//       FunctionCompute: "FC",
//       OperationOrchestrationService: "OOS",
//       ResourceOrchestrationService: "ROS",
//       ServerLoadBalancer: "SLB",
//       ServerlessAppEngine: "SAE",
//       SimpleApplicationServer: "SAS",
//       WebAppService: "WAS",
//     },
//     database: {
//       DataManagementService: "DMS",
//       DataTransmissionService: "DTS",
//       DatabaseBackupService: "DBS",
//       DisributeRelationalDatabaseService: "DRDS",
//       GraphDatabaseService: "GDS",
//       RelationalDatabaseService: "RDS",
//     },
//     network: {
//       CloudEnterpriseNetwork: "CEN",
//       ElasticIpAddress: "EIP",
//       ServerLoadBalancer: "SLB",
//       VirtualPrivateCloud: "VPC",
//     },
//     security: {
//       AntiBotService: "ABS",
//       AntifraudService: "AS",
//       CloudFirewall: "CFW",
//       ContentModeration: "CM",
//       DataEncryptionService: "DES",
//       WebApplicationFirewall: "WAF",
//     },
//     storage: {
//       FileStorageHdfs: "HDFS",
//       FileStorageNas: "NAS",
//       HybridBackupRecovery: "HBR",
//       HybridCloudDisasterRecovery: "HDR",
//       ObjectStorageService: "OSS",
//       ObjectTableStore: "OTS",
//     },
//   },
//   oci: {
//     compute: {
//       VM: "VirtualMachine",
//       VMWhite: "VirtualMachineWhite",
//       BM: "BareMetal",
//       BMWhite: "BareMetalWhite",
//       OCIR: "OCIRegistry",
//       OCIRWhite: "OCIRegistryWhite",
//       OKE: "ContainerEngine",
//       OKEWhite: "ContainerEngineWhite",
//     },
//     database: {
//       Autonomous: "ADB",
//       AutonomousWhite: "ADBWhite",
//       DatabaseService: "DBService",
//       DatabaseServiceWhite: "DBServiceWhite",
//     },
//   },
//   elastic: {
//     elasticsearch: {
//       MachineLearning: "ML",
//     },
//   },
//   openstack: {
//     deployment: {
//       Kolla: "KollaAnsible",
//     },
//   },
// };

// const x = {};
// Object.entries(ALIASES).forEach(([ak, av]) => {
//   x[ak] = {};
//   Object.entries(av).forEach(([bk, bv]) => {
//     x[ak][bk] = {};
//     Object.entries(bv).forEach(([ck, cv]) => {
//       x[ak][bk][cv.toLowerCase()] = kebabize(ck);
//     });
//   });
// });

// console.log(x);

// https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
// function kebabize(str: string) {
//   return str.replace(
//     /[A-Z]+(?![a-z])|[A-Z]/g,
//     ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
//   );
// }

const aliases: Record<string, Record<string, Record<string, string>>> = {
  onprem: {
    ci: {
      tc: "teamcity",
    },
    network: {
      osm: "open-service-mesh",
    },
    proxmox: {
      proxmoxve: "pve",
    },
    storage: {
      ceph_osd: "ceph-osd",
    },
  },
  aws: {
    analytics: {
      es: "elasticsearch-service",
    },
    business: {
      a4b: "alexa-for-business",
    },
    blockchain: {
      qldb: "quantum-ledger-database-qldb",
    },
    compute: {
      autoscaling: "application-auto-scaling",
      ami: "ec2-ami",
      ecr: "ec2-container-registry",
      eb: "elastic-beanstalk",
      ecs: "elastic-container-service",
      eks: "elastic-kubernetes-service",
      sar: "serverless-application-repository",
    },
    database: {
      dms: "database-migration-service",
      documentdb: "documentdb-mongodb-compatibility",
      dax: "dynamodb-dax",
      dynamodbgsi: "dynamodb-global-secondary-index",
      db: "database",
      ddb: "dynamodb",
      elasticache: "elasticache",
      qldb: "quantum-ledger-database-qldb",
    },
    devtools: {
      cli: "command-line-interface",
      devtools: "developer-tools",
    },
    engagement: {
      ses: "simple-email-service-ses",
    },
    general: {
      officebuilding: "generic-office-building",
    },
    integration: {
      sns: "simple-notification-service-sns",
      sqs: "simple-queue-service-sqs",
      sf: "step-functions",
    },
    iot: {
      freertos: "freertos",
      iotboard: "iot-hardware-board",
    },
    management: {
      ssm: "systems-manager",
      parameterstore: "systems-manager-parameter-store",
    },
    migration: {
      ads: "application-discovery-service",
      cem: "cloudendure-migration",
      dms: "database-migration-service",
      mat: "migration-and-transfer",
      sms: "server-migration-service",
    },
    ml: {
      dlc: "deep-learning-containers",
    },
    network: {
      cf: "cloud-front",
      elb: "elastic-load-balancing",
      alb: "elb-application-load-balancer",
      clb: "elb-classic-load-balancer",
      nlb: "elb-network-load-balancer",
      gax: "global-accelerator",
      igw: "internet-gateway",
      tgw: "transit-gateway",
      tgwattach: "transit-gateway-attachment",
      route53: "route-53",
    },
    security: {
      acm: "certificate-manager",
      cloudhsm: "cloudhsm",
      ds: "directory-service",
      fms: "firewall-manager",
      iamaccessanalyzer: "identity-and-access-management-iam-access-analyzer",
      iamawssts: "identity-and-access-management-iam-aws-sts",
      iampermissions: "identity-and-access-management-iam-permissions",
      iamrole: "identity-and-access-management-iam-role",
      iam: "identity-and-access-management-iam",
      kms: "key-management-service",
      ram: "resource-access-manager",
    },
    storage: {
      cdr: "cloudendure-disaster-recovery",
      ebs: "elastic-block-store-ebs",
      efs: "elastic-file-system-efs",
      fsx: "fsx",
      s3: "simple-storage-service-s3",
    },
  },
  azure: {
    compute: {
      acr: "container-registries",
      aks: "kubernetes-services",
      vmss: "vm-scale-set",
    },
  },
  gcp: {
    compute: {
      gae: "app-engine",
      appengine: "app-engine",
      gcf: "functions",
      gce: "compute-engine",
      gke: "kubernetes-engine",
    },
    devtools: {
      gcr: "container-registry",
    },
    ml: {
      nlapi: "natural-language-api",
      stt: "speech-to-text",
      tts: "text-to-speech",
    },
    network: {
      vpc: "virtual-private-cloud",
    },
    security: {
      kms: "key-management-service",
      scc: "security-command-center",
    },
    storage: {
      gcs: "storage",
    },
    iot: {
      iotcore: "iot-core"
    }
  },
  firebase: {
    grow: {
      fcm: "messaging",
    },
  },
  k8s: {
    clusterconfig: {
      limitrange: "limits",
      horizontalpodautoscaler: "hpa",
    },
    compute: {
      deployment: "deploy",
      daemonset: "ds",
      replicaset: "rs",
      statefulset: "sts",
    },
    controlplane: {
      apiserver: "api",
      controllermanager: "cm",
      kubeproxy: "k-proxy",
      scheduler: "sched",
    },
    group: {
      namespace: "ns",
    },
    network: {
      endpoint: "ep",
      ingress: "ing",
      networkpolicy: "netpol",
      service: "svc",
    },
    podconfig: {
      configmap: "cm",
    },
    rbac: {
      clusterrole: "c-role",
      clusterrolebinding: "crb",
      rolebinding: "rb",
      serviceaccount: "sa",
    },
    storage: {
      persistentvolume: "pv",
      persistentvolumeclaim: "pvc",
      storageclass: "sc",
      volume: "vol",
    },
  },
  alibabacloud: {
    application: {
      sls: "log-service",
      mns: "message-notification-service",
      pts: "performance-testing-service",
      sca: "smart-conversation-analysis",
    },
    compute: {
      ess: "auto-scaling",
      ecs: "elastic-compute-service",
      eci: "elastic-container-instance",
      ehpc: "elastic-high-performance-computing",
      fc: "function-compute",
      oos: "operation-orchestration-service",
      ros: "resource-orchestration-service",
      slb: "server-load-balancer",
      sae: "serverless-app-engine",
      sas: "simple-application-server",
      was: "web-app-service",
    },
    database: {
      dms: "data-management-service",
      dts: "data-transmission-service",
      dbs: "database-backup-service",
      drds: "disribute-relational-database-service",
      gds: "graph-database-service",
      rds: "relational-database-service",
    },
    network: {
      cen: "cloud-enterprise-network",
      eip: "elastic-ip-address",
      slb: "server-load-balancer",
      vpc: "virtual-private-cloud",
    },
    security: {
      abs: "anti-bot-service",
      as: "antifraud-service",
      cfw: "cloud-firewall",
      cm: "content-moderation",
      des: "data-encryption-service",
      waf: "web-application-firewall",
    },
    storage: {
      hdfs: "file-storage-hdfs",
      nas: "file-storage-nas",
      hbr: "hybrid-backup-recovery",
      hdr: "hybrid-cloud-disaster-recovery",
      oss: "object-storage-service",
      ots: "object-table-store",
    },
  },
  oci: {
    compute: {
      virtualmachine: "vm",
      virtualmachinewhite: "vm-white",
      baremetal: "bm",
      baremetalwhite: "bm-white",
      ociregistry: "ocir",
      ociregistrywhite: "ocir-white",
      containerengine: "oke",
      containerenginewhite: "oke-white",
    },
    database: {
      adb: "autonomous",
      adbwhite: "autonomous-white",
      dbservice: "database-service",
      dbservicewhite: "database-service-white",
    },
  },
  elastic: {
    elasticsearch: {
      ml: "machine-learning",
    },
  },
  openstack: {
    deployment: {
      kollaansible: "kolla",
    },
  },
};

export function checkAlias(parts: string[]) {
  parts = parts.map((x) => x.toLowerCase());
  // console.log(parts)
  if (parts.length === 3) {
    const last = aliases[parts[0]]?.[parts[1]]?.[parts[2]];
    if (last) parts[2] = last;
  }
  return parts;
}
