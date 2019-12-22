//  https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
let maxHeight =0;
let inputWord = [...word.toLowerCase()];
let index;
for(let i=0;i<inputWord.length;i++){
  index = inputWord[i].charCodeAt(0)-97;
if(h[index]>maxHeight){
maxHeight = h[index];
}
}
return maxHeight * inputWord.length;
}

