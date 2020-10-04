---
last_modified_on: "2020-10-04"
title: "Amazon Web Services (AWS)"
description: "Learn how to configure and plug your Amazon Web Services (AWS) account"
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md.erb
-->

## Add your AWS account

TODO

### Required IAM permissions

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:*",
                "s3:*",
                "cloudwatch:*",
                "autoscaling:*",
                "application-autoscaling:*",
                "elasticloadbalancing:*",
                "organizations:DescribeAccount",
                "organizations:DescribeOrganization",
                "organizations:DescribeOrganizationalUnit",
                "organizations:DescribePolicy",
                "organizations:ListChildren",
                "organizations:ListParents",
                "organizations:ListPoliciesForTarget",
                "organizations:ListRoots",
                "organizations:ListPolicies",
                "organizations:ListTargetsForPolicy",
                "dynamodb:*",
                "ecr:*",
                "ec2:*",
                "cloudtrail:LookupEvents",
                "kms:DescribeKey",
                "kms:ListAliases",
                "dynamodb:*",
                "tag:GetResources",
                "rds:*",
                "ecs:*",
                "eks:*",
                "logs:*",
                "events:DescribeRule",
                "events:DeleteRule",
                "events:ListRuleNamesByTarget",
                "events:ListTargetsByRule",
                "events:PutRule",
                "events:PutTargets",
                "es:AddTags",
                "es:RemoveTags",
                "es:ListTags",
                "es:DeleteElasticsearchDomain",
                "es:DescribeElasticsearchDomain",
                "es:CreateElasticsearchDomain",
                "events:RemoveTargets",
                "kms:EnableKeyRotation",
                "kms:EnableKey",
                "kms:ImportKeyMaterial",
                "kms:Decrypt",
                "kms:UpdateKeyDescription",
                "kms:GenerateDataKeyWithoutPlaintext",
                "kms:Verify",
                "kms:CancelKeyDeletion",
                "kms:DeleteImportedKeyMaterial",
                "kms:GenerateDataKeyPairWithoutPlaintext",
                "kms:DisableKey",
                "kms:GenerateDataKeyPair",
                "kms:ReEncryptFrom",
                "kms:DisableKeyRotation",
                "kms:UpdateAlias",
                "kms:Encrypt",
                "kms:ScheduleKeyDeletion",
                "kms:GenerateDataKey",
                "kms:CreateAlias",
                "kms:ReEncryptTo",
                "kms:Sign",
                "kms:DeleteAlias",
                "kms:DeleteCustomKeyStore",
                "kms:GenerateRandom",
                "kms:UpdateCustomKeyStore",
                "kms:DisconnectCustomKeyStore",
                "kms:CreateKey",
                "kms:ConnectCustomKeyStore",
                "kms:CreateCustomKeyStore"
            ],
            "Resource": "*"
        }
    ]
}
```

## Remove your AWS account

TODO

## Available regions

| | name             | description                   | supported |
|-|------------------|-------------------------------|-----------|
|🇺🇸| aws/us-west-2      | US West (Oregon)            | yes       |
|🇺🇸| aws/us-east-2      | US East (Ohio)              | yes       |
|🇺🇸| aws/us-east-1      | US East (N. Virginia)      |  yes       |
|🇺🇸| aws/us-west-1      | US West (N. California)    |  yes       |
|🇿🇦| aws/af-south-1     | Africa (Cape Town)          | yes       |
|🇭🇰| aws/ap-east-1      | Asia Pacific (Hong Kong)    | yes       |
|🇮🇳| aws/ap-south-1     | Asia Pacific (Mumbai)       | yes       |
|🇯🇵| aws/ap-northeast-1 | Asia Pacific (Tokyo)        | yes       |
|🇰🇷| aws/ap-northeast-2 | Asia Pacific (Seoul)        | yes       |
|🇯🇵| aws/ap-northeast-3 | Asia Pacific (Osaka) |  yes       |
|🇸🇬| aws/ap-southeast-1 | Asia Pacific (Singapore)    | yes       |
|🇦🇺| aws/ap-southeast-2 | Asia Pacific (Sydney)       | yes       |
|🇨🇦| aws/ca-central-1   | Canada (Central)            | yes       |
|🇩🇪| aws/eu-central-1   | Europe (Frankfurt)          | yes       |
|🇮🇪| aws/eu-west-1      | Europe (Ireland)            | yes       |
|🏴󠁧󠁢󠁥󠁮󠁧󠁿| aws/eu-west-2      | Europe (London)             | yes       |
|🇫🇷| aws/eu-west-3      | Europe (Paris)             | yes       |
|🇮🇹| aws/eu-south-1     | Europe (Milan)              | yes       |
|🇸🇪| aws/eu-north-1     | Europe (Stockholm)          | yes       |
|🇧🇭| aws/me-south-1     | Middle East (Bahrain)       | yes       |
|🇧🇷| aws/sa-east-1      | South America (São Paulo)   | yes       |


## Kubernetes

TODO

## FAQ

### How to choose a region?

Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency.

### I don't find a region that is provided by AWS

We are probably testing the support of this region, please [contact us][urls.qovery_contact_us] to know what's the status

### Migrate between Cloud providers and regions

Today, you can't migrate an environment from one region to another after it has been created. Vote [here][urls.qovery_roadmap] if you need this feature.


[urls.qovery_contact_us]: https://www.qovery.com/contact
[urls.qovery_roadmap]: https://roadmap.qovery.com/