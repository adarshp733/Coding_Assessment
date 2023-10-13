package com.pattern;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        
        scanner.close();
    }

    public static boolean isPangram(String input) {
        // Create a set to store encountered alphabets
        Set<Character> alphabetSet = new HashSet<>();
        
        // Convert the input to lowercase for case-insensitive checking
        input = input.toLowerCase();
        
        // Iterate through the characters of the input string
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                alphabetSet.add(ch); // Add the alphabet to the set
            }
        }
        
        // Check if the set contains all 26 alphabets
        return alphabetSet.size() == 26;
    }
}

