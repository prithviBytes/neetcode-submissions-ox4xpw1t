class Solution:
    # def productExceptSelf(self, nums: List[int]) -> List[int]:
    #     n = len(nums)
    #     prefProduct = [1] * n 
    #     sufproduct = [1] * n
    #     res = [0] * n

    #     for i in range(1, n):
    #         prefProduct[i] = nums[i - 1] * prefProduct[i - 1]
        
    #     for j in range(n - 2, -1, -1):
    #         sufproduct[j] = nums[j + 1] * sufproduct[j + 1]
        
    #     for i in range(0, n):
    #         res[i] = prefProduct[i] * sufproduct[i]

    #     return res
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prod = 1
        zeroes = 0
        idx = -1

        res = [0] * n

        for i in range(0, n):
            if nums[i] == 0:
                zeroes += 1
                idx = i
            else:
                prod *= nums[i]
        
        if zeroes == 0:
            for i in range(0, n):
                res[i] = prod // nums[i]
        elif zeroes == 1:
            res[idx] = prod
        return res