// ported from https://github.com/dmytrostriletskyi/diagrams-as-code/blob/main/json-schemas/0.0.1.json

import { z } from "zod";

const resourceTypeSchema = z
  .union([
    z.literal("cluster"),
    z.literal("group"),
    z.literal("alibabacloud.analytics.AnalyticDb"),
    z.literal("alibabacloud.analytics.ClickHouse"),
    z.literal("alibabacloud.analytics.DataLakeAnalytics"),
    z.literal("alibabacloud.analytics.ElaticMapReduce"),
    z.literal("alibabacloud.analytics.OpenSearch"),
    z.literal("alibabacloud.application.ApiGateway"),
    z.literal("alibabacloud.application.BeeBot"),
    z.literal("alibabacloud.application.BlockchainAsAService"),
    z.literal("alibabacloud.application.CloudCallCenter"),
    z.literal("alibabacloud.application.CodePipeline"),
    z.literal("alibabacloud.application.DirectMail"),
    z.literal("alibabacloud.application.LogService"),
    z.literal("alibabacloud.application.SLS"),
    z.literal("alibabacloud.application.MessageNotificationService"),
    z.literal("alibabacloud.application.MNS"),
    z.literal("alibabacloud.application.NodeJsPerformancePlatform"),
    z.literal("alibabacloud.application.OpenSearch"),
    z.literal("alibabacloud.application.PerformanceTestingService"),
    z.literal("alibabacloud.application.PTS"),
    z.literal("alibabacloud.application.RdCloud"),
    z.literal("alibabacloud.application.SmartConversationAnalysis"),
    z.literal("alibabacloud.application.SCA"),
    z.literal("alibabacloud.application.Yida"),
    z.literal("alibabacloud.communication.DirectMail"),
    z.literal("alibabacloud.communication.MobilePush"),
    z.literal("alibabacloud.compute.AutoScaling"),
    z.literal("alibabacloud.compute.ESS"),
    z.literal("alibabacloud.compute.BatchCompute"),
    z.literal("alibabacloud.compute.ContainerRegistry"),
    z.literal("alibabacloud.compute.ContainerService"),
    z.literal("alibabacloud.compute.ElasticComputeService"),
    z.literal("alibabacloud.compute.ECS"),
    z.literal("alibabacloud.compute.ElasticContainerInstance"),
    z.literal("alibabacloud.compute.ECI"),
    z.literal("alibabacloud.compute.ElasticHighPerformanceComputing"),
    z.literal("alibabacloud.compute.EHPC"),
    z.literal("alibabacloud.compute.ElasticSearch"),
    z.literal("alibabacloud.compute.FunctionCompute"),
    z.literal("alibabacloud.compute.FC"),
    z.literal("alibabacloud.compute.OperationOrchestrationService"),
    z.literal("alibabacloud.compute.OOS"),
    z.literal("alibabacloud.compute.ResourceOrchestrationService"),
    z.literal("alibabacloud.compute.ROS"),
    z.literal("alibabacloud.compute.ServerLoadBalancer"),
    z.literal("alibabacloud.compute.SLB"),
    z.literal("alibabacloud.compute.ServerlessAppEngine"),
    z.literal("alibabacloud.compute.SAE"),
    z.literal("alibabacloud.compute.SimpleApplicationServer"),
    z.literal("alibabacloud.compute.SAS"),
    z.literal("alibabacloud.compute.WebAppService"),
    z.literal("alibabacloud.compute.WAS"),
    z.literal("alibabacloud.database.ApsaradbCassandra"),
    z.literal("alibabacloud.database.ApsaradbHbase"),
    z.literal("alibabacloud.database.ApsaradbMemcache"),
    z.literal("alibabacloud.database.ApsaradbMongodb"),
    z.literal("alibabacloud.database.ApsaradbOceanbase"),
    z.literal("alibabacloud.database.ApsaradbPolardb"),
    z.literal("alibabacloud.database.ApsaradbPostgresql"),
    z.literal("alibabacloud.database.ApsaradbPpas"),
    z.literal("alibabacloud.database.ApsaradbRedis"),
    z.literal("alibabacloud.database.ApsaradbSqlserver"),
    z.literal("alibabacloud.database.DataManagementService"),
    z.literal("alibabacloud.database.DMS"),
    z.literal("alibabacloud.database.DataTransmissionService"),
    z.literal("alibabacloud.database.DTS"),
    z.literal("alibabacloud.database.DatabaseBackupService"),
    z.literal("alibabacloud.database.DBS"),
    z.literal("alibabacloud.database.DisributeRelationalDatabaseService"),
    z.literal("alibabacloud.database.DRDS"),
    z.literal("alibabacloud.database.GraphDatabaseService"),
    z.literal("alibabacloud.database.GDS"),
    z.literal("alibabacloud.database.HybriddbForMysql"),
    z.literal("alibabacloud.database.RelationalDatabaseService"),
    z.literal("alibabacloud.database.RDS"),
    z.literal("alibabacloud.iot.IotInternetDeviceId"),
    z.literal("alibabacloud.iot.IotLinkWan"),
    z.literal("alibabacloud.iot.IotMobileConnectionPackage"),
    z.literal("alibabacloud.iot.IotPlatform"),
    z.literal("alibabacloud.network.Cdn"),
    z.literal("alibabacloud.network.CloudEnterpriseNetwork"),
    z.literal("alibabacloud.network.CEN"),
    z.literal("alibabacloud.network.ElasticIpAddress"),
    z.literal("alibabacloud.network.EIP"),
    z.literal("alibabacloud.network.ExpressConnect"),
    z.literal("alibabacloud.network.NatGateway"),
    z.literal("alibabacloud.network.ServerLoadBalancer"),
    z.literal("alibabacloud.network.SLB"),
    z.literal("alibabacloud.network.SmartAccessGateway"),
    z.literal("alibabacloud.network.VirtualPrivateCloud"),
    z.literal("alibabacloud.network.VPC"),
    z.literal("alibabacloud.network.VpnGateway"),
    z.literal("alibabacloud.security.AntiBotService"),
    z.literal("alibabacloud.security.ABS"),
    z.literal("alibabacloud.security.AntiDdosBasic"),
    z.literal("alibabacloud.security.AntiDdosPro"),
    z.literal("alibabacloud.security.AntifraudService"),
    z.literal("alibabacloud.security.AS"),
    z.literal("alibabacloud.security.BastionHost"),
    z.literal("alibabacloud.security.CloudFirewall"),
    z.literal("alibabacloud.security.CFW"),
    z.literal("alibabacloud.security.CloudSecurityScanner"),
    z.literal("alibabacloud.security.ContentModeration"),
    z.literal("alibabacloud.security.CM"),
    z.literal("alibabacloud.security.CrowdsourcedSecurityTesting"),
    z.literal("alibabacloud.security.DataEncryptionService"),
    z.literal("alibabacloud.security.DES"),
    z.literal("alibabacloud.security.DbAudit"),
    z.literal("alibabacloud.security.GameShield"),
    z.literal("alibabacloud.security.IdVerification"),
    z.literal("alibabacloud.security.ManagedSecurityService"),
    z.literal("alibabacloud.security.SecurityCenter"),
    z.literal("alibabacloud.security.ServerGuard"),
    z.literal("alibabacloud.security.SslCertificates"),
    z.literal("alibabacloud.security.WebApplicationFirewall"),
    z.literal("alibabacloud.security.WAF"),
    z.literal("alibabacloud.storage.CloudStorageGateway"),
    z.literal("alibabacloud.storage.FileStorageHdfs"),
    z.literal("alibabacloud.storage.HDFS"),
    z.literal("alibabacloud.storage.FileStorageNas"),
    z.literal("alibabacloud.storage.NAS"),
    z.literal("alibabacloud.storage.HybridBackupRecovery"),
    z.literal("alibabacloud.storage.HBR"),
    z.literal("alibabacloud.storage.HybridCloudDisasterRecovery"),
    z.literal("alibabacloud.storage.HDR"),
    z.literal("alibabacloud.storage.Imm"),
    z.literal("alibabacloud.storage.ObjectStorageService"),
    z.literal("alibabacloud.storage.OSS"),
    z.literal("alibabacloud.storage.ObjectTableStore"),
    z.literal("alibabacloud.storage.OTS"),
    z.literal("alibabacloud.web.Dns"),
    z.literal("alibabacloud.web.Domain"),
    z.literal("aws.analytics.Analytics"),
    z.literal("aws.analytics.Athena"),
    z.literal("aws.analytics.CloudsearchSearchDocuments"),
    z.literal("aws.analytics.Cloudsearch"),
    z.literal("aws.analytics.DataLakeResource"),
    z.literal("aws.analytics.DataPipeline"),
    z.literal("aws.analytics.ElasticsearchService"),
    z.literal("aws.analytics.ES"),
    z.literal("aws.analytics.EMRCluster"),
    z.literal("aws.analytics.EMREngineMaprM3"),
    z.literal("aws.analytics.EMREngineMaprM5"),
    z.literal("aws.analytics.EMREngineMaprM7"),
    z.literal("aws.analytics.EMREngine"),
    z.literal("aws.analytics.EMRHdfsCluster"),
    z.literal("aws.analytics.EMR"),
    z.literal("aws.analytics.GlueCrawlers"),
    z.literal("aws.analytics.GlueDataCatalog"),
    z.literal("aws.analytics.Glue"),
    z.literal("aws.analytics.KinesisDataAnalytics"),
    z.literal("aws.analytics.KinesisDataFirehose"),
    z.literal("aws.analytics.KinesisDataStreams"),
    z.literal("aws.analytics.KinesisVideoStreams"),
    z.literal("aws.analytics.Kinesis"),
    z.literal("aws.analytics.LakeFormation"),
    z.literal("aws.analytics.ManagedStreamingForKafka"),
    z.literal("aws.analytics.Quicksight"),
    z.literal("aws.analytics.RedshiftDenseComputeNode"),
    z.literal("aws.analytics.RedshiftDenseStorageNode"),
    z.literal("aws.analytics.Redshift"),
    z.literal("aws.ar.ArVr"),
    z.literal("aws.ar.Sumerian"),
    z.literal("aws.blockchain.BlockchainResource"),
    z.literal("aws.blockchain.Blockchain"),
    z.literal("aws.blockchain.ManagedBlockchain"),
    z.literal("aws.blockchain.QuantumLedgerDatabaseQldb"),
    z.literal("aws.blockchain.QLDB"),
    z.literal("aws.business.AlexaForBusiness"),
    z.literal("aws.business.A4B"),
    z.literal("aws.business.BusinessApplications"),
    z.literal("aws.business.Chime"),
    z.literal("aws.business.Workmail"),
    z.literal("aws.compute.AppRunner"),
    z.literal("aws.compute.ApplicationAutoScaling"),
    z.literal("aws.compute.AutoScaling"),
    z.literal("aws.compute.Batch"),
    z.literal("aws.compute.ComputeOptimizer"),
    z.literal("aws.compute.Compute"),
    z.literal("aws.compute.EC2Ami"),
    z.literal("aws.compute.AMI"),
    z.literal("aws.compute.EC2AutoScaling"),
    z.literal("aws.compute.EC2ContainerRegistryImage"),
    z.literal("aws.compute.EC2ContainerRegistryRegistry"),
    z.literal("aws.compute.EC2ContainerRegistry"),
    z.literal("aws.compute.ECR"),
    z.literal("aws.compute.EC2ElasticIpAddress"),
    z.literal("aws.compute.EC2ImageBuilder"),
    z.literal("aws.compute.EC2Instance"),
    z.literal("aws.compute.EC2Instances"),
    z.literal("aws.compute.EC2Rescue"),
    z.literal("aws.compute.EC2SpotInstance"),
    z.literal("aws.compute.EC2"),
    z.literal("aws.compute.ElasticBeanstalkApplication"),
    z.literal("aws.compute.ElasticBeanstalkDeployment"),
    z.literal("aws.compute.ElasticBeanstalk"),
    z.literal("aws.compute.EB"),
    z.literal("aws.compute.ElasticContainerServiceContainer"),
    z.literal("aws.compute.ElasticContainerServiceService"),
    z.literal("aws.compute.ElasticContainerService"),
    z.literal("aws.compute.ECS"),
    z.literal("aws.compute.ElasticKubernetesService"),
    z.literal("aws.compute.EKS"),
    z.literal("aws.compute.Fargate"),
    z.literal("aws.compute.LambdaFunction"),
    z.literal("aws.compute.Lambda"),
    z.literal("aws.compute.Lightsail"),
    z.literal("aws.compute.LocalZones"),
    z.literal("aws.compute.Outposts"),
    z.literal("aws.compute.ServerlessApplicationRepository"),
    z.literal("aws.compute.SAR"),
    z.literal("aws.compute.ThinkboxDeadline"),
    z.literal("aws.compute.ThinkboxDraft"),
    z.literal("aws.compute.ThinkboxFrost"),
    z.literal("aws.compute.ThinkboxKrakatoa"),
    z.literal("aws.compute.ThinkboxSequoia"),
    z.literal("aws.compute.ThinkboxStoke"),
    z.literal("aws.compute.ThinkboxXmesh"),
    z.literal("aws.compute.VmwareCloudOnAWS"),
    z.literal("aws.compute.Wavelength"),
    z.literal("aws.cost.Budgets"),
    z.literal("aws.cost.CostAndUsageReport"),
    z.literal("aws.cost.CostExplorer"),
    z.literal("aws.cost.CostManagement"),
    z.literal("aws.cost.ReservedInstanceReporting"),
    z.literal("aws.cost.SavingsPlans"),
    z.literal("aws.database.AuroraInstance"),
    z.literal("aws.database.Aurora"),
    z.literal("aws.database.DatabaseMigrationServiceDatabaseMigrationWorkflow"),
    z.literal("aws.database.DatabaseMigrationService"),
    z.literal("aws.database.DMS"),
    z.literal("aws.database.Database"),
    z.literal("aws.database.DB"),
    z.literal("aws.database.DocumentdbMongodbCompatibility"),
    z.literal("aws.database.DocumentDB"),
    z.literal("aws.database.DynamodbAttribute"),
    z.literal("aws.database.DynamodbAttributes"),
    z.literal("aws.database.DynamodbDax"),
    z.literal("aws.database.DAX"),
    z.literal("aws.database.DynamodbGlobalSecondaryIndex"),
    z.literal("aws.database.DynamodbGSI"),
    z.literal("aws.database.DynamodbItem"),
    z.literal("aws.database.DynamodbItems"),
    z.literal("aws.database.DynamodbTable"),
    z.literal("aws.database.Dynamodb"),
    z.literal("aws.database.DDB"),
    z.literal("aws.database.ElasticacheCacheNode"),
    z.literal("aws.database.ElasticacheForMemcached"),
    z.literal("aws.database.ElasticacheForRedis"),
    z.literal("aws.database.Elasticache"),
    z.literal("aws.database.ElastiCache"),
    z.literal("aws.database.KeyspacesManagedApacheCassandraService"),
    z.literal("aws.database.Neptune"),
    z.literal("aws.database.QuantumLedgerDatabaseQldb"),
    z.literal("aws.database.QLDB"),
    z.literal("aws.database.RDSInstance"),
    z.literal("aws.database.RDSMariadbInstance"),
    z.literal("aws.database.RDSMysqlInstance"),
    z.literal("aws.database.RDSOnVmware"),
    z.literal("aws.database.RDSOracleInstance"),
    z.literal("aws.database.RDSPostgresqlInstance"),
    z.literal("aws.database.RDSSqlServerInstance"),
    z.literal("aws.database.RDS"),
    z.literal("aws.database.RedshiftDenseComputeNode"),
    z.literal("aws.database.RedshiftDenseStorageNode"),
    z.literal("aws.database.Redshift"),
    z.literal("aws.database.Timestream"),
    z.literal("aws.devtools.CloudDevelopmentKit"),
    z.literal("aws.devtools.Cloud9Resource"),
    z.literal("aws.devtools.Cloud9"),
    z.literal("aws.devtools.Codebuild"),
    z.literal("aws.devtools.Codecommit"),
    z.literal("aws.devtools.Codedeploy"),
    z.literal("aws.devtools.Codepipeline"),
    z.literal("aws.devtools.Codestar"),
    z.literal("aws.devtools.CommandLineInterface"),
    z.literal("aws.devtools.CLI"),
    z.literal("aws.devtools.DeveloperTools"),
    z.literal("aws.devtools.DevTools"),
    z.literal("aws.devtools.ToolsAndSdks"),
    z.literal("aws.devtools.XRay"),
    z.literal("aws.enablement.CustomerEnablement"),
    z.literal("aws.enablement.Iq"),
    z.literal("aws.enablement.ManagedServices"),
    z.literal("aws.enablement.ProfessionalServices"),
    z.literal("aws.enablement.Support"),
    z.literal("aws.enduser.Appstream20"),
    z.literal("aws.enduser.DesktopAndAppStreaming"),
    z.literal("aws.enduser.Workdocs"),
    z.literal("aws.enduser.Worklink"),
    z.literal("aws.enduser.Workspaces"),
    z.literal("aws.engagement.Connect"),
    z.literal("aws.engagement.CustomerEngagement"),
    z.literal("aws.engagement.Pinpoint"),
    z.literal("aws.engagement.SimpleEmailServiceSesEmail"),
    z.literal("aws.engagement.SimpleEmailServiceSes"),
    z.literal("aws.engagement.SES"),
    z.literal("aws.game.GameTech"),
    z.literal("aws.game.Gamelift"),
    z.literal("aws.general.Client"),
    z.literal("aws.general.Disk"),
    z.literal("aws.general.Forums"),
    z.literal("aws.general.General"),
    z.literal("aws.general.GenericDatabase"),
    z.literal("aws.general.GenericFirewall"),
    z.literal("aws.general.GenericOfficeBuilding"),
    z.literal("aws.general.OfficeBuilding"),
    z.literal("aws.general.GenericSamlToken"),
    z.literal("aws.general.GenericSDK"),
    z.literal("aws.general.InternetAlt1"),
    z.literal("aws.general.InternetAlt2"),
    z.literal("aws.general.InternetGateway"),
    z.literal("aws.general.Marketplace"),
    z.literal("aws.general.MobileClient"),
    z.literal("aws.general.Multimedia"),
    z.literal("aws.general.OfficeBuilding"),
    z.literal("aws.general.SamlToken"),
    z.literal("aws.general.SDK"),
    z.literal("aws.general.SslPadlock"),
    z.literal("aws.general.TapeStorage"),
    z.literal("aws.general.Toolkit"),
    z.literal("aws.general.TraditionalServer"),
    z.literal("aws.general.User"),
    z.literal("aws.general.Users"),
    z.literal("aws.integration.ApplicationIntegration"),
    z.literal("aws.integration.Appsync"),
    z.literal("aws.integration.ConsoleMobileApplication"),
    z.literal("aws.integration.EventResource"),
    z.literal("aws.integration.EventbridgeCustomEventBusResource"),
    z.literal("aws.integration.EventbridgeDefaultEventBusResource"),
    z.literal("aws.integration.EventbridgeSaasPartnerEventBusResource"),
    z.literal("aws.integration.Eventbridge"),
    z.literal("aws.integration.ExpressWorkflows"),
    z.literal("aws.integration.MQ"),
    z.literal("aws.integration.SimpleNotificationServiceSnsEmailNotification"),
    z.literal("aws.integration.SimpleNotificationServiceSnsHttpNotification"),
    z.literal("aws.integration.SimpleNotificationServiceSnsTopic"),
    z.literal("aws.integration.SimpleNotificationServiceSns"),
    z.literal("aws.integration.SNS"),
    z.literal("aws.integration.SimpleQueueServiceSqsMessage"),
    z.literal("aws.integration.SimpleQueueServiceSqsQueue"),
    z.literal("aws.integration.SimpleQueueServiceSqs"),
    z.literal("aws.integration.SQS"),
    z.literal("aws.integration.StepFunctions"),
    z.literal("aws.integration.SF"),
    z.literal("aws.iot.Freertos"),
    z.literal("aws.iot.FreeRTOS"),
    z.literal("aws.iot.InternetOfThings"),
    z.literal("aws.iot.Iot1Click"),
    z.literal("aws.iot.IotAction"),
    z.literal("aws.iot.IotActuator"),
    z.literal("aws.iot.IotAlexaEcho"),
    z.literal("aws.iot.IotAlexaEnabledDevice"),
    z.literal("aws.iot.IotAlexaSkill"),
    z.literal("aws.iot.IotAlexaVoiceService"),
    z.literal("aws.iot.IotAnalyticsChannel"),
    z.literal("aws.iot.IotAnalyticsDataSet"),
    z.literal("aws.iot.IotAnalyticsDataStore"),
    z.literal("aws.iot.IotAnalyticsNotebook"),
    z.literal("aws.iot.IotAnalyticsPipeline"),
    z.literal("aws.iot.IotAnalytics"),
    z.literal("aws.iot.IotBank"),
    z.literal("aws.iot.IotBicycle"),
    z.literal("aws.iot.IotButton"),
    z.literal("aws.iot.IotCamera"),
    z.literal("aws.iot.IotCar"),
    z.literal("aws.iot.IotCart"),
    z.literal("aws.iot.IotCertificate"),
    z.literal("aws.iot.IotCoffeePot"),
    z.literal("aws.iot.IotCore"),
    z.literal("aws.iot.IotDesiredState"),
    z.literal("aws.iot.IotDeviceDefender"),
    z.literal("aws.iot.IotDeviceGateway"),
    z.literal("aws.iot.IotDeviceManagement"),
    z.literal("aws.iot.IotDoorLock"),
    z.literal("aws.iot.IotEvents"),
    z.literal("aws.iot.IotFactory"),
    z.literal("aws.iot.IotFireTvStick"),
    z.literal("aws.iot.IotFireTv"),
    z.literal("aws.iot.IotGeneric"),
    z.literal("aws.iot.IotGreengrassConnector"),
    z.literal("aws.iot.IotGreengrass"),
    z.literal("aws.iot.IotHardwareBoard"),
    z.literal("aws.iot.IotBoard"),
    z.literal("aws.iot.IotHouse"),
    z.literal("aws.iot.IotHttp"),
    z.literal("aws.iot.IotHttp2"),
    z.literal("aws.iot.IotJobs"),
    z.literal("aws.iot.IotLambda"),
    z.literal("aws.iot.IotLightbulb"),
    z.literal("aws.iot.IotMedicalEmergency"),
    z.literal("aws.iot.IotMqtt"),
    z.literal("aws.iot.IotOverTheAirUpdate"),
    z.literal("aws.iot.IotPolicyEmergency"),
    z.literal("aws.iot.IotPolicy"),
    z.literal("aws.iot.IotReportedState"),
    z.literal("aws.iot.IotRule"),
    z.literal("aws.iot.IotSensor"),
    z.literal("aws.iot.IotServo"),
    z.literal("aws.iot.IotShadow"),
    z.literal("aws.iot.IotSimulator"),
    z.literal("aws.iot.IotSitewise"),
    z.literal("aws.iot.IotThermostat"),
    z.literal("aws.iot.IotThingsGraph"),
    z.literal("aws.iot.IotTopic"),
    z.literal("aws.iot.IotTravel"),
    z.literal("aws.iot.IotUtility"),
    z.literal("aws.iot.IotWindfarm"),
    z.literal("aws.management.AutoScaling"),
    z.literal("aws.management.Chatbot"),
    z.literal("aws.management.CloudformationChangeSet"),
    z.literal("aws.management.CloudformationStack"),
    z.literal("aws.management.CloudformationTemplate"),
    z.literal("aws.management.Cloudformation"),
    z.literal("aws.management.Cloudtrail"),
    z.literal("aws.management.CloudwatchAlarm"),
    z.literal("aws.management.CloudwatchEventEventBased"),
    z.literal("aws.management.CloudwatchEventTimeBased"),
    z.literal("aws.management.CloudwatchRule"),
    z.literal("aws.management.Cloudwatch"),
    z.literal("aws.management.Codeguru"),
    z.literal("aws.management.CommandLineInterface"),
    z.literal("aws.management.Config"),
    z.literal("aws.management.ControlTower"),
    z.literal("aws.management.LicenseManager"),
    z.literal("aws.management.ManagedServices"),
    z.literal("aws.management.ManagementAndGovernance"),
    z.literal("aws.management.ManagementConsole"),
    z.literal("aws.management.OpsworksApps"),
    z.literal("aws.management.OpsworksDeployments"),
    z.literal("aws.management.OpsworksInstances"),
    z.literal("aws.management.OpsworksLayers"),
    z.literal("aws.management.OpsworksMonitoring"),
    z.literal("aws.management.OpsworksPermissions"),
    z.literal("aws.management.OpsworksResources"),
    z.literal("aws.management.OpsworksStack"),
    z.literal("aws.management.Opsworks"),
    z.literal("aws.management.OrganizationsAccount"),
    z.literal("aws.management.OrganizationsOrganizationalUnit"),
    z.literal("aws.management.Organizations"),
    z.literal("aws.management.PersonalHealthDashboard"),
    z.literal("aws.management.ServiceCatalog"),
    z.literal("aws.management.SystemsManagerAutomation"),
    z.literal("aws.management.SystemsManagerDocuments"),
    z.literal("aws.management.SystemsManagerInventory"),
    z.literal("aws.management.SystemsManagerMaintenanceWindows"),
    z.literal("aws.management.SystemsManagerOpscenter"),
    z.literal("aws.management.SystemsManagerParameterStore"),
    z.literal("aws.management.ParameterStore"),
    z.literal("aws.management.SystemsManagerPatchManager"),
    z.literal("aws.management.SystemsManagerRunCommand"),
    z.literal("aws.management.SystemsManagerStateManager"),
    z.literal("aws.management.SystemsManager"),
    z.literal("aws.management.SSM"),
    z.literal("aws.management.TrustedAdvisorChecklistCost"),
    z.literal("aws.management.TrustedAdvisorChecklistFaultTolerant"),
    z.literal("aws.management.TrustedAdvisorChecklistPerformance"),
    z.literal("aws.management.TrustedAdvisorChecklistSecurity"),
    z.literal("aws.management.TrustedAdvisorChecklist"),
    z.literal("aws.management.TrustedAdvisor"),
    z.literal("aws.management.WellArchitectedTool"),
    z.literal("aws.media.ElasticTranscoder"),
    z.literal("aws.media.ElementalConductor"),
    z.literal("aws.media.ElementalDelta"),
    z.literal("aws.media.ElementalLive"),
    z.literal("aws.media.ElementalMediaconnect"),
    z.literal("aws.media.ElementalMediaconvert"),
    z.literal("aws.media.ElementalMedialive"),
    z.literal("aws.media.ElementalMediapackage"),
    z.literal("aws.media.ElementalMediastore"),
    z.literal("aws.media.ElementalMediatailor"),
    z.literal("aws.media.ElementalServer"),
    z.literal("aws.media.KinesisVideoStreams"),
    z.literal("aws.media.MediaServices"),
    z.literal("aws.migration.ApplicationDiscoveryService"),
    z.literal("aws.migration.ADS"),
    z.literal("aws.migration.CloudendureMigration"),
    z.literal("aws.migration.CEM"),
    z.literal("aws.migration.DatabaseMigrationService"),
    z.literal("aws.migration.DMS"),
    z.literal("aws.migration.DatasyncAgent"),
    z.literal("aws.migration.Datasync"),
    z.literal("aws.migration.MigrationAndTransfer"),
    z.literal("aws.migration.MAT"),
    z.literal("aws.migration.MigrationHub"),
    z.literal("aws.migration.ServerMigrationService"),
    z.literal("aws.migration.SMS"),
    z.literal("aws.migration.SnowballEdge"),
    z.literal("aws.migration.Snowball"),
    z.literal("aws.migration.Snowmobile"),
    z.literal("aws.migration.TransferForSftp"),
    z.literal("aws.ml.ApacheMxnetOnAWS"),
    z.literal("aws.ml.AugmentedAi"),
    z.literal("aws.ml.Comprehend"),
    z.literal("aws.ml.DeepLearningAmis"),
    z.literal("aws.ml.DeepLearningContainers"),
    z.literal("aws.ml.DLC"),
    z.literal("aws.ml.Deepcomposer"),
    z.literal("aws.ml.Deeplens"),
    z.literal("aws.ml.Deepracer"),
    z.literal("aws.ml.ElasticInference"),
    z.literal("aws.ml.Forecast"),
    z.literal("aws.ml.FraudDetector"),
    z.literal("aws.ml.Kendra"),
    z.literal("aws.ml.Lex"),
    z.literal("aws.ml.MachineLearning"),
    z.literal("aws.ml.Personalize"),
    z.literal("aws.ml.Polly"),
    z.literal("aws.ml.RekognitionImage"),
    z.literal("aws.ml.RekognitionVideo"),
    z.literal("aws.ml.Rekognition"),
    z.literal("aws.ml.SagemakerGroundTruth"),
    z.literal("aws.ml.SagemakerModel"),
    z.literal("aws.ml.SagemakerNotebook"),
    z.literal("aws.ml.SagemakerTrainingJob"),
    z.literal("aws.ml.Sagemaker"),
    z.literal("aws.ml.TensorflowOnAWS"),
    z.literal("aws.ml.Textract"),
    z.literal("aws.ml.Transcribe"),
    z.literal("aws.ml.Translate"),
    z.literal("aws.mobile.Amplify"),
    z.literal("aws.mobile.APIGatewayEndpoint"),
    z.literal("aws.mobile.APIGateway"),
    z.literal("aws.mobile.Appsync"),
    z.literal("aws.mobile.DeviceFarm"),
    z.literal("aws.mobile.Mobile"),
    z.literal("aws.mobile.Pinpoint"),
    z.literal("aws.network.APIGatewayEndpoint"),
    z.literal("aws.network.APIGateway"),
    z.literal("aws.network.AppMesh"),
    z.literal("aws.network.ClientVpn"),
    z.literal("aws.network.CloudMap"),
    z.literal("aws.network.CloudFrontDownloadDistribution"),
    z.literal("aws.network.CloudFrontEdgeLocation"),
    z.literal("aws.network.CloudFrontStreamingDistribution"),
    z.literal("aws.network.CloudFront"),
    z.literal("aws.network.CF"),
    z.literal("aws.network.DirectConnect"),
    z.literal("aws.network.ElasticLoadBalancing"),
    z.literal("aws.network.ELB"),
    z.literal("aws.network.ElbApplicationLoadBalancer"),
    z.literal("aws.network.ALB"),
    z.literal("aws.network.ElbClassicLoadBalancer"),
    z.literal("aws.network.CLB"),
    z.literal("aws.network.ElbNetworkLoadBalancer"),
    z.literal("aws.network.NLB"),
    z.literal("aws.network.Endpoint"),
    z.literal("aws.network.GlobalAccelerator"),
    z.literal("aws.network.GAX"),
    z.literal("aws.network.InternetGateway"),
    z.literal("aws.network.Nacl"),
    z.literal("aws.network.NATGateway"),
    z.literal("aws.network.NetworkingAndContentDelivery"),
    z.literal("aws.network.PrivateSubnet"),
    z.literal("aws.network.Privatelink"),
    z.literal("aws.network.PublicSubnet"),
    z.literal("aws.network.Route53HostedZone"),
    z.literal("aws.network.Route53"),
    z.literal("aws.network.RouteTable"),
    z.literal("aws.network.SiteToSiteVpn"),
    z.literal("aws.network.TransitGateway"),
    z.literal("aws.network.VPCCustomerGateway"),
    z.literal("aws.network.VPCElasticNetworkAdapter"),
    z.literal("aws.network.VPCElasticNetworkInterface"),
    z.literal("aws.network.VPCFlowLogs"),
    z.literal("aws.network.VPCPeering"),
    z.literal("aws.network.VPCRouter"),
    z.literal("aws.network.VPCTrafficMirroring"),
    z.literal("aws.network.VPC"),
    z.literal("aws.network.VpnConnection"),
    z.literal("aws.network.VpnGateway"),
    z.literal("aws.quantum.Braket"),
    z.literal("aws.quantum.QuantumTechnologies"),
    z.literal("aws.robotics.RobomakerCloudExtensionRos"),
    z.literal("aws.robotics.RobomakerDevelopmentEnvironment"),
    z.literal("aws.robotics.RobomakerFleetManagement"),
    z.literal("aws.robotics.RobomakerSimulator"),
    z.literal("aws.robotics.Robomaker"),
    z.literal("aws.robotics.Robotics"),
    z.literal("aws.satellite.GroundStation"),
    z.literal("aws.satellite.Satellite"),
    z.literal("aws.security.AdConnector"),
    z.literal("aws.security.Artifact"),
    z.literal("aws.security.CertificateAuthority"),
    z.literal("aws.security.CertificateManager"),
    z.literal("aws.security.ACM"),
    z.literal("aws.security.CloudDirectory"),
    z.literal("aws.security.Cloudhsm"),
    z.literal("aws.security.CloudHSM"),
    z.literal("aws.security.Cognito"),
    z.literal("aws.security.Detective"),
    z.literal("aws.security.DirectoryService"),
    z.literal("aws.security.DS"),
    z.literal("aws.security.FirewallManager"),
    z.literal("aws.security.FMS"),
    z.literal("aws.security.Guardduty"),
    z.literal("aws.security.IdentityAndAccessManagementIamAccessAnalyzer"),
    z.literal("aws.security.IAMAccessAnalyzer"),
    z.literal("aws.security.IdentityAndAccessManagementIamAddOn"),
    z.literal("aws.security.IdentityAndAccessManagementIamAWSStsAlternate"),
    z.literal("aws.security.IdentityAndAccessManagementIamAWSSts"),
    z.literal("aws.security.IAMAWSSts"),
    z.literal("aws.security.IdentityAndAccessManagementIamDataEncryptionKey"),
    z.literal("aws.security.IdentityAndAccessManagementIamEncryptedData"),
    z.literal(
      "aws.security.IdentityAndAccessManagementIamLongTermSecurityCredential"
    ),
    z.literal("aws.security.IdentityAndAccessManagementIamMfaToken"),
    z.literal("aws.security.IdentityAndAccessManagementIamPermissions"),
    z.literal("aws.security.IAMPermissions"),
    z.literal("aws.security.IdentityAndAccessManagementIamRole"),
    z.literal("aws.security.IAMRole"),
    z.literal(
      "aws.security.IdentityAndAccessManagementIamTemporarySecurityCredential"
    ),
    z.literal("aws.security.IdentityAndAccessManagementIam"),
    z.literal("aws.security.IAM"),
    z.literal("aws.security.InspectorAgent"),
    z.literal("aws.security.Inspector"),
    z.literal("aws.security.KeyManagementService"),
    z.literal("aws.security.KMS"),
    z.literal("aws.security.Macie"),
    z.literal("aws.security.ManagedMicrosoftAd"),
    z.literal("aws.security.ResourceAccessManager"),
    z.literal("aws.security.RAM"),
    z.literal("aws.security.SecretsManager"),
    z.literal("aws.security.SecurityHubFinding"),
    z.literal("aws.security.SecurityHub"),
    z.literal("aws.security.SecurityIdentityAndCompliance"),
    z.literal("aws.security.ShieldAdvanced"),
    z.literal("aws.security.Shield"),
    z.literal("aws.security.SimpleAd"),
    z.literal("aws.security.SingleSignOn"),
    z.literal("aws.security.WAFFilteringRule"),
    z.literal("aws.security.WAF"),
    z.literal("aws.storage.Backup"),
    z.literal("aws.storage.CloudendureDisasterRecovery"),
    z.literal("aws.storage.CDR"),
    z.literal("aws.storage.EFSInfrequentaccessPrimaryBg"),
    z.literal("aws.storage.EFSStandardPrimaryBg"),
    z.literal("aws.storage.ElasticBlockStoreEBSSnapshot"),
    z.literal("aws.storage.ElasticBlockStoreEBSVolume"),
    z.literal("aws.storage.ElasticBlockStoreEBS"),
    z.literal("aws.storage.EBS"),
    z.literal("aws.storage.ElasticFileSystemEFSFileSystem"),
    z.literal("aws.storage.ElasticFileSystemEFS"),
    z.literal("aws.storage.EFS"),
    z.literal("aws.storage.FsxForLustre"),
    z.literal("aws.storage.FsxForWindowsFileServer"),
    z.literal("aws.storage.Fsx"),
    z.literal("aws.storage.FSx"),
    z.literal("aws.storage.MultipleVolumesResource"),
    z.literal("aws.storage.S3GlacierArchive"),
    z.literal("aws.storage.S3GlacierVault"),
    z.literal("aws.storage.S3Glacier"),
    z.literal("aws.storage.SimpleStorageServiceS3BucketWithObjects"),
    z.literal("aws.storage.SimpleStorageServiceS3Bucket"),
    z.literal("aws.storage.SimpleStorageServiceS3Object"),
    z.literal("aws.storage.SimpleStorageServiceS3"),
    z.literal("aws.storage.S3"),
    z.literal("aws.storage.SnowFamilySnowballImportExport"),
    z.literal("aws.storage.SnowballEdge"),
    z.literal("aws.storage.Snowball"),
    z.literal("aws.storage.Snowmobile"),
    z.literal("aws.storage.StorageGatewayCachedVolume"),
    z.literal("aws.storage.StorageGatewayNonCachedVolume"),
    z.literal("aws.storage.StorageGatewayVirtualTapeLibrary"),
    z.literal("aws.storage.StorageGateway"),
    z.literal("aws.storage.Storage"),
    z.literal("azure.analytics.AnalysisServices"),
    z.literal("azure.analytics.DataExplorerClusters"),
    z.literal("azure.analytics.DataFactories"),
    z.literal("azure.analytics.DataLakeAnalytics"),
    z.literal("azure.analytics.DataLakeStoreGen1"),
    z.literal("azure.analytics.Databricks"),
    z.literal("azure.analytics.EventHubClusters"),
    z.literal("azure.analytics.EventHubs"),
    z.literal("azure.analytics.Hdinsightclusters"),
    z.literal("azure.analytics.LogAnalyticsWorkspaces"),
    z.literal("azure.analytics.StreamAnalyticsJobs"),
    z.literal("azure.analytics.SynapseAnalytics"),
    z.literal("azure.compute.AppServices"),
    z.literal("azure.compute.AutomanagedVM"),
    z.literal("azure.compute.AvailabilitySets"),
    z.literal("azure.compute.BatchAccounts"),
    z.literal("azure.compute.CitrixVirtualDesktopsEssentials"),
    z.literal("azure.compute.CloudServicesClassic"),
    z.literal("azure.compute.CloudServices"),
    z.literal("azure.compute.CloudsimpleVirtualMachines"),
    z.literal("azure.compute.ContainerInstances"),
    z.literal("azure.compute.ContainerRegistries**, **ACR"),
    z.literal("azure.compute.ACR"),
    z.literal("azure.compute.DiskEncryptionSets"),
    z.literal("azure.compute.DiskSnapshots"),
    z.literal("azure.compute.Disks"),
    z.literal("azure.compute.FunctionApps"),
    z.literal("azure.compute.ImageDefinitions"),
    z.literal("azure.compute.ImageVersions"),
    z.literal("azure.compute.KubernetesServices"),
    z.literal("azure.compute.AKS"),
    z.literal("azure.compute.MeshApplications"),
    z.literal("azure.compute.OsImages"),
    z.literal("azure.compute.SAPHANAOnAzure"),
    z.literal("azure.compute.ServiceFabricClusters"),
    z.literal("azure.compute.SharedImageGalleries"),
    z.literal("azure.compute.SpringCloud"),
    z.literal("azure.compute.VMClassic"),
    z.literal("azure.compute.VMImages"),
    z.literal("azure.compute.VMLinux"),
    z.literal("azure.compute.VMScaleSet"),
    z.literal("azure.compute.VMSS"),
    z.literal("azure.compute.VMWindows"),
    z.literal("azure.compute.VM"),
    z.literal("azure.compute.Workspaces"),
    z.literal("azure.database.BlobStorage"),
    z.literal("azure.database.CacheForRedis"),
    z.literal("azure.database.CosmosDb"),
    z.literal("azure.database.DataExplorerClusters"),
    z.literal("azure.database.DataFactory"),
    z.literal("azure.database.DataLake"),
    z.literal("azure.database.DatabaseForMariadbServers"),
    z.literal("azure.database.DatabaseForMysqlServers"),
    z.literal("azure.database.DatabaseForPostgresqlServers"),
    z.literal("azure.database.ElasticDatabasePools"),
    z.literal("azure.database.ElasticJobAgents"),
    z.literal("azure.database.InstancePools"),
    z.literal("azure.database.ManagedDatabases"),
    z.literal("azure.database.SQLDatabases"),
    z.literal("azure.database.SQLDatawarehouse"),
    z.literal("azure.database.SQLManagedInstances"),
    z.literal("azure.database.SQLServerStretchDatabases"),
    z.literal("azure.database.SQLServers"),
    z.literal("azure.database.SQLVM"),
    z.literal("azure.database.SQL"),
    z.literal("azure.database.SsisLiftAndShiftIr"),
    z.literal("azure.database.SynapseAnalytics"),
    z.literal("azure.database.VirtualClusters"),
    z.literal("azure.database.VirtualDatacenter"),
    z.literal("azure.devops.ApplicationInsights"),
    z.literal("azure.devops.Artifacts"),
    z.literal("azure.devops.Boards"),
    z.literal("azure.devops.Devops"),
    z.literal("azure.devops.DevtestLabs"),
    z.literal("azure.devops.LabServices"),
    z.literal("azure.devops.Pipelines"),
    z.literal("azure.devops.Repos"),
    z.literal("azure.devops.TestPlans"),
    z.literal("azure.general.Allresources"),
    z.literal("azure.general.Azurehome"),
    z.literal("azure.general.Developertools"),
    z.literal("azure.general.Helpsupport"),
    z.literal("azure.general.Information"),
    z.literal("azure.general.Managementgroups"),
    z.literal("azure.general.Marketplace"),
    z.literal("azure.general.Quickstartcenter"),
    z.literal("azure.general.Recent"),
    z.literal("azure.general.Reservations"),
    z.literal("azure.general.Resource"),
    z.literal("azure.general.Resourcegroups"),
    z.literal("azure.general.Servicehealth"),
    z.literal("azure.general.Shareddashboard"),
    z.literal("azure.general.Subscriptions"),
    z.literal("azure.general.Support"),
    z.literal("azure.general.Supportrequests"),
    z.literal("azure.general.Tag"),
    z.literal("azure.general.Tags"),
    z.literal("azure.general.Templates"),
    z.literal("azure.general.Twousericon"),
    z.literal("azure.general.Userhealthicon"),
    z.literal("azure.general.Usericon"),
    z.literal("azure.general.Userprivacy"),
    z.literal("azure.general.Userresource"),
    z.literal("azure.general.Whatsnew"),
    z.literal("azure.identity.AccessReview"),
    z.literal("azure.identity.ActiveDirectoryConnectHealth"),
    z.literal("azure.identity.ActiveDirectory"),
    z.literal("azure.identity.ADB2C"),
    z.literal("azure.identity.ADDomainServices"),
    z.literal("azure.identity.ADIdentityProtection"),
    z.literal("azure.identity.ADPrivilegedIdentityManagement"),
    z.literal("azure.identity.AppRegistrations"),
    z.literal("azure.identity.ConditionalAccess"),
    z.literal("azure.identity.EnterpriseApplications"),
    z.literal("azure.identity.Groups"),
    z.literal("azure.identity.IdentityGovernance"),
    z.literal("azure.identity.InformationProtection"),
    z.literal("azure.identity.ManagedIdentities"),
    z.literal("azure.identity.Users"),
    z.literal("azure.integration.APIForFhir"),
    z.literal("azure.integration.APIManagement"),
    z.literal("azure.integration.AppConfiguration"),
    z.literal("azure.integration.DataCatalog"),
    z.literal("azure.integration.EventGridDomains"),
    z.literal("azure.integration.EventGridSubscriptions"),
    z.literal("azure.integration.EventGridTopics"),
    z.literal("azure.integration.IntegrationAccounts"),
    z.literal("azure.integration.IntegrationServiceEnvironments"),
    z.literal("azure.integration.LogicAppsCustomConnector"),
    z.literal("azure.integration.LogicApps"),
    z.literal("azure.integration.PartnerTopic"),
    z.literal("azure.integration.SendgridAccounts"),
    z.literal("azure.integration.ServiceBusRelays"),
    z.literal("azure.integration.ServiceBus"),
    z.literal("azure.integration.ServiceCatalogManagedApplicationDefinitions"),
    z.literal("azure.integration.SoftwareAsAService"),
    z.literal("azure.integration.StorsimpleDeviceManagers"),
    z.literal("azure.integration.SystemTopic"),
    z.literal("azure.iot.DeviceProvisioningServices"),
    z.literal("azure.iot.DigitalTwins"),
    z.literal("azure.iot.IotCentralApplications"),
    z.literal("azure.iot.IotHubSecurity"),
    z.literal("azure.iot.IotHub"),
    z.literal("azure.iot.Maps"),
    z.literal("azure.iot.Sphere"),
    z.literal("azure.iot.TimeSeriesInsightsEnvironments"),
    z.literal("azure.iot.TimeSeriesInsightsEventsSources"),
    z.literal("azure.iot.Windows10IotCoreServices"),
    z.literal("azure.migration.DataBoxEdge"),
    z.literal("azure.migration.DataBox"),
    z.literal("azure.migration.DatabaseMigrationServices"),
    z.literal("azure.migration.MigrationProjects"),
    z.literal("azure.migration.RecoveryServicesVaults"),
    z.literal("azure.ml.BatchAI"),
    z.literal("azure.ml.BotServices"),
    z.literal("azure.ml.CognitiveServices"),
    z.literal("azure.ml.GenomicsAccounts"),
    z.literal("azure.ml.MachineLearningServiceWorkspaces"),
    z.literal("azure.ml.MachineLearningStudioWebServicePlans"),
    z.literal("azure.ml.MachineLearningStudioWebServices"),
    z.literal("azure.ml.MachineLearningStudioWorkspaces"),
    z.literal("azure.mobile.AppServiceMobile"),
    z.literal("azure.mobile.MobileEngagement"),
    z.literal("azure.mobile.NotificationHubs"),
    z.literal("azure.network.ApplicationGateway"),
    z.literal("azure.network.ApplicationSecurityGroups"),
    z.literal("azure.network.CDNProfiles"),
    z.literal("azure.network.Connections"),
    z.literal("azure.network.DDOSProtectionPlans"),
    z.literal("azure.network.DNSPrivateZones"),
    z.literal("azure.network.DNSZones"),
    z.literal("azure.network.ExpressrouteCircuits"),
    z.literal("azure.network.Firewall"),
    z.literal("azure.network.FrontDoors"),
    z.literal("azure.network.LoadBalancers"),
    z.literal("azure.network.LocalNetworkGateways"),
    z.literal("azure.network.NetworkInterfaces"),
    z.literal("azure.network.NetworkSecurityGroupsClassic"),
    z.literal("azure.network.NetworkWatcher"),
    z.literal("azure.network.OnPremisesDataGateways"),
    z.literal("azure.network.PublicIpAddresses"),
    z.literal("azure.network.ReservedIpAddressesClassic"),
    z.literal("azure.network.RouteFilters"),
    z.literal("azure.network.RouteTables"),
    z.literal("azure.network.ServiceEndpointPolicies"),
    z.literal("azure.network.Subnets"),
    z.literal("azure.network.TrafficManagerProfiles"),
    z.literal("azure.network.VirtualNetworkClassic"),
    z.literal("azure.network.VirtualNetworkGateways"),
    z.literal("azure.network.VirtualNetworks"),
    z.literal("azure.network.VirtualWans"),
    z.literal("azure.security.ApplicationSecurityGroups"),
    z.literal("azure.security.ConditionalAccess"),
    z.literal("azure.security.Defender"),
    z.literal("azure.security.ExtendedSecurityUpdates"),
    z.literal("azure.security.KeyVaults"),
    z.literal("azure.security.SecurityCenter"),
    z.literal("azure.security.Sentinel"),
    z.literal("azure.storage.ArchiveStorage"),
    z.literal("azure.storage.Azurefxtedgefiler"),
    z.literal("azure.storage.BlobStorage"),
    z.literal("azure.storage.DataBoxEdgeDataBoxGateway"),
    z.literal("azure.storage.DataBox"),
    z.literal("azure.storage.DataLakeStorage"),
    z.literal("azure.storage.GeneralStorage"),
    z.literal("azure.storage.NetappFiles"),
    z.literal("azure.storage.QueuesStorage"),
    z.literal("azure.storage.StorageAccountsClassic"),
    z.literal("azure.storage.StorageAccounts"),
    z.literal("azure.storage.StorageExplorer"),
    z.literal("azure.storage.StorageSyncServices"),
    z.literal("azure.storage.StorsimpleDataManagers"),
    z.literal("azure.storage.StorsimpleDeviceManagers"),
    z.literal("azure.storage.TableStorage"),
    z.literal("azure.web.APIConnections"),
    z.literal("azure.web.AppServiceCertificates"),
    z.literal("azure.web.AppServiceDomains"),
    z.literal("azure.web.AppServiceEnvironments"),
    z.literal("azure.web.AppServicePlans"),
    z.literal("azure.web.AppServices"),
    z.literal("azure.web.MediaServices"),
    z.literal("azure.web.NotificationHubNamespaces"),
    z.literal("azure.web.Search"),
    z.literal("azure.web.Signalr"),
    z.literal("digitalocean.compute.Containers"),
    z.literal("digitalocean.compute.Docker"),
    z.literal("digitalocean.compute.DropletConnect"),
    z.literal("digitalocean.compute.DropletSnapshot"),
    z.literal("digitalocean.compute.Droplet"),
    z.literal("digitalocean.compute.K8SCluster"),
    z.literal("digitalocean.compute.K8SNodePool"),
    z.literal("digitalocean.compute.K8SNode"),
    z.literal("digitalocean.database.DbaasPrimaryStandbyMore"),
    z.literal("digitalocean.database.DbaasPrimary"),
    z.literal("digitalocean.database.DbaasReadOnly"),
    z.literal("digitalocean.database.DbaasStandby"),
    z.literal("digitalocean.network.Certificate"),
    z.literal("digitalocean.network.DomainRegistration"),
    z.literal("digitalocean.network.Domain"),
    z.literal("digitalocean.network.Firewall"),
    z.literal("digitalocean.network.FloatingIp"),
    z.literal("digitalocean.network.InternetGateway"),
    z.literal("digitalocean.network.LoadBalancer"),
    z.literal("digitalocean.network.ManagedVpn"),
    z.literal("digitalocean.network.Vpc"),
    z.literal("digitalocean.storage.Folder"),
    z.literal("digitalocean.storage.Space"),
    z.literal("digitalocean.storage.VolumeSnapshot"),
    z.literal("digitalocean.storage.Volume"),
    z.literal("elastic.agent.Agent"),
    z.literal("elastic.agent.Endpoint"),
    z.literal("elastic.agent.Fleet"),
    z.literal("elastic.agent.Integrations"),
    z.literal("elastic.beats.APM"),
    z.literal("elastic.beats.Auditbeat"),
    z.literal("elastic.beats.Filebeat"),
    z.literal("elastic.beats.Functionbeat"),
    z.literal("elastic.beats.Heartbeat"),
    z.literal("elastic.beats.Metricbeat"),
    z.literal("elastic.beats.Packetbeat"),
    z.literal("elastic.beats.Winlogbeat"),
    z.literal("elastic.elasticsearch.Alerting"),
    z.literal("elastic.elasticsearch.Beats"),
    z.literal("elastic.elasticsearch.Elasticsearch"),
    z.literal("elastic.elasticsearch.ElasticSearch"),
    z.literal("elastic.elasticsearch.Kibana"),
    z.literal("elastic.elasticsearch.LogstashPipeline"),
    z.literal("elastic.elasticsearch.Logstash"),
    z.literal("elastic.elasticsearch.LogStash"),
    z.literal("elastic.elasticsearch.MachineLearning"),
    z.literal("elastic.elasticsearch.ML"),
    z.literal("elastic.elasticsearch.MapServices"),
    z.literal("elastic.elasticsearch.Maps"),
    z.literal("elastic.elasticsearch.Monitoring"),
    z.literal("elastic.elasticsearch.SearchableSnapshots"),
    z.literal("elastic.elasticsearch.SecuritySettings"),
    z.literal("elastic.elasticsearch.SQL"),
    z.literal("elastic.elasticsearch.Stack"),
    z.literal("elastic.enterprisesearch.AppSearch"),
    z.literal("elastic.enterprisesearch.Crawler"),
    z.literal("elastic.enterprisesearch.EnterpriseSearch"),
    z.literal("elastic.enterprisesearch.SiteSearch"),
    z.literal("elastic.enterprisesearch.WorkplaceSearch"),
    z.literal("elastic.observability.APM"),
    z.literal("elastic.observability.Logs"),
    z.literal("elastic.observability.Metrics"),
    z.literal("elastic.observability.Observability"),
    z.literal("elastic.observability.Uptime"),
    z.literal("elastic.orchestration.ECE"),
    z.literal("elastic.orchestration.ECK"),
    z.literal("elastic.saas.Cloud"),
    z.literal("elastic.saas.Elastic"),
    z.literal("elastic.security.Endpoint"),
    z.literal("elastic.security.Security"),
    z.literal("elastic.security.SIEM"),
    z.literal("elastic.security.Xdr"),
    z.literal("firebase.base.Firebase"),
    z.literal("firebase.develop.Authentication"),
    z.literal("firebase.develop.Firestore"),
    z.literal("firebase.develop.Functions"),
    z.literal("firebase.develop.Hosting"),
    z.literal("firebase.develop.MLKit"),
    z.literal("firebase.develop.RealtimeDatabase"),
    z.literal("firebase.develop.Storage"),
    z.literal("firebase.extentions.Extensions"),
    z.literal("firebase.grow.ABTesting"),
    z.literal("firebase.grow.AppIndexing"),
    z.literal("firebase.grow.DynamicLinks"),
    z.literal("firebase.grow.InAppMessaging"),
    z.literal("firebase.grow.Invites"),
    z.literal("firebase.grow.Messaging"),
    z.literal("firebase.grow.FCM"),
    z.literal("firebase.grow.Predictions"),
    z.literal("firebase.grow.RemoteConfig"),
    z.literal("firebase.quality.AppDistribution"),
    z.literal("firebase.quality.CrashReporting"),
    z.literal("firebase.quality.Crashlytics"),
    z.literal("firebase.quality.PerformanceMonitoring"),
    z.literal("firebase.quality.TestLab"),
    z.literal("gcp.analytics.Bigquery"),
    z.literal("gcp.analytics.BigQuery"),
    z.literal("gcp.analytics.Composer"),
    z.literal("gcp.analytics.DataCatalog"),
    z.literal("gcp.analytics.DataFusion"),
    z.literal("gcp.analytics.Dataflow"),
    z.literal("gcp.analytics.Datalab"),
    z.literal("gcp.analytics.Dataprep"),
    z.literal("gcp.analytics.Dataproc"),
    z.literal("gcp.analytics.Genomics"),
    z.literal("gcp.analytics.Pubsub"),
    z.literal("gcp.analytics.PubSub"),
    z.literal("gcp.api.APIGateway"),
    z.literal("gcp.api.Endpoints"),
    z.literal("gcp.compute.AppEngine"),
    z.literal("gcp.compute.GAE"),
    z.literal("gcp.compute.ComputeEngine"),
    z.literal("gcp.compute.GCE"),
    z.literal("gcp.compute.ContainerOptimizedOS"),
    z.literal("gcp.compute.Functions"),
    z.literal("gcp.compute.GCF"),
    z.literal("gcp.compute.GKEOnPrem"),
    z.literal("gcp.compute.GPU"),
    z.literal("gcp.compute.KubernetesEngine"),
    z.literal("gcp.compute.GKE"),
    z.literal("gcp.compute.Run"),
    z.literal("gcp.database.Bigtable"),
    z.literal("gcp.database.BigTable"),
    z.literal("gcp.database.Datastore"),
    z.literal("gcp.database.Firestore"),
    z.literal("gcp.database.Memorystore"),
    z.literal("gcp.database.Spanner"),
    z.literal("gcp.database.SQL"),
    z.literal("gcp.devtools.Build"),
    z.literal("gcp.devtools.CodeForIntellij"),
    z.literal("gcp.devtools.Code"),
    z.literal("gcp.devtools.ContainerRegistry"),
    z.literal("gcp.devtools.GCR"),
    z.literal("gcp.devtools.GradleAppEnginePlugin"),
    z.literal("gcp.devtools.IdePlugins"),
    z.literal("gcp.devtools.MavenAppEnginePlugin"),
    z.literal("gcp.devtools.Scheduler"),
    z.literal("gcp.devtools.SDK"),
    z.literal("gcp.devtools.SourceRepositories"),
    z.literal("gcp.devtools.Tasks"),
    z.literal("gcp.devtools.TestLab"),
    z.literal("gcp.devtools.ToolsForEclipse"),
    z.literal("gcp.devtools.ToolsForPowershell"),
    z.literal("gcp.devtools.ToolsForVisualStudio"),
    z.literal("gcp.iot.IotCore"),
    z.literal("gcp.migration.TransferAppliance"),
    z.literal("gcp.ml.AdvancedSolutionsLab"),
    z.literal("gcp.ml.AIHub"),
    z.literal("gcp.ml.AIPlatformDataLabelingService"),
    z.literal("gcp.ml.AIPlatform"),
    z.literal("gcp.ml.AutomlNaturalLanguage"),
    z.literal("gcp.ml.AutomlTables"),
    z.literal("gcp.ml.AutomlTranslation"),
    z.literal("gcp.ml.AutomlVideoIntelligence"),
    z.literal("gcp.ml.AutomlVision"),
    z.literal("gcp.ml.Automl"),
    z.literal("gcp.ml.AutoML"),
    z.literal("gcp.ml.DialogFlowEnterpriseEdition"),
    z.literal("gcp.ml.InferenceAPI"),
    z.literal("gcp.ml.JobsAPI"),
    z.literal("gcp.ml.NaturalLanguageAPI"),
    z.literal("gcp.ml.NLAPI"),
    z.literal("gcp.ml.RecommendationsAI"),
    z.literal("gcp.ml.SpeechToText"),
    z.literal("gcp.ml.STT"),
    z.literal("gcp.ml.TextToSpeech"),
    z.literal("gcp.ml.TTS"),
    z.literal("gcp.ml.TPU"),
    z.literal("gcp.ml.TranslationAPI"),
    z.literal("gcp.ml.VideoIntelligenceAPI"),
    z.literal("gcp.ml.VisionAPI"),
    z.literal("gcp.network.Armor"),
    z.literal("gcp.network.CDN"),
    z.literal("gcp.network.DedicatedInterconnect"),
    z.literal("gcp.network.DNS"),
    z.literal("gcp.network.ExternalIpAddresses"),
    z.literal("gcp.network.FirewallRules"),
    z.literal("gcp.network.LoadBalancing"),
    z.literal("gcp.network.NAT"),
    z.literal("gcp.network.Network"),
    z.literal("gcp.network.PartnerInterconnect"),
    z.literal("gcp.network.PremiumNetworkTier"),
    z.literal("gcp.network.Router"),
    z.literal("gcp.network.Routes"),
    z.literal("gcp.network.StandardNetworkTier"),
    z.literal("gcp.network.TrafficDirector"),
    z.literal("gcp.network.VirtualPrivateCloud"),
    z.literal("gcp.network.VPC"),
    z.literal("gcp.network.VPN"),
    z.literal("gcp.operations.Monitoring"),
    z.literal("gcp.security.Iam"),
    z.literal("gcp.security.IAP"),
    z.literal("gcp.security.KeyManagementService"),
    z.literal("gcp.security.KMS"),
    z.literal("gcp.security.ResourceManager"),
    z.literal("gcp.security.SecurityCommandCenter"),
    z.literal("gcp.security.SCC"),
    z.literal("gcp.security.SecurityScanner"),
    z.literal("gcp.storage.Filestore"),
    z.literal("gcp.storage.PersistentDisk"),
    z.literal("gcp.storage.Storage"),
    z.literal("gcp.storage.GCS"),
    z.literal("generic.blank.Blank"),
    z.literal("generic.compute.Rack"),
    z.literal("generic.database.SQL"),
    z.literal("generic.device.Mobile"),
    z.literal("generic.device.Tablet"),
    z.literal("generic.network.Firewall"),
    z.literal("generic.network.Router"),
    z.literal("generic.network.Subnet"),
    z.literal("generic.network.Switch"),
    z.literal("generic.network.VPN"),
    z.literal("generic.os.Android"),
    z.literal("generic.os.Centos"),
    z.literal("generic.os.Debian"),
    z.literal("generic.os.IOS"),
    z.literal("generic.os.LinuxGeneral"),
    z.literal("generic.os.Raspbian"),
    z.literal("generic.os.RedHat"),
    z.literal("generic.os.Suse"),
    z.literal("generic.os.Ubuntu"),
    z.literal("generic.os.Windows"),
    z.literal("generic.place.Datacenter"),
    z.literal("generic.storage.Storage"),
    z.literal("generic.virtualization.Virtualbox"),
    z.literal("generic.virtualization.Vmware"),
    z.literal("generic.virtualization.XEN"),
    z.literal("ibm.analytics.Analytics"),
    z.literal("ibm.analytics.DataIntegration"),
    z.literal("ibm.analytics.DataRepositories"),
    z.literal("ibm.analytics.DeviceAnalytics"),
    z.literal("ibm.analytics.StreamingComputing"),
    z.literal("ibm.applications.ActionableInsight"),
    z.literal("ibm.applications.Annotate"),
    z.literal("ibm.applications.ApiDeveloperPortal"),
    z.literal("ibm.applications.ApiPolyglotRuntimes"),
    z.literal("ibm.applications.AppServer"),
    z.literal("ibm.applications.ApplicationLogic"),
    z.literal("ibm.applications.EnterpriseApplications"),
    z.literal("ibm.applications.Index"),
    z.literal("ibm.applications.IotApplication"),
    z.literal("ibm.applications.Microservice"),
    z.literal("ibm.applications.MobileApp"),
    z.literal("ibm.applications.Ontology"),
    z.literal("ibm.applications.OpenSourceTools"),
    z.literal("ibm.applications.RuntimeServices"),
    z.literal("ibm.applications.SaasApplications"),
    z.literal("ibm.applications.ServiceBroker"),
    z.literal("ibm.applications.SpeechToText"),
    z.literal("ibm.applications.VisualRecognition"),
    z.literal("ibm.applications.Visualization"),
    z.literal("ibm.blockchain.BlockchainDeveloper"),
    z.literal("ibm.blockchain.Blockchain"),
    z.literal("ibm.blockchain.CertificateAuthority"),
    z.literal("ibm.blockchain.ClientApplication"),
    z.literal("ibm.blockchain.Communication"),
    z.literal("ibm.blockchain.Consensus"),
    z.literal("ibm.blockchain.EventListener"),
    z.literal("ibm.blockchain.Event"),
    z.literal("ibm.blockchain.ExistingEnterpriseSystems"),
    z.literal("ibm.blockchain.HyperledgerFabric"),
    z.literal("ibm.blockchain.KeyManagement"),
    z.literal("ibm.blockchain.Ledger"),
    z.literal("ibm.blockchain.MembershipServicesProviderApi"),
    z.literal("ibm.blockchain.Membership"),
    z.literal("ibm.blockchain.MessageBus"),
    z.literal("ibm.blockchain.Node"),
    z.literal("ibm.blockchain.Services"),
    z.literal("ibm.blockchain.SmartContract"),
    z.literal("ibm.blockchain.TransactionManager"),
    z.literal("ibm.blockchain.Wallet"),
    z.literal("ibm.compute.BareMetalServer"),
    z.literal("ibm.compute.ImageService"),
    z.literal("ibm.compute.Instance"),
    z.literal("ibm.compute.Key"),
    z.literal("ibm.compute.PowerInstance"),
    z.literal("ibm.data.Caches"),
    z.literal("ibm.data.Cloud"),
    z.literal("ibm.data.ConversationTrainedDeployed"),
    z.literal("ibm.data.DataServices"),
    z.literal("ibm.data.DataSources"),
    z.literal("ibm.data.DeviceIdentityService"),
    z.literal("ibm.data.DeviceRegistry"),
    z.literal("ibm.data.EnterpriseData"),
    z.literal("ibm.data.EnterpriseUserDirectory"),
    z.literal("ibm.data.FileRepository"),
    z.literal("ibm.data.GroundTruth"),
    z.literal("ibm.data.Model"),
    z.literal("ibm.data.TmsDataInterface"),
    z.literal("ibm.devops.ArtifactManagement"),
    z.literal("ibm.devops.BuildTest"),
    z.literal("ibm.devops.CodeEditor"),
    z.literal("ibm.devops.CollaborativeDevelopment"),
    z.literal("ibm.devops.ConfigurationManagement"),
    z.literal("ibm.devops.ContinuousDeploy"),
    z.literal("ibm.devops.ContinuousTesting"),
    z.literal("ibm.devops.Devops"),
    z.literal("ibm.devops.Provision"),
    z.literal("ibm.devops.ReleaseManagement"),
    z.literal("ibm.general.CloudMessaging"),
    z.literal("ibm.general.CloudServices"),
    z.literal("ibm.general.Cloudant"),
    z.literal("ibm.general.CognitiveServices"),
    z.literal("ibm.general.DataSecurity"),
    z.literal("ibm.general.Enterprise"),
    z.literal("ibm.general.GovernanceRiskCompliance"),
    z.literal("ibm.general.IBMContainers"),
    z.literal("ibm.general.IBMPublicCloud"),
    z.literal("ibm.general.IdentityAccessManagement"),
    z.literal("ibm.general.IdentityProvider"),
    z.literal("ibm.general.InfrastructureSecurity"),
    z.literal("ibm.general.Internet"),
    z.literal("ibm.general.IotCloud"),
    z.literal("ibm.general.MicroservicesApplication"),
    z.literal("ibm.general.MicroservicesMesh"),
    z.literal("ibm.general.MonitoringLogging"),
    z.literal("ibm.general.Monitoring"),
    z.literal("ibm.general.ObjectStorage"),
    z.literal("ibm.general.OfflineCapabilities"),
    z.literal("ibm.general.Openwhisk"),
    z.literal("ibm.general.PeerCloud"),
    z.literal("ibm.general.RetrieveRank"),
    z.literal("ibm.general.Scalable"),
    z.literal("ibm.general.ServiceDiscoveryConfiguration"),
    z.literal("ibm.general.TextToSpeech"),
    z.literal("ibm.general.TransformationConnectivity"),
    z.literal("ibm.infrastructure.Channels"),
    z.literal("ibm.infrastructure.CloudMessaging"),
    z.literal("ibm.infrastructure.Dashboard"),
    z.literal("ibm.infrastructure.Diagnostics"),
    z.literal("ibm.infrastructure.EdgeServices"),
    z.literal("ibm.infrastructure.EnterpriseMessaging"),
    z.literal("ibm.infrastructure.EventFeed"),
    z.literal("ibm.infrastructure.InfrastructureServices"),
    z.literal("ibm.infrastructure.InterserviceCommunication"),
    z.literal("ibm.infrastructure.LoadBalancingRouting"),
    z.literal("ibm.infrastructure.MicroservicesMesh"),
    z.literal("ibm.infrastructure.MobileBackend"),
    z.literal("ibm.infrastructure.MobileProviderNetwork"),
    z.literal("ibm.infrastructure.MonitoringLogging"),
    z.literal("ibm.infrastructure.Monitoring"),
    z.literal("ibm.infrastructure.PeerServices"),
    z.literal("ibm.infrastructure.ServiceDiscoveryConfiguration"),
    z.literal("ibm.infrastructure.TransformationConnectivity"),
    z.literal("ibm.management.AlertNotification"),
    z.literal("ibm.management.ApiManagement"),
    z.literal("ibm.management.CloudManagement"),
    z.literal("ibm.management.ClusterManagement"),
    z.literal("ibm.management.ContentManagement"),
    z.literal("ibm.management.DataServices"),
    z.literal("ibm.management.DeviceManagement"),
    z.literal("ibm.management.InformationGovernance"),
    z.literal("ibm.management.ItServiceManagement"),
    z.literal("ibm.management.Management"),
    z.literal("ibm.management.MonitoringMetrics"),
    z.literal("ibm.management.ProcessManagement"),
    z.literal("ibm.management.ProviderCloudPortalService"),
    z.literal("ibm.management.PushNotifications"),
    z.literal("ibm.management.ServiceManagementTools"),
    z.literal("ibm.network.Bridge"),
    z.literal("ibm.network.DirectLink"),
    z.literal("ibm.network.Enterprise"),
    z.literal("ibm.network.Firewall"),
    z.literal("ibm.network.FloatingIp"),
    z.literal("ibm.network.Gateway"),
    z.literal("ibm.network.InternetServices"),
    z.literal("ibm.network.LoadBalancerListener"),
    z.literal("ibm.network.LoadBalancerPool"),
    z.literal("ibm.network.LoadBalancer"),
    z.literal("ibm.network.LoadBalancingRouting"),
    z.literal("ibm.network.PublicGateway"),
    z.literal("ibm.network.Region"),
    z.literal("ibm.network.Router"),
    z.literal("ibm.network.Rules"),
    z.literal("ibm.network.Subnet"),
    z.literal("ibm.network.TransitGateway"),
    z.literal("ibm.network.Vpc"),
    z.literal("ibm.network.VpnConnection"),
    z.literal("ibm.network.VpnGateway"),
    z.literal("ibm.network.VpnPolicy"),
    z.literal("ibm.security.ApiSecurity"),
    z.literal("ibm.security.BlockchainSecurityService"),
    z.literal("ibm.security.DataSecurity"),
    z.literal("ibm.security.Firewall"),
    z.literal("ibm.security.Gateway"),
    z.literal("ibm.security.GovernanceRiskCompliance"),
    z.literal("ibm.security.IdentityAccessManagement"),
    z.literal("ibm.security.IdentityProvider"),
    z.literal("ibm.security.InfrastructureSecurity"),
    z.literal("ibm.security.PhysicalSecurity"),
    z.literal("ibm.security.SecurityMonitoringIntelligence"),
    z.literal("ibm.security.SecurityServices"),
    z.literal("ibm.security.TrustendComputing"),
    z.literal("ibm.security.Vpn"),
    z.literal("ibm.social.Communities"),
    z.literal("ibm.social.FileSync"),
    z.literal("ibm.social.LiveCollaboration"),
    z.literal("ibm.social.Messaging"),
    z.literal("ibm.social.Networking"),
    z.literal("ibm.storage.BlockStorage"),
    z.literal("ibm.storage.ObjectStorage"),
    z.literal("ibm.user.Browser"),
    z.literal("ibm.user.Device"),
    z.literal("ibm.user.IntegratedDigitalExperiences"),
    z.literal("ibm.user.PhysicalEntity"),
    z.literal("ibm.user.Sensor"),
    z.literal("ibm.user.User"),
    z.literal("k8s.chaos.ChaosMesh"),
    z.literal("k8s.chaos.LitmusChaos"),
    z.literal("k8s.clusterconfig.HPA"),
    z.literal("k8s.clusterconfig.HorizontalPodAutoscaler"),
    z.literal("k8s.clusterconfig.Limits"),
    z.literal("k8s.clusterconfig.LimitRange"),
    z.literal("k8s.clusterconfig.Quota"),
    z.literal("k8s.compute.Cronjob"),
    z.literal("k8s.compute.Deploy"),
    z.literal("k8s.compute.Deployment"),
    z.literal("k8s.compute.DS"),
    z.literal("k8s.compute.DaemonSet"),
    z.literal("k8s.compute.Job"),
    z.literal("k8s.compute.Pod"),
    z.literal("k8s.compute.RS"),
    z.literal("k8s.compute.ReplicaSet"),
    z.literal("k8s.compute.STS"),
    z.literal("k8s.compute.StatefulSet"),
    z.literal("k8s.controlplane.API"),
    z.literal("k8s.controlplane.APIServer"),
    z.literal("k8s.controlplane.CCM"),
    z.literal("k8s.controlplane.CM"),
    z.literal("k8s.controlplane.ControllerManager"),
    z.literal("k8s.controlplane.KProxy"),
    z.literal("k8s.controlplane.KubeProxy"),
    z.literal("k8s.controlplane.Kubelet"),
    z.literal("k8s.controlplane.Sched"),
    z.literal("k8s.controlplane.Scheduler"),
    z.literal("k8s.ecosystem.ExternalDns"),
    z.literal("k8s.ecosystem.Helm"),
    z.literal("k8s.ecosystem.Krew"),
    z.literal("k8s.ecosystem.Kustomize"),
    z.literal("k8s.group.NS"),
    z.literal("k8s.group.Namespace"),
    z.literal("k8s.infra.ETCD"),
    z.literal("k8s.infra.Master"),
    z.literal("k8s.infra.Node"),
    z.literal("k8s.network.Ep"),
    z.literal("k8s.network.Endpoint"),
    z.literal("k8s.network.Ing"),
    z.literal("k8s.network.Ingress"),
    z.literal("k8s.network.Netpol"),
    z.literal("k8s.network.NetworkPolicy"),
    z.literal("k8s.network.SVC"),
    z.literal("k8s.network.Service"),
    z.literal("k8s.others.CRD"),
    z.literal("k8s.others.PSP"),
    z.literal("k8s.podconfig.CM"),
    z.literal("k8s.podconfig.ConfigMap"),
    z.literal("k8s.podconfig.Secret"),
    z.literal("k8s.rbac.CRole"),
    z.literal("k8s.rbac.ClusterRole"),
    z.literal("k8s.rbac.CRB"),
    z.literal("k8s.rbac.ClusterRoleBinding"),
    z.literal("k8s.rbac.Group"),
    z.literal("k8s.rbac.RB"),
    z.literal("k8s.rbac.RoleBinding"),
    z.literal("k8s.rbac.Role"),
    z.literal("k8s.rbac.SA"),
    z.literal("k8s.rbac.ServiceAccount"),
    z.literal("k8s.rbac.User"),
    z.literal("k8s.storage.PV"),
    z.literal("k8s.storage.PersistentVolume"),
    z.literal("k8s.storage.PVC"),
    z.literal("k8s.storage.PersistentVolumeClaim"),
    z.literal("k8s.storage.SC"),
    z.literal("k8s.storage.StorageClass"),
    z.literal("k8s.storage.Vol"),
    z.literal("k8s.storage.Volume"),
    z.literal("oci.compute.AutoscaleWhite"),
    z.literal("oci.compute.Autoscale"),
    z.literal("oci.compute.BMWhite"),
    z.literal("oci.compute.BareMetalWhite"),
    z.literal("oci.compute.BM"),
    z.literal("oci.compute.BareMetal"),
    z.literal("oci.compute.ContainerWhite"),
    z.literal("oci.compute.Container"),
    z.literal("oci.compute.FunctionsWhite"),
    z.literal("oci.compute.Functions"),
    z.literal("oci.compute.InstancePoolsWhite"),
    z.literal("oci.compute.InstancePools"),
    z.literal("oci.compute.OCIRWhite"),
    z.literal("oci.compute.OCIRegistryWhite"),
    z.literal("oci.compute.OCIR"),
    z.literal("oci.compute.OCIRegistry"),
    z.literal("oci.compute.OKEWhite"),
    z.literal("oci.compute.ContainerEngineWhite"),
    z.literal("oci.compute.OKE"),
    z.literal("oci.compute.ContainerEngine"),
    z.literal("oci.compute.VMWhite"),
    z.literal("oci.compute.VirtualMachineWhite"),
    z.literal("oci.compute.VM"),
    z.literal("oci.compute.VirtualMachine"),
    z.literal("oci.connectivity.BackboneWhite"),
    z.literal("oci.connectivity.Backbone"),
    z.literal("oci.connectivity.CDNWhite"),
    z.literal("oci.connectivity.CDN"),
    z.literal("oci.connectivity.CustomerDatacenter"),
    z.literal("oci.connectivity.CustomerDatacntrWhite"),
    z.literal("oci.connectivity.CustomerPremiseWhite"),
    z.literal("oci.connectivity.CustomerPremise"),
    z.literal("oci.connectivity.DisconnectedRegionsWhite"),
    z.literal("oci.connectivity.DisconnectedRegions"),
    z.literal("oci.connectivity.DNSWhite"),
    z.literal("oci.connectivity.DNS"),
    z.literal("oci.connectivity.FastConnectWhite"),
    z.literal("oci.connectivity.FastConnect"),
    z.literal("oci.connectivity.NATGatewayWhite"),
    z.literal("oci.connectivity.NATGateway"),
    z.literal("oci.connectivity.VPNWhite"),
    z.literal("oci.connectivity.VPN"),
    z.literal("oci.database.AutonomousWhite"),
    z.literal("oci.database.ADBWhite"),
    z.literal("oci.database.Autonomous"),
    z.literal("oci.database.ADB"),
    z.literal("oci.database.BigdataServiceWhite"),
    z.literal("oci.database.BigdataService"),
    z.literal("oci.database.DatabaseServiceWhite"),
    z.literal("oci.database.DBServiceWhite"),
    z.literal("oci.database.DatabaseService"),
    z.literal("oci.database.DBService"),
    z.literal("oci.database.DataflowApacheWhite"),
    z.literal("oci.database.DataflowApache"),
    z.literal("oci.database.DcatWhite"),
    z.literal("oci.database.Dcat"),
    z.literal("oci.database.DisWhite"),
    z.literal("oci.database.Dis"),
    z.literal("oci.database.DMSWhite"),
    z.literal("oci.database.DMS"),
    z.literal("oci.database.ScienceWhite"),
    z.literal("oci.database.Science"),
    z.literal("oci.database.StreamWhite"),
    z.literal("oci.database.Stream"),
    z.literal("oci.devops.APIGatewayWhite"),
    z.literal("oci.devops.APIGateway"),
    z.literal("oci.devops.APIServiceWhite"),
    z.literal("oci.devops.APIService"),
    z.literal("oci.devops.ResourceMgmtWhite"),
    z.literal("oci.devops.ResourceMgmt"),
    z.literal("oci.governance.AuditWhite"),
    z.literal("oci.governance.Audit"),
    z.literal("oci.governance.CompartmentsWhite"),
    z.literal("oci.governance.Compartments"),
    z.literal("oci.governance.GroupsWhite"),
    z.literal("oci.governance.Groups"),
    z.literal("oci.governance.LoggingWhite"),
    z.literal("oci.governance.Logging"),
    z.literal("oci.governance.OCIDWhite"),
    z.literal("oci.governance.OCID"),
    z.literal("oci.governance.PoliciesWhite"),
    z.literal("oci.governance.Policies"),
    z.literal("oci.governance.TaggingWhite"),
    z.literal("oci.governance.Tagging"),
    z.literal("oci.monitoring.AlarmWhite"),
    z.literal("oci.monitoring.Alarm"),
    z.literal("oci.monitoring.EmailWhite"),
    z.literal("oci.monitoring.Email"),
    z.literal("oci.monitoring.EventsWhite"),
    z.literal("oci.monitoring.Events"),
    z.literal("oci.monitoring.HealthCheckWhite"),
    z.literal("oci.monitoring.HealthCheck"),
    z.literal("oci.monitoring.NotificationsWhite"),
    z.literal("oci.monitoring.Notifications"),
    z.literal("oci.monitoring.QueueWhite"),
    z.literal("oci.monitoring.Queue"),
    z.literal("oci.monitoring.SearchWhite"),
    z.literal("oci.monitoring.Search"),
    z.literal("oci.monitoring.TelemetryWhite"),
    z.literal("oci.monitoring.Telemetry"),
    z.literal("oci.monitoring.WorkflowWhite"),
    z.literal("oci.monitoring.Workflow"),
    z.literal("oci.network.DrgWhite"),
    z.literal("oci.network.Drg"),
    z.literal("oci.network.FirewallWhite"),
    z.literal("oci.network.Firewall"),
    z.literal("oci.network.InternetGatewayWhite"),
    z.literal("oci.network.InternetGateway"),
    z.literal("oci.network.LoadBalancerWhite"),
    z.literal("oci.network.LoadBalancer"),
    z.literal("oci.network.RouteTableWhite"),
    z.literal("oci.network.RouteTable"),
    z.literal("oci.network.SecurityListsWhite"),
    z.literal("oci.network.SecurityLists"),
    z.literal("oci.network.ServiceGatewayWhite"),
    z.literal("oci.network.ServiceGateway"),
    z.literal("oci.network.VcnWhite"),
    z.literal("oci.network.Vcn"),
    z.literal("oci.security.CloudGuardWhite"),
    z.literal("oci.security.CloudGuard"),
    z.literal("oci.security.DDOSWhite"),
    z.literal("oci.security.DDOS"),
    z.literal("oci.security.EncryptionWhite"),
    z.literal("oci.security.Encryption"),
    z.literal("oci.security.IDAccessWhite"),
    z.literal("oci.security.IDAccess"),
    z.literal("oci.security.KeyManagementWhite"),
    z.literal("oci.security.KeyManagement"),
    z.literal("oci.security.MaxSecurityZoneWhite"),
    z.literal("oci.security.MaxSecurityZone"),
    z.literal("oci.security.VaultWhite"),
    z.literal("oci.security.Vault"),
    z.literal("oci.security.WAFWhite"),
    z.literal("oci.security.WAF"),
    z.literal("oci.storage.BackupRestoreWhite"),
    z.literal("oci.storage.BackupRestore"),
    z.literal("oci.storage.BlockStorageCloneWhite"),
    z.literal("oci.storage.BlockStorageClone"),
    z.literal("oci.storage.BlockStorageWhite"),
    z.literal("oci.storage.BlockStorage"),
    z.literal("oci.storage.BucketsWhite"),
    z.literal("oci.storage.Buckets"),
    z.literal("oci.storage.DataTransferWhite"),
    z.literal("oci.storage.DataTransfer"),
    z.literal("oci.storage.ElasticPerformanceWhite"),
    z.literal("oci.storage.ElasticPerformance"),
    z.literal("oci.storage.FileStorageWhite"),
    z.literal("oci.storage.FileStorage"),
    z.literal("oci.storage.ObjectStorageWhite"),
    z.literal("oci.storage.ObjectStorage"),
    z.literal("oci.storage.StorageGatewayWhite"),
    z.literal("oci.storage.StorageGateway"),
    z.literal("onprem.aggregator.Fluentd"),
    z.literal("onprem.aggregator.Vector"),
    z.literal("onprem.analytics.Beam"),
    z.literal("onprem.analytics.Databricks"),
    z.literal("onprem.analytics.Dbt"),
    z.literal("onprem.analytics.Dremio"),
    z.literal("onprem.analytics.Flink"),
    z.literal("onprem.analytics.Hadoop"),
    z.literal("onprem.analytics.Hive"),
    z.literal("onprem.analytics.Metabase"),
    z.literal("onprem.analytics.Norikra"),
    z.literal("onprem.analytics.Powerbi"),
    z.literal("onprem.analytics.PowerBI"),
    z.literal("onprem.analytics.Presto"),
    z.literal("onprem.analytics.Singer"),
    z.literal("onprem.analytics.Spark"),
    z.literal("onprem.analytics.Storm"),
    z.literal("onprem.analytics.Superset"),
    z.literal("onprem.analytics.Tableau"),
    z.literal("onprem.auth.Boundary"),
    z.literal("onprem.auth.BuzzfeedSso"),
    z.literal("onprem.auth.Oauth2Proxy"),
    z.literal("onprem.cd.Spinnaker"),
    z.literal("onprem.cd.TektonCli"),
    z.literal("onprem.cd.Tekton"),
    z.literal("onprem.certificates.CertManager"),
    z.literal("onprem.certificates.LetsEncrypt"),
    z.literal("onprem.ci.Circleci"),
    z.literal("onprem.ci.CircleCI"),
    z.literal("onprem.ci.Concourseci"),
    z.literal("onprem.ci.ConcourseCI"),
    z.literal("onprem.ci.Droneci"),
    z.literal("onprem.ci.DroneCI"),
    z.literal("onprem.ci.GithubActions"),
    z.literal("onprem.ci.Gitlabci"),
    z.literal("onprem.ci.GitlabCI"),
    z.literal("onprem.ci.Jenkins"),
    z.literal("onprem.ci.Teamcity"),
    z.literal("onprem.ci.TC"),
    z.literal("onprem.ci.Travisci"),
    z.literal("onprem.ci.TravisCI"),
    z.literal("onprem.ci.Zuulci"),
    z.literal("onprem.ci.ZuulCI"),
    z.literal("onprem.client.Client"),
    z.literal("onprem.client.User"),
    z.literal("onprem.client.Users"),
    z.literal("onprem.compute.Nomad"),
    z.literal("onprem.compute.Server"),
    z.literal("onprem.container.Containerd"),
    z.literal("onprem.container.Crio"),
    z.literal("onprem.container.Docker"),
    z.literal("onprem.container.Firecracker"),
    z.literal("onprem.container.Gvisor"),
    z.literal("onprem.container.K3S"),
    z.literal("onprem.container.Lxc"),
    z.literal("onprem.container.LXC"),
    z.literal("onprem.container.Rkt"),
    z.literal("onprem.container.RKT"),
    z.literal("onprem.database.Cassandra"),
    z.literal("onprem.database.Clickhouse"),
    z.literal("onprem.database.ClickHouse"),
    z.literal("onprem.database.Cockroachdb"),
    z.literal("onprem.database.CockroachDB"),
    z.literal("onprem.database.Couchbase"),
    z.literal("onprem.database.Couchdb"),
    z.literal("onprem.database.CouchDB"),
    z.literal("onprem.database.Dgraph"),
    z.literal("onprem.database.Druid"),
    z.literal("onprem.database.Hbase"),
    z.literal("onprem.database.HBase"),
    z.literal("onprem.database.Influxdb"),
    z.literal("onprem.database.InfluxDB"),
    z.literal("onprem.database.Janusgraph"),
    z.literal("onprem.database.JanusGraph"),
    z.literal("onprem.database.Mariadb"),
    z.literal("onprem.database.MariaDB"),
    z.literal("onprem.database.Mongodb"),
    z.literal("onprem.database.MongoDB"),
    z.literal("onprem.database.Mssql"),
    z.literal("onprem.database.MSSQL"),
    z.literal("onprem.database.Mysql"),
    z.literal("onprem.database.MySQL"),
    z.literal("onprem.database.Neo4J"),
    z.literal("onprem.database.Oracle"),
    z.literal("onprem.database.Postgresql"),
    z.literal("onprem.database.PostgreSQL"),
    z.literal("onprem.database.Scylla"),
    z.literal("onprem.dns.Coredns"),
    z.literal("onprem.dns.Powerdns"),
    z.literal("onprem.etl.Embulk"),
    z.literal("onprem.gitops.Argocd"),
    z.literal("onprem.gitops.ArgoCD"),
    z.literal("onprem.gitops.Flagger"),
    z.literal("onprem.gitops.Flux"),
    z.literal("onprem.groupware.Nextcloud"),
    z.literal("onprem.iac.Ansible"),
    z.literal("onprem.iac.Atlantis"),
    z.literal("onprem.iac.Awx"),
    z.literal("onprem.iac.Puppet"),
    z.literal("onprem.iac.Terraform"),
    z.literal("onprem.identity.Dex"),
    z.literal("onprem.inmemory.Aerospike"),
    z.literal("onprem.inmemory.Hazelcast"),
    z.literal("onprem.inmemory.Memcached"),
    z.literal("onprem.inmemory.Redis"),
    z.literal("onprem.logging.Fluentbit"),
    z.literal("onprem.logging.FluentBit"),
    z.literal("onprem.logging.Graylog"),
    z.literal("onprem.logging.Loki"),
    z.literal("onprem.logging.Rsyslog"),
    z.literal("onprem.logging.RSyslog"),
    z.literal("onprem.logging.SyslogNg"),
    z.literal("onprem.messaging.Centrifugo"),
    z.literal("onprem.mlops.Mlflow"),
    z.literal("onprem.mlops.Polyaxon"),
    z.literal("onprem.monitoring.Cortex"),
    z.literal("onprem.monitoring.Datadog"),
    z.literal("onprem.monitoring.Dynatrace"),
    z.literal("onprem.monitoring.Grafana"),
    z.literal("onprem.monitoring.Humio"),
    z.literal("onprem.monitoring.Mimir"),
    z.literal("onprem.monitoring.Nagios"),
    z.literal("onprem.monitoring.Newrelic"),
    z.literal("onprem.monitoring.PrometheusOperator"),
    z.literal("onprem.monitoring.Prometheus"),
    z.literal("onprem.monitoring.Sentry"),
    z.literal("onprem.monitoring.Splunk"),
    z.literal("onprem.monitoring.Thanos"),
    z.literal("onprem.monitoring.Zabbix"),
    z.literal("onprem.network.Ambassador"),
    z.literal("onprem.network.Apache"),
    z.literal("onprem.network.Bind9"),
    z.literal("onprem.network.Caddy"),
    z.literal("onprem.network.Consul"),
    z.literal("onprem.network.Envoy"),
    z.literal("onprem.network.Etcd"),
    z.literal("onprem.network.ETCD"),
    z.literal("onprem.network.Glassfish"),
    z.literal("onprem.network.Gunicorn"),
    z.literal("onprem.network.Haproxy"),
    z.literal("onprem.network.HAProxy"),
    z.literal("onprem.network.Internet"),
    z.literal("onprem.network.Istio"),
    z.literal("onprem.network.Jbossas"),
    z.literal("onprem.network.Jetty"),
    z.literal("onprem.network.Kong"),
    z.literal("onprem.network.Linkerd"),
    z.literal("onprem.network.Nginx"),
    z.literal("onprem.network.Ocelot"),
    z.literal("onprem.network.OpenServiceMesh"),
    z.literal("onprem.network.OSM"),
    z.literal("onprem.network.Opnsense"),
    z.literal("onprem.network.OPNSense"),
    z.literal("onprem.network.Pfsense"),
    z.literal("onprem.network.PFSense"),
    z.literal("onprem.network.Pomerium"),
    z.literal("onprem.network.Powerdns"),
    z.literal("onprem.network.Tomcat"),
    z.literal("onprem.network.Traefik"),
    z.literal("onprem.network.Tyk"),
    z.literal("onprem.network.Vyos"),
    z.literal("onprem.network.VyOS"),
    z.literal("onprem.network.Wildfly"),
    z.literal("onprem.network.Yarp"),
    z.literal("onprem.network.Zookeeper"),
    z.literal("onprem.proxmox.Pve"),
    z.literal("onprem.proxmox.ProxmoxVE"),
    z.literal("onprem.queue.Activemq"),
    z.literal("onprem.queue.ActiveMQ"),
    z.literal("onprem.queue.Celery"),
    z.literal("onprem.queue.Emqx"),
    z.literal("onprem.queue.EMQX"),
    z.literal("onprem.queue.Kafka"),
    z.literal("onprem.queue.Nats"),
    z.literal("onprem.queue.Rabbitmq"),
    z.literal("onprem.queue.RabbitMQ"),
    z.literal("onprem.queue.Zeromq"),
    z.literal("onprem.queue.ZeroMQ"),
    z.literal("onprem.registry.Harbor"),
    z.literal("onprem.registry.Jfrog"),
    z.literal("onprem.search.Solr"),
    z.literal("onprem.security.Bitwarden"),
    z.literal("onprem.security.Trivy"),
    z.literal("onprem.security.Vault"),
    z.literal("onprem.storage.CephOsd"),
    z.literal("onprem.storage.CEPH_OSD"),
    z.literal("onprem.storage.Ceph"),
    z.literal("onprem.storage.CEPH"),
    z.literal("onprem.storage.Glusterfs"),
    z.literal("onprem.storage.Portworx"),
    z.literal("onprem.tracing.Jaeger"),
    z.literal("onprem.tracing.Tempo"),
    z.literal("onprem.vcs.Git"),
    z.literal("onprem.vcs.Gitea"),
    z.literal("onprem.vcs.Github"),
    z.literal("onprem.vcs.Gitlab"),
    z.literal("onprem.vcs.Svn"),
    z.literal("onprem.workflow.Airflow"),
    z.literal("onprem.workflow.Digdag"),
    z.literal("onprem.workflow.Kubeflow"),
    z.literal("onprem.workflow.KubeFlow"),
    z.literal("onprem.workflow.Nifi"),
    z.literal("onprem.workflow.NiFi"),
    z.literal("openstack.apiproxies.EC2API"),
    z.literal("openstack.applicationlifecycle.Freezer"),
    z.literal("openstack.applicationlifecycle.Masakari"),
    z.literal("openstack.applicationlifecycle.Murano"),
    z.literal("openstack.applicationlifecycle.Solum"),
    z.literal("openstack.baremetal.Cyborg"),
    z.literal("openstack.baremetal.Ironic"),
    z.literal("openstack.billing.Cloudkitty"),
    z.literal("openstack.billing.CloudKitty"),
    z.literal("openstack.compute.Nova"),
    z.literal("openstack.compute.Qinling"),
    z.literal("openstack.compute.Zun"),
    z.literal("openstack.containerservices.Kuryr"),
    z.literal("openstack.deployment.Ansible"),
    z.literal("openstack.deployment.Charms"),
    z.literal("openstack.deployment.Chef"),
    z.literal("openstack.deployment.Helm"),
    z.literal("openstack.deployment.Kolla"),
    z.literal("openstack.deployment.KollaAnsible"),
    z.literal("openstack.deployment.Tripleo"),
    z.literal("openstack.deployment.TripleO"),
    z.literal("openstack.frontend.Horizon"),
    z.literal("openstack.monitoring.Monasca"),
    z.literal("openstack.monitoring.Telemetry"),
    z.literal("openstack.multiregion.Tricircle"),
    z.literal("openstack.networking.Designate"),
    z.literal("openstack.networking.Neutron"),
    z.literal("openstack.networking.Octavia"),
    z.literal("openstack.nfv.Tacker"),
    z.literal("openstack.optimization.Congress"),
    z.literal("openstack.optimization.Rally"),
    z.literal("openstack.optimization.Vitrage"),
    z.literal("openstack.optimization.Watcher"),
    z.literal("openstack.orchestration.Blazar"),
    z.literal("openstack.orchestration.Heat"),
    z.literal("openstack.orchestration.Mistral"),
    z.literal("openstack.orchestration.Senlin"),
    z.literal("openstack.orchestration.Zaqar"),
    z.literal("openstack.packaging.LOCI"),
    z.literal("openstack.packaging.Puppet"),
    z.literal("openstack.packaging.RPM"),
    z.literal("openstack.sharedservices.Barbican"),
    z.literal("openstack.sharedservices.Glance"),
    z.literal("openstack.sharedservices.Karbor"),
    z.literal("openstack.sharedservices.Keystone"),
    z.literal("openstack.sharedservices.Searchlight"),
    z.literal("openstack.storage.Cinder"),
    z.literal("openstack.storage.Manila"),
    z.literal("openstack.storage.Swift"),
    z.literal("openstack.user.Openstackclient"),
    z.literal("openstack.user.OpenStackClient"),
    z.literal("openstack.workloadprovisioning.Magnum"),
    z.literal("openstack.workloadprovisioning.Sahara"),
    z.literal("openstack.workloadprovisioning.Trove"),
    z.literal("outscale.compute.Compute"),
    z.literal("outscale.compute.DirectConnect"),
    z.literal("outscale.network.ClientVpn"),
    z.literal("outscale.network.InternetService"),
    z.literal("outscale.network.LoadBalancer"),
    z.literal("outscale.network.NatService"),
    z.literal("outscale.network.Net"),
    z.literal("outscale.network.SiteToSiteVpng"),
    z.literal("outscale.security.Firewall"),
    z.literal("outscale.security.IdentityAndAccessManagement"),
    z.literal("outscale.storage.SimpleStorageService"),
    z.literal("outscale.storage.Storage"),
    z.literal("programming.flowchart.Action"),
    z.literal("programming.flowchart.Collate"),
    z.literal("programming.flowchart.Database"),
    z.literal("programming.flowchart.Decision"),
    z.literal("programming.flowchart.Delay"),
    z.literal("programming.flowchart.Display"),
    z.literal("programming.flowchart.Document"),
    z.literal("programming.flowchart.InputOutput"),
    z.literal("programming.flowchart.Inspection"),
    z.literal("programming.flowchart.InternalStorage"),
    z.literal("programming.flowchart.LoopLimit"),
    z.literal("programming.flowchart.ManualInput"),
    z.literal("programming.flowchart.ManualLoop"),
    z.literal("programming.flowchart.Merge"),
    z.literal("programming.flowchart.MultipleDocuments"),
    z.literal("programming.flowchart.OffPageConnectorLeft"),
    z.literal("programming.flowchart.OffPageConnectorRight"),
    z.literal("programming.flowchart.Or"),
    z.literal("programming.flowchart.PredefinedProcess"),
    z.literal("programming.flowchart.Preparation"),
    z.literal("programming.flowchart.Sort"),
    z.literal("programming.flowchart.StartEnd"),
    z.literal("programming.flowchart.StoredData"),
    z.literal("programming.flowchart.SummingJunction"),
    z.literal("programming.framework.Angular"),
    z.literal("programming.framework.Backbone"),
    z.literal("programming.framework.Django"),
    z.literal("programming.framework.Ember"),
    z.literal("programming.framework.Fastapi"),
    z.literal("programming.framework.FastAPI"),
    z.literal("programming.framework.Flask"),
    z.literal("programming.framework.Flutter"),
    z.literal("programming.framework.Graphql"),
    z.literal("programming.framework.GraphQL"),
    z.literal("programming.framework.Laravel"),
    z.literal("programming.framework.Micronaut"),
    z.literal("programming.framework.Rails"),
    z.literal("programming.framework.React"),
    z.literal("programming.framework.Spring"),
    z.literal("programming.framework.Starlette"),
    z.literal("programming.framework.Svelte"),
    z.literal("programming.framework.Vue"),
    z.literal("programming.language.Bash"),
    z.literal("programming.language.C"),
    z.literal("programming.language.Cpp"),
    z.literal("programming.language.Csharp"),
    z.literal("programming.language.Dart"),
    z.literal("programming.language.Elixir"),
    z.literal("programming.language.Erlang"),
    z.literal("programming.language.Go"),
    z.literal("programming.language.Java"),
    z.literal("programming.language.Javascript"),
    z.literal("programming.language.JavaScript"),
    z.literal("programming.language.Kotlin"),
    z.literal("programming.language.Latex"),
    z.literal("programming.language.Matlab"),
    z.literal("programming.language.Nodejs"),
    z.literal("programming.language.NodeJS"),
    z.literal("programming.language.Php"),
    z.literal("programming.language.PHP"),
    z.literal("programming.language.Python"),
    z.literal("programming.language.R"),
    z.literal("programming.language.Ruby"),
    z.literal("programming.language.Rust"),
    z.literal("programming.language.Scala"),
    z.literal("programming.language.Swift"),
    z.literal("programming.language.Typescript"),
    z.literal("programming.language.TypeScript"),
    z.literal("programming.runtime.Dapr"),
    z.literal("saas.alerting.Newrelic"),
    z.literal("saas.alerting.Opsgenie"),
    z.literal("saas.alerting.Pushover"),
    z.literal("saas.alerting.Xmatters"),
    z.literal("saas.alerting.Pagerduty"),
    z.literal("saas.analytics.Dataform"),
    z.literal("saas.analytics.Snowflake"),
    z.literal("saas.analytics.Stitch"),
    z.literal("saas.cdn.Akamai"),
    z.literal("saas.cdn.Cloudflare"),
    z.literal("saas.cdn.Fastly"),
    z.literal("saas.chat.Discord"),
    z.literal("saas.chat.Line"),
    z.literal("saas.chat.Mattermost"),
    z.literal("saas.chat.Messenger"),
    z.literal("saas.chat.RocketChat"),
    z.literal("saas.chat.Slack"),
    z.literal("saas.chat.Teams"),
    z.literal("saas.chat.Telegram"),
    z.literal("saas.communication.Twilio"),
    z.literal("saas.filesharing.Nextcloud"),
    z.literal("saas.identity.Auth0"),
    z.literal("saas.identity.Okta"),
    z.literal("saas.logging.Datadog"),
    z.literal("saas.logging.DataDog"),
    z.literal("saas.logging.Newrelic"),
    z.literal("saas.logging.NewRelic"),
    z.literal("saas.logging.Papertrail"),
    z.literal("saas.media.Cloudinary"),
    z.literal("saas.recommendation.Recombee"),
    z.literal("saas.social.Facebook"),
    z.literal("saas.social.Twitter"),
  ])
  .describe("A type of the resource");

const directionSchema = z
  .union([
    z.literal("incoming"),
    z.literal("outgoing"),
    z.literal("bidirectional"),
    z.literal("undirected"),
  ])
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
      .union([
        z.boolean().describe("Controls how, and if, edges are represented"),
        z.string().describe("Controls how, and if, edges are represented"),
      ])
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
  .union([
    z.literal("png"),
    z.literal("jpg"),
    z.literal("svg"),
    z.literal("pdf"),
    z.literal("dot"),
  ])
  .describe("A format of the image that would be created");

const diagramDirectionSchema = z
  .union([
    z.literal("left-to-right"),
    z.literal("right-to-left"),
    z.literal("top-to-bottom"),
    z.literal("bottom-to-top"),
  ])
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
