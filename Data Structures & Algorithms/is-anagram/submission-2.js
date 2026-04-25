class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //check of length wont work here
        //set could fail here, 
            //set might be equal but actual letters might not be exact in count        
            // r,r,a
            // r,a,a
            // set = [r,a]

        //this solution cannot handle duplicates ?
            // const ab = s.split("")
            // const cd = t.split("")
            //return !ab.some((digit)=> !cd.includes(digit))

        //sort and set would be better but 
        //time complexity will be O(nlgn) at least depending on sorting algo
        // return s.split("").sort().join("") == t.split("").sort().join("");

        if(s.length !== t.length)
            return false

        //Time complexity O(n)
        //Map of (key: number, value: count)
        const sa = new Map();

        for(let i = 0; i < s.length; i++){
            sa.set(s[i],(sa.get(s[i]) || 0) + 1);
        }

        //now we need to check frequencies
        for(let i = 0; i < s.length; i++){
            if(!sa.get(t[i]))
                return false;
            sa.set(t[i], sa.get(t[i]) - 1)
        }


        return true;
    }
}
