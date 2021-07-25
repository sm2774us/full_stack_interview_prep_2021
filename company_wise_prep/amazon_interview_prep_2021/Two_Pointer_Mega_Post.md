# I. Two-pointer technique:

> > Array is one of the fundamental blocks in algorithms. 
> > Since a string is just formed by an array of characters, they are similar. 
> > Most interview questions fall into this category.
> > Here we will discuss some common techniques to help you
> > solve these problems.

These kind of problems usually involve two pointers:

> One slow-runner and the other fast-runner.

A classic example is to remove duplicates from a sorted array,
which is available for you to practice here - [LeetCode - Problem 26 - Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/).

> One pointer starts from the beginning while the other pointer starts from the end.

They move toward each other until they both meet. Let's take a look at a classic problem: Reverse the characters in a string:

First let's assume we already have a `swap` function as defined below:

```python
from typing import List

class Solution:
    
    def swap(self, s: List[str], i: int, j: int) -> None:
        s[i], s[j] = s[j], s[i]
```

The idea is to swap the first character with the end,
advance to the next character and swapping repeatedly until
it reaches the middle position. We calculate the middle position
as ![equation](http://latex.codecogs.com/svg.latex?%5Cleft%20%5Clfloor%20%5Cfrac%7Bn%7D%7B2%7D%20%5Cright%20%5Crfloor).
You should verify that the middle position works for both odd and even
size of array.

```python
from typing import List

class Solution:
    
    def swap(self, s: List[str], i: int, j: int) -> None:
        s[i], s[j] = s[j], s[i]

    def reverseString(self, s: List[str]) -> None:
        n = len(s)
        for i in range(0,(n//2)):
            self.swap(s,i,n-i-1)
```

Or we can solve the problem using the two-pointer technique:

```python
from typing import List

class Solution:
    
    def swap(self, s: List[str], i: int, j: int) -> None:
        s[i], s[j] = s[j], s[i]

    def reverseString(self, s: List[str]) -> None:
        i, j = 0, len(s)-1
        while i < j:
            self.swap(s, i, j)
            i += 1
            j -= 1
```

Which approach do you think is less likely to introduce bugs?

### **Classic problems that can be solved using the two-pointer technique:**

1. [LeetCode - Problem 1 - Two Sum](https://leetcode.com/problems/two-sum/); [Solution](001_LeetCode_P_0001_Two_Sum_Solution.py)
1. [LeetCode - Problem 167 - Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/); [Solution](003_LeetCode_P_0167_Two_Sum_Part_2_Input_Array_is_Sorted_Solution.py)
1. [LeetCode - Problem 3 - Longest Substring Without Repeated Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [Solution](006_LeetCode_P_0003_Longest_Substring_Without_Repeating_Characters_Solution.py)
1. [LeetCode - Problem 11 - Container With Most Water](https://leetcode.com/problems/container-with-most-water/); [Solution](007_LeetCode_P_0011_Container_With_Most_Water_Solution.py)
1. [LeetCode - Problem 15 - 3Sum](https://leetcode.com/problems/3sum/); [Solution](008_LeetCode_P_0015_Three_Sum_Solution.py)
1. [LeetCode - Problem 16 - 3Sum Closest](https://leetcode.com/problems/3sum-closest/);  [Solution](009_LeetCode_P_0016_Three_Sum_Closest_Solution.py)
1. [LeetCode - Problem 18 - 4Sum](https://leetcode.com/problems/4sum/); [Solution](012_LeetCode_P_0018_Four_Sum_Solution.py)
1. [LeetCode - Problem 19 - Remove Nth Node From End of List]
1. [LeetCode - Problem 26 - Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/).
1. [LeetCode - Problem 27 - Remove Element]
1. [LeetCode - Problem 28 - Implement `strStr()`]
1. [LeetCode - Problem 30 - Substring with Concatenation of All Words]
1. [LeetCode - Problem 42 - Trapping Rain Water]
1. [LeetCode - Problem 61 - Rotate List]
1. [LeetCode - Problem 75 - Sort Colors]
1. [LeetCode - Problem 76 - Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)   
1. [LeetCode - Problem 80 - Remove Duplicates from Sorted Array II]
1. [LeetCode - Problem 86 - Partition List]
1. [LeetCode - Problem 88 - Merge Sorted Array] 
1. [LeetCode - Problem 125 - Valid Palindrome](https://leetcode.com/problems/valid-palindrome/).
1. [LeetCode - Problem 141 - Linked List Cycle]
1. [LeetCode - Problem 159 - Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
1. [LeetCode - Problem 167 - Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/).
1. [LeetCode - Problem 186 - Reverse Words in a String II](https://leetcode.com/problems/reverse-words-in-a-string-ii/).
1. [LeetCode - Problem 189 - Rotate Array](https://leetcode.com/problems/rotate-array/).
1. [LeetCode - Problem 209 - Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/); [Solution](005_LeetCode_P_0209_Minimum_Size_Subarray_Sum_Solution.py)
1. [LeetCode - Problem 234 - Palindrom Linked List]
1. [LeetCode - Problem 238 - Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/).
1. [LeetCode - Problem 259 - 3Sum Smaller]
1. [LeetCode - Problem 283 - Move Zeroes]
1. [LeetCode - Problem 287 - Find the Duplicate Number]
1. [LeetCode - Problem 340 - Longest Substring with At Most K Distinct Characters]
1. [LeetCode - Problem 344 - Reverse String]
1. [LeetCode - Problem 345 - Reverse Vowels of a String]
1. [LeetCode - Problem 349 - Intersection of Two Arrays]
1. [LeetCode - Problem 350 - Intersection of Two Arrays II]
1. [LeetCode - Problem 360 - Sort Transformed Array]
1. [LeetCode - Problem 424 - Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
1. [LeetCode - Problem 457 - Circular Array Loop]
1. [LeetCode - Problem 487 - Maximum Consecutive Ones II]
1. [LeetCode - Problem 524 - Longest Word in Dictionary through Deleting]
1. [LeetCode - Problem 532 - K-diff Pairs in an Array]
1. [LeetCode - Problem 567 - Permutation in String]
1. [LeetCode - Problem 611 - Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/); [Solution](Two_Pointers_Approach/014_LeetCode_P_0611_Valid_Triangle_Number_Solution.py)
1. [LeetCode - Problem 632 - Smallest Range Covering Elements from K Lists]
1. [LeetCode - Problem 713 - Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)
1. [LeetCode - Problem 763 - Partition Labels]
1. [LeetCode - Problem 826 - Most Profit Assigning Work]
1. [LeetCode - Problem 828 - Count Unique Characters of All Substrings of a Given String]
1. [LeetCode - Problem 838 - Push Dominoes]
1. [LeetCode - Problem 844 - Backspace String Compare]
1. [LeetCode - Problem 845 - Longest Mountain in Array]
1. [LeetCode - Problem 881 - Boats to Save People]
1. [LeetCode - Problem 904 - Fruit into Baskets]
1. [LeetCode - Problem 923 - 3Sum with Multiplicity]
1. [LeetCode - Problem 925 - Long Pressed Name]
1. [LeetCode - Problem 930 - Binary Subarrays With Sum]
1. [LeetCode - Problem 948 - Bag of Tokens]
1. [LeetCode - Problem 977 - Squares of a Sorted Array]
1. [LeetCode - Problem 986 - Interval List Intersections]
1. [LeetCode - Problem 992 - Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
1. [LeetCode - Problem 1004 - Max Consecutive Ones III]
1. [LeetCode - Problem 1099 - Two Sum Less Than K]
1. [LeetCode - Problem 1208 - Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/)
1. [LeetCode - Problem 1213 - Intersection of Three Sorted Arrays]
1. [LeetCode - Problem 1093 - Statistics from a Large Sample]
1. [LeetCode - Problem 1234 - Replace the Substring for Balanced String]
1. [LeetCode - Problem 1248 - Count Number of Nice Subarrays]
1. [LeetCode - Problem 1570 - Dot Product of Two Sparse Vectors]
1. [LeetCode - Problem 1610 - Maximum Number of Visible Points]
1. [LeetCode - Problem 1616 - Split Two Strings to Make Palindrome]
1. [LeetCode - Problem 1658 - Minimum Operations to Reduce X to Zero]
1. [LeetCode - Problem 1687 - Delivering Boxes from Storage to Ports]
1. [LeetCode - Problem 1695 - Maximum Erasure Value]
-------------------------------------------------------------------------------------------

# Solution Explanation of popular Sum-Based Problems on LeetCode

| Questions | Solution | Difficulty | Pattern | Companies |
| --------- | -------- | ---------- | ------- | --------- |
| [LeetCode - Problem 1 - Two Sum](https://leetcode.com/problems/two-sum/) | [Solution](./Two_Pointers_Approach/001_LeetCode_P_0001_Two_Sum_Solution.py) | ![Easy_Icon](../assets/difficulty/easy_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![hash_table](../assets/pattern/hash_table.PNG)![two_pointers](../assets/pattern/two_pointers.PNG) | ![Two_Sum_Companies_Asked](../assets/companies/leetcode_p_0001_two_sum_companies_asked.PNG) |
| [LeetCode - Problem 167 - Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | [Solution](./Two_Pointers_Approach/003_LeetCode_P_0167_Two_Sum_Part_2_Input_Array_is_Sorted_Solution.py) | ![Easy_Icon](../assets/difficulty/easy_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![two_pointers](../assets/pattern/two_pointers.PNG)![binary_search](../assets/pattern/binary_search.PNG) | ![Two_Sum_II_Companies_Asked](../assets/companies/leetcode_p_0001_two_sum_companies_asked.PNG) |
| [LeetCode - Problem 15 - 3Sum](https://leetcode.com/problems/3sum/) | [Solution](./Two_Pointers_Approach/008_LeetCode_P_0015_Three_Sum_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![two_pointers](../assets/pattern/two_pointers.PNG) | ![3Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![3Sum_Companies_Asked](../assets/companies/amazon.PNG)![3Sum_Companies_Asked](../assets/companies/facebook.PNG)![3Sum_Companies_Asked](../assets/companies/linked_in.PNG)![3Sum_Companies_Asked](../assets/companies/microsoft.PNG)![3Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 16 - 3Sum Closest](https://leetcode.com/problems/3sum-closest/) | [Solution](./Two_Pointers_Approach/009_LeetCode_P_0016_Three_Sum_Closest_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![two_pointers](../assets/pattern/two_pointers.PNG) | ![3Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![3Sum_Companies_Asked](../assets/companies/amazon.PNG)![3Sum_Companies_Asked](../assets/companies/facebook.PNG)![3Sum_Companies_Asked](../assets/companies/linked_in.PNG)![3Sum_Companies_Asked](../assets/companies/microsoft.PNG)![3Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 259 - 3Sum Smaller](https://leetcode.com/problems/3sum-smaller/) | [Solution](./Two_Pointers_Approach/010_LeetCode_P_0259_Three_Sum_Smaller_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![two_pointers](../assets/pattern/two_pointers.PNG) | ![3Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![3Sum_Companies_Asked](../assets/companies/amazon.PNG)![3Sum_Companies_Asked](../assets/companies/facebook.PNG)![3Sum_Companies_Asked](../assets/companies/linked_in.PNG)![3Sum_Companies_Asked](../assets/companies/microsoft.PNG)![3Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 923 - 3Sum With Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/) | [Solution](./Two_Pointers_Approach/011_LeetCode_P_0923_Three_Sum_With_Multiplicity_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![two_pointers](../assets/pattern/two_pointers.PNG) | ![3Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![3Sum_Companies_Asked](../assets/companies/amazon.PNG)![3Sum_Companies_Asked](../assets/companies/facebook.PNG)![3Sum_Companies_Asked](../assets/companies/linked_in.PNG)![3Sum_Companies_Asked](../assets/companies/microsoft.PNG)![3Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 18 - 4Sum](https://leetcode.com/problems/4sum/) | [Solution](Two_Pointers_Approach/012_LeetCode_P_0018_Four_Sum_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![hash_table](../assets/pattern/hash_table.PNG)![two_pointers](../assets/pattern/two_pointers.PNG) | ![4Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![4Sum_Companies_Asked](../assets/companies/amazon.PNG)![4Sum_Companies_Asked](../assets/companies/facebook.PNG)![4Sum_Companies_Asked](../assets/companies/linked_in.PNG)![4Sum_Companies_Asked](../assets/companies/microsoft.PNG)![4Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 454 - 4Sum II](https://leetcode.com/problems/4sum-ii/) | [Solution](Two_Pointers_Approach/013_LeetCode_P_0454_Four_Sum_Part_2_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![hash_table](../assets/pattern/hash_table.PNG) | ![4Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![4Sum_Companies_Asked](../assets/companies/amazon.PNG)![4Sum_Companies_Asked](../assets/companies/facebook.PNG)![4Sum_Companies_Asked](../assets/companies/linked_in.PNG)![4Sum_Companies_Asked](../assets/companies/microsoft.PNG)![4Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 40 - Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | [Solution](Backtracking_Approach/002_LeetCode_P_0040_Combination_Sum_Part_2_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![DFS](../assets/pattern/DFS.PNG)![backtracking](../assets/pattern/backtracking.PNG) | ![Combination_Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![Combination_Sum_Companies_Asked](../assets/companies/amazon.PNG)![Combination_Sum_Companies_Asked](../assets/companies/facebook.PNG)![Combination_Sum_Companies_Asked](../assets/companies/linked_in.PNG)![Combination_Sum_Companies_Asked](../assets/companies/microsoft.PNG)![Combination_Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 373 - Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) | [Solution](Heap/001_LeetCode_P_0373_Find_K_Pairs_with_Smallest_Sums_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![heap](../assets/pattern/heap.PNG) | ![Find_K_Pairs_Companies_Asked](../assets/companies/air_bnb.PNG)![Find_K_Pairs_Companies_Asked](../assets/companies/amazon.PNG)![Find_K_Pairs_Companies_Asked](../assets/companies/facebook.PNG)![Find_K_Pairs_Companies_Asked](../assets/companies/linked_in.PNG)![Find_K_Pairs_Companies_Asked](../assets/companies/microsoft.PNG)![Find_K_Pairs_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 494 - Target Sum](https://leetcode.com/problems/target-sum/) | [Solution](Dynamic_Programming_Approach/001_LeetCode_P_0494_Target_Sum_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![dynamic_programming](../assets/pattern/dynamic_programming.PNG)![DFS](../assets/pattern/DFS.PNG) | ![4Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![4Sum_Companies_Asked](../assets/companies/amazon.PNG)![4Sum_Companies_Asked](../assets/companies/facebook.PNG)![4Sum_Companies_Asked](../assets/companies/linked_in.PNG)![4Sum_Companies_Asked](../assets/companies/microsoft.PNG)![4Sum_Companies_Asked](../assets/companies/oracle.PNG) |
| [LeetCode - Problem 611 - Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) | [Solution](Two_Pointers_Approach/013_LeetCode_P_0454_Four_Sum_Part_2_Solution.py) | ![Medium_Icon](../assets/difficulty/medium_problem_type_icon.PNG) | ![array](../assets/pattern/array.PNG)![hash_table](../assets/pattern/hash_table.PNG)![binary_search](../assets/pattern/binary_search.PNG) | ![4Sum_Companies_Asked](../assets/companies/air_bnb.PNG)![4Sum_Companies_Asked](../assets/companies/amazon.PNG)![4Sum_Companies_Asked](../assets/companies/facebook.PNG)![4Sum_Companies_Asked](../assets/companies/linked_in.PNG)![4Sum_Companies_Asked](../assets/companies/microsoft.PNG)![4Sum_Companies_Asked](../assets/companies/oracle.PNG) |

If you're a newbie and sometimes have a hard time understanding the logic. 
Don't worry, you'll catch up after a month of doing LeetCode on a daily basis. 
Try to do it, even one example per day. It'd help. 
I've compiled a bunch on `sum` problems here, go ahead and check it out. 
Also, I think focusing on a subject and doing 3-4 problems would help to get the idea behind solution 
since they mostly follow the same logic. Of course there are other ways to solve each problems, 
but I try to be as uniform as possible. 
Good luck.

In general, `sum` problems can be categorized into two categories: 
1. There is any array and you add some numbers to get to (or close to) a `target`, or, 
1. You need to return indices of numbers that sum up to a (or close to) a `target` value. 

Note that when the problem is looking for indices, `sort`ing the array is probably NOT a good idea.

**[Two Sum:](https://leetcode.com/problems/two-sum/)**

This is the second type of the problems where we're looking for indices, so sorting is not necessary. 
What you'd want to do is to go over the array, and try to find two integers that sum up to a `target` value. 
Most of the times, in such a problem, using dictionary (hashtable) helps. 
You try to keep track of you've observations in a dictionary and use it once you get to the results.

Note: Try to be comfortable to use `enumerate` as it's sometime out of comfort zone for newbies. 
`enumerate` comes handy in a lot of problems (I mean if you want to have cleaner code of course). 
If I had to choose three built-in functions/methods that I wasn't comfortable with at the start 
and have found them super helpful, I'd probably say `enumerate`, `zip` and `set`.

Solution: In this problem, you initialize a dictionary (`seen`). 
This dictionary will keep track of numbers (as `key`) and indices (as `value`). 
So, you go over your array (line `#1`) using `enumerate` that gives you both index and value of elements in an array. 
As an example, let's do `nums = [2,3,1]` and `target = 3`. Let's say you're at index `i = 0` and `value = 2`, ok? 
You need to find `value = 1` to finish the problem, meaning, `target - 2 = 1`. 1 here is the `remaining`. 
Since `remaining + value = target`, you're done once you found it, right? 
So when going through the array, you calculate the `remaining` and check to see whether `remaining` 
is in the `seen` dictionary (line `#3`). If it is, you're done! You're remaining from `seen` and the current number  
would give you the output (line `#4`). Otherwise, you add your current number to the dictionary (line `#5`) 
since it's going to be a `remaining` for (probably) a number you'll see in the future assuming that 
there is at least one instance of answer.

```python
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if not nums or len(nums) < 2:
            return []
        seen = {}
        for i, value in enumerate(nums): #1
            remaining = target - nums[i] #2
           
            if remaining in seen: #3
                #return [i, seen[remaining]]  #4 => This is allowable as well and is a valid solution
                return [seen[remaining], i]  #4
            else:
                seen[value] = i  #5
```

**Complexity Analysis:**
* **Time complexity :** `O(N)`.
  
    We traverse the list containing n elements once. Each look up in a hash table costs O(1) time.
    So `n` insertions and `n` lookups in a hash table takes expected time of `O(N)`.
  
* **Space complexity :** `O(N)`.
  
    The extra space required depends on the number of items stored in the dictionary, which stores at most n elements.

**Complexity Analysis for all possible Solutions:**

| **Approach** | **Time Complexity** | **Space Complexity** |
| ------------ | ------------------- | -------------------- |
| Brute Force | `O(N^2)` | `O(1)` |
| Binary Search | `O(N*log(N))`<br><br>`O(N*log(N))` for sort + `O(N)` for lookup = `O(N*log(N))` | `O(N)`<br>for storing sorted array and  indexes of the numbers in initial array |
| Two Pointers | `O(N*log(N))`<br><br>`O(N*log(N))` for sort + `O(N)` for lookup = `O(N*log(N))` | `O(N)`<br>for storing sorted array and  indexes of the numbers in initial array |
| **Using hashtable** | `O(N)` | `O(N)` |


**[Two Sum II:](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)**

For this, you can do exactly as the previous. 
The only change I made below was to change the order of line `#4`. 
In the previous example, the order didn't matter. 
But, here the problem asks for ascending order and since the values/indices in `seen` 
has always lower indices than your current number, it should come first. 
Also, note that the problem says it's not zero based, meaning that indices don't start from zero, 
that's why I added 1 to both of them.

```python
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if not nums or len(nums) < 2:
            return []
        seen = {}
        for i, value in enumerate(nums): 
            remaining = target - nums[i] 
           
            if remaining in seen: 
                return [seen[remaining]+1, i+1]  #4
            else:
                seen[value] = i
```

Another approach to solve this problem (probably what Leetcode is looking for) is to treat it as 
first category of problems. Since the array is already sorted, this works. You see the following approach 
in a lot of problems. What you want to do is to have two pointer (if it was 3sum, you'd need three pointers 
as you'll see in the future examples). One pointer move from left and one from right. 
Let's say your `nums = [1,3,6,9]` and your `target = 10`. Now, `left` points to 1 at first, 
and `right` points to 9. 

There are three possibilities => If you sum numbers that `left` and `right` are pointing at, you get `temp_sum` (line `#1`). 
1. If `temp_sum` is your `target`, you'r done! You return it (line `#9`).
1. If the `temp_sum` is more than your `target`, it means that `right` is pointing to a very large value (line `#5`) 
   and you need to bring it a little bit to the left to a smaller (`right` maybe equal) value (line `#6`) 
   by adding one to the index.
1. If the `temp_sum` is less than your `target` (line `#7`), then you need to move your left to a little 
   bit larger value by adding one to the index (line `#9`).

This way, you try to narrow down the range in which you're looking at and will eventually find a couple of numbers 
that sum to `target`, then, you'll return this in line `#9`. 
In this problem, since it says there is only one solution, nothing extra is necessary. 
However, when a problem asks to return all combinations that sum to `target`, you can't simply 
return the first instance and you need to collect all the possibilities and return the list altogether 
(you'll see something like this in the next example).

```python
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if not nums or len(nums) < 2:
            return []
     
        for left in range(len(nums)-1): #1
            right = len(nums) - 1 #2
            while left < right: #3
                temp_sum = nums[left] + nums[right] #4
                if temp_sum > target:  #5
                    right -= 1 #6
                elif temp_sum < target: #7
                    left +=1 #8
                else:
                    return [left+1, right+1] #9
```

**Complexity Analysis:**
* **Time complexity :** `O(N)`.
  
    We traverse the list containing n elements once.

* **Space complexity :** `O(1)`.
  
    Constant space. The solution uses only `O(1)` space since no auxiliary structures are created.

**Complexity Analysis for all possible Solutions:**

| **Approach** | **Time Complexity** | **Space Complexity** |
| ------------ | ------------------- | -------------------- |
| Brute Force | `O(N^2)` | `O(1)` |
| Binary Search | `O(N*log(N))`<br><br>`O(N*log(N))` for sort + `O(N)` for lookup = `O(N*log(N))` | `O(1)` |
| Using hashtable | `O(N)` | `O(N)` |
| **Two Pointers** | `O(N)` | `O(1)` |

Why does **Two Pointers Approach** beat the **Hash Table Approach** ?
* The time of computing hash value is longer than the time of computing the sum of two numbers.
* And, besides, the iteration of the two pointer solution is from left and right, which is faster 
  than the hash table Solution, whose iteration is from a single edge.


**[3Sum:](https://leetcode.com/problems/3sum/)**

This is similar to the previous example except that it's looking for three numbers. 
There are some minor differences in the problem statement: 
* It's looking for all combinations (not just one) of solutions returned as a list. 
* And second, it's looking for unique combination, repetition is not allowed.

Here, instead of looping (line `#1`) to `len(nums)-1`, we loop to `len(nums)-2` since we're looking for three numbers. 
Since we're returning values, `sort` would be a good idea. Otherwise, if the `nums` is not sorted, 
you cannot reduce `right` pointer or increase `left` pointer easily, makes sense?

So, first you `sort` the array and define `res = []` to collect your outputs. 
In line `#2`, we check whether two consecutive elements are equal or not because if they are, 
we don't want them (solutions need to be unique) and will skip to the next set of numbers. 
Also, there is an additional constraint in this line that `i > 0`. 
This is added to take care of cases like `nums = [1,1,1]` and `target = 3`. 
If we didn't have `i > 0`, then we'd skip the only correct solution and would return `[]` 
as our answer which is wrong (correct answer is `[[1,1,1]]`).

We define two additional pointers this time, `left = i + 1` and `right = len(nums) - 1`. 
For example, if `nums = [-2,-1,0,1,2]`, all the pointers in the case of `i=1` are looking at: 
`i` at `-1`, `left` at `0` and `right` at `2`. We then check `temp` variable similar to the previous example. 
There is only one change with respect to the previous example here between lines `#5` and `#10`. 
If we have the `temp = target`, we obviously add this set to the `res` in line `#5`, right? 
However, we're not done yet. 
For a fixed `i`, we still need to check and see whether 
there are other combinations by just changing `left` and `right` pointers. 
That's what we are doing in lines `#6, 7, 8`. 

1. If we still have the condition of `left < right` and `nums[left]` and the number to the right of it 
   are not the same, we move `left` one index to right (line `#6`). 
1. Similarly, if `nums[right]` and the number to left of it are not the same, we move 
   `right` one index to left. 

This way for a fixed `i`, we get rid of repetitive cases. For example, if `nums = [-3, 1, 1, 3, 5]` and `target = 3`, 
one we get the first `[-3,1,5]`, `left = 1`, but, `nums[2]` is also 1 which we don't want the `left` variable 
to look at it simply because it'd again return `[-3,1,5]`, right? 
So, we move `left` one index. Finally, if the repeating elements don't exist, lines `#6` to `#8` won't get activated. 
In this case we still need to move forward by adding `1` to `left` and extracting 1 from `right` (lines `#9, 10`).

```python
from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if not nums or len(nums) < 3:
            return []
        if len(nums) == 3:
            return [nums] if sum(nums) == 0 else []
        
        nums.sort()
        res = []

        for i in range(len(nums)-2): #1
            if i > 0 and nums[i] == nums[i-1]: #2
                continue
            left = i + 1 #3
            right = len(nums) - 1 #4
            
            while left < right:  
                temp = nums[i] + nums[left] + nums[right]
                                    
                if temp > 0:
                    right -= 1
                    
                elif temp < 0:
                    left += 1
                
                else:
                    res.append([nums[i], nums[left], nums[right]]) #5
                    while left < right and nums[left] == nums[left + 1]: #6
                        left += 1
                    while left < right and nums[right] == nums[right-1]:#7
                        right -= 1    #8
                
                    right -= 1 #9 
                    left += 1 #10
```

Another way to solve this problem is to change it into a two sum problem. 
Instead of finding `a+b+c = 0`, you can find `a+b = -c` where we want to 
find two numbers `a` and `b` that are equal to `-c`, right? 
This is similar to the first problem. Remember if you wanted to use the exact same as the first code, 
it'd return indices and not numbers. 
Also, we need to re-arrange this problem in a way that we have `nums` and `target`.

```python
from typing import List
from typing import Set

class Solution:

    def two_sum(self, idx: int, nums: List[int]) -> Set[int]:
        target = -nums[idx]
        left, right = 0, len(nums) - 1
        two_sum_set = set()
        while left < right:
            if left == idx or right == idx:
                if left == idx:
                    left += 1
                else:
                    right -= 1
                continue
            if nums[left] + nums[right] > target:
                right -= 1
            elif nums[left] + nums[right] < target:
                left += 1
            else:
                two_sum_set.add((nums[left], nums[right]))
                left += 1
                right -= 1
        return two_sum_set

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if not nums or len(nums) < 3:
            return []
        if len(nums) == 3:
            return [nums] if sum(nums) == 0 else []
        nums.sort()  # help to avoid duplicate triplets
        three_sum_set = set()  # using set to hold unique triplets
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:  # no need to check this case becasue results would be duplicates
                continue
            two_set_sum = self.two_sum(i, nums)
            for num1, num2 in two_set_sum:
                candidates = [nums[i], num1, num2]
                candidates.sort()
                three_sum_set.add((candidates[0], candidates[1], candidates[2]))
        return [[num1, num2, num3] for num1, num2, num3 in three_sum_set]
```

**Complexity Analysis:**

NOTE: ___Every higher SUM will have `O(N)` multiplied to the complexity of 2SUM.___

* **Time complexity :** `O(N^2)` [ Quadratic Time Complexity ].

* **Space complexity :** `O(N)`.

**[3sum Closest:](https://leetcode.com/problems/3sum-closest/)**

This is similar to the traditional 3sum problem except that you are trying to
determine the sum of three numbers that are closest to the `target`.

```python
from typing import List

class Solution:
    # Solution : Two-Pointers Technique
    #
    # TC: O(N^2)
    # SC: O(1)
    #
    # Follow-up Question: Can we do better than O(N^2) ?
    # -------------------
    # Answer            : No there isn't. Proof by contradiction:
    # -------------------
    #                     If we had sub-quadratic solution to this problem then we could solve all instances
    #                     of 3SUM problem with the same complexity (sub-quadratic),
    #                     but lower bound of 3SUM problem is O(N^2).
    #
    # NOTE:
    # -------------------
    # You can get some improvement by skipping the duplicate value while i++,
    # it certainly saves time as you don't need to enter the sub-iteration each time.
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums or len(nums) < 3: return
        
        nums.sort()
        result = nums[0] + nums[1] + nums[2]
        for i in range(len(nums) - 2):

            # update: ignore the duplicate numbers
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left, right = i + 1, len(nums) - 1
            while left < right:
                currentSum = nums[left] + nums[right] + nums[i]
                if currentSum == target:
                    return target
                if abs(currentSum - target) < abs(result - target):
                    result = currentSum
                if currentSum < target:
                    left += 1
                else:
                    right -= 1
        return result
```

Another way to solve this problem is to change it into a two sum problem, as shown below:

```python
from typing import List
from math import inf

class Solution:
    def twoSumClosest(self, nums: List[int], target: int) -> int:
        # assume nums is sorted
        n = len(nums)
        i, j = 0, n - 1
        res = inf
        while i < j:
            dis = nums[i] + nums[j] - target
            if abs(dis) < abs(res): res = dis

            if nums[i] + nums[j] == target: return target
            if nums[i] + nums[j] < target:
                i += 1
            else:
                j -= 1
        return res + target

    # Solution : Decomposition into 2Sum Problem
    #
    # TC: O(N^2)
    # SC: O(1)
    #
    # NOTE:
    # -------------------
    # You can get some improvement by skipping the duplicate value while i++,
    # it certainly saves time as you don't need to enter the sub-iteration each time.
    def threeSumClosest_decomposed_as_two_sum(self, nums: List[int], target: int) -> int:
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums or len(nums) < 3: return
        
        nums.sort()
        n = len(nums)
        res = inf
        for i in range(n - 2):

            # update: ignore the duplicate numbers
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            if nums[i] + nums[i + 1] + nums[i + 2] > target:
                rec = nums[i] + nums[i + 1] + nums[i + 2] - target
            elif nums[i] + nums[n - 2] + nums[n - 1] < target:
                rec = nums[i] + nums[n - 2] + nums[n - 1] - target
            else:
                rec = nums[i] + self.twoSumClosest(nums[i + 1:], target - nums[i]) - target
            if abs(rec) < abs(res): res = rec

        return res + target

```

**Complexity Analysis:**
* **Time complexity :** `O(N^2)` [ Quadratic Time Complexity ].

* **Space complexity :** `O(1)`.

**[3Sum Smaller:](https://leetcode.com/problems/3sum-smaller/)**

This is similar to the traditional 3sum problem except that you are trying to
determine the number of triplets where the sum of triplets (i.e., the three numbers) 
is less than the `target`.

```python
from typing import List

class Solution:
    # Solution : Two-Pointers Technique
    #
    # TC: O(N^2)
    # SC: O(1)
    #
    # NOTE:
    # -------------------
    # You can get some improvement by skipping the duplicate value while i++,
    # it certainly saves time as you don't need to enter the sub-iteration each time.
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums or len(nums) < 3: return 0

        nums.sort()
        result = 0
        for i, num in enumerate(nums):
            # update: ignore the duplicate numbers
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            # Now we need to find a combination of two numbers
            # that combined equal to less than (target-num) in the subscript greater than i
            t = target - num

            left, right = i + 1, len(nums) - 1
            while left < right:
                if nums[left] + nums[right] >= t:
                    right -= 1  # The sum is too big, try to reduce the sum
                elif nums[left] + nums[right] < t:
                    result += right - left  # In this case, left can form a set of answers with any number between [left + 1, right]
                    left += 1

        return result
```

Another way to solve this problem is to change it into a two sum problem, as shown below:

**Key observation:** The answer does not change if numbers are swapped. 
Thus we can sort the numbers first and use the two pointers method.

We count the number of such combinations for each `i`, so that we can reduce 
the problem to **2Sum smaller**. 
For **2Sum Smaller**, we initialize two indices, `left` and `right`, 
pointing to the ___first___ and ___last___ element respectively. 
* If `nums[left] + nums[right] >= target - nums[i]`, then there 
are no combinations with `i` and `k = right` (because `j = left` is the smallest), 
and we need to reduce `right`. 
* Else, there are `right - left` pair of `(j, k)` when `j = left`, 
and we can add them to the number of combinations and increment `left`.


```python
from typing import List

class Solution:
    def twoSumSmaller(self, nums: List[int], target: int) -> int:
        sums = 0
        left, right = 0, len(nums) - 1
        while left < right:
            if nums[left] + nums[right] < target:
                sums += right - left
                left += 1
            else:
                right -= 1

        return sums

    # Solution : Decomposition into 2Sum Problem
    #
    # TC: O(N^2)
    # SC: O(1)
    #
    # NOTE:
    # -------------------
    # You can get some improvement by skipping the duplicate value while i++,
    # it certainly saves time as you don't need to enter the sub-iteration each time.
    def threeSumSmaller_decomposed_as_two_sum(self, nums: List[int], target: int) -> int:
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums or len(nums) < 3: return 0

        sums = 0
        nums.sort()
        for i in range(len(nums) - 2):
            # update: ignore the duplicate numbers
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            sums += self.twoSumSmaller(nums[i + 1:], target - nums[i])

        return sums
```

**Complexity Analysis:**
* **Time complexity :** `O(N^2)` [ Quadratic Time Complexity ].

* **Space complexity :** `O(1)`.

**[3Sum With Multiplicity:](https://leetcode.com/problems/3sum-with-multiplicity/)**

* **Two pointers** technique:

We want to mimic the [LC 15 - 3Sum algorithm](https://leetcode.com/problems/3sum/) in some way, 
but here we need to consider all triplets together with their multiplicities, 
so simply using the solution there is incorrect. 

For example, consider `A = [1,2,2,2,2]`, `target = 5`. 
If we initialize three pointers `i = 0, j = 1, k = 4`. 
Since `A[0] + A[1] + A[4] == 5`, it is a valid triplet, we increment the counter by `1`. 
But, then, when we do `j += 1` and `k -= 1`, we missed a lot of the duplicate triplets, so, 
in total we only count `[1, 2, 2]` twice, whereas, in fact the multiplicity of the triplet: `[1,2,2]` 
should be `6`. Furthermore, sorting an array with multiplicities could be very inefficient, 
so, we can first create a counter of the array, and then sort the distinct elements of the array 
by sorting the keys of the counter.

To address the above problems, we propose the following algorithm:

1. We initialize the result `res = 0`, which counts the total number of valid triplets with multiplicity. 
   We create a counter `dic` of the array, which maps an element in the array to its number of appearances.
1. sort `dic` according its keys. Denote by `A` the list of sorted `key, val` pairs in `dic`.
1. Let `i` be a pointer iterating in `range(len(A))`, and for each iteration, initialize two pointers 
   `j = i, k = len(A)-1`. Now we search for pairs of indices `k >= j >= i`, such that 
   `A[j][0] + A[k][0] == target - A[i][0]`. 
   
   To do this, while `j <= k`, 
   * If `A[j][0]+A[k][0] < target - A[i][0]`, we increment `j` by `1`; 
   * Else if `A[j][0]+A[k][0] > target - A[i][0]`, we decrement `k` by `1`; 
   * Else when `A[j][0]+A[k][0] == target - A[i][0]`, we count the multiplicity of the triplet `(A[i][0], A[j][0], A[k][0])`, 
     and increment the total counter `res` by the multiplicity. Finally, after iterating over `i`, we return `res`.

The multiplicity of the triplet `(A[i][0], A[j][0], A[k][0])` depends on if there are duplicate numbers in the triplet. 
* If all elements are distinct, then the multiplicity is just `A[i][1]*A[j][1]*A[k][1]`, 
  E.g., if `A = [(1, 2), (2, 4), (3, 3)]` (corresponding to the input list `[1,1,2,2,2,2,3,3,3]`), then the multiplicity 
  of the triple `(1,2,3)` is `2*4*3 = 24`; 
* Else if there are two distinct elements in the triplet, assume `A[j][0] == A[k][0]`, then the multiplicity is 
  `(A[j][1]*(A[j][1]-1) // 2) * A[i][1]`, 
  E.g., consider the same `A = [(1,2), (2,4), (3,3)]` as in the previous case, the multiplicity of the triple `(1,2,2)` 
  is `(4*3) // 2 * 2 = 12`, because the number of pairs of `(2,2)` that one can get in 
  `[2,2,2,2]` is `4` choose `2 = 4*3 // 2 = 6`; 
* Else if all three numbers in the triple are equal, i.e., `A[i][0] == A[j][0] and A[j][0] == A[k][0]`, 
  then the multiplicity is `A[i][1]*(A[i][1]-1)*(A[i][1]-2) // 6`, 
  E.g., consider the same `A = [(1,2), (2,4), (3,3)]` as in the previous case, the multiplicity of the triple `(2,2,2)` 
  is `4` choose `3 = (4*3*2) // 6 = 4`.

```python
from typing import List
import collections

class Solution:
    # Solution : Two-Pointers Technique
    #
    # TC: O(N + M^2)
    # SC: O(M)
    #
    # where: `n` is the length of the input array.
    #        `m` is the number of distinct elements in the input array.
    def threeSumMulti(self, A: List[int], target: int) -> int:
        """
        :type A: List[int]
        :type target: int
        :rtype: int
        """
        bound = 1000000007
        dic = collections.Counter(A)
        A = sorted(dic.items(), key = lambda x: x[0])
        res = 0
        for i in range(len(A)):
            j = i
            k = len(A)-1
            new_target = target - A[i][0]
            while j <= k:
                if A[j][0]+A[k][0] < new_target:
                    j += 1
                elif A[j][0]+A[k][0] > new_target:
                    k -= 1
                else:
                    if A[i][0] == A[k][0]:
                        res = (res + A[i][1]*(A[i][1]-1)*(A[i][1]-2) // 6) % bound
                    elif A[i][0] == A[j][0]:
                        res = (res + A[k][1]*A[i][1]*(A[i][1]-1)//2) % bound
                    elif A[j][0] == A[k][0]:
                        res = (res + A[i][1]*A[j][1]*(A[j][1]-1)//2) % bound
                    else:
                        res = (res + A[i][1]*A[j][1]*A[k][1]) % bound
                    j += 1
                    k -= 1
        return res
```

**Complexity Analysis:**

* **Time complexity :** `O(N + M^2)`.

* **Space complexity :** `O(M)`.

where: 

`n` is the length of the input array, and,
       
`m` is the number of distinct elements in the input array.

* **Dynamic Programming** technique:

```python
from typing import List
import collections

class Solution:
    #
    # DP Solution
    #
    # - Let d1 track the count of single elements seen so far
    # - Let d2 track the count of the sum of any two elements seen so far
    # - Given a new value n, the number of 3-sums equal to target is d2[target-n]
    # - update d2, then d1
    #
    def threeSumMulti_using_DP(self, A: List[int], target: int) -> int:
        # https://www.hackerearth.com/practice/notes/abhinav92003/why-output-the-answer-modulo-109-7/
        # explanation of why a MOD is necessary when computing size of permutation of array which is n!
        MOD = (10 ** 9) + 7

        # track individual digits and number of occurences
        single_num_count = collections.defaultdict(int)

        # track sum of two numbers and numbers of occurences
        pair_sum_count = collections.defaultdict(int)
        output = 0

        for i in range(len(A)):
            curr_num = A[i]

            # add complements(pair) to output
            output += pair_sum_count[target - curr_num]

            # see note above for MOD
            output %= MOD

            # skips first iteration since no pairs yet
            for single_num, count in single_num_count.items():
                # add seen pair and number of occurrences
                pair_sum_count[curr_num + single_num] += count

            single_num_count[curr_num] += 1

        return output
```

* Using python reduce technique (**___operator.mult___** and **___math.comb___**):

```python
from typing import List
import collections
import itertools
import operator
import math

class Solution:

    def threeSumMulti(self, A: List[int], target: int) -> int:
        mod = 10 ** 9 + 7
        c = collections.Counter(A)
        A = sorted(c.keys())
        ans = 0
        for k in range(len(A) - 1, -1, -1):
            for j in range(k, -1, -1):
                if (Ai := target - A[k] - A[j]) >= 0 and Ai in c and Ai <= A[j] <= A[k]:
                    cc = collections.Counter((Ai, A[j], A[k]))
                    ans += itertools.reduce(operator.mul, (math.comb(c[n], v) for n, v in cc.items())) % mod
        return ans % mod
```

* Using python built-in **___itertools.combinations_with_replacement()___**:

Count the occurrence of each number.
Using hashmap or array up to you.

* Loop i on all numbers,
* loop j on all numbers,
* check if k = target - i - j is valid.

Add the number of this combination to result.

3 cases covers all possible combination:

* i == j == k
* i == j != k
* i < k && j < k

**Time Complexity:**
* 3 <= A.length <= 3000, so N = 3000

* But 0 <= A[i] <= 100

So my solution is `O(N + 101 * 101)`.

```python
from typing import List
import collections
import itertools

class Solution:
    # TC: O(N + 101*101)
    def threeSumMulti(self, A: List[int], target: int) -> int:
        c = collections.Counter(A)
        res = 0
        for i, j in itertools.combinations_with_replacement(c, 2):
            k = target - i - j
            if i == j == k: res += c[i] * (c[i] - 1) * (c[i] - 2) / 6
            elif i == j != k: res += c[i] * (c[i] - 1) / 2 * c[k]
            elif k > i and k > j: res += c[i] * c[j] * c[k]
        return res % (10**9 + 7)

```

**Complexity Analysis:**
* **Time complexity :** `O(N + 101^2)`.

**[4sum:](https://leetcode.com/problems/4sum/)**

You should have gotten the idea, and what you've seen so far can be generalized to `nSum`. 
Here, I write the generic code using the same ideas as before. 
What I'll do is to break down each case to a `2Sum II` problem, 
and solve them recursively using the approach in `2Sum II` example above.

```python
from typing import List

class Solution:
    # Solution 2 : Decomposition into 2Sum problem ( Recursive )
    #
    # TC: O(N^3)
    #
    def fourSum_recursive_solution(self, nums: List[int], target: int) -> List[List[int]]:
        def findNsum(nums, target, N, cur):
            if len(nums) < N or N < 2 or nums[0] * N > target or nums[-1] * N < target:  # if minimum possible sum (every element is first element) > target
                return  # or maximum possible sum (every element is first element) < target, it's impossible to get target anyway
            if N == 2:  # 2-sum problem
                left, right = 0, len(nums) - 1
                while left < right:
                    s = nums[left] + nums[right]
                    if s == target:
                        res.append(cur + [nums[left], nums[right]])
                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right - 1]:
                            right -= 1
                        left += 1
                        right -= 1
                    elif s < target:
                        left += 1
                    else:
                        right -= 1
            else:  # reduce to N-1 sum problem
                for i in range(len(nums) - N + 1):
                    if i == 0 or nums[i - 1] != nums[i]:
                        findNsum(nums[i + 1:], target - nums[i], N - 1, cur + [nums[i]])

        res = []
        findNsum(sorted(nums), target, 4, [])
        return res
```

**Note:** In general, Complexity of `2`-sum is `O(N)`, `3`-sum is `O(N^2)`, `4`-sum would be `O(N^3)` 
.... `k`-sum would be `O(N^k-1)`.

**Complexity Analysis:**
* **Time complexity :** `O(N^3)`.

**[4Sum II:](https://leetcode.com/problems/4sum-ii/)**


```python
from typing import List
import collections

import unittest

class Solution:
    # Solution 1 : Hash table solution
    #
    # TC: O(N^2)
    #
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        """
        :type A: List[int]
        :type B: List[int]
        :type C: List[int]
        :type D: List[int]
        :rtype: int
        """
        hashmap = collections.defaultdict(int)
        for a in A:
            for b in B:
                hashmap[a + b] += 1
        count = 0
        for c in C:
            for d in D:
                count += hashmap[-c - d]
        return count
```
Instead of using a usual dictionary to store 2-sums and their counts we can use standard `Counter` class that 
does that automatically and write solution in the most `pythonic` way possible:

```python
from typing import List
import collections

class Solution:
    def fourSumCount_two_liner(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        """
        :type A: List[int]
        :type B: List[int]
        :type C: List[int]
        :type D: List[int]
        :rtype: int
        """
        sums = collections.Counter(c + d for c in C for d in D)
        return sum(sums.get(-(a + b), 0) for a in A for b in B)
```

**Complexity Analysis:**
* **Time complexity :** `O(N^2)`.

**[k-Sum:](https://cs.stackexchange.com/questions/2973/generalised-3sum-k-sum-problem)**

`k`-SUM can be solved more quickly as follows :

* **For even `k`:** Compute a sorted list `S` of all sums of `k/2` input elements. 
  Check whether `S` contains both some number `x` and its negation `−x`. 
  The algorithm runs in ![equation](http://latex.codecogs.com/svg.latex?O(n%5E%7Bk/2%7D*log(n))) time.
* **For odd `k`:** Compute the sorted list `S` of all sums of `(k−1)/2` input elements. 
  For each input element `a`, check whether `S` contains both `x` and `−a−x`, 
  for some number `x`. (The second step is essentially the 
  ![equation](http://latex.codecogs.com/svg.latex?O(n%5E2)%20)-time algorithm for 3SUM.). 
  The algorithm runs in ![equation](http://latex.codecogs.com/svg.latex?O(n%5E%7B(k&plus;1)/2%7D)%20) time.

Both algorithms are optimal (except possibly for the log factor when `k` is even and bigger than `2`) 
for any constant `k` in a certain weak but natural restriction of the linear decision tree model of computation. 
For more details, see:

* Nir Ailon and Bernard Chazelle. [Lower bounds for linear degeneracy testing](http://www.cs.princeton.edu/~chazelle/pubs/lindegen-jacm.pdf). JACM 2005.
* Jeff Erickson. [Lower bounds for linear satisfiability problems](http://compgeom.cs.uiuc.edu/~jeffe/pubs/linsat.html). CJTCS 1999.

**Source:** https://cs.stackexchange.com/questions/2973/generalised-3sum-k-sum-problem

```python
from typing import List

class Solution:
    # Solution 2 : Decomposition into 2Sum problem ( Recursive )
    #
    # TC: O(N^3)
    #
    def kSum_recursive_solution(self, nums: List[int], k: int, target: int) -> List[List[int]]:
        def findNsum(nums, target, N, cur):
            if len(nums) < N or N < 2 or nums[0] * N > target or nums[-1] * N < target:  # if minimum possible sum (every element is first element) > target
                return  # or maximum possible sum (every element is first element) < target, it's impossible to get target anyway
            if N == 2:  # 2-sum problem
                left, right = 0, len(nums) - 1
                while left < right:
                    s = nums[left] + nums[right]
                    if s == target:
                        res.append(cur + [nums[left], nums[right]])
                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right - 1]:
                            right -= 1
                        left += 1
                        right -= 1
                    elif s < target:
                        left += 1
                    else:
                        right -= 1
            else:  # reduce to N-1 sum problem
                for i in range(len(nums) - N + 1):
                    if i == 0 or nums[i - 1] != nums[i]:
                        findNsum(nums[i + 1:], target - nums[i], N - 1, cur + [nums[i]])

        res = []
        findNsum(sorted(nums), target, k, [])
        return res
```

**[Combination Sum II:](https://leetcode.com/problems/combination-sum-ii/)**

Combination questions can be solved with `dfs` most of the time. 
If you want to fully understand this concept and `backtracking`, 
try to finish [this post](https://leetcode.com/problems/combination-sum/discuss/429538/General-Backtracking-questions-solutions-in-Python-for-reference-%3A) and do all the examples.

Read my older post first [here](https://leetcode.com/problems/combination-sum/discuss/16510/Python-dfs-solution.)
and then read [here](https://leetcode.com/problems/combination-sum-ii/discuss/17020/Python-easy-to-understand-backtracking-solution). 
This should give you a better idea of what's going on. The solution here also follow the exact same format except for some minor changes. 

```python
from typing import List

class Solution:
    # Solution 1 : Backtracking solution
    #
    # TC: O(K*log(K))
    #
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()

        def dfs(curr, idx):
            if sum(curr) > target:
                return
            if sum(curr) == target:
                res.append(curr)
                return

            for i in range(idx, len(candidates)):
                if i > idx and candidates[i] == candidates[i - 1]:
                    continue

                dfs(curr + [candidates[i]], i + 1)

        dfs([], 0)

        return res
```

Compare the above wth the **[LC 39 - Combination Sum](https://leetcode.com/problems/combination-sum-ii/)** 
solution:

```python
from typing import List

import unittest

class Solution:
    # Solution 1 : Backtracking solution
    #
    # TC: O(K*log(K))
    #
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()

        def dfs(left, path, idx):
            if not left:
                res.append(path[:])
            else:
                for i, val in enumerate(candidates[idx:]):
                    if val > left: break
                    dfs(left - val, path + [val], idx + i)

        dfs(target, [], 0)
        return res
```

**[Find K Pairs with Smallest Sums:](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)**

I'd like to share this elegant design with heap with you guys, 
which was originally conceived of by someone else.

Consider two input arrays:
```
nums1=[a1,a2,a3]
nums2=[b1,b2,b3]
```

and let's say `k=3`

We know the brute force way to do it is to calculate: 
`(a1, b1), (a1, b2), (a1,b3)....(a3,b3)'s` sum respectively 
and sort the sums, and pick the top 3 of them. This algorithm is `O(n^2)`. 
And, we need an algorithm better than that.

So, the overall idea of the algorithm:
1. Maintain a `min-heap` to keep only part of the whole set of combinations of all elements from `nums1` and `nums2`. 
   That way, we can avoid the brute force way which is `O(n^2)`.
1. We only push necessary pairs into the heap, until we find all of the `k` pairs.

How we achieve that (for the sake of explanation, ignore the corner cases for now):
1. create a heap, then push `(S0, N1, N2)` into the `heap`, where `N1` is the position of first element in `nums1`, 
   `N2` is the position of first element in `nums2`, `S0` is the sum of `N1` and `N2`. 
   Mark `(N1,N2)` as visited.
1. Pop the root element `(S0,N1,N2)` out of the heap, add `(N1,N2)` to the result to be returned, and, 
   immediately push `(S1, N1+1, N2)` and `(S2, N1, N2+1)` into the heap, where, 
   `S1 = nums1[N1+1]+nums2[N2]`, `S2 = nums1[N1] + nums2[N2+1]`. 
   Here, if a pair `(Nx, Ny)` has already been visited, we'll ignore it 
   and not push it to the heap.
1. Repeat this, until all `k` pairs have been added into the return list. Return the list.

The complexity of this algorithm is `O(k*log(k))` if `k<n`, because 
we repeat `k` times, and each time we do a `O(log(k))` heappush.

**Why does this algorithm work?** 
---------------------------------

The real question is, in this algorithm, how do we know that the sum of 
the pair that got heap-popped earlier is always smaller than the sum of any pair 
that got heap-pushed later. 

**Why are we so sure about that?**

Because, look at the process:

We `heappop` the minimal pair `(S0, N1, N2)`, then immediately `heappush` two larger 
pairs `(S1, N1+1,N2)` and `(S2, N1, N2+1)`. (why `S1` and `S2` always larger than `S0`? 
Because the two arrays are sorted.) And, right after the `heappush`, 
the `heap` gets re-heaped, and of course the root at this point is larger 
(at least equal) than `(S0, N1, N2)`. Remember though, the root now maybe 
`(S1, N1+1, N2)` or `(S2, N1, N2+1)` or any other pair that already exists 
in the heap after that `heappop` operation. 
This process gets repeated over and over again until finished.

From this, we can conclude that, the pairs that get
`heappushed` is always larger than the pairs that get `heappopped` earlier. 
It might be smaller than other pairs that are currently in the `heap`, 
but we don’t care about that. We only care about pairs that got `pushed` 
or `popped`.

The beauty of this algorithm is, it works perfectly under the fact: 
* two array are sorted. 
* If the arrays were to be unsorted, 
  we would not be able to guarantee that the two pairs get `heappushed` 
  are always larger than the pair that gets `heappopped`, thus it would 
  be possible that a pair that gets `heappopped` later is larger 
  than one gets `heappopped` ealier, which would fail to produce the 
  correct answer.

```python
from typing import List
import heapq

class Solution:
    # Solution 1 : Python heap solution
    #
    # TC: O(K*log(K))
    #
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: List[List[int]]
        """
        res = []
        if not nums1 or not nums2 or not k:
            return res

        heap = []
        visited = {}

        heapq.heappush(heap, (nums1[0] + nums2[0], 0, 0))

        while len(res) < k and heap:
            _, i, j = heapq.heappop(heap)
            res.append([nums1[i], nums2[j]])

            if i + 1 < len(nums1) and (i + 1, j) not in visited:
                heapq.heappush(heap, (nums1[i + 1] + nums2[j], i + 1, j))
                visited[(i+1, j)] = 1

            if j + 1 < len(nums2) and (i, j + 1) not in visited:
                heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
                visited[(i, j+1)] = 1
        return res
```
**Complexity Analysis:**
* **Time complexity :** `O(K*log(K))`.


**[Target Sum:](https://leetcode.com/problems/target-sum/)**

* **Top-Down DP:**
```python
from typing import List

import unittest

class Solution:
    # Solution 1: DP top-down
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        index = len(nums) - 1
        curr_sum = 0
        return self.dp(nums, S, index, curr_sum)

    def dp(self, nums: List[int], target: int, index: int, curr_sum: int) -> int:
        # Base Cases
        if index < 0 and curr_sum == target:
            return 1
        if index < 0:
            return 0

        # Decisions
        positive = self.dp(nums, target, index - 1, curr_sum + nums[index])
        negative = self.dp(nums, target, index - 1, curr_sum + -nums[index])

        return positive + negative
```

* **Top-Down DP w/ Memoization:**

```python
from typing import List

import unittest

class Solution:
    # Solution 2: DP top-down w/ memoization
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        index = len(nums) - 1
        curr_sum = 0
        self.memo = {}
        return self.dp(nums, S, index, curr_sum)

    def dp(self, nums: List[int], target: int, index: int, curr_sum: int) -> int:
        if (index, curr_sum) in self.memo:
            return self.memo[(index, curr_sum)]

        if index < 0 and curr_sum == target:
            return 1
        if index < 0:
            return 0

        positive = self.dp(nums, target, index - 1, curr_sum + nums[index])
        negative = self.dp(nums, target, index - 1, curr_sum + -nums[index])

        self.memo[(index, curr_sum)] = positive + negative
        return self.memo[(index, curr_sum)]
```

**[Valid Triangle Number:](https://leetcode.com/problems/valid-triangle-number/)**

* **3Sum - Two Pointers Approach:**
  
  Solution is similar to the 3Sum approach above:

```python
from typing import List

class Solution:
    # Solution 1 : 3Sum based approach ( uses Two Pointers Technique )
    #
    def triangleNumber(self, nums: List[int]) -> int:
        def two_sum_greater_than(nums, target_idx):
            target, low, high = nums[target_idx], target_idx + 1, len(nums) - 1
            count = 0
            while low < high:
                if nums[low] + nums[high] > target:
                    count += (high - low)
                    low += 1
                else:
                    high -= 1
            return count

        nums.sort(reverse=True)
        return sum(two_sum_greater_than(nums, i) for i in range(len(nums) - 2))
```

* **Backtracking approach:**

```python
from typing import List

class Solution:
    # Solution 2 : Backtracking based approach - Less efficient
    #
    def triangleNumber(self, nums: List[int]) -> int:
        def is_valid_triange(a, b, c):
            return (a < b + c) and (b < a + c) and (c < a + b)

        def helper(nums, i, partial_set):
            if len(partial_set) == 3:
                if is_valid_triange(*partial_set[:]):
                    self.valid_count += 1
                return

            for j in range(i, len(nums)):
                helper(nums, j + 1, partial_set + [nums[j]])

        self.valid_count = 0
        helper(nums, 0, [])
        return self.valid_count
```