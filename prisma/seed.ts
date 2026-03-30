/* eslint-disable @typescript-eslint/no-require-imports */

const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    // Limpeza do banco
    await tx.ingredient.deleteMany();
    await tx.product.deleteMany();
    await tx.menuCategory.deleteMany();
    await tx.restaurant.deleteMany();

    const restaurant = await tx.restaurant.create({
      data: {
        name: "FSW Donalds",
        slug: "fsw-donalds",
        description: "O melhor fast food do mundo",
        avatarImageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy",
        coverImageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQac8bHYlkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
      },
    });

    const combosCategory = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: restaurant.id,
      },
    });

    // Função auxiliar para mapear strings para o formato de criação do Prisma
    const mapIngredients = (ingredients: string[]) => {
      return {
        create: ingredients.map((name) => ({ name })),
      };
    };

    // Para MySQL, não podemos usar createMany com relações aninhadas (ingredients)
    // Precisamos usar .create individualmente ou criar os produtos e depois os ingredientes

    const productsWithIngredients = [
      {
        name: "McOferta Média Big Mac Duplo",
        description:
          "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim, acompanhamento e bebida.",
        price: 39.9,
        imageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQaHB8tslkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurant.id,
        ingredients: [
          "Pão com gergilim",
          "Hambúrguer de carne 100% bovina",
          "Alface americana",
          "Queijo fatiado sabor cheddar",
          "Molho especial",
          "Cebola",
          "Picles",
        ],
      },
      {
        name: "Novo Brabo Melt Onion Rings",
        description:
          "Dois hambúrgueres de carne 100% bovina, méquinese, a exclusiva maionese especial com sabor de carne defumada, onion rings, fatias de bacon, queijo processado sabor cheddar, o delicioso molho lácteo com queijo tipo cheddar tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória! Acompanhamento e Bebida.",
        price: 41.5,
        imageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQeGQofnEPyQaHEV2WL8rGUs41oMICtYfNkphl",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurant.id,
        ingredients: [
          "Pão tipo brioche",
          "Hambúrguer de carne 100% bovina",
          "Méquinese",
          "Maionese especial com sabor de carne defumada",
          "Onion rings",
          "Fatias de bacon",
          "Queijo processado sabor cheddar",
          "Molho lácteo com queijo tipo cheddar",
        ],
      },
      // ... adicione os outros produtos aqui seguindo o mesmo padrão
    ];

    for (const product of productsWithIngredients) {
      await tx.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          imageUrl: product.imageUrl,
          menuCategoryId: product.menuCategoryId,
          restaurantId: product.restaurantId,
          ingredients: mapIngredients(product.ingredients),
        },
      });
    }

    // Exemplo para categorias que não possuem ingredientes (Fritas, Bebidas, Sobremesas)
    // Aqui você pode continuar usando createMany pois o array de ingredients está vazio no schema
    const frenchFriesCategory = await tx.menuCategory.create({
      data: { name: "Fritas", restaurantId: restaurant.id },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Fritas Grande",
          description: "Batatas fritas crocantes e sequinhas.",
          price: 10.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQNd3jSNrcJroaszwjUAlM6iSO5ZTx2HV70t31",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    // ... Repita para Bebidas e Sobremesas conforme seu arquivo original
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
