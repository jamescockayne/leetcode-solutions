/*
 * Student gets award (true) if absences are less than 2 and they are never late 3 consecutive times
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    let a = 0
    let late = 0
    for (let i=0; i<s.length; i++){
        switch (s[i]){
            case 'L':
                late += 1
                break
            case 'A':
                a += 1
                late = 0
                break
            default:
                late = 0
                break
        }
        if (late == 3){return false}
    }
    return (a < 2) ? true : false
};