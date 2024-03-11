const news = {
  data() {
    return {
      newsData: [
        {
          id: 1,
          p: "60 лет со дня полета в космос первой женщины-космонавта В.В.Терешковой",
          date: "16 июня 2023"
        },
        {
          id: 2,
          p: "Информация о гала-спектакле Всероссийской оперной академии «Молодая опера Ярославля»",
          date: "14 июня 2023"
        },
        {
          id: 3,
          p: "Директор ГАУК ЯО «Концертно-зрелищный центр» И.А. Сидоренко награжден почетным знаком А.П. Мельгунова",
          date: "6 июня 2023"
        },
        {
          id: 4,
          p: "Знание. Герои",
          date: "29 мая 2023"
        },


      ],
    };
  },
  methods: {

  },
  template: `<div v-for="item in newsData" :key="newsData.id">
  <div class="homepage__news__article">
    <p class="homepage__news__article__date">{{item.date}}</p>
    <a href="#" class="homepage__news__article__news">
      {{item.p}}
    </a>
  </div>

</div>`
}

