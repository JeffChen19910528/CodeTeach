import { readFileSync, writeFileSync } from "fs";

const file = "content-updates.json";
const data = JSON.parse(readFileSync(file, "utf8"));

const classics = {
  python: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "費波那契數列是每個數字等於前兩個數字之和（0, 1, 1, 2, 3, 5, 8…）。可用遞迴或迴圈實作，遞迴較直觀但效能較差；迴圈版本效率更高。",
          en: "The Fibonacci sequence: each number equals the sum of the two before it (0, 1, 1, 2, 3, 5, 8…). Recursion is intuitive but slow; the iterative version is much more efficient."
        },
        defaultCode: `# 遞迴版（直觀但較慢）
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n - 1) + fib_recursive(n - 2)

# 迴圈版（高效）
def fib_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print("前 10 項：", [fib_iterative(i) for i in range(10)])
print("第 20 項：", fib_iterative(20))`,
        exercise: {
          question: { "zh-TW": "用迴圈版印出所有小於 100 的費波那契數。", en: "Print all Fibonacci numbers less than 100 using the iterative version." },
          hint: { "zh-TW": "用 while 迴圈，當 a < 100 時持續輸出。", en: "Use a while loop that runs while a < 100." },
          answer: `a, b = 0, 1
while a < 100:
    print(a, end=" ")
    a, b = b, a + b`
        }
      },
      {
        id: "bubble-sort",
        title: { "zh-TW": "氣泡排序", en: "Bubble Sort" },
        content: {
          "zh-TW": "氣泡排序反覆比較相鄰元素，若順序錯誤則交換，每輪將最大值「浮」到末端。時間複雜度 O(n²)，是最常見的入門排序演算法。",
          en: "Bubble sort repeatedly compares adjacent elements and swaps them if out of order, 'bubbling' the largest to the end each pass. Time complexity O(n²) — a classic introductory sort."
        },
        defaultCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # 已排序，提早結束
            break
    return arr

nums = [64, 34, 25, 12, 22, 11, 90]
print("排序前：", nums)
print("排序後：", bubble_sort(nums.copy()))`,
        exercise: {
          question: { "zh-TW": "修改 bubble_sort 改成由大到小排序。", en: "Modify bubble_sort to sort in descending order." },
          hint: { "zh-TW": "把比較條件 arr[j] > arr[j+1] 改成 <。", en: "Change the comparison from > to <." },
          answer: `def bubble_sort_desc(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort_desc([5, 2, 8, 1, 9]))`
        }
      },
      {
        id: "prime-sieve",
        title: { "zh-TW": "質數篩法", en: "Sieve of Eratosthenes" },
        content: {
          "zh-TW": "埃拉托斯特尼篩法是找出所有質數的高效演算法：從 2 開始，將每個質數的倍數標記為合數，剩下未標記的即為質數。",
          en: "The Sieve of Eratosthenes efficiently finds all primes: starting from 2, mark all multiples of each prime as composite. Unmarked numbers are primes."
        },
        defaultCode: `def sieve(limit):
    is_prime = [True] * (limit + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(limit**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, limit + 1, i):
                is_prime[j] = False
    return [i for i, p in enumerate(is_prime) if p]

primes = sieve(100)
print(f"100 以內的質數（共 {len(primes)} 個）：")
print(primes)`,
        exercise: {
          question: { "zh-TW": "撰寫函式 `is_prime(n)` 判斷單一數字是否為質數。", en: "Write a function `is_prime(n)` that checks whether a single number is prime." },
          hint: { "zh-TW": "只需檢查到 √n，若有因數即非質數。", en: "Only check up to √n; if a factor is found, it's not prime." },
          answer: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

for n in [1, 2, 7, 10, 17, 25]:
    print(f"{n}: {'質數' if is_prime(n) else '合數'}")`
        }
      },
      {
        id: "binary-search",
        title: { "zh-TW": "二分搜尋", en: "Binary Search" },
        content: {
          "zh-TW": "二分搜尋在**已排序**陣列中每次將搜尋範圍縮半，時間複雜度 O(log n)，遠優於線性搜尋的 O(n)。",
          en: "Binary search halves the search range each step on a **sorted** array. Time complexity O(log n), far better than linear search's O(n)."
        },
        defaultCode: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

nums = list(range(0, 100, 5))  # [0, 5, 10, ..., 95]
print("陣列：", nums)
print("搜尋 35：index =", binary_search(nums, 35))
print("搜尋 37：index =", binary_search(nums, 37))`,
        exercise: {
          question: { "zh-TW": "用遞迴實作 `binary_search_recursive(arr, target, left, right)`。", en: "Implement `binary_search_recursive(arr, target, left, right)` using recursion." },
          hint: { "zh-TW": "基本情況：left > right 回傳 -1；找到目標回傳 mid。", en: "Base case: return -1 when left > right; return mid when found." },
          answer: `def binary_search_recursive(arr, target, left, right):
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

nums = [1, 3, 5, 7, 9, 11, 13]
print(binary_search_recursive(nums, 7, 0, len(nums)-1))`
        }
      }
    ]
  },

  javascript: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "費波那契數列展示遞迴的優雅，但也揭示其效能問題。用記憶化（memoization）或迴圈可大幅提升效能。",
          en: "Fibonacci illustrates the elegance of recursion but also its performance pitfalls. Memoization or iteration dramatically improves efficiency."
        },
        defaultCode: `// 記憶化遞迴
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// 迴圈版
function fibIter(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

console.log("前10項：", Array.from({length: 10}, (_, i) => fibIter(i)));
console.log("第30項：", fib(30));`,
        exercise: {
          question: { "zh-TW": "用陣列儲存費波那契數列，回傳前 n 項的陣列。", en: "Return an array of the first n Fibonacci numbers." },
          hint: { "zh-TW": "從 [0, 1] 開始，每次 push 前兩項的和。", en: "Start with [0, 1] and push the sum of the last two each iteration." },
          answer: `function fibArray(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const result = [0, 1];
  for (let i = 2; i < n; i++)
    result.push(result[i-1] + result[i-2]);
  return result;
}
console.log(fibArray(10));`
        }
      },
      {
        id: "sorting",
        title: { "zh-TW": "排序演算法", en: "Sorting Algorithms" },
        content: {
          "zh-TW": "選擇排序每輪找出最小值放到正確位置；插入排序像整理撲克牌，逐一插入已排序部分。兩者均為 O(n²)，但各有適用場景。",
          en: "Selection sort finds the minimum each pass; insertion sort builds a sorted section incrementally like arranging cards. Both O(n²) but with different use cases."
        },
        defaultCode: `function selectionSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++)
      if (a[j] < a[minIdx]) minIdx = j;
    [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }
  return a;
}

function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) { a[j+1] = a[j]; j--; }
    a[j+1] = key;
  }
  return a;
}

const data = [64, 25, 12, 22, 11];
console.log("原始：", data);
console.log("選擇排序：", selectionSort(data));
console.log("插入排序：", insertionSort(data));`
      },
      {
        id: "palindrome",
        title: { "zh-TW": "迴文判斷", en: "Palindrome Check" },
        content: {
          "zh-TW": "迴文（palindrome）是正讀反讀相同的字串，如 \"racecar\"。這是字串處理的經典練習，考驗對字串反轉與比較的掌握。",
          en: "A palindrome reads the same forwards and backwards (e.g. \"racecar\"). This classic string exercise tests your understanding of string reversal and comparison."
        },
        defaultCode: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

function longestPalindrome(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let len = 1; len <= s.length - i; len++) {
      const sub = s.slice(i, i + len);
      if (isPalindrome(sub) && sub.length > result.length)
        result = sub;
    }
  }
  return result;
}

const words = ["racecar", "hello", "A man a plan a canal Panama", "level"];
words.forEach(w => console.log(\`"\${w}" → \${isPalindrome(w)}\`));
console.log("最長迴文子字串：", longestPalindrome("babad"));`,
        exercise: {
          question: { "zh-TW": "撰寫 `countPalindromes(s)` 計算字串中迴文子字串的數量。", en: "Write `countPalindromes(s)` that counts the number of palindromic substrings." },
          hint: { "zh-TW": "從每個字元向外擴展，分別處理奇數長度與偶數長度。", en: "Expand around each character center, handling odd and even lengths separately." },
          answer: `function countPalindromes(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let d = 0; d <= 1; d++) {
      let [l, r] = [i, i + d];
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        count++; l--; r++;
      }
    }
  }
  return count;
}
console.log(countPalindromes("abc"));   // 3
console.log(countPalindromes("aaa"));   // 6`
        }
      },
      {
        id: "stack-queue",
        title: { "zh-TW": "堆疊與佇列", en: "Stack & Queue" },
        content: {
          "zh-TW": "堆疊（Stack）後進先出（LIFO），佇列（Queue）先進先出（FIFO）。兩者是最基礎的資料結構，廣泛用於演算法設計。",
          en: "Stack is Last-In-First-Out (LIFO); Queue is First-In-First-Out (FIFO). These fundamental data structures appear throughout algorithm design."
        },
        defaultCode: `class Stack {
  #data = [];
  push(item) { this.#data.push(item); }
  pop() { return this.#data.pop(); }
  peek() { return this.#data.at(-1); }
  get size() { return this.#data.length; }
  isEmpty() { return this.#data.length === 0; }
}

class Queue {
  #data = [];
  enqueue(item) { this.#data.push(item); }
  dequeue() { return this.#data.shift(); }
  front() { return this.#data[0]; }
  get size() { return this.#data.length; }
}

// 用堆疊檢查括號是否匹配
function isBalanced(s) {
  const stack = new Stack();
  const pairs = { ')': '(', ']': '[', '}': '{' };
  for (const ch of s) {
    if ('([{'.includes(ch)) stack.push(ch);
    else if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.isEmpty();
}

console.log(isBalanced("({[]})"));  // true
console.log(isBalanced("({[})"));   // false`
      }
    ]
  },

  java: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "透過費波那契數列比較三種實作：遞迴（簡潔但慢）、動態規劃（快）、串流（Java 8+ 風格）。",
          en: "Compare three implementations of Fibonacci: recursive (clean but slow), dynamic programming (fast), and streams (Java 8+ style)."
        },
        defaultCode: `class Main {
    static long fibDP(int n) {
        if (n <= 1) return n;
        long[] dp = new long[n + 1];
        dp[0] = 0; dp[1] = 1;
        for (int i = 2; i <= n; i++)
            dp[i] = dp[i-1] + dp[i-2];
        return dp[n];
    }

    public static void main(String[] args) {
        System.out.print("前10項：");
        for (int i = 0; i < 10; i++)
            System.out.print(fibDP(i) + " ");
        System.out.println();
        System.out.println("第40項：" + fibDP(40));
    }
}`
      },
      {
        id: "bubble-sort",
        title: { "zh-TW": "氣泡排序", en: "Bubble Sort" },
        content: {
          "zh-TW": "氣泡排序是入門必學的排序演算法，透過反覆交換相鄰元素達到排序目的，時間複雜度 O(n²)。",
          en: "Bubble sort is a must-learn introductory sorting algorithm that repeatedly swaps adjacent elements. Time complexity O(n²)."
        },
        defaultCode: `class Main {
    static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    static void print(int[] arr) {
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.print("排序前："); print(data);
        bubbleSort(data);
        System.out.print("排序後："); print(data);
    }
}`,
        exercise: {
          question: { "zh-TW": "實作選擇排序 `selectionSort(int[] arr)`，每輪找最小值放到正確位置。", en: "Implement `selectionSort(int[] arr)` that each pass finds the minimum and places it correctly." },
          hint: { "zh-TW": "外層迴圈從 0 到 n-1，內層從 i+1 到末尾找最小 index，再交換。", en: "Outer loop i from 0 to n-1; inner loop finds min index from i+1 onward, then swap." },
          answer: `class Main {
    static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIdx = i;
            for (int j = i+1; j < arr.length; j++)
                if (arr[j] < arr[minIdx]) minIdx = j;
            int tmp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = tmp;
        }
    }
    public static void main(String[] args) {
        int[] a = {5, 3, 8, 1, 9};
        selectionSort(a);
        for (int x : a) System.out.print(x + " ");
    }
}`
        }
      },
      {
        id: "recursion",
        title: { "zh-TW": "遞迴經典：階乘與河內塔", en: "Classic Recursion: Factorial & Tower of Hanoi" },
        content: {
          "zh-TW": "階乘（n!）是最基礎的遞迴範例；河內塔則展示遞迴如何優雅解決看似複雜的問題，解的步數為 2ⁿ-1。",
          en: "Factorial (n!) is the simplest recursive example; Tower of Hanoi shows how recursion elegantly solves seemingly complex problems in 2ⁿ-1 moves."
        },
        defaultCode: `class Main {
    static long factorial(int n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }

    static void hanoi(int n, char from, char to, char via) {
        if (n == 1) {
            System.out.println("移動 " + n + ": " + from + " → " + to);
            return;
        }
        hanoi(n-1, from, via, to);
        System.out.println("移動 " + n + ": " + from + " → " + to);
        hanoi(n-1, via, to, from);
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++)
            System.out.println(i + "! = " + factorial(i));
        System.out.println("\n河內塔（3層）：");
        hanoi(3, 'A', 'C', 'B');
    }
}`
      }
    ]
  },

  c: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "C 語言中常用陣列做動態規劃，避免遞迴的重複計算，效率更高。",
          en: "In C, arrays are commonly used for dynamic programming to avoid redundant recursive calls, greatly improving efficiency."
        },
        defaultCode: `#include <stdio.h>

long long fib_dp(int n) {
    if (n <= 1) return n;
    long long dp[n + 1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++)
        dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}

void fib_iterative(int count) {
    long long a = 0, b = 1;
    for (int i = 0; i < count; i++) {
        printf("%lld ", a);
        long long tmp = a + b;
        a = b; b = tmp;
    }
    printf("\\n");
}

int main() {
    printf("前15項：");
    fib_iterative(15);
    printf("第40項：%lld\\n", fib_dp(40));
    return 0;
}`
      },
      {
        id: "sorting",
        title: { "zh-TW": "排序演算法", en: "Sorting Algorithms" },
        content: {
          "zh-TW": "C 語言手動實作排序是理解演算法的最佳方式。氣泡排序展示交換，選擇排序展示最小值查找。",
          en: "Implementing sorting manually in C is the best way to understand algorithms. Bubble sort shows swapping; selection sort shows minimum finding."
        },
        defaultCode: `#include <stdio.h>

void swap(int *a, int *b) { int t=*a; *a=*b; *b=t; }

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) swap(&arr[j], &arr[j+1]);
}

void selection_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min]) min = j;
        swap(&arr[i], &arr[min]);
    }
}

void print_arr(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int a[] = {64, 34, 25, 12, 22, 11, 90};
    int b[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    bubble_sort(a, n);   printf("氣泡排序："); print_arr(a, n);
    selection_sort(b, n); printf("選擇排序："); print_arr(b, n);
    return 0;
}`,
        exercise: {
          question: { "zh-TW": "實作二分搜尋 `int binary_search(int arr[], int n, int target)`，找到回傳 index，找不到回傳 -1。", en: "Implement `int binary_search(int arr[], int n, int target)`, returning the index or -1." },
          hint: { "zh-TW": "用 left/right 兩個指標，mid = (left+right)/2，根據比較縮小範圍。", en: "Use left/right pointers, mid=(left+right)/2, and narrow the range based on comparison." },
          answer: `#include <stdio.h>
int binary_search(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int mid = (l + r) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}
int main() {
    int a[] = {1,3,5,7,9,11,13,15};
    printf("%d\\n", binary_search(a, 8, 7));   // 3
    printf("%d\\n", binary_search(a, 8, 6));   // -1
}`
        }
      },
      {
        id: "string-ops",
        title: { "zh-TW": "字串操作", en: "String Operations" },
        content: {
          "zh-TW": "C 的字串以 `\\0` 結尾的字元陣列表示，需手動管理。`string.h` 提供 `strlen`、`strcpy`、`strcmp` 等常用函式。",
          en: "C strings are null-terminated char arrays requiring manual management. `string.h` provides `strlen`, `strcpy`, `strcmp`, and other helpers."
        },
        defaultCode: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int is_palindrome(const char *s) {
    int l = 0, r = strlen(s) - 1;
    while (l < r) {
        if (tolower(s[l]) != tolower(s[r])) return 0;
        l++; r--;
    }
    return 1;
}

void reverse_str(char *s) {
    int l = 0, r = strlen(s) - 1;
    while (l < r) {
        char t = s[l]; s[l] = s[r]; s[r] = t;
        l++; r--;
    }
}

int main() {
    char words[][20] = {"racecar", "hello", "level", "world"};
    for (int i = 0; i < 4; i++)
        printf("\\"%s\\" %s迴文\\n", words[i], is_palindrome(words[i]) ? "是" : "不是");

    char s[] = "Hello, World!";
    reverse_str(s);
    printf("反轉：%s\\n", s);
    return 0;
}`
      }
    ]
  },

  cpp: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "C++11 引入的 `constexpr` 讓費波那契可在編譯期計算；搭配 `vector` 和範圍迴圈展示現代 C++ 風格。",
          en: "C++11's `constexpr` enables compile-time Fibonacci computation. Combined with `vector` and range-for, this shows modern C++ style."
        },
        defaultCode: `#include <iostream>
#include <vector>
using namespace std;

constexpr long long fib(int n) {
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}

vector<long long> fib_sequence(int n) {
    vector<long long> seq(n);
    seq[0] = 0; if (n > 1) seq[1] = 1;
    for (int i = 2; i < n; i++)
        seq[i] = seq[i-1] + seq[i-2];
    return seq;
}

int main() {
    auto seq = fib_sequence(15);
    cout << "前15項：";
    for (auto x : seq) cout << x << " ";
    cout << "\n第10項（編譯期）：" << fib(10) << "\n";
    return 0;
}`
      },
      {
        id: "sorting-cpp",
        title: { "zh-TW": "多種排序演算法", en: "Multiple Sorting Algorithms" },
        content: {
          "zh-TW": "C++ 用模板（template）可寫出適用任意型別的泛型排序，`std::sort` 底層使用快速排序的變體 IntroSort。",
          en: "C++ templates let you write generic sorts for any type. `std::sort` uses IntroSort (a hybrid of quicksort) internally."
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

template<typename T>
void insertion_sort(vector<T>& arr) {
    for (size_t i = 1; i < arr.size(); i++) {
        T key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; }
        arr[j+1] = key;
    }
}

int main() {
    vector<int> a = {5, 3, 8, 1, 9, 2, 7, 4, 6};
    vector<int> b = a;

    insertion_sort(a);
    cout << "插入排序：";
    for (int x : a) cout << x << " ";
    cout << "\n";

    sort(b.begin(), b.end());
    cout << "std::sort：";
    for (int x : b) cout << x << " ";
    cout << "\n";
    return 0;
}`
      },
      {
        id: "linked-list",
        title: { "zh-TW": "鏈結串列", en: "Linked List" },
        content: {
          "zh-TW": "鏈結串列是動態資料結構，每個節點包含資料與指向下一節點的指標。插入/刪除為 O(1)，但隨機存取為 O(n)。",
          en: "A linked list is a dynamic data structure where each node holds data and a pointer to the next node. Insert/delete O(1), random access O(n)."
        },
        defaultCode: `#include <iostream>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

class LinkedList {
    Node* head = nullptr;
public:
    void push_front(int v) {
        Node* n = new Node(v);
        n->next = head;
        head = n;
    }
    void push_back(int v) {
        Node* n = new Node(v);
        if (!head) { head = n; return; }
        Node* cur = head;
        while (cur->next) cur = cur->next;
        cur->next = n;
    }
    void print() const {
        for (Node* c = head; c; c = c->next)
            cout << c->val << (c->next ? " -> " : "\n");
    }
    ~LinkedList() {
        while (head) { Node* t = head->next; delete head; head = t; }
    }
};

int main() {
    LinkedList list;
    for (int i : {3, 1, 4, 1, 5}) list.push_back(i);
    list.push_front(0);
    list.print();
    return 0;
}`
      }
    ]
  },

  csharp: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "C# 可用迭代器（yield return）產生無限費波那契數列，搭配 LINQ 的 Take 取得前 N 項，展示現代 C# 的函數式風格。",
          en: "C# iterators (yield return) can generate an infinite Fibonacci sequence; combined with LINQ's Take, this demonstrates modern functional-style C#."
        },
        defaultCode: `using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static IEnumerable<long> Fibonacci() {
        long a = 0, b = 1;
        while (true) {
            yield return a;
            (a, b) = (b, a + b);
        }
    }

    static void Main() {
        var first15 = Fibonacci().Take(15).ToList();
        Console.WriteLine("前15項：" + string.Join(", ", first15));
        Console.WriteLine($"第一個超過1000的：{Fibonacci().First(n => n > 1000)}");
    }
}`
      },
      {
        id: "sorting-csharp",
        title: { "zh-TW": "排序與搜尋", en: "Sorting & Searching" },
        content: {
          "zh-TW": "C# 的 `Array.Sort` 和 LINQ 的 `OrderBy` 是實務上最常用的排序方式；`Array.BinarySearch` 可在排序陣列中快速搜尋。",
          en: "`Array.Sort` and LINQ's `OrderBy` are the most practical sorting tools in C#; `Array.BinarySearch` efficiently searches sorted arrays."
        },
        defaultCode: `using System;
using System.Linq;

class Program {
    static int BinarySearch(int[] arr, int target) {
        int l = 0, r = arr.Length - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }

    static void Main() {
        int[] nums = {64, 34, 25, 12, 22, 11, 90};
        int[] sorted = nums.OrderBy(x => x).ToArray();
        Console.WriteLine("排序後：" + string.Join(", ", sorted));

        int idx = BinarySearch(sorted, 34);
        Console.WriteLine($"搜尋 34：index = {idx}");

        // 用 LINQ 排序物件
        var students = new[] {
            new { Name="Alice", Score=92 },
            new { Name="Bob",   Score=78 },
            new { Name="Carol", Score=85 }
        };
        foreach (var s in students.OrderByDescending(s => s.Score))
            Console.WriteLine($"{s.Name}: {s.Score}");
    }
}`
      },
      {
        id: "stack-queue-csharp",
        title: { "zh-TW": "堆疊與佇列", en: "Stack & Queue" },
        content: {
          "zh-TW": "C# 內建 `Stack<T>` 和 `Queue<T>`。堆疊常用於括號配對、深度優先搜尋；佇列用於廣度優先搜尋、任務排程。",
          en: "C# has built-in `Stack<T>` and `Queue<T>`. Stacks are used for bracket matching and DFS; queues for BFS and task scheduling."
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Program {
    static bool IsBalanced(string s) {
        var stack = new Stack<char>();
        var pairs = new Dictionary<char,char> {{')','('},{']','['},{'}','{'}};
        foreach (char c in s) {
            if ("([{".Contains(c)) stack.Push(c);
            else if (pairs.ContainsKey(c)) {
                if (stack.Count == 0 || stack.Pop() != pairs[c]) return false;
            }
        }
        return stack.Count == 0;
    }

    static void Main() {
        string[] tests = {"({[]})", "({[})", "(())", "((("};
        foreach (var t in tests)
            Console.WriteLine($"\"{t}\" → {(IsBalanced(t) ? "✓ 平衡" : "✗ 不平衡")}");

        // BFS 示範（佇列）
        var queue = new Queue<int>();
        queue.Enqueue(1); queue.Enqueue(2); queue.Enqueue(3);
        Console.Write("佇列出列：");
        while (queue.Count > 0) Console.Write(queue.Dequeue() + " ");
        Console.WriteLine();
    }
}`
      }
    ]
  },

  visualbasic: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci-vb",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "VB.NET 用陣列實作動態規劃版費波那契，示範基本迴圈與陣列操作語法。",
          en: "VB.NET implements Fibonacci with dynamic programming using arrays, demonstrating basic loop and array syntax."
        },
        defaultCode: `Module Program
    Function Fibonacci(n As Integer) As Long()
        Dim dp(n) As Long
        dp(0) = 0
        If n > 0 Then dp(1) = 1
        For i As Integer = 2 To n
            dp(i) = dp(i - 1) + dp(i - 2)
        Next
        Return dp
    End Function

    Sub Main()
        Dim seq = Fibonacci(14)
        Console.Write("前15項：")
        For Each x In seq
            Console.Write(x & " ")
        Next
        Console.WriteLine()
        Console.WriteLine("第20項：" & Fibonacci(20)(20))
    End Sub
End Module`
      },
      {
        id: "sorting-vb",
        title: { "zh-TW": "氣泡排序", en: "Bubble Sort" },
        content: {
          "zh-TW": "VB.NET 的氣泡排序展示 `For` 迴圈與陣列索引操作，是學習 VB 語法的經典範例。",
          en: "VB.NET bubble sort demonstrates `For` loops and array indexing — a classic example for learning VB syntax."
        },
        defaultCode: `Module Program
    Sub BubbleSort(arr() As Integer)
        Dim n As Integer = arr.Length
        For i As Integer = 0 To n - 2
            For j As Integer = 0 To n - i - 2
                If arr(j) > arr(j + 1) Then
                    Dim tmp As Integer = arr(j)
                    arr(j) = arr(j + 1)
                    arr(j + 1) = tmp
                End If
            Next
        Next
    End Sub

    Sub Main()
        Dim nums() As Integer = {64, 34, 25, 12, 22, 11, 90}
        Console.WriteLine("排序前：" & String.Join(", ", nums))
        BubbleSort(nums)
        Console.WriteLine("排序後：" & String.Join(", ", nums))
    End Sub
End Module`,
        exercise: {
          question: { "zh-TW": "撰寫函式 `IsPrime(n As Integer) As Boolean` 判斷質數。", en: "Write `IsPrime(n As Integer) As Boolean` to check if a number is prime." },
          hint: { "zh-TW": "從 2 到 √n 逐一檢查，有能整除的就回傳 False。", en: "Check divisors from 2 to √n; return False if any divides evenly." },
          answer: `Module Program
    Function IsPrime(n As Integer) As Boolean
        If n < 2 Then Return False
        For i As Integer = 2 To CInt(Math.Sqrt(n))
            If n Mod i = 0 Then Return False
        Next
        Return True
    End Function

    Sub Main()
        For Each n In {1, 2, 7, 10, 13, 25}
            Console.WriteLine($"{n}: {If(IsPrime(n), "質數", "合數")}")
        Next
    End Sub
End Module`
        }
      },
      {
        id: "calculator-vb",
        title: { "zh-TW": "簡易計算機", en: "Simple Calculator" },
        content: {
          "zh-TW": "透過 `Select Case` 和函式設計一個支援四則運算的計算機，練習 VB.NET 的條件判斷與函式語法。",
          en: "Build a four-operation calculator using `Select Case` and functions, practicing VB.NET conditional logic and function syntax."
        },
        defaultCode: `Module Program
    Function Calculate(a As Double, op As String, b As Double) As String
        Select Case op
            Case "+" : Return $"{a} + {b} = {a + b}"
            Case "-" : Return $"{a} - {b} = {a - b}"
            Case "*" : Return $"{a} × {b} = {a * b}"
            Case "/"
                If b = 0 Then Return "錯誤：除以零"
                Return $"{a} ÷ {b} = {a / b:F4}"
            Case Else : Return "未知運算子"
        End Select
    End Function

    Sub Main()
        Console.WriteLine(Calculate(10, "+", 5))
        Console.WriteLine(Calculate(10, "-", 3))
        Console.WriteLine(Calculate(6, "*", 7))
        Console.WriteLine(Calculate(22, "/", 7))
        Console.WriteLine(Calculate(10, "/", 0))
    End Sub
End Module`
      }
    ]
  },

  sql: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "subqueries",
        title: { "zh-TW": "子查詢", en: "Subqueries" },
        content: {
          "zh-TW": "子查詢（subquery）是嵌套在另一個 SQL 語句中的查詢，可用於 WHERE、FROM、SELECT 子句中，實現複雜的條件篩選。",
          en: "A subquery is a query nested inside another SQL statement. Used in WHERE, FROM, or SELECT clauses to enable complex filtering."
        },
        defaultCode: `CREATE TABLE employees (
  id INTEGER, name TEXT, dept TEXT, salary INTEGER
);
INSERT INTO employees VALUES
  (1,'Alice','Eng',90000),(2,'Bob','Eng',85000),
  (3,'Carol','Mkt',75000),(4,'Dave','Mkt',72000),
  (5,'Eve','Eng',92000),(6,'Frank','HR',68000);

-- 高於平均薪資的員工
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)
ORDER BY salary DESC;`,
        exercise: {
          question: { "zh-TW": "找出各部門薪資最高的員工姓名與薪資。", en: "Find the highest-paid employee in each department." },
          hint: { "zh-TW": "用子查詢找各部門的 MAX(salary)，再 JOIN 回原表。", en: "Use a subquery to find MAX(salary) per dept, then join back." },
          answer: `SELECT e.name, e.dept, e.salary
FROM employees e
WHERE e.salary = (
  SELECT MAX(salary) FROM employees
  WHERE dept = e.dept
);`
        }
      },
      {
        id: "aggregate-advanced",
        title: { "zh-TW": "進階聚合", en: "Advanced Aggregation" },
        content: {
          "zh-TW": "`GROUP BY` 搭配 `HAVING` 過濾分組結果；`CASE WHEN` 可做條件統計，實現樞紐分析（pivot）效果。",
          en: "`GROUP BY` with `HAVING` filters grouped results; `CASE WHEN` enables conditional counting for pivot-like analysis."
        },
        defaultCode: `CREATE TABLE orders (
  id INTEGER, customer TEXT,
  product TEXT, amount INTEGER, month INTEGER
);
INSERT INTO orders VALUES
  (1,'Alice','Book',120,1),(2,'Bob','Pen',30,1),
  (3,'Alice','Laptop',2000,2),(4,'Carol','Book',120,2),
  (5,'Bob','Laptop',2000,3),(6,'Alice','Pen',30,3),
  (7,'Carol','Laptop',2000,1),(8,'Bob','Book',120,2);

-- 各客戶總消費，只顯示超過 500 的
SELECT customer,
       COUNT(*) AS orders,
       SUM(amount) AS total
FROM orders
GROUP BY customer
HAVING total > 500
ORDER BY total DESC;

-- 各產品按月份統計（CASE WHEN 樞紐）
SELECT product,
  SUM(CASE WHEN month=1 THEN amount ELSE 0 END) AS "1月",
  SUM(CASE WHEN month=2 THEN amount ELSE 0 END) AS "2月",
  SUM(CASE WHEN month=3 THEN amount ELSE 0 END) AS "3月"
FROM orders
GROUP BY product;`
      },
      {
        id: "self-join",
        title: { "zh-TW": "自我連接與遞迴查詢", en: "Self Join & Hierarchical Data" },
        content: {
          "zh-TW": "自我連接（self join）讓同一張表與自身關聯，常用於組織結構、員工與主管關係等階層資料的查詢。",
          en: "A self join relates a table to itself, commonly used for hierarchical data like org charts and employee-manager relationships."
        },
        defaultCode: `CREATE TABLE staff (
  id INTEGER, name TEXT, manager_id INTEGER
);
INSERT INTO staff VALUES
  (1,'CEO',NULL),(2,'VP-Eng',1),(3,'VP-Mkt',1),
  (4,'Lead A',2),(5,'Lead B',2),(6,'Mkt Mgr',3),
  (7,'Dev 1',4),(8,'Dev 2',4),(9,'Marketer',6);

-- 員工與其直屬主管
SELECT e.name AS employee,
       COALESCE(m.name,'（無）') AS manager
FROM staff e
LEFT JOIN staff m ON e.manager_id = m.id
ORDER BY e.id;`
      }
    ]
  },

  r: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci-r",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "R 的向量化操作讓費波那契數列的生成非常簡潔。同時展示 R 的遞迴函式語法。",
          en: "R's vectorized operations make Fibonacci generation concise. This also demonstrates R's recursive function syntax."
        },
        defaultCode: `# 迴圈版
fib_vec <- function(n) {
  v <- numeric(n)
  v[1] <- 0; if (n > 1) v[2] <- 1
  for (i in seq_len(max(0, n-2)) + 2)
    v[i] <- v[i-1] + v[i-2]
  v
}

seq <- fib_vec(15)
cat("前15項：", seq, "\\n")

# 找出 1000 以內的費波那契數
fibs <- fib_vec(30)
cat("1000以內：", fibs[fibs < 1000], "\\n")

# 黃金比例（相鄰項之比趨近 φ）
ratios <- fibs[-1] / fibs[-length(fibs)]
cat(sprintf("黃金比例趨近：%.6f\\n", tail(ratios[is.finite(ratios)], 1)))`
      },
      {
        id: "sorting-r",
        title: { "zh-TW": "排序與搜尋", en: "Sorting & Searching" },
        content: {
          "zh-TW": "R 內建 `sort()`、`order()`、`rank()` 等排序函式，`which()` 和邏輯索引可快速搜尋元素。",
          en: "R has built-in `sort()`, `order()`, and `rank()`. Use `which()` and logical indexing for efficient element search."
        },
        defaultCode: `scores <- c(72, 85, 91, 68, 95, 78, 88, 76, 82, 90)
names(scores) <- paste0("S", 1:10)

cat("原始：", scores, "\\n")
cat("升序：", sort(scores), "\\n")
cat("降序：", sort(scores, decreasing=TRUE), "\\n")

# order() 回傳排序後的原始索引
idx <- order(scores, decreasing=TRUE)
cat("\\n排名前3名：\\n")
for (i in 1:3)
  cat(sprintf("  第%d名：%s = %d分\\n", i, names(scores)[idx[i]], scores[idx[i]]))

# 搜尋
cat("\\n分數 >= 88 的學生：", names(scores)[scores >= 88], "\\n")
cat("最高分學生：", names(which.max(scores)), "\\n")`
      },
      {
        id: "apply-family",
        title: { "zh-TW": "apply 函式族", en: "The apply Family" },
        content: {
          "zh-TW": "`apply`、`sapply`、`lapply` 是 R 取代迴圈的向量化工具，讓程式碼更簡潔、效能更好。",
          en: "`apply`, `sapply`, `lapply` are R's vectorized alternatives to loops — more concise and often faster."
        },
        defaultCode: `# sapply：對向量每個元素套用函式
squares <- sapply(1:10, function(x) x^2)
cat("平方：", squares, "\\n")

# lapply：回傳 list
results <- lapply(list(a=1:5, b=6:10, c=11:15), function(v)
  list(mean=mean(v), sd=sd(v)))
for (nm in names(results))
  cat(sprintf("%s: mean=%.1f sd=%.2f\\n", nm, results[[nm]]$mean, results[[nm]]$sd))

# apply：對矩陣的行或列操作
m <- matrix(1:12, nrow=3)
cat("\\n矩陣：\\n"); print(m)
cat("各列總和：", apply(m, 1, sum), "\\n")
cat("各欄最大：", apply(m, 2, max), "\\n")`
      }
    ]
  },

  delphi: {
    id: "classics",
    title: { "zh-TW": "教科書經典範例", en: "Classic Textbook Examples" },
    lessons: [
      {
        id: "fibonacci-delphi",
        title: { "zh-TW": "費波那契數列", en: "Fibonacci Sequence" },
        content: {
          "zh-TW": "Delphi 用動態陣列實作費波那契，展示 `SetLength`、`for` 迴圈與 `Int64` 大數型別的使用。",
          en: "Delphi implements Fibonacci with dynamic arrays, demonstrating `SetLength`, `for` loops, and the `Int64` type for large numbers."
        },
        defaultCode: `program FibDemo;
{$APPTYPE CONSOLE}
uses SysUtils;

function Fibonacci(n: Integer): TArray<Int64>;
var
  i: Integer;
begin
  SetLength(Result, n);
  if n > 0 then Result[0] := 0;
  if n > 1 then Result[1] := 1;
  for i := 2 to n - 1 do
    Result[i] := Result[i-1] + Result[i-2];
end;

var
  seq: TArray<Int64>;
  i: Integer;
begin
  seq := Fibonacci(15);
  Write('前15項：');
  for i := 0 to High(seq) do
    Write(seq[i], ' ');
  WriteLn;
  WriteLn('第20項：', Fibonacci(21)[20]);
  ReadLn;
end.`
      },
      {
        id: "sorting-delphi",
        title: { "zh-TW": "氣泡排序", en: "Bubble Sort" },
        content: {
          "zh-TW": "Delphi 的氣泡排序展示陣列傳遞（`var` 參數）與巢狀迴圈，是學習 Delphi 語法的必備練習。",
          en: "Delphi bubble sort demonstrates array passing (`var` parameter) and nested loops — essential practice for learning Delphi syntax."
        },
        defaultCode: `program SortDemo;
{$APPTYPE CONSOLE}

procedure BubbleSort(var arr: array of Integer);
var
  i, j, tmp: Integer;
begin
  for i := 0 to High(arr) - 1 do
    for j := 0 to High(arr) - i - 1 do
      if arr[j] > arr[j+1] then
      begin
        tmp := arr[j];
        arr[j] := arr[j+1];
        arr[j+1] := tmp;
      end;
end;

procedure PrintArr(const arr: array of Integer);
var i: Integer;
begin
  for i := 0 to High(arr) do
    Write(arr[i], ' ');
  WriteLn;
end;

var
  data: array of Integer;
begin
  data := TArray<Integer>.Create(64, 34, 25, 12, 22, 11, 90);
  Write('排序前：'); PrintArr(data);
  BubbleSort(data);
  Write('排序後：'); PrintArr(data);
  ReadLn;
end.`,
        exercise: {
          question: { "zh-TW": "撰寫函式 `IsPrime(n: Integer): Boolean` 判斷質數。", en: "Write `IsPrime(n: Integer): Boolean` to check if n is prime." },
          hint: { "zh-TW": "從 2 到 Trunc(Sqrt(n)) 逐一測試，若能整除回傳 False。", en: "Test divisors from 2 to Trunc(Sqrt(n)); return False if any divides evenly." },
          answer: `program PrimeDemo;
{$APPTYPE CONSOLE}
uses Math;

function IsPrime(n: Integer): Boolean;
var i: Integer;
begin
  if n < 2 then Exit(False);
  for i := 2 to Trunc(Sqrt(n)) do
    if n mod i = 0 then Exit(False);
  Result := True;
end;

var n: Integer;
begin
  for n in [1, 2, 7, 10, 13, 25] do
    WriteLn(n, ': ', IfThen(IsPrime(n), '質數', '合數'));
  ReadLn;
end.`
        }
      },
      {
        id: "string-delphi",
        title: { "zh-TW": "字串操作", en: "String Operations" },
        content: {
          "zh-TW": "Delphi 內建豐富的字串函式：`Length`、`Copy`、`Pos`、`UpperCase`、`ReverseString`（SysUtils）等，字串索引從 1 開始。",
          en: "Delphi has rich built-in string functions: `Length`, `Copy`, `Pos`, `UpperCase`, `ReverseString` (SysUtils). Note: string indexing starts at 1."
        },
        defaultCode: `program StringDemo;
{$APPTYPE CONSOLE}
uses SysUtils;

function IsPalindrome(const s: string): Boolean;
var
  lo, hi: Integer;
  lower: string;
begin
  lower := LowerCase(s);
  lo := 1; hi := Length(lower);
  while lo < hi do
  begin
    if lower[lo] <> lower[hi] then Exit(False);
    Inc(lo); Dec(hi);
  end;
  Result := True;
end;

var
  words: array of string;
  w: string;
begin
  words := TArray<string>.Create('racecar','hello','level','Delphi');
  for w in words do
    WriteLn(Format('"%s" %s迴文', [w, IfThen(IsPalindrome(w),'是','不是')]));

  WriteLn('反轉：', ReverseString('Hello Delphi'));
  WriteLn('大寫：', UpperCase('delphi rocks'));
  ReadLn;
end.`
      }
    ]
  }
};

// 合併新章節進現有資料
for (const [lang, chapter] of Object.entries(classics)) {
  if (!data.languages[lang]) data.languages[lang] = [];
  data.languages[lang].push(chapter);
}

data.generatedAt = "2026-05-25";
data.version = "3";

writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
console.log("完成！各語言新增章節：");
for (const [lang, chs] of Object.entries(data.languages)) {
  console.log(`  ${lang}: ${chs.map(c => c.id).join(", ")}`);
}
