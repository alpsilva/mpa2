# mpa2
Repositório para a implementação de ferramenta de mineração de processos para a disciplina de Seminários em Gerenciamento de Dados e Informação.

# Para executar o back-end

> Você deverá ter o Docker instalado em sua máquina.

> O terminal deve estar aberto na pasta do back-end.

Na pasta contendo o back-end, execute os seguintes comandos em sequência.
1. Remova containers antigos. Caso essa seja a sua primeira vez rodando a aplicação, nenhum container com esse nome será encontrado. Isso é esperado.
```bash
docker rm -f bob_container
```

2. Construa o container
```bash
docker build -t bob .
```

3. Execute o container
```bash
docker run --rm -d --name bob_container -p 8081:8081 bob
```

> Caso deseje ver o output do backend pelo terminal, basta remover o "-d" do comando anterior. Para parar a execução do container executado dessa forma, é possível utilizar o comando "ctrl+c"

# Para executar o front-end

> Você deverá ter o Node.js instalado em sua máquina.

> O terminal deve estar aberto na pasta do front-end.

1. Na pasta contendo o front-end, instale as depências usando
  
```bash
npm install
```

2. Após a instalação, execute o comando
```bash
npm start
```
Pronto, a interface será executada e poderá ser acessada com o link exibido no terminal 
