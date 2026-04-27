class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //data structures
        //array
        //hashmap
        
        //i want to compare two numbers from same array
        //but i dont want to do double loops which is O(n2)
        // for(let i=0; i<nums.length; i++){
        //     for(let j=nums.length; j>0; j--){
        //         if(nums[i]+nums[j] === target)
        //             return [i,j]
        //     }   
        // }

        //what does map helps in?
        //how does map helps in O(1) here ?

        //i need to compare every number with every other number 
        //key: index , value: number
        //becuase i need to retun indices which contain that number
        const map = new Map();
        for(let i=0; i<nums.length; i++){
            const complement = target-nums[i];
            const index = map.get(complement);
            if(index !== undefined){
                return [i,index];
            }
            map.set(nums[i],i);
        }

        //nums = [3,4,5,6], target = 7
        // nums=[2,5,5,11]
        // imagine this is a map
        //{
        // 0: 2,
        // 1: 5,
        // 2: 5,
        // 3: 11
        // }

        //{
        // 3: 0,
        // 4: 1,
        // 5: 2,
        // 6: 3
        // }
        // start from 0 index if map(nums[i] - target)
        // for(let i=0; i<nums.length; i++){
        //     const index = map.get(target-nums[i]);
        //     if(index!=i)
        //         return [i,index]
        // }         
    }
}
