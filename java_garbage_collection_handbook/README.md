# Java Garbage Collection Handbook

## Contents

* [What is Garbage Collection](#what-is-garbage-collecton)
    * [Manual Memory Management](#manual-memory-management)
        * [Smart Pointers](#smart-pointers)
    * [Automated Memory Management](#automated-memory-management)
        * [Reference Counting](#reference-counting)
        * [Mark and Sweep](#mark-and-sweep)

* [Garbage Collection in Java](#garbage-collecton-in-java)
    * [Fragmenting and Compacting](#fragmenting-and-compacting)
    * [Generational Hypothesis](#generational-hypothesis)
    * [Memory Pools](#memory-pools)
        * [Eden](#eden)
        * [Survivor Spaces](#survivor-spaces)
        * [Old Generation](#old-generation)
        * [PermGen](#permgen)
        * [Metaspace](#metaspace)
    * [Minor GC vs Major GC vs Full GC](#minor-gc-vs-major-gc-vs-full-gc)
        * [Minor GC](#minor-gc)
        * [Major GC vs Full GC](#major-gc-vs-full-gc)

* [GC Algorithms: Basics](#gc-algorithms--basics)
    * [Marking Reachable Objects](#marking-reachable-objects)
    * [Removing Unused Objects](#removing-unused-objects)
        * [Sweep](#sweep)
        * [Compact](#compact)
        * [Copy](#copy)

* [GC Algorithms: Implementations](#gc-algorithms--implementations)
    * [Serial GC](#serial-gc)
        * [Minor GC](#minor-gc)
        * [Full GC](#full-gc)
    * [Parallel GC](#parallel-gc)
        * [Minor GC](#minor-gc)
        * [Full GC](#full-gc)
    * [Concurrent Mark and Sweep](#concurrent-mark-and-sweep)
        * [Minor GC](#minor-gc)
        * [Full GC](#full-gc)
    * [G1 - Garbage First](#g1-garbage-first)
        * [Evacuation Pause: Fully Young](#evacuation-pause-fully-young)
        * [Concurrent Marking](#concurrent-marking)
        * [Evacuation Pause: Mixed](#evacuation-pause-mixed)
        * [Summary](#summary)
    * [Low-Latency Concurrent GC](#low-latency-concurrent-gc)
        * [ZGC](#zgc)
        * [Shanandoah](#shenandoah)

* [GC Tuning: Basic](#gc-tuning--basics)
    * [Core Concepts](#core-concepts)
        * [Latency](#latency)
        * [Throughput](#throughput)
        * [Capacity](#capacity)
    * [Example](#example)
        * [Tuning for Latency](#tuning-for-latency)
        * [Tuning for Throughput](#tuning-for-throughput)
        * [Tuning for Capacity](#tuning-for-capacity)

* [GC Tuning: Tooling](#gc-tuning--tooling)
    * [JMX API](#jmx-api)
    * [JVisualVM](#jvisualvm)
    * [jstat](#jstat)
    * [GC logs](#gc-logs)
    * [GCViewer](#gcviewer)
    * [Profilers](#profilers)
        * [hprof](#hprof)
        * [Java VisualVM](#java-visualvm)
        * [AProf](#aprof)

* [GC Tuning: In Practice](#gc-tuning--in-practice)
    * [High Allocation Rate](#high-allocation-rate)
        * [How to Measure Allocation Rate?](#how-to-measure-allocation-rate)
        * [Why Should I Care?](#why-should-i-care-)
        * [Give me an Example](#give-me-an-example)
        * [Could my JVMs be Affected?](#could-my-jvms-be-affected)
        * [What is the Solution?](#what-is-the-solution)
    * [Premature Promotion](#premature-promotion)
        * [How to Measure Promotion Rate?](#how-to-measure-promotion-rate)
        * [Why Should I Care?](#why-should-i-care-)
        * [Give me an Example](#give-me-an-example)
        * [Could my JVMs be Affected?](#could-my-jvms-be-affected)
        * [What is the Solution?](#what-is-the-solution)
    * [Weak, Soft and Phantom References](#weak--soft-and-phantom-references)
        * [Why Should I Care?](#why-should-i-care-)
        * [Give me an Example](#give-me-an-example)
        * [Could my JVMs be Affected?](#could-my-jvms-be-affected)
        * [What is the Solution?](#what-is-the-solution)
    * [Other Examples](#other-examples)
        * [RMI & GC](#rmi--gc)
        * [JVMTI tagging & GC](#jvmti-tagging--gc)
        * [Humongous Allocations](#humongous-allocations)
        * [Conclusion](#conclusion)

---

### What Is Garbage Collection?

---

Disclaimer: This content focuses on Oracle Hotspot and OpenJDK behaviour. In other runtimes or even on other JVMs, such as jRockit or IBM J9, some of the aspects covered in this handbook can behave differently.

#### Manual Memory Management

##### Smart Pointers

#### Automated Memory Management

##### Reference Counting

##### Mark and Sweep

---

### Garbage Collection in Java

---

#### Fragmenting and Compacting

#### Generational Hypothesis

#### Memory Pools

##### Eden

##### Survivor Spaces

##### Old Generation

##### PermGen

##### Metaspace

#### Minor GC vs Major GC vs Full GC

##### Minor GC

##### Major GC vs Full GC

---

### GC Algorithms: Basics

---

#### Marking Reachable Objects

#### Removing Unused Objects

##### Sweep

##### Compact

##### Copy

---

### GC Algorithms: Implementations

---

#### Serial GC

##### Minor GC

##### Full GC

#### Parallel GC

##### Minor GC

##### Full GC

#### Concurrent Mark and Sweep

##### Minor GC

##### Full GC

#### G1 - Garbage First

##### Evacuation Pause: Fully Young

##### Concurrent Marking

##### Evacuation Pause: Mixed

##### Summary

#### Low-Latency Concurrent GC

##### ZGC

##### Shenandoah

---

### GC Tuning: Basics

---

#### Core Concepts

##### Latency

##### Throughput

##### Capacity

#### Example

##### Tuning for Latency

##### Tuning for Throughput

##### Tuning for Capacity

---

### GC Tuning: Tooling

---

#### High Allocation Rate

##### How to Measure Allocation Rate?

##### Why Should I Care?

##### Give me an Example

##### Could my JVMs be Affected?

##### What is the Solution?

#### Premature Promotion

##### How to Measure Promotion Rate?

##### Why Should I Care?

##### Give me an Example

##### Could my JVMs be Affected?

##### What is the Solution?

#### Weak, Soft and Phantom References

##### Why Should I Care?

##### Give me an Example

##### Could my JVMs be Affected?

##### What is the Solution?

#### Other Examples

##### RMI & GC

##### JVMTI tagging & GC

##### Humongous Allocations

##### Conclusion

---

