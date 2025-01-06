// ------------------------------------------------------------------------------
// 📌 중첩된 객체 (Nested Objects)
// ⭐️ URL : https://bit.ly/3hG16SY
// ------------------------------------------------------------------------------
// - 객체가 객체를 중첩하더라도, 타입 에너테이션 작성 방법은 동일합니다.
// ------------------------------------------------------------------------------

// 아래 작성된 코드의 타입 별칭, 에너테이션을 설정합니다.

{
  type MovieTitle = {
    ko: string;
    en: string;
  };

  type Movie = {
    title: MovieTitle;
    releaseDate: number;
    director: string;
    summary: string;
    price: number;
    vat: number;
  };

  const movieAinbo: Movie = {
    title: {
      ko: '아인보: 아마존의 전설',
      en: 'AINBO: SPIRIT OF THE AMAZON',
    },
    releaseDate: 2001,
    director: '호세 젤라다, 리처드 클라우스',
    summary: `...`,
    price: 22_000,
    vat: 0.1,
  };

  const movieHaeulbin: Movie = {
    title: {
      ko: '하얼빈',
      en: 'Haeulbin',
    },
    releaseDate: 2001,
    director: '호세 젤라다, 리처드 클라우스',
    summary: `...`,
    price: 22_000,
    vat: 0.1,
  };

  const printMovieTitle = (movie) => {
    let { title } = movie;
    console.log(`${title.ko} (${title.en})`);
  };

  const calcurateMoviePrice = (movie) => {
    let { price, vat } = movie;
    return price + price * vat;
  };

  printMovieTitle(movieAinbo);
  calcurateMoviePrice(movieAinbo);
}
