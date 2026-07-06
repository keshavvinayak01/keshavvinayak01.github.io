---
title: "Mitigating GPU Bank Conflicts with Swizzling"
collection: talks
type: "Internal Talk"
talk_type: "Internal technical talk"
permalink: /talks/gpu-bank-conflicts-swizzling/
venue: "AMD"
date: 2026-07-06
location: "Internal"
slides: /files/gpu-bank-conflicts-swizzling-amd-internal-2026.pdf
---

This internal AMD technical talk walks through GPU memory hierarchy, LDS/shared-memory banks, bank conflicts, padding, and XOR swizzling. It uses my IREE swizzle PR as a case study for how compiler-controlled shared-memory layout can reduce or reshape conflict pressure in attention kernels.

The talk builds from the hardware model to the compiler implementation, then uses MI300X evaluation data and instruction-level tracing to explain why the f16 and f32 results differ.

<p>
  <a class="btn" href="{{ page.slides | relative_url }}" target="_blank" rel="noopener noreferrer">View slides (PDF)</a>
  <a class="btn" href="https://github.com/iree-org/iree/pull/23778" target="_blank" rel="noopener noreferrer">View IREE PR #23778</a>
</p>
