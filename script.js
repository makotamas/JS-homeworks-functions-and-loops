// Task 1
const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti' ];

function selectGabor () {
    for (let i = 0; i < names.length; i++) {
        if ( names[i] === 'Gábor') {
            console.log(`Gábor a ${i+1}. elem a tömbben`);
        }
    }
};

selectGabor();

// Task 2 
const nums = [ 4, 2, 2, 1, 1];

function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    console.log(sum);
  }
  
  sumArray(nums);

// Task 3
const nums2 = [ 'a', 4, 2, 2, 1, 1];

function extendedSumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            console.log(`${arr[i]} is not a number`);
        } else {
            sum += arr[i];
        }
    }
    console.log(sum);
}

extendedSumArray(nums2);

// Task 4 
function extendedSumArray2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            let num = parseInt(arr[i]);
            if (isNaN(num)) {
                console.log(`Conversion failed for ${arr[i]}`);
            } else {
                sum += num;
            }
        } else {
            sum += arr[i];
        }
    }
    console.log(sum);
}

extendedSumArray2(nums2);

