class Leitor {
    Ler(caminho){
        return "conteudo do arquivo";
    }
}

class Escritor{
    Escrever(arquivo,conteudo){
        console.log("Conteudo escrito");

    }
}

class Criador{
    Criar(name){
        console.log("Arquivo criado com sucesso");

    }
}

class Delete{
    Deletar(name){
        console.log("Deletando arquivo");
    }
}

class ManipuladorArquivo{
    constructor(name){
        this.arquivo = name;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.delete = new Delete();
    }
}



var manipulador = new ManipuladorArquivo("meuarquivo.txt");

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.delete.Deletar();