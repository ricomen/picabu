import { RestSerializer } from "miragejs"

const mockServer = {
    serializers: {
      reminder: RestSerializer.extend({
        include: ["list"],
        embed: true,
      }),
    },

  routes() {
    this.get(
      "api/title",
      () => ({
          Picabu_Title: "Заголовочек с сервера",
      }),
      { timing: 1000 }
    )

    this.get(
      "api/posts",
      () => ({
        Posts: [
          { Id: 1, Title: "Заголовок Один", Content: "Текст новости один", Rating: 12 },
          { Id: 2, Title: "Второй заголовок", Content: "Второй новости текст", Rating: 22 },
          { Id: 3, Title: "Третья новость", Content: "Третья новость и ее содержимое", Rating: 49 },
        ],
      }),
      { timing: 1000 }
    )
  },
};

export default mockServer;