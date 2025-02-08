// data.ts

export const errorDetection = [
    {
      title: "Missing Semicolon",
      code: `#include <stdio.h>
  
  int main() {
      printf("Hello, World!")
      return 0;
  }`,
      explanation: "The semicolon (;) is missing after printf statement.",
      output: "Compilation error",
    },
    {
      title: "Undeclared Variable",
      code: `#include <stdio.h>
  
  int main() {
      x = 10;
      printf("%d", x);
      return 0;
  }`,
      explanation: "Variable 'x' is used without declaration.",
      output: "Compilation error",
    },
    {
      title: "Mismatched Braces",
      code: `#include <stdio.h>
  
  int main() {
      int a = 5;
      if (a > 0) {
          printf("Positive\n");
      return 0;
  }`,
      explanation: "Closing brace is missing for the if statement.",
      output: "Compilation error",
    },
    {
      title: "Incorrect Function Declaration",
      code: `#include <stdio.h>
  
  void add(a, b) {
      return a + b;
  }
  
  int main() {
      printf("%d", add(5, 3));
      return 0;
  }`,
      explanation: "Function parameters must have type declarations.",
      output: "Compilation error",
    },
    {
      title: "Infinite Recursion",
      code: `#include <stdio.h>
  
  void recurse() {
      printf("Recursion\n");
      recurse();
  }
  
  int main() {
      recurse();
      return 0;
  }`,
      explanation: "The function recurse() calls itself indefinitely, leading to stack overflow.",
      output: "Program crashes due to stack overflow",
    },
    {
      title: "Division by Zero",
      code: `#include <stdio.h>
  
  int main() {
      int x = 5, y = 0;
      printf("%d", x / y);
      return 0;
  }`,
      explanation: "Division by zero causes runtime error.",
      output: "Runtime error",
    }, 
    {
        title: "Array Index Out of Bounds",
        code: `#include <stdio.h>
      
        int main() {
            int arr[5] = {1, 2, 3, 4, 5};
            printf("%d", arr[10]); // Accessing out-of-bounds index
            return 0;
        }`,
        explanation: "Accessing an index outside the defined range of the array causes undefined behavior.",
        output: "Undefined behavior or segmentation fault",
      },
      
      {
        title: "Using Uninitialized Variable",
        code: `#include <stdio.h>
      
        int main() {
            int x;
            printf("%d", x); // Using x without initializing
            return 0;
        }`,
        explanation: "The variable 'x' is used without initialization, leading to undefined behavior.",
        output: "Garbage value or unpredictable behavior",
      },
      
      {
        title: "Dangling Pointer Access",
        code: `#include <stdio.h>
        #include <stdlib.h>
      
        int main() {
            int *ptr = (int *)malloc(sizeof(int));
            free(ptr);
            printf("%d", *ptr); // Accessing freed memory
            return 0;
        }`,
        explanation: "Accessing memory after freeing it leads to undefined behavior.",
        output: "Segmentation fault or unpredictable behavior",
      },
      
      {
        title: "Implicit Declaration of Function",
        code: `#include <stdio.h>
      
        int main() {
            print_hello(); // Function not declared before use
            return 0;
        }
      
        void print_hello() {
            printf("Hello, World!");
        }`,
        explanation: "Calling a function before declaring or defining it leads to a compiler error in modern C standards.",
        output: "Compilation error",
      },
      
      {
        title: "Wrong Format Specifier",
        code: `#include <stdio.h>
      
        int main() {
            float num = 3.14;
            printf("%d", num); // Incorrect format specifier for float
            return 0;
        }`,
        explanation: "Using %d for a float variable results in undefined behavior.",
        output: "Garbage value or warning",
      },
      

];
  
  export const dsaProblems = [
    {
      title: "Reverse Number Pattern",
      code: `#include <stdio.h>
  
  int main() {
      int i, j;
      for(i = 5; i >= 1; i--) {
          for(j = i; j >= 1; j--) {
              printf("%d ", j);
          }
          printf("\n");
      }
      return 0;
  }`,
      explanation: "Prints a reverse number pattern.",
      output: "5 4 3 2 1\n4 3 2 1\n3 2 1\n2 1\n1",
    },
    {
      title: "Find Maximum and Minimum",
      code: `#include <stdio.h>
  
  int findMax(int arr[], int n) {
      int max = arr[0];
      for (int i = 1; i < n; i++) {
          if (arr[i] > max)
              max = arr[i];
      }
      return max;
  }
  
  int main() {
      int arr[] = {10, 20, 5, 40, 50};
      int n = sizeof(arr)/sizeof(arr[0]);
      printf("Maximum: %d", findMax(arr, n));
      return 0;
  }`,
      explanation: "Finds the maximum element in an array.",
      output: "Maximum: 50",
    },
    {
      title: "Bubble Sort",
      code: `#include <stdio.h>
  
  void bubbleSort(int arr[], int n) {
      for (int i = 0; i < n - 1; i++) {
          for (int j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  int temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
  }
  
  int main() {
      int arr[] = {64, 34, 25, 12, 22};
      int n = sizeof(arr)/sizeof(arr[0]);
      bubbleSort(arr, n);
      for (int i = 0; i < n; i++) {
          printf("%d ", arr[i]);
      }
      return 0;
  }`,
      explanation: "Sorts an array using bubble sort.",
      output: "12 22 25 34 64",
    },
    {
      title: "Linear Search",
      code: `#include <stdio.h>
  
  int linearSearch(int arr[], int n, int key) {
      for (int i = 0; i < n; i++) {
          if (arr[i] == key)
              return i;
      }
      return -1;
  }
  
  int main() {
      int arr[] = {10, 20, 30, 40, 50};
      int key = 30;
      int n = sizeof(arr)/sizeof(arr[0]);
      int index = linearSearch(arr, n, key);
      printf("Element found at index: %d", index);
      return 0;
  }`,
      explanation: "Searches for an element in an array using linear search.",
      output: "Element found at index: 2",
    },
    {
        "title": "Binary Search",
        "code": `#include <stdio.h>

        int binarySearch(int arr[], int left, int right, int key) {
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] == key)
                    return mid;
                if (arr[mid] < key)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            return -1;
        }

        int main() {
            int arr[] = {10, 20, 30, 40, 50};
            int n = sizeof(arr) / sizeof(arr[0]);
            int key = 30;
            int index = binarySearch(arr, 0, n - 1, key);
            printf("Element found at index: %d", index);
            return 0;
        }`,
        "explanation": "Searches for an element in a sorted array using binary search.",
        "output": "Element found at index: 2"
    },

    {
        "title": "Insertion Sort",
        "code": `#include <stdio.h>

        void insertionSort(int arr[], int n) {
            for (int i = 1; i < n; i++) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
        }

        int main() {
            int arr[] = {50, 30, 40, 10, 20};
            int n = sizeof(arr) / sizeof(arr[0]);
            insertionSort(arr, n);
            for (int i = 0; i < n; i++)
                printf("%d ", arr[i]);
            return 0;
        }`,
        "explanation": "Sorts an array using the insertion sort algorithm.",
        "output": "10 20 30 40 50"
    },

    {
        "title": "Merge Sort",
        "code": `#include <stdio.h>

        void merge(int arr[], int left, int mid, int right) {
            int i, j, k;
            int n1 = mid - left + 1, n2 = right - mid;
            int L[n1], R[n2];
            for (i = 0; i < n1; i++)
                L[i] = arr[left + i];
            for (j = 0; j < n2; j++)
                R[j] = arr[mid + 1 + j];
            i = 0; j = 0; k = left;
            while (i < n1 && j < n2)
                arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
            while (i < n1) arr[k++] = L[i++];
            while (j < n2) arr[k++] = R[j++];
        }

        void mergeSort(int arr[], int left, int right) {
            if (left < right) {
                int mid = left + (right - left) / 2;
                mergeSort(arr, left, mid);
                mergeSort(arr, mid + 1, right);
                merge(arr, left, mid, right);
            }
        }

        int main() {
            int arr[] = {50, 30, 40, 10, 20};
            int n = sizeof(arr) / sizeof(arr[0]);
            mergeSort(arr, 0, n - 1);
            for (int i = 0; i < n; i++)
                printf("%d ", arr[i]);
            return 0;
        }`,
        "explanation": "Sorts an array using the merge sort algorithm.",
        "output": "10 20 30 40 50"
    },

    {
        "title": "Quick Sort",
        "code": `#include <stdio.h>

        void swap(int *a, int *b) {
            int temp = *a;
            *a = *b;
            *b = temp;
        }

        int partition(int arr[], int low, int high) {
            int pivot = arr[high], i = low - 1;
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot)
                    swap(&arr[++i], &arr[j]);
            }
            swap(&arr[i + 1], &arr[high]);
            return i + 1;
        }

        void quickSort(int arr[], int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }

        int main() {
            int arr[] = {50, 30, 40, 10, 20};
            int n = sizeof(arr) / sizeof(arr[0]);
            quickSort(arr, 0, n - 1);
            for (int i = 0; i < n; i++)
                printf("%d ", arr[i]);
            return 0;
        }`,
        "explanation": "Sorts an array using the quick sort algorithm.",
        "output": "10 20 30 40 50"
    },

    {
        "title": "Find Second Largest Element",
        "code": `#include <stdio.h>
        #include <limits.h>

        int findSecondLargest(int arr[], int n) {
            int largest = INT_MIN, secondLargest = INT_MIN;
            for (int i = 0; i < n; i++) {
                if (arr[i] > largest) {
                    secondLargest = largest;
                    largest = arr[i];
                } else if (arr[i] > secondLargest && arr[i] != largest) {
                    secondLargest = arr[i];
                }
            }
            return (secondLargest == INT_MIN) ? -1 : secondLargest;
        }

        int main() {
            int arr[] = {10, 20, 30, 40, 50};
            int n = sizeof(arr) / sizeof(arr[0]);
            int result = findSecondLargest(arr, n);
            printf("Second Largest Element: %d", result);
            return 0;
        }`,
        "explanation": "Finds the second largest element in an array.",
        "output": "Second Largest Element: 40"
    },

    {
        "title": "Check if a Number is Prime",
        "code": `#include <stdio.h>

        int isPrime(int n) {
            if (n < 2) return 0;
            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0)
                    return 0;
            }
            return 1;
        }

        int main() {
            int num = 17;
            if (isPrime(num))
                printf("%d is a Prime Number", num);
            else
                printf("%d is not a Prime Number", num);
            return 0;
        }`,
        "explanation": "Checks whether a given number is prime.",
        "output": "17 is a Prime Number"
    }





  ];
  