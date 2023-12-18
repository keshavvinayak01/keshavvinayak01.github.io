---
title: "Multi-Level Intermediate Representation (MLIR)"
collection: projects
type: "M.Tech. Project"
permalink: /projects/mlir-compiler-passes
venue: "IISc"
location: "IISc Bangalore, India"
date: 2022-11-01
---
Part of requirement for the course E0358: 
Advanced Techniques in Compilation and Programming for Parallel Architectures

Summary
======
- **Loop optimization**: Implemented a loop interchange pass within the Affine dialect in MLIR, driven by an
analytical cost model that optimises for locality (spatial, temporal - both self and group). The pass handles
perfectly nested loop nests and detects conditionals to bail out of optimization (to preserve correctness)

- **Accurate Reductions**: Designed and implemented infrastructure and compiler passes for end-to-end support in
MLIR for atomic reduction operations on a CPU (ex: sum, mul, etc.). The passes automatically detect sequential
operations that follow the RMW template and replace the instructions in place.

The applied patches and commits can be found [here](https://github.com/keshavvinayak01/llvm-project).
