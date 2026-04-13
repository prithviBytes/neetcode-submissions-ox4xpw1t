class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        a = ord("a")
        hashmap = {}
        for s in strs:
            alpha = [0] * 26
            for char in s:
                alpha[ord(char) - a] += 1
            key = ("").join(str(alpha))
            if key in hashmap:
                hashmap[key].append(s)
            else:
                hashmap[key] = [s]
        return hashmap.values()


