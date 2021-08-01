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

At first sight, garbage collection should be dealing with what the name suggests – finding and throwing away the garbage. In reality it is doing exactly the opposite. Garbage Collection is tracking down all the objects that are still used and marks the rest as garbage. Bearing this in mind, we start digging into more details of how the process of automated memory reclamation called ‘Garbage Collection’ is implemented for Java Virtual Machine.

Instead of rushing into specifics, we shall start from the very beginning, explaining the general nature of garbage collection and the core concepts and approaches.

Disclaimer: This content focuses on Oracle Hotspot and OpenJDK behaviour. In other runtimes or even on other JVMs, such as jRockit or IBM J9, some of the aspects covered in this handbook can behave differently.

#### Manual Memory Management

Before we can start covering Garbage Collection in its modern form, let’s do a quick recap of days where you had to manually and explicitly allocate and free memory for your data. And if you ever forgot to free it, you would not be able to reuse the memory. The memory would be claimed but not used. Such a scenario is called a **memory leak**.

Here is a simple example written in C using manual memory management:

```C
int send_request() {
    size_t n = read_size();
    int *elements = malloc(n * sizeof(int));

    if(read_elements(n, elements) < n) {
        // elements not freed!
        return -1;
    }

    // …

    free(elements)
    return 0;
}
```

As we can see, it is fairly easy to forget to free memory. Memory leaks used to be a lot more common problem than today. You could only really fight them by fixing your code. Thus, a much better approach would be to automate the reclamation of unused memory, eliminating the possibility of human error altogether. Such automation is called **Garbage Collection** (or **GC** for short).

##### Smart Pointers

One of the first ways to automate this was by using destructors. For instance, we could do the same thing in C++ using vector, the destructor of which will be automatically called when it’s no longer in scope:

```C++
int send_request() {
    size_t n = read_size();
    vector<int> elements = vector<int>(n);

    if(read_elements(elements.size(), &elements[0]) < n) {
        return -1;
    }

    return 0;
}
```

But in more complex cases, especially when sharing objects across multiple threads, just the destructor will not be sufficient. In comes the simplest form of garbage collection: reference counting. For each object, you simply know how many times it is referred to and when that count reaches zero the object can be safely reclaimed. A well-known example of that would be the shared pointers of C++:

```C++
int send_request() {
    size_t n = read_size();
    auto elements = make_shared<vector<int>>();

    // read elements

    store_in_cache(elements);

    // process elements further

    return 0;
}
```

Now, to avoid reading the elements next time the function is called, we may want to cache them. In such a case, destroying the vector when it’s out of scope is not an option. Therefore, we make use of `shared_ptr`. It keeps track of the number of references to it. This number increases as you pass it around and decreases as it leaves scope. As soon as the number of references reaches zero, the `shared_ptr` automatically deletes the underlying vector.

#### Automated Memory Management

In the C++ code above, we still had to explicitly say when we want to have memory management to be taken care of. But what if we could make all the objects behave this way? That would be very handy, since the developers no longer have to think about cleaning up after themselves. The runtime will automatically understand that some memory is no longer used and frees it. In other words, it automatically **collects the garbage**. The first garbage collector was created in 1959 for Lisp and the technology has only advanced since then.

##### Reference Counting

The idea that we have demonstrated with the shared pointers of C++ can be applied to all objects. Many languages such as Perl, Python or PHP take this approach. This is best illustrated with a picture:

![reference-counting](./assets/reference-counting.PNG)

The green clouds indicate that the object that they point to is still in use by the programmer. Technically, these may be things like a local variable in the currently executing method or a static variable or something else. It may vary from programming language to programming language so we will not focus on it here.

The blue circles are the live objects in memory, with the numbers inside denoting their reference counts. Finally, the grey circles are objects that are not referenced from any object that is still explicitly in use (these are directly referenced to by the green clouds). The grey objects are thus garbage and could be cleaned by the Garbage Collector.

This all looks really good, does it not? Well, it does, but the whole method has a huge drawback. It is quite easy to end up with a **detached cycle** of objects none of which are in scope yet due to cyclic references the count of their reference is not zero. Here’s an illustration:

![reference-counting-2](./assets/reference-counting-2.PNG)

See? The red objects are in fact garbage that the application does not use. But due to the limitations of reference counting there is still a memory leak.

There are some ways to overcome this, such as using special ‘weak’ references or applying a separate algorithm for collecting cycles. The aforementioned languages – Perl, Python and PHP – all handle cycles in one way or another, but this is outside the scope of this handbook. Instead, we will start investigating the approach taken by the JVM in more details.

##### Mark and Sweep

First of all, the JVM is more specific about what constitutes reachability of an object. Instead of the vaguely defined green clouds that we saw on earlier chapters, we have a very specific and explicit set of objects that are called the **Garbage Collection Roots**:

  * Local variables
  * Active threads
  * Static fields
  * JNI references

The method used by JVM to track down all the reachable (live) objects and to make sure the memory claimed by non-reachable objects can be reused is called the Mark and Sweep algorithm. It consists of two steps:

  * **Marking** is walking through all reachable objects, starting from GC roots and keeping a ledger in native memory about all such objects
  * **Sweeping** is making sure the memory addresses occupied by non-reachable objects can be reused by the next allocations.

Different GC algorithms within the JVM, such as ___Parallel Scavenge___, ___Parallel Mark+Copy___ or ___CMS___, are implementing those phases slightly differently, but at the conceptual level the process remains similar to the two steps described above.

A crucially important thing about this approach is that the cycles are no longer leaked:

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

