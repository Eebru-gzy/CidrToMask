export const health = (req, res) => {
  return  res.send('OK');
}
export const healthier = (req, res, next) => {
        res.send('More Health');
        next();
  }
