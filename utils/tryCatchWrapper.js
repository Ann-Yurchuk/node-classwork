const middleWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  middleWrapper,
};

// const catchAsyncWrapper3 = (fn) => {
//   return async (...args) => {
//     try {
//       // await fn(...args);
//       await fn.apply(null, args);
//     } catch (error) {
//       console.log();
//     }
//   };
// };

// const catchAsyncWrapper4 = (fn) => {
//   return async function () {
//     try {
//       fn.apply(null, arguments);
//     } catch (error) {
//       console.log();
//     }
//   };
// };
