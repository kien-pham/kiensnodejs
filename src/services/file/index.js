import fs from 'fs'

const readFile = (file) => {
    return new Promise((res, rej) => {
        fs.readFile(file, (err, data) => {
            if(err) return rej(err)
            else return res(data)
        })
    })
}

export{
    readFile
}