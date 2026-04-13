class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for i in range(0, len(nums)):
            if nums[i] in map:
                return True
            else:
                map[nums[i]] = 1
        return False