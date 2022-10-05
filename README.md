# mpa2
Repositório para a implementação de ferramenta de mineração de processos para a disciplina de Seminários em Gerenciamento de Dados e Informação.

# Para executar o back-end

> Você deverá ter o Docker instalado em sua máquina

1. Na pasta contendo o back-end, execute o seguinte comando
```bash
docker build -t bob . && docker run -d --name bob_container -p 8081:8081 bob
```


# Para executar o front-end

> Você deverá ter o Node.js instalado em sua máquina  

1. Na pasta contendo o front-end, instale as depências usando
  
```bash
npm ci
```

2. Após a instalação, execute o comando
```bash
npm start
```
Pronto, a interface será executada e poderá ser acessada com o link exibido no terminal 
