import type { IComment } from '@/interfaces/comment.interface'

export const resultReview = (reviews: IComment[]) => {
  const review_len = reviews?.length
  const review_stars = [
    reviews?.filter((e) => e?.numOfStar == 5).length,
    reviews?.filter((e) => e?.numOfStar == 4).length,
    reviews?.filter((e) => e?.numOfStar == 3).length,
    reviews?.filter((e) => e?.numOfStar == 2).length,
    reviews?.filter((e) => e?.numOfStar == 1).length
  ]
  const medium_star = (
    review_stars.map((e, id) => e * (5 - id)).reduce((a, b) => a + b) / review_len
  ).toFixed(1)
  return {
    review_len: review_len ?? 0,
    medium_star: review_len == 0 ? 5 : parseFloat(medium_star)
  }
}
