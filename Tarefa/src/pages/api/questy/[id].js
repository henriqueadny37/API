export default function quest(req, res) {
    if(req.method === "GET") {
        const id = req.query.id
        res.status(200).json({ 
            id,
            enunciado: 'whats your favorite food?',
            respostas: [
                'Pizza', 'Cake', 'Cooks', 'Salad'
            ] 
        })
    } else{
        res.status(405) .send()
    }
}