exports.subs = (req, res) => {
    return res.status(200).json({
        success: true,
        page: "subscribe"
    });
};
