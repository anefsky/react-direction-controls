
class Utils {
    static getRandomItemFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

export default Utils;