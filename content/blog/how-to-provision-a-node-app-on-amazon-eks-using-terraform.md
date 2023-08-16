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

```hcl
variable "region" {
  description = "AWS region"
 type = string
 default = "eu-west-1"
}
```

This file defines the region we will create the Amazon EKS cluster. The default region is `eu-west-1`.

### Create a `terraform.tf` file

Next, create a file named `terraform.tf` and open it. Add the following content to the file.

```hcl
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

> This file defines the Terraform AWS provider, allowing Terraform infrastructure-as-code (IaC) to interact with the AWS cloud. Terraform will use the AWS provider from `hashicorp/aws`.

### Create a `vpc.tf` file

In the `terraform-provison-eks` folder, create a new file named `vpc.tf`. Open the new file and add the following content.

```hcl
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "3.14.2"

  name = "Demo-VPC"

  cidr = "10.0.0.0/16"
  azs = slice(data.aws_availability_zones.available.names, 0, 3)

  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
  enable_dns_hostnames = true

  public_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/elb" = 1
  }

  private_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/internal-elb" = 1
  }
}
```

> Terraform will use the AWS VPC module from `terraform-aws-modules/vpc/aws` to create a VPC named `Demo-VPC`. It will also create three `private_subnets` with `private_subnet_tags`. It creates three `public_subnets` with `public_subnet_tags`.

### Create an `eks-cluster.tf` file

In the `terraform-provison-eks` folder, create a new file named `eks-cluster.tf`. Open the new file and add the following content to configure the AWS EKS cluster:

```hcl
module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "19.0.4"

  cluster_name = local.cluster_name
  cluster_version = "1.24"

  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  cluster_endpoint_public_access = true

  eks_managed_node_group_defaults = {
    ami_type = "AL2_x86_64"

  }

  eks_managed_node_groups = {
    one = {
      name = "node-group-1"

      instance_types = ["t3.small"]

      min_size = 1
      max_size = 3
      desired_size = 2
    }

    two = {
      name = "node-group-2"

      instance_types = ["t3.small"]

      min_size = 1
      max_size = 2
      desired_size = 1
    }
  }
}
```

> Terraform will use the `terraform-aws-modules/eks/aws` module to configure and provision the AWS EKS cluster. It will create a `t3.small` instance type for the `eks_managed_node_groups`.

Up next, we will create `main.ts` file

### Create a `main.tf` file

In the `terraform-provison-eks` folder, create a new file named `main.tf`. Open the new file and add the following content:

```hcl
provider "kubernetes" {
  host = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
}

provider "aws" {
  region = "eu-west-1"
  profile= "damisparks"
}

data "aws_availability_zones" "available" {}

locals {
  cluster_name = "demo-eks-${random_string.suffix.result}"
}

resource "random_string" "suffix" {
  length = 8
  special = false
}
```

> This file defines the AWS Cloud availability zones and the AWS EKS Cluster name.

Now, let us create the `outputs.tf`

### Create `outputs.tf` file

In the `terraform-provison-eks` folder, create a new file named `outputs.tf`. Open the new file and add the following content:

```hcl
output "cluster_name" {
  description = "Amazon Web Service EKS Cluster Name"
  value = module.eks.cluster_name
}

output "cluster_endpoint" {
  description = "Endpoint for Amazon Web Service EKS "
  value = module.eks.cluster_endpoint
}

output "region" {
  description = "Amazon Web Service EKS Cluster region"
  value = var.region
}


output "cluster_security_group_id" {
  description = "Security group ID for the Amazon Web Service EKS Cluster "
  value = module.eks.cluster_security_group_id
}
```

This file defines the outputs to be displayed in your terminal after running the Terraform commands. Using the following files, Terraform will output the

- **cluster_name**
- **cluster_endpoint**
- **region**
- and **cluster_security_group_id**.

Let’s run the Terraform commands to create and provision the Amazon EKS cluster using Terraform. We will start with the `terraform init` command.

### Terraform init command

This command will initialise the Terraform AWS EKS modules and the Terraform backend. It will download the modules from the [Terraform registry](https://registry.terraform.io/terraform-aws-modules/eks/aws). It will also download and install the AWS EKS provider plugins from the `hashicorp/aws`:

```zsh
terraform init
```

The command will output the following in your console. Yours might be different. However, at the time of writing, this was my output.

![terraform init output](/img/terraform-init-output.png){height="372" width="706"}
