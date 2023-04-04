// 모듈 만들기
export function add(x,y){
    return x+y;
}
export function subtract(x,y){
    return x-y;
}
export function multiply(x,y){
    return x*y;
}

// 기본 모듈로 내보내기 -> 모듈을 만드는 다른 방법
// export default {
//   add: add,
//   subtract: subtract,
// };