---
title: "Fast Algorithms for Convolutional Neural Networks"
collection: talks
type: "Graduate Seminar"
talk_type: "Graduate seminar"
permalink: /talks/fast-algorithms-convolutional-neural-networks/
venue: "Department of Computer Science and Automation, IISc"
date: 2022-11-21
location: "Bengaluru, India"
slides: /files/fast-algorithms-convolutional-neural-networks-iisc-2022.pdf
---

This graduate seminar reviews fast convolution algorithms for neural networks, with an emphasis on Winograd minimal filtering and FFT-based convolution. It develops the forward and backward transformations and compares their arithmetic complexity with direct convolution.

The talk also examines the practical GPU tradeoffs behind these algorithms, including transform overhead, numerical precision, workspace requirements, data layout, and the effects of filter and batch size.

<p>
  <a class="btn" href="{{ page.slides | relative_url }}" target="_blank" rel="noopener noreferrer">View slides (PDF)</a>
</p>
