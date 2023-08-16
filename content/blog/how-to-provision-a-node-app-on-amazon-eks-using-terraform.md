---
title: How to provision a Node app on Amazon EKS using Terraform
date: '2023-08-07T10:49:04.202Z'
tags:
  - aws

description: In this article, I will show you how to provision a Node app on Amazon EKS using Terraform.
---

I am writing this article to show you how to provision a Node app on Amazon EKS using Terraform. I got the idea from an interview for a Senior Node Backend Engineer position at an AWS company. The question is to create a Node app on Amazon EKS using Terraform. I had never used Terraform before, so I had to learn it from scratch. I found it very interesting and decided to write an article about it.

In this article, I am assuming you know about [AWS EKS](https://aws.amazon.com/eks/), [Terraform](https://www.terraform.io/) and how to set them up. If you don't, I recommend you read about them before reading this article.

Below are some of the resources I used to learn about AWS EKS and Terraform:

- [AWS Getting Started](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Quick configuration with aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) (_assuming there is no prior config, having "Quick configuration with aws configure" completed should suffice_)
- [IAM Authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

## The Question I Was Asked During the Interview

I was given one hour to finish it.
The task goes thus:

- Provision an EKS cluster within a VPC (virtual private cloud) in AWS using Terraform
- Create a basic HelloWorld application
- Have your app up and running in EKS
- The deployed application should be accessible through the public traffic.
- Application could be developed with either Flask or Node

## The Solution

So, I started by creating a folder `terraform-provison-eks` to encapsulate the files and scripts.

### Create a `variables.tf` file

Open the new folder and create a file named `variables.tf`, add the following Terraform code to define our Terraform variables:

```
variable "region" {
  description = "AWS region"
 type = string
 default = "eu-west-1"
}
```

This file defines the region we will create the Amazon EKS cluster. The default region is `eu-west-1`.

### Create a `terraform.tf` file

Next, create a file named `terraform.tf` and open it. Add the following content to the file.

```
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.46.0"
    }

    random = {
      source = "hashicorp/random"
      version = "~> 3.4.3"
    }

    tls = {
      source = "hashicorp/tls"
      version = "~> 4.0.4"
    }

    cloudinit = {
      source = "hashicorp/cloudinit"
      version = "~> 2.2.0"
    }

    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "~> 2.16.1"
    }
  }

  required_version = "~> 1.3"
}
```

This file defines the Terraform AWS provider, allowing Terraform infrastructure-as-code (IaC) to interact with the AWS cloud. Terraform will use the AWS provider from `hashicorp/aws`.
