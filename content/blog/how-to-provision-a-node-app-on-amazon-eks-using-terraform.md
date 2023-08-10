---
title: How to provision a Node app on Amazon EKS using Terraform
date: '2023-08-07T10:49:04.202Z'
tags:
  - aws

description: In this article, I will show you how to provision a Node app on Amazon EKS using Terraform.
---

# How to provision a Node app on Amazon EKS using Terraform

I am writing this article to show you how to provision a Node app on Amazon EKS using Terraform. I got the idea from an interview for a Senior Node Backend Engineer position at an AWS company. The question is to create a Node app on Amazon EKS using Terraform. I had never used Terraform before, so I had to learn it from scratch. I found it very interesting and decided to write an article about it.

In this article, I am assuming you know about [AWS EKS](https://aws.amazon.com/eks/), [Terraform](https://www.terraform.io/) and how to set them up. If you don't, I recommend you read about them before reading this article.

Below are some of the resources I used to learn about AWS EKS and Terraform:

- [AWS Getting Started](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Quick configuration with aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) (_assuming there is no prior config, having "Quick configuration with aws configure" completed should suffice_)
- [IAM Authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

## The Question I Was Asked During the Interview

1. Time is of the essence, you have 1 hour.
2. You will have to:
   1. Provision an EKS cluster within a VPC (virtual private cloud) in AWS using Terraform
   2. Create a basic HelloWorld application
   3. Have your app up and running in EKS
   4. The deployed application should be accessible through the public traffic.
   5. Application could be developed with either Flask or Node

## The Solution
