const express = require('express');
const app = express();
const Joi = require('joi');
const baseUrl = "/numbers";

let numArr = [1, 2, 3, 4, 5, 6];
app.use(express.json());

app.get(baseUrl, (req, res) => {
    res.send(numArr);
});
app.post(baseUrl, (req, res) => {
    const schema = Joi.object({
        num: Joi.number().integer().min(1).max(100000).required()
    })

    const result = schema.validate(req.body);
    console.log(result.value);
    if (result.error) {
        res.send(result.error.details[0].message);
        return
    }
    numArr.push(req.body.num);
    numArr.sort((a, b) => a - b);
    res.send('success using post ' + JSON.stringify(numArr));
});
app.put(baseUrl + "/:index", (req, res) => {
    const { index } = req.params;
    numArr[index] = req.body.num;
    res.send('success using put ' + numArr);
});
app.delete(baseUrl + "/:index", (req, res) => {
    const { index } = req.params;
    numArr.splice(index, index);
    res.send('success using delete ' + numArr);
});

process.env.PORT = 7500;
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("listen to port" + PORT));