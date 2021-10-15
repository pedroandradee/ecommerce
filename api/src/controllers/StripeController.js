require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {
    async payment(req, res){
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "brl"
        }, (stripeErr, stripeRes)=>{
            if(stripeErr){
                return res.status(200).json({
                    Status: "Erro interno, " + stripeErr
                })
            } else {
                return res.status(200).json({
                    Status: "Success, " + stripeRes
                })
            }
        });
    }
}