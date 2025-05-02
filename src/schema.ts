// ported from https://github.com/dmytrostriletskyi/diagrams-as-code/blob/main/json-schemas/0.0.1.json

import { z } from "zod";
import { SymSpell } from "mnemonist";

const resourceEnum = [
  "cluster",
  "group",
  "alibabacloud.analytics.AnalyticDb",
  "alibabacloud.analytics.ClickHouse",
  "alibabacloud.analytics.DataLakeAnalytics",
  "alibabacloud.analytics.ElaticMapReduce",
  "alibabacloud.analytics.OpenSearch",
  "alibabacloud.application.ApiGateway",
  "alibabacloud.application.BeeBot",
  "alibabacloud.application.BlockchainAsAService",
  "alibabacloud.application.CloudCallCenter",
  "alibabacloud.application.CodePipeline",
  "alibabacloud.application.DirectMail",
  "alibabacloud.application.LogService",
  "alibabacloud.application.SLS",
  "alibabacloud.application.MessageNotificationService",
  "alibabacloud.application.MNS",
  "alibabacloud.application.NodeJsPerformancePlatform",
  "alibabacloud.application.OpenSearch",
  "alibabacloud.application.PerformanceTestingService",
  "alibabacloud.application.PTS",
  "alibabacloud.application.RdCloud",
  "alibabacloud.application.SmartConversationAnalysis",
  "alibabacloud.application.SCA",
  "alibabacloud.application.Yida",
  "alibabacloud.communication.DirectMail",
  "alibabacloud.communication.MobilePush",
  "alibabacloud.compute.AutoScaling",
  "alibabacloud.compute.ESS",
  "alibabacloud.compute.BatchCompute",
  "alibabacloud.compute.ContainerRegistry",
  "alibabacloud.compute.ContainerService",
  "alibabacloud.compute.ElasticComputeService",
  "alibabacloud.compute.ECS",
  "alibabacloud.compute.ElasticContainerInstance",
  "alibabacloud.compute.ECI",
  "alibabacloud.compute.ElasticHighPerformanceComputing",
  "alibabacloud.compute.EHPC",
  "alibabacloud.compute.ElasticSearch",
  "alibabacloud.compute.FunctionCompute",
  "alibabacloud.compute.FC",
  "alibabacloud.compute.OperationOrchestrationService",
  "alibabacloud.compute.OOS",
  "alibabacloud.compute.ResourceOrchestrationService",
  "alibabacloud.compute.ROS",
  "alibabacloud.compute.ServerLoadBalancer",
  "alibabacloud.compute.SLB",
  "alibabacloud.compute.ServerlessAppEngine",
  "alibabacloud.compute.SAE",
  "alibabacloud.compute.SimpleApplicationServer",
  "alibabacloud.compute.SAS",
  "alibabacloud.compute.WebAppService",
  "alibabacloud.compute.WAS",
  "alibabacloud.database.ApsaradbCassandra",
  "alibabacloud.database.ApsaradbHbase",
  "alibabacloud.database.ApsaradbMemcache",
  "alibabacloud.database.ApsaradbMongodb",
  "alibabacloud.database.ApsaradbOceanbase",
  "alibabacloud.database.ApsaradbPolardb",
  "alibabacloud.database.ApsaradbPostgresql",
  "alibabacloud.database.ApsaradbPpas",
  "alibabacloud.database.ApsaradbRedis",
  "alibabacloud.database.ApsaradbSqlserver",
  "alibabacloud.database.DataManagementService",
  "alibabacloud.database.DMS",
  "alibabacloud.database.DataTransmissionService",
  "alibabacloud.database.DTS",
  "alibabacloud.database.DatabaseBackupService",
  "alibabacloud.database.DBS",
  "alibabacloud.database.DisributeRelationalDatabaseService",
  "alibabacloud.database.DRDS",
  "alibabacloud.database.GraphDatabaseService",
  "alibabacloud.database.GDS",
  "alibabacloud.database.HybriddbForMysql",
  "alibabacloud.database.RelationalDatabaseService",
  "alibabacloud.database.RDS",
  "alibabacloud.iot.IotInternetDeviceId",
  "alibabacloud.iot.IotLinkWan",
  "alibabacloud.iot.IotMobileConnectionPackage",
  "alibabacloud.iot.IotPlatform",
  "alibabacloud.network.Cdn",
  "alibabacloud.network.CloudEnterpriseNetwork",
  "alibabacloud.network.CEN",
  "alibabacloud.network.ElasticIpAddress",
  "alibabacloud.network.EIP",
  "alibabacloud.network.ExpressConnect",
  "alibabacloud.network.NatGateway",
  "alibabacloud.network.ServerLoadBalancer",
  "alibabacloud.network.SLB",
  "alibabacloud.network.SmartAccessGateway",
  "alibabacloud.network.VirtualPrivateCloud",
  "alibabacloud.network.VPC",
  "alibabacloud.network.VpnGateway",
  "alibabacloud.security.AntiBotService",
  "alibabacloud.security.ABS",
  "alibabacloud.security.AntiDdosBasic",
  "alibabacloud.security.AntiDdosPro",
  "alibabacloud.security.AntifraudService",
  "alibabacloud.security.AS",
  "alibabacloud.security.BastionHost",
  "alibabacloud.security.CloudFirewall",
  "alibabacloud.security.CFW",
  "alibabacloud.security.CloudSecurityScanner",
  "alibabacloud.security.ContentModeration",
  "alibabacloud.security.CM",
  "alibabacloud.security.CrowdsourcedSecurityTesting",
  "alibabacloud.security.DataEncryptionService",
  "alibabacloud.security.DES",
  "alibabacloud.security.DbAudit",
  "alibabacloud.security.GameShield",
  "alibabacloud.security.IdVerification",
  "alibabacloud.security.ManagedSecurityService",
  "alibabacloud.security.SecurityCenter",
  "alibabacloud.security.ServerGuard",
  "alibabacloud.security.SslCertificates",
  "alibabacloud.security.WebApplicationFirewall",
  "alibabacloud.security.WAF",
  "alibabacloud.storage.CloudStorageGateway",
  "alibabacloud.storage.FileStorageHdfs",
  "alibabacloud.storage.HDFS",
  "alibabacloud.storage.FileStorageNas",
  "alibabacloud.storage.NAS",
  "alibabacloud.storage.HybridBackupRecovery",
  "alibabacloud.storage.HBR",
  "alibabacloud.storage.HybridCloudDisasterRecovery",
  "alibabacloud.storage.HDR",
  "alibabacloud.storage.Imm",
  "alibabacloud.storage.ObjectStorageService",
  "alibabacloud.storage.OSS",
  "alibabacloud.storage.ObjectTableStore",
  "alibabacloud.storage.OTS",
  "alibabacloud.web.Dns",
  "alibabacloud.web.Domain",
  "aws.analytics.Analytics",
  "aws.analytics.Athena",
  "aws.analytics.CloudsearchSearchDocuments",
  "aws.analytics.Cloudsearch",
  "aws.analytics.DataLakeResource",
  "aws.analytics.DataPipeline",
  "aws.analytics.ElasticsearchService",
  "aws.analytics.ES",
  "aws.analytics.EMRCluster",
  "aws.analytics.EMREngineMaprM3",
  "aws.analytics.EMREngineMaprM5",
  "aws.analytics.EMREngineMaprM7",
  "aws.analytics.EMREngine",
  "aws.analytics.EMRHdfsCluster",
  "aws.analytics.EMR",
  "aws.analytics.GlueCrawlers",
  "aws.analytics.GlueDataCatalog",
  "aws.analytics.Glue",
  "aws.analytics.KinesisDataAnalytics",
  "aws.analytics.KinesisDataFirehose",
  "aws.analytics.KinesisDataStreams",
  "aws.analytics.KinesisVideoStreams",
  "aws.analytics.Kinesis",
  "aws.analytics.LakeFormation",
  "aws.analytics.ManagedStreamingForKafka",
  "aws.analytics.Quicksight",
  "aws.analytics.RedshiftDenseComputeNode",
  "aws.analytics.RedshiftDenseStorageNode",
  "aws.analytics.Redshift",
  "aws.ar.ArVr",
  "aws.ar.Sumerian",
  "aws.blockchain.BlockchainResource",
  "aws.blockchain.Blockchain",
  "aws.blockchain.ManagedBlockchain",
  "aws.blockchain.QuantumLedgerDatabaseQldb",
  "aws.blockchain.QLDB",
  "aws.business.AlexaForBusiness",
  "aws.business.A4B",
  "aws.business.BusinessApplications",
  "aws.business.Chime",
  "aws.business.Workmail",
  "aws.compute.AppRunner",
  "aws.compute.ApplicationAutoScaling",
  "aws.compute.AutoScaling",
  "aws.compute.Batch",
  "aws.compute.ComputeOptimizer",
  "aws.compute.Compute",
  "aws.compute.EC2Ami",
  "aws.compute.AMI",
  "aws.compute.EC2AutoScaling",
  "aws.compute.EC2ContainerRegistryImage",
  "aws.compute.EC2ContainerRegistryRegistry",
  "aws.compute.EC2ContainerRegistry",
  "aws.compute.ECR",
  "aws.compute.EC2ElasticIpAddress",
  "aws.compute.EC2ImageBuilder",
  "aws.compute.EC2Instance",
  "aws.compute.EC2Instances",
  "aws.compute.EC2Rescue",
  "aws.compute.EC2SpotInstance",
  "aws.compute.EC2",
  "aws.compute.ElasticBeanstalkApplication",
  "aws.compute.ElasticBeanstalkDeployment",
  "aws.compute.ElasticBeanstalk",
  "aws.compute.EB",
  "aws.compute.ElasticContainerServiceContainer",
  "aws.compute.ElasticContainerServiceService",
  "aws.compute.ElasticContainerService",
  "aws.compute.ECS",
  "aws.compute.ElasticKubernetesService",
  "aws.compute.EKS",
  "aws.compute.Fargate",
  "aws.compute.LambdaFunction",
  "aws.compute.Lambda",
  "aws.compute.Lightsail",
  "aws.compute.LocalZones",
  "aws.compute.Outposts",
  "aws.compute.ServerlessApplicationRepository",
  "aws.compute.SAR",
  "aws.compute.ThinkboxDeadline",
  "aws.compute.ThinkboxDraft",
  "aws.compute.ThinkboxFrost",
  "aws.compute.ThinkboxKrakatoa",
  "aws.compute.ThinkboxSequoia",
  "aws.compute.ThinkboxStoke",
  "aws.compute.ThinkboxXmesh",
  "aws.compute.VmwareCloudOnAWS",
  "aws.compute.Wavelength",
  "aws.cost.Budgets",
  "aws.cost.CostAndUsageReport",
  "aws.cost.CostExplorer",
  "aws.cost.CostManagement",
  "aws.cost.ReservedInstanceReporting",
  "aws.cost.SavingsPlans",
  "aws.database.AuroraInstance",
  "aws.database.Aurora",
  "aws.database.DatabaseMigrationServiceDatabaseMigrationWorkflow",
  "aws.database.DatabaseMigrationService",
  "aws.database.DMS",
  "aws.database.Database",
  "aws.database.DB",
  "aws.database.DocumentdbMongodbCompatibility",
  "aws.database.DocumentDB",
  "aws.database.DynamodbAttribute",
  "aws.database.DynamodbAttributes",
  "aws.database.DynamodbDax",
  "aws.database.DAX",
  "aws.database.DynamodbGlobalSecondaryIndex",
  "aws.database.DynamodbGSI",
  "aws.database.DynamodbItem",
  "aws.database.DynamodbItems",
  "aws.database.DynamodbTable",
  "aws.database.Dynamodb",
  "aws.database.DDB",
  "aws.database.ElasticacheCacheNode",
  "aws.database.ElasticacheForMemcached",
  "aws.database.ElasticacheForRedis",
  "aws.database.Elasticache",
  "aws.database.ElastiCache",
  "aws.database.KeyspacesManagedApacheCassandraService",
  "aws.database.Neptune",
  "aws.database.QuantumLedgerDatabaseQldb",
  "aws.database.QLDB",
  "aws.database.RDSInstance",
  "aws.database.RDSMariadbInstance",
  "aws.database.RDSMysqlInstance",
  "aws.database.RDSOnVmware",
  "aws.database.RDSOracleInstance",
  "aws.database.RDSPostgresqlInstance",
  "aws.database.RDSSqlServerInstance",
  "aws.database.RDS",
  "aws.database.RedshiftDenseComputeNode",
  "aws.database.RedshiftDenseStorageNode",
  "aws.database.Redshift",
  "aws.database.Timestream",
  "aws.devtools.CloudDevelopmentKit",
  "aws.devtools.Cloud9Resource",
  "aws.devtools.Cloud9",
  "aws.devtools.Codebuild",
  "aws.devtools.Codecommit",
  "aws.devtools.Codedeploy",
  "aws.devtools.Codepipeline",
  "aws.devtools.Codestar",
  "aws.devtools.CommandLineInterface",
  "aws.devtools.CLI",
  "aws.devtools.DeveloperTools",
  "aws.devtools.DevTools",
  "aws.devtools.ToolsAndSdks",
  "aws.devtools.XRay",
  "aws.enablement.CustomerEnablement",
  "aws.enablement.Iq",
  "aws.enablement.ManagedServices",
  "aws.enablement.ProfessionalServices",
  "aws.enablement.Support",
  "aws.enduser.Appstream20",
  "aws.enduser.DesktopAndAppStreaming",
  "aws.enduser.Workdocs",
  "aws.enduser.Worklink",
  "aws.enduser.Workspaces",
  "aws.engagement.Connect",
  "aws.engagement.CustomerEngagement",
  "aws.engagement.Pinpoint",
  "aws.engagement.SimpleEmailServiceSesEmail",
  "aws.engagement.SimpleEmailServiceSes",
  "aws.engagement.SES",
  "aws.game.GameTech",
  "aws.game.Gamelift",
  "aws.general.Client",
  "aws.general.Disk",
  "aws.general.Forums",
  "aws.general.General",
  "aws.general.GenericDatabase",
  "aws.general.GenericFirewall",
  "aws.general.GenericOfficeBuilding",
  "aws.general.OfficeBuilding",
  "aws.general.GenericSamlToken",
  "aws.general.GenericSDK",
  "aws.general.InternetAlt1",
  "aws.general.InternetAlt2",
  "aws.general.InternetGateway",
  "aws.general.Marketplace",
  "aws.general.MobileClient",
  "aws.general.Multimedia",
  "aws.general.OfficeBuilding",
  "aws.general.SamlToken",
  "aws.general.SDK",
  "aws.general.SslPadlock",
  "aws.general.TapeStorage",
  "aws.general.Toolkit",
  "aws.general.TraditionalServer",
  "aws.general.User",
  "aws.general.Users",
  "aws.integration.ApplicationIntegration",
  "aws.integration.Appsync",
  "aws.integration.ConsoleMobileApplication",
  "aws.integration.EventResource",
  "aws.integration.EventbridgeCustomEventBusResource",
  "aws.integration.EventbridgeDefaultEventBusResource",
  "aws.integration.EventbridgeSaasPartnerEventBusResource",
  "aws.integration.Eventbridge",
  "aws.integration.ExpressWorkflows",
  "aws.integration.MQ",
  "aws.integration.SimpleNotificationServiceSnsEmailNotification",
  "aws.integration.SimpleNotificationServiceSnsHttpNotification",
  "aws.integration.SimpleNotificationServiceSnsTopic",
  "aws.integration.SimpleNotificationServiceSns",
  "aws.integration.SNS",
  "aws.integration.SimpleQueueServiceSqsMessage",
  "aws.integration.SimpleQueueServiceSqsQueue",
  "aws.integration.SimpleQueueServiceSqs",
  "aws.integration.SQS",
  "aws.integration.StepFunctions",
  "aws.integration.SF",
  "aws.iot.Freertos",
  "aws.iot.FreeRTOS",
  "aws.iot.InternetOfThings",
  "aws.iot.Iot1Click",
  "aws.iot.IotAction",
  "aws.iot.IotActuator",
  "aws.iot.IotAlexaEcho",
  "aws.iot.IotAlexaEnabledDevice",
  "aws.iot.IotAlexaSkill",
  "aws.iot.IotAlexaVoiceService",
  "aws.iot.IotAnalyticsChannel",
  "aws.iot.IotAnalyticsDataSet",
  "aws.iot.IotAnalyticsDataStore",
  "aws.iot.IotAnalyticsNotebook",
  "aws.iot.IotAnalyticsPipeline",
  "aws.iot.IotAnalytics",
  "aws.iot.IotBank",
  "aws.iot.IotBicycle",
  "aws.iot.IotButton",
  "aws.iot.IotCamera",
  "aws.iot.IotCar",
  "aws.iot.IotCart",
  "aws.iot.IotCertificate",
  "aws.iot.IotCoffeePot",
  "aws.iot.IotCore",
  "aws.iot.IotDesiredState",
  "aws.iot.IotDeviceDefender",
  "aws.iot.IotDeviceGateway",
  "aws.iot.IotDeviceManagement",
  "aws.iot.IotDoorLock",
  "aws.iot.IotEvents",
  "aws.iot.IotFactory",
  "aws.iot.IotFireTvStick",
  "aws.iot.IotFireTv",
  "aws.iot.IotGeneric",
  "aws.iot.IotGreengrassConnector",
  "aws.iot.IotGreengrass",
  "aws.iot.IotHardwareBoard",
  "aws.iot.IotBoard",
  "aws.iot.IotHouse",
  "aws.iot.IotHttp",
  "aws.iot.IotHttp2",
  "aws.iot.IotJobs",
  "aws.iot.IotLambda",
  "aws.iot.IotLightbulb",
  "aws.iot.IotMedicalEmergency",
  "aws.iot.IotMqtt",
  "aws.iot.IotOverTheAirUpdate",
  "aws.iot.IotPolicyEmergency",
  "aws.iot.IotPolicy",
  "aws.iot.IotReportedState",
  "aws.iot.IotRule",
  "aws.iot.IotSensor",
  "aws.iot.IotServo",
  "aws.iot.IotShadow",
  "aws.iot.IotSimulator",
  "aws.iot.IotSitewise",
  "aws.iot.IotThermostat",
  "aws.iot.IotThingsGraph",
  "aws.iot.IotTopic",
  "aws.iot.IotTravel",
  "aws.iot.IotUtility",
  "aws.iot.IotWindfarm",
  "aws.management.AutoScaling",
  "aws.management.Chatbot",
  "aws.management.CloudformationChangeSet",
  "aws.management.CloudformationStack",
  "aws.management.CloudformationTemplate",
  "aws.management.Cloudformation",
  "aws.management.Cloudtrail",
  "aws.management.CloudwatchAlarm",
  "aws.management.CloudwatchEventEventBased",
  "aws.management.CloudwatchEventTimeBased",
  "aws.management.CloudwatchRule",
  "aws.management.Cloudwatch",
  "aws.management.Codeguru",
  "aws.management.CommandLineInterface",
  "aws.management.Config",
  "aws.management.ControlTower",
  "aws.management.LicenseManager",
  "aws.management.ManagedServices",
  "aws.management.ManagementAndGovernance",
  "aws.management.ManagementConsole",
  "aws.management.OpsworksApps",
  "aws.management.OpsworksDeployments",
  "aws.management.OpsworksInstances",
  "aws.management.OpsworksLayers",
  "aws.management.OpsworksMonitoring",
  "aws.management.OpsworksPermissions",
  "aws.management.OpsworksResources",
  "aws.management.OpsworksStack",
  "aws.management.Opsworks",
  "aws.management.OrganizationsAccount",
  "aws.management.OrganizationsOrganizationalUnit",
  "aws.management.Organizations",
  "aws.management.PersonalHealthDashboard",
  "aws.management.ServiceCatalog",
  "aws.management.SystemsManagerAutomation",
  "aws.management.SystemsManagerDocuments",
  "aws.management.SystemsManagerInventory",
  "aws.management.SystemsManagerMaintenanceWindows",
  "aws.management.SystemsManagerOpscenter",
  "aws.management.SystemsManagerParameterStore",
  "aws.management.ParameterStore",
  "aws.management.SystemsManagerPatchManager",
  "aws.management.SystemsManagerRunCommand",
  "aws.management.SystemsManagerStateManager",
  "aws.management.SystemsManager",
  "aws.management.SSM",
  "aws.management.TrustedAdvisorChecklistCost",
  "aws.management.TrustedAdvisorChecklistFaultTolerant",
  "aws.management.TrustedAdvisorChecklistPerformance",
  "aws.management.TrustedAdvisorChecklistSecurity",
  "aws.management.TrustedAdvisorChecklist",
  "aws.management.TrustedAdvisor",
  "aws.management.WellArchitectedTool",
  "aws.media.ElasticTranscoder",
  "aws.media.ElementalConductor",
  "aws.media.ElementalDelta",
  "aws.media.ElementalLive",
  "aws.media.ElementalMediaconnect",
  "aws.media.ElementalMediaconvert",
  "aws.media.ElementalMedialive",
  "aws.media.ElementalMediapackage",
  "aws.media.ElementalMediastore",
  "aws.media.ElementalMediatailor",
  "aws.media.ElementalServer",
  "aws.media.KinesisVideoStreams",
  "aws.media.MediaServices",
  "aws.migration.ApplicationDiscoveryService",
  "aws.migration.ADS",
  "aws.migration.CloudendureMigration",
  "aws.migration.CEM",
  "aws.migration.DatabaseMigrationService",
  "aws.migration.DMS",
  "aws.migration.DatasyncAgent",
  "aws.migration.Datasync",
  "aws.migration.MigrationAndTransfer",
  "aws.migration.MAT",
  "aws.migration.MigrationHub",
  "aws.migration.ServerMigrationService",
  "aws.migration.SMS",
  "aws.migration.SnowballEdge",
  "aws.migration.Snowball",
  "aws.migration.Snowmobile",
  "aws.migration.TransferForSftp",
  "aws.ml.ApacheMxnetOnAWS",
  "aws.ml.AugmentedAi",
  "aws.ml.Comprehend",
  "aws.ml.DeepLearningAmis",
  "aws.ml.DeepLearningContainers",
  "aws.ml.DLC",
  "aws.ml.Deepcomposer",
  "aws.ml.Deeplens",
  "aws.ml.Deepracer",
  "aws.ml.ElasticInference",
  "aws.ml.Forecast",
  "aws.ml.FraudDetector",
  "aws.ml.Kendra",
  "aws.ml.Lex",
  "aws.ml.MachineLearning",
  "aws.ml.Personalize",
  "aws.ml.Polly",
  "aws.ml.RekognitionImage",
  "aws.ml.RekognitionVideo",
  "aws.ml.Rekognition",
  "aws.ml.SagemakerGroundTruth",
  "aws.ml.SagemakerModel",
  "aws.ml.SagemakerNotebook",
  "aws.ml.SagemakerTrainingJob",
  "aws.ml.Sagemaker",
  "aws.ml.TensorflowOnAWS",
  "aws.ml.Textract",
  "aws.ml.Transcribe",
  "aws.ml.Translate",
  "aws.mobile.Amplify",
  "aws.mobile.APIGatewayEndpoint",
  "aws.mobile.APIGateway",
  "aws.mobile.Appsync",
  "aws.mobile.DeviceFarm",
  "aws.mobile.Mobile",
  "aws.mobile.Pinpoint",
  "aws.network.APIGatewayEndpoint",
  "aws.network.APIGateway",
  "aws.network.AppMesh",
  "aws.network.ClientVpn",
  "aws.network.CloudMap",
  "aws.network.CloudFrontDownloadDistribution",
  "aws.network.CloudFrontEdgeLocation",
  "aws.network.CloudFrontStreamingDistribution",
  "aws.network.CloudFront",
  "aws.network.CF",
  "aws.network.DirectConnect",
  "aws.network.ElasticLoadBalancing",
  "aws.network.ELB",
  "aws.network.ElbApplicationLoadBalancer",
  "aws.network.ALB",
  "aws.network.ElbClassicLoadBalancer",
  "aws.network.CLB",
  "aws.network.ElbNetworkLoadBalancer",
  "aws.network.NLB",
  "aws.network.Endpoint",
  "aws.network.GlobalAccelerator",
  "aws.network.GAX",
  "aws.network.InternetGateway",
  "aws.network.Nacl",
  "aws.network.NATGateway",
  "aws.network.NetworkingAndContentDelivery",
  "aws.network.PrivateSubnet",
  "aws.network.Privatelink",
  "aws.network.PublicSubnet",
  "aws.network.Route53HostedZone",
  "aws.network.Route53",
  "aws.network.RouteTable",
  "aws.network.SiteToSiteVpn",
  "aws.network.TransitGateway",
  "aws.network.VPCCustomerGateway",
  "aws.network.VPCElasticNetworkAdapter",
  "aws.network.VPCElasticNetworkInterface",
  "aws.network.VPCFlowLogs",
  "aws.network.VPCPeering",
  "aws.network.VPCRouter",
  "aws.network.VPCTrafficMirroring",
  "aws.network.VPC",
  "aws.network.VpnConnection",
  "aws.network.VpnGateway",
  "aws.quantum.Braket",
  "aws.quantum.QuantumTechnologies",
  "aws.robotics.RobomakerCloudExtensionRos",
  "aws.robotics.RobomakerDevelopmentEnvironment",
  "aws.robotics.RobomakerFleetManagement",
  "aws.robotics.RobomakerSimulator",
  "aws.robotics.Robomaker",
  "aws.robotics.Robotics",
  "aws.satellite.GroundStation",
  "aws.satellite.Satellite",
  "aws.security.AdConnector",
  "aws.security.Artifact",
  "aws.security.CertificateAuthority",
  "aws.security.CertificateManager",
  "aws.security.ACM",
  "aws.security.CloudDirectory",
  "aws.security.Cloudhsm",
  "aws.security.CloudHSM",
  "aws.security.Cognito",
  "aws.security.Detective",
  "aws.security.DirectoryService",
  "aws.security.DS",
  "aws.security.FirewallManager",
  "aws.security.FMS",
  "aws.security.Guardduty",
  "aws.security.IdentityAndAccessManagementIamAccessAnalyzer",
  "aws.security.IAMAccessAnalyzer",
  "aws.security.IdentityAndAccessManagementIamAddOn",
  "aws.security.IdentityAndAccessManagementIamAWSStsAlternate",
  "aws.security.IdentityAndAccessManagementIamAWSSts",
  "aws.security.IAMAWSSts",
  "aws.security.IdentityAndAccessManagementIamDataEncryptionKey",
  "aws.security.IdentityAndAccessManagementIamEncryptedData",
  "aws.security.IdentityAndAccessManagementIamLongTermSecurityCredential",
  "aws.security.IdentityAndAccessManagementIamMfaToken",
  "aws.security.IdentityAndAccessManagementIamPermissions",
  "aws.security.IAMPermissions",
  "aws.security.IdentityAndAccessManagementIamRole",
  "aws.security.IAMRole",
  "aws.security.IdentityAndAccessManagementIamTemporarySecurityCredential",
  "aws.security.IdentityAndAccessManagementIam",
  "aws.security.IAM",
  "aws.security.InspectorAgent",
  "aws.security.Inspector",
  "aws.security.KeyManagementService",
  "aws.security.KMS",
  "aws.security.Macie",
  "aws.security.ManagedMicrosoftAd",
  "aws.security.ResourceAccessManager",
  "aws.security.RAM",
  "aws.security.SecretsManager",
  "aws.security.SecurityHubFinding",
  "aws.security.SecurityHub",
  "aws.security.SecurityIdentityAndCompliance",
  "aws.security.ShieldAdvanced",
  "aws.security.Shield",
  "aws.security.SimpleAd",
  "aws.security.SingleSignOn",
  "aws.security.WAFFilteringRule",
  "aws.security.WAF",
  "aws.storage.Backup",
  "aws.storage.CloudendureDisasterRecovery",
  "aws.storage.CDR",
  "aws.storage.EFSInfrequentaccessPrimaryBg",
  "aws.storage.EFSStandardPrimaryBg",
  "aws.storage.ElasticBlockStoreEBSSnapshot",
  "aws.storage.ElasticBlockStoreEBSVolume",
  "aws.storage.ElasticBlockStoreEBS",
  "aws.storage.EBS",
  "aws.storage.ElasticFileSystemEFSFileSystem",
  "aws.storage.ElasticFileSystemEFS",
  "aws.storage.EFS",
  "aws.storage.FsxForLustre",
  "aws.storage.FsxForWindowsFileServer",
  "aws.storage.Fsx",
  "aws.storage.FSx",
  "aws.storage.MultipleVolumesResource",
  "aws.storage.S3GlacierArchive",
  "aws.storage.S3GlacierVault",
  "aws.storage.S3Glacier",
  "aws.storage.SimpleStorageServiceS3BucketWithObjects",
  "aws.storage.SimpleStorageServiceS3Bucket",
  "aws.storage.SimpleStorageServiceS3Object",
  "aws.storage.SimpleStorageServiceS3",
  "aws.storage.S3",
  "aws.storage.SnowFamilySnowballImportExport",
  "aws.storage.SnowballEdge",
  "aws.storage.Snowball",
  "aws.storage.Snowmobile",
  "aws.storage.StorageGatewayCachedVolume",
  "aws.storage.StorageGatewayNonCachedVolume",
  "aws.storage.StorageGatewayVirtualTapeLibrary",
  "aws.storage.StorageGateway",
  "aws.storage.Storage",
  "azure.analytics.AnalysisServices",
  "azure.analytics.DataExplorerClusters",
  "azure.analytics.DataFactories",
  "azure.analytics.DataLakeAnalytics",
  "azure.analytics.DataLakeStoreGen1",
  "azure.analytics.Databricks",
  "azure.analytics.EventHubClusters",
  "azure.analytics.EventHubs",
  "azure.analytics.Hdinsightclusters",
  "azure.analytics.LogAnalyticsWorkspaces",
  "azure.analytics.StreamAnalyticsJobs",
  "azure.analytics.SynapseAnalytics",
  "azure.compute.AppServices",
  "azure.compute.AutomanagedVM",
  "azure.compute.AvailabilitySets",
  "azure.compute.BatchAccounts",
  "azure.compute.CitrixVirtualDesktopsEssentials",
  "azure.compute.CloudServicesClassic",
  "azure.compute.CloudServices",
  "azure.compute.CloudsimpleVirtualMachines",
  "azure.compute.ContainerInstances",
  "azure.compute.ContainerRegistries**, **ACR",
  "azure.compute.ACR",
  "azure.compute.DiskEncryptionSets",
  "azure.compute.DiskSnapshots",
  "azure.compute.Disks",
  "azure.compute.FunctionApps",
  "azure.compute.ImageDefinitions",
  "azure.compute.ImageVersions",
  "azure.compute.KubernetesServices",
  "azure.compute.AKS",
  "azure.compute.MeshApplications",
  "azure.compute.OsImages",
  "azure.compute.SAPHANAOnAzure",
  "azure.compute.ServiceFabricClusters",
  "azure.compute.SharedImageGalleries",
  "azure.compute.SpringCloud",
  "azure.compute.VMClassic",
  "azure.compute.VMImages",
  "azure.compute.VMLinux",
  "azure.compute.VMScaleSet",
  "azure.compute.VMSS",
  "azure.compute.VMWindows",
  "azure.compute.VM",
  "azure.compute.Workspaces",
  "azure.database.BlobStorage",
  "azure.database.CacheForRedis",
  "azure.database.CosmosDb",
  "azure.database.DataExplorerClusters",
  "azure.database.DataFactory",
  "azure.database.DataLake",
  "azure.database.DatabaseForMariadbServers",
  "azure.database.DatabaseForMysqlServers",
  "azure.database.DatabaseForPostgresqlServers",
  "azure.database.ElasticDatabasePools",
  "azure.database.ElasticJobAgents",
  "azure.database.InstancePools",
  "azure.database.ManagedDatabases",
  "azure.database.SQLDatabases",
  "azure.database.SQLDatawarehouse",
  "azure.database.SQLManagedInstances",
  "azure.database.SQLServerStretchDatabases",
  "azure.database.SQLServers",
  "azure.database.SQLVM",
  "azure.database.SQL",
  "azure.database.SsisLiftAndShiftIr",
  "azure.database.SynapseAnalytics",
  "azure.database.VirtualClusters",
  "azure.database.VirtualDatacenter",
  "azure.devops.ApplicationInsights",
  "azure.devops.Artifacts",
  "azure.devops.Boards",
  "azure.devops.Devops",
  "azure.devops.DevtestLabs",
  "azure.devops.LabServices",
  "azure.devops.Pipelines",
  "azure.devops.Repos",
  "azure.devops.TestPlans",
  "azure.general.Allresources",
  "azure.general.Azurehome",
  "azure.general.Developertools",
  "azure.general.Helpsupport",
  "azure.general.Information",
  "azure.general.Managementgroups",
  "azure.general.Marketplace",
  "azure.general.Quickstartcenter",
  "azure.general.Recent",
  "azure.general.Reservations",
  "azure.general.Resource",
  "azure.general.Resourcegroups",
  "azure.general.Servicehealth",
  "azure.general.Shareddashboard",
  "azure.general.Subscriptions",
  "azure.general.Support",
  "azure.general.Supportrequests",
  "azure.general.Tag",
  "azure.general.Tags",
  "azure.general.Templates",
  "azure.general.Twousericon",
  "azure.general.Userhealthicon",
  "azure.general.Usericon",
  "azure.general.Userprivacy",
  "azure.general.Userresource",
  "azure.general.Whatsnew",
  "azure.identity.AccessReview",
  "azure.identity.ActiveDirectoryConnectHealth",
  "azure.identity.ActiveDirectory",
  "azure.identity.ADB2C",
  "azure.identity.ADDomainServices",
  "azure.identity.ADIdentityProtection",
  "azure.identity.ADPrivilegedIdentityManagement",
  "azure.identity.AppRegistrations",
  "azure.identity.ConditionalAccess",
  "azure.identity.EnterpriseApplications",
  "azure.identity.Groups",
  "azure.identity.IdentityGovernance",
  "azure.identity.InformationProtection",
  "azure.identity.ManagedIdentities",
  "azure.identity.Users",
  "azure.integration.APIForFhir",
  "azure.integration.APIManagement",
  "azure.integration.AppConfiguration",
  "azure.integration.DataCatalog",
  "azure.integration.EventGridDomains",
  "azure.integration.EventGridSubscriptions",
  "azure.integration.EventGridTopics",
  "azure.integration.IntegrationAccounts",
  "azure.integration.IntegrationServiceEnvironments",
  "azure.integration.LogicAppsCustomConnector",
  "azure.integration.LogicApps",
  "azure.integration.PartnerTopic",
  "azure.integration.SendgridAccounts",
  "azure.integration.ServiceBusRelays",
  "azure.integration.ServiceBus",
  "azure.integration.ServiceCatalogManagedApplicationDefinitions",
  "azure.integration.SoftwareAsAService",
  "azure.integration.StorsimpleDeviceManagers",
  "azure.integration.SystemTopic",
  "azure.iot.DeviceProvisioningServices",
  "azure.iot.DigitalTwins",
  "azure.iot.IotCentralApplications",
  "azure.iot.IotHubSecurity",
  "azure.iot.IotHub",
  "azure.iot.Maps",
  "azure.iot.Sphere",
  "azure.iot.TimeSeriesInsightsEnvironments",
  "azure.iot.TimeSeriesInsightsEventsSources",
  "azure.iot.Windows10IotCoreServices",
  "azure.migration.DataBoxEdge",
  "azure.migration.DataBox",
  "azure.migration.DatabaseMigrationServices",
  "azure.migration.MigrationProjects",
  "azure.migration.RecoveryServicesVaults",
  "azure.ml.BatchAI",
  "azure.ml.BotServices",
  "azure.ml.CognitiveServices",
  "azure.ml.GenomicsAccounts",
  "azure.ml.MachineLearningServiceWorkspaces",
  "azure.ml.MachineLearningStudioWebServicePlans",
  "azure.ml.MachineLearningStudioWebServices",
  "azure.ml.MachineLearningStudioWorkspaces",
  "azure.mobile.AppServiceMobile",
  "azure.mobile.MobileEngagement",
  "azure.mobile.NotificationHubs",
  "azure.network.ApplicationGateway",
  "azure.network.ApplicationSecurityGroups",
  "azure.network.CDNProfiles",
  "azure.network.Connections",
  "azure.network.DDOSProtectionPlans",
  "azure.network.DNSPrivateZones",
  "azure.network.DNSZones",
  "azure.network.ExpressrouteCircuits",
  "azure.network.Firewall",
  "azure.network.FrontDoors",
  "azure.network.LoadBalancers",
  "azure.network.LocalNetworkGateways",
  "azure.network.NetworkInterfaces",
  "azure.network.NetworkSecurityGroupsClassic",
  "azure.network.NetworkWatcher",
  "azure.network.OnPremisesDataGateways",
  "azure.network.PublicIpAddresses",
  "azure.network.ReservedIpAddressesClassic",
  "azure.network.RouteFilters",
  "azure.network.RouteTables",
  "azure.network.ServiceEndpointPolicies",
  "azure.network.Subnets",
  "azure.network.TrafficManagerProfiles",
  "azure.network.VirtualNetworkClassic",
  "azure.network.VirtualNetworkGateways",
  "azure.network.VirtualNetworks",
  "azure.network.VirtualWans",
  "azure.security.ApplicationSecurityGroups",
  "azure.security.ConditionalAccess",
  "azure.security.Defender",
  "azure.security.ExtendedSecurityUpdates",
  "azure.security.KeyVaults",
  "azure.security.SecurityCenter",
  "azure.security.Sentinel",
  "azure.storage.ArchiveStorage",
  "azure.storage.Azurefxtedgefiler",
  "azure.storage.BlobStorage",
  "azure.storage.DataBoxEdgeDataBoxGateway",
  "azure.storage.DataBox",
  "azure.storage.DataLakeStorage",
  "azure.storage.GeneralStorage",
  "azure.storage.NetappFiles",
  "azure.storage.QueuesStorage",
  "azure.storage.StorageAccountsClassic",
  "azure.storage.StorageAccounts",
  "azure.storage.StorageExplorer",
  "azure.storage.StorageSyncServices",
  "azure.storage.StorsimpleDataManagers",
  "azure.storage.StorsimpleDeviceManagers",
  "azure.storage.TableStorage",
  "azure.web.APIConnections",
  "azure.web.AppServiceCertificates",
  "azure.web.AppServiceDomains",
  "azure.web.AppServiceEnvironments",
  "azure.web.AppServicePlans",
  "azure.web.AppServices",
  "azure.web.MediaServices",
  "azure.web.NotificationHubNamespaces",
  "azure.web.Search",
  "azure.web.Signalr",
  "digitalocean.compute.Containers",
  "digitalocean.compute.Docker",
  "digitalocean.compute.DropletConnect",
  "digitalocean.compute.DropletSnapshot",
  "digitalocean.compute.Droplet",
  "digitalocean.compute.K8SCluster",
  "digitalocean.compute.K8SNodePool",
  "digitalocean.compute.K8SNode",
  "digitalocean.database.DbaasPrimaryStandbyMore",
  "digitalocean.database.DbaasPrimary",
  "digitalocean.database.DbaasReadOnly",
  "digitalocean.database.DbaasStandby",
  "digitalocean.network.Certificate",
  "digitalocean.network.DomainRegistration",
  "digitalocean.network.Domain",
  "digitalocean.network.Firewall",
  "digitalocean.network.FloatingIp",
  "digitalocean.network.InternetGateway",
  "digitalocean.network.LoadBalancer",
  "digitalocean.network.ManagedVpn",
  "digitalocean.network.Vpc",
  "digitalocean.storage.Folder",
  "digitalocean.storage.Space",
  "digitalocean.storage.VolumeSnapshot",
  "digitalocean.storage.Volume",
  "elastic.agent.Agent",
  "elastic.agent.Endpoint",
  "elastic.agent.Fleet",
  "elastic.agent.Integrations",
  "elastic.beats.APM",
  "elastic.beats.Auditbeat",
  "elastic.beats.Filebeat",
  "elastic.beats.Functionbeat",
  "elastic.beats.Heartbeat",
  "elastic.beats.Metricbeat",
  "elastic.beats.Packetbeat",
  "elastic.beats.Winlogbeat",
  "elastic.elasticsearch.Alerting",
  "elastic.elasticsearch.Beats",
  "elastic.elasticsearch.Elasticsearch",
  "elastic.elasticsearch.ElasticSearch",
  "elastic.elasticsearch.Kibana",
  "elastic.elasticsearch.LogstashPipeline",
  "elastic.elasticsearch.Logstash",
  "elastic.elasticsearch.LogStash",
  "elastic.elasticsearch.MachineLearning",
  "elastic.elasticsearch.ML",
  "elastic.elasticsearch.MapServices",
  "elastic.elasticsearch.Maps",
  "elastic.elasticsearch.Monitoring",
  "elastic.elasticsearch.SearchableSnapshots",
  "elastic.elasticsearch.SecuritySettings",
  "elastic.elasticsearch.SQL",
  "elastic.elasticsearch.Stack",
  "elastic.enterprisesearch.AppSearch",
  "elastic.enterprisesearch.Crawler",
  "elastic.enterprisesearch.EnterpriseSearch",
  "elastic.enterprisesearch.SiteSearch",
  "elastic.enterprisesearch.WorkplaceSearch",
  "elastic.observability.APM",
  "elastic.observability.Logs",
  "elastic.observability.Metrics",
  "elastic.observability.Observability",
  "elastic.observability.Uptime",
  "elastic.orchestration.ECE",
  "elastic.orchestration.ECK",
  "elastic.saas.Cloud",
  "elastic.saas.Elastic",
  "elastic.security.Endpoint",
  "elastic.security.Security",
  "elastic.security.SIEM",
  "elastic.security.Xdr",
  "firebase.base.Firebase",
  "firebase.develop.Authentication",
  "firebase.develop.Firestore",
  "firebase.develop.Functions",
  "firebase.develop.Hosting",
  "firebase.develop.MLKit",
  "firebase.develop.RealtimeDatabase",
  "firebase.develop.Storage",
  "firebase.extentions.Extensions",
  "firebase.grow.ABTesting",
  "firebase.grow.AppIndexing",
  "firebase.grow.DynamicLinks",
  "firebase.grow.InAppMessaging",
  "firebase.grow.Invites",
  "firebase.grow.Messaging",
  "firebase.grow.FCM",
  "firebase.grow.Predictions",
  "firebase.grow.RemoteConfig",
  "firebase.quality.AppDistribution",
  "firebase.quality.CrashReporting",
  "firebase.quality.Crashlytics",
  "firebase.quality.PerformanceMonitoring",
  "firebase.quality.TestLab",
  "gcp.analytics.Bigquery",
  "gcp.analytics.BigQuery",
  "gcp.analytics.Composer",
  "gcp.analytics.DataCatalog",
  "gcp.analytics.DataFusion",
  "gcp.analytics.Dataflow",
  "gcp.analytics.Datalab",
  "gcp.analytics.Dataprep",
  "gcp.analytics.Dataproc",
  "gcp.analytics.Genomics",
  "gcp.analytics.Pubsub",
  "gcp.analytics.PubSub",
  "gcp.api.APIGateway",
  "gcp.api.Endpoints",
  "gcp.compute.AppEngine",
  "gcp.compute.GAE",
  "gcp.compute.ComputeEngine",
  "gcp.compute.GCE",
  "gcp.compute.ContainerOptimizedOS",
  "gcp.compute.Functions",
  "gcp.compute.GCF",
  "gcp.compute.GKEOnPrem",
  "gcp.compute.GPU",
  "gcp.compute.KubernetesEngine",
  "gcp.compute.GKE",
  "gcp.compute.Run",
  "gcp.database.Bigtable",
  "gcp.database.BigTable",
  "gcp.database.Datastore",
  "gcp.database.Firestore",
  "gcp.database.Memorystore",
  "gcp.database.Spanner",
  "gcp.database.SQL",
  "gcp.devtools.Build",
  "gcp.devtools.CodeForIntellij",
  "gcp.devtools.Code",
  "gcp.devtools.ContainerRegistry",
  "gcp.devtools.GCR",
  "gcp.devtools.GradleAppEnginePlugin",
  "gcp.devtools.IdePlugins",
  "gcp.devtools.MavenAppEnginePlugin",
  "gcp.devtools.Scheduler",
  "gcp.devtools.SDK",
  "gcp.devtools.SourceRepositories",
  "gcp.devtools.Tasks",
  "gcp.devtools.TestLab",
  "gcp.devtools.ToolsForEclipse",
  "gcp.devtools.ToolsForPowershell",
  "gcp.devtools.ToolsForVisualStudio",
  "gcp.iot.IotCore",
  "gcp.migration.TransferAppliance",
  "gcp.ml.AdvancedSolutionsLab",
  "gcp.ml.AIHub",
  "gcp.ml.AIPlatformDataLabelingService",
  "gcp.ml.AIPlatform",
  "gcp.ml.AutomlNaturalLanguage",
  "gcp.ml.AutomlTables",
  "gcp.ml.AutomlTranslation",
  "gcp.ml.AutomlVideoIntelligence",
  "gcp.ml.AutomlVision",
  "gcp.ml.Automl",
  "gcp.ml.AutoML",
  "gcp.ml.DialogFlowEnterpriseEdition",
  "gcp.ml.InferenceAPI",
  "gcp.ml.JobsAPI",
  "gcp.ml.NaturalLanguageAPI",
  "gcp.ml.NLAPI",
  "gcp.ml.RecommendationsAI",
  "gcp.ml.SpeechToText",
  "gcp.ml.STT",
  "gcp.ml.TextToSpeech",
  "gcp.ml.TTS",
  "gcp.ml.TPU",
  "gcp.ml.TranslationAPI",
  "gcp.ml.VideoIntelligenceAPI",
  "gcp.ml.VisionAPI",
  "gcp.network.Armor",
  "gcp.network.CDN",
  "gcp.network.DedicatedInterconnect",
  "gcp.network.DNS",
  "gcp.network.ExternalIpAddresses",
  "gcp.network.FirewallRules",
  "gcp.network.LoadBalancing",
  "gcp.network.NAT",
  "gcp.network.Network",
  "gcp.network.PartnerInterconnect",
  "gcp.network.PremiumNetworkTier",
  "gcp.network.Router",
  "gcp.network.Routes",
  "gcp.network.StandardNetworkTier",
  "gcp.network.TrafficDirector",
  "gcp.network.VirtualPrivateCloud",
  "gcp.network.VPC",
  "gcp.network.VPN",
  "gcp.operations.Monitoring",
  "gcp.security.Iam",
  "gcp.security.IAP",
  "gcp.security.KeyManagementService",
  "gcp.security.KMS",
  "gcp.security.ResourceManager",
  "gcp.security.SecurityCommandCenter",
  "gcp.security.SCC",
  "gcp.security.SecurityScanner",
  "gcp.storage.Filestore",
  "gcp.storage.PersistentDisk",
  "gcp.storage.Storage",
  "gcp.storage.GCS",
  "generic.blank.Blank",
  "generic.compute.Rack",
  "generic.database.SQL",
  "generic.device.Mobile",
  "generic.device.Tablet",
  "generic.network.Firewall",
  "generic.network.Router",
  "generic.network.Subnet",
  "generic.network.Switch",
  "generic.network.VPN",
  "generic.os.Android",
  "generic.os.Centos",
  "generic.os.Debian",
  "generic.os.IOS",
  "generic.os.LinuxGeneral",
  "generic.os.Raspbian",
  "generic.os.RedHat",
  "generic.os.Suse",
  "generic.os.Ubuntu",
  "generic.os.Windows",
  "generic.place.Datacenter",
  "generic.storage.Storage",
  "generic.virtualization.Virtualbox",
  "generic.virtualization.Vmware",
  "generic.virtualization.XEN",
  "ibm.analytics.Analytics",
  "ibm.analytics.DataIntegration",
  "ibm.analytics.DataRepositories",
  "ibm.analytics.DeviceAnalytics",
  "ibm.analytics.StreamingComputing",
  "ibm.applications.ActionableInsight",
  "ibm.applications.Annotate",
  "ibm.applications.ApiDeveloperPortal",
  "ibm.applications.ApiPolyglotRuntimes",
  "ibm.applications.AppServer",
  "ibm.applications.ApplicationLogic",
  "ibm.applications.EnterpriseApplications",
  "ibm.applications.Index",
  "ibm.applications.IotApplication",
  "ibm.applications.Microservice",
  "ibm.applications.MobileApp",
  "ibm.applications.Ontology",
  "ibm.applications.OpenSourceTools",
  "ibm.applications.RuntimeServices",
  "ibm.applications.SaasApplications",
  "ibm.applications.ServiceBroker",
  "ibm.applications.SpeechToText",
  "ibm.applications.VisualRecognition",
  "ibm.applications.Visualization",
  "ibm.blockchain.BlockchainDeveloper",
  "ibm.blockchain.Blockchain",
  "ibm.blockchain.CertificateAuthority",
  "ibm.blockchain.ClientApplication",
  "ibm.blockchain.Communication",
  "ibm.blockchain.Consensus",
  "ibm.blockchain.EventListener",
  "ibm.blockchain.Event",
  "ibm.blockchain.ExistingEnterpriseSystems",
  "ibm.blockchain.HyperledgerFabric",
  "ibm.blockchain.KeyManagement",
  "ibm.blockchain.Ledger",
  "ibm.blockchain.MembershipServicesProviderApi",
  "ibm.blockchain.Membership",
  "ibm.blockchain.MessageBus",
  "ibm.blockchain.Node",
  "ibm.blockchain.Services",
  "ibm.blockchain.SmartContract",
  "ibm.blockchain.TransactionManager",
  "ibm.blockchain.Wallet",
  "ibm.compute.BareMetalServer",
  "ibm.compute.ImageService",
  "ibm.compute.Instance",
  "ibm.compute.Key",
  "ibm.compute.PowerInstance",
  "ibm.data.Caches",
  "ibm.data.Cloud",
  "ibm.data.ConversationTrainedDeployed",
  "ibm.data.DataServices",
  "ibm.data.DataSources",
  "ibm.data.DeviceIdentityService",
  "ibm.data.DeviceRegistry",
  "ibm.data.EnterpriseData",
  "ibm.data.EnterpriseUserDirectory",
  "ibm.data.FileRepository",
  "ibm.data.GroundTruth",
  "ibm.data.Model",
  "ibm.data.TmsDataInterface",
  "ibm.devops.ArtifactManagement",
  "ibm.devops.BuildTest",
  "ibm.devops.CodeEditor",
  "ibm.devops.CollaborativeDevelopment",
  "ibm.devops.ConfigurationManagement",
  "ibm.devops.ContinuousDeploy",
  "ibm.devops.ContinuousTesting",
  "ibm.devops.Devops",
  "ibm.devops.Provision",
  "ibm.devops.ReleaseManagement",
  "ibm.general.CloudMessaging",
  "ibm.general.CloudServices",
  "ibm.general.Cloudant",
  "ibm.general.CognitiveServices",
  "ibm.general.DataSecurity",
  "ibm.general.Enterprise",
  "ibm.general.GovernanceRiskCompliance",
  "ibm.general.IBMContainers",
  "ibm.general.IBMPublicCloud",
  "ibm.general.IdentityAccessManagement",
  "ibm.general.IdentityProvider",
  "ibm.general.InfrastructureSecurity",
  "ibm.general.Internet",
  "ibm.general.IotCloud",
  "ibm.general.MicroservicesApplication",
  "ibm.general.MicroservicesMesh",
  "ibm.general.MonitoringLogging",
  "ibm.general.Monitoring",
  "ibm.general.ObjectStorage",
  "ibm.general.OfflineCapabilities",
  "ibm.general.Openwhisk",
  "ibm.general.PeerCloud",
  "ibm.general.RetrieveRank",
  "ibm.general.Scalable",
  "ibm.general.ServiceDiscoveryConfiguration",
  "ibm.general.TextToSpeech",
  "ibm.general.TransformationConnectivity",
  "ibm.infrastructure.Channels",
  "ibm.infrastructure.CloudMessaging",
  "ibm.infrastructure.Dashboard",
  "ibm.infrastructure.Diagnostics",
  "ibm.infrastructure.EdgeServices",
  "ibm.infrastructure.EnterpriseMessaging",
  "ibm.infrastructure.EventFeed",
  "ibm.infrastructure.InfrastructureServices",
  "ibm.infrastructure.InterserviceCommunication",
  "ibm.infrastructure.LoadBalancingRouting",
  "ibm.infrastructure.MicroservicesMesh",
  "ibm.infrastructure.MobileBackend",
  "ibm.infrastructure.MobileProviderNetwork",
  "ibm.infrastructure.MonitoringLogging",
  "ibm.infrastructure.Monitoring",
  "ibm.infrastructure.PeerServices",
  "ibm.infrastructure.ServiceDiscoveryConfiguration",
  "ibm.infrastructure.TransformationConnectivity",
  "ibm.management.AlertNotification",
  "ibm.management.ApiManagement",
  "ibm.management.CloudManagement",
  "ibm.management.ClusterManagement",
  "ibm.management.ContentManagement",
  "ibm.management.DataServices",
  "ibm.management.DeviceManagement",
  "ibm.management.InformationGovernance",
  "ibm.management.ItServiceManagement",
  "ibm.management.Management",
  "ibm.management.MonitoringMetrics",
  "ibm.management.ProcessManagement",
  "ibm.management.ProviderCloudPortalService",
  "ibm.management.PushNotifications",
  "ibm.management.ServiceManagementTools",
  "ibm.network.Bridge",
  "ibm.network.DirectLink",
  "ibm.network.Enterprise",
  "ibm.network.Firewall",
  "ibm.network.FloatingIp",
  "ibm.network.Gateway",
  "ibm.network.InternetServices",
  "ibm.network.LoadBalancerListener",
  "ibm.network.LoadBalancerPool",
  "ibm.network.LoadBalancer",
  "ibm.network.LoadBalancingRouting",
  "ibm.network.PublicGateway",
  "ibm.network.Region",
  "ibm.network.Router",
  "ibm.network.Rules",
  "ibm.network.Subnet",
  "ibm.network.TransitGateway",
  "ibm.network.Vpc",
  "ibm.network.VpnConnection",
  "ibm.network.VpnGateway",
  "ibm.network.VpnPolicy",
  "ibm.security.ApiSecurity",
  "ibm.security.BlockchainSecurityService",
  "ibm.security.DataSecurity",
  "ibm.security.Firewall",
  "ibm.security.Gateway",
  "ibm.security.GovernanceRiskCompliance",
  "ibm.security.IdentityAccessManagement",
  "ibm.security.IdentityProvider",
  "ibm.security.InfrastructureSecurity",
  "ibm.security.PhysicalSecurity",
  "ibm.security.SecurityMonitoringIntelligence",
  "ibm.security.SecurityServices",
  "ibm.security.TrustendComputing",
  "ibm.security.Vpn",
  "ibm.social.Communities",
  "ibm.social.FileSync",
  "ibm.social.LiveCollaboration",
  "ibm.social.Messaging",
  "ibm.social.Networking",
  "ibm.storage.BlockStorage",
  "ibm.storage.ObjectStorage",
  "ibm.user.Browser",
  "ibm.user.Device",
  "ibm.user.IntegratedDigitalExperiences",
  "ibm.user.PhysicalEntity",
  "ibm.user.Sensor",
  "ibm.user.User",
  "k8s.chaos.ChaosMesh",
  "k8s.chaos.LitmusChaos",
  "k8s.clusterconfig.HPA",
  "k8s.clusterconfig.HorizontalPodAutoscaler",
  "k8s.clusterconfig.Limits",
  "k8s.clusterconfig.LimitRange",
  "k8s.clusterconfig.Quota",
  "k8s.compute.Cronjob",
  "k8s.compute.Deploy",
  "k8s.compute.Deployment",
  "k8s.compute.DS",
  "k8s.compute.DaemonSet",
  "k8s.compute.Job",
  "k8s.compute.Pod",
  "k8s.compute.RS",
  "k8s.compute.ReplicaSet",
  "k8s.compute.STS",
  "k8s.compute.StatefulSet",
  "k8s.controlplane.API",
  "k8s.controlplane.APIServer",
  "k8s.controlplane.CCM",
  "k8s.controlplane.CM",
  "k8s.controlplane.ControllerManager",
  "k8s.controlplane.KProxy",
  "k8s.controlplane.KubeProxy",
  "k8s.controlplane.Kubelet",
  "k8s.controlplane.Sched",
  "k8s.controlplane.Scheduler",
  "k8s.ecosystem.ExternalDns",
  "k8s.ecosystem.Helm",
  "k8s.ecosystem.Krew",
  "k8s.ecosystem.Kustomize",
  "k8s.group.NS",
  "k8s.group.Namespace",
  "k8s.infra.ETCD",
  "k8s.infra.Master",
  "k8s.infra.Node",
  "k8s.network.Ep",
  "k8s.network.Endpoint",
  "k8s.network.Ing",
  "k8s.network.Ingress",
  "k8s.network.Netpol",
  "k8s.network.NetworkPolicy",
  "k8s.network.SVC",
  "k8s.network.Service",
  "k8s.others.CRD",
  "k8s.others.PSP",
  "k8s.podconfig.CM",
  "k8s.podconfig.ConfigMap",
  "k8s.podconfig.Secret",
  "k8s.rbac.CRole",
  "k8s.rbac.ClusterRole",
  "k8s.rbac.CRB",
  "k8s.rbac.ClusterRoleBinding",
  "k8s.rbac.Group",
  "k8s.rbac.RB",
  "k8s.rbac.RoleBinding",
  "k8s.rbac.Role",
  "k8s.rbac.SA",
  "k8s.rbac.ServiceAccount",
  "k8s.rbac.User",
  "k8s.storage.PV",
  "k8s.storage.PersistentVolume",
  "k8s.storage.PVC",
  "k8s.storage.PersistentVolumeClaim",
  "k8s.storage.SC",
  "k8s.storage.StorageClass",
  "k8s.storage.Vol",
  "k8s.storage.Volume",
  "oci.compute.AutoscaleWhite",
  "oci.compute.Autoscale",
  "oci.compute.BMWhite",
  "oci.compute.BareMetalWhite",
  "oci.compute.BM",
  "oci.compute.BareMetal",
  "oci.compute.ContainerWhite",
  "oci.compute.Container",
  "oci.compute.FunctionsWhite",
  "oci.compute.Functions",
  "oci.compute.InstancePoolsWhite",
  "oci.compute.InstancePools",
  "oci.compute.OCIRWhite",
  "oci.compute.OCIRegistryWhite",
  "oci.compute.OCIR",
  "oci.compute.OCIRegistry",
  "oci.compute.OKEWhite",
  "oci.compute.ContainerEngineWhite",
  "oci.compute.OKE",
  "oci.compute.ContainerEngine",
  "oci.compute.VMWhite",
  "oci.compute.VirtualMachineWhite",
  "oci.compute.VM",
  "oci.compute.VirtualMachine",
  "oci.connectivity.BackboneWhite",
  "oci.connectivity.Backbone",
  "oci.connectivity.CDNWhite",
  "oci.connectivity.CDN",
  "oci.connectivity.CustomerDatacenter",
  "oci.connectivity.CustomerDatacntrWhite",
  "oci.connectivity.CustomerPremiseWhite",
  "oci.connectivity.CustomerPremise",
  "oci.connectivity.DisconnectedRegionsWhite",
  "oci.connectivity.DisconnectedRegions",
  "oci.connectivity.DNSWhite",
  "oci.connectivity.DNS",
  "oci.connectivity.FastConnectWhite",
  "oci.connectivity.FastConnect",
  "oci.connectivity.NATGatewayWhite",
  "oci.connectivity.NATGateway",
  "oci.connectivity.VPNWhite",
  "oci.connectivity.VPN",
  "oci.database.AutonomousWhite",
  "oci.database.ADBWhite",
  "oci.database.Autonomous",
  "oci.database.ADB",
  "oci.database.BigdataServiceWhite",
  "oci.database.BigdataService",
  "oci.database.DatabaseServiceWhite",
  "oci.database.DBServiceWhite",
  "oci.database.DatabaseService",
  "oci.database.DBService",
  "oci.database.DataflowApacheWhite",
  "oci.database.DataflowApache",
  "oci.database.DcatWhite",
  "oci.database.Dcat",
  "oci.database.DisWhite",
  "oci.database.Dis",
  "oci.database.DMSWhite",
  "oci.database.DMS",
  "oci.database.ScienceWhite",
  "oci.database.Science",
  "oci.database.StreamWhite",
  "oci.database.Stream",
  "oci.devops.APIGatewayWhite",
  "oci.devops.APIGateway",
  "oci.devops.APIServiceWhite",
  "oci.devops.APIService",
  "oci.devops.ResourceMgmtWhite",
  "oci.devops.ResourceMgmt",
  "oci.governance.AuditWhite",
  "oci.governance.Audit",
  "oci.governance.CompartmentsWhite",
  "oci.governance.Compartments",
  "oci.governance.GroupsWhite",
  "oci.governance.Groups",
  "oci.governance.LoggingWhite",
  "oci.governance.Logging",
  "oci.governance.OCIDWhite",
  "oci.governance.OCID",
  "oci.governance.PoliciesWhite",
  "oci.governance.Policies",
  "oci.governance.TaggingWhite",
  "oci.governance.Tagging",
  "oci.monitoring.AlarmWhite",
  "oci.monitoring.Alarm",
  "oci.monitoring.EmailWhite",
  "oci.monitoring.Email",
  "oci.monitoring.EventsWhite",
  "oci.monitoring.Events",
  "oci.monitoring.HealthCheckWhite",
  "oci.monitoring.HealthCheck",
  "oci.monitoring.NotificationsWhite",
  "oci.monitoring.Notifications",
  "oci.monitoring.QueueWhite",
  "oci.monitoring.Queue",
  "oci.monitoring.SearchWhite",
  "oci.monitoring.Search",
  "oci.monitoring.TelemetryWhite",
  "oci.monitoring.Telemetry",
  "oci.monitoring.WorkflowWhite",
  "oci.monitoring.Workflow",
  "oci.network.DrgWhite",
  "oci.network.Drg",
  "oci.network.FirewallWhite",
  "oci.network.Firewall",
  "oci.network.InternetGatewayWhite",
  "oci.network.InternetGateway",
  "oci.network.LoadBalancerWhite",
  "oci.network.LoadBalancer",
  "oci.network.RouteTableWhite",
  "oci.network.RouteTable",
  "oci.network.SecurityListsWhite",
  "oci.network.SecurityLists",
  "oci.network.ServiceGatewayWhite",
  "oci.network.ServiceGateway",
  "oci.network.VcnWhite",
  "oci.network.Vcn",
  "oci.security.CloudGuardWhite",
  "oci.security.CloudGuard",
  "oci.security.DDOSWhite",
  "oci.security.DDOS",
  "oci.security.EncryptionWhite",
  "oci.security.Encryption",
  "oci.security.IDAccessWhite",
  "oci.security.IDAccess",
  "oci.security.KeyManagementWhite",
  "oci.security.KeyManagement",
  "oci.security.MaxSecurityZoneWhite",
  "oci.security.MaxSecurityZone",
  "oci.security.VaultWhite",
  "oci.security.Vault",
  "oci.security.WAFWhite",
  "oci.security.WAF",
  "oci.storage.BackupRestoreWhite",
  "oci.storage.BackupRestore",
  "oci.storage.BlockStorageCloneWhite",
  "oci.storage.BlockStorageClone",
  "oci.storage.BlockStorageWhite",
  "oci.storage.BlockStorage",
  "oci.storage.BucketsWhite",
  "oci.storage.Buckets",
  "oci.storage.DataTransferWhite",
  "oci.storage.DataTransfer",
  "oci.storage.ElasticPerformanceWhite",
  "oci.storage.ElasticPerformance",
  "oci.storage.FileStorageWhite",
  "oci.storage.FileStorage",
  "oci.storage.ObjectStorageWhite",
  "oci.storage.ObjectStorage",
  "oci.storage.StorageGatewayWhite",
  "oci.storage.StorageGateway",
  "onprem.aggregator.Fluentd",
  "onprem.aggregator.Vector",
  "onprem.analytics.Beam",
  "onprem.analytics.Databricks",
  "onprem.analytics.Dbt",
  "onprem.analytics.Dremio",
  "onprem.analytics.Flink",
  "onprem.analytics.Hadoop",
  "onprem.analytics.Hive",
  "onprem.analytics.Metabase",
  "onprem.analytics.Norikra",
  "onprem.analytics.Powerbi",
  "onprem.analytics.PowerBI",
  "onprem.analytics.Presto",
  "onprem.analytics.Singer",
  "onprem.analytics.Spark",
  "onprem.analytics.Storm",
  "onprem.analytics.Superset",
  "onprem.analytics.Tableau",
  "onprem.auth.Boundary",
  "onprem.auth.BuzzfeedSso",
  "onprem.auth.Oauth2Proxy",
  "onprem.cd.Spinnaker",
  "onprem.cd.TektonCli",
  "onprem.cd.Tekton",
  "onprem.certificates.CertManager",
  "onprem.certificates.LetsEncrypt",
  "onprem.ci.Circleci",
  "onprem.ci.CircleCI",
  "onprem.ci.Concourseci",
  "onprem.ci.ConcourseCI",
  "onprem.ci.Droneci",
  "onprem.ci.DroneCI",
  "onprem.ci.GithubActions",
  "onprem.ci.Gitlabci",
  "onprem.ci.GitlabCI",
  "onprem.ci.Jenkins",
  "onprem.ci.Teamcity",
  "onprem.ci.TC",
  "onprem.ci.Travisci",
  "onprem.ci.TravisCI",
  "onprem.ci.Zuulci",
  "onprem.ci.ZuulCI",
  "onprem.client.Client",
  "onprem.client.User",
  "onprem.client.Users",
  "onprem.compute.Nomad",
  "onprem.compute.Server",
  "onprem.container.Containerd",
  "onprem.container.Crio",
  "onprem.container.Docker",
  "onprem.container.Firecracker",
  "onprem.container.Gvisor",
  "onprem.container.K3S",
  "onprem.container.Lxc",
  "onprem.container.LXC",
  "onprem.container.Rkt",
  "onprem.container.RKT",
  "onprem.database.Cassandra",
  "onprem.database.Clickhouse",
  "onprem.database.ClickHouse",
  "onprem.database.Cockroachdb",
  "onprem.database.CockroachDB",
  "onprem.database.Couchbase",
  "onprem.database.Couchdb",
  "onprem.database.CouchDB",
  "onprem.database.Dgraph",
  "onprem.database.Druid",
  "onprem.database.Hbase",
  "onprem.database.HBase",
  "onprem.database.Influxdb",
  "onprem.database.InfluxDB",
  "onprem.database.Janusgraph",
  "onprem.database.JanusGraph",
  "onprem.database.Mariadb",
  "onprem.database.MariaDB",
  "onprem.database.Mongodb",
  "onprem.database.MongoDB",
  "onprem.database.Mssql",
  "onprem.database.MSSQL",
  "onprem.database.Mysql",
  "onprem.database.MySQL",
  "onprem.database.Neo4J",
  "onprem.database.Oracle",
  "onprem.database.Postgresql",
  "onprem.database.PostgreSQL",
  "onprem.database.Scylla",
  "onprem.dns.Coredns",
  "onprem.dns.Powerdns",
  "onprem.etl.Embulk",
  "onprem.gitops.Argocd",
  "onprem.gitops.ArgoCD",
  "onprem.gitops.Flagger",
  "onprem.gitops.Flux",
  "onprem.groupware.Nextcloud",
  "onprem.iac.Ansible",
  "onprem.iac.Atlantis",
  "onprem.iac.Awx",
  "onprem.iac.Puppet",
  "onprem.iac.Terraform",
  "onprem.identity.Dex",
  "onprem.inmemory.Aerospike",
  "onprem.inmemory.Hazelcast",
  "onprem.inmemory.Memcached",
  "onprem.inmemory.Redis",
  "onprem.logging.Fluentbit",
  "onprem.logging.FluentBit",
  "onprem.logging.Graylog",
  "onprem.logging.Loki",
  "onprem.logging.Rsyslog",
  "onprem.logging.RSyslog",
  "onprem.logging.SyslogNg",
  "onprem.messaging.Centrifugo",
  "onprem.mlops.Mlflow",
  "onprem.mlops.Polyaxon",
  "onprem.monitoring.Cortex",
  "onprem.monitoring.Datadog",
  "onprem.monitoring.Dynatrace",
  "onprem.monitoring.Grafana",
  "onprem.monitoring.Humio",
  "onprem.monitoring.Mimir",
  "onprem.monitoring.Nagios",
  "onprem.monitoring.Newrelic",
  "onprem.monitoring.PrometheusOperator",
  "onprem.monitoring.Prometheus",
  "onprem.monitoring.Sentry",
  "onprem.monitoring.Splunk",
  "onprem.monitoring.Thanos",
  "onprem.monitoring.Zabbix",
  "onprem.network.Ambassador",
  "onprem.network.Apache",
  "onprem.network.Bind9",
  "onprem.network.Caddy",
  "onprem.network.Consul",
  "onprem.network.Envoy",
  "onprem.network.Etcd",
  "onprem.network.ETCD",
  "onprem.network.Glassfish",
  "onprem.network.Gunicorn",
  "onprem.network.Haproxy",
  "onprem.network.HAProxy",
  "onprem.network.Internet",
  "onprem.network.Istio",
  "onprem.network.Jbossas",
  "onprem.network.Jetty",
  "onprem.network.Kong",
  "onprem.network.Linkerd",
  "onprem.network.Nginx",
  "onprem.network.Ocelot",
  "onprem.network.OpenServiceMesh",
  "onprem.network.OSM",
  "onprem.network.Opnsense",
  "onprem.network.OPNSense",
  "onprem.network.Pfsense",
  "onprem.network.PFSense",
  "onprem.network.Pomerium",
  "onprem.network.Powerdns",
  "onprem.network.Tomcat",
  "onprem.network.Traefik",
  "onprem.network.Tyk",
  "onprem.network.Vyos",
  "onprem.network.VyOS",
  "onprem.network.Wildfly",
  "onprem.network.Yarp",
  "onprem.network.Zookeeper",
  "onprem.proxmox.Pve",
  "onprem.proxmox.ProxmoxVE",
  "onprem.queue.Activemq",
  "onprem.queue.ActiveMQ",
  "onprem.queue.Celery",
  "onprem.queue.Emqx",
  "onprem.queue.EMQX",
  "onprem.queue.Kafka",
  "onprem.queue.Nats",
  "onprem.queue.Rabbitmq",
  "onprem.queue.RabbitMQ",
  "onprem.queue.Zeromq",
  "onprem.queue.ZeroMQ",
  "onprem.registry.Harbor",
  "onprem.registry.Jfrog",
  "onprem.search.Solr",
  "onprem.security.Bitwarden",
  "onprem.security.Trivy",
  "onprem.security.Vault",
  "onprem.storage.CephOsd",
  "onprem.storage.CEPH_OSD",
  "onprem.storage.Ceph",
  "onprem.storage.CEPH",
  "onprem.storage.Glusterfs",
  "onprem.storage.Portworx",
  "onprem.tracing.Jaeger",
  "onprem.tracing.Tempo",
  "onprem.vcs.Git",
  "onprem.vcs.Gitea",
  "onprem.vcs.Github",
  "onprem.vcs.Gitlab",
  "onprem.vcs.Svn",
  "onprem.workflow.Airflow",
  "onprem.workflow.Digdag",
  "onprem.workflow.Kubeflow",
  "onprem.workflow.KubeFlow",
  "onprem.workflow.Nifi",
  "onprem.workflow.NiFi",
  "openstack.apiproxies.EC2API",
  "openstack.applicationlifecycle.Freezer",
  "openstack.applicationlifecycle.Masakari",
  "openstack.applicationlifecycle.Murano",
  "openstack.applicationlifecycle.Solum",
  "openstack.baremetal.Cyborg",
  "openstack.baremetal.Ironic",
  "openstack.billing.Cloudkitty",
  "openstack.billing.CloudKitty",
  "openstack.compute.Nova",
  "openstack.compute.Qinling",
  "openstack.compute.Zun",
  "openstack.containerservices.Kuryr",
  "openstack.deployment.Ansible",
  "openstack.deployment.Charms",
  "openstack.deployment.Chef",
  "openstack.deployment.Helm",
  "openstack.deployment.Kolla",
  "openstack.deployment.KollaAnsible",
  "openstack.deployment.Tripleo",
  "openstack.deployment.TripleO",
  "openstack.frontend.Horizon",
  "openstack.monitoring.Monasca",
  "openstack.monitoring.Telemetry",
  "openstack.multiregion.Tricircle",
  "openstack.networking.Designate",
  "openstack.networking.Neutron",
  "openstack.networking.Octavia",
  "openstack.nfv.Tacker",
  "openstack.optimization.Congress",
  "openstack.optimization.Rally",
  "openstack.optimization.Vitrage",
  "openstack.optimization.Watcher",
  "openstack.orchestration.Blazar",
  "openstack.orchestration.Heat",
  "openstack.orchestration.Mistral",
  "openstack.orchestration.Senlin",
  "openstack.orchestration.Zaqar",
  "openstack.packaging.LOCI",
  "openstack.packaging.Puppet",
  "openstack.packaging.RPM",
  "openstack.sharedservices.Barbican",
  "openstack.sharedservices.Glance",
  "openstack.sharedservices.Karbor",
  "openstack.sharedservices.Keystone",
  "openstack.sharedservices.Searchlight",
  "openstack.storage.Cinder",
  "openstack.storage.Manila",
  "openstack.storage.Swift",
  "openstack.user.Openstackclient",
  "openstack.user.OpenStackClient",
  "openstack.workloadprovisioning.Magnum",
  "openstack.workloadprovisioning.Sahara",
  "openstack.workloadprovisioning.Trove",
  "outscale.compute.Compute",
  "outscale.compute.DirectConnect",
  "outscale.network.ClientVpn",
  "outscale.network.InternetService",
  "outscale.network.LoadBalancer",
  "outscale.network.NatService",
  "outscale.network.Net",
  "outscale.network.SiteToSiteVpng",
  "outscale.security.Firewall",
  "outscale.security.IdentityAndAccessManagement",
  "outscale.storage.SimpleStorageService",
  "outscale.storage.Storage",
  "programming.flowchart.Action",
  "programming.flowchart.Collate",
  "programming.flowchart.Database",
  "programming.flowchart.Decision",
  "programming.flowchart.Delay",
  "programming.flowchart.Display",
  "programming.flowchart.Document",
  "programming.flowchart.InputOutput",
  "programming.flowchart.Inspection",
  "programming.flowchart.InternalStorage",
  "programming.flowchart.LoopLimit",
  "programming.flowchart.ManualInput",
  "programming.flowchart.ManualLoop",
  "programming.flowchart.Merge",
  "programming.flowchart.MultipleDocuments",
  "programming.flowchart.OffPageConnectorLeft",
  "programming.flowchart.OffPageConnectorRight",
  "programming.flowchart.Or",
  "programming.flowchart.PredefinedProcess",
  "programming.flowchart.Preparation",
  "programming.flowchart.Sort",
  "programming.flowchart.StartEnd",
  "programming.flowchart.StoredData",
  "programming.flowchart.SummingJunction",
  "programming.framework.Angular",
  "programming.framework.Backbone",
  "programming.framework.Django",
  "programming.framework.Ember",
  "programming.framework.Fastapi",
  "programming.framework.FastAPI",
  "programming.framework.Flask",
  "programming.framework.Flutter",
  "programming.framework.Graphql",
  "programming.framework.GraphQL",
  "programming.framework.Laravel",
  "programming.framework.Micronaut",
  "programming.framework.Rails",
  "programming.framework.React",
  "programming.framework.Spring",
  "programming.framework.Starlette",
  "programming.framework.Svelte",
  "programming.framework.Vue",
  "programming.language.Bash",
  "programming.language.C",
  "programming.language.Cpp",
  "programming.language.Csharp",
  "programming.language.Dart",
  "programming.language.Elixir",
  "programming.language.Erlang",
  "programming.language.Go",
  "programming.language.Java",
  "programming.language.Javascript",
  "programming.language.JavaScript",
  "programming.language.Kotlin",
  "programming.language.Latex",
  "programming.language.Matlab",
  "programming.language.Nodejs",
  "programming.language.NodeJS",
  "programming.language.Php",
  "programming.language.PHP",
  "programming.language.Python",
  "programming.language.R",
  "programming.language.Ruby",
  "programming.language.Rust",
  "programming.language.Scala",
  "programming.language.Swift",
  "programming.language.Typescript",
  "programming.language.TypeScript",
  "programming.runtime.Dapr",
  "saas.alerting.Newrelic",
  "saas.alerting.Opsgenie",
  "saas.alerting.Pushover",
  "saas.alerting.Xmatters",
  "saas.alerting.Pagerduty",
  "saas.analytics.Dataform",
  "saas.analytics.Snowflake",
  "saas.analytics.Stitch",
  "saas.cdn.Akamai",
  "saas.cdn.Cloudflare",
  "saas.cdn.Fastly",
  "saas.chat.Discord",
  "saas.chat.Line",
  "saas.chat.Mattermost",
  "saas.chat.Messenger",
  "saas.chat.RocketChat",
  "saas.chat.Slack",
  "saas.chat.Teams",
  "saas.chat.Telegram",
  "saas.communication.Twilio",
  "saas.filesharing.Nextcloud",
  "saas.identity.Auth0",
  "saas.identity.Okta",
  "saas.logging.Datadog",
  "saas.logging.DataDog",
  "saas.logging.Newrelic",
  "saas.logging.NewRelic",
  "saas.logging.Papertrail",
  "saas.media.Cloudinary",
  "saas.recommendation.Recombee",
  "saas.social.Facebook",
  "saas.social.Twitter",
] as const;

const index = SymSpell.from(resourceEnum);
const resourceEnumSet = new Set(resourceEnum);

const resourceTypeSchema = z
  .custom<(typeof resourceEnum)[number]>(
    (val) => resourceEnumSet.has(val),
    (val) => {
      let message = "";
      if (typeof val !== "string") {
        message = `Expected string, received ${typeof val}`;
      } else {
        const guesses = index.search(val);
        if (guesses.length > 0) {
          message = `Wrong value "${val}". Did you mean "${guesses[0].term}"?`;
        } else {
          // resourceEnum.find(x => x.startsWith(val));
          message = `Wrong value "${val}"`;
        }
      }
      return { message };
    }
  )
  .describe("A type of the resource");

export type ResourceType = z.infer<typeof resourceTypeSchema>;

const directionSchema = z
  .enum(["incoming", "outgoing", "bidirectional", "undirected"])
  .describe("A direction of a relationship");

const relationSchema = z
  .object({
    to: z
      .string()
      .describe("A chain of identifiers to a resource via a dot from root"),
    direction: directionSchema,
    label: z.string().describe("A label of a relationship").optional(),
    color: z.string().describe("A color of a relationship").optional(),
    style: z.string().describe("A style of a relationship").optional(),
  })
  .strict();

export type Relation = z.infer<typeof relationSchema>;

const resourceBaseSchema = z
  .object({
    id: z.string().describe("A unique identifier of the resource"),
    name: z.string().describe("A name of the resource"),
    type: resourceTypeSchema,
    relates: z
      .array(relationSchema)
      .describe("Relations of the resource")
      .optional(),
  })
  .strict();

export type Resource = z.infer<typeof resourceBaseSchema> & {
  of?: Resource[];
};

const resourceSchema: z.ZodType<Resource> = resourceBaseSchema.extend({
  of: z
    .lazy(() => resourceSchema.array())
    .describe("Clusters and groups can have a list of resources inside them")
    .optional(),
});

const edgeStyleSchema = z
  .object({
    arrowhead: z
      .string()
      .describe("Style of arrowhead on the head node of an edge")
      .optional(),
    arrowsize: z
      .number()
      .describe("Multiplicative scale factor for arrowheads")
      .optional(),
    arrowtail: z
      .string()
      .describe("Style of arrowhead on the tail node of an edge")
      .optional(),
    class: z
      .string()
      .describe(
        "Classnames to attach to the node, edge, graph, or cluster's SVG element. For svg only"
      )
      .optional(),
    color: z
      .string()
      .describe("Basic drawing color for graphics, not text")
      .optional(),
    colorscheme: z
      .string()
      .describe(
        "A color scheme namespace: the context for interpreting color names"
      )
      .optional(),
    comment: z
      .string()
      .describe("Comments are inserted into output")
      .optional(),
    constraint: z
      .boolean()
      .describe(
        "If false, the edge is not used in ranking the nodes. For dot only"
      )
      .optional(),
    decorate: z
      .boolean()
      .describe("Whether to connect the edge label to the edge with a line")
      .optional(),
    dir: z.string().describe("Edge type for drawing arrowheads").optional(),
    edgehref: z
      .string()
      .describe("Synonym for edgeURL. For map, svg only")
      .optional(),
    edgetarget: z
      .string()
      .describe("Browser window to use for the edgeURL link. For map, svg only")
      .optional(),
    edgetooltip: z
      .string()
      .describe(
        "Tooltip annotation attached to the non-label part of an edge. For cmap, svg only"
      )
      .optional(),
    edgeURL: z
      .string()
      .describe(
        "The link for the non-label parts of an edge. For map, svg only"
      )
      .optional(),
    fillcolor: z
      .string()
      .describe("Color used to fill the background of a node or cluster")
      .optional(),
    fontcolor: z.string().describe("Color used for text").optional(),
    fontname: z.string().describe("Font used for text").optional(),
    fontsize: z
      .number()
      .describe("Font size, in points, used for text")
      .optional(),
    head_lp: z
      .string()
      .describe("Center position of an edge's head label. For write only")
      .optional(),
    headclip: z
      .boolean()
      .describe(
        "If true, the head of an edge is clipped to the boundary of the head node"
      )
      .optional(),
    headhref: z
      .string()
      .describe("Synonym for headURL. For map, svg only")
      .optional(),
    headlabel: z
      .string()
      .describe("Text label to be placed near head of edge")
      .optional(),
    headport: z
      .string()
      .describe(
        "Indicates where on the head node to attach the head of the edge"
      )
      .optional(),
    headtarget: z
      .string()
      .describe("Browser window to use for the headURL link. For map, svg only")
      .optional(),
    headtooltip: z
      .string()
      .describe(
        "Tooltip annotation attached to the head of an edge. For cmap, svg only"
      )
      .optional(),
    headURL: z
      .string()
      .describe(
        "If defined, headURL is output as part of the head label of the edge. For map, svg only"
      )
      .optional(),
    href: z
      .string()
      .describe("Synonym for URL. For map, postscript, svg only")
      .optional(),
    id: z
      .string()
      .describe("Identifier for graph objects. For map, postscript, svg only")
      .optional(),
    label: z.string().describe("Text label attached to objects").optional(),
    labelangle: z
      .number()
      .describe(
        "The angle (in degrees) in polar coordinates of the head & tail edge labels"
      )
      .optional(),
    labeldistance: z
      .number()
      .describe(
        "Scaling factor for the distance of headlabel / taillabel from the head / tail nodes"
      )
      .optional(),
    labelfloat: z
      .boolean()
      .describe(
        "If true, allows edge labels to be less constrained in position"
      )
      .optional(),
    labelfontcolor: z
      .string()
      .describe("Color used for headlabel and taillabel")
      .optional(),
    labelfontname: z
      .string()
      .describe("Font for headlabel and taillabel")
      .optional(),
    labelfontsize: z
      .number()
      .describe("Font size of headlabel and taillabel")
      .optional(),
    labelhref: z
      .string()
      .describe("Synonym for labelURL. For map, svg only")
      .optional(),
    labeltarget: z
      .string()
      .describe("Browser window to open labelURL links in. For map, svg only")
      .optional(),
    labeltooltip: z
      .string()
      .describe(
        "Tooltip annotation attached to label of an edge. For cmap, svg only"
      )
      .optional(),
    labelURL: z
      .string()
      .describe(
        "If defined, labelURL is the link used for the label of an edge. For map, svg only"
      )
      .optional(),
    layer: z
      .string()
      .describe(
        "Specifies layers in which the node, edge or cluster is present"
      )
      .optional(),
    len: z
      .number()
      .describe("Preferred edge length, in inches. For neato, fdp only")
      .optional(),
    lhead: z
      .string()
      .describe("Logical head of an edge. For dot only")
      .optional(),
    lp: z.string().describe("Label center position. For write only").optional(),
    ltail: z
      .string()
      .describe("Logical tail of an edge. For dot only")
      .optional(),
    minlen: z
      .number()
      .describe(
        "Minimum edge length (rank difference between head and tail). For dot only"
      )
      .optional(),
    nojustify: z
      .boolean()
      .describe(
        "Whether to justify multiline text vs the previous text line (rather than the side of the container)"
      )
      .optional(),
    penwidth: z
      .number()
      .describe(
        "Specifies the width of the pen, in points, used to draw lines and curves"
      )
      .optional(),
    pos: z
      .string()
      .describe(
        "Position of node, or spline control points. For neato, fdp only"
      )
      .optional(),
    samehead: z
      .string()
      .describe(
        "Edges with the same head and the same samehead value are aimed at the same point on the head. For dot only"
      )
      .optional(),
    sametail: z
      .string()
      .describe(
        "Edges with the same tail and the same sametail value are aimed at the same point on the tail. For dot only"
      )
      .optional(),
    showboxes: z
      .number()
      .describe("Print guide boxes for debugging. For dot only")
      .optional(),
    style: z
      .string()
      .describe("Set style information for components of the graph")
      .optional(),
    tail_lp: z
      .string()
      .describe("Position of an edge's tail label, in points. For write only")
      .optional(),
    tailclip: z
      .boolean()
      .describe(
        "If true, the tail of an edge is clipped to the boundary of the tail node"
      )
      .optional(),
    tailhref: z
      .string()
      .describe("Synonym for tailURL. For map, svg only")
      .optional(),
    taillabel: z
      .string()
      .describe("Text label to be placed near tail of edge")
      .optional(),
    tailport: z
      .string()
      .describe(
        "Indicates where on the tail node to attach the tail of the edge"
      )
      .optional(),
    tailtarget: z
      .string()
      .describe("Browser window to use for the tailURL link. For map, svg only")
      .optional(),
    tailtooltip: z
      .string()
      .describe(
        "Tooltip annotation attached to the tail of an edge. For cmap, svg only"
      )
      .optional(),
    tailURL: z
      .string()
      .describe(
        "If defined, tailURL is output as part of the tail label of the edge. For map, svg only"
      )
      .optional(),
    target: z
      .string()
      .describe(
        "If the object has a URL, this attribute determines which window of the browser is used for the URL. For map, svg only"
      )
      .optional(),
    tooltip: z
      .string()
      .describe(
        "Tooltip (mouse hover text) attached to the node, edge, cluster, or graph. For cmap, svg only"
      )
      .optional(),
    URL: z
      .string()
      .describe(
        "Hyperlinks incorporated into device-dependent output. For map, postscript, svg only"
      )
      .optional(),
    weight: z.number().describe("Weight of edge").optional(),
    xlabel: z.string().describe("External label for a node or edge").optional(),
    xlp: z
      .string()
      .describe("Position of an exterior label, in points. For write only")
      .optional(),
  })
  .strict();

const nodeStyleSchema = z
  .object({
    area: z
      .number()
      .describe(
        "Indicates the preferred area for a node or empty cluster. For patchwork only"
      )
      .optional(),
    class: z
      .string()
      .describe(
        "Classnames to attach to the node, edge, graph, or cluster's SVG element. For svg only"
      )
      .optional(),
    color: z
      .string()
      .describe("Basic drawing color for graphics, not text")
      .optional(),
    colorscheme: z
      .string()
      .describe(
        "A color scheme namespace: the context for interpreting color names"
      )
      .optional(),
    comment: z
      .string()
      .describe("Comments are inserted into output")
      .optional(),
    distortion: z
      .number()
      .describe("Distortion factor for shape=polygon")
      .optional(),
    fillcolor: z
      .string()
      .describe("Color used to fill the background of a node or cluster")
      .optional(),
    fixedsize: z
      .boolean()
      .describe(
        "Whether to use the specified width and height attributes to choose node size (rather than sizing to fit the node contents)"
      )
      .optional(),
    fontcolor: z.string().describe("Color used for text").optional(),
    fontname: z.string().describe("Font used for text").optional(),
    fontsize: z
      .number()
      .describe("Font size, in points, used for text")
      .optional(),
    gradientangle: z
      .number()
      .describe(
        "If a gradient fill is being used, this determines the angle of the fill"
      )
      .optional(),
    group: z
      .string()
      .describe(
        "Name for a group of nodes, for bundling edges avoiding crossings. For dot only"
      )
      .optional(),
    height: z.string().describe("Height of node, in inches").optional(),
    href: z
      .string()
      .describe("Synonym for URL. For map, postscript, svg only")
      .optional(),
    id: z
      .string()
      .describe("Identifier for graph objects. For map, postscript, svg only")
      .optional(),
    image: z
      .string()
      .describe(
        "Gives the name of a file containing an image to be displayed inside a node"
      )
      .optional(),
    imagepos: z
      .string()
      .describe(
        "Controls how an image is positioned within its containing node"
      )
      .optional(),
    imagescale: z
      .boolean()
      .describe("Controls how an image fills its containing node")
      .optional(),
    label: z.string().describe("Text label attached to objects").optional(),
    labelloc: z
      .string()
      .describe(
        "Vertical placement of labels for nodes, root graphs and clusters"
      )
      .optional(),
    layer: z
      .string()
      .describe(
        "Specifies layers in which the node, edge or cluster is present"
      )
      .optional(),
    margin: z
      .number()
      .describe("For graphs, this sets x and y margins of canvas, in inches")
      .optional(),
    nojustify: z
      .boolean()
      .describe(
        "Whether to justify multiline text vs the previous text line (rather than the side of the container)"
      )
      .optional(),
    ordering: z
      .string()
      .describe(
        "Constrains the left-to-right ordering of node edges. For dot only"
      )
      .optional(),
    orientation: z
      .number()
      .describe("node shape rotation angle, or graph orientation")
      .optional(),
    penwidth: z
      .number()
      .describe(
        "Specifies the width of the pen, in points, used to draw lines and curves"
      )
      .optional(),
    peripheries: z
      .number()
      .describe(
        "Set number of peripheries used in polygonal shapes and cluster boundaries"
      )
      .optional(),
    pin: z
      .boolean()
      .describe(
        "Keeps the node at the node's given input position. For neato, fdp only"
      )
      .optional(),
    pos: z
      .string()
      .describe(
        "Position of node, or spline control points. For neato, fdp only"
      )
      .optional(),
    rects: z
      .string()
      .describe("Rectangles for fields of records, in points. For write only")
      .optional(),
    regular: z
      .boolean()
      .describe("If true, force polygon to be regular")
      .optional(),
    root: z
      .string()
      .describe(
        "Specifies nodes to be used as the center of the layout. For twopi, circo only"
      )
      .optional(),
    samplepoints: z
      .number()
      .describe("Gives the number of points used for a circle/ellipse node")
      .optional(),
    shape: z.string().describe("Sets the shape of a node").optional(),
    shapefile: z
      .string()
      .describe("A file containing user-supplied node content")
      .optional(),
    showboxes: z
      .number()
      .describe("Print guide boxes for debugging. For dot only")
      .optional(),
    sides: z.number().describe("Number of sides when shape=polygon").optional(),
    skew: z.number().describe("Skew factor for shape=polygon").optional(),
    sortv: z
      .number()
      .describe("Sort order of graph components for ordering packmode packing")
      .optional(),
    style: z
      .string()
      .describe("Set style information for components of the graph")
      .optional(),
    target: z
      .string()
      .describe(
        "If the object has a URL, this attribute determines which window of the browser is used for the URL. For map, svg only"
      )
      .optional(),
    tooltip: z
      .string()
      .describe(
        "Tooltip (mouse hover text) attached to the node, edge, cluster, or graph. For cmap, svg only"
      )
      .optional(),
    URL: z
      .string()
      .describe(
        "Hyperlinks incorporated into device-dependent output. For map, postscript, svg only"
      )
      .optional(),
    vertices: z
      .array(z.any())
      .describe(
        "Sets the coordinates of the vertices of the node's polygon, in inches. For write only"
      )
      .optional(),
    width: z.number().describe("Width of node, in inches").optional(),
    xlabel: z.string().describe("External label for a node or edge").optional(),
    xlp: z
      .string()
      .describe("Position of an exterior label, in points. For write only")
      .optional(),
    z: z
      .number()
      .describe("Z-coordinate value for 3D layouts and displays")
      .optional(),
  })
  .strict();

const graphStyleSchema = z
  .object({
    _background: z
      .string()
      .describe(
        "A string in the xdot format specifying an arbitrary background"
      )
      .optional(),
    bb: z
      .string()
      .describe("Bounding box of drawing in points. For write only")
      .optional(),
    beautify: z
      .boolean()
      .describe(
        "Whether to draw leaf nodes uniformly in a circle around the root node in sfdp. For sfdp only"
      )
      .optional(),
    bgcolor: z.string().describe("Canvas background color").optional(),
    center: z
      .boolean()
      .describe("Whether to center the drawing in the output canvas")
      .optional(),
    charset: z
      .string()
      .describe(
        "Character encoding used when interpreting string input as a text label"
      )
      .optional(),
    class: z
      .string()
      .describe(
        "Classnames to attach to the node, edge, graph, or cluster's SVG element. For svg only"
      )
      .optional(),
    clusterrank: z
      .string()
      .describe("Mode used for handling clusters. For dot only")
      .optional(),
    colorscheme: z
      .string()
      .describe(
        "A color scheme namespace: the context for interpreting color names"
      )
      .optional(),
    comment: z
      .string()
      .describe("Comments are inserted into output")
      .optional(),
    compound: z
      .boolean()
      .describe("If true, allow edges between clusters. For dot only")
      .optional(),
    concentrate: z
      .boolean()
      .describe("If true, use edge concentrators")
      .optional(),
    Damping: z
      .number()
      .describe("Factor damping force motions. For neato only")
      .optional(),
    defaultdist: z
      .number()
      .describe(
        "The distance between nodes in separate connected components. For neato only"
      )
      .optional(),
    dim: z
      .number()
      .describe(
        "Set the number of dimensions used for the layout. For neato, fdp, sfdp only"
      )
      .optional(),
    dimen: z
      .number()
      .describe(
        "Set the number of dimensions used for rendering. For neato, fdp, sfdp only"
      )
      .optional(),
    diredgeconstraints: z
      .string()
      .describe(
        "Whether to constrain most edges to point downwards. For neato only"
      )
      .optional(),
    dpi: z
      .number()
      .describe(
        "Specifies the expected number of pixels per inch on a display device. For bitmap output, svg only"
      )
      .optional(),
    epsilon: z
      .number()
      .describe("Terminating condition. For neato only")
      .optional(),
    esep: z
      .number()
      .describe(
        "Margin used around polygons for purposes of spline edge routing. For neato only"
      )
      .optional(),
    fontcolor: z.string().describe("Color used for text").optional(),
    fontname: z.string().describe("Font used for text").optional(),
    fontnames: z
      .string()
      .describe(
        "Allows user control of how basic fontnames are represented in SVG output. For svg only"
      )
      .optional(),
    fontpath: z
      .string()
      .describe("Directory list used by libgd to search for bitmap fonts")
      .optional(),
    fontsize: z
      .number()
      .describe("Font size, in points, used for text")
      .optional(),
    forcelabels: z
      .boolean()
      .describe(
        "Whether to force placement of all xlabels, even if overlapping"
      )
      .optional(),
    gradientangle: z
      .number()
      .describe(
        "If a gradient fill is being used, this determines the angle of the fill"
      )
      .optional(),
    href: z
      .string()
      .describe("Synonym for URL. For map, postscript, svg only")
      .optional(),
    id: z
      .string()
      .describe("Identifier for graph objects. For map, postscript, svg only")
      .optional(),
    imagepath: z
      .string()
      .describe("A list of directories in which to look for image files")
      .optional(),
    inputscale: z
      .number()
      .describe(
        "Scales the input positions to convert between length units. For neato, fdp only"
      )
      .optional(),
    K: z
      .number()
      .describe(
        "Spring constant used in virtual physical model. For fdp, sfdp only"
      )
      .optional(),
    label: z.string().describe("Text label attached to objects").optional(),
    label_scheme: z
      .number()
      .describe(
        "Whether to treat a node whose name has the form |edgelabel|* as a special node representing an edge label. For sfdp only"
      )
      .optional(),
    labeljust: z
      .string()
      .describe("Justification for graph & cluster labels")
      .optional(),
    labelloc: z
      .string()
      .describe(
        "Vertical placement of labels for nodes, root graphs and clusters"
      )
      .optional(),
    landscape: z
      .boolean()
      .describe("If true, the graph is rendered in landscape mode")
      .optional(),
    layerlistsep: z
      .string()
      .describe(
        "The separator characters used to split attributes of type layerRange into a list of ranges"
      )
      .optional(),
    layers: z
      .array(z.any())
      .describe("A linearly ordered list of layer names attached to the graph")
      .optional(),
    layerselect: z
      .string()
      .describe("Selects a list of layers to be emitted")
      .optional(),
    layersep: z
      .string()
      .describe(
        "The separator characters for splitting the layers attribute into a list of layer names"
      )
      .optional(),
    layout: z.string().describe("Which layout engine to use").optional(),
    levels: z
      .number()
      .describe(
        "Number of levels allowed in the multilevel scheme. For sfdp only"
      )
      .optional(),
    levelsgap: z
      .number()
      .describe("strictness of neato level constraints. For neato only")
      .optional(),
    lheight: z
      .number()
      .describe("Height of graph or cluster label, in inches. For write only")
      .optional(),
    linelength: z
      .number()
      .describe(
        "How long strings should get before overflowing to next line, for text output"
      )
      .optional(),
    lp: z.string().describe("Label center position. For write only").optional(),
    lwidth: z
      .number()
      .describe("Width of graph or cluster label, in inches. For write only")
      .optional(),
    margin: z
      .number()
      .describe("For graphs, this sets x and y margins of canvas, in inches")
      .optional(),
    maxiter: z
      .number()
      .describe("Sets the number of iterations used. For neato, fdp only")
      .optional(),
    mclimit: z
      .number()
      .describe(
        "Scale factor for mincross (mc) edge crossing minimiser parameters. For dot only"
      )
      .optional(),
    mindist: z
      .number()
      .describe(
        "Specifies the minimum separation between all nodes. For circo only"
      )
      .optional(),
    mode: z
      .string()
      .describe("Technique for optimizing the layout. For neato only")
      .optional(),
    model: z
      .string()
      .describe(
        "Specifies how the distance matrix is computed for the input graph. For neato only"
      )
      .optional(),
    newrank: z
      .boolean()
      .describe(
        "Whether to use a single global ranking, ignoring clusters. For dot only"
      )
      .optional(),
    nodesep: z
      .number()
      .describe(
        "In dot, nodesep specifies the minimum space between two adjacent nodes in the same rank, in inches"
      )
      .optional(),
    nojustify: z
      .boolean()
      .describe(
        "Whether to justify multiline text vs the previous text line (rather than the side of the container)"
      )
      .optional(),
    normalize: z
      .number()
      .describe(
        "normalizes coordinates of final layout. For neato, fdp, sfdp, twopi, circo only"
      )
      .optional(),
    notranslate: z
      .boolean()
      .describe(
        "Whether to avoid translating layout to the origin point. For neato only"
      )
      .optional(),
    nslimit: z
      .number()
      .describe(
        "Sets number of iterations in network simplex applications. For dot only"
      )
      .optional(),
    nslimit1: z
      .number()
      .describe(
        "Sets number of iterations in network simplex applications. For dot only"
      )
      .optional(),
    oneblock: z
      .boolean()
      .describe(
        "Whether to draw circo graphs around one circle. For circo only"
      )
      .optional(),
    ordering: z
      .string()
      .describe(
        "Constrains the left-to-right ordering of node edges. For dot only"
      )
      .optional(),
    orientation: z
      .number()
      .describe("node shape rotation angle, or graph orientation")
      .optional(),
    outputorder: z
      .string()
      .describe("Specify order in which nodes and edges are drawn")
      .optional(),
    overlap: z
      .string()
      .describe(
        "Determines if and how node overlaps should be removed. For fdp, neato only"
      )
      .optional(),
    overlap_scaling: z
      .number()
      .describe(
        "Scale layout by factor, to reduce node overlap. For prism, neato, sfdp, fdp, circo, twopi only"
      )
      .optional(),
    overlap_shrink: z
      .boolean()
      .describe(
        "Whether the overlap removal algorithm should perform a compression pass to reduce the size of the layout. For prism only"
      )
      .optional(),
    pack: z
      .boolean()
      .describe(
        "Whether each connected component of the graph should be laid out separately, and then the graphs packed together"
      )
      .optional(),
    packmode: z
      .string()
      .describe("How connected components should be packed")
      .optional(),
    pad: z
      .number()
      .describe(
        "Inches to extend the drawing area around the minimal area needed to draw the graph"
      )
      .optional(),
    page: z
      .number()
      .describe("Width and height of output pages, in inches")
      .optional(),
    pagedir: z
      .string()
      .describe("The order in which pages are emitted")
      .optional(),
    quadtree: z
      .string()
      .describe("Quadtree scheme to use. For sfdp only")
      .optional(),
    quantum: z
      .number()
      .describe(
        "If quantum > 0.0, node label dimensions will be rounded to integral multiples of the quantum"
      )
      .optional(),
    rankdir: z
      .string()
      .describe("Sets direction of graph layout. For dot only")
      .optional(),
    ranksep: z
      .number()
      .describe("Specifies separation between ranks. For dot, twopi only")
      .optional(),
    ratio: z
      .number()
      .describe(
        "Sets the aspect ratio (drawing height/drawing width) for the drawing"
      )
      .optional(),
    remincross: z
      .boolean()
      .describe(
        "If there are multiple clusters, whether to run edge crossing minimization a second time. For dot only"
      )
      .optional(),
    repulsiveforce: z
      .number()
      .describe(
        "The power of the repulsive force used in an extended Fruchterman-Reingold. For sfdp only"
      )
      .optional(),
    resolution: z
      .number()
      .describe("Synonym for dpi. For bitmap output, svg only")
      .optional(),
    root: z
      .string()
      .describe(
        "Specifies nodes to be used as the center of the layout. For twopi, circo only"
      )
      .optional(),
    rotate: z
      .number()
      .describe("If rotate=90, sets drawing orientation to landscape")
      .optional(),
    rotation: z
      .number()
      .describe(
        "Rotates the final layout counter-clockwise by the specified number of degrees. For sfdp only"
      )
      .optional(),
    scale: z
      .number()
      .describe(
        "Scales layout by the given factor after the initial layout. For neato, twopi only"
      )
      .optional(),
    searchsize: z
      .number()
      .describe(
        "During network simplex, the maximum number of edges with negative cut values to search when looking for an edge with minimum cut value. For dot only"
      )
      .optional(),
    sep: z
      .string()
      .describe(
        "Margin to leave around nodes when removing node overlap. For fdp, neato only"
      )
      .optional(),
    showboxes: z
      .number()
      .describe("Print guide boxes for debugging. For dot only")
      .optional(),
    size: z
      .number()
      .describe("Maximum width and height of drawing, in inches")
      .optional(),
    smoothing: z
      .string()
      .describe(
        "Specifies a post-processing step used to smooth out an uneven distribution of nodes. For sfdp only"
      )
      .optional(),
    sortv: z
      .number()
      .describe("Sort order of graph components for ordering packmode packing")
      .optional(),
    splines: z
      .union([z.boolean(), z.string()])
      .describe("Controls how, and if, edges are represented")
      .optional(),
    start: z
      .string()
      .describe(
        "Parameter used to determine the initial layout of nodes. For neato, fdp, sfdp only"
      )
      .optional(),
    style: z
      .string()
      .describe("Set style information for components of the graph")
      .optional(),
    stylesheet: z
      .string()
      .describe(
        "A URL or pathname specifying an XML style sheet, used in SVG output. For svg only"
      )
      .optional(),
    target: z
      .string()
      .describe(
        "If the object has a URL, this attribute determines which window of the browser is used for the URL. For map, svg only"
      )
      .optional(),
    TBbalance: z
      .string()
      .describe("Which rank to move floating (loose) nodes to. For dot only")
      .optional(),
    tooltip: z
      .string()
      .describe(
        "Tooltip (mouse hover text) attached to the node, edge, cluster, or graph. For cmap, svg only"
      )
      .optional(),
    truecolor: z
      .boolean()
      .describe(
        "Whether internal bitmap rendering relies on a truecolor color model or uses. For bitmap output only"
      )
      .optional(),
    URL: z
      .string()
      .describe(
        "Hyperlinks incorporated into device-dependent output. For map, postscript, svg only"
      )
      .optional(),
    viewport: z
      .string()
      .describe("Clipping window on final drawing")
      .optional(),
    voro_margin: z
      .number()
      .describe(
        "Tuning margin of Voronoi technique. For neato, fdp, sfdp, twopi, circo only"
      )
      .optional(),
    xdotversion: z
      .string()
      .describe("Determines the version of xdot used in output. For xdot only")
      .optional(),
  })
  .strict();

const formatSchema = z
  .enum(["png", "jpg", "svg", "pdf", "dot"])
  .describe("A format of the image that would be created");

const diagramDirectionSchema = z
  .enum(["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"])
  .describe("A direction of the diagram's resource");

export const diagramSchema = z
  .object({
    diagram: z
      .object({
        name: z
          .string()
          .describe("A name of the diagram which is shown in the image"),
        direction: diagramDirectionSchema.optional(),
        style: z
          .object({
            graph: graphStyleSchema.optional(),
            node: nodeStyleSchema.optional(),
            edge: edgeStyleSchema.optional(),
          })
          .strict()
          .optional(),
        label_resources: z
          .boolean()
          .describe("Whether to label the diagram's resources")
          .optional(),
        resources: z.array(resourceSchema).describe("Resources of the diagram"),
        // TODO: remove
        file_name: z
          .string()
          .describe("A file name of the image that would be created")
          .optional(),
        format: formatSchema.optional(),
        open: z
          .boolean()
          .describe("Whether to open the diagram's image after creating it")
          .optional(),
      })
      .strict(),
  })
  .strict();

export type Diagram = z.infer<typeof diagramSchema>;
