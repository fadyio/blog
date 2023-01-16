---
title: "Getting Started with Amazon EKS"
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
There's no denying it — Kubernetes has become the de-facto industry standard for container orchestration.

But Setting up and maintaining Kubernetes clusters to run containerized workloads can be a challenge, especially if you are running it on the cloud. You need to take care of networking, setting up the master node, security and continuous updates and patches.

Fortunately, you can use Elastic Kubernetes Service (EKS), EKS is a managed Kubernetes service that makes running Kubernetes on AWS as simple as pushing a button.

In this article, we’ll walk you through how to set up and run a Kubernetes deployment on AWS using EKS.



## Step 0: Before you start
> 0. AWS account.
> 1. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)installed on your computer, while you can use the AWS Console to create a cluster in EKS, the AWS CLI is easier
> 2.

{{< notice warning >}}
EKS is not included in [AWS Free Tier](https://aws.amazon.com/free/?all-free-tier) For every cluster you create on EKS, you pay $0.10/hour. Additionally, you will also be paying for the resources you consume separately.
{{< /notice >}}
## Step 1:
Create IAM Role for EKS
login to your account
