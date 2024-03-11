const events = {
  data() {
    return {
      events: [
        {
          id: 1,
          date: "24 июн 2023 в 11:30",
          place: "Кинозал «Луч»",
          img: '<img src="/images/afisha (1).svg" alt="img">',
          h3: "#ГолосКадра: ИЮНЬ",
          p: "#ГолосКадра",
          buy: "Подробнее"
        },
        {
          id: 2,
          date: "18 июн 2023 – 25 июн 2023",
          place: "Фойе 2 этажа",
          img: '<img src="/images/afisha (2).png" alt="img">',
          h3: "Дворцы и корабли 4.0",
          p: "#Выставка #Пушкинская карта",
          buy: "Подробнее"
        },
        {
          id: 3,
          date: "18 июн 2023 в 19:00",
          place: "Большой зал",
          img: '<img src="/images/afisha (3).svg" alt="img">',
          h3: "Валентинов день",
          p: "#Спектакль",
          buy: "Купить билет"
        },
        {
          id: 4,
          date: "5 авг 2023 в 18:00",
          place: "УКРК «Арена-2000» – г. Ярославль, ул. Гагарина, 15  ",
          img: '<img src="/images/afisha (4).svg" alt="img">',
          h3: "Дискотека СССР",
          p: "#Концерт",
          buy: "Купить билет"
        },
        {
          id: 5,
          date: "19 сен 2023 в 19:00",
          place: "Большой зал",
          img: '<img src="/images/afisha (5).png" alt="img">',
          h3: "Марина Бриз",
          p: "#Концерт",
          buy: "Купить билет"
        },
        {
          id: 6,
          date: "28 июн 2023 в 18:00",
          place: "Большой зал",
          img: '<img src="/images/afisha (6).svg" alt="img">',
          h3: "«12»",
          p: "#Спектакль #Пушкинская карта #Скидка 10%",
          buy: "Купить билет"
        },
        {
          id: 7,
          date: "24 июн 2023 в 11:30",
          place: "Кинозал «Луч»",
          img: '<img src="/images/afisha (1).svg" alt="img">',
          h3: "#ГолосКадра: ИЮНЬ",
          p: "#ГолосКадра",
          buy: "Подробнее"
        },
        {
          id: 8,
          date: "18 июн 2023 – 25 июн 2023",
          place: "Фойе 2 этажа",
          img: '<img src="/images/afisha (2).png" alt="img">',
          h3: "Дворцы и корабли 4.0",
          p: "#Выставка #Пушкинская карта",
          buy: "Подробнее"
        },
        {
          id: 9,
          date: "18 июн 2023 в 19:00",
          place: "Большой зал",
          img: '<img src="/images/afisha (3).svg" alt="img">',
          h3: "Валентинов день",
          p: "#Спектакль",
          buy: "Купить билет"
        },
        {
          id: 10,
          date: "5 авг 2023 в 18:00",
          place: "УКРК «Арена-2000» – г. Ярославль, ул. Гагарина, 15  ",
          img: '<img src="/images/afisha (4).svg" alt="img">',
          h3: "Дискотека СССР",
          p: "#Концерт",
          buy: "Купить билет"
        },
        {
          id: 11,
          date: "19 сен 2023 в 19:00",
          place: "Большой зал",
          img: '<img src="/images/afisha (5).png" alt="img">',
          h3: "Марина Бриз",
          p: "#Концерт",
          buy: "Купить билет"
        },
        {
          id: 12,
          date: "28 июн 2023 в 18:00",
          place: "Большой зал",
          img: '<img src="/images/afisha (6).svg" alt="img">',
          h3: "«12»",
          p: "#Спектакль #Пушкинская карта #Скидка 10%",
          buy: "Купить билет"
        }
      ],
    };
  },
  methods: {

  },
  template: `<div class="homepage__afisha__event" v-for="item in events" :key="events.id" >
  <div class="homepage__afisha__event__head">
    <p class="homepage__afisha__event__head__date">{{item.date}}</p>
    <p class="homepage__afisha__event__head__place">{{item.place}}</p>
  </div>
  <div class="homepage__afisha__event__img" v-html="item.img"></div>
  <div class="homepage__afisha__event__heading">{{item.h3}}</div>
  <div class="homepage__afisha__event__discription">{{item.p}}</div>
  <div class="homepage__afisha__event__buy">
    <p class="homepage__afisha__event__buy__text">{{item.buy}}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7 14L6.0172 13.0313L11.3591 7.68937H0V6.31063H11.3591L6.0172 0.968672L7 0L14 7L7 14Z"
        fill="#2F2F2F"
      />
    </svg>
  </div>
</div>`
}

