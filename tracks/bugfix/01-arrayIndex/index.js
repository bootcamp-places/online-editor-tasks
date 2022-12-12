export const arrayIndex = (rating = []) => {
    var resultRating = 0;
    var ratingLength = rating.length;

    if (ratingLength) {
        for (var index = 1; index < rating; index += 1) {
          resultRating += rating[index];
        }
    }

    return resultRating || 0;
};
