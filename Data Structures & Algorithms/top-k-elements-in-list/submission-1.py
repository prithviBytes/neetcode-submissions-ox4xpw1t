class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency = {}
        for num in nums:
            frequency[num] = frequency.get(num, 0) + 1
        maxFreq = max(frequency.values())
        bucket = [[] for _ in range(maxFreq + 1)]
        res = []
        for key,v in frequency.items():
            bucket[v].append(key)
        for i in range(maxFreq, 0, -1):
            bucket[i].sort(reverse=True)
            for num in bucket[i]:
                res.append(num)
                if k == len(res):
                    return res
        return res