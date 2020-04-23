const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const router = Router();

router.get('/operators', async (req, res) => {
  const operators = await fs.readFile(
    path.join(__dirname, '..', 'data', 'operators.json'),
    'utf-8',
    (err, data) => {
      if (err) {
        throw err;
      } else {
        const operatorsParsed = JSON.parse(data);
        setTimeout(() => res.json(operatorsParsed), 1500);
      }
  });
});

router.get('/operators/:id', async (req, res) => {
  const operators = await new Promise(async (resolve, reject) => {
    await fs.readFile(
      path.join(__dirname, '..', 'data', 'operators.json'),
      'utf-8',
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(operatorsParsed = JSON.parse(data));
        }
    });
  });
  const operator = operators.find(operator => +req.params.id === +operator.id);
  res.json(operator);
});

router.get('/result', async (req, res) => {
  const random = Math.round(Math.random() * 100);
  const msg = random > 50 ? 'success' : 'failure';
  const response =await Promise.resolve(msg);
  res.json(response);
})

module.exports = router;