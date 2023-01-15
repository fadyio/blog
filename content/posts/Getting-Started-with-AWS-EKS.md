---
title: "Getting Started with AWS EKS: A Beginner's Guide"
date: "2022-03-11"
tags: ["AWS", "EKS"]
author: "Fady"
showToc: true
TocOpen: false
draft: true
description: "Setup Kubernetes cluster and deploy a sample application in AWS EKS."
cover:
    image: /img/EKS-container.jpg
    alt: "Container"
    caption: Photo by [frank mckenna](https://unsplash.com/@frankiefoto) on [Unsplash](https://unsplash.com)
    relative: true
---
## What is EKS?
By the AWS [Documentation](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
> Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that you can use to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.
## Prerequisites:
> 1. AWS account.
> 2. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)installed on your computer.
Once you have these prerequisites, you can create an EKS cluster using the AWS CLI or the AWS Management Console. In this guide, we will use the AWS CLI to create an EKS cluster.
## Step 1:
Create IAM Role for EKS
login to your account
