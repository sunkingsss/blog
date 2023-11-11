function BinarySearch(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}
