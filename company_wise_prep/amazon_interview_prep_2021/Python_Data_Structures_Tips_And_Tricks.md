## SPECIAL DATA STRUCTURES IN PYTHON

This post provides an overview and examples of the special data structures in Python. In my experience, once you master these special data structures and obtain some experience, you should be able to solve 2.5 out of 4 Leetcode problems in every contest on average.

---

================================================
Disclaimer
================================================

This shall be published, exclusively, on Leetcode Discuss to enter the giveaway for Leetcode coins.
For classification purposes, this is a combination of a curated problem list and study material.

We assume that you use python3 (instead of python2).

---

#### Why did I compile this

**Resources on competitive programming on Python is limited**. Most of the competitive programmers write in C++ and Java, for their speed in execution. Moreover, examples in Python shown on GeeksForGeeks is transliterated from C++/Java, which ends up verbose and difficult to modify.

**Python has generally been considered the best introductory language** to programming. I feel that it is also the best introductory language to competitive programming. Beginner competitive programmers like me are interested in learning the logic. We also want to minimize the time to deal with the syntax and types.

This serves as a resource to bridge Python programmers into competitive programming.

Moreover, if you have been doing competitive programming in other languages, this can serve as a simple guide for you to familiarise yourself with Python.

As with many guides, this is not a complete guide to success from scratch.

* This is not a guide for getting started in Python. It assumes that you already know how to use the basic built-in Data Structures
  * String `st = "abcd"`
  * List `arr = [4,5,6,7,8,5]`
  * Dictionaries `d = {}`
* This is not an introduction to data structures and algorithms. It is best if you have a rough idea of the big-O notation. Otherwise, think of the big-O as the type of increase of space or time required by the computation. This understanding is useful to help you predict whether your algorithm can finish running in a specified time and space.
* This does not teach you how to handle the full recruitment process, but [Yangshun's](https://yangshun.github.io/tech-interview-handbook/) guide can give you a full overview.

Once you master the special data structures in Python, **you should be able to solve 2.5 out of 4 Leetcode problems every contest** on average, placing you in the top 1000s.

================================================

#### `list` and its alternatives

================================================

[Documentation](https://docs.python.org/3/tutorial/datastructures.html) The following are the basic operations on a python list.

* Reading from a list given an index (aka random access) arr[4]
* Appending to the list from right arr.append(1)
* Popping from the list from right arr.pop()

The above operations take `O(1)` time. You can modify a list in other ways as follows

* Popping from the list from left `del arr[0]`
* Reversing an array `arr = arr[::-1]`
* Appending to the list from left `arr.insert(0, x)`

The operations take `O(n)` time to run. If you want it faster, you have to use `deque`, which will be explained.

---

##### In-built functions and concepts

The following are the best practices to make the use of lists concise.

---

`enumerate`

[Documentation](https://docs.python.org/3/library/functions.html#enumerate) You want to track both the index and element when iterating through the array.

```python
arr = [3,1,4,1,5,9,2,6,5,3,5,9]
for i in range(len(arr)):
  arr[i] = arr[i] + i

arr # [3, 2, 6, 4, 9, 14, 8, 13, 13, 12, 15, 20]
```

You can use `enumerate` instead

```python
arr = [3,1,4,1,5,9,2,6,5,3,5,9]
for i,ar in enumerate(arr):
  arr[i] = ar + i

arr # [3, 2, 6, 4, 9, 14, 8, 13, 13, 12, 15, 20]
```

The benefit is to avoid the use of awkward `range(len())`. Moreover, without the need to use `arr[i]` in the loop you can reduce the nesting and make the code clearer.

---

##### List comprehensions`

---

[Documentation](https://docs.python.org/3/library/functions.html#enumerate) You can iterate through a list with one line of code.

For example, you want to convert a list of integers to a list of strings.

```python
arr = [3,1,4,1,5,9,2]
for i,ar in enumerate(arr):
  arr[i] = str(ar)

arr # ['3', '1', '4', '1', '5', '9', '2']
```

You can do this in one line with a list comprehension.

```python
arr = [3,1,4,1,5,9,2]
arr2 = [str(ar) for ar in arr]
```

You can imbue logic in list comprehensions.

```python
arr3 = [str(ar) for ar in arr if ar > 5]
arr4 = [str(ar) if ar > 5 else "x" for ar in arr]
```

---

##### 2D list

---

Due to the way Python is structured, beginners usually make the mistake unknowingly.

```python
arr = [0]*5
arr[1] = 9
arr # [0, 9, 0, 0, 0] ok

arr2 = [[0]]*5
arr2[1][0] = 9
arr2 # [[9], [9], [9], [9], [9]]
```

This is how you should set up a 2D list. This behavior has been discussed on stackoverflow.

```python
arr3 = [[0 for _ in range(1)] for _ in range(5)]
arr3[1][0] = 9
arr3 # [[0], [9], [0], [0], [0]]
```

For matrix operations, you may need to use the numpy package. When the matrix is defined to be a number (i.e. a numpy float), numeric operations on the matrix can be faster. However, this tutorial will not cover the use of packages from numpy.

---

`deque` object

---

[Documentation](https://docs.python.org/3/library/collections.html#collections.deque) You might want to append to both sides of a list. `deque` is a doubly-linked list.

> `deque` is a list-like container with fast appends and pops on either end.
>

```python
from collections import deque
de = deque(arr)
```

Popping and appending to the list on either side is now `O(1)`.

```python
de.append(1)
de.pop() # 1
de.appendleft(0)
de.popleft() # 0
```

Reading from the list (aka random access) `de[3]` now takes `O(n)` time.

Examples

[https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

---

`bisect` functions

---

[Documentation](https://docs.python.org/3/library/bisect.html) You have a list you know is sorted. You are given a new number, and you want to find the first index which element is greater than or equal to the new number.

```python
arr = [1,1,2,3,4,5,5,5,5,9]
x = 5
```

One way is to iterate through the entire array.

```python
for index,ar in enumerate(arr):
  if ar >= x:
    print(index)
    break
```

Instead of "greater than or equal to" you want the first element that is "greater than".

```python
for index2,ar in enumerate(arr):
  if ar > x:
    print(index2)
    break
else:  # this is a for-else loop
  print(index2)
```

The other way is to implement a binary search, and I will leave this as an exercise for the reader.

Instead of implementing the binary search yourself, you can use the functions from `bisect`. However, please be prepared to implement a binary search from scratch, as it may be required for interview and custom problems.

```python
import bisect
index = bisect.bisect_left(arr, x)
index # 5
```

This is for the case when you want the first element "greater than" rather than "greater than or equal to".

```python
index2 = bisect.bisect_right(arr, x)
index2 # 9
```

Examples

Certain database questions simply require one to know the existence of bisect.

[https://leetcode.com/problems/heaters/](https://leetcode.com/problems/heaters/)

---

`heapq` object

---

[Documentation](https://docs.python.org/3/library/heapq.html) You want to track the smallest object in the list, and remove it when needed.

One way is to continually sort the list and remove the smallest element. Sorting takes `O(nlogn)`

```python
arr = [4,6,7,1]
new = [[1], [], [9,9], [5]]
for ne in new:
  arr.extend(ne)
  arr.sort()
  print(arr)
  del arr[0]
```

The other way is to identify the smallest element and remove it. This takes `O(n)` time for every operation.

However, there is this special data structure that allows the small value. You can find several interactive visualisation on the Internet.

```python
arr = [4,6,7,1]
import heapq
heapq.heapify(arr)
print(arr) # [1, 4, 7, 6]
```

You see that the array is somewhat sorted, but not really. From the documentation:

> Heaps are binary trees for which every parent node has a value less than or equal to any of its children. This implementation uses arrays for which `heap[k] <= heap[2*k+1]` and 
> 
> `heap[k] <= heap[2*k+2]` for all `k`, counting elements from zero. For the sake of comparison, non-existing elements are considered to be infinite. The interesting property of a heap 
>
> is that its smallest element is always the root, `heap[0]`

```python
heapq.heappush(arr,4) # push an element
popped = heapq.heappop(arr) # returns the smallest element
popped # 1
```

This is a minimum heap. For max-heap, the recommended solution is to multiply and input.

As heapq is used to maintain fast popping of the smallest element, the baseline method of iterating through the whole array for the for the smallest element will take `O(n)` time.

In API-based questions, you may be task to get the smallest element repeatedly and doing it in `O(n)` may be too slow. With heapq, the pushing and popping of elements take `O(logn)` time. Note that creating a heap takes O(nlogn) time.

Examples

[https://leetcode.com/problems/kth-largest-element-in-a-stream/](https://leetcode.com/problems/kth-largest-element-in-a-stream/)

[https://leetcode.com/problems/merge-k-sorted-lists/](https://leetcode.com/problems/merge-k-sorted-lists/)

[https://leetcode.com/problems/k-closest-points-to-origin/](https://leetcode.com/problems/k-closest-points-to-origin/)

[https://leetcode.com/problems/most-profit-assigning-work/](https://leetcode.com/problems/most-profit-assigning-work/)

================================================

#### `dict` and its subclasses

================================================

[Documentation](https://docs.python.org/3/tutorial/datastructures.html) A dictionary is a hashmap of key-value pairs.

* Creating a dictionary `d={}`
* Populating a key with a value `d["foo"] = "bar"`
* To check if a dictionary has a key `foo in d`
* Deleting a key as well as its value `del d["foo"]`

The above operations take `O(1)` time.

You can obtain the keys by converting the dictionary into a list.

```python
d = {"foo":"bar", "bar":"baz"}
list(d)
sorted(d)
```

If you want the values, you have to iterate through its keys.

```python
[(k,v) for k,v in d.items()]
```

I hope you understand how to use the dictionary.

Some procedures using a dictionary can be implemented with less code. Concise code is more understandable and less prone to mistakes.

---

##### `defaultdict`

[Documentation](https://docs.python.org/3/library/collections.html#collections.defaultdict) For example, you have a list of directed edges you want to populate this into a dictionary.

```python
edges = [[1,2], [2,1], [1,3]]
d = {}
for start, end in edges:
  if start in d:
    d[start].append(end)
  else: 
    d[start] = [end]

d # {1: [2, 3], 2: [1]}
```
You may use `defaultdict` to skip initializing the value for every key.

```python
from collections import defaultdict
d = defaultdict(list)
for start, end in edges:
  d[start].append(end)
  
d # defaultdict(<class 'list'>, {1: [2, 3], 2: [1]})
```

This makes your code neater. However, it assumes that every value is a list. This is useful in helping to construct graphs from a list of edges. Graphs are usually necessary to solve problems involving paths. This is an example.

[Problem](https://docs.python.org/3/library/collections.html#collections.defaultdict) | [My Submission](https://leetcode.com/submissions/detail/267300013/)

---

##### `Counter`

[Documentation](https://leetcode.com/submissions/detail/267300013/) For example, you want to count the number of each element in a list.

```python
digits = [3,1,4,1,5,9,2,6,5,3,5,9]
d = defaultdict(int)
for digit in digits:
  d[digit] += 1
  
d # defaultdict(<class 'int'>, {3: 2, 1: 2, 4: 1, 5: 3, 9: 2, 2: 1, 6: 1})
```

There is a function `Counter` which does the work in one line after importing.

```python
from collections import Counter
d = Counter(digits)

d # Counter({5: 3, 3: 2, 1: 2, 9: 2, 4: 1, 2: 1, 6: 1})
```

Examples

I used Counter to count the occurrence of every element. Then you extract consecutive elements starting from the smallest until every element is extracted, or it is not possible to extract.

[Problem](https://leetcode.com/submissions/detail/267300013/) | [My submission](https://leetcode.com/contest/weekly-contest-168/submissions/detail/287649917/)

---

##### `set`

---

Documentation Sometimes you want a dictionary without its values. We present the python `set`.

You can create a set from a list, or define it in non-empty curly braces.

```python
set1 = set(["one-only", "one-two"])
set2 = {"two-only", "one-two"}
```

Like a list, you can iterate through a set and return its length

```python
print(len(set1))
for x in set1: print(x)
```

You can check whether an element is in a set

```python
"one-two" in set1
```

The use of a set can help you filter the unique items of a list

```python
arr = [1,1,2,3,3]
arr = list(set(arr))
```

You can add elements to a set (or multiple elements with update)

```python
set1.add("orange")
set1.update(["apple", "orange"])
```

You can delete an item from a set.

```python
set1.remove("apple")
```
You can find the union of two sets. In the following, the elements in set3 is made up of elements that appear either in `set1` or `set2` or both.

```python
set3 = set1.union(set2)
set3 = set1 | set2
set3 # {'one-only', 'two-only', 'one-two', 'orange'}
```

You can find the intersection of two sets. In the following, the elements in set3 is made up of elements that appear either in both `set1` and `set2`.

```python
set3 = set1.intersection(set2)
set3 = set1 & set2
set3 # {'one-two'}
```

You can take the difference of one set from another.

```python
set3 = set1.difference(set2)
set3 = set1 - set2
# {'one-only', 'orange'}
```

You can take the union and exclude the intersection of a pair of sets.

```python
set3 = set1.symmetric_difference(set2)
set3 = set1 ^ set2
# {'two-only', 'one-only', 'orange'}
```

---

Examples

---

I used update and intersection to keep track of the keys that being used. This may not be the most efficient solution, but considering the size of the inputs it should be sufficient.

[Problem](https://leetcode.com/contest/weekly-contest-168/problems/maximum-candies-you-can-get-from-boxes/) | [My submission](https://leetcode.com/contest/weekly-contest-168/submissions/detail/287658184/)

================================================

Contest examples
================================================

Explaination of column headers

* Points - number of points on the problem
* Concept - what concepts covered. (Basic) suggests that understanding the problem and the basic data structures is sufficient to solve the problem.

| #     | Title	               | url                                                 | Time                  | Space        | Difficulty | Tag	                               | Note                   |
| ----- | -------------------- | --------------------------------------------------- | --------------------- | ------------ | ---------- | ----------------------------------- | ---------------------- |


| Contest / Problem	| Points | Concepts |
| ----------------- | ------ | -------- |
| **Weekly Contest 168** | | |
| [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/contest/weekly-contest-168/problems/divide-array-in-sets-of-k-consecutive-numbers)	| 4 | Counter |
| [Maximum Number of Occurrences of a Substring](https://leetcode.com/contest/weekly-contest-168/problems/maximum-number-of-occurrences-of-a-substring) | 6 | Counter, set |
| [Maximum Candies You Can Get from Boxes](https://leetcode.com/contest/weekly-contest-168/problems/maximum-candies-you-can-get-from-boxes) | 7 | set |
| **Weekly Contest 163** | | |
| [Shift 2D Grid](https://leetcode.com/accounts/login/?next=/contest/weekly-contest-163/problems/shift-2d-grid/) |3 |2D list |
| **Weekly Contest 161** | | |
| [Minimum Swaps to Make Strings Equal](https://leetcode.com/contest/weekly-contest-161/problems/minimum-swaps-to-make-strings-equal) | 4 |defaultdict |
| **Weekly Contest 160** | | |
| [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/contest/weekly-contest-160/problems/maximum-length-of-a-concatenated-string-with-unique-characters) | 5 |set |

================================================

**References**

================================================

I have referred to these [coding notes](https://github.com/methylDragon/coding-notes/blob/master/Python%203/05%20Python%203%20-%20Data%20Structures.md) complied by my overachieving classmate.
For this writeup I added examples on how the same (but less neat or efficient) could be done with basic data structures in Python, and the relevant leetcode contest questions that this has helped.

As mentioned in the introduction, [Yangshun](https://yangshun.github.io/tech-interview-handbook/) provides a comprehensive guide for the full technical interview process.

================================================

**Conclusion**

================================================

I hope this can help you solve more than half of the problems in every contest, from someone who has just got acquainted with Python.

Most of my practice on Leetcode is limited to contest, so I may not be aware of better examples. I think this article could be improved with more appropriate Leetcode problems that better illustrates the concept behind the keyword I am introducing.