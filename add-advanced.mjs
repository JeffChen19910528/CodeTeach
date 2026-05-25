import { readFileSync, writeFileSync } from "fs";

const file = "content-updates.json";
const data = JSON.parse(readFileSync(file, "utf8"));

const advanced = {
  python: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "quick-sort",
        title: { "zh-TW": "快速排序", en: "Quick Sort" },
        content: {
          "zh-TW": "快速排序（Quick Sort）平均 O(n log n)，以「分治」為核心：選一個基準值（pivot），將小於它的放左邊、大於的放右邊，遞迴處理兩側。是實務上最常用的排序演算法。",
          en: "Quick Sort averages O(n log n) using divide-and-conquer: pick a pivot, partition elements smaller left and larger right, then recurse. The most practical sorting algorithm in real use."
        },
        defaultCode: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)

# in-place 版本（省記憶體）
def quick_sort_inplace(arr, lo=0, hi=None):
    if hi is None: hi = len(arr) - 1
    if lo >= hi: return
    pivot = arr[hi]
    i = lo - 1
    for j in range(lo, hi):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[hi] = arr[hi], arr[i+1]
    mid = i + 1
    quick_sort_inplace(arr, lo, mid - 1)
    quick_sort_inplace(arr, mid + 1, hi)

data = [3, 6, 8, 10, 1, 2, 1]
print("功能版：", quick_sort(data))
quick_sort_inplace(data)
print("原地版：", data)`,
        exercise: {
          question: { "zh-TW": "實作 `merge_sort(arr)` 合併排序，時間複雜度 O(n log n)。", en: "Implement `merge_sort(arr)` with O(n log n) time complexity." },
          hint: { "zh-TW": "將陣列對半切，遞迴排序兩半，再合併兩個已排序的子陣列。", en: "Split the array in half, recursively sort each half, then merge the two sorted halves." },
          answer: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:]); result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))`
        }
      },
      {
        id: "graph-bfs-dfs",
        title: { "zh-TW": "圖的 BFS 與 DFS", en: "Graph BFS & DFS" },
        content: {
          "zh-TW": "廣度優先搜尋（BFS）用佇列找最短路徑；深度優先搜尋（DFS）用堆疊或遞迴探索所有路徑。兩者是圖論的基礎演算法。",
          en: "BFS uses a queue to find shortest paths; DFS uses a stack or recursion to explore all paths. Both are foundational graph algorithms."
        },
        defaultCode: `from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

def bfs(graph, start):
    visited = []
    queue = deque([start])
    seen = {start}
    while queue:
        node = queue.popleft()
        visited.append(node)
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                queue.append(neighbor)
    return visited

def dfs(graph, start, visited=None):
    if visited is None: visited = []
    visited.append(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited

print("BFS：", bfs(graph, 'A'))
print("DFS：", dfs(graph, 'A'))`,
        exercise: {
          question: { "zh-TW": "用 BFS 找出從 'A' 到 'F' 的最短路徑（回傳節點列表）。", en: "Use BFS to find the shortest path from 'A' to 'F' (return list of nodes)." },
          hint: { "zh-TW": "在 BFS 中記錄每個節點的前一個節點（parent dict），到達終點後回溯路徑。", en: "Track each node's parent in a dict during BFS, then backtrack from the target." },
          answer: `from collections import deque

graph = {'A':['B','C'],'B':['A','D','E'],'C':['A','F'],'D':['B'],'E':['B','F'],'F':['C','E']}

def shortest_path(graph, start, end):
    parent = {start: None}
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node == end:
            path = []
            while node is not None:
                path.append(node)
                node = parent[node]
            return path[::-1]
        for nb in graph[node]:
            if nb not in parent:
                parent[nb] = node
                queue.append(nb)
    return []

print(shortest_path(graph, 'A', 'F'))`
        }
      },
      {
        id: "dp-knapsack",
        title: { "zh-TW": "動態規劃：背包問題", en: "Dynamic Programming: Knapsack" },
        content: {
          "zh-TW": "0/1 背包問題：有限重量的背包，選擇物品使價值最大。是動態規劃的經典範例，狀態轉移方程為 `dp[i][w] = max(dp[i-1][w], dp[i-1][w-w_i] + v_i)`。",
          en: "0/1 Knapsack: maximize value within a weight limit. A classic DP problem with recurrence `dp[i][w] = max(dp[i-1][w], dp[i-1][w-w_i] + v_i)`."
        },
        defaultCode: `def knapsack(capacity, weights, values):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i-1][w]  # 不選第 i 件
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w],
                               dp[i-1][w - weights[i-1]] + values[i-1])

    # 回溯找出選了哪些物品
    chosen = []
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i-1][w]:
            chosen.append(i - 1)
            w -= weights[i-1]

    return dp[n][capacity], chosen[::-1]

items = ["筆電", "手機", "平板", "書", "耳機"]
weights = [3, 1, 2, 1, 1]
values  = [10, 6, 8, 4, 5]
capacity = 5

max_val, selected = knapsack(capacity, weights, values)
print(f"最大價值：{max_val}")
print(f"選擇物品：{[items[i] for i in selected]}")`
      }
    ]
  },

  javascript: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "quick-sort-js",
        title: { "zh-TW": "快速排序", en: "Quick Sort" },
        content: {
          "zh-TW": "快速排序是面試最常考的排序演算法。JS 可用函數式風格寫出簡潔版，或用原地（in-place）版本節省記憶體。",
          en: "Quick Sort is the most interview-tested sorting algorithm. JS allows a clean functional version, or an in-place version to save memory."
        },
        defaultCode: `// 函數式版（簡潔）
const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  return [
    ...quickSort(arr.filter(x => x < pivot)),
    ...arr.filter(x => x === pivot),
    ...quickSort(arr.filter(x => x > pivot))
  ];
};

// 泛型版（可排序物件）
const sortBy = (arr, key) =>
  arr.length <= 1 ? arr : (() => {
    const pivot = arr[Math.floor(arr.length / 2)][key];
    return [
      ...sortBy(arr.filter(x => x[key] < pivot), key),
      ...arr.filter(x => x[key] === pivot),
      ...sortBy(arr.filter(x => x[key] > pivot), key)
    ];
  })();

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));

const students = [
  {name:"Alice", score:85}, {name:"Bob", score:92}, {name:"Carol", score:78}
];
console.log(sortBy(students, "score").map(s => s.name));`
      },
      {
        id: "graph-js",
        title: { "zh-TW": "圖的 BFS 與 DFS", en: "Graph BFS & DFS" },
        content: {
          "zh-TW": "BFS 用 `Map` 追蹤父節點可重建最短路徑；DFS 可用來偵測環、拓撲排序。面試中圖的題目幾乎都用這兩種方法解決。",
          en: "BFS with a parent `Map` reconstructs shortest paths; DFS detects cycles and topological order. Nearly all graph interview problems use these two approaches."
        },
        defaultCode: `const graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'D', 'E']],
  ['C', ['A', 'F']],
  ['D', ['B']],
  ['E', ['B', 'F']],
  ['F', ['C', 'E']]
]);

function bfsPath(graph, start, end) {
  const parent = new Map([[start, null]]);
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (node === end) {
      const path = [];
      let cur = end;
      while (cur !== null) { path.unshift(cur); cur = parent.get(cur); }
      return path;
    }
    for (const nb of graph.get(node) ?? []) {
      if (!parent.has(nb)) { parent.set(nb, node); queue.push(nb); }
    }
  }
  return [];
}

function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  for (const nb of graph.get(start) ?? [])
    if (!visited.has(nb)) dfs(graph, nb, visited);
  return [...visited];
}

console.log("最短路徑 A→F：", bfsPath(graph, 'A', 'F'));
console.log("DFS 遍歷：", dfs(graph, 'A'));`
      },
      {
        id: "leetcode-patterns",
        title: { "zh-TW": "LeetCode 常見題型", en: "Common LeetCode Patterns" },
        content: {
          "zh-TW": "Two Pointers（雙指針）與 Sliding Window（滑動視窗）是解決陣列與字串問題的高頻技巧，可將 O(n²) 降至 O(n)。",
          en: "Two Pointers and Sliding Window are high-frequency techniques for array/string problems, reducing O(n²) to O(n)."
        },
        defaultCode: `// Two Pointers：在排序陣列找兩數之和等於目標
function twoSum(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === target) return [l, r];
    else if (sum < target) l++;
    else r--;
  }
  return [];
}

// Sliding Window：最長無重複子字串
function lengthOfLongestSubstring(s) {
  const map = new Map();
  let max = 0, start = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= start)
      start = map.get(s[i]) + 1;
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}

console.log(twoSum([2,7,11,15], 9));          // [0,1]
console.log(twoSum([3,2,4], 6));              // [1,2]
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew"));   // 3`,
        exercise: {
          question: { "zh-TW": "用 Sliding Window 找出陣列中長度為 k 的連續子陣列的最大總和。", en: "Use Sliding Window to find the maximum sum of a contiguous subarray of length k." },
          hint: { "zh-TW": "先計算前 k 個元素的和，之後每移動一格就加新元素、減舊元素。", en: "Compute the sum of the first k elements, then slide by adding the new element and removing the old one." },
          answer: `function maxSumSubarray(nums, k) {
  let windowSum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
console.log(maxSumSubarray([2,1,5,1,3,2], 3)); // 9
console.log(maxSumSubarray([2,3,4,1,5], 2));   // 7`
        }
      }
    ]
  },

  java: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "quick-sort-java",
        title: { "zh-TW": "快速排序", en: "Quick Sort" },
        content: {
          "zh-TW": "Java 的快速排序展示泛型（Comparable）的使用，`Arrays.sort()` 底層即使用雙軸快速排序（Dual-Pivot Quicksort）。",
          en: "Java Quick Sort demonstrates generics (Comparable). `Arrays.sort()` uses Dual-Pivot Quicksort internally."
        },
        defaultCode: `import java.util.Arrays;

class Main {
    static void quickSort(int[] arr, int lo, int hi) {
        if (lo >= hi) return;
        int pivot = arr[hi], i = lo - 1;
        for (int j = lo; j < hi; j++) {
            if (arr[j] <= pivot) {
                i++;
                int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
            }
        }
        int mid = i + 1;
        int tmp = arr[mid]; arr[mid] = arr[hi]; arr[hi] = tmp;
        quickSort(arr, lo, mid - 1);
        quickSort(arr, mid + 1, hi);
    }

    public static void main(String[] args) {
        int[] a = {10, 7, 8, 9, 1, 5};
        System.out.println("排序前：" + Arrays.toString(a));
        quickSort(a, 0, a.length - 1);
        System.out.println("排序後：" + Arrays.toString(a));
        System.out.println("Arrays.sort：" + Arrays.toString(new int[]{3,1,4,1,5,9,2,6}));
    }
}`
      },
      {
        id: "dp-java",
        title: { "zh-TW": "動態規劃：最長共同子序列", en: "DP: Longest Common Subsequence" },
        content: {
          "zh-TW": "LCS（最長共同子序列）是 DP 的經典問題，廣泛應用於 diff 工具、基因比對。狀態轉移：若字元相同則 `dp[i][j] = dp[i-1][j-1]+1`，否則取左/上最大值。",
          en: "LCS is a classic DP problem used in diff tools and bioinformatics. If chars match: `dp[i][j] = dp[i-1][j-1]+1`; otherwise take max of left/above."
        },
        defaultCode: `class Main {
    static String lcs(String a, String b) {
        int m = a.length(), n = b.length();
        int[][] dp = new int[m+1][n+1];

        for (int i = 1; i <= m; i++)
            for (int j = 1; j <= n; j++)
                if (a.charAt(i-1) == b.charAt(j-1))
                    dp[i][j] = dp[i-1][j-1] + 1;
                else
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);

        // 回溯重建 LCS 字串
        StringBuilder sb = new StringBuilder();
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (a.charAt(i-1) == b.charAt(j-1)) {
                sb.insert(0, a.charAt(i-1)); i--; j--;
            } else if (dp[i-1][j] > dp[i][j-1]) i--;
            else j--;
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(lcs("ABCBDAB", "BDCAB")); // BCAB
        System.out.println(lcs("AGGTAB", "GXTXAYB")); // GTAB
    }
}`
      },
      {
        id: "design-patterns",
        title: { "zh-TW": "設計模式：Singleton 與 Observer", en: "Design Patterns: Singleton & Observer" },
        content: {
          "zh-TW": "Singleton 確保類別只有一個實例；Observer 實現發布-訂閱模式，兩者是最常考的 GoF 設計模式。",
          en: "Singleton ensures one instance per class; Observer implements publish-subscribe. Both are the most frequently tested GoF design patterns."
        },
        defaultCode: `import java.util.ArrayList;
import java.util.List;

// Singleton（執行緒安全）
class Config {
    private static volatile Config instance;
    private String theme = "light";
    private Config() {}
    public static Config getInstance() {
        if (instance == null)
            synchronized (Config.class) {
                if (instance == null) instance = new Config();
            }
        return instance;
    }
    public String getTheme() { return theme; }
    public void setTheme(String t) { theme = t; }
}

// Observer
interface Observer { void update(String event); }

class EventBus {
    private List<Observer> listeners = new ArrayList<>();
    public void subscribe(Observer o) { listeners.add(o); }
    public void publish(String event) {
        listeners.forEach(o -> o.update(event));
    }
}

class Main {
    public static void main(String[] args) {
        Config c1 = Config.getInstance();
        Config c2 = Config.getInstance();
        c1.setTheme("dark");
        System.out.println("同一實例：" + (c1 == c2));
        System.out.println("主題：" + c2.getTheme());

        EventBus bus = new EventBus();
        bus.subscribe(e -> System.out.println("Logger: " + e));
        bus.subscribe(e -> System.out.println("UI: " + e));
        bus.publish("user_login");
    }
}`
      }
    ]
  },

  c: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "quick-sort-c",
        title: { "zh-TW": "快速排序", en: "Quick Sort" },
        content: {
          "zh-TW": "C 語言的 `qsort()` 是標準函式庫提供的快速排序，透過函式指標接受自訂比較邏輯，極為靈活。",
          en: "C's `qsort()` is the standard library Quick Sort. It accepts a function pointer for custom comparison, making it extremely flexible."
        },
        defaultCode: `#include <stdio.h>
#include <stdlib.h>

int cmp_asc(const void *a, const void *b) {
    return *(int*)a - *(int*)b;
}
int cmp_desc(const void *a, const void *b) {
    return *(int*)b - *(int*)a;
}

void print(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
}

// 自實作快速排序
void quicksort(int arr[], int lo, int hi) {
    if (lo >= hi) return;
    int pivot = arr[hi], i = lo - 1;
    for (int j = lo; j < hi; j++)
        if (arr[j] <= pivot) { i++; int t=arr[i]; arr[i]=arr[j]; arr[j]=t; }
    int t = arr[i+1]; arr[i+1] = arr[hi]; arr[hi] = t;
    quicksort(arr, lo, i);
    quicksort(arr, i+2, hi);
}

int main() {
    int a[] = {64,34,25,12,22,11,90};
    int b[] = {64,34,25,12,22,11,90};
    int n = 7;
    qsort(a, n, sizeof(int), cmp_asc);
    printf("qsort 升序："); print(a, n);
    qsort(a, n, sizeof(int), cmp_desc);
    printf("qsort 降序："); print(a, n);
    quicksort(b, 0, n-1);
    printf("自實作："); print(b, n);
    return 0;
}`
      },
      {
        id: "linked-list-c",
        title: { "zh-TW": "鏈結串列操作", en: "Linked List Operations" },
        content: {
          "zh-TW": "鏈結串列是面試必考題，需掌握插入、刪除、反轉。C 語言用指標實作，`->` 運算子存取節點成員。",
          en: "Linked lists are a must in interviews. Master insert, delete, and reverse. C uses pointers and the `->` operator to access node members."
        },
        defaultCode: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node { int val; struct Node *next; } Node;

Node *new_node(int v) {
    Node *n = malloc(sizeof(Node));
    n->val = v; n->next = NULL;
    return n;
}

Node *push_front(Node *head, int v) {
    Node *n = new_node(v);
    n->next = head;
    return n;
}

Node *reverse(Node *head) {
    Node *prev = NULL, *cur = head;
    while (cur) {
        Node *next = cur->next;
        cur->next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

void print_list(Node *head) {
    for (Node *c = head; c; c = c->next)
        printf("%d%s", c->val, c->next ? " -> " : "\\n");
}

int main() {
    Node *head = NULL;
    for (int i : (int[]){1,2,3,4,5}) head = push_front(head, i);
    printf("原始："); print_list(head);
    head = reverse(head);
    printf("反轉："); print_list(head);
    return 0;
}`
      }
    ]
  },

  cpp: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "dp-cpp",
        title: { "zh-TW": "動態規劃實作", en: "Dynamic Programming" },
        content: {
          "zh-TW": "最長遞增子序列（LIS）是 DP 的經典題。O(n²) DP 解法直觀；搭配二分搜尋可達 O(n log n)，是進階面試題。",
          en: "Longest Increasing Subsequence (LIS) is a classic DP problem. O(n²) DP is intuitive; adding binary search achieves O(n log n) for advanced interviews."
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// O(n²) DP
int lis_dp(const vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);
    for (int i = 1; i < n; i++)
        for (int j = 0; j < i; j++)
            if (nums[j] < nums[i])
                dp[i] = max(dp[i], dp[j] + 1);
    return *max_element(dp.begin(), dp.end());
}

// O(n log n) 耐心排序
int lis_nlogn(const vector<int>& nums) {
    vector<int> tails;
    for (int x : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) tails.push_back(x);
        else *it = x;
    }
    return tails.size();
}

int main() {
    vector<int> a = {10, 9, 2, 5, 3, 7, 101, 18};
    cout << "序列：";
    for (int x : a) cout << x << " ";
    cout << "\nLIS 長度（DP）：" << lis_dp(a) << "\n";
    cout << "LIS 長度（O(n log n)）：" << lis_nlogn(a) << "\n";
    return 0;
}`
      },
      {
        id: "graph-cpp",
        title: { "zh-TW": "圖論：最短路徑 Dijkstra", en: "Graph: Dijkstra's Shortest Path" },
        content: {
          "zh-TW": "Dijkstra 演算法求單源最短路徑，用優先佇列（min-heap）將時間複雜度降至 O((V+E) log V)，是導航系統的核心演算法。",
          en: "Dijkstra finds single-source shortest paths. Using a priority queue (min-heap) achieves O((V+E) log V) — the core algorithm behind navigation systems."
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

typedef pair<int,int> pii;

vector<int> dijkstra(int n, vector<vector<pii>>& adj, int src) {
    vector<int> dist(n, INT_MAX);
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    dist[src] = 0;
    pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto [w, v] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

int main() {
    int n = 5;
    vector<vector<pii>> adj(n);
    // {weight, to}
    adj[0].push_back({4,1}); adj[0].push_back({1,2});
    adj[1].push_back({1,3}); adj[2].push_back({2,1});
    adj[2].push_back({5,3}); adj[3].push_back({3,4});

    auto dist = dijkstra(n, adj, 0);
    for (int i = 0; i < n; i++)
        cout << "0 到 " << i << "：" << dist[i] << "\n";
    return 0;
}`
      }
    ]
  },

  csharp: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "dp-csharp",
        title: { "zh-TW": "動態規劃：硬幣找零", en: "DP: Coin Change" },
        content: {
          "zh-TW": "硬幣找零是 DP 的入門題：用最少硬幣湊出目標金額。狀態轉移：`dp[i] = min(dp[i], dp[i - coin] + 1)`。",
          en: "Coin Change is an introductory DP problem: make a target amount with the fewest coins. Recurrence: `dp[i] = min(dp[i], dp[i - coin] + 1)`."
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Program {
    static int CoinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Array.Fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++)
            foreach (int c in coins)
                if (c <= i)
                    dp[i] = Math.Min(dp[i], dp[i - c] + 1);
        return dp[amount] > amount ? -1 : dp[amount];
    }

    static int[] CoinChangeCoins(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        int[] last = new int[amount + 1];
        Array.Fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++)
            foreach (int c in coins)
                if (c <= i && dp[i-c]+1 < dp[i]) {
                    dp[i] = dp[i-c] + 1; last[i] = c;
                }
        var result = new List<int>();
        while (amount > 0) { result.Add(last[amount]); amount -= last[amount]; }
        return result.ToArray();
    }

    static void Main() {
        int[] coins = {1, 5, 10, 25};
        Console.WriteLine($"41元最少硬幣：{CoinChange(coins, 41)}枚");
        Console.WriteLine("組合：" + string.Join("+", CoinChangeCoins(coins, 41)));
    }
}`
      },
      {
        id: "leetcode-csharp",
        title: { "zh-TW": "常見面試題型", en: "Common Interview Patterns" },
        content: {
          "zh-TW": "HashMap 計數、前綴和（prefix sum）是解決陣列題的高頻技巧，搭配 C# 的 Dictionary 和 LINQ 可寫出極簡潔的解法。",
          en: "HashMap counting and prefix sums are high-frequency array techniques. Combined with C#'s Dictionary and LINQ, solutions become very concise."
        },
        defaultCode: `using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    // 兩數之和（HashMap O(n)）
    static int[] TwoSum(int[] nums, int target) {
        var map = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (map.ContainsKey(complement))
                return new[] { map[complement], i };
            map[nums[i]] = i;
        }
        return Array.Empty<int>();
    }

    // 子陣列總和等於 k 的個數（前綴和）
    static int SubarraySum(int[] nums, int k) {
        var prefixCount = new Dictionary<int, int> {{ 0, 1 }};
        int sum = 0, count = 0;
        foreach (int n in nums) {
            sum += n;
            count += prefixCount.GetValueOrDefault(sum - k, 0);
            prefixCount[sum] = prefixCount.GetValueOrDefault(sum, 0) + 1;
        }
        return count;
    }

    static void Main() {
        Console.WriteLine(string.Join(",", TwoSum(new[]{2,7,11,15}, 9))); // 0,1
        Console.WriteLine(SubarraySum(new[]{1,1,1}, 2));                  // 2
        Console.WriteLine(SubarraySum(new[]{1,2,3}, 3));                  // 2
    }
}`
      }
    ]
  },

  sql: {
    id: "advanced-queries",
    title: { "zh-TW": "進階查詢技巧", en: "Advanced Query Techniques" },
    lessons: [
      {
        id: "window-functions",
        title: { "zh-TW": "視窗函數", en: "Window Functions" },
        content: {
          "zh-TW": "視窗函數（Window Functions）在不收縮行數的情況下計算聚合值，`ROW_NUMBER()`、`RANK()`、`LAG()`、`SUM() OVER()` 是最常用的四種。",
          en: "Window functions compute aggregates without collapsing rows. `ROW_NUMBER()`, `RANK()`, `LAG()`, and `SUM() OVER()` are the four most used."
        },
        defaultCode: `CREATE TABLE sales (
  rep TEXT, month INTEGER, amount INTEGER
);
INSERT INTO sales VALUES
  ('Alice',1,3000),('Alice',2,4500),('Alice',3,3800),
  ('Bob',1,2800),('Bob',2,3200),('Bob',3,4100),
  ('Carol',1,3500),('Carol',2,3000),('Carol',3,4200);

-- 累計銷售額（OVER）
SELECT rep, month, amount,
  SUM(amount) OVER (PARTITION BY rep ORDER BY month) AS running_total
FROM sales;`,
        exercise: {
          question: { "zh-TW": "用 RANK() 列出每個月各業務員的業績排名。", en: "Use RANK() to rank each rep's sales within each month." },
          hint: { "zh-TW": "RANK() OVER (PARTITION BY month ORDER BY amount DESC)。", en: "RANK() OVER (PARTITION BY month ORDER BY amount DESC)." },
          answer: `SELECT rep, month, amount,
  RANK() OVER (PARTITION BY month ORDER BY amount DESC) AS rnk
FROM sales
ORDER BY month, rnk;`
        }
      },
      {
        id: "cte",
        title: { "zh-TW": "共用資料表運算式 (CTE)", en: "Common Table Expressions (CTE)" },
        content: {
          "zh-TW": "CTE（`WITH` 子句）讓複雜查詢分層撰寫，提升可讀性。遞迴 CTE 可處理階層資料，如組織圖或分類樹。",
          en: "CTEs (`WITH` clause) decompose complex queries into readable layers. Recursive CTEs handle hierarchical data like org charts or category trees."
        },
        defaultCode: `CREATE TABLE category (id INTEGER, name TEXT, parent_id INTEGER);
INSERT INTO category VALUES
  (1,'電子產品',NULL),(2,'電腦',1),(3,'手機',1),
  (4,'筆電',2),(5,'桌機',2),(6,'Android',3),(7,'iPhone',3),
  (8,'遊戲筆電',4);

-- 遞迴 CTE：展示完整分類路徑
WITH RECURSIVE tree AS (
  SELECT id, name, parent_id, name AS path, 0 AS depth
  FROM category WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id,
         tree.path || ' > ' || c.name,
         tree.depth + 1
  FROM category c JOIN tree ON c.parent_id = tree.id
)
SELECT depth, path FROM tree ORDER BY path;`
      }
    ]
  },

  r: {
    id: "algorithms",
    title: { "zh-TW": "演算法與實作", en: "Algorithms & Implementation" },
    lessons: [
      {
        id: "functional-r",
        title: { "zh-TW": "函數式程式設計", en: "Functional Programming in R" },
        content: {
          "zh-TW": "R 的 `Reduce()`、`Filter()`、`Map()` 是函數式程式設計的核心，搭配匿名函式可寫出高度表達性的資料處理流水線。",
          en: "R's `Reduce()`, `Filter()`, and `Map()` are functional programming cores. Combined with anonymous functions, they create expressive data pipelines."
        },
        defaultCode: `# Reduce：累積計算
factorials <- Reduce("*", 1:10, accumulate = TRUE)
cat("1到10的階乘：\n"); print(factorials)

# Filter：篩選
primes_under_50 <- Filter(function(n) {
  if (n < 2) return(FALSE)
  all(n %% 2:max(2, floor(sqrt(n))) != 0)
}, 2:50)
cat("\n50以內質數：", primes_under_50, "\n")

# Map + Reduce：pipeline
words <- c("hello", "world", "R", "programming")
result <- Reduce("+",
  Map(nchar, Filter(function(w) nchar(w) > 3, words)))
cat("\n長度>3的單字總字元數：", result, "\n")`
      },
      {
        id: "simulation",
        title: { "zh-TW": "蒙地卡羅模擬", en: "Monte Carlo Simulation" },
        content: {
          "zh-TW": "蒙地卡羅模擬用大量隨機抽樣估計數值解，最經典的是用它估算 π 值。R 的向量化讓百萬次模擬只需一行。",
          en: "Monte Carlo simulation uses massive random sampling to estimate values. Estimating π is the classic example. R's vectorization runs a million trials in one line."
        },
        defaultCode: `set.seed(42)

# 估算 π
monte_carlo_pi <- function(n) {
  x <- runif(n); y <- runif(n)
  4 * sum(x^2 + y^2 <= 1) / n
}

for (n in c(1000, 10000, 100000, 1000000)) {
  pi_est <- monte_carlo_pi(n)
  cat(sprintf("n=%7d: π ≈ %.5f (誤差 %.5f)\n",
              n, pi_est, abs(pi_est - pi)))
}

# 模擬骰子：投 10000 次，各點數出現機率
rolls <- sample(1:6, 10000, replace = TRUE)
cat("\n骰子各面機率：\n")
print(round(table(rolls) / 10000, 3))`
      }
    ]
  },

  visualbasic: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "dp-vb",
        title: { "zh-TW": "動態規劃：背包問題", en: "DP: Knapsack Problem" },
        content: {
          "zh-TW": "VB.NET 用二維陣列實作 0/1 背包問題，展示動態規劃的填表過程與回溯選取物品的方法。",
          en: "VB.NET implements 0/1 Knapsack with a 2D array, demonstrating the DP table-filling process and backtracking to find selected items."
        },
        defaultCode: `Module Program
    Sub Main()
        Dim names() As String = {"筆電", "手機", "平板", "書", "耳機"}
        Dim weights() As Integer = {3, 1, 2, 1, 1}
        Dim values() As Integer = {10, 6, 8, 4, 5}
        Dim capacity As Integer = 5
        Dim n As Integer = names.Length

        Dim dp(n, capacity) As Integer
        For i As Integer = 1 To n
            For w As Integer = 0 To capacity
                dp(i, w) = dp(i - 1, w)
                If weights(i - 1) <= w Then
                    dp(i, w) = Math.Max(dp(i, w), dp(i - 1, w - weights(i - 1)) + values(i - 1))
                End If
            Next
        Next

        Console.WriteLine($"最大價值：{dp(n, capacity)}")
        Console.Write("選擇物品：")
        Dim w2 As Integer = capacity
        For i As Integer = n To 1 Step -1
            If dp(i, w2) <> dp(i - 1, w2) Then
                Console.Write(names(i - 1) & " ")
                w2 -= weights(i - 1)
            End If
        Next
        Console.WriteLine()
    End Sub
End Module`
      }
    ]
  },

  delphi: {
    id: "algorithms",
    title: { "zh-TW": "演算法實作", en: "Algorithm Implementation" },
    lessons: [
      {
        id: "quick-sort-delphi",
        title: { "zh-TW": "快速排序", en: "Quick Sort" },
        content: {
          "zh-TW": "Delphi 的快速排序展示遞迴、陣列傳遞與 `var` 參數的綜合應用，Delphi RTL 的 `TArray.Sort` 底層也使用快速排序。",
          en: "Delphi Quick Sort combines recursion, array passing, and `var` parameters. The RTL's `TArray.Sort` also uses Quick Sort internally."
        },
        defaultCode: `program QuickSortDemo;
{$APPTYPE CONSOLE}

procedure QuickSort(var arr: array of Integer; Lo, Hi: Integer);
var
  pivot, tmp, i, j: Integer;
begin
  if Lo >= Hi then Exit;
  pivot := arr[(Lo + Hi) div 2];
  i := Lo; j := Hi;
  while i <= j do
  begin
    while arr[i] < pivot do Inc(i);
    while arr[j] > pivot do Dec(j);
    if i <= j then
    begin
      tmp := arr[i]; arr[i] := arr[j]; arr[j] := tmp;
      Inc(i); Dec(j);
    end;
  end;
  QuickSort(arr, Lo, j);
  QuickSort(arr, i, Hi);
end;

var
  data: array of Integer;
  i: Integer;
begin
  data := TArray<Integer>.Create(10, 7, 8, 9, 1, 5, 3, 6);
  Write('排序前：');
  for i in data do Write(i, ' ');
  WriteLn;
  QuickSort(data, 0, High(data));
  Write('排序後：');
  for i in data do Write(i, ' ');
  WriteLn;
  ReadLn;
end.`
      }
    ]
  }
};

// 追加進階章節
for (const [lang, chapter] of Object.entries(advanced)) {
  if (!data.languages[lang]) data.languages[lang] = [];
  data.languages[lang].push(chapter);
}

data.generatedAt = "2026-05-25";
data.version = "4";

writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
console.log("進階章節新增完成！");
for (const [lang, chs] of Object.entries(data.languages)) {
  const total = chs.reduce((s, c) => s + c.lessons.length, 0);
  console.log(`  ${lang}: ${chs.length}章節, ${total}課程`);
}
