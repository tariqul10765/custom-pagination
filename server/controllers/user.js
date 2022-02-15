const db = require('../database/connection')
/**
 * GET USER
 */
exports.getUserLists = async (req, res, next) => {
    let resultsPerPage = req.query.limit;
    let sql = 'SELECT * FROM user';


    db.query(sql, (err, result) => {
        if (err) throw err;

        const numOfResults = result.length;
        const numberOfPages = Math.ceil(numOfResults / resultsPerPage);

        let page = req.query.page ? Number(req.query.page) : 1;
        if (page > numberOfPages) {
            page = numberOfPages
        } else if (page < 1) {
            page = 1
        }

        //Determine the SQL LIMIT starting number
        const startingLimit = (page - 1) * resultsPerPage;
        //Get the relevant number of users info for this starting page
        sql = `SELECT * FROM user LIMIT ${startingLimit},${resultsPerPage}`;

        db.query(sql, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                message: 'User list fetch successfully!',
                data: result,
                page,
                numOfResults,
                numberOfPages
            });
        });
    })
}
