class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //for every element in array
            //sort asc  

        // Identify similar
            // sort to make same
        // Put together same
        // Display same

        // strs = ["act","pots","tops","cat","stop","hat"]
        // let ans = [];
        // sort every elemnt e.g cat will become act
        // for(let i=0; i < strs.length; i++){
        //     ans[i] = strs[i].split("").sort().join("");
        // }
        // strs = ["act","pots","tops","cat","stop","hat"]
        // ans = ["act","opts","opts","act","opts","aht"]

        //sort full array so similar are together
        // ans.sort();

        //["hat", "act", "act", "stop", "pots", "tops"]
        //[["hat"],["act", "cat"],["stop", "pots", "tops"]]

        // let ans2 = new Map();
        // for(let i=0, j=0; i < strs.length; i++){
        //     ans2.set(j,)
        //     if(ans[i] !== ans[i+1]) j++;
        // } 
        // console.log(ans, ans2)

        let ans2 = new Map();
        for(let i=0, j=0; i < strs.length; i++){
            const key = strs[i].split("").sort().join("");
            const existingValue = ans2.get(key)
            if(existingValue)
                ans2.set(key,[...existingValue, strs[i]])
            else
                ans2.set(key,[strs[i]])
        } 

        return Array.from(ans2.values());       
    }
}
