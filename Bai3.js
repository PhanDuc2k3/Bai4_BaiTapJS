function removeArgsFromArray(arr, ...args) {
    return arr.filter(item => !args.includes(item));//hàm loại bỏ các phần tử của arr có giá trị trùng với bất kỳ đối số nào được truyền vào.
  }

console.log(removeArgsFromArray([1,2,3,4],1,2));