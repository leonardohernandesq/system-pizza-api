
![Banner](https://raw.githubusercontent.com/leonardohernandesq/system-pizza-api/main/assets/banner-1.jpg)


Seja bem-vindo, Esse é o Back-end do sistema de pizzaria

Abaixo listarei o passo a passo para que você possa utilizar o meu projeto para estudos!





## Passo a Passo

Para a utilização desse sistema você tera que

- Clonar o repositório desse back-end

- Rode um yarn install para instalar todas as dependências usadas

- Criar um banco de dados com postgreSQL

- Acesse o site MD5 Hash Generator e crie uma hash com a senha que quiser para usar no JWT_SECRET

- Criar um arquivo .venv e alterar as váriaveis de ambiente conforme sua necessidade


![App Screenshot](https://raw.githubusercontent.com/leonardohernandesq/system-pizza-api/main/assets/env.jpeg)


## Documentação da API

#### Cadastra um novo usuário

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `email` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |


#### Logando um usuário

```http
  POST /session
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

#### Aqui a api retornará um token que será usado para acessar o restante das requisições.
---------------------
#### Pegando detalhes do usuário

```http
  GET /me
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Token`      | `string` | **Obrigatório**. O Token do usuário |
| `Prefix`      | `string` | **Obrigatório**. Bearer é o prefixo configurado |


# Daqui para baixo todas as requisições necessitam do Bearer Prefix

#### Criando Categorias

```http
  POST /category
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Ex. Pizzas |


#### Listando as Categorias

```http
  GET /category
```

#### Criando um produto

```http
  POST /product
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do produto |
| `price`      | `number` | **Obrigatório**. O preço do produto |
| `description`      | `string` | **Obrigatório**. Qual a descrição do produto |
| `file`      | `file` | **Obrigatório**. A imagem de banner do produto |
| `category_id`      | `string` | **Obrigatório**. O ID da categoria que representa |



#### Listando os produtos de uma categoria

```http
  GET /category/product
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria |

#### Listar todas as mesas

```http
  GET /orders
```



#### Detalhes de uma mesa

```http
  GET /order/detail
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `order_id`      | `string` | **Obrigatório**. O ID da mesa |




#### Criar uma mesa

```http
  POST /order
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `table`      | `number` | **Obrigatório**. O numero da mesa desejada |




#### Adicionar item em uma mesa

```http
  POST /order/add
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `order_id`      | `string` | **Obrigatório**. O ID da mesa que quer adicionar |
| `product_id`      | `string` | **Obrigatório**. O ID do produto que vai adicionar|
| `amount`      | `number` | **Obrigatório**. O ID do item que você quer |




#### Muda o status da mesa para true enviando o pedido para a cozinha

```http
  PUT /order/send
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `order_id`      | `string` | **Obrigatório**. O ID da mesa |




#### Fecha uma mesa

```http
  PUT /order/finish
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `order_id`      | `string` | **Obrigatório**. O ID da mesa |




#### Remove um item de uma mesa

```http
  DELETE /order/remove
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `item_id`      | `string` | **Obrigatório**. O ID do item que você quer remover |




#### Remove uma mesa

```http
  DELETE /order
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `order_id`      | `string` | **Obrigatório**. O ID da mesa que quer remover |




## Confira também nosso Front-End

- Sistema Web (https://github.com/leonardohernandesq/system-pizzaria/tree/main/frontend)

- Aplicativo Móvel (https://github.com/leonardohernandesq/system-pizzaria/tree/main/mobile)


## Autores

- [Leonardo Hernandes](https://www.github.com/leonardohernandesq)

- Sujeito Programador - A ideia desse projeto foi tirada do curso do Sujeito Programador
