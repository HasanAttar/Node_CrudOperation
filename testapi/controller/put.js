

const con = require('../config/connection');

exports.put = (req, res) => {
    const { id, name, address } = req.body;
    const sql = `UPDATE customers SET name=?, address=? WHERE id=?`;

    con.query(sql, [name, address, id], (err, result) => {
        if (err) {
            console.log("Table update failed:", err);
            return res.status(400).json({
                success: false,
                error: "Failed to update customer"
            });
        } else {
            console.log("Table updated");
            return res.status(200).json({
                success: true,
                result
            });
        }
    });
};
