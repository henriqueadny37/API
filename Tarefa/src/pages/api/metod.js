export default(req, res) =>{
    if(req.method === 'GET'){
        res.status(200).json({
            nome: "é um GET"
        })
    } else{
        res.status(200).json({
            nome: "é um POST, não GET :)"
        })
    }
}
