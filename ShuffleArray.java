package com.pattern;

import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        
        System.out.println("Original Array: " + Arrays.toString(arr));

        // Shuffle the array
        shuffleArray(arr);

        System.out.println("Shuffled Array: " + Arrays.toString(arr));
    }

    public static void shuffleArray(int[] arr) {
        Random rand = new Random();
        for (int i = arr.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1); // Generate a random index between 0 and i
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
