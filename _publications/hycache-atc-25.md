---
title: "HyCache: Hybrid Caching for Accelerating Input Preprocessing Pipelines in DNN training"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'accelerate preprocessing by caching intermediate results across epochs'
date: 07-07-2025
venue: 'USENIX ATC'
paperurl: 'https://www.usenix.org/conference/atc25/presentation/vinayak'
citation: 'Jha, Keshav Vinayak. (2025). &quot;HyCache: Hybrid Caching for Accelerating Input Preprocessing Pipelines in DNN training&quot; <i>USENIX ATC 2025</i>. 1(1).'
---
End-to-end deep neural networks' (DNNs) training performance depends not only on the time spent in training the model weights but also on the time spent in loading and preprocessing the training data. Recent advances in GPU hardware have made training substantially faster. As a result, the bottleneck has shifted to the CPU-based input pipeline. This pipeline must fetch and transform each sample through multiple stages before it can be consumed by the GPU.

Prior works accelerate preprocessing by caching intermediate results across epochs, but suffer from several key limitations:

- They cache either in memory or in storage, but are unable to leverage both together.
- They can cache the output of a stage only if it can entirely fit in the cache, which is a severe limitation for larger datasets.
- They can cache the output of only one of the stages, which could be suboptimal.

We thus introduce Hybrid Cache (HyCache), a runtime that enables the caching of subsets of preprocessed data from multiple intermediate steps on both memory and storage. HyCache possesses the ability to partially cache the outputs of a stage across both memory and storage. HyCache deploys integer linear programming (ILP) to automatically determine the best caching strategies across the memory and the storage by finding an optimal trade-off between recomputation and caching. Importantly, it does so without any manual intervention. HyCache outperforms state-of-the-art prior approaches, delivering a raw pipeline throughput improvement ranging in speedups from 1.11×× to 10.1×× over a variety of pipelines.


[Download paper here](https://www.usenix.org/conference/atc25/presentation/vinayak)

Recommended citation: Jha, Keshav Vinayak. (2025). &quot;HyCache: Hybrid Caching for Accelerating Input Preprocessing Pipelines in DNN training&quot; <i>USENIX ATC 2025</i>. 1(1).
