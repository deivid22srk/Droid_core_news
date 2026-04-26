const ftp = require("basic-ftp")
const path = require("path")

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "ftpupload.net",
            user: "if0_41753144",
            password: "Ynf9VeOnOy",
            secure: false
        })
        console.log("Conectado ao FTP!")
        
        // Normalmente hospedagens gratuitas usam htdocs
        await client.ensureDir("htdocs")
        
        console.log("Limpando diretório remoto...")
        await client.clearWorkingDir()
        
        console.log("Enviando arquivos da pasta dist...")
        await client.uploadFromDir(path.join(__dirname, "dist"))
        
        console.log("Upload concluído com sucesso!")
    } catch (err) {
        console.error("Erro no deploy:", err)
    }
    client.close()
}

deploy()
