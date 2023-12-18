---
title: "Ballooning subsystem in memory management for Linux"
collection: projects
type: "M.Tech. Project"
permalink: /projects/linux-memory-ballooning
venue: "IISc"
location: "IISc Bangalore, India"
date: 2022-06-01
---
Part of requirement for the course E0253: Operating Systems

Summary
====== 

- Modified the Memory management subsystem of the Linux kernel and added functionality to it by providing an API using which applications can register for memory ballooning. 

- Monitored memory usage and used a custom signal sent to the registered application to free memory in the event of memory pressure.

- Introduced new system calls at the kernel level (Kernel v5.11.5) to achieve the above utilities.

The applied patches and commits can be found [here](https://github.com/keshavvinayak01/Linux-5.11.5-OS).
