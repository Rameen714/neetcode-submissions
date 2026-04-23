class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //use a hashmap. 
        //store every elemnt in hashmap

        const myMap = new Map();
        for(let i=0;i<nums.length;i++){
            const value = myMap.get(nums[i]) || 0
            myMap.set(nums[i],value+1)
        }

        for(const [key,value] of myMap)
            if(value > 1)
                return true;        

        return false;
    }
}
