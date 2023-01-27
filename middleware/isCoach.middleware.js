isCoach = (req, res, next) => {
    const { payload } = req;
    if (payload.role !== "coach") {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    next();
}
