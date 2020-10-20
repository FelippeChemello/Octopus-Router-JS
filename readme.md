# Octopus Router JS

## Preparações / Pontos de Atenção

-   O Arquivo de rotas de sua aplicação deve ser responsável por middlewares e tratamento de erro e deve exportar por default um `Router` do express
-   Sua aplicão será carregada a partir do arquivo de Rotas, ou seja, importe arquivos globais, como conexão com banco de dados, tratamento de erros etc. apenas a partir deste arquivo
-   Por default a aplicação está configurada para receber requisições `JSON` e com `CORS` liberado
-   Indicações de caminhos de suas aplicações devem utilizar a biblioteca `path` com uso de `__dirname` para garantir a integridade dos caminhos de sua aplicação, pois como o servidor encontra-se servindo os arquivos de fora de seus projetos, poderá haver desencontros dos caminhos solicitados
    -   Esta configuração é principalmente necessária em declarações de caminhos fixos, como em ORMs, caminho de uploads de arquivos e etc., em testes realizados, importações de arquivos como models e controllers não necessitaram desta alteração.

## Como usar

-   Clonar todos os projetos para a pasta `projects`
-   Adicionar no arquivo `src/routesConfig.js` as rotas desejas no seguinte formato.
    ```json
    {
        pathToEntrypoint: '<Caminho da pasta projects até o arquivo routes de sua aplicação (Não incluir a pasta projects)>',
        entryPointRoutes: '<Nome do arquivo de rotas sem a extensão>',
        path: '<Caminho ao qual será acessado via url>',
    },
    ```
    -   Exemplo mais completo disponível em `src/routesConfig.example.js`
-   Compilar o TypeScript
-   Executar o `index.ts`
-   Alternativamente, em desenvolvimento, basta executar `yarn dev`

## O que este projeto faz?

-   Atua como um redirecionador de requisições, ao receber uma requisição no `path` indicado no arquivo, irá redirecionar para a sua aplicação, sem a necessidade de reconfigurar todas as rotas para, através de um único servidor, atender duas ou mais aplicações isoladas
-   Foi pensado para que, com menos modificações possíveis, possa-se subir diversos projetos desenvolvidos separadamente através de um único servidor
