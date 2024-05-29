const con = require('../config/connection');


exports.view = (req, res) => {

    var name = "hasan";
    var address = "Baalbeck";
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //     if (err) {
    //         // throw err;
    //         console.log("Table failed");
    //         return res.status(400).json({
    //             success: false,
    //             err
    //         })
    //     } else {
    console.log("Table created");

    

    // var sqle = `INSERT INTO customers (name, address) VALUE('${name}','${address}')`;
    // var sqle = "INSERT INTO customers (name, address) VALUE('" + name + "','" + address + "')";
    var sqle = "INSERT INTO customers (name, address) VALUE ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
    con.query(sqle, [values], function (err, result) {
        if (err) {
            // throw err;
            console.log("Table failed");
            return res.status(400).json({
                success: false,
                err,
                
            })
        } else {
            console.log("1 record inserted");
            return res.status(200).json({
                success: true,
                page: "viewed"
            })
        }
    });


    // }
    // })

}

exports.viewED = (req, res,) => {
    return res.status(200).json({
        success: true,
        page: "viewedddddddddddddddd"
    })
}