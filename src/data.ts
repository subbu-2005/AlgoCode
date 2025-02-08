export const errorDetection = [
    {
      title: "Missing Semicolon",
      code: `#include <stdio.h>
  
  int main() {
      printf("Hello, World!")
      return 0;
  }`,
      explanation: "The semicolon (;) is missing after printf statement.",
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
    },
  ];
  
  export const dsaProblems = [
    {
      title: "Reverse an Array",
      code: `#include <stdio.h>
  
  void reverseArray(int arr[], int n) {
      for (int i = n-1; i >= 0; i--) {
          printf("%d ", arr[i]);
      }
  }
  
  int main() {
      int arr[] = {1, 2, 3, 4, 5};
      int n = sizeof(arr)/sizeof(arr[0]);
      reverseArray(arr, n);
      return 0;
  }`,
      explanation: "This function reverses and prints an array.",
    },
    {
      title: "Find Maximum in an Array",
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
      int arr[] = {10, 20, 30, 40, 50};
      int n = sizeof(arr)/sizeof(arr[0]);
      printf("Maximum: %d", findMax(arr, n));
      return 0;
  }`,
      explanation: "This function finds the maximum element in an array.",
    },
  ];
  