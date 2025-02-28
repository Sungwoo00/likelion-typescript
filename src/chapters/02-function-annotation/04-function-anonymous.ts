// ---------------------------------------------------------------------------------
// 📌 익명 함수와 타입(Anonymous Function & Type)
// ⭐️ URL : https://bit.ly/3E3YDtk
// ---------------------------------------------------------------------------------
// - 익명 함수가 실행될 때 TypeScript는 매개변수 타입을 자동 추론합니다.
// ---------------------------------------------------------------------------------

{
  let names = ['혜수', '민기', '하영', '상구', '덕진'];

  names = names.map((name: string): string => {
    return `${names}님`;
  });
}

{
  let colors = 'hotpink darkred skyblue'.split(' ');

  // 타입 에너테이션을 지정하지 않아도 오류가 발생하는 이유
  // 익명 함수와 타입 추론
  const colorsWithSeperator = colors
    .map((color) => {
      return color;
    })
    .join(' - ');
}
