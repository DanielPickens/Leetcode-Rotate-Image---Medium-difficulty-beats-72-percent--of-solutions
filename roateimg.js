var rotate = function(matrix) {
 let length=matrix.length-1;
    for(var i=0;i<=length;i++){
        for(var j=0;j<i;j++){
            let swap=matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=swap;
        }
    }
    
     for(var i=0;i<=length;i++){
        for(var j=0;j<(length+1)/2;j++){
         let swap=matrix[i][j];
            matrix[i][j]=matrix[i][length-j];
            matrix[i][length-j]=swap;
        }
    }
}  




/*

21 / 21 test cases passed.
Status: Accepted
Runtime: 72 ms
Memory Usage: 38.8 MB
Submitted: 0 minutes ago
*/
