// const con =require('../config/connection');

// exports.put=(req,res)=>{
//     var sql=(`update Customers set address ="baalbeck" where address ="Valley 345" `);
    
//     con.query(sql,function(err,result){
        
//         if (err) {
//             // throw err;
//             console.log("Table failed");
//             return res.status(400).json({
//                 success: false,
//                 err
//             })
//         } else {
//             console.log("Table updated");
//             return res.status(200).json({
//                 success:true,
//                 result
                
//             })
           
//         }
//     })
// }

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
