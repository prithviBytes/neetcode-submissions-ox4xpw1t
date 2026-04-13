class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        hashmap = {}
        for char in s:
            if char in hashmap:
                hashmap[char] = hashmap[char] + 1
            else:
                hashmap[char] = 1
        
        for char in t:
            if char in hashmap and hashmap[char] > 0:
                hashmap[char] = hashmap[char] - 1
            else:
                return False

        for value in hashmap.values():
            if value != 0:
                return False

        return True